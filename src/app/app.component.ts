import { Component, inject, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { JewerlyService } from './jewerly.service';
import { Jewerly } from './jewerly';
import { ListJewelryComponent } from './list-jewelry/list-jewelry.component';

@Component({
   selector: 'app-root',
   standalone: true,
   imports: [CommonModule, RouterModule, ListJewelryComponent],
   template: ` <router-outlet></router-outlet>
      <footer>
         <section id="info">
            <p>
               Entre em contato por
               <a target="_blank" href="https://wa.me/qr/DB5QBMHFS7GJB1"
                  >WhatsApp</a
               >
               ou
               <a
                  href="https://www.instagram.com/marininhabijoux/"
                  target="_blank"
                  >Instagram
               </a>
            </p>
         </section>
      </footer>`,
   styleUrl: './app.component.scss',
})
export class AppComponent {
   title = 'clarEmar';
}
