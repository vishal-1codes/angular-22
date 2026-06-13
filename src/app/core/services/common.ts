import { Service, signal } from '@angular/core';

@Service()
export class Common {
    productList=signal<any[]>([]);

    addProduct(newProduct:any){
        this.productList.update((product)=>[
        ...product,
        newProduct
        ]
        )
    }
}
