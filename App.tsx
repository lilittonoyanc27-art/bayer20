import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  XCircle, 
  RefreshCw, 
  Search, 
  Award, 
  BookOpen, 
  Sparkles, 
  Languages, 
  Check, 
  HelpCircle, 
  Lightbulb, 
  Eye, 
  EyeOff,
  ChevronDown,
  ChevronUp,
  Info
} from 'lucide-react';
import { 
  EXERCISE_SET_1, 
  EXERCISE_SET_2, 
  GRAMMAR_RULES, 
  ExerciseItem 
} from './data';

export default function App() {
  // Navigation / Tabs state
  const [activeTab, setActiveTab] = useState<'set1' | 'set2' | 'rules'>('set1');
  
  // Exercise solutions/state
  const [userAnswersSet1, setUserAnswersSet1] = useState<Record<number, 'por' | 'para' | 'en' | ''>>({});
  const [userAnswersSet2, setUserAnswersSet2] = useState<Record<number, 'por' | 'para' | 'en' | ''>>({});
  
  // Toggle states for revealing answers
  const [revealedSet1, setRevealedSet1] = useState<Record<number, boolean>>({});
  const [revealedSet2, setRevealedSet2] = useState<Record<number, boolean>>({});
  
  // Universal options for "Show all answers" mode
  const [showAllAnswersSet1, setShowAllAnswersSet1] = useState(false);
  const [showAllAnswersSet2, setShowAllAnswersSet2] = useState(false);

  // Search and Tag filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Active state handlers depending on the active exercise set
  const currentSet = activeTab === 'set1' ? EXERCISE_SET_1 : EXERCISE_SET_2;
  const userAnswers = activeTab === 'set1' ? userAnswersSet1 : userAnswersSet2;
  const setUserAnswers = activeTab === 'set1' ? setUserAnswersSet1 : setUserAnswersSet2;
  const revealedItems = activeTab === 'set1' ? revealedSet1 : revealedSet2;
  const setRevealedItems = activeTab === 'set1' ? setRevealedSet1 : setRevealedSet2;
  const showAllAnswers = activeTab === 'set1' ? showAllAnswersSet1 : showAllAnswersSet2;
  const setShowAllAnswers = activeTab === 'set1' ? setShowAllAnswersSet1 : setShowAllAnswersSet2;

  // Answer handling
  const handleSelectAnswer = (id: number, answer: 'por' | 'para' | 'en') => {
    setUserAnswers(prev => ({ ...prev, [id]: answer }));
    // Auto-reveal translation on choice for direct study, or let them click
    setRevealedItems(prev => ({ ...prev, [id]: true }));
  };

  const toggleRevealItem = (id: number) => {
    setRevealedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const resetCurrentSet = () => {
    setUserAnswersSet1({});
    setUserAnswersSet2({});
    setRevealedSet1({});
    setRevealedSet2({});
    setShowAllAnswersSet1(false);
    setShowAllAnswersSet2(false);
  };

  const handleShowAllAnswersToggle = () => {
    setShowAllAnswers(prev => !prev);
    if (!showAllAnswers) {
      // Reveal all cards
      const allRevealed: Record<number, boolean> = {};
      currentSet.forEach(item => {
        allRevealed[item.id] = true;
      });
      setRevealedItems(allRevealed);
    } else {
      setRevealedItems({});
    }
  };

  // Compute Categories dynamically for active tab
  const categories = useMemo(() => {
    if (activeTab === 'rules') return [];
    const cats = new Set(currentSet.map(item => item.category));
    return Array.from(cats);
  }, [activeTab, currentSet]);

  // Filter items based on search and category
  const filteredSet = useMemo(() => {
    if (activeTab === 'rules') return [];
    return currentSet.filter(item => {
      const matchQuery = 
        item.sentenceBefore.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.sentenceAfter.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.translation.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.explanation.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.correct.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchCategory = selectedCategory ? item.category === selectedCategory : true;
      return matchQuery && matchCategory;
    });
  }, [currentSet, searchQuery, selectedCategory, activeTab]);

  // Stats calculation
  const set1Score = useMemo(() => {
    let correct = 0;
    const answered = Object.keys(userAnswersSet1).length;
    EXERCISE_SET_1.forEach(item => {
      if (userAnswersSet1[item.id] === item.correct) {
        correct++;
      }
    });
    return { correct, answered, total: EXERCISE_SET_1.length };
  }, [userAnswersSet1]);

  const set2Score = useMemo(() => {
    let correct = 0;
    const answered = Object.keys(userAnswersSet2).length;
    EXERCISE_SET_2.forEach(item => {
      if (userAnswersSet2[item.id] === item.correct) {
        correct++;
      }
    });
    return { correct, answered, total: EXERCISE_SET_2.length };
  }, [userAnswersSet2]);

  const activeScore = activeTab === 'set1' ? set1Score : set2Score;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-amber-100 selection:text-amber-900 pb-12">
      {/* Top Elegant Banner */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Logo / Branding */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center text-white font-bold shadow-md shadow-amber-500/20">
              ¿?
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-slate-900 flex items-center gap-2">
                ¿Por o para? <span className="text-amber-500 text-sm font-medium">ejercicios</span>
              </h1>
              <p className="text-xs text-slate-500">
                Իսպաներենի Por և Para նախդիրների վարժությունների շտեմարան
              </p>
            </div>
          </div>

          {/* Quick Header Information */}
          <div className="flex items-center gap-3 text-xs bg-slate-100 px-3 py-1.5 rounded-full text-slate-600">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Ակտիվ ուսումնական ռեժիմ</span>
          </div>
        </div>
      </header>

      {/* Hero Intro */}
      <div className="bg-gradient-to-r from-amber-500/10 via-amber-600/5 to-slate-500/5 border-b border-amber-500/10 py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Por թե para — վարժություններ
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            Լրացրեք նախադասությունները, ստուգեք ձեր գիտելիքները և սեղմեք ցանկացած նախադասության վրա՝ թարգմանությունն ու մանրամասն բացատրությունը տեսնելու համար։
          </p>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 mt-8">
        
        {/* Navigation Tabs & Main Settings */}
        <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 mb-8">
          
          {/* Tabs switch */}
          <div className="bg-slate-200/80 p-1 rounded-xl flex gap-1 self-start shadow-inner">
            <button
              id="tab-set1"
              onClick={() => { setActiveTab('set1'); setSelectedCategory(null); }}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                activeTab === 'set1' 
                  ? 'bg-white text-slate-900 shadow-xs' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/40'
              }`}
            >
              Վարժություն 1
              <span className="ml-1.5 bg-slate-100 text-slate-600 text-xs px-1.5 py-0.5 rounded-md font-mono">
                {set1Score.correct}/{set1Score.total}
              </span>
            </button>
            <button
              id="tab-set2"
              onClick={() => { setActiveTab('set2'); setSelectedCategory(null); }}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                activeTab === 'set2' 
                  ? 'bg-white text-slate-900 shadow-xs' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/40'
              }`}
            >
              Վարժություն 2
              <span className="ml-1.5 bg-slate-100 text-slate-600 text-xs px-1.5 py-0.5 rounded-md font-mono">
                {set2Score.correct}/{set2Score.total}
              </span>
            </button>
            <button
              id="tab-rules"
              onClick={() => setActiveTab('rules')}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all flex items-center gap-1.5 ${
                activeTab === 'rules' 
                  ? 'bg-amber-500 text-white shadow-xs' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-white/40'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              Կանոններ
            </button>
          </div>

          {/* Stats Bar (when in sets) */}
          {activeTab !== 'rules' && (
            <div className="flex flex-wrap items-center gap-3">
              {/* Reset progress */}
              <button
                id="btn-reset"
                onClick={resetCurrentSet}
                className="inline-flex items-center gap-1.5 text-xs font-semibold bg-white border border-slate-200 text-slate-600 px-3.5 py-2 rounded-lg hover:text-rose-600 hover:bg-rose-50/50 hover:border-rose-100 transition-all cursor-pointer shadow-xs"
                title="Զրոյացնել պատասխանները"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Զրոյացնել
              </button>

              {/* Reveal All answers */}
              <button
                id="btn-reveal-all"
                onClick={handleShowAllAnswersToggle}
                className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-lg transition-all cursor-pointer shadow-xs border ${
                  showAllAnswers 
                    ? 'bg-slate-800 text-white border-slate-800 hover:bg-slate-700' 
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                }`}
              >
                {showAllAnswers ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                {showAllAnswers ? 'Թաքցնել պատասխանները' : 'Ցույց տալ բոլոր պատասխանները'}
              </button>

              {/* Score badge */}
              <div className="bg-amber-50 border border-amber-200 text-amber-900 px-4 py-1.5 rounded-lg flex items-center gap-2 text-sm font-semibold">
                <Award className="w-4 h-4 text-amber-600" />
                <span>Միավորներ՝ {activeScore.correct} / {activeScore.total}</span>
                <span className="text-xs text-amber-600 font-normal">
                  ({Math.round((activeScore.correct / activeScore.total) * 100)}%)
                </span>
              </div>
            </div>
          )}
        </div>

        {activeTab !== 'rules' ? (
          /* Quiz Interface with Search and List */
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Left Sidebar Filters */}
            <div className="lg:col-span-1 space-y-6">
              
              {/* Search Bar */}
              <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Որոնում</h3>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    id="search-input"
                    type="text"
                    placeholder="Գտնել նախադասություն..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full text-sm bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-4 py-2 focus:outline-none focus:border-amber-500 focus:bg-white transition-all text-slate-800"
                  />
                  {searchQuery && (
                    <button 
                      onClick={() => setSearchQuery('')} 
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-bold"
                    >
                      ✕
                    </button>
                  )}
                </div>
              </div>

              {/* Grammar Category Filter */}
              <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
                <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Կատեգորիաներ</h3>
                  {selectedCategory && (
                    <button 
                      onClick={() => setSelectedCategory(null)}
                      className="text-amber-600 hover:text-amber-700 text-xs font-semibold"
                    >
                      Մաքրել
                    </button>
                  )}
                </div>
                
                <div className="flex flex-wrap lg:flex-col gap-1.5">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`px-3 py-1.5 text-left text-xs font-medium rounded-lg transition-all ${
                      selectedCategory === null 
                        ? 'bg-slate-100 text-slate-900 border-l-3 border-slate-500 pl-2' 
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    Բոլորը ({currentSet.length})
                  </button>
                  {categories.map(cat => {
                    const count = currentSet.filter(item => item.category === cat).length;
                    return (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-3 py-1.5 text-left text-xs font-medium rounded-lg transition-all flex items-center justify-between ${
                          selectedCategory === cat 
                            ? 'bg-amber-50 text-amber-900 border-l-3 border-amber-500 pl-2' 
                            : 'text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <span>{cat === "Destino" ? "Ուղղություն / Destino" :
                              cat === "Causa" ? "Պատճառ / Causa" :
                              cat === "Destinatario" ? "Հասցեատեր / Destinatario" :
                              cat === "Medio" ? "Միջոց / Medio" :
                              cat === "Precio" ? "Գնում/Գին / Precio" :
                              cat === "Lugar impreciso" ? "Անորոշ վայր / Lugar" :
                              cat === "Finalidad" ? "Նպատակ / Finalidad" :
                              cat === "Agradecimiento" ? "Շնորհակալություն" :
                              cat === "Movimiento" ? "Շարժում / Movimiento" :
                              cat === "Tránsito" ? "Տարանցում / Tránsito" :
                              cat === "Uso" ? "Օգտագործում / Uso" :
                              cat === "Interés" ? "Հետաքրքրվածություն" :
                              cat === "Utilidad" ? "Պիտանիություն / Utilidad" :
                              cat === "Régimen" ? "Կայուն կապ / Régimen" :
                              cat === "Intercambio" ? "Փոխանակում" :
                              cat === "Comparación" ? "Համեմատություն" :
                              cat === "Motivación" ? "Շարժառիթ / Motivación" :
                              cat === "Opinión" ? "Կարծիք / Opinión" :
                              cat === "Voz Pasiva" ? "Կրավորական սեռ" :
                              cat === "Fecha límite" ? "Վերջնաժամկետ" :
                              cat}</span>
                        <span className="font-mono bg-slate-100 text-slate-500 text-[10px] px-1.5 py-0.5 rounded-full">
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Progress Summary Mini-Card */}
              <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl p-4 text-white shadow-md">
                <h4 className="font-bold text-sm tracking-wide">Ինչու՞ է սա կարևոր:</h4>
                <p className="text-xs text-white/90 mt-1.5 leading-relaxed">
                  Por և Para նախդիրները իսպաներենի ամենահաճախ շփոթվող թեմաներից են: Պատճառը (por) և նպատակը (para) ճիշտ տարբերակելը հիմնական բանալին է:
                </p>
                <div className="mt-4 pt-3 border-t border-white/20 flex justify-between items-center text-xs">
                  <span>Կատարված է</span>
                  <span className="font-mono font-bold">
                    {Object.keys(userAnswers).length} / {currentSet.length}
                  </span>
                </div>
              </div>

            </div>

            {/* List of Sentences */}
            <div className="lg:col-span-3 space-y-4">
              
              {/* No results placeholder */}
              {filteredSet.length === 0 && (
                <div className="bg-white rounded-xl border border-dashed border-slate-300 p-12 text-center">
                  <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                  <p className="text-slate-500 text-sm">Ոչինչ չի գտնվել ձեր որոնմամբ կամ ֆիլտրով:</p>
                  <button 
                    onClick={() => { setSearchQuery(''); setSelectedCategory(null); }}
                    className="mt-4 px-4 py-2 bg-amber-500 text-white rounded-lg text-xs font-semibold hover:bg-amber-600 transition-colors cursor-pointer"
                  >
                    Մաքրել ֆիլտրերը
                  </button>
                </div>
              )}

              {/* Items List */}
              {filteredSet.map((item, index) => {
                const choice = userAnswers[item.id] || '';
                const isCorrect = choice === item.correct;
                const isRevealed = revealedItems[item.id] || showAllAnswers;

                return (
                  <motion.div
                    key={item.id}
                    layout="position"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`bg-white rounded-xl border transition-all duration-200 overflow-hidden ${
                      isRevealed 
                        ? 'border-amber-200 shadow-sm ring-1 ring-amber-100' 
                        : 'border-slate-200 hover:border-slate-300 hover:shadow-xs'
                    }`}
                  >
                    
                    {/* Upper Active Bar: Sentence & Quiz choice */}
                    <div className="p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                      
                      {/* Left: Sentence Display */}
                      <div 
                        className="flex-1 min-w-0 cursor-pointer select-none group" 
                        onClick={() => toggleRevealItem(item.id)}
                      >
                        <div className="flex items-center gap-2.5 mb-1.5 flex-wrap">
                          <span className="font-mono text-xs text-slate-400 font-semibold bg-slate-100 px-2 py-0.5 rounded-sm">
                            #{item.id}
                          </span>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 px-2 py-0.5 bg-amber-50 border border-amber-100 rounded-full">
                            {item.category === "Destino" ? "Ուղղություն" :
                             item.category === "Causa" ? "Պատճառ / Causa" :
                             item.category === "Destinatario" ? "Հասցեատեր" :
                             item.category === "Medio" ? "Միջոց / Medio" :
                             item.category === "Precio" ? "Գնում / Precio" :
                             item.category === "Lugar impreciso" ? "Անորոշ վայր" :
                             item.category === "Finalidad" ? "Նպատակ / Finalidad" :
                             item.category === "Agradecimiento" ? "Շնորհակալություն" :
                             item.category === "Movimiento" ? "Շարժում" :
                             item.category === "Tránsito" ? "Տարանցում" :
                             item.category === "Uso" ? "Օգտագործում" :
                             item.category === "Interés" ? "Հետաքրքրվածություն" :
                             item.category === "Utilidad" ? "Պիտանիություն" :
                             item.category === "Régimen" ? "Կայուն կապ" :
                             item.category === "Intercambio" ? "Փոխանակում" :
                             item.category === "Comparación" ? "Համեմատություն" :
                             item.category === "Motivación" ? "Շարժառիթ" :
                             item.category === "Opinión" ? "Կարծիք" :
                             item.category === "Voz Pasiva" ? "Կրավորական սեռ" :
                             item.category === "Fecha límite" ? "Վերջնաժամկետ" :
                             item.category}
                          </span>
                          {choice && (
                            <span className="inline-flex items-center gap-1 text-[11px] font-semibold">
                              {isCorrect ? (
                                <span className="text-emerald-600 flex items-center gap-0.5 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                                  <CheckCircle2 className="w-3.5 h-3.5" /> Ճիշտ է
                                </span>
                              ) : (
                                <span className="text-rose-600 flex items-center gap-0.5 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-100">
                                  <XCircle className="w-3.5 h-3.5" /> Սխալ է
                                </span>
                              )}
                            </span>
                          )}
                        </div>

                        {/* Sentence Core */}
                        <div className="text-base sm:text-lg font-medium text-slate-800 leading-relaxed group-hover:text-amber-600 transition-colors">
                          {item.sentenceBefore}
                          
                          {/* Blank Span */}
                          <span className={`inline-block mx-1 font-bold px-2 py-0.5 min-w-[70px] text-center border-b-2 rounded-t-sm transition-all duration-150 ${
                            choice === '' 
                              ? 'border-dashed border-slate-400 bg-slate-50 text-slate-400' 
                              : isCorrect 
                                ? 'border-emerald-500 bg-emerald-50 text-emerald-700' 
                                : 'border-rose-500 bg-rose-50 text-rose-700'
                          }`}>
                            {choice || '...............'}
                          </span>
                          
                          {item.sentenceAfter}
                        </div>
                      </div>

                      {/* Right: Actions and Preposition Buttons */}
                      <div className="flex items-center gap-3 self-end md:self-center flex-wrap">
                        
                        {/* Selector Pills */}
                        <div className="flex bg-slate-100 p-1 rounded-lg border border-slate-200">
                          <button
                            onClick={() => handleSelectAnswer(item.id, 'por')}
                            className={`px-3 py-1 text-xs font-bold rounded-md transition-all cursor-pointer ${
                              choice === 'por'
                                ? 'bg-amber-500 text-white shadow-xs'
                                : 'text-slate-600 hover:text-slate-900'
                            }`}
                          >
                            por
                          </button>
                          <button
                            onClick={() => handleSelectAnswer(item.id, 'para')}
                            className={`px-3 py-1 text-xs font-bold rounded-md transition-all cursor-pointer ${
                              choice === 'para'
                                ? 'bg-amber-500 text-white shadow-xs'
                                : 'text-slate-600 hover:text-slate-900'
                            }`}
                          >
                            para
                          </button>
                          
                          {/* Show 'en' option if correct is 'en' or as a global challenger */}
                          {(item.correct === 'en' || choice === 'en') && (
                            <button
                              onClick={() => handleSelectAnswer(item.id, 'en')}
                              className={`px-3 py-1 text-xs font-bold rounded-md transition-all cursor-pointer ${
                                choice === 'en'
                                  ? 'bg-amber-600 text-white shadow-xs'
                                  : 'text-slate-600 hover:text-slate-900'
                              }`}
                            >
                              en
                            </button>
                          )}
                        </div>

                        {/* Interactive toggle translation disclosure */}
                        <button
                          onClick={() => toggleRevealItem(item.id)}
                          className={`p-2.5 rounded-lg border text-slate-500 hover:text-slate-800 transition-all cursor-pointer ${
                            isRevealed ? 'bg-amber-50/50 border-amber-200 text-amber-700' : 'bg-white border-slate-200 hover:bg-slate-50'
                          }`}
                          title={isRevealed ? "Թաքցնել տվյալները" : "Բացատրել և Թարգմանել"}
                        >
                          <Languages className="w-4 h-4" />
                        </button>
                      </div>

                    </div>

                    {/* Lower Expandable Drawer: Translation, explanation and correction info */}
                    <AnimatePresence initial={false}>
                      {isRevealed && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="bg-amber-500/[0.02] border-t border-slate-100"
                        >
                          <div className="p-4 sm:p-5 space-y-5 text-sm">
                            
                            {/* Part 1: Translation without answer (Translation only) */}
                            <div className="space-y-2 border-b border-dashed border-slate-200 pb-4">
                              <span className="text-xs uppercase tracking-wider font-bold text-slate-400 flex items-center gap-1.5">
                                <Languages className="w-3.5 h-3.5 text-slate-400" />
                                Թարգմանություն (առանց պատասխանի)
                              </span>
                              <div className="bg-slate-50/70 p-3 rounded-lg border border-slate-200/50">
                                <div className="font-mono text-sm text-slate-500 mb-1">
                                  {item.sentenceBefore}
                                  <span className="text-amber-600 font-extrabold px-1">...............</span>
                                  {item.sentenceAfter}
                                </div>
                                <div className="text-slate-800 font-semibold text-base leading-relaxed">
                                  {item.translation}
                                </div>
                              </div>
                            </div>

                            {/* Part 2: Complete sentence with correct answer and explanation */}
                            <div className="space-y-3">
                              <span className="text-xs uppercase tracking-wider font-bold text-amber-600 flex items-center gap-1.5">
                                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                                Նախադասությունը Ճիշտ Պատասխանով և Բացատրությամբ
                              </span>
                              
                              <div className="bg-amber-50/55 rounded-xl p-4 border border-amber-500/10 space-y-3">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 pb-2 border-b border-amber-200/20">
                                  <span className="text-xs font-semibold text-slate-600">Ամբողջական նախադասությունը՝</span>
                                  <div className="font-mono text-base font-bold text-amber-950">
                                    {item.sentenceBefore}
                                    <span className="bg-amber-500 text-white font-extrabold px-2 py-0.5 rounded mx-1 shadow-xs inline-block">
                                      {item.correct}
                                    </span>
                                    {item.sentenceAfter}
                                  </div>
                                </div>

                                <div className="space-y-1">
                                  <span className="text-xs font-bold text-slate-500 block">Ինչու՞ է օգտագործվում «{item.correct}» նախդիրը.</span>
                                  <div className="text-slate-700 text-sm leading-relaxed">
                                    {item.explanation}
                                  </div>
                                </div>
                              </div>
                            </div>

                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                  </motion.div>
                );
              })}

              {/* Check Answer helper for passive study/instructions */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 flex items-start gap-4">
                <Info className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-500 space-y-1">
                  <p className="font-semibold text-slate-700">Խորհուրդ ուսման համար՝</p>
                  <p>Կարող եք սեղմել յուրաքանչյուր նախադասության աջ կողմում գտնվող <span className="inline-flex items-center gap-0.5 bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded font-bold border border-amber-200"><Languages className="w-3 h-3" /> թարգմանության կոճակը</span>, որպեսզի միանգամից տեսնեք հայերեն թարգմանությունն ու քերականական բացատրությունը՝ անկախ նրանից, թե արդեն լրացրել եք պատասխանը, թե ոչ։</p>
                </div>
              </div>

            </div>

          </div>
        ) : (
          /* Detailed comprehensive static Grammar rules page (rules tab) */
          <div className="space-y-8 animate-fadeIn duration-200">
            
            {/* Split Por vs Para Hero */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* POR Panel Card */}
              <div className="bg-white border-l-4 border-slate-700 rounded-xl shadow-xs p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-slate-800 text-white rounded-lg flex items-center justify-center font-bold text-lg shadow-sm">
                    por
                  </div>
                  <div>
                    <h3 className="font-extrabold text-lg text-slate-900 leading-none">POR նախդիր</h3>
                    <p className="text-xs text-slate-500 mt-1">Արտահայտում է պատճառը, ժամանակային տևողությունը կամ փոխանակումը</p>
                  </div>
                </div>

                <ul className="text-xs space-y-2 text-slate-600 mb-6 leading-relaxed">
                  <li>✔ <strong>Causa / Razón:</strong> Պատճառ կամ շարժառիթ</li>
                  <li>✔ <strong>Lugar:</strong> Շարժում ինչ-որ տեղով / միջով (վայրի միջով)</li>
                  <li>✔ <strong>Duración / Tiempo:</strong> Ժամանակահատված, տևողություն, օրվա մաս</li>
                  <li>✔ <strong>Medio:</strong> Տրանսպորտի կամ կապի հաղորդակցության միջոց</li>
                  <li>✔ <strong>Intercambio / Precio:</strong> Գին կամ իրերի փոխանակում</li>
                  <li>✔ <strong>Voz Pasiva:</strong> Կրավորական սեռի գործող անձ (կատարող)</li>
                </ul>

                <div className="bg-slate-50 rounded-lg p-3.5 border border-slate-100 text-xs">
                  <span className="font-bold text-slate-700 block mb-1">Բանալի արտահայտություն.</span>
                  <span className="italic">«Lo hago por ti, porque te quiero»</span> — Ես դա անում եմ քեզ համար (շարժառիթը դու ես, քո սիրուց դրդված):
                </div>
              </div>

              {/* PARA Panel Card */}
              <div className="bg-white border-l-4 border-amber-500 rounded-xl shadow-xs p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-amber-500 text-white rounded-lg flex items-center justify-center font-bold text-lg shadow-md shadow-amber-500/10">
                    para
                  </div>
                  <div>
                    <h3 className="font-extrabold text-lg text-slate-900 leading-none">PARA նախդիր</h3>
                    <p className="text-xs text-slate-500 mt-1">Արտահայտում է նպատակը, վերջնաժամկետը կամ հասցեատիրոջը</p>
                  </div>
                </div>

                <ul className="text-xs space-y-2 text-slate-600 mb-6 leading-relaxed">
                  <li>✔ <strong>Finalidad / Propósito:</strong> Նպատակ (ինֆինիտիվով)</li>
                  <li>✔ <strong>Destinatario:</strong> Ստացող, հասցեատեր (ում համար է նախատեսված)</li>
                  <li>✔ <strong>Destino:</strong> Ուղղություն, շարժման վերջնակետ (դեպի ուր)</li>
                  <li>✔ <strong>Fecha límite / Plazo:</strong> Կոնկրետ վերջնաժամկետ (կոնկրետ օր/ժամ)</li>
                  <li>✔ <strong>Opinión:</strong> Կարծիք, սուբյեկտիվ տեսանկյուն</li>
                  <li>✔ <strong>Comparación:</strong> Համեմատություն նորմայի կամ սպասվածի հետ</li>
                </ul>

                <div className="bg-amber-50/50 rounded-lg p-3.5 border border-amber-100 text-xs text-amber-900">
                  <span className="font-bold text-amber-800 block mb-1">Բանալի արտահայտություն.</span>
                  <span className="italic">«Este regalo es para ti»</span> — Այս նվերը քեզ համար է (հասցեատերը դու ես, ստացողը դու ես):
                </div>
              </div>

            </div>

            {/* Rules Details Grid */}
            <div className="bg-white border border-slate-200 rounded-xl shadow-xs p-6">
              <h3 className="font-extrabold text-lg text-slate-900 mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-500" />
                Por և Para քերականական կանոնների մանրամասն շտեմարան
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Rules split left / right */}
                <div className="space-y-4">
                  <h4 className="font-bold text-xs uppercase text-slate-400 border-b border-slate-100 pb-2">POR նախդրի կիրառությունը</h4>
                  
                  {GRAMMAR_RULES.filter(r => r.preposition === 'por').map((rule, idx) => (
                    <div key={idx} className="bg-slate-50/60 rounded-lg p-4 border border-slate-100 space-y-2 text-sm">
                      <div className="flex justify-between items-start">
                        <span className="font-bold text-slate-900">{rule.ruleEsp}</span>
                        <span className="text-[10px] bg-slate-200 text-slate-700 px-1.5 py-0.5 rounded font-mono font-bold uppercase">{rule.preposition}</span>
                      </div>
                      <p className="text-xs text-slate-500 font-medium"> Armenian: {rule.ruleArm} </p>
                      
                      <div className="border-t border-slate-100 pt-2 space-y-1">
                        {rule.examples.map((example, eIdx) => (
                          <div key={eIdx} className="text-xs">
                            <div className="font-semibold text-slate-700 italic">🇪🇸 {example.esp}</div>
                            <div className="text-slate-500">🇦🇲 {example.arm}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-xs uppercase text-slate-400 border-b border-slate-100 pb-2">PARA նախդրի կիրառությունը</h4>
                  
                  {GRAMMAR_RULES.filter(r => r.preposition === 'para').map((rule, idx) => (
                    <div key={idx} className="bg-amber-50/[0.15] rounded-lg p-4 border border-amber-500/10 space-y-2 text-sm">
                      <div className="flex justify-between items-start">
                        <span className="font-bold text-amber-950">{rule.ruleEsp}</span>
                        <span className="text-[10px] bg-amber-500 text-white px-1.5 py-0.5 rounded font-mono font-bold uppercase">{rule.preposition}</span>
                      </div>
                      <p className="text-xs text-amber-700/80 font-medium"> Armenian: {rule.ruleArm} </p>
                      
                      <div className="border-t border-amber-500/10 pt-2 space-y-1">
                        {rule.examples.map((example, eIdx) => (
                          <div key={eIdx} className="text-xs">
                            <div className="font-semibold text-amber-900 italic">🇪🇸 {example.esp}</div>
                            <div className="text-amber-700/80">🇦🇲 {example.arm}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>

            {/* Fixed Preposition Warning (Insistir) */}
            <div className="bg-rose-50 border border-rose-200 rounded-xl p-5 flex items-start gap-4">
              <div className="bg-rose-500 text-white font-bold text-xs px-2.5 py-1.5 rounded-lg shrink-0">
                Ուշադրություն
              </div>
              <div className="text-xs text-rose-900 leading-relaxed space-y-1">
                <p className="font-bold">Բացառություններ և կայուն բայական կառույցներ (Régimen Verbal)</p>
                <p>Իսպաներենում ոչ բոլոր դեպքերում է, որ օգտագործվում են por կամ para նախդիրները, նույնիսկ եթե հայերեն կարող է թարգմանվել «համար» կամ «պատճառով»: Օրինակ՝ <strong>Insistir</strong> բայը միշտ պահանջում է <strong>en</strong> նախդիրը: Առաջին վարժության 14-րդ նախադասության մեջ՝ <em>«Insisto en que no te vayas ahora»</em> (Ես պնդում եմ, որ հիմա չգնաս):</p>
              </div>
            </div>

          </div>
        )}

      </main>

      {/* Footer info containing nice copyright */}
      <footer className="max-w-6xl mx-auto px-4 mt-16 pt-8 border-t border-slate-200 text-center text-xs text-slate-400">
        <p>© 2026 Por o Para — Ejercicios. Բոլոր իրավունքները պաշտպանված են։</p>
        <p className="mt-1">Նախագծված է որպես ինտերակտիվ օգնական իսպաներեն սովորողների համար:</p>
      </footer>
    </div>
  );
}
