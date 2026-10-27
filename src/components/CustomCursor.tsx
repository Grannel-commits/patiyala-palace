import { useEffect, useState } from "react";
import { motion } from 'framer-motion';

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const clickable = target.closest('button, a, [data-cursor]');
      if (clickable) {
        setIsHovered(true);
        const text = clickable.getAttribute('data-cursor');
        if (text) {
          setCursorText(text);
        } else {
          setCursorText('');
        }
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 5,
      y: mousePosition.y - 5,
      width: 10,
      height: 10,
      backgroundColor: '#C6A865', // Regal Gold
      border: '1px solid transparent',
    },
    hover: {
      x: mousePosition.x - (cursorText ? 40 : 20),
      y: mousePosition.y - (cursorText ? 40 : 20),
      width: cursorText ? 80 : 40,
      height: cursorText ? 80 : 40,
      backgroundColor: 'rgba(198, 168, 101, 0.12)',
      border: '1.5px solid #C6A865', // Regal Gold
    }
  };

  return (
    <motion.div
      className="custom-cursor fixed top-0 left-0 rounded-full pointer-events-none z-[9999] flex items-center justify-center text-[#E7C97C] font-sans text-xs tracking-widest uppercase transition-colors"
      variants={variants}
      animate={isHovered ? 'hover' : 'default'}
      transition={{ type: 'tween', ease: 'backOut', duration: 0.15 }}
    >
      {cursorText && (
        <motion.span 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="text-[10px]"
        >
          {cursorText}
        </motion.span>
      )}
    </motion.div>
  );
};
