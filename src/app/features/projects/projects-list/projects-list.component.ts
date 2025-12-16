import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectsService, Project } from '../../../core/services/projects.service';

@Component({
  selector: 'app-projects-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.scss'
})
export class ProjectsListComponent {
  private projectsService = inject(ProjectsService);
  projects: Project[] = this.projectsService.getProjects();
}
