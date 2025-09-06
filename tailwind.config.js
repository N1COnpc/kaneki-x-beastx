/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Colores basados en el atardecer cityscape
        'kaneki-pink': '#F472B6', // Rosa intenso del cielo
        'kaneki-purple': '#A855F7', // Púrpura del atardecer
        'kaneki-orange': '#FB923C', // Dorado-naranja del sol
        'kaneki-blue': '#3B4DDB', // Azul profundo de edificios
        'kaneki-gold': '#FBBF24', // Dorado brillante
        'kaneki-violet': '#8B5CF6', // Violeta suave
        'kaneki-dark': '#1E1B3B', // Azul oscuro nocturno
        'kaneki-card': 'rgba(244, 114, 182, 0.15)', // Rosa transparente
        // Colores específicos del atardecer
        'sunset-pink': '#FF6B9D', // Rosa vibrante
        'sunset-purple': '#8B5FBF', // Púrpura medio
        'sunset-orange': '#FFB347', // Naranja cálido
        'sunset-gold': '#FFD700', // Oro brillante
        'building-blue': '#2D3FBA', // Azul de edificios
        'sky-violet': '#9F7AEA', // Violeta del cielo
        'warm-orange': '#FF8C42', // Naranja cálido
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-kaneki': 'linear-gradient(135deg, #FFD700 0%, #FF6B9D 30%, #8B5FBF 60%, #2D3FBA 100%)',
        'gradient-card': 'linear-gradient(135deg, rgba(255, 107, 157, 0.1) 0%, rgba(139, 95, 191, 0.1) 100%)',
        'gradient-sunset': 'linear-gradient(135deg, #FFD700 0%, #FFB347 25%, #FF6B9D 50%, #8B5FBF 100%)',
        'gradient-cityscape': 'linear-gradient(180deg, #FF6B9D 0%, #8B5FBF 40%, #2D3FBA 70%, #1E1B3B 100%)',
        'gradient-warm': 'linear-gradient(90deg, #FFD700 0%, #FF8C42 50%, #FF6B9D 100%)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          'from': { boxShadow: '0 0 20px rgba(147, 51, 234, 0.5)' },
          'to': { boxShadow: '0 0 30px rgba(236, 72, 153, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}
