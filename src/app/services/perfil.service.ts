import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
    providedIn: 'root'
})
export class PerfilService {
    private jwtHelper: JwtHelperService;

    constructor() {
        this.jwtHelper = new JwtHelperService();
    }

    getUserNameFromToken(token: string): string {
        const decodedToken = this.jwtHelper.decodeToken(token);
        return decodedToken.username;
    }
}
