import { useState } from "react";
import { Facebook, Twitter, Linkedin, Link2, Check, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface ShareWidgetProps {
  title?: string;
  description?: string;
  className?: string;
}

export default function ShareWidget({ 
  title = "The Shankara Oracle", 
  description = "A living technology of consciousness. Awaken your intuition, heal your past, and master your destiny.",
  className = ""
}: ShareWidgetProps) {
  const [copied, setCopied] = useState(false);
  
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);

  const shareLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: "hover:bg-blue-600/20 hover:text-blue-400"
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      color: "hover:bg-sky-500/20 hover:text-sky-400"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}&summary=${encodedDescription}`,
      color: "hover:bg-blue-700/20 hover:text-blue-500"
    }
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button 
          variant="outline" 
          size="sm"
          className={`border-purple-500/30 text-purple-200 hover:bg-purple-900/30 hover:text-white gap-2 ${className}`}
        >
          <Share2 className="w-4 h-4" />
          Share
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64 bg-[#1a0a2e] border-purple-500/30 p-4" align="end">
        <div className="space-y-3">
          <p className="text-sm font-medium text-white mb-3">Share this page</p>
          
          <div className="flex gap-2">
            {shareLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 flex items-center justify-center p-3 rounded-lg bg-white/5 text-white/70 transition-all duration-300 ${link.color}`}
                title={`Share on ${link.name}`}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          
          <button
            onClick={copyToClipboard}
            className="w-full flex items-center justify-center gap-2 p-3 rounded-lg bg-white/5 text-white/70 hover:bg-accent/20 hover:text-white transition-all duration-300"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-green-400" />
                <span className="text-sm text-green-400">Copied!</span>
              </>
            ) : (
              <>
                <Link2 className="w-4 h-4" />
                <span className="text-sm">Copy Link</span>
              </>
            )}
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
