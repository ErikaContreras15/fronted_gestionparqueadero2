export interface Horario {
    id: number;
    espacioParqueaderoId: number;
    diaSemana: string; // Ejemplo: "Lunes", "Martes"
    horaApertura: string; // Formato HH:mm (e.g., "08:00")
    horaCierre: string;   // Formato HH:mm
  }
  