import { Component, OnInit } from "@angular/core";
import { SortType, SelectionType } from "@swimlane/ngx-datatable";
import { AgenciaService } from "../agencia.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-agencia-list",
  templateUrl: "./agencia-list.component.html",
  styleUrls: ["./agencia-list.component.scss"]
})
export class AgenciaListComponent implements OnInit {
  SortType = SortType;
  agencias: any;
  selected = [];
  SelectionType = SelectionType;

  columns = [
    { prop: "id_agencia", name: "Id",  width: 9 },
    { prop: "inicialkm",  width: 9 },
    { prop: "finalkm", width: 9},
    { prop: "preciokm", width: 9},
    { prop: "activo" },
  ];
  constructor(private agenciaService: AgenciaService, private router: Router) {}
  getAll(): void {
    this.agenciaService.getAll().subscribe(
      (data) => {
        console.log(data);
        this.agencias = data;
      },

      (error) => {}
    );
  }
  onSelect(selected: any): void {
    console.log("Select Event", selected, this.selected);
    this.router.navigate(["/agencias/details/" + this.selected[0]._id]);
  }
  ngOnInit(): void {
    this.getAll();
  }
}
