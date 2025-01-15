"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import useCalDotCom from "../hooks/use-cal-dotcom";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [calRef] = useCalDotCom(
    '',
    'ThisIsNotJustin/30min',
    { layout: 'month_view' }
  );

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="items-center transform z-[51]"
          >
            <div className="bg-secondary-700 rounded-xl p-8 shadow-lg w-full max-w-md mx-auto">
              <div className="flex flex-col gap-4">
                <button
                  ref={calRef}
                  className="bg-accent-200 px-8 py-3 rounded-full hover:bg-accent-300 transition-colors duration-300"
                >
                  Schedule Call
                </button>
                <button
                  onClick={() => window.location.href = 'mailto:justincolemanonetwo@gmail.com'}
                  className="bg-accent-200 px-8 py-3 rounded-full hover:bg-accent-300 transition-colors duration-300"
                >
                  Send Email
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;