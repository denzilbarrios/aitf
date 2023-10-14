import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import { map, catchError } from "rxjs/operators";

import { environment } from "../../../environments/environment";
import { throwError } from "rxjs";

@Injectable()
export class FacturaDetalleService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<any[]>(environment.apiEndpoint + "/facturaDetalles").pipe(
      map((res: any) => res.data),
      catchError(this.handleErrorObservable)
    );
  }

  getById(_id: string) {
    return this.http.get(environment.apiEndpoint + "/facturaDetalle/" + _id).pipe(
      map((res: any) => res.data),
      catchError(this.handleErrorObservable)
    );
  }

  create(facturaDetalle: any) {
    return this.http.post(environment.apiEndpoint + "/facturaDetalles", facturaDetalle).pipe(
      map((res: any) => res.data),
      catchError(this.handleErrorObservable)
    );
  }

  update(facturaDetalle: any) {
    return this.http.put(environment.apiEndpoint + "/facturaDetalle/" + facturaDetalle._id, facturaDetalle).pipe(
      map((res: any) => res.data),
      catchError(this.handleErrorObservable)
    );
  }

  delete(_id: string) {
    return this.http.delete(environment.apiEndpoint + "/facturaDetalle/" + _id).pipe(
      map((res: any) => res.data),
      catchError(this.handleErrorObservable)
    );
  }
  private handleErrorObservable(error: HttpErrorResponse) {
    return throwError(error);
  }
}
