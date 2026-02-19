import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main class="max-w-7xl mx-auto px-4 md:px-8 py-8">
      <!-- Page Title & Header Actions -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h2 class="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Sales and Activity Reports</h2>
          <p class="text-slate-500 dark:text-slate-400 mt-1">Deep dive into your business performance and customer demographics.</p>
        </div>
        <div class="flex items-center gap-3">
          <button class="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
            <span class="material-symbols-outlined text-lg">calendar_month</span>
            Last 30 Days
            <span class="material-symbols-outlined text-lg">expand_more</span>
          </button>
          <button class="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
            <span class="material-symbols-outlined text-lg">filter_list</span>
            All Categories
          </button>
          <button class="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all">
            <span class="material-symbols-outlined text-lg">download</span>
            Export All
          </button>
        </div>
      </div>

      <!-- KPI Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div *ngFor="let kpi of kpis" class="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div class="flex justify-between items-start mb-4">
            <div [class]="'p-2 rounded-lg ' + kpi.iconBg + ' ' + kpi.iconColor">
              <span class="material-symbols-outlined">{{kpi.icon}}</span>
            </div>
            <span [class]="'text-xs font-bold px-2 py-1 rounded-full ' + (kpi.trendUp ? 'text-emerald-600 bg-emerald-100 dark:bg-emerald-900/30' : 'text-rose-600 bg-rose-100 dark:bg-rose-900/30')">
              {{kpi.trend}}
            </span>
          </div>
          <p class="text-slate-500 dark:text-slate-400 text-sm font-medium">{{kpi.label}}</p>
          <h3 class="text-2xl font-bold text-slate-900 dark:text-white mt-1">{{kpi.value}}</h3>
        </div>
      </div>

      <!-- Main Chart: Sales Trends -->
      <div class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm mb-8 overflow-hidden">
        <div class="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div>
            <h4 class="font-bold text-slate-900 dark:text-white">Sales Trends</h4>
            <p class="text-xs text-slate-500 dark:text-slate-400">Monthly revenue growth and projections</p>
          </div>
          <div class="flex items-center gap-2">
            <button class="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors text-slate-400 hover:text-primary">
              <span class="material-symbols-outlined text-xl">ios_share</span>
            </button>
            <button class="px-3 py-1.5 text-xs font-bold border border-slate-200 dark:border-slate-700 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-50 transition-colors">CSV</button>
            <button class="px-3 py-1.5 text-xs font-bold border border-slate-200 dark:border-slate-700 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-50 transition-colors">PDF</button>
          </div>
        </div>
        <div class="p-6">
          <div class="relative h-[300px] w-full bg-slate-50 dark:bg-slate-950/50 rounded-lg flex items-end justify-between px-4 pb-8 overflow-hidden">
            <!-- Grid Lines -->
            <div class="absolute inset-0 flex flex-col justify-between py-8 px-4 pointer-events-none">
              <div class="border-t border-slate-200 dark:border-slate-800 w-full h-px"></div>
              <div class="border-t border-slate-200 dark:border-slate-800 w-full h-px"></div>
              <div class="border-t border-slate-200 dark:border-slate-800 w-full h-px"></div>
              <div class="border-t border-slate-200 dark:border-slate-800 w-full h-px"></div>
            </div>
            <!-- SVG Area Chart -->
            <svg class="absolute bottom-8 left-0 w-full h-48 text-primary/20" preserveAspectRatio="none" viewBox="0 0 100 100">
              <path d="M0 80 Q 15 50, 30 65 T 60 30 T 100 10 L 100 100 L 0 100 Z" fill="currentColor"></path>
              <path class="text-primary" d="M0 80 Q 15 50, 30 65 T 60 30 T 100 10" fill="none" stroke="currentColor" stroke-width="2"></path>
            </svg>
            <!-- Floating Data Points Labels -->
            <div class="z-10 text-[10px] font-bold text-slate-400 uppercase tracking-widest flex w-full justify-between">
              <span *ngFor="let month of months">{{month}}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Order Volume Bar Chart -->
        <div class="lg:col-span-2 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div class="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <div>
              <h4 class="font-bold text-slate-900 dark:text-white">Order Volume</h4>
              <p class="text-xs text-slate-500 dark:text-slate-400">Comparison across top product categories</p>
            </div>
            <button class="flex items-center gap-1 px-3 py-1.5 text-xs font-bold border border-slate-200 dark:border-slate-700 rounded-lg text-slate-600 dark:text-slate-300">
              <span class="material-symbols-outlined text-sm">download</span> Export
            </button>
          </div>
          <div class="p-6 h-64 flex items-end justify-around gap-2">
            <div *ngFor="let cat of categories" class="w-full flex flex-col items-center gap-2 group">
              <div class="w-8 md:w-12 bg-primary/20 group-hover:bg-primary transition-colors rounded-t-sm" [style.height]="cat.height + '%'"></div>
              <span class="text-[10px] font-medium text-slate-400">{{cat.name}}</span>
            </div>
          </div>
        </div>

        <!-- Customer Activity Pie Chart -->
        <div class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div class="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <div>
              <h4 class="font-bold text-slate-900 dark:text-white">Customer Activity</h4>
              <p class="text-xs text-slate-500 dark:text-slate-400">User segmentation analysis</p>
            </div>
            <button class="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
              <span class="material-symbols-outlined">more_vert</span>
            </button>
          </div>
          <div class="p-6 flex flex-col items-center">
            <div class="relative w-40 h-40 mb-6">
              <svg class="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#e2e8f0" stroke-dasharray="100, 100" stroke-width="3"></path>
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#137fec" stroke-dasharray="45, 100" stroke-width="3"></path>
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#10b981" stroke-dasharray="30, 100" stroke-dashoffset="-45" stroke-width="3"></path>
                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#f59e0b" stroke-dasharray="25, 100" stroke-dashoffset="-75" stroke-width="3"></path>
              </svg>
              <div class="absolute inset-0 flex flex-col items-center justify-center">
                <span class="text-2xl font-bold text-slate-900 dark:text-white">8.5k</span>
                <span class="text-[10px] font-bold text-slate-400 uppercase">Total</span>
              </div>
            </div>
            <div class="w-full space-y-2">
              <div *ngFor="let segment of segments" class="flex items-center justify-between text-xs">
                <div class="flex items-center gap-2">
                  <span [class]="'w-2 h-2 rounded-full ' + segment.color"></span>
                  <span class="text-slate-600 dark:text-slate-400">{{segment.name}}</span>
                </div>
                <span class="font-bold">{{segment.value}}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Recent Activity Log / Bottom Section -->
      <div class="mt-8 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div class="px-6 py-4 border-b border-slate-100 dark:border-slate-800">
          <h4 class="font-bold text-slate-900 dark:text-white">Top Sales by Region</h4>
        </div>
        <div class="p-0">
          <table class="w-full text-left">
            <thead class="bg-slate-50 dark:bg-slate-800/50 text-[10px] font-bold uppercase text-slate-400 tracking-wider">
              <tr>
                <th class="px-6 py-3">Region</th>
                <th class="px-6 py-3">Orders</th>
                <th class="px-6 py-3">Revenue</th>
                <th class="px-6 py-3">Growth</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
              <tr *ngFor="let region of regions" class="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                <td class="px-6 py-4">
                  <div class="flex items-center gap-3">
                    <span class="material-symbols-outlined text-slate-400">public</span>
                    <span class="text-sm font-semibold text-slate-700 dark:text-slate-200">{{region.name}}</span>
                  </div>
                </td>
                <td class="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">{{region.orders}}</td>
                <td class="px-6 py-4 text-sm font-bold text-slate-900 dark:text-white">{{region.revenue}}</td>
                <td class="px-6 py-4">
                  <span [class]="'text-xs font-bold ' + (region.trendUp ? 'text-emerald-600' : 'text-rose-600')">{{region.growth}}</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
    <footer class="max-w-7xl mx-auto px-4 md:px-8 py-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-sm">
      <p>© 2024 AdminDash. All rights reserved.</p>
      <div class="flex items-center gap-6">
        <a class="hover:text-primary transition-colors" href="#">Documentation</a>
        <a class="hover:text-primary transition-colors" href="#">Help Center</a>
        <a class="hover:text-primary transition-colors" href="#">Privacy Policy</a>
      </div>
    </footer>
  `,
  styles: []
})
export class ReportsComponent {
  kpis = [
    { label: 'Total Revenue', value: '$128,430.00', trend: '+12.5%', trendUp: true, icon: 'payments', iconBg: 'bg-primary/10', iconColor: 'text-primary' },
    { label: 'Total Orders', value: '1,240', trend: '-2.4%', trendUp: false, icon: 'shopping_cart', iconBg: 'bg-purple-100 dark:bg-purple-900/30', iconColor: 'text-purple-600' },
    { label: 'Active Users', value: '8,520', trend: '+5.7%', trendUp: true, icon: 'group', iconBg: 'bg-orange-100 dark:bg-orange-900/30', iconColor: 'text-orange-600' },
    { label: 'Avg. Order Value', value: '$103.57', trend: '+1.2%', trendUp: true, icon: 'avg_pace', iconBg: 'bg-teal-100 dark:bg-teal-900/30', iconColor: 'text-teal-600' },
  ];

  months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  categories = [
    { name: 'Electronics', height: 60 },
    { name: 'Fashion', height: 85 },
    { name: 'Home', height: 40 },
    { name: 'Beauty', height: 70 },
    { name: 'Sport', height: 30 },
    { name: 'Toys', height: 55 },
  ];

  segments = [
    { name: 'Returning Customers', value: 45, color: 'bg-primary' },
    { name: 'New Users', value: 30, color: 'bg-emerald-500' },
    { name: 'VIP Members', value: 25, color: 'bg-amber-500' },
  ];

  regions = [
    { name: 'North America', orders: 452, revenue: '$45,200.00', growth: '+8.2%', trendUp: true },
    { name: 'Europe', orders: 388, revenue: '$32,150.00', growth: '+12.4%', trendUp: true },
    { name: 'Asia Pacific', orders: 215, revenue: '$18,400.00', growth: '-1.5%', trendUp: false },
  ];
}
