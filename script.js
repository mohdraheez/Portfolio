var togglebutton = document.querySelector('.toggleicon');
var body = document.querySelector('body');
var skillset = ["Webdeveloper","Programmer"];
var about = "I am Mohammed Raheez, a web developer and programmer. An inquisitive-natured person who loves exploring routes that I've never come across. I'm pursing my Bachelor's degree, a third-year engineering student in the stream of Computer Science from Sahyadri College of Engineering and Management, Mangalore.Ever since I was a little kid, Computer have fascinated me and have driven my passion and craze for them. Learning new things on a daily basis has always been my priority. I studied languages, algorithm built up my technically, leadership skills, and much more";
var skill =`Based on best practice, I create fast, Simple
and easy-to-use responsive websites. I have extensive experience with full-stack-
development,HTML, CSS, JS, NODE-JS,EXPRESS, MONGODB, building small and
medium websites, using custom plugin,
animations, and coding interactive layouts.
I have also interned as a Web Developer at
LetsGrowMore.
For more information, please visit my LinkedIn Profile`;


var cursor = document.querySelector('.cursor');

var characters = [
    'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
    '1','2','3','4','5','6','7','8','9','0','~','!','@','#','$','%','^','&','?'
]

var flag=0;
function randomgenerator(){
    var char='';
    for(let j=0;j<12;j++){
        var random = Math.round(44*Math.random());
        char +=characters[random-1];
    }

    document.querySelector('.subskill').innerHTML = char;

    flag++;

    if(flag<11)
    setTimeout(randomgenerator,100);
    else{
        document.querySelector('.subskill').innerHTML = skillset[i];
        i=(i+1)%skillset.length;
        flag=0;
        setTimeout(randomgenerator,2000);
    }

}


// randomgenerator();



var i=0,j=0,k=0,l=0;
var speed = 210;
var flag1=0,flag2=0;
var color="#ffffff";

var skillbutton = document.querySelectorAll(".skillbuttons");
var skills = ["programming","frontend","backend","database","versioncontrol"];
var buttonlength =skillbutton.length;

hideskills();
displayskill(skills[0]);
selectedbutton(skillbutton[0]);


function selectedbutton(e){
    e.classList.add("skillbuttonselected");
}

function deselectbutton(){
    skillbutton.forEach(element=>{
        element.classList.remove("skillbuttonselected");
    })
}

function hideskills(){
    skills.forEach(element => {
        document.querySelector('.'+element).style.display="none";
    });
}
function displayskill(e){
    document.querySelector('.'+e).style.display="block";
}

for(let z=0;z<buttonlength;z++){
    skillbutton[z].addEventListener('click',(e)=>{
        deselectbutton();
        hideskills();
        displayskill(skills[z]);
        selectedbutton(skillbutton[z]);
    })

}


togglebutton.addEventListener('click',()=>{
    body.classList.toggle('light-theme');     

    if(body.classList.contains('light-theme')){
        togglebutton.innerHTML=`<i class="fa-solid fa-moon icon"></i>`; 
        color="#000000";

    }
    else{
        togglebutton.innerHTML=`<i class="fa-regular fa-sun"></i>`;
        color="#ffffff";

    }

addParticles();

});


function istyping(){
    cursor.classList.toggle('istyping');
}

function typewriter(){

    if(j<skillset[i].length){
        document.querySelector('.subskill').innerHTML+=skillset[i].charAt(j);
        if(j===1)
        istyping();
        j++;
        setTimeout(typewriter,speed);
    }
    else{
        istyping();

        setTimeout(()=>{
            istyping();
            backwriter();
        },1500);
    }
}

function backwriter(){
    var data = skillset[i].substring(0,j);
    if(j!=0){
    document.querySelector('.subskill').innerHTML = data;
    j--;
    setTimeout(backwriter,100);
    }
    else{
    document.querySelector('.subskill').innerHTML = data;
        i=(i+1)%skillset.length;
        istyping();
        setTimeout(typewriter,1000);
    }
}

setTimeout(typewriter,1000);



var projects = document.querySelectorAll('.project');
var prolen =4;

function projectless(){
    for(let i=prolen;i<projects.length;i++){
        projects[i].style.display = 'none';
    }
}
function projectmore(){
    for(let i=0;i<projects.length;i++){
        projects[i].style.display = 'flex';
    }
}
projectless();

var showmorebtn = document.querySelector('.showmore-btn');

showmorebtn.addEventListener('click',()=>{
    if(showmorebtn.innerText === 'Show More'){
        showmorebtn.innerText = "Show Less"
        projectmore();

    }
    else{
        showmorebtn.innerText = "Show More"
        projectless();
    }
})


document.querySelectorAll('.socialmedia')[0].style.bottom="43%";
document.querySelectorAll('.socialmedia')[1].style.bottom="43%";
document.querySelectorAll('.sidenavhr')[0].style.bottom="0%";
document.querySelectorAll('.sidenavhr')[1].style.bottom="0%";




var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

addParticles();

function addParticles(){
    new JParticles.Particle('#particle',{
        color: color,
        lineShape: 'cube',
        range: 2000,
        proximity: 100,
    })
}


// function aboutwriter(){
//     if(k<about.length){
//         document.querySelector('.about').innerHTML+=about.charAt(k);
//         k++;
//         setTimeout(aboutwriter,20);
//     }
// }

// function directaboutwriter(){
//     setTimeout(directaboutwriter,1)
//     setTimeout(aboutwriter,1);
// }


// function skillwriter(){
//     if(l<skill.length){
//         document.querySelector('.skilldiv').innerHTML+=skill.charAt(l);
//         l++;
//         setTimeout(skillwriter,20);
//     }
// }


// if(window.scrollY>210){
//     if(flag1===0){
//     aboutwriter();
//     flag1=1;
//     }
// }

// if(window.scrollY>900){
//     if(flag2===0){
//     directaboutwriter();
//     skillwriter();
//     flag2=1;
//     }
// }

// window.addEventListener("scroll",e=>{
//     if(window.scrollY>210){
//         if(flag1===0){
//         aboutwriter();
//         flag1=1;
//     }
// }

//     if(window.scrollY>900){
//         if(flag2===0){
//         directaboutwriter();
//         skillwriter();
//         flag2=1;
//         }
//     }

//     console.log(window.scrollY);
// });