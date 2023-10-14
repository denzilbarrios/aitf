import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot } from "@angular/router";
import { map } from "rxjs/operators";
import { SerieService } from "./serie.service";

@Injectable()
export class SerieDetailsResolver  {
  constructor(private serieService: SerieService) {}

  resolve(route: ActivatedRouteSnapshot): any {
    return this.serieService.getById(route.paramMap.get("serieId")).pipe(
      map((result: any) => {
        return result;
      })
    );
  }
}
