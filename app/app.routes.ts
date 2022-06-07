import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { TransacoesComponent } from "./transacoes/transacoes.component";



export const rootRouterConfig:Routes=[

    {path:'',redirectTo :'/home',pathMatch:'full'},
    {path:'home',component: HomeComponent},
    {path:'transacoes',component: TransacoesComponent},
];