let button = document.querySelectorAll("button");
let cart_items = document.querySelectorAll(".single-item");
let items_for_print = document.querySelector('.cart-items');
let imeProizvoda;
let vrednostProizvoda;
let inputProizvoda;
let sredjenProizvod;
let parsiranSredjenProizvod;
let cart_item;
let total = 0;
let allTotal = 0;


button.forEach((btns)=>{
btns.addEventListener('click',()=>{
cart_items.forEach((items)=>{
    imeProizvoda = items.querySelector(".si-content h3").textContent;
    vrednostProizvoda = items.querySelector(".si-content .price").textContent;
    sredjenProizvod = vrednostProizvoda.substring(1);
    parsiranSredjenProizvod = parseInt(sredjenProizvod);
    inputProizvoda = items.querySelector(".actions input").value;
    
    if(parseInt(inputProizvoda) > 0 ){
        total = parsiranSredjenProizvod *inputProizvoda
        items_for_print.innerHTML += `<div class="cart-single-item">
                            <h3>${imeProizvoda}</h3>
                            <p>$${parsiranSredjenProizvod} x $${inputProizvoda} = $<span>${total}</span></p>
                            <button onclick="removeFromCart(this)" class="remove-item">Ukloni</button>
                            </div`;
        items.querySelector(".actions input").value = 0;
        allTotal +=total
        document.querySelector('.total').innerText = `Total:$${allTotal}`
        btns.innerText = 'Dodato'
        btns.setAttribute('disabled','true')
    }  
});
});
});

function removeFromCart (element){
let mainEl = element.closest('.cart-single-item');
let price = mainEl.querySelector('p span').innerText;
let name = mainEl.querySelector('h3').innerText;
let vegetables = document.querySelectorAll('.single-item');
price = parseInt(price);


allTotal -= price;
document.querySelector('.total').innerText=`Total: $${allTotal}`;
mainEl.remove();

vegetables.forEach((vege)=> {
    let itemName = vege.querySelector('.si-content h3').innerText
    if(itemName === name){
        vege.querySelector('.actions input').value = 0;
        vege.querySelector('.actions button').removeAttribute('disabled');
        vege.querySelector('.actions button').innerText = 'Dodaj';
    }
   
});
}




