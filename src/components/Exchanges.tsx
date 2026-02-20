import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Copy, ExternalLink, Flame } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

const exchanges = [
  { name: "Binance", code: "CRYPTO24H", link: "https://www.binance.com/vi/register", hot: true, icon: "₿" },
  { name: "OKX", code: "CRYPTO24H", link: "https://www.okx.com/join", hot: true, icon: "◎" },
  { name: "Bybit", code: "CRYPTO24H", link: "https://www.bybit.com/register", hot: false, icon: "▲" },
  { name: "MEXC", code: "CRYPTO24H", link: "https://www.mexc.com/register", hot: false, icon: "M" },
  { name: "Bitget", code: "CRYPTO24H", link: "https://www.bitget.com/register", hot: false, icon: "B" },
];

const ExchangeCard = ({ exchange, index }: { exchange: typeof exchanges[0]; index: number }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -12;
    setTilt({ x, y });
  };

  const copyCode = () => {
    navigator.clipboard.writeText(exchange.code);
    toast.success("Đã copy mã giới thiệu!");
  };

  return (
    <motion.div
      className="gradient-border p-6 rounded-xl cursor-default relative overflow-hidden group"
      style={{ transform: `perspective(600px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)` }}
      onMouseMove={handleMouse}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {/* Glow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[hsl(var(--cyan)/0.05)] to-[hsl(var(--purple)/0.05)]" />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[hsl(var(--cyan)/0.2)] to-[hsl(var(--purple)/0.2)] flex items-center justify-center text-lg font-bold font-display">
              {exchange.icon}
            </div>
            <h3 className="font-display text-lg font-bold">{exchange.name}</h3>
          </div>
          {exchange.hot && (
            <Badge className="bg-gradient-to-r from-[hsl(var(--pink))] to-[hsl(var(--gold))] border-0 text-xs gap-1">
              <Flame size={12} /> Hot
            </Badge>
          )}
        </div>

        {/* Rate */}
        <p className="gradient-text font-display text-xl font-bold mb-5">
          Tỷ lệ hoàn phí 100%
        </p>

        {/* Code */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-sm text-muted-foreground">Mã:</span>
          <code className="px-3 py-1 rounded-md bg-muted text-sm font-mono font-semibold tracking-wider">
            {exchange.code}
          </code>
          <button
            onClick={copyCode}
            className="p-1.5 rounded-md hover:bg-muted transition-colors text-muted-foreground hover:text-primary"
            aria-label="Copy mã giới thiệu"
          >
            <Copy size={14} />
          </button>
        </div>

        {/* CTA */}
        <a
          href={exchange.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-primary/10 text-primary font-display font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-all"
        >
          Đăng Ký Ngay <ExternalLink size={14} />
        </a>
      </div>
    </motion.div>
  );
};

const Exchanges = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="exchanges" className="py-24" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Sàn Giao Dịch <span className="gradient-text">Đối Tác</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Đăng ký qua mã giới thiệu để nhận backcom tối đa
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {exchanges.map((ex, i) => (
            <ExchangeCard key={ex.name} exchange={ex} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Exchanges;
