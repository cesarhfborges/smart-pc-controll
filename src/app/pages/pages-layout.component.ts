import {Component, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {NbMenuService, NbSidebarService} from '@nebular/theme';

@Component({
  selector: 'app-pages-layout',
  templateUrl: './pages-layout.component.html',
  styleUrls: ['./pages-layout.component.scss']
})
export class PagesLayoutComponent implements OnInit {

  userPictureOnly: boolean = false;
  user: any = {name: 'cesar'};
  userMenu = [{title: 'Profile'}, {title: 'Log out'}];
  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
  ) {
  }

  ngOnInit(): void {
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    // this.layoutService.changeLayoutSize();
    return false;
  }

  navigateHome() {
    this.menuService.navigateHome();
    return false;
  }
}
