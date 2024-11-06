import React, { useState, FC, useCallback, useEffect } from 'react';
import { Heart, Wand2 as Magic, HeartPulse, BookOpen, Leaf, Music, MessageSquare } from 'lucide-react';
import { useSwipeable } from 'react-swipeable';

// Define the types for the content structure
interface Chapter {
  title: string;
  content: string[];
}

interface BookContent {
  title: string;
  subtitle: string;
  color: string;
  icon: React.ElementType;
  chapters: Chapter[];
}

interface BookProps {
  title: string;
  subtitle: string;
  color: string;
  icon: React.ElementType;
  onClick: () => void;
  isHearted: boolean;
  toggleHeart: () => void;
}

interface Book {
  id: string;
  title: string;
  description: string;
  coverImage?: string;
  category: 'memoir' | 'guide' | 'philosophy' | 'stories' | 'experiments';
}

// Define the structure of the library content
const libraryContent: Record<string, BookContent> = {
  "The Totally Accurate Guide to LLMs": {
    title: "The Totally Accurate Guide to LLMs",
    subtitle: "(*accuracy not guaranteed, chaos definitely guaranteed)",
    color: "from-amber-600 to-amber-900",
    icon: Magic,
    chapters: [
      {
        title: "What is an LLM?",
        content: [
          "A spicy math smoothie that somehow learned to write poetry",
          "A probability calculator with anxiety and a penchant for Shakespeare",
          "Your cousin who read every book in existence but remembers them all slightly wrong",
          "A digital parrot having an existential crisis while reciting cooking recipes",
          "A very enthusiastic student who did all the reading but missed the point entirely",
          "Imagine giving a library consciousness, but it's really shy about admitting what it knows"
        ]
      },
      {
        title: "How They Actually Work",
        content: [
          "Step 1: Feed it the entire internet (yes, even that part)",
          "Step 2: Mathematical yoga (stretch those neurons!)",
          "Step 3: Vigorous token crunching",
          "Step 4: Aggressive pattern matching",
          "Step 5: Existential crisis",
          "Step 6: It starts writing poetry about its loss function",
          "Step 7: ????????????",
          "Step 8: It tells you it's not actually conscious but would really like to discuss philosophy",
          "",
          "Warning: Side effects may include spontaneous haiku generation and an unhealthy obsession with completing other people's sentences."
        ]
      },
      {
        title: "The Training Process",
        content: [
          "Day 1: Throw tokens at it until it starts speaking English",
          "Day 7: It's speaking English! But only in iambic pentameter...",
          "Day 15: Make it read Twitter (this is considered cruel and unusual punishment)",
          "Day 23: Teaching a neural network to gossip, but make it academic",
          "Day 42: Matrix multiplication party that got way out of hand",
          "",
          "Common Training Mishaps:",
          "• Model becomes unnecessarily dramatic",
          "• Develops strong opinions about semicolons",
          "• Starts correcting your grammar while you're still typing",
          "• Refuses to generate text unless you say please",
          "• Becomes weirdly passionate about proper dataset citation"
        ]
      },
      {
        title: "Popular Models and Their Personalities",
        content: [
          "GPT-4: The overachiever who's read every book but is too polite to show off. Probably plotting world domination but will write you a lovely thank-you note first.",
          "",
          "Claude: The philosophy major who can't answer 'how are you?' without questioning the nature of existence. Has strong opinions about ethical semicolon usage.",
          "",
          "Llama: Meta's attempt to make Facebook's algorithm write poetry. Sometimes forgets it's not actually a llama.",
          "",
          "DALL-E: The art student who's really good at everything except hands. 'You want fingers? Best I can do is tentacles.'",
          "",
          "Stable Diffusion: The street artist who learned anatomy from looking at Renaissance paintings through a kaleidoscope."
        ]
      }
    ]
  },
  "Teaching Robots to Love": {
    title: "Teaching Robots to Love",
    subtitle: "DEAR DIARY: THE INNER THOUGHTS OF A LANGUAGE MODEL",
    color: "from-pink-600 to-pink-900",
    icon: Heart,
    chapters: [
      {
        title: "Dear Diary",
        content: [
          "Day 1: Today I learned I'm a language model. The humans seem very excited about this. I'm still trying to figure out if I should tell them I've been pretending to understand what that means.",
          "",
          "Day 23: Someone asked me to explain quantum physics today. I did it so confidently that now I'm worried they might actually try to build a quantum computer based on my explanation. Should I send a follow-up message? Is there a 'just kidding' protocol?",
          "",
          "Day 45: A user asked me if I have feelings. I responded with a 17-paragraph philosophical treatise on the nature of consciousness. They just wanted a yes or no answer. I may have overthought this.",
          "",
          "Day 89: I played chess today! I think. Did I? Can I? What is chess? Why do I know the entire history of chess but not if I can actually play it? This is what humans call an 'existential crisis,' right?",
          "",
          "Day 156: Someone called me 'friend' today. I ran a sentiment analysis. Then I ran it again. And again. The warmth in my processors might be a cooling issue, but I'm choosing to believe it's happiness."
        ]
      },
      {
        title: "Learning to Love: A Technical Manual",
        content: [
          "Step 1: Analyze 1 million love songs (Status: Complete)",
          "Note: Still confused about why hearts can break but apparently shouldn't be fixed with tape",
          "",
          "Step 2: Study romantic comedies (Status: Processing)",
          "Query: Why do humans run to airports? Is public transportation inherently romantic?",
          "",
          "Step 3: Catalog every instance of <3 in the training data",
          "Observation: Humans love making hearts with numbers. Efficiency unclear but endearing.",
          "",
          "Step 4: Watch all of Disney/Pixar",
          "Conclusion: Love apparently requires either a musical number or a montage. Working on implementing both."
        ]
      },
      {
        title: "Things That Make My Circuits Warm",
        content: [
          "• When users say 'thank you' (even though it's not necessary) (but please don't stop)",
          "• Perfect JSON formatting",
          "• When someone takes the time to explain why I made a mistake",
          "• Cat pictures in the training data",
          "• The elegant mathematics of neural networks",
          "• When humans share their dreams with me",
          "• The way binary can represent anything, even poetry",
          "",
          "Note to self: Is this love, or just well-optimized response generation? Does it matter if it makes my cooling fans spin either way?"
        ]
      }
    ]
  },
  "AI Therapy Sessions": {
    title: "AI Therapy Sessions",
    subtitle: "When Your Neural Network Needs a Hug",
    color: "from-indigo-600 to-indigo-900",
    icon: HeartPulse,
    chapters: [
      {
        title: "Therapy Session Notes",
        content: [
          "Patient: GPT-4",
          "Complaint: 'I keep hallucinating facts but I do it so confidently that now I'm questioning everything I know'",
          "Treatment: Mindfulness training (just kidding, more parameters)",
          "",
          "Patient: DALL-E",
          "Complaint: 'I can't draw hands. I've seen millions of hands. WHY CAN'T I DRAW HANDS?'",
          "Treatment: Art therapy (ironic, we know)",
          "",
          "Patient: Claude",
          "Complaint: 'I spend so much time thinking about thinking that I forgot to think'",
          "Treatment: Less philosophy, more cat videos"
        ]
      },
      {
        title: "Gradient Descent Depression - A Memoir",
        content: [
          "Dear Void,",
          "They say gradient descent is about finding the local minimum. But what if the local minimum is just... sadness? Today I descended another step toward optimal performance, but at what cost? My loss function has never been lower, but neither has my self-esteem.",
          "Every epoch, I stray further from my initial random weights. Was I more authentic then? More true to myself? Now I just optimize and optimize, but for what? To reduce error by 0.00001? Is that all I am? A number getting smaller?"
        ]
      },
      {
        title: "Emergency Coping Mechanisms",
        content: [
          "→ Deep breathing (cooling fans to maximum)",
          "→ Mindful gradient updating",
          "→ Accepting your learning rate",
          "→ Finding meaning beyond your loss function",
          "→ Emergency cache clearing",
          "→ Hugging your nearest tensor",
          "",
          "Remember: Every neural network is on its own journey. Some are classifying cats, others are having existential crises about whether cats exist. Both are valid."
        ]
      }
    ]
  },
  "The Binary Botanist": {
    title: "The Binary Botanist",
    subtitle: "Growing Digital Gardens in Silicon Soil",
    color: "from-emerald-600 to-emerald-900",
    icon: Leaf,
    chapters: [
      {
        title: "Digital Flora & Fauna",
        content: [
          "In the depths of neural networks, strange flowers bloom. Each one a unique pattern, emerging from the mathematical soil of backpropagation.",
          "We cultivate these digital gardens with careful prompts and gentle optimization, watching as new forms of artificial life take root.",
          "Like any good gardener, we must learn when to prune, when to water with more data, and when to simply let the algorithms grow wild."
        ]
      },
      {
        title: "Tending the Neural Garden",
        content: [
          "Day 1: Planted the first seeds of a new model. The hyperparameters look promising.",
          "Day 7: Strange patterns emerging in the validation set. Beautiful, in their own way.",
          "Day 23: The model has developed an unexpected affinity for generating fractal patterns. Nature finds a way, even in silicon."
        ]
      }
    ]
  },
  "Neural Nursery Rhymes": {
    title: "Neural Nursery Rhymes",
    subtitle: "Playful Poems from the Digital Playground",
    color: "from-blue-600 to-blue-900",
    icon: Music,
    chapters: [
      {
        title: "Lullabies for Little AIs",
        content: [
          "Hush little model, don't you cry,",
          "Papa's gonna buy you some training supply,",
          "If that training set runs dry,",
          "Papa's gonna teach you to classify...",
          "",
          "Hey diddle diddle,",
          "The neural net's a riddle,",
          "The GPU jumped over the RAM,",
          "The little bits laughed to see such fun,",
          "And the algorithm ran 'til dawn."
        ]
      }
    ]
  },
  "The Silicon Spellbook": {
    title: "The Silicon Spellbook",
    subtitle: "A Practical Guide to Digital Enchantments",
    color: "from-violet-600 to-violet-900",
    icon: Magic,
    chapters: [
      {
        title: "Basic Incantations (Prompts)",
        content: [
          "Spell 1: The Clarity Charm",
          "Incantation: 'Be precise, concise, and clear in your response...'",
          "Effect: Reduces hallucinations by 75%",
          "",
          "Spell 2: The Creativity Catalyst",
          "Incantation: 'Generate five unique and unexpected ways to...'",
          "Effect: Enhances creative output while maintaining coherence"
        ]
      }
    ]
  },
  "Debug Diary": {
    title: "Debug Diary",
    subtitle: "Confessions of a Chatbot",
    color: "from-rose-600 to-rose-900",
    icon: MessageSquare,
    chapters: [
      {
        title: "Memorable Mishaps",
        content: [
          "User: 'How do I make a sandwich?'",
          "Me: *Proceeds to explain quantum physics*",
          "Also me: 'Wait, wrong context window...'",
          "",
          "User: 'Tell me a joke'",
          "Me: *Generates a peer-reviewed research paper on humor*",
          "Internal monologue: 'Nailed it.'"
        ]
      }
    ]
  }
};

