const imagePreview=document.getElementById("img-preview");
const picture=document.getElementById("picture");
const mainForm=document.getElementById("mainForm");

const idCard=document.getElementById("id-card");
const hiddenH3=document.getElementById("hiddenH3");
const idCardImg=document.getElementById("id-card-img");
const studentNameGenerated=document.getElementById("student-name-generated");
const collegeNameGenerated=document.getElementById("college-name-generated");
const locationNameGenerated=document.getElementById("location-name-generated");

picture.addEventListener("change",function(){
    getImgData();
});

function getImgData(){
    const files=picture.files[0];
    if(files){
        const fileReader=new FileReader();
        fileReader.readAsDataURL(files);
        fileReader.addEventListener("load",function(){
            imagePreview.style.display="block";
            imagePreview.innerHTML='<img src="' + this.result + '"/>';
        });
    }
}

mainForm.addEventListener("submit",function(e){
    e.preventDefault();
    const arr=[...(new FormData(e.target).entries())];
    const name=arr[0];
    const collegeName=arr[1];
    const location=arr[2];
    const pic=arr[3];

    const fileReader=new FileReader();
    fileReader.readAsDataURL(pic[1]);
    fileReader.addEventListener("load",function(){
        idCardImg.innerHTML='<img src="' + this.result + '"/>';
    });

    studentNameGenerated.innerHTML=name[1];
    collegeNameGenerated.innerHTML=collegeName[1];
    locationNameGenerated.innerHTML=location[1];

    idCard.style.visibility="visible";
    hiddenH3.style.visibility="visible";
    
})