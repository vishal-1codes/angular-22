import { Service,signal  } from '@angular/core';

@Service()
export class Loader {
    isLoading=signal<boolean>(false)

    show(){
        this.isLoading.set(true)
    }

    hide(){
        this.isLoading.set(false)
    }
}
