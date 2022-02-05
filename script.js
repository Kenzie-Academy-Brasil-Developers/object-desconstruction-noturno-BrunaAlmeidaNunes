const itemArray = [
    {
        "id": 1,
        "product": "Pão",
        "price": 5.80,
        "quantity": 3,
        "section": "Padaria"
    },
    {
        "id": 2,
        "product": "Leite",
        "price": 3.00,
        "quantity": 1,
        "section": "Derivados de Leite"
    },
    {
        "id": 3,
        "product": "Carne",
        "price": 10.00,
        "quantity": 2,
        "section": "Carne"
    },
    {
        "id": 4,
        "product": "Tomate",
        "price": 4.00,
        "quantity": 5,
        "section": "Hortifruti"
    },
]
const testMap = (array) => {

    const result = array.map((value) => {
        let { id, price } = value 
        if (id > 2) {
            price = 3.00;
        }
        return {...value, price} 
    })

    return result 
}
testMap(itemArray);

const testFilter = (array) => {
    
   
    const result = array.filter( ({id}) => {
       
        if(id<=2){
            return {...id}
        }
        
    })
        return result
    // retorne a variável result onde contem os resultados das filtragens
}
testFilter(itemArray);
//console.log(testFilter(itemArray));

const testFind = (array) => {

    const result = array.find( ({id, product}) => {
        
        if(product === 'Leite'){
            return {...id, product}
        }
        // retorne apenas o item onde product === 'Leite'
    })

    return result
   // retorne a variável result onde contem os resultados das buscas

}
//console.log(testFind(itemArray))
testFind(itemArray);

const testReduce = (array) => {

    const totalList = array.reduce((acc, {quantity, price}) => {
        // incremente a variável acc, com o valor de price*quantity
       
            acc += quantity * price
        
            return acc
        // retorne o valor armazenado em "acc" que neste caso é o valor total da compra
    }, 0)
    return totalList
    // retorne o valor de totalList para verificar quanto ficou sua compra
}
//console.log(testReduce(itemArray))
//testReduce(itemArray);

//Desafio 1. Crie um filtro onde o resultado traz apenas os itens que tem o price maior que 3.


const arrayFilter = (array) => {
    
   
    const result = array.filter( ({id, price}) => {
       
        if(price >= 3){
   
            return {...id}
        
        }
        
    })
        return result
    // retorne a variável result onde contem os resultados das filtragens

}
arrayFilter(itemArray);
//console.log(arrayFilter(itemArray));

//Desafio 2. Altere o valor do item leite para 4.

const arrayMap = (array) => {

    const result = array.map((value) => {
        let { product, price} = value
        if (product === 'Leite') {
            price = 4;
        }
        return {...value, price} 
    })

    return result 
}
arrayMap(itemArray);
//console.log(arrayMap(itemArray))
//Desafio 3. Faça o total de todos os itens da section 'Padaria'

const padariaTotal = (array) => {
    
    const padaria = array.filter(({ id, section }) => {
        if (section === 'Padaria') {
            return {...id }
        }
    });
    const total = padaria.reduce((acc, { price, quantity }) => {
        acc += price * quantity
        return acc
    }, 0);

    return total
}
padariaTotal(itemArray);
console.log(padariaTotal(itemArray));