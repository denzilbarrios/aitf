import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import { map, catchError } from "rxjs/operators";

import { environment } from "../../../environments/environment";
import { throwError } from "rxjs";

@Injectable()
export class EmpresaService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<any[]>(environment.apiEndpoint + "/empresas").pipe(
      map((res: any) => res.data),
      catchError(this.handleErrorObservable)
    );
  }

  getById(_id: string) {
    return this.http.get(environment.apiEndpoint + "/empresa/" + _id).pipe(
      map((res: any) => res.data),
      catchError(this.handleErrorObservable)
    );
  }

  create(empresa: any) {
    return this.http.post(environment.apiEndpoint + "/empresas", empresa).pipe(
      map((res: any) => res.data),
      catchError(this.handleErrorObservable)
    );
  }

  update(empresa: any) {
    return this.http.put(environment.apiEndpoint + "/empresa/" + empresa._id, empresa).pipe(
      map((res: any) => res.data),
      catchError(this.handleErrorObservable)
    );
  }

  delete(_id: string) {
    return this.http.delete(environment.apiEndpoint + "/empresa/" + _id).pipe(
      map((res: any) => res.data),
      catchError(this.handleErrorObservable)
    );
  }
  private handleErrorObservable(error: HttpErrorResponse) {
    return throwError(error);
  }
}
