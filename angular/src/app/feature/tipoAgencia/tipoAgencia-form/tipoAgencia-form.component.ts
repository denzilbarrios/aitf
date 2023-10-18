import { Component, OnInit } from "@angular/core";
import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { TipoAgenciaService } from "../tipoAgencia.service";
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { ValidationService } from "@core/components/validation-errors/validation-messages.service";

@Component({
  selector: "app-tipoAgencia-form",
  templateUrl: "./tipoAgencia-form.component.html",
  styleUrls: ["./tipoAgencia-form.component.scss"]
})
export class TipoAgenciaFormComponent implements OnInit {
  tipoAgenciaForm: UntypedFormGroup;
  constructor(
    private formBuilder: UntypedFormBuilder,
    private router: Router,
    private validationService: ValidationService,
    private tipoAgenciaService: TipoAgenciaService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService
  ) {}

  createForm(): void {
    this.tipoAgenciaForm = this.formBuilder.group({
      _id: ["", []],
      id_tipoAgencia: ["", [Validators.required, Validators.pattern('^[0-9]*$')]],
      descripcion: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(255)]],      finalkm: ["", [Validators.required, Validators.pattern('^[0-9]*$')]],
    });
  }

  reset(): void {
    const tipoAgencia = this.tipoAgenciaForm.value;
    if (tipoAgencia._id) {
      this.getTipoAgenciaDetails();
    } else {
      this.tipoAgenciaForm.reset();
    }

  }
  submit(): void {
    const tipoAgencia = this.tipoAgenciaForm.value;
    if (tipoAgencia._id) {
      this.update(tipoAgencia);
    } else {
      delete tipoAgencia._id;
      this.save(tipoAgencia);
    }
  }

  save(tipoAgencia: any): void {
    this.tipoAgenciaService.create(tipoAgencia).subscribe(
      (data) => {
        this.toastrService.success("Creación de TipoAgencia exitosa!", "Success");
        this.router.navigate(["/tipoAgencias"]);
      },

      (error) => {}
    );
  }
  update(tipoAgencia: any): void {
    this.tipoAgenciaService.update(tipoAgencia).subscribe(
      (data) => {
        this.toastrService.success("Actualización de TipoAgencia exitosa!", "Success");
        this.router.navigate(["/tipoAgencias"]);
      },

      (error) => {}
    );
  }
  ngOnInit(): void {
    this.createForm();
    this.getTipoAgenciaDetails();
  }

  private getTipoAgenciaDetails() {
    const tipoAgenciaDetails = this.activatedRoute.snapshot.data.tipoAgenciaDetails;
    if (tipoAgenciaDetails) {
      this.tipoAgenciaForm.patchValue(tipoAgenciaDetails);
    }
  }
}
