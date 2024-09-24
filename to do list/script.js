// Wait for the DOM to be loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get the buttons and the container
    const addButton = document.getElementById("addButton");
    const removeButton = document.getElementById("removeButton");
    const listContainer = document.getElementById("listContainer");

    // Function to add a new box
    function addNewBox() {
        // Create a new column div
        const newColumn = document.createElement("div");
        newColumn.classList.add("column");

        // Create a new item wrapper div
        const newItemWrapper = document.createElement("div");
        newItemWrapper.classList.add("item-wrapper");

        // Create a new checkbox input (hidden)
        const newCheckbox = document.createElement("input");
        newCheckbox.type = "checkbox";
        newCheckbox.classList.add("checkbox");

        // Create a new custom checkbox span
        const newCustomCheckbox = document.createElement("span");
        newCustomCheckbox.classList.add("custom-checkbox");

        // Add event listener to toggle the checkbox on custom checkbox click
        newCustomCheckbox.addEventListener("click", function() {
            newCheckbox.checked = !newCheckbox.checked; // Toggle the hidden checkbox state
            completeBox(newCheckbox); // Call the completeBox function to handle the style changes
        });

        // Create a new box div
        const newBox = document.createElement("div");
        newBox.classList.add("box");
        newBox.setAttribute("contenteditable", "true"); // Make it editable
        newBox.textContent = "New Item"; // Default text

        // Append the checkbox and box to the item wrapper
        newItemWrapper.appendChild(newCheckbox); // Add the hidden checkbox
        newItemWrapper.appendChild(newCustomCheckbox); // Add the custom checkbox
        newItemWrapper.appendChild(newBox); // Add the editable box

        // Append the item wrapper to the column
        newColumn.appendChild(newItemWrapper);

        // Add the new column to the container (append it at the end)
        listContainer.appendChild(newColumn);
    }

    // Add event listener to the add button
    addButton.addEventListener("click", addNewBox);

    // Function to remove the last box
    function removeLastBox() {
        // Get the last column
        const lastColumn = listContainer.lastElementChild;
        // Check if there is a column to remove
        if (lastColumn) {
            // Remove the last column
            listContainer.removeChild(lastColumn);
        }
    }

    // Add event listener to the remove button
    removeButton.addEventListener("click", removeLastBox);

    // Function to complete a box (add checked styles)
    function completeBox(checkbox) {
        const box = checkbox.parentElement.querySelector(".box");
        if (checkbox.checked) {
            box.style.textDecoration = "line-through"; // Add strikethrough to text when completed
            box.style.color = "#888"; // Change color to indicate completion
        } else {
            box.style.textDecoration = "none"; // Remove strikethrough when unchecked
            box.style.color = "#000"; // Reset color
        }
    }
});
