import { Component, OnInit } from "@angular/core";
import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";
import { SerieService } from "../serie.service";
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { ValidationService } from "@core/components/validation-errors/validation-messages.service";

@Component({
  selector: "app-serie-form",
  templateUrl: "./serie-form.component.html",
  styleUrls: ["./serie-form.component.scss"]
})
export class SerieFormComponent implements OnInit {
  serieForm: UntypedFormGroup;
  constructor(
    private formBuilder: UntypedFormBuilder,
    private router: Router,
    private validationService: ValidationService,
    private serieService: SerieService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService
  ) {}

  createForm(): void {
    this.serieForm = this.formBuilder.group({
      _id: ["", []],
      id_serie: ["", [Validators.required, Validators.pattern('^[0-9]*$')]],
      descripcion: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(255)]],
      serie: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(255)]],
      correlativo: ["", [Validators.required, Validators.pattern('^[0-9]*$')]],
    });
  }

  reset(): void {
    const serie = this.serieForm.value;
    if (serie._id) {
      this.getSerieDetails();
    } else {
      this.serieForm.reset();
    }

  }
  submit(): void {
    const serie = this.serieForm.value;
    if (serie._id) {
      this.update(serie);
    } else {
      delete serie._id;
      this.save(serie);
    }
  }

  save(serie: any): void {
    this.serieService.create(serie).subscribe(
      (data) => {
        this.toastrService.success("Creación de Serie exitosa!", "Success");
        this.router.navigate(["/series"]);
      },

      (error) => {}
    );
  }
  update(serie: any): void {
    this.serieService.update(serie).subscribe(
      (data) => {
        this.toastrService.success("Actualización de Serie exitosa!", "Success");
        this.router.navigate(["/series"]);
      },

      (error) => {}
    );
  }
  ngOnInit(): void {
    this.createForm();
    this.getSerieDetails();
  }

  private getSerieDetails() {
    const serieDetails = this.activatedRoute.snapshot.data.serieDetails;
    if (serieDetails) {
      this.serieForm.patchValue(serieDetails);
    }
  }
}
