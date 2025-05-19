import kopiImage from "../assets/kopi.jpg"
const About = () => {
  return (
    <div className="w-full min-h-screen bg-white text-gray-800 p-10">
       <div className="flex flex-col lg:flex-row h-full">
        {/* Kiri: Gambar */}
        <div className="lg:w-1/2 hidden lg:flex">
          <img
            src={kopiImage}
            alt="Kopi Gayo"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Kanan: Konten Scrollable */}
        <div className="lg:w-1/2 w-full overflow-y-scroll p-6 lg:p-10 space-y-6 bg-gray-200">
          <h2 className="text-4xl text-green-700 font-bold text-center">
            About Us
          </h2>
          <p className="text-2xl text-center font-semibold">
            Cerita di Balik Morina Gayo Terra
          </p>

          <p className="text-lg text-justify">
            Morina Gayo Terra lahir dari kecintaan kami pada alam dan keinginan
            untuk membawa hasil bumi terbaik Indonesia ke dunia. Nama kami
            memiliki arti:
            <strong> Morina</strong> berarti cahaya, <strong>Gayo</strong>{" "}
            mewakili pegunungan subur Aceh, dan <strong>Terra</strong> adalah
            bumi — sumber dari segala kehidupan.
          </p>

          <p className="text-lg text-justify">
            Kami memulai dari sebuah tekad sederhana: bagaimana menjadikan
            kekayaan alam Gayo tidak hanya dikenal karena kopinya, tetapi juga
            sebagai sumber dari banyak hasil bumi berkualitas seperti alpukat,
            rempah, dan produk alami lainnya. Morina adalah sinar harapan bagi
            petani lokal dan jembatan menuju pasar global.
          </p>

          <h3 className="text-2xl font-bold text-green-700">Visi</h3>
          <p className="text-lg text-justify">
            Menjadi brand alam Indonesia yang mendunia, dengan menjunjung tinggi
            kualitas, keberlanjutan, dan warisan lokal.
          </p>

          <h3 className="text-2xl font-bold text-green-700">Misi</h3>
          <ul className="list-disc pl-5 text-lg space-y-1">
            <li>
              Menghadirkan hasil bumi Gayo secara berkualitas dan berkelanjutan.
            </li>
            <li>
              Meningkatkan kesejahteraan petani lokal melalui kemitraan jangka
              panjang.
            </li>
            <li>
              Memperkenalkan rasa dan nilai dari Indonesia ke pasar dunia.
            </li>
          </ul>

          <h3 className="text-2xl font-bold text-green-700">
            Nilai-Nilai Brand
          </h3>
          <ul className="list-disc pl-5 text-lg space-y-1">
            <li>
              <strong>Keaslian:</strong> Produk alami, tanpa manipulasi.
            </li>
            <li>
              <strong>Kualitas:</strong> Hanya yang terbaik dari tanah yang
              subur.
            </li>
            <li>
              <strong>Transparansi:</strong> Jujur dalam proses dan cerita kami.
            </li>
            <li>
              <strong>Keberlanjutan:</strong> Menjaga bumi, memuliakan petani.
            </li>
          </ul>

          {/* Spacer for scroll */}
          <div className="h-20"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
