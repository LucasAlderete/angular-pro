import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  public name:string; 
  public edad:number;
  public nombres : string[];
  public isAvailable : boolean;
  public css_class : string[];

  constructor() {
  }

  ngOnInit(): void {
    this.nombres = ["lucas","maximiliano", "alderete"];
    this.name = "Luqui";
    this.edad = 27;
    this.isAvailable = true;
    this.css_class = ["active","shadow"];

    setTimeout(()=>this.name = "Lucas M Alderete",2000);
    setTimeout(()=>this.isAvailable = false,2000);
    setTimeout(()=> this.css_class = ["shadow"],2000);

  }

  public getInfo() {
    return `Esta info viene de una funcion desde title.components.ts. Y me trae los siguientes datos interpolados 
    ${this.name} y ${this.edad}`  
  }

}
