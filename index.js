function takeANumber(line, name){
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`;
}

var ticket = 0;

function takeANumber(line) {
  ticket += 1;
  line.push(ticket);
  return `Welcome, you have ticket # ${ticket}.`;
}


function nowServing(line){
  if (!line.length){
    return "There is nobody waiting to be served!";
  }
  
return `Currently serving ${line.shift()}.`;
}

function currentLine(line){
  if(!line.length){
    return "The line is currently empty.";
  }
  
var numberAndName = [];

for (var i =0; i < line.length; i++){
  numberAndName.push(`${i+1}. ${line[i]}`);
}
return `The line is currently: ${numberAndName.join(', ')}`;
  
}