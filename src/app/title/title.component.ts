import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  public name:string; 
  public isAvailable : boolean;
  public moreInformation : boolean = false;
  public topics : string[];
  public category : string; //mobile,web,other

  constructor() {
  }
  @Input() subscribed : boolean;
  
  ngOnInit(): void {
    this.category = "web";
    this.name = "Lucas Alderete";
    this.isAvailable = true;
    this.moreInformation = false;
    this.topics = [
      "Goku", "Gohan","Cell","Majin buu", "Vegeta", "Trunks", "Picoro"
    ];
  }

  public getInfo() {
    return `Esta info viene de una funcion desde title.components.ts. Y me trae los siguientes datos interpolados 
    ${this.name} `  
  }

  public toggleMoreInformation(){
    this.moreInformation = !this.moreInformation;
  }

}
