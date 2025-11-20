"use client";

import { motion } from "framer-motion";
import { Activity, TrendingUp, Users } from "lucide-react";

// Анимация появления контейнера (соберет детей по очереди)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Задержка между появлением карточек
      delayChildren: 0.3,
    },
  },
};

// Анимация вылета отдельной карточки
const cardVariants = {
  hidden: { y: 50, opacity: 0, scale: 0.9, rotateX: -15 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 12,
    },
  },
};

// Анимация постоянной левитации после сборки
const floatAnimation = {
  y: [-8, 8, -8],
  rotateX: [2, -2, 2],
  rotateY: [-2, 2, -2],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export default function HeroVisual() {
  return (
    <div className="relative w-full max-w-[500px] h-[400px] flex items-center justify-center perspective-1000">
      {/* Фоновое свечение */}
      <div className="absolute inset-0 bg-violet-600/20 blur-[100px] rounded-full opacity-50" />

      {/* Основной контейнер, который плавает */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        // После появления включаем левитацию
        whileInView={floatAnimation}
        viewport={{ once: true }}
        className="relative w-full h-full flex items-center justify-center transform-style-3d"
      >
        {/* КАРТОЧКА 1: Главный Дашборд (Центр) */}
        <motion.div
          variants={cardVariants}
          className="absolute w-[340px] h-[220px] bg-[#0f1117]/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-4 flex flex-col z-20"
          style={{ transform: "translateZ(20px)" }} // Выдвигаем вперед
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-violet-500/20 rounded-lg">
                <TrendingUp className="w-4 h-4 text-violet-400" />
              </div>
              <span className="text-sm font-medium text-white">Revenue Growth</span>
            </div>
            <span className="text-xs text-green-400">+14.5%</span>
          </div>
          <div className="flex-1 flex items-end gap-1 h-full w-full pb-2">
            {/* Имитация графика */}
            {[40, 60, 45, 80, 65, 90, 75].map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-gradient-to-t from-violet-500/10 to-violet-500/60 rounded-t-sm"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
            <div className="h-full w-3/4 bg-violet-500/50 rounded-full" />
          </div>
        </motion.div>

        {/* КАРТОЧКА 2: Активность (Слева сверху) */}
        <motion.div
          variants={cardVariants}
          className="absolute -top-6 -left-4 w-[180px] h-[100px] bg-[#0f1117]/70 backdrop-blur-lg border border-white/10 rounded-xl shadow-xl p-3 z-30"
          style={{ transform: "translateZ(40px) rotate(-5deg)" }}
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs text-white/60">Live Activity</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-8 h-8 text-blue-400 p-1.5 bg-blue-500/20 rounded-lg" />
            <div>
              <div className="text-lg font-bold text-white">1,240</div>
              <div className="text-[10px] text-white/40">Active Users</div>
            </div>
          </div>
        </motion.div>

        {/* КАРТОЧКА 3: Уведомление (Справа снизу) */}
        <motion.div
          variants={cardVariants}
          className="absolute -bottom-8 -right-2 w-[200px] h-[70px] bg-[#0f1117]/70 backdrop-blur-lg border border-white/10 rounded-xl shadow-xl p-3 flex items-center gap-3 z-30"
          style={{ transform: "translateZ(50px) rotate(3deg)" }}
        >
          <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-orange-400 to-pink-500 flex items-center justify-center">
            <Activity className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="text-xs text-white font-medium">New Deployment</div>
            <div className="text-[10px] text-white/50">Production ready.</div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
