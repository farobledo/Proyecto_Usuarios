// Queremos que construyas una aplicación web que administra usuarios de una
// plataforma. Debes construir la aplicación usando las especificaciones técnicas de
// diseño entregadas y construir unas funcionalidades que permitan administrar los
// usuarios entregados por API.
// Diseño y Frontend
// Especificaciones de diseño:
// (https://jsonplaceholder.typicode.com/users)

 
var url = "https://jsonplaceholder.typicode.com/users";
var user = new XMLHttpRequest();
user.open("GET", url, true);
user.send();
user.onreadystatechange = function () {
  if (user.readyState == 4 && user.status == 200) {
    var data = JSON.parse(user.responseText);
    var tabla = document.getElementById("tabla");
    for (var i = 0; i < data.length; i++) {
      var tr = document.createElement("tr");
      var td1 = document.createElement("td");
      var td2 = document.createElement("td");
      var td3 = document.createElement("td");
      var td4 = document.createElement("td");
      var td5 = document.createElement("td");
      var td6 = document.createElement("td");

      td1.innerHTML = data[i].id;
      td2.innerHTML = data[i].name;
      td3.innerHTML = data[i].username;
      td4.innerHTML = data[i].email;
      td5.innerHTML = data[i].phone;
      td6.innerHTML = data[i].website;
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tr.appendChild(td5);
      tr.appendChild(td6);
    
      
        var button = document.createElement("button");
        button.innerHTML = "View todos";
        button.setAttribute("class", "btn btn-primary");
        button.setAttribute("onclick", "view(" + data[i].id + ")");
        tr.appendChild(button);
        tabla.appendChild(tr);
        }
        }
        }
        function view(id) {
            window.location.href = "../views/crear.html";
            }







    