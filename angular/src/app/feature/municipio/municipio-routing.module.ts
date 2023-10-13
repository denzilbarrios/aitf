import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "@core/layout/layout.component";
import { MunicipioListComponent } from "./municipio-list/municipio-list.component";
import { MunicipioFormComponent } from "./municipio-form/municipio-form.component";
import { MunicipioDetailsComponent } from "./municipio-details/municipio-details.component";
import { MunicipioDetailsResolver } from "./municipio.resolver";

const municipioRoutes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        component: MunicipioListComponent
      },
      {
        path: "create",
        component: MunicipioFormComponent
      },
      {
        path: "edit/:municipioId",
        component: MunicipioFormComponent,
        resolve: { municipioDetails: MunicipioDetailsResolver }
      },
      {
        path: "details/:municipioId",
        component: MunicipioDetailsComponent,
        resolve: { municipioDetails: MunicipioDetailsResolver }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(municipioRoutes)],
  exports: [RouterModule]
})
export class MunicipioRoutingModule {}
