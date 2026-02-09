import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Mail, Phone, Linkedin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Transmission Sent",
      description: "Secure message has been encrypted and delivered.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-24 bg-muted/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold font-display mb-12 text-foreground text-center">
          <span className="text-primary">06.</span> ESTABLISH LINK
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-display font-bold text-foreground">Contact Channels</h3>
            <p className="text-muted-foreground">
              Available for security consultations, penetration testing projects, and network security roles. 
              Secure communication channels are open.
            </p>

            <div className="space-y-6">
              <a href="mailto:gokulsridharan003@gmail.com" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
                <div className="p-3 rounded-md bg-card border border-border group-hover:border-primary/50">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-mono text-sm">gokulsridharan003@gmail.com</span>
              </a>

              <a href="tel:+919840173796" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
                <div className="p-3 rounded-md bg-card border border-border group-hover:border-primary/50">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="font-mono text-sm">+91 9840173796</span>
              </a>

              <a href="https://linkedin.com/in/gokul-s-407b08313" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
                <div className="p-3 rounded-md bg-card border border-border group-hover:border-primary/50">
                  <Linkedin className="w-5 h-5" />
                </div>
                <span className="font-mono text-sm">in/gokul-s-407b08313</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border p-8 rounded-lg shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full"></div>

             <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary font-mono text-xs uppercase">Identity</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your name" {...field} className="bg-background/50 border-border focus:border-primary/50" />
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
                      <FormLabel className="text-primary font-mono text-xs uppercase">Signal Source</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your email" {...field} className="bg-background/50 border-border focus:border-primary/50" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary font-mono text-xs uppercase">Encrypted Data</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Type your message..." {...field} className="min-h-[120px] bg-background/50 border-border focus:border-primary/50" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-background font-bold tracking-widest">
                  <Send className="w-4 h-4 mr-2" /> TRANSMIT
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}