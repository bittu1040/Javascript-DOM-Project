const parent = document.getElementById('parent');
const card = document.getElementById('card');
const link = document.getElementById('link');

parent.addEventListener('click', (e) => {
    console.log('Parent div clicked');
});

card.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevents the event from bubbling up to parent
    console.log('Card clicked');
});

// Link handler with preventDefault and stopPropagation
link.addEventListener('click', (e) => {
    e.preventDefault(); // Prevents the default browser behavior (navigation)
    e.stopPropagation(); // Stops event from reaching the card and parent div
    console.log('Link clicked');
});


const testLink= document.getElementById('testLink');
testLink.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('testLink clicked');
});
