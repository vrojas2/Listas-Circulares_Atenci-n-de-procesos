export default class Proceso {
    constructor(numero, ciclos) {
        this._numero = numero;
        this._ciclos = ciclos;
        this._siguiente = null;
    }

    get numero() {
        return this._numero;
    }

    get ciclos() {
        return this._ciclos;
    }

    set ciclos(nuevaVal) {
        this._ciclos = nuevaVal;
    }

    get siguiente() {
        return this._siguiente;
    }

    set siguiente(nuevoSiguiente) {
        this._siguiente = nuevoSiguiente;
    }
}
