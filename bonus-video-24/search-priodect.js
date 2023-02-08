const products = [
    { name: 'iphone 14 pro mx', price: 10000, id: 1 },
    { name: 'hp laptoP', price: 10000, id: 2 },
    { name: 'mi gc phone', price: 10000, id: 3 },
    { name: 'realm c 12 phone', price: 10000, id: 4 },
    { name: 'assos laptop', price: 10000, id: 5 },
    { name: 'semponey 1200 phone', price: 10000, id: 6 },
    { name: 'dell Laptop', price: 10000, id: 7 },
    { name: 'hed phone', price: 10000, id: 8 },
];

function searchProduct(products, search) {
    let newProduct = [];
    for (const product of products) {
        let name = product.name
        // console.log(name.includes(search));
        if (name.toLowerCase().includes(search.toLowerCase())) {
            newProduct.push(product)
        }
    }
    return newProduct;
}
// let search = 'e';
// let searchItem = searchProduct(products, search);
// // console.log(searchItem);



let maStor = [
    { name: 'color pen', price: 10 },
    { name: 'matador pen', price: 5 },
    { name: 'gel pen', price: 15 },
    { name: 'Bangla book ', price: 30 },
    { name: 'arbi book ', price: 50 },
    { name: 'english book ', price: 70 },
    { name: 'somas book ', price: 35 },
    { name: 'mi mobile phone', price: 10000 },
    { name: 'appo moBile phone', price: 16000 },
    { name: 'xime mobilE phone', price: 10400 },
    { name: 'iphone Mobile phone', price: 700000 },

];

function searchItem(products, search) {
    let item = [];
    for (const product of products) {
        if (product.name.toLowerCase().indexOf(search.toLowerCase()) != -1) {
            item.push(product)
        }
    }
    return item
}

let search_1 = 'mobIle';
let result = searchItem(maStor, search_1);
console.log(result)


