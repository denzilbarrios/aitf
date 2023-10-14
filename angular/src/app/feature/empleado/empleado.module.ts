import { NgModule } from "@angular/core";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { EmpleadoFormComponent } from "./empleado-form/empleado-form.component";
import { EmpleadoListComponent } from "./empleado-list/empleado-list.component";
import { EmpleadoDetailsComponent } from "./empleado-details/empleado-details.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CoreModule } from "@core/core.module";
import { SharedModule } from "@shared/shared.module";
import { EmpleadoRoutingModule } from "./empleado-routing.module";
import { EmpleadoService } from "./empleado.service";
import { EmpleadoDetailsResolver } from "./empleado.resolver";

@NgModule({
  declarations: [EmpleadoFormComponent, EmpleadoListComponent, EmpleadoDetailsComponent],
  imports: [
    EmpleadoRoutingModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    CoreModule.forRoot(),
    SharedModule.forRoot()
  ],
  providers: [EmpleadoService, EmpleadoDetailsResolver],
  bootstrap: []
})
export class EmpleadoModule {}