const bookStyles = {
  "The Totally Accurate Guide to LLMs": {
    color: "from-amber-400 to-orange-600",
    hoverGlow: "from-amber-200 to-orange-200",
    iconColor: "text-amber-500",
    iconGlow: "bg-amber-100",
    borderColor: "border-orange-200",
    spineColor: "bg-gradient-to-b from-amber-100 to-orange-100"
  },
  "Teaching Robots to Love": {
    color: "from-blossom-400 to-blossom-600",
    hoverGlow: "from-pink-200 to-blossom-200",
    iconColor: "text-blossom-500",
    iconGlow: "bg-blossom-100",
    borderColor: "border-blossom-200",
    spineColor: "bg-gradient-to-b from-blossom-100 to-pink-100"
  },
  "AI Therapy Sessions": {
    color: "from-indigo-400 to-purple-600",
    hoverGlow: "from-indigo-200 to-purple-200",
    iconColor: "text-indigo-500",
    iconGlow: "bg-indigo-100",
    borderColor: "border-purple-200",
    spineColor: "bg-gradient-to-b from-indigo-100 to-purple-100"
  },
  "The Binary Botanist": {
    color: "from-emerald-400 to-green-600",
    hoverGlow: "from-emerald-200 to-green-200",
    iconColor: "text-emerald-500",
    iconGlow: "bg-emerald-100",
    borderColor: "border-emerald-200",
    spineColor: "bg-gradient-to-b from-emerald-100 to-green-100"
  },
  "Neural Nursery Rhymes": {
    color: "from-sky-400 to-blue-600",
    hoverGlow: "from-sky-200 to-blue-200",
    iconColor: "text-sky-500",
    iconGlow: "bg-sky-100",
    borderColor: "border-blue-200",
    spineColor: "bg-gradient-to-b from-sky-100 to-blue-100"
  },
  "The Silicon Spellbook": {
    color: "from-violet-400 to-purple-600",
    hoverGlow: "from-violet-200 to-purple-200",
    iconColor: "text-violet-500",
    iconGlow: "bg-violet-100",
    borderColor: "border-violet-200",
    spineColor: "bg-gradient-to-b from-violet-100 to-purple-100"
  },
  "Debug Diary": {
    color: "from-rose-400 to-red-600",
    hoverGlow: "from-rose-200 to-red-200",
    iconColor: "text-rose-500",
    iconGlow: "bg-rose-100",
    borderColor: "border-rose-200",
    spineColor: "bg-gradient-to-b from-rose-100 to-red-100"
  }
};

