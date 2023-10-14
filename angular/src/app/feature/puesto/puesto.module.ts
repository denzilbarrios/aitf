import { NgModule } from "@angular/core";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { PuestoFormComponent } from "./puesto-form/puesto-form.component";
import { PuestoListComponent } from "./puesto-list/puesto-list.component";
import { PuestoDetailsComponent } from "./puesto-details/puesto-details.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CoreModule } from "@core/core.module";
import { SharedModule } from "@shared/shared.module";
import { PuestoRoutingModule } from "./puesto-routing.module";
import { PuestoService } from "./puesto.service";
import { PuestoDetailsResolver } from "./puesto.resolver";

@NgModule({
  declarations: [PuestoFormComponent, PuestoListComponent, PuestoDetailsComponent],
  imports: [
    PuestoRoutingModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    CoreModule.forRoot(),
    SharedModule.forRoot()
  ],
  providers: [PuestoService, PuestoDetailsResolver],
  bootstrap: []
})
export class PuestoModule {}
