import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ItemDetailContainer, ItemListContainer, NavBar } from "./components";

export const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<ItemListContainer greeting={"Bienvenidos a mi Tienda"} />}
        />
        <Route
          path="/category/:category"
          element={<ItemListContainer greeting={"Bienvenidos a mi Tienda"} />}
        />
        <Route path="/Item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
};
