import { Component, OnInit } from "@angular/core";
import { SortType, SelectionType } from "@swimlane/ngx-datatable";
import { PuestoService } from "../puesto.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-puesto-list",
  templateUrl: "./puesto-list.component.html",
  styleUrls: ["./puesto-list.component.scss"]
})
export class PuestoListComponent implements OnInit {
  SortType = SortType;
  puestos: any;
  selected = [];
  SelectionType = SelectionType;

  columns = [
    { prop: "id_puesto", name: "Id",  width: 9 },
    { prop: "descripcion",  width: 250 },
    { prop: "activo" },
  ];
  constructor(private puestoService: PuestoService, private router: Router) {}
  getAll(): void {
    this.puestoService.getAll().subscribe(
      (data) => {
        console.log(data);
        this.puestos = data;
      },

      (error) => {}
    );
  }
  onSelect(selected: any): void {
    console.log("Select Event", selected, this.selected);
    this.router.navigate(["/puestos/details/" + this.selected[0]._id]);
  }
  ngOnInit(): void {
    this.getAll();
  }
}
