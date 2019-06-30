import { Component, OnInit } from '@angular/core';
import { CryptoService} from './crypto.service';
import { Data} from './data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cryptoTest';
  public data: Data;
  cryptos = [{'name': 'bitcoin', 'value': 4},
                    {'name': 'ethereum', 'value': 4}];

  constructor(private cryptoService: CryptoService) {}

  ngOnInit() {
    for (let i = 0; i < this.cryptos.length; i++) {
      console.log(this.cryptos[i].name + ' ' + this.cryptos[i].value);
  }
    this.cryptoService.getCryptos().subscribe(data => {
      this.data = data;
      console.log(this.data.data);

      for (let i = 0; i < 5; i++) {
      console.log(this.data.data[i].id);
      console.log(this.data.data[i].priceUsd);
      }
    });
  }
}
