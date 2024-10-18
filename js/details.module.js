import { Ui } from "./ui.module.js";

export class Details {
    constructor(id) {

         document.querySelector('#Close').addEventListener('click',()=>{
            document.querySelector('.details').classList.add('d-none')
                document.querySelector('#games').classList.remove('d-none')
         })        
            this.apiInfo(id)
        }

    async apiInfo(id){
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'd5d34965b1msh2b26d8617e5c06fp16736fjsn214cf2a94bf1',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }};

let api=await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,options)
let data= await api.json()

console.log(data);
new Ui().displayDetails(data)

    }
}