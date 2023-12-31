import { Component, OnInit } from "@angular/core";
import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { RutaService } from "../ruta.service";
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { ValidationService } from "@core/components/validation-errors/validation-messages.service";

@Component({
  selector: "app-ruta-form",
  templateUrl: "./ruta-form.component.html",
  styleUrls: ["./ruta-form.component.scss"]
})
export class RutaFormComponent implements OnInit {
  rutaForm: UntypedFormGroup;
  constructor(
    private formBuilder: UntypedFormBuilder,
    private router: Router,
    private validationService: ValidationService,
    private rutaService: RutaService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService
  ) {}

  createForm(): void {
    this.rutaForm = this.formBuilder.group({
      _id: ["", []],
      id_ruta: ["", [Validators.required, Validators.pattern('^[0-9]*$')]],
      nombre: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(255)]],
      nemonico: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(255)]],
      id_origen: ["", [Validators.required, Validators.pattern('^[0-9]*$')]],
      id_destino: ["", [Validators.required, Validators.pattern('^[0-9]*$')]],
      id_servicio: ["", [Validators.required, Validators.pattern('^[0-9]*$')]],
      no_bus: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      id_piloto: ["", [Validators.required, Validators.pattern('^[0-9]*$')]],
      id_asistente: ["", [Validators.required, Validators.pattern('^[0-9]*$')]],
  
    });
  }

  reset(): void {
    const ruta = this.rutaForm.value;
    if (ruta._id) {
      this.getRutaDetails();
    } else {
      this.rutaForm.reset();
    }

  }
  submit(): void {
    const ruta = this.rutaForm.value;
    if (ruta._id) {
      this.update(ruta);
    } else {
      delete ruta._id;
      this.save(ruta);
    }
  }

  save(ruta: any): void {
    this.rutaService.create(ruta).subscribe(
      (data) => {
        this.toastrService.success("Creación de Ruta exitosa!", "Success");
        this.router.navigate(["/rutas"]);
      },

      (error) => {}
    );
  }
  update(ruta: any): void {
    this.rutaService.update(ruta).subscribe(
      (data) => {
        this.toastrService.success("Actualización de Ruta exitosa!", "Success");
        this.router.navigate(["/rutas"]);
      },

      (error) => {}
    );
  }
  ngOnInit(): void {
    this.createForm();
    this.getRutaDetails();
  }

  private getRutaDetails() {
    const rutaDetails = this.activatedRoute.snapshot.data.rutaDetails;
    if (rutaDetails) {
      this.rutaForm.patchValue(rutaDetails);
    }
  }
}
