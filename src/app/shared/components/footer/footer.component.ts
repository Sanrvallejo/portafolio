import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  email = 'zanti-23@hotmail.com';
  linkedinUrl = 'https://www.linkedin.com/in/santiago-r-webdev/';
  githubUrl = 'https://github.com/Sanrvallejo';
}
