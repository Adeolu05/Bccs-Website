import React, { useState } from 'react';
import Button from '../components/ui/Button';
import Reveal from '../components/ui/Reveal';
import Card from '../components/ui/Card';
import Modal from '../components/ui/Modal';
import { ExternalLink, Layers, Palette, Info } from 'lucide-react';

const trades = [
  { name: "Carpenter", description: "The foundation of structure, shaping the wood that builds our homes." },
  { name: "Electrician", description: "Harnessing the power that lights up our lives and runs our industries." },
  { name: "Plumber", description: "The vital flow, ensuring water and sanitation reach every corner." },
  { name: "HVAC Technician", description: "Controlling the environment, keeping us cool in summer and warm in winter." },
  { name: "Welder", description: "Fusing metal with precision and heat, creating unbreakable bonds." },
  { name: "Diesel Mechanic", description: "The heart of heavy machinery, keeping the engines of commerce turning." },
  { name: "Equipment Operator", description: "Moving mountains with steel, clearing the path for progress." },
  { name: "Concrete Worker", description: "Setting the base, creating the solid surfaces we walk and build upon." },
  { name: "Roofer", description: "Protecting the sanctuary, ensuring every structure is safe from the elements." },
  { name: "Finishers", description: "The final touch, bringing aesthetic and perfection to every project." },
  { name: "Firefighter", description: "Brave protectors of life and property, running in when others run out." },
  { name: "EMT", description: "Critical care on the front lines, the first response in moments of crisis." },
  { name: "Police", description: "Maintaining order and safety, the shield that protects the community." }
];

