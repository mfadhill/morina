import logo from "../assets/logo.png";

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300 px-8 py-4">
      <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-2xl overflow-hidden w-full">
        {/* Image Section */}
        <div className="w-full md:w-1/2 h-64 md:h-[550px]">
          <img
            src={logo}
            alt="Logo Brand"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 p-6 md:p-12">
          <h1 className="text-4xl md:text-5xl text-green-800 font-extrabold mb-4 leading-tight">
            Morina Gayo Terra
          </h1>
          <p className="text-green-700 text-xl font-medium italic mb-6">
            “Dari Pegunungan, Untuk Dunia”
          </p>

          <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
            <p>
              <strong>Morina Gayo Terra</strong> adalah brand yang menghadirkan
              kekayaan alam dari dataran tinggi Gayo ke dunia — mulai dari kopi,
              alpukat, hingga hasil bumi lainnya. Nama kami melambangkan{" "}
              <em>cahaya</em> (<strong>Morina</strong>),{" "}
              <strong>pegunungan</strong> (Gayo), dan <strong>bumi</strong>{" "}
              (Terra).
            </p>

            <p>
              Kami bekerja bersama petani lokal untuk menghadirkan produk alami
              berkualitas tinggi yang ditanam secara berkelanjutan dan diproses
              dengan penuh dedikasi.
            </p>

            <p>
              <strong>Morina Gayo Terra</strong> bukan hanya tentang produk,
              tapi tentang misi: menyinari dunia dengan hasil terbaik dari bumi
              Indonesia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
