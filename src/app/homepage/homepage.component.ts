import { Component, OnInit, ViewChild } from '@angular/core';
import { ListOfEntitiesComponent } from '../list-of-entities/list-of-entities.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  @ViewChild(ListOfEntitiesComponent, { static: false })
  list: ListOfEntitiesComponent = new ListOfEntitiesComponent;

  constructor() { }

  ngOnInit(): void {

  }

  // method to search entities based on date,list name or no of entities
  searchEntity(value: string) {
    if (value) {
      if (this.list.allEntities.some((b: any) => (b['listName'] != null && b['listName'].toLowerCase().includes(value))
        || (b['date'] != null && b['date'].includes(value))
        || (b['noOfEntities'] != null && b['noOfEntities'].includes(value)))) {
          this.list.allEntities = this.list.allEntities.filter((b: any) => {
          return (b['listName'] != null && b['listName'].toLowerCase().includes(value)) ||
            (b['date'] != null && b['date'].includes(value)) ||
            (b['noOfEntities'] != null && b['noOfEntities'].includes(value));
        })
      }
      else {
        this.list.allEntities = this.list.allEntitiesCopy;
      }
    }
    else {
      this.list.allEntities = this.list.allEntitiesCopy;
    }
  }

}
