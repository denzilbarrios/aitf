import { Component, OnInit } from "@angular/core";
import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { EmpresaService } from "../empresa.service";
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { ValidationService } from "@core/components/validation-errors/validation-messages.service";

@Component({
  selector: "app-empresa-form",
  templateUrl: "./empresa-form.component.html",
  styleUrls: ["./empresa-form.component.scss"]
})
export class EmpresaFormComponent implements OnInit {
  empresaForm: UntypedFormGroup;
  constructor(
    private formBuilder: UntypedFormBuilder,
    private router: Router,
    private validationService: ValidationService,
    private empresaService: EmpresaService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService
  ) {}

  createForm(): void {
    this.empresaForm = this.formBuilder.group({
      _id: ["", []],
      id_empresa: ["", [Validators.required, Validators.pattern('^[0-9]*$')]],
      razon_social: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(255)]],
      nit: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
      direccion: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(255)]],
      telefono: ["", [Validators.required, Validators.pattern('^[0-9]*$')]],
    });
  }

  reset(): void {
    const empresa = this.empresaForm.value;
    if (empresa._id) {
      this.getEmpresaDetails();
    } else {
      this.empresaForm.reset();
    }

  }
  submit(): void {
    const empresa = this.empresaForm.value;
    if (empresa._id) {
      this.update(empresa);
    } else {
      delete empresa._id;
      this.save(empresa);
    }
  }

  save(empresa: any): void {
    this.empresaService.create(empresa).subscribe(
      (data) => {
        this.toastrService.success("Creación de Empresa exitosa!", "Success");
        this.router.navigate(["/empresas"]);
      },

      (error) => {}
    );
  }
  update(empresa: any): void {
    this.empresaService.update(empresa).subscribe(
      (data) => {
        this.toastrService.success("Actualización de Empresa exitosa!", "Success");
        this.router.navigate(["/empresas"]);
      },

      (error) => {}
    );
  }
  ngOnInit(): void {
    this.createForm();
    this.getEmpresaDetails();
  }

  private getEmpresaDetails() {
    const empresaDetails = this.activatedRoute.snapshot.data.empresaDetails;
    if (empresaDetails) {
      this.empresaForm.patchValue(empresaDetails);
    }
  }
}
