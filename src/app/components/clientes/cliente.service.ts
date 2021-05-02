import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Cliente } from './cliente.module';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  clienteURL = "http://localhost:3001/clientes"

  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
  ) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-sucess']
    })
  }

  criarCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.clienteURL, cliente)
  }

  carregarClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.clienteURL)
  }

  carregarIdCliente(id: any): Observable<Cliente> {
    const url = `${this.clienteURL}/${id}`
    return this.http.get<Cliente>(url)
  }

  update(cliente: Cliente): Observable<Cliente> {
    const url = `${this.clienteURL}/${cliente.id}`;
    return this.http.put<Cliente>(url, cliente)
  }

  deleteCliente(id: any): Observable<Cliente> {
    const url = `${this.clienteURL}/${id}`;
    return this.http.delete<Cliente>(url)
  }

}
