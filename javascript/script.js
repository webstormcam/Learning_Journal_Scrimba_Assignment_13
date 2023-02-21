const viewButton = document.getElementById('viewButton')
const hiddenItems = document.getElementsByClassName('hidden')
//// Just makes those extra blog posts visble on the smaller screen sizes
viewButton.addEventListener('click',function(){
    for(gridItem of hiddenItems){
        gridItem.style.display="block"
    }
})