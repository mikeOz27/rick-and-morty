import Porptypes from "prop-types";

export function NavPages(props) {
  const { page, setPage, pages, getCharacter, setFilter } = props;

  function prevPage() {
    console.log("Prev Page");
    if (page > 1) {
      setPage(page - 1);
    }
  }
  function nextPage() {
    console.log("Next Page");
    setPage(page + 1);
  }

  function end() {
    console.log("End Page");
    setPage(pages);
  }
  function start() {
    console.log("Start Page");
    getCharacter();
    setPage(1);
    setFilter("");
    document.getElementById("default_select").value = "";
  }

  return (
    <div>
      <header className="d-flex justify-content-between py-4 align-items-center">
        <button className="nes-btn is-primary p-regular" onClick={start}>
          Inicio
        </button>
        <button
          className="nes-btn is-primary p-regular"
          onClick={prevPage}
          disabled={page === 1}
        >
          Anterior {page === 1 ? " " : page - 1}
        </button>

        <button
          className="nes-btn is-primary p-regular"
          onClick={nextPage}
          disabled={page === pages}
        >
          Siguiente {page === pages ? " " : page + 1}
        </button>

        <button className="nes-btn is-primary p-regular" onClick={end}>
          Fin {pages}
        </button>
      </header>
    </div>
  );
}

NavPages.propTypes = {
  page: Porptypes.number,
  setPage: Porptypes.func.isRequired,
  pages: Porptypes.number,
  getCharacter: Porptypes.func,
  setFilter: Porptypes.func,
};
