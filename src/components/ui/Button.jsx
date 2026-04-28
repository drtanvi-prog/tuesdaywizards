import React from 'react';

export default function Button({
   as = 'button',
   href,
   children,
   variant = 'primary',
   className = '',
   ...rest
}) {
   // Standardized: rounded-lg, border, h-12 (48px), consistent padding
   const base =
      'inline-flex items-center gap-2 rounded-lg border font-semibold h-12 px-6 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-300';
   const variants = {
      primary:
         'btn-animated text-white bg-gradient-to-r from-purple-600 to-purple-400 border-transparent',
      secondary:
         'bg-white/60 backdrop-blur-sm hover:border-purple-300 text-gray-600 hover:text-purple-700 border-gray-300/80',
      outline:
         'text-purple-700 border-purple-200 hover:border-purple-500 hover:bg-purple-50 bg-white',
   };
   const classes = `${base} ${variants[variant] || ''} ${className}`;

   if (as === 'a') {
      return (
         <a href={href} className={classes} {...rest}>
            {children}
         </a>
      );
   }
   return (
      <button type="button" className={classes} {...rest}>
         {children}
      </button>
   );
}
