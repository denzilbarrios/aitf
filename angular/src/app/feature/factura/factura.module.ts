import { NgModule } from "@angular/core";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { FacturaFormComponent } from "./factura-form/factura-form.component";
import { FacturaListComponent } from "./factura-list/factura-list.component";
import { FacturaDetailsComponent } from "./factura-details/factura-details.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CoreModule } from "@core/core.module";
import { SharedModule } from "@shared/shared.module";
import { FacturaRoutingModule } from "./factura-routing.module";
import { FacturaService } from "./factura.service";
import { FacturaDetailsResolver } from "./factura.resolver";

@NgModule({
  declarations: [FacturaFormComponent, FacturaListComponent, FacturaDetailsComponent],
  imports: [
    FacturaRoutingModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    CoreModule.forRoot(),
    SharedModule.forRoot()
  ],
  providers: [FacturaService, FacturaDetailsResolver],
  bootstrap: []
})
export class FacturaModule {}
