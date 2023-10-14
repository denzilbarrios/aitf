import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-ruta-details",
  templateUrl: "./ruta-details.component.html",
  styleUrls: ["./ruta-details.component.scss"]
})
export class RutaDetailsComponent implements OnInit {
  ruta: any;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  edit(): void {
    this.router.navigate(["/rutas/edit/" + this.ruta._id]);
  }
  ngOnInit(): void {
    this.ruta = this.activatedRoute.snapshot.data.rutaDetails;
  }
}
