
export class Usuario {
    public id?: number;
    public username: string = '';
    public contrasena: string = '';
    public nombre?: string;
    public email: string = '';
    public rol?: 'cliente' | 'administrador';
    public telefono?: string;
    public biografia?: string;
    public notificacionActiva?: boolean;


    //Para el administrador Observe y modifique la informacion
    //de los clientes registrados
    constructor(data: Partial<Usuario> = {}) {
      /*this.id = data.id || '';*/
      this.id = data.id || undefined; // Maneja number o string
      this.username = data.username || '';
      this.contrasena = data.contrasena || '';
      this.nombre = data.nombre || '';
      this.email = data.email || '';
      this.rol = data.rol || 'cliente';
      this.telefono = data.telefono || '';
      this.biografia = data.biografia || '';
    }
  }
  