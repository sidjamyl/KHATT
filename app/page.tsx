import Image from "next/image";
import Navbar from "./components/Navbar"; 

export default function Home() {
  return (
    <main>
      <div className="relative">
        {/* Background Image */}
        <div className="fixed inset-0 -z-20">
          <Image
            src="/bg_image.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Navbar (devient le background noir) */}
        <Navbar />
        

        {/* Contenu au-dessus */}
        <div className="relative z-10">
          {/* Hero Section */}
          <section className="min-h-screen flex items-center justify-center px-8">
           
          </section>

          {/* Services Section */}
          <section className="min-h-screen py-20 px-8">
            <div className="max-w-6xl mx-auto text-white">
              <h2 className="text-5xl font-bold text-center mb-16"></h2>
              <div className="grid md:grid-cols-3 gap-12">
                <div className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                  <div className="text-6xl mb-4">🎬</div>
                  <h3 className="text-2xl font-bold mb-4">Production Vidéo</h3>
                  <p className="text-gray-300">
                    Création de contenu vidéo professionnel pour tous vos besoins : publicités, clips, documentaires.
                  </p>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                  <div className="text-6xl mb-4">📸</div>
                  <h3 className="text-2xl font-bold mb-4">Photographie</h3>
                  <p className="text-gray-300">
                    Sessions photo corporate, événementielles et artistiques avec des photographes expérimentés.
                  </p>
                </div>
                <div className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                  <div className="text-6xl mb-4">✂️</div>
                  <h3 className="text-2xl font-bold mb-4">Post-Production</h3>
                  <p className="text-gray-300">
                    Montage, étalonnage, effets spéciaux et sound design pour sublimer vos projets.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Portfolio Section */}
          <section className="min-h-screen py-20 px-8">
            <div className="max-w-6xl mx-auto text-white">
              <h2 className="text-5xl font-bold text-center mb-16">Portfolio</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                  <div className="bg-gray-700 h-64 mb-4 rounded"></div>
                  <h3 className="text-2xl font-bold mb-2">Campagne Luxury Brand</h3>
                  <p className="text-gray-300">Production complète pour une marque de luxe internationale</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                  <div className="bg-gray-700 h-64 mb-4 rounded"></div>
                  <h3 className="text-2xl font-bold mb-2">Documentaire Corporate</h3>
                  <p className="text-gray-300">Documentaire institutionnel pour une entreprise du CAC 40</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                  <div className="bg-gray-700 h-64 mb-4 rounded"></div>
                  <h3 className="text-2xl font-bold mb-2">Clip Musical</h3>
                  <p className="text-gray-300">Réalisation d'un clip pour un artiste émergent</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                  <div className="bg-gray-700 h-64 mb-4 rounded"></div>
                  <h3 className="text-2xl font-bold mb-2">Event Coverage</h3>
                  <p className="text-gray-300">Couverture complète d'un événement international</p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="min-h-screen py-20 px-8 flex items-center">
            <div className="max-w-4xl mx-auto w-full text-white">
              <h2 className="text-5xl font-bold text-center mb-16">Contactez-nous</h2>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Nom"
                    className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm rounded-lg text-white placeholder-gray-400 border border-white/20"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm rounded-lg text-white placeholder-gray-400 border border-white/20"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Message"
                    rows={6}
                    className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm rounded-lg text-white placeholder-gray-400 border border-white/20"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-200 transition"
                >
                  Envoyer
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
