// Every locale must match the shape of `en` exactly; scripts/build.mjs rejects missing keys or list items.
// Card, region and protocol facts follow the live App Store listing (id6760978958) and the app's public source.
export const locales = {
  en: {
    name: 'English', htmlLang: 'en', store: 'us', ogLocale: 'en_US',
    title: 'CardBal — Transit cards, decoded. For iPhone.',
    description: 'Read supported transit and stored-value cards with your iPhone. See balances, trip history, card details and raw data for cards from Japan, South Korea, China, Hong Kong, Mongolia and France — including Apple Wallet cards on another device in Service Mode.',
    skip: 'Skip to content', language: 'Choose language', menu: 'Menu', navLabel: 'Sections',
    nav: ['The read', 'Pro', 'Cards', 'Service Mode', 'FAQ'],
    download: 'Get CardBal', appStore: ['Download on the', 'App Store'],
    hero: {
      kicker: 'Pro transit card reader for iPhone',
      title: ['Transit cards,', 'decoded.'],
      body: 'Hold a card to your iPhone and CardBal reads what the chip stores: the balance, trips where available, card details and raw data. From Suica to T-money, Octopus to Lignes d’Azur.',
      secondary: 'See supported cards', meta: 'NFC-capable iPhone · iOS 16 or later',
      service: 'Also reads Apple Wallet cards in Service Mode',
      alt: 'CardBal’s card collection with T-money, City Union, Climate Card, U-Money, OKICA and Hayakaken cards and their balances.'
    },
    board: {
      label: 'Now reading', note: 'A sample of the card families CardBal reads.',
      columns: ['Card', 'Standard', 'Region'],
      sr: 'Supported cards include Suica, PASMO, ICOCA, Rakuten Edy, T-money, Cashbee, Octopus, T-Union city cards, U-Money and Lignes d’Azur.',
      stats: [['6', 'regions'], ['4', 'card standards'], ['300+', 'T-Union city cards'], ['iOS 16+', 'NFC-capable iPhone']]
    },
    read: {
      kicker: 'Inside the read', title: ['From balance', 'to bytes.'],
      intro: 'Every card family stores data its own way. CardBal decodes each format and shows the result in plain language, with the raw data one tap away.',
      keys: { family: 'Family', balance: 'Balance', standard: 'Standard', issued: 'Issued', card: 'Card', type: 'Type', raw: 'Raw data' },
      chapters: [
        { title: 'Balance, before the gate.', body: 'See what’s left on a supported card in a moment — before the ticket gate, the bus or the convenience-store counter. Apple Wallet cards on another device can be read in Service Mode.', shot: 'Rakuten Edy', alt: 'CardBal showing a scanned Rakuten Edy card, its balance, and card details.' },
        { title: 'Every field, decoded.', body: 'Card family, number, issue date and type: CardBal turns the card’s own data structures into fields you can read. Values it can’t name are shown as raw codes.', shot: 'Seoul Climate Card', alt: 'CardBal showing a Seoul Climate Card and its decoded card information.' },
        { title: 'Raw data, when you want it.', body: 'Open Raw Data to see the structured payload behind each parsed value. For KS X 6924 cards, an optional Developer Mode probes further with read-only commands and keeps every readable record.', shot: 'Octopus', alt: 'CardBal showing an Octopus card’s balance, details and raw data.' }
      ]
    },
    pro: {
      kicker: 'Pro tools', title: ['Every ride, mapped.', 'Every city, counted.'],
      intro: 'Beyond the balance, CardBal turns what your cards remember into a personal transit record: a ride map, a transit atlas and a ride-by-ride log.',
      items: [
        { title: 'Ride history', body: 'Each tap on and off, with station, line, distance and fare where the card stores them.', alt: 'CardBal ride history for a T-money card, with tap-on and tap-off records, stations, distances and fares.' },
        { title: 'Ride Map', body: 'The routes your cards remember, drawn on a map and filtered by card.', alt: 'CardBal Ride Map with ride clusters across East Asia and card, route, station and record counts.' },
        { title: 'Transit Atlas', body: 'Every city and province you have ridden in, with record counts for each place.', alt: 'CardBal Transit Atlas globe highlighting cities and provinces with recorded rides.' },
        { title: 'Card details', body: 'Balance, technology, brand and every decoded field, with a full hex export.', alt: 'CardBal card details for a T-money card with balance, last scan time, technology and brand.' }
      ],
      note: 'Screens from CardBal 2.4 with real cards. Card numbers are masked by the app’s privacy setting.'
    },
    more: {
      kicker: 'Beyond the balance', title: ['Made for the commute.', 'Ready for the trip.'],
      journeys: {
        title: 'Every ride has a story.', body: 'Explore the trips and transactions your card stores, with station names and map views where available.',
        next: 'Next', stops: ['Shibuya', 'Harajuku', 'Shinjuku'],
        cities: ['Tokyo', 'Seoul', 'Beijing', 'Hong Kong', 'Ulaanbaatar'],
        routes: ['Shibuya → Shinjuku', 'Hongik Univ. → Seoul', 'Dongzhimen → Yonghegong', 'Central → Tsim Sha Tsui', 'MUBIS → Central Library']
      },
      collection: { title: 'A wallet that’s yours.', body: 'Save multiple cards, give them names and spot them instantly with your own card photos.' },
      device: { title: 'On your device. In your iCloud.', body: 'Saved cards stay on your iPhone, with iCloud backup and file export when you need them.', labels: ['On device', 'iCloud backup', 'File export'] },
      reports: { title: 'Help map every station.', body: 'Report a missing station or request a station-code correction from any saved card or trip, with a map pin. Requests appear on a public list.', link: 'View station reports' },
      source: { title: 'Open source.', body: 'See exactly how each card family is decoded. CardBal’s source code is public on GitHub.', link: 'View the source' }
    },
    cards: {
      kicker: 'Network', title: ['Six regions.', 'One reader.'],
      intro: 'Transit and stored-value cards from Tokyo to Nice — read from the physical card, or from a supported Apple Wallet card in Service Mode. Coverage keeps growing.',
      regions: [
        { name: 'Japan', detail: 'Transit IC cards nationwide, plus nanaco, Rakuten Edy and WAON e-money.', cards: ['Suica', 'PASMO', 'ICOCA', 'Kitaca', 'TOICA', 'manaca', 'SUGOCA', 'nimoca', 'Hayakaken', 'SAPICA', 'IruCa', 'OKICA', 'nanaco', 'Rakuten Edy', 'WAON'] },
        { name: 'South Korea', detail: 'T-money, EZL and Cashbee, plus compatible KS X 6924 cards.', cards: ['T-money', 'EZL', 'Cashbee'] },
        { name: 'China', detail: 'More than 300 T-Union city cards, plus City Union card families.', cards: ['Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen', '300+ cities'] },
        { name: 'Hong Kong', detail: 'Octopus, with its stored balance and available card details.', cards: ['Octopus'] },
        { name: 'Mongolia', detail: 'U-Money cards, with Ulaanbaatar station data.', cards: ['U-Money'] },
        { name: 'France', detail: 'Lignes d’Azur cards in Nice, using Calypso.', cards: ['Lignes d’Azur'] }
      ],
      note: 'Readable balances and history depend on the card, its issuer and the data stored on it. Support can vary between card versions.'
    },
    ways: {
      kicker: 'Two ways to read', title: ['A card in hand.', 'Or one in Wallet.'],
      intro: 'Read a physical card directly, or read a supported Apple Wallet transit card from another iPhone or Apple Watch in Service Mode.',
      physical: { label: 'Physical card', steps: [['Open CardBal', 'Tap Scan on your iPhone.'], ['Hold it near the top', 'Keep the card near the top of your iPhone until the read finishes.'], ['Read and save', 'Check the balance and available trips, then save the card to your collection.']] },
      wallet: {
        label: 'Apple Wallet · Service Mode',
        steps: [['Choose the card', 'Open Wallet on the device that holds your transit card.'], ['Turn on Service Mode', 'On iPhone, open the card’s details and enable Service Mode. For Apple Watch, follow Apple’s guide.'], ['Scan with CardBal', 'Start a scan in CardBal on a separate iPhone, then bring the two devices close together at their NFC reading points.']],
        note: 'Use two devices: one holds the Wallet card, the other runs CardBal. Service Mode availability and readable information depend on the card and issuer.',
        link: 'Apple’s Service Mode guide', linkUrl: 'https://support.apple.com/en-us/120474'
      }
    },
    faq: {
      kicker: 'Before you tap', title: 'Good to know.', reports: 'View station reports',
      items: [
        ['What do I need?', 'An NFC-capable iPhone running iOS 16 or later and a supported card. Use a physical card, or a supported Apple Wallet transit card on another device with Service Mode enabled. CardBal uses the iPhone’s built-in NFC reader.'],
        ['Can I read an Apple Wallet card on another device?', 'Yes. Put a supported transit card in Service Mode on the iPhone or Apple Watch that holds it, then scan it with CardBal on a separate iPhone. On the card-holding iPhone, open Wallet, select the card, open Card Details, and enable Service Mode where available. Card support and readable information depend on the issuer.'],
        ['Can CardBal top up my card?', 'CardBal reads card information. To add credit or pay for a journey, use the card issuer’s official services.'],
        ['Why do some cards show less history?', 'Each card family stores different information and a limited number of records. CardBal displays what it can read and decode; some stations or transactions may be unavailable.'],
        ['How is my data handled?', 'Saved cards are stored on your device. iCloud can sync backups. Optional Korean-card contributions and station reports share the data described in their app disclosures; the app also uses Firebase Analytics. See the privacy policy for details.'],
        ['Can I help with an unrecognized station?', 'Yes. Open a saved card or trip in CardBal to report a missing station or request a station-code correction. You can add a station name, optional details, and a map pin.']
      ]
    },
    end: { kicker: 'Next stop', title: ['Read the cards', 'you already carry.'], body: 'CardBal for iPhone. Download it on the App Store.', meta: 'Requires iOS 16 or later and an NFC-capable iPhone.' },
    footer: {
      tagline: 'The pro transit card reader for iPhone.', resources: 'Resources', languages: 'Languages',
      privacy: 'Privacy policy', reports: 'Station reports', source: 'Source code', top: 'Back to top',
      legal: 'Card names and artwork belong to their respective owners. CardBal is an independent reader and is not affiliated with transit operators.'
    },
    notFound: 'This stop isn’t on the map.', back: 'Back to CardBal'
  },
  zh: {
    name: '简体中文', htmlLang: 'zh-Hans', store: 'cn', ogLocale: 'zh_CN',
    title: 'CardBal — 你的交通卡，一读就懂。',
    description: '用 iPhone 读取支持的交通卡与储值卡：查看余额、乘车记录、卡片详情与原始数据，覆盖日本、韩国、中国大陆、中国香港、蒙古国和法国，也能读取另一台设备上开启服务模式的 Apple 钱包交通卡。',
    skip: '跳至正文', language: '选择语言', menu: '菜单', navLabel: '页面导航',
    nav: ['读卡解析', '专业功能', '支持的卡', '服务模式', '常见问题'],
    download: '下载 CardBal', appStore: ['下载于', 'App Store'],
    hero: {
      kicker: 'iPhone 专业交通卡读卡器',
      title: ['你的交通卡，', '一读就懂。'],
      body: '把卡片靠近 iPhone，CardBal 就能读出芯片里存储的内容：余额、可读取的行程、卡片详情与原始数据。从 Suica 到 T-money，从八达通到 Lignes d’Azur。',
      secondary: '查看支持的卡', meta: '支持 NFC 的 iPhone · iOS 16 及以上',
      service: '也能读取服务模式下的 Apple 钱包交通卡',
      alt: 'CardBal 的卡片收藏界面，展示 T-money、城市一卡通、气候同行卡、U-Money、OKICA 和 Hayakaken 等卡片及其余额。'
    },
    board: {
      label: '正在读取', note: 'CardBal 支持的部分卡片。',
      columns: ['卡片', '标准', '地区'],
      sr: '支持的卡片包括 Suica、PASMO、ICOCA、乐天 Edy、T-money、Cashbee、八达通、交通联合城市卡、U-Money 和 Lignes d’Azur。',
      stats: [['6', '个地区'], ['4', '种卡片标准'], ['300+', '交通联合城市卡'], ['iOS 16+', '支持 NFC 的 iPhone']]
    },
    read: {
      kicker: '读卡解析', title: ['从余额，', '到字节。'],
      intro: '每种卡片都以自己的方式存储数据。CardBal 逐一解析这些格式，用清晰易懂的方式呈现结果，原始数据也只需轻点一下。',
      keys: { family: '卡片类型', balance: '余额', standard: '标准', issued: '发卡日期', card: '卡片', type: '卡种', raw: '原始数据' },
      chapters: [
        { title: '进站之前，先看余额。', body: '片刻之间就能看到受支持卡片的剩余金额，无论是在闸机前、公交上，还是便利店收银台前。另一台设备上的 Apple 钱包交通卡，也能在服务模式下读取。', shot: '乐天 Edy', alt: 'CardBal 展示已读取的乐天 Edy 卡、余额与卡片详情。' },
        { title: '每个字段，都已解析。', body: '卡片类型、卡号、发卡日期与卡种：CardBal 把卡片自身的数据结构转换成可读的字段。无法识别的值，会以原始代码如实显示。', shot: '首尔气候同行卡', alt: 'CardBal 展示首尔气候同行卡及解析后的卡片信息。' },
        { title: '原始数据，随时查看。', body: '打开 Raw Data，查看每个解析值背后的结构化数据。对于 KS X 6924 卡片，可选的开发者模式会以只读指令进一步探测，并保留所有可读取的记录。', shot: '八达通', alt: 'CardBal 展示八达通卡的余额、卡片详情与原始数据。' }
      ]
    },
    pro: {
      kicker: '专业工具', title: ['每一程，都在地图上。', '每座城市，都有记录。'],
      intro: '除了余额，CardBal 还会把卡里保存的记录整理成你的个人出行档案：乘车地图、交通地图集和逐笔乘车记录。',
      items: [
        { title: '乘车记录', body: '每一次进出站或上下车，在卡内有保存时显示站点、线路、距离与票价。', alt: 'CardBal 中 T-money 卡的乘车记录，显示进出站、站点、距离与票价。' },
        { title: '乘车地图', body: '把卡片记住的路线绘制在地图上，并可按卡片筛选。', alt: 'CardBal 乘车地图，显示东亚各地的乘车分布，以及卡片、路线、站点和记录数量。' },
        { title: '交通地图集', body: '你乘车经过的每个城市和省份，以及各地的记录数量。', alt: 'CardBal 交通地图集地球视图，标出有乘车记录的城市与省份。' },
        { title: '卡片详情', body: '余额、技术、品牌与所有已解析字段，还可导出完整十六进制数据。', alt: 'CardBal 中 T-money 卡的详情，显示余额、上次读取时间、技术与品牌。' }
      ],
      note: '来自 CardBal 2.4 与真实卡片的界面；卡号已通过应用的隐私设置隐藏。'
    },
    more: {
      kicker: '不止余额', title: ['为每天通勤而做。', '为远行做好准备。'],
      journeys: {
        title: '每一程，都有迹可循。', body: '查看卡内保存的行程与交易记录，在数据可用时显示站名和地图。',
        next: '下一站', stops: ['涩谷', '原宿', '新宿'],
        cities: ['东京', '首尔', '北京', '香港', '乌兰巴托'],
        routes: ['涩谷 → 新宿', '弘大入口 → 首尔站', '东直门 → 雍和宫', '中环 → 尖沙咀', '蒙古国立教育大学 → 中央图书馆']
      },
      collection: { title: '钱包，也可以很有个性。', body: '保存多张卡片，为它们起名字，用自己拍的卡片照片一眼认出。' },
      device: { title: '存在设备上，备份在 iCloud。', body: '已保存的卡片存储在你的 iPhone 上，需要时可使用 iCloud 备份或导出文件。', labels: ['设备本地', 'iCloud 备份', '文件导出'] },
      reports: { title: '一起完善每一个站点。', body: '在已保存的卡片或行程中，即可报告缺失站点或请求更正站点代码，并在地图上标记位置。提交的请求会显示在公开列表中。', link: '查看站点报告' },
      source: { title: '开放源代码。', body: '每种卡片如何解析，一目了然。CardBal 的源代码在 GitHub 上公开。', link: '查看源代码' }
    },
    cards: {
      kicker: '支持网络', title: ['六个地区，', '一个读卡器。'],
      intro: '从东京到尼斯的交通卡与储值卡，既能读取实体卡，也能读取服务模式下受支持的 Apple 钱包交通卡。支持范围还在持续扩大。',
      regions: [
        { name: '日本', detail: '全国交通 IC 卡，以及 nanaco、乐天 Edy 和 WAON 电子钱包。', cards: ['Suica', 'PASMO', 'ICOCA', 'Kitaca', 'TOICA', 'manaca', 'SUGOCA', 'nimoca', 'Hayakaken', 'SAPICA', 'IruCa', 'OKICA', 'nanaco', '乐天 Edy', 'WAON'] },
        { name: '韩国', detail: 'T-money、EZL、Cashbee，以及兼容 KS X 6924 的卡片。', cards: ['T-money', 'EZL', 'Cashbee'] },
        { name: '中国大陆', detail: '300 多种交通联合城市卡，以及城市一卡通卡片体系。', cards: ['北京', '上海', '广州', '深圳', '300+ 城市'] },
        { name: '中国香港', detail: '八达通，可读取卡内余额及可用的卡片详情。', cards: ['八达通'] },
        { name: '蒙古国', detail: 'U-Money 卡与乌兰巴托公共交通站点数据。', cards: ['U-Money'] },
        { name: '法国', detail: '尼斯 Lignes d’Azur 卡，基于 Calypso 标准。', cards: ['Lignes d’Azur'] }
      ],
      note: '可读取的余额与记录取决于卡片类型、发卡方和卡内存储的数据。不同卡片版本的支持情况可能有所不同。'
    },
    ways: {
      kicker: '两种读取方式', title: ['实体卡在手，', '或在钱包里。'],
      intro: '直接读取实体卡，或在服务模式下读取另一部 iPhone 或 Apple Watch 中受支持的 Apple 钱包交通卡。',
      physical: { label: '实体卡', steps: [['打开 CardBal', '在 iPhone 上轻点 Scan 开始读卡。'], ['靠近 iPhone 顶部', '将卡片靠近 iPhone 顶部，保持不动，直到读取完成。'], ['读取并保存', '查看余额与可读取的行程，再将卡片保存到收藏中。']] },
      wallet: {
        label: 'Apple 钱包 · 服务模式',
        steps: [['选择交通卡', '在存放交通卡的设备上打开“钱包”。'], ['开启服务模式', '在 iPhone 上打开卡片详细信息，再开启“服务模式”。Apple Watch 的操作请参阅 Apple 指南。'], ['用 CardBal 读取', '在另一部 iPhone 上启动 CardBal 读卡，将两台设备的 NFC 感应位置相互靠近。']],
        note: '需要两台设备：一台存放钱包交通卡，另一台运行 CardBal。服务模式是否可用及可读取的信息取决于卡片与发卡方。',
        link: 'Apple 服务模式指南', linkUrl: 'https://support.apple.com/zh-cn/120474'
      }
    },
    faq: {
      kicker: '读取之前', title: '你可能想知道。', reports: '查看站点报告',
      items: [
        ['需要什么设备？', '一部运行 iOS 16 或更新版本、支持 NFC 的 iPhone，以及一张支持的交通卡。可使用实体卡，或另一台设备上开启服务模式的受支持 Apple 钱包交通卡。CardBal 使用 iPhone 自带的 NFC 读卡功能。'],
        ['能读取另一台设备中的 Apple 钱包交通卡吗？', '可以。在存放受支持交通卡的 iPhone 或 Apple Watch 上开启服务模式，再使用另一部 iPhone 上的 CardBal 读取。在存卡的 iPhone 上，打开“钱包”，选择交通卡，进入“卡片详细信息”，并在该选项可用时开启“服务模式”。具体支持情况与可读取的信息取决于发卡方。'],
        ['CardBal 可以给卡充值吗？', 'CardBal 用于读取卡片信息。如需充值或支付车费，请使用发卡方提供的官方服务。'],
        ['为什么有些卡显示的记录较少？', '不同卡片保存的信息类型和记录数量不同。CardBal 会展示能够读取和解析的数据，部分站名或交易记录可能无法显示。'],
        ['我的数据如何处理？', '已保存的卡片存储在设备上，备份可通过 iCloud 同步。可选的韩国卡片数据贡献与站点报告会分享应用中说明的数据；应用也使用 Firebase Analytics。详情请参阅隐私政策。'],
        ['遇到无法识别的站点，能帮忙完善吗？', '可以。在 CardBal 中打开已保存的卡片或行程，即可报告缺失站点或请求更正站点代码。你可以填写站名、补充可选信息，并在地图上标记位置。']
      ]
    },
    end: { kicker: '下一站', title: ['读懂你每天', '随身携带的卡。'], body: 'iPhone 版 CardBal，现已登陆 App Store。', meta: '需要 iOS 16 或更新版本，以及支持 NFC 的 iPhone。' },
    footer: {
      tagline: 'iPhone 专业交通卡读卡器。', resources: '资源', languages: '语言',
      privacy: '隐私政策', reports: '站点报告', source: '源代码', top: '返回顶部',
      legal: '卡片名称与图案归各自所有者所有。CardBal 是独立读卡应用，与交通运营商没有隶属关系。'
    },
    notFound: '地图上没有这一站。', back: '返回 CardBal'
  },
  ja: {
    name: '日本語', htmlLang: 'ja', store: 'jp', ogLocale: 'ja_JP',
    title: 'CardBal — 交通系ICカードを、読み解く。',
    description: 'iPhoneで対応する交通系ICカードや電子マネーを読み取り。残高、利用履歴、カード情報、生データまで確認できます。日本、韓国、中国本土、香港、モンゴル、フランスのカードに対応。別のデバイスのAppleウォレットにあるカードも、ヘルプモードで読み取れます。',
    skip: '本文へ移動', language: '言語を選択', menu: 'メニュー', navLabel: 'ページ内の項目',
    nav: ['読み取り', 'プロ機能', '対応カード', 'ヘルプモード', 'よくある質問'],
    download: 'CardBalを入手', appStore: ['ダウンロードは', 'App Store'],
    hero: {
      kicker: 'iPhoneのためのプロ仕様ICカードリーダー',
      title: ['交通系ICカードを、', '読み解く。'],
      body: 'カードをiPhoneにかざすだけで、CardBalがチップに保存された情報を読み取ります。残高、読み取れる利用履歴、カード情報、そして生データまで。SuicaからT-money、OctopusからLignes d’Azurまで。',
      secondary: '対応カードを見る', meta: 'NFC対応iPhone · iOS 16以降',
      service: 'Appleウォレットのカードもヘルプモードで読み取り',
      alt: 'T-money、City Union、気候同行カード、U-Money、OKICA、はやかけんなどのカードと残高を表示する、CardBalのカードコレクション画面。'
    },
    board: {
      label: '読み取り中', note: 'CardBalが対応するカードの一部です。',
      columns: ['カード', '規格', '地域'],
      sr: '対応カードには、Suica、PASMO、ICOCA、楽天Edy、T-money、Cashbee、Octopus、交通聯合の都市カード、U-Money、Lignes d’Azurなどがあります。',
      stats: [['6', 'つの地域'], ['4', '種類のカード規格'], ['300+', '交通聯合の都市カード'], ['iOS 16+', 'NFC対応iPhone']]
    },
    read: {
      kicker: '読み取りの中身', title: ['残高から、', 'バイトまで。'],
      intro: 'カードの種類ごとに、データの持ち方はさまざま。CardBalはそれぞれの形式を解析して、わかりやすく表示します。生データも、ワンタップで。',
      keys: { family: 'カード種別', balance: '残高', standard: '規格', issued: '発行日', card: 'カード', type: 'タイプ', raw: '生データ' },
      chapters: [
        { title: '改札の前に、残高チェック。', body: '対応カードの残高を、すぐに確認。改札でも、バスでも、コンビニのレジの前でも。別のデバイスのAppleウォレットにあるカードも、ヘルプモードで読み取れます。', shot: '楽天Edy', alt: '読み取った楽天Edyの残高とカード情報を表示するCardBal。' },
        { title: 'すべての項目を、読み解く。', body: 'カード種別、番号、発行日、タイプ。CardBalはカード独自のデータ構造を、読める項目に変換します。名前のわからない値は、元のコードのまま表示します。', shot: 'ソウルの気候同行カード', alt: 'ソウルの気候同行カードと読み取った情報を表示するCardBal。' },
        { title: '生データも、見たいときに。', body: '「Raw Data」を開けば、解析された値の元になる構造化データを確認できます。KS X 6924のカードでは、任意の開発者モードが読み取り専用のコマンドでさらに探索し、読み取れたすべてのレコードを保存します。', shot: 'Octopus', alt: 'Octopusカードの残高、カード情報、生データを表示するCardBal。' }
      ]
    },
    pro: {
      kicker: 'プロ向け機能', title: ['すべての乗車を、地図に。', 'すべての街を、記録に。'],
      intro: '残高だけでなく、カードに残る記録をあなただけの移動記録に。乗車マップ、トランジットアトラス、そして1件ずつの乗車履歴。',
      items: [
        { title: '乗車履歴', body: 'タッチした駅や停留所、路線、距離、運賃を、カードに記録がある範囲で表示します。', alt: 'T-moneyカードの乗車・降車記録、駅、距離、運賃を表示するCardBalの乗車履歴。' },
        { title: '乗車マップ', body: 'カードに残るルートを地図に描き、カードごとに絞り込めます。', alt: '東アジア各地の乗車の分布と、カード・ルート・駅・記録の件数を表示するCardBalの乗車マップ。' },
        { title: 'トランジットアトラス', body: '乗車した都市や地域を、記録件数とともに表示します。', alt: '乗車記録のある都市や地域を表示するCardBalのトランジットアトラス。' },
        { title: 'カード詳細', body: '残高、技術、ブランド、解析したすべての項目。16進データの書き出しにも対応。', alt: '残高、最終読み取り日時、技術、ブランドを表示するCardBalのT-moneyカード詳細。' }
      ],
      note: '実際のカードを使ったCardBal 2.4の画面です。カード番号はアプリのプライバシー設定で伏せています。'
    },
    more: {
      kicker: '残高の、その先へ', title: ['毎日の通勤にも。', '遠くへの旅にも。'],
      journeys: {
        title: '一回の乗車にも、物語がある。', body: 'カードに保存された乗車・取引履歴を確認。情報がある場合は、駅名や地図でも振り返れます。',
        next: '次は', stops: ['渋谷', '原宿', '新宿'],
        cities: ['東京', 'ソウル', '北京', '香港', 'ウランバートル'],
        routes: ['渋谷 → 新宿', '弘大入口 → ソウル駅', '東直門 → 雍和宮', '中環 → 尖沙咀', 'モンゴル国立教育大学 → 中央図書館']
      },
      collection: { title: '自分らしいウォレットに。', body: '複数のカードを保存して名前を付けたり、撮影したカードの写真で、ひと目で見分けられるようにしたり。' },
      device: { title: '端末に保存。iCloudにバックアップ。', body: '保存したカードはiPhoneに保管。必要に応じて、iCloudへのバックアップやファイルの書き出しもできます。', labels: ['端末に保存', 'iCloudバックアップ', 'ファイル書き出し'] },
      reports: { title: 'すべての駅を、みんなで地図に。', body: '保存したカードや利用履歴から、不足している駅の報告や駅コードの修正依頼を、地図のピンと一緒に送れます。リクエストは公開リストに掲載されます。', link: '駅情報の報告を見る' },
      source: { title: 'オープンソース。', body: 'カードごとの解析方法を、そのまま確認できます。CardBalのソースコードはGitHubで公開しています。', link: 'ソースコードを見る' }
    },
    cards: {
      kicker: '対応ネットワーク', title: ['6つの地域を、', 'ひとつのリーダーで。'],
      intro: '東京からニースまで、交通系ICカードと電子マネーに対応。実物のカードはもちろん、ヘルプモードにした対応Appleウォレットのカードも読み取れます。対応範囲は、今も広がっています。',
      regions: [
        { name: '日本', detail: '全国の交通系ICカードに加え、nanaco、楽天Edy、WAONの電子マネーにも対応。', cards: ['Suica', 'PASMO', 'ICOCA', 'Kitaca', 'TOICA', 'manaca', 'SUGOCA', 'nimoca', 'はやかけん', 'SAPICA', 'IruCa', 'OKICA', 'nanaco', '楽天Edy', 'WAON'] },
        { name: '韓国', detail: 'T-money、EZL、Cashbee、およびKS X 6924互換カード。', cards: ['T-money', 'EZL', 'Cashbee'] },
        { name: '中国本土', detail: '300種類以上の交通聯合（China T-Union）都市カードと、City Unionのカード。', cards: ['北京', '上海', '広州', '深圳', '300+都市'] },
        { name: '香港', detail: 'オクトパス（八達通）。保存された残高や読み取り可能なカード情報を確認できます。', cards: ['Octopus'] },
        { name: 'モンゴル', detail: 'U-Moneyカードと、ウランバートルの駅データ。', cards: ['U-Money'] },
        { name: 'フランス', detail: 'ニースのLignes d’Azurカード。Calypso方式に対応。', cards: ['Lignes d’Azur'] }
      ],
      note: '読み取れる残高や履歴は、カードの種類・発行元・カードに保存された情報によって異なります。同じ名称でも、カードのバージョンによって対応状況が異なる場合があります。'
    },
    ways: {
      kicker: '2つの読み取り方', title: ['手元のカードも。', 'ウォレットのカードも。'],
      intro: '実物のカードを直接読み取るほか、別のiPhoneやApple WatchのAppleウォレットにある対応カードを、ヘルプモードで読み取れます。',
      physical: { label: '実物のカード', steps: [['CardBalを開く', 'iPhoneで「Scan」をタップします。'], ['iPhoneの上部に近づける', '読み取りが終わるまで、カードをiPhoneの上部に近づけたままにします。'], ['確認して保存', '残高と読み取れる履歴を確認して、コレクションに保存しましょう。']] },
      wallet: {
        label: 'Appleウォレット · ヘルプモード',
        steps: [['カードを選ぶ', '交通系ICカードが入っているデバイスでウォレットを開きます。'], ['ヘルプモードをオンに', 'iPhoneでは「カードの詳細」からヘルプモードをオンにします。Apple Watchの操作はAppleのガイドをご覧ください。'], ['CardBalで読み取る', 'もう1台のiPhoneでCardBalの読み取りを開始し、両方のデバイスのNFC読み取り位置を近づけます。']],
        note: 'カードが入ったデバイスと、CardBalを使うiPhoneの2台が必要です。ヘルプモードの有無や読み取れる情報はカードと発行元によって異なります。',
        link: 'Appleのヘルプモードガイド', linkUrl: 'https://support.apple.com/ja-jp/120474'
      }
    },
    faq: {
      kicker: 'かざす、その前に', title: '知っておきたいこと。', reports: '駅情報の報告を見る',
      items: [
        ['何が必要ですか？', 'iOS 16以降を搭載したNFC対応iPhoneと、対応カードが必要です。実物のカードのほか、別のデバイスのAppleウォレットにある対応カードをヘルプモードで読み取れます。iPhone内蔵のNFCリーダーを使用します。'],
        ['別のデバイスのAppleウォレットのカードを読めますか？', 'はい。対応する交通系ICカードが入ったiPhoneやApple Watchでヘルプモードをオンにして、別のiPhoneのCardBalで読み取れます。カードが入ったiPhoneでウォレットを開き、カードを選び、「カードの詳細」からヘルプモードをオンにしてください。対応状況や読み取れる情報は発行元によって異なります。'],
        ['カードにチャージできますか？', 'CardBalはカード情報を読み取ります。チャージや運賃の支払いには、カード発行元の公式サービスをご利用ください。'],
        ['表示される履歴が少ないのはなぜですか？', 'カードの種類によって、保存される情報や履歴の件数が異なります。CardBalは読み取り・解析できた情報を表示するため、一部の駅名や取引は表示できない場合があります。'],
        ['データはどのように扱われますか？', '保存したカードは端末に保管され、バックアップはiCloudで同期できます。任意の韓国カードデータの提供や駅情報の報告では、アプリ内で説明したデータを送信します。また、アプリはFirebase Analyticsを使用しています。詳細はプライバシーポリシーをご覧ください。'],
        ['不明な駅の情報を提供できますか？', 'はい。保存済みのカードや利用履歴から、不足している駅の報告や駅コードの修正依頼を送れます。駅名、任意の補足情報、地図上のピンを追加できます。']
      ]
    },
    end: { kicker: '次の停車駅', title: ['毎日持ち歩くカードを、', '読み解こう。'], body: 'iPhone用CardBalは、App Storeで。', meta: 'iOS 16以降と、NFC対応iPhoneが必要です。' },
    footer: {
      tagline: 'iPhoneのためのプロ仕様ICカードリーダー。', resources: 'リソース', languages: '言語',
      privacy: 'プライバシーポリシー', reports: '駅情報の報告', source: 'ソースコード', top: 'ページの先頭へ',
      legal: 'カードの名称・デザインは各権利者に帰属します。CardBalは独立した読み取りアプリであり、交通事業者とは提携していません。'
    },
    notFound: 'この駅は、地図にないようです。', back: 'CardBalに戻る'
  },
  ko: {
    name: '한국어', htmlLang: 'ko', store: 'kr', ogLocale: 'ko_KR',
    title: 'CardBal — 교통카드, 제대로 읽다.',
    description: 'iPhone으로 지원되는 교통카드와 선불카드를 읽어보세요. 일본, 한국, 중국 본토, 홍콩, 몽골, 프랑스 카드의 잔액, 이용 내역, 카드 정보, 원시 데이터를 확인하고, 다른 기기의 Apple 지갑 카드도 서비스 모드에서 읽을 수 있어요.',
    skip: '본문으로 이동', language: '언어 선택', menu: '메뉴', navLabel: '페이지 섹션',
    nav: ['읽기', '프로 기능', '지원 카드', '서비스 모드', '자주 묻는 질문'],
    download: 'CardBal 다운로드', appStore: ['다운로드하기', 'App Store'],
    hero: {
      kicker: 'iPhone을 위한 프로 교통카드 리더',
      title: ['교통카드,', '제대로 읽다.'],
      body: '카드를 iPhone에 가까이 대면 CardBal이 칩에 저장된 정보를 읽어요. 잔액, 확인 가능한 이용 내역, 카드 정보, 그리고 원시 데이터까지. Suica부터 티머니, 옥토퍼스부터 Lignes d’Azur까지.',
      secondary: '지원 카드 보기', meta: 'NFC 지원 iPhone · iOS 16 이상',
      service: 'Apple 지갑 카드도 서비스 모드에서 읽어요',
      alt: '티머니, City Union, 기후동행카드, U-Money, OKICA, 하야카켄 등 카드와 잔액을 보여주는 CardBal 카드 모음 화면.'
    },
    board: {
      label: '지금 읽는 중', note: 'CardBal이 지원하는 카드 중 일부예요.',
      columns: ['카드', '규격', '지역'],
      sr: '지원 카드에는 Suica, PASMO, ICOCA, 라쿠텐 Edy, 티머니, 캐시비, 옥토퍼스, 중국 교통연합 도시 카드, U-Money, Lignes d’Azur 등이 있어요.',
      stats: [['6', '개 지역'], ['4', '가지 카드 규격'], ['300+', '교통연합 도시 카드'], ['iOS 16+', 'NFC 지원 iPhone']]
    },
    read: {
      kicker: '읽기의 모든 것', title: ['잔액부터,', '바이트까지.'],
      intro: '카드마다 데이터를 저장하는 방식이 달라요. CardBal은 각 형식을 해석해 알기 쉽게 보여주고, 원시 데이터도 한 번의 탭으로 확인할 수 있어요.',
      keys: { family: '카드 종류', balance: '잔액', standard: '규격', issued: '발급일', card: '카드', type: '유형', raw: '원시 데이터' },
      chapters: [
        { title: '개찰구 앞에서, 잔액 확인.', body: '지원 카드의 남은 금액을 순식간에 확인하세요. 개찰구, 버스, 편의점 계산대 앞에서도요. 다른 기기의 Apple 지갑 카드도 서비스 모드에서 읽을 수 있어요.', shot: '라쿠텐 Edy', alt: '읽은 라쿠텐 Edy 카드의 잔액과 정보를 보여주는 CardBal.' },
        { title: '모든 항목을, 해석해서.', body: '카드 종류, 번호, 발급일, 유형까지. CardBal은 카드 고유의 데이터 구조를 읽을 수 있는 항목으로 바꿔줘요. 이름을 알 수 없는 값은 원래 코드 그대로 보여줘요.', shot: '서울 기후동행카드', alt: '서울 기후동행카드와 읽은 카드 정보를 보여주는 CardBal.' },
        { title: '원시 데이터도, 원할 때.', body: 'Raw Data를 열면 해석된 값 뒤에 있는 구조화된 데이터를 볼 수 있어요. KS X 6924 카드는 선택 사항인 개발자 모드에서 읽기 전용 명령으로 더 깊이 탐색하고, 읽을 수 있는 모든 레코드를 보관해요.', shot: '옥토퍼스', alt: '옥토퍼스 카드의 잔액, 카드 정보, 원시 데이터를 보여주는 CardBal.' }
      ]
    },
    pro: {
      kicker: '프로 기능', title: ['모든 이동을 지도에.', '모든 도시를 기록으로.'],
      intro: '잔액을 넘어, 카드에 남은 기록을 나만의 이동 기록으로 정리해요. 승차 지도, 트랜짓 아틀라스, 그리고 한 건 한 건의 승차 내역까지.',
      items: [
        { title: '승차 내역', body: '카드에 저장된 경우 승하차 역과 정류장, 노선, 거리, 요금을 보여줘요.', alt: '티머니 카드의 승하차 기록, 역, 거리, 요금을 보여주는 CardBal 승차 내역.' },
        { title: '승차 지도', body: '카드에 남은 경로를 지도에 그리고, 카드별로 걸러 볼 수 있어요.', alt: '동아시아 곳곳의 승차 분포와 카드, 경로, 역, 기록 수를 보여주는 CardBal 승차 지도.' },
        { title: '트랜짓 아틀라스', body: '타 본 모든 도시와 지역을 지역별 기록 수와 함께 보여줘요.', alt: '승차 기록이 있는 도시와 지역을 표시한 CardBal 트랜짓 아틀라스.' },
        { title: '카드 정보', body: '잔액, 기술, 브랜드와 해석한 모든 항목, 그리고 전체 16진 데이터 내보내기.', alt: '잔액, 마지막 읽은 시간, 기술, 브랜드를 보여주는 CardBal 티머니 카드 정보.' }
      ],
      note: '실제 카드로 촬영한 CardBal 2.4 화면이에요. 카드 번호는 앱의 개인정보 설정으로 가렸어요.'
    },
    more: {
      kicker: '잔액, 그 이상', title: ['매일의 출근길에도.', '먼 여행에도.'],
      journeys: {
        title: '모든 이동에는 이야기가 있어요.', body: '카드에 저장된 이동 및 거래 내역을 살펴보세요. 정보가 있으면 역 이름과 지도도 확인할 수 있어요.',
        next: '다음 역', stops: ['시부야', '하라주쿠', '신주쿠'],
        cities: ['도쿄', '서울', '베이징', '홍콩', '울란바토르'],
        routes: ['시부야 → 신주쿠', '홍대입구 → 서울역', '둥즈먼 → 융허궁', '센트럴 → 침사추이', '몽골 국립교육대학교 → 중앙도서관']
      },
      collection: { title: '내 취향을 담은 지갑.', body: '여러 카드를 저장하고 이름을 붙여보세요. 직접 찍은 카드 사진으로 한눈에 구별할 수 있어요.' },
      device: { title: '기기에 보관하고, iCloud에 백업.', body: '저장한 카드는 iPhone에 보관돼요. 필요할 때 iCloud 백업과 파일 내보내기를 사용할 수 있어요.', labels: ['기기에 보관', 'iCloud 백업', '파일 내보내기'] },
      reports: { title: '모든 역을 함께 채워가요.', body: '저장한 카드나 이용 내역에서 누락된 역을 신고하거나 역 코드 수정을 요청하고, 지도 핀도 남길 수 있어요. 요청은 공개 목록에 표시돼요.', link: '역 정보 신고 보기' },
      source: { title: '오픈 소스.', body: '카드별 해석 방식을 직접 확인해 보세요. CardBal의 소스 코드는 GitHub에 공개되어 있어요.', link: '소스 코드 보기' }
    },
    cards: {
      kicker: '지원 네트워크', title: ['여섯 개 지역,', '하나의 리더.'],
      intro: '도쿄부터 니스까지, 교통카드와 선불카드를 읽어요. 실물 카드는 물론, 서비스 모드의 지원 Apple 지갑 카드도 읽을 수 있어요. 지원 범위는 계속 넓어지고 있어요.',
      regions: [
        { name: '일본', detail: '전국의 교통 IC 카드와 nanaco, 라쿠텐 Edy, WAON 전자화폐.', cards: ['Suica', 'PASMO', 'ICOCA', 'Kitaca', 'TOICA', 'manaca', 'SUGOCA', 'nimoca', 'Hayakaken', 'SAPICA', 'IruCa', 'OKICA', 'nanaco', '라쿠텐 Edy', 'WAON'] },
        { name: '대한민국', detail: '티머니, EZL, 캐시비 및 KS X 6924 호환 카드.', cards: ['티머니', 'EZL', '캐시비'] },
        { name: '중국 본토', detail: '300종 이상의 교통연합(T-Union) 도시 카드와 City Union 계열 카드.', cards: ['베이징', '상하이', '광저우', '선전', '300+ 도시'] },
        { name: '홍콩', detail: '옥토퍼스 카드의 저장 잔액과 확인 가능한 카드 정보.', cards: ['옥토퍼스'] },
        { name: '몽골', detail: 'U-Money 카드와 울란바토르 정류장 데이터.', cards: ['U-Money'] },
        { name: '프랑스', detail: 'Calypso 방식을 사용하는 니스의 Lignes d’Azur 카드.', cards: ['Lignes d’Azur'] }
      ],
      note: '읽을 수 있는 잔액과 이용 내역은 카드, 발급사, 카드에 저장된 데이터에 따라 달라요. 카드 버전에 따라 지원 여부도 다를 수 있어요.'
    },
    ways: {
      kicker: '두 가지 읽기 방법', title: ['손에 든 카드도.', '지갑 속 카드도.'],
      intro: '실물 카드를 바로 읽거나, 다른 iPhone이나 Apple Watch의 지원 Apple 지갑 교통카드를 서비스 모드에서 읽을 수 있어요.',
      physical: { label: '실물 카드', steps: [['CardBal 열기', 'iPhone에서 Scan을 탭하세요.'], ['iPhone 상단에 대기', '읽기가 끝날 때까지 카드를 iPhone 상단에 가까이 대고 있으세요.'], ['확인하고 저장', '잔액과 확인 가능한 이용 내역을 살펴보고 카드를 모음에 저장하세요.']] },
      wallet: {
        label: 'Apple 지갑 · 서비스 모드',
        steps: [['카드 선택하기', '교통카드가 있는 기기에서 지갑 앱을 여세요.'], ['서비스 모드 켜기', 'iPhone에서는 카드 세부사항을 열고 서비스 모드를 켜세요. Apple Watch의 방법은 Apple 안내를 확인해 주세요.'], ['CardBal로 읽기', '다른 iPhone의 CardBal에서 읽기를 시작하고 두 기기의 NFC 인식 위치를 가까이 대세요.']],
        note: '두 기기가 필요해요. 한 기기에는 지갑 카드가 있고, 다른 iPhone에서는 CardBal을 실행해요. 서비스 모드와 읽을 수 있는 정보는 카드와 발급사에 따라 달라요.',
        link: 'Apple 서비스 모드 안내', linkUrl: 'https://support.apple.com/ko-kr/120474'
      }
    },
    faq: {
      kicker: '카드를 대기 전에', title: '미리 알아두세요.', reports: '역 정보 신고 보기',
      items: [
        ['무엇이 필요한가요?', 'iOS 16 이상을 실행하는 NFC 지원 iPhone과 지원 카드가 필요해요. 실물 카드 또는 다른 기기에서 서비스 모드를 켠 지원 Apple 지갑 교통카드를 읽을 수 있어요. CardBal은 iPhone의 내장 NFC 리더를 사용해요.'],
        ['다른 기기의 Apple 지갑 카드도 읽을 수 있나요?', '네. 지원 교통카드가 있는 iPhone이나 Apple Watch에서 서비스 모드를 켜고, 다른 iPhone의 CardBal로 읽을 수 있어요. 카드가 있는 iPhone에서 지갑 앱을 열고 카드를 선택한 다음 카드 세부사항에서 서비스 모드를 켜세요. 지원 여부와 읽을 수 있는 정보는 발급사에 따라 달라요.'],
        ['카드를 충전할 수 있나요?', 'CardBal은 카드 정보를 읽는 앱이에요. 충전이나 교통 요금 결제는 카드 발급사의 공식 서비스를 이용해 주세요.'],
        ['일부 카드의 내역이 적게 보이는 이유는 무엇인가요?', '카드 종류마다 저장하는 정보와 기록 수가 달라요. CardBal은 읽고 해석할 수 있는 데이터를 표시하며, 일부 역이나 거래 정보는 확인하지 못할 수 있어요.'],
        ['내 데이터는 어떻게 처리되나요?', '저장한 카드는 기기에 보관되며, 백업은 iCloud로 동기화할 수 있어요. 선택적인 한국 카드 데이터 기여와 역 정보 신고는 앱에 안내된 데이터를 공유해요. 앱은 Firebase Analytics도 사용해요. 자세한 내용은 개인정보 처리방침을 확인해 주세요.'],
        ['인식되지 않는 역을 알려줄 수 있나요?', '네. CardBal에서 저장한 카드나 이용 내역을 열어 누락된 역을 신고하거나 역 코드 수정을 요청할 수 있어요. 역 이름, 선택적인 추가 정보, 지도 핀을 넣을 수 있어요.']
      ]
    },
    end: { kicker: '다음 정류장', title: ['늘 지니고 다니는 카드,', '제대로 읽어보세요.'], body: 'iPhone용 CardBal, App Store에서 만나보세요.', meta: 'iOS 16 이상과 NFC 지원 iPhone이 필요해요.' },
    footer: {
      tagline: 'iPhone을 위한 프로 교통카드 리더.', resources: '리소스', languages: '언어',
      privacy: '개인정보 처리방침', reports: '역 정보 신고', source: '소스 코드', top: '맨 위로',
      legal: '카드 이름과 디자인은 각 소유자의 자산이에요. CardBal은 독립적인 카드 리더이며 교통 운영사와 제휴 관계가 없어요.'
    },
    notFound: '지도에 없는 정류장이에요.', back: 'CardBal로 돌아가기'
  },
  mn: {
    name: 'Монгол', htmlLang: 'mn', store: 'mn', ogLocale: 'mn_MN',
    title: 'CardBal — Тээврийн картаа нарийн уншаарай.',
    description: 'iPhone-оор дэмжигдэх тээврийн болон урьдчилсан төлбөрт картаа уншуулаарай. Япон, Өмнөд Солонгос, Хятад, Хонконг, Монгол, Францын картын үлдэгдэл, зорчилтын түүх, картын мэдээлэл, түүхий өгөгдлийг харах боломжтой. Өөр төхөөрөмжийн Apple Wallet дахь картыг үйлчилгээний горимд ч уншина.',
    skip: 'Үндсэн хэсэг рүү очих', language: 'Хэл сонгох', menu: 'Цэс', navLabel: 'Хуудасны хэсгүүд',
    nav: ['Уншилт', 'Pro', 'Картууд', 'Үйлчилгээний горим', 'Түгээмэл асуулт'],
    download: 'CardBal татах', appStore: ['Татах', 'App Store'],
    hero: {
      kicker: 'iPhone-д зориулсан мэргэжлийн карт уншигч',
      title: ['Тээврийн картаа', 'нарийн уншаарай.'],
      body: 'Картаа iPhone-д ойртуулахад CardBal чипэд хадгалагдсан мэдээллийг уншина: үлдэгдэл, боломжтой зорчилтын түүх, картын мэдээлэл болон түүхий өгөгдөл. Suica-аас T-money, Octopus-аас Lignes d’Azur хүртэл.',
      secondary: 'Дэмжих картуудыг харах', meta: 'NFC-тэй iPhone · iOS 16 ба түүнээс дээш',
      service: 'Apple Wallet дахь картыг үйлчилгээний горимд ч уншина',
      alt: 'T-money, City Union, Climate Card, U-Money, OKICA, Hayakaken зэрэг картууд болон үлдэгдлийг харуулсан CardBal-ын картын цуглуулга.'
    },
    board: {
      label: 'Одоо уншиж байна', note: 'CardBal-ын дэмждэг картуудын заримаас.',
      columns: ['Карт', 'Стандарт', 'Бүс'],
      sr: 'Дэмжигдэх картуудад Suica, PASMO, ICOCA, Rakuten Edy, T-money, Cashbee, Octopus, T-Union хотын картууд, U-Money, Lignes d’Azur зэрэг багтана.',
      stats: [['6', 'бүс нутаг'], ['4', 'картын стандарт'], ['300+', 'T-Union хотын карт'], ['iOS 16+', 'NFC-тэй iPhone']]
    },
    read: {
      kicker: 'Уншилтын дотор', title: ['Үлдэгдлээс', 'байт хүртэл.'],
      intro: 'Картын төрөл бүр өгөгдлөө өөр өөрөөр хадгалдаг. CardBal формат бүрийг тайлж, үр дүнг ойлгомжтой харуулна. Түүхий өгөгдөл ердөө нэг товшилтын зайтай.',
      keys: { family: 'Төрөл', balance: 'Үлдэгдэл', standard: 'Стандарт', issued: 'Олгосон', card: 'Карт', type: 'Ангилал', raw: 'Түүхий өгөгдөл' },
      chapters: [
        { title: 'Хаалгаар орохоосоо өмнө үлдэгдлээ.', body: 'Дэмжигдэх картын үлдэгдлийг агшин зуурт хараарай — турникет, автобус, дэлгүүрийн касс дээр очихоос өмнө. Өөр төхөөрөмжийн Apple Wallet дахь картыг үйлчилгээний горимд уншуулж болно.', shot: 'Rakuten Edy', alt: 'Уншуулсан Rakuten Edy картын үлдэгдэл болон мэдээллийг харуулсан CardBal.' },
        { title: 'Талбар бүрийг тайлна.', body: 'Картын төрөл, дугаар, олгосон огноо, ангилал: CardBal картын өөрийн өгөгдлийн бүтцийг уншихад хялбар талбарууд болгон хувиргана. Нэрийг нь тодорхойлж чадаагүй утгыг түүхий кодоор нь харуулна.', shot: 'Сөүлийн Climate Card', alt: 'Сөүлийн Climate Card болон уншсан мэдээллийг харуулсан CardBal.' },
        { title: 'Түүхий өгөгдөл, хүссэн үедээ.', body: 'Raw Data-г нээж, тайлсан утга бүрийн цаадах бүтэцлэгдсэн өгөгдлийг хараарай. KS X 6924 картуудын хувьд сонголтот Developer Mode зөвхөн унших командаар илүү гүн шалгаж, уншигдах бүх бичлэгийг хадгална.', shot: 'Octopus', alt: 'Octopus картын үлдэгдэл, мэдээлэл болон түүхий өгөгдлийг харуулсан CardBal.' }
      ]
    },
    pro: {
      kicker: 'Мэргэжлийн хэрэгслүүд', title: ['Зорчилт бүр газрын зураг дээр.', 'Хот бүр бүртгэлтэй.'],
      intro: 'Үлдэгдлээс гадна CardBal картын санасан бичлэгүүдийг таны хувийн зорчилтын түүх болгоно: зорчилтын газрын зураг, тээврийн атлас, зорчилт тус бүрийн бүртгэл.',
      items: [
        { title: 'Зорчилтын түүх', body: 'Карт хадгалсан бол суух, буух буудал, шугам, зай, төлбөрийг харуулна.', alt: 'T-money картын суух, буух бичлэг, буудал, зай, төлбөрийг харуулсан CardBal-ын зорчилтын түүх.' },
        { title: 'Зорчилтын газрын зураг', body: 'Картын санасан чиглэлүүдийг газрын зураг дээр зурж, картаар шүүнэ.', alt: 'Зүүн Азийн зорчилтууд болон карт, чиглэл, буудал, бичлэгийн тоог харуулсан CardBal-ын газрын зураг.' },
        { title: 'Тээврийн атлас', body: 'Таны зорчсон бүх хот, бүс нутгийг газар тус бүрийн бичлэгийн тоотой харуулна.', alt: 'Зорчилтын бичлэгтэй хот, бүс нутгуудыг тодруулсан CardBal-ын тээврийн атлас.' },
        { title: 'Картын дэлгэрэнгүй', body: 'Үлдэгдэл, технологи, брэнд, тайлсан бүх талбар, бүрэн hex экспорт.', alt: 'Үлдэгдэл, сүүлд уншсан цаг, технологи, брэндийг харуулсан CardBal-ын T-money картын дэлгэрэнгүй.' }
      ],
      note: 'Бодит картуудаар авсан CardBal 2.4-ийн дэлгэц. Картын дугаарыг аппын нууцлалын тохиргоогоор нуусан.'
    },
    more: {
      kicker: 'Үлдэгдлээс цааш', title: ['Өдөр тутмын замд.', 'Холын аялалд.'],
      journeys: {
        title: 'Зорчилт бүр өөрийн түүхтэй.', body: 'Картанд хадгалагдсан зорчилт, гүйлгээгээ үзээрэй. Өгөгдөл байгаа үед буудлын нэр болон газрын зураг харагдана.',
        next: 'Дараагийн буудал', stops: ['Шибүяа', 'Харажүкү', 'Шинжүкү'],
        cities: ['Токио', 'Сөүл', 'Бээжин', 'Хонконг', 'Улаанбаатар'],
        routes: ['Шибүяа → Шинжүкү', 'Хоник их сургууль → Сөүл', 'Дунжимэнь → Юнхэгун', 'Сентрал → Цим Ша Цуй', 'МУБИС → Төв номын сан']
      },
      collection: { title: 'Таны өнгө төрхтэй хэтэвч.', body: 'Олон карт хадгалж, нэр өгч, өөрийн авсан картын зургаар нэг харахад ялгаарай.' },
      device: { title: 'Төхөөрөмждөө. iCloud-даа.', body: 'Хадгалсан картууд таны iPhone-д байрлана. Хэрэгтэй үед iCloud нөөцлөлт болон файл экспорт ашиглаарай.', labels: ['Төхөөрөмжид', 'iCloud нөөцлөлт', 'Файл экспорт'] },
      reports: { title: 'Буудал бүрийг хамтдаа газрын зурагт.', body: 'Хадгалсан карт эсвэл зорчилтоос дутуу буудлыг мэдээлэх, буудлын код засуулах хүсэлтийг газрын зургийн тэмдэглэгээтэй илгээгээрэй. Хүсэлтүүд нээлттэй жагсаалтад харагдана.', link: 'Буудлын тайлангууд' },
      source: { title: 'Нээлттэй эх код.', body: 'Картын төрөл бүрийг хэрхэн тайлдгийг яг таг хараарай. CardBal-ын эх код GitHub дээр нээлттэй.', link: 'Эх кодыг харах' }
    },
    cards: {
      kicker: 'Сүлжээ', title: ['Зургаан бүс нутаг.', 'Нэг уншигч.'],
      intro: 'Токиогоос Ницца хүртэлх тээврийн болон урьдчилсан төлбөрт картууд — биет картаас, эсвэл үйлчилгээний горимд байгаа дэмжигдэх Apple Wallet картаас уншина. Дэмжлэгийн хүрээ өргөжсөөр байна.',
      regions: [
        { name: 'Япон', detail: 'Улс даяарх тээврийн IC картууд, мөн nanaco, Rakuten Edy, WAON цахим мөнгө.', cards: ['Suica', 'PASMO', 'ICOCA', 'Kitaca', 'TOICA', 'manaca', 'SUGOCA', 'nimoca', 'Hayakaken', 'SAPICA', 'IruCa', 'OKICA', 'nanaco', 'Rakuten Edy', 'WAON'] },
        { name: 'Өмнөд Солонгос', detail: 'T-money, EZL, Cashbee болон KS X 6924-тэй нийцтэй картууд.', cards: ['T-money', 'EZL', 'Cashbee'] },
        { name: 'Хятад', detail: '300 гаруй T-Union хотын карт болон City Union системийн картууд.', cards: ['Бээжин', 'Шанхай', 'Гуанжоу', 'Шэньжэнь', '300+ хот'] },
        { name: 'Хонконг', detail: 'Octopus картын хадгалсан үлдэгдэл болон боломжтой мэдээлэл.', cards: ['Octopus'] },
        { name: 'Монгол', detail: 'U-Money карт болон Улаанбаатарын буудлын өгөгдөл.', cards: ['U-Money'] },
        { name: 'Франц', detail: 'Calypso ашигладаг Ниццагийн Lignes d’Azur картууд.', cards: ['Lignes d’Azur'] }
      ],
      note: 'Уншигдах үлдэгдэл, түүх нь карт, карт гаргагч болон картанд хадгалсан өгөгдлөөс хамаарна. Картын хувилбараас шалтгаалан дэмжлэг өөр байж болно.'
    },
    ways: {
      kicker: 'Унших хоёр арга', title: ['Гартаа байгаа карт.', 'Эсвэл Wallet дахь карт.'],
      intro: 'Биет картаа шууд уншуулах, эсвэл өөр iPhone, Apple Watch дахь дэмжигдэх Apple Wallet тээврийн картыг үйлчилгээний горимд уншуулах боломжтой.',
      physical: { label: 'Биет карт', steps: [['CardBal-ыг нээх', 'iPhone дээрээ Scan-ыг товшино уу.'], ['Дээд хэсэгт ойртуулах', 'Уншиж дуустал картаа iPhone-ы дээд хэсэгт ойртуулж барина уу.'], ['Уншаад хадгалах', 'Үлдэгдэл, боломжтой зорчилтуудаа шалгаад картаа цуглуулгадаа хадгалаарай.']] },
      wallet: {
        label: 'Apple Wallet · Үйлчилгээний горим',
        steps: [['Картаа сонгох', 'Тээврийн карт байгаа төхөөрөмж дээр Wallet-ыг нээнэ үү.'], ['Үйлчилгээний горимыг асаах', 'iPhone дээр картын дэлгэрэнгүй мэдээллийг нээгээд Service Mode-ыг асаана уу. Apple Watch-ын зааврыг Apple-ын гарын авлагаас үзээрэй.'], ['CardBal-аар уншуулах', 'Өөр iPhone дээр CardBal-ын уншилтыг эхлүүлж, хоёр төхөөрөмжийн NFC мэдрэгчийн хэсгийг ойртуулна уу.']],
        note: 'Хоёр төхөөрөмж хэрэгтэй: нэг нь Wallet дахь картыг агуулна, нөгөө iPhone нь CardBal-ыг ажиллуулна. Үйлчилгээний горим болон уншигдах мэдээлэл нь карт, карт гаргагчаас хамаарна.',
        link: 'Apple-ын Service Mode заавар', linkUrl: 'https://support.apple.com/en-us/120474'
      }
    },
    faq: {
      kicker: 'Уншуулахаасаа өмнө', title: 'Мэдэхэд илүүдэхгүй.', reports: 'Буудлын тайлангууд',
      items: [
        ['Юу хэрэгтэй вэ?', 'iOS 16 буюу түүнээс шинэ хувилбартай, NFC дэмждэг iPhone болон дэмжигдэх карт хэрэгтэй. Биет карт эсвэл өөр төхөөрөмжийн Apple Wallet дахь үйлчилгээний горим асаасан дэмжигдэх тээврийн картыг уншуулж болно. CardBal нь iPhone-ы суурилуулсан NFC уншигчийг ашигладаг.'],
        ['Өөр төхөөрөмжийн Apple Wallet дахь картыг уншиж болох уу?', 'Болно. Дэмжигдэх тээврийн карт байгаа iPhone эсвэл Apple Watch дээр Service Mode-ыг асаагаад өөр iPhone дээрх CardBal-аар уншуулна. Карт байгаа iPhone дээр Wallet-ыг нээж, картаа сонгон Card Details хэсгээс Service Mode-ыг асаана уу. Дэмжлэг болон уншигдах мэдээлэл нь карт гаргагчаас хамаарна.'],
        ['CardBal картаа цэнэглэх боломжтой юу?', 'CardBal нь картын мэдээллийг уншина. Карт цэнэглэх, зорчих төлбөр төлөхдөө карт гаргагчийн албан ёсны үйлчилгээг ашиглаарай.'],
        ['Яагаад зарим карт цөөн түүх харуулдаг вэ?', 'Картын төрөл бүр өөр мэдээлэл, хязгаарлагдмал тооны бичлэг хадгалдаг. CardBal нь уншиж, тайлж чадсан өгөгдлийг харуулна. Зарим буудал, гүйлгээний мэдээлэл боломжгүй байж болно.'],
        ['Миний өгөгдлийг хэрхэн ашигладаг вэ?', 'Хадгалсан картууд төхөөрөмжид тань байрлаж, нөөц хуулбарыг iCloud-аар синк хийх боломжтой. Солонгос картын сайн дурын өгөгдөл хуваалцах болон буудлын тайлан нь апп дотор тайлбарласан өгөгдлийг илгээнэ. Апп мөн Firebase Analytics ашигладаг. Дэлгэрэнгүйг нууцлалын бодлогоос уншаарай.'],
        ['Танигдахгүй буудлын мэдээлэл өгч болох уу?', 'Болно. CardBal дотор хадгалсан карт эсвэл зорчилтоо нээгээд дутуу буудлыг мэдээлэх, буудлын код засуулах хүсэлт илгээж болно. Буудлын нэр, нэмэлт мэдээлэл болон газрын зургийн тэмдэглэгээ оруулаарай.']
      ]
    },
    end: { kicker: 'Дараагийн буудал', title: ['Өдөр бүр авч явдаг', 'картаа уншаарай.'], body: 'iPhone-д зориулсан CardBal-ыг App Store-оос татаарай.', meta: 'iOS 16 буюу түүнээс шинэ хувилбар, NFC-тэй iPhone шаардлагатай.' },
    footer: {
      tagline: 'iPhone-д зориулсан мэргэжлийн тээврийн карт уншигч.', resources: 'Нөөц', languages: 'Хэл',
      privacy: 'Нууцлалын бодлого', reports: 'Буудлын тайлан', source: 'Эх код', top: 'Дээш буцах',
      legal: 'Картын нэр, загвар нь тус тусын эзэмшигчийн өмч юм. CardBal нь бие даасан карт уншигч бөгөөд тээврийн операторуудтай холбоогүй.'
    },
    notFound: 'Энэ буудал газрын зураг дээр алга.', back: 'CardBal руу буцах'
  }
};
