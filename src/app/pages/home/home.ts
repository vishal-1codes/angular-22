import { Component,effect,PLATFORM_ID,signal,inject } from '@angular/core';
import { Common } from '../../core/services/common';
import { About } from '../about/about';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  productList=signal<any[]>([])
  count=signal(1)

  private patformId=inject(PLATFORM_ID)

  constructor(public common:Common){

    effect(()=>{
      this.productList.set(this.common.productList())
      console.log("get product list",this.productList());
      console.log("adsdsa",this.productList().length);
    
      if(isPlatformBrowser(this.patformId)){
        localStorage.setItem('token','vishalpawar')
      }

    })

   
    
  }
  

  addProducts(){
    
    this.count.update((v)=> v + 1)
    let newProduct={Index:this.count(),name:'One'}
    this.common.addProduct(newProduct)
  }
}
