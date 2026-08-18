import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Button({
  children,
  to,
  onClick,
  variant = "primary",
  type = "button",
  className = "",
}) {
  const baseClasses =
    "inline-flex items-center justify-center px-8 py-3 text-sm font-semibold uppercase tracking-wider transition-colors duration-300";

  const variants = {
    primary: "bg-gold text-charcoal hover:bg-light-gold",
    outline:
      "border border-charcoal text-charcoal hover:bg-charcoal hover:text-white",
    whiteOutline:
      "border border-white text-white hover:bg-white hover:text-charcoal",
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to}>
        <motion.span
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={classes}
        >
          {children}
        </motion.span>
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={classes}
    >
      {children}
    </motion.button>
  );
}
