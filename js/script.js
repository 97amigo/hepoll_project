// Функции блока Компания
function getAbout() {
    document.getElementById("row-company").style.display = "none";
    document.getElementById("row-certs").style.display = "none";
    document.getElementById("row-command").style.display = "none";
    document.getElementById("row-reqs").style.display = "none";

    document.getElementById("row-about").style.display = "table";
    
    if (document.documentElement.clientWidth >= 1024) {
        document.getElementsByClassName("path-container--suffix")[0].style.display = "flex";
        document.getElementsByClassName("path-container--step2")[0].style.display = "flex";
        document.getElementsByClassName("path-container--step2")[0].innerHTML = "О компании";
    } else {
        document.getElementsByClassName("path-container--step1")[0].innerHTML = "О компании";
        if (document.getElementById("menu__toggle").checked)
            document.getElementById("menu__toggle").click();
    }

    document.getElementById("about").style.color = "#59B7AC";

    document.getElementById("certs").style.color = "#ffffff";
    document.getElementById("we").style.color = "#ffffff";
    document.getElementById("reqs").style.color= "#ffffff";
};
function getCerts() {
    document.getElementById("row-company").style.display = "none";
    document.getElementById("row-about").style.display = "none";
    document.getElementById("row-command").style.display = "none";
    document.getElementById("row-reqs").style.display = "none";

    document.getElementById("row-certs").style.display = "block";

    if (document.documentElement.clientWidth >= 1024) {
        document.getElementsByClassName("path-container--suffix")[0].style.display = "flex";
        document.getElementsByClassName("path-container--step2")[0].style.display = "flex";
        document.getElementsByClassName("path-container--step2")[0].innerHTML = "Сертификаты";
    } else {
        document.getElementsByClassName("path-container--step1")[0].innerHTML = "Сертификаты";
        if (document.getElementById("menu__toggle").checked)
            document.getElementById("menu__toggle").click();
    }

    document.getElementById("certs").style.color = "#59B7AC";

    document.getElementById("about").style.color = "#ffffff";
    document.getElementById("we").style.color = "#ffffff";
    document.getElementById("reqs").style.color = "#ffffff";
};
function getCommand() {
    document.getElementById("row-company").style.display = "none";
    document.getElementById("row-about").style.display = "none";
    document.getElementById("row-certs").style.display = "none";
    document.getElementById("row-reqs").style.display = "none";

    document.getElementById("row-command").style.display = "table";

    if (document.documentElement.clientWidth >= 1024) {
        document.getElementsByClassName("path-container--suffix")[0].style.display = "flex";
        document.getElementsByClassName("path-container--step2")[0].style.display = "flex";
        document.getElementsByClassName("path-container--step2")[0].innerHTML = "Наша команда";
    } else {
        document.getElementsByClassName("path-container--step1")[0].innerHTML = "Наша команда";
        if (document.getElementById("menu__toggle").checked)
            document.getElementById("menu__toggle").click();
    }
    document.getElementById("we").style.color = "#59B7AC";

    document.getElementById("about").style.color = "#ffffff";
    document.getElementById("certs").style.color = "#ffffff";
    document.getElementById("reqs").style.color = "#ffffff";
};
function getReqs() {
    document.getElementById("row-company").style.display = "none";
    document.getElementById("row-about").style.display = "none";
    document.getElementById("row-command").style.display = "none";
    document.getElementById("row-certs").style.display = "none";

    document.getElementById("row-reqs").style.display = "table";

    if (document.documentElement.clientWidth >= 1024) {
        document.getElementsByClassName("path-container--suffix")[0].style.display = "flex";
        document.getElementsByClassName("path-container--step2")[0].style.display = "flex";
        document.getElementsByClassName("path-container--step2")[0].innerHTML = "Реквизиты";
    } else {
        document.getElementsByClassName("path-container--step1")[0].innerHTML = "Реквизиты";
        if (document.getElementById("menu__toggle").checked)
            document.getElementById("menu__toggle").click();
    }

    document.getElementById("reqs").style.color = "#59B7AC";

    document.getElementById("about").style.color = "#ffffff";
    document.getElementById("we").style.color = "#ffffff";
    document.getElementById("certs").style.color = "#ffffff";
};