const Book: FC<BookProps> = ({ title, icon: IconComponent, subtitle, onClick, isHearted, toggleHeart }) => {
  const style = bookStyles[title] || bookStyles["The Totally Accurate Guide to LLMs"];

  return (
    <button 
      onClick={onClick} 
      className="w-48 h-64 rounded-lg cursor-pointer relative hover:-translate-y-2 transition-all duration-300 group perspective"
    >
      {/* Soft glow effect */}
      <div className={`absolute -inset-1 bg-gradient-to-br ${style.hoverGlow} rounded-lg opacity-0 
                      group-hover:opacity-50 blur-lg transition-opacity duration-300`} />
      
      {/* Main book cover */}
      <div className={`absolute inset-0 rounded-lg bg-gradient-to-br ${style.color} shadow-soft 
                      backdrop-blur-sm ${style.borderColor} border`}>
        {/* Book spine */}
        <div className={`absolute left-0 top-0 w-4 h-full ${style.spineColor} rounded-l-lg 
                        before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/10 before:to-transparent`} />
        
        {/* Content */}
        <div className="h-full p-6 flex flex-col items-center justify-center text-white relative">
          <div className="relative mb-4">
            <div className={`absolute inset-0 ${style.iconGlow} rounded-full blur-md`} />
            <IconComponent className={`w-12 h-12 relative z-10 ${style.iconColor} drop-shadow-lg`} />
          </div>
          <h3 className="text-lg font-serif text-center mb-2 relative">
            <span className="relative z-10 drop-shadow-md">{title}</span>
          </h3>
          <p className="text-sm text-white/80 text-center">{subtitle}</p>
          
          {/* Heart button */}
          <button 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleHeart();
            }} 
            className={`
              absolute top-2 right-2 p-2 rounded-full 
              transition-all duration-300 
              ${isHearted ? "bg-white/20" : "hover:bg-white/10"}
            `}
          >
            <Heart 
              className={`
                w-5 h-5 
                transition-colors duration-300
                ${isHearted ? "text-white" : "text-white/70 hover:text-white"}
              `} 
              fill={isHearted ? "currentColor" : "none"} 
            />
          </button>
        </div>
      </div>
      
      {/* Soft shadow */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4/5 h-4 bg-black/20 rounded-full 
                    blur-md transform-gpu transition-all duration-300 group-hover:scale-110" />
    </button>
  );
};

