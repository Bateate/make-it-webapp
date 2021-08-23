import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, throwError } from 'rxjs';
import { environment } from "src/environments/environment";
import { CardInterface } from '../modules/interface';


@Injectable({ providedIn: 'root' })
export class MkItWebService {
    public webServiceUri: string = environment.webServiceUri;

    constructor(protected http: HttpClient) {
    }

    public getAllMovies() {
        let url = this.webServiceUri + '/movies';

        return this.http.get(url);
    }

    public getByIdMovies(id: string) {
        let url = this.webServiceUri + `/movies/${id}`;

        return this.http.get(url);
    }

    public searchByString(query: string) {
        console.log("searchByString", query);
        let test: test = {query: query}

        let url = this.webServiceUri + '/movies/search';
        return this.http.post(url, test);
    }


    // public getFavoritesMovies(searchString: string): Observable<Array<CardInterface>> {
    //     let url = this.webServiceUri + `/jobs?q=${searchString}`;
    //     return this.http.get<Array<CardInterface>>(url);
    // }
}
export interface test {
    query: string;
}