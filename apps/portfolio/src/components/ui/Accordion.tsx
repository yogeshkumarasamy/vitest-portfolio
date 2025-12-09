import { cn } from '@/lib/utils';
import React from 'react';

interface AccordionProps {
  children: React.ReactNode;
  type?: 'single' | 'multiple';
  className?: string;
}

interface AccordionItemProps {
  children: React.ReactNode;
  value: string;
  className?: string;
}

interface AccordionTriggerProps {
  children: React.ReactNode;
  className?: string;
}

interface AccordionContentProps {
  children: React.ReactNode;
  className?: string;
}

const AccordionContext = React.createContext<{
  openItems: Set<string>;
  toggleItem: (value: string) => void;
}>({ openItems: new Set(), toggleItem: () => {} });

const AccordionItemContext = React.createContext<string>('');

export function Accordion({
  children,
  type = 'single',
  className,
}: AccordionProps) {
  const [openItems, setOpenItems] = React.useState<Set<string>>(new Set());

  const toggleItem = (value: string) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(value)) {
        newSet.delete(value);
      } else {
        if (type === 'single') {
          newSet.clear();
        }
        newSet.add(value);
      }
      return newSet;
    });
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem }}>
      <div data-testid="accordion" className={cn('w-full', className)}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({
  children,
  value,
  className,
}: AccordionItemProps) {
  return (
    <AccordionItemContext.Provider value={value}>
      <div
        data-testid="accordion-item"
        className={cn('border-b border-gray-200', className)}
      >
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
}

export function AccordionTrigger({
  children,
  className,
}: AccordionTriggerProps) {
  const { openItems, toggleItem } = React.useContext(AccordionContext);
  const value = React.useContext(AccordionItemContext);
  const isOpen = openItems.has(value);

  return (
    <button
      data-testid="accordion-trigger"
      className={cn(
        'flex w-full flex-1 items-center justify-between py-4 font-medium text-gray-900 transition-all hover:underline',
        className
      )}
      onClick={() => toggleItem(value)}
    >
      {children}
      <svg
        className={cn(
          'h-4 w-4 shrink-0 transition-transform duration-200',
          isOpen && 'rotate-180'
        )}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>
  );
}

export function AccordionContent({
  children,
  className,
}: AccordionContentProps) {
  const { openItems } = React.useContext(AccordionContext);
  const value = React.useContext(AccordionItemContext);
  const isOpen = openItems.has(value);

  if (!isOpen) return null;

  return (
    <div
      data-testid="accordion-content"
      className={cn('pb-4 pt-0 text-gray-700', className)}
    >
      {children}
    </div>
  );
}
