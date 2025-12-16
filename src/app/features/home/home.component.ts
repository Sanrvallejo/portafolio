import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  skills = [
    {
      title: 'Diseñador',
      icon: 'design',
      description: 'Me enfoco en crear diseños web claros que den buena experiencia en su uso.',
      tools: 'Figma e Illustrator'
    },
    {
      title: 'Desarrollador Front-end',
      icon: 'frontend',
      description: 'Transformo ideas en interfaces interactivas y responsivas.',
      tools: 'HTML5, CSS3 y Javascript'
    },
    {
      title: 'Desarrollador Back-end',
      icon: 'backend',
      description: 'Construyo sistemas que faciliten el flujo de información y satisfagan las necesidades del cliente.',
      tools: 'Spring Boot y NestJS'
    }
  ];

  projects = [
    {
      name: 'Sistema de inventario Gavi',
      slug: 'gavi',
      image: 'assets/images/logo_gavi.png'
    },
    {
      name: 'E-commerce Chopper',
      slug: 'chopper',
      image: 'assets/images/logo_chopper.png'
    },
    {
      name: 'Diseño web Mosqueta Rose',
      slug: 'mosqueta',
      image: 'assets/images/logo_mosqueta.png'
    },
    {
      name: 'Diseño web Glamping',
      slug: 'glamping',
      image: 'assets/images/logo_glamping.svg'
    }
  ];
}
