import Probabilidad from "./Probabilidad.js";
import Cola from "./Cola.js";

class Main {
    constructor() {
        this._probabilidad = new Probabilidad();
        this._cola = new Cola(this._probabilidad);
    }

    empezarCola() {
        this._nuevaCola.iniciarCola();
        this._imprimirElementos();
    }

    _imprimirElementos() {
        console.log(this._nuevaCola.elementosString);
    }
}

let m = new Main();
m.empezarCola();

