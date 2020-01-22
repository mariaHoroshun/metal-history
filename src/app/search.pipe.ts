import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'search'
})

export class SearchPipe implements PipeTransform {
    transform(album, value) {
        return album.filter(album => {
            return album.name.includes(value) ||
                album.year.toString().includes(value) ||
                album.ganre.includes(value) ||
                album.country.includes(value) ||
                album.members.includes(value) ||
                album.band.includes(value);
        });
    }
}
