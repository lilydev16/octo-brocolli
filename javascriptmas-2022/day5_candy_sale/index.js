import products from "./data.js";

function getSaleItems(data){
    return data.filter(e => e.type === 'sweet').map(e => {
            return {item: e.item, price: e.price}
        })
};

console.log(getSaleItems(products))
