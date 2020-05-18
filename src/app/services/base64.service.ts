import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Base64Service {

  to_utf8(data: string) {
    return decodeURIComponent(escape(window.atob( data )));
  }


  utf8_to_b64( data: string ) {
    return window.btoa(unescape(encodeURIComponent( data )));
  }
}