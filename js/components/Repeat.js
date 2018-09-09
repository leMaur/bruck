/*
Usage: 
  <r-epeat times="3">
    <p>Child</p>
    <div>Another child</div>
  </r-epeat>
Attributes: 
  - times [integer] (default: 3)
*/

export default class Repeat extends HTMLElement {
  constructor() {
    super();
    this.times = this.getAttribute('times') || '3';
    this.content = this.innerHTML;
  }
  connectedCallback() {
    if (this.repeat > 0) {
      this.content = this.innerHTML;
      for (let i = 1; i < this.repeat; i++) {
        this.innerHTML += this.content;
      }
    }

    for (let i = 1; i < this.times; i++) {
      this.innerHTML += this.content;
    }
  }
}

customElements.define('r-epeat', Repeat);