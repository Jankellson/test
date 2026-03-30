import React, { useState } from 'react';
import { Menu, X, ArrowRight, Mail, Phone, MapPin, ChevronRight, Heart, Target, Users, BookOpen, Clock, Star, Share2 } from 'lucide-react';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const navLinks = ['Sākums', 'Par mani', 'Pakalpojumi', 'Blogs', 'Kontakti'];

  const processSteps = [
    {
      icon: Heart,
      title: 'Iepazīšanās',
      description: 'Sākam ar brīvu sarunu, lai izprastu tavus mērķus, vērtības un dzīvesveidu.',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400&h=300'
    },
    {
      icon: Target,
      title: 'Analīze',
      description: 'Detalizēti izpētām tavu pašreizējo stāvokli, izvērtējam iespējamos uzlabojumus.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=400&h=300'
    },
    {
      icon: BookOpen,
      title: 'Plānošana',
      description: 'Izveidojam personalizētu plānu ar precīziem soļiem, kas vada uz tavu mērķi.',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=400&h=300'
    },
    {
      icon: Users,
      title: 'Atbalsts',
      description: 'Es esmu pie tevis katrā solī – nodrošinu atbalstu, motivāciju un korekcijas.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400&h=300'
    }
  ];

  const services = [
    {
      title: 'Individuālā konsultācija',
      price: '€85',
      duration: '60 minūtes',
      features: ['Personīgais stāvokļa analīze', 'Mērķu definēšana', 'Praktiskas ieteikums', '2 nedēļu atbalsts'],
      featured: false
    },
    {
      title: 'Uztura plānošana',
      price: '€120',
      duration: '90 minūtes',
      features: ['Detalizēts uztura analīze', 'Personalizēts ēdienu plāns', 'Recepšu kopa', '1 mēneša atbalsts'],
      featured: true
    },
    {
      title: 'Kompletais mentoredžums',
      price: '€297',
      duration: '3 mēneši',
      features: ['6 ikpēcnedēļas tikšanās', 'Pilns dzīvesveida analīze', 'Regulāra progress sekošana', 'VIP atbalsts'],
      featured: false
    }
  ];

  const blogPosts = [
    {
      title: '5 vienkārši soļi veselīgākai dzīvei',
      excerpt: 'Sāci mazus, bet nozīmīgus grozījumus, kas mainīs tavu dzīves kvalitāti...',
      date: '15. janvāris 2026',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600&h=400',
      category: 'Dzīvesveids'
    },
    {
      title: 'Kā uzturēt motivāciju visus gadus',
      excerpt: 'Motivācija ir īslaicīga, bet paradumi paliek. Uzzini, kā izveidot noturīgus paradumus...',
      date: '8. janvāris 2026',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=600&h=400',
      category: 'Motivācija'
    },
    {
      title: 'Miti par uzturu, kuriem jāpārtop',
      excerpt: 'Atklājam visizplatītākos mītus par uzturu un veselīgu dzīvesveidu...',
      date: '2. janvāris 2026',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=600&h=400',
      category: 'Uzturs'
    }
  ];

  const instagramImages = [
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=400&h=400',
    'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&q=80&w=400&h=400',
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=400&h=400',
    'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=400&h=400',
    'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400&h=400',
    'https://images.unsplash.com/photo-1493836512294-502baa1986e2?auto=format&fit=crop&q=80&w=400&h=400'
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-serif text-gray-900 tracking-wide">
                Vita<span className="text-orange-500">Balance</span>
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  className="text-gray-700 hover:text-orange-500 transition-colors duration-300 text-sm uppercase tracking-wider font-medium"
                >
                  {link}
                </a>
              ))}
              <button className="bg-orange-500 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-orange-600 transition-colors duration-300">
                Pierakstīties
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  className="block text-gray-700 hover:text-orange-500 transition-colors duration-300 text-sm uppercase tracking-wider font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link}
                </a>
              ))}
              <button className="w-full bg-orange-500 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-orange-600 transition-colors duration-300">
                Pierakstīties
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="sākums" className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=1920&h=1080"
            alt="Wellness background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <p className="text-orange-500 font-medium text-sm uppercase tracking-widest mb-4">
              Veselīga dzīvesveida mentoredžums
            </p>
            <h1 className="text-5xl md:text-7xl font-serif text-gray-900 leading-tight mb-6">
              Sāksim <span className="italic text-orange-500">kopā</span>!
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
              Palīdzu tev atrast līdzsvaru, izveidot veselīgus paradumus un sasniegt savus mērķus – pastāvīgi un bez galvās sāpēm.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center justify-center bg-orange-500 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-orange-600 transition-all duration-300 group">
                Sākt ceļu uz veselību
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="inline-flex items-center justify-center border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full text-base font-medium hover:bg-gray-900 hover:text-white transition-all duration-300">
                Uzzināt vairāk
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About / Mission Section */}
      <section id="par-mani" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full bg-orange-200 rounded-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600&h=750"
                alt="About me"
                className="relative rounded-3xl w-full h-[500px] object-cover shadow-xl"
              />
              {/* Floating card */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center">
                    <Star className="w-7 h-7 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">5+</p>
                    <p className="text-sm text-gray-500">gadu pieredze</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <p className="text-orange-500 font-medium text-sm uppercase tracking-widest">
                Mana misija
              </p>
              <h2 className="text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
                Kopā mēs <span className="italic text-orange-500">nonāksim</span> līdz tavam mērķim
              </h2>
              <div className="w-20 h-1 bg-orange-500 rounded-full"></div>
              <p className="text-gray-600 leading-relaxed text-lg">
                Es esmu uztura speciāliste un dzīvesveida trenera, kurai nav svarīgi tikai "izskatīties labi", bet "justies brīvi un enerģiski savā ķermenī".
              </p>
              <p className="text-gray-600 leading-relaxed">
                Mana pieeja ir balstīta uz zinātniskiem faktiem, bet arī uz individuālu pieeji katram klientam. Es neteicu, ka tev jāaizliedz viss no patīkamā – es mācu, kā atrast līdzsvaru.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-gray-900">200+</p>
                    <p className="text-sm text-gray-500">apmierināti klienti</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-gray-900">1000+</p>
                    <p className="text-sm text-gray-500">stundu konsultāciju</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-orange-500 font-medium text-sm uppercase tracking-widest mb-4">
              Tavs ceļojums
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900">
              Kā viss <span className="italic text-orange-500">notiek</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="group">
                {/* Image */}
                <div className="relative mb-6 overflow-hidden rounded-2xl">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <span className="text-orange-500 font-bold text-lg">0{index + 1}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-serif text-gray-900 font-semibold">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="pakalpojumi" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-orange-500 font-medium text-sm uppercase tracking-widest mb-4">
              Pakalpojumi
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">
              Izvēlies <span className="italic text-orange-500">savu</span> ceļu
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Katram cilvēkam ir savi mērķi un vajadzības. Izvēlies pakalpojumu, kas vislabāk atbilst tavām situācijai.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`relative rounded-3xl p-8 transition-all duration-300 ${
                  service.featured
                    ? 'bg-gray-900 text-white transform md:-translate-y-4 shadow-2xl'
                    : 'bg-white text-gray-900 hover:shadow-xl'
                }`}
              >
                {service.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-500 text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider">
                      Populārākais
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className={`text-xl font-serif mb-4 ${service.featured ? 'text-white' : 'text-gray-900'}`}>
                    {service.title}
                  </h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className={`text-5xl font-bold ${service.featured ? 'text-white' : 'text-gray-900'}`}>
                      {service.price}
                    </span>
                  </div>
                  <p className={`text-sm mt-2 ${service.featured ? 'text-gray-400' : 'text-gray-500'}`}>
                    {service.duration}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${service.featured ? 'bg-orange-500/20' : 'bg-orange-100'}`}>
                        <ChevronRight className={`w-3 h-3 ${service.featured ? 'text-orange-400' : 'text-orange-500'}`} />
                      </div>
                      <span className={`text-sm ${service.featured ? 'text-gray-300' : 'text-gray-600'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 rounded-full font-medium transition-all duration-300 ${
                    service.featured
                      ? 'bg-orange-500 text-white hover:bg-orange-600'
                      : 'bg-gray-100 text-gray-900 hover:bg-orange-500 hover:text-white'
                  }`}
                >
                  Pieteikties konsultācijai
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blogs" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div>
              <p className="text-orange-500 font-medium text-sm uppercase tracking-widest mb-4">
                Blogs
              </p>
              <h2 className="text-4xl md:text-5xl font-serif text-gray-900">
                Jaunākie <span className="italic text-orange-500">raksti</span>
              </h2>
            </div>
            <button className="mt-6 md:mt-0 inline-flex items-center text-gray-700 hover:text-orange-500 transition-colors font-medium">
              Visi raksti
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="group cursor-pointer"
              >
                {/* Image */}
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-medium px-3 py-1.5 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <p className="text-sm text-gray-500">{post.date}</p>
                  <h3 className="text-xl font-serif text-gray-900 font-semibold group-hover:text-orange-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-orange-500 font-medium text-sm pt-2">
                    Lasīt vairāk
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gray-900 rounded-3xl overflow-hidden">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=1920&h=600"
                alt="CTA Background"
                className="w-full h-full object-cover opacity-30"
              />
            </div>
            <div className="relative py-20 px-8 md:py-24 md:px-16 text-center">
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
                Esi gatavs <span className="italic text-orange-400">mainīties</span>?
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
                Nekavēties vairāk – pirmais solis ir vissvarīgākais. Pieraksties bezmaksas 15 minūšu konsultācijai un uzzini, kā es tev varu palīdzēt.
              </p>
              <button className="inline-flex items-center bg-orange-500 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-orange-600 transition-all duration-300">
                Pierakstīties bezmaksas konsultācijai
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-orange-500 font-medium text-sm uppercase tracking-widest mb-4">
              Sekoj man
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">
              Instagramā <span className="italic text-orange-500">@vitabalance</span>
            </h2>
            <p className="text-gray-600">
              Iegūti ikdienas iedvesmu veselīgākai dzīvei
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {instagramImages.map((image, index) => (
              <a
                key={index}
                href="#"
                className="relative group overflow-hidden rounded-xl aspect-square"
              >
                <img
                  src={image}
                  alt={`Instagram ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/60 transition-all duration-300 flex items-center justify-center">
                  <Share2 className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakti" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <p className="text-orange-500 font-medium text-sm uppercase tracking-widest mb-4">
                  Kontaktinformācija
                </p>
                <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">
                  Raksti vai <span className="italic text-orange-500">zvanini</span>
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Neatrod atbildi uz savu jautājumu? Vēlies uzzināt vairāk par pakalpojumiem? Raksti man un es atbildēšu tuvākajā laikā.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">E-pasts</p>
                    <p className="text-gray-900 font-medium">sveikums@vitabalance.lv</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Telefons</p>
                    <p className="text-gray-900 font-medium">+371 200 000 00</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Atrašanās vieta</p>
                    <p className="text-gray-900 font-medium">Rīga, Latvia</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300">
                  <Share2 className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300">
                  <Users className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg">
              {formSubmitted ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-serif text-gray-900 mb-4">Paldies!</h3>
                  <p className="text-gray-600">Tava ziņa ir nosūtīta. Es sazināšos ar tevi tuvākajā laikā.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tavs vārds
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 bg-stone-50"
                      placeholder="Anna"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      E-pasts
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 bg-stone-50"
                      placeholder="anna@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tava ziņa
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 resize-none bg-stone-50"
                      placeholder="Uzzini, kā es tev varu palīdzēt..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-orange-500 text-white py-4 rounded-xl font-medium hover:bg-orange-600 transition-colors duration-300 flex items-center justify-center"
                  >
                    Nosūtīt ziņu
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-serif mb-4">
                Vita<span className="text-orange-500">Balance</span>
              </h2>
              <p className="text-gray-400 leading-relaxed max-w-md mb-6">
                Palīdzu sievietēm atrast līdzsvaru dzīvē, izveidot veselīgus paradumus un justies brīvi savā ķermenī.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300">
                  <Share2 className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300">
                  <Users className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
                Ātrās saites
              </h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replace(' ', '-')}`}
                      className="text-gray-400 hover:text-orange-500 transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
                Kontakti
              </h3>
              <ul className="space-y-3 text-gray-400">
                <li>sveikums@vitabalance.lv</li>
                <li>+371 200 000 00</li>
                <li>Rīga, Latvia</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2026 VitaBalance. Visas tiesības aizsargātas.
            </p>
            <div className="flex gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-orange-500 transition-colors">
                Privātuma politika
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors">
                Lietošanas noteikumi
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;