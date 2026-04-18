"use client";
import { Share2 } from "lucide-react";

export default function ShareButton({ title }: { title: string }) {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copiado!");
    }
  };

  return (
    <button
      onClick={handleShare}
      className="text-[#F2EDE4]/40 hover:text-[#C8A96E] transition-colors"
    >
      <Share2 size={18} />
    </button>
  );
}