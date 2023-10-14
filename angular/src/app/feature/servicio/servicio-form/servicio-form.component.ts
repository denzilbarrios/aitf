import { Component, OnInit } from "@angular/core";
import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { ServicioService } from "../servicio.service";
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { ValidationService } from "@core/components/validation-errors/validation-messages.service";

@Component({
  selector: "app-servicio-form",
  templateUrl: "./servicio-form.component.html",
  styleUrls: ["./servicio-form.component.scss"]
})
export class ServicioFormComponent implements OnInit {
  servicioForm: UntypedFormGroup;
  constructor(
    private formBuilder: UntypedFormBuilder,
    private router: Router,
    private validationService: ValidationService,
    private servicioService: ServicioService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService
  ) {}

  createForm(): void {
    this.servicioForm = this.formBuilder.group({
      _id: ["", []],
      id_servicio: ["", [Validators.required, Validators.pattern('^[0-9]*$')]],
      inicialkm: ["", [Validators.required, Validators.pattern('^[0-9]*$')]],
      finalkm: ["", [Validators.required, Validators.pattern('^[0-9]*$')]],
      preciokm: ["", [Validators.required, Validators.pattern('^-?(?:[0-9]+(?:\.[0-9]{1,2})?|\.[0-9]{1,2})$')]],
    });
  }

  reset(): void {
    const servicio = this.servicioForm.value;
    if (servicio._id) {
      this.getServicioDetails();
    } else {
      this.servicioForm.reset();
    }

  }
  submit(): void {
    const servicio = this.servicioForm.value;
    if (servicio._id) {
      this.update(servicio);
    } else {
      delete servicio._id;
      this.save(servicio);
    }
  }

  save(servicio: any): void {
    this.servicioService.create(servicio).subscribe(
      (data) => {
        this.toastrService.success("Creación de Servicio exitosa!", "Success");
        this.router.navigate(["/servicios"]);
      },

      (error) => {}
    );
  }
  update(servicio: any): void {
    this.servicioService.update(servicio).subscribe(
      (data) => {
        this.toastrService.success("Actualización de Servicio exitosa!", "Success");
        this.router.navigate(["/servicios"]);
      },

      (error) => {}
    );
  }
  ngOnInit(): void {
    this.createForm();
    this.getServicioDetails();
  }

  private getServicioDetails() {
    const servicioDetails = this.activatedRoute.snapshot.data.servicioDetails;
    if (servicioDetails) {
      this.servicioForm.patchValue(servicioDetails);
    }
  }
}
