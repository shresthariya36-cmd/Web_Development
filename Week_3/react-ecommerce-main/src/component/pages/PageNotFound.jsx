import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white overflow-hidden">

            {/* 🌌 Background Glow */}
            <div className="absolute w-[500px] h-[500px] bg-purple-600/30 blur-3xl rounded-full top-[-100px] left-[-100px] animate-pulse"></div>
            <div className="absolute w-[400px] h-[400px] bg-pink-600/20 blur-3xl rounded-full bottom-[-100px] right-[-100px] animate-pulse"></div>

            {/* 💎 Card */}
            <div className="relative text-center max-w-lg p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(168,85,247,0.3)]">

                {/* 🔥 404 */}
                <h1 className="text-[120px] font-extrabold bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-lg">
                    404
                </h1>

                {/* ✨ Text */}
                <h2 className="text-3xl font-bold mt-2 tracking-wide">
                    Lost in Space 🚀
                </h2>
                <p className="text-gray-400 mt-3 text-sm">
                    Oops! Looks like the page doesn't exist or it has been moved
                </p>

                {/* 🚀 Buttons */}
                <div className="flex justify-center gap-4 mt-8 flex-wrap">

                    <Link
                        to="/"
                        className="px-7 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/40"
                    >
                        🏠 Go Home
                    </Link>

                    <Link
                        to="/about"
                        className="px-7 py-3 rounded-xl border border-white/20 hover:bg-white/10 hover:scale-105 transition-all duration-300"
                    >
                        🔍 Explore
                    </Link>

                </div>

                {/* 🌈 Floating Dots */}
                <div className="mt-8 flex justify-center gap-3">
                    <span className="w-3 h-3 bg-purple-500 rounded-full animate-bounce"></span>
                    <span className="w-3 h-3 bg-pink-500 rounded-full animate-bounce delay-150"></span>
                    <span className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce delay-300"></span>
                </div>

            </div>
        </div>
    );
};

export default PageNotFound;