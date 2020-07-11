function setLabel() {
    if (states.run) {
        document.getElementById("run").innerHTML = "STOP";
        return;
    }
    document.getElementById("run").innerHTML = "RUN";

}


function run_logic() {
    states.run = !states.run;
    setLabel();
}