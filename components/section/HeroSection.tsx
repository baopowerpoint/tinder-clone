"use client";
import { AuroraBackground } from "@/components/acternity/AuroraBackground";
import { SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { motion } from "framer-motion";
import React from "react";

const HeroSection = () => {
  return (
    <div>
      <SignedOut>
        <AuroraBackground>
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="relative flex flex-col items-center justify-center gap-4 px-4"
          >
            <div className="text-center text-3xl font-bold dark:text-white md:text-7xl">
              Quẹt phải.
            </div>

            <div className="mt-5 rounded-lg bg-gradient-to-r from-rose-300 to-rose-500 px-5 py-1 text-lg font-semibold text-white">
              <SignUpButton
                mode="modal"
                afterSignInUrl="/explore"
                afterSignUpUrl="/onboard"
              />
            </div>
          </motion.div>
        </AuroraBackground>
      </SignedOut>
      <SignedIn>Da dang nhap</SignedIn>
    </div>
  );
};

export default HeroSection;
