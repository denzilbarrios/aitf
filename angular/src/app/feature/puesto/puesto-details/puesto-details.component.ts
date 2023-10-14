import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-puesto-details",
  templateUrl: "./puesto-details.component.html",
  styleUrls: ["./puesto-details.component.scss"]
})
export class PuestoDetailsComponent implements OnInit {
  puesto: any;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  edit(): void {
    this.router.navigate(["/puestos/edit/" + this.puesto._id]);
  }
  ngOnInit(): void {
    this.puesto = this.activatedRoute.snapshot.data.puestoDetails;
  }
}
