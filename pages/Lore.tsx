import React from 'react';
import Reveal from '../components/ui/Reveal';
import Button from '../components/ui/Button';

const Lore: React.FC = () => {
  return (
    <>
      {/* SECTION 1 — THE FOUNDATION */}
      <section className="min-h-[80vh] flex items-center justify-center py-32 px-6 relative overflow-hidden text-center">
        <div className="max-w-6xl mx-auto relative z-10">
          <Reveal>
            <h1 className="font-heading text-6xl md:text-8xl text-white font-black tracking-tighter mb-12 drop-shadow-2xl">
              Built on Work. Sustained by Knowledge.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
             <div className="space-y-6 text-xl text-zinc-200 font-light leading-relaxed max-w-3xl mx-auto drop-shadow-md">
               <p>The world has always been built by people who work with their hands.</p>
               <p>Long before digital platforms, communities were formed around shared skills, mentorship, and the passing down of knowledge from one generation to the next.</p>
               <p>Blue Collar Crypto Society exists to carry that tradition forward into the digital age.</p>
             </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 2 — THE PROBLEM BCCS ADDRESSES */}
      <section className="py-32 border-t border-white/5 bg-zinc-950/60 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20">
             <Reveal>
                <h2 className="font-heading text-4xl md:text-6xl text-white tracking-tight drop-shadow-lg">A Changing World, Familiar Challenges</h2>
             </Reveal>
             <Reveal delay={0.2}>
                <div className="space-y-8 text-lg text-zinc-300 font-light leading-relaxed">
                   <p>As technology advances, the gap between those who build the world and those who benefit from it has grown wider.</p>
                   <p>Complex systems, unclear incentives, and gatekept knowledge have made it difficult for everyday workers to participate in emerging digital economies.</p>
                   <p>BCCS was created to change that by making knowledge accessible and participation meaningful.</p>
                </div>
             </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 3 — THE CORE BELIEF */}
      <section className="py-40 border-y border-white/5 text-center bg-zinc-900/10 backdrop-blur-sm">
         <div className="max-w-6xl mx-auto px-6 relative z-10">
            <Reveal>
               <h2 className="font-heading text-5xl md:text-7xl text-white leading-tight mb-16 tracking-tighter drop-shadow-xl">
                 Knowledge Shared Is Value Multiplied
               </h2>
               <div className="max-w-4xl mx-auto space-y-8 text-xl text-zinc-200 font-light text-left md:text-center">
                 <p>Blue Collar Crypto Society is built on a simple belief: teaching others creates more value than hoarding information.</p>
                 <p>By encouraging education, contribution, and collaboration, the community creates opportunities that extend beyond any single individual.</p>
                 <p>This is not about shortcuts or speculation — it’s about understanding, participation, and long-term growth.</p>
               </div>
            </Reveal>
         </div>
      </section>

      {/* SECTION 4 — COMMUNITY OVER INDIVIDUALS */}
      <section className="py-32 bg-zinc-950/70 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <Reveal>
               <h2 className="font-heading text-5xl text-white tracking-tight leading-none drop-shadow-lg">No Single Hero, Only Shared Progress</h2>
            </Reveal>
            <Reveal delay={0.2}>
               <div className="space-y-6 text-zinc-300 font-light text-lg leading-relaxed">
                 <p>
                   BCCS is not centered around a single founder, character, or voice.
                   It is shaped by the people who participate, teach, learn, and contribute over time.
                 </p>
                 <p>
                   Tradespeople, creators, educators, and builders all play a role in strengthening the ecosystem through shared effort.
                 </p>
               </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 5 — LOOKING FORWARD */}
      <section className="py-32 border-t border-white/5 bg-zinc-950/80 backdrop-blur-xl text-center">
         <div className="max-w-4xl mx-auto px-6">
            <Reveal>
               <h2 className="font-heading text-5xl text-white tracking-tight mb-8 drop-shadow-lg">Building Forward, Together</h2>
               <div className="text-zinc-400 font-light text-xl mb-12 space-y-8">
                  <p>The future of Blue Collar Crypto Society is focused on empowering people through education and collaboration.</p>
                  <p>As tools evolve and platforms grow, the core mission remains the same: bring real-world skills into the digital economy in a way that is transparent, inclusive, and sustainable.</p>
               </div>
               <Button to="/utility" variant="primary">Explore the Ecosystem</Button>
            </Reveal>
         </div>
      </section>
    </>
  );
};

export default Lore;