const getProducts = async ()=>{
    const urlParams = new URLSearchParams(window.location.search);
    const categoreName = urlParams.get('category')

    const {data} = await axios.get(`https://fakestoreapi.com/products/category/${categoreName}`);
    return data;
}

const displayProducts = async()=> {
    const products = await getProducts();
    const data = products.map(ele => {
        return `
            <div class="product">
            <h2> ${ele.id}</h2>
            <img src ="${ele.image}">
            <h2> ${ele.title}</h2>
            <a href="./productdetails.html?id= ${ele.id}"> details </a>
            </div>
        `
    })
    console.log(data);
    document.querySelector(".products").innerHTML = data;
}
displayProducts();