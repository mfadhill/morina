import React from "react";
import { FaWhatsapp } from "react-icons/fa";

type FloatingWhatsAppButtonProps = {
  phoneNumber: string;
};

const FloatingWhatsAppButton: React.FC<FloatingWhatsAppButtonProps> = ({
  phoneNumber,
}) => {
  const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      onClick={openWhatsApp}
      className="fixed bottom-4 right-4 z-50 cursor-pointer bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all"
    >
      <FaWhatsapp size={24} />
    </div>
  );
};

export default FloatingWhatsAppButton;
