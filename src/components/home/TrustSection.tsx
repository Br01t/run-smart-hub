import React from "react";
import { motion } from "framer-motion";
import { FlaskConical, ShieldCheck, BarChart3 } from "lucide-react";

const trustItems = [
  { icon: FlaskConical, title: "Evidence-Based", text: "Every formula is grounded in peer-reviewed research and validated by sports science." },
  { icon: ShieldCheck, title: "No Sponsorships", text: "We don't accept paid placements. Our recommendations are independent and honest." },
  { icon: BarChart3, title: "Personalized", text: "Results tailored to your body metrics, training volume and specific goals." },
];

const TrustSection = () => {
  return (
    <section className="container mx-auto px-4 py-16 sm:py-20">
      <div className="editorial-line-center text-center">
        <h2 className="font-display text-display-md font-bold text-foreground">Why runners trust us</h2>
      </div>

      <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-3">
        {trustItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="text-center"
          >
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <item.icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-display text-base font-bold text-foreground">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TrustSection;
