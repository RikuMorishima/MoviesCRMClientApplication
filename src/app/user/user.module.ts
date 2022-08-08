import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchasesComponent } from './purchases/purchases.component';
import { FavoritesComponent } from './favorites/favorites.component';



@NgModule({
  declarations: [
    PurchasesComponent,
    FavoritesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
