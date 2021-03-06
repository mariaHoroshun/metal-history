import { Injectable } from '@angular/core';
import { MetalType } from './models/metal-type';
import { of, Observable } from 'rxjs';
import { GanreContent } from './models/ganre-content';

@Injectable({
    providedIn: 'root'
})
export class GanreContentService {
    constructor() { }

    public getGanreContent(metalType: MetalType): Observable<GanreContent> {
        let ganreContent: GanreContent;

        switch (metalType) {
            case MetalType.thrash:
                ganreContent = this.getThrashContent();
                break;
            case MetalType.black:
                ganreContent = this.getBlackContent();
                break;
            case MetalType.doom:
                ganreContent = this.getDoomContent();
                break;
            case MetalType.death:
                ganreContent = this.getDeathContent();
                break;
        }
        return of(ganreContent);
    }

    private getBlackContent(): GanreContent {
        return {
            backgroundImage: 'url(/assets/backgrounds/blackLine.jpg)',
            header: 'Black metal',
            mainInfo: 'Блэк метал (black — англ. черный) — музыкальное направление в метале. Жанр зародился в 1980-х как ответвление трэш метала. Первыми блэк метал группами принято считать Venom и Bathory. ' + ' <br/>' + ' Своё наименование стиль получил благодаря альбому «Black Metal», выпущенному группой Venom в 1982 году.Окончательно жанр сформировался в начале 1990-х усилиями норвежских групп «чёрного круга», в состав которого входили некоторые участники Mayhem, Burzum, Darkthrone, Immortal и Emperor.' + ' <br/>' + 'Блэк метал можно считать самым противоречивым жанром.Так как с деятельностью норвержских блэк метал групп связаны убийства людей, поджоги церквей и реальные сатанинские обряды.',
            mainImg: 'url(/assets/bands/blackMain.jpg)',
            soundImg: 'url(/assets/covers/blackSound.png)',
            soundInfo: 'Блэк метал, как правило, характеризуется скоростными гитарными и барабанными партиями. Используются приёмы игры тремоло и бласт-бит. Звучание гитар резкое и «сырое», создающее меланхоличную и тревожную атмосферу.Вокал — скриминг и его разновидности — резкий хрипящий крик, или высокий вопль с истеричной интонацией; иногда применяются вставки гроулинга.Подобное звучание определяется как Raw black metal(от англ.raw — «сырой») и считается классическим.Бас - гитара и клавишные(крайне редко) играют вспомогательную роль в традиционном эталонном блэке',
            lyricsInfo: 'Важную роль играет идеология музыкантов и тематика песен. Изначально блэк метал сформировался на почве антихристианской идеологии, поэтому многие группы эксплуатируют оккультную тематику. Однако, существуют блэк метал группы, которые эксплуатируют такую тематику, как война и смерть. Есть и группы, которые посвящают текста природе и мифологии.',
            lyricsImg: 'url(/assets/covers/blackLyrics.jpg)',
            firstLyr: 'Верьте высоким морским волнам, возвещающим наш шторм' + ' <br/>' + 'Слушайте ревущий поток, который мы называем рассветом' + ' <br/>' + 'Смотрите на лед, в котором мы пестуем наши души' + ' <br/>' + 'Крики замерзающей Земли, тьма поглощает ваш род' + ' <br/>' + 'Чудовищно бушуют вдалеке моря, ' + ' <br/>' + 'словно пытаясь скрыться от того, что приближается' + ' <br/>' + 'В небесах, над соленым морским воздухом,' + ' <br/>' + 'мы наблюдали падение гиганта' + ' <br/>' + '- Immortal - At the Heart of Winter',
            secLyr: 'И моё имя выжжено огнём' + ' <br/>' + 'Увидишь ты его когда настанет время' + ' <br/>' + 'Когда в страну теней навечно канешь ты' + ' <br/>' + 'Где демон реет в почерневшем небе,' + ' <br/>' + 'Сползая как змея в кромешный ад.' + ' <br/>' + 'То имя сто крат проклято навек.' + ' <br/>' + 'Осуждено в веках скитаться как змея' + ' <br/>' + 'Как демон, что летит беззвездье рек' + ' <br/>' + 'Сползая снова в ад, бездонный ад.' + ' <br/>' + '- Mayhem - Cursed To Eternity',
            americanBands: [' Wolves in the Throne Room', 'Absu', 'Judas Iscariot', 'Xasthur', 'Icon of Phobos', 'Agalloch', 'Ceremonial Castings'],
            germanBands: [' The Ruins of Beverast', 'Nargaroth', 'Lunar Aurora', 'Empyrium', 'Klabautamann'],
            russianBands: ['Walknut', 'Аркона', 'Branikald', 'Темнозорь', 'Pseudogod', 'Rossomahaar'],
            britishBands: ['Wodensthrone', 'Cradle of Filth', 'Spearhead', 'Venom', 'Winterfylleth'],
            americanImg: 'url(/assets/bands/americanBlack.jpg)',
            germanImg: 'url(/assets/bands/germanBlack.jpg)',
            russianImg: 'url(/assets/bands/russianBlack.jpg)',
            britishImg: 'url(/assets/bands/britishBlack.jpg)'
        };
    }
    private getThrashContent(): GanreContent {
        return {
            backgroundImage: 'url(/assets/backgrounds/thrashLine.jpg)',
            header: 'Thrash Metal',
            mainInfo: 'Трэш-метал (thrash — англ. бить, молотить, крошить) — музыкальное направление в метале, давшее начало всем экстремальным его разновидностям. Характеризуется достаточно высокой скоростью исполнения, большей жёсткостью пробивных, быстрых, исполненных в низком диапазоне частот риффов по сравнению с классическим хэви-металом и агрессией вкупе с техничным, кромсающим, молотящим, скоростным стилем гитарных соло в высоком диапазоне частот и басово-гитарным тремоло.' + ' <br/>' + 'Истоки трэш- метала, по общему мнению, восходят к концу 1970 - х годов — началу 1980 - х годов, когда некоторые металические группы привнесли экстремальную скорость хардкор - панка в традиционную мелодику и ритмическую структуру метала.',
            mainImg: 'url(/assets/bands/thrashMain.jpg)',
            soundImg: 'url(/assets/covers/thrashSound.png)',
            soundInfo: 'Характерными чертами трэш-метала являются быстрый, стремительный темп исполнения, скоростные низкочастотные гитарные риффы и высокочастотные соло. Для гитарной ритм-партии применяется palm muting. В качестве штриха используют также переменный штрих, «галоп» и даунстрок. При исполнении соло гитаристы часто используют такие техники игры, как дайв-бомба, свип, легато, переменный штрих , пропуск струн и тэппинг двумя руками.',
            lyricsImg: 'url(/assets/covers/thrashLyrics.jpg)',
            lyricsInfo: 'Тематическая составляющая текстов песен в трэш-метале включает в себя насилие, вопросы жизни и смерти, религию и общество, в частности, это война, бесчеловечные зверские чувства, скрытые в подсознании, и представления о будущем коллапсе человеческой цивилизации.',
            firstLyr: 'Брат пойдёт на брата,' + '<br/>' + 'Проливая кровь по всей земле' + '<br/>' + 'Лишая жизни за религиозные воззрения.' + '<br/>' + 'Это - нечто, чего я не понимаю.' + '<br/>' + 'Глупцы вроде меня, пересекающие море' + '<br/>' + 'И достигающие чужих краёв -' + '<br/>' + 'Спросите тихоню: За свои убеждения' + '<br/>' + 'Убьёшь ли ты по Божьему повелению ? ' + '<br/>' + '- Megadeth - Holy Wars',
            secLyr: 'Хирургия без обезболивания' + '<br/>' + 'Нож вас режет усердно.' + '<br/>' + 'Низшие, ненужные человечеству,' + '<br/>' + 'Привязанные к столу, умирая, кричите.' + '<br/>' + 'Ангел Смерти' + '<br/>' + 'Монарх в царстве мёртвых,' + '<br/>' + 'Позорный мясник, Ангел Смерти.' + '<br/>' + '- Slayer - Angel of Death',
            americanBands: ['Megadeth', 'Slayer', 'Exodus', 'Metallica', 'Testament', 'Anthrax'],
            germanBands: ['Sodom', 'Kreator', 'Destruction', 'Tankard', 'Holy Moses', 'Living Death'],
            russianBands: ['Черный обелиск', 'Crownear', 'Master', 'Devilry', 'Аспид'],
            britishBands: ['Acid Reign', 'Anihilated', 'Cerebral Fix', 'Lawnmower Deth', 'Sabbat'],
            americanImg: 'url(/assets/bands/ameriacanThrash.jpg)',
            germanImg: 'url(/assets/bands/germanThrash.jpg)',
            russianImg: 'url(/assets/bands/russianThrash.jpg)',
            britishImg: 'url(/assets/bands/britishThrash.jpg)'
        };
    }
    private getDoomContent(): GanreContent {
        return {
            backgroundImage: 'url(/assets/backgrounds/doomLine.jpg)',
            header: 'Doom metal',
            mainInfo: 'Дум метал (doom — «рок», «гибель», «злая судьба») — экстремальный поджанр метала с преобладанием медленных темпов. И музыка, и лирика в этом жанре призваны выражать чувство отчаяния, страха и обречённости. Огромное влияние на жанр оказала группа Black Sabbath, чьи песни «Black Sabbath», «Electric Funeral», «Cornucopia» стали прототипами дум-метала. Песни Black Sabbath имеют медленный темп из-за травмы пальцев гитариста группы Тони Айомми. Так что каждый аккорд давался ему с усилием и болью.' + ' <br/>' + ' История дум-метала насчитывает несколько периодов, условно их можно разделить на три группы: зарождение жанра (70-е годы), развитие (80-е годы), появление дэт-дум метала и других ответвлений, который иногда условно именуют «второй волной дума» (90-е годы).',
            mainImg: 'url(/assets/bands/doomMain.jpg)',
            soundImg: 'url(/assets/covers/doomSound.jpg)',
            soundInfo: 'Характерными чертами дум-метала является довольно медленный темп музыки, поверх которого ложатся жесткие гитарные партии. Из-за чего создается тяжёлая и мрачная атмосфера. В музыке этого жанра могут встречаться нехарактерные для экстремального метала эффекты или инструменты (хоры, орган, колокола). Вокал может меняться в течении трэка, в зависимости от настроения.Но в основном используется чистый, но депрессивный вокал.',
            lyricsInfo: 'Частыми тематиками песен являются тьма, отчаяние, меланхолия, смерть, потеря близких, несчастная любовь. Есть и поджанры дум метала, в текстах которых повествуется об оккультизме и магии (Epic doom metal).',
            lyricsImg: 'url(/assets/covers/doomLyrics.jpg)',
            firstLyr: 'Я повстречал однажды летом девушку ' + '<br/>' + 'Хотел я обручиться с ней' + '<br/>' + 'Но по возвращении домой' + '<br/>' + 'Заметил я, что вся картина покраснела' + '<br/>' + 'И Роузи сжимала в руке нож (с угрозой)' + '<br/>' + 'И мне пришлось отвести свою новую возлюбленную ' + '<br/>' + 'К скалам над озером' + '<br/>' + 'И грешным делом, я столкнул её вниз' + '<br/>' + ' -My Dying Bride-A Tapestry Scorned',
            secLyr: 'За чертой всех кошмаров я встретил свою судьбу' + '<br/>' + 'Древний проход, окруженный ненавистью' + '<br/>' + 'Я был испуган и держал руку на кресте' + '<br/>' + 'Я шел во врата демонов' + '<br/>' + 'Через реку Стикс среди Царства теней' + '<br/>' + 'каменные ворота отмечают путь' + '<br/>' + 'к проклятью души и адскому гневу' + '<br/>' + 'Древнее зло ожидает там' + '<br/>' + 'у порога в ад' + '<br/>' + 'внутри их тьмы обитают демоны' + '<br/>' + '- Candlemass - Demons Gate',
            americanBands: ['Upgrade Now', 'Acid Witch', 'Cianide', 'Neptune ', 'Orodruin'],
            germanBands: ['Atlantean Kodex', 'Dark Suns', 'Downfall of Gaia', 'Empyrium', 'Mirror of Deception', 'The Vision Bleak'],
            russianBands: ['Во Скорбях', 'Wine From Tears', 'Ankhagram', 'Comatose Vigil', 'Great Sorrow'],
            britishBands: ['Black Sabbath', 'Cathedral', 'Electric Wizard', 'My Dying Bride', 'Pagan Altar', 'Paradise Lost'],
            americanImg: 'url(/assets/bands/americanDoom.jpg)',
            germanImg: 'url(/assets/bands/germanDoom.jpg)',
            russianImg: 'url(/assets/bands/russianDoom.jpg)',
            britishImg: 'url(/assets/bands/britishDoom.jpg)'
        };
    }
    private getDeathContent(): GanreContent {
        return {
            backgroundImage: 'url(/assets/backgrounds/deathLine.jpg)',
            header: 'Death metal',
            mainInfo: 'Дэт-метал (англ. death — «смерть») — экстремальный поджанр метала. Вобрав в себя скорость и сложность исполнения трэш-метала, дэт-метал выделился в самостоятельный жанр в середине 1980-х годов. Со временем дэт-метал совершенствовался, и образовал большое количество поджанров.' + ' <br/>' + ' На раннем этапе, предшествующем появлению дэт-метала, на его истоки в значительной степени повлиял дебютный альбом английской метал-группы Venom Welcome to Hell.Специфическое звучание этого альбома и его сатанистская идеология оказали огромное влияние на появление экстремальных поджанров метала. ' + ' <br/>' + ' К 1989 году дэт метал приобрёл значительную популярность среди различных направлений метала, во многих странах появились свои дэт-метал-сцены. Пика своей популярности дэт-метал достиг в 1992—1993 годах. Однако проникнуть в поп-культуру и мейнстрим жанру не удалось, и он завоевал популярность преимущественно в андерграунде.',
            mainImg: 'url(/assets/bands/deathMain.jpg)',
            soundImg: 'url(/assets/covers/deathSound.png)',
            lyricsInfo: 'В плане тематики дэт-метал изначально был связан с мрачной и тёмной стороной жизни людей. Частой темой текстов дэт-метал групп является подробно описанное насилие (расчленение, некрофилия, убийства...). Также большую роль в тематике значительного количества дэт-метал-групп играет и сатанистская тематика, оккульитзм, мистика. Некоторые группы используют социально-политическую тематику.',
            soundInfo: 'В вокале характерно использование специфического мужского гроулинга, из-за чего, текст песни сложно понять на слух. Дэт-метал известен своей неровной сменой музыкального темпа и размера, чрезвычайно быстрой и сложной гитарной игрой, а также двойными басовыми барабанными партиями. Типично использование бласт-бита. Большинство групп используют заниженный и искажённый гитарный звук. Используются также заниженные и иногда искажённые бас-гитары. Считается, что из всех подстилей метала дэт-метал наиболее труден для исполнения музыкантами в физическом плане.',
            lyricsImg: 'url(/assets/covers/deathLyrics.jpg)',
            firstLyr: 'Мой праздник – кровавая резня' + '<br/>' + 'Я с треском ломаю им шеи' + '<br/>' + 'Я хочу пить и сосать кровь' + '<br/>' + 'Я хочу есть мозги, бить острогой скелеты' + '<br/>' + 'Я буду резать и убивать' + '<br/>' + 'Я – голодный паразит, который никогда не насытится' + '<br/>' + 'Я страстно хочу крови' + '<br/>' + 'Я буду есть ваши внутренности' + '<br/>' + '- Cannibal Corpse - The Undead Will Feast',
            secLyr: 'Темной ночью, оскорбительная порция света' + '<br/>' + 'Пока другие спят, а кто-то убегает.' + '<br/>' + 'Неоправданное богохульство' + '<br/>' + 'С которым нельзя смирится.' + '<br/>' + 'Должно быть, это странно, не иметь желания жить' + '<br/>' + 'Так далеко в существующей природе.' + '<br/>' + 'Это не вкус власти,' + '<br/>' + 'Не игра, чтобы проиграть или выиграть' + '<br/>' + 'Пусть свершится правосудие.' + '<br/>' + 'Здесь будет исходное отклонение' + '<br/>' + 'Для создателя священных замыслов.' + '<br/>' + '- Death - Zero Tolerance',
            americanBands: ['Obituary', 'Morbid ', 'Suffocation', 'Deicide', 'Cannibal Corpse', 'Immolation', 'Death', 'Baphomet'],
            germanBands: ['Necrophagist', 'Morgoth', 'Debauchery', 'Fleshcrawl'],
            russianBands: ['Beheaded Zombie', 'Иеронимус Босх', 'Necrost ', 'Fall from reality', 'Necrocannibal'],
            britishBands: ['Dark Heresy', 'Impaler ', 'Desecrator ', 'Cancer ', 'Benediction ', 'Napalm Death', 'Carcass '],
            americanImg: 'url(/assets/bands/americanDeath.jpg)',
            germanImg: 'url(/assets/bands/germanDeath.jpg)',
            russianImg: 'url(/assets/bands/russianDeath.jpg)',
            britishImg: 'url(/assets/bands/britishDeath.jpg)'
        };
    }
}