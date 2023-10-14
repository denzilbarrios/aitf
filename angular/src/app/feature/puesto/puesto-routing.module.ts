import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "@core/layout/layout.component";
import { PuestoListComponent } from "./puesto-list/puesto-list.component";
import { PuestoFormComponent } from "./puesto-form/puesto-form.component";
import { PuestoDetailsComponent } from "./puesto-details/puesto-details.component";
import { PuestoDetailsResolver } from "./puesto.resolver";

const puestoRoutes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        component: PuestoListComponent
      },
      {
        path: "create",
        component: PuestoFormComponent
      },
      {
        path: "edit/:puestoId",
        component: PuestoFormComponent,
        resolve: { puestoDetails: PuestoDetailsResolver }
      },
      {
        path: "details/:puestoId",
        component: PuestoDetailsComponent,
        resolve: { puestoDetails: PuestoDetailsResolver }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(puestoRoutes)],
  exports: [RouterModule]
})
export class PuestoRoutingModule {}
