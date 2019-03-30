import { TimelineMax, TweenMax } from "gsap";

TweenMax.set('#box', {
   backgroundColor: 'red',
   width: '50px',
   height: '50px',
   x: '50px',
   y: '50px'
});

const timeLine = new TimelineMax();

timeLine.pause();

timeLine.to('#box', .5, { x: 100 });
timeLine.to('#box', .5, { y: 100 });
timeLine.to('#box', .5, { x: 50 });
timeLine.to('#box', .5, { y: 50 });

document
    .querySelector('#box')
    .addEventListener('click', () => {
       timeLine.resume()
    });
