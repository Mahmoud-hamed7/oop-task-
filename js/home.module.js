import { Details } from "./details.module.js";
import { Ui } from "./ui.module.js";

export class Home {
    constructor() {



        document.querySelectorAll('.nav-link').forEach(e => {

            e.addEventListener('click', () => {
                this.activePut(e)
                let Cat = e.getAttribute('data-cat')

                this.ApiData(Cat)

            })
        });
        this.loding = document.querySelector('.loding')
        this.details = document.querySelector('.details')
        this.games = document.querySelector('#games')
        
        
        
        this.ui = new Ui()
        this.ApiData('mmorpg')
    }


    async activePut(e) {
        document.querySelector('.navbar-collapse  .active').classList.remove('active')
        e.classList.add('active')


    }


















    async ApiData(Cat) {

        this.loding.classList.remove('d-none')

        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '35065112edmsh614f151d34566c5p18e357jsn673c48d9b5df',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };




        let api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${Cat}`, options)
        let data = await api.json()
        this.loding.classList.add('d-none')

        // console.log(data);


        this.ui.displayGames(data)
       
        
        document.querySelectorAll('.col-box').forEach(card => {
            card.addEventListener('click', ()=>{
                this.details.classList.remove('d-none')
                this.games.classList.add('d-none')
        new Details(card.querySelector('.item').dataset.id); 

            })

        });


    }





}


