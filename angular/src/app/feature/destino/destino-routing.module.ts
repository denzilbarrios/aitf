import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "@core/layout/layout.component";
import { DestinoListComponent } from "./destino-list/destino-list.component";
import { DestinoFormComponent } from "./destino-form/destino-form.component";
import { DestinoDetailsComponent } from "./destino-details/destino-details.component";
import { DestinoDetailsResolver } from "./destino.resolver";

const destinoRoutes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        component: DestinoListComponent
      },
      {
        path: "create",
        component: DestinoFormComponent
      },
      {
        path: "edit/:destinoId",
        component: DestinoFormComponent,
        resolve: { destinoDetails: DestinoDetailsResolver }
      },
      {
        path: "details/:destinoId",
        component: DestinoDetailsComponent,
        resolve: { destinoDetails: DestinoDetailsResolver }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(destinoRoutes)],
  exports: [RouterModule]
})
export class DestinoRoutingModule {}
