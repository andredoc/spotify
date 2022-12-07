import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs'; //Reactive Programming

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  mockCover: TrackModel = {
    cover: 'https://i.scdn.co/image/ab67616d0000b27345ca41b0d2352242c7c9d4bc',
    album: 'Gioli & Assi',
    name: 'BEBE (Oficial)',
    url: 'http://localhost/track.mp3',
    _id: 1
  }

  listObserver$: Array<Subscription> = []

  constructor(private multimediaService : MultimediaService) { }

  ngOnInit(): void {
      const observable1$ = this.multimediaService.myObservable1$
      .subscribe(
        (responseOk)=>{ console.log('😁 todo bien:', responseOk) },
        (responseFail)=>{ console.log('🤬 se tapó la tubería', responseFail) }
      )
  }

  ngOnDestroy(): void {
    this.listObserver$.forEach(u => u.unsubscribe())
    console.log('💥💥💥 BOOM!')
  }

}
