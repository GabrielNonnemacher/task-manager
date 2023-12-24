import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.scss']
})
export class DeleteButtonComponent {
  @Input() id!: number | undefined;
  @Output() click = new EventEmitter;

  public onClick(): void {
    this.click.emit(this.id);
  }
}
