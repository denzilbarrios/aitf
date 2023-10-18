import { Component, OnInit } from "@angular/core";
import { SortType, SelectionType } from "@swimlane/ngx-datatable";
import { TipoAgenciaService } from "../tipoAgencia.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-tipoAgencia-list",
  templateUrl: "./tipoAgencia-list.component.html",
  styleUrls: ["./tipoAgencia-list.component.scss"]
})
export class TipoAgenciaListComponent implements OnInit {
  SortType = SortType;
  tipoAgencias: any;
  selected = [];
  SelectionType = SelectionType;

  columns = [
    { prop: "id_tipoAgencia", name: "Id",  width: 9 },
    { prop: "descripcion", name: "Descripcion", width: 250 },
    { prop: "activo" },
  ];
  constructor(private tipoAgenciaService: TipoAgenciaService, private router: Router) {}
  getAll(): void {
    this.tipoAgenciaService.getAll().subscribe(
      (data) => {
        console.log(data);
        this.tipoAgencias = data;
      },

      (error) => {}
    );
  }
  onSelect(selected: any): void {
    console.log("Select Event", selected, this.selected);
    this.router.navigate(["/tipoAgencias/details/" + this.selected[0]._id]);
  }
  ngOnInit(): void {
    this.getAll();
  }
}
