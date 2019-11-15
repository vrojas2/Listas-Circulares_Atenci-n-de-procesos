import Proceso from "./Proceso.js";

export default class Probabilidad {
    constructor() {
        this._numeroCiclo = 0;
    }

    revisarNuevoProceso() {
        if (this.nuevoProcesoDeProbabilidad() < 40) {
            this._numeroCiclo++;
            let nuevoProceso = new Proceso(this._numeroCiclo, this.cantidadDeCiclos());
            return nuevoProceso;
        } else {
            return null;
        }
    }

    nuevoProcesoDeProbabilidad() {
        return Math.floor((Math.random() * 100 + 1));
    }

    cantidadDeCiclos() {
        return Math.floor((Math.random() * 11 + 4));
    }
}