import React, { createContext, useContext, useState, useEffect } from 'react';
import { Profile } from '../data/profiles';

interface CalculationItem {
  id: string;
  profile: Profile;
  length: number;
  quantity: number;
}

interface CalculatorContextType {
  items: CalculationItem[];
  addItem: (profile: Profile, length?: number, quantity?: number) => void;
  updateQuantity: (id: string, newQuantity: number) => void;
  removeItem: (id: string) => void;
  totalWeight: number;
}

const CalculatorContext = createContext<CalculatorContextType | undefined>(undefined);

export const CalculatorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CalculationItem[]>(() => {
    const saved = localStorage.getItem('aluvalle_calculator_items');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('aluvalle_calculator_items', JSON.stringify(items));
  }, [items]);

  const addItem = (profile: Profile, length = 6, quantity = 1) => {
    const newItem: CalculationItem = {
      id: Math.random().toString(36).substr(2, 9),
      profile,
      length,
      quantity
    };
    setItems(prev => [...prev, newItem]);
  };

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setItems(prev => prev.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const totalWeight = items.reduce((acc, item) => {
    const weightPerMeter = parseFloat(item.profile.weight.replace(',', '.'));
    return acc + (weightPerMeter * item.length * item.quantity);
  }, 0);

  return (
    <CalculatorContext.Provider value={{ items, addItem, updateQuantity, removeItem, totalWeight }}>
      {children}
    </CalculatorContext.Provider>
  );
};

export const useCalculator = () => {
  const context = useContext(CalculatorContext);
  if (!context) throw new Error('useCalculator must be used within a CalculatorProvider');
  return context;
};
