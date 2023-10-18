import { Component, OnInit } from "@angular/core";
import { SortType, SelectionType } from "@swimlane/ngx-datatable";
import { FacturaDetalleService } from "../facturaDetalle.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-facturaDetalle-list",
  templateUrl: "./facturaDetalle-list.component.html",
  styleUrls: ["./facturaDetalle-list.component.scss"]
})
export class FacturaDetalleListComponent implements OnInit {
  SortType = SortType;
  facturaDetalles: any;
  selected = [];
  SelectionType = SelectionType;

  columns = [
    { prop: "id_facturaDetalle", name: "Id",  width: 9 },
    { prop: "id_factura",  width: 9 },
    { prop: "id_boleto", width: 9},
    { prop: "descripcion", width: 250},
    { prop: "cantidad", width: 9},
    { prop: "precio_u", width: 9},
    { prop: "subtotal", width: 9},
    { prop: "activo" },
  ];
  constructor(private facturaDetalleService: FacturaDetalleService, private router: Router) {}
  getAll(): void {
    this.facturaDetalleService.getAll().subscribe(
      (data) => {
        console.log(data);
        this.facturaDetalles = data;
      },

      (error) => {}
    );
  }
  onSelect(selected: any): void {
    console.log("Select Event", selected, this.selected);
    this.router.navigate(["/facturaDetalles/details/" + this.selected[0]._id]);
  }
  ngOnInit(): void {
    this.getAll();
  }
}
