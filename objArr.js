const obj =  {
    fruits: ["Apple", "Banana", "Mango"],
    vegetables: ["Carrot", "Potato", "Spinach"]
  }

  const fruits = []
  const veg=[]
  for(let i in obj){
    if(i==="fruits")fruits.push(...obj[i])
    if(i==="vegetables")veg.push(...obj[i])
  }
  console.log(fruits);
  console.log(veg);
  
  