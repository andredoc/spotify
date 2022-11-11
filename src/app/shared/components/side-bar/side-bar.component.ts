import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


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

  constructor(private router: Router) { }

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

  goTo($event:any): void {
    this.router.navigate(['/','favorites'],{
      queryParams: {
        mee1: 'chespirito',
        key2: 'value2',
        key3: 'value3'
      }
    });
    console.log($event)
  }
}
