import Barber from "../_Models/Barber"; 

let nextId = 1;
let barbers = [];

barbers.push(new Barber(nextId++, "Neto Ferreira", require('../../assets/barber1.jpeg')));
barbers.push(new Barber(nextId++, "Anderson Victor", require('../../assets/barber2.jpeg')));
barbers.push(new Barber(nextId++, "Jeferson Lima", require('../../assets/barber3.jpeg')));
barbers.push(new Barber(nextId++, "Eduardo Bezerra", require('../../assets/barber4.jpeg')));


export function BarberList() {
    return barbers;
}

export function createBarber({ nextId, name, image, }) {
    const barber = new Barber(
        nextId++,
        name,
        image,
    );
    barbers.push(barber);
    return barber;
}
export function totalBarbers() {
    return barbers.length;
}
export function getBarberById(id) {
    return barbers.find(barber => barber.id === id);
}
