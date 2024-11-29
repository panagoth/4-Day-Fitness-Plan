const workoutDetails = {
    monday: [
        "Back Squats: 5x5 (75-85% 1RM)",
        "Romanian Deadlifts: 4x8",
        "Bulgarian Split Squats: 3x12 per leg",
        "Standing Calf Raises: 3x15-20"
    ],
    tuesday: [
        "Flat Bench Press: 4x8",
        "Incline Dumbbell Press: 3x12",
        "Pull-Ups: 4x10-12",
        "Dumbbell Lateral Raises: 3x15",
        "Barbell Biceps Curls: 3x12"
    ],
    thursday: [
        "Bench Press: 5x5 (75-85% 1RM)",
        "Overhead Press: 4x6",
        "Barbell Rows: 4x8",
        "Dumbbell Shrugs: 3x12-15",
        "Plank Hold: 3x1 minute"
    ],
    friday: [
        "Deadlifts: 4x5 (75-85% 1RM)",
        "Front Squats: 3x10",
        "Leg Press: 4x12",
        "Hamstring Curls: 3x15",
        "Ab Rollouts: 3x12"
    ]
};

function showDetails(day) {
    const detailsDiv = document.getElementById('details');
    const title = document.getElementById('day-title');
    const detailsList = document.getElementById('day-details');

    title.innerText = `${day.charAt(0).toUpperCase() + day.slice(1)} Workout`;
    detailsList.innerHTML = workoutDetails[day]
        .map(item => `<li>${item}</li>`)
        .join('');
    
    detailsDiv.classList.remove('hidden');
}

function hideDetails() {
    const detailsDiv = document.getElementById('details');
    detailsDiv.classList.add('hidden');
}
