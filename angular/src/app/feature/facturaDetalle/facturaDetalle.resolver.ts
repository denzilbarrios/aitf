import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot } from "@angular/router";
import { map } from "rxjs/operators";
import { FacturaDetalleService } from "./facturaDetalle.service";

@Injectable()
export class FacturaDetalleDetailsResolver  {
  constructor(private facturaDetalleService: FacturaDetalleService) {}

  resolve(route: ActivatedRouteSnapshot): any {
    return this.facturaDetalleService.getById(route.paramMap.get("facturaDetalleId")).pipe(
      map((result: any) => {
        return result;
      })
    );
  }
}
