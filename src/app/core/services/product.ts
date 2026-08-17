import { Service,signal } from '@angular/core';

@Service()
export class Product {
    products=signal<any[]>([
        {
      name: 'Samsung Galaxy S26 Ultra',
      price: '₹1,39,999',
      image: 'https://images.samsung.com/in/smartphones/galaxy-s26-ultra/images/galaxy-s26-ultra-features-sustainability-mo.jpg?imbypass=true'
    },

    {
      name: 'Samsung Galaxy S26+',
      price: '₹99,999',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE_nenbNe1QgkCrAA66pDL9DBpmyMxddAP_jj5OX2Zaw&s=10'
    },

    {
      name: 'Samsung Galaxy A36',
      price: '₹32,999',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_l6_JUvrGu51VD-1NZ8EUkjzq40Kvv42L2YaMnc0e9w&s=10'
    },

    {
      name: 'Samsung Galaxy F36',
      price: '₹19,999',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZKVXoUqxfllj9-JQy17pZB8_06fg53Od1bx1karFxuw&s=10'
    }
    ])
}
