const click = document.querySelector('.title h1');
click.addEventListener('click', function () {
    document.querySelector('.pikachu').classList.add('active');
    document.querySelector('.main').classList.add('active_main');
    setInterval(function () {
        document.querySelector('.load_img').classList.add('laoding');
    }, 2000)
})
const icon_sound = document.querySelector('._sound_icon');
const icon = document.querySelector('._sound_icon i');
const song = document.getElementById('song');
icon_sound.addEventListener('click', function () {
    const icon__ = icon.classList.toggle('test');
    if (icon__) {
        icon.className = icon.className.replace('fa-solid fa-volume-high', "fa-solid fa-volume-xmark");
        song.pause();
    } else {
        icon.className = icon.className.replace("fa-solid fa-volume-xmark", 'fa-solid fa-volume-high');
        song.play();
    }
})

const player = document.querySelector('.play');
const load_game = document.querySelector('.game')
player.addEventListener('click', function () {
    load_game.classList.add('load_game');
    if (load_game) {
        document.querySelector('.pikachu_img').classList.add('remove_intro');
        setInterval(function () {
            document.querySelector('.gamemer').classList.add('add_game_');
        }, 2000)
        setInterval(function () {
            load_game.classList.remove('load_game');
        }, 4000)
        var time = 604;
        var counter = setInterval(timer, 1000);
        function timer() {
            time -= 1;
            if (time <= 0) {
                clearInterval(counter);
                return
            }
            document.querySelector('.ending').innerHTML = time + "giây";
        }
        timer();
    }
})

const arr_img = [
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
    '7.png',
    '8.png',
    '9.png',
    '10.png',
    '11.png',
    '12.png',
    '13.png',
    '14.png',
    '15.png',
    '16.png',
    '17.png',
    '18.png',
    '19.png',
    '20.png',
    '21.png',
    '22.png',
    '23.png',
    '24.png',
    '25.png',
    '26.png',
    '27.png',
    '28.png',
    '29.png',
    '31.png',
    '32.png',
    '33.png',
    '34.png',
    '35.png',
    '36.png',
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
    '7.png',
    '8.png',
    '9.png',
    '10.png',
    '11.png',
    '12.png',
    '13.png',
    '14.png',
    '15.png',
    '16.png',
    '17.png',
    '18.png',
    '19.png',
    '20.png',
    '21.png',
    '22.png',
    '23.png',
    '24.png',
    '25.png',
    '26.png',
    '27.png',
    '28.png',
    '29.png',
    '31.png',
    '32.png',
    '33.png',
    '34.png',
    '35.png',
    '36.png',
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
    '7.png',
    '8.png',
    '9.png',
    '10.png',
    '11.png',
    '12.png',
    '13.png',
    '14.png',
    '15.png',
    '16.png',
    '17.png',
    '18.png',
    '19.png',
    '20.png',
    '21.png',
    '22.png',
    '23.png',
    '24.png',
    '25.png',
    '26.png',
    '27.png',
    '28.png',
    '29.png',
    '31.png',
    '32.png',
    '33.png',
    '34.png',
    '35.png',
    '36.png',
];
const url = './img/pieces'
const random = document.querySelector('.random');
const __ = "";
const pokemon_img = document.querySelector('.pokemon_img')
// const play = document.querySelector('.doilai');
// function random_() { //hàm random pikaachu
//     pokemon_img.innerHTML = "";
//     for (let index = 0; index < 108; index++) {
//         var rand = arr_img[Math.floor(Math.random() * arr_img.length)];
//         pokemon_img.innerHTML += `
//             <img onclick="choi()" src="${url + rand}" alt="">
//         `

//         // arr_img.map(function(i){
//         //     document.querySelector('.pokemon_img').innerHTML="";    
//         // })
//     }
// }
// random.addEventListener('click', random_)
// player.addEventListener('click', random_);//đổi lại pikachu

// play.addEventListener('click', random_);

const off = document.querySelector('._sound_icon_ i');

off.addEventListener('click', function () { //tắt bật âm thanh
    console.log('phạm giang nam')
    const toggle = off.classList.toggle('test');
    if (toggle) {
        off.className = off.className.replace('fa-solid fa-volume-high', "fa-solid fa-volume-xmark");
        song.pause();
    } else {
        off.className = off.className.replace("fa-solid fa-volume-xmark", 'fa-solid fa-volume-high');
        song.play();
    }
})


