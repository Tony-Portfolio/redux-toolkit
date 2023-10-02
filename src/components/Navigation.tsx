import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const [theme, setTheme] = React.useState("dark");
    React.useEffect(() => {
        if (theme == "dark") {
            document.documentElement.classList.add("dark");
        }
        else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);
    const toggleMode = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    }
    const [query, setQuery] = React.useState("");
    return (
        <nav className="dark:bg-black/40 dark:text-white p-4 fixed backdrop-blur-sm top-0 left-0 w-full z-20 bg-white text-black">
            <div className="md:w-10/12 w-11/12 mx-auto flex items-center gap-4">
                {/* <img src="/icon.png" alt="" className="w-[100px] h-[60px] object-cover" /> */}
                <ul className="flex space-x-4 text-lg">
                    <li>
                        <Link to="/" className="hover:text-gray-300">Home</Link>
                    </li>
                    {/* <li>
                        <a href="#" className="hover:text-gray-300">About</a>
                    </li> */}
                    {/* <li className="relative group">
                        <a href="#" className="hover:text-gray-300 flex items-center gap-1">Anime
                            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </a>
                        <div className="absolute bg-black shadow-md p-4 rounded border border-gray-800 hidden group-hover:block text-base">
                            <p>Popular</p>
                            <p>Newest</p>
                        </div>
                    </li> */}
                    <li className="relative group">
                        <p className="hover:text-gray-300 flex items-center gap-1 cursor-pointer">Movies
                            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </p>
                        <div className="absolute bg-black border p-4 rounded border-gray-600 shadow-md hidden group-hover:flex flex-col gap-4 w-32 text-base">
                            <Link to="/movie/popular">Popular</Link>
                            <Link to="/movie/top_rated">Top Rated</Link>
                        </div>
                    </li>
                    {/* <li>
                        <a href="#" className="hover:text-gray-300">Credits</a>
                    </li> */}
                    <div className="hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6" onClick={toggleMode}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                        </svg>
                    </div>
                </ul>
                <div className="relative flex items-center ml-4">
                    <form action="" onSubmit={(event: any) => {event.preventDefault();window.location.href = `/movie/search/${query}`}}>
                        <input
                            type="text"
                            placeholder="Search"
                            className="bg-gray-800 text-white px-4 py-2 rounded-full border border-gray-600 pl-10 focus:outline-none focus:ring focus:border-blue-300 dark:bg-black dark:text-white" onKeyUp={(query: any) => { setQuery(query.target.value) }}
                        />
                    </form>
                    <svg onClick={() => { window.location.href = `/movie/search/${query}` }}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-300"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                    </svg>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
