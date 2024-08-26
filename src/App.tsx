import "./App.css";
import { Link, createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./routes/About";
import Posts from "./routes/Posts";

function App() {
  const Router = createBrowserRouter([
    {
      path: "/",
      Component: () => (
        <>
          <div>
            <p>NAME</p>
            <Link to="/about" state={{ name: "about" }}>
              About
            </Link>
            <Link to="/post/:id">Posts</Link>
            <Link to="/name">Name</Link>
          </div>
          <h1>Vite + React</h1>
          <div className="card">Body</div>
        </>
      ),
    },
    {
      path: "/about",
      Component: About,
    },
    {
      path: "/post/:id",
      Component: Posts,
    },
    // {
    //   path: "/name",
    // },
  ]);
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route
    //       path="/"
    //       Component={}

    //     ></Route>
    //     <Route path="/about" Component={} />
    //     <Route path="/post/:id" Component={Posts} />
    //   </Routes>
    // </BrowserRouter>
    <RouterProvider router={Router} />
  );
}

export default App;
