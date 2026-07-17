(() => {
  'use strict';

  /* ============================================================
     DATA
  ============================================================ */
  const CHAKRAS = [
    { id: 'root', num: 1, name: '第1チャクラ (Root)', theme: 'グラウンディング・安定', freqs: [396], color: 'spiritual-root', border: 'border-red-200', text: 'text-red-800', bg: 'bg-red-50', hex: '#991b1b',
      desc: '低く安定した396Hzの単音。足裏や大地とのつながりを感じる準備に使います。修行の始まりと終わりのグラウンディングに。' },
    { id: 'sacral', num: 2, name: '第2チャクラ (Sacral)', theme: '感情と創造性', freqs: [417], color: 'spiritual-sacral', border: 'border-orange-200', text: 'text-orange-800', bg: 'bg-orange-50', hex: '#ea580c',
      desc: '柔らかい417Hzのドローン。滞った感情を流し、新しい発想を受け入れる余白をつくります。' },
    { id: 'solar', num: 3, name: '第3チャクラ (Solar)', theme: '内なる太陽・意志', freqs: [528], color: 'spiritual-solar', border: 'border-amber-200', text: 'text-amber-800', bg: 'bg-amber-50', hex: '#ca8a04',
      desc: '「奇跡の周波数」と呼ばれることもある528Hz。名称は象徴的なものですが、意志と自信を静かに支える音として使います。' },
    { id: 'heart', num: 4, name: '第4チャクラ (Heart)', theme: '愛と解放', freqs: [639], color: 'spiritual-heart', border: 'border-green-200', text: 'text-green-800', bg: 'bg-green-50', hex: '#15803d',
      desc: '639Hzのあたたかい響き。人との関係や、自分自身へのやさしさを思い出す時間に使います。' },
    { id: 'throat', num: 5, name: '第5チャクラ (Throat)', theme: '表現力・真実', freqs: [741], color: 'spiritual-throat', border: 'border-sky-200', text: 'text-sky-800', bg: 'bg-sky-50', hex: '#0369a1',
      desc: '741Hzのクリアな音。言葉にできずにいた本音や、素直な表現を引き出す時間に。' },
    { id: 'thirdeye', num: 6, name: '第6チャクラ (Third Eye)', theme: '直感と明晰さ', freqs: [852], color: 'spiritual-thirdeye', border: 'border-indigo-200', text: 'text-indigo-800', bg: 'bg-indigo-50', hex: '#4338ca',
      desc: '眉間集中の音（852Hz）。眉間の奥で藍色の細い光が輝く様子を想像しながら聴きます。「視る練習」の基本音です。' },
    { id: 'crown', num: 7, name: '第7チャクラ (Crown)', theme: '高次元との接続', freqs: [963], color: 'spiritual-crown', border: 'border-purple-200', text: 'text-purple-800', bg: 'bg-purple-50', hex: '#7e22ce',
      desc: '963Hzの高く澄んだ音。頭頂の少し上、自分より大きなものとのつながりを感じる時間に使います。' },
  ];

  const SPECIAL_TRACK = {
    id: 'thirdeye-special', name: 'サードアイ開眼 特別瞑想', theme: '藍光一点観（らんこういってんかん）× 月輪観（がちりんかん）',
    freqs: [852, 528, 963], duration: 480,
    desc: '眉間集中の852Hzに、月輪観で使う528Hz／963Hzを重ねた、このサイト専用のブレンドです。脳内を駆け巡る高速のアルペジオとバイノーラル効果で松果体（しょうかたい）を刺激するイメージを持ちながら、眉間の藍色の光と胸の満月を同時に観想する上級者向けトラックです。',
  };

  const TRACK_OPTIONS = [...CHAKRAS.map(c => ({ id: c.id, label: c.name })), { id: SPECIAL_TRACK.id, label: '★ ' + SPECIAL_TRACK.name }];

  const STEPS = [
    {
      title: '音で整える：脳をチューニングする響き',
      badge: 'STEP 1', color: 'sky',
      lead: 'まずは、周波数の違う音を使い、脳と心を瞑想に入りやすい状態へ切り替えます。「梵輪Music」の7つのチャクラ音＋特別瞑想の中から、目的に合う音を選びましょう。どの音も小さな音量で、心地よい範囲だけ聴きます。',
      body: [
        ['修行の始まりには（第1チャクラ・396Hz）', '低く安定した音です。足裏や大地とのつながりを感じ、これから始まる練習の土台を整えます。'],
        ['眉間に意識を向けたい時は（第6チャクラ・852Hz）', '「視る練習」の基本音です。眉間の奥で藍色の細い光が輝く様子を想像しながら聴きます。'],
        ['さらに深めたい時は（サードアイ開眼 特別瞑想）', '852Hzに528Hz／963Hzを重ねたこのサイト専用のブレンドです。藍色の光と胸の満月を同時に観想する上級者向けの音です。'],
        ['修行の終わりには（第1チャクラ・396Hzへ戻る）', '足裏や部屋の感覚へ注意を戻すための低く安定した音として、始まりと同じ音を使います。'],
      ],
      point: '特定の周波数がチャクラを活性化するという効果は、科学的に確立したものではありません。この教材では、集中や切り替えを助ける目印として使います。',
      link: { href: '#music', label: '「梵輪Music」で音を選ぶ →' },
    },
    {
      title: '呼吸と姿勢：大地に根をはる',
      badge: 'STEP 2', color: 'teal',
      lead: 'サードアイを意識するには、ふらつかない「心の土台」が必要です。足裏と呼吸を感じるところから始めます。',
      body: [
        ['姿勢は座っても、寝てもOK', '椅子や座禅の姿勢が基本ですが、無理に座らなくても構いません。仰向あおむけに寝転がって、体の力を抜いた状態で行っても大丈夫です。眠くなってしまう場合は座る姿勢がおすすめです。'],
        ['グラウンディング瞑想', '座る・立つ場合は足を肩幅に開き、足裏全体が地面に吸いつく感覚を確かめます。寝る場合は、体全体が床やベッドに沈み込む感覚で構いません。自分から伸びた見えないコードが地球の中心と結ばれる様子を想像します。'],
        ['エネルギーの呼吸', '鼻から吸うときは大地のエネルギーを体いっぱいに取り込み、口から吐くときは不安や疲れを地球へ手放すつもりで行います。'],
        ['注意すること', '「頑張らなきゃ」と力を入れすぎると、頭が重くなることがあります。だらーんとした楽な気持ちで行いましょう。'],
      ],
      point: null,
    },
    {
      title: '観て鍛える：眉間にともる藍色の光',
      badge: 'STEP 3', color: 'indigo',
      lead: 'サードアイは眉間の中央にあるとされ、第6チャクラとも呼ばれます。見えることを競わず、静かに想像する練習です。くわしい9つの手順は「視る練習」セクションにまとめています。',
      glow: { caption: 'まぶたを閉じた奥に、このようなやわらかい藍色の光をそっと思い浮かべます。' },
      body: [
        ['藍色のイメージ', '目を閉じ、眉間の奥に深く落ち着いた藍色（インディゴ）の小さな光がともる様子を想像します。'],
        ['月輪観', '密教には、心の中に満月を思い描く観想があります。明るい月が少しずつ広がり、自分とまわりを包む様子をイメージします。'],
        ['この練習で育てたいこと', 'ひらめきや物事を見る視点、心の静けさに気づく力を育てます。感じ方には個人差があり、光が見えなくても失敗ではありません。'],
      ],
      point: null,
      link: { href: '#seeing', label: '「視る練習」9つの手順を見る →' },
    },
    {
      title: '密教で学ぶ：空海さんと即身成仏',
      badge: 'STEP 4', color: 'amber',
      lead: 'サードアイを考える手がかりになる観想や心の整え方は、空海が日本に伝えた密教の中にもあります。くわしくは「空海と密教」セクションへ。',
      body: [
        ['空海（弘法大師）', '中国へ渡って密教を学び、日本に伝え、高野山を開いたお坊さんです。'],
        ['三密', '「体（身：しん）・言葉（口：く）・心（意：い）」の3つを整える実践です。印を結び、真言を唱え、心を集中させます。'],
        ['即身成仏', '生きているこの身のままで、仏さまの智慧や慈悲に近づけると説く密教の教えです。'],
      ],
      point: null,
      link: { href: '#wisdom', label: '「空海と密教」を読む →' },
    },
    {
      title: '日記で残す：一言から始まる心の記録',
      badge: 'STEP 5', color: 'rose',
      lead: '練習したことや感じたことを書く「ジャーナリング」は、自分の小さな変化に気づくための方法です。',
      body: [
        ['一言日記', '「今日は月がきれいに見えた」「呼吸が楽だった」「特に何もなし」など、短い言葉で十分です。'],
        ['続ける工夫', '毎日同じ時間に書くと習慣にしやすくなります。記録を読み返すと、心と体の変化を見つけやすくなります。'],
      ],
      point: null,
      link: { href: '#journal', label: '「瞑想の記録」に今日の一言を書く →' },
    },
  ];

  const SEEING_STEPS = [
    {
      title: '姿勢を整える',
      summary: '背筋を軽く伸ばし、肩・あご・目のまわりの力を抜きます。椅子でも座禅でも、仰向あおむけに寝た姿勢でもかまいません。',
      detail: [
        '椅子に座る場合は足裏全体を床につけ、背もたれに頼りすぎず自分の背骨で軽く上体を支えます。',
        '座禅を組む場合は、あぐらや正座など無理のない姿勢を選び、座布団などで骨盤を立てます。',
        '仰向けに寝て行う場合は、ベッドや布団で体の力を抜いて構いません。ただし眠くなりやすいので、寝落ちしても大丈夫な時間帯に行いましょう。',
        '肩をすくめてストンと落とし、あごを軽く引き、目のまわりの筋肉をゆるめます。',
        '手は膝の上（座る場合）、または体の横かお腹の上に軽く置きます（寝る場合）。',
      ],
    },
    {
      title: '音を選ぶ',
      summary: '眉間集中の音（852Hz）を小さな音量で流します。「梵輪Music」の第6チャクラ、または特別瞑想トラックが目安です。',
      detail: [
        '音量はイヤホン・スピーカーいずれも「ようやく聞こえる」くらいの小さめが基本です。',
        '音楽そのものに集中しすぎず、意識を切り替えるための合図として使います。',
        '音が苦手だと感じた日は、無音のまま呼吸だけで手順2以降を進めてもかまいません。',
      ],
    },
    {
      title: '目を閉じて呼吸を3回',
      summary: '鼻から吸って口からゆっくり吐きます。吐くたびに、肩の力がひとつずつ抜けていく感覚を持ちます。',
      detail: [
        '1回目の呼吸で肩の力を、2回目の呼吸であごと目のまわりの力を、3回目の呼吸でお腹の緊張をゆるめるイメージです。',
        '吸う時間より吐く時間を少し長めにすると、自然に体がゆるみます。',
        '回数や秒数を厳密に数える必要はなく、呼吸そのものに意識を向けるだけで十分です。',
      ],
    },
    {
      title: '眉間の奥に藍色の光を置く',
      summary: '針の先ほどの小さな藍色（インディゴ）の光を、眉間の奥にイメージします。はっきり見えなくても「そこにあるような気がする」で十分です。',
      detail: [
        '目でぎゅっと見ようとするのではなく、「そこに小さな光がある」と静かに思い浮かべるだけで構いません。',
        '色や形がはっきりしなくても問題ありません。なんとなくそのあたりに何かがある、という感覚で十分です。',
        '眉間に力を入れすぎると頭が重くなることがあるため、額の力は抜いたままにします。',
      ],
    },
    {
      title: '雑念は雲のように見送る',
      summary: '考えが浮かんだら「今、考えが出たな」と気づき、追い払わずに呼吸へ戻ります。雑念に気づけた時点で、もう練習になっています。',
      detail: [
        '雑念を消そうとする必要はありません。むしろ雑念に気づけたこと自体がこの練習の成果です。',
        '「お腹が空いた」「明日の予定」など、どんな内容の雑念であっても同じように扱います。',
        '気づいたら評価せず、そっと呼吸か眉間の光へ意識を戻します。',
      ],
    },
    {
      title: '月輪観へ進む（慣れてきたら）',
      summary: '胸のあたりに白い満月を思い描き、その光が少しずつ広がって自分と部屋を包む様子をイメージします。',
      detail: [
        '月輪観（がちりんかん）は密教に伝わる観想法の一つで、胸の中心に清らかで満ちた月を思い描く瞑想です。月は仏教で清らかな心（菩提心）の象徴とされてきました。',
        '慣れないうちは無理に進めず、手順4の藍色の光だけを続けて構いません。',
        '満月の大きさや明るさは毎回変わっても問題なく、「広がっていく感じ」がつかめれば十分です。',
      ],
    },
    {
      title: '内側に一度だけ問いかける',
      summary: '「今の私に必要な気づきは何ですか？」と心の中で一度だけ問い、答えを無理に探さず静かに待ちます。浮かばなくても失敗ではありません。',
      detail: [
        '問いかけは1回だけにし、何度も繰り返して急かさないようにします。',
        '言葉が浮かぶ、映像が浮かぶ、何も浮かばない、そのすべてが自然な反応です。',
        'ここで浮かんだことは、あとで手順9の日記にそのまま書き留めます。',
      ],
    },
    {
      title: '現実に戻る',
      summary: '手のひらをこすって温め、足裏・部屋の音・室温の順に感じてから、ゆっくり目を開けます。',
      detail: [
        '急に目を開けたり、勢いよく立ち上がったりせず、必ずこの手順を踏んでから練習を終えます。',
        '手のひらをこすり合わせて生まれた温かさを、頬や首筋に当てるとさらに現実感が戻りやすくなります。',
        'めまいや違和感が残る場合は、目を開けたあともしばらく座ったままにします。',
      ],
    },
    {
      title: '一言日記に残す',
      summary: '感じたことを短く書きます。「藍色の点が揺れた」「特に何も見えなかった」、どちらも立派な記録です。',
      detail: [
        '「瞑想の記録」セクションのチップ選択と一言メモを使うと、続けやすく振り返りやすくなります。',
        '見えたもの・浮かんだ言葉・体の感覚など、良し悪しを判断せずそのまま書き留めます。',
        '毎回同じ形式で記録すると、あとから自分の変化に気づきやすくなります。',
      ],
    },
  ];

  const WISDOM_CARDS = [
    { title: '空海（弘法大師）', color: 'amber', text: '804年、遣唐使として唐へ渡り、青龍寺の恵果阿闍梨（けいかあじゃり）から密教の正統な相承を受けました。日本に帰国後、経典・曼荼羅・法具・儀礼を体系として整え、高野山を開いた僧です。' },
    { title: '三密（身密・口密・意密）', color: 'indigo', text: '姿勢を整えることは身密、音や真言に耳を澄ませることは口密、眉間の奥に藍色の光を観ることは意密に近い練習です。この教材の第六眼トレーニングも、この三密の考え方に沿って組み立てています。' },
    { title: '藍光一点観（らんこういってんかん）とは', color: 'indigo', text: 'この教材で「視る練習」の基本としている観想法です。眉間の奥に、針の先ほどの小さな藍色（インディゴ）の光をひとつだけ思い浮かべ、静かに見つめ続けます。何かがはっきり見えることを目的にするのではなく、一点に意識を集め、雑念に気づいて手放す力を育てるための練習です。' },
    { title: '月輪観（がちりんかん）とは', color: 'sky', text: '密教に伝わる観想法の一つで、胸の中央に汚れのない満月を思い描く瞑想です。月は仏教において清らかな心・菩提心の象徴とされ、月がだんだん大きく明るく広がり、自分とまわりを優しく包む様子を観じます。眉間の藍色の光を観る練習（藍光一点観）と並んで、この教材の「視る練習」で使う代表的な観想法です。' },
    { title: '即身成仏（そくしんじょうぶつ）', color: 'rose', text: '「この身体のままで仏になる」という教えです。急に超人的な存在になることではなく、迷いを見つめ、身体・言葉・心を整え、深い智慧に目覚めることを指します。' },
    { title: '大日如来（だいにちにょらい）と曼荼羅', color: 'purple', text: '密教では宇宙そのものが大日如来のはたらきとして見られます。曼荼羅には大日如来を中心に多くの仏が描かれ、慈悲と智慧の働きを表します。自分も大きな世界の一部だと気づくことが、ものごとを広く観る手がかりになります。' },
    { title: '密教伝来の道', color: 'teal', text: 'インドで発展した密教は、中央アジアを経て唐で体系化され、恵果阿闍梨から空海へ相承されました。空海はこれを日本で真言密教として整え、東寺・高野山を拠点に広めました。' },
    { title: '第六眼の現代的な意味', color: 'amber', text: '第六眼を「未来を当てる力」とだけ考えると練習は不安定になります。密教的に見れば、心の奥を澄ませ、ものごとの本質を感じ取る力です。呼吸が深くなったか、感情に気づけたか。その積み重ねを大切にします。' },
  ];

  const SAFETY_TABLE = [
    ['眠くなる', '体が休みたがっていることがあります。', '今日は3分で終え、日記に「眠い」と書きます。', '朝か夕方、座る前に水を飲みます。'],
    ['何も見えない', '失敗ではありません。見る力より、気づく力を育てています。', '眉間ではなく呼吸に戻ります。', '藍色の点を「想像する」だけで十分です。'],
    ['怖くなる', '集中で心が敏感になっている可能性があります。', 'すぐ停止し、部屋を明るくして足裏を感じます。', '次回は音量を下げ、時間を短くします。'],
    ['頭が痛い', '力み、音量、疲れが原因のことがあります。', 'その日は中止します。痛みが続く場合は休息や医療を優先します。', '眉間に力を入れず、目の周りをゆるめます。'],
    ['雑念が多い', '雑念に気づけた時点で練習になっています。', '「考えが出た」と心の中で言い、呼吸へ戻ります。', '日記に雑念の内容を一言だけ残します。'],
    ['音が苦手', '耳や体調に合わない日はあります。', 'すぐ停止し、無音で呼吸だけ行います。', 'スピーカーで小さく流すか、別の音源にします。'],
  ];

  const CHIP_OPTIONS = {
    body: ['眉間がむずむず', '肩が軽くなった', '足裏が冷たい', '力が抜けた', '頭が重い', '特に感じない'],
    mind: ['落ち着いた', 'スッキリした', '眠い', '不安があった', '雑念が多かった', '怖さを感じた'],
    vision: ['藍色が見えた', '揺れる光が見えた', '満月が見えた', '言葉が浮かんだ', '何も見えなかった'],
  };

  const MILESTONES = [
    { days: 7, label: '7日目', name: '初七日（しょなのか）の節目', desc: '仏教の法要では、亡くなった方のために7日ごとに供養を営む習わしがあります。まずは1週間、小さな習慣を切らさず続けることを最初の目安にします。' },
    { days: 21, label: '21日目', name: '三七日（さんしちにち）の節目', desc: '7日を3回重ねた節目で、行の世界でも「三七日の行」のように、集中して取り組む一区切りの期間として使われてきました。' },
    { days: 49, label: '49日目', name: '四十九日（しじゅうくにち）の節目', desc: '仏教で最も大切にされる法要の節目。大きな変化や区切りが訪れるとされる期間で、ここまで続けられたら一つの修行の完成とみなします。' },
  ];

  const CONSULT_EXAMPLES = [
    { title: '事例1）白龍の映像が見える相談', text: 'これは過去世の映像です。3世紀の日本、大和大国の王に従属していた部下兵士が、主君に対する後悔で転じた姿。' },
    { title: '事例2）5チャクラの時に喉がいがいがしますという相談', text: '3年前に離婚があって怒りがあった影響と考えられます。' },
    { title: '事例3）8歳児の時に孤独感があった映像が見えます', text: 'インナーチャイルドの可能性が高く、○○をしていけば問題ありません。' },
  ];

  /* ============================================================
     WEB AUDIO ENGINE — tones are synthesized on the fly, nothing to download
  ============================================================ */
  let audioCtx = null;
  let activePlayer = null;
  let wakeLock = null;
  let hallImpulse = null;
  const MASTER_VOLUME = 0.74;
  const AUTO_FADE_SECONDS = 6;

  function getCtx() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      try {
        audioCtx = new AudioContextClass({ latencyHint: 'playback', sampleRate: 48000 });
      } catch (e) {
        audioCtx = new AudioContextClass();
      }
    }
    if (audioCtx.state === 'suspended') audioCtx.resume().catch(() => {});
    return audioCtx;
  }

  function seededRandom(seed) {
    let value = seed >>> 0;
    return () => {
      value = (value * 1664525 + 1013904223) >>> 0;
      return value / 4294967296;
    };
  }

  function createHallImpulse(ctx) {
    if (hallImpulse) return hallImpulse;
    const seconds = 4.4;
    const length = Math.floor(ctx.sampleRate * seconds);
    const impulse = ctx.createBuffer(2, length, ctx.sampleRate);
    for (let channel = 0; channel < 2; channel++) {
      const data = impulse.getChannelData(channel);
      const random = seededRandom(20260717 + channel * 7919);
      let smoothed = 0;
      for (let i = 0; i < length; i++) {
        const time = i / ctx.sampleRate;
        const envelope = Math.pow(1 - i / length, 3.05);
        const highDamping = 0.52 + 0.48 * Math.exp(-time / 1.8);
        const noise = random() * 2 - 1;
        smoothed = noise * highDamping + smoothed * (1 - highDamping);
        data[i] = smoothed * envelope;
      }
      [0.039, 0.071, 0.113, 0.167].forEach((delay, index) => {
        const position = Math.floor((delay + channel * 0.0035) * ctx.sampleRate);
        if (position < length) data[position] += 0.32 / (index + 1);
      });
    }
    hallImpulse = impulse;
    return impulse;
  }

  function holdParam(param, now) {
    if (typeof param.cancelAndHoldAtTime === 'function') {
      param.cancelAndHoldAtTime(now);
    } else {
      const current = Math.max(0.0001, param.value);
      param.cancelScheduledValues(now);
      param.setValueAtTime(current, now);
    }
  }

  function clearPlayerTimers(player) {
    clearInterval(player.timer);
    clearTimeout(player.endTimer);
    clearTimeout(player.finishTimer);
    player.bellTimers.forEach(timer => clearTimeout(timer));
    player.bellTimers.length = 0;
  }

  function stopPlayerNodes(player, delaySeconds) {
    const stopAt = audioCtx.currentTime + delaySeconds;
    player.sources.forEach(source => {
      try { source.stop(stopAt); } catch (e) {}
    });
    setTimeout(() => {
      player.sources.forEach(source => {
        try { source.disconnect(); } catch (e) {}
      });
      player.nodes.forEach(node => {
        try { node.disconnect(); } catch (e) {}
      });
    }, (delaySeconds + 0.2) * 1000);
  }

  async function requestWakeLock() {
    try {
      if ('wakeLock' in navigator) {
        wakeLock = await navigator.wakeLock.request('screen');
      }
    } catch (e) { /* wake lock not available (e.g. Safari <16.4) — audio still plays, screen may just need to stay open manually */ }
  }
  function releaseWakeLock() {
    if (wakeLock) { wakeLock.release().catch(() => {}); wakeLock = null; }
  }
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState !== 'visible') return;
    if (activePlayer && !wakeLock) requestWakeLock();
    // iOS/Androidともに、バックグラウンドや画面ロックでAudioContextがsuspendedになることがあるため、
    // 画面に戻ったタイミングで必ず再開を試みる（安全網）
    if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume().catch(() => {});
  });

  function stopActivePlayer() {
    if (!activePlayer) return;
    const player = activePlayer;
    activePlayer = null;
    const ctx = getCtx();
    const now = ctx.currentTime;
    clearPlayerTimers(player);
    holdParam(player.gain.gain, now);
    player.gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.2);
    stopPlayerNodes(player, 2.3);
    releaseWakeLock();
    if (player.onStop) player.onStop();
  }

  function beginAutoFade(player) {
    if (activePlayer !== player || player.autoFading) return;
    player.autoFading = true;
    const ctx = getCtx();
    const now = ctx.currentTime;
    player.bellTimers.forEach(timer => clearTimeout(timer));
    player.bellTimers.length = 0;
    holdParam(player.gain.gain, now);
    player.gain.gain.exponentialRampToValueAtTime(0.0001, now + AUTO_FADE_SECONDS);
    player.finishTimer = setTimeout(() => {
      if (activePlayer !== player) return;
      activePlayer = null;
      clearPlayerTimers(player);
      stopPlayerNodes(player, 0.05);
      releaseWakeLock();
      if (player.onStop) player.onStop();
    }, AUTO_FADE_SECONDS * 1000);
  }

  function makePlayer(ctx) {
    const input = ctx.createGain();
    const subCut = ctx.createBiquadFilter();
    const warmth = ctx.createBiquadFilter();
    const brightness = ctx.createBiquadFilter();
    const dry = ctx.createGain();
    const reverbSend = ctx.createGain();
    const preDelay = ctx.createDelay(0.2);
    const reverbTone = ctx.createBiquadFilter();
    const convolver = ctx.createConvolver();
    const wet = ctx.createGain();
    const master = ctx.createGain();
    const cleanTop = ctx.createBiquadFilter();
    const compressor = ctx.createDynamicsCompressor();
    const output = ctx.createGain();

    subCut.type = 'highpass';
    subCut.frequency.value = 130;
    subCut.Q.value = 0.55;
    warmth.type = 'lowpass';
    warmth.frequency.value = 9000;
    warmth.Q.value = 0.25;
    brightness.type = 'highshelf';
    brightness.frequency.value = 1900;
    brightness.gain.value = 1;
    dry.gain.value = 0.9;
    reverbSend.gain.value = 0.22;
    preDelay.delayTime.value = 0.038;
    reverbTone.type = 'lowpass';
    reverbTone.frequency.value = 6000;
    reverbTone.Q.value = 0.3;
    convolver.buffer = createHallImpulse(ctx);
    wet.gain.value = 0.15;
    master.gain.value = 0.0001;
    cleanTop.type = 'lowpass';
    cleanTop.frequency.value = 5600;
    cleanTop.Q.value = 0.3;
    compressor.threshold.value = -14;
    compressor.knee.value = 16;
    compressor.ratio.value = 2;
    compressor.attack.value = 0.065;
    compressor.release.value = 0.75;
    output.gain.value = 0.82;

    input.connect(subCut);
    subCut.connect(warmth);
    warmth.connect(brightness);
    brightness.connect(dry);
    dry.connect(master);
    brightness.connect(reverbSend);
    reverbSend.connect(preDelay);
    preDelay.connect(reverbTone);
    reverbTone.connect(convolver);
    convolver.connect(wet);
    wet.connect(master);
    master.connect(cleanTop);
    cleanTop.connect(compressor);
    compressor.connect(output);
    output.connect(ctx.destination);

    const wave = ctx.createPeriodicWave(
      new Float32Array([0, 0, 0, 0, 0, 0]),
      new Float32Array([0, 1, 0.07, 0.018, 0.005, 0.0015]),
      { disableNormalization: false }
    );

    return {
      input, gain: master, wave,
      sources: [],
      nodes: [input, subCut, warmth, brightness, dry, reverbSend, preDelay, reverbTone, convolver, wet, master, cleanTop, compressor, output],
      bellTimers: [],
      timer: null,
      endTimer: null,
      finishTimer: null,
      autoFading: false,
      bellIndex: 0,
      onStop: null,
    };
  }

  function startSource(player, source) {
    source.start();
    player.sources.push(source);
  }

  function addPadVoice(player, options) {
    const ctx = getCtx();
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const voiceGain = ctx.createGain();
    const panner = ctx.createStereoPanner();
    const amplitudeLfo = ctx.createOscillator();
    const amplitudeDepth = ctx.createGain();
    const panLfo = ctx.createOscillator();
    const panDepth = ctx.createGain();

    if (options.sine) osc.type = 'sine';
    else osc.setPeriodicWave(player.wave);
    osc.frequency.value = options.frequency;
    osc.detune.value = options.detune || 0;
    voiceGain.gain.setValueAtTime(0.0001, now);
    voiceGain.gain.exponentialRampToValueAtTime(options.gain, now + options.attack);
    panner.pan.value = options.pan || 0;
    amplitudeLfo.frequency.value = options.breathe;
    amplitudeDepth.gain.value = options.gain * 0.07;
    panLfo.frequency.value = options.breathe * 0.61;
    panDepth.gain.value = 0.075;

    osc.connect(voiceGain);
    amplitudeLfo.connect(amplitudeDepth);
    amplitudeDepth.connect(voiceGain.gain);
    voiceGain.connect(panner);
    panLfo.connect(panDepth);
    panDepth.connect(panner.pan);
    panner.connect(player.input);

    startSource(player, osc);
    startSource(player, amplitudeLfo);
    startSource(player, panLfo);
    player.nodes.push(voiceGain, panner, amplitudeDepth, panDepth);
  }

  function addBell(player, frequency) {
    if (activePlayer !== player || player.autoFading) return;
    const ctx = getCtx();
    const now = ctx.currentTime;
    const panner = ctx.createStereoPanner();
    panner.pan.value = player.bellIndex % 2 ? 0.1 : -0.1;
    panner.connect(player.input);
    [
      { ratio: 1, gain: 0.015, decay: 7.5 },
      { ratio: 2.003, gain: 0.0025, decay: 4.8 },
    ].forEach(partial => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = frequency * partial.ratio;
      osc.detune.value = (player.bellIndex % 3 - 1) * 1.3;
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(partial.gain, now + 0.055);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + partial.decay);
      osc.connect(gain);
      gain.connect(panner);
      osc.start(now);
      osc.stop(now + partial.decay + 0.1);
      player.sources.push(osc);
      player.nodes.push(gain);
    });
    player.nodes.push(panner);
    player.bellIndex += 1;
  }

  function scheduleBells(player, freqs) {
    const bellFreqs = freqs.slice();
    const scheduleNext = () => {
      if (activePlayer !== player || player.autoFading) return;
      addBell(player, bellFreqs[player.bellIndex % bellFreqs.length]);
      const delay = 24000 + (player.bellIndex % 4) * 3400;
      const timer = setTimeout(scheduleNext, delay);
      player.bellTimers.push(timer);
    };
    const firstBell = setTimeout(scheduleNext, 6000);
    player.bellTimers.push(firstBell);
  }

  function contemporaryRoot(frequency) {
    const candidates = [frequency / 2, frequency / 4, frequency / 8]
      .filter(value => value >= 130 && value <= 330);
    return candidates.reduce((best, value) => {
      const bestDistance = Math.abs(Math.log2(best / 220));
      const distance = Math.abs(Math.log2(value / 220));
      return distance < bestDistance ? value : best;
    });
  }

  function playTone(freqs, durationSec, onTick, onEnd) {
    stopActivePlayer();
    const ctx = getCtx();
    requestWakeLock();
    const player = makePlayer(ctx);
    activePlayer = player;
    const now = ctx.currentTime;
    player.gain.gain.setValueAtTime(0.0001, now);
    player.gain.gain.exponentialRampToValueAtTime(MASTER_VOLUME, now + 6.2);

    const voiceScale = 1 / Math.sqrt(freqs.length);
    freqs.forEach((frequency, index) => {
      const root = contemporaryRoot(frequency);
      const side = index % 2 ? 1 : -1;
      const tonePan = freqs.length === 1 ? 0 : side * 0.16;
      addPadVoice(player, { frequency: root, gain: 0.038 * voiceScale, pan: side * 0.2, detune: -1.4, attack: 5 + index, breathe: 0.028 + index * 0.005 });
      addPadVoice(player, { frequency: root * 1.25, gain: 0.026 * voiceScale, pan: side * -0.18, detune: 1.2, attack: 6 + index, breathe: 0.031 + index * 0.005 });
      addPadVoice(player, { frequency: root * 1.5, gain: 0.03 * voiceScale, pan: side * 0.12, detune: 0, attack: 7, breathe: 0.021 });
      addPadVoice(player, { frequency, gain: 0.042 * voiceScale, pan: tonePan, sine: true, detune: 0, attack: 2.8, breathe: 0.019 + index * 0.004 });
    });
    scheduleBells(player, freqs);

    const startedAt = Date.now();
    player.timer = setInterval(() => onTick((Date.now() - startedAt) / 1000), 250);
    player.onStop = () => { if (onEnd) onEnd(); };
    if (durationSec) {
      const fadeStart = Math.max(0, durationSec - AUTO_FADE_SECONDS);
      player.endTimer = setTimeout(() => beginAutoFade(player), fadeStart * 1000);
    }
  }

  function fmtTime(sec) {
    sec = Math.max(0, Math.floor(sec));
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return m + ':' + String(s).padStart(2, '0');
  }

  /* ============================================================
     RENDER: chakra grid + special track
  ============================================================ */
  function ensoIcon(hex, num) {
    // simple ensō (禅の円相) brush-circle motif, left open like a hand-drawn ink stroke
    return `
      <svg viewBox="0 0 36 36" class="w-7 h-7 shrink-0" aria-hidden="true">
        <circle cx="18" cy="18" r="14" fill="none" stroke="${hex}" stroke-width="2.4" stroke-linecap="round"
          stroke-dasharray="76 14" transform="rotate(-98 18 18)" opacity="0.9"/>
        <text x="18" y="22.5" text-anchor="middle" font-size="11" font-weight="700" fill="${hex}" font-family="'Zen Antique Soft', serif">${num}</text>
      </svg>`;
  }

  function trackCardHTML(track, isSpecial) {
    const duration = track.duration || 300;
    const borderCls = isSpecial ? 'border-2 border-indigo-300' : `border ${track.border}`;
    return `
    <div class="chakra-card bg-white rounded-2xl overflow-hidden shadow-sm ${borderCls} transition-all duration-300 hover:shadow-md" data-track="${track.id}">
      <button type="button" class="track-toggle w-full text-left p-4 flex items-start gap-3" data-track="${track.id}">
        ${isSpecial
          ? `<span class="min-w-[1.75rem] h-7 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0 bg-indigo-800 text-white">★</span>`
          : ensoIcon(track.hex, track.num)}
        <span class="flex-1">
          <span class="block font-bold text-sm text-stone-800">${track.name}</span>
          <span class="block text-xs text-stone-500 mt-0.5">${track.theme}</span>
        </span>
        <span class="track-chevron text-stone-300 text-sm shrink-0 transition-transform">▾</span>
      </button>
      <div class="track-panel hidden px-4 pb-4" data-track="${track.id}">
        <div class="bg-sand-50 rounded-lg p-3 border border-sand-100 text-xs text-stone-600 leading-relaxed mb-3">${track.desc}</div>
        <div class="flex items-center gap-3 mb-2">
          <button type="button" class="play-btn flex items-center gap-1.5 ${isSpecial ? 'bg-indigo-800' : 'bg-stone-800'} text-white px-3 py-1.5 rounded-full text-xs font-bold hover:opacity-90 transition-all" data-track="${track.id}">▶ 再生</button>
          <button type="button" class="stop-btn flex items-center gap-1.5 bg-white border border-sand-300 text-stone-500 px-3 py-1.5 rounded-full text-xs font-bold hover:bg-sand-50 transition-all" data-track="${track.id}">■ 停止</button>
          <span class="time-label text-xs text-stone-400 font-mono ml-auto" data-track="${track.id}">0:00 / ${fmtTime(duration)}</span>
        </div>
        <div class="player-progress-track ${isSpecial ? 'text-indigo-700' : 'text-stone-700'}">
          <div class="player-progress-fill" data-track="${track.id}"></div>
        </div>
        <p class="text-[11px] text-stone-400 mt-2">周波数: ${track.freqs.join('Hz / ')}Hz　目安時間: ${Math.round(duration/60)}分</p>
      </div>
    </div>`;
  }

  function renderMusic() {
    const grid = document.getElementById('chakraGrid');
    grid.innerHTML = CHAKRAS.map(c => trackCardHTML({ ...c, duration: 300 }, false)).join('');

    const specialWrap = document.getElementById('specialTrackWrap');
    specialWrap.innerHTML = trackCardHTML(SPECIAL_TRACK, true);

    document.querySelectorAll('.track-toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.track;
        const panel = document.querySelector(`.track-panel[data-track="${id}"]`);
        const chevron = btn.querySelector('.track-chevron');
        const isHidden = panel.classList.contains('hidden');
        document.querySelectorAll('.track-panel').forEach(p => p.classList.add('hidden'));
        document.querySelectorAll('.track-chevron').forEach(c => c.style.transform = '');
        if (isHidden) {
          panel.classList.remove('hidden');
          chevron.style.transform = 'rotate(180deg)';
        }
      });
    });

    const allTracks = [...CHAKRAS.map(c => ({ ...c, duration: 300 })), SPECIAL_TRACK];
    document.querySelectorAll('.play-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.track;
        const track = allTracks.find(t => t.id === id);
        const timeLabel = document.querySelector(`.time-label[data-track="${id}"]`);
        const fill = document.querySelector(`.player-progress-fill[data-track="${id}"]`);
        const duration = track.duration || 300;
        playTone(track.freqs, duration, (elapsed) => {
          timeLabel.textContent = `${fmtTime(elapsed)} / ${fmtTime(duration)}`;
          fill.style.width = Math.min(100, (elapsed / duration) * 100) + '%';
        }, () => {
          timeLabel.textContent = `0:00 / ${fmtTime(duration)}`;
          fill.style.width = '0%';
        });
      });
    });
    document.querySelectorAll('.stop-btn').forEach(btn => {
      btn.addEventListener('click', stopActivePlayer);
    });
  }

  /* ============================================================
     RENDER: 5-step method
  ============================================================ */
  function renderSteps() {
    const list = document.getElementById('stepsList');
    list.innerHTML = STEPS.map((step, i) => `
      <details class="step-card bg-white rounded-2xl shadow-sm border border-sand-200 overflow-hidden" ${i === 0 ? 'open' : ''}>
        <summary class="p-5 flex items-center gap-3">
          <span class="text-[10px] font-bold tracking-widest text-${step.color}-700 bg-${step.color}-50 px-2.5 py-1 rounded-full shrink-0">${step.badge}</span>
          <span class="flex-1 font-bold text-stone-800">${step.title}</span>
          <span class="step-chevron text-stone-300">▾</span>
        </summary>
        <div class="px-5 pb-5">
          <p class="text-sm text-stone-600 leading-relaxed mb-3">${step.lead}</p>
          ${step.glow ? `
          <figure class="mb-3 rounded-xl overflow-hidden border border-${step.color}-100">
            <div class="h-36 flex items-center justify-center bg-gradient-to-b from-indigo-50 via-white to-indigo-50">
              <div class="glow-orb animate-breathe"></div>
            </div>
            <figcaption class="bg-${step.color}-50 text-${step.color}-800 text-xs leading-relaxed p-3">${step.glow.caption}</figcaption>
          </figure>` : ''}
          <div class="space-y-2 mb-3">
            ${step.body.map(([h, t]) => `
              <div class="bg-${step.color}-50 rounded-xl p-3.5 border border-${step.color}-100">
                <p class="text-xs font-bold text-${step.color}-800 mb-1">${h}</p>
                <p class="text-xs text-${step.color}-700 leading-relaxed">${t}</p>
              </div>`).join('')}
          </div>
          ${step.point ? `<div class="bg-amber-50 rounded-xl p-3.5 border border-amber-100 text-xs text-amber-800 leading-relaxed mb-3"><span class="font-bold">科学についてのPOINT：</span>${step.point}</div>` : ''}
          ${step.link ? `<a href="${step.link.href}" class="inline-block text-xs font-bold text-indigo-700 hover:underline mb-3">${step.link.label}</a>` : ''}
        </div>
      </details>
    `).join('');
  }

  /* ============================================================
     RENDER: seeing practice steps
  ============================================================ */
  function renderSeeing() {
    const ol = document.getElementById('seeingSteps');
    ol.innerHTML = SEEING_STEPS.map((step, i) => `
      <li>
        <details class="step-card bg-white rounded-xl shadow-sm border border-sand-200 overflow-hidden">
          <summary class="p-4 flex items-start gap-4">
            <span class="min-w-[1.75rem] h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 bg-indigo-800 text-white">${i + 1}</span>
            <span class="flex-1">
              <span class="block text-sm font-bold text-stone-800 mb-1">${step.title}</span>
              <span class="block text-xs text-stone-600 leading-relaxed">${step.summary}</span>
            </span>
            <span class="step-chevron text-stone-300 text-sm shrink-0 mt-1">▾</span>
          </summary>
          <div class="px-4 pb-4 pl-[2.75rem]">
            <ul class="space-y-1.5">
              ${step.detail.map(d => `
                <li class="text-xs text-stone-600 leading-relaxed flex gap-2">
                  <span class="text-indigo-300 shrink-0">・</span><span>${d}</span>
                </li>`).join('')}
            </ul>
          </div>
        </details>
      </li>`).join('');
  }

  /* ============================================================
     RENDER: wisdom cards
  ============================================================ */
  function renderWisdom() {
    const grid = document.getElementById('wisdomCards');
    grid.innerHTML = WISDOM_CARDS.map(w => `
      <div class="bg-white rounded-2xl p-5 shadow-sm border border-${w.color}-100">
        <p class="font-bold text-${w.color}-800 text-sm mb-2">${w.title}</p>
        <p class="text-xs text-stone-600 leading-relaxed">${w.text}</p>
      </div>`).join('');
  }

  /* ============================================================
     RENDER: safety table
  ============================================================ */
  function renderSafety() {
    const wrap = document.getElementById('safetyTable');
    wrap.innerHTML = SAFETY_TABLE.map(row => `
      <details class="step-card bg-white rounded-xl shadow-sm border border-sand-200 overflow-hidden">
        <summary class="p-4 flex items-center gap-3">
          <span class="flex-1 font-bold text-sm text-red-800">${row[0]}</span>
          <span class="step-chevron text-stone-300 text-sm shrink-0">▾</span>
        </summary>
        <div class="px-4 pb-4 space-y-2 text-xs text-stone-600 leading-relaxed">
          <div><span class="block text-[10px] font-bold text-stone-400 mb-0.5">意味の考え方</span>${row[1]}</div>
          <div><span class="block text-[10px] font-bold text-stone-400 mb-0.5">すぐ行う対応</span>${row[2]}</div>
          <div><span class="block text-[10px] font-bold text-stone-400 mb-0.5">次回のコツ</span>${row[3]}</div>
        </div>
      </details>`).join('');
  }

  function renderConsultExamples() {
    const wrap = document.getElementById('consultExamples');
    if (!wrap) return;
    wrap.innerHTML = CONSULT_EXAMPLES.map(ex => `
      <details class="step-card bg-sand-50 rounded-xl border border-sand-100 overflow-hidden">
        <summary class="p-4 flex items-center gap-3">
          <span class="flex-1 text-xs font-bold text-stone-700">${ex.title}</span>
          <span class="step-chevron text-stone-300 text-sm shrink-0">▾</span>
        </summary>
        <div class="px-4 pb-4 text-xs text-stone-600 leading-relaxed">${ex.text}</div>
      </details>`).join('');
  }

  /* ============================================================
     JOURNAL — chips + text + timeline, backed by localStorage
  ============================================================ */
  const STORAGE_KEY = 'bonrinKaigenJournal';
  const selectedChips = { body: new Set(), mind: new Set(), vision: new Set() };

  function todayKey(d = new Date()) {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  }

  function loadEntries() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
    catch (e) { return {}; }
  }
  function saveEntries(entries) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
      return true;
    } catch (e) {
      alert('この端末・ブラウザでは記録を保存できませんでした（プライベートブラウジング中などが原因の場合があります）。');
      return false;
    }
  }

  function renderChipGroup(containerId, category) {
    const el = document.getElementById(containerId);
    el.innerHTML = CHIP_OPTIONS[category].map(label => `<span class="chip" data-cat="${category}" data-label="${label}">${label}</span>`).join('');
    el.querySelectorAll('.chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const label = chip.dataset.label;
        const set = selectedChips[category];
        if (set.has(label)) { set.delete(label); chip.classList.remove('active'); }
        else { set.add(label); chip.classList.add('active'); }
      });
    });
  }

  function fillTrackSelect() {
    const sel = document.getElementById('fieldTrack');
    TRACK_OPTIONS.forEach(t => {
      const opt = document.createElement('option');
      opt.value = t.id; opt.textContent = t.label;
      sel.appendChild(opt);
    });
  }

  function resetForm() {
    selectedChips.body.clear(); selectedChips.mind.clear(); selectedChips.vision.clear();
    document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    document.getElementById('fieldMinutes').value = '';
    document.getElementById('fieldTrack').value = '';
    document.getElementById('fieldNote').value = '';
  }

  function loadTodayIntoForm() {
    const entries = loadEntries();
    const entry = entries[todayKey()];
    if (!entry) return;
    document.getElementById('fieldMinutes').value = entry.minutes || '';
    document.getElementById('fieldTrack').value = entry.track || '';
    document.getElementById('fieldNote').value = entry.note || '';
    ['body', 'mind', 'vision'].forEach(cat => {
      (entry[cat] || []).forEach(label => selectedChips[cat].add(label));
    });
    document.querySelectorAll('.chip').forEach(chip => {
      const cat = chip.dataset.cat, label = chip.dataset.label;
      if (selectedChips[cat].has(label)) chip.classList.add('active');
    });
  }

  function computeStreak(entries) {
    let streak = 0;
    let d = new Date();
    while (entries[todayKey(d)]) {
      streak++;
      d.setDate(d.getDate() - 1);
    }
    return streak;
  }

  function renderWeekStrip() {
    const entries = loadEntries();
    const wrap = document.getElementById('weekStrip');
    const days = ['日', '月', '火', '水', '木', '金', '土'];
    const now = new Date();
    const startOfWeek = new Date(now);
    startOfWeek.setDate(now.getDate() - now.getDay());

    let html = '';
    for (let i = 0; i < 7; i++) {
      const d = new Date(startOfWeek);
      d.setDate(startOfWeek.getDate() + i);
      const key = todayKey(d);
      const done = !!entries[key];
      const isToday = key === todayKey(now);
      html += `<div class="week-dot ${done ? 'done' : ''} ${isToday ? 'today' : ''}">${days[i]}</div>`;
    }
    wrap.innerHTML = html;
    document.getElementById('streakBadge').textContent = `🔥 ${computeStreak(entries)}日連続`;
  }

  function trackLabel(id) {
    const t = TRACK_OPTIONS.find(t => t.id === id);
    return t ? t.label : '';
  }

  /* ---- 7/21/49-day milestones ---- */
  function renderMilestones() {
    const streak = computeStreak(loadEntries());
    const wrap = document.getElementById('milestoneList');
    wrap.innerHTML = MILESTONES.map(m => {
      const achieved = streak >= m.days;
      const pct = Math.min(100, Math.round((streak / m.days) * 100));
      return `
      <div class="flex gap-3 items-start">
        <span class="min-w-[2.25rem] h-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${achieved ? 'bg-indigo-800 text-white' : 'bg-sand-100 text-stone-400'}">${achieved ? '✓' : m.days}</span>
        <div class="flex-1">
          <p class="text-xs font-bold text-stone-700">${m.label}　<span class="font-normal text-stone-400">${m.name}</span></p>
          <p class="text-[11px] text-stone-500 leading-relaxed mt-0.5 mb-1.5">${m.desc}</p>
          <div class="player-progress-track text-indigo-700"><div class="player-progress-fill" style="width:${pct}%"></div></div>
        </div>
      </div>`;
    }).join('');
  }

  /* ---- calendar review ---- */
  let calViewDate = new Date();
  let selectedDate = todayKey();

  function renderCalendarHeader() {
    const header = document.getElementById('calWeekHeader');
    header.innerHTML = ['日', '月', '火', '水', '木', '金', '土'].map(d => `<div>${d}</div>`).join('');
  }

  function renderCalendar() {
    const entries = loadEntries();
    const year = calViewDate.getFullYear();
    const month = calViewDate.getMonth();
    document.getElementById('calLabel').textContent = `${year}年 ${month + 1}月`;

    const firstWeekday = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const today = todayKey();

    let cells = '';
    for (let i = 0; i < firstWeekday; i++) cells += `<div></div>`;
    for (let day = 1; day <= daysInMonth; day++) {
      const key = todayKey(new Date(year, month, day));
      const has = !!entries[key];
      const cls = ['cal-day'];
      if (has) cls.push('has-entry');
      if (key === today) cls.push('today');
      if (key === selectedDate) cls.push('selected');
      cells += `<button type="button" class="${cls.join(' ')}" data-date="${key}">${day}</button>`;
    }
    document.getElementById('calGrid').innerHTML = cells;

    document.querySelectorAll('.cal-day').forEach(btn => {
      btn.addEventListener('click', () => {
        selectedDate = btn.dataset.date;
        renderCalendar();
        renderDayDetail();
      });
    });
  }

  function renderDayDetail() {
    const entries = loadEntries();
    const entry = entries[selectedDate];
    const panel = document.getElementById('calDayDetail');
    if (!entry) {
      panel.innerHTML = `
        <p class="text-sm font-bold text-stone-700 mb-1">${selectedDate}</p>
        <p class="text-xs text-stone-400">${selectedDate === todayKey() ? 'まだ今日の記録がありません。上のフォームから記録してみましょう。' : '記録がありません。'}</p>`;
      return;
    }
    const tags = [...(entry.body || []), ...(entry.mind || []), ...(entry.vision || [])];
    const previewBits = [];
    if (entry.minutes) previewBits.push(`${entry.minutes}分`);
    if (tags.length) previewBits.push(`${tags.length}件のタグ`);
    if (entry.note) previewBits.push(entry.note.slice(0, 14) + (entry.note.length > 14 ? '…' : ''));
    const preview = previewBits.length ? previewBits.join(' ・ ') : '記録あり';
    const isToday = selectedDate === todayKey();

    panel.innerHTML = `
      <details class="step-card" ${isToday ? 'open' : ''}>
        <summary class="flex items-center gap-2">
          <span class="text-sm font-bold text-stone-700 shrink-0">${selectedDate}</span>
          <span class="text-xs text-stone-400 truncate flex-1">${preview}</span>
          <span class="step-chevron text-stone-300 text-sm shrink-0">▾</span>
        </summary>
        <div class="pt-3">
          <div class="flex items-center justify-between mb-2">
            <p class="text-xs text-stone-400">${entry.minutes ? `実践時間：${entry.minutes}分` : ''}</p>
            <button type="button" id="calDeleteBtn" class="text-xs text-stone-300 hover:text-red-500">削除</button>
          </div>
          ${entry.track ? `<p class="text-xs text-stone-400 mb-1">🎧 ${trackLabel(entry.track)}</p>` : ''}
          ${tags.length ? `<div class="flex flex-wrap gap-1.5 mb-2">${tags.map(t => `<span class="timeline-tag">${t}</span>`).join('')}</div>` : ''}
          ${entry.note ? `<p class="text-xs text-stone-600 leading-relaxed">${entry.note}</p>` : ''}
        </div>
      </details>`;

    const delBtn = document.getElementById('calDeleteBtn');
    if (delBtn) delBtn.addEventListener('click', () => {
      if (!confirm(selectedDate + ' の記録を削除しますか？')) return;
      const entries = loadEntries();
      delete entries[selectedDate];
      saveEntries(entries);
      renderCalendar();
      renderDayDetail();
      renderWeekStrip();
      renderMilestones();
      if (selectedDate === todayKey()) resetForm();
    });
  }

  function initJournal() {
    renderChipGroup('chipsBody', 'body');
    renderChipGroup('chipsMind', 'mind');
    renderChipGroup('chipsVision', 'vision');
    fillTrackSelect();
    loadTodayIntoForm();
    renderWeekStrip();
    renderMilestones();
    renderCalendarHeader();
    renderCalendar();
    renderDayDetail();

    document.getElementById('journalDateLabel').textContent = `今日の記録（${todayKey()}）`;

    // if the tab is left open across midnight, keep "today" in sync without reloading the page
    let lastKnownToday = todayKey();
    setInterval(() => {
      const nowKey = todayKey();
      if (nowKey === lastKnownToday) return;
      const wasOnOldToday = selectedDate === lastKnownToday;
      lastKnownToday = nowKey;
      document.getElementById('journalDateLabel').textContent = `今日の記録（${nowKey}）`;
      renderWeekStrip();
      renderMilestones();
      if (wasOnOldToday) selectedDate = nowKey;
      renderCalendar();
      renderDayDetail();
    }, 60000);

    document.getElementById('journalForm').addEventListener('submit', (ev) => {
      ev.preventDefault();
      const entries = loadEntries();
      entries[todayKey()] = {
        minutes: document.getElementById('fieldMinutes').value,
        track: document.getElementById('fieldTrack').value,
        note: document.getElementById('fieldNote').value,
        body: [...selectedChips.body],
        mind: [...selectedChips.mind],
        vision: [...selectedChips.vision],
        savedAt: new Date().toISOString(),
      };
      saveEntries(entries);
      renderWeekStrip();
      renderMilestones();
      selectedDate = todayKey();
      renderCalendar();
      renderDayDetail();
      const btn = ev.target.querySelector('button[type="submit"]');
      const original = btn.textContent;
      btn.textContent = '保存しました ✓';
      setTimeout(() => { btn.textContent = original; }, 1600);
    });

    document.getElementById('clearTodayBtn').addEventListener('click', () => {
      if (!confirm('今日の入力内容をクリアしますか？（保存済みの記録は消えません）')) return;
      resetForm();
    });

    document.getElementById('calPrevBtn').addEventListener('click', () => {
      calViewDate.setMonth(calViewDate.getMonth() - 1);
      renderCalendar();
    });
    document.getElementById('calNextBtn').addEventListener('click', () => {
      calViewDate.setMonth(calViewDate.getMonth() + 1);
      renderCalendar();
    });
  }

  /* ============================================================
     NAV (mobile toggle)
  ============================================================ */
  function initNav() {
    const toggle = document.getElementById('navToggle');
    const mobile = document.getElementById('navLinksMobile');
    toggle.addEventListener('click', () => {
      mobile.classList.toggle('hidden');
      mobile.classList.toggle('flex');
    });
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobile.classList.add('hidden');
        mobile.classList.remove('flex');
      });
    });
  }

  /* ============================================================
     INIT
  ============================================================ */
  document.addEventListener('DOMContentLoaded', () => {
    initNav();
    renderMusic();
    renderSteps();
    renderSeeing();
    renderWisdom();
    renderSafety();
    renderConsultExamples();
    initJournal();
  });
})();
