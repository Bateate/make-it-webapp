import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, throwError } from 'rxjs';
import { environment } from "src/environments/environment";
import { CardInterface, SignIn, SignUp } from '../modules/interface';


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
        let url = this.webServiceUri + '/movies/search';
        return this.http.post(url, {query: query});
    }

    public signUp(form: SignUp) {
        let url = this.webServiceUri + '/user/signup';
        return this.http.post(url, form);
    }

    public signIn(form: SignIn) {
        let url = this.webServiceUri + '/user/signin';
        return this.http.post(url, form);
    }

    public getUserById(id: string){
        let url = this.webServiceUri + `/user/${id}`;
        return this.http.get(url);
    }

    public getUsernameById(username_id: string){
        console.log("HERE");
        
        let url = this.webServiceUri + `/user/${username_id}`;
        return this.http.get(url);
    }

    public addInFavorites(movie_id: string, user_id: string){
        let url = this.webServiceUri + `/user/favorites`;
        return this.http.post(url, {movie_id: movie_id, user_id: user_id});
    }

    public removeFromFavorites(movie_id: string, user_id: string){
        let url = this.webServiceUri + `/user/favorites`;
        // return this.http.delete(url, {movie_id: movie_id, user_id: user_id});
    }

    public sendComment(user_id: string, movie_id: string, comment: string){
        let url = this.webServiceUri + `/movies/comment`;
        return this.http.post(url, {user_id: user_id, movie_id: movie_id, comments: comment});
    }
    

    // public getFavoritesMovies(searchString: string): Observable<Array<CardInterface>> {
    //     let url = this.webServiceUri + `/jobs?q=${searchString}`;
    //     return this.http.get<Array<CardInterface>>(url);
    // }
}
export interface test {
    query: string;
}