import {ElementRef, Injectable, ViewRef} from "@angular/core";
import {Subject, Subscription} from "rxjs";

export class Popup {
  constructor(private elRef: HTMLElement) {}
  close() {
    this.elRef.remove()
  }
  getView() {
    return this.elRef;
  }
}


@Injectable({
  providedIn: 'root'
})
export class PopupService {
  private onShowPopup: Subject<any> = new Subject();
  // @ts-ignore
  private last_element;

  create(elRef: HTMLElement): Popup {
    this.setLastElm(elRef);
    let popup = new Popup(elRef);
    this.onShowPopup.next(popup);
    return  popup;
  };

  onViewPopup(cb: any): Subscription {
    return this.onShowPopup.subscribe(cb);
  }

  isActive(elm: HTMLElement): boolean {
    return this.last_element === elm;
  }

  setLastElm(elm: any): void {
    this.last_element = elm;
  }
}
