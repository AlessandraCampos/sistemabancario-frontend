import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ContaService } from '../conta.service';
import { Conta } from '../models/conta';
import { TransacaoSD } from '../models/transacaoSD';
import { Transferencia } from '../models/transferencia';

@Component({
  selector: 'app-transacoes',
  templateUrl: './transacoes.component.html',
  styleUrls: ['./transacoes.component.css']
})
export class TransacoesComponent implements OnInit {
  transacao: TransacaoSD = new TransacaoSD;
  transferencia: Transferencia= new Transferencia;
  valor: any;
  usuarioDestino:any;
  dadosconta: Conta | any;
  dadosConta: Conta | any;
  url = "http://localhost:8080/transacoes";
  urlTransferencia ="http://localhost:8080/transferencias";
  @Input() recebeDadosConta!: Conta;
  constructor(private contaService : ContaService, private http : HttpClient ) { }

  ngOnInit(): void {
    this.dadosConta = this.contaService;
    this.dadosconta = this.dadosConta;
    console.log( this.dadosconta);
    
  }

  enviarFormularioSaque(valor: any){
   // let data = JSON.parse( this.dadosconta);
    this.transacao.conta = this.dadosconta.conta.numconta ;
    this.transacao.transacaoId = 1;
    this.transacao.valor = valor;
    console.log("Abaixo transacao conta");
    console.log( this.transacao.conta);
    console.log("Abaixo transacao this.transacao");
    console.log( this.transacao);
    this.http.post(this.url, this.transacao)
           .subscribe(
             (resultado: any) => {
             console.log("Abaixo resultado");
             
              return console.log(resultado);
            }
          );
  }
  enviarFormularioDeposito(valor: any){
    // let data = JSON.parse( this.dadosconta);
     this.transacao.conta = this.dadosconta.conta.numconta ;
     this.transacao.transacaoId = 2;
     this.transacao.valor = valor;
     console.log("Abaixo transacao conta");
     console.log( this.transacao.conta);
     console.log("Abaixo transacao this.transacao");
     console.log( this.transacao);
     this.http.post(this.url, this.transacao)
            .subscribe(
              (resultado: any) => {
              console.log("Abaixo resultado");
              
               return console.log(resultado);
             }
           );
   }
 
   enviarFormularioTransferencia(valor: any){

     this.transferencia.usuarioOrigem = this.dadosconta.conta.numconta ;
     this.transferencia.usuarioDestino = this.usuarioDestino;
     this.transferencia.transacaoId = 3;
     this.transferencia.valor = valor;
     this.http.post(this.urlTransferencia, this.transferencia)
            .subscribe(
              (resultado: any) => {

              console.log("Abaixo this.dadosconta");
              console.log(this.dadosconta);
            //  this.dadosconta = this.atualizarSaldo(this.dadosconta)
               return resultado;
             }
           );
   }
 

  atualizarSaldo(novaConta : Conta){
    novaConta.numconta = this.dadosconta.conta.numconta
    console.log(novaConta.numconta);
    this.http.get(`http://localhost:8080/contas/`+ novaConta.numconta)
    .subscribe(
     (resultado:any) => {
       this.dadosconta = resultado;
       console.log("Abaixo this.dadosconta em Atualizar saldo");
      console.log( this.dadosconta);
      
     return this.dadosconta;
     
     }
   );

  }

}
