function superbowlWin(record){
    //search through record for index of "w"
    //return the year of that indexed value

    //const year = record.indexOf("W");
    //console.log(year);
    //return record[year];
    let win = record.find(recYear => recYear.result == "W")
    return !!win ? win.year : undefined;
}


let win = record.find(record => record === "W")