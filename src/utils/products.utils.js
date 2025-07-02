export const fakestoreapi = (product) => {
    return {
        id: product.id,
        title: product.title,
        price: product.price,
        description: product.description,
        category: product.category,
        image: product.image,
        rating: {
        rate: product.rating?.rate || 0,
        count: product.rating?.count || 0
    }
  };
};