import { NgModule } from "@angular/core";
import { CommonModule  } from  "@angular/common"

import { ListaComponent } from "./lista/lista.component";



@NgModule({
  declarations:[
    ListaComponent
  ],
  exports:[
    ListaComponent
 ],
 imports:[
    CommonModule
 ]
})
export class ListModule{

}
