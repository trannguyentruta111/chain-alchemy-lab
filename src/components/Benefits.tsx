import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Percent, Headphones, Zap, ShieldCheck } from "lucide-react";
import { useState } from "react";

const benefits = [
  { icon: Percent, title: "Hoàn phí lên đến 50%", desc: "Tỷ lệ hoàn phí cao nhất thị trường, giúp bạn tiết kiệm tối đa chi phí giao dịch.", color: "var(--cyan)" },
  { icon: Headphones, title: "Hỗ trợ 24/7", desc: "Đội ngũ hỗ trợ luôn sẵn sàng giải đáp mọi thắc mắc bất kể ngày đêm.", color: "var(--purple)" },
  { icon: Zap, title: "Thanh toán nhanh chóng", desc: "Hoàn phí được thanh toán tự động hàng ngày, không cần chờ đợi.", color: "var(--pink)" },
  { icon: ShieldCheck, title: "Minh bạch & Uy tín", desc: "Theo dõi chi tiết lịch sử hoàn phí, mọi giao dịch đều minh bạch rõ ràng.", color: "var(--blue)" },
];

const BenefitCard = ({ icon: Icon, title, desc, color, index }: typeof benefits[0] & { index: number }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 15;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -15;
    setTilt({ x, y });
  };

  return (
    <motion.div
      className="gradient-border p-6 rounded-xl cursor-default"
      style={{ transform: `perspective(600px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)` }}
      onMouseMove={handleMouse}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `hsl(${color} / 0.1)` }}>
        <Icon size={24} style={{ color: `hsl(${color})` }} />
      </div>
      <h3 className="font-display text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
};

const Benefits = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="benefits" className="py-24" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Lợi Ích <span className="gradient-text">Khi Tham Gia</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Tối ưu chi phí giao dịch với những ưu đãi vượt trội
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <BenefitCard key={i} {...b} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
