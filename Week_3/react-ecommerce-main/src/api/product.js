const GetproductList = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    return data;
};

const GetproductDetails = async (productId) => {
    const res = await fetch(`https://dummyjson.com/products/${productId}`);
    const data = await res.json();
    return data;
};

export { GetproductList, GetproductDetails };