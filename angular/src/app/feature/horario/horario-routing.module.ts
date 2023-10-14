import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "@core/layout/layout.component";
import { HorarioListComponent } from "./horario-list/horario-list.component";
import { HorarioFormComponent } from "./horario-form/horario-form.component";
import { HorarioDetailsComponent } from "./horario-details/horario-details.component";
import { HorarioDetailsResolver } from "./horario.resolver";

const horarioRoutes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        component: HorarioListComponent
      },
      {
        path: "create",
        component: HorarioFormComponent
      },
      {
        path: "edit/:horarioId",
        component: HorarioFormComponent,
        resolve: { horarioDetails: HorarioDetailsResolver }
      },
      {
        path: "details/:horarioId",
        component: HorarioDetailsComponent,
        resolve: { horarioDetails: HorarioDetailsResolver }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(horarioRoutes)],
  exports: [RouterModule]
})
export class HorarioRoutingModule {}
