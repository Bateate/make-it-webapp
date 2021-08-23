import { NgModule } from "@angular/core";
import { MkItCommonModule } from "../common/mk-it-common.module";
import { SearchRoutingModule } from "./search-routing.module";
import { SearchComponent } from "./search.component";
const imported = [
    MkItCommonModule,
    SearchRoutingModule
]

const declarations = [
    SearchComponent
]

const exported = [...imported];

@NgModule({
    declarations: [
        ...declarations
    ],
    imports: [
        ...imported
    ],
    exports: [...exported, ...declarations]

})

export class SearchModule { }