import { Injectable } from '@angular/core';

// Storage
import { Storage } from '@ionic/storage';
import { Article } from '../interfaces/interfaces';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  noticias: Article[] = [];
  constructor(private storage: Storage, private toastCtrl: ToastController) { }

  guardarNoticia(noticia: Article) {
    const existe = this.noticias.find( noti => noti.title === noticia.title);
    if (!existe) {
      this.noticias.unshift(noticia);
      this.storage.set('favorito', this.noticias);
      this.presentToast('Noticia agregada a favoritos');
    }

  }
  async cargarNoticia() {
    const favoritos = await this.storage.get('favorito');
    if (favoritos) {
      this.noticias = favoritos;
    }
    console.log('favoritos', favoritos);
  }

  borrarNoticia(noticia: Article) {
    this.noticias = this.noticias.filter( (noti: Article) => {
      return noti.title !== noticia.title;
    });
    this.storage.set('favorito', this.noticias);
    this.presentToast('Noticia borrada de favoritos');
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }
}
