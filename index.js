function wordCounter() {
    let inputArticle = document.getElementById('inputArticle').value;
    let character = inputArticle.length;
    document.getElementById('characters').innerHTML=character;
    let word = inputArticle.match(/\w+/g).length;
    document.getElementById('words').innerHTML=word;
    let sentence = inputArticle.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|").length;
    document.getElementById('sentences').innerHTML=sentence;
    let paragraph = inputArticle.replace(/\n$/gm, '').split(/\n/).length;
    document.getElementById('paragraphs').innerHTML=paragraph;
    

        let wordsArray=inputArticle.match(/\w+/g);
        let count={};
        wordsArray.forEach(function(i){count[i]=(count[i] || 0)+1;});

        let  html=`<h2>Words Repeated</h2>`;

           let countObj= Object.entries(count);
            
        countObj.forEach(function(elem , index){
            if(elem[1]!=1){
            html+=`<h3>${elem[0]} -: <span>${elem[1]}</span></h3>`;
            }
        });

        let outputOfRepeatition=document.getElementById('outputOfRepeatition');
        outputOfRepeatition.innerHTML=html;

}
