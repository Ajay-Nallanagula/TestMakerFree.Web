import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})

export class QuizListComponent {
  title: string;
  selectedQuiz: Quiz;
  quizzes: Quiz[];
  constructor(public httpClient: HttpClient) {
    this.title = 'Latest Quizzes';
    const url = 'http://localhost:50744/api/quiz/latest'; // baseUrl + 'api/quiz/Latest/';
    this.httpClient.get<Quiz[]>(url).subscribe(
      result => {
       this.quizzes = result;
      },
      error => console.error(error)
    );
  }
  onSelect(quiz: Quiz) {
    this.selectedQuiz = quiz;
    console.log('quiz with Id ' + this.selectedQuiz.Id + ' has been selected.');
  }
}
