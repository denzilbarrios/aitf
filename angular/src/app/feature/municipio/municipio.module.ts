import { NgModule } from "@angular/core";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { MunicipioFormComponent } from "./municipio-form/municipio-form.component";
import { MunicipioListComponent } from "./municipio-list/municipio-list.component";
import { MunicipioDetailsComponent } from "./municipio-details/municipio-details.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CoreModule } from "@core/core.module";
import { SharedModule } from "@shared/shared.module";
import { MunicipioRoutingModule } from "./municipio-routing.module";
import { MunicipioService } from "./municipio.service";
import { MunicipioDetailsResolver } from "./municipio.resolver";

@NgModule({
  declarations: [MunicipioFormComponent, MunicipioListComponent, MunicipioDetailsComponent],
  imports: [
    MunicipioRoutingModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    CoreModule.forRoot(),
    SharedModule.forRoot()
  ],
  providers: [MunicipioService, MunicipioDetailsResolver],
  bootstrap: []
})
export class MunicipioModule {}
