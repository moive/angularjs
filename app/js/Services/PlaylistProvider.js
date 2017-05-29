angular.module('miApp')
    .provider('Playlist', [function(){
        var playlist = [
            'The Miracle (Of Joey Ramone)',
            'Raised By Wolves',
            'Every Breaking Wave'
        ];

        var listar = function(){return playlist;}
        var borrar = function(id){playlist.splice(id,1)};

        return {
            agregar: function(data){
                playlist = playlist.concat(data);
            },
            $get: function(){
                return {
                    listar: listar,
                    borrar: borrar
                }
            }
        }
    }]);