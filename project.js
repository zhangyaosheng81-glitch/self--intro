const id=new URLSearchParams(location.search).get('id');
const detail=document.querySelector('#detail');
if(id==='bread'){
 document.title='豪士面包文字海报 · 章耀升';
 detail.innerHTML=`<div class="section-label">SELECTED PROJECT / AWARD WINNING</div><div class="bread-award-pill">第18届全国大学生广告艺术大赛 · 省级三等奖</div><h1>好吃，<br>挡不住。</h1><p>豪士面包文字海报设计</p><div class="bread-detail-gallery"><img src="assets/haoshi-bread-01.jpg" alt="好吃挡不住"><img src="assets/haoshi-bread-02.jpg" alt="好吃说不完"><img src="assets/haoshi-bread-03.jpg" alt="好吃吃不够"></div><div class="detail-copy"><div class="section-label">THE IDEA<br>创作概念</div><div><h2>把“好吃”<br>变成看得见的表达。</h2><p>作品以豪士面包“好吃”的产品特点为创意切入点，将“好吃”二字反复铺陈、放大，让文字成为画面的主体，也成为味觉感受的视觉回响。三张海报分别以“好吃挡不住”“好吃说不完”“好吃吃不够”为表达，将豪士面包的美味转化为直观、有记忆点的视觉语言，传递让人一口接一口的满足感。</p></div></div><div class="detail-copy"><div class="section-label">VISUAL STORY<br>视觉线索</div><div><p>01 / 好吃挡不住：让重复的“好吃”包围面包，表现美味的吸引力。<br>02 / 好吃说不完：以环绕扩散的文字节奏，传递话题与愉悦感。<br>03 / 好吃吃不够：通过聚焦与递进的文字构图，强化令人回味的产品印象。</p><p class="muted">以蓝白色调建立清晰醒目的品牌视觉，通过文字的重复、大小与空间变化，让产品卖点直接、有力地进入视线。</p></div></div><a class="back" href="index.html#work">← 返回全部作品</a>`;
}else if(id==='sanfu'){
 document.title='三福 × 搭 · 章耀升';
 detail.innerHTML=`<div class="section-label">SELECTED PROJECT / AWARD WINNING</div><div class="award-pill">第18届全国大学生广告艺术大赛 · 省级一等奖</div><h1>把「搭」<br>放大一点。</h1><p>三福品牌主题视觉设计</p><div class="sanfu-detail-gallery"><img src="assets/sanfu-da-guang-sai-01.jpg" alt="搭底气：通勤用品主题海报"><img src="assets/sanfu-da-guang-sai-02.jpg" alt="搭远方：旅行用品主题海报"><img src="assets/sanfu-da-guang-sai-03.jpg" alt="搭灵感：文具与创意主题海报"></div><div class="detail-copy"><div class="section-label">THE IDEA<br>创作概念</div><div><h2>用放大镜，<br>看见生活里的好搭子。</h2><p>作品以“搭”为主题，从放大镜中汲取灵感，将日常用品放大为生活体验的入口。通勤用品为日常搭起底气，旅行好物陪伴人们奔赴远方，文具与趣味小物则为创意搭建舞台。通过放大镜聚焦三福产品与生活场景的联系，呈现产品如何融入日常、陪伴不同的生活时刻，也让“搭”成为人与物、人与生活之间的连接。</p></div></div><div class="detail-copy"><div class="section-label">VISUAL STORY<br>视觉线索</div><div><p>01 / 搭底气：日常通勤用品，为每一次出发增添自信。<br>02 / 搭远方：旅行好物相伴，让探索与分享更自在。<br>03 / 搭灵感：文具与趣味小物汇聚创意，让日常灵感自由发生。</p><p class="muted">以放大镜建立统一的视觉线索，将产品细节与生活场景并置，呈现“搭”所连接的人、物与体验。</p></div></div><a class="back" href="index.html#work">← 返回全部作品</a>`;
}else{
 document.title='作品未找到 · 章耀升';
 detail.innerHTML=`<div class="section-label">PROJECT NOT FOUND</div><h1>这个作品<br>暂时不在这里。</h1><a class="back" href="index.html#work">← 返回全部作品</a>`;
}
