import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Phone } from "lucide-react";

interface CTAModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CTAModal = ({ isOpen, onClose }: CTAModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Phone className="h-6 w-6 text-primary" />
            Свяжитесь с нами
          </DialogTitle>
          <DialogDescription className="text-base pt-4">
            Позвоните нам по телефону{" "}
            <a 
              href="tel:+79215925158" 
              className="font-semibold text-primary hover:text-accent transition-colors"
            >
              +7 (921) 592 51 58
            </a>
            , и мы с вами договоримся о консультации.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
