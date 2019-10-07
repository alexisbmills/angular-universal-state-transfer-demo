import { Injectable } from '@angular/core';
import { LoadingError } from '../../../users/view-model/user/user.component';
import { WebpMachine } from 'webp-hero';
import { Observable } from 'rxjs';
import { WebpAccess } from './webp-access';

@Injectable({
  providedIn: 'root'
})
export class WebpMachineService implements WebpAccess {

  constructor(private webpPolyFill: WebpMachine) { }

  decode(url: string): Promise<string> {

    return this.loadBinaryData(url)
      .then((data: Uint8Array) => this.webpPolyFill.decode(data))
  }

  private detectWebpSupport(): Promise<boolean> {

    const testImageSources = [
      "data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACyAgCdASoCAAEALmk0mk0iIiIiIgBoSygABc6zbAAA/v56QAAAAA==",
      "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAQAAAAfQ//73v/+BiOh/AAA="
    ];

    const testImage = (src: string): Promise<boolean> => {
      return new Promise((resolve, reject) => {
        const img = document.createElement("img");
        img.onerror = error => resolve(false);
        img.onload = () => resolve(true);
        img.src = src;
      });
    };

    return Promise.all(testImageSources.map(testImage))
      .then((resultsOfTest: boolean[]) => {
        return resultsOfTest.findIndex((resultOfTest: boolean) => !resultOfTest) < 0
      });
  }

  private loadBinaryData(url: string): Promise<Uint8Array> {
    return new Promise<Uint8Array>((resolve, reject) => {

      const xhr = new XMLHttpRequest();
      xhr.open("GET", url);
      xhr.responseType = "arraybuffer";

      const handleError = () => {
        reject(
          new LoadingError(`failed to load binary data, code "${xhr.status}" from "${url}"`)
        );
      };

      xhr.onerror = handleError;

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(new Uint8Array(xhr.response))
          } else {
            handleError()
          }
        }
      };

      xhr.send()
    })
  }
}
