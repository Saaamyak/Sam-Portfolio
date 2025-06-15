// const skillName = ['HTML-5','CSS-3','C++','Python','Flask','React Js','Mongo Db','SQL','Wireshark','Metasploit','NMap','Recon-NG','.NET']
// const skillImg = ['/images/html5.png','/images/css-3.png','/images/cpp.png','/images/python.png','/images/flask.png','/images/react.png','/images/mongodb.png','/images/sql.png','/images/Wireshark.png','/images/Metasploit.png','/images/nmap.png','/images/recon.PNG','/images/ASP_NET.png']
// const skillcol = ['#FFA500','#2196F3','#004481','#34709F','#eeeeee','#00D8FF','#1F6600','#02A8F3','#2E9ECF','#286591','#8CA8B6','#8D8D8D','#375B67']
// const skillLevel = ['ADVANCE','ADVANCE','INTERMEDIATE','Intermediate','BASIC','Intermediate','Basic','Basic','Intermediate','Intermediate','Intermediate','Intermediate','Intermediate']
// const skillVal = [90,90,50,60,50,65,65,70,75,75,75,75,75]
const skills = [
  {
    "name": "Cortex XDR",
    "image": "/images/XDR.png",
    "color": "#04E171",
    "level": "ADVANCE",
    "value": 90
  },
  {
    "name": "MITRE ATT&CK",
    "image": "/images/mitre-MITRE-ATTCK.png",
    "color": "#2196F3",
    "level": "ADVANCE",
    "value": 90
  },
  {
    "name": "YARA Rules",
    "image": "/images/yara.png",
    "color": "#C41617",
    "level": "INTERMEDIATE",
    "value": 60
  },
  {
    "name": "Python",
    "image": "/images/python.png",
    "color": "#34709F",
    "level": "Advance",
    "value": 75
  },
  {
    "name": "Regex",
    "image": "/images/Regex.png",
    "color": "#eeeeee",
    "level": "BASIC",
    "value": 50
  },
  {
    "name": "Splunk",
    "image": "/images/splunk.png",
    "color": "#3BA117",
    "level": "Intermediate",
    "value": 65
  },
  {
    "name": "Autopsy",
    "image": "/images/Autopsy.png",
    "color": "#CA7A26",
    "level": "Basic",
    "value": 55
  },
  {
    "name": "DLP",
    "image": "/images/DLP.png",
    "color": "#01AE99",
    "level": "Basic",
    "value": 30
  },
  {
    "name": "Wireshark",
    "image": "/images/Wireshark.png",
    "color": "#2E9ECF",
    "level": "Intermediate",
    "value": 75
  },
  {
    "name": "Metasploit",
    "image": "/images/Metasploit.png",
    "color": "#286591",
    "level": "Intermediate",
    "value": 75
  },
  {
    "name": "NMap",
    "image": "/images/nmap.png",
    "color": "#98D3ED",
    "level": "Intermediate",
    "value": 75
  },
  {
    "name": "Recon-NG",
    "image": "/images/recon.PNG",
    "color": "#8D8D8D",
    "level": "Intermediate",
    "value": 75
  },
  {
    "name": "Sophos",
    "image": "/images/sophos.png",
    "color": "#4688CB",
    "level": "Intermediate",
    "value": 50
  },
  {
    "name": "Windows Forensics",
    "image": "/images/windows.png",
    "color": "#4688CB",
    "level": "Intermediate",
    "value": 50
  },
  {
    "name": "Linux Forensics",
    "image": "/images/kali.png",
    "color": "#B1B1B1",
    "level": "Advance",
    "value": 70
  },
  {
    "name": "Networking",
    "image": "/images/Networking.png",
    "color": "#04ABEC",
    "level": "Intermediate",
    "value": 55
  },
]

