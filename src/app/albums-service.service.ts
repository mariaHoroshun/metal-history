import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetAlbums } from './models/getAlbums';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable()
export class AlbumsService {

    constructor(private http: HttpClient) {
    }
    getAlbums(): Observable<GetAlbums> {
        const url = '/assets/data/list-albums.json';
        return this.http.get<GetAlbums>(url)
            .pipe(catchError(this.handleError<GetAlbums>('getAlbums', new GetAlbums())));
    }

    /**
         * Handle Http operation that failed.
         * Let the app continue.
         * @param operation - name of the operation that failed
         * @param result - optional value to return as the observable result
         */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            // this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}