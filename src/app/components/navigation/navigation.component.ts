import { Component } from '@angular/core';

import { PageService } from '../../app.service';
import { Page } from '../../app.interface';

@Component({
  selector: '[navigation-component]',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  items: Array<Page> = [];

  constructor(private ps: PageService) {
    this.ps.pages.subscribe((items: Page) => {
      this.items = this.filterEmptyRoutes(items.pages);
    });
  }

  filterEmptyRoutes(items: Array<Page>) {
    return items.filter(item => item.url !== 'none');
  };
}
