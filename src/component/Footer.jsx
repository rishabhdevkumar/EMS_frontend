import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 text-center md:text-left">
          <Link
            to="/"
            className="text-3xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent"
          >
            EMS
          </Link>

          <div className="flex flex-wrap justify-center md:justify-end gap-6">
            <Link to="/" className="hover:text-gray-300 transition">
              Home
            </Link>
            <Link to="/about" className="hover:text-gray-300 transition">
              About
            </Link>
            <Link to="/contact" className="hover:text-gray-300 transition">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="border-t border-slate-700 my-6"></div>

        <p className="text-sm text-gray-400 text-center">
          © {new Date().getFullYear()} EMS — This is my test project in React.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
