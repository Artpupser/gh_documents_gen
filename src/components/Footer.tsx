import { FaGithub } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bottom-0 left-0 right-0 border-t bg-white px-6 py-3 flex items-center justify-center text-sm">
      <p className="text-gray-600">
        Copyright {year} Artpupser
      </p>

      <a
        href="https://github.com"
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 hover:bg-gray-100 px-3 py-1 rounded-md transition"
      >
        <FaGithub className="w-5 h-5" />
        <span>GitHub</span>
      </a>
    </footer>
  );
};

export default Footer;
