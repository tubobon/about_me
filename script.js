function openFile(name){

document.querySelector(".filesystem").style.display="none";
document.getElementById("viewer").classList.remove("hidden");

let content="";
let meta="";

if(name==="profile"){
content=`名前：坪谷 悠輝（ツボタニ ユウキ）
ハンドルネーム：つぼ
所属：情報理工学部 2回生
役職：団体長
好きな食べ物：激辛系全般
勉強中：Forensics`;

meta=`File: profile.txt
Size: 128B
Access: 2026-03-06`;
}

if(name==="contact"){
content=`Discord : つぼ
LINE : つぼ`;

meta=`File: contact.log
Size: 64B`;
}

if(name==="org"){
content=`RiST
RiPPro
RCC`;

meta=`Directory`;
}

if(name==="interest"){
content=`Digital Forensics
CTF
Security`;

meta=`Directory`;
}

document.getElementById("content").innerText=content;
document.getElementById("metadata").innerText=meta;

}

function back(){
document.querySelector(".filesystem").style.display="block";
document.getElementById("viewer").classList.add("hidden");
}
