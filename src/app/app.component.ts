import { Component } from '@angular/core';
import { MusicService } from './services/music.service';
import { environment } from 'src/environments/environment';
import { Music } from './models/music.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'music-api';

  // musicas: Music[] = [];

  musicas = new Observable<Music[]>();

  // Form
  id = '';
  musica = 'Eu sou uma musica';
  autor = ''

  constructor(private musicService: MusicService){
    // console.log('TÔ AQUI', environment.api);
    this.obterMusicasCadastradas();
  }

  obterMusicasCadastradas(){
    // this.musicService.obterMusicas()
    //   .subscribe(musicas => this.musicas = musicas);

    this.musicas = this.musicService.obterMusicas();
  }

  cadastrarMusica(){
    if (!this.musica || !this.autor)
      return;

    this.musicService.cadastrarMusica({ author: this.autor, text: this.musica })
      .subscribe(_ => this.obterMusicasCadastradas());
  }
}
