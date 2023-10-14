import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-boleto-details",
  templateUrl: "./boleto-details.component.html",
  styleUrls: ["./boleto-details.component.scss"]
})
export class BoletoDetailsComponent implements OnInit {
  boleto: any;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  edit(): void {
    this.router.navigate(["/boletos/edit/" + this.boleto._id]);
  }
  ngOnInit(): void {
    this.boleto = this.activatedRoute.snapshot.data.boletoDetails;
  }
}
