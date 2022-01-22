
window.onload = function(){
    let map = document.getElementById("map");
    let rx = Math.floor(Math.random()*(map.widnt + 1));
    let ry = Math.floor(Math.random()*(map.height + 1));
    let treasure = {
        x: rx,
        y: ry,
    };
    map = document.getElementById("map");
    map.onmousemove = showCoords;

    function showCoords(event){
        let coords = document.getElementById("coords");
        let x = event.offsetX;
        let y = event.offsetY;
        coords.value = `Координаты: ${x}, ${y}`;
        if(Math.abs(x-treasure.x)<30&&Math.abs(y-treasure.y)<30){
            alert("Сокровище здесь!");
        }
        else if(Math.abs(x-treasure.x)<200&&Math.abs(y-treasure.y)<200)
        {
            alert("Горячо!");
        }
        
    }
}
