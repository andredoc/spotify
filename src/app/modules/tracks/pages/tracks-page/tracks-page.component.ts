import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit, OnDestroy {

  trackTrending: Array<TrackModel> = []
  trackRandom: Array<TrackModel> = []

  listObservers$: Array<Subscription> = []

  constructor(private trackService: TrackService) {}

  ngOnInit(): void {
    this.trackService.getAllTracks$().subscribe(
      (response)=>{
        this.trackTrending = response
      })

    this.trackService.getAllRandom$().subscribe(
      (response)=>{
        this.trackRandom = response
      })
  }

  ngOnDestroy():void {

  }

}
