let buttonStatus = ""
if (buttonStatus == "enabled") {
    console.log("Execute clickBtn()");
} else if (buttonStatus == "disabled") {
    console.log("Execute fillForm()");
} else {
    console.log("Button has another status")
}


switch (buttonStatus) {
    case "enabled";
    console.log("Execute clickBtn()");
    break;

    case "disabled";
    console.log("Execute fillForm()");
    break;

    default;
    console.log("Button has another status");
}