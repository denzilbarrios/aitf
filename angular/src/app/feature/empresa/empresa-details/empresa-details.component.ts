import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-empresa-details",
  templateUrl: "./empresa-details.component.html",
  styleUrls: ["./empresa-details.component.scss"]
})
export class EmpresaDetailsComponent implements OnInit {
  empresa: any;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  edit(): void {
    this.router.navigate(["/empresas/edit/" + this.empresa._id]);
  }
  ngOnInit(): void {
    this.empresa = this.activatedRoute.snapshot.data.empresaDetails;
  }
}
