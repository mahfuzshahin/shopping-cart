import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  cartItem:number = 0;

  ngOnInit():void{
    this.cartItemFunc();
  }
  cartItemFunc(){
    if(localStorage.getItem('localCart') != null){
      var cartCount = JSON.parse(localStorage.getItem('localCart') || '{}')
      this.cartItem = cartCount.length
      console.log(this.cartItem)
    }
  }

}
