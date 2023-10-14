import { NgModule } from "@angular/core";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { SerieFormComponent } from "./serie-form/serie-form.component";
import { SerieListComponent } from "./serie-list/serie-list.component";
import { SerieDetailsComponent } from "./serie-details/serie-details.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CoreModule } from "@core/core.module";
import { SharedModule } from "@shared/shared.module";
import { SerieRoutingModule } from "./serie-routing.module";
import { SerieService } from "./serie.service";
import { SerieDetailsResolver } from "./serie.resolver";

@NgModule({
  declarations: [SerieFormComponent, SerieListComponent, SerieDetailsComponent],
  imports: [
    SerieRoutingModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    CoreModule.forRoot(),
    SharedModule.forRoot()
  ],
  providers: [SerieService, SerieDetailsResolver],
  bootstrap: []
})
export class SerieModule {}
