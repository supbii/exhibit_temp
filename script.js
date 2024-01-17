document.addEventListener('DOMContentLoaded', function() {
    var celloStandby = document.getElementById('cellostandby');
    var celloPlay1 = document.getElementById('celloplay1');
    var celloPlay2 = document.getElementById('celloplay2');
    var celloMusic = document.getElementById('celloMusic');
    var celloTimerId;

    var flStandby = document.getElementById('flstandby');
    var flPlay1 = document.getElementById('flplay1');
    var flPlay2 = document.getElementById('flplay2');
    var flMusic = document.getElementById('flMusic');
    var flTimerId;

    var ukuStandby = document.getElementById('ukustandby');
    var ukuPlay1 = document.getElementById('ukuplay1');
    var ukuPlay2 = document.getElementById('ukuplay2');
    var ukuMusic = document.getElementById('ukuMusic');
    var ukuTimerId;

    var djbStandby = document.getElementById('djbstandby');
    var djbPlay1 = document.getElementById('djbplay1');
    var djbPlay2 = document.getElementById('djbplay2');
    var djbMusic = document.getElementById('djbMusic');
    var djbTimerId;

    var drStandby = document.getElementById('drstandby');
    var drPlay1 = document.getElementById('drplay1');
    var drPlay2 = document.getElementById('drplay2');
    var drMusic = document.getElementById('drMusic');
    var drTimerId;

    var vnStandby = document.getElementById('vnstandby');
    var vnPlay1 = document.getElementById('vnplay1');
    var vnPlay2 = document.getElementById('vnplay2');
    var vnMusic = document.getElementById('vnMusic');
    var vnTimerId;

    var trbStandby = document.getElementById('trbstandby');
    var trbPlay1 = document.getElementById('trbplay1');
    var trbPlay2 = document.getElementById('trbplay2');
    var trbMusic = document.getElementById('trbMusic');
    var trbTimerId;

    var gtrStandby = document.getElementById('gtrstandby');
    var gtrPlay1 = document.getElementById('gtrplay1');
    var gtrPlay2 = document.getElementById('gtrplay2');
    var gtrMusic = document.getElementById('gtrMusic');
    var gtrTimerId;

    var pfStandby = document.getElementById('pfstandby');
    var pfPlay1 = document.getElementById('pfplay1');
    var pfPlay2 = document.getElementById('pfplay2');
    var pfMusic = document.getElementById('pfMusic');
    var pfTimerId;

    var cbStandby = document.getElementById('cbstandby');
    var cbPlay1 = document.getElementById('cbplay1');
    var cbPlay2 = document.getElementById('cbplay2');
    var cbMusic = document.getElementById('cbMusic');
    var cbTimerId;

    var trpStandby = document.getElementById('trpstandby');
    var trpPlay1 = document.getElementById('trpplay1');
    var trpPlay2 = document.getElementById('trpplay2');
    var trpMusic = document.getElementById('trpMusic');
    var trpTimerId;

    var voStandby = document.getElementById('vostandby');
    var voPlay1 = document.getElementById('voplay1');
    var voPlay2 = document.getElementById('voplay2');
    var voMusic = document.getElementById('voMusic');
    var voTimerId;
    var isMoved = false;

    var play1Duration = 6000;
    var play2Duration = 4000;

    function initializeInstruments() {
        switchToCelloPlay1();
        setTimeout(switchToCelloStandby, 100);
        switchToFlPlay1();
        setTimeout(switchToFlStandby, 100);
        switchToUkuPlay1();
        setTimeout(switchToUkuStandby, 100);
        switchToDjbPlay1();
        setTimeout(switchToDjbStandby, 100);
        switchToDrPlay1();
        setTimeout(switchToDrStandby, 100);
        switchToVnPlay1();
        setTimeout(switchToVnStandby, 100);
        switchToTrbPlay1();
        setTimeout(switchToTrbStandby, 100);
        switchToGtrPlay1();
        setTimeout(switchToGtrStandby, 100);
        switchToPfPlay1();
        setTimeout(switchToPfStandby, 100);
        switchToCbPlay1();
        setTimeout(switchToCbStandby, 100);
        switchToTrpPlay1();
        setTimeout(switchToTrpStandby, 100);
    }

    document.addEventListener('DOMContentLoaded', initializeInstruments);
    
    function switchToCelloPlay1() {
        celloPlay1.style.display = 'block';
        celloPlay2.style.display = 'none';
        celloStandby.style.display = 'none';
        celloMusic.loop = true;
        celloMusic.muted = false;
        celloTimerId = setTimeout(switchToCelloPlay2, play1Duration);
    }

    function switchToCelloPlay2() {
        celloPlay2.style.display = 'block';
        celloPlay1.style.display = 'none';
        celloStandby.style.display = 'none';
        celloMusic.loop = true;
        celloMusic.muted = false;
        celloTimerId = setTimeout(switchToCelloPlay1, play2Duration);
    }

    function switchToCelloStandby() {
        celloPlay1.style.display = 'none';
        celloPlay2.style.display = 'none';
        celloStandby.style.display = 'block';
        celloMusic.muted = true;
        celloMusic.currentTime = 0;
        clearTimeout(celloTimerId);
    }

    celloStandby.addEventListener('click', switchToCelloPlay1);
    celloPlay1.addEventListener('click', switchToCelloStandby);
    celloPlay2.addEventListener('click', switchToCelloStandby);
    // 여기까지 첼로

    function switchToFlPlay1() {
        flPlay1.style.display = 'block';
        flPlay2.style.display = 'none';
        flStandby.style.display = 'none';
        flMusic.loop = true;
        flMusic.muted = false;
        flTimerId = setTimeout(switchToFlPlay2, play1Duration);
    }

    function switchToFlPlay2() {
        flPlay2.style.display = 'block';
        flPlay1.style.display = 'none';
        flStandby.style.display = 'none';
        flMusic.loop = true;
        flMusic.muted = false;
        flTimerId = setTimeout(switchToFlPlay1, play2Duration);
    }

    function switchToFlStandby() {
        flPlay1.style.display = 'none';
        flPlay2.style.display = 'none';
        flStandby.style.display = 'block';
        flMusic.muted = true;
        flMusic.currentTime = 0;
        clearTimeout(flTimerId);
    }

    flStandby.addEventListener('click', switchToFlPlay1);
    flPlay1.addEventListener('click', switchToFlStandby);
    flPlay2.addEventListener('click', switchToFlStandby);
    // 여기까지 플룻

    function switchToUkuPlay1() {
        ukuPlay1.style.display = 'block';
        ukuPlay2.style.display = 'none';
        ukuStandby.style.display = 'none';
        ukuMusic.loop = true;
        ukuMusic.muted = false;
        ukuTimerId = setTimeout(switchToUkuPlay2, play1Duration);
    }
    
    function switchToUkuPlay2() {
        ukuPlay2.style.display = 'block';
        ukuPlay1.style.display = 'none';
        ukuStandby.style.display = 'none';
        ukuMusic.loop = true;
        ukuMusic.muted = false;
        ukuTimerId = setTimeout(switchToUkuPlay1, play2Duration);
    }
    
    function switchToUkuStandby() {
        ukuPlay1.style.display = 'none';
        ukuPlay2.style.display = 'none';
        ukuStandby.style.display = 'block';
        ukuMusic.muted = true;
        ukuMusic.currentTime = 0;
        clearTimeout(ukuTimerId);
    }
    
    ukuStandby.addEventListener('click', switchToUkuPlay1);
    ukuPlay1.addEventListener('click', switchToUkuStandby);
    ukuPlay2.addEventListener('click', switchToUkuStandby);
    // 여기까지 우쿨렐레

    function switchToDjbPlay1() {
        djbPlay1.style.display = 'block';
        djbPlay2.style.display = 'none';
        djbStandby.style.display = 'none';
        djbMusic.loop = true;
        djbMusic.muted = false;
        djbTimerId = setTimeout(switchToDjbPlay2, play1Duration);
    }

    function switchToDjbPlay2() {
        djbPlay2.style.display = 'block';
        djbPlay1.style.display = 'none';
        djbStandby.style.display = 'none';
        djbMusic.loop = true;
        djbMusic.muted = false;
        djbTimerId = setTimeout(switchToDjbPlay1, play2Duration);
    }

    function switchToDjbStandby() {
        djbPlay1.style.display = 'none';
        djbPlay2.style.display = 'none';
        djbStandby.style.display = 'block';
        djbMusic.muted = true;
        djbMusic.currentTime = 0;
        clearTimeout(djbTimerId);
    }

    djbStandby.addEventListener('click', switchToDjbPlay1);
    djbPlay1.addEventListener('click', switchToDjbStandby);
    djbPlay2.addEventListener('click', switchToDjbStandby);
    // 여기까지 젬베

    function switchToDrPlay1() {
        drPlay1.style.display = 'block';
        drPlay2.style.display = 'none';
        drStandby.style.display = 'none';
        drMusic.loop = true;
        drMusic.muted = false;
        drTimerId = setTimeout(switchToDrPlay2, play1Duration);
    }
    
    function switchToDrPlay2() {
        drPlay2.style.display = 'block';
        drPlay1.style.display = 'none';
        drStandby.style.display = 'none';
        drMusic.loop = true;
        drMusic.muted = false;
        drTimerId = setTimeout(switchToDrPlay1, play2Duration);
    }
    
    function switchToDrStandby() {
        drPlay1.style.display = 'none';
        drPlay2.style.display = 'none';
        drStandby.style.display = 'block';
        drMusic.muted = true;
        drMusic.currentTime = 0;
        clearTimeout(drTimerId);
    }
    
    drStandby.addEventListener('click', switchToDrPlay1);
    drPlay1.addEventListener('click', switchToDrStandby);
    drPlay2.addEventListener('click', switchToDrStandby);
    // 여기까지 드럼

    function switchToVnPlay1() {
        vnPlay1.style.display = 'block';
        vnPlay2.style.display = 'none';
        vnStandby.style.display = 'none';
        vnMusic.loop = true;
        vnMusic.muted = false;
        vnTimerId = setTimeout(switchToVnPlay2, play1Duration);
    }
    
    function switchToVnPlay2() {
        vnPlay2.style.display = 'block';
        vnPlay1.style.display = 'none';
        vnStandby.style.display = 'none';
        vnMusic.loop = true;
        vnMusic.muted = false;
        vnTimerId = setTimeout(switchToVnPlay1, play2Duration);
    }

    function switchToVnStandby() {
        vnPlay1.style.display = 'none';
        vnPlay2.style.display = 'none';
        vnStandby.style.display = 'block';
        vnMusic.muted = true;
        vnMusic.currentTime = 0;
        clearTimeout(vnTimerId);
        }
        
    vnStandby.addEventListener('click', switchToVnPlay1);
    vnPlay1.addEventListener('click', switchToVnStandby);
    vnPlay2.addEventListener('click', switchToVnStandby);
    // 여기까지 바이올린

    function switchToTrbPlay1() {
        trbPlay1.style.display = 'block';
        trbPlay2.style.display = 'none';
        trbStandby.style.display = 'none';
        trbMusic.loop = true;
        trbMusic.muted = false;
        trbTimerId = setTimeout(switchToTrbPlay2, play1Duration);
    }
    
    function switchToTrbPlay2() {
        trbPlay2.style.display = 'block';
        trbPlay1.style.display = 'none';
        trbStandby.style.display = 'none';
        trbMusic.loop = true;
        trbMusic.muted = false;
        trbTimerId = setTimeout(switchToTrbPlay1, play2Duration);
    }
    
    function switchToTrbStandby() {
        trbPlay1.style.display = 'none';
        trbPlay2.style.display = 'none';
        trbStandby.style.display = 'block';
        trbMusic.muted = true;
        trbMusic.currentTime = 0;
        clearTimeout(trbTimerId);
    }
    
    trbStandby.addEventListener('click', switchToTrbPlay1);
    trbPlay1.addEventListener('click', switchToTrbStandby);
    trbPlay2.addEventListener('click', switchToTrbStandby);
    // 여기까지 트럼본

    function switchToGtrPlay1() {
        gtrPlay1.style.display = 'block';
        gtrPlay2.style.display = 'none';
        gtrStandby.style.display = 'none';
        gtrMusic.loop = true;
        gtrMusic.muted = false;
        gtrTimerId = setTimeout(switchToGtrPlay2, play1Duration);
    }
    
    function switchToGtrPlay2() {
        gtrPlay2.style.display = 'block';
        gtrPlay1.style.display = 'none';
        gtrStandby.style.display = 'none';
        gtrMusic.loop = true;
        gtrMusic.muted = false;
        gtrTimerId = setTimeout(switchToGtrPlay1, play2Duration);
    }
    
    function switchToGtrStandby() {
        gtrPlay1.style.display = 'none';
        gtrPlay2.style.display = 'none';
        gtrStandby.style.display = 'block';
        gtrMusic.pause();
        gtrMusic.muted = true;
        clearTimeout(gtrTimerId);
    }
    
    gtrStandby.addEventListener('click', switchToGtrPlay1);
    gtrPlay1.addEventListener('click', switchToGtrStandby);
    gtrPlay2.addEventListener('click', switchToGtrStandby);
    // 여기까지 기타

    function switchToPfPlay1() {
        pfPlay1.style.display = 'block';
        pfPlay2.style.display = 'none';
        pfStandby.style.display = 'none';
        pfMusic.loop = true;
        pfMusic.muted = false;
        pfTimerId = setTimeout(switchToPfPlay2, play1Duration);
    }
    
    function switchToPfPlay2() {
        pfPlay2.style.display = 'block';
        pfPlay1.style.display = 'none';
        pfStandby.style.display = 'none';
        pfMusic.loop = true;
        pfMusic.muted = false;
        pfTimerId = setTimeout(switchToPfPlay1, play2Duration);
    }
    
    function switchToPfStandby() {
        pfPlay1.style.display = 'none';
        pfPlay2.style.display = 'none';
        pfStandby.style.display = 'block';
        pfMusic.muted = true;
        pfMusic.currentTime = 0;
        clearTimeout(pfTimerId);
    }
    
    pfStandby.addEventListener('click', switchToPfPlay1);
    pfPlay1.addEventListener('click', switchToPfStandby);
    pfPlay2.addEventListener('click', switchToPfStandby);
    // 여기까지 피아노

    function switchToCbPlay1() {
        cbPlay1.style.display = 'block';
        cbPlay2.style.display = 'none';
        cbStandby.style.display = 'none';
        cbMusic.loop = true;
        cbMusic.muted = false;
        cbTimerId = setTimeout(switchToCbPlay2, play1Duration);
    }
    
    function switchToCbPlay2() {
        cbPlay2.style.display = 'block';
        cbPlay1.style.display = 'none';
        cbStandby.style.display = 'none';
        cbMusic.loop = true;
        cbMusic.muted = false;
        cbTimerId = setTimeout(switchToCbPlay1, play2Duration);
    }
    
    function switchToCbStandby() {
        cbPlay1.style.display = 'none';
        cbPlay2.style.display = 'none';
        cbStandby.style.display = 'block';
        cbMusic.muted = true;
        cbMusic.currentTime = 0;
        clearTimeout(cbTimerId);
    }
    
    cbStandby.addEventListener('click', switchToCbPlay1);
    cbPlay1.addEventListener('click', switchToCbStandby);
    cbPlay2.addEventListener('click', switchToCbStandby);
    // 여기까지 콘베

    function switchToTrpPlay1() {
        trpPlay1.style.display = 'block';
        trpPlay2.style.display = 'none';
        trpStandby.style.display = 'none';
        trpMusic.loop = true;
        trpMusic.muted = false;
        trpTimerId = setTimeout(switchToTrpPlay2, play1Duration);
    }
    
    function switchToTrpPlay2() {
        trpPlay2.style.display = 'block';
        trpPlay1.style.display = 'none';
        trpStandby.style.display = 'none';
        trpMusic.loop = true;
        trpMusic.muted = false;
        trpTimerId = setTimeout(switchToTrpPlay1, play2Duration);
    }
    
    function switchToTrpStandby() {
        trpPlay1.style.display = 'none';
        trpPlay2.style.display = 'none';
        trpStandby.style.display = 'block';
        trpMusic.muted = true;
        trpMusic.currentTime = 0;
        clearTimeout(trpTimerId);
    }
    
    trpStandby.addEventListener('click', switchToTrpPlay1);
    trpPlay1.addEventListener('click', switchToTrpStandby);
    trpPlay2.addEventListener('click', switchToTrpStandby);
    // 여기까지 트럼펫

    function switchToVoPlay1() {
        voPlay1.style.display = 'block';
        voPlay2.style.display = 'none';
        voStandby.style.display = 'none';
        voMusic.loop = true;
        voMusic.play();
        voTimerId = setTimeout(switchToVoPlay2, play1Duration);
    }
    
    function switchToVoPlay2() {
        voPlay2.style.display = 'block';
        voPlay1.style.display = 'none';
        voStandby.style.display = 'none';
        voMusic.loop = true;
        voMusic.play();
        voTimerId = setTimeout(switchToVoPlay1, play2Duration);
    }
    
    function switchToVoStandby() {
        voPlay1.style.display = 'none';
        voPlay2.style.display = 'none';
        voStandby.style.display = 'block';
        voMusic.pause();
        voMusic.currentTime = 0;
        clearTimeout(voTimerId);
        setTimeout(function () {
            voStandby.style.transition = 'transform 0.5s ease-in-out'; // Adjust the duration and easing as needed
            voStandby.style.transform = 'translateX(0)';
        }, 200);
    }
    
    voStandby.addEventListener('click', function () {
        if (!isMoved) {
            isMoved = true;
            voStandby.style.transition = 'transform 0.5s ease-in-out';
            voStandby.style.transform = 'translateX(65%)';
        } else {
            switchToVoPlay1();
        }
    });
    voPlay1.addEventListener('click', switchToVoStandby);
    voPlay2.addEventListener('click', switchToVoStandby);
    // 여기까지 보컬

    var popup = document.getElementById("popup");
    var popupParagraph = document.querySelector(".popup-content p");
    var signImage = document.getElementById("sign");

    window.onload = function() {
        popup.style.display = "block";
    };
    // sign 이미지 클릭 시 팝업창 표시
    signImage.onclick = function() {
        popup.style.display = "block";
    };
    // 팝업 외부 클릭 시 닫기 이벤트
    window.onclick = function(event) {
        if (popupParagraph.contains(event.target)) {
            return;
        }
        // p 요소 외부 클릭 시 팝업 닫기
        popup.style.display = "none";
    };
});