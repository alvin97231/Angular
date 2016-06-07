import {Component} from 'angular2/core';
import {Control} from 'angular2/common';
import {JSONP_PROVIDERS} from 'angular2/http';
import {WikipediaService} from './wikipedia.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'my-app',
  templateUrl: 'app/views/wikipedia.component.html',
  providers: [
    JSONP_PROVIDERS,
    WikipediaService
  ]
})

export class WikiComponent {
  items: Observable<Array<string>>;
  term = new Control();
  constructor(private wikipediaService: WikipediaService) {
    this.items = wikipediaService.search(this.term.valueChanges);
  }
}
