class Tracker{
    constructor(activity, startDate){
        this.startDate = startDate;
        this.activity = activity;
    };

    getStreak(){
        return Math.ceil(((Date.now() - this.startDate)/1000/60/60/24))
    }

    getStatement(){
        return `${this.getStreak()} consecutive days of ${this.activity}.`
    }
}

const streaks = [
    {activity: "working out", date: new Date(2017, 11, 20)},
    {activity: "eating keto without cheating", date: new Date(2016, 11, 17)},
    {activity: "math", date: new Date(2019, 3, 24)},
    {activity: "meditating", date: new Date(2019, 2, 18)},
    {activity: "coding", date: new Date(2019, 0, 1)},
    {activity: "no caffeine", date: new Date(2019, 6, 8)},
    {activity: "getting to bed by 11pm", date: new Date(2019, 6, 20)}, //start 19/20th, broke this on aug 9/10
    {activity: "food tracking", date: new Date(2018, 3, 7)}
]


streaks.forEach(
    (el)=>{
        el.tracker = new Tracker(el.activity, el.date)
    }
);
  
streaks.sort((a,b)=>(b.tracker.getStreak()-a.tracker.getStreak()))