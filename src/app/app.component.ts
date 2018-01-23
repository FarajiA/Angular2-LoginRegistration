import { Component, OnInit, OnDestroy} from '@angular/core';
import { routerTransition } from './app.routing.animations';


@Component({
    selector: 'app-root',
    animations: [routerTransition],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
    getState(outlet) {
        return outlet.activatedRouteData.state;
    }


    ngOnInit() {
        document.body.classList.add('login-body');
    }



    ngOnDestroy() {
        document.body.classList.remove('login-body');
    }
}
