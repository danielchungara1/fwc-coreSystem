import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {ConfirmationService} from 'primeng/api';
import {CrudService} from '@core/services/crud/crud.service';
import {BaseModel} from '@core/interfaces/base-model';
import {NotificationService} from '@shared/notification.service';

@Component({
  selector: 'app-btn-delete',
  templateUrl: './btn-delete.component.html',
  styleUrls: ['./btn-delete.component.scss']
})
export class BtnDeleteComponent<T extends BaseModel> implements OnInit {

  @Input()
  model: T;

  @Input()
  crudService: CrudService<T>;

  @Input()
  additionalDeleteMessage = '';

  @Input()
  modelName = '';

  constructor(
    protected notificationService: NotificationService,
    protected confirmationService: ConfirmationService) {
  }

  ngOnInit(): void {
    // Input validation
    if (!this.model) {
      throw new Error(`Model is required for ${this.constructor.name}.`);
    }
    if (!this.model.id) {
      throw new Error(`Model ID is required for ${this.constructor.name}.`);
    }
  }

  delete(): void {
    this.confirmationService.confirm({
      message: `Are you sure to delete ${this.modelName} ${this.model.name} (ID ${this.model.id})?` + '<br/></br>' +
        this.additionalDeleteMessage,
      accept: () => {
        this.crudService.delete(this.model.id)
          .subscribe(
            message => {
              this.notificationService.showSuccess(message);
              this.crudService.searchAndEmit('', 0);
            },
            error => this.notificationService.showError(error),
            () => this.confirmationService.close()
          );
      },
      reject: () => {
        this.confirmationService.close();
      },
      key: this.model.id.toString()
    });
  }


}
