// Phase 10..... better known as Jim Rummy
// the purpose of this project is to create a web link to randomize the number of phases and afterward, what each phase is
//V1 just get a random generator for number of phases and goals per phase
//V2 allow user to enter number of players and what phase each one is at along with score keeper 
//thoughts about having general game night score keeper app?

//Defining Variables
let goal_options = ["Run of 3", "Run of 4", "Run of 5", "Run of 6", "Run of Same Color 3", "Run of Same Color 4", "Run of Same Color 5",
    "Same Color 4", "Same Color 5", "Same Color 6", "Same Color 7", "Same Number 3", "Same Number 4",
    "Even Numbers 3", "Even Numbers 4", "Even Numbers 5", "Even Numbers 6", "Even Numbers 7", "Even Numbers 8",
    "Odd Numbers 3", "Odd Numbers 4", "Odd Numbers 5", "Odd Numbers 6", "Odd Numbers 7", "Odd Numbers 8"]
let num_of_goal_options = goal_options.length;
console.log("the number of options for the phase is " + num_of_goal_options);
let phase_goals = [];

let num_of_phase_options = [1, 2, 3, 4, 5]
console.log("there can be a total up to " + num_of_phase_options.length + " phases for a game of Phase10");

function get_ran_num(min, max) {
    ran_num = Math.round(Math.random() * (max - min)) + min;
    //console.log("the random number is " + ran_num);
    return ran_num;
}

function get_num_of_phase() {
    get_ran_num(1, num_of_phase_options.length);
    num_of_phase = ran_num;
    console.log("the number of phases for this game of Phase 10 will be " + num_of_phase);
    return num_of_phase;
}

function get_goals_for_phases() {
    if (num_of_phase = 1) {
        get_ran_num(1, goal_options.length);
        phase_goals[0] = goal_options[ran_num];
        console.log("the phase 1 goal is number " + ran_num + " which is " + phase_goals[0]);
        return phase_goals;
    }
    else if (num_of_phase = 2) {
        get_ran_num(1, goal_options.length);
        phase_goals[0] = goal_options[ran_num];
        console.log("the phase 1 goal is " + phase_goals[0]);
        get_ran_num(1, goal_options.length);
        phase_goals[1] = goal_options[ran_num];
        console.log("the phase 2 goal is " + phase_goals[1]);
        return phase_goals;
    }
    else if (num_of_phase = 3) {
        get_ran_num(1, goal_options.length);
        phase_goals[0] = goal_options[ran_num];
        console.log("the phase 1 goal is " + phase_goals[0]);
        get_ran_num(1, goal_options.length);
        phase_goals[1] = goal_options[ran_num];
        console.log("the phase 2 goal is " + phase_goals[1]);
        get_ran_num(1, goal_options.length);
        phase_goals[2] = goal_options[ran_num];
        console.log("the phase 3 goal is " + phase_goals[2]);
        return phase_goals;
    }
    else if (num_of_phase = 4) {
        get_ran_num(1, goal_options.length);
        phase_goals[0] = goal_options[ran_num];
        console.log("the phase 1 goal is " + phase_goals[0]);
        get_ran_num(1, goal_options.length);
        phase_goals[1] = goal_options[ran_num];
        console.log("the phase 2 goal is " + phase_goals[1]);
        get_ran_num(1, goal_options.length);
        phase_goals[2] = goal_options[ran_num];
        console.log("the phase 3 goal is " + phase_goals[2]);
        get_ran_num(1, goal_options.length);
        phase_goals[3] = goal_options[ran_num];
        console.log("the phase 4 goal is " + phase_goals[3]);
        return phase_goals;
    }
    else { //num of phases must be 5
        get_ran_num(1, goal_options.length);
        phase_goals[0] = goal_options[ran_num];
        console.log("the phase 1 goal is " + phase_goals[0]);
        get_ran_num(1, goal_options.length);
        phase_goals[1] = goal_options[ran_num];
        console.log("the phase 2 goal is " + phase_goals[1]);
        get_ran_num(1, goal_options.length);
        phase_goals[2] = goal_options[ran_num];
        console.log("the phase 3 goal is " + phase_goals[2]);
        get_ran_num(1, goal_options.length);
        phase_goals[3] = goal_options[ran_num];
        console.log("the phase 4 goal is " + phase_goals[3]);
        get_ran_num(1, goal_options.length);
        phase_goals[4] = goal_options[ran_num];
        console.log("the phase 5 goal is " + phase_goals[4]);
        return phase_goals;
    }
}

//app Main
get_num_of_phase();
get_goals_for_phases(); // figure out if statement - always getting phase 1 scenario
