import { Component, OnInit } from "@angular/core";
import { SortType, SelectionType } from "@swimlane/ngx-datatable";
import { KilometrajeService } from "../kilometraje.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-kilometraje-list",
  templateUrl: "./kilometraje-list.component.html",
  styleUrls: ["./kilometraje-list.component.scss"]
})
export class KilometrajeListComponent implements OnInit {
  SortType = SortType;
  kilometrajes: any;
  selected = [];
  SelectionType = SelectionType;

  columns = [
    { prop: "id_kilometraje", name: "Id",  width: 9 },
    { prop: "inicialkm",  width: 9 },
    { prop: "finalkm", width: 9},
    { prop: "preciokm", width: 9},
    { prop: "activo" },
  ];
  constructor(private kilometrajeService: KilometrajeService, private router: Router) {}
  getAll(): void {
    this.kilometrajeService.getAll().subscribe(
      (data) => {
        console.log(data);
        this.kilometrajes = data;
      },

      (error) => {}
    );
  }
  onSelect(selected: any): void {
    console.log("Select Event", selected, this.selected);
    this.router.navigate(["/kilometrajes/details/" + this.selected[0]._id]);
  }
  ngOnInit(): void {
    this.getAll();
  }
}
