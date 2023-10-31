import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-entity-container-component',
  templateUrl: './entity-container.component.html',
  styleUrls: ['./entity-container.component.css'],
})
export class EntityContainerComponent<T extends object> {
  @Input() entities: T[] = [];
  @Input() title: string = '';
  @Input() entityKeyToRedirect: string = '';
  @Input() pathCreateEntity: string = '';
  @Input() pathEditEntity: string = '';
  @Input() buttonText: string = '';
  @Input() isEditable: boolean = false;
  @Input() deleteEntity?: (entity: any) => void;
  @Output() entityToDelete: EventEmitter<Object>;
  entityKeys: (keyof T)[] = [];

  constructor(private router: Router) {
    this.entityToDelete = new EventEmitter();
  }
  ngOnChanges() {
    if (this.entities && this.entities.length > 0) {
      this.entityKeys = Object.keys(this.entities[0]) as (keyof T)[];
    }
    console.log(this.entities);
  }

  getData(): any[] {
    console.log(
      this.entities.map((item) => this.entityKeys.map((key) => item[key]))
    );
    return this.entities.map((item) => this.entityKeys.map((key) => item[key]));
  }

  deleteHandler(entity: any) {
    // const user: { username: string } = { username: entity.username };
    // this.userService.deleteUser(user).subscribe({
    //   next: (response: any) => {
    //     this.userService.updateUserListData();
    //     alert(response.mensaje);
    //   },
    //   error: (error: any) => {
    //     console.log(error);
    //   },
    // });
    this.entityToDelete.emit(entity);
  }

  redirectToEdit(entity: any) {
    console.log(entity);
    const navigationExtras: NavigationExtras = {
      state: entity,
    };
    this.router.navigate(
      [this.pathEditEntity, entity[this.entityKeyToRedirect]],
      navigationExtras
    );
  }

  goToCreateForm() {
    this.router.navigate([this.pathCreateEntity]);
  }
}
