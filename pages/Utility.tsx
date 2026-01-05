import React from 'react';
import Reveal from '../components/ui/Reveal';
import Card from '../components/ui/Card';
import Accordion from '../components/ui/Accordion';
import { ShieldCheck, Monitor, UserCheck, Star, ArrowRight, UserPlus, Zap, BarChart3, Info } from 'lucide-react';

const Utility: React.FC = () => {
  return (
    <>
      {/* HEADER */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-blue-600/10 via-purple-600/10 to-transparent blur-[120px] rounded-full pointer-events-none animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center md:text-left">
          <Reveal direction="none" scale={true}>
            <h1 className="text-5xl md:text-7xl font-heading font-black tracking-tighter text-white mb-8 leading-[1.1] drop-shadow-xl">
              What Your BCCS NFT Represents
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="max-w-4xl border-l-2 border-blue-500/30 pl-8 py-2 space-y-6 relative">
              <div className="absolute inset-y-0 left-[-2px] w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500"></div>
              <p className="text-xl text-zinc-200 leading-relaxed font-light">
                A Blue Collar Crypto Society NFT represents participation in a growing ecosystem centered around knowledge sharing, real-world skills, and community contribution.
              </p>
              <div className="flex flex-col gap-4 text-zinc-400 font-light text-sm tracking-tight">
                 <p>It is not a promise of profit, investment returns, or speculation.</p>
                 <p>It is a membership into a culture built around learning, teaching, and long-term participation.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* NFT UTILITY AT LAUNCH */}
      <section className="py-24 border-t border-white/5 relative bg-zinc-950/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <Reveal>
              <div className="h-full flex flex-col justify-center">
                 <h2 className="text-3xl md:text-4xl font-heading font-black text-white mb-8 tracking-tight drop-shadow-lg">NFT Utility at Launch</h2>
                 <p className="text-zinc-300 font-light mb-8">At launch, BCCS NFTs provide the following utility:</p>
                 
                 <div className="space-y-4">
                    {[
                      { text: 'Access to the Blue Collar Crypto Society community', color: 'bg-blue-500' },
                      { text: 'Eligibility for third-party NFT staking through Launch My NFT', color: 'bg-purple-500' },
                      { text: 'Early participation in future platform features as they are released', color: 'bg-orange-500' }
                    ].map((item, i) => (
                       <div key={i} className="flex items-center gap-4 p-5 rounded-2xl border border-white/10 bg-zinc-900/60 hover:bg-zinc-800/80 hover:border-white/20 transition-all group shadow-lg">
                          <div className={`w-2 h-2 rounded-full ${item.color} shadow-[0_0_10px_currentColor]`}></div>
                          <span className="text-zinc-200 font-light tracking-tight group-hover:text-white transition-colors">{item.text}</span>
                       </div>
                    ))}
                 </div>
                 
                 <div className="mt-10 p-6 bg-blue-500/10 border border-blue-500/20 rounded-2xl">
                    <p className="text-blue-200/90 text-xs font-mono leading-relaxed">
                      The NFT collection is intentionally released before the full social-fi platform to allow the community to form organically around shared identity and values.
                    </p>
                 </div>
              </div>
            </Reveal>

            <Reveal delay={0.2} scale={true}>
               <Card className="p-8 h-full flex flex-col relative overflow-hidden group border-white/10 bg-zinc-900/40" accent="blue">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 text-white">
                    <Monitor className="h-6 w-6 text-blue-300" strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-3xl font-heading font-black text-white mb-6 tracking-tight">Free Subdomains for NFT Holders</h3>
                  
                  <div className="space-y-4 text-zinc-300 font-light text-sm leading-relaxed mt-auto">
                    <p>
                      As part of the BCCS ecosystem, holders of a Blue Collar Crypto Society NFT are eligible to receive a free subdomain.
                    </p>
                    <p>
                      These subdomains are designed to give members a simple, recognizable digital identity that can be used across Web3 platforms and future integrations.
                    </p>
                    <p className="text-zinc-500 text-xs pt-4 border-t border-white/5 italic">
                       Subdomains are intended for identity and discovery purposes only and do not represent ownership of domain infrastructure or platform technology.
                    </p>
                  </div>
               </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="py-24 border-t border-white/5 bg-zinc-950/60 backdrop-blur-lg">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <h2 className="text-4xl font-heading font-black text-white mb-12 text-center tracking-tight drop-shadow-lg">Deep Dive & FAQ</h2>
          </Reveal>
          <div className="space-y-4">
            <Reveal delay={0.1}>
              <Accordion title="How does the staking work?">
                BCCS uses Launch My NFT for a seamless staking experience. By staking your NFT, you verify your long-term commitment to the society. While your NFT is staked, you remain the owner, and your digital asset earns potential rewards within the ecosystem without being locked away in a complex contract.
              </Accordion>
            </Reveal>
            <Reveal delay={0.2}>
              <Accordion title="Can I contribute if I'm not a tradie?">
                Absolutely. While our aesthetic is blue-collar, the "society" is open to anyone who values real work, education, and community contribution. We have room for educators, developers, artists, and creators who want to help bridge the physical and digital worlds.
              </Accordion>
            </Reveal>
            <Reveal delay={0.3}>
              <Accordion title="What is the Social-Fi vision?">
                Our vision is a platform where knowledge is currency. Unlike platforms that reward purely based on attention or hype, our Social-Fi platform aims to incentivize quality educational content. If you teach someone a skill—like welding, coding, or carpentry—the platform structure is designed to reward that value transfer.
              </Accordion>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CREATOR PARTICIPATION */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-heading font-black text-white mb-6 tracking-tight drop-shadow-lg">Creator Participation</h2>
              <p className="text-zinc-300 font-light text-lg mb-8 leading-relaxed">
                The BCCS platform is being built to reward people for sharing real knowledge, not chasing trends. Verified community members will be able to submit content such as:
              </p>
              
              <div className="grid grid-cols-1 gap-4 mb-8">
                 {['Trade education', 'Tool reviews', 'Real-world skill walkthroughs', 'Educational breakdowns related to blue-collar work'].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm text-zinc-200 font-medium p-3 rounded-lg bg-zinc-900/50 border border-white/5">
                       <div className="w-1.5 h-1.5 rounded-sm bg-blue-500"></div>
                       {item}
                    </div>
                 ))}
              </div>
              <p className="text-zinc-500 text-xs italic">All submitted content will be reviewed before being added to the platform.</p>
            </Reveal>

            <Reveal delay={0.2}>
               <div className="p-10 rounded-3xl border border-white/10 bg-zinc-900/60 backdrop-blur-xl shadow-2xl">
                 <h3 className="text-2xl font-heading text-white mb-6 tracking-tight">Creator Compensation</h3>
                 <div className="space-y-4 mb-8">
                    <p className="text-zinc-400 text-sm font-light leading-relaxed">
                       Creators whose content is approved and published will receive:
                    </p>
                    <ul className="space-y-3 text-zinc-300 text-sm font-light">
                       <li className="flex gap-3 items-center">• A set payout for creating the content once it is accepted</li>
                       <li className="flex gap-3 items-center">• Ongoing participation in platform revenue sharing</li>
                    </ul>
                    <p className="text-zinc-500 text-xs italic">Compensation is based on contribution, not popularity.</p>
                 </div>

                 <h4 className="text-white font-medium mb-4">Revenue Sharing Model</h4>
                 <p className="text-zinc-400 text-sm mb-6 leading-relaxed">Platform revenue is designed to be shared between creators, the community, and platform development.</p>
                 
                 <div className="bg-zinc-950/80 p-6 rounded-2xl border border-white/5 space-y-4">
                    <p className="text-xs font-mono text-zinc-500 uppercase">Example Split ($100 Revenue):</p>
                    <div className="flex justify-between items-center text-sm">
                       <span className="text-zinc-300">Content Creator</span>
                       <span className="text-blue-400">~$33</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                       <span className="text-zinc-300">Community</span>
                       <span className="text-purple-400">~$33</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                       <span className="text-zinc-300">Platform Support</span>
                       <span className="text-orange-400">~$33</span>
                    </div>
                 </div>
                 <p className="text-zinc-500 text-[10px] mt-4 leading-tight italic">This structure is designed to reward contribution while keeping the platform sustainable long term.</p>
               </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* BUILT TO GROW RESPONSIBLY */}
      <section className="py-24 relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-6">
           <Reveal>
             <h2 className="text-4xl font-heading font-black text-white mb-8 tracking-tight drop-shadow-lg">Built to Grow Responsibly</h2>
             <p className="text-xl text-zinc-300 font-light mb-12">BCCS is designed to grow intentionally.</p>
             
             <div className="grid md:grid-cols-3 gap-6 text-sm font-medium">
                <div className="p-6 rounded-2xl border border-white/10 bg-zinc-900/40 hover:bg-zinc-900/60 hover:border-blue-500/20 transition-all backdrop-blur-sm">Education comes first.</div>
                <div className="p-6 rounded-2xl border border-white/10 bg-zinc-900/40 hover:bg-zinc-900/60 hover:border-purple-500/20 transition-all backdrop-blur-sm">Community comes before infrastructure.</div>
                <div className="p-6 rounded-2xl border border-white/10 bg-zinc-900/40 hover:bg-zinc-900/60 hover:border-orange-500/20 transition-all backdrop-blur-sm">Utility is added only when it provides real value.</div>
             </div>
           </Reveal>
        </div>
      </section>
    </>
  );
};

export default Utility;