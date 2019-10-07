import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  OnInit,
  Renderer2,
  ViewChild
} from '@angular/core';
import { User } from '../../services/user';
import { ActivatedRoute } from '@angular/router';
import { WEBP_POLYFILL, WebpAccess } from '../../../shared/webp-polyfill/service/webp-access';

export class LoadingError extends Error {
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit, AfterViewInit {

  @ViewChild('profileImage', { static: false }) profileImage: ElementRef;

  private _user: User;
  get user(): User {
    return this._user;
  }

  constructor(private route: ActivatedRoute,
              private renderer2: Renderer2,
              @Inject(WEBP_POLYFILL) private webpPolyFill: WebpAccess) {
  }

  ngOnInit(): void {
    this._user = {
      ...this.route.snapshot.data['user'],
      image: { ...this.route.snapshot.data['user'].image, url: 'assets/images/dong.webp' }
    };
  }

  ngAfterViewInit(): void {
    const profileImageNative = this.profileImage.nativeElement;
    console.log(`UserComponent[ngAfterViewInit]`);

    // console.log(`${profileImageNative.src} is webp? ${/\.webp.*$/i.test(profileImageNative.src) ? 'Yes' : 'No'}`);

    // this.loadBinaryData(profileImageNative.src)
    //   .then((data: Uint8Array) => this.webpPolyFill.decode(data))
    //   .then((dataString: string) => this.renderer2.setProperty(profileImageNative, 'src', dataString))
    //   .catch((err: any) => console.error(err));

    // this.webpPolyFill.polyfillImage(profileImageNative)
    //   .then(() => console.log('Element polyfilled webp'))
    //   .catch((err: any) => console.error(err));

  }
}
