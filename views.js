const gridContainer = document.getElementsByClassName("grid-container")[0];

streaks.forEach((el)=>{
    const tracker = document.createElement("div")
    tracker.innerHTML = `<span class = "streak-days">
    ${el.tracker.getStreak()}</span> days of <span class="streak-activity">${el.tracker.activity}</span>`;
    tracker.classList += "tracker";
    gridContainer.appendChild(tracker);
});

const setTrackerHeight = function(){
    const trackers = document.getElementsByClassName('tracker');
    const width = trackers[0].offsetWidth;
    for (i = 0; i<trackers.length; i ++){
        console.log("w: ", width + 'px');
        trackers[i].style.height = width + 'px';
        console.log('h:',trackers[i].style.height);
    }
}


window.onresize = setTrackerHeight;

setTrackerHeight();