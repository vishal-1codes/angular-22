import { Component, linkedSignal, resource } from '@angular/core';
import { signal,computed,effect,input,model} from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-about',
  imports: [FormsModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
   name = input<string>();
  newName=model('')

  count= signal(0)

  countObj=signal({
    name:'vishal',
    age:28
  })

  countArray=signal<any[]>([])

  users=signal<any[]>([])

  selectedUser= signal(1)
  userDetails=linkedSignal(()=>{
    return this.users().find(x=>x.id === this.selectedUser())
  })


  userId=signal(1)

  userData=resource({
    params:()=>({
      userId:this.userId()
    }),
    loader:async ({params}) =>{
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${params.userId}`
      );
      return response.json()
    }
  })

  constructor(){

    effect(()=>{
      console.log('couter change',this.count(),this.newName())
    })
  }

  ngOnInit(){
    this.count.set(3)
    this.count.update(value=>value + 1)

    this.countObj.update(value=>({
      ...value,
      age:value.age + 1
    }))

    let doubleValue=computed(()=> this.count() * 2)
    console.log("vishal",this.count(),doubleValue())
    console.log("aignla",this.countObj())



    let newObj={
      id:Date.now(),
      name:'Laptop'
    }

    this.countArray.update((value)=>[
      ...value,
      newObj
    ])

    console.log("this.countArray",this.countArray())
  }

}
