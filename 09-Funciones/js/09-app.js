
const reproductor = {
    reproducir: function(nombre = ''){
        console.log(`Reproduciendo ${nombre}`);
    },
    pausar: function(){
        console.log(`Pausando`);
    },
    borrar: function(nombre = ''){
        console.log(`Borrando ${nombre}`);
    },
    crearPlaylist: function(playname = " "){
        console.log(`Playlist ${playname} creada`);
    },
    reproducirplaylist: function(playname = ''){
        console.log(`Reproduciendo ${playname}`);
    }
}

reproductor.reproducir("Doma");
reproductor.pausar();
reproductor.borrar("Doma");

reproductor.crearPlaylist("goat");
reproductor.reproducirplaylist("goat");

