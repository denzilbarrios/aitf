import { Component, OnInit } from "@angular/core";
import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { MunicipioService } from "../municipio.service";
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { ValidationService } from "@core/components/validation-errors/validation-messages.service";

@Component({
  selector: "app-municipio-form",
  templateUrl: "./municipio-form.component.html",
  styleUrls: ["./municipio-form.component.scss"]
})
export class MunicipioFormComponent implements OnInit {
  municipioForm: UntypedFormGroup;
  constructor(
    private formBuilder: UntypedFormBuilder,
    private router: Router,
    private validationService: ValidationService,
    private municipioService: MunicipioService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService
  ) {}

  createForm(): void {
    this.municipioForm = this.formBuilder.group({
      _id: ["", []],
      id_municipio: ["", [Validators.required, Validators.pattern('^[0-9]*$')]],
      id_depto: ["", [Validators.required, Validators.pattern('^[0-9]*$')]],
      id_agc: ["", [Validators.required, Validators.pattern('^[0-9]*$')]],
      municipio: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(35)]],
      destino_express: [false],
      //activo: ["", [Validators.required]],
    });
  }

  reset(): void {
    const municipio = this.municipioForm.value;
    if (municipio._id) {
      this.getMunicipioDetails();
    } else {
      this.municipioForm.reset();
    }

  }
  submit(): void {
    const municipio = this.municipioForm.value;
    if (municipio._id) {
      this.update(municipio);
    } else {
      delete municipio._id;
      this.save(municipio);
    }
  }

  save(municipio: any): void {
    this.municipioService.create(municipio).subscribe(
      (data) => {
        this.toastrService.success("Creación de Municipio exitosa!", "Success");
        this.router.navigate(["/municipios"]);
      },

      (error) => {}
    );
  }
  update(municipio: any): void {
    this.municipioService.update(municipio).subscribe(
      (data) => {
        this.toastrService.success("Actualización de Municipio exitosa!", "Success");
        this.router.navigate(["/municipios"]);
      },

      (error) => {}
    );
  }
  ngOnInit(): void {
    this.createForm();
    this.getMunicipioDetails();
  }

  private getMunicipioDetails() {
    const municipioDetails = this.activatedRoute.snapshot.data.municipioDetails;
    if (municipioDetails) {
      this.municipioForm.patchValue(municipioDetails);
    }
  }
}
