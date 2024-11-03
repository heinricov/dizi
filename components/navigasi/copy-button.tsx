"use client";

import { useToast } from "@/hooks/use-toast";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

interface CopyButtonProps {
  text: string;
}

export function CopyButton({ text }: CopyButtonProps) {
  const [copying, setCopying] = useState(false);
  const { toast } = useToast();

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopying(true);
      toast({
        title: "Berhasil disalin!",
        description: "API endpoint telah disalin ke clipboard."
      });
      setTimeout(() => {
        setCopying(false);
      }, 2000);
    } catch {
      toast({
        title: "Gagal menyalin",
        description: "Terjadi kesalahan saat menyalin endpoint.",
        variant: "destructive"
      });
    }
  };

  return (
    <button
      onClick={copyToClipboard}
      className="absolute right-2 top-2 p-2 hover:bg-accent rounded-md transition-colors"
      title="Salin ke clipboard"
    >
      {copying ? (
        <Check className="h-4 w-4 text-green-500" />
      ) : (
        <Copy className="h-4 w-4 text-muted-foreground" />
      )}
    </button>
  );
}
