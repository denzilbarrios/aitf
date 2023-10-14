import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "@core/layout/layout.component";
import { SerieListComponent } from "./serie-list/serie-list.component";
import { SerieFormComponent } from "./serie-form/serie-form.component";
import { SerieDetailsComponent } from "./serie-details/serie-details.component";
import { SerieDetailsResolver } from "./serie.resolver";

const serieRoutes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        component: SerieListComponent
      },
      {
        path: "create",
        component: SerieFormComponent
      },
      {
        path: "edit/:serieId",
        component: SerieFormComponent,
        resolve: { serieDetails: SerieDetailsResolver }
      },
      {
        path: "details/:serieId",
        component: SerieDetailsComponent,
        resolve: { serieDetails: SerieDetailsResolver }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(serieRoutes)],
  exports: [RouterModule]
})
export class SerieRoutingModule {}
