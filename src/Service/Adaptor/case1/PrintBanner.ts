import {Print} from './Print'
import {Banner} from './Banner';

export class PrintBanner extends Banner implements Print {
  constructor(text: string) {
    super(text)
  }
  printWeak(): void {
    this.showWithAster();
  }

  printStrong(): void {
    this.showWithParen();
  }  
}