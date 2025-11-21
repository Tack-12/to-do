import { formatDistanceToNowStrict, isPast } from "date-fns";

export class Todo {
    constructor(title, note, due) {
        this.title = title;
        this.note = note;
        this.due = getDue(due);
        this.priority = getPriority(due);
    }

    getTodo(){
        return { title : this.title,
            note: this.note,
            due: this.due,
            priority: this.priority
        }
    }
}


function getDue(due) {

    if (!isPast(new Date(due))) {
        const due_date = formatDistanceToNowStrict(new Date(due), {
            unit: 'day',
            addSuffix: true
        });
        return due_date;
    }
    else{
        return "Past Due"
    }
}

function getPriority(due){
    let days = getDue(due);
    let daysleft;
    if( days != "Past Due"){
        days = days.split(" ");
        daysleft = days[1];
    }else{
        return "RED"
    }

    if (daysleft <=2){
        return "RED"
    }
    else if(daysleft >2 && daysleft <=4){
        return "YELLOW"
    }
    else{
        return "GREEN"
    }
    
}


