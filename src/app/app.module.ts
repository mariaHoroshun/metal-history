import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GanrePageComponent } from './ganre-page/ganre-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BlackComponent } from './black/black.component';
import { ThrashComponent } from './thrash/thrash.component';
import { DeathComponent } from './death/death.component';
import { DoomComponent } from './doom/doom.component';
import { AlbumPageComponent } from './album-page/album-page.component';
import { RouterModule } from '@angular/router';
import { AlbumTimelineComponent } from './album-timeline/album-timeline.component';
import { TimelineItemsComponent } from './timeline-items/timeline-items.component';
import { CountryTabComponent } from './country-tab/country-tab.component';
import { SpellingInfoComponent } from './spelling-info/spelling-info.component';
import { SoundComponent } from './sound/sound.component';
import { LyricsComponent } from './lyrics/lyrics.component';
import { AlbumBlockComponent } from './album-block/album-block.component';
import { GanreAlbumComponent } from './ganre-album/ganre-album.component';
import { NavigationComponent } from './navigation/navigation.component';
import { InformBlockComponent } from './inform-block/inform-block.component';
import { SubganrePageComponent } from './subganre-page/subganre-page.component';
import { BandCardComponent } from './band-card/band-card.component';
import { GanreBandsComponent } from './ganre-bands/ganre-bands.component';
import { GanreClipComponent } from './ganre-clip/ganre-clip.component';
import { GuitarsCollectionComponent } from './guitars-collection/guitars-collection.component';
import { NavigationBlockComponent } from './navigation-block/navigation-block.component';
import { GanreListComponent } from './ganre-list/ganre-list.component';
import { BrutalDeathComponent } from './subganres/deathGanres/brutal-death/brutal-death.component';
import { OldschoolDeathComponent } from './subganres/deathGanres/oldschool-death/oldschool-death.component';
import { MelodicDeathComponent } from './subganres/deathGanres/melodic-death/melodic-death.component';
import { FirstBlackComponent } from './subganres/blackGanres/first-black/first-black.component';
import { SecondBlackComponent } from './subganres/blackGanres/second-black/second-black.component';
import { DsbmComponent } from './subganres/blackGanres/dsbm/dsbm.component';
import { FuneralDoomComponent } from './subganres/doomGanres/funeral-doom/funeral-doom.component';
import { EpicDoomComponent } from './subganres/doomGanres/epic-doom/epic-doom.component';
import { OldschoolDoomComponent } from './subganres/doomGanres/oldschool-doom/oldschool-doom.component';
import { OldschoolThrashComponent } from './subganres/thrashGanres/oldschool-thrash/oldschool-thrash.component';
import { CrossoverThrashComponent } from './subganres/thrashGanres/crossover-thrash/crossover-thrash.component';
import { ProgThrashComponent } from './subganres/thrashGanres/prog-thrash/prog-thrash.component';
import { FormsModule } from '@angular/forms';
import { AlbumsService } from './albums-service.service';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './search.pipe';
import { SafePipe } from './sanitizeHtml.pipe';
import { NotFoundComponent } from './not-found/not-found.component';


const routes = [
  { path: '', component: HomePageComponent },
  { path: 'albums', component: AlbumPageComponent },
  { path: 'black', component: BlackComponent },
  { path: 'doom', component: DoomComponent },
  { path: 'death', component: DeathComponent },
  { path: 'thrash', component: ThrashComponent },
  { path: 'prog', component: ProgThrashComponent },
  { path: 'oldschoolThrash', component: OldschoolThrashComponent },
  { path: 'crossover', component: CrossoverThrashComponent },
  //** */
  { path: 'funeral', component: FuneralDoomComponent },
  { path: 'oldschoolDoom', component: OldschoolDoomComponent },
  { path: 'epic', component: EpicDoomComponent },
  //** */
  { path: 'first', component: FirstBlackComponent },
  { path: 'second', component: SecondBlackComponent },
  { path: 'dsbm', component: DsbmComponent },
  //** */
  { path: 'melodic', component: MelodicDeathComponent },
  { path: 'oldschoolDeath', component: OldschoolDeathComponent },
  { path: 'brutal', component: BrutalDeathComponent },
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
