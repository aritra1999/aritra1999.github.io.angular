import { Component, OnInit } from '@angular/core';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-email-topbar',
  templateUrl: './email-topbar.component.html',
  styleUrls: ['./email-topbar.component.scss']
})

export class EmailTopbarComponent implements OnInit {
  items: topBarItem[];

  constructor(private sanitizer: DomSanitizer) { 
    this.items = [
      { 
        name: "Inbox", 
        icon: this.sanitizer.bypassSecurityTrustHtml('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="w-5 h-5" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5v-3h3.56c.69 1.19 1.97 2 3.45 2s2.75-.81 3.45-2H19v3zm0-5h-4.99c0 1.1-.9 2-2 2s-2-.9-2-2H5V5h14v9z"></path></svg>'),
        color: "hover:border-red-500 hover:text-red-500"
      },
      { 
        name: "Social", 
        icon: this.sanitizer.bypassSecurityTrustHtml('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="w-5 h-5" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5S5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05c1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"></path></svg>'),
        color: "hover:border-blue-500 hover:text-blue-500"
      },
      { 
        name: "Promotions", 
        icon: this.sanitizer.bypassSecurityTrustHtml('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="h-5 w-5" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 22 22"><g fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M4.979 4.636v-.003h.003a36.006 36.006 0 0 1 1.815-.115c1.46-.058 3.193-.05 4.48.142a.386.386 0 0 1 .21.117l7.754 7.753a.5.5 0 0 1 0 .708l-5.657 5.656a.5.5 0 0 1-.707 0l-7.754-7.753a.386.386 0 0 1-.117-.21c-.192-1.287-.2-3.02-.142-4.48c.028-.722.073-1.359.115-1.815Z"></path><circle cx="9.435" cy="9.173" r="1" fill="currentColor" transform="rotate(-45 9.435 9.173)"></circle></g></svg>'),
        color: "hover:border-green-500 hover:text-green-500"
      },
      {
        name: "Updates", 
        icon: this.sanitizer.bypassSecurityTrustHtml('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="w-5 h-5" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8z"></path></svg>'),
        color: "hover:border-orange-500 hover:text-orange-500",
      }, 
      { 
        name: "Forums", 
        icon: this.sanitizer.bypassSecurityTrustHtml('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="w-5 h-5" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M15 4v7H5.17L4 12.17V4h11m1-2H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm5 4h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1z"></path></svg>'),
        color: "hover:border-purple-500 hover:text-purple-500"
      }
    ]
  }

  ngOnInit(): void {
  }

}

interface topBarItem {
  name: string;
  icon: SafeHtml,
  color: string
}
