import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'sanitizeHtml' })

export class SanitizeHtml implements PipeTransform {
    transform(value) {
        return value.split('< ').join('<');
    }
}