// Функции блока Каталог
function getManipula1() {
    document.getElementById("row-catalog").style.display = "none";
    document.getElementById("row-manipula2").style.display = "none";
    document.getElementById("row-manipula3").style.display = "none";
    document.getElementById("row-manipula4").style.display = "none";

    document.getElementById("row-manipula1").style.display = "table";
    
    if (document.documentElement.clientWidth >= 1024) {
        document.getElementsByClassName("path-container--suffix")[0].style.display = "flex"
        document.getElementsByClassName("path-container--step2")[0].style.display = "flex"
        document.getElementsByClassName("path-container--step2")[0].innerHTML = "Манипула 1"
    } else {
        document.getElementsByClassName("path-container--step1")[0].innerHTML = "Манипула 1";
        if (document.getElementById("menu__toggle").checked)
            document.getElementById("menu__toggle").click();
    }

    document.getElementById("manipula1").style.color = "#59B7AC";

    document.getElementById("manipula2").style.color = "#ffffff";
    document.getElementById("manipula3").style.color = "#ffffff";
    document.getElementById("manipula4").style.color= "#ffffff";
};
function getManipula2() {
    document.getElementById("row-catalog").style.display = "none";
    document.getElementById("row-manipula1").style.display = "none";
    document.getElementById("row-manipula3").style.display = "none";
    document.getElementById("row-manipula4").style.display = "none";

    document.getElementById("row-manipula2").style.display = "table";
    
    if (document.documentElement.clientWidth >= 1024) {
        document.getElementsByClassName("path-container--suffix")[0].style.display = "flex"
        document.getElementsByClassName("path-container--step2")[0].style.display = "flex"
        document.getElementsByClassName("path-container--step2")[0].innerHTML = "Манипула 2"
    } else {
        document.getElementsByClassName("path-container--step1")[0].innerHTML = "Манипула 2";
        if (document.getElementById("menu__toggle").checked)
            document.getElementById("menu__toggle").click();
    }

    document.getElementById("manipula2").style.color = "#59B7AC";

    document.getElementById("manipula1").style.color = "#ffffff";
    document.getElementById("manipula3").style.color = "#ffffff";
    document.getElementById("manipula4").style.color= "#ffffff";
};
function getManipula3() {
    document.getElementById("row-catalog").style.display = "none";
    document.getElementById("row-manipula2").style.display = "none";
    document.getElementById("row-manipula1").style.display = "none";
    document.getElementById("row-manipula4").style.display = "none";

    document.getElementById("row-manipula3").style.display = "table";
    
    if (document.documentElement.clientWidth >= 1024) {
        document.getElementsByClassName("path-container--suffix")[0].style.display = "flex"
        document.getElementsByClassName("path-container--step2")[0].style.display = "flex"
        document.getElementsByClassName("path-container--step2")[0].innerHTML = "Манипула 3"
    } else {
        document.getElementsByClassName("path-container--step1")[0].innerHTML = "Манипула 3";
        if (document.getElementById("menu__toggle").checked)
            document.getElementById("menu__toggle").click();
    }

    document.getElementById("manipula3").style.color = "#59B7AC";

    document.getElementById("manipula2").style.color = "#ffffff";
    document.getElementById("manipula1").style.color = "#ffffff";
    document.getElementById("manipula4").style.color= "#ffffff";
};
function getManipula4() {
    document.getElementById("row-catalog").style.display = "none";
    document.getElementById("row-manipula2").style.display = "none";
    document.getElementById("row-manipula3").style.display = "none";
    document.getElementById("row-manipula1").style.display = "none";

    document.getElementById("row-manipula4").style.display = "table";
    
    if (document.documentElement.clientWidth >= 1024) {
        document.getElementsByClassName("path-container--suffix")[0].style.display = "flex"
        document.getElementsByClassName("path-container--step2")[0].style.display = "flex"
        document.getElementsByClassName("path-container--step2")[0].innerHTML = "Манипула 4"
    } else {
        document.getElementsByClassName("path-container--step1")[0].innerHTML = "Манипула 4";
        if (document.getElementById("menu__toggle").checked)
            document.getElementById("menu__toggle").click();
    }

    document.getElementById("manipula4").style.color = "#59B7AC";

    document.getElementById("manipula2").style.color = "#ffffff";
    document.getElementById("manipula3").style.color = "#ffffff";
    document.getElementById("manipula1").style.color= "#ffffff";
};

