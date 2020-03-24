import { GuitarCard } from './common/guitars-collection/guitar-card';
import { of, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class GuitarService {
    getGuitarCards(): Observable<GuitarCard[]> {
        const guitarCards: GuitarCard[] =
            [
                {
                    photo: '/assets/guitars/rich.png',
                    description: 'Дейв Мастейн, B. C. Rich Bich'
                },
                {
                    photo: '/assets/guitars/rr.png',
                    description: 'Алекси Лайхо, LTD ALEXI-600 GREENY'
                },
                {
                    photo: '/assets/guitars/chuck.png',
                    description: 'Чак Шульдинер, B.C. Rich Steath'
                },
                {
                    photo: '/assets/guitars/spector.png',
                    description: 'Алекс Вебстер, Spector Alex Webster signature'
                },
                {
                    photo: '/assets/guitars/kelly.png',
                    description: 'Марти Фридман, Jackson Custom Shop Kelly'
                },
                {
                    photo: '/assets/guitars/kerry.png',
                    description: 'Керри Кинг, ESP KK Graphic'
                },
                {
                    photo: '/assets/guitars/gibson.png',
                    description: 'Джеймс Хэтфилд, 1984 Gibson Explorer'
                },
                {
                    photo: '/assets/guitars/dean.png',
                    description: 'Даймбэг Дэррел, Dean From Hell'
                },
                {
                    photo: '/assets/guitars/ibanez.png',
                    description: 'Пол Гилберт, Ibanez PGM300'
                }
            ];
        return of(guitarCards);
    }
}

