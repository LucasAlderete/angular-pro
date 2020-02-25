import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  public userName : string;
  public name:string;
  public avatar:string;
  
  @Output() public subscribed = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    this.name = "Lucas";
    this.userName = "lalderete";
    this.avatar = "https://avatarfiles.alphacoders.com/113/113827.png";
    
    setTimeout(()=> this.subscribed.emit(true),3000);
  
  }
  public changing(event:any){
    this.userName = event.target.value;
  }
}
