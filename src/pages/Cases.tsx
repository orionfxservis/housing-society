import { motion } from 'framer-motion';
import { Gavel, FileText, Scale, Clock, CheckCircle2, AlertCircle, Loader2, ExternalLink } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { useLanguage } from '../lib/LanguageContext';

export default function CasesPage() {
  const { t } = useLanguage();

  const cases = [
    { id: 'CS/2015/001', title: 'Land Encroachment Dispute - Northern Boundary', status: 'Won', court: 'District Civil Court', filedDate: 'March 15, 2015', resolvedDate: 'November 20, 2018' },
    { id: 'CS/2017/042', title: 'Water Supply Infrastructure Dispute', status: 'Won', court: 'State High Court', filedDate: 'July 8, 2017', resolvedDate: 'April 12, 2020' },
    { id: 'CS/2019/078', title: 'Road Widening Compensation Case', status: 'Settled', court: 'Arbitration Tribunal', filedDate: 'January 22, 2019', resolvedDate: 'August 15, 2021' },
    { id: 'CS/2021/115', title: 'Bylaws Amendment Challenge', status: 'Ongoing', court: 'Cooperative Court', filedDate: 'September 3, 2021', resolvedDate: null },
    { id: 'CS/2022/156', title: 'Property Tax Assessment Appeal', status: 'Ongoing', court: 'Tax Tribunal', filedDate: 'February 18, 2022', resolvedDate: null },
  ];

  const getStatusConfig = (status: string) => {
    switch (status) {
      case 'Won': return { icon: CheckCircle2, color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200', label: t.cases.statusWon };
      case 'Settled': return { icon: CheckCircle2, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200', label: t.cases.statusSettled };
      default: return { icon: Loader2, color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200', label: t.cases.statusOngoing };
    }
  };

  return (
    <div className="min-h-screen pt-20 lg:pt-24">
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-primary via-primary-dark to-primary overflow-hidden">
        <div className="absolute inset-0 opacity-5"><div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent rounded-full translate-x-1/4" /></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-accent text-xs uppercase tracking-[0.3em] font-medium">{t.nav.cases}</span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">{t.cases.pageTitle}</h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">{t.cases.pageSubtitle}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-10 bg-white relative -mt-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 lg:p-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              {[{ value: '5', label: t.cases.totalCases, icon: FileText }, { value: '2', label: t.cases.casesWon, icon: CheckCircle2, color: 'text-green-600' }, { value: '1', label: t.cases.settled, icon: Scale, color: 'text-blue-600' }, { value: '2', label: t.cases.ongoing, icon: Clock, color: 'text-amber-600' }].map((stat, i) => (
                <div key={i}><stat.icon className={`w-7 h-7 mx-auto mb-2 ${stat.color || 'text-primary'}`} /><p className={`font-heading text-2xl font-bold ${stat.color || 'text-slate-800'}`}>{stat.value}</p><p className="text-text-muted text-sm">{stat.label}</p></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader subtitle={t.cases.caseRecords} title={t.cases.casesTitle} />
          <div className="space-y-6">
            {cases.map((case_, index) => {
              const sc = getStatusConfig(case_.status);
              const StatusIcon = sc.icon;
              return (
                <motion.div key={index} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1, duration: 0.5 }} className={`bg-white rounded-2xl p-6 lg:p-8 card-hover border ${sc.border}`}>
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className={`shrink-0 w-14 h-14 rounded-xl ${sc.bg} flex items-center justify-center`}><StatusIcon className={`w-7 h-7 ${sc.color}`} /></div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2 flex-wrap">
                        <h3 className="font-heading text-lg font-bold text-slate-800">{case_.title}</h3>
                        <span className={`inline-flex items-center gap-1 px-3 py-1 ${sc.bg} ${sc.color} text-xs font-medium rounded-full self-start`}><StatusIcon className="w-3 h-3" />{sc.label}</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-text-muted mb-4">
                        <span className="flex items-center gap-1"><Gavel className="w-4 h-4" />{t.cases.caseNo} {case_.id}</span>
                        <span className="flex items-center gap-1"><Scale className="w-4 h-4" />{case_.court}</span>
                        <span className="flex items-center gap-1"><FileText className="w-4 h-4" />{t.cases.filedDate} {case_.filedDate}</span>
                        {case_.resolvedDate && <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4" />{t.cases.resolvedDate} {case_.resolvedDate}</span>}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Gavel className="w-14 h-14 text-accent mx-auto mb-6" />
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4">{t.cases.haveQuestions}</h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">{t.cases.questionsDesc}</p>
          <a href="/contact" className="btn-accent px-8 py-3.5 rounded-xl text-primary-dark font-medium text-sm inline-flex items-center gap-2">{t.cases.btnContact}<ExternalLink className="w-4 h-4" /></a>
        </div>
      </section>
    </div>
  );
}
