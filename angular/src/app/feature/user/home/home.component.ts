import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  imageUrl: string;
  constructor( private http: HttpClient) { }

  ngOnInit(): void {
  }
  getAndDisplayImage() {
    // Realiza una solicitud HTTP GET para obtener la imagen del servidor
    this.http.get('http://localhost:5000/apipy/reporte-predicciones-ingresos', { responseType: 'text' }).subscribe(
      (data: string) => {
        // Asigna la URL de la imagen a la variable imageUrl
        this.imageUrl = data;
      },
      (error) => {
        console.error('Error al obtener la imagen', error);
      }
    );
  }
}
