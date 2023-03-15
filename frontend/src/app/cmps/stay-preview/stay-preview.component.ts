import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Stay } from 'src/app/models/stay-model'
import { Router } from '@angular/router';
import { StayService } from 'src/app/services/stay.service';


@Component({
  selector: 'stay-preview',
  templateUrl: './stay-preview.component.html',
  styleUrls: ['./stay-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class StayPreviewComponent implements OnInit {
  constructor(
    private router: Router,
    private stayService: StayService
  ) { }

  @Input() stay!: Stay
  @Output() remove = new EventEmitter<string>()

  isLike: boolean = false
  reviewAvg!: number

  ngOnInit(): void {
    this.reviewAvg = +this.stayService.getStayRating(this.stay).toFixed(1)

  }

  toggleIsLike(ev: MouseEvent) {
    ev.stopPropagation()
    this.isLike = !this.isLike

  }
  onNavigate() {
    this.router.navigate(['/stay', this.stay._id])
  }

  get styleClass() {
    return {
      'like': true,
      'is-like': this.isLike,
    }
  }





}
