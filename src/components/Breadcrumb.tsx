import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="sticky top-[72px] z-30 bg-surface-container-lowest border-b border-outline/10 px-6 py-3 md:px-8 md:py-4">
      <div className="max-w-7xl mx-auto flex items-center gap-2 flex-wrap">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            {index > 0 && (
              <ChevronRight size={16} className="text-outline/40 flex-shrink-0" />
            )}
            {item.path ? (
              <Link
                to={item.path}
                className="text-on-surface/70 hover:text-primary text-sm md:text-base transition-colors font-medium"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-on-surface text-sm md:text-base font-medium">
                {item.label}
              </span>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}
