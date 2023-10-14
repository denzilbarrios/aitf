import { NgModule } from "@angular/core";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { BoletoFormComponent } from "./boleto-form/boleto-form.component";
import { BoletoListComponent } from "./boleto-list/boleto-list.component";
import { BoletoDetailsComponent } from "./boleto-details/boleto-details.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CoreModule } from "@core/core.module";
import { SharedModule } from "@shared/shared.module";
import { BoletoRoutingModule } from "./boleto-routing.module";
import { BoletoService } from "./boleto.service";
import { BoletoDetailsResolver } from "./boleto.resolver";

@NgModule({
  declarations: [BoletoFormComponent, BoletoListComponent, BoletoDetailsComponent],
  imports: [
    BoletoRoutingModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    CoreModule.forRoot(),
    SharedModule.forRoot()
  ],
  providers: [BoletoService, BoletoDetailsResolver],
  bootstrap: []
})
export class BoletoModule {}
