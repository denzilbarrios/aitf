import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "@core/guards";

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./feature/user/user.module").then((module) => module.UserModule)
  },

  /*
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
  */
  {
    path: "agencias",
    canActivate: [AuthGuard],
    loadChildren: () => import("./feature/agencia/agencia.module").then((module) => module.AgenciaModule)
  },
  {
    path: "boletos",
    canActivate: [AuthGuard],
    loadChildren: () => import("./feature/boleto/boleto.module").then((module) => module.BoletoModule)
  },
  
  {
    path: "destinos",
    canActivate: [AuthGuard],
    loadChildren: () => import("./feature/destino/destino.module").then((module) => module.DestinoModule)
  },
  {
    path: "empleados",
    canActivate: [AuthGuard],
    loadChildren: () => import("./feature/empleado/empleado.module").then((module) => module.EmpleadoModule)
  },
  {
    path: "empresas",
    canActivate: [AuthGuard],
    loadChildren: () => import("./feature/empresa/empresa.module").then((module) => module.EmpresaModule)
  },
  {
    path: "facturas",
    canActivate: [AuthGuard],
    loadChildren: () => import("./feature/factura/factura.module").then((module) => module.FacturaModule)
  },
  {
    path: "horarios",
    canActivate: [AuthGuard],
    loadChildren: () => import("./feature/horario/horario.module").then((module) => module.HorarioModule)
  },
  {
    path: "puestos",
    canActivate: [AuthGuard],
    loadChildren: () => import("./feature/puesto/puesto.module").then((module) => module.PuestoModule)
  },
  {
    path: "rutas",
    canActivate: [AuthGuard],
    loadChildren: () => import("./feature/ruta/ruta.module").then((module) => module.RutaModule)
  },
  {
    path: "series",
    canActivate: [AuthGuard],
    loadChildren: () => import("./feature/serie/serie.module").then((module) => module.SerieModule)
  },
  {
    path: "servicios",
    canActivate: [AuthGuard],
    loadChildren: () => import("./feature/servicio/servicio.module").then((module) => module.ServicioModule)
  },
  {
    path: "tipoAgencias",
    canActivate: [AuthGuard],
    loadChildren: () => import("./feature/tipoAgencia/tipoAgencia.module").then((module) => module.TipoAgenciaModule)
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
