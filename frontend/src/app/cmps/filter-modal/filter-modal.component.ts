import { Component, EventEmitter, Output } from '@angular/core';
import { FilterBy } from 'src/app/models/stay-model';
import { StayService } from 'src/app/services/stay.service';

@Component({
  selector: 'filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.scss']
})
export class FilterModalComponent {
  constructor(private stayService: StayService) { }

  filterBy: FilterBy = this.stayService.getEmptyFilterBy()

  @Output() close = new EventEmitter<boolean>()


  onCloseModal() {
    this.close.emit()

  }

  onSetFilterBy() {
    console.log('this.filterBy:', this.filterBy)
    this.stayService.setFilter(this.filterBy)
    this.onCloseModal()
  }


}
