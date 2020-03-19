import { Component, OnInit } from '@angular/core';
import {DatabaseService} from './../../services/database.service';


@Component({
  selector: 'app-hymn0001',
  templateUrl: './hymn0001.page.html',
  styleUrls: ['./hymn0001.page.scss'],
})
export class Hymn0001Page implements OnInit {
  fontSize: number;
  constructor() { }

  ngOnInit() {
   /*  this.db.getDatabaseState.subscribe(ready => {
      if (ready){

      }
    }) */
  }
onChange() {
  console.log(this.fontSize);
}
}
