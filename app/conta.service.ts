import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Conta } from "./models/conta";

@Injectable({ providedIn: 'root' })
export class ContaService{

   private conta!: Conta;

   setConta(conta: Conta){
       this.conta= conta;
   }

   getConta(){
       return this.conta;
   }
}