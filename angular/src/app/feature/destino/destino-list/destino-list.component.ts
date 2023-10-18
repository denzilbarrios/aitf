import { Component, OnInit } from "@angular/core";
import { SortType, SelectionType } from "@swimlane/ngx-datatable";
import { DestinoService } from "../destino.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-destino-list",
  templateUrl: "./destino-list.component.html",
  styleUrls: ["./destino-list.component.scss"]
})
export class DestinoListComponent implements OnInit {
  SortType = SortType;
  destinos: any;
  selected = [];
  SelectionType = SelectionType;

  columns = [
    { prop: "id_destino", name: "Id",  width: 9 },
    { prop: "nombre",  width: 250 },
    { prop: "nemonico", width: 9},
    { prop: "km", width: 9},
    { prop: "activo" },
  ];
  constructor(private destinoService: DestinoService, private router: Router) {}
  getAll(): void {
    this.destinoService.getAll().subscribe(
      (data) => {
        console.log(data);
        this.destinos = data;
      },

      (error) => {}
    );
  }
  onSelect(selected: any): void {
    console.log("Select Event", selected, this.selected);
    this.router.navigate(["/destinos/details/" + this.selected[0]._id]);
  }
  ngOnInit(): void {
    this.getAll();
  }
}
