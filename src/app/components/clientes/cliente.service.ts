import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './cliente.module';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  clienteURL = "http://localhost:3001/clientes"

  constructor(
    private http: HttpClient
  ) { }

  criarCliente(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(this.clienteURL, cliente)
  }


}
