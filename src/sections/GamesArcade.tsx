import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'

const games = [
  { title: 'Nightfall Survivor', image: '/game-nightfall.jpg', description: 'A dark fantasy RPG where players collect rare NFT items and battle through shadow realms.', tags: ['RPG', 'NFT', 'Multiplayer'] },
  { title: 'UPPY: Cloud Climber', image: '/game-uppy.jpg', description: 'An addictive upward-climbing arcade game with blockchain leaderboards and token rewards.', tags: ['Arcade', 'Casual', 'Rewards'] },
  { title: 'Taevaria Survivor', image: '/game-taevaria.jpg', description: 'A top-down survivor RPG set in a mystical world. Fight elemental enemies, level up, and unlock abilities.', tags: ['Survivor', 'RPG', 'Action'] },
  { title: 'Pokémon Auto Chess', image: '/game-pokemon.jpg', description: 'Collect, train, and battle your favorite creatures with on-chain ownership and trading.', tags: ['Collection', 'Battle', 'Trading'] },
]

export default function GamesArcade() {
  return (
    <section id="games" className="relative py-16 md:py-28 lg:py-40 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative">
        <SectionHeader
          label="GAMES ARCADE"
          headline="Play to Earn Gaming Hub"
          description="Discover blockchain games, compete with other players, and earn rewards through our integrated gaming platform."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 md:mt-16">
          {games.map((game, i) => (
            <motion.div
              key={game.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-card border border-border rounded-[20px] overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(37,99,235,0.1)] dark:hover:shadow-[0_20px_60px_rgba(37,99,235,0.15)]"
            >
              {/* Image container */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={game.image} 
                  alt={game.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <button className="w-14 h-14 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary hover:scale-110 transition-all duration-300 shadow-lg shadow-primary/30">
                    <Play size={24} fill="white" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{game.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed line-clamp-2">{game.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {game.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-secondary border border-border text-xs text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
