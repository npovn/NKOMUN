function infoGallery1(folder, name, description) {
    document.getElementById("gallery").innerHTML +=
        `<div id="gallery-pop" class="gallery-pop">
        <div class="gallery-popback" onclick=closeGallery()></div>
        <div class="info-box">
            <h2>${name}</h2>
            <p>${description}</p>
            <div class="table">
                <div class="img-title">
                    <img src="${folder + 'Chủ tọa_Chairs.JPG'}" alt="">
                    <h2>Chairs</h2>
                </div>
                <div class="img-title">
                    <img src="${folder + 'Đại biểu_Delegates.JPG'}" alt="">
                    <h2>Delegates</h2>
                </div>
                <div class="img-title">
                    <img src="${folder + 'Quan sát viên_Observers.JPG'}" alt="">
                    <h2>Observers</h2>
                </div>
            </div>
        <div>
    </div>`;
}
function infoGallery2(folder, name, description) {
    document.getElementById("gallery").innerHTML +=
        `<div id="gallery-pop" class="gallery-pop">
        <div class="gallery-popback" onclick=closeGallery()></div>
        <div class="info-box">
            <h2>${name}</h2>
            <p>${description}</p>
            <div class="table">
                <div class="img-title">
                    <img src="${folder + 'Chủ tọa_Chairs.JPG'}" alt="">
                    <h2>Chủ tọa</h2>
                </div>
                <div class="img-title">
                    <img src="${folder + 'Đại biểu_Delegates.JPG'}" alt="">
                    <h2>Đại biểu</h2>
                </div>
                <div class="img-title">
                    <img src="${folder + 'Quan sát viên_Observers.JPG'}" alt="">
                    <h2>Quan sát viên</h2>
                </div>
            </div>
        <div>
    </div>`;
}
function closeGallery() {
    document.getElementById("gallery").removeChild(document.getElementById("gallery-pop"));
}