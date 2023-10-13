import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import { map, catchError } from "rxjs/operators";

import { environment } from "../../../environments/environment";
import { throwError } from "rxjs";

@Injectable()
export class KilometrajeService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<any[]>(environment.apiEndpoint + "/kilometrajes").pipe(
      map((res: any) => res.data),
      catchError(this.handleErrorObservable)
    );
  }

  getById(_id: string) {
    return this.http.get(environment.apiEndpoint + "/kilometraje/" + _id).pipe(
      map((res: any) => res.data),
      catchError(this.handleErrorObservable)
    );
  }

  create(kilometraje: any) {
    return this.http.post(environment.apiEndpoint + "/kilometrajes", kilometraje).pipe(
      map((res: any) => res.data),
      catchError(this.handleErrorObservable)
    );
  }

  update(kilometraje: any) {
    return this.http.put(environment.apiEndpoint + "/kilometraje/" + kilometraje._id, kilometraje).pipe(
      map((res: any) => res.data),
      catchError(this.handleErrorObservable)
    );
  }

  delete(_id: string) {
    return this.http.delete(environment.apiEndpoint + "/kilometraje/" + _id).pipe(
      map((res: any) => res.data),
      catchError(this.handleErrorObservable)
    );
  }
  private handleErrorObservable(error: HttpErrorResponse) {
    return throwError(error);
  }
}
