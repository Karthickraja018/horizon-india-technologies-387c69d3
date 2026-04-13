import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  productName?: string;
}

const WhatsAppButton = ({ productName }: WhatsAppButtonProps) => {
  const message = productName
    ? `Hi, I am interested in ${productName}. Please share more details.`
    : "Hi I am interested in your products";

  const url = `https://wa.me/919751458300?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
    </a>
  );
};

export default WhatsAppButton;
