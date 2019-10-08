import { AfterViewInit, ChangeDetectorRef, Directive, ElementRef, Inject, Input, Renderer2 } from '@angular/core';
import { WEBP_POLYFILL, WebpAccess } from '../service/webp-access';
import { catchError, tap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Directive({
  selector: '[appWebpImage]'
})
export class WebpImageDirective implements AfterViewInit {

  private _appWebpImage: string;

  @Input()
  set appWebpImage(imageUrl: string) {
    this._appWebpImage = imageUrl;
  }

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2,
              private changeDetectorRef: ChangeDetectorRef,
              @Inject(WEBP_POLYFILL) private webpPolyFill: WebpAccess) {
  }


  ngAfterViewInit(): void {
    this.webpPolyFill.decode(this._appWebpImage)
      .pipe(
        tap((dataString: string) => {
          this.renderer.setAttribute(this.elementRef.nativeElement, 'src', `${dataString}`);
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
