import { Component, OnInit } from "@angular/core";
import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { FacturaService } from "../factura.service";
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { ValidationService } from "@core/components/validation-errors/validation-messages.service";

@Component({
  selector: "app-factura-form",
  templateUrl: "./factura-form.component.html",
  styleUrls: ["./factura-form.component.scss"]
})
export class FacturaFormComponent implements OnInit {
  facturaForm: UntypedFormGroup;
  constructor(
    private formBuilder: UntypedFormBuilder,
    private router: Router,
    private validationService: ValidationService,
    private facturaService: FacturaService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService
  ) {}

  createForm(): void {
    this.facturaForm = this.formBuilder.group({
      _id: ["", []],
      id_factura: ["", [Validators.required, Validators.pattern('^[0-9]*$')]],
      id_serie: ["", [Validators.required, Validators.pattern('^[0-9]*$')]],
      no_documento: ["", [Validators.required, Validators.pattern('^[0-9]*$')]],
      id_usuario: ["", [Validators.required, Validators.pattern('^[0-9]*$')]],
      fecha_doc: ["", [Validators.required]],
      hora_doc: ["", [Validators.required, Validators.pattern(/^(2[0-3]|[01]?[0-9]):([0-5]?[0-9])(:[0-5]?[0-9])?$/)]],
      nit_cliente: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(255)]],
      nombre_cliente: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(255)]],
      direccion_cliente: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(255)]],
      total: ["", [Validators.required, Validators.pattern('^-?(?:[0-9]+(?:\.[0-9]{1,2})?|\.[0-9]{1,2})$')]],
    });
  }

  reset(): void {
    const factura = this.facturaForm.value;
    if (factura._id) {
      this.getFacturaDetails();
    } else {
      this.facturaForm.reset();
    }

  }
  submit(): void {
    const factura = this.facturaForm.value;
    if (factura._id) {
      this.update(factura);
    } else {
      delete factura._id;
      this.save(factura);
    }
  }

  save(factura: any): void {
    this.facturaService.create(factura).subscribe(
      (data) => {
        this.toastrService.success("Creación de Factura exitosa!", "Success");
        this.router.navigate(["/facturas"]);
      },

      (error) => {}
    );
  }
  update(factura: any): void {
    this.facturaService.update(factura).subscribe(
      (data) => {
        this.toastrService.success("Actualización de Factura exitosa!", "Success");
        this.router.navigate(["/facturas"]);
      },

      (error) => {}
    );
  }
  ngOnInit(): void {
    this.createForm();
    this.getFacturaDetails();
  }

  private getFacturaDetails() {
    const facturaDetails = this.activatedRoute.snapshot.data.facturaDetails;
    if (facturaDetails) {
      this.facturaForm.patchValue(facturaDetails);
    }
  }
}
