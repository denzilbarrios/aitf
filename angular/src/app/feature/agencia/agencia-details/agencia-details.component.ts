import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-agencia-details",
  templateUrl: "./agencia-details.component.html",
  styleUrls: ["./agencia-details.component.scss"]
})
export class AgenciaDetailsComponent implements OnInit {
  agencia: any;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  edit(): void {
    this.router.navigate(["/agencias/edit/" + this.agencia._id]);
  }
  ngOnInit(): void {
    this.agencia = this.activatedRoute.snapshot.data.agenciaDetails;
  }
}
