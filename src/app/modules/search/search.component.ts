import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MkItWebService } from 'src/app/providers/mk-it-web.service';
import { CardInterface } from '../interface';

@Component({
    selector: 'search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent {
    public routeSub!: Subscription;
    public searchString: string = '';
    public searchedMovies: Array<CardInterface> = [];
    constructor(private webService: MkItWebService, private route: ActivatedRoute) {
        let movies: any;
        this.route.params.subscribe(param => {
            this.webService.searchByString(param.query).subscribe((res) => {
                movies = res;
                this.searchedMovies = movies;
            })
        });
        
    }
}
