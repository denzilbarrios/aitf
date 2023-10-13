import { Component, OnInit } from "@angular/core";
import { SortType, SelectionType } from "@swimlane/ngx-datatable";
import { MunicipioService } from "../municipio.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-municipio-list",
  templateUrl: "./municipio-list.component.html",
  styleUrls: ["./municipio-list.component.scss"]
})
export class MunicipioListComponent implements OnInit {
  SortType = SortType;
  municipios: any;
  selected = [];
  SelectionType = SelectionType;

  columns = [
    { prop: "id_municipio", name: "Id",  width: 250 },
    { prop: "municipio",  width: 250  },
    { prop: "id_depto", width: 9},
    { prop: "id_agc", width: 9},
    { prop: "destino_express"},
    { prop: "activo" },
  ];
  constructor(private municipioService: MunicipioService, private router: Router) {}
  getAll(): void {
    this.municipioService.getAll().subscribe(
      (data) => {
        console.log(data);
        this.municipios = data;
      },

      (error) => {}
    );
  }
  onSelect(selected: any): void {
    console.log("Select Event", selected, this.selected);
    this.router.navigate(["/municipios/details/" + this.selected[0]._id]);
  }
  ngOnInit(): void {
    this.getAll();
  }
}
