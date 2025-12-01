document.getElementById('changeColorBtn').addEventListener('click', function() {
    const colors = ['#f4f4f4', '#ffebcd', '#d3f8e2', '#f9c6c9', '#c3bef0'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});

