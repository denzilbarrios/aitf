import { NgModule } from "@angular/core";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { RutaFormComponent } from "./ruta-form/ruta-form.component";
import { RutaListComponent } from "./ruta-list/ruta-list.component";
import { RutaDetailsComponent } from "./ruta-details/ruta-details.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CoreModule } from "@core/core.module";
import { SharedModule } from "@shared/shared.module";
import { RutaRoutingModule } from "./ruta-routing.module";
import { RutaService } from "./ruta.service";
import { RutaDetailsResolver } from "./ruta.resolver";

@NgModule({
  declarations: [RutaFormComponent, RutaListComponent, RutaDetailsComponent],
  imports: [
    RutaRoutingModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    CoreModule.forRoot(),
    SharedModule.forRoot()
  ],
  providers: [RutaService, RutaDetailsResolver],
  bootstrap: []
})
export class RutaModule {}
