import { motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";
import { ArrowDown, Zap } from "lucide-react";

const exchanges = ["Binance", "OKX", "Bybit", "MEXC", "Bitget"];

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
    <ParticleBackground />

    {/* Gradient orbs */}
    <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-cyan/10 blur-[120px]" />
    <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-purple/10 blur-[120px]" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-pink/5 blur-[150px]" />

    <div className="container mx-auto px-4 text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-8">
          <Zap size={14} className="text-primary" />
          <span className="text-sm text-primary font-medium">Backcom Crypto - Tiết kiệm phí giao dịch</span>
        </div>
      </motion.div>

      <motion.h1
        className="font-display text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
      >
        Backcom Crypto
        <br />
        <span className="gradient-text">Hoàn phí lên đến 99%</span>
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Đăng ký qua mã giới thiệu của chúng tôi trên các sàn giao dịch hàng đầu và nhận backcom crypto mỗi ngày, tự động và minh bạch.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.45 }}
      >
        <a
          href="#contact"
          className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-display font-bold text-lg glow-cyan hover:scale-105 transition-transform"
        >
          Đăng Ký Ngay
        </a>
        <a
          href="#how-it-works"
          className="px-8 py-4 rounded-xl border border-border text-foreground font-display font-semibold text-lg hover:border-primary/50 hover:bg-primary/5 transition-all"
        >
          Tìm Hiểu Thêm
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown size={24} className="text-muted-foreground" />
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
