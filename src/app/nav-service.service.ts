import { Injectable } from '@angular/core';
import { MetalType } from './models/metal-type';
import { of, Observable } from 'rxjs';
import { NavBlock } from './navigation/navigation-block/nav-block';


@Injectable({
    providedIn: 'root'
})

export class NavService {
    constructor() { }

    public getNavItems(metalType: MetalType): Observable<NavBlock[]> {
        let NavItems: NavBlock[];

        switch (metalType) {
            case MetalType.thrash:
                NavItems = this.getThrasNav();
                break;
            case MetalType.black:
                NavItems = this.getBlackNav();
                break;
            case MetalType.doom:
                NavItems = this.getDoomNav();
                break;
            case MetalType.death:
                NavItems = this.getDeathNav();
                break;
        }
        return of(NavItems);
    }

    private getThrasNav(): NavBlock[] {
        return [
            {
                navLink: '/thrash',
                navBackground: 'url(/assets/backgrounds/thrash.jpg)',
                ganreName: 'thrash'
            },
            {
                navLink: '/thrash/oldschool',
                navBackground: 'url(/assets/backgrounds/oldThrashGanre.jpg)',
                ganreName: 'old school'
            },
            {
                navLink: '/trash/crossover',
                navBackground: 'url(/assets/backgrounds/crossoverGanre.jpg)',
                ganreName: 'crossover'
            },
            {
                navLink: '/trash/prog',
                navBackground: 'url(/assets/backgrounds/progGanre.jpg)',
                ganreName: 'progressive'
            }
        ];
    }

    private getDeathNav(): NavBlock[] {
        return [
            {
                navLink: '/death',
                navBackground: 'url(/assets/backgrounds/death.jpg)',
                ganreName: "death"
            },
            {
                navLink: '/death/brutal',
                navBackground: 'url(/assets/backgrounds/cannibal.jpg)',
                ganreName: "brutal"
            },
            {
                navLink: '/death/oldschool',
                navBackground: 'url(/assets/backgrounds/oldDeathGanre.jpg)',
                ganreName: "old School"
            },
            {
                navLink: '/death/melodic',
                navBackground: 'url(/assets/backgrounds/melodicGanre.jpg)',
                ganreName: "melodic"
            }
        ];
    }

    private getDoomNav(): NavBlock[] {
        return [
            {
                navLink: "/doom",
                navBackground: 'url(/assets/backgrounds/doom.jpg)',
                ganreName: "doom"
            },
            {
                navLink: "/doom/funeral",
                navBackground: 'url(/assets/backgrounds/funeralGanre.jpg)',
                ganreName: "funeral"
            },
            {
                navLink: "/doom/epic",
                navBackground: 'url(/assets/backgrounds/epicGanre.jpg)',
                ganreName: 'epic'
            },
            {
                navLink: "/doom/oldschool",
                navBackground: 'url(/assets/backgrounds/oldDoomGanre.jpg)',
                ganreName: 'old school'
            }
        ];
    }

    private getBlackNav(): NavBlock[] {
        return [
            {
                navLink: "/black",
                navBackground: 'url(/assets/backgrounds/black.jpg)',
                ganreName: "black"
            },
            {
                navLink: "/black/firstwave",
                navBackground: 'url(/assets/backgrounds/firstGanre.jpg)',
                ganreName: "first wave"
            },
            {
                navLink: "/black/secondwave",
                navBackground: 'url(/assets/backgrounds/secondGanre.jpg)',
                ganreName: "second wave"
            }, {
                navLink: "/black/dsbm",
                navBackground: 'url(/assets/backgrounds/dsbmGanre.jpg)',
                ganreName: "DSBM"
            }
        ];
    }
}
