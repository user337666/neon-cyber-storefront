
import React from 'react';
import { Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-black via-cyber-dark to-cyber-gray opacity-90"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-cyber-green rounded-full animate-float opacity-60"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-cyber-teal rounded-full animate-float delay-1000 opacity-40"></div>
      <div className="absolute bottom-40 left-20 w-8 h-8 bg-cyber-blue rounded-full animate-float delay-2000 opacity-30"></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-cyber-green/20 to-cyber-teal/20 rounded-full flex items-center justify-center cyber-glow animate-float">
              <Shield className="w-16 h-16 text-cyber-green animate-pulse-glow" />
            </div>
            <div className="absolute inset-0 w-32 h-32 mx-auto border-2 border-cyber-green/30 rounded-full animate-glow"></div>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          <span className="text-white">Produtos em</span>
          <br />
          <span className="text-cyber-green cyber-text-glow animate-pulse-glow">
            Cibersegurança
          </span>
        </h1>

        {/* Description */}
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Soluções avançadas de segurança digital para proteger sua empresa contra ameaças cibernéticas. 
          Tecnologia de ponta com suporte 24/7 e consultoria especializada.
        </p>

        {/* CTA Button */}
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <button className="cyber-button w-full sm:w-auto">
            Ver Produtos
          </button>
          <button className="w-full sm:w-auto bg-transparent border-2 border-cyber-green text-cyber-green font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:bg-cyber-green hover:text-cyber-black hover:shadow-lg hover:shadow-cyber-green/50">
            Consultoria Gratuita
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-cyber-green cyber-text-glow">+1200</div>
            <div className="text-gray-400 mt-1">Clientes Protegidos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyber-green cyber-text-glow">24/7</div>
            <div className="text-gray-400 mt-1">Monitoramento</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyber-green cyber-text-glow">99.9%</div>
            <div className="text-gray-400 mt-1">Uptime</div>
          </div>
        </div>
      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,255,204,0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
    </section>
  );
};

export default Hero;
