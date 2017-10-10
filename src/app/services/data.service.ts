import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
    users:string[];

    constructor() {
        this.users = ['Monika', 'Dan', 'Alfie', 'Sid'];
    } 

    getUsers(){
        return this.users;
    }

};