import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GanrePageComponent } from './ganre/ganre-page/ganre-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BlackComponent } from './black/black.component';
import { ThrashComponent } from './thrash/thrash.component';
import { DeathComponent } from './death/death.component';
import { DoomComponent } from './doom/doom.component';
import { AlbumPageComponent } from './album/album-page/album-page.component';
import { RouterModule } from '@angular/router';
import { AlbumTimelineComponent } from './album/album-timeline/album-timeline.component';
import { TimelineItemsComponent } from './album/timeline-items/timeline-items.component';
import { CountryTabComponent } from './common/country-tab/country-tab.component';
import { SpellingInfoComponent } from './common/spelling-info/spelling-info.component';
import { SoundComponent } from './sound/sound.component';
import { LyricsComponent } from './lyrics/lyrics.component';
import { AlbumBlockComponent } from './album/album-block/album-block.component';
import { GanreAlbumComponent } from './ganre/ganre-album/ganre-album.component';
import { NavigationComponent } from './navigation/navigation.component';
import { InformBlockComponent } from './common/inform-block/inform-block.component';
import { SubganrePageComponent } from './ganre/subganre-page/subganre-page.component';
import { BandCardComponent } from './band-card/band-card.component';
import { GanreBandsComponent } from './ganre/ganre-bands/ganre-bands.component';
import { GanreClipComponent } from './ganre/ganre-clip/ganre-clip.component';
import { GuitarsCollectionComponent } from './common/guitars-collection/guitars-collection.component';
import { NavigationBlockComponent } from './navigation/navigation-block/navigation-block.component';
import { GanreListComponent } from './ganre/ganre-list/ganre-list.component';
import { BrutalDeathComponent } from './death/subganres/brutal-death/brutal-death.component';
import { OldschoolDeathComponent } from './death/subganres/oldschool-death/oldschool-death.component';
import { MelodicDeathComponent } from './death/subganres/melodic-death/melodic-death.component';
import { FirstBlackComponent } from './black/subganres/first-black/first-black.component';
import { SecondBlackComponent } from './black/subganres/second-black/second-black.component';
import { DsbmComponent } from './black/subganres/dsbm/dsbm.component';
import { FuneralDoomComponent } from './doom/subganres/funeral-doom/funeral-doom.component';
import { EpicDoomComponent } from './doom/subganres/epic-doom/epic-doom.component';
import { OldschoolDoomComponent } from './doom/subganres/oldschool-doom/oldschool-doom.component';
import { OldschoolThrashComponent } from './thrash/subganres/oldschool-thrash/oldschool-thrash.component';
import { CrossoverThrashComponent } from './thrash/subganres/crossover-thrash/crossover-thrash.component';
import { FormsModule } from '@angular/forms';
import { AlbumsService } from './albums-service.service';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './search.pipe';
import { SafePipe } from './sanitizeHtml.pipe';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProgThrashComponent } from './thrash/subganres/thrashGanres/prog-thrash/prog-thrash.component';


const routes = [
  { path: '', component: HomePageComponent },
  { path: 'albums', component: AlbumPageComponent },

  { path: 'thrash', component: ThrashComponent },
  { path: 'thrash/oldschool', component: OldschoolThrashComponent },
  { path: 'trash/crossover', component: CrossoverThrashComponent },
  { path: 'trash/prog', component: ProgThrashComponent },

  //** */
  { path: 'doom', component: DoomComponent },
  { path: 'doom/funeral', component: FuneralDoomComponent },
  { path: 'doom/oldschool', component: OldschoolDoomComponent },
  { path: 'doom/epic', component: EpicDoomComponent },

  //** */
  { path: 'black', component: BlackComponent },
  { path: 'black/firstwave', component: FirstBlackComponent },
  { path: 'black/secondwave', component: SecondBlackComponent },
  { path: 'black/dsbm', component: DsbmComponent },
  //** */

  { path: 'death', component: DeathComponent },
  { path: 'death/melodic', component: MelodicDeathComponent },
  { path: 'death/oldschool', component: OldschoolDeathComponent },
  { path: 'death/brutal', component: BrutalDeathComponent },
  /** */
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  declarations: [
    AppComponent,
    GanrePageComponent,
    HomePageComponent,
    BlackComponent,
    ThrashComponent,
    DeathComponent,
    DoomComponent,
    AlbumPageComponent,
    AlbumTimelineComponent,
    TimelineItemsComponent,
    CountryTabComponent,
    SpellingInfoComponent,
    SoundComponent,
    LyricsComponent,
    AlbumBlockComponent,
    GanreAlbumComponent,
    NavigationComponent,
    InformBlockComponent,
    SubganrePageComponent,
    BandCardComponent,
    GanreBandsComponent,
    GanreClipComponent,
    GuitarsCollectionComponent,
    NavigationBlockComponent,
    GanreListComponent,
    BrutalDeathComponent,
    OldschoolDeathComponent,
    MelodicDeathComponent,
    FirstBlackComponent,
    SecondBlackComponent,
    DsbmComponent,
    FuneralDoomComponent,
    EpicDoomComponent,
    OldschoolDoomComponent,
    OldschoolThrashComponent,
    CrossoverThrashComponent,
    ProgThrashComponent,
    SearchPipe,
    SafePipe,
    NotFoundComponent
  ],
  imports: [
    FontAwesomeModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AlbumsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
