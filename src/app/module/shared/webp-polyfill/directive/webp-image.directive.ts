import { AfterViewInit, ChangeDetectorRef, Directive, ElementRef, Inject, Input, Renderer2 } from '@angular/core';
import { WEBP_POLYFILL, WebpAccess } from '../service/webp-access';

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
              @Inject(WEBP_POLYFILL) private webpPolyFill: WebpAccess) { }


  ngAfterViewInit(): void {
    this.webpPolyFill.decode(this._appWebpImage)
      .then((dataString: string) => {
        this.renderer.setAttribute(this.elementRef.nativeElement, 'src', `${dataString}`);
        this.changeDetectorRef.detectChanges();
      })
      .catch((err: any) => console.error(err));
  }
}
