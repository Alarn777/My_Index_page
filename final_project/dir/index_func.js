
let newEvent = class {
    constructor(eventNumber,dateAdded,location,fixImprove,confirmedBy) {
        this.eventNumber_ = eventNumber;
        this.dateAdded_ = dateAdded;
        this.location_ = location;
        this.fixImprove_ = fixImprove;
        this.confirmedBy_ = confirmedBy;
    }

};

let demoEvent = new newEvent(1,"12/12/1231","Shenkar","Fix",55);

function myFunction()
{
    if (document.getElementById('search_button').onclick) {
        let input_string = document.getElementById("search").value;
        alert(input_string);

    }
}
function addItem(){
    if (document.getElementById('create').onclick) {
        let newDiv = document.createElement("div");        // Create a <div> element
        let eventNum = document.createElement("p",);
        eventNum.innerHTML = demoEvent.eventNumber_;
        let date  = document.createElement("p",);
        date.innerHTML = demoEvent.dateAdded_;
        let location = document.createElement("p",);
        location.innerHTML = demoEvent.location_;
        let fix_improve  = document.createElement("p",);
        fix_improve.innerHTML = demoEvent.fixImprove_;
        let confirmed_by  = document.createElement("p",);
        confirmed_by.innerHTML = demoEvent.confirmedBy_;
        newDiv.appendChild(eventNum);
        newDiv.appendChild(location);
        newDiv.appendChild(date);
        newDiv.appendChild(fix_improve);
        newDiv.appendChild(confirmed_by);
        newDiv.className = "eventAdded";
        let openButton = document.createElement("button");
        openButton.innerHTML = '<img src="images/icons/open_event.png" />';
        openButton.className = "eventButtons";
        newDiv.appendChild(openButton);
        let eventButton = document.createElement("button");
        eventButton.innerHTML = '<img src="images/icons/event_in_new_tab.png" />';
        eventButton.className = "eventButtons";
        newDiv.appendChild(eventButton);
        let closeEventButton = document.createElement("button");
        closeEventButton.innerHTML = '<img src="images/icons/check.png" />';
        closeEventButton.className = "eventButtons";
        newDiv.appendChild(closeEventButton);
        let deleteEventButton = document.createElement("button");
        deleteEventButton.innerHTML = '<img src="images/icons/delete.png" />';
        deleteEventButton.className = "eventButtons";
        newDiv.appendChild(deleteEventButton);

        document.body.appendChild(newDiv);

    }
}

function removeItem(){
    let ul = document.getElementById("dynamic-list");
    let candidate = document.getElementById("candidate");
    let item = document.getElementById(candidate.value);
    ul.removeChild(item);
}