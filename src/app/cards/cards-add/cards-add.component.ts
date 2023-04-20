import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CardContent } from '../../../shared/models/CardContent';

@Component({
  selector: 'app-cards-add',
  templateUrl: './cards-add.component.html',
  styleUrls: ['./cards-add.component.less'],
})
export class CardsAddComponent {
  @Output() add = new EventEmitter<CardContent>();

  form = new FormGroup({
    titleInput: new FormControl('', Validators.required),
    descriptionInput: new FormControl('', Validators.required),
  });

  submit(): void {
    this.add.emit({
      title: this.form.get('titleInput')?.value ?? '',
      description: this.form.get('descriptionInput')?.value ?? '',
    });

    this.form.reset();
  }
}
