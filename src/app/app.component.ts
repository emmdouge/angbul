
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-root',
    template: require('./app.component.html'),
    encapsulation: ViewEncapsulation.None,
    styles: [require('./../../node_modules/bulma/css/bulma.css')]
})

export class AppComponent { }
