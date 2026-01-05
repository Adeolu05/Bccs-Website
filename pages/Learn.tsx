import React from 'react';
import Button from '../components/ui/Button';
import Reveal from '../components/ui/Reveal';
import Card from '../components/ui/Card';
import { 
  Play, 
  Globe, 
  Lock,
  Flame,
  ExternalLink,
  LineChart
} from 'lucide-react';

interface Video {
  id: string;
  title: string;
  description: string;
  url: string;
}

interface LearningCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  color: string;
  accent: 'blue' | 'purple' | 'orange' | 'emerald';
  videos: Video[];
}

const LEARNING_DATA: LearningCategory[] = [
  {
    id: 'crypto-basics',
    title: 'Basic Crypto Knowledge',
    icon: <Globe size={24} />,
    color: 'text-blue-400',
    accent: 'blue',
    videos: [
      { id: 'cb1', title: 'What is cryptocurrency', description: 'A beginner-friendly overview of digital assets and Web3 technology.', url: 'https://www.youtube.com/watch?v=8RjHAcSMbhQ' },
      { id: 'cb2', title: 'What is a wallet', description: 'Explains what wallets are and why they’re used to secure your digital property.', url: 'https://www.youtube.com/watch?v=d8IBpfs9bf4' },
      { id: 'cb3', title: 'What is an NFT', description: 'Covers NFTs, ownership, and common misconceptions about digital collectibles.', url: 'https://www.youtube.com/watch?v=FkUn86bH34M' },
      { id: 'cb4', title: 'What is staking', description: 'Learn how to put your digital assets to work and understand reward structures.', url: 'https://www.youtube.com/watch?v=CWUeZvwQ-28' },
    ]
  },
  {
    id: 'safety-scams',
    title: 'Safety & Scams',
    icon: <Lock size={24} />,
    color: 'text-orange-400',
    accent: 'orange',
    videos: [
      { id: 'ss1', title: 'How to stay safe in web 3', description: 'Essential best practices for avoiding common scams and protecting your keys.', url: 'https://www.youtube.com/watch?v=Eplk7vZDWoA' },
      { id: 'ss2', title: 'Common Web3 Mistakes to Avoid', description: 'A guide to helping beginners avoid costly errors in the digital economy.', url: 'https://www.youtube.com/watch?v=ddBAfVwX3i4' },
    ]
  },
  {
    id: 'trading-charts',
    title: 'How to read and trade charts',
    icon: <LineChart size={24} />,
    color: 'text-emerald-400',
    accent: 'emerald',
    videos: [
      { id: 'tr1', title: 'How to set up a trading view account', description: 'Step-by-step guide to configuring your charts to view and read market data.', url: 'https://www.youtube.com/watch?v=ParvJeBxMTY' },
      { id: 'tr2', title: 'How to read and place support and resistance', description: 'Identifying market floors and ceilings to understand price movement.', url: 'https://www.youtube.com/watch?v=0ON7PX3Xzj4' },
      { id: 'tr3', title: 'How to read and place trendlines', description: 'Visualizing market direction and identifying potential breakouts.', url: 'https://www.youtube.com/watch?v=ddBAfVwX3i4' },
      { id: 'tr4', title: 'What is Fib retracement and how to use it', description: 'Exploring advanced tools for pinpointing entry and exit levels.', url: 'https://www.youtube.com/watch?v=fYg8rc09xH8' },
    ]
  },
];