$(document).ready(function(){
    $(".container").slideUp(0);
    $(".container").slideDown(1000,"swing");
    $("#focus-container").slideUp(0);
    $("#focus-container").slideDown(1500,"swing");
    $(".logo").slideUp(0);
    $(".logo").slideDown(2000,"swing");
    $(".nav-links").slideUp(0);
    $(".nav-links").slideDown(2000,"swing");
    createSkillIcons();
    animWorld();
    navSlide();
    headingAnimate();
    const translate = document.querySelectorAll('.parallax-trans');
    const el = document.querySelector('.parallax-container');
    const skill_title = document.querySelector('.skill-title');
    const shadow = document.querySelector('.shadow');
    window.addEventListener('scroll', () =>{
        let scroll = window.pageYOffset - el.offsetTop;
        if(scroll>0)
        {
            translate.forEach(element => {
                let speed = element.dataset.speed;
                element.style.transform = `translateY(${scroll * speed}px)`;
            });
        }
        skill_title.style.opacity = -scroll / (el.offsetHeight / 2) + 1;
        shadow.style.height = `${scroll * 0.5 + 350}px`; 
    });
});

// function getCircle(colorhash,val){
//     var svg1 = "http://www.w3.org/2000/svg";
//     var svg_border = document.createElementNS(svg1, 'svg');
//     svg_border.setAttribute('class','progress-border');
//     var circle_main = document.createElementNS(svg1,'circle');
//     circle_main.setAttribute('stroke',colorhash);
//     circle_main.setAttribute('stroke-width',"5");
//     circle_main.setAttribute('r',"90");
//     circle_main.setAttribute('cx',"95");
//     circle_main.setAttribute('cy',"95");
//     circle_main.setAttribute('class','helloDemo');
    
//     let radius = 90;
//     let circumference = Math.PI*(radius*2);
//     if (val < 0) { val = 0;}
//     if (val > 100) { val = 100;}
//     let pct = ((100-val)/100)*circumference;
//     circle_main.style.strokeDashoffset=pct+"";

//     svg_border.appendChild(circle_main);
//     const svg_container= document.createElement('div');
//     svg_container.className = 'svg-container';
//     svg_container.appendChild(svg_border);
//     return svg_container;
// }
function getCircle(colorhash, val) {
    const svgNS = "http://www.w3.org/2000/svg";
    
    const svg_border = document.createElementNS(svgNS, 'svg');
    svg_border.setAttribute('class', 'progress-border');
    svg_border.setAttribute('width', '190'); // 2 * cx
    svg_border.setAttribute('height', '190'); // 2 * cy

    const circle_main = document.createElementNS(svgNS, 'circle');
    circle_main.setAttribute('stroke', colorhash);
    circle_main.setAttribute('stroke-width', "5");
    circle_main.setAttribute('r', "90");
    circle_main.setAttribute('cx', "95");
    circle_main.setAttribute('cy', "95");
    circle_main.setAttribute('class', 'helloDemo');

    // Rotate stroke start position to top
    circle_main.setAttribute('transform', 'rotate(-90 95 95)');

    // Set stroke-dasharray and offset for progress effect
    const radius = 90;
    const circumference = Math.PI * (radius * 2);
    const clampedVal = Math.min(100, Math.max(0, val));
    const offset = ((100 - clampedVal) / 100) * circumference;

    circle_main.setAttribute('fill', 'none');
    circle_main.style.strokeDasharray = `${circumference}`;
    circle_main.style.strokeDashoffset = `${offset}`;

    svg_border.appendChild(circle_main);

    const svg_container = document.createElement('div');
    svg_container.className = 'svg-container';
    svg_container.appendChild(svg_border);

    return svg_container;
}


function createSkillIcons() {
  const skill_container = document.querySelector('.skills-container');
  
  skills.forEach(skill => {
    const card = document.createElement('div');
    card.className = "skill-card";
    card.style.boxShadow = `${skill.color} 0px 0px 20px`;

    card.addEventListener("mouseenter", cardMouseEnter);
    card.addEventListener("mousemove", cardMouseMove);
    card.addEventListener("mouseleave", cardMouseLeave);

    const progress_bar = getCircle(skill.color, skill.value);

    const img = document.createElement('img');
    img.src = skill.image;
    img.className = 'skill-img';
    img.alt = "Failed to Load Image";

    const skill_text = document.createElement('h3');
    skill_text.textContent = skill.name;
    skill_text.className = 'skill-name';
    skill_text.style.color = skill.color;

    const skill_level = document.createElement('h4');
    skill_level.textContent = skill.level;
    skill_level.className = 'skill-level';

    card.appendChild(progress_bar);
    progress_bar.appendChild(img);
    card.appendChild(skill_text);
    card.appendChild(skill_level);
    skill_container.appendChild(card);

    progressObserver.observe(progress_bar);
  });
}

