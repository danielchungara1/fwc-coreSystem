import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-btn-submit',
  templateUrl: './btn-submit.component.html',
  styleUrls: ['./btn-submit.component.scss']
})
export class BtnSubmitComponent implements OnInit {

  @Input()
  label: string;

  @Input()
  form: FormGroup;

  @Input()
  submitting = false;

  constructor() {
  }

  ngOnInit(): void {
    if (!this.form) {
      throw new Error(`The form is required for ${this.constructor.name}.`);
    }

    if (!this.label) {
      throw new Error(`The label is required for ${this.constructor.name}.`);
    }

  }

}
