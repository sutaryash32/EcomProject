import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex flex-1 overflow-hidden h-full">
      <!-- Main Content Area -->
      <div class="flex-1 flex flex-col min-w-0 bg-background-light dark:bg-background-dark overflow-y-auto">
        <!-- Breadcrumbs & Header -->
        <div class="px-6 py-4 lg:px-10">
          <div class="flex flex-wrap gap-2 text-sm mb-4">
            <a class="text-slate-500 hover:text-primary" href="#">Home</a>
            <span class="text-slate-400">/</span>
            <a class="text-slate-500 hover:text-primary" href="#">Admin</a>
            <span class="text-slate-400">/</span>
            <span class="text-slate-900 dark:text-white font-medium">User Management</span>
          </div>
          <div class="flex flex-wrap justify-between items-end gap-4">
            <div class="flex flex-col gap-1">
              <h1 class="text-slate-900 dark:text-white text-3xl font-black leading-tight tracking-tight">Users</h1>
              <p class="text-slate-500 dark:text-slate-400 text-base">Manage team members, roles, and system access permissions.</p>
            </div>
            <button class="flex items-center justify-center rounded-lg h-10 px-5 bg-primary text-white text-sm font-bold shadow-sm hover:bg-primary/90 transition-all gap-2">
              <span class="material-symbols-outlined">add</span>
              <span>Add User</span>
            </button>
          </div>
        </div>

        <!-- Filters & Search -->
        <div class="px-6 lg:px-10 py-4 flex flex-col md:flex-row gap-4 items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm sticky top-0 z-10">
          <div class="flex items-center gap-4 w-full md:w-auto">
            <div class="relative w-full md:w-80">
              <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
              <input class="w-full pl-10 pr-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="Search users by name, email..." type="text"/>
            </div>
            <button class="flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
              <span class="material-symbols-outlined">filter_list</span>
              <span>Filters</span>
            </button>
          </div>
          <div class="flex items-center gap-3">
            <span class="text-xs font-bold text-slate-400 uppercase tracking-wider">Role:</span>
            <div class="flex p-1 bg-slate-200/50 dark:bg-slate-800 rounded-lg">
              <button class="px-3 py-1 text-xs font-bold rounded-md bg-white dark:bg-slate-700 shadow-sm text-primary">All</button>
              <button class="px-3 py-1 text-xs font-bold rounded-md text-slate-500 hover:text-slate-700 dark:hover:text-slate-300">Admin</button>
              <button class="px-3 py-1 text-xs font-bold rounded-md text-slate-500 hover:text-slate-700 dark:hover:text-slate-300">Editor</button>
              <button class="px-3 py-1 text-xs font-bold rounded-md text-slate-500 hover:text-slate-700 dark:hover:text-slate-300">Viewer</button>
            </div>
          </div>
        </div>

        <!-- User Table -->
        <div class="px-6 lg:px-10 py-6 overflow-x-auto">
          <table class="w-full border-separate border-spacing-y-3">
            <thead>
              <tr class="text-left text-slate-500 text-xs font-bold uppercase tracking-wider">
                <th class="px-4 py-2"><input class="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox"/></th>
                <th class="px-4 py-2">User</th>
                <th class="px-4 py-2">Role</th>
                <th class="px-4 py-2">Last Active</th>
                <th class="px-4 py-2 text-right">Actions</th>
              </tr>
            </thead>
            <tbody class="text-sm">
              <tr *ngFor="let user of users" (click)="selectUser(user)" [class]="user.selected ? 'bg-white dark:bg-slate-900 border border-primary ring-2 ring-primary/20 rounded-xl transition-all cursor-pointer' : 'bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all cursor-pointer rounded-xl shadow-sm'">
                <td class="px-4 py-4 rounded-l-xl">
                  <input [checked]="user.selected" class="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox"/>
                </td>
                <td class="px-4 py-4">
                  <div class="flex items-center gap-3">
                    <div [class]="'size-10 rounded-full bg-cover bg-center ' + (user.selected ? 'border-2 border-primary/20 p-0.5' : '')">
                      <div class="size-full rounded-full bg-cover bg-center" [style.background-image]="'url(' + user.avatar + ')'"></div>
                    </div>
                    <div class="flex flex-col">
                      <span class="font-bold text-slate-900 dark:text-white">{{user.name}}</span>
                      <span class="text-slate-500 text-xs lowercase">{{user.email}}</span>
                    </div>
                  </div>
                </td>
                <td class="px-4 py-4">
                  <span [class]="'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ' + user.roleClass">
                    {{user.role}}
                  </span>
                </td>
                <td class="px-4 py-4 text-slate-500">{{user.lastActive}}</td>
                <td class="px-4 py-4 text-right rounded-r-xl">
                  <button class="text-slate-400 hover:text-primary transition-colors">
                    <span class="material-symbols-outlined">more_vert</span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Pagination -->
        <div class="mt-auto px-6 lg:px-10 py-6 flex items-center justify-between border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <span class="text-xs font-bold text-slate-500 uppercase tracking-widest">Showing 1-4 of 48 users</span>
          <div class="flex items-center gap-2">
            <button class="p-2 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-400 hover:bg-slate-50 disabled:opacity-50" disabled>
              <span class="material-symbols-outlined">chevron_left</span>
            </button>
            <div class="flex gap-1">
              <button class="size-8 rounded-lg bg-primary text-white text-xs font-bold">1</button>
              <button class="size-8 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-bold">2</button>
              <button class="size-8 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-bold">3</button>
            </div>
            <button class="p-2 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              <span class="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Edit User Drawer (Right Side) -->
      <aside *ngIf="isDrawerOpen" class="w-[450px] border-l border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col shadow-2xl z-20 overflow-y-auto">
        <div class="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between sticky top-0 bg-white dark:bg-slate-900 z-10">
          <h3 class="text-lg font-bold text-slate-900 dark:text-white">Edit Permissions</h3>
          <button (click)="closeDrawer()" class="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
            <span class="material-symbols-outlined">close</span>
          </button>
        </div>
        <div class="p-6 space-y-8">
          <!-- User Identity -->
          <div class="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl" *ngIf="selectedUser">
            <div class="size-16 rounded-full bg-cover bg-center border-2 border-white dark:border-slate-700 shadow-sm" [style.background-image]="'url(' + selectedUser.avatar + ')'"></div>
            <div class="flex flex-col">
              <h4 class="font-bold text-slate-900 dark:text-white text-lg leading-tight">{{selectedUser.name}}</h4>
              <p class="text-slate-500 text-sm">Member since Jan 2023</p>
              <div class="mt-1">
                <span class="inline-flex items-center px-2 py-0.5 rounded bg-primary/10 text-primary text-[10px] font-black uppercase tracking-wider">Active Status</span>
              </div>
            </div>
          </div>
          <!-- Role Selection -->
          <div class="space-y-4">
            <h5 class="text-xs font-bold text-slate-400 uppercase tracking-widest">Select System Role</h5>
            <div class="grid grid-cols-1 gap-3">
              <label class="flex items-center gap-3 p-3 border-2 border-primary bg-primary/5 rounded-xl cursor-pointer">
                <input checked class="text-primary focus:ring-primary h-4 w-4" name="role" type="radio"/>
                <div>
                  <p class="text-sm font-bold text-slate-900 dark:text-white">Administrator</p>
                  <p class="text-xs text-slate-500">Full access to all settings and financial data.</p>
                </div>
              </label>
              <label class="flex items-center gap-3 p-3 border border-slate-200 dark:border-slate-700 rounded-xl cursor-pointer hover:border-primary/50 transition-all">
                <input class="text-primary focus:ring-primary h-4 w-4" name="role" type="radio"/>
                <div>
                  <p class="text-sm font-bold text-slate-900 dark:text-white">Editor</p>
                  <p class="text-xs text-slate-500">Can manage products, orders and content.</p>
                </div>
              </label>
              <label class="flex items-center gap-3 p-3 border border-slate-200 dark:border-slate-700 rounded-xl cursor-pointer hover:border-primary/50 transition-all">
                <input class="text-primary focus:ring-primary h-4 w-4" name="role" type="radio"/>
                <div>
                  <p class="text-sm font-bold text-slate-900 dark:text-white">Viewer</p>
                  <p class="text-xs text-slate-500">Read-only access to analytics and orders.</p>
                </div>
              </label>
            </div>
          </div>
          <!-- Permission Matrix -->
          <div class="space-y-4">
            <h5 class="text-xs font-bold text-slate-400 uppercase tracking-widest">Specific Permissions</h5>
            <div class="space-y-6">
              <div class="space-y-3" *ngFor="let group of permissionGroups">
                <div class="flex items-center gap-2 text-slate-900 dark:text-white">
                  <span class="material-symbols-outlined text-primary">{{group.icon}}</span>
                  <span class="text-sm font-bold">{{group.name}}</span>
                </div>
                <div class="grid grid-cols-1 gap-2 pl-7">
                  <label class="flex items-center gap-3 cursor-pointer" *ngFor="let perm of group.permissions">
                    <input [checked]="perm.enabled" class="rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary" type="checkbox"/>
                    <span class="text-sm text-slate-600 dark:text-slate-400">{{perm.name}}</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Drawer Footer Actions -->
        <div class="mt-auto p-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 sticky bottom-0 z-10">
          <div class="flex gap-3">
            <button (click)="closeDrawer()" class="flex-1 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 font-bold text-sm hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">Discard</button>
            <button (click)="closeDrawer()" class="flex-1 py-2.5 rounded-lg bg-primary text-white font-bold text-sm shadow-md hover:bg-primary/90 transition-all">Save Changes</button>
          </div>
        </div>
      </aside>
    </div>
  `,
  styles: []
})
export class UsersComponent {
  isDrawerOpen = true;
  selectedUser: any = null;

  users = [
    {
      id: 1,
      name: 'Sarah Connor',
      email: 'sarah.c@ecommerce.com',
      role: 'Admin',
      roleClass: 'bg-primary/10 text-primary',
      lastActive: '2 mins ago',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfIvCQ41q9P842yfCkGJUljhhf0Fd8M-o-9xXRHGgr21XyKrxlEdTu2psgUdciOZk_NRMgN7bTLvswp-Aj7Knjrvkj79NWnlguaTVne4rEV5eCPr2EMHQPLDh7XCaJStD5hcs0JWdXN_mLjDxakMykrVQOFoRtJb0DgTMVRaPjxxP-nhq_iGY_abl-md4_cKDRKEVwcCvmUFyM3X_mpv0aW1vR_bf7XlzDQsvmvyPvn9q1WypueO3BlObdxAKWM15j5gaJ-nPdIwXx',
      selected: true
    },
    {
      id: 2,
      name: 'Marcus Wright',
      email: 'm.wright@ecommerce.com',
      role: 'Editor',
      roleClass: 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400',
      lastActive: '5 hours ago',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCyxB7YNT-fPVnfSjYsL5Is2ClpRudl7gU1lZniAFu7ScYfyjmEChPgPNzNwXjU88xgKzrIKrlGpxsy6Fj9m37UF8O35FsZXcHshfQ_MPG1tyZWTBPmz4544E7VITH58zgony-4ppBpEk9TwFYBiLLi_bRoFa4BuLa5sBmRKdtMLwY1GcEWSx3Q7auaWKw8jlTnyijV-EJcQPbzARs7UKz3oNjkOOQHqzT_6h92M_3WDj58EyOKET6U8MsdzLzgslO4PmntxYxcFOTD',
      selected: false
    },
    {
      id: 3,
      name: 'Kyle Reese',
      email: 'reese.k@ecommerce.com',
      role: 'Viewer',
      roleClass: 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400',
      lastActive: 'Yesterday',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtL0ieh1xVi9BGR3oWSnSAueMqsK2LTIbnY5lLMu83M9R8lpfaImNu3QZT54M1-ANLSou8y2BJ3G5YQ94DiCbXsiR_xsz1z79tIyaKKhvaQ5N2HtPCUsi0sU8NAR0qDN3db9q5C_S5x2WIaz6Kkm2grpuHnpHkR-dKW-CKC7JUMIOV8PSMSBPh7VACQryJjPDSPNOyKxVkP59pbiS8DVEm00AJz6qHVwlORa8KErIyT6By9T6j3wbSswI9TMaH6MQTX-Ev3CYcDYRg',
      selected: false
    },
    {
      id: 4,
      name: 'John Henry',
      email: 'j.henry@ecommerce.com',
      role: 'Editor',
      roleClass: 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400',
      lastActive: '3 days ago',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCP3QgYKje9s0CCW0q5iCdCnrgLneH6jdIg8g7ehcaFd5HYkf-e2VqXy91RCGC6ym3z28AsdTOpNbTTNNy0Bk80POk3RyPV90_YIaHnf3HE13CqgaMsR6aYA_k2vXTT0GhGAggfry_Q4-sotm6VJf36oofZL4Nd8t3dM2gfYMcScwUfrj8gPAcBItW3ueA_Y5DOzzmIdl2u7QJyWtEeqdfPNivckw2rRE7kXE_3yQnKteGtVlRoV14arPpq-awcXNP5m_ecQAzyA6Jc',
      selected: false
    }
  ];

  permissionGroups = [
    {
      name: 'Order Management',
      icon: 'shopping_bag',
      permissions: [
        { name: 'View and track orders', enabled: true },
        { name: 'Process refunds and returns', enabled: true },
        { name: 'Modify order shipping details', enabled: false },
      ]
    },
    {
      name: 'Business Analytics',
      icon: 'bar_chart',
      permissions: [
        { name: 'View sales performance dashboards', enabled: true },
        { name: 'Export financial reports (CSV/PDF)', enabled: true },
      ]
    },
    {
      name: 'Marketing & Content',
      icon: 'campaign',
      permissions: [
        { name: 'Manage promotional banners', enabled: false },
        { name: 'Edit product descriptions and SEO', enabled: false },
      ]
    }
  ];

  constructor() {
    this.selectedUser = this.users[0];
  }

  selectUser(user: any) {
    this.users.forEach(u => u.selected = false);
    user.selected = true;
    this.selectedUser = user;
    this.isDrawerOpen = true;
  }

  closeDrawer() {
    this.isDrawerOpen = false;
  }
}
