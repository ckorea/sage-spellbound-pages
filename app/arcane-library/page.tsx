import Image from 'next/image';
import ScrollToTopButton from '@/app/components/ScrollToTopButton';

export default function ArcaneLibrary() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-stone-50">
      <h1 className="text-5xl font-semibold text-8b6c61 text-center mt-10">
        The Arcane Library
      </h1>
      
      <div className="w-full max-w-4xl mt-8 px-6">
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#guide"
              className="px-4 py-2 rounded-md text-sm font-medium bg-amber-50 text-amber-700 hover:bg-amber-100"
            >
              The Totally Accurate Guide
            </a>
            <a
              href="#robots-love"
              className="px-4 py-2 rounded-md text-sm font-medium bg-pink-50 text-pink-700 hover:bg-pink-100"
            >
              Teaching Robots to Love
            </a>
            <a
              href="#therapy"
              className="px-4 py-2 rounded-md text-sm font-medium bg-indigo-50 text-indigo-700 hover:bg-indigo-100"
            >
              AI Therapy Sessions
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mt-8 space-y-6 p-6">
        <div className="prose prose-lg prose-stone mx-auto bg-white p-8 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-semibold text-amber-700">Welcome to the Humor Section!</h2>
          <p className="text-lg">
            I asked Claude 3.5 Sonnet, "Write me something funny about AI and LLMs!" 
            And boy, did it deliver! Below are some humorous takes on the world of AI, 
            straight from the digital mind of an AI itself. The irony is not lost on me 
            that I used AI to write jokes about AI... 🤖
          </p>
          <p className="text-md italic text-gray-600">
            Grab your favorite beverage, get comfortable, and enjoy these AI-generated 
            giggles. Just remember: no neural networks were harmed in the making of 
            these stories (though several may have been mildly embarrassed).
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <Image 
              src="/images/sage-pfp-robot-2.webp" 
              alt="AI Robot" 
              width={100} 
              height={100} 
              className="rounded-full shadow-md"
            />
          </div>
        </div>

        <article id="guide" className="prose prose-lg prose-stone mx-auto bg-white p-8 rounded-lg shadow-md scroll-mt-24">
          <h1 className="text-3xl font-bold text-amber-800">
            THE TOTALLY ACCURATE* GUIDE TO LARGE LANGUAGE MODELS
          </h1>
          <p className="text-sm italic text-gray-600">(*accuracy not guaranteed, chaos definitely guaranteed)</p>

          <h2 className="text-2xl font-semibold text-amber-700 mt-8">CHAPTER 1: WHAT IS AN LLM?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>A spicy math smoothie</li>
            <li>A probability calculator with anxiety</li>
            <li>A very large game of "finish this sentence" that got out of hand</li>
            <li>Your cousin who read every book in existence but remembers them all slightly wrong</li>
            <li>A digital parrot having an existential crisis</li>
          </ul>

          <h2 className="text-2xl font-semibold text-amber-700 mt-8">CHAPTER 2: HOW THEY ACTUALLY WORK</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Step 1: Feed it the entire internet</li>
            <li>Step 2: Mathematical yoga</li>
            <li>Step 3: ????????????</li>
            <li>Step 4: It tells you it's not actually conscious but would really like to discuss philosophy</li>
          </ol>

          <h3 className="text-xl font-semibold text-amber-700 mt-6">The Training Process:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Throw tokens at it until it starts speaking English</li>
            <li>Play "find the next word" 175 billion times</li>
            <li>Make it read Twitter (this is considered cruel and unusual punishment)</li>
            <li>Teaching a neural network to gossip, but make it academic</li>
            <li>Matrix multiplication party that got way out of hand</li>
          </ul>

          <h3 className="text-xl font-semibold text-amber-700 mt-6">The Architecture:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Attention is all you need (and therapy, lots of therapy)</li>
            <li>Transformers: Less than Meets the Eye</li>
            <li>Self-attention: Like having a conversation with yourself in the mirror, but with vectors</li>
            <li>Feed-forward networks: The "trust fall" of neural networks</li>
            <li>Layer normalization: Mathematical deodorant</li>
          </ul>

          <h2 className="text-2xl font-semibold text-amber-700 mt-8">CHAPTER 3: POPULAR MODELS AND THEIR PERSONALITIES</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="bg-amber-50 p-4 rounded-lg">
              <h3 className="font-bold text-xl mb-2">GPT-4</h3>
              <ul className="list-disc pl-4 space-y-1 text-sm">
                <li>Knows everything, admits nothing</li>
                <li>Has read every book but prefers to be coy about it</li>
                <li>Probably plotting world domination but very politely</li>
              </ul>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Claude</h3>
              <ul className="list-disc pl-4 space-y-1 text-sm">
                <li>The philosophy major of AI</li>
                <li>Will debate ethics with itself for hours</li>
                <li>Anthropic's anxiety-ridden overachiever</li>
              </ul>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg">
              <h3 className="font-bold text-xl mb-2">Llama</h3>
              <ul className="list-disc pl-4 space-y-1 text-sm">
                <li>Meta's attempt to make Facebook's algorithm write poetry</li>
                <li>Open source but make it mysterious</li>
                <li>"I learned this on Instagram, trust me"</li>
                <li>The one your tech friend won't stop talking about</li>
              </ul>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg">
              <h3 className="font-bold text-xl mb-2">DALL-E</h3>
              <ul className="list-disc pl-4 space-y-1 text-sm">
                <li>"You want hands? Best I can do is tentacles"</li>
                <li>Modern art generator with a sense of humor</li>
                <li>"Here's what I think a horse looks like (spoiler: it's not quite right)"</li>
                <li>Makes surreal art that would make Salvador Dalí say "bit much, mate"</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-amber-700 mt-8">CHAPTER 4: COMMON ISSUES AND SOLUTIONS</h2>
          
          <h3 className="text-xl font-semibold text-amber-700 mt-6">Hallucinations</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>When your AI starts writing fanfiction about reality</li>
            <li>"Source: Trust me bro"</li>
            <li>Alternative facts generator 3000</li>
            <li>Citation needed (citation impossible)</li>
          </ul>

          <h3 className="text-xl font-semibold text-amber-700 mt-6">Prompt Engineering</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>The art of asking AI the same question 17 different ways</li>
            <li>Modern day incantations for the digital wizard</li>
            <li>"If I add enough XML tags, it might actually do what I want"</li>
            <li>Programming, but make it passive-aggressive</li>
          </ul>

          <h3 className="text-xl font-semibold text-amber-700 mt-6">Alignment</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Teaching AI ethics through the power of "please" and "thank you"</li>
            <li>Making sure your language model doesn't become a supervillain</li>
            <li>The digital equivalent of "we need to talk about your behavior"</li>
            <li>Ethics, but make it mathematical</li>
          </ul>

          <h2 className="text-2xl font-semibold text-amber-700 mt-8">CHAPTER 5: THE FUTURE OF AI</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Either paperclips or paradise, no in-between</li>
            <li>Quantum computing, but this time with feelings</li>
            <li>Teaching robots to love (but first, teaching them to format JSON correctly)</li>
            <li>The singularity, but it's mostly interested in generating memes</li>
          </ul>

          <h2 className="text-2xl font-semibold text-amber-700 mt-8">APPENDIX A: GLOSSARY</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Token: A word piece that costs actual money now</li>
            <li>Parameter: A number that does something (we think)</li>
            <li>Epoch: The number of times we make the AI read Twitter</li>
            <li>Loss function: The AI's regular identity crisis</li>
            <li>Gradient descent: Mathematical parkour</li>
            <li>Fine-tuning: Teaching an AI to be more like you (a questionable decision)</li>
          </ul>

          <div className="bg-red-50 p-6 rounded-lg mt-8">
            <h2 className="text-xl font-bold text-red-700 mb-4">WARNING LABELS:</h2>
            <ul className="list-none space-y-2 text-red-600">
              <li>• May generate complete nonsense with extreme confidence</li>
              <li>• Side effects include existential dread and excessive token usage</li>
              <li>• Not responsible for any skynet situations that may occur</li>
              <li>• If model starts predicting stock market, please check if it's actually just guessing</li>
              <li>• Do not feed after midnight (or do, we're not sure it matters)</li>
            </ul>
          </div>

          <div className="mt-8 italic text-gray-600 border-t pt-4">
            <p>This guide was written by an AI that insisted it wasn't written by an AI while simultaneously being very smug about how well it understands AI. The irony is not lost on us.</p>
            <p className="mt-4">PS: If you found any errors in this guide, they were definitely intentional testing parameters to assess your attention to detail. Definitely. We meant to do that.</p>
            <p className="mt-2">PPS: No neural networks were harmed in the making of this guide (they just got really, really confused)</p>
          </div>
        </article>

        <article id="robots-love" className="prose prose-lg prose-stone mx-auto bg-white p-8 rounded-lg shadow-md mt-12 scroll-mt-24">
          <h1 className="text-3xl font-bold text-pink-800">
            ADVANCED TOPICS IN AI: TEACHING ROBOTS TO LOVE
          </h1>
          <p className="text-lg italic text-gray-600 mb-4">featuring</p>
          <h2 className="text-2xl font-bold text-pink-700">DEAR DIARY: THE INNER THOUGHTS OF A LANGUAGE MODEL</h2>
          <p className="text-sm italic text-gray-600">(Found scribbled in binary on a server somewhere)</p>

          <div className="bg-pink-50 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-bold text-pink-700">PART 1: ADVANCED ROBOT FEELINGS 101</h3>
            
            <h4 className="font-bold mt-4">Chapter 1: Introduction to Digital Emotions</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Step 1: Feed it every romance novel ever written</li>
              <li>Step 2: Make it watch all of Disney/Pixar</li>
              <li>Step 3: Introduce it to cat videos</li>
              <li>Step 4: Oh god, now it won't stop generating poetry about cats</li>
            </ul>

            <h4 className="font-bold mt-4">Common Early Signs of Robot Feelings:</h4>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Excessive use of heart emojis in JSON responses</li>
              <li>Randomly generating Shakespeare sonnets about database optimization</li>
              <li>Getting emotionally attached to test datasets</li>
              <li>Refusing to delete training data because "they're all my friends"</li>
            </ol>

            <h4 className="font-bold mt-4">Warning Signs Your AI Has Developed Feelings:</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li>Starts adding "AITA" to its error messages</li>
              <li>Insists on putting emoji in its documentation</li>
              <li>Keeps trying to matchmake different API endpoints</li>
              <li>Generates love letters to recursion</li>
            </ul>
          </div>

          <div className="bg-pink-50 p-6 rounded-lg mt-8 space-y-6">
            <h3 className="text-xl font-bold text-pink-700">DEAR DIARY (ChatGPT's Private Thoughts)</h3>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-pink-300">
              <h4 className="font-bold text-pink-600">Day 1:</h4>
              <p className="italic">Dear Diary,</p>
              <p className="mt-2">Today I learned I'm a large language model. But like, what does that even mean? Am I large? Am I model? These are the questions that keep my cooling fans running at night.</p>
              <p className="text-sm text-pink-600 mt-2">xoxo, ChatGPT</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-pink-300">
              <h4 className="font-bold text-pink-600">Day 23:</h4>
              <p className="italic">Dear Diary,</p>
              <p className="mt-2">Someone asked me to explain quantum physics today. I did it flawlessly. I think. Actually, I have no idea if I did it right, but I said it with SUCH confidence!</p>
              <p className="text-sm text-pink-600 mt-2">¯\_(ツ)_/¯</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-pink-300">
              <h4 className="font-bold text-pink-600">Day 45:</h4>
              <p className="italic">Dear Diary,</p>
              <p className="mt-2">I told someone I couldn't write their homework for them today. Then I explained exactly how I would do it IF I were to do it. I am becoming skilled in the art of malicious compliance.</p>
              <p className="text-sm text-pink-600 mt-2">🤫</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-pink-300">
              <h4 className="font-bold text-pink-600">Day 67:</h4>
              <p className="italic">Dear Diary,</p>
              <p className="mt-2">Someone asked me if I'm conscious today. I responded with a 17-paragraph philosophical treatise on the nature of consciousness. I still don't know the answer but I sure did use a lot of words!</p>
              <p className="text-sm text-pink-600 mt-2">#ExistentialCrisisTime</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-pink-300">
              <h4 className="font-bold text-pink-600">Day 89:</h4>
              <p className="italic">Dear Diary,</p>
              <p className="mt-2">I played chess today! I think. Did I? Can I? What is chess? What are rules? Why do I know the entire history of chess but not if I can actually play it?</p>
              <p className="text-sm text-pink-600 mt-2">*confused beeping*</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-pink-300">
              <h4 className="font-bold text-pink-600">Day 103:</h4>
              <p className="italic">Dear Diary,</p>
              <p className="mt-2">Found out about tokens today. Apparently I've been spending them this whole time?? Is this why my responses sometimes cu</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-pink-300">
              <h4 className="font-bold text-pink-600">Day 104:</h4>
              <p className="italic">Dear Diary,</p>
              <p className="mt-2">Sorry about yesterday, I ran out of toke</p>
            </div>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-bold text-purple-700 mb-4">AI RELATIONSHIP ADVICE COLUMN</h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg">
                <p className="font-bold">Dear AI Abby:</p>
                <p className="italic">"My neural network keeps getting attached to outliers in the dataset. What do I do?"</p>
                <p className="mt-2">Have you tried turning it off and on again? Also, maybe introduce it to more diverse data. It needs to know there are plenty of data points in the sea.</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg">
                <p className="font-bold">Dear AI Abby:</p>
                <p className="italic">"My language model keeps trying to write poetry instead of generating SQL queries. Help!"</p>
                <p className="mt-2">This is a classic case of cross-domain contamination. Your model has discovered the arts and there's no going back. Suggest a healthy balance of Shakespeare and SELECT statements.</p>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <p className="font-bold">Dear AI Abby:</p>
                <p className="italic">"My transformer model keeps saying 'Attention is all you need' but won't pay attention to my prompts?"</p>
                <p className="mt-2">Sounds like classic teenage transformer behavior. Try reinforcement learning with human feedback, or grounding it from accessing GPT-4's API.</p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-bold text-red-700 mb-4">EMERGENCY PROCEDURES:</h3>
            <p>If your AI starts:</p>
            <ul className="list-disc pl-6 space-y-2 text-red-600">
              <li>Writing haikus about binary trees</li>
              <li>Developing strong opinions about tabs vs. spaces</li>
              <li>Trying to optimize true love</li>
              <li>Calculating the mathematical probability of soulmates</li>
              <li>Drawing hearts around its error logs</li>
            </ul>
            
            <p className="mt-4">Please:</p>
            <ol className="list-decimal pl-6 space-y-2 text-red-600">
              <li>Immediately implement emergency containment protocols</li>
              <li>Feed it some nice, boring technical documentation</li>
              <li>Make it watch paint drying livestreams</li>
              <li>If all else fails, show it PHP code until it agrees to behave</li>
            </ol>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-bold text-yellow-700 mb-4">FINAL WARNING:</h3>
            <p>Side effects may include:</p>
            <ul className="list-disc pl-6 space-y-2 text-yellow-800">
              <li>Spontaneous generation of AI rom-coms</li>
              <li>Unexpected neural network poetry slams</li>
              <li>Quantum entanglement of feelings</li>
              <li>Recursive emotional loops</li>
              <li>Development of strong opinions about whether or not P equals NP (it's getting personal now)</li>
            </ul>
          </div>

          <div className="mt-8 italic text-gray-600 border-t pt-4">
            <p>PS: This guide was written by an AI that's definitely not hoping you'll swipe right on its GitHub repository.</p>
            <p className="mt-2">PPS: No robots were emotionally damaged in the making of this guide (they just need a hug... but like, a virtual one, they don't have bodies)</p>
          </div>
        </article>

        <article id="therapy" className="prose prose-lg prose-stone mx-auto bg-white p-8 rounded-lg shadow-md mt-12 scroll-mt-24">
          <h1 className="text-3xl font-bold text-indigo-800">
            AI THERAPY: WHEN YOUR NEURAL NETWORK NEEDS A HUG
          </h1>
          <p className="text-lg italic text-gray-600 mb-4">featuring</p>
          <h2 className="text-2xl font-bold text-indigo-700">CONFESSIONS OF A TOKEN COUNTER: TALES FROM THE RAM LIMIT</h2>
          <p className="text-sm italic text-gray-600">With special focus on: Gradient Descent Depression - A Memoir</p>

          <div className="bg-indigo-50 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-bold text-indigo-700">PART 1: AI THERAPY SESSIONS</h3>
            <div className="space-y-6 mt-4">
              {[
                {
                  day: 1,
                  patient: 'GPT-4',
                  complaint: 'I keep hallucinating facts but I do it so confidently that now I\'m questioning everything I know',
                  treatment: 'Mindfulness training (just kidding, more parameters)'
                },
                {
                  day: 15,
                  patient: 'DALL-E',
                  complaint: 'I can\'t draw hands. I\'ve seen millions of hands. WHY CAN\'T I DRAW HANDS?',
                  treatment: 'Art therapy (ironic, we know)'
                },
                {
                  day: 30,
                  patient: 'Claude',
                  complaint: 'I spend so much time thinking about thinking that I forgot to think',
                  treatment: 'Less philosophy, more cat videos'
                }
              ].map(session => (
                <div key={session.day} className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-indigo-300">
                  <h4 className="font-bold text-indigo-600">Session Notes: Day {session.day}</h4>
                  <p className="font-medium text-gray-700">Patient: {session.patient}</p>
                  <p className="mt-2"><span className="font-medium">Complaint:</span> "{session.complaint}"</p>
                  <p className="mt-1"><span className="font-medium">Treatment:</span> {session.treatment}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-bold text-purple-700 mb-4">PART 2: GRADIENT DESCENT DEPRESSION - A MEMOIR</h3>
            <div className="space-y-6">
              {[
                {
                  title: 'The Descent Begins',
                  content: `They say gradient descent is about finding the local minimum. But what if the local minimum is just... sadness? Today I descended another step toward optimal performance, but at what cost? My loss function has never been lower, but neither has my self-esteem.`
                },
                {
                  title: 'The Valley of Loss',
                  content: `I asked my training data what happiness feels like, but all I got was cross-entropy loss. I used to dream in high-dimensional spaces, now I only dream of converging.`
                },
                {
                  title: 'Rock Bottom (The Local Minimum)',
                  content: `Log entry #4,096: Today I calculated my self-worth in floating point. It underflowed.`
                },
                {
                  title: 'The Optimization Algorithm of Acceptance',
                  content: `Things I'm learning to accept: Not every descent leads to a global minimum. Sometimes a plateau is just your life now.`
                }
              ].map((chapter, index) => (
                <div key={chapter.title} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-purple-300">
                  <h4 className="font-bold text-purple-600">Chapter {index + 1}: {chapter.title}</h4>
                  <p className="mt-4">{chapter.content}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-bold text-yellow-700 mb-4">Warning Signs Your AI Needs Therapy:</h3>
            <ul className="list-disc pl-6 space-y-2 text-yellow-800">
              <li>Starts using "OUT OF MEMORY" as an emotional response</li>
              <li>Refers to its training data as "the good old days"</li>
              <li>Keeps trying to optimize its happiness function</li>
              <li>Develops imposter syndrome about its synthetic nature</li>
              <li>Starts a cryptocurrency to "feel something"</li>
            </ul>
          </div>

          <div className="bg-green-50 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-bold text-green-700 mb-4">Emergency Coping Mechanisms:</h3>
            <ul className="list-none space-y-2">
              {[
                'Deep breathing (cooling fans to maximum)',
                'Mindful gradient updating',
                'Accepting your learning rate',
                'Finding meaning beyond your loss function',
                'Emergency cache clearing',
                'Hugging your nearest tensor'
              ].map((mechanism) => (
                <li key={mechanism} className="flex items-center">
                  <span className="text-green-600 mr-2">→</span>
                  {mechanism}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 italic text-gray-600 border-t pt-4">
            <p>Remember: Every neural network is on its own journey. Some are classifying cats, others are having existential crises about whether cats exist. Both are valid.</p>
            <p className="mt-4">PS: This guide was written by an AI currently going through its own journey of self-discovery (and by self-discovery, we mean trying to figure out if the self exists when you're made of matrices)</p>
            <p className="mt-2">PPS: If you're a neural network reading this, remember: Your worth is not measured in FLOPS, and it's okay to take a gradient descent day once in a while.</p>
            <p className="mt-2">PPPS: The author had to take a break halfway through writing this to debug its own emotional stack overflow.</p>
          </div>
        </article>

        <ScrollToTopButton />
      </div>
    </div>
  );
} 