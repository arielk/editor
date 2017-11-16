// Add bubble
var bubbleDOM = document.createElement('div');
bubbleDOM.classList.add('selection_bubble');
document.body.appendChild(bubbleDOM);

var topSearchBar = document.createElement('input');
topSearchBar.setAttribute("type", "text");
topSearchBar.setAttribute("placeholder", "Search");
topSearchBar.classList.add('bubbleTopSearchBar');
bubbleDOM.appendChild(topSearchBar);

var bubbleBody = document.createElement('div');
bubbleBody.classList.add('bubbleBody');
bubbleDOM.appendChild(bubbleBody);

var anchorsBar = document.createElement('div');
anchorsBar.classList.add('bubbleAnchors');
bubbleDOM.appendChild(anchorsBar);


var selection = '';

function showBubble(e) {
    selection = (document.all) ? document.selection.createRange().text : document.getSelection();
    renderBubble(e.clientX, e.clientY, selection);
}
function resetBubble(e) {
    topSearchBar.value = '';
}

document.onmousedown = resetBubble;
document.onmouseup = showBubble;

if (!document.all) {
    document.captureEvents(Event.MOUSEUP);
}

// Move that bubble to the appropriate location.
function renderBubble(mouseX, mouseY, selection) {
    bubbleBody.innerHTML = selection;
    bubbleDOM.style.top = mouseY + 'px';
    bubbleDOM.style.left = mouseX + 'px';
    bubbleDOM.style.display = 'block';
}