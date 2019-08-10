const gridContainer = document.getElementsByClassName("grid-container")[0];

streaks.forEach((el)=>{
    const tracker = document.createElement("div")
    tracker.innerHTML = `<span class = "streak-days">
    ${el.tracker.getStreak()}</span> days of <span class="streak-activity">${el.tracker.activity}</span>`;
    tracker.classList += "tracker";
    gridContainer.appendChild(tracker);
});