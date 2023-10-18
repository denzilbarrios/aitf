import { Component, OnInit } from "@angular/core";
import { SortType, SelectionType } from "@swimlane/ngx-datatable";
import { RutaService } from "../ruta.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-ruta-list",
  templateUrl: "./ruta-list.component.html",
  styleUrls: ["./ruta-list.component.scss"]
})
export class RutaListComponent implements OnInit {
  SortType = SortType;
  rutas: any;
  selected = [];
  SelectionType = SelectionType;

  columns = [
    { prop: "id_ruta", name: "Id",  width: 9 },
    { prop: "nombre",  width: 250 },
    { prop: "nemonico", width: 9},
    { prop: "id_origen", width: 9},
    { prop: "id_destino", width: 9},
    { prop: "no_bus", width: 9},
    { prop: "id_piloto", width: 9},
    { prop: "id_asistente", width: 9},
    { prop: "activo" },
  ];
  constructor(private rutaService: RutaService, private router: Router) {}
  getAll(): void {
    this.rutaService.getAll().subscribe(
      (data) => {
        console.log(data);
        this.rutas = data;
      },

      (error) => {}
    );
  }
  onSelect(selected: any): void {
    console.log("Select Event", selected, this.selected);
    this.router.navigate(["/rutas/details/" + this.selected[0]._id]);
  }
  ngOnInit(): void {
    this.getAll();
  }
}
