import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot } from "@angular/router";
import { map } from "rxjs/operators";
import { AgenciaService } from "./agencia.service";

@Injectable()
export class AgenciaDetailsResolver  {
  constructor(private agenciaService: AgenciaService) {}

  resolve(route: ActivatedRouteSnapshot): any {
    return this.agenciaService.getById(route.paramMap.get("agenciaId")).pipe(
      map((result: any) => {
        return result;
      })
    );
  }
}
