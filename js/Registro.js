
//Registrar evento click al presionar botones de envío
//y evento change al cambiar de opción en el elemento select
function iniciar(){
	var select = document.getElementById("residencia");
	var button = document.getElementById("btnSend");
	//Al producirse en evento change en el elemento select
	//invocar a la función addOptions para volver a llenar
	//el select dependiente con los datos adecuados
	if(select.addEventListener){
		select.addEventListener("change", function(){
		addOptions(marcas[this.options[this.selectedIndex].text],
		document.frmmat.depa);
		}, false);
	}
	else{
		select.attachEvent("onchange", function(){
			addOptions(marcas[this.options[this.selectedIndex].text], document.frmmat.depa);
		});
	}
	//Al producirse un click sobre el botón de envío
	//invocar los métodos del objeto carro que mostrarán
	//los valores ingresados en el formulario
	if(button.addEventListener){
		button.addEventListener("click", function(){
         


			carro.pedido(document.frmmat.name.value,
                document.frmmat.surname.value,         
                document.frmmat.fecha.value,
                document.frmmat.mail.value, 
                document.frmmat.telefono.value, 
                document.frmmat.celular.value,  

                document.frmmat.genero.value,
                document.frmmat.nacimiento.value,
                document.frmmat.depa.value,
                document.frmmat.residencia.value);
			carro.mostrar();
		}, false);
	}
	else{
		button.attachEvent("onclik", function(){
            

			carro.pedido(document.frmmat.name.value,
                document.frmmat.surname.value,         
                document.frmmat.fecha.value,
                document.frmmat.mail.value, 
                document.frmmat.telefono.value, 
                document.frmmat.celular.value,  

                document.frmmat.genero.value,
                document.frmmat.nacimiento.value,
                document.frmmat.depa.value,
                document.frmmat.residencia.value);
			carro.mostrar();
		});
	}
}
//Inicializando matriz para manejar las marcas y sus respectivos modelos
var marcas = new Array(7);
marcas["El Salvador"] = ["Sonsonate", "Santa Ana", "Ahuachapán", "Libertad", "Chalatenango", "Cuscatlán", "San Salvador", "Usulután", "San Miguel", "La Unión", "La Paz", "Cabañas", "San Vicente"]; 
marcas["Honduras"] = ["Atlántida", "Colón", "Comayagua", "Copán", "Cortés", "Choluteca", "El Paraíso", "Francisco Morazán", "Gracias a Dios", "Intibucá", "Islas de la Bahía", "La Paz", "Lempira", "Ocotepque", "Olancho", "Santa Barbará", "Valle", "Yoro"]; 
marcas["Nicaragua"] = ["Atlántico Norte", "Atlántico Sur", "Coupé", "Carazo", "Chinandenga", "Chontales", "Granada","Jinotega","León","Madriz", "Managua","Masaya","Matagalpa","Nueva Segovia","Río San Juan","Rivas"]; 
marcas["Guatemala"] = ["Alta Verapaz", "Baja Verapaz", "Chimaltenango", "Chiquimula", "Guatemala", "El Progreso", "Escuintla", "Huehuetenango", "Izabal", "Jalapa", "Jutiapa","Petén","Quetzaltenango","Quiché","Retalhuleu","Sacatepequez","San Marcos","Santa Rosa","Sololá","Suchitepequez", "Totonicapán","Zacapa"]; 
 
marcas["Panamá"] = ["Bocas del Toro", "Coclé", "Chiriqui", "Darién", "Herrera", "Los Santos Panamá", "Veraguas", "Panmá Oeste"];
marcas["Costa Rica"] = ["Heredia", "Guanacaste", "Puntaneras", "Limón", "Cartaga", "San José", "Alajuela"];
//Creando el objeto carro con el constructor Object()
var carro = new Object();

//Propiedades del objeto
    carro.nombre = "";
    carro.apellido = "";
    carro.fechanacimiento = "";
    carro.email = "";
    carro.telefono = "";
    carro.celular = "";
    carro.genero = "";
    carro.paisnac = "";
    carro.departamento = "";
    carro.paisresi = "";
//Métodos del objeto
    carro.pedido = function(nomb, apell, fechanac, mail, telef, cel, gen, pnac, depart, paisre){
	carro.nombre = nomb;
    carro.apellido = apell;
    carro.fechanacimiento = fechanac;
    carro.email = mail;
    carro.telefono = telef;
    carro.celular = cel;
    carro.genero = gen;
    carro.paisnac = pnac;
    carro.departamento = depart;
    carro.paisresi = paisre;
}
carro.mostrar = function(){
	var informacion = "";
	var info = document.getElementById('infomatricula');
	informacion += "<table class=\"carinfo\">\n<thead>\n\t<tr>\n";
    informacion += "\t\t<th colspan=\"2\">Datos del Inscrito</th>\n";
    informacion += "\t<tr>\n</thead>\n";
    informacion += "<tbody>\n\t<tr>\n";
   
    informacion += "<tr><td>Nombre: </td>\n";
    informacion += "<td>" + this.nombre + " " + this.apellido + "</td></tr>\n";
    informacion += "\t\t<td>Carnet: </td>\n";
    informacion += "<td>" + this.numCarnet + "</td></tr>\n";
    informacion += "<tr><td>fechanacimiento: </td>\n";
    informacion += "<td>" + this.fechanacimiento + "</td></tr>\n";
    informacion += "<tr><td>Género: </td>\n";
    
    informacion += "<td>" + this.genero + "</td></tr>\n";
    informacion += "\t\t<td>Email: </td>\n";
    informacion += "<td>" + this.email + "</td></tr>\n";
    informacion += "\t\t<td>Telefono Casa: </td>\n";
    informacion += "<td>" + this.telefono + "</td></tr>\n";
    informacion += "\t\t<td>Telefono Celular: </td>\n";
    informacion += "<td>" + this.celular + "</td></tr>\n";
    informacion += "\t\t<td>País de Nacimiento: </td>\n";
    informacion += "<td>" + this.paisnac + "</td></tr>\n";
    informacion += "\t\t<td>País residencia: </td>\n";
    informacion += "<td>" + this.paisresi + "</td></tr>\n";
    informacion += "\t\t<td>Departamento Residencia: </td>\n";
    informacion += "<td>" + this.departamento + "</td></tr>\n";
    informacion += "\t</tr>\n</tbody>\n</table>\n";
    info.innerHTML = informacion;
}

function removeOptions(optionMenu){
	for(i=0; i<optionMenu.options.length; i++){
		optionMenu.options[i] = null;
	}
}
function addOptions(optionList, optionMenu){
	var i=0;
	removeOptions(optionMenu); //Limpia las opciones
	for(i=0; i<optionList.length; i++){
		optionMenu[i] = new Option(optionList[i], optionList[i]);
	}
}
//Asociando función que manejará el evento load al cargar la página
if(window.addEventListener){
window.addEventListener("load", iniciar, false);
}
else if(window.attachEvent){
window.attachEvent("onload", iniciar);
}