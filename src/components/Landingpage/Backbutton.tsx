"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

interface BackButtonProps {
  label?: string; // Optional custom text
}

const BackButton: React.FC<BackButtonProps> = ({ label = "Back" }) => {
  const router = useRouter();

  return (
    <Button
      variant="outline"
      className="px-6 py-2 rounded-full text-blue-600 hover:text-white hover:bg-blue-600 transition"
      onClick={() => router.back()}
    >
      ← {label}
    </Button>
  );
};

export default BackButton;
