import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FilterBy, StayFilter } from 'src/app/models/stay-model';
import { StayService } from 'src/app/services/stay.service';

@Component({
  selector: 'tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolBarComponent {
  constructor(private stayService: StayService) { }
  filters: { title: string, url: String }[] = this.stayService.getFilters().slice(0, 13)
  isShowFilter: boolean = false
  filterBy: FilterBy = this.stayService.getEmptyFilterBy()

  toggleIsShowFilter() {
    this.isShowFilter = !this.isShowFilter
  }



  onSetFilter(filterBy: any) {
    const filter = this.stayService.getEmptyFilterBy()
    filter.selectedFilter = filterBy
    this.stayService.setFilter(filter)
  }
}

