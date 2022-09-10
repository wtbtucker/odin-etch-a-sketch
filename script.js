// TODO: create 16 x 16 square of divs inside of container div
// createElement 16 containers within the main container
    // set the class = column for these

const container = document.querySelector('.container');
for (let i = 0; i < 16; i++) {
    const column = document.createElement('div');
    column.classList.add('column');
    container.appendChild(column);
}


const column_containers = document.querySelectorAll('.column');
column_containers.forEach((column_container) => {
    for (let j = 0; j < 16; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        column_container.appendChild(cell);
    }
});
// each of those containers has 16 div children
    // set class = row for these

// CSS main div container
    //
    // flex-direction: column for these