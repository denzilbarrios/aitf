import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot } from "@angular/router";
import { map } from "rxjs/operators";
import { BoletoService } from "./boleto.service";

@Injectable()
export class BoletoDetailsResolver  {
  constructor(private boletoService: BoletoService) {}

  resolve(route: ActivatedRouteSnapshot): any {
    return this.boletoService.getById(route.paramMap.get("boletoId")).pipe(
      map((result: any) => {
        return result;
      })
    );
  }
}
