module.exports =function toReadable (number) {
  let units = {0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6:'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thir', 14: 'four', 15: 'fif', 16: 'six', 17: 'seven', 18: 'eigh', 19: 'nine'}
  let dozens = {2: 'twen', 3: 'thir', 4: 'for', 5: 'fif', 6: 'six', 7: 'seven', 8: 'eigh', 9: 'nine'};
  let array = (String(number)).split('');
  let humanNumber = '';
  if (number >= 100){
  if (number % 100 == 0){
    humanNumber = units[array[0]] + ' hundred';
  } else{
    humanNumber = units[array[0]] + ' hundred' + ' ' + toReadable (number%100);
  }
  }else if(number < 100){
    if(number < 10 ){
    humanNumber = units[number]
    }else if(number >= 10 && number < 13){
      humanNumber = units[number];
    }else if(number >= 13 && number < 100){
      if(number%10 == 0){
        humanNumber = dozens[array[0]] + 'ty';
      } else{
        if(number < 20){
          humanNumber = units[number] + 'teen';
        } else{
          humanNumber = dozens[array[0]] + 'ty ' + units[array[1]];
        }
      }
    }
  }
 return humanNumber;
}

