import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MkItWebService } from 'src/app/providers/mk-it-web.service';
import { CardInterface } from '../interface';

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {
    public movie: CardInterface = {};

    constructor(private webService: MkItWebService, private route: ActivatedRoute) {
        this.route.params.subscribe(param => {
            this.webService.getByIdMovies(param.id).subscribe((res) => {
                this.movie = res;
                console.log(this.movie);
                
            })
        });
        
    }
}
