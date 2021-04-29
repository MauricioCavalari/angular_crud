import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from './../cliente.service';
import { Cliente } from './../cliente.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes-delete',
  templateUrl: './clientes-delete.component.html',
  styleUrls: ['./clientes-delete.component.css']
})
export class ClientesDeleteComponent implements OnInit {

  cliente: Cliente | any

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.clienteService.carregarIdCliente(id).subscribe(cliente => {
      this.cliente = cliente;
    })
  }

  excluirCliente(): void {
    this.clienteService.deleteCliente(this.cliente.id).subscribe(() => {
      this.clienteService.showMessage('Cliente excluido com sucesso!')
      this.router.navigate(['/clientes']);
    })
  }

  cancel(): void {
    this.router.navigate(['/clientes']);
  }

}
