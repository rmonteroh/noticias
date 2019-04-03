import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  news: Observable<any[]>;
  constructor(private newService: NoticiasService) {}

  ngOnInit() {
    this.newService.getnews()
    .subscribe( news => {
      // this.news = news.articles;
      // console.log(this.news);
      console.log('noticias', news);
    });
  }
}
