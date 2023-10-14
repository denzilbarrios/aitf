import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-horario-details",
  templateUrl: "./horario-details.component.html",
  styleUrls: ["./horario-details.component.scss"]
})
export class HorarioDetailsComponent implements OnInit {
  horario: any;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  edit(): void {
    this.router.navigate(["/horarios/edit/" + this.horario._id]);
  }
  ngOnInit(): void {
    this.horario = this.activatedRoute.snapshot.data.horarioDetails;
  }
}
