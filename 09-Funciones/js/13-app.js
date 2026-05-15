const reproductor = {
    reproducir: (nombre = '') => console.log(`Reproduciendo ${nombre}`),

    pausar: () => {console.log(`Pausando`);},

    borrar: (nombre = '') => {console.log(`Borrando ${nombre}`);},

    crearPlaylist: (playname = " ") => {console.log(`Playlist ${playname} creada`);},
    
    reproducirplaylist: (playname = '')=> {console.log(`Reproduciendo ${playname}`);}
}

reproductor.reproducir("Doma");
reproductor.pausar();
reproductor.borrar("Doma");

reproductor.crearPlaylist("goat");
reproductor.reproducirplaylist("goat");