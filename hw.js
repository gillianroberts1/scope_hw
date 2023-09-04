// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Library',
//     weapon: 'Rope'
//   };
  
//   const declareMurderer = function() {
//     return `The murderer is ${scenario.murderer}.`;
//   }
  
//   const verdict = declareMurderer();
//   console.log(verdict);

//  Answer =  miss scarlett because it is calling for a var called declaremurderer which is 
//  calling the murderer  from scenario.murderer


//  2

// let murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// Answer - error as the word murderer is what the const variable is called and 
// cannot be changed. declareMurderer is attempting to 
// change this. it would need to be a var or a let to work.


// 3
// let murderer = 'Professor Plum';

// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

// Answer - Mrs Peacock, then Professor Plum because
// the murderer is being changed in the function declareMurderer 
// and the firstverdict is calling for declareMurderer.
// however the secondVerdict is only referring to the
// murderer as originally stated


//  4
// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

// Answer - Miss Scarlett, Professor Plum, Colonel Mustard
// suspectThree variable is being changed to C Mustard and then 
// returning a list of all 3.

// second part will be Mrs Peacock as this doesnt take into account
//  the suspectthree created in in declareAllSuspects


// 5
// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Kitchen',
//     weapon: 'Candle Stick'
//   };
  
//   const changeWeapon = function(newWeapon) {
//     scenario.weapon = newWeapon;
//   }
  
//   const declareWeapon = function() {
//     return `The weapon is the ${scenario.weapon}.`;
//   }
  
//   changeWeapon('Revolver');
//   const verdict = declareWeapon();
//   console.log(verdict);

//   Answer - the weapen is the revolver as
// key:value
// a new function called changeWeapon is created taking in newWeapon.
// This is assigned to scenario.weapon.
// declareWeapon returns the original weapon.
// changeWeapon is then called taking in a value Revolver. This updates the 
// weapon in the scenario.
// declareWeapon is assigned to the variable verdict and is then logged in the console.

// 6

// let murderer = 'Colonel Mustard';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }

//   plotTwist();
// }

// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// Answer - Mrs White
// a global variable called murderer is created and given the value Colonel Mustard.
// a function called changeMurder is created which then changed the value of murderer to 
// to Mr Green.
// inside this function, a nested function is created called plotTwist, this changes the murderer to 
// Mrs WHite.
// plotTwist function is then called.
// a new fnction is created called declareMurderer and returns the original murderer colonel mustard. 
// ... but once changeMurderer is called, this then executes changeMurderer follwed by plotTwist.
//  declareMurder is assigned to verdict
// and the console logs the verdict. 

//  7

let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// Answer - Mr Green

// 1. global scope create varaible called murderer with a value of Professor Plum using let.
 /// 2. global scope - const is created called changeMurderer
// 3. global scope - const declareMurderer is created which is a function
// 4. changeMurderer is called
// 5. changemurder then changed murderer to Mr Green.
// 6. local scope for changeMurderer - const plotTwist is created which is a function
// 7. plotTwist is called within changeMurderer
// 8. local scope for plotTwist creates a let called murderer with a value of COlonel Mustard.
// 9. local scope for plotTwiust - creates a const unexpected Outcomne which is a function.
// 10. unexpectedOutcome is alled within plotTwist
// 11. local scope - sets plotTwist's mirderer variable to Mss Scarlett.
// 12. global scope - creates a const verdict which is the result of calling declareMUrderer
// 13. console.log out verdict
// 14. calling declareMurderer, it knows who the murderer is from global context when chnangMUrderer changed it to Mr



//  8
const scenario = {
    murderer: 'Mrs. Peacock',
    room: 'Conservatory',
    weapon: 'Lead Pipe'
  };
  
  const changeScenario = function() {
    scenario.murderer = 'Mrs. Peacock';
    scenario.room = 'Dining Room';
  
    const plotTwist = function(room) {
      if (scenario.room === room) {
        scenario.murderer = 'Colonel Mustard';
      }
  
      const unexpectedOutcome = function(murderer) {
        if (scenario.murderer === murderer) {
          scenario.weapon = 'Candle Stick';
        }
      }
  
      unexpectedOutcome('Colonel Mustard');
    }
  
    plotTwist('Dining Room');
  }
  
  const declareWeapon = function() {
    return `The weapon is ${scenario.weapon}.`
  }
  
  changeScenario();
  const verdict = declareWeapon();
  console.log(verdict);


// Answer CandleStick
// 1. global - create const with key:values murderer:peacock, room:conservatory, weapon:lead pipe
// 2. gloabl create const changeScanario
// 3. global create const declareWeapon
// 4. global call changeScenario
// 5. global - changeScenario assigns peacock to murderer, room : dining room.
// 6. local creates const plotTwist
// 7. calls plotTwist with arguement of dining room 
// 8. steps into if block as scenario.room is currently dining room and room arguement is also dining room
// 9. as this was true , then scenario.murderer can then be changed to colonel mustard.
// 10. local to plotTwist then creates const unexpectedOutcome .
// 11 on line 213 this is then called, passing in Colonel Mustard, 
// 12. we are able to enter the if block as scenario.murderer is equal to the arguement murderer.
// 13. this then triggers the scenario.weapen to be changed to candlestick.
// 14. global, create const verdict which is the result of calling declareWeapen
// 15. calling declareWeapen returns a string of The Weapon is (refers to the global scenario.weapon which is Candlestick)

// 

// 9

let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);


// answer Professor Plum
// 1. global create let murderer - professor plum
// 2. as the murderer is eqal to prof plum, then we create local murderer with value Peacock
// 3. global create const declareMJurderer which is a function
// 4. create const verdict which is a rsult of declareMurderer.
// 5. calls delcareMurderer returning string of the murder is (Professor Plum)
// 6. reaosn being let murderer was local and is defined outside the scope