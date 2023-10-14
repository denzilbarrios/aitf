import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "@core/layout/layout.component";
import { RutaListComponent } from "./ruta-list/ruta-list.component";
import { RutaFormComponent } from "./ruta-form/ruta-form.component";
import { RutaDetailsComponent } from "./ruta-details/ruta-details.component";
import { RutaDetailsResolver } from "./ruta.resolver";

const rutaRoutes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        component: RutaListComponent
      },
      {
        path: "create",
        component: RutaFormComponent
      },
      {
        path: "edit/:rutaId",
        component: RutaFormComponent,
        resolve: { rutaDetails: RutaDetailsResolver }
      },
      {
        path: "details/:rutaId",
        component: RutaDetailsComponent,
        resolve: { rutaDetails: RutaDetailsResolver }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(rutaRoutes)],
  exports: [RouterModule]
})
export class RutaRoutingModule {}
