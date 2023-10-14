import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "@core/layout/layout.component";
import { ServicioListComponent } from "./servicio-list/servicio-list.component";
import { ServicioFormComponent } from "./servicio-form/servicio-form.component";
import { ServicioDetailsComponent } from "./servicio-details/servicio-details.component";
import { ServicioDetailsResolver } from "./servicio.resolver";

const servicioRoutes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        component: ServicioListComponent
      },
      {
        path: "create",
        component: ServicioFormComponent
      },
      {
        path: "edit/:servicioId",
        component: ServicioFormComponent,
        resolve: { servicioDetails: ServicioDetailsResolver }
      },
      {
        path: "details/:servicioId",
        component: ServicioDetailsComponent,
        resolve: { servicioDetails: ServicioDetailsResolver }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(servicioRoutes)],
  exports: [RouterModule]
})
export class ServicioRoutingModule {}
