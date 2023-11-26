import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JewerlyService } from '../jewerly.service';
import { Jewerly } from '../jewerly';
import { ActivatedRoute } from '@angular/router';

@Component({
   selector: 'app-details',
   standalone: true,
   imports: [CommonModule],
   template: `<section id="details">
      <div><img [src]="jewel.photo" [alt]="jewel.name" /></div>

      <article id="content-info">
         <h1 class="titles">{{ jewel.name }}</h1>
         <section>
            <p>
               Unidades Disponiveis:
               <span class="response">{{ jewel.availableUnits }}</span>
            </p>
            <p>
               Tempo Para Produção:
               <span class="response">{{ jewel.timeProduction }} dia(s)</span>
            </p>
            <p>
               Preço: <span class="response">{{ jewel.price }}</span>
            </p>

            <h3>Cores:</h3>
            <ul class="colors-info">
               <li
                  *ngFor="let color of jewel.colors"
                  [ngStyle]="{ 'background-color': color }"
               ></li>
            </ul>
         </section>
      </article>
   </section>`,
   styleUrl: './details.component.scss',
})
export class DetailsComponent {
   route: ActivatedRoute = inject(ActivatedRoute);
   jewerlyService: JewerlyService = inject(JewerlyService);
   jewel: Jewerly;

   constructor() {
      const jewelId = Number(this.route.snapshot.params['id']);
      this.jewel = this.jewerlyService.getJewerlyById(jewelId);
   }
}
