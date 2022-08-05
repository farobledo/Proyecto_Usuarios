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
        name: 'Juan',
        //le pedimos que nos mande una peticion post al servidor
        username: 'juan',
        //le pedimos que nos mande una peticion post al servidor
        email: 'juan@gmail.com',
        //le pedimos que nos mande una peticion post al servidor
        address: {
            //le pedimos que nos mande una peticion post al servidor
            street: 'calle falsa',
            //le pedimos que nos mande una peticion post al servidor
            suite: 'casa falsa',
            //le pedimos que nos mande una peticion post al servidor
            city: 'ciudad falsa',
            //le pedimos que nos mande una peticion post al servidor
            zipcode: '00000',
            //le pedimos que nos mande una peticion post al servidor
            geo: {
                //le pedimos que nos mande una peticion post al servidor
                lat: '0.0',
                //le pedimos que nos mande una peticion post al servidor
                lng: '0.0'
            }
        },
        //le pedimos que nos mande una peticion post al servidor
        phone: '0000000000',
        //le pedimos que nos mande una peticion post al servidor
        website: 'www.google.com',
        //le pedimos que nos mande una peticion post al servidor
        company: {
            //le pedimos que nos mande una peticion post al servidor
            name: 'Google',
            //le pedimos que nos mande una peticion post al servidor
            catchPhrase: 'Google',
            //le pedimos que nos mande una peticion post al servidor
            bs: 'Google'
        }
    }));
}