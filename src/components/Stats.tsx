
import React from 'react';
import { Shield, Clock, User, Settings } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: User,
      number: "+1200",
      label: "Clientes Ativos",
      description: "Empresas protegidas em todo Brasil"
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Proteção Contínua",
      description: "Monitoramento ininterrupto"
    },
    {
      icon: Settings,
      number: "99.9%",
      label: "Uptime",
      description: "Disponibilidade garantida"
    },
    {
      icon: Shield,
      number: "5+ Anos",
      label: "Experiência",
      description: "Especialistas em segurança"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyber-green/10 via-cyber-teal/10 to-cyber-blue/10"></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            <span className="text-white">Por que</span>
            <span className="text-cyber-green cyber-text-glow ml-3">Confiar em Nós?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Números que comprovam nossa excelência em cibersegurança
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="cyber-card h-full flex flex-col items-center justify-center space-y-4">
                {/* Icon */}
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyber-green/20 to-cyber-teal/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-cyber-green group-hover:animate-pulse-glow" />
                  </div>
                  <div className="absolute inset-0 w-16 h-16 border border-cyber-green/30 rounded-full group-hover:animate-glow transition-all duration-300"></div>
                </div>

                {/* Number */}
                <div className="text-4xl font-bold text-cyber-green cyber-text-glow group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>

                {/* Label */}
                <div className="text-xl font-semibold text-white group-hover:text-cyber-green transition-colors duration-300">
                  {stat.label}
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-cyber-green/10 to-cyber-teal/10 border border-cyber-green/30 rounded-full px-8 py-4">
            <Shield className="w-6 h-6 text-cyber-green animate-pulse" />
            <span className="text-white font-semibold">Proteção garantida por contrato</span>
            <Shield className="w-6 h-6 text-cyber-green animate-pulse" />
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-cyber-green rounded-full animate-float opacity-60"></div>
      <div className="absolute top-1/2 right-10 w-4 h-4 bg-cyber-teal rounded-full animate-float delay-1000 opacity-40"></div>
      <div className="absolute bottom-10 left-1/4 w-3 h-3 bg-cyber-blue rounded-full animate-float delay-2000 opacity-50"></div>
    </section>
  );
};

export default Stats;
