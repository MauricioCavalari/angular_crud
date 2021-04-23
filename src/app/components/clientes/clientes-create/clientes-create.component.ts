import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../cliente.module';
import { ClienteService } from '../cliente.service';

interface Genero {
  value: number;
  viewValue: string;
}


@Component({
  selector: 'app-clientes-create',
  templateUrl: './clientes-create.component.html',
  styleUrls: ['./clientes-create.component.css']
})
export class ClientesCreateComponent implements OnInit {
  generos: Genero[] = [
    {value: 1 , viewValue: 'Masculino'},
    {value: 2 , viewValue: 'Feminino'},
    {value: 3 , viewValue: 'Outros'}
  ];


  cliente: Cliente = {
    nome: "",
    email: "",
    sexo: ""
  }

  constructor(
    private clienteService: ClienteService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  addCliente(): void {
    this.clienteService.criarCliente(this.cliente).subscribe(() => {
      this.router.navigate(['/clientes'])
    })
  }

  cancel(): void {
    this.router.navigate(['/clientes'])
  }

}
