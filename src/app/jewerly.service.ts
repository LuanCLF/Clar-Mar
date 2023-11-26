import { Injectable } from '@angular/core';
import { Jewerly } from './jewerly';

@Injectable({
   providedIn: 'root',
})
export class JewerlyService {
   jewerlyListFiltered: Jewerly[] = [];
   jewerlyList: Jewerly[] = [
      {
         id: 0,
         name: 'Chaveiro de Ursos',
         photo: '/assets/0.png',
         colors: ['#F781F3', '#01DF01', '#FF0000'],
         availableUnits: 0,
         timeProduction: 1,
         price: 'Indefinido',
      },
      {
         id: 1,
         name: 'Pulseira Com Bolinhas Brancas e um Rostinho Feliz',
         colors: ['#FFFFFF', '#81F781', '#2E9AFE'],
         photo: '/assets/1.png',
         availableUnits: 0,
         timeProduction: 1,
         price: 'Indefinido',
      },
      {
         id: 2,
         name: 'Pulseiras de Cores Variadas',
         colors: ['#2E9AFE', '#2EFE2E', '#FE2EF7', '#F7FE2E', '#A9F5F2'],
         photo: '/assets/2.png',
         availableUnits: 0,
         timeProduction: 1,
         price: 'Indefinido',
      },
      {
         id: 3,
         name: 'Chaveiro de Fadas',
         colors: ['#81F781', '#2E9AFE', '#F3F781'],
         photo: '/assets/3.png',
         availableUnits: 0,
         timeProduction: 1,
         price: 'Indefinido',
      },
      {
         id: 4,
         name: 'Chaveiro de Florzinha Com Rosto de Rato',
         colors: ['#B18904', '#088A29'],
         photo: '/assets/4.png',
         availableUnits: 0,
         timeProduction: 1,
         price: 'Indefinido',
      },
      {
         id: 5,
         name: 'Chaveiro de Picolé',
         colors: ['#2E9AFE', '#F781F3', '#FE2E9A'],
         photo: '/assets/5.png',
         availableUnits: 0,
         timeProduction: 1,
         price: 'Indefinido',
      },
      {
         id: 6,
         name: 'Chaveiro de Canários',
         colors: ['#F4FA58', '#FFBF00', '#F781F3'],
         photo: '/assets/6.png',
         availableUnits: 0,
         timeProduction: 1,
         price: 'Indefinido',
      },
      {
         id: 7,
         name: 'Chaveiro de Cachorro Mordendo um Osso',
         colors: ['#FFBF00', '#F2F5A9'],
         photo: '/assets/7.png',
         availableUnits: 0,
         timeProduction: 1,
         price: 'Indefinido',
      },
   ];

   constructor() {}

   getAllJewerly(): Jewerly[] {
      const data = this.jewerlyList;

      return data;
   }

   getJewerlyById(id: number): Jewerly {
      const data = this.jewerlyList[id];

      return data;
   }

   setFiltered(array: Jewerly[]): void {
      this.jewerlyListFiltered = array;
   }
}
