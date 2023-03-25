import { Component } from '@angular/core';
import { GamesService } from './games.service';
import { NUMBERS } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';

  limit!:number

selectedLimit(num: number){
  this.limit = num
  console.log(">>> limit", this.limit)
}
}