const Learn: React.FC = () => {
  return (
    <div className="relative pb-32">
      {/* SECTION 1 — INTRODUCTION */}
      <section className="pt-32 pb-20 relative bg-zinc-950/20 backdrop-blur-sm overflow-hidden text-center">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Reveal>
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-black text-blue-400 mb-10 shadow-lg uppercase tracking-widest">
              <Flame size={14} className="animate-pulse" />
              <span>BCCS University</span>
            </div>
            <h1 className="text-6xl md:text-9xl font-heading font-black tracking-tighter text-white mb-10 leading-[0.85] drop-shadow-2xl">
              Learn Web3, One <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 italic">Step at a Time.</span>
            </h1>
            <div className="text-xl text-zinc-300 font-light max-w-3xl mx-auto mb-16 leading-relaxed drop-shadow-md">
              <p>Web3 can feel overwhelming at first — especially if you’re new to digital wallets, NFTs, or blockchain technology. This page is designed to provide clear, beginner-friendly resources so you can learn at your own pace and explore safely.</p>
              <p className="mt-6 text-zinc-400 text-sm italic font-medium">BCCS does not provide financial advice. These resources are educational only.</p>
            </div>
            <Button onClick={() => document.getElementById('video-library')?.scrollIntoView({ behavior: 'smooth' })} variant="cobalt">Start Learning</Button>
          </Reveal>
        </div>
      </section>

      {/* SECTION 2 — HOW TO USE THESE RESOURCES */}
      <section className="py-24 border-y border-white/5 bg-zinc-950/40 backdrop-blur-md">
         <div className="max-w-4xl mx-auto px-6 text-center">
            <Reveal>
               <h2 className="text-4xl font-heading font-black text-white mb-8 drop-shadow-lg">How to Use These Resources</h2>
               <div className="text-zinc-300 text-lg font-light leading-relaxed mb-10 space-y-6 text-left">
                  <p>The videos below are curated from trusted educators within the Web3 space. They are meant to help you understand the basics before participating in any platform, project, or ecosystem.</p>
                  <div className="space-y-4">
                     <p className="text-zinc-200 font-medium">You are encouraged to:</p>
                     <ul className="space-y-2 text-zinc-400">
                        <li>• Take your time</li>
                        <li>• Verify information independently</li>
                        <li>• Never share private keys or recovery phrases</li>
                     </ul>
                  </div>
               </div>
            </Reveal>
         </div>
      </section>

      {/* SECTION 3 — VIDEO LEARNING LIBRARY */}
      <section id="video-library" className="max-w-7xl mx-auto px-6 pt-24 space-y-40">
        <div className="text-center">
           <Reveal>
              <h2 className="text-5xl font-heading font-black text-white mb-6 drop-shadow-lg">Video Learning Library</h2>
              <p className="text-zinc-400 text-lg font-light max-w-2xl mx-auto leading-relaxed">Below are curated educational videos covering the fundamentals of Web3. These videos are hosted externally on YouTube and are not produced by BCCS unless otherwise stated.</p>
           </Reveal>
        </div>

        {LEARNING_DATA.map((category, idx) => (
          <div key={category.id} className="scroll-mt-48">
            <Reveal delay={idx * 0.1}>
              <div className="flex items-center gap-4 mb-16 border-l-4 border-zinc-800 pl-8">
                <div className={`p-3 rounded-2xl bg-zinc-900/60 border border-white/5 ${category.color} backdrop-blur-sm`}>
                  {category.icon}
                </div>
                <h2 className="text-3xl font-heading font-black tracking-tight text-white uppercase drop-shadow-md">{category.title}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.videos.map((video, vIdx) => (
                  <Reveal key={video.id} delay={vIdx * 0.05} width="100%">
                    <Card className="p-8 h-full flex flex-col group bg-zinc-900/40" accent={category.accent}>
                      <div className="flex-grow text-left">
                        <div className={`w-14 h-14 flex items-center justify-center border border-white/10 bg-white/5 ${category.color} rounded-2xl group-hover:bg-zinc-800 transition-all mb-8`}>
                           <Play size={24} fill="currentColor" />
                        </div>
                        <h3 className="text-white font-bold text-xl mb-3 tracking-tight">{video.title}</h3>
                        <p className="text-zinc-400 font-light text-sm leading-relaxed mb-8">{video.description}</p>
                      </div>

                      <div className="pt-6 border-t border-white/5">
                        <Button href={video.url} variant="cobalt" className="w-full" icon={<ExternalLink size={14} />}>
                          Watch on YouTube
                        </Button>
                      </div>
                    </Card>
                  </Reveal>
                ))}
              </div>
            </Reveal>
          </div>
        ))}
      </section>

      {/* SECTION 4 — CONTINUE EXPLORING */}
      <section className="py-32 mt-20 border-t border-white/5 bg-zinc-950/80 backdrop-blur-xl text-center">
         <div className="max-w-4xl mx-auto px-6">
            <Reveal>
               <h2 className="text-4xl font-heading font-black text-white mb-10 drop-shadow-lg">Continue Exploring BCCS</h2>
               <div className="flex flex-wrap justify-center gap-6">
                 <Button to="/collection" variant="primary">Explore the Collection</Button>
                 <Button to="/utility" variant="primary">Learn About Utility</Button>
                 <Button to="/lore" variant="primary">Read the Lore</Button>
               </div>
            </Reveal>
         </div>
      </section>
    </div>
  );
};

export default Learn;