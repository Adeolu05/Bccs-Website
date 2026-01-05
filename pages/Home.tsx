import React, { useState, useEffect } from 'react';
import Button from '../components/ui/Button';
import Reveal from '../components/ui/Reveal';
import Card from '../components/ui/Card';
import SEO from '../components/ui/SEO';
import { ArrowRight, Hammer, Zap, Music, Users, Play, BookOpen, Heart, Layers, Globe } from 'lucide-react';

const Home: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      window.requestAnimationFrame(() => {
        setScrollY(window.scrollY);
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <SEO 
        description="Empowering tradespeople and builders in the digital economy. Join the Blue Collar Crypto Society today." 
      />
      
      {/* SECTION 1 — HERO */}
      <section className="relative overflow-hidden pt-24 pb-32 sm:pt-40 sm:pb-48">
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div 
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-[0.08] scale-110 will-change-transform"
            style={{ 
              transform: `translate3d(0, ${scrollY * 0.15}px, 0)`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/20 to-zinc-950/80"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <Reveal>
              <h1 className="text-5xl sm:text-7xl lg:text-[7.5rem] font-heading font-black tracking-tighter mb-10 leading-[0.9] text-white uppercase">
                <span className="block mb-2">Built by Workers.</span>
                <span className="block mb-2">Powered by Knowledge.</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 drop-shadow-[0_0_25px_rgba(59,130,246,0.3)] mt-4">
                  Owned by Community.
                </span>
              </h1>
            </Reveal>
            
            <Reveal delay={0.2}>
              <p className="max-w-2xl mx-auto text-xl text-zinc-300 mb-12 leading-relaxed font-light tracking-tight drop-shadow-md">
                Blue Collar Crypto Society is a Web3 community built around real skills, shared knowledge, and long-term value — connecting the blue-collar world to the digital economy.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                <Button to="/collection" variant="cobalt" icon={<ArrowRight size={18} />}>
                  View the Collection
                </Button>
                <Button to="/utility" variant="secondary" icon={<Play size={14} fill="currentColor" />}>
                  Learn How It Works
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 2 — WHAT IS BLUE COLLAR CRYPTO SOCIETY? */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <Reveal direction="right">
              <div className="relative group">
                 <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-orange-600/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                 <div className="relative rounded-3xl border border-white/10 bg-zinc-900/40 p-3 backdrop-blur-xl overflow-hidden shadow-2xl">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-800 relative">
                      <img 
                        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop" 
                        alt="BCCS Workers" 
                        className="absolute inset-0 w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-1000"
                      />
                    </div>
                 </div>
              </div>
            </Reveal>

            <Reveal direction="left" delay={0.2}>
              <div className="space-y-10">
                <h2 className="text-5xl font-heading font-black tracking-tight text-white leading-tight uppercase drop-shadow-lg">
                  What Is Blue Collar Crypto Society?
                </h2>
                <div className="space-y-6 text-zinc-300 font-light leading-relaxed text-xl">
                  <p>
                    Blue Collar Crypto Society (BCCS) is a community-first platform created to help tradespeople, builders, and working-class creators participate in Web3 without abandoning their real-world skills.
                  </p>
                  <p>
                    This is not a project built on hype or speculation. BCCS is built on education, contribution, and shared growth through knowledge.
                  </p>
                </div>
                <div className="pt-6">
                  <Button to="/utility" variant="primary">Explore Utility</Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 3 — EDUCATION OVER HYPE */}
      <section className="py-24 relative border-y border-white/5 bg-zinc-950/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <Reveal>
               <h2 className="text-5xl font-heading font-black tracking-tight text-white mb-8 uppercase drop-shadow-lg">Education Over Hype</h2>
               <div className="space-y-6 text-zinc-300 text-xl font-light leading-relaxed mb-10">
                  <p>
                    BCCS is built on the belief that long-term value comes from teaching, learning, and sharing knowledge.
                  </p>
                  <p>
                    Instead of asking people to blindly trust complex systems, the community focuses on helping members understand Web3 safely and responsibly — with an emphasis on real-world application.
                  </p>
               </div>
               <Button to="/learn" variant="cobalt">Learn Web3 Basics</Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 4 — COMMUNITY FIRST, ALWAYS */}
      <section className="py-24 relative bg-zinc-950/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <Reveal direction="right">
              <div className="space-y-10">
                <h2 className="text-5xl font-heading font-black tracking-tight text-white leading-tight uppercase drop-shadow-lg">
                  Community First, Always
                </h2>
                <div className="space-y-6 text-zinc-300 font-light leading-relaxed text-xl">
                  <p>
                    Blue Collar Crypto Society is built around people who already create value in the real world.
                  </p>
                  <p>
                    By bringing trades, creators, and educators together under one ecosystem, BCCS aims to create opportunities through shared knowledge, not gatekeeping.
                  </p>
                </div>
                <div className="pt-6">
                  <Button to="/lore" variant="secondary">Read the Lore</Button>
                </div>
              </div>
            </Reveal>
            <Reveal direction="left" delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-8 text-center" accent="blue">
                  <Users className="mx-auto mb-4 text-blue-400" size={32} />
                  <div className="text-sm font-bold text-zinc-200">Shared Progress</div>
                </Card>
                <Card className="p-8 text-center" accent="orange">
                  <Hammer className="mx-auto mb-4 text-orange-400" size={32} />
                  <div className="text-sm font-bold text-zinc-200">Real Skills</div>
                </Card>
                <Card className="p-8 text-center" accent="purple">
                  <BookOpen className="mx-auto mb-4 text-purple-400" size={32} />
                  <div className="text-sm font-bold text-zinc-200">Education</div>
                </Card>
                <Card className="p-8 text-center" accent="emerald">
                  <Heart className="mx-auto mb-4 text-emerald-400" size={32} />
                  <div className="text-sm font-bold text-zinc-200">No Gatekeeping</div>
                </Card>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 5 — DISCOVER MORE (NAVIGATION BRIDGE) */}
      <section className="py-24 relative border-t border-white/5 bg-zinc-900/40 backdrop-blur-sm overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <Reveal>
               <h2 className="text-4xl md:text-5xl font-heading font-black tracking-tight text-white mb-4 uppercase drop-shadow-lg">Explore the Ecosystem</h2>
               <p className="text-zinc-400 font-light text-lg">Four core paths to explore within the Blue Collar Crypto Society.</p>
            </Reveal>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Reveal delay={0.1}>
              <Card className="p-8 h-full flex flex-col items-center text-center group" accent="blue">
                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-8 shadow-inner group-hover:scale-110 group-hover:bg-blue-500/30 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-500">
                  <Layers size={32} strokeWidth={1.5} />
                </div>
                <div className="flex-grow flex flex-col items-center">
                   <h3 className="text-white font-heading font-bold text-xl mb-4 uppercase">The Collection</h3>
                   <p className="text-zinc-400 text-sm font-light leading-relaxed mb-10">Representing 3,333 artisans and tradespeople in the digital world.</p>
                </div>
                <Button to="/collection" variant="primary" className="w-full">View Collection</Button>
              </Card>
            </Reveal>

            <Reveal delay={0.2}>
              <Card className="p-8 h-full flex flex-col items-center text-center group" accent="orange">
                <div className="w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 mb-8 shadow-inner group-hover:scale-110 group-hover:bg-orange-500/30 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.3)] transition-all duration-500">
                  <Zap size={32} strokeWidth={1.5} />
                </div>
                <div className="flex-grow flex flex-col items-center">
                   <h3 className="text-white font-heading font-bold text-xl mb-4 uppercase">Utility & Rewards</h3>
                   <p className="text-zinc-400 text-sm font-light leading-relaxed mb-10">Membership, subdomains, and sharing in the ecosystem growth.</p>
                </div>
                <Button to="/utility" variant="primary" className="w-full">Explore Utility</Button>
              </Card>
            </Reveal>

            <Reveal delay={0.3}>
              <Card className="p-8 h-full flex flex-col items-center text-center group" accent="purple">
                <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-8 shadow-inner group-hover:scale-110 group-hover:bg-purple-500/30 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all duration-500">
                  <Music size={32} strokeWidth={1.5} />
                </div>
                <div className="flex-grow flex flex-col items-center">
                   <h3 className="text-white font-heading font-bold text-xl mb-4 uppercase">Music on DigiBeatz</h3>
                   <p className="text-zinc-400 text-sm font-light leading-relaxed mb-10">Returning ownership and creative freedom back to music creators.</p>
                </div>
                <Button to="/digibeatz" variant="primary" className="w-full">Visit DigiBeatz</Button>
              </Card>
            </Reveal>

            <Reveal delay={0.4}>
              <Card className="p-8 h-full flex flex-col items-center text-center group" accent="emerald">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-8 shadow-inner group-hover:scale-110 group-hover:bg-emerald-500/30 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-500">
                  <Globe size={32} strokeWidth={1.5} />
                </div>
                <div className="flex-grow flex flex-col items-center">
                   <h3 className="text-white font-heading font-bold text-xl mb-4 uppercase">Our Partners</h3>
                   <p className="text-zinc-400 text-sm font-light leading-relaxed mb-10">Discover how our partners help bridge the real world to Web3.</p>
                </div>
                <Button to="/partnerships" variant="primary" className="w-full">View Partners</Button>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;