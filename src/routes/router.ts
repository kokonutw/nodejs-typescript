import {Router} from 'express';

// El type (Constructor<T>): Es solo una descripción del tipo esperado (una clase con un constructor que devuelva T).
//  No crea instancias ni tiene lógica.
type Constructor<T> = { new (): T };

// la T el controllador y la U la middleware
export class ApplicationRouter<T,U>{
    public readonly router: Router;
    public readonly controller: T;
    //public readonly middleware: U;
        
    
    constructor(TController: Constructor<T>){
        this.router = Router();
        this.controller =  new TController();
        this.routes();
    }

    public routes(){
        
    }
}