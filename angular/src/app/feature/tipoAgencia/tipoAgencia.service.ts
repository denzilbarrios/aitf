import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import { map, catchError } from "rxjs/operators";

import { environment } from "../../../environments/environment";
import { throwError } from "rxjs";

@Injectable()
export class TipoAgenciaService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<any[]>(environment.apiEndpoint + "/tipoAgencias").pipe(
      map((res: any) => res.data),
      catchError(this.handleErrorObservable)
    );
  }

  getById(_id: string) {
    return this.http.get(environment.apiEndpoint + "/tipoAgencia/" + _id).pipe(
      map((res: any) => res.data),
      catchError(this.handleErrorObservable)
    );
  }

  create(tipoAgencia: any) {
    return this.http.post(environment.apiEndpoint + "/tipoAgencias", tipoAgencia).pipe(
      map((res: any) => res.data),
      catchError(this.handleErrorObservable)
    );
  }

  update(tipoAgencia: any) {
    return this.http.put(environment.apiEndpoint + "/tipoAgencia/" + tipoAgencia._id, tipoAgencia).pipe(
      map((res: any) => res.data),
      catchError(this.handleErrorObservable)
    );
  }

  delete(_id: string) {
    return this.http.delete(environment.apiEndpoint + "/tipoAgencia/" + _id).pipe(
      map((res: any) => res.data),
      catchError(this.handleErrorObservable)
    );
  }
  private handleErrorObservable(error: HttpErrorResponse) {
    return throwError(error);
  }
}
