document.addEventListener('DOMContentLoaded', () => {
    const items = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' }
    ];

    const container1 = document.querySelector('.container-1');

    items.forEach((item) => {
        const div = document.createElement('div');
        div.textContent = item.name;
        div.classList.add('item');
        div.setAttribute('draggable', true);
        div.setAttribute('id', `item-${item.id}`);
        container1.appendChild(div);
    });

    document.addEventListener('dragstart', (e) => {
        if (e.target.classList.contains('item')) {
            e.dataTransfer.setData('text/plain', e.target.id);
        }
    });

    document.addEventListener('dragover', (e) => {
        if (e.target.classList.contains('container-1') || e.target.classList.contains('container-2')) {
            e.preventDefault();
        }
    });

    document.addEventListener('drop', (e) => {
        if (e.target.classList.contains('container-1') || e.target.classList.contains('container-2')) {
            e.preventDefault();
            const id = e.dataTransfer.getData('text/plain');
            const draggableElement = document.getElementById(id);
            e.target.appendChild(draggableElement);
            e.dataTransfer.clearData();
        }
    });
});


/*
1. Create HTML Structure: Define containers and items in index.html.
2. Style with CSS: Style containers and items in style.css.
3. Initialize Items: Create an array of items and append them to the container in index.js.
4. Add Event Listeners: Use dragstart, dragover, and drop events in index.js.
5. Set Data on Drag Start: Use e.dataTransfer.setData to store the item ID during the dragstart event.
6. Get Data on Drop: Use e.dataTransfer.getData to retrieve the item ID during the drop event and append the item to the target container.
*/