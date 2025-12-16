import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  cvUrl = 'https://drive.google.com/file/d/1q2C8udwO7UGTqmm-0GFBu3CJOq7ctRKJ/view?usp=sharing';
  linkedinUrl = 'https://www.linkedin.com/in/santiago-r-webdev/';
  githubUrl = 'https://github.com/Sanrvallejo';
}
