import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "@core/layout/layout.component";
import { TipoAgenciaListComponent } from "./tipoAgencia-list/tipoAgencia-list.component";
import { TipoAgenciaFormComponent } from "./tipoAgencia-form/tipoAgencia-form.component";
import { TipoAgenciaDetailsComponent } from "./tipoAgencia-details/tipoAgencia-details.component";
import { TipoAgenciaDetailsResolver } from "./tipoAgencia.resolver";

const tipoAgenciaRoutes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        component: TipoAgenciaListComponent
      },
      {
        path: "create",
        component: TipoAgenciaFormComponent
      },
      {
        path: "edit/:tipoAgenciaId",
        component: TipoAgenciaFormComponent,
        resolve: { tipoAgenciaDetails: TipoAgenciaDetailsResolver }
      },
      {
        path: "details/:tipoAgenciaId",
        component: TipoAgenciaDetailsComponent,
        resolve: { tipoAgenciaDetails: TipoAgenciaDetailsResolver }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(tipoAgenciaRoutes)],
  exports: [RouterModule]
})
export class TipoAgenciaRoutingModule {}
