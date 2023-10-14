import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot } from "@angular/router";
import { map } from "rxjs/operators";
import { ServicioService } from "./servicio.service";

@Injectable()
export class ServicioDetailsResolver  {
  constructor(private servicioService: ServicioService) {}

  resolve(route: ActivatedRouteSnapshot): any {
    return this.servicioService.getById(route.paramMap.get("servicioId")).pipe(
      map((result: any) => {
        return result;
      })
    );
  }
}
