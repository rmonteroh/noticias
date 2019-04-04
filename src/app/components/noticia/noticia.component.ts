import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/interfaces/interfaces';
import { ActionSheetController, ToastController } from '@ionic/angular';

// Plugins
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { DataLocalService } from 'src/app/services/data-local.service';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {
@Input() noticia: Article;
@Input() enFavoritos = false;
  constructor(
    private iab: InAppBrowser,
    private actionSheetCtrl: ActionSheetController,
    private socialSharing: SocialSharing,
    private dataLocal: DataLocalService,
    private toastCtrl: ToastController
    ) { }

  ngOnInit() {}

  abrirNoticia() {
    const browser = this.iab.create(this.noticia.url, '_system');
  }

  async lanzarMenu() {

    let guardarBorrarBtn;

    if (this.enFavoritos) {
      guardarBorrarBtn = {
        text: 'Borrar',
        icon: 'trash',
        handler: () => {
          console.log('Borrar clicked');
          this.dataLocal.borrarNoticia(this.noticia);
        }
      };
    } else {
      guardarBorrarBtn = {
        text: 'Favorite',
        icon: 'star',
        handler: () => {
          console.log('Favorite clicked');
          this.dataLocal.guardarNoticia(this.noticia);
        }
      };
    }

    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Albums',
      buttons: [
      {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
          this.socialSharing.share(
            this.noticia.title,
            this.noticia.source.name,
            '',
            this.noticia.url
          );
        }
      },
      guardarBorrarBtn,
       {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
}
