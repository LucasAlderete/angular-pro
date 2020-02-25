import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map , share } from 'rxjs/operators';

class Arti{
  constructor(public id : string, public name : string) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  public artisObserver : Observable<Arti[]>;

  constructor(private http : HttpClient) { }

  getAll(){
    this.artisObserver = this.http.get('https://api.github.com/users/codigofacilito/repos')
    .pipe(
      map((datos : Object[]) =>  {
        return datos.map( (item:any) => new Arti(item.id,item.name))
       })
    )
    .pipe(
      share()
    );
      
  }

  buildObservable() : Observable<any>{
    return Observable.create(function(observer){
      setInterval(function(){
        observer.next("hola")
      },1000);
    });
  }

}
