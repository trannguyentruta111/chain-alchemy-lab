import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect } from "react";

const stats = [
  { value: 5000, suffix: "+", label: "Người dùng đang hoàn phí" },
  { value: 2, suffix: "M+", label: "USDT đã hoàn phí" },
  { value: 5, suffix: "", label: "Sàn giao dịch hỗ trợ" },
  { value: 99, suffix: "%", label: "Tỷ lệ hài lòng" },
];

const Counter = ({ value, suffix, isVisible }: { value: number; suffix: string; isVisible: boolean }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toLocaleString());

  useEffect(() => {
    if (isVisible) {
      animate(count, value, { duration: 2, ease: "easeOut" });
    }
  }, [isVisible, count, value]);

  return (
    <span className="font-display text-4xl md:text-5xl font-bold gradient-text">
      <motion.span>{rounded}</motion.span>{suffix}
    </span>
  );
};

const Stats = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <Counter value={s.value} suffix={s.suffix} isVisible={isVisible} />
              <p className="mt-2 text-muted-foreground text-sm">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
