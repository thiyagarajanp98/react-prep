import Details from './components/Details';
import Headers from './components/Header';
import Player from './components/Player';
import Home from './components/home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "details/:type/:id",
    element: <Details />,
  }
]);

function App() {

  // JSX for the header
  return (
    <>
      <Headers />
      <div style={{ diaplay: 'flex' }}>
        <div style={{ height:'90vh', marginTop: '69px', width: '100%' }}>
          <RouterProvider router={router} />
        </div>
        <Player />
      </div>


    </>
  );
}
export default App;
