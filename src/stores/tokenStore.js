import { defineStore } from 'pinia';
const usetokenStore = defineStore('token' , {
    state : () => {
        return {
            clientId : '8d5e3f7e5b33431385e26346e12f30df',
            redirectUri :'https://spotify-clone-rosy-five.vercel.app/',
            scopes : ['user-read-private', 'user-read-email', 'user-top-read'],
            token : null
        }
    },
    
    actions : {
        authorize() {
             var url = 'https://accounts.spotify.com/authorize';
             url += '?response_type=token';
             url += '&client_id=' + encodeURIComponent(this.clientId);
             url += '&scope=' + encodeURIComponent(this.scopes.join(" "));
             url += '&redirect_uri=' + encodeURIComponent(this.redirectUri);

             window.location.href = url;
        },
        extarctTokenFromUrl() {
            var hash = window.location.hash;
            //#access_token=BQAeCRuTa_BknD3HyOc8v7jbWhOfDs8U7E7xWwYsgJyw8LKwuC6HUzkXlhtH0TUs2rIxboiwMnqrWvhuhdB0dBThVvSnfLhH_uN-JCINcxWAupxW4FtdnT8DUGuZQdbH3zUAS05ktYEMk8s1UFDtrCjnRZ_mUV5vkl5qZbr670r23c2l0iW94qV4qGxPH8XC4BPFVdMkj8_XiiwRgbETie6w&token_type=Bearer&expires_in=3600
            if(hash && hash.includes('access_token')){
                 var url = hash.replace('#access_token=' , "")
                 var chunks = url.split('&');
                 var token = chunks[0];
                 return token;
            }

            return null;
        },
        setToken(token){
            this.token = token
        }
     }
}) 

export default usetokenStore;