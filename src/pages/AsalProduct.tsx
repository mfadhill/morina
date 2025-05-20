import kebun3 from "../assets/biji.jpg";
import kebun1 from "../assets/kebun1.jpg";
import kebun2 from "../assets/petani.jpeg";

const AsalProduk = () => {
  const kebunImages = [
    { src: kebun1, alt: "Perkebunan hijau di pegunungan Takengon" },
    { src: kebun2, alt: "Petani Gayo sedang memanen hasil kebun" },
    { src: kebun3, alt: "Biji kopi segar hasil panen Gayo" },
  ];

  return (
    <section className="bg-gray-200 py-12 px-4">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-green-700 mb-6 uppercase">
          Asal Produk Kami
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed text-justify mb-8">
          Produk kami berasal dari jantung dataran tinggi Aceh, tepatnya di
          kawasan <strong>Takengon, Aceh Tengah</strong>, yang dikenal sebagai
          tanah kelahiran <strong>suku Gayo</strong>. Daerah ini dikelilingi
          oleh pegunungan hijau dan hawa sejuk, menjadikannya lingkungan ideal
          untuk menanam berbagai komoditas alami seperti kopi, alpukat, dan
          hasil bumi lainnya.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed text-justify mb-8">
          Kami memproduksi hasil dari kebun milik sendiri serta bekerja sama
          langsung dengan para petani lokal dari masyarakat suku Gayo. Tradisi
          bertani mereka yang telah berlangsung turun-temurun menjamin kualitas
          dan keaslian setiap produk yang kami hasilkan. Dengan pendekatan
          berkelanjutan dan ramah lingkungan, setiap panen adalah hasil dari
          kolaborasi erat antara alam pegunungan dan kearifan lokal.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed text-justify mb-12">
          Alam pegunungan Takengon menghadirkan tanah yang subur dan air yang
          jernih, menjadikan setiap produk kami bukan hanya alami, tetapi juga
          kaya akan cita rasa dan nilai budaya.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Potret Monira
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {kebunImages.map((img, idx) => (
            <div
              key={idx}
              className="rounded-lg overflow-hidden shadow-md group relative"
            >
              <img
                src={img.src}
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
