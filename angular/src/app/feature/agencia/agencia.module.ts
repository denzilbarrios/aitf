import { NgModule } from "@angular/core";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { AgenciaFormComponent } from "./agencia-form/agencia-form.component";
import { AgenciaListComponent } from "./agencia-list/agencia-list.component";
import { AgenciaDetailsComponent } from "./agencia-details/agencia-details.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CoreModule } from "@core/core.module";
import { SharedModule } from "@shared/shared.module";
import { AgenciaRoutingModule } from "./agencia-routing.module";
import { AgenciaService } from "./agencia.service";
import { AgenciaDetailsResolver } from "./agencia.resolver";

@NgModule({
  declarations: [AgenciaFormComponent, AgenciaListComponent, AgenciaDetailsComponent],
  imports: [
    AgenciaRoutingModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    CoreModule.forRoot(),
    SharedModule.forRoot()
  ],
  providers: [AgenciaService, AgenciaDetailsResolver],
  bootstrap: []
})
export class AgenciaModule {}
