const input = document.getElementById('Input');
const icon = document.getElementById('icon');
const image = document.getElementById('Image');

icon.addEventListener('click', function(){
  input.click()
})

input.addEventListener('change', function(event){
    var file = event.target.files[0]
    if(file){
      var rider = new FileReader();
      rider.onload = function(){
       image.src = rider.result;
      }
      rider.readAsDataURL(file);
    }
})