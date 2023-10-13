import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "@core/layout/layout.component";
import { KilometrajeListComponent } from "./kilometraje-list/kilometraje-list.component";
import { KilometrajeFormComponent } from "./kilometraje-form/kilometraje-form.component";
import { KilometrajeDetailsComponent } from "./kilometraje-details/kilometraje-details.component";
import { KilometrajeDetailsResolver } from "./kilometraje.resolver";

const kilometrajeRoutes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        component: KilometrajeListComponent
      },
      {
        path: "create",
        component: KilometrajeFormComponent
      },
      {
        path: "edit/:kilometrajeId",
        component: KilometrajeFormComponent,
        resolve: { kilometrajeDetails: KilometrajeDetailsResolver }
      },
      {
        path: "details/:kilometrajeId",
        component: KilometrajeDetailsComponent,
        resolve: { kilometrajeDetails: KilometrajeDetailsResolver }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(kilometrajeRoutes)],
  exports: [RouterModule]
})
export class KilometrajeRoutingModule {}
