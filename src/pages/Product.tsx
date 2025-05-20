import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import img7 from "../assets/7.jpg";

export const Product = () => {
  return (
    <div>
      {/* SECTION PRODUK */}
      <section className="bg-gray-200">
        <div className="py-6 px-4 mx-auto max-w-screen-xl sm:py-10 lg:px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6 uppercase tracking-wide text-green-800">
            Produk Unggulan Morina Gayo Terra
          </h2>
          <p className="text-center mb-10 text-xl text-bold">
            Kami menghadirkan hasil alam terbaik dari dataran tinggi Gayo dan
            sekitarnya.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
            {/* Buah Kopi */}
            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 flex flex-col">
              <a
                href="#"
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <img
                  src={img7}
                  alt="Buah Kopi"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 to-gray-900/5"></div>
                <h3 className="z-10 text-3xl font-semibold text-white absolute top-0 left-0 p-4">
                  Buah Kopi Gayo
                </h3>
              </a>
            </div>

            {/* Alpukat & Biji Kopi */}
            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
              <a
                href="#"
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4"
              >
                <img
                  src={img5}
                  alt="Alpukat"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 to-gray-900/5"></div>
                <h3 className="z-10 text-3xl font-semibold text-white absolute top-0 left-0 p-4">
                  Alpukat Organik
                </h3>
              </a>
              <div className="grid gap-4 grid-cols-2">
                <a
                  href="#"
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <img
                    src={img3}
                    alt="Biji Kopi"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 to-gray-900/5"></div>
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4">
                    Biji Kopi Sangrai
                  </h3>
                </a>
                <a
                  href="#"
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <img
                    src={img4}
                    alt="Kopi Merah"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 to-gray-900/5"></div>
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4">
                    Kopi Merah Pilihan
                  </h3>
                </a>
              </div>
            </div>

            {/* Produk Tambahan */}
            <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 flex flex-col">
              <a
                href="#"
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <img
                  src={img6}
                  alt="Kopi Bubuk"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 to-gray-900/5"></div>
                <h3 className="z-10 text-3xl font-semibold text-white absolute top-0 left-0 p-4">
                  Kopi Pilihan
                </h3>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION IMAGE CARDS */}
      <section className="flex flex-col gap-10 w-full justify-center mt-16 bg-white">
        <h2 className="text-2xl text-center font-sans uppercase font-bold text-gray-700">
          Galeri Produk
        </h2>
        <p className="text-center text-gray-600">
          Beberapa momen dan hasil alam terbaik dari Morina Gayo Terra.
        </p>
        <section className="flex flex-wrap gap-10 w-full justify-center items-center">
          {[1, 2, 3].map((_, index) => {
            const images = [
              "https://cdn.pixabay.com/photo/2020/02/23/15/09/woman-4873600_960_720.jpg",
              "https://cdn.pixabay.com/photo/2020/09/20/16/27/model-5587623_960_720.jpg",
              "https://cdn.pixabay.com/photo/2019/12/10/13/31/woman-4685862_960_720.jpg",
            ];
            return (
              <div key={index} className="relative group w-80">
                <span className="flex flex-col justify-center items-center">
                  <img
                    src={images[index]}
                    alt={`Galeri ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <h1 className="-mt-10 text-lg font-bold bg-black text-white w-full py-2 text-center">
                    GALLERY {index + 1}
                  </h1>
                </span>
                <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 text-center font-sans">
                  <h2 className="text-xl font-bold text-gray-100">
                    Produk Natural
                  </h2>
                  <p className="text-gray-50 text-sm">
                    Kami berkomitmen menghadirkan hasil alam yang alami, segar,
                    dan berkualitas tinggi langsung dari petani lokal.
                  </p>
                </div>
              </div>
            );
          })}
        </section>
      </section>
    </div>
  );
};
