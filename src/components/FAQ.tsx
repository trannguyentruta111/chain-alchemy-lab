import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Backcom (hoàn phí) là gì?", a: "Backcom là chương trình hoàn lại một phần phí giao dịch cho người dùng khi đăng ký tài khoản thông qua mã giới thiệu (referral). Bạn giao dịch bình thường và nhận hoàn phí tự động." },
  { q: "Tôi cần làm gì để nhận hoàn phí?", a: "Rất đơn giản: đăng ký tài khoản trên sàn giao dịch thông qua link giới thiệu của chúng tôi, nhập mã referral và bắt đầu giao dịch. Hoàn phí sẽ tự động được tính." },
  { q: "Hoàn phí được thanh toán khi nào?", a: "Hoàn phí được thanh toán tự động hàng ngày hoặc hàng tuần tùy theo sàn giao dịch. Thông thường bạn sẽ nhận trong vòng 24h sau khi giao dịch." },
  { q: "Tỷ lệ hoàn phí có thay đổi không?", a: "Tỷ lệ hoàn phí phụ thuộc vào chính sách của từng sàn và có thể thay đổi. Chúng tôi luôn cập nhật tỷ lệ mới nhất trên website." },
  { q: "Có rủi ro gì không khi tham gia?", a: "Hoàn toàn không! Bạn chỉ cần đăng ký qua link giới thiệu, không cần nạp thêm tiền hay thay đổi cách giao dịch. Mọi giao dịch đều diễn ra trên sàn chính thức." },
];

const FAQ = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="faq" className="py-24" ref={ref}>
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Câu Hỏi <span className="gradient-text">Thường Gặp</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="gradient-border rounded-xl px-6 border-none">
                <AccordionTrigger className="font-display text-left hover:no-underline py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
