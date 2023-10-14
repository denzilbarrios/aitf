import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot } from "@angular/router";
import { map } from "rxjs/operators";
import { TipoAgenciaService } from "./tipoAgencia.service";

@Injectable()
export class TipoAgenciaDetailsResolver  {
  constructor(private tipoAgenciaService: TipoAgenciaService) {}

  resolve(route: ActivatedRouteSnapshot): any {
    return this.tipoAgenciaService.getById(route.paramMap.get("tipoAgenciaId")).pipe(
      map((result: any) => {
        return result;
      })
    );
  }
}
