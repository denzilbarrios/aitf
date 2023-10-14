import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot } from "@angular/router";
import { map } from "rxjs/operators";
import { EmpresaService } from "./empresa.service";

@Injectable()
export class EmpresaDetailsResolver  {
  constructor(private empresaService: EmpresaService) {}

  resolve(route: ActivatedRouteSnapshot): any {
    return this.empresaService.getById(route.paramMap.get("empresaId")).pipe(
      map((result: any) => {
        return result;
      })
    );
  }
}
