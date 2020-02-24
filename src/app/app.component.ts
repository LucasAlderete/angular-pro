import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-pro';

  public userSubscribed : boolean = false;
  
  public subscriptionChanged(ev : any){
    console.log("El usuario se subscribio correctamente");
    console.log(ev);
    this.userSubscribed = ev;
  }

}
