import { ClienteService } from './../cliente.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente.module';

@Component({
  selector: 'app-clientes-read',
  templateUrl: './clientes-read.component.html',
  styleUrls: ['./clientes-read.component.css']
})
export class ClientesReadComponent implements OnInit {

  clientes: Cliente[] | undefined
  displayedColumns = ['id', 'nome', 'email', 'sexo', 'action']

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.carregarClientes().subscribe(clientes => {
      this.clientes = clientes
      console.log(clientes)
    })
  }

}
