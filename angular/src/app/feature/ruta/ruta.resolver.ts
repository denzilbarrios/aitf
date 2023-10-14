import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot } from "@angular/router";
import { map } from "rxjs/operators";
import { RutaService } from "./ruta.service";

@Injectable()
export class RutaDetailsResolver  {
  constructor(private rutaService: RutaService) {}

  resolve(route: ActivatedRouteSnapshot): any {
    return this.rutaService.getById(route.paramMap.get("rutaId")).pipe(
      map((result: any) => {
        return result;
      })
    );
  }
}
