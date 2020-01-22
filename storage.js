persons = [{
	id: 1,
	name: "Дмитрий",
	surname: "Иващенко",
	profession: "Технический странник"
},{
	id: 2,
	name: "Александр",
	surname: "Харламов",
	profession: "Начальник ИТ"
}];


class EverestStorage {
	constructor(data) {
		this.objectName = "class";
	   	this.state = data;		
	}

	compute() {
		return this.state;
	}

	who() {
		return this.objectName;
	} 

}

var Storage = new EverestStorage(persons);

var result = Storage.who();

console.log(result);

var ts = persons;

function whoIs(variable) {
	if (!variable) { return({type: null, status: false }); }
	if (typeof(vatiable) === 'Array') {}
}



/*
class ListPersons extends EverestComponent.List {
	constructor(id='', name) {
		this.property.id = id;
		this.property.name = name;
	}


} 
*/