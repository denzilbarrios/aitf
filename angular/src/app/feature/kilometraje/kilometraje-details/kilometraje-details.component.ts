import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-kilometraje-details",
  templateUrl: "./kilometraje-details.component.html",
  styleUrls: ["./kilometraje-details.component.scss"]
})
export class KilometrajeDetailsComponent implements OnInit {
  kilometraje: any;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  edit(): void {
    this.router.navigate(["/kilometrajes/edit/" + this.kilometraje._id]);
  }
  ngOnInit(): void {
    this.kilometraje = this.activatedRoute.snapshot.data.kilometrajeDetails;
  }
}
