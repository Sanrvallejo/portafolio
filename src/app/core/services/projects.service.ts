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
      shortDescription: 'Sistema de gestión de inventario para pequeñas empresas',
      description: `Gavi es un sistema de gestión de inventario diseñado para pequeñas y medianas empresas.
      Permite llevar un control detallado de productos, stock, proveedores y movimientos de inventario.

      El sistema cuenta con un dashboard intuitivo que muestra métricas clave como productos más vendidos,
      alertas de stock bajo y resumen de movimientos recientes.`,
      image: 'assets/images/logo_gavi.png',
      technologies: ['Spring Boot', 'Angular', 'PostgreSQL', 'Docker'],
      features: [
        'Gestión de productos y categorías',
        'Control de stock con alertas',
        'Registro de proveedores',
        'Historial de movimientos',
        'Dashboard con métricas'
      ],
      repositoryUrl: 'https://github.com/Sanrvallejo/gavi-server',
      type: 'development'
    },
    {
      slug: 'chopper',
      name: 'E-commerce Chopper',
      shortDescription: 'Tienda en línea de productos para mascotas',
      description: `Chopper es una plataforma de comercio electrónico especializada en productos para mascotas.

      El proyecto incluye catálogo de productos, carrito de compras, sistema de pagos y gestión de pedidos.
      Desarrollado con un enfoque en la experiencia de usuario y rendimiento.`,
      image: 'assets/images/logo_chopper.png',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      features: [
        'Catálogo de productos con filtros',
        'Carrito de compras persistente',
        'Integración con pasarela de pagos',
        'Sistema de usuarios y autenticación',
        'Panel de administración'
      ],
      repositoryUrl: 'https://github.com/sierrahun97/e-commerce-Chopper',
      type: 'development'
    },
    {
      slug: 'mosqueta',
      name: 'Diseño web Mosqueta Rose',
      shortDescription: 'Diseño UI/UX para marca de cosméticos naturales',
      description: `Mosqueta Rose es un proyecto de diseño UI/UX para una marca de cosméticos naturales.

      El diseño busca transmitir elegancia, naturalidad y confianza, utilizando una paleta de colores
      suaves y tipografía refinada. Incluye diseño de landing page, catálogo de productos y checkout.`,
      image: 'assets/images/logo_mosqueta.png',
      technologies: ['Figma', 'Illustrator'],
      features: [
        'Diseño de landing page',
        'Catálogo de productos',
        'Flujo de checkout',
        'Sistema de diseño completo',
        'Versión móvil y desktop'
      ],
      figmaUrl: 'https://www.figma.com/design/LnbvYJ2afVg0w2cPeYsqIY/Mosqueta?node-id=0-1&p=f&t=OUTW6oJwnQx9jNsv-0',
      type: 'design'
    },
    {
      slug: 'glamping',
      name: 'Diseño web Glamping',
      shortDescription: 'Diseño UI/UX para sitio de reservas de glamping',
      description: `Diseño de interfaz para un sitio web de reservas de experiencias de glamping.

      El proyecto busca transmitir la sensación de naturaleza y lujo que caracteriza al glamping,
      con un diseño limpio, fotografías inmersivas y un flujo de reserva intuitivo.`,
      image: 'assets/images/logo_glamping.svg',
      technologies: ['Figma'],
      features: [
        'Diseño de página principal',
        'Galería de experiencias',
        'Sistema de reservas',
        'Mapa interactivo de ubicaciones',
        'Diseño responsive'
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
