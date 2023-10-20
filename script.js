document.addEventListener("DOMContentLoaded", function() {
    const codeTextarea = document.getElementById("code");
    const copyButton = document.getElementById("copy-button");
    const lockButton = document.getElementById("lock-button");

    let isLocked = false;

    copyButton.addEventListener("click", function() {
        codeTextarea.select();
        document.execCommand("copy");
    });

    lockButton.addEventListener("click", function() {
        isLocked = !isLocked;
        codeTextarea.readOnly = isLocked;
        lockButton.textContent = isLocked ? "Unlock" : "Lock";
    });
});
