import { NgModule } from '@angular/core';
import { MkItCommonModule } from '../common/mk-it-common.module';
import { MovieRoutingModule } from './movie-routing.module';
import { MovieComponent } from './movie.component';

const imported = [
    MkItCommonModule,
    MovieRoutingModule
]

const declarations = [
    MovieComponent
]

const exported = [...imported];

@NgModule({
    declarations: [
        ...declarations
    ],
    imports: [...imported],
    exports: [...exported, ...declarations],
    providers: []
})

export class MovieModule { }