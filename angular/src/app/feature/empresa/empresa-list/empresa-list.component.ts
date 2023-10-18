import { Component, OnInit } from "@angular/core";
import { SortType, SelectionType } from "@swimlane/ngx-datatable";
import { EmpresaService } from "../empresa.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-empresa-list",
  templateUrl: "./empresa-list.component.html",
  styleUrls: ["./empresa-list.component.scss"]
})
export class EmpresaListComponent implements OnInit {
  SortType = SortType;
  empresas: any;
  selected = [];
  SelectionType = SelectionType;

  columns = [
    { prop: "id_empresa", name: "Id",  width: 9 },
    { prop: "razon_social",  width: 250 },
    { prop: "nit", width: 15},
    { prop: "direccion", width: 250},
    { prop: "telefono", width: 12},
    { prop: "activo" },
  ];
  constructor(private empresaService: EmpresaService, private router: Router) {}
  getAll(): void {
    this.empresaService.getAll().subscribe(
      (data) => {
        console.log(data);
        this.empresas = data;
      },

      (error) => {}
    );
  }
  onSelect(selected: any): void {
    console.log("Select Event", selected, this.selected);
    this.router.navigate(["/empresas/details/" + this.selected[0]._id]);
  }
  ngOnInit(): void {
    this.getAll();
  }
}
