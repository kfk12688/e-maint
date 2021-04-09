import reducer from "./reducer";
import { configureStore } from "@reduxjs/toolkit";
import api from "./middleware/api";

export default function () {
  return configureStore({ reducer, middleware: [api] });
}
