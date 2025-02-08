const getDetails = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const {data} = await axios.get(`https://fakestoreapi.com/products/${productId}`);
    return data;
}

const displayDetails = async() =>{
    const productDetails = await getDetails();
    console.log(productDetails);
    const result = await `
        <div class = 'catigore'>
        <h2> ${productDetails.id} </h2>
        <h1> ${productDetails.title} </h1>
        <img src ="${productDetails.image}">
        </div>
    `;
    console.log(result);
    document.querySelector('.products').innerHTML = result;
}
displayDetails();