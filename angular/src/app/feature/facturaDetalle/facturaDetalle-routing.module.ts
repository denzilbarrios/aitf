import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "@core/layout/layout.component";
import { FacturaDetalleListComponent } from "./facturaDetalle-list/facturaDetalle-list.component";
import { FacturaDetalleFormComponent } from "./facturaDetalle-form/facturaDetalle-form.component";
import { FacturaDetalleDetailsComponent } from "./facturaDetalle-details/facturaDetalle-details.component";
import { FacturaDetalleDetailsResolver } from "./facturaDetalle.resolver";

const facturaDetalleRoutes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        component: FacturaDetalleListComponent
      },
      {
        path: "create",
        component: FacturaDetalleFormComponent
      },
      {
        path: "edit/:facturaDetalleId",
        component: FacturaDetalleFormComponent,
        resolve: { facturaDetalleDetails: FacturaDetalleDetailsResolver }
      },
      {
        path: "details/:facturaDetalleId",
        component: FacturaDetalleDetailsComponent,
        resolve: { facturaDetalleDetails: FacturaDetalleDetailsResolver }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(facturaDetalleRoutes)],
  exports: [RouterModule]
})
export class FacturaDetalleRoutingModule {}
