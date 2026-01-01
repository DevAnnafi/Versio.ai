"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Rocket, X } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "lib/supabase/client";

// --------------------
// Types
// --------------------
type Todo = {
  id: string;
  title: string;
};

// Motion-enabled Link
const MotionLink = motion(Link);

// --------------------
// Star Field Component
// --------------------
const StarField = () => {
  const [stars, setStars] = useState<
    {
      id: number;
      x: number;
      y: number;
      size: number;
      duration: number;
      delay: number;
      opacity: number;
    }[]
  >([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 120 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      duration: Math.random() * 2 + 1,
      delay: Math.random() * 2,
      opacity: Math.random() * 0.8 + 0.2,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [star.opacity * 0.3, star.opacity, star.opacity * 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// --------------------
// Gradient Orbs
// --------------------
const GradientOrbs = () => (
  <div className="fixed inset-0 pointer-events-none -z-10">
    <motion.div
      className="absolute w-[800px] h-[800px] rounded-full opacity-20"
      style={{
        background:
          "radial-gradient(circle, rgba(173,216,230,0.3) 0%, transparent 70%)",
        left: "50%",
        top: "20%",
        transform: "translate(-50%, -50%)",
      }}
      animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.35, 0.2] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
);

// --------------------
// Feature Card
// --------------------
const FeatureCard = ({
  icon,
  title,
  description,
  gradient,
  borderColor,
  delay = 0,
}: {
  icon: string;
  title: string;
  description: string;
  gradient: string;
  borderColor: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ scale: 1.02, y: -5 }}
  >
    <div
      className={`p-8 rounded-2xl backdrop-blur-xl border ${gradient} ${borderColor}`}
    >
      <div className="text-6xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  </motion.div>
);

// --------------------
// Main Page
// --------------------
export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  // ✅ Supabase client connection
  useEffect(() => {
    const fetchTodos = async () => {
      const { data, error } = await supabase
        .from("todos")
        .select("id, title");

      if (error) {
        console.error("Supabase error:", error);
        return;
      }

      setTodos(data ?? []);
    };

    fetchTodos();
  }, []);

  const features = [
    {
      icon: "🔄",
      title: "Version Control",
      description: "Track prompt changes with confidence.",
      gradient: "bg-gradient-to-br from-primary/10 to-secondary/10",
      borderColor: "border-primary/20",
    },
    {
      icon: "🧪",
      title: "Testing",
      description: "Compare outputs side-by-side.",
      gradient: "bg-gradient-to-br from-secondary/10 to-accent/10",
      borderColor: "border-secondary/20",
    },
    {
      icon: "👥",
      title: "Collaboration",
      description: "Build together in real time.",
      gradient: "bg-gradient-to-br from-accent/10 to-primary/10",
      borderColor: "border-accent/20",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <GradientOrbs />
      <StarField />

      {/* Supabase proof */}
      {todos.length > 0 && (
        <div className="fixed bottom-6 right-6 bg-black/60 p-4 rounded-xl z-50">
          <h4 className="text-white font-semibold mb-2">Todos</h4>
          <ul className="space-y-1">
            {todos.map((todo) => (
              <li key={todo.id} className="text-white/80">
                {todo.title}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <Rocket className="w-12 h-12 text-primary mb-4" />
        <h1 className="text-7xl font-black mb-6">Versio.ai</h1>
        <p className="text-2xl mb-8 text-muted-foreground">
          Version control for AI prompts
        </p>

        <div className="flex gap-6">
          <MotionLink href="/signup">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold"
            >
              Get Started
            </motion.div>
          </MotionLink>

          <MotionLink href="/login">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="px-8 py-4 rounded-xl border border-primary/40"
            >
              Sign In
            </motion.div>
          </MotionLink>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-6 py-32 grid md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <FeatureCard key={i} {...f} delay={i * 0.15} />
        ))}
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-muted-foreground">
        © 2025 Versio.ai
      </footer>
    </div>
  );
}