$(document).on('scroll', function(){
    if ( $(window).scrollTop() > 300) {
        $('#header').addClass('scrolled_header');
    } else {
        $('#header').removeClass('scrolled_header');
    }
});

const headingAnimate = () =>{
    observer.observe(document.querySelector('#about-heading'));
}
const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.classList.add('heading-init');
        } else {
            entry.target.classList.remove('heading-init');
        }
    });
});

const progressObserver = new IntersectionObserver(entries=>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.classList.add('circle-anim');
        } else {
            entry.target.classList.remove('circle-anim');
        }
    });
});

const navSlide = () =>{
    const burger = document.querySelector('.burger');  
    const nav = document.querySelectorAll('.nav-links li');
    const bar = document.querySelector('.nav-links');
    burger.addEventListener('click',()=>{
        if($(window).scrollTop() > 300){
            bar.style.background = '#00000088';
        } else {
            bar.style.background = 'linear-gradient(to top, #2F80ED, #56CCF2)'
        }
        bar.classList.toggle('nav-active');
        nav.forEach((link,index) => {
            if(link.style.animation){
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/7 + 0.5}s`;
            }
        });
        burger.classList.toggle('toggle');
    });  
    
}
async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function animWorld(){
    var arr = ["World","जग","Monde","Welt","Mundo","世界","Mondo"]
    for(let it = 0; ; it++)
    {
        if(it>=arr.length) it=0;
        var textWrapper = document.querySelector('.letters');
        var i, span = "";
        var temp = "Welcome to My "+arr[it];
        for (i = 0; i < temp.length; i++) {
            span += "<span class='letter'>";
            if(temp[i]==" ")
            span += "&nbsp";
            else
            span += temp[i];
            span += "</span>";
        }
        textWrapper.innerHTML = span;
        anime.timeline().add({
            targets: '.ml6 .letter',
            translateY: ["1.1em", 0],
            translateZ: 0,
            duration: 750,
            delay: (el, i) => 50 * i
        });  
        await sleep(2750);
    }
}

const tiltEffectSettings = {
    max: 25,
    perspective: 1000,
    scale: 1.05,
    speed: 500,
    easing: "cubic-bezier(.03,.98,.52,.99)"
  };

function cardMouseEnter(event) {
    setTransition(this);
}
  
function cardMouseMove(event) {
    const cardWidth = this.offsetWidth;
    const cardHeight = this.offsetHeight;
    const centerX = this.offsetLeft + cardWidth/2;
    const centerY = this.offsetTop + cardHeight/2;
    const mouseX = event.clientX - centerX;
    const mouseY = event.clientY - centerY;
    const rotateXUncapped = (+1)*(tiltEffectSettings.max*mouseY/(cardHeight/2));
    const rotateYUncapped = (-1)*(tiltEffectSettings.max*mouseX/(cardWidth/2));
    const rotateX = rotateXUncapped < -tiltEffectSettings.max ? -tiltEffectSettings.max : (rotateXUncapped > tiltEffectSettings.max ? tiltEffectSettings.max : rotateXUncapped);
    const rotateY = rotateYUncapped < -tiltEffectSettings.max ? -tiltEffectSettings.max : (rotateYUncapped > tiltEffectSettings.max ? tiltEffectSettings.max : rotateYUncapped);
  
    this.style.transform = `perspective(${tiltEffectSettings.perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${tiltEffectSettings.scale}, ${tiltEffectSettings.scale}, ${tiltEffectSettings.scale})`;
}
  
function cardMouseLeave(event) {
    this.style.transform = `perspective(${tiltEffectSettings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    setTransition(this);
}

function setTransition(card) {
    clearTimeout(card.transitionTimeoutId);
    card.style.transition = `transform ${tiltEffectSettings.speed}ms ${tiltEffectSettings.easing}`;
    card.transitionTimeoutId = setTimeout(() => {
    card.style.transition = "";
    }, tiltEffectSettings.speed);
}