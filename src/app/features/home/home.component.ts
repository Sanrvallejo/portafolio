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
      description: 'Diseño interfaces centradas en el usuario, desde wireframes hasta prototipos interactivos.',
      tools: 'Figma'
    },
    {
      title: 'Desarrollador Front-end',
      icon: 'frontend',
      description: 'Desarrollo interfaces responsivas y componentes reutilizables con frameworks modernos.',
      tools: 'Angular, TypeScript, HTML5, CSS3'
    },
    {
      title: 'Desarrollador Back-end',
      icon: 'backend',
      description: 'Construyo APIs RESTful y sistemas de gestión con arquitecturas en capas.',
      tools: 'Java, Spring Boot, MySQL'
    },
    {
      title: 'DevOps & Cloud',
      icon: 'cloud',
      description: 'Implemento pipelines de integración continua y despliegue de aplicaciones en la nube.',
      tools: 'GitHub Actions, AWS (EC2, ECS, Lambda, Cognito)'
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
