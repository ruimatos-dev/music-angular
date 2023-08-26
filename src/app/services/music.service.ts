import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { environment } from "src/environments/environment";
import { Music } from "../models/music.model";

@Injectable({
    providedIn: 'root'
})

export class MusicService {

    private url = `${environment.api}/musics`;

    constructor(private httpClient: HttpClient){

    }
    obterMusicas() {
        return this.httpClient.get<Music[]>(this.url);
    }
    cadastrarMusica(musica: Music) {
        return this.httpClient.post<Music>(this.url, musica);
    }
}