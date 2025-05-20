const Footer = () => {
  return (
    <footer className="relative bg-white pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold text-gray-800">
              Tetap terhubung dengan kami!
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-gray-600">
              Temukan kami di sosial media, kami akan membalas dalam 1–2 hari
              kerja.
            </h5>
            <div className="mt-6 flex">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/moniragayoterra/"
                target="_blank"
                rel="noreferrer"
                className="bg-pink-500 text-white shadow-lg h-10 w-10 flex items-center justify-center rounded-full mr-2"
              >
                <i className="fab fa-instagram"></i>
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noreferrer"
                className="bg-black text-white shadow-lg h-10 w-10 flex items-center justify-center rounded-full mr-2"
              >
                <i className="fab fa-tiktok"></i>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="bg-blue-600 text-white shadow-lg h-10 w-10 flex items-center justify-center rounded-full mr-2"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>

          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-gray-500 text-sm font-semibold mb-2">
                  Navigasi
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Tentang Kami
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Produk
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Kontak
                    </a>
                  </li>
                </ul>
              </div>

              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-gray-500 text-sm font-semibold mb-2">
                  Informasi
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Kebijakan Privasi
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      Syarat & Ketentuan
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm"
                      href="#"
                    >
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-300" />

        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-500 font-semibold py-1">
              &copy; {new Date().getFullYear()}{" "}
              <span className="text-gray-800 font-semibold">
                Monira Gayo Terra
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
