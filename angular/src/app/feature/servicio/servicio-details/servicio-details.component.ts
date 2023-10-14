import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-servicio-details",
  templateUrl: "./servicio-details.component.html",
  styleUrls: ["./servicio-details.component.scss"]
})
export class ServicioDetailsComponent implements OnInit {
  servicio: any;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  edit(): void {
    this.router.navigate(["/servicios/edit/" + this.servicio._id]);
  }
  ngOnInit(): void {
    this.servicio = this.activatedRoute.snapshot.data.servicioDetails;
  }
}
