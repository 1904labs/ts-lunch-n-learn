export abstract class Vehicle {
    abstract getWheels(): number;
    abstract getType(): string;

    public display(): string {
        return `${this.getType()} has ${this.getWheels()} wheels`;
    }
}

export class Car extends Vehicle {
    getType(): string {
        return 'Car';
    }

    getWheels(): number {
        return 4;
    }
}

export class Motorcycle extends Vehicle {
    getType(): string {
        return 'Motorcycle';
    }

    getWheels(): number {
        return 2;
    }
}

export class Truck extends Vehicle {
    getBedLength(): string {
        return '8 foot';
    }

    getType(): string {
        return 'Truck';
    }

    getWheels(): number {
        return 4;
    }

    public display(): string {
        return `${super.display()} and an ${this.getBedLength()} bed`;
    }
}
