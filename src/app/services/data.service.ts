
import { Injectable } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  public items: any = [];
  selectedPath = '';

  constructor( private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });
    this.items = [
      {
        id: '1',
        title:  'The God of Abraham praise!',
        url:  '/hymn0001'

      },
      {
        id: '2',
        index: '0002',
        title:  'The God of Abraham praise!',
        url:  '/hymn0001'
      },
      {
        id: '3',
        index: '0003',
        title:  'The God of Abraham praise!',
        url:  '/hymn0001'
      },
      {
        id: '4',
        index: '0004',
        title:  'The God of Abraham praise!',
        url:  '/hymn0001'
      },
      {
        id: '5',
        index: '0005',
        title:  'The God of Abraham praise!',
        url:  '/hymn0001'
      },


    ];
  }

  filterItems(searchTerm) {
    return this.items.filter(item => {
      return item.id.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }
}
