const checkbox = document.querySelectorAll("input[type='checkbox']");

checkbox.forEach((a) => {
    a.addEventListener("click", () => {
        if (a.checked) {
            checkbox.forEach((other) => {
                if (other !== a) {
                    other.checked = false;
                }
            })
        }
    })
})