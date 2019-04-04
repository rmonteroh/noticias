import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { NoticiasService } from 'src/app/services/noticias.service';
import { Article } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  @ViewChild(IonSegment) segment: IonSegment;
  categoria = '';
  noticias: Article[] = [];
  categorias = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
  constructor(private servicioNoticias: NoticiasService ) {  }

  ngOnInit(): void {
    this.segment.value = this.categorias[0];
    this.makeRequest(this.segment.value);
  }

  makeRequest(categoria: string, event?) {
    this.servicioNoticias.getTopNewsPerCategory(categoria)
      .subscribe(resp => {
        if (resp.articles.length === 0) {
          event.target.disabled = true;
          event.target.complete();
          return;
        }
        this.noticias.push( ...resp.articles);
        if (event) {
          event.target.complete();
        }
      });
  }

  segmentChanged(event) {
    this.noticias = [];
    this.makeRequest(event.detail.value);
  }

  loadData( event) {
    this.makeRequest(this.segment.value, event);
  }
}
