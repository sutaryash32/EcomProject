import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-8 space-y-8 max-w-7xl mx-auto w-full">
      <!-- Greeting -->
      <div class="flex items-end justify-between">
        <div>
          <h2 class="text-2xl font-bold text-slate-900 dark:text-slate-100">Dashboard Overview</h2>
          <p class="text-slate-500">Welcome back, Alex. Here's what's happening with your store today.</p>
        </div>
        <button class="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-600 transition-colors shadow-sm">
          <span class="material-symbols-outlined text-sm">download</span>
          Export Report
        </button>
      </div>

      <!-- KPI Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Total Orders -->
        <div class="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col">
          <div class="flex items-center justify-between mb-4">
            <span class="text-sm font-medium text-slate-500">Total Orders</span>
            <div class="p-2 bg-primary/10 rounded-lg text-primary">
              <span class="material-symbols-outlined text-base">local_shipping</span>
            </div>
          </div>
          <div class="flex items-baseline gap-2">
            <span class="text-2xl font-bold">1,240</span>
            <span class="text-xs font-semibold text-emerald-500 flex items-center gap-0.5">
              <span class="material-symbols-outlined text-xs">trending_up</span>
              +12%
            </span>
          </div>
          <div class="mt-4 h-12 w-full">
            <svg class="w-full h-full overflow-visible" viewBox="0 0 100 30">
              <path d="M0 25 Q 15 20, 30 22 T 60 10 T 100 5" fill="none" stroke="#137fec" stroke-width="2" vector-effect="non-scaling-stroke"></path>
              <path d="M0 25 Q 15 20, 30 22 T 60 10 T 100 5 V 30 H 0 Z" fill="url(#grad1)" opacity="0.1"></path>
              <defs>
                <linearGradient id="grad1" x1="0%" x2="0%" y1="0%" y2="100%">
                  <stop offset="0%" style="stop-color:#137fec;stop-opacity:1"></stop>
                  <stop offset="100%" style="stop-color:#137fec;stop-opacity:0"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <!-- Pending Orders -->
        <div class="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col">
          <div class="flex items-center justify-between mb-4">
            <span class="text-sm font-medium text-slate-500">Pending Orders</span>
            <div class="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg text-amber-600">
              <span class="material-symbols-outlined text-base">schedule</span>
            </div>
          </div>
          <span class="text-2xl font-bold">45</span>
          <p class="mt-2 text-xs text-slate-400">Requires attention soon</p>
        </div>

        <!-- Completed Orders -->
        <div class="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col">
          <div class="flex items-center justify-between mb-4">
            <span class="text-sm font-medium text-slate-500">Completed Orders</span>
            <div class="p-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg text-emerald-600">
              <span class="material-symbols-outlined text-base">check_circle</span>
            </div>
          </div>
          <span class="text-2xl font-bold">1,195</span>
          <p class="mt-2 text-xs text-slate-400">96.4% success rate</p>
        </div>

        <!-- Revenue Summary -->
        <div class="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col">
          <div class="flex items-center justify-between mb-4">
            <span class="text-sm font-medium text-slate-500">Revenue Summary</span>
            <div class="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600">
              <span class="material-symbols-outlined text-base">payments</span>
            </div>
          </div>
          <div class="flex items-baseline gap-2">
            <span class="text-2xl font-bold">$12,450.00</span>
            <span class="text-xs font-semibold text-emerald-500 flex items-center gap-0.5">
              <span class="material-symbols-outlined text-xs">trending_up</span>
              +8%
            </span>
          </div>
          <p class="mt-2 text-xs text-slate-400">Across all payment channels</p>
        </div>
      </div>

      <!-- Charts and Activity Grid -->
      <div class="grid grid-cols-1 xl:grid-cols-3 gap-6 pb-8">
        <!-- Sales Chart -->
        <div class="xl:col-span-2 bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
          <div class="flex items-center justify-between mb-8">
            <div>
              <h3 class="font-bold text-lg">Sales Performance</h3>
              <p class="text-sm text-slate-500">Weekly revenue tracking</p>
            </div>
            <select class="text-xs font-semibold bg-slate-50 dark:bg-slate-800 border-none rounded-lg focus:ring-1 focus:ring-primary/20 cursor-pointer">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          <div class="relative h-64 w-full flex items-end justify-between px-2 gap-4">
            <!-- Simplified Bar Chart Representation -->
            <div class="flex flex-col items-center gap-2 flex-1 group" *ngFor="let day of salesData">
              <div class="w-full bg-slate-100 dark:bg-slate-800 rounded-t-lg relative flex items-end overflow-hidden h-full">
                <div [class]="day.active ? 'bg-primary w-full transition-all group-hover:opacity-90' : 'bg-primary/20 w-full transition-all group-hover:bg-primary/30'" [style.height]="day.height + '%'"></div>
              </div>
              <span [class]="day.active ? 'text-[10px] font-bold text-slate-900 dark:text-slate-100' : 'text-[10px] font-bold text-slate-400'">{{day.name}}</span>
            </div>
          </div>
        </div>

        <!-- Recent Activity Feed -->
        <div class="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
          <div class="flex items-center justify-between mb-6">
            <h3 class="font-bold text-lg">Recent Activity</h3>
            <a class="text-xs font-semibold text-primary hover:underline" href="#">View all</a>
          </div>
          <div class="space-y-6">
            <!-- Activity Item 1 -->
            <div class="flex gap-4" *ngFor="let activity of activities; let last = last">
              <div class="relative">
                <div [class]="'size-8 rounded-full flex items-center justify-center ' + activity.iconBg">
                  <span class="material-symbols-outlined text-sm" [class]="activity.iconColor">{{activity.icon}}</span>
                </div>
                <div *ngIf="!last" class="absolute top-8 bottom-[-24px] left-1/2 -translate-x-1/2 w-px bg-slate-200 dark:bg-slate-800"></div>
              </div>
              <div class="flex flex-col">
                <p class="text-sm font-semibold" [innerHTML]="activity.title"></p>
                <p class="text-xs text-slate-500">{{activity.description}}</p>
                <span class="text-[10px] font-medium text-slate-400 mt-1">{{activity.time}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class DashboardComponent {
  salesData = [
    { name: 'Mon', height: 40, active: false },
    { name: 'Tue', height: 65, active: false },
    { name: 'Wed', height: 85, active: true },
    { name: 'Thu', height: 55, active: false },
    { name: 'Fri', height: 70, active: false },
    { name: 'Sat', height: 45, active: false },
    { name: 'Sun', height: 30, active: false },
  ];

  activities = [
    {
      icon: 'shopping_cart',
      iconBg: 'bg-primary/10',
      iconColor: 'text-primary',
      title: 'New order <span class="text-primary">#1234</span>',
      description: 'John Doe placed an order for 2 items',
      time: '2 mins ago'
    },
    {
      icon: 'person_add',
      iconBg: 'bg-emerald-100 dark:bg-emerald-900/30',
      iconColor: 'text-emerald-600',
      title: 'New user registered',
      description: 'Sarah Miller joined the platform',
      time: '45 mins ago'
    },
    {
      icon: 'error',
      iconBg: 'bg-red-100 dark:bg-red-900/30',
      iconColor: 'text-red-600',
      title: 'Payment failed',
      description: 'Order #1230 could not be processed',
      time: '2 hours ago'
    }
  ];
}
