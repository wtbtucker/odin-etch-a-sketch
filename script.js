let page_size;
const content = document.querySelector('.content');

const button = document.querySelector('.btn');
button.addEventListener('click', function(page_size) {
    do {
        page_size = Number(prompt("Please enter page size"));
    } while (!(page_size <= 100 && page_size > 0))
    make_grid(page_size);
    add_cell_shader();
    return;
});

function add_cell_shader() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.addEventListener('mouseover', function(e) {
            let shading = getComputedStyle(e.target).getPropertyValue("filter");
            const re = /\((.+)\)/; // extract the value within parentheses from filter attribute
            let brightness_value = shading.match(re)[1];
            let new_brightness_value = brightness_value - 0.1;
            e.target.style.filter = `brightness(${new_brightness_value})`;
        });
    });
}

function make_grid(page_size) {
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
    for (let i = 0; i < page_size; i++) {
        const column = document.createElement('div');
        column.classList.add('column');
        content.appendChild(column);
    }

    const column_containers = document.querySelectorAll('.column');
    column_containers.forEach((column_container) => {
        for (let j = 0; j < page_size; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            column_container.appendChild(cell);
        }
    });
    return;
}