// Observable Version
import { Injectable }     from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Headers, RequestOptions } from 'angular2/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Hero }           from './hero';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class HeroService {
  constructor (private http: Http) {}

  private heroesUrl = 'http://127.0.0.1/Symfony/web/app_dev.php/utilisateur?login=bitch&pwd=bitch';

  getHeroes (): Observable<Hero[]> {
    console.log(this.http.get(this.heroesUrl)
                    .map(this.extractData));
    return this.http.get(this.heroesUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  addHero (name: string): Observable<Hero> {
    let body = JSON.stringify({ name });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.heroesUrl, body, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}

/*
  private heroesUrl = 'app/heroes.json'; // URL to JSON file
*/


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
