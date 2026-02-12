import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import { Send, Loader2 } from "lucide-react";
import { useState } from "react";

const schema = z.object({
  name: z.string().trim().min(1, "Vui lòng nhập tên").max(100),
  email: z.string().trim().email("Email không hợp lệ").max(255),
  exchange: z.string().min(1, "Vui lòng chọn sàn giao dịch"),
  telegram: z.string().trim().min(1, "Vui lòng nhập Telegram").max(100),
});

type FormData = z.infer<typeof schema>;

const ContactForm = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [loading, setLoading] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", exchange: "", telegram: "" },
  });

  const onSubmit = (data: FormData) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Đăng ký thành công! Chúng tôi sẽ liên hệ bạn sớm nhất.");
      form.reset();
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple/5 to-transparent" />
      <div className="container mx-auto px-4 max-w-lg relative">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Đăng Ký <span className="gradient-text">Ngay</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Để lại thông tin, chúng tôi sẽ hướng dẫn bạn chi tiết
          </p>
        </motion.div>

        <motion.div
          className="gradient-border rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="font-display">Họ và tên</FormLabel>
                    <FormControl>
                      <Input placeholder="Nhập họ và tên" {...field} className="bg-background/50 border-border/50 focus:border-primary/50 focus:glow-cyan transition-all" />
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
                    <FormLabel className="font-display">Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="email@example.com" {...field} className="bg-background/50 border-border/50 focus:border-primary/50 transition-all" />
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
                    <FormLabel className="font-display">Sàn giao dịch quan tâm</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-background/50 border-border/50">
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
                    <FormLabel className="font-display">Telegram</FormLabel>
                    <FormControl>
                      <Input placeholder="@username" {...field} className="bg-background/50 border-border/50 focus:border-primary/50 transition-all" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full font-display font-semibold text-base h-12 glow-cyan" disabled={loading}>
                {loading ? <Loader2 className="animate-spin" /> : <><Send size={18} /> Đăng Ký Nhận Hoàn Phí</>}
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
