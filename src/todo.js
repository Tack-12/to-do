import { formatDistanceToNowStrict, isPast } from "date-fns";

export const Todo = function (title, note, due) {

    const notedue = getDue(due);
    const priority = getPriority(due);

    return {
        title: title,
        note: note,
        due: notedue,
        priority: priority
    }


}


function getDue(due) {

    if (due.includes("-")) {
        if (!isPast(new Date(due))) {
            const due_date = formatDistanceToNowStrict(new Date(due), {
                unit: 'day',
                addSuffix: true
            });
            return due_date;
        }
        else {
            return "Past Due"
        }
    }
    else {
        return due
    }
}

function getPriority(due) {
    let days = getDue(due);
    let daysleft;
    if (days != "Past Due") {
        days = days.split(" ");
        daysleft = days[1];
    } else {
        return "red"
    }

    if (daysleft <= 2) {
        return "red"
    }
    else if (daysleft > 2 && daysleft <= 4) {
        return "yellow"
    }
    else {
        return "green"
    }

}


