import { NgModule } from "@angular/core";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { FacturaDetalleFormComponent } from "./facturaDetalle-form/facturaDetalle-form.component";
import { FacturaDetalleListComponent } from "./facturaDetalle-list/facturaDetalle-list.component";
import { FacturaDetalleDetailsComponent } from "./facturaDetalle-details/facturaDetalle-details.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CoreModule } from "@core/core.module";
import { SharedModule } from "@shared/shared.module";
import { FacturaDetalleRoutingModule } from "./facturaDetalle-routing.module";
import { FacturaDetalleService } from "./facturaDetalle.service";
import { FacturaDetalleDetailsResolver } from "./facturaDetalle.resolver";

@NgModule({
  declarations: [FacturaDetalleFormComponent, FacturaDetalleListComponent, FacturaDetalleDetailsComponent],
  imports: [
    FacturaDetalleRoutingModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    CoreModule.forRoot(),
    SharedModule.forRoot()
  ],
  providers: [FacturaDetalleService, FacturaDetalleDetailsResolver],
  bootstrap: []
})
export class FacturaDetalleModule {}
