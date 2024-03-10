import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  exerciseSections = [
    { title: 'About Exercise', content: 'The barbell curl is a classic and effective bicep exercise that targets the muscles in the front of your upper arms, specifically the biceps brachii. Barbell curls into your workout routine can help develop and strengthen your biceps, contributing to overall arm strength and aesthetics' },
    { title: 'Target area', content: 'Biceps brachii and forearm muscles' },
    { title: 'Level for difficulty', content: 'Beginner friendly' },
    { title: 'Number of sets', content: '3' },
    { title: 'Duration', content: '20 minutes' },
    { title: 'Calories burned', content: '150 cal' },
    { 
      title: 'Equipment needed', 
      content: 'Barbell' 
    },
    { 
      title: 'Instruction to perform', 
      content: [
        'Stand up straight with your feet shoulder-width apart.',
        'Hold a barbell with a shoulder-width grip, palms facing forward (an underhand grip).',
        'Your hands should be positioned slightly wider than your shoulders.',
        'Keep your wrists straight and aligned with your forearms.',
        'Maintain a straight back, chest up, and shoulders back.',
        'While keeping your upper arms stationary, exhale and curl the barbell towards your shoulders by flexing your elbows.',
        'Focus on contracting your biceps throughout the movement.',
        'Inhale and slowly lower the barbell back to the starting position with controlled movement.',
        'Maintain tension on the biceps during the descent; do not let the weight drop.',
        'Repeat the movement for the desired number of repetitions.',
        'Exhale during the lifting (concentric) phase and inhale during the lowering (eccentric) phase.'
      ]
    },
    {
      title: 'Tips ', 
      content: [
        'Avoid using momentum by keeping your body still. Focus on isolating the biceps.',
        'Use a weight that allows you to maintain proper form and control throughout the exercise.',
        'Ensure a full range of motion, allowing your arms to fully extend at the bottom and flex at the top.'
      ]
    }
  ];

  isString(content: any): boolean {
    return typeof content === 'string';
  }
}
