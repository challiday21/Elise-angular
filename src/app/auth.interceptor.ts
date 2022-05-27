import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('coucou, cest moi');
    const token = localStorage.getItem('token');

    if (token != '' && token !== null) {
      // si j'ai un token
      // je viens de modifier la requete sortante pour y ajouter
      // le token trouvé dans le localStorage

      const authReq = request.clone(
        {
          // headers: request.headers.set('Authorization', `Bearer ${token}`)
          setHeaders: { 'Authorization': `Bearer ${token}` }
        }
      ) // je laisse passer (vers le back) la requete possédant un token
      return next.handle(authReq);
    } else {
      // si je n'ai pas un token , je ne modifie pas la requete sortante et
      // je la laisse passer 
      return next.handle(request);
    }
  }
}
