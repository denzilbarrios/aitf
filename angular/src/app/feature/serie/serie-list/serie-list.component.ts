import { Component, OnInit } from "@angular/core";
import { SortType, SelectionType } from "@swimlane/ngx-datatable";
import { SerieService } from "../serie.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-serie-list",
  templateUrl: "./serie-list.component.html",
  styleUrls: ["./serie-list.component.scss"]
})
export class SerieListComponent implements OnInit {
  SortType = SortType;
  series: any;
  selected = [];
  SelectionType = SelectionType;

  columns = [
    { prop: "id_serie", name: "Id",  width: 9 },
    { prop: "descripcion",  width: 250 },
    { prop: "serie", width: 9},
    { prop: "correlativo", width: 9},
    { prop: "activo" },
  ];
  constructor(private serieService: SerieService, private router: Router) {}
  getAll(): void {
    this.serieService.getAll().subscribe(
      (data) => {
        console.log(data);
        this.series = data;
      },

      (error) => {}
    );
  }
  onSelect(selected: any): void {
    console.log("Select Event", selected, this.selected);
    this.router.navigate(["/series/details/" + this.selected[0]._id]);
  }
  ngOnInit(): void {
    this.getAll();
  }
}
