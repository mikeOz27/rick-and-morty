import axios from "axios";

const api = axios.create({
    baseURL: "https://rickandmortyapi.com/api",
});

export async function getCharacters(page, filter, selectStatus, setCharacters, setPages, setLoading) {
    return api
        .get(`/character/?name=${filter}&status=${selectStatus}&page=${page}`)
        .then((response) => {
            const data = response.data;
            setCharacters(data.results);
            setPages(data.info.pages);
            setLoading(false);
        })
        .catch((error) => {
            console.error(error);
        });
}

export default api