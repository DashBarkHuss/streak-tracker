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
        const bottomOfLastChild = getPosition(trackers[i].children[1]) + trackers[i].children[1].offsetHeight;
        const topOfFirstChild = getPosition(trackers[i].children[0]);
        const contentHeight = bottomOfLastChild-topOfFirstChild;
        contentHeight +40 < width? trackers[i].style.height = width + 'px': trackers[i].style.height = (contentHeight +40)+'px';
        console.log('h:',trackers[i].style.height);
    }
}

//helper found online
function getPosition(element) {
    var yPosition = 0;

    while(element) {
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }

    return yPosition;
}



window.onresize = setTrackerHeight;

setTrackerHeight();