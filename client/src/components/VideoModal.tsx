import { Dialog, DialogContent } from "@/components/ui/dialog";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

export default function VideoModal({ isOpen, onClose, videoUrl }: VideoModalProps) {
  // Extract video ID if it's a full URL, or use as is if it's an ID/Embed URL
  // For Vimeo: https://vimeo.com/833058091?fl=ls&fe=ec -> 833058091
  const getEmbedUrl = (url: string) => {
    if (url.includes("vimeo.com")) {
      const id = url.split("vimeo.com/")[1]?.split("?")[0];
      return `https://player.vimeo.com/video/${id}?autoplay=1&title=0&byline=0&portrait=0`;
    }
    return url;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[900px] p-0 bg-black border-purple-500/30 overflow-hidden">
        <div className="relative w-full pt-[56.25%]"> {/* 16:9 Aspect Ratio */}
          <iframe
            src={getEmbedUrl(videoUrl)}
            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Shankara Oracle Trailer"
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
}
