import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Base64Service } from './base64.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GitHubService {

  constructor(
    private _httpClient: HttpClient,
    private _base64Service: Base64Service
  ) {}

  load(apiUrl: string) {
    return this._httpClient.get(apiUrl)
    .pipe(
      map((response: any) =>  {
        const {content = ''} = response;
        return this._base64Service.to_utf8(content);
      }),
    );
    
  }
}