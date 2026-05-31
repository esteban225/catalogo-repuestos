import { Route, Routes } from "react-router-dom";
import Home from "../pages/public/Home";

export default function PublicRoutes() {
  return (
    <div className="relative min-h-screen w-full bg-zinc-900/40">
      
      {/* VIDEO DE FONDO */}
      <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden">
        <video
          src="./video_background_monomotos_.mp4" // Guarda tu video en la carpeta public/videos/
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover " // opacity-30 para que el texto blanco se lea perfecto
        />
        {/* Capa extra de oscuridad por si el video es muy brillante */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* CONTENIDO DE LA APP */}
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>

    </div>
  );
}