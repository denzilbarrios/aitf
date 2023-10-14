import { Component, OnInit } from "@angular/core";
import { SortType, SelectionType } from "@swimlane/ngx-datatable";
import { AgenciaService } from "../agencia.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-agencia-list",
  templateUrl: "./agencia-list.component.html",
  styleUrls: ["./agencia-list.component.scss"]
})
export class AgenciaListComponent implements OnInit {
  SortType = SortType;
  agencias: any;
  selected = [];
  SelectionType = SelectionType;

  columns = [
    { prop: "id_agencia", name: "id",  width: 9 },
    { prop: "nom_agc", name: "Nombre Agencia",  width: 250 },
    { prop: "direc_agc", name: "Dirección",  width: 250 },
    { prop: "tel_agc",  name: "Teléfono", width: 9 },
    { prop: "nombre_comercial", name: "Nombre Comercial",  width: 250 },
    { prop: "activo" },
  ];
  constructor(private agenciaService: AgenciaService, private router: Router) {}
  getAll(): void {
    this.agenciaService.getAll().subscribe(
      (data) => {
        console.log(data);
        this.agencias = data;
      },

      (error) => {}
    );
  }
  onSelect(selected: any): void {
    console.log("Select Event", selected, this.selected);
    this.router.navigate(["/agencias/details/" + this.selected[0]._id]);
  }
  ngOnInit(): void {
    this.getAll();
  }
}
