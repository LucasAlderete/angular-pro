import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../services/articles.service';
import { staggeredShowUp } from  '../animations/staggeredShowUp.animations';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
  animations: [staggeredShowUp]
})
export class ArticlesComponent implements OnInit {

  constructor(public srvArticle : ArticlesService) { }

  ngOnInit(): void {
    this.srvArticle.getAll();
  
    /*
    const observable = this.srvArticle.buildObservable();

    observable.subscribe(data => {
      console.log(data);
    });*/

  }

}
