import { MessageCircle } from "lucide-react";

const Footer = () => (
  <footer className="py-12 border-t border-border/30">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="font-display text-xl font-bold gradient-text">Crypto24h</span>
          <p className="text-sm text-muted-foreground mt-1">Hoàn phí giao dịch crypto uy tín #1</p>
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 text-sm">
            <MessageCircle size={18} />
            Telegram
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 text-sm">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            X (Twitter)
          </a>
        </div>
      </div>
      <div className="section-divider mt-8 mb-6" />
      <p className="text-center text-xs text-muted-foreground">
        © 2024 Crypto24h.online. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
