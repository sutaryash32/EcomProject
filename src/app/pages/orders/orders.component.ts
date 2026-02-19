import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <main class="flex-1 px-6 lg:px-10 py-8 max-w-[1440px] mx-auto w-full">
      <!-- Page Title & Action -->
      <div class="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div>
          <h1 class="text-3xl font-black text-slate-900 dark:text-slate-100">Orders</h1>
          <p class="text-slate-500 dark:text-slate-400 mt-1">Manage and track your customer orders in real-time.</p>
        </div>
        <button class="flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-bold rounded-lg hover:bg-primary/90 transition-all shadow-sm shadow-primary/20">
          <span class="material-symbols-outlined text-[20px]">add</span>
          Create New Order
        </button>
      </div>

      <!-- Filter & Search Bar -->
      <div class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm mb-6">
        <div class="flex flex-col lg:flex-row lg:items-center justify-between p-4 gap-4">
          <!-- Status Tabs -->
          <div class="flex border-b border-transparent lg:border-none overflow-x-auto gap-1">
            <button *ngFor="let tab of tabs" [class]="tab.active ? 'px-4 py-2 text-sm font-bold rounded-lg bg-primary/10 text-primary whitespace-nowrap' : 'px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg whitespace-nowrap'">
              {{tab.name}}
            </button>
          </div>
          <div class="flex flex-wrap items-center gap-3">
            <!-- Date Picker -->
            <div class="flex items-center gap-2 px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-600 dark:text-slate-300 cursor-pointer hover:border-slate-300 transition-colors">
              <span class="material-symbols-outlined text-[18px]">calendar_today</span>
              <span>Oct 1, 2023 - Oct 31, 2023</span>
              <span class="material-symbols-outlined text-[18px]">expand_more</span>
            </div>
            <!-- Export Button -->
            <button class="flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800">
              <span class="material-symbols-outlined text-[18px]">download</span>
              Export
            </button>
          </div>
        </div>
      </div>

      <!-- Orders Table Section -->
      <div class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse">
            <thead class="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th class="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Order ID</th>
                <th class="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Customer</th>
                <th class="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Status</th>
                <th class="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Date</th>
                <th class="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Amount</th>
                <th class="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 text-right">Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
              <tr *ngFor="let order of orders" class="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                <td class="px-6 py-4">
                  <a [routerLink]="['/orders', order.id]" class="text-primary font-bold hover:underline">#{{order.id}}</a>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xs font-bold">{{order.customerInitials}}</div>
                    <span class="font-medium">{{order.customerName}}</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <span [class]="'inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold ' + order.statusClass">
                    <span [class]="'w-1.5 h-1.5 rounded-full mr-2 ' + order.statusDotClass"></span>
                    {{order.status}}
                  </span>
                </td>
                <td class="px-6 py-4 text-slate-500 dark:text-slate-400 text-sm">{{order.date}}</td>
                <td class="px-6 py-4 font-semibold">{{order.amount}}</td>
                <td class="px-6 py-4 text-right">
                  <button class="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                    <span class="material-symbols-outlined">more_vert</span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- Pagination -->
        <div class="flex flex-col sm:flex-row items-center justify-between px-6 py-4 border-t border-slate-200 dark:border-slate-800 gap-4">
          <span class="text-sm text-slate-500 dark:text-slate-400">
            Showing <span class="font-bold text-slate-900 dark:text-slate-100">1</span> to <span class="font-bold text-slate-900 dark:text-slate-100">5</span> of <span class="font-bold text-slate-900 dark:text-slate-100">256</span> orders
          </span>
          <div class="flex items-center gap-2">
            <button class="px-3 py-1 rounded border border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50" disabled>
              <span class="material-symbols-outlined text-[18px] align-middle">chevron_left</span>
            </button>
            <button class="px-3 py-1 rounded border border-primary bg-primary text-white text-sm font-bold">1</button>
            <button class="px-3 py-1 rounded border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 text-sm hover:bg-slate-50 dark:hover:bg-slate-800">2</button>
            <button class="px-3 py-1 rounded border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 text-sm hover:bg-slate-50 dark:hover:bg-slate-800">3</button>
            <span class="text-slate-400 px-1">...</span>
            <button class="px-3 py-1 rounded border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 text-sm hover:bg-slate-50 dark:hover:bg-slate-800">12</button>
            <button class="px-3 py-1 rounded border border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800">
              <span class="material-symbols-outlined text-[18px] align-middle">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  `,
  styles: []
})
export class OrdersComponent {
  tabs = [
    { name: 'All Orders', active: true },
    { name: 'Pending', active: false },
    { name: 'Shipped', active: false },
    { name: 'Cancelled', active: false },
  ];

  orders = [
    {
      id: 'ORD-12345',
      customerName: 'John Doe',
      customerInitials: 'JD',
      status: 'Shipped',
      statusClass: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
      statusDotClass: 'bg-green-500',
      date: 'Oct 24, 2023',
      amount: '$245.00'
    },
    {
      id: 'ORD-12346',
      customerName: 'Jane Smith',
      customerInitials: 'JS',
      status: 'Pending',
      statusClass: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
      statusDotClass: 'bg-amber-500',
      date: 'Oct 24, 2023',
      amount: '$120.50'
    },
    {
      id: 'ORD-12347',
      customerName: 'Robert Brown',
      customerInitials: 'RB',
      status: 'Shipped',
      statusClass: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
      statusDotClass: 'bg-green-500',
      date: 'Oct 23, 2023',
      amount: '$540.00'
    },
    {
      id: 'ORD-12348',
      customerName: 'Emily Davis',
      customerInitials: 'ED',
      status: 'Cancelled',
      statusClass: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
      statusDotClass: 'bg-red-500',
      date: 'Oct 22, 2023',
      amount: '$89.00'
    },
    {
      id: 'ORD-12349',
      customerName: 'Michael Wilson',
      customerInitials: 'MW',
      status: 'Shipped',
      statusClass: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
      statusDotClass: 'bg-green-500',
      date: 'Oct 21, 2023',
      amount: '$1,200.00'
    }
  ];
}
