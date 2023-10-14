import { NgModule } from "@angular/core";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { DestinoFormComponent } from "./destino-form/destino-form.component";
import { DestinoListComponent } from "./destino-list/destino-list.component";
import { DestinoDetailsComponent } from "./destino-details/destino-details.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CoreModule } from "@core/core.module";
import { SharedModule } from "@shared/shared.module";
import { DestinoRoutingModule } from "./destino-routing.module";
import { DestinoService } from "./destino.service";
import { DestinoDetailsResolver } from "./destino.resolver";

@NgModule({
  declarations: [DestinoFormComponent, DestinoListComponent, DestinoDetailsComponent],
  imports: [
    DestinoRoutingModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    CoreModule.forRoot(),
    SharedModule.forRoot()
  ],
  providers: [DestinoService, DestinoDetailsResolver],
  bootstrap: []
})
export class DestinoModule {}
