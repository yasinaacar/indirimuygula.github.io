const accessPrice=document.querySelector('.price');
const defaultPrice=document.querySelector('.not-discount');
const discountPrice=document.querySelector('.discount-price');
const discount20=document.querySelector('.btn-20');
const discount15=document.querySelector('.btn-15');



discount20.addEventListener('click', ()=>{


    let price=accessPrice.value;
    let percent20= price*(0.2);
    let totalPrice=price-percent20;
    let fixedPercentPrice=totalPrice.toFixed(2);

    defaultPrice.innerHTML=price + '₺' ;
    discountPrice.innerHTML=fixedPercentPrice + '₺';
    accessPrice.value='';

});

discount15.addEventListener('click', ()=>{

    const price=accessPrice.value;
    let percent15=price*(0.15);
    let totalPrice=price-percent15;
    let fixedPrice=totalPrice.toFixed(2);

    defaultPrice.innerHTML=price + '₺';
    discountPrice.innerHTML=fixedPrice+'₺';
    accessPrice.value='';
})


