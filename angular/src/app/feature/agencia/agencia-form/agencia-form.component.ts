import { Component, OnInit } from "@angular/core";
import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { AgenciaService } from "../agencia.service";
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { ValidationService } from "@core/components/validation-errors/validation-messages.service";

@Component({
  selector: "app-agencia-form",
  templateUrl: "./agencia-form.component.html",
  styleUrls: ["./agencia-form.component.scss"]
})
export class AgenciaFormComponent implements OnInit {
  agenciaForm: UntypedFormGroup;
  constructor(
    private formBuilder: UntypedFormBuilder,
    private router: Router,
    private validationService: ValidationService,
    private agenciaService: AgenciaService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService
  ) {}

  createForm(): void {
    this.agenciaForm = this.formBuilder.group({
      _id: ["", []],
      id_agencia: ["", [Validators.required, Validators.pattern('^[0-9]*$')]],
      inicialkm: ["", [Validators.required, Validators.pattern('^[0-9]*$')]],
      finalkm: ["", [Validators.required, Validators.pattern('^[0-9]*$')]],
      preciokm: ["", [Validators.required, Validators.pattern('^-?(?:[0-9]+(?:\.[0-9]{1,2})?|\.[0-9]{1,2})$')]],
    });
  }

  reset(): void {
    const agencia = this.agenciaForm.value;
    if (agencia._id) {
      this.getAgenciaDetails();
    } else {
      this.agenciaForm.reset();
    }

  }
  submit(): void {
    const agencia = this.agenciaForm.value;
    if (agencia._id) {
      this.update(agencia);
    } else {
      delete agencia._id;
      this.save(agencia);
    }
  }

  save(agencia: any): void {
    this.agenciaService.create(agencia).subscribe(
      (data) => {
        this.toastrService.success("Creación de Agencia exitosa!", "Success");
        this.router.navigate(["/agencias"]);
      },

      (error) => {}
    );
  }
  update(agencia: any): void {
    this.agenciaService.update(agencia).subscribe(
      (data) => {
        this.toastrService.success("Actualización de Agencia exitosa!", "Success");
        this.router.navigate(["/agencias"]);
      },

      (error) => {}
    );
  }
  ngOnInit(): void {
    this.createForm();
    this.getAgenciaDetails();
  }

  private getAgenciaDetails() {
    const agenciaDetails = this.activatedRoute.snapshot.data.agenciaDetails;
    if (agenciaDetails) {
      this.agenciaForm.patchValue(agenciaDetails);
    }
  }
}
