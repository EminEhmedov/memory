
let table=document.querySelector('table')
let k=''
let p=''
let n=5
let tab=true


let Yoxla=[]



let esas=['esas.jpg']

let Arr=['i.webp','i2.webp','i3.webp','i4.webp','i5.webp','i6.webp','i7.webp','i8.webp','i.webp','i2.webp','i3.webp','i4.webp','i5.webp','i6.webp','i7.webp','i8.webp']


function begin(){
    Yoxla=[]
    if(tab==true){
        table.style.display='block'
 
    for(let i=0;i<4;i++){
        k+=`<tr>`
        for(let z=0;z<4;z++){
           
            let random=Math.floor(Math.random()*Arr.length)
           
           
    
k+=`<td value="${Arr[random]}" ><img src="${Arr[random]}"  alt=""> 

<div class="sekildiv">  </div>
</td>`
       Arr.splice(random,1) 
     }
        k+=`</tr>`
       
    }
    table.innerHTML=k 
    tab=false
    }
    else{
        let Arr=['i.webp','i2.webp','i3.webp','i4.webp','i5.webp','i6.webp','i7.webp','i8.webp','i.webp','i2.webp','i3.webp','i4.webp','i5.webp','i6.webp','i7.webp','i8.webp']

  k=0
  k=''
  table.innerHTML=k
        table.style.display='block'
 
   
    
 
      for(let i=0;i<4;i++){
          k+=`<tr>`
          for(let z=0;z<4;z++){
              let random=Math.floor(Math.random()*Arr.length)
             
            
      
  k+=`<td value="${Arr[random]}"><img  src="${Arr[random]}" alt="">  

  <div class="sekildiv"></div>
  </td>`
  Arr.splice(random,1) 
          }
          k+=`</tr>`

      }
    
      table.innerHTML=k   
     
    
    }


    let td=document.querySelectorAll('td')
    let img=document.querySelectorAll('img')
   
    td.forEach((item)=>{
        setTimeout(()=>{
item.lastElementChild.classList.add('active')

        },2000)
        setTimeout(()=>{
            item.lastElementChild.classList.remove('active')
           
                    },4000)
        item.addEventListener('click',tdtap)
        })

       
        
        function tdtap(){
            let first=this.firstElementChild.getAttribute('src')
            let last=this.lastElementChild
            // console.log(first);
            // console.log(last);
            last.classList.add('active')
           Yoxla.push(first)
        //    console.log(Yoxla[0]);
          
           


if(Yoxla[1]){
   let y1= Yoxla[0]
   let y2= Yoxla[1]
  
    last.classList.add('active')
   
   setTimeout(()=>{
     if(y1.toString() == y2.toString() ){
    // console.log('beraberdir');
    this.innerHTML=''

   
}else{
    //   console.log(last);
        last.classList.remove('active')
        // console.log('salam');
        // console.log(y1);
        // console.log(td);
      
    }
  
   },1000)

}


           if (Yoxla.length==2) {
            Yoxla=[]
           }
        }
   
}










