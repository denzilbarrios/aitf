import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-tipoAgencia-details",
  templateUrl: "./tipoAgencia-details.component.html",
  styleUrls: ["./tipoAgencia-details.component.scss"]
})
export class TipoAgenciaDetailsComponent implements OnInit {
  tipoAgencia: any;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  edit(): void {
    this.router.navigate(["/tipoAgencias/edit/" + this.tipoAgencia._id]);
  }
  ngOnInit(): void {
    this.tipoAgencia = this.activatedRoute.snapshot.data.tipoAgenciaDetails;
  }
}
