






//Registrar evento click al presionar el botón de envío
function iniciar(){
    var selresi = document.getElementById("nacimiento");
    var selresi = document.getElementById("residencia");
    var btnenviar = document.getElementById("btnSend");
    //Al producirse un click sobre el botón de envío
    //invocar los métodos del objeto carro que mostrarán
    //los valores ingresados en el formulario
   
    if(selresi.addEventListener){
		selresi.addEventListener("change", function(){
		addOptions(marcas[this.options[this.selectedIndex].text],
		document.frmmat.depa);
		}, false);
	}
	else{
		selresi.attachEvent("onchange", function(){
			addOptions(marcas[this.options[this.selectedIndex].text], document.frmmat.depa);
		});
	}

    if(btnenviar.addEventListener){
        btnenviar.addEventListener("click", function(){
        var selresi, seldepa, selnac, selgen, nuevoalumno;

        selgen = 
        document.frmmat.genero.options[frmmat.genero.selectedIndex].value;
        selnac = 
        document.frmmat.nacimiento.options[frmmat.nacimiento.selectedIndex].value;
        // seldepa = 
        // document.frmmat.depa.options[frmmat.depa.selectedIndex].value;
        selresi = 
        document.frmmat.residencia.options[frmmat.residencia.selectedIndex].value;

        nuevoalumno = new alumnoUDB(document.frmmat.name.value,
        document.frmmat.surname.value,         
        document.frmmat.fecha.value,
        document.frmmat.mail.value, 
        document.frmmat.telefono.value, 
        document.frmmat.celular.value, selgen, selnac, seldepa, selresi);

        nuevoalumno.matricular();
        nuevoalumno.imprimir();
        }, false);
    }
    else{
        btnenviar.attachEvent("onclik", function(){
        var selresi, seldepa, selnac, selgen, nuevoalumno;

        selgen = 
        document.frmmat.genero.options[frmmat.genero.selectedIndex].value;
        selnac = 
        document.frmmat.nacimiento.options[frmmat.nacimiento.selectedIndex].value; // pais nacimiento
        // seldepa = 
        // document.frmmat.depa.options[frmmat.depa.selectedIndex].value; // departamento residencia
        selresi = 
        document.frmmat.residencia.options[frmmat.residencia.selectedIndex].value; //pais residencia

        nuevoalumno = new alumnoUDB(document.frmmat.name.value,
        document.frmmat.surname.value,         
        document.frmmat.fecha.value,
        document.frmmat.mail.value, 
        document.frmmat.telefono.value, 
        document.frmmat.celular.value, selgen, selnac, seldepa, selresi);

        nuevoalumno.matricular();
        nuevoalumno.imprimir();
        });
    }
}
//Inicializando matriz para manejar las marcas y sus respectivos modelos
var marcas = new Array(7);
marcas["El Salvador"] = ["Corolla", "Echo", "Yaris", "Avensis", "Camry", "Land Cruiser", "4 Runner", "Hilux"];
marcas["Guatemala"] = ["Sentra", "Platina", "Almera", "Altima", "Tiida", "Pathfinder",
"Patrol", "X-Trail", "Frontier"];
marcas["Honduras"] = ["Elantra", "Accent", "Coupé", "Santa Fe", "i30"];
marcas["Nicaragua"] = ["Golf", "Jetta", "Passat", "Phaeton", "Thunder Bunny", "Touareg",
"Saveiro"];
marcas["Panamá"] = ["Optra", "Aveo", "Cobalt", "Malibu", "Corvette", "Chevy",
"Avalanche", "Trailblazer"];
marcas["Belice"] = ["Civic", "Acura", "Accord", "Fit", "Odyssey", "CR-V", "Pilot",
"RidgeLine"];
marcas["Costa Rica"] = ["Lancer", "Galant", "Eclipse", "Montero", "Nativa", "Outlander",
"L200"];

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

//Definiendo la clase alumnoUDB haciendo uso de sintaxis de función
function alumnoUDB(nombre, apellido, fechanacimiento, email, telefono, celular, genero, paisnac, departamento, paisresi){
    //Propiedades de la clase
    this.nombre = nombre;
    this.apellido = apellido;
    this.fechanacimiento = fechanacimiento;
    this.email = email;
    this.telefono = telefono;
    this.celular = celular;
    this.genero = genero;
    this.paisnac = paisnac;
    this.departamento = departamento;
    this.paisresi = paisresi;
    this.numCarnet = null;
    //Métodos de la clase
    this.matricular = function(){
    var fecha = new Date();
    var year = fecha.getFullYear();
    var day = fecha.getDate();
    var sec = fecha.getSeconds();
    this.numCarnet = this.nombre.substring(0,1) + this.apellido.substring(0,1) +
    this.formato(sec) + this.formato(day) + year;
    }
    this.imprimir = function(){
    var info = document.getElementById('infomatricula');
    var informacion = "";
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
    this.formato = function(valor){
        if(valor<10) valor = "0" + valor;
        return valor;
        }
    }
    //Asociando función que manejará el evento load al cargar la página
    if(window.addEventListener){
    window.addEventListener("load", iniciar, false);
    }
    else if(window.attachEvent){
    window.attachEvent("onload", iniciar);
    }