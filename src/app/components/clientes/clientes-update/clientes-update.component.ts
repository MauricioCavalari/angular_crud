import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../cliente.module';
import { ClienteService } from '../cliente.service';

interface Genero {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-clientes-update',
  templateUrl: './clientes-update.component.html',
  styleUrls: ['./clientes-update.component.css']
})
export class ClientesUpdateComponent implements OnInit {
  generos: Genero[] = [
    {value: 1 , viewValue: 'Masculino'},
    {value: 2 , viewValue: 'Feminino'},
    {value: 3 , viewValue: 'Outros'}
  ];

  cliente: Cliente | any

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.clienteService.carregarIdCliente(id).subscribe((cliente) => {
      this.cliente = cliente
    });
  }

  alterarCliente(): void {
    this.clienteService.update(this.cliente).subscribe(() => {
      this.clienteService.showMessage('Dados do cliente atualizado com sucesso!')
      this.router.navigate(['/clientes']);
    })
  }

  cancel(): void {
    this.router.navigate(['/clientes']);
  }

}
