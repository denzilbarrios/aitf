import { Component, OnInit } from "@angular/core";
import { SortType, SelectionType } from "@swimlane/ngx-datatable";
import { ServicioService } from "../servicio.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-servicio-list",
  templateUrl: "./servicio-list.component.html",
  styleUrls: ["./servicio-list.component.scss"]
})
export class ServicioListComponent implements OnInit {
  SortType = SortType;
  servicios: any;
  selected = [];
  SelectionType = SelectionType;

  columns = [
    { prop: "id_servicio", name: "Id",  width: 9 },
    { prop: "descripcion",  width: 250 },
    { prop: "precio", width: 9},
    { prop: "activo" },
  ];
  constructor(private servicioService: ServicioService, private router: Router) {}
  getAll(): void {
    this.servicioService.getAll().subscribe(
      (data) => {
        console.log(data);
        this.servicios = data;
      },

      (error) => {}
    );
  }
  onSelect(selected: any): void {
    console.log("Select Event", selected, this.selected);
    this.router.navigate(["/servicios/details/" + this.selected[0]._id]);
  }
  ngOnInit(): void {
    this.getAll();
  }
}
