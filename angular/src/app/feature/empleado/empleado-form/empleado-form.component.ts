import { Component, OnInit } from "@angular/core";
import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { EmpleadoService } from "../empleado.service";
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { ValidationService } from "@core/components/validation-errors/validation-messages.service";

@Component({
  selector: "app-empleado-form",
  templateUrl: "./empleado-form.component.html",
  styleUrls: ["./empleado-form.component.scss"]
})
export class EmpleadoFormComponent implements OnInit {
  empleadoForm: UntypedFormGroup;
  constructor(
    private formBuilder: UntypedFormBuilder,
    private router: Router,
    private validationService: ValidationService,
    private empleadoService: EmpleadoService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService
  ) {}

  createForm(): void {
    this.empleadoForm = this.formBuilder.group({
      _id: ["", []],
      id_empleado: ["", [Validators.required, Validators.pattern('^[0-9]*$')]],
      inicialkm: ["", [Validators.required, Validators.pattern('^[0-9]*$')]],
      finalkm: ["", [Validators.required, Validators.pattern('^[0-9]*$')]],
      preciokm: ["", [Validators.required, Validators.pattern('^-?(?:[0-9]+(?:\.[0-9]{1,2})?|\.[0-9]{1,2})$')]],
    });
  }

  reset(): void {
    const empleado = this.empleadoForm.value;
    if (empleado._id) {
      this.getEmpleadoDetails();
    } else {
      this.empleadoForm.reset();
    }

  }
  submit(): void {
    const empleado = this.empleadoForm.value;
    if (empleado._id) {
      this.update(empleado);
    } else {
      delete empleado._id;
      this.save(empleado);
    }
  }

  save(empleado: any): void {
    this.empleadoService.create(empleado).subscribe(
      (data) => {
        this.toastrService.success("Creación de Empleado exitosa!", "Success");
        this.router.navigate(["/empleados"]);
      },

      (error) => {}
    );
  }
  update(empleado: any): void {
    this.empleadoService.update(empleado).subscribe(
      (data) => {
        this.toastrService.success("Actualización de Empleado exitosa!", "Success");
        this.router.navigate(["/empleados"]);
      },

      (error) => {}
    );
  }
  ngOnInit(): void {
    this.createForm();
    this.getEmpleadoDetails();
  }

  private getEmpleadoDetails() {
    const empleadoDetails = this.activatedRoute.snapshot.data.empleadoDetails;
    if (empleadoDetails) {
      this.empleadoForm.patchValue(empleadoDetails);
    }
  }
}
