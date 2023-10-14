import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-serie-details",
  templateUrl: "./serie-details.component.html",
  styleUrls: ["./serie-details.component.scss"]
})
export class SerieDetailsComponent implements OnInit {
  serie: any;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  edit(): void {
    this.router.navigate(["/series/edit/" + this.serie._id]);
  }
  ngOnInit(): void {
    this.serie = this.activatedRoute.snapshot.data.serieDetails;
  }
}
