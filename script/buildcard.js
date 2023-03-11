import { getLocationParm } from "../script/urlparser.js"

function main() {
    const elm = "hyd";
    const p = getLocationParm();
    // const p = {
    //     r1s1t: "hpp",
    //     r1s2t: "hpp",
    //     r1s3t: "hpp",
    //     r1s4t: "hpp",

    //     r2s1t: "ct",
    //     r2s2t: "ct",
    //     r2s3t: "ct",
    //     r2s4t: "ct",

    //     r3s1t: "cd",
    //     r3s2t: "cd",
    //     r3s3t: "cd",
    //     r3s4t: "cd",

    //     r4s1t: "dmp",
    //     r4s2t: "dmp",
    //     r4s3t: "dmp",
    //     r4s4t: "dmp",

    //     r5s1t: "dfp",
    //     r5s2t: "dfp",
    //     r5s3t: "dfp",
    //     r5s4t: "dfp",
    // };
    // overview
    document.querySelector("#char-name").textContent = p.cnm;
    document.querySelector("#char-img").src = "https://enka.network/ui/" + p.cim + ".png";
    document.querySelector("#under-char-name > div").textContent = "Lv. " + p.clv;
    document.querySelector("#friendship > div").textContent = p.frd;

    ["1", "2", "3"].forEach(n => {
        document.querySelector("#skill" + n + " > .skillicon").src = "https://enka.network/ui/" + p["si" + n] + ".png";
        if (p["sa" + n] == "t") document.querySelector("#skill" + n + " > .skilllevel").style.color = "rgb(0,255,255)";
        document.querySelector("#skill" + n + " > .skilllevel").textContent = "Lv." + p["sl" + n];
    });

    ["1", "2", "3", "4", "5", "6"].forEach(n => {
        if (p["as" + n]) {
            document.querySelector("#talent" + n + " > .talentbg").src = "./icon/" + elm + "_ascent_enab.svg";
            document.querySelector("#talent" + n + " > .talenticon").style.opacity = 1;
        } else {
            document.querySelector("#talent" + n + " > .talentbg").src = "./icon/" + elm + "_ascent.svg";
            document.querySelector("#talent" + n + " > .talenticon").style.opacity = 0.2;
        }
    });

    const stat = {
        sh: "status-hp",
        sa: "status-atk",
        sd: "status-def",
        sm: "status-elmas",
        sc: "status-crt",
        sr: "status-crtdmg",
        sg: "status-charge",
        se: "status-elmdmg"
    };

    ["sh", "sa", "sd", "sm", "sc", "sr", "sg", "se"].forEach(id => {
        document.querySelector("#" + stat[id] + " .status-main-value").textContent = p[id];
        const [base, addition] = (p[id + "s"] != undefined) ? p[id + "s"].split("-") : ["x", "x"];
        document.querySelector("#" + stat[id] + " .status-sub-value").innerHTML = base + " + <span style=\"color: rgb(0,255,0);\">" + addition + "</span>";
    });

    const stat_icon = {
        dm: "./icon/atk.svg",
        dmp: "./icon/atk_p.svg",
        hp: "./icon/hp.svg",
        hpp: "./icon/hp_p.svg",
        df: "./icon/def.svg",
        dfp: "./icon/def_p.svg",
        em: "./icon/elmas.svg",
        ct: "./icon/crt.svg",
        cd: "./icon/crt_dmg.svg",
        er: "./icon/charge.svg",
        pyr: "./icon/pyr.svg",
        hyd: "./icon/hyd.svg",
        anm: "./icon/anm.svg",
        elc: "./icon/elc.svg",
        dnd: "./icon/dnd.svg",
        geo: "./icon/geo.svg",
        cyr: "./icon/cyr.svg",
    }

    const stat_jp = {
        dm: "攻撃力",
        dmp: "攻撃力%",
        hp: "HP",
        hpp: "HP%",
        df: "防御力",
        dfp: "防御力%",
        em: "元素熟知",
        ct: "会心率",
        cd: "会心ダメージ",
        er: "元チャ効率",
        pyr: "炎元素ダメージ",
        hyd: "水元素ダメージ",
        anm: "風元素ダメージ",
        elc: "雷元素ダメージ",
        dnd: "草元素ダメージ",
        geo: "岩元素ダメージ",
        cyr: "氷元素ダメージ",
    };

    document.querySelector("#weapon-name").textContent = p.wnm;
    document.querySelector("#weaponimg > img").src = "https://enka.network/ui/" + p.wim + ".png";
    document.querySelector("#weapon-level").textContent = "Level " + p.wlv;
    document.querySelector("#weaponstat .status-main-value").textContent = p.wat;
    document.querySelector("#weapon-substat-icon").src = stat_icon[p.wss];
    document.querySelector("#weapon-substat-title").textContent = stat_jp[p.wss];
    document.querySelector("#weapon-substat-value").textContent = p.wsv;
    document.querySelector("#weapon-reality").textContent = "★".repeat(Math.floor(Number(p.wrl)));
    document.querySelector("#weapon-reality").style.background = "linear-gradient(transparent 30%," + ((p.wrl == "5") ? "rgba(255,215,0,0.7)" :
                                                                                                       (p.wrl == "4") ? "rgba(255,64,255,0.7)" :
                                                                                                       (p.wrl == "3") ? "rgba(0,255,255,0.7)" :
                                                                                                       (p.wrl == "2") ? "rgba(0,255,0,0.7)" :
                                                                                                       "rgba(215,215,215,0.7)") + ",transparent 70%)"


    const relset1 = document.querySelector("#relic-set-list > div:first-child");
    if (p.rs1 != undefined) {
        relset1.querySelector("div").textContent = p.rs1;
        relset1.querySelector(".relic-set-num").textContent = p.rs1n + " set";
        relset1.removeAttribute("hidden");
    } else {
        relset1.setAttribute("hidden", "");
    }

    const relset2 = document.querySelector("#relic-set-list > div:nth-child(2)");
    if (p.rs2 != undefined) {
        relset2.querySelector("div").textContent = p.rs2;
        relset2.querySelector(".relic-set-num").textContent = p.rs2n + " set";
        relset2.removeAttribute("hidden");
    } else {
        relset2.setAttribute("hidden", "");
    }

    document.querySelector("#total-score-text").textContent = p.tsc;
    document.querySelector("#total-score-footer-comment").textContent = p.tcm;

    ["1", "2", "3", "4", "5"].forEach(n => {
        // if (p["r" + n + "mt"] == undefined) return;
        const relic_panel = document.querySelector("#relic-" + n);
        const mainstat = p["r" + n + "mt"];
        const mainstat_value = p["r" + n + "mv"];
        const level = p["r" + n + "lv"];

        relic_panel.querySelector(".relic-mainstat-title > div").textContent = stat_jp[mainstat];
        relic_panel.querySelector(".relic-mainstat-title > img").src = stat_icon[mainstat];
        relic_panel.querySelector(".relic-mainstat-score").textContent = mainstat_value;
        relic_panel.querySelector(".relic-level > div").textContent = "+ " + level;

        ["1", "2", "3", "4"].forEach(m => {
            const substat_panel = relic_panel.querySelector(".reric-substat:nth-child(" + m + ")");
            const substat = p["r" + n + "s" + m + "t"];
            if (substat == undefined) {
                substat_panel.setAttribute("hidden", "");
                return;
            }
            substat_panel.querySelector(".reric-substat-icon").src = stat_icon[substat];
            substat_panel.querySelector(".reric-substat-title").textContent = stat_jp[substat];

            substat_panel.querySelector(".reric-substat-main-value").textContent = p["r" + n + "s" + m + "v"];
            const substat_details = p["r" + n + "s" + m + "d"].split("-");
            substat_panel.querySelector(".reric-substat-sub-value").textContent = substat_details.join(" + ");
        });

        relic_panel.querySelector(".relic-score").textContent = p.r1s;

    });

}

document.addEventListener("DOMContentLoaded", ev => {
    main();
})