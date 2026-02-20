import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { UserPlus, KeyRound, Wallet } from "lucide-react";

const steps = [
  { icon: UserPlus, title: "Đăng ký tài khoản", desc: "Tạo tài khoản trên sàn giao dịch thông qua link giới thiệu của chúng tôi." },
  { icon: KeyRound, title: "Nhập mã giới thiệu", desc: "Sử dụng mã referral code để kích hoạt chương trình hoàn phí giao dịch." },
  { icon: Wallet, title: "Nhận hoàn phí", desc: "Giao dịch bình thường và nhận hoàn phí tự động mỗi ngày vào ví của bạn." },
];

const HowItWorks = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="how-it-works" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Cách Thức <span className="gradient-text">Hoạt Động</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Chỉ 3 bước đơn giản để bắt đầu nhận backcom crypto
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-24 left-[20%] right-[20%] h-[2px] bg-gradient-to-r from-cyan/40 via-purple/40 to-pink/40" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="relative text-center"
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <div className="relative mx-auto w-20 h-20 rounded-2xl bg-muted flex items-center justify-center mb-6 glow-border">
                <step.icon size={32} className="text-primary" />
                <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-primary text-primary-foreground font-display font-bold text-sm flex items-center justify-center">
                  {i + 1}
                </div>
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
