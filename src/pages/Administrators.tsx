import { motion } from 'framer-motion';
import { Building2, Scale, FileText, Phone, ExternalLink } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { useLanguage } from '../lib/LanguageContext';

const administrators = [
  { name: 'Municipal Corporation of Metro City', typeKey: 'localAuthority', jurisdiction: 'Urban Planning, Building Approvals', address: 'Sector 5, Metro City - 123456', phone: '+91 12345 11111' },
  { name: 'Regional Development Authority (RDA)', typeKey: 'stateAuthority', jurisdiction: 'Master Plan Approval, Development Permits', address: 'Capital City - 234567', phone: '+91 12345 22222' },
  { name: 'Registrar of Cooperative Societies', typeKey: 'stateAuthority', jurisdiction: 'Society Registration, Bylaws Compliance', address: 'Secretariat, Capital City - 234567', phone: '+91 12345 33333' },
  { name: 'District Collector Office', typeKey: 'stateAuthority', jurisdiction: 'Land Records, Revenue Matters', address: 'District HQ - 345678', phone: '+91 12345 44444' },
  { name: 'Electricity Board - Metro Region', typeKey: 'utility', jurisdiction: 'Power Supply, Metering, Tariff', address: 'Metro City - 123456', phone: '+91 12345 55555' },
  { name: 'Water & Sewerage Department', typeKey: 'utility', jurisdiction: 'Water Supply, Sewage Treatment', address: 'Metro City - 123456', phone: '+91 12345 66666' },
];

const legalFramework = [
  { title: 'Cooperative Societies Act, 1912', desc: '' },
  { title: 'State Cooperative Societies Rules', desc: '' },
  { title: 'Model Bye-Laws', desc: '' },
  { title: 'Land Acquisition Act', desc: '' },
  { title: 'RERA Guidelines', desc: '' },
  { title: 'Environmental Protection Act', desc: '' },
];

export default function AdministratorsPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-20 lg:pt-24">
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-primary via-primary-light to-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-5"><div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-accent rounded-full translate-y-1/2" /></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="text-accent text-xs uppercase tracking-[0.3em] font-medium">{t.nav.administrators}</span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">{t.admins.pageTitle}</h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">{t.admins.pageSubtitle}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader subtitle={t.admins.authorities} title={t.admins.authoritiesTitle} />
          <div className="space-y-6">
            {administrators.map((admin, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08, duration: 0.5 }} className="bg-white rounded-2xl p-6 lg:p-8 card-hover border border-gray-100">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center"><Building2 className="w-8 h-8 text-white" /></div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                      <h3 className="font-heading text-xl font-bold text-slate-800">{admin.name}</h3>
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full self-start">{admin.typeKey === 'utility' ? 'Utility Authority' : t.admins[admin.typeKey as keyof typeof t.admins] || admin.typeKey}</span>
                    </div>
                    <p className="text-text-muted text-sm mb-4">{t.admins.jurisdiction} {admin.jurisdiction}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      <a href={`tel:${admin.phone}`} className="flex items-center gap-1.5 text-primary hover:text-accent transition-colors"><Phone className="w-4 h-4" />{admin.phone}</a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4">{t.admins.needHelp}</h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">{t.admins.needHelpDesc}</p>
          <a href="/contact" className="btn-accent px-8 py-3.5 rounded-xl text-primary-dark font-medium text-sm inline-flex items-center gap-2">{t.admins.btnContact}<ExternalLink className="w-4 h-4" /></a>
        </div>
      </section>
    </div>
  );
}
