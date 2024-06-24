let menuVisible= false;

function ShowHideMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible=false;
    }
    else{
        document.getElementById("nav").classList="responsive";
        menuVisible=true;
    }
}

function select(){
    document.getElementById("nav").classList="";
    menuVisible=false;
}

function effectSkills (){
    let skills = document.getElementById("skills");
    let distanceSkill= window.innerHeight - skills.getBoundingClientRect().top
    if(distanceSkill >= 300)
        {
            let skill = document.getElementsByClassName("process")

                skill[0].classList.add("javascript")
                skill[1].classList.add("htmlcss");
                skill[2].classList.add("node");
                skill[3].classList.add("wordpress");
                skill[4].classList.add("communication");
                skill[5].classList.add("compromise");
                skill[6].classList.add("Team-Work");
                skill[7].classList.add("Project-Management");
        }
}
window.onscroll = function(){
    effectSkills();
}