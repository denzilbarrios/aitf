import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot } from "@angular/router";
import { map } from "rxjs/operators";
import { DestinoService } from "./destino.service";

@Injectable()
export class DestinoDetailsResolver  {
  constructor(private destinoService: DestinoService) {}

  resolve(route: ActivatedRouteSnapshot): any {
    return this.destinoService.getById(route.paramMap.get("destinoId")).pipe(
      map((result: any) => {
        return result;
      })
    );
  }
}
