// poem
var words=[
    // '伤心桥下春波绿',
    // '曾是惊鸿照影来',
    // '当年明月在',
    // '曾照彩云归',
    // '归去来兮',
    '愿得一人心',
    '白首不分离',
    // '真堪偕隐',
    // '画船听雨眠',
    // '愿为江水',
    // '与君重逢',
    // '初见乍惊欢',
    // '久处亦怦然',
    // '好想回到那个夏天',
    // '趴在桌子上偷偷看你',
    '偷偷表白一个叫zxy的女孩',
    // '你曾是我灰色人生中的一道彩虹',
    // '柳絮空缱绻',
    // '南风知不知',
    // '我见青山多妩媚',
    // '料青山见我也应如是',
    // '取次花丛懒回顾',
    // '半缘修道半缘君',
    // '三笑徒然当一痴',
    // '人生若只如初见',
    // '我的余光皆是你',
    // '人生自是有情痴',
    // '此恨不关风与月',
    '人间纵有百媚千红',
    '唯独你是情之所钟',
    // '春蚕到死丝方尽',
    // '蜡炬成灰泪始干',
    // '这世间车遥马慢',
    // '你在我心里又何止好几年',
    // '今夜何夕',
    '我很想冷静,但有时真的做不到',
    // '愿我如星君如月',
    // '夜夜流光相皎洁',
    '情不知所起,一往而深',
    // '玲珑骰子安红豆',
    // '入骨相思知不知',
    '好害怕失去你',
    '为何爱得小心翼翼,慌慌张张',
    // '为你花开满城',
    // '若有知音见采',
    '春风十里不如你',
    // '钟于爱情,忠于岁月,衷于责任,终于圆满',
    // '钟情于你,忠诚于你,衷心于你,终止于你',
    // '休言半纸无多重',
    '最美的不是下雨天',
    '是曾与你躲过雨的屋檐',
    // '和光同尘',
    // '杳霭流玉',
    '你是我刻在心底的名字',
    // '霞姿月韵',
    '你是我不能说的秘密',
    // '醉后不知天在水',
    // '满船星梦压星河',
    '我真的好喜欢你',
    '星河滚烫,你是人间理想',
    // '落花人独立',
    // '微雨燕双飞',
    // '掬水月在手',
    '你是',
    // '夜深忽梦少年事',
    // '唯梦闲人不梦君',
    '因为是你,所以我想选择主动',
    // '皓腕凝霜雪',
    '没人能明白我内心的慌张',
    // '人间颜色如尘土',
    // '若非群玉山头见',
    // '会向瑶台月下逢',
    '我的内心早已兵荒马乱',
    // '羞花闭月花愁颤'
    // '解释春风无限恨',
    // '沉香亭北倚阑干'
];
function randomNum(min,max){
    var num = (Math.random()*(max-min+1)+min).toFixed(2);
    return num;
}
function init(){
    let container = document.querySelector('.container');
    let f = document.createDocumentFragment();
    words.forEach(w=>{
    let word_box = document.createElement('div');
    let word = document.createElement('div');
        word.innerText = w;
        word.classList.add('word');
        word.style.color = '#BAABDA';
        word.style.fontFamily = '楷体';
        word.style.fontSize = '20px'
        word_box.classList.add('word-box');
        word_box.style.setProperty("--margin-top",randomNum(-40,10)+'vh');      
        word_box.style.setProperty("--margin-left",randomNum(6,35)+'vw');
        word_box.style.setProperty("--animation-duration",randomNum(12,24)+'s');
        word_box.style.setProperty("--animation-delay",randomNum(-20,0)+'s');
        
        word_box.appendChild(word);
        f.appendChild(word_box);


    })
    container.appendChild(f);
}
window.addEventListener('load',init);
let textone = document.querySelector('.textone').querySelector('h1');
      let texttwo = document.querySelector('.texttwo').querySelector('h1');
      let textthree = document.querySelector('.textthree').querySelector('h1');

      setTimeout(function(){
        textone.innerHTML = '这世间车遥马慢';
          textone.style.color = '#E8F9FD';
          textone.style.fontFamily = '楷体'
          texttwo.style.color = '#E8F9FD';
          texttwo.style.fontFamily = '楷体'
          textthree.style.color = '#E8F9FD';
          textthree.style.fontFamily = '楷体'
          texttwo.innerHTML = '你在我心里又何止好几年';
      },1000)

      setTimeout(function(){
        textone.innerHTML = '初见乍惊欢,久处亦怦然'; 
        texttwo.innerHTML = '其实我蓄谋已久,竟也得偿所愿';
      },10000)

      setTimeout(function(){
        textone.innerHTML = '你也许不知道'; 
        texttwo.innerHTML = '其实我的理智在你面前不堪一击';
      },20000)

      setTimeout(function(){
        textone.innerHTML = '直到现在,我仍然不敢相信'; 
        texttwo.innerHTML = '这种事情居然能够降临到我的身上';
      },30000)

      setTimeout(function(){
        textone.innerHTML = '直到现在,我才相信那句话'; 
        texttwo.innerHTML = '斯人若彩虹,遇上方知有';
      },40000)

      setTimeout(function(){
        textone.innerHTML = '人间纵有百媚千红'; 
        texttwo.innerHTML = '唯独你是情之所钟';
      },50000)

      setTimeout(function(){
        textone.innerHTML = '钟于爱情,忠于岁月,衷于责任,终于圆满';
        texttwo.innerHTML = '钟情于你,忠诚于你,衷心于你,终止于你';
      },60000)
    




 
