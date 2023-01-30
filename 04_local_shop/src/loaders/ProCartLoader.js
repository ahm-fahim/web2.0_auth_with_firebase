import { getStoredCart } from "../utilities/fakedb";

export const ProCartLoader = async () => {
    //get products
    const productsData = await fetch("products.json");
    const products = await productsData.json();

    //get cart
    const savedCart = getStoredCart();
    const innitailCart = [];

    for (const id in savedCart) {
        const addedProduct = products.find((product) => product.id === id);
        if (addedProduct) {
            const quantity = savedCart[id];
            addedProduct.quantity = quantity;
            innitailCart.push(addedProduct);
        }
    }

    return { products:products, innitailCart:innitailCart };
};
