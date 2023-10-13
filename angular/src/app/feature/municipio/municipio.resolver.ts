import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot } from "@angular/router";
import { map } from "rxjs/operators";
import { MunicipioService } from "./municipio.service";

@Injectable()
export class MunicipioDetailsResolver  {
  constructor(private municipioService: MunicipioService) {}

  resolve(route: ActivatedRouteSnapshot): any {
    return this.municipioService.getById(route.paramMap.get("municipioId")).pipe(
      map((result: any) => {
        return result;
      })
    );
  }
}
