// src/chart.d.ts
import type { Chart as ChartType, ChartConfiguration } from 'chart.js';

declare global {
  interface Window {
    Chart: typeof ChartType;
  }
}

export {};
