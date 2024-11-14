import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  standalone: true,
  imports: [MatExpansionModule, MatIconModule, NgFor, BrowserAnimationsModule],
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  faqItems = [
    { question: '¿Qué es Servismart y cómo funciona?', answer: 'Servismart es una plataforma que...' },
    { question: '¿Cómo puedo registrarme en Servismart?', answer: 'Para registrarte en Servismart...' },
    { question: '¿Cómo puedo encontrar licitaciones relevantes?', answer: 'Puedes encontrar licitaciones...' },
    { question: '¿Cómo puedo crear y publicar una licitación?', answer: 'Para crear y publicar una licitación...' }
  ];
}
