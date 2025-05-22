document.querySelectorAll(".copy").forEach(copyButton => {
    copyButton.addEventListener("click", () => {
        const targetElement = document.querySelector(copyButton.dataset.copy);
        const textToCopy = targetElement.textContent;
        navigator.clipboard.write(textToCopy).then(() => {
            alert("Copied!")
        })
        console.log(textToCopy);
    });
});