import {Component, EventEmitter, Output, Input} from '@angular/core';

@Component({
  selector: 'bee-btn',
  template: `
    <button class="bee-btn" [disabled]="disabled" [ngClass]="btnClass()" (click)="doClick($event)">
      <ng-content></ng-content>
    </button>`,
  styleUrls: [
    './bee-btn.component.scss'
  ]
})

export class BeeBtnComponent {
  @Output() click: EventEmitter<any> = new EventEmitter();
  @Input() type: string = ''; // todo: enum
  @Input() disabled: boolean = false;
  @Input() size: string = '';
  @Input() block: boolean = false;

  btnClass() {
    let btnClass = this.size ? `bee-btn--${this.size}` : '';
    btnClass = btnClass + (this.type ? ` bee-btn__${this.type}` : '');
    btnClass = btnClass + (this.block ? ` bee-btn--block` : '');
    return btnClass;
  }

  doClick(event: Event): void {
    event.stopImmediatePropagation();
    this.click.emit(event);
  }
}
