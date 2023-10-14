import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot } from "@angular/router";
import { map } from "rxjs/operators";
import { HorarioService } from "./horario.service";

@Injectable()
export class HorarioDetailsResolver  {
  constructor(private horarioService: HorarioService) {}

  resolve(route: ActivatedRouteSnapshot): any {
    return this.horarioService.getById(route.paramMap.get("horarioId")).pipe(
      map((result: any) => {
        return result;
      })
    );
  }
}
