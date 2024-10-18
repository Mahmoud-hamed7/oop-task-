var rowElement=document.querySelector('.rowElement')
var contentDeatails=document.querySelector('.content-details')

export class Ui {
    constructor() {
        
    }

     displayGames(data) {

let box =``
for (let i = 0; i < data.length; i++) {
    
    box +=`
          
    <div class="col-md-4 m-0  col-box rounded p-2 ">
             <div class="item   text-white " data-id="${data[i].id}">
                 <img src="${data[i].thumbnail}"  class=" w-100 d-block" class="bg-secondary w-100 d-block" alt="">
               
               <div class="txtitem mt-2  d-flex justify-content-between">
                 <h3 >${data[i].title}</h3>
             <button class="btn btn-danger "> Free</button>

               </div>
               <p>${data[i].short_description}</p>

               <div class="txtitem d-flex justify-content-between">
                 <p class="fw-bold shadow   p-1 " >${data[i].genre}</p  >
                 <p class="fw-bold shadow   p-1 " >${data[i].platform}</p  >
             

               </div>
               
               </div>
         </div>
       
  
         
         `
}

       rowElement.innerHTML=box; 
          
        
    }

     displayDetails(data){
       var box =``
       
         box=`<img src="${data.thumbnail}" class=" w-25 h-25 d-block" alt="">
     <div class="content-details-txt ms-5 fw-bold lead text-white">
       <h2>${data.title}</h2>
       <p>Category: <span class="text-danger fw-bold">${data.genre}</span></p>
       <p>Platform: <span class="text-danger fw-bold">>${data.platform}</span></p>

       <p>Status: <span class="text-danger fw-bold">>${data.status}</span></p>

       <p>>${data.description}</p>
    <a href="${data.game_url}" target="_blank">  <button class="btn btn-warning ">Show Game</button></a>
   
     </div>`

       


       contentDeatails.innerHTML=box

     }
    
}