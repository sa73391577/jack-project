function printHello(){
	document.write("Hello world");
}

function getJSon(){
	
	var data = {
			"name":"Sakulpetch","surname":"Buaphan","phoneNumber":["081-6438465","080-7770316","084-7276636"]
	}
	
	document.write("Name : "+data.name);
	document.write("<br>"+"Surname : "+data.surname);
	document.write("<br>"+"Phone Number : "+data.phoneNumber[0]);
	document.write("<br>"+"Phone Number : "+data.phoneNumber[1]);
	document.write("<br>"+"Phone Number : "+data.phoneNumber[2]);
	
}

