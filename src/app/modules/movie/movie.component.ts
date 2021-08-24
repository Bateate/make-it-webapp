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
    public user: any;

    constructor(private webService: MkItWebService, private route: ActivatedRoute) {
        this.getMovie();
        
    }

    getMovie(){
        console.log("BEFORE SUB");
        this.route.params.subscribe(async param => {
            await this.webService.getByIdMovies(param.id).subscribe((res) => {
                this.movie = res;
                
                this.movie.comments.map(async (c: any) => {
                    let user: any;
                    await this.webService.getUsernameById(c.user_id).subscribe((res) => {
                        user = res;
                        c.username = user.username;
                    });
                    return c;
                })
                console.log(this.movie);
                
            })
        });
        this.user = JSON.parse(localStorage.getItem("user") || '{}')
    }

    addInFavorites(id?: string){
        if(id && this.user.id){
            this.webService.addInFavorites(id, this.user?.id).subscribe((user) => {
                localStorage.setItem('user', JSON.stringify(user));
            })
        }
    }

    removeFromFavorites(id?: string){
        if(id && this.user.id){
            // this.webService.removeFromFavorites(id, this.user?.id).subscribe((user) => {
            //     localStorage.setItem('user', JSON.stringify(user));
            // })
        }
    }

    sendComment(comment: string){
        this.webService.sendComment(this.user.id, this.movie.id || '', comment).subscribe(res => {
            console.log(res);
            this.getMovie();
            
        })
    }
}
