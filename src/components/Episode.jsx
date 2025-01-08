import { useEffect, useState } from 'react'
import api from '../services/api'
import { Navigate } from './Navigate';
import { Link } from 'react-router';

function Episode() {

  const [episodeList, setEpisodesList] = useState([])
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);

  const getEpisode = async () => {
      api
        .get(`/episode/?page=${page}`)
        .then((response) => {
          const data = response.data;
          setEpisodesList(data.results);
          setLoading(false);
          setPages(data.info.pages);
        })
        .catch((error) => {
          console.error(error);
        });
    };

  useEffect(() => {
    getEpisode();
  }, [page])

  return (
    <>
      <div className="container with-title is-centered">
        <h1 className='d-flex justify-content-center'>Episodes</h1>
        <div className="row">
          {loading ? (
            <div className="text-center">
              <p className="title press-start-2p-regular">Loading...</p>
            </div>
          ) : (
            <div className="nes-table-responsive" style={{ color: "#171717" }}>
              <Navigate page={page} setPage={setPage} pages={pages} />
                <table className="nes-table is-bordered is-centered col-md-10 mx-auto">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Season/Episode</th>
                      <th>Air Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {episodeList.map((episode) => (
                    <tr key={episode.id}>
                      <td>{episode.name}</td>
                      <td>{episode.episode}</td>
                      <td>{episode.air_date}</td>
                    </tr>
                    ))}
                </tbody>
              </table>
              <Navigate page={page} setPage={setPage} pages={pages} />
            </div>
          )}
          <Link to="/" className="nes-btn p-regular">volver</Link>
        </div>
      </div>
    </>
  );
}

export default Episode;