//chơi 
function choi() {
    console.log(1);
}
var number = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 2, 4, 2, 3, 4, 1, 2, 3, 4, 1, 0],
    [0, 1, 2, 3, 1, 2, 3, 2, 3, 1, 3, 1, 2, 0],
    [0, 4, 3, 2, 4, 1, 2, 3, 1, 2, 3, 1, 2, 0],
    [0, 2, 1, 3, 1, 2, 3, 4, 1, 2, 3, 1, 2, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
// var kếtQuả = [
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
//     [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
//     [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
//     [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// ];

const dong_ = document.querySelector('.pokemon_img');
// 
// var ô = document.createElement("div");
// console.log(ô);
for (var i = 0; i < number.length; i++) {
    var dòng = number[i];
    // Tạo ra 1 thẻ đc định nghĩa là dòng
    var rw = "";
    // dong_.innerHTML += rw;
    // j là ô 
    var ô;
    // lặp vào từng thằng dòng rồi in ô ra ngoài
    for (var j = 0; j < dòng.length; j++) {
        // var cột = dòng[j];
        // console.log(dòng[j]);
        rw += (dòng[j]?"<div><img class=\"bấmĐc pokemon\" src=\""+url+dòng[j]+".png\" dòng=\""+i+"\" cột=\""+j+"\"></div>":"<div></div>");
    }
    dong_.innerHTML += "<div class=\"dòng\">"+rw+"</div>";
}
const r = 2;//rào chắn

function checkX(x1, x2, khác) {
    var duoc = true;
    var elm_dòng_1 = (khác ? x2 : x1)['getAttribute']('dòng'); // lấy ra dòng
    var elm_cột_1 = x1.getAttribute('cột');
    var elm_cột_2 = x2.getAttribute('cột');
    //tìm đến cột tối đa và cột tối thiểu
    var chắn = elm_cột_2 - elm_cột_1; //chắn
    if(Math.abs(chắn) > 1) {
        for (let index = (chắn < 0 ? elm_cột_2 : elm_cột_1 ); index <= (chắn < 0 ? elm_cột_1 : elm_cột_2); index++ ) { //duyệt từ đầu đến cuối hàng so sáng xem đường đi của nó nếu bị rào cản thì không cho đi
            // lặp vào tất cả các cái thằng chắn kiểm tra xem nó từ từ trái qua phải hay từ phải qua trái nếu mà đi từ trái qua phải thì
            // thằng số 1 sẽ lớn hơn thằng số 2 và sẽ trả về số dương 
            // còn ngược lại thì sẽ là số âm
            // 
            if (number[elm_dòng_1][index] != "đãXóa") { // kiểm trả xem cái ô đấy nó đã được xóa hay chưa nếu mà nó chwua được xóa thì 
                // sẽ không cho đi dừng vòng lặp luôn không chạy xuống dưới
                duoc = false;
                break;
            }
        }
    }
    if(duoc) { //kiểm tra nếu thằng ô dduwoxj bằng đã xóa thì ẩn 2 thằng đấy đi thôi
        x1.classList.add('ds_none');
        x2.classList.add('ds_none');
        number[khác ? x1.getAttribute('dòng') : elm_dòng_1][elm_cột_1] = "đãXóa"; // nếu mà khác 
        number[khác ? x1.getAttribute('dòng') : elm_dòng_1][elm_cột_2] = "đãXóa"; // nếu àm xóa rồi thì gán cho nó 1 cái giá trị bằng đã xóa
    }
    return duoc;
}
function checkMatching(x1, x2) {
    var duoc = true;
    var elm_dòng_1 = x1.getAttribute('dòng'); // lấy ra dòng 1 khi mình bấm vào đầu tiền
    var elm_cột_1 = x1.getAttribute('cột'); // lấy ra thằng cột 1 khi mình bấm vào lần 1
    var elm_dòng_2 = x2.getAttribute('dòng'); // lấy ra dòng 1 cột 2 của thằng mình bấm vào
    var elm_cột_2 = x2.getAttribute('cột'); // lấy ra cột khi bấm vào lần 2
    //tìm đến cột tối đa và cột tối thiểu
    if(elm_dòng_1 == elm_dòng_2) { // so sánh xem thằng dòng 1 có bằng thằng dòng 2 hay không nếu bằng thì
        duoc = checkX(x1, x2); 
    } else if(elm_cột_1 == elm_cột_2) {
        duoc = checkY(x1, x2);
    } else if(elm_dòng_1 > elm_dòng_2){
        // if(elm_cột_1 < elm_cột_2) {
        //     var y = checkY(x1, x2, "khác");
        //     if(!y) {
        //         duoc = y;
        //     }else {
        //         duoc = checkX(x1, x2, "khác");
        //     }
        // }
    }   
    
    return duoc;
}

function checkY(x1, x2, khác) {
    var duoc = true;
    var elm_dòng_1 = x1.getAttribute('dòng'); // lấy ra dòng
    var elm_cột_1 = (khác ? x2 : x1)['getAttribute']('cột');
    console.log(elm_cột_1);
    var elm_dòng_2 = x2.getAttribute('dòng'); // lấy ra dòng

    var chắn = elm_dòng_2 - elm_dòng_1;

    if(Math.abs(chắn) > 1) {
        for (let index = (chắn < 0 ? elm_dòng_2 : elm_dòng_1); index < (chắn < 0 ? elm_dòng_1 : elm_dòng_2);  index++) {
            if (number[index][elm_cột_1] != "đãXóa") {
                duoc = false;
                break;
            }
        }
    }
    if(duoc) {
        x1.classList.add('ds_none'); // nếu mà dduwoxj xóa thì sẽ xóa 2 con pikachu và sẽ đổi dữ liệu thành đã xóa
        x2.classList.add('ds_none');
        number[elm_dòng_1][khác ? x1.getAttribute('cột') : elm_cột_1] = "đãXóa";
        number[elm_dòng_2][khác ? x1.getAttribute('cột') : elm_cột_1] = "đãXóa";
    }
    return duoc;
}
var imgP = document.querySelectorAll('img.pokemon');
for (let i = 0; i < imgP.length; i++) {
    
    const elm = imgP[i];
    var biens=0;
    var target_1,
        target_2;
    elm.addEventListener("click", function(e){
        const a=document.querySelectorAll('img.active_pikachu');
        var dòng=this.getAttribute('dòng'); // lấy ra dòng
        var cột=this.getAttribute('cột'); // lấy ra thằng cột
        this.classList.add('active_pikachu');
        if(!biens) {
            target_1 = this;
            biens ++;
        } else {
            target_2 = this;
            checkMatching(target_1, target_2);
            // checkY(this);

            a.forEach(element => {
                element.classList.remove('active_pikachu');
            });

            biens = 0;
        }
        console.log(number);
        return false;
        // console.log(biens);
        // console.log(e, this);
        // Kiểm tra
        // Tạo ra biển kiểm tra lưu 2 vị trí
        // Nếu click lần đầu -> Lưu lại vị trí vừa click vào biến kiểm tra
        // Nếu click lần 2 -> Check line
        // FALSE -> Reset 2 vị trí đã được click
        // TRUE -> Xóa ảnh 2 vị trí này -> Gán lại giá trị 0 cho mảng quả tương ứng với 2 vị trí vừa kiểm tra
        // Reset giá trị biến kiểm tra
    })
}



//hàm check hình chữ nhật
function checkLineY(p1, p2) {
    document.onmousemove = function (e) { //sự kiện lấy ra tọa độ x,y
        const pMinY = e.p1;
        const pMaxY = e.p2;
        if (p1 > p2) {
            pMaxY = p1;
            pMinY = p2;
        }
        for (let y = pMinY + 1; y < pMaxY; y++) {
            // kiểm tra 3 điểm
            if (checkY(pMaxY, pMinY) && checkX(pMaxY, pMinY) && checkY(pMaxY, pMaxY)) { //kiểm tra 4 đường gấp khúc xem nó có bị ngắn chách nhau hay không
                // nếu mà không bị ngăn cách thì cho qua còn không thì return về -1
                return true;

            }
        }
        return -1;
    }
}

function checkLineX(p1, p2) {
    document.onmousemove = function (e) {
        const pminX = e.p1;
        const pmaxX = e.p2;
        if (p1 > p2) {
            pminX = p2;
            pmaxX = p1;
        }
        for (var i = pminX + 1; i < pmaxX; y++) {
            if (checkX(p1, p2) && checkY(p1, p2) && checkX(pmaxX, pmaxX)) {
                return true;
            }
        }
        return -1;
    }
}


//tìm đường hàm có 3 tham số p1,p2 kiểm tra p1,p2 để tìm đường còn tham số còn lại sẽ bằng -1(đi về trái) =1đi về phải

function checkMoreLineX(p1, p2, type) {
    document.onmousemove = function (e) {
        const pMaxX = p1;
        const pMinX = p2;
        if (p1 > p2) {
            pMaxX = p2;
            pMinX = p1;
        }
        var y = pMaxX;
        var row = pMinX;
        if (type == -1) {
            y = pMaxX;
            row = pMinX;
        }
    }
}

