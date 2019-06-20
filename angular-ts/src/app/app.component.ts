import { Component, OnInit } from '@angular/core';
import { Car, Motorcycle, Truck, Vehicle } from './domain/vehicle';

@Component({
    selector: 'labs-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {

    private _title: string = 'angular-ts';
    public list: [ string, string, number ] = [ 'My', 'List', 2 ];
    public vehicles: Vehicle[] = [];

    public constructor() {
    }

    public ngOnInit(): void {
        this.vehicles.push(this.createVehicle<Car>(Car));
        this.vehicles.push(this.createVehicle<Motorcycle>(Motorcycle));
        this.vehicles.push(this.createVehicle<Truck>(Truck));
    }

    public createVehicle<T extends Vehicle>(type: new() => T ): T {
        return new type();
    }

    public get title() {
        return this._title;
    }

}
