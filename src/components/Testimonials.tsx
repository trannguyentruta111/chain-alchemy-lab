import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Minh Tuấn", amount: "1,200 USDT", text: "Đã nhận hoàn phí đều đặn mỗi ngày, rất nhanh chóng và minh bạch. Highly recommend!", avatar: "MT" },
  { name: "Thanh Hà", amount: "850 USDT", text: "Quy trình đăng ký rất đơn giản, chỉ cần vài bước là xong. Hoàn phí về ví hàng ngày.", avatar: "TH" },
  { name: "Đức Anh", amount: "3,500 USDT", text: "Đã tiết kiệm rất nhiều phí giao dịch từ khi sử dụng dịch vụ. Team hỗ trợ rất nhiệt tình.", avatar: "ĐA" },
  { name: "Phương Linh", amount: "2,100 USDT", text: "Giao dịch futures nhiều nên hoàn phí rất đáng kể. Sẽ giới thiệu thêm bạn bè.", avatar: "PL" },
];

const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="testimonials" className="py-24" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Đánh Giá Từ <span className="gradient-text">Người Dùng</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Hàng nghìn trader đã tin tưởng và sử dụng dịch vụ của chúng tôi
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="gradient-border p-6 rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center font-display font-bold text-sm text-primary">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-display font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-primary">Đã hoàn: {t.amount}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
