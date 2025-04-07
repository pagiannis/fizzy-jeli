import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <h1 className="text-4xl font-bold text-center mt-10">Oops</h1>
      <p className="text-center mt-4">
        {isRouteErrorResponse(error)
          ? "This page does not exist."
          : "An unexpected error occured."}{" "}
      </p>
    </>
  );
};

export default ErrorPage;
