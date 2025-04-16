let userName = '';
let name = userName || 'stranger';
console.log(`Hello, ${name}`);

const userQuestion = 'Do you want to go on ball with me?'
console.log(`${userName}! ${userQuestion}`);
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

switch (randomNumber) {
  case  1 :
  console.log('It is certain');
  break;
  case  2 :
  console.log('It is decidedly so');
  break;
  case  3 :
  console.log('Reply hazy try again');
  break;
  case 4 :
  console.log('Cannot predict now');
  break;
  case 5 :
  console.log('Do not count on it');
  break;
  case 6 :
  console.log('Outlook not so good');
  break;
  case 7 :
  console.log('Signs point to yes');
  break;
}