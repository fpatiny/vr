document.getElementById("#Button").addEventListener("click", () => {
    toggleLight("topLight", 0.5, 0.1);
});

function toggleLight(lightID, intensityOn, intensityOff) {
    const light = document.getElementById(lightID);
    const currentState = Boolean(light.getAttribute("visible"));
    const newState = !currentState;
    light.setAttribute("visible", String(newState));
    const color = "white";
    if (newState) {
        light.setAttribute(
            "light",
            "type: spot; color: " + color + "; intensity: " + intensityOn
        );
    } else {
        light.setAttribute(
            "light",
            "type: spot; color: " + color + "; intensity: " + intensityOff
        );
    }
}