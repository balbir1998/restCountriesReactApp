import { useRouteError } from "react-router"

const ErrorPage = () => {
    const err = useRouteError();

    return (
        <h1 className="text-center text-3xl font-bold leading-25">
            Error {err.status}! {err.statusText}
        </h1>
    )
}

export default ErrorPage