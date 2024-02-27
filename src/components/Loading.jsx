import { motion } from "framer-motion";

const Loading = () => {
  return (
    <motion.div
      animate={{ rotate: [0, 360] }}
      transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
      className="mt-10 border-gray-300 h-10 w-10 rounded-full border-4 border-t-accent-pink-500 mx-auto"
    />
  );
};

export default Loading;
