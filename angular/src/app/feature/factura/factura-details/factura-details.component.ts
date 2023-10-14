import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-factura-details",
  templateUrl: "./factura-details.component.html",
  styleUrls: ["./factura-details.component.scss"]
})
export class FacturaDetailsComponent implements OnInit {
  factura: any;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  edit(): void {
    this.router.navigate(["/facturas/edit/" + this.factura._id]);
  }
  ngOnInit(): void {
    this.factura = this.activatedRoute.snapshot.data.facturaDetails;
  }
}
