import { useTranslation } from "react-i18next";
import kebun3 from "../assets/biji.jpg";
import kebun1 from "../assets/kebun1.jpg";
import kebun2 from "../assets/petani.jpeg";

const AsalProduk = () => {
  const { t } = useTranslation();

  const kebunImages = [
    { src: kebun1, alt: t("kebun1_alt") },
    { src: kebun2, alt: t("kebun2_alt") },
    { src: kebun3, alt: t("kebun3_alt") },
  ];

  return (
    <section className="bg-gray-200 py-12 px-4 p-4">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-green-700 mb-6 uppercase">
          {t("asal_produk_title")}
        </h1>
        <p className="text-lg leading-relaxed text-justify mb-8">
          {t("asal_produk_paragraph1")}
        </p>
        <p className="text-lg leading-relaxed text-justify mb-8">
          {t("asal_produk_paragraph2")}
        </p>
        <p className="text-lg leading-relaxed text-justify mb-12">
          {t("asal_produk_paragraph3")}
        </p>

        <h2 className="text-2xl font-semibold text-green-700 mb-4">
          {t("potret_title")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {kebunImages.map((img, idx) => (
            <div
              key={idx}
              className="rounded-lg overflow-hidden shadow-md group relative"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-2 text-sm">
                {img.alt}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AsalProduk;
