import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Data} from './data.model';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  constructor(private http: HttpClient) { }

  public getCryptos() {
    return this.http.get<Data>('https://api.coincap.io/v2/assets?limit=10');
  }
}
