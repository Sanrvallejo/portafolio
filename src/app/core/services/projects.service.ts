import { Injectable } from '@angular/core';

export interface Project {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  repositoryUrl?: string;
  demoUrl?: string;
  figmaUrl?: string;
  type: 'development' | 'design';
}

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects: Project[] = [
    {
      slug: 'gavi',
      name: 'Sistema de inventario Gavi',
      shortDescription: 'Sistema de gestión administrativa para tiendas con control de inventario y ventas',
      description: `Gavi es un sistema de gestión administrativa diseñado para tiendas y pequeños negocios.
      Permite administrar usuarios, gestionar inventario de productos y registrar ventas con cálculos automáticos de precios y totales.

      El proyecto utiliza una arquitectura cliente-servidor con API RESTful. El backend implementa patrones de diseño en capas (Controlador, Servicio, Repositorio) para mantener una separación clara de responsabilidades.`,
      image: 'assets/images/logo_gavi.png',
      technologies: ['Java 17', 'Spring Boot', 'Spring Data JPA', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      features: [
        'Gestión de usuarios con autenticación',
        'Registro y administración de productos',
        'Sistema de ventas con cálculos automáticos',
        'Reportes de operaciones',
        'API RESTful con arquitectura en capas'
      ],
      repositoryUrl: 'https://github.com/Sanrvallejo/gavi-server',
      demoUrl: 'https://gaviapp.netlify.app',
      type: 'development'
    },
    {
      slug: 'chopper',
      name: 'E-commerce Chopper',
      shortDescription: 'Plataforma de comercio electrónico para tienda de mascotas',
      description: `Chopper es una plataforma de comercio electrónico especializada en productos y servicios para mascotas.

      Proyecto colaborativo desarrollado en equipo siguiendo metodología Scrum. Incluye catálogo de productos, carrito de compras y panel de administración. La arquitectura separa el frontend del backend mediante API RESTful.`,
      image: 'assets/images/logo_chopper.png',
      technologies: ['Java', 'Spring Boot', 'HTML', 'CSS', 'JavaScript'],
      features: [
        'Catálogo de productos para mascotas',
        'Carrito de compras',
        'Sistema de autenticación',
        'Panel de administración',
        'Arquitectura cliente-servidor con API REST'
      ],
      repositoryUrl: 'https://github.com/sierrahun97/e-commerce-Chopper',
      type: 'development'
    },
    {
      slug: 'mosqueta',
      name: 'Diseño web Mosqueta Rose',
      shortDescription: 'Diseño UI/UX para e-commerce de cosméticos naturales con academia integrada',
      description: `Mosqueta Rose es un proyecto de diseño UI/UX para una marca de cosméticos naturales basados en rosa mosqueta.

      El diseño combina elegancia y naturalidad, utilizando la tipografía CodecPro y una paleta de colores suaves. El proyecto incluye una tienda online completa y una sección de academia con cursos sobre el cuidado de la piel.`,
      image: 'assets/images/logo_mosqueta.png',
      technologies: ['Figma'],
      features: [
        'Tienda online con catálogo y detalle de productos',
        'Carrito de compras y flujo de checkout',
        'Sistema de autenticación (login/registro)',
        'Academia con cursos y reproductor de video',
        'Design system completo (tipografía, colores, iconos, botones, navegación)',
        'Página "Ser Mosqueta" (filosofía de marca)'
      ],
      figmaUrl: 'https://www.figma.com/design/LnbvYJ2afVg0w2cPeYsqIY/Mosqueta?node-id=0-1&p=f&t=OUTW6oJwnQx9jNsv-0',
      type: 'design'
    },
    {
      slug: 'glamping',
      name: 'Diseño web Glamping',
      shortDescription: 'Diseño UI/UX para landing page de glamping amazónico',
      description: `Diseño de landing page para un glamping ubicado en la selva amazónica colombiana.

      El diseño transmite naturaleza y exclusividad usando tipografías elegantes (Corben, Cormorant Garamond) y una paleta de verdes selváticos. Incluye presentación de alojamientos, galería y flujo de reserva por contacto directo.`,
      image: 'assets/images/logo_glamping.svg',
      technologies: ['Figma'],
      features: [
        'Landing page con hero inmersivo',
        'Presentación de alojamientos (Refugio selvático, Mirador celestial)',
        'Galería de imágenes del lugar',
        'Catálogo de planes y experiencias',
        'Flujo de reserva en 5 pasos',
        'Integración con WhatsApp para contacto'
      ],
      figmaUrl: 'https://www.figma.com/proto/U9ajNts0vzk66K7ESAV8OV/Glamping?node-id=1-2',
      type: 'design'
    }
  ];

  getProjects(): Project[] {
    return this.projects;
  }

  getProjectBySlug(slug: string): Project | undefined {
    return this.projects.find(p => p.slug === slug);
  }
}
