import { useTranslation } from "react-i18next";
import kopiImage from "../assets/kopi.jpg";

const About = () => {
  const { t } = useTranslation();

  // Casting hasil t() menjadi array string supaya bisa .map() tanpa error
  const missionPoints = t("mission_points", {
    returnObjects: true,
  }) as string[];
  const valuesPoints = t("values_points", { returnObjects: true }) as string[];

  return (
    <div className="w-full min-h-screen bg-white text-gray-800 p-10">
      <div className="flex flex-col lg:flex-row h-full">
        {/* Kiri: Gambar */}
        <div className="lg:w-1/2 hidden lg:flex">
          <img
            src={kopiImage}
            alt={t("about_title")}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Kanan: Konten Scrollable */}
        <div className="lg:w-1/2 w-full overflow-y-scroll p-6 lg:p-10 space-y-6 bg-gray-200">
          <h2 className="text-4xl text-green-700 font-bold text-center">
            {t("about_title")}
          </h2>
          <p className="text-2xl text-center font-semibold">
            {t("about_subtitle")}
          </p>

          <p className="text-lg text-justify">{t("about_paragraph1")}</p>
          <p className="text-lg text-justify">{t("about_paragraph2")}</p>

          <h3 className="text-2xl font-bold text-green-700">
            {t("vision_title")}
          </h3>
          <p className="text-lg text-justify">{t("vision_content")}</p>

          <h3 className="text-2xl font-bold text-green-700">
            {t("mission_title")}
          </h3>
          <ul className="list-disc pl-5 text-lg space-y-1">
            {missionPoints.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>

          <h3 className="text-2xl font-bold text-green-700">
            {t("values_title")}
          </h3>
          <ul className="list-disc pl-5 text-lg space-y-1">
            {valuesPoints.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>

          {/* Spacer for scroll */}
          <div className="h-20"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
