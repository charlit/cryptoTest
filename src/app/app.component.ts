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
  tt: any = 0;
  public data: Data;
  cryptos = [{'name': 'bitcoin', 'nombre': 0.21,'value':0,},
             {'name': 'ethereum', 'nombre': 4.49,'value':0},
             {'name': 'litecoin', 'nombre': 13.2,'value':0},
             {'name': 'ripple', 'nombre': 5000,'value':0},
             {'name': 'eos', 'nombre': 204,'value':0},
             {'name': 'cardano', 'nombre': 602,'value':0},
             {'name': 'tron', 'nombre': 9712,'value':0},
             {'name': 'stellar', 'nombre': 2453,'value':0},
             {'name': 'nem', 'nombre': 269,'value':0},
             {'name': 'dogecoin', 'nombre': 300000,'value':0}];

  constructor(private cryptoService: CryptoService) {}

  ngOnInit() {
  //   for (let i = 0; i < this.cryptos.length; i++) {
  //     console.log(this.cryptos[i].name + ' ' + this.cryptos[i].value);
  // }
    this.cryptoService.getCryptos().subscribe(data => {
      this.data = data;
      // console.log(this.data.data);

      for (let i = 0; i < 10; i++) {
        if(this.data.data[i].id == this.cryptos[i].name){
          console.log('t '+this.data.data[i].id);
          console.log("ttt "+this.cryptos[i].name);
          console.log("priceUSD "+this.data.data[i].priceUsd);
          
            this.data.data[i].priceUsd = this.cryptos[i].value;
            console.log("value "+this.cryptos[i].value);
        }
      // console.log(this.data.data[i].id);
      // console.log(this.data.data[i].priceUsd);
      }
    });
  }
}
