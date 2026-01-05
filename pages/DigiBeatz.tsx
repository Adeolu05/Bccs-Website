import React, { useState, useRef, useEffect } from 'react';
import Button from '../components/ui/Button';
import Reveal from '../components/ui/Reveal';
import { Play, Pause, ExternalLink, Music, ChevronLeft, ChevronRight } from 'lucide-react';

interface Track {
  id: number | string;
  title: string;
  artist: string;
  image: string;
  duration: string;
  previewUrl: string;
  purchaseUrl: string;
}

const featuredTracks: Track[] = [
  { id: 1, title: "WTHYM", artist: "Mozay Calloway", image: "/images/Mozay Calloway – WTHYM.png", duration: "01:42", previewUrl: "/music/WTHYM- Mozay Calloway-[AudioTrimmer.com].mp3", purchaseUrl: "https://www.launchmynft.io/collections/9YiXhHXCHKsffgmLDkVPDpydo6BHvzmanNQHiC8vUwAK/Pg2M7hRsRDJkkJn20dse" },
  { id: 2, title: "Holly", artist: "Mr Darius", image: "/images/Darius – Holly.png", duration: "00:32", previewUrl: "../publ/music/Holly- Mr Darius-[AudioTrimmer.com].mp3", purchaseUrl: "https://launchmynft.io/sol/14435/" },
  { id: 3, title: "Beautiful Day", artist: "Stu Kwan", image: "/images/Stu Kwan – Beautiful Day.png", duration: "02:49", previewUrl: "/music/Beautiful-Day.mp3", purchaseUrl: "https://launchmynft.io/sol/14707" },
  { id: 4, title: "Anthem", artist: "Muzik", image: "/images/Muzik – Anthem.png", duration: "00:15", previewUrl: "/music/Muzik- Anthem-[AudioTrimmer.com].mp3", purchaseUrl: "https://launchmynft.io/sol/15384/" },
  { id: 5, title: "Cali", artist: "Ade Kafeel", image: "/images/Ade Kafeel – Cali.png", duration: "00:31", previewUrl: "/music/Cali- Ade Kafeel-[AudioTrimmer.com].mp3", purchaseUrl: "https://launchmynft.io/sol/15116/" },
];

