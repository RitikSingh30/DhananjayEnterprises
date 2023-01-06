const workInfo = [
    {
        image : "./Images/Containerised_Electric_and_Diesel_Fire_Pump.jpg",
        heading : "Containerized Fire Pump Systems" ,
        desc : `Constructed inside a standard shipping container, the units are easy to ship and install. Fast installation with minimal labour makes it a perfect retrofit solution. No on-site assembly labor or specialized tools are required. Installation requires only that you connect the piping and the power supply.`
    },
    {
        image : "./Images/shutterstock_108142898-min.jpg",
        heading : "Fire Hydrant Systems" ,
        desc : `A fire hydrant is an active fire protection measure, and a source of water provided in most urban, suburban and rural areas with municipal water service to enable firefighters to tap into the municipal water supply to assist in extinguishing a fire.`
    },
    {
        image : "./Images/shutterstock_709361593-min.jpg",
        heading : "Sprinkler Systems" ,
        desc : `A sprinkler system consists of pipes along a ceiling that contain water under pressure, with an additional source of water for a constant flow. Attached to the pipes, automatic sprinklers are placed at selected locations.`
    },
    {
        image : "../Images/shutterstock_765750664-min.jpg",
        heading : "Fire Suppression Systems" ,
        desc : `A fire suppression system is an engineered group of units that are built to extinguish fires through the application of a substance.These are attached to an alarm system that will alert you when the fire has been detected and initiate steps for action to further suppress the fire.`
    },
    {
        image : "./Images/shutterstock_546868675-min.jpg",
        heading : "AMC Services" ,
        desc : `Each and every part of a fire protection system has a specific function. Regular maintenance of these system parts ensures the system is ready whenever it is required to extinguish fire hazard.`
    }
];

let work_first_box_Image; 
let work_second_box_Image; 
let work_third_box_Image; 

let work_first_box_heading; 
let work_second_box_heading;
let work_third_box_heading;

let work_first_box_desc; 
let work_second_box_desc; 
let work_third_box_desc;

window.addEventListener('DOMContentLoaded',function(){
    work_first_box_Image = document.getElementById('work-first-img');
    work_second_box_Image = document.getElementById('work-second-img');
    work_third_box_Image = document.getElementById('work-third-img');

    work_first_box_heading = document.getElementById('work-first-heading');
    work_second_box_heading = document.getElementById("work-second-heading");
    work_third_box_heading = document.getElementById('work-third-heading');

    work_first_box_desc = document.getElementById('work-first-desc');
    work_second_box_desc = document.getElementById('work-second-desc');
    work_third_box_desc = document.getElementById('work-third-desc');
});

window.addEventListener('DOMContentLoaded',function(){
    changeBoxElement();
});

const changeBoxElement = () =>{
    let box1 = workInfo[0] ;
    let box2 = workInfo[1] ;
    let box3 = workInfo[2] ;

    work_first_box_Image.src = box1.image ;
    work_second_box_Image.src = box2.image ;
    work_third_box_Image.src = box3.image ;

    work_first_box_heading.innerText = box1.heading;
    work_second_box_heading.innerText = box2.heading;
    work_third_box_heading.innerText = box3.heading;

    work_first_box_desc.innerText = box1.desc ;
    work_second_box_desc.innerText = box2.desc ;
    work_third_box_desc.innerText = box3.desc ;
}

let firstBox = 0 , secondBox = 1 , thirdBox = 2 ;

setInterval(() => {
    let box1 = workInfo[firstBox] ;
    let box2 = workInfo[secondBox] ;
    let box3 = workInfo[thirdBox] ;

    work_first_box_Image.src = box1.image ;
    work_second_box_Image.src = box2.image ;
    work_third_box_Image.src = box3.image ;

    work_first_box_heading.innerText = box1.heading;
    work_second_box_heading.innerText = box2.heading;
    work_third_box_heading.innerText = box3.heading;

    work_first_box_desc.innerText = box1.desc ;
    work_second_box_desc.innerText = box2.desc ;
    work_third_box_desc.innerText = box3.desc ;

    firstBox++ ;
    secondBox++ ;
    thirdBox++ ;

    if(firstBox >= workInfo.length) firstBox = 0 ;
    if(secondBox >= workInfo.length) secondBox = 0 ;
    if(thirdBox >= workInfo.length) thirdBox = 0 ;

}, 3000);

