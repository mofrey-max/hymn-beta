import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hymn0001',
  templateUrl: './hymn0001.page.html',
  styleUrls: ['./hymn0001.page.scss'],
})
export class Hymn0001Page implements OnInit {
  fontSize: number;
  constructor() { }

  ngOnInit() {
  }
onChange() {
  console.log(this.fontSize);
}
}
