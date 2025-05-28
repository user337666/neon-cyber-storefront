
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ProductCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  price?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  features, 
  price 
}) => {
  return (
    <div className="group cyber-card hover:scale-105 transform transition-all duration-300">
      {/* Icon Container */}
      <div className="mb-6 flex justify-center">
        <div className="relative">
          <div className="w-20 h-20 bg-gradient-to-br from-cyber-green/20 to-cyber-teal/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-10 h-10 text-cyber-green group-hover:animate-pulse-glow" />
          </div>
          <div className="absolute inset-0 w-20 h-20 border border-cyber-green/30 rounded-xl group-hover:animate-glow transition-all duration-300"></div>
        </div>
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyber-green transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-gray-400 mb-4 leading-relaxed">
        {description}
      </p>

      {/* Features */}
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-300">
            <div className="w-1.5 h-1.5 bg-cyber-green rounded-full mr-3 group-hover:animate-pulse"></div>
            {feature}
          </li>
        ))}
      </ul>

      {/* Price and Button */}
      <div className="mt-auto">
        {price && (
          <div className="text-2xl font-bold text-cyber-green mb-4 cyber-text-glow">
            {price}
          </div>
        )}
        <button className="w-full bg-gradient-to-r from-cyber-green/20 to-cyber-teal/20 border border-cyber-green/50 text-cyber-green font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-cyber-green hover:to-cyber-teal hover:text-cyber-black hover:shadow-lg hover:shadow-cyber-green/50">
          Saiba Mais
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
