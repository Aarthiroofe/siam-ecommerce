import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  allitems:any[];
  constructor( private http:HttpClient) { 

    this.allitems = [
      {
        id: "001",
        productname1: "Adiddas ",  productname2: "Beluga ",
        price: "35000",
        size: "28", Brand: "Nike",

        pimage:"/assets/pimg2.png",
        description: "Steel Grey and Beluga colors are interwoven throughout the Primeknit upper, which for the first time sports a vibrant orange stripe (technically in Solar Red) from heel to toe."
      },
      {
        id: "002",
        productname1: "Nike",productname2:"Zoom ",
        price: "15000",
        size: "30", Brand: "Nike",pimage:"/assets/pimg1.png ",
        description: "The world's largest athletic apparel company, Nike is best known for its footwear, apparel, and equipment."
      },
       {
        id: "003",
        productname1: "Nike Air",productname2:"Jordan XT",
        price: "25000",
        size: "32", Brand: "jordan",pimage:"/assets/pimg2.png  ",
        description: "uses pressurised air in a durable, flexible membrane to provide lightweight cushioning."
      },
      {
        id: "004",
        productname1: "Adidas",productname2:"Wobler ",
        price: "25000",
        size: "34", Brand: "Adidas",pimage:"/assets/pimg3.png  ",
        description: "German manufacturer of athletic shoes and apparel and sporting goods."
      },
      {
        id: "005",
         productname1: "Suede",productname2:" Classic",
        price: "50000",
        size: "36", Brand: "fila",pimage:"/assets/pimg4.png  ",
        description: "an animal skin made smooth and flexible by removing the hair and then tanning. a fabric made to resemble suede leather."
      },
      {
        id: "006",
         productname1: "Superstar",productname2:"Classic ",
        price: "70000",
        size: "", Brand: "Adidas",pimage:"/assets/pimg5.png  ",
        description: "The distinctive shell toe and smooth cowhide leather upper set Superstar apart from traditional canvas basketball shoes."
      },
      {
        id: "007",
         productname1: "NMD 1",productname2:"Refined ",
        price: "65000",
        size: "38", Brand: "fila",pimage:" /assets/pimg6.png ",
        description: "It's a plush trainer that cossets your foot with a snug sockliner so that it will feel a part of your foot "
      },
      {
        id: "008",
         productname1: "Jordan",productname2:" Delt 2",
        price: "72000",
        size: "28", Brand: "Jordan",pimage:"/assets/pimg7.png  ",
        description: "The Jordan Delta is a versatile shoe that's comfortable from the inside out. Mixing high-tech and premium materials, it's plush, lightweight and crafted with an array of details."
      },
      {
        id: "009",
         productname1: "Nike Air",productname2:" Jordan XT",
        price: "23000",
        size: "30", Brand: "Nike",pimage:"/assets/pimg8.png  ",
        description: "  uses pressurised air in a durable, flexible membrane to provide lightweight cushioning."
      },
      {
        id: "0010",
         productname1: "RX-S-INTL",productname2:"Game ",
        price: "78000",
        size: "32", Brand: "Fils",pimage:" /assets/pimg9.png ",
        description: "Ankit Export & Import - Offering Red Puma Rxs Shoe at Rs 2999/pair in Siliguri, West Bengal. Read about company"
      },
      {
        id: "0011",
         productname1: "Adidas",productname2:" Beluga",
        price: "80000",
        size: "34", Brand: "Adidas",pimage:"/assets/pimg3.png  ",
        description: "Steel Grey and Beluga colors are interwoven throughout the Primeknit upper, which for the first time sports a vibrant orange stripe (technically in Solar Red) from heel to toe."
      },
      {
        id: "0012",
         productname1: "Nike Air",productname2:"Jordan XT ",
        price: "66000",
        size: "36", Brand: "Nike",pimage:"/assets/pimg1.png  ",
        description: "uses pressurised air in a durable, flexible membrane to provide lightweight cushioning."
      },
      {
        id: "0013",
         productname1: "Nike ",productname2:"Wobler ",
        price: "70000",
        size: "38", Brand: "",pimage:"/assets/pimg2.png  ",
        description: "one or more translucent pouches of pressurized gas embedded in the midsole and visible from the outside of the shoe"
      },
      {
        id: "0014",
         productname1: "Nike",productname2:"Zoom ",
        price: "35000",
        size: "28", Brand: "Nike",pimage:" /assets/pimg3.png ",
        description: " fast-off-the-mark responsiveness and decreased pronation while running, increased ground feel and control to field sports and faster cuts on the basketball court"
      },
      {
        id: "0015",
         productname1: "Jordan",productname2:" Delt 3",
        price: "70000",
        size: "34", Brand: "Jordan",pimage:"/assets/pimg4.png  ",
        description: "Multi-layered, mixed material upper looks both high-tech and handcrafted. Nike React technology is a lightweight, durable foam that delivers a smooth, responsive ride."
      },
    ]
  }

  getdata(){
    return this.http.get('https://fakestoreapi.com/products');
  }
}
