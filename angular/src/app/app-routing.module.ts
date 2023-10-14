import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "@core/guards";

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./feature/user/user.module").then((module) => module.UserModule)
  },
  {
    path: "contacts",
    canActivate: [AuthGuard],
    loadChildren: () => import("./feature/contact/contact.module").then((module) => module.ContactModule)
  },
  {
    path: "municipios",
    canActivate: [AuthGuard],
    loadChildren: () => import("./feature/municipio/municipio.module").then((module) => module.MunicipioModule)
  },
  {
    path: "kilometrajes",
    canActivate: [AuthGuard],
    loadChildren: () => import("./feature/kilometraje/kilometraje.module").then((module) => module.KilometrajeModule)
  },
  {
    path: "agencias",
    canActivate: [AuthGuard],
    loadChildren: () => import("./feature/agencia/agencia.module").then((module) => module.AgenciaModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // relativeLinkResolution: "legacy"
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
