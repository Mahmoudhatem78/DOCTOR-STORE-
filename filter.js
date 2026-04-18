const products = [
 {name:"فيزياء", price:120, category:"edu"},
 {name:"رواية", price:90, category:"novel"}
];

const container = document.getElementById("products");

function show(data){
    container.innerHTML="";
    data.forEach(p=>{
        container.innerHTML += `
        <div class="card">
            <h3>${p.name}</h3>
            <p>${p.price} جنيه</p>
        </div>`;
    });
}

show(products);

document.getElementById("search").addEventListener("input",filter);
document.getElementById("category").addEventListener("change",filter);

function filter(){
    let s = search.value.toLowerCase();
    let c = category.value;

    let result = products.filter(p=>{
        return p.name.toLowerCase().includes(s) &&
        (c==="all" || p.category===c);
    });

    show(result);
}
