import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom, Subject } from "rxjs";
import { Games } from "./models";

// REFERENCING TO DAY26WORKSHOP
export const GAMES_URL= "http://localhost:8080/games"

@Injectable()
export class GamesService{  

    onGames = new Subject<Games[]>()

    constructor(private http: HttpClient){}

    getGamesByNumber(offset: number, limit: number){
        const params = new HttpParams()
        .set('offset', offset)
        .set('limit', limit)

        // firstValueForm returns a Promise<Games[]>
        return firstValueFrom(
            // Make Http call, since const param is the same as variable name in argument {params: params}, can do { params} 
            this.http.get<Games[]>(GAMES_URL, {params})
        ).then((data: any) => {
            // Map data JsonObject 'games' as Games[]
            return data['games'] as Games[]
        }).then(data => {
            // tap()
            // fire event with .next() so that games-display/ interested components can subscribe to our data
            // go to games-display.component.ts
            this.onGames.next(data)
            console.log(data)
            return data
        })

}
}