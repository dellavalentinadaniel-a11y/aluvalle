import { useState } from 'react';
import { motion } from 'motion/react';

interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TechTabsProps {
  tabs: TabItem[];
  defaultTab?: string;
}

export function TechTabs({ tabs, defaultTab }: TechTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0].id);

  return (
    <div className="w-full">
      {/* Tab buttons - horizontal scroll on mobile */}
      <div className="flex gap-2 md:gap-4 border-b border-outline/10 overflow-x-auto scrollbar-thin scrollbar-thumb-primary/20 pb-0 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-3 md:px-6 md:py-4 text-xs md:text-sm font-bold uppercase tracking-wider whitespace-nowrap border-b-2 transition-all flex-shrink-0 ${
              activeTab === tab.id
                ? 'border-primary text-primary'
                : 'border-transparent text-on-surface-variant hover:text-on-surface'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
        className="w-full"
      >
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </motion.div>
    </div>
  );
}
