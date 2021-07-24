import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders:{
        Authorization: `Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IkM1MjNFQzE2N0NBMkIyQTkxRkZEQjZFNkI4M0RCQUFEIiwidHlwIjoiYXQrand0In0.eyJuYmYiOjE2MjcwODg1ODksImV4cCI6MTYyNzExMDE4OSwiaXNzIjoiaHR0cHM6Ly9hdXRoei1hcGkuc2d4LmJ6IiwiYXVkIjpbInNhbGVzLWFwaSIsInNlY3VyaXR5LWFwaSJdLCJjbGllbnRfaWQiOiJjbGllbnQxIiwic3ViIjoiNTAwMDEiLCJhdXRoX3RpbWUiOjE2MjcwODg1ODksImlkcCI6ImxvY2FsIiwiVXNlcm5hbWUiOiJ2YW5uYWw0NTAwQGdtYWlsLmNvbSIsIkZ1bGxuYW1lIjoiVmFubmFsIiwiUGVybWlzc2lvbiI6IjE7MjAwMDk7MjAwMDg7MjY7MjU7MjQ7MjM7MjI7MjE7MzU7MzQ7MzM7MjAwMTA7MjAwMjk7MzE7MzA7Mjk7MzAwMTc7MjA7MTk7MTg7MjAwMDc7NDszOzI7MzI7MjAwMTgiLCJqdGkiOiI0NzVGMDlGOUFBM0IwNDA3RTVGRkNFRjcyRjUyRkE0RiIsImlhdCI6MTYyNzA4ODU4OSwic2NvcGUiOlsiYW55Il0sImFtciI6WyJwd2QiXX0.FIiKI_Wowp68kR27Bly3pckterYbhmwfeBrg48e7MKKMhw2hFJ_W1rRP7Dk5paEGgSZ9t-2gDDn_XhcGwxHRNI85dA8SOWhSf1oXx6fG4JIyooBBdX_rjwFeMYEcFmM82e_dowGST6yx1mlaVzvua2l1jWxabaPAtJBrER0rRL_iG93KFNxcCL8vVCd8PyFZW6HzPZrFNsXwDFazsFW11gkk1b224a_tnq9gfFM_daWiEroc-jM2vO7iT8ZVOrptXSm8mP2cufUPdETB6JqsoTqqFq6qz32HWS_sTP1qT-nfzf7vk1F9pLTEkBqgshH4UntSa2AiTejxT0y2P2CLRA`,
        'X-Tenant-Id': 'leeho.sgx.bz'
      }
    })
    return next.handle(request);
  }
}
