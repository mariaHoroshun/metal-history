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
      },
      {
        year: 1991,
        description: "Overkill – Horrorscope, Sepultura – Arise"
      },
      {
        year: 1992,
        description: "Megadeth - Countdown to Extinction, Pantera - Vulgar Display of Power"
      },
      {
        year: 1993,
        description: "Anthrax - Sound of White Noise, Voivod - The Outer Limits, Sepultura - Chaos A.D."
      },
      {
        year: 1994,
        description: "Annihilator - King of the Kill, Testament - Low"
      },
      {
        year: 1995,
        description: "Sodom - Masquerade in Blood, Iced Earth - Burnt Offerings, Meshuggah - Destroy Erase Improve"
      },
      {
        year: 1996,
        description: "Pantera - The Great Southern Trendkill"
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
      },
      {
        year: 1991,
        description: "Darkthrone - Soulside Journey, Beherit - The Oath of Black Blood, Rotting Christ - Passage to Arcturo"
      },
      {
        year: 1992,
        description: "Darkthrone - A Blaze in the Northern Sky, Immortal - Diabolical Fullmoon Mysticism, Marduk - Dark Endless"
      },
      {
        year: 1993,
        description: "Gorgoroth - A Sorcery Written in Blood, Darkthrone - Under a Funeral Moon, Immortal - Pure Holocaust"
      },
      {
        year: 1994,
        description: "Mayhem - De Mysteriis Dom Sathanas, Dimmu Borgir - For All Tid, Darkthrone - Transilvanian Hunger"
      },
      {
        year: 1995,
        description: "Necromantia - Scarlet Evil Witching Black, Dissection - Storm of the Light's Bane"
      },
      {
        year: 1996,
        description: "Satyricon - Nemesis Divina, Burzum - Filosofem"
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
      },
      {
        year: 1991,
        description: "Cathedral - Forest of Equilibrium, Confessor - Condemned"
      },
      {
        year: 1992,
        description: "Penance - The Road Less Travelled, Revelation - Never Comes Silence, Sleep - Sleep's Holy Mountain "
      },
      {
        year: 1993,
        description: "Count Raven - High on Infinity, Memento Mori - Rhymes of Lunacy"
      },
      {
        year: 1994,
        description: "Left Hand Solution - Shadowdance"
      },
      {
        year: 1995,
        description: "Saint Vitus - Die Healing, Electric Wizard - Electric Wizard, Blood Farmers - Blood Farmers"
      },
      {
        year: 1996,
        description: "Scald - Will of Gods Is a Great Power"
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
      },
      {
        year: 1991,
        description: "Pestilence - Testimony of the Ancients, Morbid Angel - Blessed Are the Sick"
      },
      {
        year: 1992,
        description: "Deicide - Legion, Cannibal Corpse - Tomb of the Mutilated, Asphyx - Last One on Earth"
      },
      {
        year: 1993,
        description: "Sarcófago - I.N.R.I., Mayhem - Deathcrush"
      },
      {
        year: 1994,
        description: "Carcass - Heartwork, Hypocrisy - Osculum Obscenum"
      },
      {
        year: 1995,
        description: "Suffocation - Pierced from Within, Vader - De Profundis"
      },
      {
        year: 1996,
        description: "Immolation - Here in After"
      }
    ];
  }
}
