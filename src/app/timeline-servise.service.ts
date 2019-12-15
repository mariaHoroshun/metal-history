import { Injectable } from '@angular/core';
import { MetalType } from './models/metal-type';
import { of, Observable } from 'rxjs';
import { TimelineItem } from './album-timeline/timeline-item';


@Injectable({
  providedIn: 'root'
})
export class TimelineServiseService {

  constructor() { }

  public getTimelineItems(metalType: MetalType): Observable<TimelineItem[]> {
    let timelineItems: TimelineItem[];

    switch (metalType) {
      case MetalType.thrash:
          timelineItems = this.getThrashTimeLineItems();
          break;
      case MetalType.black:
          timelineItems = this.getBlackTimeLineItems();
          break;
      case MetalType.doom:
          timelineItems = this.getDoomTimeLineItems();
          break;
      case MetalType.death:
            timelineItems = this.getDeathTimeLineItems();
            break;
    }
    return of(timelineItems);
  }

  private getThrashTimeLineItems(): TimelineItem[] {
    return [
      {
        year: 1985,
        description: "Megadeth - Killing is my buisness, Exodus-Bonded by blood" 
      },
      {
        year: 1986,
        description: "Slayer - Reign in blood, Metallica - Master of puppets, Anthrax - Among the Living"
      },
      {
        year: 1987,
        description: "Destruction – Release from agony"
      },
      {
        year: 1988,
        description: "Megadeth - So Far, So Good... So What!, Death Angel – Frolic through the park"
      },
      {
        year: 1989,
        description: "Exodus - Fabulous Disaster, Sodom - Agent Orange"
      },
      {
        year: 1990,
        description: "Pantera - Cowboys From Hell, Megadeth – Rust In Peace, Slayer – Seasons In The Abyss"
      }
    ];
  }

  private getBlackTimeLineItems(): TimelineItem[] {
    return [
      {
        year: 1985,
        description: "Bathory - The Return of the Darkness and Evil"
      },
      {
        year: 1986,
        description: "King Diamond - Fatal Portrait, Venom - Eine Kleine Nachtmusik"
      },
      {
        year: 1987,
        description: "Sarcófago - I.N.R.I., Mayhem - Deathcrush"
      },
      {
        year: 1988,
        description: "Death SS - ...in Death of Steve Sylvester"
      },
      {
        year: 1989,
        description: "Necrophobic - Realm of Terror, NunSlaughter - Rotting Christ"
      },
      {
        year: 1990,
        description: "Hellhammer - Apocalyptic Raids 1990 A.D., Blasphemy - Fallen Angel of Doom..."
      }
    ];
  }

  private getDoomTimeLineItems(): TimelineItem[] {
    return [
      {
        year: 1985,
        description: "Pentagram - Pentagram, Mercy - Witchburner, Chained Lace - Morbid Fascination"
      },
      {
        year: 1986,
        description: "Paul Chain Violet Theatre - In the Darkness, Dwarr - Animals"
      },
      {
        year: 1987,
        description: "Dream Death - Journey Into Mystery"
      },
      {
        year: 1988,
        description: "Candlemass - Ancient Dreams, Run After To - Run After To"
      },
      {
        year: 1989,
        description: "Sorcerer - Demo 89"
      },
      {
        year: 1990,
        description: "Paradise Lost - Lost Paradise"
      }
    ];
  }

  private getDeathTimeLineItems(): TimelineItem[] {
    return [
      {
        year: 1985,
        description: "Sepultura - Bestial Devastation"
      },
      {
        year: 1986,
        description: "Possessed - Beyond the Gates"
      },
      {
        year: 1987,
        description: "Death - Scream Bloody Gore, Napalm Death - Scum, Possessed - The Eyes of Horror"
      },
      {
        year: 1988,
        description: "Death - Leprosy, Bolt Thrower - In Battle There Is No Law"
      },
      {
        year: 1989,
        description: "Obituary - Slowly We Rot, Morbid Angel - Altars of Madness, Autopsy - Severed Survival"
      },
      {
        year: 1990,
        description: "Entombed - Left Hand Path, Deicide - Deicide, Carnage - Dark Recollections"
      }
    ];
  }
}
