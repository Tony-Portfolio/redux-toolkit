const NotFound = () => {

  // Redirect to the index page
  const redirectToIndex = () => {
    window.location.href = "/";
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-white flex items-center justify-center z-[100] flex-col">
      <h1 className="text-4xl">404 - Not Found</h1>
      <p className="my-2">The page you are looking for does not exist.</p>
      <button className="border shadow-md p-2 px-4 rounded hover:shadow-lg relative transition duration-300 ease-in-out" onClick={redirectToIndex}>Go to Home</button>
    </div>
  );
};

export default NotFound;
