import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { debugOutputAstAsTypeScript } from '@angular/compiler';

class Arti{
  constructor(public id : string, public name : string) {

  }
}

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http : HttpClient) { }

  getAll(){
    this.http.get('https://api.github.com/users/lucasalderete/repos')
    .pipe(
      map((datos : Object[]) =>  {
        return datos.map(element => new Arti(element.id,element.name))
       })
    )
    .subscribe(data => {
        console.log(data);
      })
  }

  buildObservable() : Observable<any>{
    return Observable.create(function(observer){
      setInterval(function(){
        observer.next("hola")
      },1000);
    });
  }

}
