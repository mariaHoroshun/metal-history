import { Injectable } from '@angular/core';
import { SubganreContent } from './models/subganre-content';
import { MetalSubganres } from './models/metal-subganres';
import { Observable, of } from 'rxjs';
import { MetalType } from './models/metal-type';

@Injectable({
    providedIn: 'root'
})
export class SubganreContentService {
    constructor() { }
    public getSubganreContent(subganreType: MetalSubganres): Observable<SubganreContent> {
        let subganreContent: SubganreContent;

        switch (subganreType) {
            case MetalSubganres.oldschoolThrash:
                subganreContent = this.getOldschoolThrashContent();
                break;
            case MetalSubganres.crossover:
                subganreContent = this.getCrossoverContent();
                break;
            case MetalSubganres.prog:
                subganreContent = this.getProgContent();
                break;
            case MetalSubganres.oldschoolDeath:
                subganreContent = this.getOldschoolDeathContent();
                break;
            case MetalSubganres.brutal:
                subganreContent = this.getBrutalContent();
                break;
            case MetalSubganres.melodic:
                subganreContent = this.getMelodicContent();
                break;
            case MetalSubganres.oldschoolDoom:
                subganreContent = this.getOldschoolDoomContent();
                break;
            case MetalSubganres.funeral:
                subganreContent = this.getFuneralContent();
                break;
            case MetalSubganres.epic:
                subganreContent = this.getCrossoverContent();
                break;
            case MetalSubganres.firstBlack:
                subganreContent = this.getFirstBlackContent();
                break;
            case MetalSubganres.secondBlack:
                subganreContent = this.getSecondBlackContent();
                break;
            case MetalSubganres.dsbm:
                subganreContent = this.getDSBMContent();
                break;
        }
        return of(subganreContent);
    }

    private getOldschoolThrashContent(): SubganreContent {
        return {
            backgroundImage: 'url(/assets/backgrounds/blackLine.jpg)',
            header: 'Old school thrash',
            mainInfo: 'Блэк метал (black — англ. черный) — музыкальное направление в метале. Жанр зародился в 1980-х как ответвление трэш метала. Первыми блэк метал группами принято считать Venom и Bathory. ' + ' <br/>' + ' Своё наименование стиль получил благодаря альбому «Black Metal», выпущенному группой Venom в 1982 году.Окончательно жанр сформировался в начале 1990-х усилиями норвежских групп «чёрного круга», в состав которого входили некоторые участники Mayhem, Burzum, Darkthrone, Immortal и Emperor.' + ' <br/>' + 'Блэк метал можно считать самым противоречивым жанром.Так как с деятельностью норвержских блэк метал групп связаны убийства людей, поджоги церквей и реальные сатанинские обряды.',
            mainImg: 'url(/assets/bands/blackMain.jpg)',
            videos: []
        };
    }

    private getCrossoverContent(): SubganreContent {
        return {
            backgroundImage: 'url(/assets/backgrounds/blackLine.jpg)',
            header: 'crossover thrash',
            mainInfo: 'Блэк метал (black — англ. черный) — музыкальное направление в метале. Жанр зародился в 1980-х как ответвление трэш метала. Первыми блэк метал группами принято считать Venom и Bathory. ' + ' <br/>' + ' Своё наименование стиль получил благодаря альбому «Black Metal», выпущенному группой Venom в 1982 году.Окончательно жанр сформировался в начале 1990-х усилиями норвежских групп «чёрного круга», в состав которого входили некоторые участники Mayhem, Burzum, Darkthrone, Immortal и Emperor.' + ' <br/>' + 'Блэк метал можно считать самым противоречивым жанром.Так как с деятельностью норвержских блэк метал групп связаны убийства людей, поджоги церквей и реальные сатанинские обряды.',
            mainImg: 'url(/assets/bands/blackMain.jpg)',
            videos: []
        };
    }

    private getProgContent(): SubganreContent {
        return {
            backgroundImage: 'url(/assets/backgrounds/blackLine.jpg)',
            header: 'progressive thrash',
            mainInfo: 'Блэк метал (black — англ. черный) — музыкальное направление в метале. Жанр зародился в 1980-х как ответвление трэш метала. Первыми блэк метал группами принято считать Venom и Bathory. ' + ' <br/>' + ' Своё наименование стиль получил благодаря альбому «Black Metal», выпущенному группой Venom в 1982 году.Окончательно жанр сформировался в начале 1990-х усилиями норвежских групп «чёрного круга», в состав которого входили некоторые участники Mayhem, Burzum, Darkthrone, Immortal и Emperor.' + ' <br/>' + 'Блэк метал можно считать самым противоречивым жанром.Так как с деятельностью норвержских блэк метал групп связаны убийства людей, поджоги церквей и реальные сатанинские обряды.',
            mainImg: 'url(/assets/bands/blackMain.jpg)',
            videos: []
        };
    }

