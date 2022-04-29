import {Component, OnInit} from '@angular/core';
import {Category} from '../../model/category';
import {CategoryService} from '../../service/category/category.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ProductService} from '../../service/product/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  createProductForm: FormGroup;
  submitted = false
  categories: Category[] = [];

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private fb: FormBuilder
  ) {
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
    this.getAllCategories()

    this.createProductForm = this.fb.group({
      name:[''],
      price:[''],
      description:[''],
      category:[''],
      image:['']
    })
  }

  getCreateProductForm(){
    return this.createProductForm.controls;
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('name', this.createProductForm.get('name').value);
    formData.append('price', this.createProductForm.get('price').value);
    formData.append('description', this.createProductForm.get('description').value);
    formData.append('category', this.createProductForm.get('category').value);
    formData.append('image', this.createProductForm.get('image').value);
    this.productService.createProduct(formData).subscribe(() =>{
      alert('tạo thành công');
    });
    console.log(formData.getAll('name'));
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.createProductForm.get('image').setValue(file);
    }
  }
}
