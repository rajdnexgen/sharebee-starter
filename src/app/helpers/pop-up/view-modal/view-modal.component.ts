import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ElementRef, HostListener,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {Popup, PopupService} from '../popup.service';

@Component({
  selector: 'popup-helper',
  template: '<ng-content></ng-content>'
})
export class PopupHelperComponent {}

@Component({
  selector: 'app-popup',
  templateUrl: 'view-modal.component.html',
  styleUrls: ['view-modal.component.scss']
})

export class ViewModalComponent implements OnInit, OnDestroy, AfterViewInit {

  // @ts-ignore
  @ViewChild('popup') popup_content: ElementRef;
  // @ts-ignore
  private popup_instance: Popup;

  constructor(private viewRef: ViewContainerRef, private popup: PopupService) {}

  ngAfterViewInit() {
   this.ngOnInit();
  }

  ngOnInit() {
    setTimeout(() => {
      this.viewRef.detach(0);
      this.popup_instance = this.popup.create(this.popup_content.nativeElement as any);
    });
  }

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    // console.log(this.popup_instance);
    if (this.popup.isActive(this.popup_content.nativeElement)) {
      this.popup_instance.close();
    }
  }

  ngOnDestroy() {
    this.popup_instance.close();
  }
}
