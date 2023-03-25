import { Component, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { GamesService } from '../games.service';
import { NUMBERS } from '../models';

@Component({
  selector: 'app-number-select',
  templateUrl: './number-select.component.html',
  styleUrls: ['./number-select.component.css']
})
export class NumberSelectComponent {

numbers = NUMBERS

offset?: number = 0

@Output()
onSelection = new Subject<number>()

constructor(private gamesSvc: GamesService){}

onNumberSelect(selectElem: any){
   // selectElem.target.value is retrieved from html as number
   const limit = selectElem.target.value
   console.log(">>> number selected: ", limit)
   this.onSelection.next(limit)
   this.gamesSvc.getGamesByNumber(0,limit)
}
}
