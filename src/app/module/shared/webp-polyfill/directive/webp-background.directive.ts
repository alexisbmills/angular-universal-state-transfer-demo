import {
  AfterViewInit, ChangeDetectorRef,
  Directive,
  ElementRef,
  Inject, Input, Renderer2,
} from '@angular/core';
import { WEBP_POLYFILL, WebpAccess } from '../service/webp-access';
import { catchError, tap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Directive({
  selector: '[appWebpBackground]'
})
export class WebpBackgroundDirective implements AfterViewInit {

  private _appWebpBackground: string;

  @Input()
  set appWebpBackground(imageUrl: string) {
    this._appWebpBackground = imageUrl;
  }

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2,
              private changeDetectorRef: ChangeDetectorRef,
              @Inject(WEBP_POLYFILL) private webpPolyFill: WebpAccess) {
  }

  ngAfterViewInit(): void {
    this.webpPolyFill.decode(this._appWebpBackground)
      .pipe(
        tap((dataString: string) => {
          this.renderer.setStyle(this.elementRef.nativeElement, 'background-image', `url(${dataString})`);
          this.changeDetectorRef.detectChanges();
        }),
        catchError((err: any) => {
          console.error(err);
          return EMPTY;
        })
      )
      .subscribe();
  }
}
