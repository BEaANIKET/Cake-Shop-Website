
document.querySelector('.menubtn').addEventListener('click',function(){
    console.log('helo');
    document.querySelector('.navitem').classList.toggle('erase');
})


let allData = [
    { src:'cake/cake1.png' , rating:5 ,name:'Blueberry Cheesecake' ,about:'Blueberry love, cheesecake delight!' ,price:9.00,},
    { src:'cake/cake2.png' , rating:4 ,name:'Chocolate Mousse Cake' ,about:'Chocolate decadence! Chocolate layers of cake with a creamy chocolate mousse filling. Shall we say more' ,price:9.00,},
    { src:'cake/cake3.png' , rating:5 ,name:'Caramel Cake',about:'Layers of fluffy white cake surrounded by caramel everywhere' ,price:9.00,},
    { src:'cake/cake4.png' , rating:4 ,name:'Carrot Cake' ,about:'Delicious and warmly spiced,' ,price:9.00,},
    { src:'cake/cake5.png' , rating:3 ,name:'Chocolate Suicide' ,about:'Four fabulous layers of soft and moist chocolate cake' ,price:9.00,},
    { src:'cake/cake6.png' , rating:2 ,name:'Coca Cola Cake' ,about:'This trademark cola in cake form' ,price:9.00,},
    { src:'cake/cake7.png' , rating:5 ,name:'Death By Chocolate' ,about:'Fabulous and flourless, dark chocolate ganache cake.' ,price:9.00,},
    
]



let menucard = document.querySelector('.menucard');
let containeritem = document.querySelector('.containeritem');
let innerHTML='';
allData.forEach((element, i) => {
    
    let manucard = document.createElement('div');
    manucard.classList.add('menucard');

    let imege = document.createElement('div');
    imege.classList.add('imege');

    let img = document.createElement('img');
    img.setAttribute('src',allData[i].src);
    imege.appendChild(img);

    let maininfo = document.createElement('div');
    maininfo.classList.add('manuinfo');
    
    let manuinfo_name = document.createElement('div');
    manuinfo_name.id ='manuinfo-name';
    manuinfo_name.innerText=allData[i].name;

    let maininfo_about = document.createElement('div');
    maininfo_about.id ='maininfo-about';
    maininfo_about.innerText=allData[i].about;


    let maininfo_price= document.createElement('div');
    maininfo_price.classList.add('maininfo-price');

    let itemprice = document.createElement('div');
    itemprice.id='itemprice';
    itemprice.innerHTML = `<span>$</span>${allData[i].price}`

    let rating = document.createElement('div');
    rating.classList.add('rating');
    rating.innerHTML = `${'*'.repeat(allData[i].rating)}`;
    
    
    maininfo_price.appendChild(itemprice);
    maininfo_price.appendChild(rating);
    
    maininfo.appendChild(manuinfo_name);
    maininfo.appendChild(maininfo_about);
    maininfo.appendChild(maininfo_price);

    manucard.appendChild(imege);
    manucard.appendChild(maininfo);

    containeritem.appendChild(manucard);
});
;

