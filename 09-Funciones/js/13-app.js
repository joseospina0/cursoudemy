const reproductor = {

    cancion: " ",

    reproducir: (nombre = '') => console.log(`Reproduciendo ${nombre}`),

    pausar: () => {console.log(`Pausando`);},

    borrar: (nombre = '') => {console.log(`Borrando ${nombre}`);},

    crearPlaylist: (playname = " ") => {console.log(`Playlist ${playname} creada`);},
    
    reproducirplaylist: (playname = '')=> {console.log(`Reproduciendo ${playname}`);},

    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Agregando ${cancion}`);
    },

    get obtenerCancion() {
        console.log(`La cancion actual es ${this.cancion}`);
    }

}

reproductor.reproducir("Doma");
reproductor.pausar();
reproductor.borrar("Doma");

reproductor.crearPlaylist("goat");
reproductor.reproducirplaylist("goat");