const Collection: React.FC = () => {
  const [selectedTrade, setSelectedTrade] = useState<typeof trades[0] | null>(null);

  return (
    <>
      {/* SECTION 1 — COLLECTION OVERVIEW */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <Reveal direction="right" scale={true}>
              <h1 className="text-5xl md:text-7xl font-heading font-black tracking-tighter text-white mb-8 leading-[1.1] drop-shadow-xl">
                The Blue Collar<br />Crypto Society Collection
              </h1>
              <div className="space-y-6 text-zinc-300 font-light text-lg leading-relaxed mb-10">
                <p>
                  The Blue Collar Crypto Society collection represents the people who build, fix, and maintain the world around us.
                </p>
                <p>
                  It consists of a fixed supply of 3,333 NFTs, each inspired by real blue-collar trades and the environments they work in.
                </p>
                <p>
                  This collection is designed as an entry point into the BCCS ecosystem — combining art, identity, and long-term participation.
                </p>
              </div>
              <Button to="/utility" variant="primary">Learn About Utility</Button>
            </Reveal>

            <Reveal direction="left" delay={0.2} scale={true}>
              <div className="relative perspective-distant group">
                 <div className="aspect-[4/5] bg-zinc-900/30 border border-white/10 rounded-2xl backdrop-blur-md overflow-hidden p-1 relative shadow-2xl">
                    <img 
                       src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop" 
                       alt="Abstract Art" 
                       className="w-full h-full object-cover rounded-xl opacity-90 blur-sm grayscale transition-all duration-700"
                    />
                    <div className="absolute bottom-6 left-6 right-6 p-4 bg-zinc-950/70 backdrop-blur-xl border border-white/10 rounded-xl flex justify-between items-center">
                       <div>
                          <div className="text-[10px] text-zinc-400 uppercase tracking-wider font-bold">Fixed Supply</div>
                          <div className="text-white font-heading text-lg">3,333 NFTs</div>
                       </div>
                    </div>
                 </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 2 — TRADES REPRESENTED */}
      <section className="py-24 border-t border-white/5 bg-zinc-950/30 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Reveal>
             <h2 className="text-3xl md:text-5xl font-heading font-black text-white mb-6 text-center tracking-tight drop-shadow-lg">Trades Represented</h2>
             <p className="max-w-2xl mx-auto text-center text-zinc-400 font-light mb-16 text-lg leading-relaxed">
               The collection spans 13 blue-collar trades. Click on a trade to learn how it's represented in our digital ecosystem.
             </p>
          </Reveal>
          
          <div className="flex flex-wrap justify-center gap-4">
            {trades.map((trade, i) => (
              <Reveal key={trade.name} delay={i * 0.05} width="fit-content">
                <button 
                  onClick={() => setSelectedTrade(trade)}
                  className="group relative px-6 py-3 rounded-xl border border-white/10 bg-zinc-900/60 text-zinc-200 text-sm font-medium transition-all hover:bg-zinc-800/80 hover:border-white/30 hover:shadow-lg active:scale-95 backdrop-blur-md"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {trade.name}
                    <Info size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TRADE MODAL */}
      <Modal 
        isOpen={!!selectedTrade} 
        onClose={() => setSelectedTrade(null)} 
        title={`${selectedTrade?.name} in BCCS`}
      >
        <div className="space-y-6">
          <p className="text-xl text-zinc-200 font-light leading-relaxed">{selectedTrade?.description}</p>
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
            <h4 className="text-white font-bold mb-3 uppercase tracking-widest text-xs">Trait Potential</h4>
            <ul className="space-y-2 text-zinc-400 text-sm">
              <li>• Exclusive {selectedTrade?.name}-themed apparel</li>
              <li>• Specialized trade tools and equipment</li>
              <li>• Signature professional environments</li>
              <li>• Rare "Founder" variations for the trade</li>
            </ul>
          </div>
          <p className="text-zinc-500 text-sm italic">Each NFT in the collection is uniquely generated, ensuring no two artisans are exactly alike.</p>
        </div>
      </Modal>

      {/* SECTION 3 — ART & TRAIT PHILOSOPHY */}
      <section className="py-24 border-t border-white/5 bg-zinc-950/70 backdrop-blur-lg relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <Reveal scale={true}>
               <Card className="aspect-square flex items-center justify-center relative p-0 overflow-hidden border-white/10 bg-zinc-900/50">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-40"></div>
                  <div className="relative z-10 text-center px-10">
                     <Palette size={48} className="mx-auto mb-6 text-white drop-shadow-lg" />
                     <h3 className="font-heading text-4xl text-white font-black tracking-tight uppercase drop-shadow-md">Art & Trait Philosophy</h3>
                  </div>
               </Card>
            </Reveal>
            
            <Reveal delay={0.2}>
              <div className="space-y-10">
                 <p className="text-zinc-300 font-light text-lg leading-relaxed">
                   Each NFT is generated from a carefully designed trait system that emphasizes realism, authenticity, and respect for the trades.
                 </p>
                 <p className="text-zinc-300 font-light text-lg leading-relaxed">
                   Traits include tools, apparel, protective equipment, environments, and subtle branding elements — designed to feel grounded rather than exaggerated.
                 </p>
                 <p className="text-zinc-300 font-light text-lg leading-relaxed">
                   Special one-of-one pieces exist within the collection to honor history, resilience, and future-focused innovation.
                 </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 4 — HOW TO EXPLORE THE COLLECTION */}
      <section className="py-24 border-t border-white/5 bg-zinc-900/20 backdrop-blur-sm relative">
         <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <Reveal>
               <h2 className="text-3xl md:text-4xl font-heading font-black text-white mb-8 tracking-tight drop-shadow-lg">How to Explore the Collection</h2>
               <div className="space-y-10 mb-10">
                 <p className="text-zinc-300 font-light text-lg leading-relaxed">
                   The full collection will be available through a third-party minting platform.
                   Visitors can explore the collection, learn about utility, and follow along as the community grows around the artwork and shared values.
                 </p>
               </div>
               <div className="flex flex-col sm:flex-row justify-center gap-6">
                 {/* <Button href="#" variant="primary" icon={<ExternalLink size={14} />}>View Mint Information</Button> */}
                 <Button to="/utility" variant="secondary">Learn About Utility</Button>
               </div>
            </Reveal>
         </div>
      </section>
    </>
  );
};

export default Collection;