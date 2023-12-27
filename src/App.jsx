import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TodoList from "./pages/TodoList";
import Todo from "./pages/Todo";
import ScrollContextProvider from "./contexts/ScrollContext";

function App() {
  return (
    <main className="container max-w-5xl mx-auto flex min-h-screen justify-center items-center py-20">
      <ScrollContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/todos" />}></Route>
            <Route path="/todos" lazy element={<TodoList />}></Route>
            <Route path="/todo/:id" element={<Todo />}></Route>
          </Routes>
        </BrowserRouter>
      </ScrollContextProvider>
    </main>
  );
}

export default App;
