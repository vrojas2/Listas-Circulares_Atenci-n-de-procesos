export default class Cola {
    constructor(probabilidad) {
        this._probabilidad = probabilidad;
        this._inicio = null;
        this._final = null;
        this._ciclosColasVacias = 0;
        this._procesoCompletado = 0;
        this._ciclosIzquierda = 0;
        this._processosIzquierdos = 0;
        this._ciclosTotales = 0;
        this._elementosString = "";
    }

    get atributesString() {
        return this._elementosString;
    }

    iniciarCola() {
        for (let i = 1; i <= 300; i++) {
            let nuevoProceso = this._probabilidad.revisarNuevoProceso();
            if (nuevoProceso != null) {
                this._ciclosTotales++;
                this.posicionarEnCola(nuevoProceso);
                if(indicador == null) {
                    indicador = this._inicio;
                }
            }
            if (this._inicio != null) {
                indicador.ciclos = indicador.ciclos-1;
                console.log(`No. de ciclo: ${i}. No. de proceso: ${indicador.number}. Ciclos restantes: ${indicador.cycles}`);
                if(indicador.ciclos == 0) {
                    this._procesoCompletado++;
                    this.eliminarTerminandoProceso(indicador);
                }
                indicador = indicador.siguiente;
            } else {
                console.log(`No. de ciclo: ${i}. Ciclo sin procesos.`);
                this._ciclosColasVacias++;
            }
        }
        console.log(this._inicio);
        this.elementosComoString();
    }

    elementosComoString() {
        this.ciclosProcesoIzquierda();
        this._elementosString =
            `Ciclos con lista vacía ${this._ciclosColasVacias}` + "\n" +
            `Procesos totales ${this._ciclosTotales}` + "\n" +
            `Procesos pendientes ${this._processosIzquierdos}` + "\n" +
            `Ciclos pendientes ${this._ciclosIzquierda}` + "\n" +
            `Procesos atendidos ${this._procesoCompletado}`;
    }


    ciclosProcesoIzquierda() {
        let inicio = this._inicio;
        do {
            this._processosIzquierdos++;
            this._ciclosIzquierda += inicio.ciclos;
            inicio = inicio.siguiente;
        } while(inicio != this._inicio);
    }

    posicionarEnCola(nuevoProceso) {
        if (this._inicio == null) {
            this._inicio = nuevoProceso;
            this._inicio.siguiente = this._inicio;
        } else if (this._final == null) {
            this._final = nuevoProceso;
            this._inicio.siguiente = this._final;
            this._final.siguiente = this._inicio;
        } else {
            this._final.siguiente = nuevoProceso;
            this._final = nuevoProceso;
            this._final.siguiente = this._inicio;
        }
    }

    _deleteFinishedProcess(inicador) {
        if((inicador == this._inicio) && (this._inicio.siguiente == this._inicio)) {
            this._inicio = null;
        } else if ((inicador == this._final) && (this._inicio.siguiente == this._final)) {
            this._final == null;
            this._inicio.siguiente = this._inicio;
        } else if (inicador == this._inicio) {
            this._inicio = this._inicio.siguiente;
            this._final.siguiente = this._inicio;
        } else if (inicador == this._final) {
            let p = this._anteriorAlFinal(this._inicio);
            this._final = p;
            this._final.siguiente = this._inicio;
        } else {
            let p = this._anterior(this._inicio, inicador);
            p.siguiente = inicador.siguiente;
        }
    }

    _anteriorAlFinal(inicio) {
        do {
            if(inicio.siguiente == this._final) {
                return inicio;
            }
            inicio = inicio.siguiente;
        } while(inicio != this._final);
    }

    _anterior(inicio, inicador) {
        do {
            if(inicio.siguiente == inicador) {
                return inicio;
            }
            inicio = inicio.siguiente;
        } while(inicio != inicador);
    }
}