import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-empleado-details",
  templateUrl: "./empleado-details.component.html",
  styleUrls: ["./empleado-details.component.scss"]
})
export class EmpleadoDetailsComponent implements OnInit {
  empleado: any;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  edit(): void {
    this.router.navigate(["/empleados/edit/" + this.empleado._id]);
  }
  ngOnInit(): void {
    this.empleado = this.activatedRoute.snapshot.data.empleadoDetails;
  }
}
