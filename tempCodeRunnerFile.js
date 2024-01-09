let allData = [
    { src:'cake/cake1.png' , rating:5 ,name:'Blueberry Cheesecake' ,about:'Blueberry love, cheesecake delight!' ,price:9.00,},
    { src:'cake/cake2.png' , rating:4 ,name:'Chocolate Mousse Cake' ,about:'Chocolate decadence! Chocolate layers of cake with a creamy chocolate mousse filling. Shall we say more' ,price:9.00,},
    { src:'cake/cake3.png' , rating:5 ,name:'Caramel Cake',about:'Layers of fluffy white cake surrounded by caramel everywhere' ,price:9.00,},
    { src:'cake/cake4.png' , rating:4 ,name:'Carrot Cake' ,about:'Delicious and warmly spiced,' ,price:9.00,},
    { src:'cake/cake5.png' , rating:3 ,name:'Chocolate Suicide' ,about:'Four fabulous layers of soft and moist chocolate cake' ,price:9.00,},
    { src:'cake/cake6.png' , rating:2 ,name:'Coca Cola Cake' ,about:'This trademark cola in cake form' ,price:9.00,},
    { src:'cake/cake7.png' , rating:5 ,name:'Death By Chocolate' ,about:'Fabulous and flourless, dark chocolate ganache cake.' ,price:9.00,},
    
]

let filterdata = function(val){ 
    return allData.filter( (element)=>{
        return element.rating > val;
    })
}
let filterData = filterdata(4);
filterData.forEach((element,i)=>{
    console.log(element);
})