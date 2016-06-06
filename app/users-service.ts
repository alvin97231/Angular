import { Injectable }     from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { User }           from './models/user';
import { Observable }     from 'rxjs/Observable';

@Injectable()

export class UserService {

  constructor (private http: Http) {}

  private usersUrl = '127.0.0.1/Symfony/web/app_dev.php/utilisateur?login=bitch&pwd=bitch';  // URL to web API
  getUsers (): Observable<User[]> {
    return this.http.get(this.usersUrl)
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
