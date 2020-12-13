import { Component, OnInit } from '@angular/core';
import { Rate } from '../models/CurrencyRate';
import { DataNbpService } from '../services/data-nbp.service';

@Component({
  selector: 'app-currency-exchange',
  templateUrl: './currency-exchange.component.html',
  styleUrls: ['./currency-exchange.component.scss']
})
export class CurrencyExchangeComponent implements OnInit {

  constructor(private cRate: DataNbpService) { }

  rateFull: Array<Rate> = [];

  inputHave = '';
  inputWant = '';
  selectHave = '';
  selectWant = '';
  result = '';

  ngOnInit(): void {this.get();  this.rateFull.push({currency: 'Złotówka', code: 'ZŁ', mid: 1}); }

  get(): void
  {
    this.cRate.getExchangeRate().subscribe( (item) => {
      item[0].rates.forEach( rate => {
        this.rateFull.push(rate);
      });
    });
  }

  calculate(): void
  {
    this.inputWant = ((parseFloat(this.inputHave) * parseFloat(this.selectHave)) / parseFloat(this.selectWant)).toString();
  }
}
