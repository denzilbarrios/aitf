import { Component, OnInit } from "@angular/core";
import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { PuestoService } from "../puesto.service";
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { ValidationService } from "@core/components/validation-errors/validation-messages.service";

@Component({
  selector: "app-puesto-form",
  templateUrl: "./puesto-form.component.html",
  styleUrls: ["./puesto-form.component.scss"]
})
export class PuestoFormComponent implements OnInit {
  puestoForm: UntypedFormGroup;
  constructor(
    private formBuilder: UntypedFormBuilder,
    private router: Router,
    private validationService: ValidationService,
    private puestoService: PuestoService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService
  ) {}

  createForm(): void {
    this.puestoForm = this.formBuilder.group({
      _id: ["", []],
      id_puesto: ["", [Validators.required, Validators.pattern('^[0-9]*$')]],
      inicialkm: ["", [Validators.required, Validators.pattern('^[0-9]*$')]],
      finalkm: ["", [Validators.required, Validators.pattern('^[0-9]*$')]],
      preciokm: ["", [Validators.required, Validators.pattern('^-?(?:[0-9]+(?:\.[0-9]{1,2})?|\.[0-9]{1,2})$')]],
    });
  }

  reset(): void {
    const puesto = this.puestoForm.value;
    if (puesto._id) {
      this.getPuestoDetails();
    } else {
      this.puestoForm.reset();
    }

  }
  submit(): void {
    const puesto = this.puestoForm.value;
    if (puesto._id) {
      this.update(puesto);
    } else {
      delete puesto._id;
      this.save(puesto);
    }
  }

  save(puesto: any): void {
    this.puestoService.create(puesto).subscribe(
      (data) => {
        this.toastrService.success("Creación de Puesto exitosa!", "Success");
        this.router.navigate(["/puestos"]);
      },

      (error) => {}
    );
  }
  update(puesto: any): void {
    this.puestoService.update(puesto).subscribe(
      (data) => {
        this.toastrService.success("Actualización de Puesto exitosa!", "Success");
        this.router.navigate(["/puestos"]);
      },

      (error) => {}
    );
  }
  ngOnInit(): void {
    this.createForm();
    this.getPuestoDetails();
  }

  private getPuestoDetails() {
    const puestoDetails = this.activatedRoute.snapshot.data.puestoDetails;
    if (puestoDetails) {
      this.puestoForm.patchValue(puestoDetails);
    }
  }
}
