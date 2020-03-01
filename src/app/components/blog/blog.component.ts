import { Blog } from './../../core/common/blog';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogService } from 'src/app/core/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogs: Observable<Blog[]>;
  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.blogs = this.blogService.getBlogsArticleList();
  }

}
