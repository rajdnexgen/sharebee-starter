import {Component, ElementRef, OnDestroy, OnInit, ViewContainerRef} from "@angular/core";
import {Popup, PopupService} from "../popup.service";

@Component({
  selector: 'popup-container',
  templateUrl: 'container.component.html',
  styleUrls: ['container.component.scss']
})
export class ContainerComponent implements OnInit, OnDestroy {
  popup_listener: any;
  popup_queue: Popup[] = [];

  constructor(private popup: PopupService, private elRef: ViewContainerRef) {}

  ngOnInit() {
    this.popup_listener = this.popup.onViewPopup(this.onNewPopup.bind(this));
  }

  ngOnDestroy() {
    this.popup_listener.unsubscribe();
  }

  onNewPopup(view: Popup): void {
    setTimeout(() => {
      // Set current popup visibility to false
      this.setCurrentPopupVisibility(false);

      this.popup_queue.push(view);

      // On close Display the previous pop
      // Copy close func. of the popup
      let close = view.close.bind(view);
      view.close = () => {
        close();
        this.popup_queue.pop();
        this.setCurrentPopupVisibility(true);
      };

      this.elRef.element.nativeElement.append(view.getView());

      console.log('View Intiated')
    })
  }

  setCurrentPopupVisibility(visibility: any) {
    let view = this.popup_queue[this.popup_queue.length - 1];
    if (view) {
      view.getView().hidden = !visibility;

      if (!view.getView().hidden) {
        this.popup.setLastElm(view.getView());
      }
    }


  }
}
