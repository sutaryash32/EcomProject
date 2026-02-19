import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <main class="flex-1 max-w-[1440px] mx-auto w-full p-6 space-y-6">
      <!-- Order Header Area -->
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div class="space-y-1">
          <div class="flex items-center gap-3">
            <h1 class="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Order #ORD-7742</h1>
            <span class="px-2.5 py-0.5 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20">PROCESSING</span>
          </div>
          <p class="text-slate-500 text-sm">Placed on October 12, 2023 at 10:30 AM • ID: 550e8400-e29b-41d4</p>
        </div>
        <div class="flex items-center gap-3">
          <button class="flex items-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
            <span class="material-symbols-outlined text-sm">download</span>
            Download Invoice
          </button>
          <button class="flex items-center gap-2 px-4 py-2 border border-rose-200 dark:border-rose-900/30 text-rose-600 dark:text-rose-400 rounded-lg text-sm font-bold hover:bg-rose-50 dark:hover:bg-rose-900/20 transition-colors">
            <span class="material-symbols-outlined text-sm">cancel</span>
            Cancel Order
          </button>
          <button class="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-bold shadow-sm hover:shadow-md transition-all active:scale-95">
            <span class="material-symbols-outlined text-sm">sync_alt</span>
            Update Status
          </button>
        </div>
      </div>

      <!-- Dashboard Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <!-- Left Column: Customer Information -->
        <aside class="lg:col-span-3 space-y-6">
          <div class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm">
            <h3 class="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Customer Information</h3>
            <div class="space-y-4">
              <div class="flex items-start gap-3">
                <div class="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">JD</div>
                <div>
                  <p class="text-sm font-bold text-slate-900 dark:text-white">Jonathan Doe</p>
                  <p class="text-xs text-slate-500">Customer since 2021</p>
                </div>
              </div>
              <div class="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                <div class="flex items-center gap-3">
                  <span class="material-symbols-outlined text-slate-400 text-lg">mail</span>
                  <a class="text-sm text-primary font-medium hover:underline" href="mailto:j.doe&#64;example.com">j.doe&#64;example.com</a>
                </div>
                <div class="flex items-center gap-3">
                  <span class="material-symbols-outlined text-slate-400 text-lg">call</span>
                  <span class="text-sm text-slate-600 dark:text-slate-400">+1 (555) 012-3456</span>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-sm font-bold text-slate-400 uppercase tracking-wider">Shipping Address</h3>
              <button class="text-primary text-xs font-bold hover:underline">Edit</button>
            </div>
            <div class="space-y-1">
              <p class="text-sm font-medium text-slate-900 dark:text-white">Jonathan Doe</p>
              <p class="text-sm text-slate-600 dark:text-slate-400">123 Business Avenue</p>
              <p class="text-sm text-slate-600 dark:text-slate-400">Suite 400</p>
              <p class="text-sm text-slate-600 dark:text-slate-400">San Francisco, CA 94107</p>
              <p class="text-sm text-slate-600 dark:text-slate-400">United States</p>
            </div>
            <div class="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-slate-400 uppercase">Method</span>
                <span class="text-xs font-bold text-slate-900 dark:text-white">FedEx Ground</span>
              </div>
            </div>
          </div>
        </aside>

        <!-- Center Column: Ordered Items -->
        <section class="lg:col-span-6 space-y-6">
          <div class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div class="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <h3 class="font-bold text-slate-900 dark:text-white">Ordered Items</h3>
              <span class="text-xs font-medium text-slate-500">3 Items</span>
            </div>
            <div class="overflow-x-auto">
              <table class="w-full text-left">
                <thead class="bg-slate-50 dark:bg-slate-800/50">
                  <tr>
                    <th class="px-6 py-3 text-xs font-bold text-slate-500 uppercase">Product</th>
                    <th class="px-6 py-3 text-xs font-bold text-slate-500 uppercase text-center">Qty</th>
                    <th class="px-6 py-3 text-xs font-bold text-slate-500 uppercase text-right">Price</th>
                    <th class="px-6 py-3 text-xs font-bold text-slate-500 uppercase text-right">Total</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                  <tr *ngFor="let item of items">
                    <td class="px-6 py-4">
                      <div class="flex items-center gap-4">
                        <div class="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-800 overflow-hidden flex-shrink-0 border border-slate-200 dark:border-slate-700">
                          <img class="w-full h-full object-cover" [src]="item.image" [alt]="item.name">
                        </div>
                        <div>
                          <p class="text-sm font-bold text-slate-900 dark:text-white leading-tight">{{item.name}}</p>
                          <p class="text-xs text-slate-500">{{item.details}}</p>
                          <p class="text-[10px] font-mono text-slate-400 uppercase tracking-tighter mt-1">SKU: {{item.sku}}</p>
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 text-center text-sm font-medium text-slate-700 dark:text-slate-300">{{item.qty}}</td>
                    <td class="px-6 py-4 text-right text-sm font-medium text-slate-700 dark:text-slate-300">{{item.price}}</td>
                    <td class="px-6 py-4 text-right text-sm font-bold text-slate-900 dark:text-white">{{item.total}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!-- Summary Area -->
          <div class="flex justify-end">
            <div class="w-full max-w-sm bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-3">
              <div class="flex justify-between text-sm">
                <span class="text-slate-500">Subtotal</span>
                <span class="text-slate-900 dark:text-white font-medium">$363.99</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-slate-500">Shipping (Ground)</span>
                <span class="text-slate-900 dark:text-white font-medium">$12.50</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-slate-500">Tax (CA 8.5%)</span>
                <span class="text-slate-900 dark:text-white font-medium">$30.94</span>
              </div>
              <div class="pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                <span class="text-base font-bold text-slate-900 dark:text-white">Total Amount</span>
                <span class="text-xl font-black text-primary">$407.43</span>
              </div>
            </div>
          </div>
        </section>

        <!-- Right Column: Order Timeline -->
        <aside class="lg:col-span-3">
          <div class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm sticky top-24">
            <h3 class="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6">Order Timeline</h3>
            <div class="relative space-y-8">
              <div class="timeline-item relative flex gap-4" *ngFor="let step of timeline; let last = last">
                <div class="timeline-line shrink-0 w-6 flex justify-center">
                  <div [class]="'z-10 size-6 rounded-full flex items-center justify-center ' + step.circleClass">
                    <span *ngIf="step.icon" class="material-symbols-outlined text-[14px]">{{step.icon}}</span>
                    <div *ngIf="step.pulse" class="size-2 bg-primary rounded-full animate-pulse"></div>
                  </div>
                </div>
                <div class="pb-1" [class.opacity-50]="step.pending">
                  <p [class]="'text-sm font-bold ' + step.titleClass">{{step.title}}</p>
                  <p class="text-xs text-slate-500">{{step.time}}</p>
                  <p *ngIf="step.note" class="text-xs text-slate-400 mt-1">{{step.note}}</p>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  `,
  styles: []
})
export class OrderDetailComponent {
  items = [
    {
      name: 'Elite Runner X-200',
      details: 'Color: Midnight Blue / Size: 10',
      sku: 'ERX-200-MB-10',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0tyoyVhwiMfLbJ2AM185h88b-ZlbujH5JcvfL3Kmn4mPNnQYJp8HTyWPMY-EH-ArjZz_CwMpIlyDkq1sjv1e9P2I3neFD-t0gR9mJ5Tuu9xdIKc4j3DeR_oBiv5TBttPnHyvcExMfZDZ82ZARRLOm5Mm_xsmqbW0UotSIZ6e5eU13M7ybgM6Jr6kDjgCCU7-IK-3PJhHbFX80zrP4PzSt9gdNWyoe4uvHLttb2eOgQ3U9Xm9sHpbdSM_IBkPkatKTqxQSfz5kXEPb',
      qty: 1,
      price: '$129.00',
      total: '$129.00'
    },
    {
      name: 'Minimalist Pro Watch',
      details: 'Case: Silver / Strap: Leather',
      sku: 'MW-01-SIL',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjSMLg_peC7zg98Xm7YyeTPcyz_f8dI27XRIa2FiETVo2M5K3WiSavdB7oOQz9zrNbiDhZRqwJVbXsLOCnnU3i_0aTUypuLQ3BuZtjqBgldLkRvmRjxS2IKqMAk-7bMFLWI7MwbLZKU2lpgSfoVVsR4YzR0fh2BMzRhDon-AEj4B2fh3q7vuBluYPSIUC-AEyGhEVREGcxGbF2POCAGX0VYWyZopPc2kwZXq6u038XE75aTkxAbsmdBAH0Qhn4eTbs7dloVlkH8r0g',
      qty: 1,
      price: '$85.00',
      total: '$85.00'
    },
    {
      name: 'Sonic Over-Ear Headphones',
      details: 'Color: Matte Black',
      sku: 'SH-100-BLK',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCK8QpamX46gx38PE12RxigIIAFGxAu8kSz3pRkcJrxrTnuiLyXPKcDBfGwOhxoNEfRY0kuwgC2p6GWaoKM_5fxSyYLzYM75K-ZH0m94CFd2mQbdYX70mpqZuWu44OyB4gD6rK9sGpjBqzOOob2UwmyVU1Uci6q6kl9McOmlOJqjKiSwko2lZgTSBW-Y3nL-cCurRFqbwuH4S1TTcN_v_MelA8-jT88uw-ehONPaZlMCTF79QegRc8ORiqzf0SM0wy_On3OSvpqPULe',
      qty: 1,
      price: '$149.99',
      total: '$149.99'
    }
  ];

  timeline = [
    {
      title: 'Order Placed',
      time: 'Oct 12, 2023 at 10:30 AM',
      note: 'Web checkout by customer',
      icon: 'check',
      circleClass: 'bg-primary text-white',
      titleClass: 'text-slate-900 dark:text-white',
      pending: false
    },
    {
      title: 'Payment Confirmed',
      time: 'Oct 12, 2023 at 10:32 AM',
      note: 'Stripe transaction #8812',
      icon: 'check',
      circleClass: 'bg-primary text-white',
      titleClass: 'text-slate-900 dark:text-white',
      pending: false
    },
    {
      title: 'Processing',
      time: 'Oct 12, 2023 at 11:15 AM',
      note: 'Ready for warehouse picking',
      pulse: true,
      circleClass: 'bg-white dark:bg-slate-900 border-2 border-primary text-primary',
      titleClass: 'text-primary',
      pending: false
    },
    {
      title: 'Shipped',
      time: 'Not yet updated',
      icon: 'local_shipping',
      circleClass: 'bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-400',
      titleClass: 'text-slate-600 dark:text-slate-400',
      pending: true
    },
    {
      title: 'Delivered',
      time: 'Not yet updated',
      icon: 'inventory_2',
      circleClass: 'bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-400',
      titleClass: 'text-slate-600 dark:text-slate-400',
      pending: true
    }
  ];
}
