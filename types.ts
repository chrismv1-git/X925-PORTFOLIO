import React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  clientNeeds?: string[];
  deliveredSolution?: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ProcessStep {
  phase: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
}