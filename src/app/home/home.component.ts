import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Jewerly } from '../jewerly';
import { JewelryComponent } from '../jewelry/jewelry.component';
import { ListJewelryComponent } from '../list-jewelry/list-jewelry.component';
import { JewerlyService } from '../jewerly.service';

@Component({
   selector: 'app-home',
   standalone: true,
   imports: [CommonModule, JewelryComponent, ListJewelryComponent],
   template: `<header>
         <section id="header">
            <h1 class="titles">Clar & Mar</h1>

            <app-list-jewelry
               (onFilterResults)="updateJewerlyList($event)"
            ></app-list-jewelry>
         </section>
      </header>
      <main [ngSwitch]="filteredJewerlyList.length > 0">
         <section *ngSwitchCase="true" class="results">
            <app-jewelry
               *ngFor="let jewel of filteredJewerlyList"
               [jewel]="jewel"
            ></app-jewelry>
         </section>
         <section *ngSwitchCase="false">
            <h2>tem nada não patrão</h2>
            <i class="fa-solid fa-face-sad-tear"></i>
         </section>
      </main>`,
   styleUrl: './home.component.scss',
})
export class HomeComponent {
   jewelryService: JewerlyService = inject(JewerlyService);
   filteredJewerlyList: Jewerly[] = [];

   constructor() {
      this.filteredJewerlyList = this.jewelryService.getAllJewerly();
   }

   updateJewerlyList(jewerlyList: Jewerly[]) {
      this.filteredJewerlyList = jewerlyList;
   }
}
