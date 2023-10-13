import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import { map, catchError } from "rxjs/operators";

import { environment } from "../../../environments/environment";
import { throwError } from "rxjs";

@Injectable()
export class MunicipioService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<any[]>(environment.apiEndpoint + "/municipios").pipe(
      map((res: any) => res.data),
      catchError(this.handleErrorObservable)
    );
  }

  getById(_id: string) {
    return this.http.get(environment.apiEndpoint + "/municipio/" + _id).pipe(
      map((res: any) => res.data),
      catchError(this.handleErrorObservable)
    );
  }

  create(municipio: any) {
    return this.http.post(environment.apiEndpoint + "/municipios", municipio).pipe(
      map((res: any) => res.data),
      catchError(this.handleErrorObservable)
    );
  }

  update(municipio: any) {
    return this.http.put(environment.apiEndpoint + "/municipio/" + municipio._id, municipio).pipe(
      map((res: any) => res.data),
      catchError(this.handleErrorObservable)
    );
  }

  delete(_id: string) {
    return this.http.delete(environment.apiEndpoint + "/municipio/" + _id).pipe(
      map((res: any) => res.data),
      catchError(this.handleErrorObservable)
    );
  }
  private handleErrorObservable(error: HttpErrorResponse) {
    return throwError(error);
  }
}
