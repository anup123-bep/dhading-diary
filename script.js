function toggleMenu(){document.getElementById('nav').classList.toggle('open')}
document.getElementById('year')?.append(new Date().getFullYear());
function sharePage(){const url=encodeURIComponent(window.location.href);const title=encodeURIComponent(document.title);window.open('https://www.facebook.com/sharer/sharer.php?u='+url+'&quote='+title,'_blank','width=700,height=500')}
const demoNews=[
 ['धादिङ','स्थानीय तहका गतिविधि र पछिल्ला अपडेट','धादिङबाट प्राप्त महत्वपूर्ण समाचार तथा जानकारी।','https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=900&q=80'],
 ['अर्थ','स्थानीय बजार र आर्थिक गतिविधि','व्यापार, बजार र अर्थतन्त्रसँग सम्बन्धित नयाँ अपडेट।','https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80'],
 ['पर्यटन','प्रकृति र संस्कृतिले भरिएको धादिङ','घुम्नलायक स्थान, स्थानीय संस्कृति र पर्यटकीय सम्भावनाबारे पढ्नुहोस्।','https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80'],
 ['खेलकुद','स्थानीय खेलकुदका पछिल्ला गतिविधि','धादिङमा भएका खेलकुद गतिविधिका नयाँ समाचार।','https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=900&q=80'],
 ['मौसम','आजको मौसम अपडेट','धादिङको मौसमसम्बन्धी पछिल्लो जानकारी।','https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=900&q=80']
];
function renderCategory(){
 const p=new URLSearchParams(location.search), cat=p.get('cat')||'धादिङ';
 document.getElementById('catTitle').textContent=cat;
 document.title=cat+' | Dhading Diary';
 const list=document.getElementById('newsGrid');
 const items=demoNews.filter(x=>x[0]===cat);
 const data=items.length?items:demoNews;
 list.innerHTML=data.map(x=>`<article class="news-card"><img src="${x[3]}" alt=""><div class="pad"><span class="tag">${x[0]}</span><h3>${x[1]}</h3><p>${x[2]}</p><small>२ अक्टोबर २०२६ • आज</small></div></article>`).join('');
}