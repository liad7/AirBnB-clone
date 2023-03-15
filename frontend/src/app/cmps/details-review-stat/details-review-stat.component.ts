import { Component, Input, OnInit } from '@angular/core';
import { Stay } from 'src/app/models/stay-model';
import { StayService } from 'src/app/services/stay.service';

@Component({
  selector: 'details-review-stat',
  templateUrl: './details-review-stat.component.html',
  styleUrls: ['./details-review-stat.component.scss']
})
export class DetailsReviewStatComponent {
  constructor(private stayService: StayService) { }
  @Input() stay!: Stay



  getRate(niche: string) {
    return this.stayService.getStayNicheRating(this.stay, niche).toFixed(1)

  }

  niches = [
    'cleanliness',
    'accuracy',
    'communication',
    'location',
    'checkIn',
    'value'

  ]

  // cleanlinessRating = this.stayService.getStayNicheRating(this.stay, 'cleanliness')
  // accuracyRating = this.stayService.getStayNicheRating(this.stay, 'accuracy')
  // communicationRating = this.stayService.getStayNicheRating(this.stay, 'communication')
  // locationRating = this.stayService.getStayNicheRating(this.stay, 'location')
  // checkInRating = this.stayService.getStayNicheRating(this.stay, 'checkIn')
  // valueRating = this.stayService.getStayNicheRating(this.stay, 'value')


}
