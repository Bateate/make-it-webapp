import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MkItWebService } from 'src/app/providers/mk-it-web.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginModal } from '../login.modal/login.modal';
import { User } from '../../interface';
// import { LoginModal } from '../../login/login.modal';


@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    public user: any;
    constructor(
        private _route: ActivatedRoute,
        private router: Router,
        public dialog: MatDialog,
    ){
        // this.openLoginModal()
    }
    
    ngOnInit(){
        this.user = localStorage.getItem('user');
        console.log(this.user);
        
    }

    search(query: string){
		this.router.navigate(['main', 'search', query]);
    }

    openLoginModal(){
        if(!this.user){
            this.dialog.open(LoginModal, {});
        }else {
            localStorage.clear();
            window.location.reload();
        }
    }
}
