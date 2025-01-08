import Porptypes from "prop-types";
import { useState } from "react";

export function Navigate(props) {
  const { page, setPage, pages, getCharacter, setFilter } = props;
  const [constClass, setConstClass] = useState("is-error");

  function prevPage() {
    console.log("Prev Page");
    setPage(page - 1);
    setConstClass("is-error");
  }
  function nextPage() {
    console.log("Next Page");
    setPage(page + 1);
    setConstClass("is-primary");
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
    setConstClass("is-error");
  }

  return (
    <div>
      <header className="d-flex justify-content-between py-4 align-items-center">
        <button
          className={`nes-btn ${
            page === 1 ? constClass : "is-primary"
          } p-regular`}
          onClick={start}
          disabled={page === 1}
        >
          Inicio
        </button>
        <button
          className={`nes-btn ${
            page === 1 ? constClass : "is-primary"
          } p-regular`}
          onClick={prevPage}
          disabled={page === 1}
        >
          Anterior {page === 1 ? " " : page === pages ? pages - 1 : page}
        </button>
        <button
          className={`nes-btn ${
            page === pages ? constClass : "is-primary"
          } p-regular`}
          onClick={nextPage}
          disabled={page === pages}
        >
          Siguiente {page === pages ? " " : page + 1}
        </button>
        <button
          className={`nes-btn ${
            page === pages ? constClass : "is-primary"
          } p-regular`}
          onClick={end}
          disabled={page === pages}
        >
          Fin {pages === page ? " " : pages}
        </button>
      </header>
    </div>
  );
}

Navigate.propTypes = {
  page: Porptypes.number,
  setPage: Porptypes.func.isRequired,
  pages: Porptypes.number,
  getCharacter: Porptypes.func,
  setFilter: Porptypes.func,
};
