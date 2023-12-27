import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Todo() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then((res) => res.json())
    .then((data) => {
      setLoading(false);
      setData(data);
    })
    .catch((err) => setError(err));

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Ocurrio un error...</h2>;

  return (
    <div className="flex flex-col items-center justify-center">
      {data ? (
        <div className="px-4 py-2 bg-zinc-700 relative flex justify-center flex-col items-center">
          <div className="flex gap-x-2 items-center">
            <button
              onClick={() => navigate(-1)}
              className="text-2xl p-2 bg-zinc-500"
            >
              {"<"}
            </button>
            <p className="text-2xl text-zinc-400 text-center">
              TODO id {data.id} publicado por usuario con id {data.userId}
            </p>
          </div>
          <p>{data.title}</p>
        </div>
      ) : (
        <h1>No hay datos</h1>
      )}
    </div>
  );
}

export default Todo;
