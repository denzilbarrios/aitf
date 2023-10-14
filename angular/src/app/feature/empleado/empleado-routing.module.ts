import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "@core/layout/layout.component";
import { EmpleadoListComponent } from "./empleado-list/empleado-list.component";
import { EmpleadoFormComponent } from "./empleado-form/empleado-form.component";
import { EmpleadoDetailsComponent } from "./empleado-details/empleado-details.component";
import { EmpleadoDetailsResolver } from "./empleado.resolver";

const empleadoRoutes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        component: EmpleadoListComponent
      },
      {
        path: "create",
        component: EmpleadoFormComponent
      },
      {
        path: "edit/:empleadoId",
        component: EmpleadoFormComponent,
        resolve: { empleadoDetails: EmpleadoDetailsResolver }
      },
      {
        path: "details/:empleadoId",
        component: EmpleadoDetailsComponent,
        resolve: { empleadoDetails: EmpleadoDetailsResolver }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(empleadoRoutes)],
  exports: [RouterModule]
})
export class EmpleadoRoutingModule {}
