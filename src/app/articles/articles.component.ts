import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../services/articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  constructor(private srvArticle : ArticlesService) { }

  ngOnInit(): void {
    this.srvArticle.getAll();

    const observable = this.srvArticle.buildObservable();

    observable.subscribe(data => {
      console.log(data);
    });

  }

}
