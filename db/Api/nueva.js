// vamos a crear un nuevo usuario para la api de jsonplaceholder 

var crear = function(){
    //le pedimos que nos mande una peticion post al servidor
    var xhr = new XMLHttpRequest();
    //le pedimos que nos mande una peticion post al servidor
    xhr.open('POST', 'https://jsonplaceholder.typicode.com/users');
    //le pedimos que nos mande una peticion post al servidor
    xhr.setRequestHeader('Content-Type', 'application/json');
    //le pedimos que nos mande una peticion post al servidor
    xhr.send(JSON.stringify({
        //le pedimos que nos mande una peticion post al servidor
        name: '',
        //le pedimos que nos mande una peticion post al servidor
        username: '',
        //le pedimos que nos mande una peticion post al servidor
        email: '',
        //le pedimos que nos mande una peticion post al servidor
        address: {
            //le pedimos que nos mande una peticion post al servidor
            street: '',
            //le pedimos que nos mande una peticion post al servidor
            suite: '',
            //le pedimos que nos mande una peticion post al servidor
            city: '',
            //le pedimos que nos mande una peticion post al servidor
            zipcode: '',
            //le pedimos que nos mande una peticion post al servidor
            geo: {
                //le pedimos que nos mande una peticion post al servidor
                lat: '',
                //le pedimos que nos mande una peticion post al servidor
                lng: ''
            }
        },
        //le pedimos que nos mande una peticion post al servidor
        phone: '',
        //le pedimos que nos mande una peticion post al servidor
        website: '',
        //le pedimos que nos mande una peticion post al servidor
        company: {
            //le pedimos que nos mande una peticion post al servidor
            name: '',
            //le pedimos que nos mande una peticion post al servidor
            catchPhrase: '',
            //le pedimos que nos mande una peticion post al servidor
            bs: ''
           
        }
        
    }));
    alert('usuario creado');
}