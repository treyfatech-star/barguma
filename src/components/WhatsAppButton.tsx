import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const whatsappNumber = '2348000000000'; // Replace with actual campaign number
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 flex items-center justify-center"
      aria-label="Chat with Campaign Team on WhatsApp"
    >
      <MessageCircle size={24} />
      <span className="hidden md:inline-block ml-2 text-sm font-medium">Chat with Campaign Team</span>
    </a>
  );
};

export default WhatsAppButton;