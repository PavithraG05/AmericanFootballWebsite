"use strict";

window.onload = function(){
    fetchFootballTeam();
};

let teams = [
  { teamcode:"DAL", 
    name:"Dallas Cowboys", 
    locatedIn:"Arlington, TX"
  },
  { teamcode:"DEN", 
    name:"Denver Broncos", 
    locatedIn:"Denver, CO"
  },
  { teamcode:"HOU", 
    name:"Houston Texans", 
    locatedIn:"Houston, TX"
  },
  { teamcode:"KAN", 
    name:"Kansas City Chiefs", 
    locatedIn:"Kansas City, MO"
  }
];

function fetchFootballTeam(){
    
    let selectElement = document.getElementById("AmericanFootballTeam");
    //console.log(selectElement);
    for(let i in teams)
    {
        let theOption = new Option(teams[i].name, teams[i].teamcode);
        console.log(theOption);
        selectElement.appendChild(theOption);
    }

    
}

let submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click",selectedValue);
let selectVal = ""

function findTeam(teams){
  if(teams.teamcode === selectVal ){
      return true;
  }
  else{
    return false;
  }
}

function selectedValue(e){
  let selectElement = document.getElementById("AmericanFootballTeam");
  selectVal = selectElement.value;
  console.log(selectVal);
  let team_details = teams.findIndex(findTeam);
  console.log(team_details);
  if(team_details > -1){
    document.getElementById("selectedOption").innerHTML = `You selected the ${teams[team_details].name} who play in ${teams[team_details].locatedIn}`;
  }
  else{
    document.getElementById("selectedOption").innerHTML = "Error fetching";
  }
  
}