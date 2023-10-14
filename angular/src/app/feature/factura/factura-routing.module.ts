import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "@core/layout/layout.component";
import { FacturaListComponent } from "./factura-list/factura-list.component";
import { FacturaFormComponent } from "./factura-form/factura-form.component";
import { FacturaDetailsComponent } from "./factura-details/factura-details.component";
import { FacturaDetailsResolver } from "./factura.resolver";

const facturaRoutes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        component: FacturaListComponent
      },
      {
        path: "create",
        component: FacturaFormComponent
      },
      {
        path: "edit/:facturaId",
        component: FacturaFormComponent,
        resolve: { facturaDetails: FacturaDetailsResolver }
      },
      {
        path: "details/:facturaId",
        component: FacturaDetailsComponent,
        resolve: { facturaDetails: FacturaDetailsResolver }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(facturaRoutes)],
  exports: [RouterModule]
})
export class FacturaRoutingModule {}
