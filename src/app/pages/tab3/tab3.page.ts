import { Component, OnInit } from '@angular/core';
import { DataLocalService } from 'src/app/services/data-local.service';
import { Article } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  noticias: Article[] = [];
  constructor(
    public dataLocal: DataLocalService
  ) {}

  ngOnInit() {
    this.dataLocal.cargarNoticia();
  }
}
