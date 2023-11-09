import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImageUrlReportes, ImageUrlPrediccion } from './image-url.model'; // Asegúrate de usar la ruta correcta al archivo del modelo


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // Lista de URLs y nombres para el listbox
  urlsReportes: ImageUrlReportes[] = [
    { name: 'Seleccione una opción', src: '' }, // Opción predeterminada sin selección
    { name: 'Reporte Ingresos Mensual', src: '/apipy/reporte-ingresos-mensual-anual' },
    { name: 'Reporte Cantidad Mensual', src: '/apipy/reporte-cantidad-mensual-anual' },
    { name: 'Reporte Ventas Mensuales por Ruta', src: '/apipy/reporte-ventas-mensuales-ruta' },
    { name: 'Reporte Ingresos Mensuales por Ruta', src: '/apipy/reporte-ingresos-mensuales-ruta' },
    { name: 'Reporte Ventas por Día de la Semana', src: '/apipy/ventas-por-dia-semana' },
    { name: 'Reporte Promedio Ventas por Día de la Semana', src: '/apipy/promedio-ventas-por-dia-semana' },
    { name: 'Reporte Ingresos por Día de la Semana', src: '/apipy/ingresos-por-dia-semana' },
    { name: 'Reporte Promedio Ingresos por Día de la Semana', src: '/apipy/promedio-ingresos-por-dia-semana' },
    { name: 'Reporte Top 25 Ventas por Horario', src: '/apipy/top25-ventas-por-horario' },
    { name: 'Reporte Top 25 Ingresos por Horario', src: '/apipy/top25-ingresos-por-horario' },
    { name: 'Reporte Top 25 Horarios Promedio Diario', src: '/apipy/top25-horarios-promedio-diario' },
    { name: 'Reporte Top 25 Horarios Promedio Diario Ingresos', src: '/apipy/top25-horarios-promedio-diario-ingresos' },
    { name: 'Reporte Ventas Trimestrales', src: '/apipy/reporte-ventas-trimestrales' },
    { name: 'Reporte Ingresos Trimestrales', src: '/apipy/reporte-ingresos-trimestrales' },
   
    // Añade más URLs aquí
  ];

  // Lista de URLs y nombres para el listbox
  urlsPrediccion: ImageUrlPrediccion[] = [
    { name: 'Seleccione una opción', src: '' }, // Opción predeterminada sin selección
    { name: 'Reporte Predicciones Ingresos', src: '/apipy/reporte-predicciones-ingresos' },
    { name: 'Reporte Predicciones Futuras', src: '/apipy/reporte-predicciones-futuras' },
    { name: 'Reporte Predicciones Boletos', src: '/apipy/reporte-predicciones-boletos' },
    { name: 'Reporte Predicciones por Período', src: '/apipy/reporte-predicciones-por-periodo' },
    { name: 'Reporte Predicciones por Ruta', src: '/apipy/reporte-predicciones-por-ruta' },
    { name: 'Predicciones Futuras por Ruta y Período', src: '/apipy/predicciones-futuras-por-ruta-periodo' },
    { name: 'Predicciones y Comparación', src: '/apipy/predicciones-y-comparacion' },
    { name: 'Predicciones Ingresos por Ruta', src: '/apipy/predicciones-ingresos-por-ruta' },
    { name: 'Predicciones Ingresos por Ruta y Período', src: '/apipy/predicciones-ingresos-por-ruta-periodo' },
    { name: 'Predicciones Ventas Mensuales', src: '/apipy/predicciones-ventas-mensuales' },
    { name: 'Predicciones Ventas Futuras', src: '/apipy/predicciones-ventas-futuras' },
    { name: 'Predicciones Ingresos Futuros', src: '/apipy/predicciones-ingresos-futuros' },
       
    // Añade más URLs aquí
  ];


  // URL seleccionada actualmente
  selectedUrlReportes: string | null = null;
  selectedUrlPrediccion: string | null = null;
  zoomed: string | null = null; // Almacena el estado actual del zoom
  constructor() { }

  ngOnInit(): void {
  }

  // Método para manejar el cambio de selección en el listbox
  onSelectionChangeReportes(url: string) {
    if (url !== '') {
      // Eliminar la opción "Seleccione una opción" de la lista de reportes
      this.urlsReportes = this.urlsReportes.filter(option => option.src !== '');
    }
    this.selectedUrlReportes = url;
    this.zoomed = null; // Reiniciar el estado de zoom al cambiar la imagen
  }

  onSelectionChangePrediccion(url: string) {
    if (url !== '') {
      // Eliminar la opción "Seleccione una opción" de la lista de predicciones
      this.urlsPrediccion = this.urlsPrediccion.filter(option => option.src !== '');
    }
    this.selectedUrlPrediccion = url;
    this.zoomed = null; // Reiniciar el estado de zoom al cambiar la imagen
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
    } else if (section === 'prediccion') {
      this.selectedUrlPrediccion = null;
    }
    this.zoomed = null; // Reiniciar el estado de zoom al limpiar la imagen
  }

}
