import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  productArray = [
    {
      prodId: 1,
      img: "../../assets/product/p2.jpg",
      amt: 100,
      qnt: 1
    },
    {
      prodId: 2,
      img: "../../assets/product/p2.jpg",
      amt: 200,
      qnt: 1
    },
    {
      prodId: 3,
      img: "../../assets/product/p2.jpg",
      amt: 300,
      qnt: 1
    },
    {
      prodId: 4,
      img: "../../assets/product/p2.jpg",
      amt: 400,
      qnt: 1
    }
  ]
  inc(prod:any){
    if(prod.qnt != 5){
      prod.qnt += 1
    }
    //console.log(prod.qnt)
  }
  dec(prod:any){
    if(prod.qnt != 1){
      prod.qnt -= 1
    }

  }
  itemsCart:any = [];
  addCart(category:any){
    //console.log(category)
    let cartDataNull = localStorage.getItem('localCart')

    if(cartDataNull == null){
      let storeDataGet: any = [];
      storeDataGet.push(category)
      localStorage.setItem('localCart', JSON.stringify(storeDataGet));
    }else{
      var id = category.prodId;
      let index:number = -1;
      this.itemsCart = JSON.parse(localStorage.getItem('localCart')|| '{}');

      for(let i=0; i<this.itemsCart.length; i++){

        if(parseInt(id) === parseInt(this.itemsCart[i].prodId)){
          this.itemsCart[i].qnt = category.qnt;
          index = i;
          break;
        }
      }
      if(index == -1){
        this.itemsCart.push(category);
        localStorage.setItem('localCart', JSON.stringify(this.itemsCart));
      }else {
        localStorage.setItem('localCart', JSON.stringify(this.itemsCart))
      }
    }
    localStorage.setItem('localCart', JSON.stringify(category))
  }
}
