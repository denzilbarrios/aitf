import { NgModule } from "@angular/core";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { ServicioFormComponent } from "./servicio-form/servicio-form.component";
import { ServicioListComponent } from "./servicio-list/servicio-list.component";
import { ServicioDetailsComponent } from "./servicio-details/servicio-details.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CoreModule } from "@core/core.module";
import { SharedModule } from "@shared/shared.module";
import { ServicioRoutingModule } from "./servicio-routing.module";
import { ServicioService } from "./servicio.service";
import { ServicioDetailsResolver } from "./servicio.resolver";

@NgModule({
  declarations: [ServicioFormComponent, ServicioListComponent, ServicioDetailsComponent],
  imports: [
    ServicioRoutingModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    CoreModule.forRoot(),
    SharedModule.forRoot()
  ],
  providers: [ServicioService, ServicioDetailsResolver],
  bootstrap: []
})
export class ServicioModule {}
