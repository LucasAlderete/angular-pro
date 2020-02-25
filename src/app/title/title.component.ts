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
  public launchDate : Date;
  public price : number;
  public seconds : number = 3600;

  constructor() {
  }
  @Input() subscribed : boolean;
  
  ngOnInit(): void {
    this.category = "web";
    this.name = "Lucas Alderete";
    this.isAvailable = false;
    this.moreInformation = false;
    this.topics = [
      "Goku", "Gohan","Cell","Majin buu", "Vegeta", "Trunks", "Picoro"
    ];
    this.launchDate = new Date(2020,1,24);
    this.price = 2000;
  }

  public getInfo() {
    return `Esta info viene de una funcion desde title.components.ts. Y me trae los siguientes datos interpolados 
    ${this.name} `  
  }

  public toggleMoreInformation(){
    this.moreInformation = !this.moreInformation;
  }

}
