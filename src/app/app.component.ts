import { CommonModule } from '@angular/common';
import { Component, NgModule, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public title: string = '';
  public description: string = '';
  public author: string = '';
  public rating = 0;
  public ngRating = 0;
  public index = 0;
  public bookCollection = [
    {
      title: 'War of the Worlds',
      description: 'Science fiction novel by English author H. G. Wells. It was written between 1895 and 1897, and serialised in Pearson\'s Magazine in the UK and Cosmopolitan magazine in the US in 1897. The full novel was first published in hardcover in 1898 by William Heinemann.The War of the Worlds is one of the earliest stories to detail a conflict between humankind and an extraterrestrial race. The novel is the first- person narrative of an unnamed protagonist in Surrey and his younger brother in London as southern England is invaded by Martians.It is one of the most commented - on works in the science fiction canon.',
      author: '	H. G. Wells',
      rating: 4
    },
    {
      title: 'Wuthering Heights',
      description: 'Wuthering Heights is an 1847 novel by Emily Brontë, initially published under the pseudonym Ellis Bell. It concerns two families of the landed gentry living on the West Yorkshire moors, the Earnshaws and the Lintons, and their turbulent relationships with Earnshaw\'s adopted son, Heathcliff.The novel was influenced by Romanticism and Gothic fiction.',
      author: 'Emily Brontë',
      rating: 3.9
    },
    {
      title: 'Alice\'s Adventures in Wonderland',
      description: 'Alice\'s Adventures in Wonderland(commonly Alice in Wonderland) is an 1865 English children\'s novel by Lewis Carroll. A young girl named Alice falls through a rabbit hole into a fantasy world of anthropomorphic creatures. It is seen as an example of the literary nonsense genre.',
      author: 'Lewis Carroll',
      rating: 4
    },
    {
      title: 'Candide',
      description: 'Brought up in the household of a powerful Baron, Candide is an open-minded young man, whose tutor, Pangloss, has instilled in him the belief that \'all is for the best\'. But when his love for the Baron\'s rosy- cheeked daughter is discovered, Candide is cast out to make his own way in the world.',
      author: 'Voltaire',
      rating: 3.9
    },
    {
      title: 'Pride and Prejudice',
      description: 'Pride and Prejudice is an 1813 novel of manners written by Jane Austen. The novel follows the character development of Elizabeth Bennet, the dynamic protagonist of the book who learns about the repercussions of hasty judgments and comes to appreciate the difference between superficial goodness and actual goodness.',
      author: 'Jane Austen',
      rating: 4.1
    },
    {
      title: 'IT',
      description: 'In the biggest and most ambitious book of his career, Stephen King gives us not only his most towering epic of horror but a surprising reillumination of the corridor where we pass from the bright mysteries of childhood to those of maturity.',
      author: 'Stephen King',
      rating: 4.1
    }

  ]
  public tempValue = 0;
  public count = 1;
  public rated = false;
  public getValue(value: number): void {
    this.tempValue = value;
    this.bookCollection[this.index].rating += this.tempValue;
    this.count++;
    this.bookCollection[this.index].rating /= this.count;
    const number = this.bookCollection[this.index].rating;
    const rounded = Math.round(number * 100) / 100;
    this.bookCollection[this.index].rating = rounded;
    console.log(rounded);
    console.log(this.count);
    this.rated = true;
    this.resetData(this.index);
  }
  public resetData(index: number): void {
    this.index = index;
    this.tempValue = 0;
    this.count = 1;
  }
  public showEdit = false;
  public showSave = false;
  public clickedSave = false;
  public tempTitle = '';
  public tempDesc = '';
  public tempAuthor = '';

  public resetData2() {

    this.rated = false;
    this.showEdit = false;
    this.showSave = false;
  }
  public editBook() {
    if (this.rated = true) {
      this.showEdit = true;
      this.tempTitle = this.bookCollection[this.index].title;
      this.tempDesc = this.bookCollection[this.index].description;
      this.tempAuthor = this.bookCollection[this.index].author;
      this.showSave = true;
    }
  }
  public allRated = false;
  public rateAgainVar = false;
  public nextBook() {
    this.index++;
    if (this.index >= this.bookCollection.length) {
      this.allRated = true;
      this.index = 0;
    }
  }

  public rateAgain() {
    this.allRated = false;
    this.rated = false;
  }
  public exitVar = false;
  public exit() {
    this.exitVar = true;
  }
  public saveEdit() {


    this.resetData2();
    this.nextBook();
  }


}
