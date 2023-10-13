import { NgModule } from "@angular/core";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { KilometrajeFormComponent } from "./kilometraje-form/kilometraje-form.component";
import { KilometrajeListComponent } from "./kilometraje-list/kilometraje-list.component";
import { KilometrajeDetailsComponent } from "./kilometraje-details/kilometraje-details.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CoreModule } from "@core/core.module";
import { SharedModule } from "@shared/shared.module";
import { KilometrajeRoutingModule } from "./kilometraje-routing.module";
import { KilometrajeService } from "./kilometraje.service";
import { KilometrajeDetailsResolver } from "./kilometraje.resolver";

@NgModule({
  declarations: [KilometrajeFormComponent, KilometrajeListComponent, KilometrajeDetailsComponent],
  imports: [
    KilometrajeRoutingModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    CoreModule.forRoot(),
    SharedModule.forRoot()
  ],
  providers: [KilometrajeService, KilometrajeDetailsResolver],
  bootstrap: []
})
export class KilometrajeModule {}
