import React from 'react';
import Button from '../components/ui/Button';
import Reveal from '../components/ui/Reveal';
import { ArrowUpRight, Globe, Music, Coins, GraduationCap } from 'lucide-react';

const PartnerCard: React.FC<{ 
  title: string; 
  description: React.ReactNode; 
  icon: React.ReactNode; 
  linkText: string;
  link: string;
  delay?: number;
  color?: string;
}> = ({ title, description, icon, linkText, link, delay = 0, color = "bg-blue-500" }) => (
  <Reveal delay={delay} width="100%">
    <div className="group h-full relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 backdrop-blur-xl transition-all duration-500 flex flex-col p-8 hover:bg-zinc-900/60 shadow-lg">
       <div className={`absolute -top-20 -right-20 w-40 h-40 ${color} blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity`}></div>
       <div className="relative z-10 flex-grow">
          <div className="flex justify-between items-start mb-8">
             <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300">
                {icon}
             </div>
             <ArrowUpRight className="text-zinc-600 group-hover:text-white transition-colors" />
          </div>
          <h3 className="text-2xl font-heading font-medium text-white mb-4 drop-shadow-md">{title}</h3>
          <div className="text-zinc-300 font-light leading-relaxed text-sm space-y-4">{description}</div>
       </div>
       <div className="relative z-10 mt-8 pt-8 border-t border-white/5">
          <Button href={link} variant="ghost" className="pl-0 hover:text-white">
             {linkText}
          </Button>
       </div>
    </div>
  </Reveal>
);

const Partnerships: React.FC = () => {
  return (
    <>
      {/* SECTION 1 — PARTNERSHIPS OVERVIEW */}
      <section className="pt-32 pb-24 relative overflow-hidden text-center md:text-left">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
           <Reveal>
             <h1 className="text-5xl md:text-7xl font-heading font-black tracking-tighter text-white mb-8 leading-[1.1] drop-shadow-xl">
               Partners & Ecosystem Alignment
             </h1>
             <div className="text-xl text-zinc-300 font-light max-w-2xl mx-auto md:mx-0 drop-shadow-md">
               <p>Blue Collar Crypto Society collaborates with partners who share a common mission: education, community building, and real-world integration into Web3. Each partner contributes in a specific way that supports the BCCS ecosystem while remaining independent in their own operations.</p>
             </div>
           </Reveal>
        </div>
      </section>

      {/* PARTNER SECTIONS */}
      <section className="py-24 border-t border-white/5 bg-zinc-950/60 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <PartnerCard 
              title="Get Hype Media"
              icon={<Globe size={28} />}
              linkText="Learn About Get Hype Media"
              link="https://gethype.digital/"
              description={<p>Get Hype Media provides a one-stop ecosystem for onboarding companies, creators, and projects into Web3. They offer both Web3-native and real-world media coverage, helping communities grow visibility while maintaining authenticity. Within BCCS, Get Hype Media supports ecosystem growth, exposure, and responsible onboarding.</p>}
            />
            <PartnerCard 
              title="DigiBeatz"
              icon={<Music size={28} />}
              linkText="Explore DigiBeatz"
              link="https://gethype.digital/DIGIBEATZ/"
              delay={0.1}
              color="bg-purple-500"
              description={<p>DigiBeatz is a Web3-native music platform built to give artists ownership and control over their work. By featuring DigiBeatz, BCCS introduces its community to creator-owned music and alternative distribution models that align with education and independence. DigiBeatz remains an independent platform while collaborating with BCCS to expand awareness of Web3 music.</p>}
            />
            <PartnerCard 
              title="Koinz"
              icon={<Coins size={28} />}
              linkText="Learn More About Koinz"
              link="https://dexscreener.com/solana/AFZQ4fY1ayPypqGDuYfUZzqax5wUbCEGtPaZJEJQLCEh"
              delay={0.2}
              color="bg-emerald-500"
              description={<p>Koinz is a community-focused project designed to explore real-world asset integration on the blockchain. Within the BCCS ecosystem, Koinz is used exclusively for NFT staking rewards at launch. BCCS does not manage or control Koinz and does not facilitate token transactions directly.</p>}
            />
            <PartnerCard 
              title="Hineycoin & Hineyversity"
              icon={<GraduationCap size={28} />}
              linkText="Visit Hineyversity"
              link="https://hineycoin.online/"
              delay={0.3}
              color="bg-orange-500"
              description={
                <>
                  <p>Hineycoin is a Web3 project focused on empowering individuals through education and accessible knowledge. Hineyversity serves as an educational hub, providing Web3 learning resources that help onboard new users safely and responsibly.</p>
                  <p>BCCS utilizes hineyversitys high quality web3 introdution and educational videos as its primary source of teaching material for web3 knowledge.</p>
                </>
              }
            />
          </div>

          {/* SECTION 6 — FUTURE PARTNERSHIPS */}
          <div className="mt-24 p-12 rounded-3xl border border-white/10 bg-zinc-900/60 backdrop-blur-xl text-center relative overflow-hidden shadow-2xl">
             <Reveal>
               <h2 className="text-3xl font-heading font-medium text-white mb-6 drop-shadow-lg">Future Partnerships</h2>
               <div className="text-zinc-300 font-light leading-relaxed mb-8 max-w-2xl mx-auto">
                 <p>Blue Collar Crypto Society is open to collaborating with partners that align with its mission of education, contribution, and community-first growth. Projects, platforms, and creators interested in partnership opportunities may request consideration through official BCCS communication channels.</p>
               </div>
               <Button href="mailto:bccsonsol@gmail.com" variant="secondary">Partnership Inquiries</Button>
             </Reveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default Partnerships;