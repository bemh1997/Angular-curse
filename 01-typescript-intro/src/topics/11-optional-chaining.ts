export interface Passenger {
	name: string;
	children?: string[];
}

const passenger1: Passenger = {
	name: 'Humberto',
}

const passenger2: Passenger = {
	name: 'Fernando',
	children: ['Natalia', 'Elizabeth']
}

const printChildren = ( passenger: Passenger ): void => {
	const howManyChildren = passenger.children!;

	console.log(passenger.name + " has "+howManyChildren);
}

printChildren(passenger1)
printChildren(passenger2)
