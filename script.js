function openFile(name){

let content = "";
let meta = "";

if(name === "profile"){
content = `
File: profile.txt

名前：坪谷 悠輝（ツボタニ ユウキ）
ハンドルネーム：つぼ
所属：情報理工学部 2回生
役職：団体長
所属団体：RiST , RiPPro , RCC
好きな食べ物：激辛系全般
勉強中：Forensics
`;

meta = `
File: profile.txt
Size: 128 bytes
Access Time: 2026-03-06
Analysis Status: parsed
`;
}

if(name === "contact"){
content = `
File: contact.log

Discord : つぼ
LINE : つぼ
`;

meta = `
File: contact.log
Size: 64 bytes
Access Time: 2026-03-06
Analysis Status: parsed
`;
}

if(name === "org"){
content = `
Directory: organizations/

RiST
RiPPro
RCC
`;

meta = `
File: organizations/
Type: directory
Analysis Status: scanned
`;
}

if(name === "interest"){
content = `
Directory: interests/

Digital Forensics
CTF
Cyber Security
`;

meta = `
File: interests/
Type: directory
Analysis Status: scanned
`;
}

document.getElementById("content").innerText = content;
document.getElementById("meta").innerText = meta;

}
