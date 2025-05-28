
import React from 'react';
import { Shield, Lock, Settings, Search } from 'lucide-react';
import ProductCard from './ProductCard';

const Products = () => {
  const products = [
    {
      icon: Shield,
      title: "Firewall Avançado",
      description: "Proteção de perímetro com tecnologia de nova geração contra ameaças conhecidas e desconhecidas.",
      features: [
        "Bloqueio de malware em tempo real",
        "Análise comportamental",
        "Relatórios detalhados",
        "Suporte 24/7"
      ],
      price: "R$ 299/mês"
    },
    {
      icon: Lock,
      title: "Criptografia Enterprise",
      description: "Soluções de criptografia de dados para proteção completa de informações sensíveis.",
      features: [
        "Criptografia AES-256",
        "Gerenciamento de chaves",
        "Compliance LGPD",
        "Backup seguro"
      ],
      price: "R$ 499/mês"
    },
    {
      icon: Search,
      title: "Auditoria de Segurança",
      description: "Análise completa de vulnerabilidades e avaliação de riscos da sua infraestrutura.",
      features: [
        "Scan de vulnerabilidades",
        "Teste de penetração",
        "Relatório executivo",
        "Plano de ação"
      ],
      price: "A partir de R$ 1.500"
    },
    {
      icon: Settings,
      title: "SOC as a Service",
      description: "Centro de operações de segurança gerenciado com monitoramento 24/7 da sua rede.",
      features: [
        "Monitoramento contínuo",
        "Resposta a incidentes",
        "Análise forense",
        "Threat intelligence"
      ],
      price: "R$ 899/mês"
    }
  ];

  return (
    <section id="produtos" className="py-20 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-black via-cyber-dark to-cyber-black opacity-50"></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Nossos</span>
            <span className="text-cyber-green cyber-text-glow ml-3">Produtos</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Soluções completas de cibersegurança desenvolvidas com tecnologia de ponta 
            para atender às necessidades específicas da sua empresa.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              icon={product.icon}
              title={product.title}
              description={product.description}
              features={product.features}
              price={product.price}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="cyber-card max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Precisa de uma solução personalizada?
            </h3>
            <p className="text-gray-300 mb-6 text-lg">
              Nossa equipe de especialistas pode desenvolver uma solução sob medida para sua empresa.
            </p>
            <button className="cyber-button">
              Falar com Especialista
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-3 h-3 bg-cyber-green rounded-full animate-float opacity-60"></div>
      <div className="absolute bottom-20 left-10 w-5 h-5 bg-cyber-teal rounded-full animate-float delay-1000 opacity-40"></div>
    </section>
  );
};

export default Products;
