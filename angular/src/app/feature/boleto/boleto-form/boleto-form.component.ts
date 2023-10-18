import { Component, OnInit } from "@angular/core";
import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { BoletoService } from "../boleto.service";
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { ValidationService } from "@core/components/validation-errors/validation-messages.service";

@Component({
  selector: "app-boleto-form",
  templateUrl: "./boleto-form.component.html",
  styleUrls: ["./boleto-form.component.scss"]
})
export class BoletoFormComponent implements OnInit {
  boletoForm: UntypedFormGroup;
  constructor(
    private formBuilder: UntypedFormBuilder,
    private router: Router,
    private validationService: ValidationService,
    private boletoService: BoletoService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService
  ) {}

  createForm(): void {
    this.boletoForm = this.formBuilder.group({
      _id: ["", []],
      id_boleto: ["", [Validators.required, Validators.pattern('^[0-9]*$')]],
      fecha_viaje: ["", []],
      //fecha_viaje: ["", [Validators.required, Validators.pattern('^(19|20)\d\d[-](0[1-9]|1[012])[-](0[1-9]|[12][0-9]|3[01])$')]],
      id_horario: ["", [Validators.required, Validators.pattern('^[0-9]*$')]],
      id_ruta: ["", [Validators.required, Validators.pattern('^[0-9]*$')]],
      dni: ["", [Validators.required, Validators.pattern('^[0-9]*$')]],
      nom_pasajero: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(255)]],
      tel_pasajero: ["", [Validators.required, Validators.pattern('^[0-9]*$')]],
    });
  }

  reset(): void {
    const boleto = this.boletoForm.value;
    if (boleto._id) {
      this.getBoletoDetails();
    } else {
      this.boletoForm.reset();
    }

  }
  submit(): void {
    const boleto = this.boletoForm.value;
    if (boleto._id) {
      this.update(boleto);
    } else {
      delete boleto._id;
      this.save(boleto);
    }
  }

  save(boleto: any): void {
    this.boletoService.create(boleto).subscribe(
      (data) => {
        this.toastrService.success("Creación de Boleto exitosa!", "Success");
        this.router.navigate(["/boletos"]);
      },

      (error) => {}
    );
  }
  update(boleto: any): void {
    this.boletoService.update(boleto).subscribe(
      (data) => {
        this.toastrService.success("Actualización de Boleto exitosa!", "Success");
        this.router.navigate(["/boletos"]);
      },

      (error) => {}
    );
  }
  ngOnInit(): void {
    this.createForm();
    this.getBoletoDetails();
  }

  private getBoletoDetails() {
    const boletoDetails = this.activatedRoute.snapshot.data.boletoDetails;
    if (boletoDetails) {
      this.boletoForm.patchValue(boletoDetails);
    }
  }
}
