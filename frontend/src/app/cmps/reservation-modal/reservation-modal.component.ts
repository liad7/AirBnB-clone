import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Stay } from 'src/app/models/stay-model';

@Component({
  selector: 'reservation-modal',
  templateUrl: './reservation-modal.component.html',
  styleUrls: ['./reservation-modal.component.scss']
})
export class ReservationModalComponent {
  @Input() stay!: Stay
  @Input() isShown!: boolean

  @Output() show = new EventEmitter<boolean>()

  onCloseModal() {
    this.show.emit()
  }





}
