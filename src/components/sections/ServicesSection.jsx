import React from 'react';
import mondayImg from '../../assets/hero.png';
import mondayLogo from '../../assets/logos/mwm.svg';
import zapierLogo from '../../assets/logos/zapier.svg';
import makeLogo from '../../assets/logos/make.svg';
import n8nLogo from '../../assets/logos/n8n.svg';

const services = [
   {
      title: 'Monday.com Workspace Setup & Customization',
      img: mondayImg,
      desc: `We design and build tailored monday.com workspaces that match your business workflows—from project tracking and CRM to HR and operations. This includes board creation, custom fields, automations, dashboards, and user permissions, all aligned with your team's unique needs.`,
   },
   {
      title: 'Workflow Automation & Optimization',
      img: mondayImg, // Fallback image for now
      desc: `We streamline repetitive tasks and reduce manual work by building smart automations within monday.com. Whether it's internal task triggers or cross-board dependencies, we optimize your workflows to boost efficiency and ensure nothing slips through the cracks.`,
   },
   {
      title: 'Third-Party Integrations & API Solutions',
      icons: [mondayLogo, zapierLogo, makeLogo, n8nLogo],
      desc: `We connect monday.com with your existing tools—like Google Workspace, Slack, HubSpot, Salesforce, Airtable, and more—using native integrations, Zapier, Make (Integromat), or custom API development. This creates a seamless data flow across platforms and a single source of truth for your team.`,
   },
];

export default function ServicesSection() {
   return (
      <section className="w-full bg-gradient-to-b from-[#f8fafc] to-[#eef2fb] pt-8 pb-20 px-2">
         <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-12 text-gray-900 tracking-tight drop-shadow-sm">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {services.map((service, idx) => (
                  <div
                     key={service.title}
                     className="group rounded-3xl bg-white/60 backdrop-blur-xl border border-purple-100/70 shadow-xl hover:shadow-2xl hover:scale-[1.025] transition-all duration-300 flex flex-col items-stretch text-left overflow-hidden"
                     style={{ minHeight: 440, boxShadow: '0 8px 40px 0 rgba(124,58,237,0.08), 0 1.5px 8px 0 rgba(124,58,237,0.04)' }}
                  >
                     {/* Card Top Visual */}
                     <div className="relative flex items-center justify-center h-44 md:h-52 bg-gradient-to-br from-purple-100/60 to-violet-100/80">
                        {service.img && (
                           <img
                              src={service.img}
                              alt={service.title}
                              className="w-full h-full object-cover object-top opacity-95 group-hover:scale-105 transition-transform duration-300 rounded-t-3xl"
                           />
                        )}
                        {service.icons && (
                           <div className="flex items-center justify-center gap-5 w-full h-full">
                              {service.icons.map((icon, i) => (
                                 <img key={i} src={icon} alt="Integration logo" className="w-14 h-14 object-contain drop-shadow-md" />
                              ))}
                           </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent pointer-events-none" />
                     </div>
                     {/* Card Content */}
                     <div className="flex-1 flex flex-col px-8 py-8">
                        <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-3 leading-snug tracking-tight drop-shadow-sm">
                           {service.title}
                        </h3>
                        <p className="text-gray-700 text-[16px] leading-relaxed font-medium">
                           {service.desc}
                        </p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}
