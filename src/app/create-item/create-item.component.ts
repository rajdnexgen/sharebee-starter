import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {Router} from '@angular/router';
import {ItemAvailability, ItemObject, ItemSteps} from '../models/item.model';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CreateItemComponent implements OnInit {
  @Output() createItemFlag = new EventEmitter<boolean>();
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onSuccess = new EventEmitter<any>();
  @Input() itemObject: ItemObject = {} as ItemObject;
  @Input() toc_accepted = false;
  @Input() edit_item: string = '';
  @Input() request_item_id: string = '';
  @Input() isPrivate = false;
  visibility = true;

  itemEdited: boolean = false;
  currentState: ItemSteps = ItemSteps.itemTitle;
  ItemSteps: typeof ItemSteps = ItemSteps;
  previous = 'cancel';
  next = 'next';
  lendFreeInfo: boolean = false;
  tcInfo: boolean = false;
  itemAdded: boolean = false;
  focusedElement = '';

  accept_TC = true;
  // @ts-ignore
  validateItem:
    {
      title: string,
      rent: string,
      description: string,
      value: string,
      maintenance: string,
      serviceDate: string,
      toc_accepted: string,
      category: string
      location: string
    } = Object;
  isFileUploaded?: boolean;
  uploadImage = ''; // 'http://localhost:8080/api/item/image/upload';
  categories: string[] = ['household', 'tools', 'transport', 'space', 'technology', 'clothing', 'children’s', 'recreation & health'];
  isUserLoggedIn = true;
  loggInPopUP: boolean = false;

  get can_go_next() {
    return this.currentState === ItemSteps.itemTitle
      || this.currentState === ItemSteps.itemDescription
      || (this.currentState === ItemSteps.itemValue && (this.toc_accepted)
        && this.itemObject.item_cost !== undefined);

  }

  constructor(private _router: Router) {
    // initialize itemObject.images to blank array
    this.itemObject.images = []; /*['assets/img/no_image_available.jpeg',
      'assets/img/no_image_available.jpeg',
      'assets/img/no_image_available.jpeg'];*/
  }


  imageUploading(obj: any) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('User_Data')) {
      this.isUserLoggedIn = true;
      this.setLocation();
    }
    // @todo uncomment
    // this.getCategory();
    /* console.log(this.itemObject);
     let serviceDate = new DatePipe('en-US').transform(this.itemObject.service_date, 'dd/MM/yyyy');
     // console.log(new DatePipe('en-US').transform(serviceDate, 'dd/MM/yyyy'));
     // console.log(new DatePipe('en-US').transform(this.itemObject.service_date, 'dd/MM/yyyy'));
     console.log(serviceDate);
     console.log(new Date(this.itemObject.service_date));
     this.itemObject.service_date = new Date(this.itemObject.service_date);*/
  }

  setLocation() {
    console.log(this.itemObject.hasOwnProperty('availability'));
    console.log(this.itemObject);

    if (this.itemObject && this.itemObject.availability === undefined && !this.isPrivate) {
      this.visibility = false;
    } else if (this.itemObject && this.itemObject.availability) {
      this.visibility = this.itemObject.availability !== ItemAvailability.public;
    }

    // In theory the this.itemObject.location check is not needed but this will cover cases
    // before this was implemented where location can be null
    if (this.edit_item && this.itemObject.location) {
      return;
    }

  }

  getCategory() {
    this.categories = [];
  }

  /**
   * Once file is uploaded save the path of image to itemObject array
   * @param1 model
   * @param2 pos
   */
  onFileUploadDone(model: any, pos: any) {

  }

  safeCall(fn: any, event: any): void {

  }

  // Handle back button
  back() {
    if (this.currentState === ItemSteps.itemDescription) {
      this.previous = 'cancel';
      this.currentState = ItemSteps.itemTitle;
    } else if (this.currentState === ItemSteps.itemValue) {
      this.currentState = ItemSteps.itemDescription;
      this.next = 'next';
    } else {
      this.createItemFlag.emit(false);
    }

  }
  closePopup() {
    this.createItemFlag.emit(false);
  }

  // Validate the steps & call api
  createItem() {
    console.log('itemObject', this.itemObject);
    if (this.isUserLoggedIn) {
      // @ts-ignore
      this.validateItem = {};
      if (this.currentState === ItemSteps.itemTitle) {
        if ((this.itemObject.location === '' || this.itemObject.location === undefined)) {
          this.validateItem['location'] = 'Please enter your location';
        } else if (this.itemObject.title === '' || this.itemObject.title === undefined) {
          this.validateItem['title'] = 'title should not be empty';
        } else {
          this.previous = 'previous';
          this.currentState = ItemSteps.itemDescription;
        }
      } else if (this.currentState === ItemSteps.itemDescription) {
        this.currentState = ItemSteps.itemValue;
        this.next = 'submit';
      } else {
        if (this.itemObject.item_cost === 0 || this.itemObject.item_cost === undefined || this.itemObject.item_cost === null) {
          this.validateItem.value = 'value cannot be empty';
        } else {
          this.itemObject.insured = true;
          for (let index = 0; index <= 2; index++) {
            // @ts-ignore
            if (this.itemObject.images[index] === undefined) {
              // @ts-ignore
              this.itemObject.images[index] = 'assets/img/no_image_available.jpeg';
            }
          }

          this.itemObject.availability = this.visibility ? ItemAvailability.private : ItemAvailability.public;

          let operation;
          /*if (this.edit_item) {
            operation = this.itemApiService.editItem(this.edit_item, this.itemObject);
          } else {
            operation = this.itemApiService.createItem(this.itemObject, this.request_item_id);
          }*/

          /*operation.subscribe(
            (result: any) => {
              if (!this.edit_item) {
                this.itemAdded = true;
              } else {
                this.itemEdited = true;
              }
              console.log('result', result);
              this.onSuccess.emit(result.data.item);
            },
            (error) => {
              this.toastrService.error(error.message, 'Error');
            }
          );*/
        }
      }
    } else {
      this.loggInPopUP = true;
      // this.createItemFlag.emit(false);
      console.log('login sign up');
    }
  }


  acceptTC(event: any) {
    if (event.target.checked) {
      this.accept_TC = !this.accept_TC;
    } else {
      this.accept_TC = !this.accept_TC;
    }
  }




  accept() {
    this.toc_accepted = true;
    // @ts-ignore
    this.validateItem = {};
  }

  close() {
    this.loggInPopUP = false;
    this.createItemFlag.emit(false);
  }

  loginUser() {
    // this._router.navigate([RoutePaths.LOGIN_USER]);
  }

  signUpUser() {
    // this._router.navigate([RoutePaths.HOME_GUEST_REGISTER]);
  }
}

