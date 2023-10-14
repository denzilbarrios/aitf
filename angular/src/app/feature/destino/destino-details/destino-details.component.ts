import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-destino-details",
  templateUrl: "./destino-details.component.html",
  styleUrls: ["./destino-details.component.scss"]
})
export class DestinoDetailsComponent implements OnInit {
  destino: any;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  edit(): void {
    this.router.navigate(["/destinos/edit/" + this.destino._id]);
  }
  ngOnInit(): void {
    this.destino = this.activatedRoute.snapshot.data.destinoDetails;
  }
}
