import { Component, OnInit } from "@angular/core";
import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { FacturaDetalleService } from "../facturaDetalle.service";
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { ValidationService } from "@core/components/validation-errors/validation-messages.service";

@Component({
  selector: "app-facturaDetalle-form",
  templateUrl: "./facturaDetalle-form.component.html",
  styleUrls: ["./facturaDetalle-form.component.scss"]
})
export class FacturaDetalleFormComponent implements OnInit {
  facturaDetalleForm: UntypedFormGroup;
  constructor(
    private formBuilder: UntypedFormBuilder,
    private router: Router,
    private validationService: ValidationService,
    private facturaDetalleService: FacturaDetalleService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService
  ) {}

  createForm(): void {
    this.facturaDetalleForm = this.formBuilder.group({
      _id: ["", []],
      id_facturaDetalle: ["", [Validators.required, Validators.pattern('^[0-9]*$')]],
      id_factura: ["", [Validators.required, Validators.pattern('^[0-9]*$')]],
      id_boleto: ["", [Validators.required, Validators.pattern('^[0-9]*$')]],
      descripcion: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(255)]],
      cantidad: ["", [Validators.required, Validators.pattern('^[0-9]*$')]],
      precio_u: ["", [Validators.required, Validators.pattern('^-?(?:[0-9]+(?:\.[0-9]{1,2})?|\.[0-9]{1,2})$')]],
      subtotal: ["", [Validators.required, Validators.pattern('^-?(?:[0-9]+(?:\.[0-9]{1,2})?|\.[0-9]{1,2})$')]],
    });
  }

  reset(): void {
    const facturaDetalle = this.facturaDetalleForm.value;
    if (facturaDetalle._id) {
      this.getFacturaDetalleDetails();
    } else {
      this.facturaDetalleForm.reset();
    }

  }
  submit(): void {
    const facturaDetalle = this.facturaDetalleForm.value;
    if (facturaDetalle._id) {
      this.update(facturaDetalle);
    } else {
      delete facturaDetalle._id;
      this.save(facturaDetalle);
    }
  }

  save(facturaDetalle: any): void {
    this.facturaDetalleService.create(facturaDetalle).subscribe(
      (data) => {
        this.toastrService.success("Creación de FacturaDetalle exitosa!", "Success");
        this.router.navigate(["/facturaDetalles"]);
      },

      (error) => {}
    );
  }
  update(facturaDetalle: any): void {
    this.facturaDetalleService.update(facturaDetalle).subscribe(
      (data) => {
        this.toastrService.success("Actualización de FacturaDetalle exitosa!", "Success");
        this.router.navigate(["/facturaDetalles"]);
      },

      (error) => {}
    );
  }
  ngOnInit(): void {
    this.createForm();
    this.getFacturaDetalleDetails();
  }

  private getFacturaDetalleDetails() {
    const facturaDetalleDetails = this.activatedRoute.snapshot.data.facturaDetalleDetails;
    if (facturaDetalleDetails) {
      this.facturaDetalleForm.patchValue(facturaDetalleDetails);
    }
  }
}