const libraryTracks: Track[] = [
  { id: 'l1', title: "Phantom of the Swapera", artist: "Anonymous", image: "/images/Phantom of the Swapera.png", duration: "00:34", previewUrl: "/music/Roundtrippers Anonymous-Phantom of the Swapera-[AudioTrimmer.com].mp3", purchaseUrl: "https://launchmynft.io/sol/15707" },
  { id: 'l2', title: "Get Back", artist: "Thanos", image: "/images/Get back.png", duration: "00:28", previewUrl: "/music/Getback-Thanos-[AudioTrimmer.com].mp3", purchaseUrl: "https://launchmynft.io/sol/15934" },
  { id: 'l3', title: "DigiGrams", artist: "Thanos", image: "/images/DigiGrams.png", duration: "00:31", previewUrl: "/music/DigiGramz-Thanos-[AudioTrimmer.com].mp3", purchaseUrl: "https://launchmynft.io/sol/15936" },
  { id: 'l4', title: "Tryna Get Paid", artist: "Love Lewyy", image: "/images/Love Lewyy.png", duration: "03:11", previewUrl: "/music/Tryna-Get-Paid.mp3", purchaseUrl: "https://launchmynft.io/sol/16202" },
  { id: 'l5', title: "Gigar Lounge", artist: "Preshzino", image: "/images/Preshzino.png", duration: "03:12", previewUrl: "/music/VIBES.mp3", purchaseUrl: "https://launchmynft.io/sol/16313" },
  { id: 'l6', title: "Get Some Weed", artist: "Ade kafeel", image: "/images/Get some weed.png", duration: "02:48", previewUrl: "/music/Still-Blazing.mp3", purchaseUrl: "https://launchmynft.io/sol/16495" },
  { id: 'l7', title: "SIGNZ", artist: "Meta Guardianz", image: "/images/SIGNZ – Meta Guardianz.png", duration: "00:32", previewUrl: "/music/Signz vol.1- Meta Guardianz-[AudioTrimmer.com].mp3", purchaseUrl: "https://launchmynft.io/sol/16638" },
  { id: 'l8', title: "RACKS", artist: "Ade Kafeel", image: "/images/RACKS – Show 1000 Anthem.png", duration: "00:42", previewUrl: "/music/RACKS- Ade Kafeel-[AudioTrimmer.com].mp3", purchaseUrl: "https://launchmynft.io/sol/16796" },
  { id: 'l8', title: "Ridin", artist: "Estuardo", image: "/images/estuardo.png", duration: "00:24", previewUrl: "/music/Ridin- Estuardo-[AudioTrimmer.com].mp3", purchaseUrl: "https://launchmynft.io/sol/16932" },
  { id: 'l9', title: "ALF", artist: "Ade Kafeel", image: "/images/Ade kafeel – Alf.png", duration: "00:28", previewUrl: "/music/ALF-Ade Kafeel-[AudioTrimmer.com].mp3", purchaseUrl: "https://launchmynft.io/sol/17053" },
  { id: 'l9', title: "Spin The Rock", artist: "Rocky2Grimey", image: "/images/Rocky2Grimey – Spin The Block.png", duration: "00:25", previewUrl: "/music/Spin the Block-Rocky2Grimey-[AudioTrimmer.com].mp3", purchaseUrl: "https://launchmynft.io/sol/17507" },
  { id: '20', title: "Sol Food Vol. 2", artist: "Nessy", image: "/images/Nessy – Sol Food Vol. 2.png", duration: "00:32", previewUrl: "/music/Sol Food Vol.2- Nessy-[AudioTrimmer.com].mp3", purchaseUrl: "https://launchmynft.io/sol/19611" },
  { id: '21', title: "$KOINZ 1 year anniversary", artist: "Money Miller", image: "/images/$KOINZ 1 Year – Money Miller.png", duration: "00:33", previewUrl: "/music/1 year anniversary- Money Miller-[AudioTrimmer.com].mp3", purchaseUrl: "https://launchmynft.io/sol/21266" },
  { id: '21', title: "Favella Dreams", artist: "Ade Kafeel", image: "/images/Favella Dream – Chaz Akeem.png", duration: "00:25", previewUrl: "/music/Favella Dreams- Ade Kafeel-[AudioTrimmer.com].mp3", purchaseUrl: "https://launchmynft.io/sol/21349" },
  { id: '22', title: "How Many", artist: "Ade Kafeel", image: "/images/How Many – Ade x Thanos.png", duration: "00:25", previewUrl: "/music/How Many-Ade Kafeel-[AudioTrimmer.com].mp3", purchaseUrl: "https://launchmynft.io/sol/21350" },
];

