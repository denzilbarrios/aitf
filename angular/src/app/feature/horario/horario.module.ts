import { NgModule } from "@angular/core";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { HorarioFormComponent } from "./horario-form/horario-form.component";
import { HorarioListComponent } from "./horario-list/horario-list.component";
import { HorarioDetailsComponent } from "./horario-details/horario-details.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CoreModule } from "@core/core.module";
import { SharedModule } from "@shared/shared.module";
import { HorarioRoutingModule } from "./horario-routing.module";
import { HorarioService } from "./horario.service";
import { HorarioDetailsResolver } from "./horario.resolver";

@NgModule({
  declarations: [HorarioFormComponent, HorarioListComponent, HorarioDetailsComponent],
  imports: [
    HorarioRoutingModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    CoreModule.forRoot(),
    SharedModule.forRoot()
  ],
  providers: [HorarioService, HorarioDetailsResolver],
  bootstrap: []
})
export class HorarioModule {}
