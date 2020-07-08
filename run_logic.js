function setLabel() {
    if (run) {
        document.getElementById("run").innerHTML = "STOP";
        return;
    }
    document.getElementById("run").innerHTML = "RUN";

}


function run_logic() {
    run = !run;
    setLabel();
}