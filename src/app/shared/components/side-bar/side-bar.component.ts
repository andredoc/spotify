import { Component, OnInit } from '@angular/core';
import { HomeModule } from '@modules/home/home.module';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  mainMenu: {
    defaultOptions: Array<any>,
    accessLink: Array<any>
  } = { defaultOptions: [], accessLink: [] }

  customOptions: Array<any> = []

  constructor() { }

  ngOnInit(): void {

    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil uil-estate',
        router: ['/']
      },
      {
        name: 'Search',
        icon: 'uil uil-search',
        router: ['/', 'history']
      },
      {
        name: 'Your Library',
        icon: 'uil uil-chart',
        router: ['/', 'favorites'],
        query: { hola: 'mundo' }
      }
    ]

    this.mainMenu.accessLink = [
      {
        name: 'Create List',
        icon: 'uil-plus-square'
      },
      {
        name: 'Favorites Songs',
        icon: 'uil-heart-medical'
      }
    ]

    this.customOptions = [
      {
        name: 'My List º1',
        router: ['/']
      },
      {
        name: 'My List º2',
        router: ['/']
      },
      {
        name: 'My List º3',
        router: ['/']
      },
      {
        name: 'My List º4',
        router: ['/']
      }
    ]    
  }
}
