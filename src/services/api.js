import axios from "axios";
import { useState } from "react";

const api = axios.create({
    baseURL: "https://rickandmortyapi.com/api",
});


export default api