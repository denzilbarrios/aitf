import { Component, OnInit } from "@angular/core";
import { SortType, SelectionType } from "@swimlane/ngx-datatable";
import { HorarioService } from "../horario.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-horario-list",
  templateUrl: "./horario-list.component.html",
  styleUrls: ["./horario-list.component.scss"]
})
export class HorarioListComponent implements OnInit {
  SortType = SortType;
  horarios: any;
  selected = [];
  SelectionType = SelectionType;

  columns = [
    { prop: "id_horario", name: "Id",  width: 9 },
    { prop: "inicialkm",  width: 9 },
    { prop: "finalkm", width: 9},
    { prop: "preciokm", width: 9},
    { prop: "activo" },
  ];
  constructor(private horarioService: HorarioService, private router: Router) {}
  getAll(): void {
    this.horarioService.getAll().subscribe(
      (data) => {
        console.log(data);
        this.horarios = data;
      },

      (error) => {}
    );
  }
  onSelect(selected: any): void {
    console.log("Select Event", selected, this.selected);
    this.router.navigate(["/horarios/details/" + this.selected[0]._id]);
  }
  ngOnInit(): void {
    this.getAll();
  }
}