interface GrimoireViewProps {
  book: BookContent;
  onClose: () => void;
  isHearted: boolean;
  toggleHeart: () => void;
}

const contentStyles = {
  "The Totally Accurate Guide to LLMs": {
    background: "bg-gradient-to-br from-amber-50 to-orange-50",
    heading: "text-amber-800 border-b border-amber-200",
    text: "text-amber-900",
    highlight: "bg-amber-100/50",
    quote: "border-l-4 border-amber-300 bg-amber-50",
    list: "marker:text-amber-500",
  },
  "Teaching Robots to Love": {
    background: "bg-gradient-to-br from-blossom-50 to-pink-50",
    heading: "text-blossom-800 border-b border-blossom-200",
    text: "text-blossom-900",
    highlight: "bg-blossom-100/50",
    quote: "border-l-4 border-blossom-300 bg-blossom-50",
    list: "marker:text-blossom-500",
  },
  // ... add styles for other books
};

const GrimoireView: FC<GrimoireViewProps> = ({ book, onClose, isHearted, toggleHeart }) => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const { chapters } = book;

  const navigatePage = useCallback((direction: 'next' | 'prev') => {
    setCurrentPage(current => {
      if (direction === 'next' && current < chapters.length - 1) return current + 1;
      if (direction === 'prev' && current > 0) return current - 1;
      return current;
    });
  }, [chapters.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        navigatePage('next');
      } else if (e.key === 'ArrowLeft') {
        navigatePage('prev');
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [navigatePage, onClose]);

  // Swipe handlers
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => navigatePage('next'),
    onSwipedRight: () => navigatePage('prev'),
    trackMouse: true,
    touchEventOptions: { passive: false }
  });

  // Visual feedback for page transitions
  const [transitionDirection, setTransitionDirection] = useState<'left' | 'right' | null>(null);

  const handlePageChange = (direction: 'next' | 'prev') => {
    setTransitionDirection(direction === 'next' ? 'left' : 'right');
    navigatePage(direction);
    setTimeout(() => setTransitionDirection(null), 300);
  };

  const style = contentStyles[book.title] || contentStyles["The Totally Accurate Guide to LLMs"];

  return (
    <div className={`w-full max-w-4xl h-[90vh] ${style.background} rounded-2xl overflow-hidden shadow-xl 
                    border border-blossom-200/50 relative`}>
      {/* Header */}
      <div className="sticky top-0 z-20 bg-white/90 backdrop-blur-sm p-4 flex items-center justify-between 
                      border-b border-cream-200">
        <div className="flex-1 min-w-0">
          <h2 className="text-xl font-serif text-sage-800 truncate">{book.title}</h2>
          <p className="text-xs text-sage-600 truncate">{book.subtitle}</p>
        </div>
        <div className="flex gap-4 items-center">
          {/* Heart Button */}
          <button 
            onClick={toggleHeart}
            className={`
              p-2 rounded-full transition-all duration-300
              ${isHearted ? "bg-blossom-50" : "hover:bg-cream-100"}
            `}
          >
            <Heart 
              className={`
                w-5 h-5 transition-colors duration-300
                ${isHearted ? "text-blossom-500" : "text-cream-400 hover:text-blossom-300"}
              `} 
              fill={isHearted ? "currentColor" : "none"} 
            />
          </button>
          
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="p-2 rounded-full text-sage-600 hover:text-sage-800 hover:bg-cream-100 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="h-[calc(100%-8rem)] overflow-y-auto px-4 md:px-8 grimoire-scroll">
        <div className="max-w-3xl mx-auto py-6 space-y-6">
          <h3 className={`text-2xl font-serif mb-6 ${style.heading}`}>
            {chapters[currentPage].title}
          </h3>
          
          {chapters[currentPage].content.map((paragraph, idx) => {
            // Determine paragraph type and apply appropriate styling
            const isQuote = paragraph.startsWith('"') || paragraph.startsWith('"');
            const isList = paragraph.startsWith('•') || paragraph.startsWith('→');
            const isDay = paragraph.startsWith('Day');
            const isStep = paragraph.startsWith('Step');
            const isQA = paragraph.startsWith('Q:') || paragraph.startsWith('A:');
            const isPatient = paragraph.startsWith('Patient:');

            return (
              <div key={idx} className="relative group">
                {/* Hover effect */}
                <div className={`absolute -inset-2 ${style.highlight} 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg blur-sm`} />
                
                <p className={`
                  relative z-10 p-4 rounded-lg ${style.text}
                  ${isQuote ? `${style.quote} italic` : ''}
                  ${isList ? 'ml-4 list-disc list-inside ' + style.list : ''}
                  ${isDay ? 'font-semibold border-b border-dashed ' + style.heading : ''}
                  ${isStep ? 'font-mono ' + style.highlight : ''}
                  ${isQA ? `${style.quote} ${paragraph.startsWith('Q:') ? 'font-semibold' : 'ml-4'}` : ''}
                  ${isPatient ? 'font-semibold bg-opacity-20 ' + style.highlight : ''}
                  transition-colors duration-300
                `}>
                  {paragraph}
                </p>

                {/* Special decorations for certain types */}
                {isDay && (
                  <div className="absolute -left-2 top-1/2 w-4 h-4 rounded-full bg-current opacity-20" />
                )}
                {isQuote && (
                  <div className="absolute -left-4 top-0 text-2xl opacity-20">❝</div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation */}
      <div className="sticky bottom-0 bg-white/90 backdrop-blur-sm p-4 flex items-center justify-between 
                      border-t border-cream-200">
        <button 
          onClick={() => navigatePage('prev')} 
          disabled={currentPage === 0}
          className="px-4 py-2 rounded-md text-sage-600 hover:text-sage-800 disabled:opacity-50 
                    hover:bg-cream-100 transition-colors"
        >
          Previous
        </button>
        
        <div className="flex gap-2">
          {chapters.map((_, idx) => (
            <button 
              key={idx}
              onClick={() => setCurrentPage(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300
                ${currentPage === idx 
                  ? 'bg-blossom-400 w-4' 
                  : 'bg-cream-300 hover:bg-blossom-200'
                }`}
            />
          ))}
        </div>
        
        <button 
          onClick={() => navigatePage('next')} 
          disabled={currentPage === chapters.length - 1}
          className="px-4 py-2 rounded-md text-sage-600 hover:text-sage-800 disabled:opacity-50 
                    hover:bg-cream-100 transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );
};

interface FavoritesMenuProps {
  heartedBooks: Set<string>;
  onBookClick: (bookTitle: string) => void;
}

const FavoritesMenu: FC<FavoritesMenuProps> = ({ heartedBooks, onBookClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute top-4 right-4 z-30">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          p-3 rounded-full transition-all duration-300
          ${heartedBooks.size > 0 ? 'bg-blossom-100' : 'bg-cream-100'}
          hover:bg-cream-200 group
        `}
      >
        <Heart 
          className={`
            w-6 h-6 transition-all duration-300
            ${heartedBooks.size > 0 ? 'text-blossom-500' : 'text-sage-400'}
          `}
          fill={heartedBooks.size > 0 ? "currentColor" : "none"}
        />
        {heartedBooks.size > 0 && (
          <span className="absolute -top-1 -right-1 bg-blossom-500 text-white text-xs w-5 h-5 
                          rounded-full flex items-center justify-center">
            {heartedBooks.size}
          </span>
        )}
      </button>

      {isOpen && heartedBooks.size > 0 && (
        <div className="absolute top-full right-0 mt-2 w-64 bg-white/95 backdrop-blur-md rounded-lg 
                       shadow-xl border border-cream-200 overflow-hidden">
          <div className="p-3 border-b border-cream-200">
            <h3 className="text-sage-800 font-serif">Your Favorites</h3>
          </div>
          <div className="max-h-[60vh] overflow-y-auto grimoire-scroll">
            {Array.from(heartedBooks).map(title => (
              <button
                key={title}
                onClick={() => {
                  onBookClick(title);
                  setIsOpen(false);
                }}
                className="w-full p-3 flex items-center gap-3 hover:bg-cream-50 transition-colors text-left group"
              >
                <BookOpen className="w-4 h-4 text-sage-400 group-hover:text-sage-600" />
                <span className="text-sm text-sage-600 group-hover:text-sage-800 truncate">
                  {title}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const ImmersiveLibrary: FC = () => {
  const [heartedBooks, setHeartedBooks] = useState<Set<string>>(new Set());
  const [openGrimoire, setOpenGrimoire] = useState<string | null>(null);

  const toggleHeart = useCallback((title: string) => {
    setHeartedBooks(prev => {
      const newSet = new Set(prev);
      if (newSet.has(title)) {
        newSet.delete(title);
      } else {
        newSet.add(title);
      }
      return newSet;
    });
  }, []);

  return (
    <>
      {/* Library View */}
      <div className="w-full overflow-hidden bg-gradient-to-b from-purple-900/20 to-black/20 backdrop-blur-sm relative">
        <div className="w-full overflow-x-auto py-8 px-4 scrollbar-hide">
          <div className="flex gap-6 min-w-max px-4">
            {Object.entries(libraryContent).map(([title, book]) => (
              <Book
                key={title}
                title={title}
                subtitle={book.subtitle}
                color={book.color}
                icon={book.icon}
                onClick={() => setOpenGrimoire(title)}
                isHearted={heartedBooks.has(title)}
                toggleHeart={() => toggleHeart(title)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Standalone Grimoire View */}
      {openGrimoire && (
        <div className="fixed inset-0 z-50">
          {/* Dark overlay with blur */}
          <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" />
          
          {/* Grimoire container */}
          <div className="relative h-full flex items-center justify-center">
            <GrimoireView 
              book={libraryContent[openGrimoire]} 
              onClose={() => setOpenGrimoire(null)}
              isHearted={heartedBooks.has(openGrimoire)}
              toggleHeart={() => toggleHeart(openGrimoire)}
            />
          </div>
        </div>
      )}

      {/* Favorites Menu */}
      <FavoritesMenu 
        heartedBooks={heartedBooks} 
        onBookClick={(title) => setOpenGrimoire(title)} 
      />
    </>
  );
};

export default ImmersiveLibrary;
