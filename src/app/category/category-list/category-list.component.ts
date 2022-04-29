import {Component, OnInit} from '@angular/core';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category/category.service';
import {error} from 'protractor';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories: Category[] = [];

  constructor(private categoryService: CategoryService) {

  }

  getAllCategories() {
    this.categoryService.getALl().subscribe((categoriesFormBE) => {
        this.categories = categoriesFormBE;
      }, error => {
        console.log(error);
      }
    );

  }

  ngOnInit() {
    this.getAllCategories();
  }

}
