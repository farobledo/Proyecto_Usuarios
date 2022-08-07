var url = "https://jsonplaceholder.typicode.com/todos?userId=1";
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
            td1.innerHTML = data[i].id;
            td2.innerHTML = data[i].title;
            td3.innerHTML = data[i].completed;
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tabla.appendChild(tr);
        }
    }
}