import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'register-button',
  templateUrl: './register-button.component.html',
  styleUrls: ['./register-button.component.scss']
})
export class RegisterButtonComponent {
  @Output() valueChange = new EventEmitter;

  public onClick(): void {
    this.valueChange.emit();
  }
}
