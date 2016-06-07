import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {JSONP_PROVIDERS} from 'angular2/http';
import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { WikiComponent } from './wikipedia.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { UserService } from './user.service';
import { WikipediaService } from './wikipedia.service';
import {Control} from 'angular2/common';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Dashboard']">Home</a>
      <a [routerLink]="['Heroes']">Ideas</a>
      <a [routerLink]="['Wikipedia']">WikiSearch</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app/styles/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    HeroService
  ]
})
@RouteConfig([
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
  {
    path: '/detail/:id',
    name: 'HeroDetail',
    component: HeroDetailComponent
  },
  {
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
  },
  {
    path: '/wiki',
    name: 'Wikipedia',
    component: WikiComponent
  }
])

export class AppComponent {
  title = 'Ideas Share';
}
