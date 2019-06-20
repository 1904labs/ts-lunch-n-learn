import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'labs-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {

    private _title: string = 'angular-ts';
    public list: [ string, string, number ] = [ 'My', 'List', 2 ];

    public constructor() {
    }

    public ngOnInit(): void {
    }

    public get title() {
        return this._title;
    }

}
