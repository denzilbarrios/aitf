import { Component, OnInit } from "@angular/core";
import { SortType, SelectionType } from "@swimlane/ngx-datatable";
import { FacturaService } from "../factura.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-factura-list",
  templateUrl: "./factura-list.component.html",
  styleUrls: ["./factura-list.component.scss"]
})
export class FacturaListComponent implements OnInit {
  SortType = SortType;
  facturas: any;
  selected = [];
  SelectionType = SelectionType;

  columns = [
    { prop: "id_factura", name: "Id",  width: 9 },
    { prop: "no_documento",  width: 9 },
    { prop: "id_usuario", width: 9},
    { prop: "fecha_doc", width: 9},
    { prop: "nit_cliente", width: 15},
    { prop: "nombre_cliente", width: 250},
    { prop: "total", width: 9},
    { prop: "activo" },
  ];
  constructor(private facturaService: FacturaService, private router: Router) {}
  getAll(): void {
    this.facturaService.getAll().subscribe(
      (data) => {
        console.log(data);
        this.facturas = data;
      },

      (error) => {}
    );
  }
  onSelect(selected: any): void {
    console.log("Select Event", selected, this.selected);
    this.router.navigate(["/facturas/details/" + this.selected[0]._id]);
  }
  ngOnInit(): void {
    this.getAll();
  }
}
