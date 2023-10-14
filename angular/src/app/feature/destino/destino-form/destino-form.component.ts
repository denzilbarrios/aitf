import { Component, OnInit } from "@angular/core";
import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { DestinoService } from "../destino.service";
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { ValidationService } from "@core/components/validation-errors/validation-messages.service";

@Component({
  selector: "app-destino-form",
  templateUrl: "./destino-form.component.html",
  styleUrls: ["./destino-form.component.scss"]
})
export class DestinoFormComponent implements OnInit {
  destinoForm: UntypedFormGroup;
  constructor(
    private formBuilder: UntypedFormBuilder,
    private router: Router,
    private validationService: ValidationService,
    private destinoService: DestinoService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService
  ) {}

  createForm(): void {
    this.destinoForm = this.formBuilder.group({
      _id: ["", []],
      id_destino: ["", [Validators.required, Validators.pattern('^[0-9]*$')]],
      inicialkm: ["", [Validators.required, Validators.pattern('^[0-9]*$')]],
      finalkm: ["", [Validators.required, Validators.pattern('^[0-9]*$')]],
      preciokm: ["", [Validators.required, Validators.pattern('^-?(?:[0-9]+(?:\.[0-9]{1,2})?|\.[0-9]{1,2})$')]],
    });
  }

  reset(): void {
    const destino = this.destinoForm.value;
    if (destino._id) {
      this.getDestinoDetails();
    } else {
      this.destinoForm.reset();
    }

  }
  submit(): void {
    const destino = this.destinoForm.value;
    if (destino._id) {
      this.update(destino);
    } else {
      delete destino._id;
      this.save(destino);
    }
  }

  save(destino: any): void {
    this.destinoService.create(destino).subscribe(
      (data) => {
        this.toastrService.success("Creación de Destino exitosa!", "Success");
        this.router.navigate(["/destinos"]);
      },

      (error) => {}
    );
  }
  update(destino: any): void {
    this.destinoService.update(destino).subscribe(
      (data) => {
        this.toastrService.success("Actualización de Destino exitosa!", "Success");
        this.router.navigate(["/destinos"]);
      },

      (error) => {}
    );
  }
  ngOnInit(): void {
    this.createForm();
    this.getDestinoDetails();
  }

  private getDestinoDetails() {
    const destinoDetails = this.activatedRoute.snapshot.data.destinoDetails;
    if (destinoDetails) {
      this.destinoForm.patchValue(destinoDetails);
    }
  }
}
