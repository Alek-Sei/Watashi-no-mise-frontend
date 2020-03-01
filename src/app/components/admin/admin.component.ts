import { Page } from './../../core/common/page';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PageService } from 'src/app/core/services/page.service';
import { Blog } from 'src/app/core/common/blog';
import { BlogService } from 'src/app/core/services/blog.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  pages: Observable<Page[]>;
  blogs: Observable<Blog[]>;
  constructor(private pageService: PageService, private blogService: BlogService) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.pages = this.pageService.getPagesList();
    this.blogs = this.blogService.getBlogsArticleList();
  }

}
