import React from 'react';

export default function NavBar() {
  return (
    // Quitamos m-2 para evitar saltos raros al hacer scroll, agregamos backdrop-blur por si quieres opacidad
    <nav className="sticky top-0 z-50 flex flex-row items-center justify-between px-6 py-3 bg-black/95 backdrop-blur-md text-white shadow-xl border-b border-zinc-800">
      
      {/* LOGO */}
      <div className="font-black text-xl tracking-wider text-red-500 uppercase cursor-pointer">
        ⚡MONO<span className="text-white">MOTOS</span>
      </div>

      {/* ENLACES DE NAVEGACIÓN (Se ven limpios, no parecen botones toscos) */}
      <div className="hidden md:flex flex-row items-center gap-6 font-medium text-sm text-zinc-300 uppercase">
        <a href="#inicio" className="hover:text-red-500 transition-colors duration-200">Inicio</a>
        <a href="#catalogo" className="hover:text-red-500 transition-colors duration-200">Catálogo</a>
        <a href="#nosotros" className="hover:text-red-500 transition-colors duration-200">Nosotros</a>
        <a href="#contacto" className="hover:text-red-500 transition-colors duration-200">Contacto</a>
      </div>

      {/* BOTÓN DE ACCIÓN PRINCIPAL (El "Call to Action") */}
      <div>
        <Button text="Pedir Cita 🛠️" />
      </div>
    </nav>
  );
}

// Interfaces para tipar las propiedades en TypeScript
interface ButtonProps {
  text: string;
}

function Button({ text }: ButtonProps) {
  function manejarClick() {
    console.log("¡Botón presionado!");
  }

  return (
    <button
      className="bg-red-600 hover:bg-red-500 text-white font-bold px-5 py-2.5 rounded-full shadow-lg shadow-red-600/20 transition-all duration-200 active:scale-95 text-xs uppercase tracking-wider"
      type="button"
      onClick={manejarClick}
    >
      {text}
    </button>
  );
}