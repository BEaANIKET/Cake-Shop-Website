
document.querySelector('.menubtn').addEventListener('click',function(){
    console.log('helo');
    document.querySelector('.navitem').classList.toggle('erase');
})


let allData = [
    { src:'cake/cake1.png' , rating:5 ,name:'Blueberry Cheesecake' ,about:'Blueberry love, cheesecake delight!' ,price:9.00,},
    { src:'cake/cake2.png' , rating:4 ,name:'Chocolate Mousse Cake' ,about:'Chocolate decadence! Chocolate layers of cake with a creamy chocolate mousse filling. Shall we say more' ,price:9.00,},
    { src:'cake/cake3.png' , rating:5 ,name:'Caramel Cake',about:'Layers of fluffy white cake surrounded by caramel everywhere' ,price:10.00,},
    { src:'cake/cake4.png' , rating:4 ,name:'Carrot Cake' ,about:'Delicious and warmly spiced,' ,price:9.00,},
    { src:'cake/cake5.png' , rating:3 ,name:'Chocolate Suicide' ,about:'Four fabulous layers of soft and moist chocolate cake' ,price:5.00,},
    { src:'cake/cake6.png' , rating:2 ,name:'Coca Cola Cake' ,about:'This trademark cola in cake form' ,price:7.00,},
    { src:'cake/cake7.png' , rating:5 ,name:'Death By Chocolate' ,about:'Fabulous and flourless, dark chocolate ganache cake.' ,price:8.00,},
    
]
let filter = document.querySelector('.filterbtn');
let filterbox = document.querySelector('.filterbox');
filter.addEventListener('click' ,function(){
    filterbox.classList.toggle('display_none');
})

let price_min = document.querySelector('.price_min');
let price_max = document.querySelector('.price_max');

price_min.value = 0;
price_max.value = 10;
let min = 0;
let max = 10;
price_min.addEventListener('input',function(event){
    min = event.target.value;
    document.querySelector('.min').querySelector('span').innerText = min;
    console.log(min);
})

price_max.addEventListener('input',function(event){
    max = event.target.value;
    document.querySelector('.max').querySelector('span').innerText = max;
    console.log(max);
})

let star = 6;
let filter_star = document.querySelectorAll('.filter_star');

let clearBg = filter_star.forEach((element) => {
    element.style.backgroundColor = 'transparent';
});

let changeBg = function(){filter_star.forEach((element) => {
        element.style.backgroundColor = 'transparent';
    });
}

// To return user selected rating and stored in s star variable 
filter_star.forEach( (element ,index)=>{
    element.addEventListener('click' , ()=>{
        if(index === 0)star = 2;
        if(index === 1)star = 4;
        if(index === 2)star = 6; 
        
        changeBg();
        element.style.backgroundColor = 'rgb(94, 122, 235)';
    })
})


// after click on filter Apply  buttom
let filterAllData=[];
let apply = document.querySelector('.apply');
apply.addEventListener('click',function(){
    filterAllData = [];
    filterAllData = allData.filter( (item)=>{
        console.log(star);
        console.log(min,max);
        return (item.price>=min && item.price<=max && item.rating<=star);
    })
    renderFilterData(filterAllData);
    console.log(filterAllData);
})


// render filter data function 

let renderFilterData = function(filterAllData){
    let menucard = document.querySelector('.menucard');
    let containeritem = document.querySelector('.containeritem');
    containeritem.innerHTML = '';

    filterAllData.forEach((element, i) => {
        

        let manucard = document.createElement('div');
        manucard.classList.add('menucard');

        let imege = document.createElement('div');
        imege.classList.add('imege');

        let img = document.createElement('img');
        img.setAttribute('src',filterAllData[i].src);
        imege.appendChild(img);

        let maininfo = document.createElement('div');
        maininfo.classList.add('manuinfo');
        
        let manuinfo_name = document.createElement('span');
        manuinfo_name.id ='manuinfo-name';
        manuinfo_name.innerText=filterAllData[i].name;

        let maininfo_about = document.createElement('span');
        maininfo_about.id ='maininfo-about';
        maininfo_about.innerText=filterAllData[i].about;


        let maininfo_price= document.createElement('div');
        maininfo_price.classList.add('maininfo-price');

        let itemprice = document.createElement('div');
        itemprice.id='itemprice';
        itemprice.innerHTML = `<span>$</span>${filterAllData[i].price}`

        let rating = document.createElement('div');
        rating.classList.add('rating');
        rating.innerHTML = `${'*'.repeat(filterAllData[i].rating)}`;
        
        
        maininfo_price.appendChild(itemprice);
        maininfo_price.appendChild(rating);
        
        let Text = document.createElement('div');
        Text.classList.add('Text');

        Text.appendChild(manuinfo_name);
        Text.appendChild(maininfo_about);

        maininfo.appendChild(Text);
        maininfo.appendChild(maininfo_price);

        manucard.appendChild(imege);
        manucard.appendChild(maininfo);

        containeritem.appendChild(manucard);
    });
}

// renderFilterData(allData);