    private getOldschoolDeathContent(): SubganreContent {
        return {
            backgroundImage: 'url(/assets/backgrounds/blackLine.jpg)',
            header: 'Old school death',
            mainInfo: 'Песенные структуры брутального дэт метала совмещают в себе аспекты песенных структур горграйнда и дэт метала. Характерным вокалом для брутального дэт метала является гроулинг и ему подобные стили. Тексты песен в основном на кровавую тематику, поются медленно и прерывисто, и как правило, вслед за гитарными риффами. Гитарные партии, как правило, тяжёлые, ритмичные или сверхбыстрые.' + ' <br/>' + 'Брутальный дэт метал начал развиваться в ранние 90е, как поджанр дэт метала. Началом зарождения стиля являются ранние работы (Eaten Back to Life и Butchered at Birth) группы Cannibal Corpse, которая начала акцентировать игру на техничности и тяжести звучания.' + ' <br/>' + 'Особенностью стиля брутального дэт метала являются шокирующие обложки альбомов. Алекс Вебстер, басист Cannibal Corpse, говорит:«Когда кто-нибудь не имеющий понятия о дэт-метале впервые видит обложку одного из наших альбомов, он должен быть шокирован, а если нет, значит мы сделали плохую обложку.»',
            mainImg: 'url(/assets/bands/blackMain.jpg)',
            videos: ['https://www.youtube.com/embed/8ggMU2uYCa4', 'https://www.youtube.com/embed/FMnTQEvHb1A', 'https://www.youtube.com/embed/ZQICnj5pPKs']
        };
    }

    private getBrutalContent(): SubganreContent {
        return {
            backgroundImage: 'url(/assets/backgrounds/blackLine.jpg)',
            header: 'brutal death',
            mainInfo: 'Блэк метал (black — англ. черный) — музыкальное направление в метале. Жанр зародился в 1980-х как ответвление трэш метала. Первыми блэк метал группами принято считать Venom и Bathory. ' + ' <br/>' + ' Своё наименование стиль получил благодаря альбому «Black Metal», выпущенному группой Venom в 1982 году.Окончательно жанр сформировался в начале 1990-х усилиями норвежских групп «чёрного круга», в состав которого входили некоторые участники Mayhem, Burzum, Darkthrone, Immortal и Emperor.' + ' <br/>' + 'Блэк метал можно считать самым противоречивым жанром.Так как с деятельностью норвержских блэк метал групп связаны убийства людей, поджоги церквей и реальные сатанинские обряды.',
            mainImg: 'url(/assets/bands/blackMain.jpg)',
            videos: []
        };
    }

    private getMelodicContent(): SubganreContent {
        return {
            backgroundImage: 'url(/assets/backgrounds/blackLine.jpg)',
            header: 'Melodic death',
            mainInfo: 'Блэк метал (black — англ. черный) — музыкальное направление в метале. Жанр зародился в 1980-х как ответвление трэш метала. Первыми блэк метал группами принято считать Venom и Bathory. ' + ' <br/>' + ' Своё наименование стиль получил благодаря альбому «Black Metal», выпущенному группой Venom в 1982 году.Окончательно жанр сформировался в начале 1990-х усилиями норвежских групп «чёрного круга», в состав которого входили некоторые участники Mayhem, Burzum, Darkthrone, Immortal и Emperor.' + ' <br/>' + 'Блэк метал можно считать самым противоречивым жанром.Так как с деятельностью норвержских блэк метал групп связаны убийства людей, поджоги церквей и реальные сатанинские обряды.',
            mainImg: 'url(/assets/bands/blackMain.jpg)',
            videos: []
        };
    }

    private getOldschoolDoomContent(): SubganreContent {
        return {
            backgroundImage: 'url(/assets/backgrounds/blackLine.jpg)',
            header: 'Old school doom',
            mainInfo: 'Блэк метал (black — англ. черный) — музыкальное направление в метале. Жанр зародился в 1980-х как ответвление трэш метала. Первыми блэк метал группами принято считать Venom и Bathory. ' + ' <br/>' + ' Своё наименование стиль получил благодаря альбому «Black Metal», выпущенному группой Venom в 1982 году.Окончательно жанр сформировался в начале 1990-х усилиями норвежских групп «чёрного круга», в состав которого входили некоторые участники Mayhem, Burzum, Darkthrone, Immortal и Emperor.' + ' <br/>' + 'Блэк метал можно считать самым противоречивым жанром.Так как с деятельностью норвержских блэк метал групп связаны убийства людей, поджоги церквей и реальные сатанинские обряды.',
            mainImg: 'url(/assets/bands/blackMain.jpg)',
            videos: []
        };
    }

