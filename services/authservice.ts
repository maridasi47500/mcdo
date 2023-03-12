import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import { Storage } from '@ionic/storage';


@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private loggedIn = new BehaviorSubject<boolean>(false);
    private ordered = new BehaviorSubject<boolean>(false);

    constructor(private storage: Storage) {
    }

    get isLoggedIn() {
        return this.loggedIn.asObservable();
    }
    get hasOrdered() {
        return this.ordered.asObservable();
    }    
    public setOrder(order) {
        if (!!order) {
            this.storage.set('macommande',order); // store session data
            this.ordered.next(true);
        }
    }
    public setLogged(user) {
        if (!!user) {
            this.storage.set('storage_xxx',user); // store session data
            this.loggedIn.next(true);
        }
    }
    emptybasket() {
        this.ordered.next(false);
    }
    logout() {
        this.loggedIn.next(false);
    }
}
