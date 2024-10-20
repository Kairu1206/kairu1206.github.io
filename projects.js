function collect_project_1() {
    document.getElementById('project-1').src = "chestIconOpen.png";
    document.getElementById('button-project-1').disabled = true;
    localStorage.setItem('project1', 'true');
    let curr_project_item = localStorage.getItem('curr_project_item');
    curr_project_item++;
    localStorage.setItem('curr_project_item', curr_project_item);
}

function checkProjectGameState() {
    const project1 = localStorage.getItem('project1');
    if (project1 != null) {
        if (project1 === 'true') {
            document.getElementById('project-1').src = "chestIconOpen.png";
            document.getElementById('button-project-1').disabled = true;
        } else {
            document.getElementById('project-1').src = "chestIcon.png";
            document.getElementById('button-project-1').disabled = false;
        }
    } else {
        document.getElementById('project-1').src = "chestIcon.png";
        document.getElementById('button-project-1').disabled = false;
    }
    
}

function toggleDescription(desc_id, arrow_id) {
    const desc = document.getElementById(desc_id);
    const arrow_icon = document.getElementById(arrow_id);
    if (desc.style.display === "block") {
        desc.style.display = "none";
        arrow_icon.src = "side_arrow.png";
    } else {
        desc.style.display = "block";
        arrow_icon.src = "down_arrow.png";
    }
}

// Function to load the GBA ROM when Start is clicked
function loadGBA(event) {
    event.stopPropagation();
    try {
        EJS_emulator = new EJS({
            gameUrl: './App.gba',  // Replace with the relative path to your .GBA file
            system: 'gba',
            width: 480,
            height: 320,
            target: '#emulator-container'  // The div where the emulator will load
        });
        EJS_emulator.start();  // Start the emulator
    } catch (error) {
        console.error("Failed to load GBA: ", error);
        alert("Could not load the game. Please try again.");
    }
}

window.onload = checkProjectGameState;