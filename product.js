const products = [
{
  id: 0,
  name:"sabzi",
  price:5999,
  kilgramm:56

},

{
  id: 1,
  name: "piyoz",
  price:3999,
  kilgramm:60

},

{
  id: 2,
  name:"kartoshka",
  price:5999,
  kilgramm:100

},

{
  id: 3,
  name:"karam",
  price:7999,
  kilgramm:20

},

{
  id: 4,
  name:"turp",
  price:5999,
  kilgramm:10

},

{
  id: 5,
  name:"oshqovoq",
  price:9999,
  kilgramm:15

},

{
  id: 6,
  name:"chisnok",
  price:1399,
  kilgramm:10
},

{
  id: 7,
  name:"garimdori",
  price:1399,
  kilgramm:5
},

]
alert("Assalomu alaykum online Farxod dehqon bozirimizga xush kelibsiz. Bizda mavjud mahsulotlar: sabzi, piyoz , kartoshka, karam, turp, oshqovoq, chisnok, garimdori. Bulardan birini kichik harflarda yozing")
let nomi = "a"

while(nomi){
  nomi=prompt("Mahsulot nomini kiriting")
  let yesorno = false
  for (let mahsulot of products){
    if(mahsulot.name==nomi){
      yesorno = true
    }
  }
  let soni = 0
  if (yesorno){
    soni=prompt(`Necha kg ${nomi} kerak`)
  }
  else {
    alert(`Kechirasiz bizda bunaqa mahsulot yo'q` )
  }
  if (soni>0){
    let product ={}
   for (let mahsulot of products) {
   if(mahsulot.name == nomi){
    product = mahsulot
   }
   }
  
  if(product.kilgramm >= soni){
    alert(`Sizdan ${soni * product.price} so'm bo'ldi`),
    products[product.id].kilgramm = product.kilgramm - soni,
    console.log(product);
  }
  else{
    alert(`Bizda ${product.kilgramm} kg bor ekan. Boshqa mahsulotlardan tanlab koring sal kamroqdan!`)
  }
} 
}

console.log(products);
