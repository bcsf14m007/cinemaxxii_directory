
    addEventListener("load", function() {
        setTimeout(hideURLbar, 0);
    }, false);

    function hideURLbar() {
        window.scrollTo(0, 1);
    }

    $(window).load(function() {

        $("#flexiselDemo2").flexisel({
            visibleItems: 4,
            animationSpeed: 1000,
            autoPlay: true,
            autoPlaySpeed: 3000,
            pauseOnHover: false,
            enableResponsiveBreakpoints: true,
            responsiveBreakpoints: {
                portrait: {
                    changePoint: 480,
                    visibleItems: 2
                },
                landscape: {
                    changePoint: 640,
                    visibleItems: 3
                },
                tablet: {
                    changePoint: 768,
                    visibleItems: 3
                }
            }
        });
    });

    var startdelay 		= 2; 		// START SCROLLING DELAY IN SECONDS
    var scrollspeed		= 1.0;		// ADJUST SCROLL SPEED
    var scrollwind		= 1;		// FRAME START ADJUST
    var speedjump		= 30;		// ADJUST SCROLL JUMPING = RANGE 20 TO 40
    var nextdelay		= 0; 		// SECOND SCROLL DELAY IN SECONDS 0 = QUICKEST
    var topspace		= "2px";	// TOP SPACING FIRST TIME SCROLLING
    var frameheight		= 176;		// IF YOU RESIZE THE CSS HEIGHT, EDIT THIS HEIGHT TO MATCH


    current = (scrollspeed);


    function HeightData(){
        AreaHeight=dataobj.offsetHeight
        if (AreaHeight===0){
            setTimeout("HeightData()",( startdelay * 1000 ))
        }
        else {
            ScrollNewsDiv()
        }}

    function NewsScrollStart(){
        dataobj=document.all? document.all.NewsDiv : document.getElementById("NewsDiv")
        dataobj.style.top=topspace
        setTimeout("HeightData()",( startdelay * 1000 ))
    }

    function ScrollNewsDiv(){
        dataobj.style.top=scrollwind+'px';
        scrollwind-=scrollspeed;
        if (parseInt(dataobj.style.top)<AreaHeight*(-1)) {
            dataobj.style.top=frameheight+'px';
            scrollwind=frameheight;
            setTimeout("ScrollNewsDiv()",( nextdelay * 1000 ))
        }
        else {
            setTimeout("ScrollNewsDiv()",speedjump)
        }}