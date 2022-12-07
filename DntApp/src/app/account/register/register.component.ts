import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { Product } from 'src/app/Models/Product';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ],
  providers: [ProductService]
})
export class RegisterComponent implements OnInit {
  datamayur: any;
  title = 'Simple CRUD';
  public TableData: any;
  public product = new Product;
  public divTableShow;
  constructor(private productService: ProductService) {
  this.product = new Product();
  this.divTableShow = true;
}
ngOnInit() {
  this.fnGetData();
  }
  fnGetData() {
      this.productService.getData().pipe().subscribe(datamayur => {
      this.TableData = datamayur;
      console.log(this.datamayur);
    });
  }
    
  fnAdd() {
    this.product = new Product;
    this.divTableShow = false;
  }
    
fnClose() {
  this.divTableShow = true;
}
    
fnSave() {
  if (this.product.ProductId === 0) {
  this.productService.postData(this.product).pipe().subscribe(datamayur => {
  console.log(this.datamayur);
  this.fnGetData();
  alert('Record inserted successfully.');
  });
  } else {
  this.productService.putData(this.product).pipe().subscribe(datamayur => {
  console.log(this.datamayur);
  this.divTableShow = true;
  this.fnGetData();
  alert('Record updated successfully.');
  });
  }
  this.divTableShow = true;
}
    
    fnEdit(editObj: any) {
      this.product.ProductId = editObj.ProductId;
      this.product.Name = editObj.Name;
      this.product.Quantity = editObj.Quantity;
      this.product.Price = editObj.Price;
      this.divTableShow = false;
    }

    fnDelete(id: number) {
    if (confirm('Are you sure to delete?')) {
        this.productService.deleteData(id).pipe().subscribe(datamayur => {
        console.log(this.datamayur);
        alert('Record deleted successfully.');
            this.fnGetData();
        });
    }
  }
}