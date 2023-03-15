import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppHeaderComponent {
  constructor() { }
  isSearchOpen:boolean = false

  isExpandProfile: Boolean = false

  isExpandLogin: Boolean = false

  toggleIsSearch():void {
    this.isSearchOpen = !this.isSearchOpen
  }
  toggleIsProfile() {
    this.isExpandProfile = !this.isExpandProfile
  }
  toggleIsLogin() {
    this.isExpandLogin = !this.isExpandLogin
    this.isExpandProfile = false
  }

}
