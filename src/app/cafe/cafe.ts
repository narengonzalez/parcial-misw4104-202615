export class Cafe {
  id: number;
  nombre: string;
  tipo: string;
  region: string;
  sabor: string;
  altura: number;
  imagen: string;

  /**
   * 
   * @param id - Id del cafe
   * @param nombre - Nombre del cafe
   * @param tipo - Tipo de cafe que se sirve
   * @param region - De dónde es originario el cafe
   * @param sabor - Mezcla de sabores que puede tener el cafe
   * @param altura - Altura en metros donde se siembra el cafe
   * @param imagen - URL del cafe a mostrar
   */
  constructor(
    id: number,
    nombre: string,
    tipo: string,
    region: string,
    sabor: string,
    altura: number,
    imagen: string,
  ) {
    this.id = id;
    this.nombre = nombre;
    this.tipo = tipo;
    this.region = region;
    this.sabor = sabor;
    this.altura = altura;
    this.imagen = imagen;
  }
}
