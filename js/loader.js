$(document).ready(() => {
    loadAchievements()
    loadAwards()
    loadIPR()
    loadWorkShop()
    loadExperience()
    loadMyContent()
    loadImageGrid()
    loadCarousel()
});

function loadAchievements(){
    let ach=[]
    talks.forEach((item,index)=> {
        let elemId= "achievement-item-"+index
        ach.push(elemId);
        $("#achievement-list").append(`
            <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${"collapse-"+index}" aria-expanded="false" aria-controls="${"collapse-"+index}">
                    ${item.title}
                </button>
                </h2>
                <div id="${"collapse-"+index}" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#achievement-list">
                <ol class="accordion-body" style="margin:20px" id=${elemId}>
                    
                </ol>
                </div>
            </div 
        `);
    })
    ach.forEach((list,index)=>{
        let tag="#"+list;
        let elements = talks[index].list;
        elements.forEach((item,id)=>{
            $(tag).append(`<li>${item}</li>`)
        })
        
    })
}

function loadAwards(){
    let ach=[]
    award.forEach((item,index)=> {
        let elemId= "award-item-"+index
        ach.push(elemId);
        $("#award-list").append(`
            <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${"collapse-"+index}" aria-expanded="false" aria-controls="${"collapse-"+index}">
                    ${item.title}
                </button>
                </h2>
                <div id="${"collapse-"+index}" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#award-list">
                <ol class="accordion-body" style="margin:20px" id=${elemId}>
                </ol>
                </div>
            </div 
        `);
    })
    ach.forEach((list,index)=>{
        let tag="#"+list;
        let elements = award[index].list;
        elements.forEach((item,id)=>{
            $(tag).append(`<li>${item}</li>`)
        })
        
    })
}

function loadIPR(){
    let ach=[]
    ipr.forEach((item,index)=> {
        let elemId="ipr-item-"+index
        ach.push(elemId);
        $("#ipr-list").append(`
            <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${"collapse-"+index}" aria-expanded="false" aria-controls="${"collapse-"+index}">
                    ${item.title}
                </button>
                </h2>
                <div id="${"collapse-"+index}" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#ipr-list">
                <ol class="accordion-body" style="margin:20px" id=${elemId}>
                </ol>
                </div>
            </div 
        `);
    })
    ach.forEach((list,index)=>{
        let tag="#"+list;
        let elements = ipr[index].list;
        elements.forEach((item,id)=>{
            $(tag).append(`<li>${item}</li>`)
        })
        
    })
}

function loadWorkShop(){
    let ach=[]
    workshops.forEach((item,index)=> {
        let elemId= "workshop-item-"+index
        ach.push(elemId);
        $("#workshop-list").append(`
            <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${"collapse-"+index}" aria-expanded="false" aria-controls="${"collapse-"+index}">
                    ${item.title}
                </button>
                </h2>
                <div id="${"collapse-"+index}" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#workshop-list">
                <ol class="accordion-body" style="margin:20px" id=${elemId}>
                </ol>
                </div>
            </div 
        `);
    })
    ach.forEach((list,index)=>{
        let tag="#"+list;
        let elements = ipr[index].list;
        elements.forEach((item,id)=>{
            $(tag).append(`<li>${item}</li>`)
        })
        
    })
}

function loadExperience(){
    let ach=[]
    professionalExp.forEach((item,index)=> {
        let elemId= "exp-item-"+index
        ach.push(elemId);
        $("#exp-list").append(`
            <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#${"collapse-"+index}" aria-expanded="false" aria-controls="${"collapse-"+index}">
                    ${item.title}
                </button>
                </h2>
                <div id="${"collapse-"+index}" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#exp-list">
                <ol class="accordion-body" style="margin:20px" id=${elemId}>
                </ol>
                </div>
            </div 
        `);
    })
    ach.forEach((list,index)=>{
        let tag="#"+list;
        let elements = ipr[index].list;
        elements.forEach((item,id)=>{
            $(tag).append(`<li>${item}</li>`)
        })
        
    })
}

function loadMyContent(){
    contentVideos.forEach((video,index)=>{
        let elemId="video-"+index
        $('#video-content-container').append(
            `
            <div class="col" style="margin:20px;padding:0px" id=${elemId}>
                <div style="font-weight:bold;width:100%">
                    ${video.title}
                </div>
                <iframe class="video" src=${video.url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            
            </div>
            `
        )
    })
}

function loadImageGrid(){
    loadCol1()
    loadCol2()
    loadCol3()
}   

function loadCol1(){
    imageGridCol1.forEach((image,index)=>{
        $('#img-grid-col-1').append(
            `
            <img class="gallery-img" src="${image.url}">
            `
        )
    })
}
function loadCol2(){
    imageGridCol2.forEach((image,index)=>{
        $('#img-grid-col-2').append(
            `
            <img class="gallery-img" src="${image.url}">
            `
        )
    })
}
function loadCol3(){
    imageGridCol3.forEach((image,index)=>{
        $('#img-grid-col-3').append(
            `
            <img class="gallery-img" src="${image.url}">
            `
        )
    })
}

function loadCarousel(){
    // carouselContent.map((slide,index)=>{
    //     $('#carousel-indicators').append(
    //         `
    //         <li data-target="#myCarousel" data-slide-to="${index}"></li>
    //         `
    //     )
    // })

    carouselContent.map((slide,index)=>{
        if(index===0){
            $('#carousel-inner').append(
                `
                    <div class="item active">
                        <img class="slide" src=${slide.url}>
                        <div class="carousel-caption">
                            <div class="caption-color">
                                ${slide.description}	
                            <p>${slide.meta}</p>
                            </div>
                        </div>
                    </div>
                `
            )
        }else{
            $('#carousel-inner').append(
                `
                    <div class="item">
                        <img class="slide" src=${slide.url}>
                        <div class="carousel-caption">
                            <div class="caption-color">
                                ${slide.description}	
                            <p>${slide.meta}</p>
                            </div>
                        </div>
                    </div>
                `
            )    
        }
    })

    $('myCarousel').addClass("carousel slide")
}