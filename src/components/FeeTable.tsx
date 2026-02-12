import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Badge } from "@/components/ui/badge";
import { Flame } from "lucide-react";

const fees = [
  { exchange: "Binance", spot: "20%", futures: "30%", hot: false },
  { exchange: "OKX", spot: "25%", futures: "40%", hot: true },
  { exchange: "Bybit", spot: "20%", futures: "35%", hot: false },
  { exchange: "MEXC", spot: "30%", futures: "50%", hot: true },
  { exchange: "Bitget", spot: "25%", futures: "40%", hot: false },
];

const FeeTable = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="fee-table" className="py-24" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Tỷ Lệ <span className="gradient-text">Hoàn Phí</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            So sánh tỷ lệ hoàn phí trên các sàn giao dịch hàng đầu
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto overflow-hidden rounded-xl glow-border"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <table className="w-full">
            <thead>
              <tr className="border-b border-border/50">
                <th className="text-left p-4 font-display font-semibold text-muted-foreground text-sm">Sàn giao dịch</th>
                <th className="text-center p-4 font-display font-semibold text-muted-foreground text-sm">Spot</th>
                <th className="text-center p-4 font-display font-semibold text-muted-foreground text-sm">Futures</th>
                <th className="text-center p-4 font-display font-semibold text-muted-foreground text-sm"></th>
              </tr>
            </thead>
            <tbody>
              {fees.map((row, i) => (
                <motion.tr
                  key={row.exchange}
                  className="border-b border-border/30 hover:bg-primary/5 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                >
                  <td className="p-4 font-display font-semibold">{row.exchange}</td>
                  <td className="p-4 text-center text-primary font-bold">{row.spot}</td>
                  <td className="p-4 text-center text-primary font-bold">{row.futures}</td>
                  <td className="p-4 text-center">
                    {row.hot && (
                      <Badge className="bg-accent/20 text-accent border-accent/30 gap-1">
                        <Flame size={12} /> Hot
                      </Badge>
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
};

export default FeeTable;