    private getFuneralContent(): SubganreContent {
        return {
            backgroundImage: 'url(/assets/backgrounds/blackLine.jpg)',
            header: 'funeral doom',
            mainInfo: 'Блэк метал (black — англ. черный) — музыкальное направление в метале. Жанр зародился в 1980-х как ответвление трэш метала. Первыми блэк метал группами принято считать Venom и Bathory. ' + ' <br/>' + ' Своё наименование стиль получил благодаря альбому «Black Metal», выпущенному группой Venom в 1982 году.Окончательно жанр сформировался в начале 1990-х усилиями норвежских групп «чёрного круга», в состав которого входили некоторые участники Mayhem, Burzum, Darkthrone, Immortal и Emperor.' + ' <br/>' + 'Блэк метал можно считать самым противоречивым жанром.Так как с деятельностью норвержских блэк метал групп связаны убийства людей, поджоги церквей и реальные сатанинские обряды.',
            mainImg: 'url(/assets/bands/blackMain.jpg)',
            videos: []
        };
    }


    private getFirstBlackContent(): SubganreContent {
        return {
            backgroundImage: 'url(/assets/backgrounds/firstWaveLine.jpg)',
            header: 'First wave black metal',
            mainInfo: 'Прото-блэк или первая волна блэка — блэк метал в его изначальном виде, ещё не отделившийся до конца от трэш или хеви метала (как это было с группой Mercyful Fate). Бласт-бит прослеживается далеко не во всех композициях. Вокал, за исключением группы Bathory, не слишком высокий.' + ' <br/>' + 'Отличительной особенностью можно считать низкое качество звука, которое создается для поддержания загадочной атмосферы.' + ' <br/>' + 'Музыкально все они играли трэш метал с экспериментами в звучании, печатью сатанизма в имидже, и настоящим буйством на сцене. Стоит добавить, что подобные коллективы сеяли семена ужаса даже среди фанатов «тяжёлого метала», не говоря уже об остальных, ни в чём не повинных, случайных обозревателях.',
            mainImg: 'url(/assets/bands/firstWave.jpg)',
            videos: ['https://www.youtube.com/embed/9o8FNVVFJE8', 'https://www.youtube.com/embed/xwaXl4ncRL8', 'https://www.youtube.com/embed/41PxFzoqULU', 'https://www.youtube.com/embed/EHFH50k_2nc']
        };
    }

    private getSecondBlackContent(): SubganreContent {
        return {
            backgroundImage: 'url(/assets/backgrounds/secondWaveLine.jpg)',
            header: 'Second wave black metal',
            mainInfo: 'Вторая волна блэк метала - направление андеграундной тяжёлой музыки, зародившееся в Норвегии в начале 90х годов. В течение 1990—1992 годов ряд норвежских музыкантов, находившихся под сильным впечатлением от этих групп, начали исполнять и выпускать новый тип блэк-метал-музыки.' + ' <br/>' + 'Отличительной чертой норвежского блэк-метала стал новый стиль игры на гитаре, в котором гитарист играл полные аккорды на всех струнах, вместо «пауэр-аккордов» с использованием только двух-трёх струн.' + ' <br/>' + 'Неотъемлимой частью блэк метала стали являться барабанные бласт-биты и игра на гитаре трэмоло. Эти приемы помогаю создать как будто стену шума.',
            mainImg: 'url(/assets/bands/secondWave.jpg)',
            videos: ['https://www.youtube.com/embed/NP0H491rRFU', 'https://www.youtube.com/embed/KDDnTxEdLYw', 'https://www.youtube.com/embed/gskOZ0aKKM8', 'https://www.youtube.com/embed/-VBdAY8eA9w']
        };
    }

    private getDSBMContent(): SubganreContent {
        return {
            backgroundImage: 'url(/assets/backgrounds/dsbm.jpg)',
            header: 'DSBM',
            mainInfo: 'Блэк метал (black — англ. черный) — музыкальное направление в метале. Жанр зародился в 1980-х как ответвление трэш метала. Первыми блэк метал группами принято считать Venom и Bathory. ' + ' <br/>' + ' Своё наименование стиль получил благодаря альбому «Black Metal», выпущенному группой Venom в 1982 году.Окончательно жанр сформировался в начале 1990-х усилиями норвежских групп «чёрного круга», в состав которого входили некоторые участники Mayhem, Burzum, Darkthrone, Immortal и Emperor.' + ' <br/>' + 'Блэк метал можно считать самым противоречивым жанром.Так как с деятельностью норвержских блэк метал групп связаны убийства людей, поджоги церквей и реальные сатанинские обряды.',
            mainImg: 'url(/assets/bands/dsbmMain.jpg)',
            videos: ['https://www.youtube.com/embed/UZlZuYp1fZc', 'https://www.youtube.com/embed/Ifv5dS4xfKA', 'https://www.youtube.com/embed/QFCzLd57_c0']
        };
    }
}
