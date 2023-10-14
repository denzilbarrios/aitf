import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot } from "@angular/router";
import { map } from "rxjs/operators";
import { PuestoService } from "./puesto.service";

@Injectable()
export class PuestoDetailsResolver  {
  constructor(private puestoService: PuestoService) {}

  resolve(route: ActivatedRouteSnapshot): any {
    return this.puestoService.getById(route.paramMap.get("puestoId")).pipe(
      map((result: any) => {
        return result;
      })
    );
  }
}
