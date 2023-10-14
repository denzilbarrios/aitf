import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot } from "@angular/router";
import { map } from "rxjs/operators";
import { EmpleadoService } from "./empleado.service";

@Injectable()
export class EmpleadoDetailsResolver  {
  constructor(private empleadoService: EmpleadoService) {}

  resolve(route: ActivatedRouteSnapshot): any {
    return this.empleadoService.getById(route.paramMap.get("empleadoId")).pipe(
      map((result: any) => {
        return result;
      })
    );
  }
}
