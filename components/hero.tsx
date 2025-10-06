"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, Download } from "lucide-react";
import { toast } from "@/hooks/use-toast";

// ✅ Move PhoneButton outside Hero
function PhoneButton() {
  const phoneNumber = "+2348166370378";

  const handleClick = () => {
    const isMobile =
      typeof window !== "undefined" &&
      /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {
      // 👉 Mobile: open dialer
      window.location.href = `tel:${phoneNumber}`;
    } else {
      // 👉 Desktop: copy number & show toast
      navigator.clipboard.writeText(phoneNumber);
      toast({
        title: "Phone number copied 📞",
        description: phoneNumber,
      });
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className="glass hover:scale-110 hover-glow rounded-full"
      onClick={handleClick}
    >
      <Phone className="w-5 h-5" />
    </Button>
  );
}

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-5xl lg:text-7xl font-bold text-balance animate-fade-in-up">
                <span className="gradient-text">James</span>{" "}
                <span className="text-foreground">Adedini</span>
              </h1>
              <div className="h-1 w-24 gradient-bg rounded-full animate-fade-in-up animate-delay-200" />
            </div>

            <h2 className="text-2xl lg:text-3xl text-muted-foreground animate-fade-in-up animate-delay-300">
              Software Engineer
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty animate-fade-in-up animate-delay-400 max-w-lg">
              I build scalable, high-performance backend systems and full-stack
              applications using Java, Spring Boot, and modern web technologies.
            </p>
          </div>

          {/* 👉 Action Buttons */}
          <div className="flex flex-wrap gap-4 animate-fade-in-up animate-delay-500">
            <Button
              size="lg"
              asChild
              className="gap-2 btn-gradient text-white hover:scale-105 hover-glow"
            >
              <a href="mailto:adedinijames28@gmail.com">
                <Mail className="w-4 h-4" />
                Get In Touch
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              asChild
              className="gap-2 glass hover:scale-105 hover-lift bg-transparent"
            >
              {/* <a href="/James_Adedini_CV.pdf" download> */}
              <a href="https://flowcv.com/resume/pwoi31ver3" download>
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </Button>
          </div>

          {/* 👉 Social Links */}
          <div className="flex gap-4 animate-fade-in-up animate-delay-700">
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="glass hover:scale-110 hover-glow rounded-full"
            >
              <a
                href="https://github.com/ADEDINIJAMES"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
              </a>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              asChild
              className="glass hover:scale-110 hover-glow rounded-full"
            >
              <a
                href="https://www.linkedin.com/in/james-adedini-6936a8192"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>

            {/* ✅ Use PhoneButton here */}
            <PhoneButton />
          </div>
        </div>

        {/* 👉 Right-side Navigation */}
        <div className="hidden lg:block animate-fade-in-right animate-delay-500">
          <div className="space-y-6">
            {[
              { label: "About", delay: "animate-delay-500" },
              { label: "Experience", delay: "animate-delay-700" },
              { label: "Projects", delay: "animate-delay-1000" },
              { label: "Services", delay: "animate-delay-300" },
            ].map((item) => (
              <div
                key={item.label}
                className={`glass-card p-4 rounded-xl hover-lift cursor-pointer animate-fade-in-right ${item.delay}`}
              >
                <div className="text-sm text-muted-foreground uppercase tracking-wider hover:text-primary">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
