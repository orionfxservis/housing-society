import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Ruler, Users, Award, Target, Eye, CheckCircle2, ArrowRight, Newspaper, X, ZoomIn, FileText, Scale } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { useLanguage } from '../lib/LanguageContext';

export default function AboutPage() {
  const { t } = useLanguage();

  const stats = [
    { icon: Ruler, value: '100', unit: '', label: t.about.totalArea },
    { icon: Users, value: '800+', unit: '', label: t.about.memberPlots },
    { icon: Calendar, value: '1998', unit: '', label: t.about.established },
    { icon: Award, value: '25+', unit: '', label: t.about.excellence },
  ];

  const highlights = t.about.highlights.map((text) => ({ icon: CheckCircle2, text }));

  const newspaperCuttings = [
    { id: 1, newspaper: 'The Times of India', date: '15 March 1998', headline: 'Green Valley Housing Society Inaugurated by Chief Minister', image: '/images/newspaper1.jpg' },
    { id: 2, newspaper: 'Hindustan Times', date: '22 July 2003', headline: 'First Phase of 800 Plots Allotted in Green Valley Society', image: '/images/newspaper2.jpg' },
    { id: 3, newspaper: 'The Indian Express', date: '10 November 2015', headline: 'Green Valley Wins Best Housing Society Award', image: '/images/newspaper3.jpg' },
    { id: 4, newspaper: 'Dainik Bhaskar', date: '05 January 2020', headline: 'New School & Hospital Facilities Open in Green Valley', image: '/images/newspaper4.jpg' },
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen pt-20 lg:pt-24">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-primary via-primary-light to-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent rounded-full -translate-y-1/2 translate-x-1/2" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <span className="text-accent text-xs uppercase tracking-[0.3em] font-medium">{t.nav.about}</span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6 leading-tight">{t.about.pageTitle}</h1>
            <p className="text-white/70 text-lg leading-relaxed">{t.about.pageSubtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white -mt-12 relative z-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 lg:p-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center mx-auto mb-4"><stat.icon className="w-7 h-7 text-primary" /></div>
                  <p className="font-heading text-3xl lg:text-4xl font-bold text-primary">{stat.value}<span className="text-lg text-accent ml-1">{stat.unit}</span></p>
                  <p className="text-text-muted text-sm mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 lg:py-28 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <SectionHeader subtitle={t.about.ourStory} title={t.about.storyTitle} align="left" />
              <p className="text-text-body leading-relaxed mb-6">{t.about.storyP1}</p>
              <p className="text-text-body leading-relaxed mb-6">{t.about.storyP2}</p>
              <Link to="/about" className="inline-flex items-center gap-2 btn-accent px-8 py-3.5 rounded-xl text-primary-dark font-medium text-sm">{t.home.btnLearnMore} <ArrowRight className="w-4 h-4" /></Link>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="space-y-6">
              <img src="/images/hero1.jpg" alt="" className="rounded-2xl w-full h-[280px] object-cover shadow-lg" />
              <div className="grid grid-cols-2 gap-6">
                <img src="/images/park.jpg" alt="" className="rounded-2xl w-full h-[160px] object-cover shadow-lg" />
                <img src="/images/school.jpg" alt="" className="rounded-2xl w-full h-[160px] object-cover shadow-lg" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader subtitle={t.about.visionSubtitle} title={t.about.visionTitle} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 lg:p-10 border border-primary/10">
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6"><Eye className="w-7 h-7 text-white" /></div>
              <h3 className="font-heading text-2xl font-bold text-slate-800 mb-4">{t.about.visionHeading}</h3>
              <p className="text-text-body leading-relaxed">{t.about.visionText}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="bg-gradient-to-br from-accent/5 to-accent/10 rounded-2xl p-8 lg:p-10 border border-accent/10">
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6"><Target className="w-7 h-7 text-white" /></div>
              <h3 className="font-heading text-2xl font-bold text-slate-800 mb-4">{t.about.missionHeading}</h3>
              <p className="text-text-body leading-relaxed">{t.about.missionText}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Legal Status */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary via-primary-dark to-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-accent rounded-full -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary rounded-full translate-y-1/2 translate-x-1/2" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader subtitle="Media Coverage" title="Legal Status" light />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'CheckCircle', title: 'Registered Society', desc: 'Registered under Cooperative Societies Act since 1998' },
              { icon: 'FileText', title: 'Legal Documentation', desc: 'All land records, bylaws & approvals properly documented' },
              { icon: 'Scale', title: 'Court Decisions', desc: 'Favorable judgments in all land & property disputes' },
              { icon: 'Eye', title: 'Transparent Administration', desc: 'Open governance with quarterly audits & member meetings' },
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:bg-white/15 hover:border-accent/30 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  {card.icon === 'CheckCircle' && <CheckCircle2 className="w-7 h-7 text-accent" />}
                  {card.icon === 'FileText' && <FileText className="w-7 h-7 text-accent" />}
                  {card.icon === 'Scale' && <Scale className="w-7 h-7 text-accent" />}
                  {card.icon === 'Eye' && <Eye className="w-7 h-7 text-accent" />}
                </div>
                <h4 className="font-heading text-lg font-bold text-white mb-2">{card.title}</h4>
                <p className="text-white/60 text-sm">{card.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/cases" className="inline-flex items-center gap-2 text-accent hover:text-accent-light font-medium text-sm transition-colors">
              View Complete Legal History
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Plot Categories */}
      <section className="py-20 lg:py-28 bg-bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader subtitle={t.about.plotsSubtitle} title={t.about.plotsTitle} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {t.about.categories.map((cat, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white rounded-2xl p-6 text-center card-hover shadow-sm border border-transparent hover:border-accent/20">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4"><MapPin className="w-7 h-7 text-white" /></div>
                <h4 className="font-heading text-xl font-bold text-primary mb-1">{cat.size}</h4>
                <p className="text-accent font-medium text-sm mb-2">{cat.category}</p>
                <p className="text-text-muted text-sm">{cat.count}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <SectionHeader subtitle={t.about.highlightsSubtitle} title={t.about.highlightsTitle} align="left" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div key={index} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="flex items-start gap-3 p-4 rounded-xl hover:bg-bg-light transition-colors">
                  <item.icon className="w-5 h-5 text-secondary shrink-0 mt-0.5" /><span className="text-text-body text-sm">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newspaper Cuttings */}
      <section className="py-20 lg:py-28 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader subtitle="Media Coverage" title="Newspaper Cuttings" />

          {/* Desktop Table */}
          <div className="hidden md:block bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-primary to-primary-light">
                    <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider w-16">#</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">Newspaper</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">Date</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">Headline</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider w-32">Image</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {newspaperCuttings.map((item, index) => (
                    <motion.tr
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="hover:bg-bg-light transition-colors group"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold text-sm">{item.id}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <Newspaper className="w-4 h-4 text-accent" />
                          <span className="text-text-dark font-medium text-sm">{item.newspaper}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-secondary" />
                          <span className="text-text-body text-sm">{item.date}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-text-dark font-medium text-sm">{item.headline}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() => setSelectedImage(item.image)}
                          className="relative w-20 h-14 rounded-lg overflow-hidden border border-gray-200 hover:border-accent transition-all hover:shadow-md group/img"
                        >
                          <img src={item.image} alt={item.headline} className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/30 flex items-center justify-center transition-all">
                            <ZoomIn className="w-4 h-4 text-white opacity-0 group-hover/img:opacity-100 transition-opacity" />
                          </div>
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {newspaperCuttings.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <button
                    onClick={() => setSelectedImage(item.image)}
                    className="relative w-24 h-16 rounded-lg overflow-hidden border border-gray-200 shrink-0"
                  >
                    <img src={item.image} alt={item.headline} className="w-full h-full object-cover" />
                  </button>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary font-bold text-xs">{item.id}</span>
                      <span className="text-accent text-xs font-medium">{item.newspaper}</span>
                    </div>
                    <h4 className="text-text-dark font-medium text-sm leading-snug mb-1">{item.headline}</h4>
                    <div className="flex items-center gap-1 text-text-muted text-xs">
                      <Calendar className="w-3 h-3" />
                      {item.date}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <img src={selectedImage} alt="Newspaper Cutting" className="w-full rounded-2xl shadow-2xl" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-white mb-4">{t.about.ctaReady}</h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">{t.about.ctaReadyDesc}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/layout" className="btn-accent px-8 py-3.5 rounded-xl text-primary-dark font-medium text-sm inline-flex items-center gap-2">{t.about.btnViewPlan} <ArrowRight className="w-4 h-4" /></Link>
            <Link to="/contact" className="px-8 py-3.5 rounded-xl border-2 border-white/30 text-white font-medium text-sm hover:bg-white/10 transition-all">{t.about.btnContact}</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
