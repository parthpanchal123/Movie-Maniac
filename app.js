
var request = new XMLHttpRequest()
var btn,url,movie_name,key;
key = globalVariable.key ;  
btn=document.getElementById("btn_go");
movie_name=document.getElementById("text_movie_name").value;
btn.addEventListener("click",getInfo);

function getInfo(){

    movie_name=document.getElementById("text_movie_name").value;
  
    url = `http://www.omdbapi.com/?apikey=${key}&t=${movie_name}` ;
    
    if(movie_name == ""){
        alert("Please enter a valid Movie!");
    }
  
  else {

    request.onreadystatechange = function(){

        p = document.getElementById("demo");
        if(this.readyState == 4 && this.status == 200 ){
            var data = JSON.parse(this.response);
            console.log(data);

            if (data['Response'] === "False"){
                alert("Sorry , couldnt find that movie");
            }
        
            var text="" ;
            for (item in data) {

                if (item === "Ratings" || item === "Poster") {
                    continue;
                }
                else {
                text += "<strong>"+item+"</strong>" + " : " + data[item]+"<u></u>"+"</br>" ;
                }
              }

              document.querySelector(".display_info").style.visibility = "visible";
              p.innerHTML = text ;
              
            
        }
    }
  }

url = `https://www.omdbapi.com/?apikey=${key}&t=${movie_name}` ;

request.open("GET",url,true);
request.send();


}



