import imagen1 from "./imagenes/imagen1.jpg"
import imagen2 from "./imagenes/imagen2.jpg"
import imagen3 from "./imagenes/imagen3.jpg"
import foto from "./imagenes/foto.png"
import fondo1 from "./imagenes/fondo1.jpg"
import fondo2 from "./imagenes/fondo2.jpg"
import fondo3 from "./imagenes/fondo3.jpg"
import { useForm } from "@formspree/react"

export default function App() {
  const [state, handleSubmit] = useForm("mvzyyzzz")
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center px-6 py-20">



    <div
      className="w-full h-[20vh] bg-cover bg-center bg-fixed relative"
      style={{
        backgroundImage: `url(${fondo1})`
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white">
            MAGULABS
          </h1>
          <p className="text-xl md:text-3xl text-gray-300 tracking-[0.3em] mt-4">
            VISIÓN ARTIFICIAL INDUSTRIAL
          </p>
        </div>
      </div>
    </div>

    <div className="text-xl max-w-2xl text-gray-300 mt-6">

      <p className="text-center mb-4">
        Potencia tu industria con soluciones de visión artificial:
      </p>

      <div className="space-y-2 text-lg w-fit mx-auto">

        <p>• Trazabilidad completa de productos</p>

        <p>• Lectura automática de etiquetas</p>

        <p>• Conteo de productos</p>

        <p>• Detección de defectos en tiempo real</p>

        <p>• Procesos más seguros y eficientes</p>

      </div>

    </div>

      {/* IMAGENES */}
      <div className="w-full max-w-6xl mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <img
            src={imagen1}
            alt="OCR"
            className="rounded-3xl w-full h-80 object-cover"
          />
          <img
            src={imagen2}
            alt="Vision"
            className="rounded-3xl w-full h-80 object-cover"
          />
          <img
            src={imagen3}
            alt="Industrial"
            className="rounded-3xl w-full h-80 object-cover"
          />
        </div>
      </div>




      {/* BOTON DE SOLICITAR DEMO */}
      <a
        href="#contacto"
        className="mt-10 bg-blue-500 text-white px-12 py-6 rounded-3xl shadow-2xl hover:bg-blue-400 hover:scale-105 transition"
      >
        Solicitar Demo
      </a>

      {/* IMAGEN 1 TIPO Parallax scrolling / TEXTO IDEA DE QUE HACEMOS*/}
      <div
        className="w-full h-[60vh] bg-cover bg-center bg-fixed mt-20 relative flex items-center justify-center"
        style={{
          backgroundImage: `url(${fondo2})`
        }}
      >

        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Texto */}
        <div className="relative z-10 text-center max-w-3xl px-6">

          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            TECNOLOGÍA FLEXIBLE PARA TU INDUSTRIA
          </h2>

          <p className="text-lg md:text-2xl text-gray-200 leading-relaxed">
            Diseñamos soluciones de visión artificial adaptadas a tus procesos.
            Desde trazabilidad y OCR industrial hasta detección de defectos y control de calidad en tiempo real.
          </p>

          <p className="text-xl md:text-3xl text-blue-400 font-semibold mt-8">
            Comenzá hoy a construir tu sistema de visión artificial.
          </p>

        </div>

      </div>
      
      
      {/* ¿QUIENES SOMOS? */}
      <div className="w-full max-w-4xl mt-32 flex flex-col items-center text-center">

        <h2 className="text-4xl font-bold mb-10">
          SOBRE NOSOTROS
        </h2>

        <img
          src={foto}
          alt="Fundador"
          className="w-72 h-72 object-cover rounded-3xl shadow-2xl mb-10"
        />

        <div className="space-y-1">

          <p className="text-3xl font-semibold">
            Martin Maguna
          </p>

          <p className="text-blue-400 text-xl">
            Fundador de MaguLabs
          </p>

          <p className="text-gray-400 text-lg">
            Ingeniero Industrial Mecánico · PMP®
          </p>

          <p className="text-gray-300 text-xl leading-relaxed max-w-2xl">
            Más de 7 años de experiencia en ingeniería de procesos,
            automatización y mejora continua en industrias de alta confiabilidad.
          </p>

        </div>

      </div>

      {/* FORMULARIO */}

      <div
        id="contacto"
        className="w-full h-[90vh] bg-cover bg-center bg-fixed relative mt-32 flex items-center justify-center px-6"
        style={{
          backgroundImage: `url(${fondo3})`
        }}
      >

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 w-full max-w-2xl">

          <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center text-white">
            CONTACTANOS
          </h2>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 bg-black/40 backdrop-blur-md p-8 rounded-3xl border border-white/10"
          >

            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              className="bg-zinc-900/80 border border-zinc-700 rounded-xl px-5 py-4 text-white outline-none focus:border-blue-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Mail"
              className="bg-zinc-900/80 border border-zinc-700 rounded-xl px-5 py-4 text-white outline-none focus:border-blue-500"
            />

            <input
              type="text"
              name="asunto"
              placeholder="Asunto"
              className="bg-zinc-900/80 border border-zinc-700 rounded-xl px-5 py-4 text-white outline-none focus:border-blue-500"
            />

            <textarea
              name="mensaje"
              placeholder="Mensaje"
              rows="6"
              className="bg-zinc-900/80 border border-zinc-700 rounded-xl px-5 py-4 text-white outline-none focus:border-blue-500 resize-none"
            />

            {state.succeeded && (
              <div className="bg-green-500/20 border border-green-500 text-green-300 rounded-xl p-4 text-center">
                ✓ Gracias por contactarnos. Nos comunicaremos contigo a la brevedad.
              </div>
            )}
            <button
              type="submit"
              disabled={state.submitting}
              className="bg-blue-500 py-4 rounded-xl font-semibold hover:bg-blue-400 hover:scale-[1.02] transition disabled:opacity-50"
            >
              {state.submitting ? "Enviando..." : "Enviar"}
            </button>

          </form>

        </div>

      </div>
    </div>
  )
}
