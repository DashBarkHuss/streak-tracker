class Tracker{
    constructor(start, activity){
        this.start = start;
        this.activity = activity;
    };

    getStreak(){
        return Math.ceil(((Date.now() - this.start)/1000/60/60/24))
    }

    getStatement(){
        return `${this.getStreak()} consecutive days of ${this.activity}.`
    }
}

const workoutStartDate = new Date(2017, 11, 20);
const ketoStartDate = new Date(2016, 11, 17);
const mathStartDate = new Date(2019, 3, 24);
const meditationStartDate = new Date(2019, 2, 18);
const codingStartDate = new Date(2019, 0, 1);

let workoutTracker = new Tracker(workoutStartDate, "working out");
let ketoTracker = new Tracker(ketoStartDate, "eating keto without cheating");
let mathTracker = new Tracker(mathStartDate, "math");
let meditationTracker = new Tracker(meditationStartDate, "meditating");
let codingTracker = new Tracker(codingStartDate, "coding");
