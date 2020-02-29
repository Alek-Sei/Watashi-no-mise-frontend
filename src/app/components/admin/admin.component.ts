import { Page } from './../../core/common/page';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PageService } from 'src/app/core/services/page.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  pages: Observable<Page[]>;
  constructor(private pageService: PageService) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.pages = this.pageService.getPagesList();
  }

}
