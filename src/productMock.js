const products = [
  {
    id: "1",
    name: "Jordan 1",
    price: "1000",
    description: "Zapatilla",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY_rc-BhcffgZO9AylaLTr7y1V2759vXEixqo72NjIMe3nSCyIrqXdYAYFzWiTUBXvXms&usqp=CAU",
    category: "Nike",
    stock: 8,
  },
  {
    id: "2",
    name: "Jordan 2",
    price: "1000",
    description: "Zapatilla",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDhyUpfAg9EkQYvNCga1Mz09yW3z359yezp7myB3puRHaes2ITZ94AkYGjZ-b63kpj0QM&usqp=CAU",
    category: "Nike",
    stock: 8,
  },
  {
    id: "3",
    name: "Jordan 3",
    price: "1000",
    description: "Zapatilla",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRad2KgXbeTnKi-gAx34ri_aDbblbspTG5UHuXfcrRNEWp8m5-6V50Qv7BVEWdcwcXlxpc&usqp=CAU",
    category: "Nike",
    stock: 10,
  },
  {
    id: "4",
    name: "Adidas 1",
    price: "1000",
    description: "Zapatilla",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXZVVpssdzjiDDzloFCOdIHX1VFGhkh8N5DICRw8vl8AjAEHYL3Rb6tVflBhc5y4atYLY&usqp=CAU",
    category: "Adidas",
    stock: 10,
  },
  {
    id: "5",
    name: "Adidas 2",
    price: "1000",
    description: "Zapatilla",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgVg7bYvl0EkCWeh1EhluCYBbXkmy4j7z7MVWyjrt2goFSpESOpfmrZIr2KBlUl1XIjws&usqp=CAU",
    category: "Adidas",
    stock: 10,
  },
  {
    id: "6",
    name: "Adidas 3",
    price: "1000",
    description: "Zapatilla",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5BHcNE3gddAeuTrduoW-56j9nWG7QuvUIMWuGkyRl73ciIkz2EjSWHw1fZN9FdyTJsNI&usqp=CAU",
    category: "Adidas",
    stock: 10,
  },
  {
    id: "7",
    name: "Puma 1",
    price: "1000",
    description: "Zapatilla",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHi2cfcMhnlJ2V-y98ABVRQHKf2bfJjJnDLZ7x5hAcMjYX5eUrOtdq7qMWtCylWfpQAZI&usqp=CAU",
    category: "Puma",
    stock: 10,
  },
  {
    id: "8",
    name: "Puma 2",
    price: "1000",
    description: "Zapatilla",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS898hz22VfUazRrD03yWX4Ac57uWl-1n6ebT7M44OBk2YPG3F-lY3X6Lgr6hSnU72d8D8&usqp=CAU",
    category: "Puma",
    stock: 10,
  },
  {
    id: "9",
    name: "Puma 3",
    price: "1000",
    description: "Zapatilla",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSraUS_AuFtsn0-sje55-OQ70enWri-Rjz6XSaB3iYhcFp1KvWJ95JrqXzXGcA__92MaZY&usqp=CAU",
    category: "Puma",
    stock: 10,
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      // Verificamos si products tiene elementos en el array
      setTimeout(() => {
        resolve(products);
      }, 3000);
    } else {
      reject("No hay productos");
    }
  });
};

// export const FilterProductById = () => {}
export const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    const product = products.find((product) => product.id === id);
    setTimeout(() => {
      if (!product) {
        reject("No se encontró el producto solicitado");
      } else {
        resolve(product);
      }
    }, 3000);
  });
};
