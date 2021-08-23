import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MkItWebService } from 'src/app/providers/mk-it-web.service';
import { CardInterface } from '../interface';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    public favoritesMovies: Array<CardInterface> = [];
    public loginFlag: boolean = true;
    public user: any;

    public signinForm = new FormGroup({
        username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
        password: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),    
    });
    public signupForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
        username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]), 
        passwords: new FormGroup({
            password: new FormControl('', [Validators.required, Validators.minLength(5)]),
            repeatPassword: new FormControl('', [Validators.required, Validators.minLength(5)]),
        }, this.passwordConfirming),
    })
    constructor(private webService: MkItWebService) {
    }
    
    ngOnInit(){
        this.getFavorite("82");
        this.getFavorite("69");
        this.getFavorite("59");
        this.getFavorite("30");
        this.getFavorite("30");


    }

    passwordConfirming(c: AbstractControl): { invalid: boolean } {
        // if (c.get?('password') !== c.get?('repeatPassword')) {
        //     return { invalid: true };
        // }
        return { invalid: true };
    }

    async getFavorite(id: string) {
        let res: CardInterface = {};
        await this.webService.getByIdMovies(id).subscribe(data => {
            this.favoritesMovies.push(data);
        }, err => {
            console.log(err.message);
        }, () => {
            console.log('completed');
        })
    }

    public signin(){

    }

    public signup(){

    }
}
