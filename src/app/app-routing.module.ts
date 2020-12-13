import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { CurrencyExchangeComponent } from './currency-exchange/currency-exchange.component';
import { CurrencyTableComponent } from './currency-table/currency-table.component';

const routes: Routes = [
  { path: '', component: CurrencyTableComponent },
  { path: 'currency-exchange', component: CurrencyExchangeComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
