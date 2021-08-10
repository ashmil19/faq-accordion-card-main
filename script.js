
document.querySelectorAll(".summaryhvr").forEach(div =>{
    div.style.fontWeight = "400";
    div.addEventListener("click", () => {
        if(div.style.fontWeight === "400"){
            div.style.fontWeight = "800";
            div.style.color = "black";
            hoverOpen();
        }else{
            div.style.fontWeight = "400";
            div.style.color = "hsl(0, 0%, 38%)";
            hoverClose();
        }
    })
    function hoverOpen(){
        div.addEventListener("mouseover", function() {
            div.style.color = "hsl(14, 88%, 65%)";
        });
        
        div.addEventListener("mouseout", function() {
            div.style.color = "black"
        });
    }
    function hoverClose(){
        div.addEventListener("mouseover", function() {
            div.style.color = "hsl(14, 88%, 65%)";
        });
        
        div.addEventListener("mouseout", function() {
            div.style.color = "hsl(0, 0%, 38%)"
        });
    }
})

