 const getCategores = async() => {
    const {data} =  await axios.get(`https://fakestoreapi.com/products/categories`);
    return data;
    
    
};

const displayCategores =async () => {
    const result = await getCategores();
    const categore =  result.map(ele =>{
        return `
            <div class = 'catigore'>
            <h2> ${ele} </h2>
            <a href="./products.html?category=${ele}"> detals </a>
            </div>
        `
    }).join('');
    document.querySelector('nav').innerHTML = categore;
}
displayCategores();








