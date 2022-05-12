let Slides = document.querySelectorAll(".slides");
function plusSlides(direction,current){
        let toAccess = (current+direction + 5)%5;
        console.log(toAccess);
        Slides[current].style.display = "none";
        Slides[toAccess].style.display = "block";
}
// console.log(Slides);
(document.querySelector(".prev")).addEventListener('click',function (){
    let currele;
    // console.log("hello");
    for(let i = 0; i<Slides.length ; i++)
    {
        if(Slides[i].style.display === "block" ){
        currele = i;
        break;
        }
    }
    plusSlides(-1,currele);
});
(document.querySelector(".next")).addEventListener('click',function (){
    let currele;
    // console.log("hello");
    for(let i = 0; i<Slides.length ; i++)
    {
        if(Slides[i].style.display === "block" ){
        currele = i;
        break;
        }
    }
    plusSlides(+1,currele);
});






/////////////////////////////////////
var movieTitle;    
var currentGenre = "Genre";


function showNoResultsText(totalcount){
        
        if(totalcount == 0){
                document.getElementById("no-results").style.display="block";
                console.log('totalcount in showNoResultsText' + totalcount);
        }
        else    {
                document.getElementById("no-results").style.display="none";
        }
        
}


        function updateResults() {
        var query = document.getElementsByClassName('search-query')[0].value.trim().toLowerCase(); 
        var counter = 0;                                                           

        if(currentGenre == 'All'|| currentGenre == 'Genre'){
                movieTitle = document.getElementsByClassName('movie-title');
        }
        if(currentGenre == 'Action'){
                movieTitle = document.getElementsByClassName('movies-action')[0].getElementsByClassName('movie-title');
        }
        if(currentGenre == 'Drama'){
                movieTitle = document.getElementsByClassName('movies-drama')[0].getElementsByClassName('movie-title');                                
        }
        if(currentGenre == 'Sci-Fi'){
                movieTitle = document.getElementsByClassName('movies-scifi')[0].getElementsByClassName('movie-title');                        
        }


        for(var name=0; name< movieTitle.length; name++){
            var compareMovieTitles = movieTitle[name].innerHTML.toLowerCase();
        
                if(compareMovieTitles.indexOf(query) === -1){
                        movieTitle[name].closest('div.media-carousel-movies').style.display="none";                                                        
                }
                else {
                        movieTitle[name].closest('div.media-carousel-movies').style.display="block";
                        counter++;
                }                    
        }

        showNoResultsText(counter);                
}

        function toggleGenreList() {
                document.getElementById("dropdown-content").classList.toggle("show");                        
        }
        window.onclick = function(e) {
                
                if (!e.target.matches('#dropbtn')) {                

                        var dropdownContent = document.getElementById("dropdown-content");
                
                        if (dropdownContent.classList.contains('show')) {
                                dropdownContent.classList.remove('show');
                        }
                }
        }

        function getMediaPosters(selectedGenre){
                var countMovies = 0; 
                var mediaCarouselMovies;            
                currentGenre = selectedGenre;                                              
                document.getElementById("genreText").innerHTML = selectedGenre;

                if(selectedGenre == 'All'){
                    document.getElementsByClassName('movies-action')[0].style.display="block";    
                    document.getElementsByClassName('movies-action')[0].style.display="block";
                    document.getElementsByClassName('movies-drama')[0].style.display="block";
                    document.getElementsByClassName('movies-scifi')[0].style.display="block";  
                    mediaCarouselMovies = document.getElementsByClassName("media-carousel-movies");                             
                }
                if(selectedGenre == 'Action'){
                    document.getElementsByClassName('movies-action')[0].style.display="block";
                    document.getElementsByClassName('movies-drama')[0].style.display="none";
                    document.getElementsByClassName('movies-scifi')[0].style.display="none";
                    mediaCarouselMovies = document.getElementsByClassName('movies-action')[0].getElementsByClassName("media-carousel-movies");                           
                }
                if(selectedGenre == 'Drama'){
                    document.getElementsByClassName('movies-action')[0].style.display="none";
                    document.getElementsByClassName('movies-drama')[0].style.display="block";                            
                    document.getElementsByClassName('movies-scifi')[0].style.display="none"; 
                    mediaCarouselMovies = document.getElementsByClassName('movies-drama')[0].getElementsByClassName("media-carousel-movies");                               
                }
                if(selectedGenre == 'Sci-Fi'){
                    document.getElementsByClassName('movies-action')[0].style.display="none";
                    document.getElementsByClassName('movies-drama')[0].style.display="none";
                    document.getElementsByClassName('movies-scifi')[0].style.display="block";
                    mediaCarouselMovies = document.getElementsByClassName('movies-scifi')[0].getElementsByClassName("media-carousel-movies");
                }                        

                
                        var mediaCarouselMoviesCount = mediaCarouselMovies.length;
                        
                        for(var count = 0; count<mediaCarouselMoviesCount; count++){
                                if(mediaCarouselMovies[count].style.display == "block")
                                        countMovies++;
                        }
                        console.log(countMovies);                                
                
                        showNoResultsText(countMovies);}