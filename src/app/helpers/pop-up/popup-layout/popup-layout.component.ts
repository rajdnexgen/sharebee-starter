import {
  Component,
  OnDestroy,
  ViewChild,
  ViewEncapsulation,
  ElementRef,
  HostListener,
  OnInit,
  Input, ChangeDetectorRef, AfterViewInit, ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'popup-layout',
  template: `
    <app-popup #popup>
      <div model-content>
        <div class="app-pop-up-layout-container" [ngClass]="{'app-pop-up-layout-container--tall': '660px'}">
          <div class="box" #content>
            <div *ngIf="showLogo" class="logo">
              <img src="../../../../assets/svg/logo_for_popup.svg" alt="logo"/>
            </div>
            <div>
              <ng-content></ng-content>
            </div>
          </div>
        </div>
      </div>
    </app-popup>
    `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: [
    'popup-layout.component.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class PopupLayoutComponent implements OnDestroy, OnInit, AfterViewInit {
  // @ts-ignore
  @ViewChild('popup') popup;
  // @ts-ignore
  @ViewChild('content') contentElem: ElementRef;
  public windowHeight: number = 0;
  @Input() showLogo = true;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.windowHeight = window.innerHeight;
  }

  ngOnDestroy() {
  }

  constructor(public cdRef: ChangeDetectorRef) {

  }

  ngOnInit() {
    console.log(window.innerHeight);
    this.windowHeight = window.innerHeight;
  }

  get tooTall(): boolean {
    console.log(this.contentElem.nativeElement.offsetHeight);
    console.log(this.windowHeight);
    return this.contentElem.nativeElement.offsetHeight >= this.windowHeight;
  }

  close() {
    this.popup.close();
  }

  ngAfterViewInit() {
    this.cdRef.detectChanges();
  }
}
