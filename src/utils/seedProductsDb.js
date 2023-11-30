import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/fireBaseConfig";

const products = [
  {
    name: "Jordan 1",
    price: "1000",
    description: "Zapatilla",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY_rc-BhcffgZO9AylaLTr7y1V2759vXEixqo72NjIMe3nSCyIrqXdYAYFzWiTUBXvXms&usqp=CAU",
    category: "Nike",

    stock: 8,
  },
  {
    name: "Jordan 2",
    price: "1000",
    description: "Zapatilla",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDhyUpfAg9EkQYvNCga1Mz09yW3z359yezp7myB3puRHaes2ITZ94AkYGjZ-b63kpj0QM&usqp=CAU",
    category: "Nike",
    stock: 8,
  },
  {
    name: "Jordan 3",
    price: "1000",
    description: "Zapatilla",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRad2KgXbeTnKi-gAx34ri_aDbblbspTG5UHuXfcrRNEWp8m5-6V50Qv7BVEWdcwcXlxpc&usqp=CAU",
    category: "Nike",
    stock: 10,
  },
  {
    name: "Adidas 1",
    price: "1000",
    description: "Zapatilla",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXZVVpssdzjiDDzloFCOdIHX1VFGhkh8N5DICRw8vl8AjAEHYL3Rb6tVflBhc5y4atYLY&usqp=CAU",
    category: "Adidas",
    stock: 10,
  },
  {
    name: "Adidas 2",
    price: "1000",
    description: "Zapatilla",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgVg7bYvl0EkCWeh1EhluCYBbXkmy4j7z7MVWyjrt2goFSpESOpfmrZIr2KBlUl1XIjws&usqp=CAU",
    category: "Adidas",
    stock: 10,
  },
  {
    name: "Adidas 3",
    price: "1000",
    description: "Zapatilla",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5BHcNE3gddAeuTrduoW-56j9nWG7QuvUIMWuGkyRl73ciIkz2EjSWHw1fZN9FdyTJsNI&usqp=CAU",
    category: "Adidas",
    stock: 10,
  },
  {
    name: "Puma 1",
    price: "1000",
    description: "Zapatilla",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHi2cfcMhnlJ2V-y98ABVRQHKf2bfJjJnDLZ7x5hAcMjYX5eUrOtdq7qMWtCylWfpQAZI&usqp=CAU",
    category: "Puma",
    stock: 10,
  },
  {
    name: "Puma 2",
    price: "1000",
    description: "Zapatilla",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS898hz22VfUazRrD03yWX4Ac57uWl-1n6ebT7M44OBk2YPG3F-lY3X6Lgr6hSnU72d8D8&usqp=CAU",
    category: "Puma",
    stock: 15,
  },
  {
    name: "Puma 3",
    price: "1000",
    description: "Zapatilla",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSraUS_AuFtsn0-sje55-OQ70enWri-Rjz6XSaB3iYhcFp1KvWJ95JrqXzXGcA__92MaZY&usqp=CAU",
    category: "Puma",
    stock: 4,
  },

  {
    name: "Camiseta RM",
    price: "10.000",
    description: "Camiseta de Futbol",
    img: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2697244087014671a47ae11279959ffa_9366/Camiseta_Local_Real_Madrid_23-24_Blanco_HR3796_HM1.jpg",
    category: "Remeras",
    stock: 8,
  },
  {
    name: "Camiseta FCB",
    price: "10.000",
    description: "Camiseta de Futbol",
    img: "https://i8.amplience.net/i/jpl/jd_647998_a?qlt=92&w=600&h=765&v=1&fmt=auto",
    category: "Remeras",
    stock: 8,
  },
  {
    name: "Camiseta Bayer Munich",
    price: "10.000",
    description: "Camiseta de Futbol",
    img: "https://d2r9epyceweg5n.cloudfront.net/stores/001/083/320/products/camiseta_primera_equipacion_fc_bayern_rojo_dw7410_21_model1-4a08a8f16e59d6505c15754871590794-640-0.jpg",
    category: "Remeras",
    stock: 10,
  },
  {
    name: "Mochila Adidas",
    price: "5000",
    description: "Mochila",
    img: "https://i.pinimg.com/736x/db/41/ff/db41ff9044016872f1dcead441ea650e.jpg",
    category: "Mochilas",
    stock: 10,
  },
  {
    name: "Mochila Adidas",
    price: "5000",
    description: "Zapatilla",
    img: "https://http2.mlstatic.com/D_NQ_NP_683401-MLA52105089804_102022-O.webp",
    category: "Mochilas",
    stock: 10,
  },
  {
    name: "Mochila Nike",
    price: "5000",
    description: "Mochila",
    img: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/bdacef69-4a43-443f-aa12-8ab42585c1c3/classic-mochila-nino-a-lgXB3l.png",
    category: "Mochilas",
    stock: 10,
  },
  {
    name: "Pelota Mundial",
    price: "3000",
    description: "Pelota",
    img: "https://www.digitalsport.com.ar/files/products/624b1bc16431e-565339-1200x1200.jpg",
    category: "Pelotas",
    stock: 10,
  },
  {
    name: "Pelota PL",
    price: "3000",
    description: "Pelota",
    img: "https://acdn.mitiendanube.com/stores/001/220/451/products/612678-mla44020876142_112020-f-7fc581519a6d7d8efd16082521818967-640-0.jpg",
    category: "Pelotas",
    stock: 15,
  },
  {
    name: "Pelota Champions",
    price: "3000",
    description: "Pelota",
    img: "https://http2.mlstatic.com/D_NQ_NP_896699-MLA49562373094_042022-O.webp",
    category: "Pelotas",
    stock: 10,
  },
];

export const seedProductsDb = () => {
  products.forEach((product) => {
    addDoc(collection(db, "products"), product);
  });
};
