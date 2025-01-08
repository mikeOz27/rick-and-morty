import axios from "axios";

const api = axios.create({
	baseURL: "https://rickandmortyapi.com/api",
});

//FUNCION OBTENER PERSONAJES
export async function getCharactersList(page = "", filter = "", selectStatus = "", selectGender = "", setCharacters = "", setPages = "", setLoading = "") {
	await
		api.get(
			`/character/?name=${filter}&status=${selectStatus}&page=${page}&gender=${selectGender}`
		)
			.then((response) => {
				const data = response.data;
				if (data.results.length === 0) {
					// alert("No se encontraron resultados");
					setCharacters([]);
					setLoading(true);
					setPages(0);
				}
				setCharacters(data.results);
				setPages(data.info.pages);
				setLoading(false);
			})
			.catch((error) => {
				console.error('error', error.status);
				if (error.status === 404) {
					// alert("No se encontraron resultados");
					setCharacters([]);
					setLoading(false);
					setPages(0);
				}
			});
};

export default api