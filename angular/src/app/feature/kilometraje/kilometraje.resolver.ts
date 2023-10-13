import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot } from "@angular/router";
import { map } from "rxjs/operators";
import { KilometrajeService } from "./kilometraje.service";

@Injectable()
export class KilometrajeDetailsResolver  {
  constructor(private kilometrajeService: KilometrajeService) {}

  resolve(route: ActivatedRouteSnapshot): any {
    return this.kilometrajeService.getById(route.paramMap.get("kilometrajeId")).pipe(
      map((result: any) => {
        return result;
      })
    );
  }
}
