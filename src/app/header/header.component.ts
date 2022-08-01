import { Component, OnInit } from '@angular/core';
import { Product} from 'src/app/models/product'
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  notification: any;
  cartlength: any;

  constructor(private cartService: Product,private router: Router) { }

  ngOnInit(): void {
    
    this.cartService.getProducts()
    .subscribe(res=>{
      this.notification = res.length;
      this.cartlength=res.length
    })
    console.log(this.cartlength,"cartpage");
    
  }
  navbaractive = true;

  navcollapse() {
    this.navbaractive = !this.navbaractive;
  
  }
  cartpage(){
    if(this.cartlength>0){
      this.router.navigate(['/cart'])
    }
    else{
      
    }
   
  }
}

