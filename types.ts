import { LucideIcon } from 'lucide-react';

export interface SubTask {
  id: string;
  title: string;
  details: string[];
}

export interface ResearchPhase {
  id: number;
  title: string;
  objective: string;
  tasks: SubTask[];
  icon: LucideIcon;
}