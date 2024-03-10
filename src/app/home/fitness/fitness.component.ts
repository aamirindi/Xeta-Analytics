import { Component } from '@angular/core';

@Component({
  selector: 'app-fitness',
  templateUrl: './fitness.component.html',
  styleUrl: './fitness.component.css'
})
export class FitnessComponent {
 exercises = [
    {
      name: 'Chest press',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. In hac habitasse platea dictumst. Vivamus eget fermentum',
      imageUrl: '../../../assets/f3aeec30c7a559a085943a350d1a3e90.png',
      backgroundColor: '#f8e7bd',
    },
    {
      name: 'Straight leg deadlift',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. In hac habitasse platea dictumst. Vivamus eget fermentum',
      imageUrl: '../../../assets/2b72fa1da2ac66ee77db150443bdfc6f.png',
      backgroundColor: '#d3fdcd',
    },
    {
      name: 'Crunches',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. In hac habitasse platea dictumst. Vivamus eget fermentum',
      imageUrl: '../../../assets/35c3f1ff54502367952d68a7702b3020.png',
      backgroundColor: '#ccf5fe',
    },
  ];
}
