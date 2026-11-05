import { FaXTwitter, FaInstagram, FaTelegram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-950 px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
        <div>
          <h2 className="text-2xl font-bold">
            🛒 Prime<span className="text-blue-400">Cart</span>
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Quality products. Simple shopping.
          </p>
        </div>
        <div>
          <p className="font-semibold">Follow Us</p>
          <div className="mt-3 flex flex-wrap justify-center gap-5 text-sm text-gray-300 sm:justify-start">
            <a
              href="#"
              aria-label="X (Twitter)"
              className="transition-all duration-300 hover:text-blue-400 hover:scale-110"
            >
              <FaXTwitter size={22} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="transition hover:text-blue-400"
            >
              <FaInstagram size={22} />
            </a>
            <a
              href="#"
              aria-label="Telegram"
              className="transition hover:text-blue-400"
            >
              <FaTelegram size={22} />
            </a>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-7 max-w-7xl border-t border-gray-800 pt-5 text-center text-xs text-gray-500">
        © 2026 PrimeCart. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
