import { useTranslation } from "react-i18next";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import img7 from "../assets/7.jpg";

export const Product = () => {
  const { t } = useTranslation();

  const galleryImages = [
    "https://cdn.pixabay.com/photo/2020/02/23/15/09/woman-4873600_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/09/20/16/27/model-5587623_960_720.jpg",
    "https://cdn.pixabay.com/photo/2019/12/10/13/31/woman-4685862_960_720.jpg",
  ];

  return (
    <div>
      {/* SECTION PRODUK */}
      <section className="bg-gray-200">
        <div className="py-6 px-4 mx-auto max-w-screen-xl sm:py-10 lg:px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6 uppercase tracking-wide text-green-800">
            {t("produk_unggulan_title")}
          </h2>
          <p className="text-center mb-10 text-xl font-bold">
            {t("produk_unggulan_subtitle")}
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
                  alt={t("buah_kopi")}
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 to-gray-900/5"></div>
                <h3 className="z-10 text-3xl font-semibold text-white absolute top-0 left-0 p-4">
                  {t("buah_kopi")}
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
                  alt={t("alpukat_organik")}
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 to-gray-900/5"></div>
                <h3 className="z-10 text-3xl font-semibold text-white absolute top-0 left-0 p-4">
                  {t("alpukat_organik")}
                </h3>
              </a>
              <div className="grid gap-4 grid-cols-2">
                <a
                  href="#"
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <img
                    src={img3}
                    alt={t("biji_kopi_sangrai")}
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 to-gray-900/5"></div>
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4">
                    {t("biji_kopi_sangrai")}
                  </h3>
                </a>
                <a
                  href="#"
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <img
                    src={img4}
                    alt={t("kopi_merah_pilihan")}
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 to-gray-900/5"></div>
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4">
                    {t("kopi_merah_pilihan")}
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
                  alt={t("kopi_pilihan")}
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 to-gray-900/5"></div>
                <h3 className="z-10 text-3xl font-semibold text-white absolute top-0 left-0 p-4">
                  {t("kopi_pilihan")}
                </h3>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION IMAGE CARDS */}
      <section className="flex flex-col gap-10 w-full justify-center mt-16 bg-white">
        <h2 className="text-2xl text-center font-sans uppercase font-bold text-green-700">
          {t("galeri_produk_title")}
        </h2>
        <p className="text-center text-xl font-bold">
          {t("galeri_produk_subtitle")}
        </p>
        <section className="flex flex-wrap gap-10 w-full justify-center items-center">
          {galleryImages.map((src, index) => (
            <div key={index} className="relative group w-80">
              <span className="flex flex-col justify-center items-center">
                <img
                  src={src}
                  alt={`${t("gallery_label")} ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
                <h1 className="-mt-10 text-lg font-bold bg-black text-white w-full py-2 text-center">
                  {t("gallery_label")} {index + 1}
                </h1>
              </span>
              <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 text-center font-sans">
                <h2 className="text-xl font-bold text-gray-100">
                  {t("produk_natural")}
                </h2>
                <p className="text-gray-50 text-sm">
                  {t("produk_natural_desc")}
                </p>
              </div>
            </div>
          ))}
        </section>
      </section>
    </div>
  );
};
