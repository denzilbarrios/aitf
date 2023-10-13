import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-municipio-details",
  templateUrl: "./municipio-details.component.html",
  styleUrls: ["./municipio-details.component.scss"]
})
export class MunicipioDetailsComponent implements OnInit {
  municipio: any;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  edit(): void {
    this.router.navigate(["/municipios/edit/" + this.municipio._id]);
  }
  ngOnInit(): void {
    this.municipio = this.activatedRoute.snapshot.data.municipioDetails;
  }
}
