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