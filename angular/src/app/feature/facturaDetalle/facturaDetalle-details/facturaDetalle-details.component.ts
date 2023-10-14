import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-facturaDetalle-details",
  templateUrl: "./facturaDetalle-details.component.html",
  styleUrls: ["./facturaDetalle-details.component.scss"]
})
export class FacturaDetalleDetailsComponent implements OnInit {
  facturaDetalle: any;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  edit(): void {
    this.router.navigate(["/facturaDetalles/edit/" + this.facturaDetalle._id]);
  }
  ngOnInit(): void {
    this.facturaDetalle = this.activatedRoute.snapshot.data.facturaDetalleDetails;
  }
}
