console.log("script is running");
const listContainer = document.getElementById("list-container");

listContainer.addEventListener('click', (e) => {
    const clickedElement = e.target;

    // Check if the clicked element is an <li> or a <p>
    if (clickedElement.tagName === "LI" || clickedElement.tagName === "P") {
        // Toggle the 'checked' class on the parent <li> element
        const listItem = clickedElement.closest('li');
        listItem.classList.toggle('checked');
        
        // Toggle the 'checked' class on the pseudo-element
        const beforeElement = listItem.querySelector('ul li.task>p:before');
        beforeElement.classList.toggle('checked');
    }
});