// Функции блока Услуги
function getDesigning() {
    document.getElementById("row-services").style.display = "none";
    document.getElementById("row-tpa").style.display = "none";
    document.getElementById("row-tocarka").style.display = "none";
    document.getElementById("row-frezerovka").style.display = "none";
    document.getElementById("row-service_med_tech").style.display = "none";
    document.getElementById("row-collabs").style.display = "none";

    document.getElementById("row-designing").style.display = "table";
    
    if (document.documentElement.clientWidth >= 1024) {
        document.getElementsByClassName("path-container--suffix")[0].style.display = "flex"
        document.getElementsByClassName("path-container--step2")[0].style.display = "flex"
        document.getElementsByClassName("path-container--step2")[0].innerHTML = "Проектирование"
    } else {
        document.getElementsByClassName("path-container--step1")[0].innerHTML = "Проектирование";
        if (document.getElementById("menu__toggle").checked)
            document.getElementById("menu__toggle").click();
    }

    document.getElementById("designing").style.color = "#59B7AC";

    document.getElementById("tpa").style.color = "#ffffff";
    document.getElementById("tocarka").style.color = "#ffffff";
    document.getElementById("frezerovka").style.color= "#ffffff";
    document.getElementById("service_med_tech").style.color = "#ffffff";
    document.getElementById("collabs").style.color= "#ffffff";
};
function getTpa() {
    document.getElementById("row-services").style.display = "none";
    document.getElementById("row-designing").style.display = "none";
    document.getElementById("row-tocarka").style.display = "none";
    document.getElementById("row-frezerovka").style.display = "none";
    document.getElementById("row-service_med_tech").style.display = "none";
    document.getElementById("row-collabs").style.display = "none";

    document.getElementById("row-tpa").style.display = "table";
    
    if (document.documentElement.clientWidth >= 1024) {
        document.getElementsByClassName("path-container--suffix")[0].style.display = "flex";
        document.getElementsByClassName("path-container--step2")[0].style.display = "flex";
        document.getElementsByClassName("path-container--step2")[0].innerHTML = "Заказ ТПА";
    } else {
        document.getElementsByClassName("path-container--step1")[0].innerHTML = "Заказ ТПА";
        if (document.getElementById("menu__toggle").checked)
            document.getElementById("menu__toggle").click();
    }

    document.getElementById("tpa").style.color = "#59B7AC";

    document.getElementById("designing").style.color = "#ffffff";
    document.getElementById("tocarka").style.color = "#ffffff";
    document.getElementById("frezerovka").style.color= "#ffffff";
    document.getElementById("service_med_tech").style.color = "#ffffff";
    document.getElementById("collabs").style.color= "#ffffff";
};
function getTocarka() {
    document.getElementById("row-services").style.display = "none";
    document.getElementById("row-tpa").style.display = "none";
    document.getElementById("row-designing").style.display = "none";
    document.getElementById("row-frezerovka").style.display = "none";
    document.getElementById("row-service_med_tech").style.display = "none";
    document.getElementById("row-collabs").style.display = "none";

    document.getElementById("row-tocarka").style.display = "table";
    
    if (document.documentElement.clientWidth >= 1024) {
        document.getElementsByClassName("path-container--suffix")[0].style.display = "flex"
        document.getElementsByClassName("path-container--step2")[0].style.display = "flex"
        document.getElementsByClassName("path-container--step2")[0].innerHTML = "Токарный цех"
    } else {
        document.getElementsByClassName("path-container--step1")[0].innerHTML = "Токарный цех";
        if (document.getElementById("menu__toggle").checked)
            document.getElementById("menu__toggle").click();
    }

    document.getElementById("tocarka").style.color = "#59B7AC";

    document.getElementById("tpa").style.color = "#ffffff";
    document.getElementById("designing").style.color = "#ffffff";
    document.getElementById("frezerovka").style.color= "#ffffff";
    document.getElementById("service_med_tech").style.color = "#ffffff";
    document.getElementById("collabs").style.color= "#ffffff";
};
function getFrezerovka() {
    document.getElementById("row-services").style.display = "none";
    document.getElementById("row-tpa").style.display = "none";
    document.getElementById("row-tocarka").style.display = "none";
    document.getElementById("row-designing").style.display = "none";
    document.getElementById("row-service_med_tech").style.display = "none";
    document.getElementById("row-collabs").style.display = "none";

    document.getElementById("row-frezerovka").style.display = "table";
    
    if (document.documentElement.clientWidth >= 1024) {
        document.getElementsByClassName("path-container--suffix")[0].style.display = "flex"
        document.getElementsByClassName("path-container--step2")[0].style.display = "flex"
        document.getElementsByClassName("path-container--step2")[0].innerHTML = "Фрезерный цех"
    } else {
        document.getElementsByClassName("path-container--step1")[0].innerHTML = "Фрезерный цех";
        if (document.getElementById("menu__toggle").checked)
            document.getElementById("menu__toggle").click();
    }

    document.getElementById("frezerovka").style.color = "#59B7AC";

    document.getElementById("tpa").style.color = "#ffffff";
    document.getElementById("tocarka").style.color = "#ffffff";
    document.getElementById("designing").style.color= "#ffffff";
    document.getElementById("service_med_tech").style.color = "#ffffff";
    document.getElementById("collabs").style.color= "#ffffff";
};
function getService_med_tech() {
    document.getElementById("row-services").style.display = "none";
    document.getElementById("row-tpa").style.display = "none";
    document.getElementById("row-tocarka").style.display = "none";
    document.getElementById("row-designing").style.display = "none";
    document.getElementById("row-frezerovka").style.display = "none";
    document.getElementById("row-collabs").style.display = "none";

    document.getElementById("row-service_med_tech").style.display = "table";
    
    if (document.documentElement.clientWidth >= 1024) {
        document.getElementsByClassName("path-container--suffix")[0].style.display = "flex"
        document.getElementsByClassName("path-container--step2")[0].style.display = "flex"
        document.getElementsByClassName("path-container--step2")[0].innerHTML = "Сервисное обслуживание медицинской техники"
    } else {
        document.getElementsByClassName("path-container--step1")[0].innerHTML = "Сервисное обслуживание медицинской техники";
        if (document.getElementById("menu__toggle").checked)
            document.getElementById("menu__toggle").click();
    }

    document.getElementById("service_med_tech").style.color = "#59B7AC";

    document.getElementById("tpa").style.color = "#ffffff";
    document.getElementById("tocarka").style.color = "#ffffff";
    document.getElementById("designing").style.color= "#ffffff";
    document.getElementById("frezerovka").style.color = "#ffffff";
    document.getElementById("collabs").style.color= "#ffffff";
};
function getCollabs() {
    document.getElementById("row-services").style.display = "none";
    document.getElementById("row-tpa").style.display = "none";
    document.getElementById("row-tocarka").style.display = "none";
    document.getElementById("row-designing").style.display = "none";
    document.getElementById("row-frezerovka").style.display = "none";
    document.getElementById("row-service_med_tech").style.display = "none";

    document.getElementById("row-collabs").style.display = "table";
    
    if (document.documentElement.clientWidth >= 1024) {
        document.getElementsByClassName("path-container--suffix")[0].style.display = "flex"
        document.getElementsByClassName("path-container--step2")[0].style.display = "flex"
        document.getElementsByClassName("path-container--step2")[0].innerHTML = "Предложение о сотрудничестве"
    } else {
        document.getElementsByClassName("path-container--step1")[0].innerHTML = "Предложение о сотрудничестве";
        if (document.getElementById("menu__toggle").checked)
            document.getElementById("menu__toggle").click();
    }

    document.getElementById("collabs").style.color = "#59B7AC";

    document.getElementById("tpa").style.color = "#ffffff";
    document.getElementById("tocarka").style.color = "#ffffff";
    document.getElementById("designing").style.color= "#ffffff";
    document.getElementById("frezerovka").style.color = "#ffffff";
    document.getElementById("service_med_tech").style.color= "#ffffff";
};

