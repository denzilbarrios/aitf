import { Component, OnInit } from "@angular/core";
import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { KilometrajeService } from "../kilometraje.service";
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { ValidationService } from "@core/components/validation-errors/validation-messages.service";

@Component({
  selector: "app-kilometraje-form",
  templateUrl: "./kilometraje-form.component.html",
  styleUrls: ["./kilometraje-form.component.scss"]
})
export class KilometrajeFormComponent implements OnInit {
  kilometrajeForm: UntypedFormGroup;
  constructor(
    private formBuilder: UntypedFormBuilder,
    private router: Router,
    private validationService: ValidationService,
    private kilometrajeService: KilometrajeService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService
  ) {}

  createForm(): void {
    this.kilometrajeForm = this.formBuilder.group({
      _id: ["", []],
      id_kilometraje: ["", [Validators.required, Validators.pattern('^[0-9]*$')]],
      inicialkm: ["", [Validators.required, Validators.pattern('^[0-9]*$')]],
      finalkm: ["", [Validators.required, Validators.pattern('^[0-9]*$')]],
      preciokm: ["", [Validators.required, Validators.pattern('^-?(?:[0-9]+(?:\.[0-9]{1,2})?|\.[0-9]{1,2})$')]],
    });
  }

  reset(): void {
    const kilometraje = this.kilometrajeForm.value;
    if (kilometraje._id) {
      this.getKilometrajeDetails();
    } else {
      this.kilometrajeForm.reset();
    }

  }
  submit(): void {
    const kilometraje = this.kilometrajeForm.value;
    if (kilometraje._id) {
      this.update(kilometraje);
    } else {
      delete kilometraje._id;
      this.save(kilometraje);
    }
  }

  save(kilometraje: any): void {
    this.kilometrajeService.create(kilometraje).subscribe(
      (data) => {
        this.toastrService.success("Creación de Kilometraje exitosa!", "Success");
        this.router.navigate(["/kilometrajes"]);
      },

      (error) => {}
    );
  }
  update(kilometraje: any): void {
    this.kilometrajeService.update(kilometraje).subscribe(
      (data) => {
        this.toastrService.success("Actualización de Kilometraje exitosa!", "Success");
        this.router.navigate(["/kilometrajes"]);
      },

      (error) => {}
    );
  }
  ngOnInit(): void {
    this.createForm();
    this.getKilometrajeDetails();
  }

  private getKilometrajeDetails() {
    const kilometrajeDetails = this.activatedRoute.snapshot.data.kilometrajeDetails;
    if (kilometrajeDetails) {
      this.kilometrajeForm.patchValue(kilometrajeDetails);
    }
  }
}
