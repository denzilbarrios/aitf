import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "@core/layout/layout.component";
import { BoletoListComponent } from "./boleto-list/boleto-list.component";
import { BoletoFormComponent } from "./boleto-form/boleto-form.component";
import { BoletoDetailsComponent } from "./boleto-details/boleto-details.component";
import { BoletoDetailsResolver } from "./boleto.resolver";

const boletoRoutes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        component: BoletoListComponent
      },
      {
        path: "create",
        component: BoletoFormComponent
      },
      {
        path: "edit/:boletoId",
        component: BoletoFormComponent,
        resolve: { boletoDetails: BoletoDetailsResolver }
      },
      {
        path: "details/:boletoId",
        component: BoletoDetailsComponent,
        resolve: { boletoDetails: BoletoDetailsResolver }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(boletoRoutes)],
  exports: [RouterModule]
})
export class BoletoRoutingModule {}
