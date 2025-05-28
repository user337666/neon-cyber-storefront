
import React from 'react';
import { Shield, Mail, Settings, Link } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Produtos', href: '#produtos' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Contato', href: '#contato' }
  ];

  const services = [
    { name: 'Firewall Enterprise', href: '#' },
    { name: 'Consultoria', href: '#' },
    { name: 'Auditoria', href: '#' },
    { name: 'SOC Gerenciado', href: '#' }
  ];

  const social = [
    { name: 'LinkedIn', href: '#', icon: Link },
    { name: 'Email', href: '#', icon: Mail }
  ];

  return (
    <footer className="bg-cyber-black border-t border-cyber-green/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark to-cyber-black opacity-50"></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="relative">
                <Shield className="h-8 w-8 text-cyber-green animate-pulse-glow" />
                <div className="absolute inset-0 h-8 w-8 text-cyber-green opacity-30 animate-glow"></div>
              </div>
              <span className="text-xl font-bold text-white cyber-text-glow">
                CyberStore
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Especialistas em cibersegurança oferecendo soluções avançadas para proteger 
              sua empresa contra ameaças digitais.
            </p>
            <div className="flex space-x-4">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="w-10 h-10 bg-gradient-to-br from-cyber-green/20 to-cyber-teal/20 border border-cyber-green/30 rounded-lg flex items-center justify-center text-cyber-green hover:bg-gradient-to-br hover:from-cyber-green hover:to-cyber-teal hover:text-cyber-black transition-all duration-300 hover:scale-110"
                >
                  <item.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 relative">
              Links Rápidos
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-cyber-green"></div>
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyber-green transition-colors duration-300 flex items-center group"
                  >
                    <div className="w-1.5 h-1.5 bg-cyber-green rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 relative">
              Serviços
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-cyber-green"></div>
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-gray-400 hover:text-cyber-green transition-colors duration-300 flex items-center group"
                  >
                    <div className="w-1.5 h-1.5 bg-cyber-green rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 relative">
              Contato
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-cyber-green"></div>
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-cyber-green mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Email</p>
                  <p className="text-white">contato@cyberstore.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Settings className="w-5 h-5 text-cyber-green mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Suporte 24/7</p>
                  <p className="text-white">+55 (11) 9999-9999</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-cyber-green/20">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 CyberStore. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-cyber-green transition-colors duration-300">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-cyber-green transition-colors duration-300">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 right-10 w-3 h-3 bg-cyber-green rounded-full animate-float opacity-60"></div>
      <div className="absolute top-10 left-1/4 w-2 h-2 bg-cyber-teal rounded-full animate-float delay-1000 opacity-40"></div>
    </footer>
  );
};

export default Footer;
