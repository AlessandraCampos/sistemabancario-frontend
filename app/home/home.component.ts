import { HttpClient } from '@angular/common/http';
import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppComponent } from '../app.component';
import { ContaService } from '../conta.service';
import { Conta } from '../models/conta';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dadosConta!: Conta;
  
  conta!: number ;

  constructor(
    private http : HttpClient,
    private formBuilder : FormBuilder,
    private router: Router,
    private contaService : ContaService) {
    
  }

  ngOnInit(): void {

  }
  enviarFormularioConta(valor : any){
    this.http.get(`http://localhost:8080/contas/`+ valor)
           .subscribe(
            (resultado:any) => {
             console.log("Abaixo resultado");
             console.log(resultado);
             this.dadosConta= resultado;
              return this.goToTransacoes(this.dadosConta);
            }
          );
  }

  goToTransacoes(conta : Conta){
    this.contaService.setConta(conta);
    this.router.navigate(['/transacoes'])
  }

}
