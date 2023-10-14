import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot } from "@angular/router";
import { map } from "rxjs/operators";
import { FacturaService } from "./factura.service";

@Injectable()
export class FacturaDetailsResolver  {
  constructor(private facturaService: FacturaService) {}

  resolve(route: ActivatedRouteSnapshot): any {
    return this.facturaService.getById(route.paramMap.get("facturaId")).pipe(
      map((result: any) => {
        return result;
      })
    );
  }
}
