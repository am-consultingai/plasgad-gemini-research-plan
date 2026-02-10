import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';
import { ResearchPhase } from '../types';

interface ResearchCardProps {
  phase: ResearchPhase;
  index: number;
}

const ResearchCard: React.FC<ResearchCardProps> = ({ phase, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = phase.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="w-full max-w-4xl mx-auto mb-6"
    >
      <motion.div
        layout
        className={`bg-white rounded-2xl shadow-lg border-r-4 overflow-hidden transition-all duration-300 ${
          isOpen ? 'border-blue-500 shadow-xl' : 'border-gray-200 hover:border-blue-300'
        }`}
      >
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="p-6 cursor-pointer flex items-start gap-4"
        >
          {/* Icon Container */}
          <div className={`p-3 rounded-full shrink-0 ${isOpen ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'}`}>
            <Icon size={28} />
          </div>

          {/* Header Content */}
          <div className="flex-1 text-right">
            <h3 className={`text-xl font-bold mb-2 transition-colors ${isOpen ? 'text-blue-900' : 'text-gray-800'}`}>
              {phase.title}
            </h3>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              {phase.objective}
            </p>
          </div>

          {/* Chevron */}
          <div className="text-gray-400 mt-2">
            {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </div>
        </div>

        {/* Collapsible Content */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="border-t border-gray-100 bg-gray-50/50"
            >
              <div className="p-6 pr-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {phase.tasks.map((task) => (
                    <div key={task.id} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                      <div className="flex items-center gap-2 mb-3 text-blue-700 font-semibold">
                        <span className="bg-blue-100 px-2 py-0.5 rounded text-xs">{task.id}</span>
                        <h4>{task.title}</h4>
                      </div>
                      <ul className="space-y-2">
                        {task.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm">
                            <CheckCircle2 size={14} className="mt-1 shrink-0 text-teal-500" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default ResearchCard;