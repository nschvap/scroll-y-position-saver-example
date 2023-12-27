import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ScrollContext } from "../contexts/ScrollContext";

function TodoList() {
  const { scrollYPosition, setScrollYPosition } = useContext(ScrollContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
        const data = await response.json();
        setLoading(false);
        setData(data);
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, [])

  useEffect(() => {
    if (scrollYPosition) {
      window.scroll({ top: scrollYPosition });
    }
  }, [data]);

  const handleClick = (id) => {
    setScrollYPosition(window.scrollY);
    navigate(`/todo/${id}`);
  };

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>Ocurrió un error...</h2>;

  return (
    <div className="grid grid-cols-3 gap-x-4 gap-y-2">
      {data ? (
        data.map((d, i) => (
          <div key={i} className="px-4 py-2 bg-zinc-700">
            <p className="text-sm text-zinc-400">TODO numero {d.id}</p>
            <p>{d.title}</p>
            <div className="ml-auto mt-2">
              <button
                onClick={() => handleClick(d.id)}
                className="px-4 py-1 text-sm bg-red-400 text-red-800 font-semibold"
              >
                Ver
              </button>
            </div>
          </div>
        ))
      ) : (
        <h1>No hay datos</h1>
      )}
    </div>
  );
}

export default TodoList;
