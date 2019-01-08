import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './reactive-programming-basics.component.html'
})
export class ReactiveProgrammingBasicsComponent implements OnInit {

  ngOnInit() {

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve
    // https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md

    // function call
    const func = () => console.log('func');
    func();

    // Promise
    const prom = Promise.resolve('promises are promises');
    prom.then(v => console.log(v));

    // Click event
    const selector = document.querySelector('.js-click-me');
    const handler = () => console.log('clicked');
    selector.addEventListener('click', handler);
  }

}
