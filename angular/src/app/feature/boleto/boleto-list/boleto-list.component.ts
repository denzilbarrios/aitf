import { Component, OnInit } from "@angular/core";
import { SortType, SelectionType } from "@swimlane/ngx-datatable";
import { BoletoService } from "../boleto.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-boleto-list",
  templateUrl: "./boleto-list.component.html",
  styleUrls: ["./boleto-list.component.scss"]
})
export class BoletoListComponent implements OnInit {
  SortType = SortType;
  boletos: any;
  selected = [];
  SelectionType = SelectionType;

  columns = [
    { prop: "id_boleto", name: "Id",  width: 9 },
    { prop: "fecha_viaje", name: "Fecha viaje",  width: 9 },
    { prop: "id_horario", name: "Horario", width: 9},
    { prop: "id_ruta", name: "Ruta", width: 9},
    { prop: "dni", name: "DNI", width: 9},
    { prop: "nom_pasajero", name: "Nombre de Pasajero", width: 250},
    { prop: "activo" },
  ];
  constructor(private boletoService: BoletoService, private router: Router) {}
  getAll(): void {
    this.boletoService.getAll().subscribe(
      (data) => {
        console.log(data);
        this.boletos = data;
      },

      (error) => {}
    );
  }
  onSelect(selected: any): void {
    console.log("Select Event", selected, this.selected);
    this.router.navigate(["/boletos/details/" + this.selected[0]._id]);
  }
  ngOnInit(): void {
    this.getAll();
  }
}
