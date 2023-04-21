import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as _ from "lodash";
import entityData from '../model/entities-data.json';  
import { Entities } from '../model/entities';

@Component({
  selector: 'app-list-of-entities',
  templateUrl: './list-of-entities.component.html',
  styleUrls: ['./list-of-entities.component.scss']
})
export class ListOfEntitiesComponent implements OnInit {
  allEntities: any = [];
  allEntitiesCopy: any = [];
  selectedRowIndex: number = 0; 
  isSelected: boolean = false;
  description: string = '';
  entities:Entities[] = entityData;

  constructor() { }

  ngOnInit(): void {
    this.getEntities();
  }

   // method to get list of entities from entities-data.json file
   getEntities() {
    this.allEntities = this.entities;
    this.allEntitiesCopy = this.allEntities;
    this.allEntities.forEach((item: any) => {
      item.showInput = false;
      item.showNormal = true;
    })
}

  // method to select an entity on clicking Details button
  selectEntity(val1:any,val2:number) {
    this.isSelected = true;
    this.selectedRowIndex = val2;
    this.description = val1.description;
    const screenWidth = window.matchMedia("(max-width: 991px)");
    if(screenWidth.matches) { // condition for checking if device is mobile
      let table = <HTMLElement>(document.querySelector('.table-wrapper'));
      let navbar = <HTMLElement>(document.querySelector('.navbar'));
      let tableHeight = table.offsetHeight;
      let navbarHeight = navbar.offsetHeight;
      $('html, body').animate({
        scrollTop: (tableHeight + navbarHeight)
      }, 500);
    }
    
  }

  // close side navigation bar on click of close button
  closeSideNavBar() {
    this.isSelected = false;
  }

}
