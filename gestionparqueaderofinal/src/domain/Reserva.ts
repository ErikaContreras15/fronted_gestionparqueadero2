export interface Reserva {
    id: number;
    usuarioId: number;
    espacioParqueaderoId: number;
    fechaReserva: string; // Formato ISO
    arriendoMensual: boolean;
  }
  