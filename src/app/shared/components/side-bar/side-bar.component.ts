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
        router: ['/', 'auth']
      },
      {
        name: 'Search',
        icon: 'uil uil-search',
        router: ['/', 'search']
      },
      {
        name: 'Favorites Songs',
        icon: 'uil uil-chart',
        router: ['/', 'favorites'],
        query: { song: 'artist' }
      },
      {
        name: 'Tracks',
        icon: 'uil uil-chart',
        router: ['/', 'tracks'],
      }
    ]

    this.mainMenu.accessLink = [
      {
        name: 'Create List',
        icon: 'uil-plus-square'
      },
      {
        name: "Song's List",
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
        key1: 'value1',
        key2: 'value2',
        key3: 'value3'
      }
    });
    console.log($event.type)
  }
}
