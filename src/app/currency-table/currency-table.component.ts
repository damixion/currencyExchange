import { Component, OnInit } from '@angular/core';
import { CurrencyRate, Rate } from '../models/CurrencyRate';
import { DataNbpService } from '../services/data-nbp.service';

@Component({
  selector: 'app-currency-table',
  templateUrl: './currency-table.component.html',
  styleUrls: ['./currency-table.component.scss']
})
export class CurrencyTableComponent implements OnInit {

  displayedColumns: string[] = ['currency', 'code', 'mid'];

  currencyRate: Array<CurrencyRate> = [];
  fullRate: Array<Rate> = [];
  lightRate: Array<Rate> = [];
  dataSource: Array<Rate> = [];

  flagMore = false;
  btnMore = 'Więcej';

  constructor(private cRate: DataNbpService) { }
  ngOnInit(): void { this.get(); }

  get(): void
  {
    this.cRate.getExchangeRate().subscribe( item => {
     this.currencyRate = item;
     this.currencyRate[0].rates.forEach( (rate) => {
        this.fullRate.push(rate);
     });
     this.lightRate.push(this.fullRate[1]);
     this.lightRate.push(this.fullRate[7]);
     this.lightRate.push(this.fullRate[10]);
     this.lightRate.push(this.fullRate[9]);
     this.dataSource = this.lightRate;
     console.log(this.lightRate[0]);
    });
  }

  loadMore(): void
  {
    if (this.flagMore)
    {
      this.dataSource = this.lightRate;
      this.btnMore = 'Więcej';
      this.flagMore = false;
    }
    else
    {
      this.dataSource = this.fullRate;
      this.btnMore = 'Mniej';
      this.flagMore = true;
    }
  }

}
