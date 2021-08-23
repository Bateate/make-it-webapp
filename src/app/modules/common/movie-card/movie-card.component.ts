import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardInterface } from '../../interface';
// import {} from '../../../../img/no-img.jpg'


@Component({
    selector: 'movie-card',
    templateUrl: './movie-card.component.html',
    styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
    @Input()
    get movie(): CardInterface { return this._movie; }
    set movie(movie: CardInterface) {
        this._movie = movie;
    }
    private _movie: CardInterface = {};
    constructor(
        private router: Router
    ) {

    }

    ngOnInit() {

    }

    openMovieInfo(){
        const id = this.movie.id;
        if(id){
            this.router.navigate(['main', 'movie', id]);
        }

    }
}
