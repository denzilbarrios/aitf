import { Component, OnInit } from "@angular/core";
import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { HorarioService } from "../horario.service";
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { ValidationService } from "@core/components/validation-errors/validation-messages.service";

@Component({
  selector: "app-horario-form",
  templateUrl: "./horario-form.component.html",
  styleUrls: ["./horario-form.component.scss"]
})
export class HorarioFormComponent implements OnInit {
  horarioForm: UntypedFormGroup;
  constructor(
    private formBuilder: UntypedFormBuilder,
    private router: Router,
    private validationService: ValidationService,
    private horarioService: HorarioService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService
  ) {}

  createForm(): void {
    this.horarioForm = this.formBuilder.group({
      _id: ["", []],
      id_horario: ["", [Validators.required, Validators.pattern('^[0-9]*$')]],
      inicialkm: ["", [Validators.required, Validators.pattern('^[0-9]*$')]],
      finalkm: ["", [Validators.required, Validators.pattern('^[0-9]*$')]],
      preciokm: ["", [Validators.required, Validators.pattern('^-?(?:[0-9]+(?:\.[0-9]{1,2})?|\.[0-9]{1,2})$')]],
    });
  }

  reset(): void {
    const horario = this.horarioForm.value;
    if (horario._id) {
      this.getHorarioDetails();
    } else {
      this.horarioForm.reset();
    }

  }
  submit(): void {
    const horario = this.horarioForm.value;
    if (horario._id) {
      this.update(horario);
    } else {
      delete horario._id;
      this.save(horario);
    }
  }

  save(horario: any): void {
    this.horarioService.create(horario).subscribe(
      (data) => {
        this.toastrService.success("Creación de Horario exitosa!", "Success");
        this.router.navigate(["/horarios"]);
      },

      (error) => {}
    );
  }
  update(horario: any): void {
    this.horarioService.update(horario).subscribe(
      (data) => {
        this.toastrService.success("Actualización de Horario exitosa!", "Success");
        this.router.navigate(["/horarios"]);
      },

      (error) => {}
    );
  }
  ngOnInit(): void {
    this.createForm();
    this.getHorarioDetails();
  }

  private getHorarioDetails() {
    const horarioDetails = this.activatedRoute.snapshot.data.horarioDetails;
    if (horarioDetails) {
      this.horarioForm.patchValue(horarioDetails);
    }
  }
}
