import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "@core/layout/layout.component";
import { EmpresaListComponent } from "./empresa-list/empresa-list.component";
import { EmpresaFormComponent } from "./empresa-form/empresa-form.component";
import { EmpresaDetailsComponent } from "./empresa-details/empresa-details.component";
import { EmpresaDetailsResolver } from "./empresa.resolver";

const empresaRoutes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        component: EmpresaListComponent
      },
      {
        path: "create",
        component: EmpresaFormComponent
      },
      {
        path: "edit/:empresaId",
        component: EmpresaFormComponent,
        resolve: { empresaDetails: EmpresaDetailsResolver }
      },
      {
        path: "details/:empresaId",
        component: EmpresaDetailsComponent,
        resolve: { empresaDetails: EmpresaDetailsResolver }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(empresaRoutes)],
  exports: [RouterModule]
})
export class EmpresaRoutingModule {}
