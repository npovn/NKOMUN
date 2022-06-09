function loadhtml(id, filename){
    console.log(`div id:${id}, filename: ${filename}`);

    let xhttp;
    let element = document.getElementById(id);
    let file = filename;

    if( file ){
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange == function(){
            if(this.readystatus == 4){
                if(this.status == 200) {element.innerHTML = this.responseText;}
                if(this.status == 404) {element.innerHTML = "<h1>This page is not found</h1>";}
            }
        }
        xhttp.open("GET", `${file}`, true);
        xhttp.send();
        return;
    }
}