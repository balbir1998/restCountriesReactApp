const { createRoot } = require("react-dom/client");
import { createBrowserRouter, RouterProvider } from 'react-router';
import App from './App';
import Main from './components/Main';
import CountryDetails from './components/CountryDetails';
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Main />
            },
            {
                path: "/:country",
                element: <CountryDetails />
            },
        ]
    }
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);