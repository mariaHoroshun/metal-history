import { GuitarCard } from './guitar-card/guitar-card';
import { of, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class GuitarService {
    getGuitarCards(): Observable<GuitarCard[]> {
        let guitarCards: GuitarCard[] =
            [
                {
                    photo: "url(/assets/guitars/rich.png)",
                    description: 'Дейв Мастейн, B. C. Rich Bich'
                },
                {
                    photo: 'url(/assets/guitars/rr.png)',
                    description: 'Алекси Лайхо, Jackson RR Custom'
                },
                {
                    photo: 'url(/assets/guitars/kelly.png)',
                    description: 'Марти Фридман, Jackson Kelly'
                },
                {
                    photo: 'url(/assets/guitars/warrior.png)',
                    description: 'Чак Шульдинер, B. C. Rich Warrior'
                }
            ];
        return of(guitarCards);
    }
}