const TrackItem: React.FC<{ 
  track: Track; 
  isPlaying: boolean; 
  onTogglePlay: (track: Track) => void; 
  variant?: 'card' | 'row' 
}> = ({ track, isPlaying, onTogglePlay, variant = 'card' }) => {
  if (variant === 'row') {
    return (
      <div 
        onClick={() => onTogglePlay(track)}
        className={`group flex items-center gap-4 p-4 rounded-2xl border transition-all cursor-pointer backdrop-blur-md ${
          isPlaying ? 'bg-purple-500/20 border-purple-500/50' : 'bg-zinc-900/50 border-white/5 hover:border-white/20 hover:bg-zinc-800/60'
        }`}
      >
        <div className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0 shadow-lg">
          <img src={track.image} alt="" className="w-full h-full object-cover" />
          <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity ${isPlaying ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
            {isPlaying ? <Pause size={18} className="text-white fill-current" /> : <Play size={18} className="text-white fill-current" />}
          </div>
        </div>
        <div className="flex-grow min-w-0 text-left">
          <h4 className="text-sm font-bold truncate text-white">{track.title}</h4>
          <p className="text-zinc-400 text-xs font-medium truncate uppercase">{track.artist}</p>
        </div>
        <a href={track.purchaseUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="p-2.5 text-zinc-500 hover:text-white" title="View Music NFT">
          <ExternalLink size={16} />
        </a>
      </div>
    );
  }

  return (
    <div className={`group rounded-3xl border transition-all shrink-0 w-[300px] sm:w-[350px] snap-center overflow-hidden backdrop-blur-md ${isPlaying ? 'bg-zinc-900/70 border-purple-500/60' : 'bg-zinc-900/40 border-white/10'}`}>
      <div className="p-3">
        <div onClick={() => onTogglePlay(track)} className="aspect-square bg-zinc-950/50 rounded-2xl overflow-hidden relative mb-5 cursor-pointer shadow-xl">
          <img src={track.image} alt="" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className={`w-16 h-16 rounded-full backdrop-blur-xl flex items-center justify-center text-white border border-white/20 ${isPlaying ? 'bg-purple-500' : 'bg-white/10'}`}>
              {isPlaying ? <Pause size={28} fill="currentColor" /> : <Play size={28} fill="currentColor" />}
            </div>
          </div>
        </div>
        <div className="px-3 pb-4 text-left">
          <div className="flex justify-between items-center">
            <div className="min-w-0">
              <h3 className="font-bold text-lg text-white truncate">{track.title}</h3>
              <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">{track.artist}</p>
            </div>
            <a href={track.purchaseUrl} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white/5 text-zinc-400 hover:text-white transition-all border border-white/5" title="View Music NFT">
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const DigiBeatz: React.FC = () => {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const playPromiseRef = useRef<Promise<void> | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);
  const PREVIEW_LIMIT = 30;

  const handleTogglePlay = (track: Track) => {
    if (currentTrack?.id === track.id) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentTrack(track);
      setIsPlaying(true);
    }
  };

  const slide = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = 400;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    if (!audioRef.current) audioRef.current = new Audio();
    const audio = audioRef.current;
    const stopAtLimit = () => {
      if (audio.currentTime >= PREVIEW_LIMIT) {
        audio.pause(); audio.currentTime = 0; setIsPlaying(false);
      }
    };
    audio.addEventListener('timeupdate', stopAtLimit);
    return () => audio.removeEventListener('timeupdate', stopAtLimit);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!currentTrack || !audio) return;
    const syncPlayback = async () => {
      if (audio.src !== currentTrack.previewUrl) { audio.src = currentTrack.previewUrl; audio.load(); }
      if (playPromiseRef.current) try { await playPromiseRef.current; } catch {}
      if (isPlaying) {
        playPromiseRef.current = audio.play();
        try { await playPromiseRef.current; } catch (e: any) { if (e.name !== 'AbortError') console.error(e); }
      } else { audio.pause(); }
    };
    syncPlayback();
  }, [currentTrack, isPlaying]);

  return (
    <div className="min-h-screen">
      {/* SECTION 1 — DIGIBEATZ OVERVIEW */}
      <section className="pt-32 pb-24 relative overflow-hidden bg-gradient-to-b from-purple-900/10 to-transparent text-center">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Reveal>
            <h1 className="text-6xl md:text-8xl font-heading font-black text-white mb-8 tracking-tighter drop-shadow-xl">
              DigiBeatz: Music, Ownership, and Creative Freedom
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
             <div className="text-zinc-300 font-light text-xl max-w-3xl mx-auto mb-12 leading-relaxed drop-shadow-md">
               <p>DigiBeatz is a Web3-native music platform built to return ownership, control, and creative freedom back to artists. Instead of relying on traditional music labels and intermediaries, DigiBeatz allows artists to distribute music directly to listeners using blockchain-based ownership models. BCCS features DigiBeatz to introduce the community to Web3 music in a way that aligns with education, transparency, and creator empowerment.</p>
             </div>
             <Button onClick={() => featuredRef.current?.scrollIntoView({ behavior: 'smooth' })} variant="cobalt">Explore Featured Tracks</Button>
          </Reveal>
        </div>
      </section>

      {/* SECTION 2 — WHY DIGIBEATZ IS FEATURED ON BCCS */}
      <section className="py-24 border-y border-white/5 bg-zinc-950/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
              <Reveal>
                 <h2 className="text-5xl font-heading font-black text-white mb-8 drop-shadow-lg">Why DigiBeatz Is Featured on BCCS</h2>
                 <div className="space-y-6 text-zinc-300 text-lg font-light leading-relaxed mb-10">
                    <p>Blue Collar Crypto Society is focused on education, contribution, and real-world value creation. DigiBeatz aligns with these values by giving artists tools to retain ownership of their work while engaging directly with their audience.</p>
                    <p>By featuring DigiBeatz, BCCS provides exposure for independent artists and introduces its community to Web3-native music without requiring prior experience or technical knowledge.</p>
                 </div>
                 <Button to="/partnerships" variant="secondary">Learn More About the Ecosystem</Button>
              </Reveal>
              <Reveal direction="left" delay={0.2}>
                 <div className="aspect-video rounded-3xl overflow-hidden bg-zinc-900/50 border border-white/10 flex items-center justify-center backdrop-blur-md shadow-2xl">
                    <Music size={100} className="text-white/20" />
                 </div>
              </Reveal>
           </div>
        </div>
      </section>

      {/* SECTION 3 — FEATURED TRACKS */}
      <section ref={featuredRef} className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <h2 className="text-5xl font-heading font-black text-white mb-6 drop-shadow-lg">Featured Tracks</h2>
            <p className="text-zinc-400 font-medium mb-12">Highlighted music selections from the DigiBeatz ecosystem.</p>
          </Reveal>
          
          <div className="flex gap-4 mb-8 justify-end">
            <button onClick={() => slide('left')} className="p-4 rounded-2xl border border-white/10 bg-zinc-900/40 hover:bg-zinc-800/60 text-zinc-400 hover:text-white transition-all backdrop-blur-md"><ChevronLeft size={24}/></button>
            <button onClick={() => slide('right')} className="p-4 rounded-2xl border border-white/10 bg-zinc-900/40 hover:bg-zinc-800/60 text-zinc-400 hover:text-white transition-all backdrop-blur-md"><ChevronRight size={24}/></button>
          </div>

          <div 
            ref={sliderRef}
            className="flex gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-8"
          >
            {featuredTracks.map((track, i) => (
              <Reveal key={track.id} delay={i * 0.1} width="fit-content">
                <TrackItem 
                  track={track} 
                  isPlaying={currentTrack?.id === track.id && isPlaying} 
                  onTogglePlay={handleTogglePlay} 
                />
              </Reveal>
            ))}
          </div>
          <p className="text-zinc-500 text-sm italic mt-8 text-center">Each featured track includes a short preview and an external link for those interested in exploring the full music NFT.</p>
        </div>
      </section>

      {/* SECTION 4 — FULL TRACK LIBRARY */}
      <section className="py-24 border-t border-white/5 bg-zinc-950/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-16">
               <h2 className="text-5xl font-heading font-black text-white mb-6 drop-shadow-lg">Full Track Library</h2>
               <p className="text-zinc-400 text-lg font-light max-w-2xl mx-auto">A growing library of music available through DigiBeatz. This section is designed to scale as more artists and tracks are added over time.</p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {libraryTracks.map((track, i) => (
              <Reveal key={track.id} delay={i * 0.05}><TrackItem track={track} isPlaying={currentTrack?.id === track.id && isPlaying} onTogglePlay={handleTogglePlay} variant="row" /></Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — HOW TO SUPPORT ARTISTS */}
      <section className="py-32 border-t border-white/5 bg-zinc-950/80 backdrop-blur-xl text-center">
        <div className="max-w-4xl mx-auto px-6">
           <Reveal>
              <h2 className="text-5xl font-heading font-black text-white mb-8 drop-shadow-lg">Supporting Artists in Web3</h2>
              <div className="text-zinc-400 font-light text-xl mb-12 space-y-8">
                 <p>Supporting artists through DigiBeatz allows creators to maintain control over their work while engaging directly with their supporters.</p>
                 <p>All music NFTs are hosted and managed externally. BCCS does not custody music assets or process purchases.</p>
              </div>
              <Button href="https://gethype.digital/DIGIBEATZ/" variant="safety">Visit DigiBeatz</Button>
           </Reveal>
        </div>
      </section>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default DigiBeatz;