import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImageUrlReportes, ImageUrlPrediccion } from './image-url.model'; // Asegúrate de usar la ruta correcta al archivo del modelo

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // Lista de URLs y nombres para el listbox de reportes
  urlsReportes: ImageUrlReportes[] = [
    { name: 'Seleccione una opción', src: '' }, // Opción predeterminada sin selección
    { name: 'Reporte Ingresos Mensual', src: '/apipy/reporte-ingresos-mensual-anual' },
    { name: 'Reporte Cantidad Mensual', src: '/apipy/reporte-cantidad-mensual-anual' },
    { name: 'Reporte Ventas Mensuales por Ruta', src: '/apipy/reporte-ventas-mensuales-ruta' },
    { name: 'Reporte Ingresos Mensuales por Ruta', src: '/apipy/reporte-ingresos-mensuales-ruta' },
    { name: 'Reporte Top 25 Ventas por Horario', src: '/apipy/top25-ventas-por-horario' },
    { name: 'Reporte Top 25 Ingresos por Horario', src: '/apipy/top25-ingresos-por-horario' },
    { name: 'Reporte Top 25 Horarios Promedio Diario', src: '/apipy/top25-horarios-promedio-diario' },
    { name: 'Reporte Top 25 Horarios Promedio Diario Ingresos', src: '/apipy/top25-horarios-promedio-diario-ingresos' },
    { name: 'Reporte Ventas Trimestrales', src: '/apipy/reporte-ventas-trimestrales' },
    { name: 'Reporte Ingresos Trimestrales', src: '/apipy/reporte-ingresos-trimestrales' },
   
    // Puedes añadir más URLs de reportes aquí
  ];

  // Lista de URLs y nombres para el listbox de predicciones
  urlsPrediccion: ImageUrlPrediccion[] = [
    { name: 'Seleccione una opción', src: '' }, // Opción predeterminada sin selección
    { name: 'Reporte Predicciones Ingresos', src: '/apipy/reporte-predicciones-ingresos' },
    { name: 'Reporte Predicciones Futuras', src: '/apipy/reporte-predicciones-futuras' },
    { name: 'Reporte Predicciones Boletos', src: '/apipy/reporte-predicciones-boletos' },
    { name: 'Reporte Predicciones por Período', src: '/apipy/reporte-predicciones-por-periodo' },
    { name: 'Reporte Predicciones por Ruta', src: '/apipy/reporte-predicciones-por-ruta' },
    { name: 'Predicciones Futuras por Ruta y Período', src: '/apipy/predicciones-futuras-por-ruta-periodo' },
    { name: 'Predicciones Ingresos por Ruta', src: '/apipy/predicciones-ingresos-por-ruta' },
    { name: 'Predicciones Ingresos por Ruta y Período', src: '/apipy/predicciones-ingresos-por-ruta-periodo' },
           
    // Puedes añadir más URLs de predicciones aquí
  ];

  // URL seleccionada actualmente
  selectedUrlReportes: string | null = null;
  selectedUrlPrediccion: string | null = null;
  isLoadingReportes: boolean = false; // Variable para controlar la carga de reportes
  isLoadingPrediccion: boolean = false; // Variable para controlar la carga de predicción
  zoomed: string | null = null; // Almacena el estado actual del zoom

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  // Método para manejar el cambio de selección en el listbox de reportes
  onSelectionChangeReportes(url: string) {
    if (url !== '') {
      // Eliminar la opción "Seleccione una opción" de la lista de reportes
      this.urlsReportes = this.urlsReportes.filter(option => option.src !== '');
    }
    this.selectedUrlReportes = url;
    this.isLoadingReportes = true; // Establecer isLoadingReportes en true al seleccionar un reporte
    this.zoomed = null; // Reiniciar el estado de zoom al cambiar la imagen

    // Luego, cargar la imagen
    this.loadImage(url, 'reportes');
  }

  // Método para manejar el cambio de selección en el listbox de predicciones
  onSelectionChangePrediccion(url: string) {
    if (url !== '') {
      // Eliminar la opción "Seleccione una opción" de la lista de predicciones
      this.urlsPrediccion = this.urlsPrediccion.filter(option => option.src !== '');
    }
    this.selectedUrlPrediccion = url;
    this.isLoadingPrediccion = true; // Establecer isLoadingPrediccion en true al seleccionar una predicción
    this.zoomed = null; // Reiniciar el estado de zoom al cambiar la imagen

    // Luego, cargar la imagen
    this.loadImage(url, 'predicciones');
  }

  // Método para cargar la imagen y manejar los estados de carga
  loadImage(url: string, section: string) {
    this.http.get(url, { responseType: 'blob' }).subscribe(
      (data) => {
        // Cuando la imagen se carga con éxito
        const reader = new FileReader();
        reader.readAsDataURL(data);
        reader.onloadend = () => {
          if (section === 'reportes') {
            this.selectedUrlReportes = reader.result as string;
            this.isLoadingReportes = false; // Establecer isLoadingReportes en false después de cargar la imagen
          } else if (section === 'predicciones') {
            this.selectedUrlPrediccion = reader.result as string;
            this.isLoadingPrediccion = false; // Establecer isLoadingPrediccion en false después de cargar la imagen
          }
        };
      },
      (error) => {
        // Manejar el error en caso de que la carga falle
        console.error('Error al cargar la imagen:', error);
        if (section === 'reportes') {
          this.isLoadingReportes = false; // Establecer isLoadingReportes en false en caso de error
        } else if (section === 'predicciones') {
          this.isLoadingPrediccion = false; // Establecer isLoadingPrediccion en false en caso de error
        }
      }
    );
  }

  // Método para habilitar o deshabilitar el zoom en una imagen
  toggleZoom(section: string) {
    if (this.zoomed === section) {
      this.zoomed = null; // Si ya está ampliada, deshabilita el zoom
    } else {
      this.zoomed = section; // Si no está ampliada, habilita el zoom
    }
  }

  // Método para limpiar la imagen seleccionada
  clearImage(section: string) {
    if (section === 'reportes') {
      this.selectedUrlReportes = null;
      this.isLoadingReportes = false; // Asegúrate de restablecer el estado de carga
    } else if (section === 'prediccion') { 
      this.selectedUrlPrediccion = null;
      this.isLoadingPrediccion = false; // Asegúrate de restablecer el estado de carga
    }
    this.zoomed = null; // Reiniciar el estado de zoom al limpiar la imagen
  }
}
