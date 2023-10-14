import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "@core/layout/layout.component";
import { AgenciaListComponent } from "./agencia-list/agencia-list.component";
import { AgenciaFormComponent } from "./agencia-form/agencia-form.component";
import { AgenciaDetailsComponent } from "./agencia-details/agencia-details.component";
import { AgenciaDetailsResolver } from "./agencia.resolver";

const agenciaRoutes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        component: AgenciaListComponent
      },
      {
        path: "create",
        component: AgenciaFormComponent
      },
      {
        path: "edit/:agenciaId",
        component: AgenciaFormComponent,
        resolve: { agenciaDetails: AgenciaDetailsResolver }
      },
      {
        path: "details/:agenciaId",
        component: AgenciaDetailsComponent,
        resolve: { agenciaDetails: AgenciaDetailsResolver }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(agenciaRoutes)],
  exports: [RouterModule]
})
export class AgenciaRoutingModule {}
