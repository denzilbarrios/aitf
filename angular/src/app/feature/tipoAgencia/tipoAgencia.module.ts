import { NgModule } from "@angular/core";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { TipoAgenciaFormComponent } from "./tipoAgencia-form/tipoAgencia-form.component";
import { TipoAgenciaListComponent } from "./tipoAgencia-list/tipoAgencia-list.component";
import { TipoAgenciaDetailsComponent } from "./tipoAgencia-details/tipoAgencia-details.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CoreModule } from "@core/core.module";
import { SharedModule } from "@shared/shared.module";
import { TipoAgenciaRoutingModule } from "./tipoAgencia-routing.module";
import { TipoAgenciaService } from "./tipoAgencia.service";
import { TipoAgenciaDetailsResolver } from "./tipoAgencia.resolver";

@NgModule({
  declarations: [TipoAgenciaFormComponent, TipoAgenciaListComponent, TipoAgenciaDetailsComponent],
  imports: [
    TipoAgenciaRoutingModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    CoreModule.forRoot(),
    SharedModule.forRoot()
  ],
  providers: [TipoAgenciaService, TipoAgenciaDetailsResolver],
  bootstrap: []
})
export class TipoAgenciaModule {}
