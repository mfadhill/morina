import logo from "../assets/logo.png";

const About = () => {


  return (
    <div className="w-full h-screen overflow-hidden bg-white text-gray-100">
      <div className="flex flex-col lg:flex-row h-full">
        <div className="lg:w-1/2 w-full flex justify-center items-center p-4 bg-gray-800">
          <div className="sticky top-20">
            <img
              className="rounded-full object-cover lg:w-[25rem] lg:h-[25rem] w-[12rem] h-[12rem] outline outline-green-500 outline-offset-[.5em]"
              src={logo}
              alt="About us"
            />
          </div>
        </div>

        {/* Kanan: Konten Scrollable */}
        <div className="lg:w-1/2 w-full overflow-y-scroll p-6 lg:p-10 space-y-6">
          <h2 className="text-4xl text-green-400 font-bold text-center">
            About Us
          </h2>
          <p className="text-2xl text-center font-semibold text-black">
            We are Morina Gayo Terra
          </p>
          <p className="text-lg text-justify text-black">
            Morina Gayo Terra adalah lebih dari sekadar nama — ini adalah
            semangat yang lahir dari tanah tinggi Gayo yang subur dan kaya
            tradisi. Kami hadir untuk membawa hasil bumi terbaik Gayo ke pasar
            global, mulai dari kopi unggulan hingga produk alam lainnya yang
            mengakar pada nilai budaya dan keberlanjutan.
          </p>
          <p className="text-lg text-justify text-black">
            Dengan semangat gotong royong, kami bekerja sama dengan petani
            lokal, mengangkat potensi desa, dan menjaga kelestarian alam.
            Setiap produk yang kami hasilkan bukan hanya soal kualitas, tapi
            juga cerita: tentang tanah, tangan-tangan terampil, dan harapan
            akan masa depan yang lebih baik.
          </p>
          <p className="text-lg text-justify text-black">
            Filosofi kami sederhana: jika Anda bisa merasakannya, Anda akan
            mengerti. Itulah kenapa kami menyajikan tidak hanya rasa, tapi juga
            pengalaman — dari aroma yang mengingatkan pada hutan Gayo yang
            sejuk, hingga rasa yang membangkitkan semangat dan kenangan.
          </p>
          <p className="text-lg text-justify text-black">
            Kami juga terus berinovasi dalam proses produksi dan distribusi
            agar bisa memberikan yang terbaik bagi pelanggan, tanpa melupakan
            akar budaya dan kearifan lokal. Dengan mencintai tanah kami, kami
            percaya bahwa dunia pun akan ikut mencintainya.
          </p>

          {/* Spacer for scroll */}
          <div className="h-20"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
