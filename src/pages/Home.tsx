import logo from "../assets/logo.png";

function Home() {
  return (
    <div className="p-8 mt-14">
      <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Image Section */}
        <div className="w-full md:w-1/2 h-80 md:h-[500px]">
          <img
            src={logo}
            alt="Logo Brand"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl text-green-800 font-extrabold mb-6 text-gray-800 leading-tight">
            Morina Gayo Terra
          </h1>
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            Rasakan kehangatan dalam setiap tegukan. <br />
            <span className="text-green-700 font-semibold">Morina </span>
            membawa Anda dalam perjalanan rasa — dari dataran tinggi Gayo yang
            alami hingga ke secangkir kopi terbaik di tangan Anda.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Kami percaya bahwa secangkir kopi bukan hanya minuman, <br />
            melainkan sebuah{" "}
            <span className="italic text-green-700">pengalaman hidup</span> yang
            menghubungkan hati dan tradisi.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
