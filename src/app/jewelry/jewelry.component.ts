import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Jewerly } from '../jewerly';
import { RouterModule } from '@angular/router';

@Component({
   selector: 'app-jewelry',
   standalone: true,
   imports: [CommonModule, RouterModule],
   template: `
      <section class="listing">
         <img
            class="listing-photo"
            [src]="jewel.photo"
            alt="exterior photo of {{ jewel.name }}"
         /><section class="content">
            
            <h2 class="listing-heading titles">{{ jewel.name }}</h2>
            <a [routerLink]="['/details', jewel.id]">Saiba Mais</a>
         </section>
      </section>
   `,
   styleUrl: './jewelry.component.scss',
})
export class JewelryComponent {
   @Input() jewel!: Jewerly;
}
