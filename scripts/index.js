"use strict";

window.onload = function(){
    fetchFootballTeam();
};

function fetchFootballTeam(){
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
    
    let selectElement = document.getElementById("AmericanFootballTeam");
    //console.log(selectElement);
    for(let i in teams)
    {
        let theOption = new Option(teams[i].name, teams[i].teamcode);
        //console.log(theOption);
        selectElement.appendChild(theOption);
    }

    
}