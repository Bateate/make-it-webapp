import { NgModule } from "@angular/core"
import { HeaderComponent } from "./header/header.component"
import { MovieCardComponent } from "./movie-card/movie-card.component"
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';


const imported = [
    MatCardModule,
    CommonModule,
]

const declarations = [
    HeaderComponent,
    MovieCardComponent
]



@NgModule({
    declarations: [
        ...declarations
    ],
    imports: [
        ...imported
    ],
    exports: [
        ...imported,
        ...declarations
    ],
})

export class MkItCommonModule { }