import { useTranslation } from "react-i18next";
import logo from "../assets/logo.png";

export default function Home() {
  const { t } = useTranslation();

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
            {t("brand_name")}
          </h1>
          <p className="text-green-700 text-xl font-medium italic mb-6">
            {t("tagline")}
          </p>

          <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
            <p>{t("section1")}</p>
            <p>{t("section2")}</p>
            <p>{t("section3")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
