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
    console.log(prod.qnt)
  }
  dec(prod:any){
    if(prod.qnt != 1){
      prod.qnt -= 1
    }

  }
}
