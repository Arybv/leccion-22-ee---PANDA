window.addEventListener("load",function){
  var cerrar = document.getElementsByClassName("cerrar");
  var origen = document.getElementById("origen");
  var extincion = document.getElementById("extincion");
  var restaurar = document.getElementById("restaurar");
  var restaurarOrigen = document.getElementById("restaurarOrigen");
  var restaurarExtincion = document.getElementById("restaurarExtincion");

function menu(){
  var menu1 = document.getElementById("origen");
    if (menu1.style.display === "none") {
      menu1.style.display = "block";
    }else {
      menu1.style.display="none"
    }
}

/*
  for(i=0; i<cerrar.length; i++){
    cerrar[i].addEventListener("click", function(){
      this.parentNode.style.display = "none";
    });
  }

  restaurar.addEventListener("click", function(){
    for (var i = 0; i < cerrar.length; i++) {
      cerrar[i].parentNode.style.display = "inline-block";
    }
  });

  origen.addEventListener("click", function(){
    restaurarOrigen.classList.toggle("ocultar");
  });

  extincion.addEventListener("click", function(){
    restaurarExtincion.classList.toggle("ocultar");
  });*/
});
