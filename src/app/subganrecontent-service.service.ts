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
                subganreContent = this.getEpicContent();
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
            backgroundImage: 'url(/assets/backgrounds/oldThrashLine.jpg)',
            header: 'Old school thrash',
            mainInfo: 'Трэш метал оказал огромное влияние на новое поколение середины 80x, благодаря чему породил новые, более экстремальные и радикальные жанры метала, такие как дэт метал и блэк метал. Классическим трэш металом считаются группы, появившиеся в середине 80х годов.' + ' <br/>' + 'Классическое трэш метал звучание достигается при помощи использования сильного gain и fuzz для гитар. Вместе с техникой palm mute и техническими настройками, гитарные партии звучат четко и резко. Часто используется схема песен куплет-припев-куплет-соло-припев.' + ' <br/>' + 'Существуют и современные группы, которые подражают стилю трэш метала 80х. Это движение называется Thrash Metal Revival (возрождение трэш метала). К таким группам относятся Violator, Evile, Bonded by blood, Gama Bomb',
            mainImg: 'url(/assets/bands/oldschoolThrash.jpg)',
            videos: ['https://www.youtube.com/embed/4kSvN1dQjxc', 'https://www.youtube.com/embed/DECp8LKurKs', 'https://www.youtube.com/embed/YcfIGok1mMI']
        };
    }

    private getCrossoverContent(): SubganreContent {
        return {
            backgroundImage: 'url(/assets/backgrounds/crossoverLine.jpg)',
            header: 'crossover thrash',
            mainInfo: 'Кроссовер трэш — музыкальный стиль, который является одной из форм трэш метала или хардкор панка, оказавших влияние друг на друга, либо является их смесью. Кроссовер представляет собой одно из направлений панк метала. Термин прижился после выхода в 1987 году альбома «Crossover» группы D.R.I.' + ' <br/>' + 'Такое смешение жанров получалось вполне естественным, поскольку и хардкор, и метал насыщенны риффами, и часто, но не исключительно, исполняются в очень быстром темпе. Повышая свою технику игры, представители метал-сцены создают новый жанр, все дальше отдаляясь от хардкора, который ориентирован на быстрый темп и короткие песни.' + ' <br/>' + 'Кроссовер не утратил популярность и в наше время, он очень популярен в США, Бразилии и Европе. Представителями кроссовер трэш сцены являются Municipal Waste, Toxic Holocaust, Wehrmaht, Attitude Adjustment, Cross Examination, Ratos De Porão, Short Sharp Shock и тд.',
            mainImg: 'url(/assets/backgrounds/crossoverBand.jpg)',
            videos: ['https://www.youtube.com/embed/S7wntm7QVXQ', 'https://www.youtube.com/embed/-nL_-Yjztsc']
        };
    }

    private getProgContent(): SubganreContent {
        return {
            backgroundImage: 'url(/assets/backgrounds/progLine.jpg)',
            header: 'progressive thrash',
            mainInfo: 'Прогрессивный метал или прог-метал — подстиль метала. Этот жанр основывается на прогрессивном роке и включает в себя сложные композиционные структуры, причудливые музыкальные размеры и виртуозную технику игры на музыкальных инструментах. Высокий уровень профессионализма музыкантов часто комбинируется с лирическим в форме концептуальных эпических текстов. Например, творчество Канадской группы Voivod полностью посвящено инопланетной и космической тематике.' + ' <br/>' + 'Прогрессивный трэш метал отличается от обычного трэша использованием брэйкдаунов, диссонансов и чистого вокала. Также, в прог-метале басовые партии прописаны лучше и отчетливо слышны.',
            mainImg: 'url(/assets/backgrounds/progBand.jpg)',
            videos: ['https://www.youtube.com/embed/J7dLBw11xtQ', 'https://www.youtube.com/embed/pTYHYglem-M', 'https://www.youtube.com/embed/iZQuscTxSk4']
        };
    }

    private getOldschoolDeathContent(): SubganreContent {
        return {
            backgroundImage: 'url(/assets/backgrounds/oldDeathLine.jpg)',
            header: 'Old school death',
            mainInfo: 'Первые дэт метал группы вдохновлялись творчством групп Slayer и Sodom. Обладая высокой скоростью исполнения, предельной жёсткостью звучания, а также активно эксплуатируя темы о смерти, войне, насилии и сатанизме, группы стали культовыми и послужили развитию раннего дэт метала.' + ' <br/>' + 'В 1983 году появилась группа Possessed. Они были первыми, кто использовал в манере пения гроулинг (приём экстремального вокала, суть которого заключается в звукоизвлечении за счёт резонирующей гортани). Изменение в манере пения и утяжеление гитарных рифов послужили образованию более экстремального жанра, чем трэш - дет метала.' + ' <br/>' + 'В начале развития дэт-метал характеризовался простой композиционной структурой и небогатым мелодизмом, но в дальнейшем, в процессе развития стиля и слияния его с другими музыкальными жанрами, музыка усложнялась.',
            mainImg: 'url(/assets/backgrounds/oldDeathBand.jpg)',
            videos: ['https://www.youtube.com/embed/8ggMU2uYCa4', 'https://www.youtube.com/embed/FMnTQEvHb1A', 'https://www.youtube.com/embed/ZQICnj5pPKs', '']
        };
    }

    private getBrutalContent(): SubganreContent {
        return {
            backgroundImage: 'url(/assets/backgrounds/brutalLine.jpg)',
            header: 'brutal death',
            mainInfo: 'Песенные структуры брутального дэт метала совмещают в себе аспекты песенных структур горграйнда и дэт метала. Характерным вокалом для брутального дэт метала является гроулинг и ему подобные стили. Тексты песен в основном на кровавую тематику, поются медленно и прерывисто, и как правило, вслед за гитарными риффами. Гитарные партии, как правило, тяжёлые, ритмичные или сверхбыстрые.' + '<br/>' + 'Брутальный дэт метал начал развиваться в ранние 90е, как поджанр дэт метала. Началом зарождения стиля являются ранние работы (Eaten Back to Life и Butchered at Birth) группы Cannibal Corpse, которая начала акцентировать игру на техничности и тяжести звучания.' + ' <br/>' + 'Особенностью стиля брутального дэт метала являются шокирующие обложки альбомов. Алекс Вебстер, басист Cannibal Corpse, говорит:«Когда кто-нибудь не имеющий понятия о дэт-метале впервые видит обложку одного из наших альбомов, он должен быть шокирован, а если нет, значит мы сделали плохую обложку.»',
            mainImg: 'url(/assets/backgrounds/brutalBand.jpg)',
            videos: ['https://www.youtube.com/embed/dFTUkFyO4ro', 'https://www.youtube.com/embed/IJkMrl4AG8w']
        };
    }

    private getMelodicContent(): SubganreContent {
        return {
            backgroundImage: 'url(/assets/backgrounds/melodicLine.jpg)',
            header: 'Melodic death',
            mainInfo: 'Мелодичный дэт метал — поджанр дэт метала, отличающийся выраженной мелодичностью.Довольно близок к пауэр и спид металу по звучанию.Жанр отличается от традиционного дэт метала частым использованием чистого вокала, использованием клавишных, большим разнообразием гитарных риффов, близких к трэш- металу и спид - металу, частотой и мелодичностью соло - партий.' + '<br/>' + 'Родоначальниками жанра считают английский коллектив Carcass -«Heartwork»(1993) и Necroticism – Descanting the Insalubrious(1991).' + ' <br/> ' + 'Большую популярность мелодичный дэт метал сыскал в Скандинавских странах.Kalmah, Children of Bodom, Norther, Amon Amarth, Arch Enemy - отличные представители скандинавской школы метала.',
            mainImg: 'url(/assets/backgrounds/melodicBand.jpg)',
            videos: ['https://www.youtube.com/embed/5cEK1OLhUKQ', 'https://www.youtube.com/embed/RaXS4nAx0jU', 'https://www.youtube.com/embed/edBYB1VCV0k']
        };
    }

    private getOldschoolDoomContent(): SubganreContent {
        return {
            backgroundImage: 'url(/assets/backgrounds/oldDoomLine.jpg)',
            header: 'Old school doom',
            mainInfo: 'Традиционный дум-метал — медленный, меланхоличный метал, возникший под влиянием Black Sabbath. Используются повторяющиеся, грубые, порою атональные риффы, отдельные элементы блюз-рока, мощный, «укачивающий» бас и даже веяния психоделии. Некоторые группы классической школы дум метала предпочитают время от времени «разбавлять» медленность и вязкость в звучании динамичными, характерными для рок-н-ролла, вставками. Большая часть представителей традиционного дум метала предпочитает чистый вокал' + ' <br/>' + 'Атмосфера в музыке классических дум-исполнителей весьма разнообразна - от холодной, эпической скорби до отчаяния и ярости.',
            mainImg: 'url(/assets/backgrounds/oldDoomBand.png)',
            videos: ['https://www.youtube.com/embed/0qanF-91aJo', 'https://www.youtube.com/embed/5SKsysEU4oo']
        };
    }

    private getFuneralContent(): SubganreContent {
        return {
            backgroundImage: 'url(/assets/backgrounds/funeralLine.jpg)',
            header: 'funeral doom',
            mainInfo: 'Похоронный дум метал — стиль, в котором медленный темп доводится до крайностей и делается акцент на атмосфере отчаяния и опустошённости. Данный стиль можно рассматривать как отход от дэт-дум-метала с помощью более сильного замедления музыки и нередко с внедрением элементов эмбиента. В итоге получается искажённое и мрачное звучание, но, в то же время, часто мечтательное. В качестве вокала обычно используется гроулинг, но зачастую он является фоновым, и скорее используется как дополнительная текстура в музыке' + ' <br/>' + 'В дальнейшем, часть групп оставила за собой Doom/Death структуру и их можно выделить отдельно, как подвид «Funeral Death Doom» (Evoken). Другая часть групп пошли путем разрушения рифовой структуры, что привело к созданию нового подвида – «Ambient Funeral Doom» (Until Death Overtakes Me), где при сохранении общей идеи Funeral Doom (похоронная мрачность музыки, её медленность) композиции строятся на гитарных перегрузах.',
            mainImg: 'url(/assets/backgrounds/funeralBand.jpg)',
            videos: ['https://www.youtube.com/embed/wqnGL5NBGWc', 'https://www.youtube.com/embed/hhLfSe7ZbHA']
        };
    }

    private getEpicContent(): SubganreContent {
        return {
            backgroundImage: 'url(/assets/backgrounds/epicLine.jpg)',
            header: 'epic doom',
            mainInfo: 'Эпик-дум метал (англ. epic doom metal) — поджанр, напоминающий традиционный дум-метал с более сильным влиянием средневековья и/или фэнтези. Вокалисты используют чистое, оперное и хоровое пение, а аккомпанементом служит игра на клавишных и ударных, выполняемая напыщенным образом, чтобы вызвать чувство «эпичности».' + ' <br/>' + ' В лирике и образах присутствует влияние фэнтези или мифологии. Эпик-дум уходит корнями в более традиционный метал, копируя некие концепции прото-думских групп.',
            mainImg: 'url(/assets/backgrounds/epicBand.jpg)',
            videos: ['https://www.youtube.com/embed/-3uvf0cn0jo', 'https://www.youtube.com/embed/8aDYf0AS83M']
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
            videos: ['https://www.youtube.com/embed/Ifv5dS4xfKA', 'https://www.youtube.com/embed/UZlZuYp1fZc', 'https://www.youtube.com/embed/QFCzLd57_c0']
        };
    }
}
