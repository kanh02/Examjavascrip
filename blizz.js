fetch("https://api.myjson.com/bins/1b2ges", {
	method: "GET",

}).then(function (response) {
	if (response.ok) {
		return response.json();
	}
	throw new Error(response.statusText);
}).then(function (json) {
	data = json.people
	console.log(data);

	table();

}).then(function () {

}).catch(function (error) {
	console.log("Request failed: " + error.message);
})




function table() {

	var tbody = document.getElementById("tbody");


	for (var x = 0; x < data.length; x++) {

		var personas = document.createElement("tr");

		var name = document.createElement("td");
		var age = document.createElement("td");
		var role = document.createElement("td");
		var team = document.createElement("td");
		var senior = document.createElement("td");
		var more = document.createElement("button");


		name.textContent = data[x].name;
		age.textContent = data[x].age;
		role.textContent = data[x].role;
		team.textContent = data[x].team;
		senior.textContent = data[x].seniority;
		more.textContent = "+" + "More info";
		
		
		more.setAttribute("data-toggle", "modal")
		more.setAttribute("data-target", "#myModal")
	
		more.setAttribute("data-name", data[x].name)
		more.setAttribute("data-nickName", data[x].contact_info.nickName)
		more.setAttribute("data-email", data[x].contact_info.email)
		more.setAttribute("data-phone", data[x].contact_info.phone)
		more.setAttribute("data-photo", data[x].contact_info.photo)
		more.setAttribute("data-site", data[x].contact_info.site)
		more.setAttribute("class", "btn btn-info btn-lg")
		more.setAttribute("type", "button")
		more.addEventListener("click", info)
		
		
		personas.appendChild(name);
		personas.appendChild(age);
		personas.appendChild(role);
		personas.appendChild(team);
		personas.appendChild(senior);
		personas.appendChild(more);
		tbody.appendChild(personas);
	}
}


function info() {
	
	console.log(event.target)
	
	var nombre = document.getElementById("cabeza")
	var nick = document.getElementById("nick")
	var phone = document.getElementById("telefono");
	var photo = document.getElementById("foto");
	var site = document.getElementById("sitio");
	var contact = document.getElementById("contacto");

	
	nombre.textContent = event.target.getAttribute("data-name");
	nick.textContent = event.target.getAttribute("data-nickName");
	photo.src = event.target.getAttribute("data-photo");
	phone.textContent = event.target.getAttribute("data-phone");
	site.textContent = event.target.getAttribute("data-site");
//	contact.textContent = event.target.getAttribute("data-email");
	
	
	
	var boton = document.createElement("button");
	boton.textContent="Send Email";
	boton.setAttribute("type","submit")
	boton.setAttribute("class", "btn btn-info btn-sm")
	boton.addEventListener("click", email)
	contact.appendChild(boton);
	console.log(boton);


}


function email(){
	var email = document.getElementById("contacto")
	var emailink = email.getAttribute("data-email");

window.location = "mailto:"+emailink;
}
	


