
const cars = [

    {
        "name": "GLB SUV",
        "desc":"La nueva Mercedes-Benz GLC SUV es más inteligente, dinámica y dominante que nunca. Con un sistema de manejo moderno y fascinante, se adapta cada día mejor a tus preferencias. ",

    },
    {
        "name": "GLC COUPÉ",
        "desc":"El diseño de la GLE Coupé aúna elementos propios de una SUV y de un coupé. Su comportamiento conjuga potencia y agilidad. El resultado es un vehículo excepcional que polariza",

    },
    {
        "name": "CLASE G",
        "desc":"A lo largo de los años, ha experimentado innumerables mejoras pero sin perder en ningún momento su carácter singular. Han pasado ya aproximadamente 40 años ",

    },
]

const Products= document.querySelector('.products__cards');
const Product= ()=>{
    const view = `    

    ${cars.map(car =>`
    <div class="card">

    <div class="card__inner">
    <div class="card__face card__face--front"  ;>

        <div class="overlay" id="overlay-card">${car.name}</div>
    </div>
    <div class="card__face card__face--back">
        <div class="card__title">
                <h2>${car.name}</h2>
        </div>
        <div class="card__body">
           
            <div class="card__body--desc">
                <p>${car.desc}</p>
            </div>
            <div class="card__body--btn">
                <a href="#">Registrar</a>
            </div>
        </div>

    </div>
</div>
</div>

    `
    
    ).join('')}
    


    `;
    return view
}


Products.innerHTML=Product();






const card= document.querySelectorAll('.card__inner')


for(let i=0;i<3;i++ ){
    card[i].addEventListener('click',function(){
        card[i].classList.toggle('is-flipped')
    })


}





const openModalBtn= document.querySelectorAll('[data-modal-target]')
const closeModalBtn= document.querySelectorAll('[data-close-button]')
const overlay= document.getElementById('modal_overlay')

openModalBtn.forEach(button =>{
    button.addEventListener('click',()=>{
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal)     
    })
})

closeModalBtn.forEach(button =>{
    button.addEventListener('click',()=>{
        const modal = button.closest('.modal')
        closeModal(modal)     
    })
})


function openModal(modal){
    if(modal==null) return
    modal.classList.add('active')
    overlay.classList.toggle('active')

}

function closeModal(modal){
    if(modal==null) return
    modal.classList.remove('active')
    overlay.classList.toggle('active')

}

