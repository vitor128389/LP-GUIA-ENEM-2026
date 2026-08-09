import React, { useState } from 'react';
import { Logo } from './components/Logo';
import platformMockupImg from './assets/images/custom_mockup.webp';
import { 
  BookOpen, 
  CheckCircle2, 
  Clock, 
  FileText, 
  HelpCircle, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  TrendingUp, 
  Award, 
  ChevronDown, 
  Star, 
  ArrowRight, 
  Compass, 
  DollarSign, 
  Menu, 
  Lock,
  X
} from 'lucide-react';

const CHECKOUT_URL = 'https://pay.cakto.com.br/37dj28x_1025553';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans antialiased">
      
      {/* 1. HEADER FIXO */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-header border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center group hover:opacity-90 transition-opacity">
            <Logo variant="light" size="md" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <a href="#conteudo" className="hover:text-[#2E5EFF] transition-colors">Conteúdo</a>
            <a href="#beneficios" className="hover:text-[#2E5EFF] transition-colors">Benefícios</a>
            <a href="#como-funciona" className="hover:text-[#2E5EFF] transition-colors">Como Funciona</a>
            <a href="#demonstracao" className="hover:text-[#2E5EFF] transition-colors font-semibold text-[#2E5EFF]">Demonstração</a>
            <a href="#depoimentos" className="hover:text-[#2E5EFF] transition-colors">Depoimentos</a>
            <a href="#preco" className="hover:text-[#2E5EFF] transition-colors">Preço</a>
            <a href="#faq" className="hover:text-[#2E5EFF] transition-colors">FAQ</a>
          </nav>

          {/* Desktop Header CTA */}
          <div className="hidden md:flex items-center gap-4">
            <div className="text-right hidden xl:block">
              <span className="text-xs text-slate-500 block">Acesso vitalício por apenas</span>
              <span className="font-heading font-bold text-slate-900 text-sm">R$ 19,90</span>
            </div>
            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              id="header-cta-button"
              className="gradient-btn text-white px-5 py-2.5 rounded-xl font-heading font-bold text-sm shadow-md shadow-[#2E5EFF]/25 hover:shadow-lg transition-all flex items-center gap-2"
            >
              Comprar agora
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3">
            <a 
              href="#conteudo" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-700 font-medium hover:text-[#2E5EFF]"
            >
              Conteúdo do Guia
            </a>
            <a 
              href="#beneficios" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-700 font-medium hover:text-[#2E5EFF]"
            >
              Solução & Benefícios
            </a>
            <a 
              href="#como-funciona" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-700 font-medium hover:text-[#2E5EFF]"
            >
              Como Funciona
            </a>
            <a 
              href="#demonstracao" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-[#2E5EFF] font-semibold"
            >
              Demonstração Real
            </a>
            <a 
              href="#depoimentos" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-700 font-medium hover:text-[#2E5EFF]"
            >
              Depoimentos
            </a>
            <a 
              href="#preco" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-700 font-medium hover:text-[#2E5EFF]"
            >
              Garantir Desconto (R$ 19,90)
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-700 font-medium hover:text-[#2E5EFF]"
            >
              Perguntas Frequentes
            </a>
            <div className="pt-2">
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full gradient-btn text-white py-3 rounded-xl font-heading font-bold text-center block shadow-md"
              >
                Comprar agora por R$ 19,90
              </a>
            </div>
          </div>
        )}
      </header>

      {/* MAIN CONTENT */}
      <main className="pt-20 sm:pt-24">

        {/* 2. HERO SECTION */}
        <section className="relative overflow-hidden pt-6 pb-10 lg:pt-10 lg:pb-14 bg-white">
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-5xl mx-auto space-y-4 sm:space-y-6">
              

              {/* Main Headline */}
              <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.15] max-w-4xl mx-auto">
                Estude para o ENEM <span className="text-[#2E5EFF]">2026</span> de forma simples, organizada e sem gastar uma fortuna
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed">
                Tenha acesso a conteúdos didáticos, questões comentadas e um guia completo de redação em uma única plataforma.
              </p>

              {/* Platform Image */}
              <div className="pt-2 max-w-4xl mx-auto">
                <img
                  src={platformMockupImg}
                  alt="Demonstração da plataforma Guia ENEM 2026"
                  className="w-full h-auto mx-auto pointer-events-none"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* CTA Section */}
              <div className="pt-4 flex flex-col items-center gap-4">
                <a
                  href={CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-main-cta"
                  className="w-full sm:w-auto gradient-btn text-white px-8 py-4 sm:py-5 rounded-2xl font-heading font-bold text-lg sm:text-xl shadow-xl shadow-[#2E5EFF]/30 hover:scale-[1.02] transition-transform flex items-center justify-center gap-3"
                >
                  <span>GARANTIR MEU ACESSO POR R$ 19,90</span>
                  <ArrowRight className="w-6 h-6" />
                </a>

                {/* Subtext Guarantees */}
                <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-500 font-medium">
                  <span className="flex items-center gap-1.5 text-slate-700">
                    <Zap className="w-4 h-4 text-amber-500 fill-amber-500" />
                    Acesso Imediato no E-mail
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-700">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    Pagamento Único • Sem Mensalidades
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-700">
                    <Award className="w-4 h-4 text-[#2E5EFF]" />
                    Garantia de 7 Dias
                  </span>
                </div>
              </div>

            </div>

          </div>
        </section>


        {/* 3. SEÇÃO DE DOR / PROBLEMA */}
        <section className="py-16 bg-white border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
              <span className="text-xs font-bold text-rose-600 uppercase tracking-widest bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
                Você se identifica com isso?
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-slate-900 tracking-tight">
                Estudar para o ENEM sozinho não precisa ser um caos desorganizado
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                A maioria dos candidatos reprova não por falta de esforço, mas por cometer esses 4 erros fatais na preparação:
              </p>
            </div>

            {/* Pain Cards Grid - 2 per row (2x2) */}
            <div className="grid grid-cols-2 gap-3 sm:gap-6">
              
              {/* Card 1 */}
              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow space-y-2.5 sm:space-y-4">
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
                  <Compass className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="font-heading font-bold text-sm sm:text-lg text-slate-900 leading-snug">1. Dispersão de Material</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Perder horas procurando PDFs desatualizados na internet e assistindo a vídeos soltos no YouTube que não seguem a matriz oficial do ENEM.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow space-y-2.5 sm:space-y-4">
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
                  <DollarSign className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="font-heading font-bold text-sm sm:text-lg text-slate-900 leading-snug">2. Cursinho Absurdamente Caro</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Pagar mensalidades abusivas de R$ 300 a R$ 800/mês em cursinhos presenciais ou plataformas gigantescas cheias de aulas arrastadas.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow space-y-2.5 sm:space-y-4">
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="font-heading font-bold text-sm sm:text-lg text-slate-900 leading-snug">3. Sem Saber por Onde Começar</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Abrir os livros sem ter um cronograma claro e ficar com aquela sensação angustiante de matéria acumulada e tempo perdido.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow space-y-2.5 sm:space-y-4">
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
                  <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <h3 className="font-heading font-bold text-sm sm:text-lg text-slate-900 leading-snug">4. Redação sem Repertório</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Travar no tema da redação por não ter repertórios socioculturais curingas e perder pontos valiosos na Competência 2 e 3.
                </p>
              </div>

            </div>

          </div>
        </section>


        {/* 4. SEÇÃO DE SOLUÇÃO / BENEFÍCIOS */}
        <section id="beneficios" className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
              <span className="text-xs font-bold text-[#2E5EFF] uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                A Solução Definitiva
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
                Como o Guia ENEM <span className="text-[#2E5EFF]">2026</span> resolve tudo isso para você
              </h2>
              <p className="text-slate-600 text-base">
                Criamos a estrutura ideal para quem busca aprovação rápida, objetiva e sem gastar fortunas.
              </p>
            </div>

            {/* Solutions Grid - 2 per row (2x2) */}
            <div className="grid grid-cols-2 gap-3 sm:gap-6">
              
              <div className="bg-white p-4 sm:p-8 rounded-2xl border border-slate-200/80 shadow-md hover:border-[#2E5EFF]/40 transition-all flex flex-col sm:flex-row gap-3 sm:gap-5">
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#2E5EFF] to-[#06B6D4] text-white flex items-center justify-center shrink-0 shadow-lg shadow-[#2E5EFF]/20">
                  <BookOpen className="w-5 h-5 sm:w-7 sm:h-7" />
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <h3 className="font-heading font-bold text-sm sm:text-xl text-slate-900 leading-snug">108 Capítulos Direcionados</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Conteúdo didático e direto ao ponto focado estritamente no que é cobrado no ENEM. Nada de enrolação ou teorias desnecessárias que só tomam seu tempo.
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 sm:p-8 rounded-2xl border border-slate-200/80 shadow-md hover:border-[#2E5EFF]/40 transition-all flex flex-col sm:flex-row gap-3 sm:gap-5">
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#2E5EFF] to-[#06B6D4] text-white flex items-center justify-center shrink-0 shadow-lg shadow-[#2E5EFF]/20">
                  <HelpCircle className="w-5 h-5 sm:w-7 sm:h-7" />
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <h3 className="font-heading font-bold text-sm sm:text-xl text-slate-900 leading-snug">1.110 Questões Comentadas</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Aprenda na prática com gabarito explicativo detalhado de cada alternativa (A, B, C, D, E). Entenda por que a certa está certa e por que as erradas estão erradas.
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 sm:p-8 rounded-2xl border border-slate-200/80 shadow-md hover:border-[#2E5EFF]/40 transition-all flex flex-col sm:flex-row gap-3 sm:gap-5">
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#2E5EFF] to-[#06B6D4] text-white flex items-center justify-center shrink-0 shadow-lg shadow-[#2E5EFF]/20">
                  <Sparkles className="w-5 h-5 sm:w-7 sm:h-7" />
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <h3 className="font-heading font-bold text-sm sm:text-xl text-slate-900 leading-snug">Guia de Redação Nota 1000</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Mais de 100 repertórios socioculturais organizados por eixos temáticos (Saúde, Educação, Meio Ambiente, Tecnologia) com citações e filósofos prontos para usar.
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 sm:p-8 rounded-2xl border border-slate-200/80 shadow-md hover:border-[#2E5EFF]/40 transition-all flex flex-col sm:flex-row gap-3 sm:gap-5">
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#2E5EFF] to-[#06B6D4] text-white flex items-center justify-center shrink-0 shadow-lg shadow-[#2E5EFF]/20">
                  <Clock className="w-5 h-5 sm:w-7 sm:h-7" />
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <h3 className="font-heading font-bold text-sm sm:text-xl text-slate-900 leading-snug">Cronograma Inteligente Automático</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Sistemas pré-configurados de 30, 60, 90 e 120 dias. Saiba exatamente o que estudar a cada dia da semana, acompanhando seu progresso em tempo real.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>


        {/* 5. VITRINE DE CONTEÚDO */}
        <section id="conteudo" className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
              <span className="text-xs font-bold text-[#06B6D4] uppercase tracking-widest bg-cyan-950/80 border border-cyan-800 px-3 py-1 rounded-full">
                Grade de Conteúdo Completa
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
                Tudo o que é cobrado na prova do ENEM
              </h2>
              <p className="text-slate-400 text-base sm:text-lg">
                Organizado de forma lógica, sem excessos e totalmente alinhado com a Matriz de Referência do INEP.
              </p>
            </div>

            {/* Grid 4 Áreas + Redação - 2 por linha no mobile */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
              
              {/* Card 1 - Linguagens */}
              <div className="bg-slate-800/90 rounded-2xl p-4 sm:p-6 border border-slate-700/80 hover:border-[#2E5EFF] transition-all space-y-2.5 sm:space-y-4">
                <div className="flex items-center justify-between gap-1">
                  <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-blue-500/20 text-[#2E5EFF] flex items-center justify-center font-bold">
                    <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold bg-blue-500/20 text-blue-300 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md shrink-0">
                    24 Capítulos
                  </span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm sm:text-xl text-white mb-1 sm:mb-2 leading-snug">Linguagens & Códigos</h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    Gramática Aplicada, Interpretação de Texto, Escolas Literárias, Funções da Linguagem, Artes e Educação Física.
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-700 text-[10px] sm:text-xs text-slate-400 flex items-center justify-between">
                  <span>250+ Questões</span>
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
                </div>
              </div>

              {/* Card 2 - Matemática */}
              <div className="bg-slate-800/90 rounded-2xl p-4 sm:p-6 border border-slate-700/80 hover:border-[#06B6D4] transition-all space-y-2.5 sm:space-y-4">
                <div className="flex items-center justify-between gap-1">
                  <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-cyan-500/20 text-[#06B6D4] flex items-center justify-center font-bold">
                    <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold bg-cyan-500/20 text-cyan-300 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md shrink-0">
                    22 Capítulos
                  </span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm sm:text-xl text-white mb-1 sm:mb-2 leading-snug">Matemática & Tecnologias</h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    Geometria Plana e Espacial, Funções, Porcentagem, Estatística, Matemática Financeira, Probabilidade e Escalas.
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-700 text-[10px] sm:text-xs text-slate-400 flex items-center justify-between">
                  <span>280+ Questões</span>
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
                </div>
              </div>

              {/* Card 3 - Ciências da Natureza */}
              <div className="bg-slate-800/90 rounded-2xl p-4 sm:p-6 border border-slate-700/80 hover:border-emerald-500 transition-all space-y-2.5 sm:space-y-4">
                <div className="flex items-center justify-between gap-1">
                  <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                    <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold bg-emerald-500/20 text-emerald-300 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md shrink-0">
                    30 Capítulos
                  </span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm sm:text-xl text-white mb-1 sm:mb-2 leading-snug">Ciências da Natureza</h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    Biologia (Ecologia e Genética), Física (Mecânica e Ondulatória), Química (Estequiometria e Orgânica).
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-700 text-[10px] sm:text-xs text-slate-400 flex items-center justify-between">
                  <span>300+ Questões</span>
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
                </div>
              </div>

              {/* Card 4 - Ciências Humanas */}
              <div className="bg-slate-800/90 rounded-2xl p-4 sm:p-6 border border-slate-700/80 hover:border-indigo-500 transition-all space-y-2.5 sm:space-y-4">
                <div className="flex items-center justify-between gap-1">
                  <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold">
                    <Compass className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold bg-indigo-500/20 text-indigo-300 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md shrink-0">
                    24 Capítulos
                  </span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm sm:text-xl text-white mb-1 sm:mb-2 leading-snug">Ciências Humanas</h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    História do Brasil e Geral, Geografia Física e Urbana, Filosofia Antiga a Contemporânea e Sociologia.
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-700 text-[10px] sm:text-xs text-slate-400 flex items-center justify-between">
                  <span>220+ Questões</span>
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
                </div>
              </div>

              {/* Card 5 - Redação Nota 1000 */}
              <div className="bg-gradient-to-br from-amber-900/50 to-slate-800 rounded-2xl p-4 sm:p-6 border border-amber-500/50 col-span-2 lg:col-span-2 hover:border-amber-400 transition-all space-y-2.5 sm:space-y-4">
                <div className="flex items-center justify-between gap-1">
                  <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                    <Award className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold bg-amber-500/20 text-amber-300 px-2 py-0.5 sm:px-3 sm:py-1 rounded-md shrink-0">
                    Módulo Bônus Exclusivo
                  </span>
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base sm:text-2xl text-white mb-1 sm:mb-2 leading-snug">Guia Completo de Redação Nota 1000</h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    Aprenda a estruturar o texto dissertativo-argumentativo perfeito. Inclui mais de 100 repertórios socioculturais categorizados por temas, argumentos coringa e modelos de proposta de intervenção para garantir 200 pontos na Competência 5.
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-700/80 text-[10px] sm:text-xs text-amber-300 flex items-center justify-between">
                  <span>+100 Repertórios Categorizados</span>
                  <span className="font-bold">Incluso no valor de R$ 19,90</span>
                </div>
              </div>

            </div>

          </div>
        </section>


        {/* 6. COMO FUNCIONA */}
        <section id="como-funciona" className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
              <span className="text-xs font-bold text-[#2E5EFF] uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Simples e Rápido
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
                Como funciona o seu acesso em 3 passos
              </h2>
              <p className="text-slate-600 text-base">
                Você estará estudando em menos de 3 minutos após a confirmação.
              </p>
            </div>

            {/* 3 Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              
              {/* Step 1 */}
              <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-md text-center space-y-4 relative">
                <div className="w-14 h-14 rounded-2xl bg-[#2E5EFF] text-white font-heading font-extrabold text-xl flex items-center justify-center mx-auto shadow-lg shadow-[#2E5EFF]/30">
                  1
                </div>
                <h3 className="font-heading font-bold text-xl text-slate-900">Compre com Segurança</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Clique no botão de compra e conclua seu pedido de R$ 19,90 no checkout criptografado via Pix ou Cartão de Crédito.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-md text-center space-y-4 relative">
                <div className="w-14 h-14 rounded-2xl bg-[#06B6D4] text-white font-heading font-extrabold text-xl flex items-center justify-center mx-auto shadow-lg shadow-[#06B6D4]/30">
                  2
                </div>
                <h3 className="font-heading font-bold text-xl text-slate-900">Receba por E-mail</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Em menos de 2 minutos, seus dados de acesso e link direto da plataforma chegam na sua caixa de entrada de e-mail.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-md text-center space-y-4 relative">
                <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white font-heading font-extrabold text-xl flex items-center justify-center mx-auto shadow-lg shadow-emerald-600/30">
                  3
                </div>
                <h3 className="font-heading font-bold text-xl text-slate-900">Comece a Estudar</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Acesse pelo celular ou computador, ative seu cronograma automático e comece a avançar nos capítulos hoje mesmo!
                </p>
              </div>

            </div>

          </div>
        </section>


        {/* VEJA COMO FUNCIONA POR DENTRO - DEMONSTRAÇÃO REAL (IFRAME) */}
        <section id="demonstracao" className="py-[40px] px-[16px] md:py-[60px] md:px-[20px] text-center bg-[#F8FAFC]" style={{ padding: '60px 20px', textAlign: 'center', background: '#F8FAFC' }}>
          <div className="max-w-[1100px] mx-auto">
            <h2 className="font-heading font-semibold text-2xl md:text-[32px] text-[#0F172A] mb-3 leading-tight" style={{ fontFamily: "'Sora', sans-serif", fontSize: '32px', fontWeight: 600, color: '#0F172A', marginBottom: '12px' }}>
              Veja como funciona por dentro
            </h2>
            <p className="text-[#64748B] text-sm md:text-base mb-8 max-w-2xl mx-auto" style={{ color: '#64748B', fontSize: '16px', marginBottom: '32px' }}>
              Navegue pela plataforma de verdade antes de comprar — sem precisar criar conta.
            </p>
            <iframe 
              src="https://guia-enem-2026.vercel.app/demo" 
              className="w-full max-w-[1100px] h-[500px] md:h-[650px] mx-auto block border-none rounded-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
              style={{ 
                width: '100%', 
                maxWidth: '1100px', 
                border: 'none', 
                borderRadius: '24px', 
                boxShadow: '0 20px 60px rgba(0,0,0,0.15)' 
              }}
              loading="lazy"
              title="Demonstração da plataforma Guia ENEM 2026"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>


        {/* 8. PREÇO (CARD ÚNICO E CLARO) */}
        <section id="preco" className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="max-w-3xl mx-auto bg-white rounded-3xl border-2 border-[#2E5EFF] shadow-2xl overflow-hidden relative">
              
              {/* Highlight Ribbon */}
              <div className="bg-gradient-to-r from-[#2E5EFF] to-[#06B6D4] text-white py-3 px-6 text-center font-heading font-bold text-xs sm:text-sm tracking-wider uppercase">
                🔥 OFERTA DE LANÇAMENTO • APROVEITE O DESCONTO EXCLUSIVO
              </div>

              <div className="p-6 sm:p-10 space-y-8">
                
                {/* Header Pricing Info */}
                <div className="text-center space-y-3">
                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">
                    Acesso Vitalício ao Guia ENEM <span className="text-[#2E5EFF]">2026</span>
                  </h3>
                  <p className="text-slate-500 text-sm">
                    Pagamento único sem mensalidades ou cobranças futuras
                  </p>

                  <div className="pt-2 flex items-center justify-center gap-3">
                    <span className="text-slate-400 line-through text-lg sm:text-xl font-bold">R$ 97,00</span>
                    <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2.5 py-1 rounded-md">80% OFF</span>
                  </div>

                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-slate-600 text-sm font-semibold">Por apenas</span>
                    <span className="font-heading font-extrabold text-4xl sm:text-6xl text-[#2E5EFF] tracking-tight">R$ 19,90</span>
                  </div>
                  <span className="text-xs text-slate-500 block">à vista no Pix ou Cartão de Crédito</span>
                </div>

                {/* Features Checklist */}
                <div className="space-y-3 pt-4 border-t border-slate-100">
                  <p className="font-heading font-bold text-sm text-slate-900">Tudo o que está incluso no seu acesso:</p>
                  
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span><strong>108 Capítulos Completos</strong> abrangendo Linguagens, Matemática, Natureza e Humanas</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span><strong>1.110 Questões Comentadas</strong> com explicação detalhada alternativa por alternativa</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span><strong>Guia Completo de Redação Nota 1000</strong> com +100 repertórios socioculturais</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span><strong>Cronograma Inteligente Automático</strong> ajustável para 30, 60, 90 ou 120 dias</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span><strong>Acompanhamento de Progresso</strong> e sequências diárias de estudo</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span><strong>Acesso Total via Navegador</strong> — funciona perfeitamente no celular, tablet e computador</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span><strong>Acesso Vitalício Garantido</strong> sem limite de tempo e sem mensalidades</span>
                    </li>
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="pt-2 space-y-4">
                  <a
                    href={CHECKOUT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="pricing-cta-button"
                    className="w-full gradient-btn text-white py-4 sm:py-5 rounded-2xl font-heading font-extrabold text-base sm:text-xl text-center block shadow-xl shadow-[#2E5EFF]/30 hover:scale-[1.01] transition-transform"
                  >
                    COMPRAR AGORA POR R$ 19,90
                  </a>

                  {/* Security Seals */}
                  <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Lock className="w-3.5 h-3.5 text-emerald-600" />
                      Checkout 100% Seguro
                    </span>
                    <span className="flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                      Acesso Imediato
                    </span>
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#2E5EFF]" />
                      Garantia de 7 Dias
                    </span>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>


        {/* 7. PROVA SOCIAL (DEPOIMENTOS) */}
        {/* EXEMPLOS FICTÍCIOS DE DEPOIMENTOS - SUBSTITUIR POR DEPOIMENTOS REAIS POSTERIORMENTE */}
        <section id="depoimentos" className="py-16 sm:py-24 bg-white border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
              <span className="text-xs font-bold text-[#2E5EFF] uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Depoimentos
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
                Estudantes que organizaram os estudos com o Guia
              </h2>
              <p className="text-slate-600 text-base">
                Veja como a objetividade do material fez a diferença na rotina de quem se preparou.
              </p>
            </div>

            {/* Testimonials Grid */}
            {/* EXEMPLOS FICTÍCIOS DE DEPOIMENTOS - SUBSTITUIR POR DEPOIMENTOS REAIS POSTERIORMENTE */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Testimonial 1 */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-md space-y-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm italic leading-relaxed">
                  "Eu não tinha condições de pagar R$ 400 por mês num cursinho presencial na minha cidade. O Guia ENEM me deu toda a estrutura que eu precisava. A parte das questões comentadas é incrível, salvou meu estudo de exatas!"
                </p>
                <div className="pt-2 border-t border-slate-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-[#2E5EFF] font-bold flex items-center justify-center">
                    MC
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-slate-900 text-sm">Mariana Costa</h4>
                    <span className="text-xs text-slate-500">Aprovada em Enfermagem • Recife - PE</span>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-md space-y-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm italic leading-relaxed">
                  "O repertório sociocultural da redação valeu cada centavo do R$ 19,90. Tirei 960 na redação do ENEM usando o esqueleto de intervenção do guia. Recomendo pra todo mundo que quer passar sem enrolação."
                </p>
                <div className="pt-2 border-t border-slate-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-cyan-100 text-[#06B6D4] font-bold flex items-center justify-center">
                    LS
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-slate-900 text-sm">Lucas Silva</h4>
                    <span className="text-xs text-slate-500">Nota 960 na Redação • Belo Horizonte - MG</span>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-md space-y-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm italic leading-relaxed">
                  "O cronograma de 90 dias me ajudou demais porque eu estudo e trabalho. Sabia exatamente qual capítulo ler no ônibus pelo celular. A plataforma é super leve e prática!"
                </p>
                <div className="pt-2 border-t border-slate-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 font-bold flex items-center justify-center">
                    GA
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-slate-900 text-sm">Gabriel Almeida</h4>
                    <span className="text-xs text-slate-500">Estudante de Engenharia • São Paulo - SP</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Code comment reminder element */}
            <p className="text-center text-xs text-slate-400 mt-6 italic">
              * Depoimentos fictícios demonstrativos do formato e experiência do aluno.
            </p>

          </div>
        </section>


        {/* 9. FAQ (PERGUNTAS FREQUENTES) */}
        <section id="faq" className="py-16 sm:py-24 bg-white border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center space-y-4 mb-12">
              <span className="text-xs font-bold text-[#2E5EFF] uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Tire suas Dúvidas
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
                Perguntas Frequentes
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Tudo o que você precisa saber antes de adquirir o Guia ENEM 2026.
              </p>
            </div>

            {/* Accordion List */}
            <div className="space-y-3">
              {[
                {
                  q: 'Como recebo o meu acesso após a compra?',
                  a: 'Assim que seu pagamento for confirmado (no Pix ou Cartão é imediato), você receberá um e-mail com seus dados de login e link de acesso direto à plataforma. Basta clicar e começar a estudar!'
                },
                {
                  q: 'Funciona no celular ou preciso de um computador?',
                  a: 'O Guia ENEM 2026 foi desenvolvido com foco total em dispositivos móveis. Funciona perfeitamente no navegador do seu smartphone, tablet ou computador sem precisar baixar nenhum aplicativo pesado.'
                },
                {
                  q: 'Por quanto tempo terei acesso ao material?',
                  a: 'Seu acesso é VITALÍCIO! Você paga uma única vez o valor de R$ 19,90 e tem acesso garantido para sempre, inclusive com todas as atualizações até a prova do ENEM 2026.'
                },
                {
                  q: 'Como funciona o pagamento? É seguro?',
                  a: 'O pagamento é processado pela plataforma Cakto, uma das gerenciadoras de pagamentos mais seguras do Brasil. Aceitamos Pix com aprovação imediata e Cartão de Crédito em até 2x.'
                },
                {
                  q: 'E se eu não gostar, posso pedir reembolso?',
                  a: 'Com certeza! Oferecemos 7 dias de garantia incondicional. Se você acessar o material e achar que não é para você, basta solicitar o reembolso por e-mail e devolveremos 100% do valor pago.'
                },
                {
                  q: 'Como funciona o cronograma de estudos automático?',
                  a: 'Dentro da plataforma você pode selecionar a duração do seu plano (30, 60, 90 ou 120 dias). O sistema organiza automaticamente quais capítulos e quantas questões você deve estudar por dia.'
                }
              ].map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="font-heading font-bold text-slate-900 text-base sm:text-lg">
                      {faq.q}
                    </span>
                    <div className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      openFaq === idx ? 'rotate-180 bg-[#2E5EFF] text-white' : 'text-slate-600'
                    }`}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>

                  {openFaq === idx && (
                    <div className="px-5 sm:px-6 pb-6 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-100/80">
                      <p className="mt-3">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </section>


        {/* 10. CTA FINAL */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-[#2E5EFF] via-[#1A46E6] to-[#06B6D4] text-white relative overflow-hidden">
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
            
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white text-xs sm:text-sm font-semibold border border-white/20">
              <Zap className="w-4 h-4 text-amber-300 fill-amber-300" />
              <span>Sua aprovação no ENEM 2026 começa agora</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              Pronto para transformar sua rotina de estudos por apenas R$ 19,90?
            </h2>

            <p className="text-white/80 text-base sm:text-xl max-w-2xl mx-auto">
              Não perca tempo com materiais desorganizados. Tenha o Guia completo com 108 capítulos, 1.110 questões e Redação Nota 1000 na palma da sua mão.
            </p>

            <div className="pt-4 flex flex-col items-center gap-3">
              <a
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="final-cta-button"
                className="w-full sm:w-auto bg-white text-[#2E5EFF] hover:bg-slate-50 px-8 py-4 sm:py-5 rounded-2xl font-heading font-extrabold text-lg sm:text-xl shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-3"
              >
                <span>COMPRAR AGORA O GUIA ENEM 2026</span>
                <ArrowRight className="w-6 h-6" />
              </a>

              <span className="text-xs text-white/70">
                🔒 Pagamento 100% Seguro • Liberação Imediata
              </span>
            </div>

          </div>
        </section>

        {/* 11. GARANTIA DE 7 DIAS */}
        <section id="garantia" className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-lg flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-10 h-10 sm:w-12 sm:h-12" />
              </div>
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-emerald-200">
                  Risco Zero para Você
                </div>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900">
                  Garantia Incondicional de 7 Dias
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Experimente o Guia ENEM 2026 com total tranquilidade. Se por qualquer motivo você não ficar 100% satisfeito com o conteúdo, os exercícios comentados ou o guia de redação, devolvemos integralmente seu dinheiro sem burocracia ou letras miúdas.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>


      {/* 11. FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800 text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-8 border-b border-slate-800">
            
            <a href="#" className="flex items-center group hover:opacity-90 transition-opacity">
              <Logo variant="dark" size="sm" />
            </a>

            <div className="flex flex-wrap justify-center gap-6 text-slate-400 text-xs">
              <a href="#conteudo" className="hover:text-white transition-colors">Conteúdo</a>
              <a href="#beneficios" className="hover:text-white transition-colors">Benefícios</a>
              <a href="#preco" className="hover:text-white transition-colors">Preço</a>
              <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
              <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className="text-[#2E5EFF] hover:underline font-bold">Checkout Seguro</a>
            </div>

          </div>

          {/* Legal Disclaimer */}
          <div className="max-w-4xl mx-auto text-center space-y-3 text-slate-500 text-xs leading-relaxed">
            <p>
              Todos os direitos reservados. Copyright © 2026 - Guia ENEM 2026.
            </p>
          </div>

        </div>
      </footer>

    </div>
  );
}
