import { Component, OnInit } from '@angular/core';
import { PageService } from 'src/app/core/services/page.service';
import { Page } from 'src/app/core/common/page';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  pages: Observable<Page[]>;
  constructor(private pageService: PageService) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.pages = this.pageService.getPagesList();
  }
}
