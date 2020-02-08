import { Component, OnInit } from '@angular/core';
import { DataService } from './../../services/data.service';




@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})


export class TabsPage implements OnInit {
  public searchTerm = "";
  public items: any;


  public isSearchbarOpened = false;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.setFilteredItems();

  }

  setFilteredItems() {
    this.items = this.dataService.filterItems(this.searchTerm);
  }

}


