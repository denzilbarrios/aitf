import { Component, OnInit } from "@angular/core";
import { SortType, SelectionType } from "@swimlane/ngx-datatable";
import { EmpleadoService } from "../empleado.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-empleado-list",
  templateUrl: "./empleado-list.component.html",
  styleUrls: ["./empleado-list.component.scss"]
})
export class EmpleadoListComponent implements OnInit {
  SortType = SortType;
  empleados: any;
  selected = [];
  SelectionType = SelectionType;

  columns = [
    { prop: "id_empleado", name: "Id",  width: 9 },
    { prop: "inicialkm",  width: 9 },
    { prop: "finalkm", width: 9},
    { prop: "preciokm", width: 9},
    { prop: "activo" },
  ];
  constructor(private empleadoService: EmpleadoService, private router: Router) {}
  getAll(): void {
    this.empleadoService.getAll().subscribe(
      (data) => {
        console.log(data);
        this.empleados = data;
      },

      (error) => {}
    );
  }
  onSelect(selected: any): void {
    console.log("Select Event", selected, this.selected);
    this.router.navigate(["/empleados/details/" + this.selected[0]._id]);
  }
  ngOnInit(): void {
    this.getAll();
  }
}
