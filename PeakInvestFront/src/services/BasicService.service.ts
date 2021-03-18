import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';




const baseUrl = 'http://localhost:60286/api/PeakInvest';
const headers =  new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
@Injectable({
  providedIn: 'root'
})
export class BasicService {
  

constructor(private http: HttpClient) { }

getCliente(id: any) {
  return this.http.get(`${baseUrl}/${id}`, {responseType : 'text'});
}

getValor(valor: number, qtdParcelas: number){
  return this.http.post<any>(baseUrl, { Valor: valor, QtdParcelas:qtdParcelas}, {headers:headers});
}
}






