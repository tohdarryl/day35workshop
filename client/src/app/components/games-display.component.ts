import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { GamesService } from '../games.service';
import { Games } from '../models';

@Component({
  selector: 'app-games-display',
  templateUrl: './games-display.component.html',
  styleUrls: ['./games-display.component.css']
})
export class GamesDisplayComponent implements OnInit, OnDestroy, OnChanges{


  games!: Games[]
  gamesSub!: Subscription

  // Get from parent 
  @Input()
  limit!: number
  
  // No need '!' or '?' when defining variable = 0
  offset = 0  
  

  constructor(private gamesSvc: GamesService){}

  // sees changes at @Input
  ngOnChanges(changes: SimpleChanges): void{
    console.info(">>> simple changes: ", changes)
  }

  ngOnInit(): void {
      // subscribe, everytime .next() is executed, will pass us data and we'll set data as this.weather
      this.gamesSub = this.gamesSvc.onGames.subscribe(
        data => this.games = data
      )
  }

  ngOnDestroy(): void {
      this.gamesSub.unsubscribe()
  }

  nextButton(){
    // include '+' in (this.limit/offset) ensures it does sum instead of concatenate
    this.offset = (+this.offset) + (+this.limit)
    console.log('offset', this.offset)

    this.getGames(this.offset, this.limit)   
  }

  previousButton(){
    this.offset = this.offset-(this.limit)
    if (this.offset < 0) {
      this.offset=0
    }
    console.log('offset', this.offset)
    this.getGames(this.offset, this.limit) 
  }

  getGames(offset:number, limit:number) {
    this.gamesSvc.getGamesByNumber(this.offset, this.limit)
    .then(result => {
      // console.log(result,'result')
      this.games = result
      // console.log(this.games)
    })
    .catch(error => console.log(error))
  }
}
