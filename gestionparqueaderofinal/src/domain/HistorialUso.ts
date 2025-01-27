export interface HistorialUso {
    id: number;
    espacioParqueaderoId: number;
    placaVehiculo: string;
    fecha: string; // Formato ISO
    accion: string; // "ingreso" o "salida"
    montoPagado?: number;
  }
  