import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { supabase } from "@/integrations/supabase/client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import { Send, Loader2, Shield, Zap, HeadphonesIcon, Gift, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const schema = z.object({
  name: z.string().trim().min(1, "Vui lòng nhập tên").max(100),
  email: z.string().trim().email("Email không hợp lệ").max(255),
  exchange: z.string().min(1, "Vui lòng chọn sàn giao dịch"),
  telegram: z.string().trim().min(1, "Vui lòng nhập Telegram").max(100),
});

type FormData = z.infer<typeof schema>;

const highlights = [
  { icon: Gift, text: "Hoàn phí 100% trọn đời" },
  { icon: Zap, text: "Kích hoạt chỉ trong 5 phút" },
  { icon: Shield, text: "Bảo mật thông tin tuyệt đối" },
  { icon: HeadphonesIcon, text: "Hỗ trợ 24/7 qua Telegram" },
];

const ContactForm = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [loading, setLoading] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", exchange: "", telegram: "" },
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const { data: result, error } = await supabase.functions.invoke('send-contact', {
        body: data,
      });

      if (error) throw error;
      if (!result?.success) throw new Error(result?.error || 'Unknown error');

      toast.success("Đăng ký thành công! Chúng tôi sẽ liên hệ bạn sớm nhất.");
      form.reset();
    } catch (err) {
      console.error('Submit error:', err);
      toast.error("Có lỗi xảy ra. Vui lòng thử lại sau.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple/5 to-transparent" />
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-cyan/10 text-cyan border border-cyan/20 mb-4">
            Bắt đầu ngay hôm nay
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Đăng Ký <span className="gradient-text">Nhận Hoàn Phí</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Chỉ mất 2 phút để đăng ký. Đội ngũ chúng tôi sẽ hỗ trợ bạn kích hoạt ngay lập tức.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto items-center">
          {/* Left side - Benefits */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm group hover:border-cyan/30 transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-cyan/20 to-purple/20 flex items-center justify-center border border-cyan/20 group-hover:glow-cyan transition-all duration-300">
                    <item.icon className="w-5 h-5 text-cyan" />
                  </div>
                  <span className="font-display font-medium text-foreground">{item.text}</span>
                  <CheckCircle2 className="w-5 h-5 text-cyan/60 ml-auto flex-shrink-0" />
                </motion.div>
              ))}
            </div>

            {/* Trust badge */}
            <motion.div
              className="gradient-border rounded-xl p-5 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <p className="text-4xl font-display font-bold gradient-text mb-1">2,500+</p>
              <p className="text-muted-foreground text-sm">Người dùng đã đăng ký và nhận hoàn phí thành công</p>
            </motion.div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            className="gradient-border rounded-2xl p-8 relative overflow-hidden"
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Form glow accent */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan/10 rounded-full blur-[60px] pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple/10 rounded-full blur-[60px] pointer-events-none" />

            <div className="relative">
              <h3 className="font-display text-xl font-semibold mb-6 text-center">
                Điền thông tin của bạn
              </h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-display text-sm">Họ và tên</FormLabel>
                        <FormControl>
                          <Input placeholder="Nhập họ và tên" {...field} className="bg-background/50 border-border/50 focus:border-cyan/50 h-11 transition-all" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-display text-sm">Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="email@example.com" {...field} className="bg-background/50 border-border/50 focus:border-cyan/50 h-11 transition-all" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="exchange"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-display text-sm">Sàn giao dịch quan tâm</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-background/50 border-border/50 h-11">
                              <SelectValue placeholder="Chọn sàn giao dịch" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {["Binance", "OKX", "Bybit", "MEXC", "Bitget"].map((e) => (
                              <SelectItem key={e} value={e}>{e}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="telegram"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-display text-sm">Telegram</FormLabel>
                        <FormControl>
                          <Input placeholder="@username" {...field} className="bg-background/50 border-border/50 focus:border-cyan/50 h-11 transition-all" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full font-display font-semibold text-base h-12 glow-cyan mt-2" disabled={loading}>
                    {loading ? <Loader2 className="animate-spin" /> : <><Send size={18} /> Đăng Ký Nhận Hoàn Phí</>}
                  </Button>
                  <p className="text-center text-muted-foreground text-xs mt-3">
                    Thông tin của bạn được bảo mật hoàn toàn 🔒
                  </p>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
