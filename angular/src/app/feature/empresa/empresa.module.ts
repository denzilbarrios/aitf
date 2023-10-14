import { NgModule } from "@angular/core";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { EmpresaFormComponent } from "./empresa-form/empresa-form.component";
import { EmpresaListComponent } from "./empresa-list/empresa-list.component";
import { EmpresaDetailsComponent } from "./empresa-details/empresa-details.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CoreModule } from "@core/core.module";
import { SharedModule } from "@shared/shared.module";
import { EmpresaRoutingModule } from "./empresa-routing.module";
import { EmpresaService } from "./empresa.service";
import { EmpresaDetailsResolver } from "./empresa.resolver";

@NgModule({
  declarations: [EmpresaFormComponent, EmpresaListComponent, EmpresaDetailsComponent],
  imports: [
    EmpresaRoutingModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    CoreModule.forRoot(),
    SharedModule.forRoot()
  ],
  providers: [EmpresaService, EmpresaDetailsResolver],
  bootstrap: []
})
export class EmpresaModule {}
