import { Component, EventEmitter, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Jewerly } from '../jewerly';
import { JewerlyService } from '../jewerly.service';

@Component({
   selector: 'app-list-jewelry',
   standalone: true,
   imports: [CommonModule],
   template: `
      <section id="search">
         <i
            class="fa-solid fa-magnifying-glass"
            *ngIf="!showForm"
            (click)="showForm = !showForm"
         ></i>

         <form id="search-form" *ngIf="showForm">
            <input
               id="search-icon"
               class="input"
               type="text"
               placeholder="Digite Algo..."
               #filter
            />
            <button
               class="button"
               type="button"
               (click)="filterResults(filter.value)"
            >
               Buscar
            </button>
         </form>
      </section>
   `,
   styleUrl: './list-jewelry.component.scss',
})
export class ListJewelryComponent {
   @Output() onFilterResults = new EventEmitter<Jewerly[]>();

   showForm = false;

   jewerlyList: Jewerly[] = [];
   jewerlyService: JewerlyService = inject(JewerlyService);
   filteredJewerlyList: Jewerly[] = [];

   constructor() {
      this.jewerlyList = this.jewerlyService.getAllJewerly();
      this.filteredJewerlyList = this.jewerlyList;
   }

   filterResults(text: string) {
      if (!text) this.filteredJewerlyList = this.jewerlyList;

      this.filteredJewerlyList = this.jewerlyList.filter((jewel) => {
         return jewel.name.toLowerCase().includes(text.toLowerCase());
      });

      this.onFilterResults.emit(this.filteredJewerlyList);
   }
}
