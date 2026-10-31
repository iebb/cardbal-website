// Every locale must match the shape of `en` exactly; scripts/build.mjs rejects missing keys or list items.
// Card, region and protocol facts follow the live App Store and Google Play listings and the app's public source.
export const locales = {
  en: {
    name: 'English', htmlLang: 'en', store: 'us', ogLocale: 'en_US',
    title: 'CardBal — Transit cards, decoded. For iPhone and Android.',
    description: 'Read supported transit and stored-value cards with your iPhone or Android phone. See balances, trip history, card details and raw data for cards from Japan, South Korea, China, Hong Kong, Mongolia and France — including Apple Wallet cards on another device in Service Mode.',
    skip: 'Skip to content', language: 'Choose language', menu: 'Menu', navLabel: 'Sections',
    nav: ['The read', 'Pro', 'Cards', 'Service Mode', 'FAQ'],
    download: 'Get CardBal', appStore: ['Download on the', 'App Store'], googlePlay: ['Get it on', 'Google Play'],
    hero: {
      kicker: 'Pro transit card reader for iPhone and Android',
      title: ['Transit cards,', 'decoded.'],
      body: 'Hold a card to your phone and CardBal reads what the chip stores: the balance, trips where available, card details and raw data. From Suica to T-money, Octopus to Lignes d’Azur.',
      secondary: 'See supported cards', meta: 'iPhone with iOS 16 or later · Android 8 or later · NFC',
      service: 'Also reads Apple Wallet cards in Service Mode',
      alt: 'CardBal’s card collection with T-money, City Union, Climate Card, U-Money, OKICA and Hayakaken cards and their balances.'
    },
    board: {
      label: 'Now reading', note: 'A sample of the card families CardBal reads.',
      columns: ['Card', 'Standard', 'Region'],
      sr: 'Supported cards include Suica, PASMO, ICOCA, Rakuten Edy, T-money, Cashbee, Octopus, T-Union city cards, U-Money and Lignes d’Azur.',
      stats: [['6', 'regions'], ['4', 'card standards'], ['300+', 'T-Union city cards'], ['iOS + Android', 'NFC phones']]
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
      device: { title: 'On your device. Backed up your way.', body: 'Saved cards stay on your phone. Back up to iCloud on iPhone, or export a file that opens in CardBal on iPhone and Android.', labels: ['On device', 'iCloud backup', 'File export'] },
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
      physical: { label: 'Physical card', steps: [['Open CardBal', 'Tap Scan on your phone.'], ['Hold it to the reader', 'Keep the card near the top of your iPhone, or the back of your Android phone, until the read finishes.'], ['Read and save', 'Check the balance and available trips, then save the card to your collection.']] },
      wallet: {
        label: 'Apple Wallet · Service Mode',
        steps: [['Choose the card', 'Open Wallet on the device that holds your transit card.'], ['Turn on Service Mode', 'On iPhone, open the card’s details and enable Service Mode. For Apple Watch, follow Apple’s guide.'], ['Scan with CardBal', 'Start a scan in CardBal on a separate iPhone, then bring the two devices close together at their NFC reading points.']],
        note: 'Use two devices: one holds the Wallet card, the other runs CardBal. Service Mode availability and readable information depend on the card and issuer.',
        link: 'Apple’s Service Mode guide', linkUrl: 'https://support.apple.com/en-us/120474'
      }
    },
    faq: {
      kicker: 'Before you tap', title: 'Good to know.', reports: 'View station reports', support: 'Contact support',
      items: [
        ['What do I need?', 'An NFC-capable iPhone running iOS 16 or later, or an Android phone with NFC running Android 8 or later, and a supported card. On iPhone, you can also read a supported Apple Wallet transit card on another device with Service Mode enabled. CardBal uses your phone’s built-in NFC reader.'],
        ['Can I read an Apple Wallet card on another device?', 'Yes. Put a supported transit card in Service Mode on the iPhone or Apple Watch that holds it, then scan it with CardBal on a separate iPhone. On the card-holding iPhone, open Wallet, select the card, open Card Details, and enable Service Mode where available. Card support and readable information depend on the issuer.'],
        ['Can CardBal top up my card?', 'CardBal reads card information. To add credit or pay for a journey, use the card issuer’s official services.'],
        ['Why do some cards show less history?', 'Each card family stores different information and a limited number of records. CardBal displays what it can read and decode; some stations or transactions may be unavailable.'],
        ['How is my data handled?', 'Saved cards are stored on your device. On iPhone, iCloud can sync backups. Optional Korean-card contributions and station reports share the data described in their app disclosures; the iPhone app also uses Firebase Analytics. See the privacy policy for details.'],
        ['Can I help with an unrecognized station?', 'Yes. Open a saved card or trip in CardBal to report a missing station or request a station-code correction. You can add a station name, optional details, and a map pin.']
      ]
    },
    end: { kicker: 'Next stop', title: ['Read the cards', 'you already carry.'], body: 'CardBal for iPhone and Android. Download it on the App Store or Google Play.', meta: 'Requires an NFC-capable iPhone with iOS 16 or later, or an Android phone with NFC and Android 8 or later.' },
    support: {
      pageTitle: 'Support — CardBal',
      description: 'Get help with CardBal for iPhone and Android: email support, report a station, file a bug and fix common card-reading problems.',
      kicker: 'Help desk', title: ['Need a hand?', 'Write to us.'],
      body: 'Questions, bug reports or a card CardBal can’t read yet: send us an email and we’ll get back to you.',
      email: 'Email support', includeTitle: 'Helpful to include',
      include: ['CardBal version and phone model', 'iOS or Android version', 'Card name, issuer and city', 'What happened, with a screenshot'],
      note: 'Leave out full card numbers. On iPhone, set Settings › Privacy › Serial Number Display to Masked or Hidden before you take screenshots.',
      routes: {
        kicker: 'Other routes', title: ['More ways', 'to get help.'],
        items: [
          { title: 'A station is missing or wrong.', body: 'Open the saved card or trip in CardBal and report the station, with a map pin if you can. Requests appear on a public list.', link: 'View station reports' },
          { title: 'Ask other riders.', body: 'Join the CardBal group on Telegram to ask questions, compare cards and chat with other users.', link: 'Join the Telegram group' },
          { title: 'Found a bug? Have an idea?', body: 'CardBal’s source code is public. Open an issue on GitHub to report a decoding bug or suggest a card.', link: 'Open a GitHub issue' },
          { title: 'Privacy and your data.', body: 'How CardBal handles saved cards, station reports, optional contributions and analytics.', link: 'Read the privacy policy' }
        ]
      },
      fixes: {
        kicker: 'Quick fixes', title: 'Try this first.', more: 'More answers in the FAQ',
        items: [
          ['CardBal doesn’t detect my card.', 'On iPhone, start a scan and hold the card flat against the top of the phone. On Android, turn on NFC in Settings, open CardBal and move the card slowly across the back until it’s detected. Take the card out of a wallet with other cards, and remove thick or metal cases.'],
          ['The read stops before it finishes.', 'Keep the card still until CardBal shows the result. Some cards take a few seconds, and reads with Developer Mode on take longer.'],
          ['My card isn’t supported.', 'Check the list of supported cards. If yours isn’t there, email us its name, issuer and city.', 'See supported cards'],
          ['How do I read a card in Apple Wallet?', 'Turn on Service Mode for the card on the iPhone or Apple Watch that holds it, then scan it with CardBal on a separate iPhone.', 'How Service Mode works'],
          ['A station shows as a code or is missing.', 'CardBal’s station data doesn’t cover every code yet. Open the trip and report the station; corrections reach the app in later updates.'],
          ['How do I move my cards to a new phone?', 'On iPhone, use Settings › Backup to back up to iCloud, then restore on the new iPhone. On either platform, export a backup file in Settings and import it on the new phone, including from iPhone to Android.']
        ]
      }
    },
    privacy: {
      pageTitle: 'Privacy Policy — CardBal',
      description: 'How the CardBal app for iPhone and Android handles your information: what stays on your phone, what it sends off the phone, and what you can switch off.',
      kicker: 'CardBal for iPhone and Android', title: ['Privacy', 'Policy'],
      updated: 'Last updated: {date}', date: '31 October 2026',
      intro: 'This policy explains how the CardBal app handles your information on iPhone and Android. CardBal is published by Kitta Ltd.',
      sections: [
        { title: 'Most of CardBal works on your phone', body: ['CardBal reads transit cards with your phone’s NFC. Balances, trips, station names and card details are decoded on the phone and shown there. The sections below list each case where CardBal sends something off the phone, and what you can switch off.'] },
        { title: 'Online checks with card operators', body: [
          'Some cards can’t be fully read on the phone alone. For these, CardBal connects your card to its operator’s online service to finish the read, and passes data between the two. What the operator receives and keeps is covered by the operator’s own privacy policy, not this one. CardBal saves only the result on your phone.',
          'For Octopus cards this is Octopus Online. It’s on by default. It runs the first time you scan a card, and on every scan of cards that also hold a mainland China balance, so the exchange rate stays current. You can turn it off in Settings › Privacy. Unless you turn on Allow Card Updates, CardBal blocks any change to the data stored on your card.',
          'For Lignes d’Azur cards, a check only happens when you tap Check Online.'
        ] },
        { title: 'Help Improve Korean Cards (iPhone)', body: [
          'This is on by default. You can turn it off in Settings › Privacy › Help Improve Korean Cards.',
          'When you scan a T-money or EZL/Cashbee card, CardBal sends its trip records to korean-trip-crowdsourcing.ieb.app to improve decoding. Each record includes the raw trip-record bytes (which contain time, fare and balance data), station and fare fields, a SHA-256 hash of the card number, the last four characters of the card number, a deduplication hash, the card type and the app version.'
        ] },
        { title: 'Station reports (iPhone)', body: [
          'These are sent only when you tap Submit Report.',
          'CardBal sends the station name, report type, any station code, line, operator, city, country or notes you enter, and, if you choose, the exact coordinates of a map pin or your current location. Each report also includes a SHA-256 hash of the card ID, an app-specific device ID, the app version and the card type. Reports are stored in Cloudflare D1 so we can review requests and improve station data. The public list at {reports} shows station details and an approximate location. It doesn’t show the card ID hash, device ID, app version, notes or exact coordinates.'
        ] },
        { title: 'App analytics (iPhone)', body: ['CardBal uses Google Firebase Analytics to count installs, sessions and screens viewed. Firebase receives an app-instance ID, device and system details, language, and an approximate location derived from your IP address. CardBal doesn’t send your cards or trips to Firebase and doesn’t use the advertising identifier. Google processes this data under its own privacy policy. There is no switch for this in the app.'] },
        { title: 'Card artwork', body: ['CardBal downloads card pictures from faces.cardb.al, or from GitHub mirrors (cdn.jsdelivr.net, raw.githubusercontent.com) when it’s unreachable. The matching picture is chosen on the phone, and no card data is sent. The server sees only which picture was requested and your IP address.'] },
        { title: 'Maps', body: ['On iPhone, maps come from Apple Maps. On Android, map tiles come from OpenStreetMap. These providers see which areas are shown and your IP address.'] },
        { title: 'Backups and sync', body: [[
          'iPhone: when iCloud is on, CardBal keeps a copy of your saved cards (including card numbers, balances, trips and Octopus numbers) and card pictures in your iCloud account. The CardBal folder is visible in the Files app.',
          'Android: Android’s own backup may copy CardBal’s data to your Google account.',
          'You can also export, import and share backups yourself.'
        ]] },
        { title: 'Debug log', body: ['Settings › Troubleshooting keeps a log of each online check on your phone, with card numbers shortened. It leaves the phone only if you tap Copy Debug Log and paste it somewhere yourself.'] },
        { title: 'Platform and distribution', body: ['Apple, Google and your device maker may process technical, crash, purchase or billing information under their own terms when you download, update, back up or use apps. This policy doesn’t cover that.'] },
        { title: 'Changes', body: ['If CardBal’s data practices change, we update this page and, where required, tell you in the app or the store listing.'] },
        { title: 'Contact', body: ['Questions about this policy or requests about data you submitted: {email}'] }
      ]
    },
    footer: {
      tagline: 'The pro transit card reader for iPhone and Android.', resources: 'Resources', languages: 'Languages',
      support: 'Support', privacy: 'Privacy policy', reports: 'Station reports', source: 'Source code', top: 'Back to top',
      legal: 'Card names and artwork belong to their respective owners. CardBal is an independent reader and is not affiliated with transit operators.'
    },
    notFound: 'This stop isn’t on the map.', back: 'Back to CardBal'
  },
  zh: {
    name: '简体中文', htmlLang: 'zh-Hans', store: 'cn', ogLocale: 'zh_CN',
    title: 'CardBal — 你的交通卡，一读就懂。',
    description: '用 iPhone 或 Android 手机读取支持的交通卡与储值卡：查看余额、乘车记录、卡片详情与原始数据，覆盖日本、韩国、中国大陆、中国香港、蒙古国和法国，也能读取另一台设备上开启服务模式的 Apple 钱包交通卡。',
    skip: '跳至正文', language: '选择语言', menu: '菜单', navLabel: '页面导航',
    nav: ['读卡解析', '专业功能', '支持的卡', '服务模式', '常见问题'],
    download: '下载 CardBal', appStore: ['下载于', 'App Store'], googlePlay: ['下载于', 'Google Play'],
    hero: {
      kicker: 'iPhone 与 Android 专业交通卡读卡器',
      title: ['你的交通卡，', '一读就懂。'],
      body: '把卡片靠近手机，CardBal 就能读出芯片里存储的内容：余额、可读取的行程、卡片详情与原始数据。从 Suica 到 T-money，从八达通到 Lignes d’Azur。',
      secondary: '查看支持的卡', meta: 'iOS 16 及以上的 iPhone · Android 8 及以上 · 需支持 NFC',
      service: '也能读取服务模式下的 Apple 钱包交通卡',
      alt: 'CardBal 的卡片收藏界面，展示 T-money、城市一卡通、气候同行卡、U-Money、OKICA 和 Hayakaken 等卡片及其余额。'
    },
    board: {
      label: '正在读取', note: 'CardBal 支持的部分卡片。',
      columns: ['卡片', '标准', '地区'],
      sr: '支持的卡片包括 Suica、PASMO、ICOCA、乐天 Edy、T-money、Cashbee、八达通、交通联合城市卡、U-Money 和 Lignes d’Azur。',
      stats: [['6', '个地区'], ['4', '种卡片标准'], ['300+', '交通联合城市卡'], ['iOS + Android', '支持 NFC 的手机']]
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
      device: { title: '存在设备上，备份随你选。', body: '已保存的卡片存储在你的手机上。iPhone 可使用 iCloud 备份，也可导出文件，在 iPhone 与 Android 版 CardBal 之间互通。', labels: ['设备本地', 'iCloud 备份', '文件导出'] },
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
      physical: { label: '实体卡', steps: [['打开 CardBal', '在手机上轻点 Scan 开始读卡。'], ['靠近读卡位置', '将卡片靠近 iPhone 顶部或 Android 手机背面，保持不动，直到读取完成。'], ['读取并保存', '查看余额与可读取的行程，再将卡片保存到收藏中。']] },
      wallet: {
        label: 'Apple 钱包 · 服务模式',
        steps: [['选择交通卡', '在存放交通卡的设备上打开“钱包”。'], ['开启服务模式', '在 iPhone 上打开卡片详细信息，再开启“服务模式”。Apple Watch 的操作请参阅 Apple 指南。'], ['用 CardBal 读取', '在另一部 iPhone 上启动 CardBal 读卡，将两台设备的 NFC 感应位置相互靠近。']],
        note: '需要两台设备：一台存放钱包交通卡，另一台运行 CardBal。服务模式是否可用及可读取的信息取决于卡片与发卡方。',
        link: 'Apple 服务模式指南', linkUrl: 'https://support.apple.com/zh-cn/120474'
      }
    },
    faq: {
      kicker: '读取之前', title: '你可能想知道。', reports: '查看站点报告', support: '联系支持',
      items: [
        ['需要什么设备？', '一部运行 iOS 16 或更新版本、支持 NFC 的 iPhone，或一部运行 Android 8 或更新版本、支持 NFC 的 Android 手机，以及一张支持的交通卡。在 iPhone 上，还可读取另一台设备上开启服务模式的受支持 Apple 钱包交通卡。CardBal 使用手机自带的 NFC 读卡功能。'],
        ['能读取另一台设备中的 Apple 钱包交通卡吗？', '可以。在存放受支持交通卡的 iPhone 或 Apple Watch 上开启服务模式，再使用另一部 iPhone 上的 CardBal 读取。在存卡的 iPhone 上，打开“钱包”，选择交通卡，进入“卡片详细信息”，并在该选项可用时开启“服务模式”。具体支持情况与可读取的信息取决于发卡方。'],
        ['CardBal 可以给卡充值吗？', 'CardBal 用于读取卡片信息。如需充值或支付车费，请使用发卡方提供的官方服务。'],
        ['为什么有些卡显示的记录较少？', '不同卡片保存的信息类型和记录数量不同。CardBal 会展示能够读取和解析的数据，部分站名或交易记录可能无法显示。'],
        ['我的数据如何处理？', '已保存的卡片存储在设备上；在 iPhone 上，备份可通过 iCloud 同步。可选的韩国卡片数据贡献与站点报告会分享应用中说明的数据；iPhone 版应用也使用 Firebase Analytics。详情请参阅隐私政策。'],
        ['遇到无法识别的站点，能帮忙完善吗？', '可以。在 CardBal 中打开已保存的卡片或行程，即可报告缺失站点或请求更正站点代码。你可以填写站名、补充可选信息，并在地图上标记位置。']
      ]
    },
    end: { kicker: '下一站', title: ['读懂你每天', '随身携带的卡。'], body: 'CardBal 现已登陆 App Store 与 Google Play，支持 iPhone 与 Android。', meta: '需要 iOS 16 或更新版本、支持 NFC 的 iPhone，或 Android 8 或更新版本、支持 NFC 的 Android 手机。' },
    support: {
      pageTitle: '支持 — CardBal',
      description: '获取 CardBal（iPhone 与 Android）的帮助：发送邮件联系支持、报告站点、反馈错误，以及解决常见的读卡问题。',
      kicker: '服务台', title: ['需要帮助？', '写信给我们。'],
      body: '使用疑问、错误报告，或是 CardBal 暂时读不了的卡，都可以发邮件告诉我们，我们会通过邮件回复你。',
      email: '邮件联系支持', includeTitle: '方便的话，请附上',
      include: ['CardBal 版本和手机型号', 'iOS 或 Android 系统版本', '卡片名称、发卡方和城市', '具体情况，最好附上截图'],
      note: '请不要发送完整卡号。在 iPhone 上截图前，可在“设置 › 隐私 › 序列号显示”中选择“掩码显示（仅末尾数字）”或“隐藏”。',
      routes: {
        kicker: '其他途径', title: ['更多', '求助方式。'],
        items: [
          { title: '站点缺失或有误。', body: '在 CardBal 中打开已保存的卡片或行程并报告该站点，最好在地图上标记位置。提交的请求会显示在公开列表中。', link: '查看站点报告' },
          { title: '和其他用户交流。', body: '加入 CardBal 的 Telegram 群组，提出问题、交流卡片，和其他用户聊聊。', link: '加入 Telegram 群组' },
          { title: '发现错误？有新想法？', body: 'CardBal 的源代码已公开。可在 GitHub 上提交 Issue，报告解析错误或建议支持新的卡片。', link: '在 GitHub 提交 Issue' },
          { title: '隐私与你的数据。', body: '了解 CardBal 如何处理已保存的卡片、站点报告、可选的数据贡献和分析数据。', link: '阅读隐私政策' }
        ]
      },
      fixes: {
        kicker: '快速排查', title: '先试试这些。', more: '查看更多常见问题',
        items: [
          ['CardBal 检测不到我的卡。', '在 iPhone 上，开始扫描后将卡片平贴在手机顶部。在 Android 上，先在系统设置中开启 NFC，打开 CardBal，再将卡片在手机背面缓慢移动，直到被识别。请把卡片从放有其他卡的卡包中取出，并取下较厚或含金属的手机壳。'],
          ['读卡中途停止。', '请保持卡片不动，直到 CardBal 显示结果。部分卡片需要几秒钟，开启开发者模式后读取时间更长。'],
          ['我的卡不受支持。', '请先查看支持的卡片列表。如果没有你的卡，请发邮件告诉我们卡片名称、发卡方和城市。', '查看支持的卡'],
          ['如何读取 Apple 钱包中的卡？', '在存放该卡的 iPhone 或 Apple Watch 上为它开启服务模式，再用另一部 iPhone 上的 CardBal 读取。', '了解服务模式'],
          ['站点显示为代码或缺失。', 'CardBal 的站点数据尚未覆盖所有代码。打开该行程并报告站点，更正会在后续版本中加入应用。'],
          ['如何把卡片迁移到新手机？', '在 iPhone 上，可在“设置 › 备份”中备份到 iCloud，再在新 iPhone 上恢复。在两个平台上，也可以在设置中导出备份文件，再在新手机上导入，包括从 iPhone 迁移到 Android。']
        ]
      }
    },
    privacy: {
      pageTitle: '隐私政策 — CardBal',
      description: '了解 iPhone 与 Android 版 CardBal 如何处理你的信息：哪些内容留在手机上，哪些会发送到手机之外，以及哪些功能可以关闭。',
      kicker: 'iPhone 与 Android 版 CardBal', title: ['隐私', '政策'],
      updated: '最后更新：{date}', date: '2026 年 10 月 31 日',
      intro: '本政策说明 CardBal 应用在 iPhone 和 Android 上如何处理你的信息。CardBal 由 Kitta Ltd. 发布。',
      sections: [
        { title: 'CardBal 的大部分功能都在手机上完成', body: ['CardBal 通过手机的 NFC 读取交通卡。余额、行程、站名和卡片详情都在手机上解析并显示。以下各节逐一列出 CardBal 会把内容发送到手机之外的每种情况，以及你可以关闭哪些功能。'] },
        { title: '与卡片运营方的在线查询', body: [
          '有些卡片无法仅靠手机完整读取。对于这类卡片，CardBal 会将你的卡片连接到其运营方的在线服务以完成读取，并在两者之间传递数据。运营方接收和保存哪些数据，适用运营方自己的隐私政策，而非本政策。CardBal 只在你的手机上保存读取结果。',
          '对于八达通卡，这项功能是“八达通在线查询”，默认开启。它会在你首次扫描某张卡时运行；对于同时存有中国大陆余额的卡片，每次扫描都会运行，以保持汇率最新。你可以在“设置 › 隐私”中将其关闭。除非你开启“允许更新卡片”，否则 CardBal 会阻止对卡内存储数据的任何更改。',
          '对于 Lignes d’Azur 卡，只有在你轻点“在线查询”时才会进行查询。'
        ] },
        { title: '帮助改进韩国卡片读取（iPhone）', body: [
          '此功能默认开启。你可以在“设置 › 隐私 › 帮助改进韩国卡片读取”中将其关闭。',
          '当你扫描 T-money 或 EZL/Cashbee 卡时，CardBal 会将其行程记录发送到 korean-trip-crowdsourcing.ieb.app，用于改进解析。每条记录包含原始行程记录字节（其中含有时间、票价和余额数据）、站点与票价字段、卡号的 SHA-256 哈希值、卡号的最后四个字符、一个去重哈希值、卡片类型以及应用版本。'
        ] },
        { title: '站点报告（iPhone）', body: [
          '只有在你轻点“提交报告”时才会发送。',
          'CardBal 会发送站名、报告类型，以及你填写的站点代码、线路、运营方、城市、国家或备注；如果你选择提供，还会发送地图标记的精确坐标或你的当前位置。每份报告还包含卡片 ID 的 SHA-256 哈希值、应用专属的设备 ID、应用版本和卡片类型。报告存储在 Cloudflare D1 中，以便我们审核请求并改进站点数据。{reports} 上的公开列表会显示站点详情和大致位置，但不会显示卡片 ID 哈希值、设备 ID、应用版本、备注或精确坐标。'
        ] },
        { title: '应用分析（iPhone）', body: ['CardBal 使用 Google Firebase Analytics 统计安装量、会话数和浏览过的界面。Firebase 会收到应用实例 ID、设备与系统信息、语言，以及根据你的 IP 地址推断出的大致位置。CardBal 不会将你的卡片或行程发送给 Firebase，也不使用广告标识符。Google 依据其自身的隐私政策处理这些数据。应用中没有关闭此功能的开关。'] },
        { title: '卡面图片', body: ['CardBal 从 faces.cardb.al 下载卡面图片；无法访问时，则从 GitHub 镜像（cdn.jsdelivr.net、raw.githubusercontent.com）下载。匹配哪张图片在手机上决定，不会发送任何卡片数据。服务器只能看到请求了哪张图片以及你的 IP 地址。'] },
        { title: '地图', body: ['在 iPhone 上，地图来自 Apple 地图。在 Android 上，地图图块来自 OpenStreetMap。这些服务提供方能看到显示了哪些区域以及你的 IP 地址。'] },
        { title: '备份与同步', body: [[
          'iPhone：开启 iCloud 时，CardBal 会在你的 iCloud 账户中保留一份已保存卡片（包括卡号、余额、行程和八达通号码）及卡面图片的副本。CardBal 文件夹可在“文件”App 中看到。',
          'Android：Android 自带的备份功能可能会将 CardBal 的数据复制到你的 Google 账号。',
          '你也可以自行导出、导入和分享备份。'
        ]] },
        { title: '调试日志', body: ['“设置 › 故障排除”会在你的手机上记录每次在线查询的日志，其中的卡号会被缩短。只有当你轻点“复制调试日志”并自行粘贴到别处时，日志才会离开手机。'] },
        { title: '平台与分发', body: ['当你下载、更新、备份或使用应用时，Apple、Google 和你的设备制造商可能会依据其自身条款处理技术、崩溃、购买或付款信息。本政策不涵盖这些处理。'] },
        { title: '政策变更', body: ['如果 CardBal 的数据处理方式发生变化，我们会更新本页面，并在需要时通过应用内或商店页面告知你。'] },
        { title: '联系我们', body: ['关于本政策的问题，或与你提交的数据有关的请求，请联系：{email}'] }
      ]
    },
    footer: {
      tagline: 'iPhone 与 Android 专业交通卡读卡器。', resources: '资源', languages: '语言',
      support: '支持', privacy: '隐私政策', reports: '站点报告', source: '源代码', top: '返回顶部',
      legal: '卡片名称与图案归各自所有者所有。CardBal 是独立读卡应用，与交通运营商没有隶属关系。'
    },
    notFound: '地图上没有这一站。', back: '返回 CardBal'
  },
  ja: {
    name: '日本語', htmlLang: 'ja', store: 'jp', ogLocale: 'ja_JP',
    title: 'CardBal — 交通系ICカードを、読み解く。',
    description: 'iPhoneやAndroidスマートフォンで対応する交通系ICカードや電子マネーを読み取り。残高、利用履歴、カード情報、生データまで確認できます。日本、韓国、中国本土、香港、モンゴル、フランスのカードに対応。別のデバイスのAppleウォレットにあるカードも、ヘルプモードで読み取れます。',
    skip: '本文へ移動', language: '言語を選択', menu: 'メニュー', navLabel: 'ページ内の項目',
    nav: ['読み取り', 'プロ機能', '対応カード', 'ヘルプモード', 'よくある質問'],
    download: 'CardBalを入手', appStore: ['ダウンロードは', 'App Store'], googlePlay: ['ダウンロードは', 'Google Play'],
    hero: {
      kicker: 'iPhoneとAndroidのためのプロ仕様ICカードリーダー',
      title: ['交通系ICカードを、', '読み解く。'],
      body: 'カードをスマートフォンにかざすだけで、CardBalがチップに保存された情報を読み取ります。残高、読み取れる利用履歴、カード情報、そして生データまで。SuicaからT-money、OctopusからLignes d’Azurまで。',
      secondary: '対応カードを見る', meta: 'iOS 16以降のiPhone · Android 8以降 · NFC対応',
      service: 'Appleウォレットのカードもヘルプモードで読み取り',
      alt: 'T-money、City Union、気候同行カード、U-Money、OKICA、はやかけんなどのカードと残高を表示する、CardBalのカードコレクション画面。'
    },
    board: {
      label: '読み取り中', note: 'CardBalが対応するカードの一部です。',
      columns: ['カード', '規格', '地域'],
      sr: '対応カードには、Suica、PASMO、ICOCA、楽天Edy、T-money、Cashbee、Octopus、交通聯合の都市カード、U-Money、Lignes d’Azurなどがあります。',
      stats: [['6', 'つの地域'], ['4', '種類のカード規格'], ['300+', '交通聯合の都市カード'], ['iOS + Android', 'NFC対応スマホ']]
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
      device: { title: '端末に保存。バックアップも自由に。', body: '保存したカードはスマートフォンに保管。iPhoneではiCloudにバックアップでき、書き出したファイルはiPhoneとAndroidのCardBalで読み込めます。', labels: ['端末に保存', 'iCloudバックアップ', 'ファイル書き出し'] },
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
      physical: { label: '実物のカード', steps: [['CardBalを開く', 'スマートフォンで「Scan」をタップします。'], ['読み取り位置に近づける', '読み取りが終わるまで、カードをiPhoneの上部、またはAndroidスマートフォンの背面に近づけたままにします。'], ['確認して保存', '残高と読み取れる履歴を確認して、コレクションに保存しましょう。']] },
      wallet: {
        label: 'Appleウォレット · ヘルプモード',
        steps: [['カードを選ぶ', '交通系ICカードが入っているデバイスでウォレットを開きます。'], ['ヘルプモードをオンに', 'iPhoneでは「カードの詳細」からヘルプモードをオンにします。Apple Watchの操作はAppleのガイドをご覧ください。'], ['CardBalで読み取る', 'もう1台のiPhoneでCardBalの読み取りを開始し、両方のデバイスのNFC読み取り位置を近づけます。']],
        note: 'カードが入ったデバイスと、CardBalを使うiPhoneの2台が必要です。ヘルプモードの有無や読み取れる情報はカードと発行元によって異なります。',
        link: 'Appleのヘルプモードガイド', linkUrl: 'https://support.apple.com/ja-jp/120474'
      }
    },
    faq: {
      kicker: 'かざす、その前に', title: '知っておきたいこと。', reports: '駅情報の報告を見る', support: 'サポートに問い合わせる',
      items: [
        ['何が必要ですか？', 'iOS 16以降を搭載したNFC対応iPhone、またはAndroid 8以降のNFC対応Androidスマートフォンと、対応カードが必要です。iPhoneでは、別のデバイスのAppleウォレットにある対応カードもヘルプモードで読み取れます。端末内蔵のNFCリーダーを使用します。'],
        ['別のデバイスのAppleウォレットのカードを読めますか？', 'はい。対応する交通系ICカードが入ったiPhoneやApple Watchでヘルプモードをオンにして、別のiPhoneのCardBalで読み取れます。カードが入ったiPhoneでウォレットを開き、カードを選び、「カードの詳細」からヘルプモードをオンにしてください。対応状況や読み取れる情報は発行元によって異なります。'],
        ['カードにチャージできますか？', 'CardBalはカード情報を読み取ります。チャージや運賃の支払いには、カード発行元の公式サービスをご利用ください。'],
        ['表示される履歴が少ないのはなぜですか？', 'カードの種類によって、保存される情報や履歴の件数が異なります。CardBalは読み取り・解析できた情報を表示するため、一部の駅名や取引は表示できない場合があります。'],
        ['データはどのように扱われますか？', '保存したカードは端末に保管され、iPhoneではバックアップをiCloudで同期できます。任意の韓国カードデータの提供や駅情報の報告では、アプリ内で説明したデータを送信します。また、iPhone版アプリはFirebase Analyticsを使用しています。詳細はプライバシーポリシーをご覧ください。'],
        ['不明な駅の情報を提供できますか？', 'はい。保存済みのカードや利用履歴から、不足している駅の報告や駅コードの修正依頼を送れます。駅名、任意の補足情報、地図上のピンを追加できます。']
      ]
    },
    end: { kicker: '次の停車駅', title: ['毎日持ち歩くカードを、', '読み解こう。'], body: 'CardBalは、App StoreとGoogle Playで。', meta: 'iOS 16以降のNFC対応iPhone、またはAndroid 8以降のNFC対応Androidスマートフォンが必要です。' },
    support: {
      pageTitle: 'サポート — CardBal',
      description: 'iPhone・Android版CardBalのサポート。メールでのお問い合わせ、駅情報の報告、不具合の報告、よくある読み取りトラブルの解決方法をご案内します。',
      kicker: 'ご案内窓口', title: ['お困りですか？', 'メールでどうぞ。'],
      body: '使い方の質問や不具合の報告、まだ読み取れないカードについて、メールでお気軽にお問い合わせください。メールで返信します。',
      email: 'メールで問い合わせる', includeTitle: 'あると助かる情報',
      include: ['CardBalのバージョンと端末の機種', 'iOSまたはAndroidのバージョン', 'カード名、発行元、地域', '起きたことと、できればスクリーンショット'],
      note: 'カード番号の全桁は送らないでください。iPhoneでは、スクリーンショットを撮る前に「設定 › プライバシー › シリアル番号の表示」を「マスク表示（末尾のみ）」または「非表示」にできます。',
      routes: {
        kicker: 'ほかの窓口', title: ['ほかの', '相談方法。'],
        items: [
          { title: '駅がない、または間違っている。', body: 'CardBalで保存済みのカードや利用履歴を開き、駅を報告してください。地図上のピンもあると助かります。報告は公開リストに表示されます。', link: '駅情報の報告を見る' },
          { title: 'ほかのユーザーと話す。', body: 'CardBalのTelegramグループで、質問したり、カードの情報を共有したり、ほかのユーザーと交流したりできます。', link: 'Telegramグループに参加' },
          { title: '不具合や要望がある。', body: 'CardBalのソースコードは公開されています。解析の不具合や対応してほしいカードは、GitHubのIssueでお知らせください。', link: 'GitHubでIssueを作成' },
          { title: 'プライバシーとデータ。', body: '保存したカード、駅情報の報告、任意のデータ提供、アクセス解析の扱いについて説明しています。', link: 'プライバシーポリシーを読む' }
        ]
      },
      fixes: {
        kicker: 'まずはここから', title: '試してみてください。', more: 'よくある質問をもっと見る',
        items: [
          ['カードが検出されない。', 'iPhoneでは、スキャンを開始してカードを本体上部に平らに当ててください。Androidでは、設定でNFCをオンにしてCardBalを開き、認識されるまでカードを背面でゆっくり動かしてください。ほかのカードと重ねたままにせず、厚いケースや金属製のケースは外してください。'],
          ['読み取りが途中で止まる。', '結果が表示されるまで、カードを動かさないでください。カードによっては数秒かかり、開発者モードがオンの場合はさらに時間がかかります。'],
          ['カードが対応していない。', 'まず対応カードの一覧をご確認ください。見つからない場合は、カード名、発行元、地域をメールでお知らせください。', '対応カードを見る'],
          ['Appleウォレットのカードを読み取るには？', 'カードが入ったiPhoneまたはApple Watchでそのカードのヘルプモードをオンにし、別のiPhoneのCardBalで読み取ります。', 'ヘルプモードの使い方'],
          ['駅がコードで表示される、または表示されない。', 'CardBalの駅データは、まだすべてのコードを網羅していません。利用履歴を開いて駅を報告してください。修正は今後のアップデートでアプリに反映されます。'],
          ['新しいスマートフォンにカードを移すには？', 'iPhoneでは「設定 › バックアップ」からiCloudにバックアップし、新しいiPhoneで復元します。どちらの機種でも、設定からバックアップファイルを書き出し、新しい端末で読み込めます。iPhoneからAndroidへの移行にも使えます。']
        ]
      }
    },
    privacy: {
      pageTitle: 'プライバシーポリシー — CardBal',
      description: 'iPhone・Android版CardBalアプリが情報をどのように扱うかをご説明します。端末内で完結する処理、端末の外に送信される情報、オフにできる機能について。',
      kicker: 'iPhone・Android版CardBal', title: ['プライバシー', 'ポリシー'],
      updated: '最終更新日：{date}', date: '2026年10月31日',
      intro: 'このポリシーでは、iPhoneとAndroidでCardBalアプリが情報をどのように扱うかを説明します。CardBalはKitta Ltd.が提供しています。',
      sections: [
        { title: 'CardBalのほとんどの処理は端末内で行われます', body: ['CardBalは、スマートフォンのNFCで交通系ICカードを読み取ります。残高、利用履歴、駅名、カード情報は端末内で解析され、端末上に表示されます。以下では、CardBalが端末の外に何かを送信するすべてのケースと、オフにできる機能を説明します。'] },
        { title: 'カード事業者へのオンライン照会', body: [
          '一部のカードは、端末だけでは完全に読み取れません。こうしたカードでは、CardBalがカードを事業者のオンラインサービスに接続して読み取りを完了し、両者の間でデータを受け渡します。事業者が受け取り、保管する情報は、本ポリシーではなく、事業者自身のプライバシーポリシーの対象です。CardBalが端末に保存するのは、読み取りの結果のみです。',
          'Octopusカードの場合、これは「オクトパスのオンライン照会」です。初期設定ではオンになっています。カードを初めてスキャンしたときに実行されるほか、中国本土の残高も持つカードでは、為替レートを最新に保つためにスキャンのたびに実行されます。「設定 › プライバシー」でオフにできます。「カードの更新を許可」をオンにしない限り、CardBalはカードに保存されたデータへの変更をすべてブロックします。',
          'Lignes d’Azurカードでは、「オンライン照会」をタップしたときにのみ照会が行われます。'
        ] },
        { title: '韓国のカード読み取り改善に協力（iPhone）', body: [
          '初期設定ではオンになっています。「設定 › プライバシー › 韓国のカード読み取り改善に協力」でオフにできます。',
          'T-moneyまたはEZL/Cashbeeのカードをスキャンすると、CardBalは解析を改善するため、その利用履歴をkorean-trip-crowdsourcing.ieb.appに送信します。各レコードには、利用履歴の生バイト（日時、運賃、残高のデータを含む）、駅と運賃の項目、カード番号のSHA-256ハッシュ、カード番号の末尾4文字、重複排除用のハッシュ、カードの種類、アプリのバージョンが含まれます。'
        ] },
        { title: '駅情報の報告（iPhone）', body: [
          '「報告を送信」をタップしたときにのみ送信されます。',
          'CardBalは、駅名、報告の種類、入力された駅コード・路線・事業者・都市・国・メモに加え、選択した場合は地図のピンまたは現在地の正確な座標を送信します。各報告には、カードIDのSHA-256ハッシュ、アプリ固有のデバイスID、アプリのバージョン、カードの種類も含まれます。報告は、リクエストを確認して駅データを改善するためにCloudflare D1に保存されます。{reports}の公開リストには、駅の詳細とおおよその位置が表示されます。カードIDのハッシュ、デバイスID、アプリのバージョン、メモ、正確な座標は表示されません。'
        ] },
        { title: 'アプリの利用状況の分析（iPhone）', body: ['CardBalは、インストール数、セッション数、表示された画面を集計するためにGoogle Firebase Analyticsを使用しています。Firebaseが受け取るのは、アプリインスタンスID、デバイスとシステムの情報、言語、IPアドレスから推定したおおよその位置です。CardBalはカードや利用履歴をFirebaseに送信せず、広告識別子も使用しません。Googleは、このデータを同社のプライバシーポリシーに基づいて処理します。アプリにはこの機能をオフにする設定はありません。'] },
        { title: 'カードの画像', body: ['CardBalはカードの画像をfaces.cardb.alから、接続できない場合はGitHubのミラー（cdn.jsdelivr.net、raw.githubusercontent.com）からダウンロードします。どの画像を使うかは端末内で判定し、カードのデータは送信しません。サーバーにわかるのは、リクエストされた画像とIPアドレスのみです。'] },
        { title: '地図', body: ['iPhoneではAppleマップの地図を使用します。AndroidではOpenStreetMapの地図タイルを使用します。これらの提供元には、表示している地域とIPアドレスがわかります。'] },
        { title: 'バックアップと同期', body: [[
          'iPhone：iCloudがオンの場合、CardBalは保存したカード（カード番号、残高、利用履歴、Octopusの番号を含む）とカードの画像のコピーをiCloudアカウントに保管します。CardBalフォルダは「ファイル」Appで確認できます。',
          'Android：Androidの標準のバックアップ機能により、CardBalのデータがGoogleアカウントにコピーされる場合があります。',
          'バックアップは、自分で書き出し、読み込み、共有することもできます。'
        ]] },
        { title: 'デバッグログ', body: ['「設定 › トラブルシューティング」では、オンライン照会ごとのログが、カード番号を短縮した形で端末内に記録されます。このログが端末の外に出るのは、「デバッグログをコピー」をタップして、ご自身でどこかに貼り付けた場合のみです。'] },
        { title: 'プラットフォームと配信', body: ['アプリのダウンロード、アップデート、バックアップ、利用の際には、Apple、Google、デバイスのメーカーが、技術情報、クラッシュ情報、購入情報、請求情報をそれぞれの規約に基づいて処理する場合があります。これは本ポリシーの対象外です。'] },
        { title: '変更について', body: ['CardBalのデータの取り扱いが変わる場合は、このページを更新し、必要に応じてアプリ内またはストアの掲載ページでお知らせします。'] },
        { title: 'お問い合わせ', body: ['本ポリシーに関するご質問や、送信したデータに関するご依頼はこちらへ：{email}'] }
      ]
    },
    footer: {
      tagline: 'iPhoneとAndroidのためのプロ仕様ICカードリーダー。', resources: 'リソース', languages: '言語',
      support: 'サポート', privacy: 'プライバシーポリシー', reports: '駅情報の報告', source: 'ソースコード', top: 'ページの先頭へ',
      legal: 'カードの名称・デザインは各権利者に帰属します。CardBalは独立した読み取りアプリであり、交通事業者とは提携していません。'
    },
    notFound: 'この駅は、地図にないようです。', back: 'CardBalに戻る'
  },
  ko: {
    name: '한국어', htmlLang: 'ko', store: 'kr', ogLocale: 'ko_KR',
    title: 'CardBal — 교통카드, 제대로 읽다.',
    description: 'iPhone이나 Android 폰으로 지원되는 교통카드와 선불카드를 읽어보세요. 일본, 한국, 중국 본토, 홍콩, 몽골, 프랑스 카드의 잔액, 이용 내역, 카드 정보, 원시 데이터를 확인하고, 다른 기기의 Apple 지갑 카드도 서비스 모드에서 읽을 수 있어요.',
    skip: '본문으로 이동', language: '언어 선택', menu: '메뉴', navLabel: '페이지 섹션',
    nav: ['읽기', '프로 기능', '지원 카드', '서비스 모드', '자주 묻는 질문'],
    download: 'CardBal 다운로드', appStore: ['다운로드하기', 'App Store'], googlePlay: ['다운로드하기', 'Google Play'],
    hero: {
      kicker: 'iPhone과 Android를 위한 프로 교통카드 리더',
      title: ['교통카드,', '제대로 읽다.'],
      body: '카드를 휴대폰에 가까이 대면 CardBal이 칩에 저장된 정보를 읽어요. 잔액, 확인 가능한 이용 내역, 카드 정보, 그리고 원시 데이터까지. Suica부터 티머니, 옥토퍼스부터 Lignes d’Azur까지.',
      secondary: '지원 카드 보기', meta: 'iOS 16 이상 iPhone · Android 8 이상 · NFC 지원',
      service: 'Apple 지갑 카드도 서비스 모드에서 읽어요',
      alt: '티머니, City Union, 기후동행카드, U-Money, OKICA, 하야카켄 등 카드와 잔액을 보여주는 CardBal 카드 모음 화면.'
    },
    board: {
      label: '지금 읽는 중', note: 'CardBal이 지원하는 카드 중 일부예요.',
      columns: ['카드', '규격', '지역'],
      sr: '지원 카드에는 Suica, PASMO, ICOCA, 라쿠텐 Edy, 티머니, 캐시비, 옥토퍼스, 중국 교통연합 도시 카드, U-Money, Lignes d’Azur 등이 있어요.',
      stats: [['6', '개 지역'], ['4', '가지 카드 규격'], ['300+', '교통연합 도시 카드'], ['iOS + Android', 'NFC 지원 휴대폰']]
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
      device: { title: '기기에 보관하고, 원하는 방식으로 백업.', body: '저장한 카드는 휴대폰에 보관돼요. iPhone에서는 iCloud에 백업할 수 있고, 내보낸 파일은 iPhone과 Android의 CardBal에서 모두 열 수 있어요.', labels: ['기기에 보관', 'iCloud 백업', '파일 내보내기'] },
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
      physical: { label: '실물 카드', steps: [['CardBal 열기', '휴대폰에서 Scan을 탭하세요.'], ['읽기 위치에 대기', '읽기가 끝날 때까지 카드를 iPhone 상단이나 Android 폰 뒷면에 가까이 대고 있으세요.'], ['확인하고 저장', '잔액과 확인 가능한 이용 내역을 살펴보고 카드를 모음에 저장하세요.']] },
      wallet: {
        label: 'Apple 지갑 · 서비스 모드',
        steps: [['카드 선택하기', '교통카드가 있는 기기에서 지갑 앱을 여세요.'], ['서비스 모드 켜기', 'iPhone에서는 카드 세부사항을 열고 서비스 모드를 켜세요. Apple Watch의 방법은 Apple 안내를 확인해 주세요.'], ['CardBal로 읽기', '다른 iPhone의 CardBal에서 읽기를 시작하고 두 기기의 NFC 인식 위치를 가까이 대세요.']],
        note: '두 기기가 필요해요. 한 기기에는 지갑 카드가 있고, 다른 iPhone에서는 CardBal을 실행해요. 서비스 모드와 읽을 수 있는 정보는 카드와 발급사에 따라 달라요.',
        link: 'Apple 서비스 모드 안내', linkUrl: 'https://support.apple.com/ko-kr/120474'
      }
    },
    faq: {
      kicker: '카드를 대기 전에', title: '미리 알아두세요.', reports: '역 정보 신고 보기', support: '고객 지원 문의',
      items: [
        ['무엇이 필요한가요?', 'iOS 16 이상을 실행하는 NFC 지원 iPhone 또는 Android 8 이상을 실행하는 NFC 지원 Android 폰과 지원 카드가 필요해요. iPhone에서는 다른 기기에서 서비스 모드를 켠 지원 Apple 지갑 교통카드도 읽을 수 있어요. CardBal은 휴대폰의 내장 NFC 리더를 사용해요.'],
        ['다른 기기의 Apple 지갑 카드도 읽을 수 있나요?', '네. 지원 교통카드가 있는 iPhone이나 Apple Watch에서 서비스 모드를 켜고, 다른 iPhone의 CardBal로 읽을 수 있어요. 카드가 있는 iPhone에서 지갑 앱을 열고 카드를 선택한 다음 카드 세부사항에서 서비스 모드를 켜세요. 지원 여부와 읽을 수 있는 정보는 발급사에 따라 달라요.'],
        ['카드를 충전할 수 있나요?', 'CardBal은 카드 정보를 읽는 앱이에요. 충전이나 교통 요금 결제는 카드 발급사의 공식 서비스를 이용해 주세요.'],
        ['일부 카드의 내역이 적게 보이는 이유는 무엇인가요?', '카드 종류마다 저장하는 정보와 기록 수가 달라요. CardBal은 읽고 해석할 수 있는 데이터를 표시하며, 일부 역이나 거래 정보는 확인하지 못할 수 있어요.'],
        ['내 데이터는 어떻게 처리되나요?', '저장한 카드는 기기에 보관되며, iPhone에서는 백업을 iCloud로 동기화할 수 있어요. 선택적인 한국 카드 데이터 기여와 역 정보 신고는 앱에 안내된 데이터를 공유해요. iPhone 앱은 Firebase Analytics도 사용해요. 자세한 내용은 개인정보 처리방침을 확인해 주세요.'],
        ['인식되지 않는 역을 알려줄 수 있나요?', '네. CardBal에서 저장한 카드나 이용 내역을 열어 누락된 역을 신고하거나 역 코드 수정을 요청할 수 있어요. 역 이름, 선택적인 추가 정보, 지도 핀을 넣을 수 있어요.']
      ]
    },
    end: { kicker: '다음 정류장', title: ['늘 지니고 다니는 카드,', '제대로 읽어보세요.'], body: 'CardBal, App Store와 Google Play에서 만나보세요.', meta: 'iOS 16 이상 NFC 지원 iPhone 또는 Android 8 이상 NFC 지원 Android 폰이 필요해요.' },
    support: {
      pageTitle: '고객 지원 — CardBal',
      description: 'iPhone·Android용 CardBal 고객 지원. 이메일 문의, 역 정보 신고, 버그 제보와 자주 겪는 카드 읽기 문제의 해결 방법을 안내해요.',
      kicker: '안내 데스크', title: ['도움이 필요하세요?', '메일을 보내주세요.'],
      body: '사용 중 궁금한 점, 버그 제보, 아직 읽히지 않는 카드까지 이메일로 알려주세요. 이메일로 답변드릴게요.',
      email: '이메일로 문의하기', includeTitle: '함께 보내주시면 좋아요',
      include: ['CardBal 버전과 휴대폰 모델', 'iOS 또는 Android 버전', '카드 이름, 발급사, 지역', '어떤 일이 있었는지, 가능하면 스크린샷과 함께'],
      note: '카드 번호 전체는 보내지 마세요. iPhone에서는 스크린샷을 찍기 전에 설정 › 개인정보 › 일련번호 표시를 ‘마스킹됨 (끝자리만)’ 또는 ‘숨김’으로 바꿀 수 있어요.',
      routes: {
        kicker: '다른 방법', title: ['도움받는', '다른 방법.'],
        items: [
          { title: '역이 없거나 잘못되었어요.', body: 'CardBal에서 저장한 카드나 이용 내역을 열고 역을 신고해 주세요. 지도 핀을 함께 넣으면 더 좋아요. 신고 내용은 공개 목록에 표시돼요.', link: '역 정보 신고 보기' },
          { title: '다른 사용자와 이야기해요.', body: 'CardBal Telegram 그룹에서 질문하고, 카드 정보를 나누고, 다른 사용자와 이야기해 보세요.', link: 'Telegram 그룹 참여하기' },
          { title: '버그를 찾았거나 제안이 있나요?', body: 'CardBal의 소스 코드는 공개되어 있어요. 해석 오류나 지원했으면 하는 카드는 GitHub 이슈로 알려주세요.', link: 'GitHub 이슈 만들기' },
          { title: '개인정보와 데이터.', body: '저장한 카드, 역 정보 신고, 선택적인 데이터 기여, 분석 데이터를 CardBal이 어떻게 처리하는지 안내해요.', link: '개인정보 처리방침 보기' }
        ]
      },
      fixes: {
        kicker: '빠른 해결', title: '먼저 확인해 보세요.', more: '자주 묻는 질문 더 보기',
        items: [
          ['카드가 인식되지 않아요.', 'iPhone에서는 스캔을 시작한 뒤 카드를 휴대폰 위쪽에 평평하게 대세요. Android에서는 설정에서 NFC를 켜고 CardBal을 연 다음, 인식될 때까지 카드를 휴대폰 뒷면에서 천천히 움직여 보세요. 다른 카드와 함께 지갑에 든 상태라면 꺼내고, 두껍거나 금속이 들어간 케이스는 빼 주세요.'],
          ['읽기가 중간에 멈춰요.', '결과가 나올 때까지 카드를 움직이지 마세요. 일부 카드는 몇 초가 걸리고, 개발자 모드를 켜면 더 오래 걸려요.'],
          ['내 카드가 지원되지 않아요.', '먼저 지원 카드 목록을 확인해 주세요. 목록에 없다면 카드 이름, 발급사, 지역을 이메일로 알려주세요.', '지원 카드 보기'],
          ['Apple 지갑의 카드는 어떻게 읽나요?', '카드가 있는 iPhone이나 Apple Watch에서 해당 카드의 서비스 모드를 켜고, 다른 iPhone의 CardBal로 읽으세요.', '서비스 모드 사용법'],
          ['역이 코드로 표시되거나 보이지 않아요.', 'CardBal의 역 데이터가 아직 모든 코드를 다루지는 못해요. 이용 내역을 열고 역을 신고해 주세요. 수정 사항은 이후 업데이트에서 앱에 반영돼요.'],
          ['새 휴대폰으로 카드를 옮기려면요?', 'iPhone에서는 설정 › 백업에서 iCloud에 백업한 뒤 새 iPhone에서 복원하세요. 두 플랫폼 모두 설정에서 백업 파일을 내보내 새 휴대폰에서 가져올 수 있고, iPhone에서 Android로 옮길 때도 쓸 수 있어요.']
        ]
      }
    },
    privacy: {
      pageTitle: '개인정보 처리방침 — CardBal',
      description: 'iPhone·Android용 CardBal 앱이 정보를 어떻게 처리하는지 안내해요. 휴대폰에 남는 정보, 휴대폰 밖으로 보내는 정보, 그리고 끌 수 있는 기능까지.',
      kicker: 'iPhone·Android용 CardBal', title: ['개인정보', '처리방침'],
      updated: '최종 업데이트: {date}', date: '2026년 10월 31일',
      intro: '이 방침은 CardBal 앱이 iPhone과 Android에서 사용자의 정보를 어떻게 처리하는지 설명해요. CardBal은 Kitta Ltd.에서 제공해요.',
      sections: [
        { title: 'CardBal은 대부분 휴대폰 안에서 작동해요', body: ['CardBal은 휴대폰의 NFC로 교통카드를 읽어요. 잔액, 이용 내역, 역 이름, 카드 정보는 휴대폰에서 해석되고 휴대폰에 표시돼요. 아래에서는 CardBal이 휴대폰 밖으로 무언가를 보내는 모든 경우와, 끌 수 있는 기능을 하나씩 안내해요.'] },
        { title: '카드 운영사와의 온라인 조회', body: [
          '일부 카드는 휴대폰만으로는 완전히 읽을 수 없어요. 이런 카드는 CardBal이 카드를 운영사의 온라인 서비스에 연결해 읽기를 마치고, 둘 사이에서 데이터를 전달해요. 운영사가 받고 보관하는 정보는 이 방침이 아니라 운영사의 개인정보 처리방침을 따라요. CardBal은 결과만 휴대폰에 저장해요.',
          '옥토퍼스 카드에서는 ‘옥토퍼스 온라인 조회’가 이 기능이에요. 기본적으로 켜져 있어요. 카드를 처음 스캔할 때 실행되고, 중국 본토 잔액도 함께 들어 있는 카드는 환율을 최신으로 유지하기 위해 스캔할 때마다 실행돼요. 설정 › 개인정보에서 끌 수 있어요. ‘카드 업데이트 허용’을 켜지 않는 한, CardBal은 카드에 저장된 데이터의 모든 변경을 차단해요.',
          'Lignes d’Azur 카드는 ‘온라인 조회’를 탭할 때만 조회해요.'
        ] },
        { title: '한국 카드 읽기 개선에 참여 (iPhone)', body: [
          '기본적으로 켜져 있어요. 설정 › 개인정보 › 한국 카드 읽기 개선에 참여에서 끌 수 있어요.',
          '티머니 또는 EZL/캐시비 카드를 스캔하면 CardBal은 해석을 개선하기 위해 해당 카드의 이용 기록을 korean-trip-crowdsourcing.ieb.app으로 보내요. 각 기록에는 원시 이용 기록 바이트(시간, 요금, 잔액 데이터 포함), 역과 요금 항목, 카드 번호의 SHA-256 해시, 카드 번호의 마지막 네 글자, 중복 제거용 해시, 카드 유형, 앱 버전이 포함돼요.'
        ] },
        { title: '역 정보 신고 (iPhone)', body: [
          '‘신고 제출’을 탭할 때만 전송돼요.',
          'CardBal은 역 이름과 신고 유형, 그리고 입력한 역 코드, 노선, 운영사, 도시, 국가, 메모를 보내요. 원하면 지도 핀이나 현재 위치의 정확한 좌표도 함께 보내요. 각 신고에는 카드 ID의 SHA-256 해시, 앱 전용 기기 ID, 앱 버전, 카드 유형도 포함돼요. 신고는 요청을 검토하고 역 데이터를 개선할 수 있도록 Cloudflare D1에 저장돼요. {reports}의 공개 목록에는 역 정보와 대략적인 위치가 표시돼요. 카드 ID 해시, 기기 ID, 앱 버전, 메모, 정확한 좌표는 표시되지 않아요.'
        ] },
        { title: '앱 분석 (iPhone)', body: ['CardBal은 설치 수, 세션, 조회한 화면을 집계하기 위해 Google Firebase Analytics를 사용해요. Firebase는 앱 인스턴스 ID, 기기 및 시스템 정보, 언어, IP 주소로 추정한 대략적인 위치를 받아요. CardBal은 카드나 이용 내역을 Firebase로 보내지 않으며, 광고 식별자도 사용하지 않아요. Google은 이 데이터를 자체 개인정보 처리방침에 따라 처리해요. 앱에는 이 기능을 끄는 설정이 없어요.'] },
        { title: '카드 이미지', body: ['CardBal은 카드 이미지를 faces.cardb.al에서 내려받고, 연결할 수 없을 때는 GitHub 미러(cdn.jsdelivr.net, raw.githubusercontent.com)에서 내려받아요. 맞는 이미지는 휴대폰에서 고르며, 카드 데이터는 보내지 않아요. 서버는 어떤 이미지를 요청했는지와 IP 주소만 알 수 있어요.'] },
        { title: '지도', body: ['iPhone에서는 Apple 지도를 사용해요. Android에서는 OpenStreetMap의 지도 타일을 사용해요. 이 제공업체들은 어떤 지역이 표시되는지와 IP 주소를 알 수 있어요.'] },
        { title: '백업과 동기화', body: [[
          'iPhone: iCloud가 켜져 있으면 CardBal은 저장한 카드(카드 번호, 잔액, 이용 내역, 옥토퍼스 번호 포함)와 카드 이미지의 사본을 iCloud 계정에 보관해요. CardBal 폴더는 파일 앱에서 볼 수 있어요.',
          'Android: Android 자체 백업 기능이 CardBal 데이터를 Google 계정에 복사할 수 있어요.',
          '백업을 직접 내보내고, 가져오고, 공유할 수도 있어요.'
        ]] },
        { title: '디버그 로그', body: ['설정 › 문제 해결에는 각 온라인 조회의 로그가 카드 번호를 줄인 형태로 휴대폰에 기록돼요. 이 로그는 ‘디버그 로그 복사’를 탭한 뒤 직접 다른 곳에 붙여 넣을 때만 휴대폰 밖으로 나가요.'] },
        { title: '플랫폼과 배포', body: ['앱을 다운로드, 업데이트, 백업하거나 사용할 때 Apple, Google, 기기 제조사가 자체 약관에 따라 기술 정보, 충돌 정보, 구매 또는 결제 정보를 처리할 수 있어요. 이 방침은 이러한 처리를 다루지 않아요.'] },
        { title: '변경 사항', body: ['CardBal의 데이터 처리 방식이 바뀌면 이 페이지를 업데이트하고, 필요한 경우 앱이나 스토어 페이지에서 알려드려요.'] },
        { title: '문의', body: ['이 방침에 대한 질문이나 제출한 데이터에 관한 요청은 여기로 보내주세요: {email}'] }
      ]
    },
    footer: {
      tagline: 'iPhone과 Android를 위한 프로 교통카드 리더.', resources: '리소스', languages: '언어',
      support: '고객 지원', privacy: '개인정보 처리방침', reports: '역 정보 신고', source: '소스 코드', top: '맨 위로',
      legal: '카드 이름과 디자인은 각 소유자의 자산이에요. CardBal은 독립적인 카드 리더이며 교통 운영사와 제휴 관계가 없어요.'
    },
    notFound: '지도에 없는 정류장이에요.', back: 'CardBal로 돌아가기'
  },
  mn: {
    name: 'Монгол', htmlLang: 'mn', store: 'mn', ogLocale: 'mn_MN',
    title: 'CardBal — Тээврийн картаа нарийн уншаарай.',
    description: 'iPhone эсвэл Android утсаараа дэмжигдэх тээврийн болон урьдчилсан төлбөрт картаа уншуулаарай. Япон, Өмнөд Солонгос, Хятад, Хонконг, Монгол, Францын картын үлдэгдэл, зорчилтын түүх, картын мэдээлэл, түүхий өгөгдлийг харах боломжтой. Өөр төхөөрөмжийн Apple Wallet дахь картыг үйлчилгээний горимд ч уншина.',
    skip: 'Үндсэн хэсэг рүү очих', language: 'Хэл сонгох', menu: 'Цэс', navLabel: 'Хуудасны хэсгүүд',
    nav: ['Уншилт', 'Pro', 'Картууд', 'Үйлчилгээний горим', 'Түгээмэл асуулт'],
    download: 'CardBal татах', appStore: ['Татах', 'App Store'], googlePlay: ['Татах', 'Google Play'],
    hero: {
      kicker: 'iPhone, Android-д зориулсан мэргэжлийн карт уншигч',
      title: ['Тээврийн картаа', 'нарийн уншаарай.'],
      body: 'Картаа утсандаа ойртуулахад CardBal чипэд хадгалагдсан мэдээллийг уншина: үлдэгдэл, боломжтой зорчилтын түүх, картын мэдээлэл болон түүхий өгөгдөл. Suica-аас T-money, Octopus-аас Lignes d’Azur хүртэл.',
      secondary: 'Дэмжих картуудыг харах', meta: 'iOS 16+ iPhone · Android 8+ · NFC шаардлагатай',
      service: 'Apple Wallet дахь картыг үйлчилгээний горимд ч уншина',
      alt: 'T-money, City Union, Climate Card, U-Money, OKICA, Hayakaken зэрэг картууд болон үлдэгдлийг харуулсан CardBal-ын картын цуглуулга.'
    },
    board: {
      label: 'Одоо уншиж байна', note: 'CardBal-ын дэмждэг картуудын заримаас.',
      columns: ['Карт', 'Стандарт', 'Бүс'],
      sr: 'Дэмжигдэх картуудад Suica, PASMO, ICOCA, Rakuten Edy, T-money, Cashbee, Octopus, T-Union хотын картууд, U-Money, Lignes d’Azur зэрэг багтана.',
      stats: [['6', 'бүс нутаг'], ['4', 'картын стандарт'], ['300+', 'T-Union хотын карт'], ['iOS + Android', 'NFC-тэй утас']]
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
      device: { title: 'Төхөөрөмждөө. Нөөцөө өөрөө сонго.', body: 'Хадгалсан картууд таны утсанд байрлана. iPhone дээр iCloud-д нөөцлөх боломжтой бөгөөд экспортолсон файлыг iPhone болон Android дээрх CardBal-д нээж болно.', labels: ['Төхөөрөмжид', 'iCloud нөөцлөлт', 'Файл экспорт'] },
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
      physical: { label: 'Биет карт', steps: [['CardBal-ыг нээх', 'Утсан дээрээ Scan-ыг товшино уу.'], ['Уншигчид ойртуулах', 'Уншиж дуустал картаа iPhone-ы дээд хэсэг эсвэл Android утасны ар талд ойртуулж барина уу.'], ['Уншаад хадгалах', 'Үлдэгдэл, боломжтой зорчилтуудаа шалгаад картаа цуглуулгадаа хадгалаарай.']] },
      wallet: {
        label: 'Apple Wallet · Үйлчилгээний горим',
        steps: [['Картаа сонгох', 'Тээврийн карт байгаа төхөөрөмж дээр Wallet-ыг нээнэ үү.'], ['Үйлчилгээний горимыг асаах', 'iPhone дээр картын дэлгэрэнгүй мэдээллийг нээгээд Service Mode-ыг асаана уу. Apple Watch-ын зааврыг Apple-ын гарын авлагаас үзээрэй.'], ['CardBal-аар уншуулах', 'Өөр iPhone дээр CardBal-ын уншилтыг эхлүүлж, хоёр төхөөрөмжийн NFC мэдрэгчийн хэсгийг ойртуулна уу.']],
        note: 'Хоёр төхөөрөмж хэрэгтэй: нэг нь Wallet дахь картыг агуулна, нөгөө iPhone нь CardBal-ыг ажиллуулна. Үйлчилгээний горим болон уншигдах мэдээлэл нь карт, карт гаргагчаас хамаарна.',
        link: 'Apple-ын Service Mode заавар', linkUrl: 'https://support.apple.com/en-us/120474'
      }
    },
    faq: {
      kicker: 'Уншуулахаасаа өмнө', title: 'Мэдэхэд илүүдэхгүй.', reports: 'Буудлын тайлангууд', support: 'Тусламж авах',
      items: [
        ['Юу хэрэгтэй вэ?', 'iOS 16 буюу түүнээс шинэ хувилбартай NFC-тэй iPhone, эсвэл Android 8 буюу түүнээс шинэ хувилбартай NFC-тэй Android утас болон дэмжигдэх карт хэрэгтэй. iPhone дээр өөр төхөөрөмжийн Apple Wallet дахь үйлчилгээний горим асаасан дэмжигдэх тээврийн картыг ч уншуулж болно. CardBal нь утасны суурилуулсан NFC уншигчийг ашигладаг.'],
        ['Өөр төхөөрөмжийн Apple Wallet дахь картыг уншиж болох уу?', 'Болно. Дэмжигдэх тээврийн карт байгаа iPhone эсвэл Apple Watch дээр Service Mode-ыг асаагаад өөр iPhone дээрх CardBal-аар уншуулна. Карт байгаа iPhone дээр Wallet-ыг нээж, картаа сонгон Card Details хэсгээс Service Mode-ыг асаана уу. Дэмжлэг болон уншигдах мэдээлэл нь карт гаргагчаас хамаарна.'],
        ['CardBal картаа цэнэглэх боломжтой юу?', 'CardBal нь картын мэдээллийг уншина. Карт цэнэглэх, зорчих төлбөр төлөхдөө карт гаргагчийн албан ёсны үйлчилгээг ашиглаарай.'],
        ['Яагаад зарим карт цөөн түүх харуулдаг вэ?', 'Картын төрөл бүр өөр мэдээлэл, хязгаарлагдмал тооны бичлэг хадгалдаг. CardBal нь уншиж, тайлж чадсан өгөгдлийг харуулна. Зарим буудал, гүйлгээний мэдээлэл боломжгүй байж болно.'],
        ['Миний өгөгдлийг хэрхэн ашигладаг вэ?', 'Хадгалсан картууд төхөөрөмжид тань байрлах ба iPhone дээр нөөц хуулбарыг iCloud-аар синк хийх боломжтой. Солонгос картын сайн дурын өгөгдөл хуваалцах болон буудлын тайлан нь апп дотор тайлбарласан өгөгдлийг илгээнэ. iPhone апп мөн Firebase Analytics ашигладаг. Дэлгэрэнгүйг нууцлалын бодлогоос уншаарай.'],
        ['Танигдахгүй буудлын мэдээлэл өгч болох уу?', 'Болно. CardBal дотор хадгалсан карт эсвэл зорчилтоо нээгээд дутуу буудлыг мэдээлэх, буудлын код засуулах хүсэлт илгээж болно. Буудлын нэр, нэмэлт мэдээлэл болон газрын зургийн тэмдэглэгээ оруулаарай.']
      ]
    },
    end: { kicker: 'Дараагийн буудал', title: ['Өдөр бүр авч явдаг', 'картаа уншаарай.'], body: 'CardBal-ыг App Store болон Google Play-ээс татаарай.', meta: 'iOS 16+ хувилбартай NFC-тэй iPhone, эсвэл Android 8+ хувилбартай NFC-тэй Android утас шаардлагатай.' },
    support: {
      pageTitle: 'Тусламж — CardBal',
      description: 'iPhone, Android-д зориулсан CardBal-ын тусламж: имэйлээр холбогдох, буудал мэдээлэх, алдаа илгээх, картын уншилтын түгээмэл асуудлыг шийдэх.',
      kicker: 'Лавлах', title: ['Тусламж хэрэгтэй юу?', 'Бидэнд бичээрэй.'],
      body: 'Асуулт, алдааны мэдээлэл эсвэл CardBal одоогоор уншиж чадахгүй байгаа картын талаар имэйл илгээгээрэй. Бид имэйлээр хариу өгнө.',
      email: 'Имэйлээр холбогдох', includeTitle: 'Хавсаргахад тустай',
      include: ['CardBal-ын хувилбар, утасны загвар', 'iOS эсвэл Android-ын хувилбар', 'Картын нэр, карт гаргагч, хот', 'Юу болсныг дэлгэцийн зурагтай нь'],
      note: 'Картын дугаарыг бүтнээр нь бүү илгээгээрэй. iPhone дээр дэлгэцийн зураг авахаасаа өмнө Settings › Privacy › Serial Number Display-г Masked эсвэл Hidden болгож болно.',
      routes: {
        kicker: 'Бусад суваг', title: ['Тусламж авах', 'бусад арга.'],
        items: [
          { title: 'Буудал дутуу эсвэл буруу байна.', body: 'CardBal дотор хадгалсан карт эсвэл зорчилтоо нээгээд буудлыг мэдээлээрэй. Боломжтой бол газрын зураг дээр тэмдэглээрэй. Хүсэлтүүд нийтийн жагсаалтад харагдана.', link: 'Буудлын тайлангууд' },
          { title: 'Бусад хэрэглэгчидтэй ярилцаарай.', body: 'CardBal-ын Telegram бүлэгт нэгдэж асуулт асууж, картын мэдээлэл хуваалцаж, бусад хэрэглэгчидтэй харилцаарай.', link: 'Telegram бүлэгт нэгдэх' },
          { title: 'Алдаа олсон уу? Санал байна уу?', body: 'CardBal-ын эх код нээлттэй. Тайлалтын алдаа эсвэл дэмжүүлэх картын саналаа GitHub-д issue болгон илгээгээрэй.', link: 'GitHub-д issue нээх' },
          { title: 'Нууцлал ба таны өгөгдөл.', body: 'CardBal хадгалсан карт, буудлын тайлан, сайн дурын өгөгдөл хуваалцах болон аналитикийг хэрхэн боловсруулдаг тухай.', link: 'Нууцлалын бодлого унших' }
        ]
      },
      fixes: {
        kicker: 'Хурдан шийдэл', title: 'Эхлээд үүнийг туршаарай.', more: 'Түгээмэл асуултууд',
        items: [
          ['CardBal миний картыг илрүүлэхгүй байна.', 'iPhone дээр уншилтыг эхлүүлээд картаа утасны дээд хэсэгт хавтгай наана уу. Android дээр Settings-ээс NFC-г асааж, CardBal-ыг нээгээд картыг илрэх хүртэл утасны ар талаар аажуухан хөдөлгөнө үү. Картаа бусад карттай түрийвчнээс гаргаж, зузаан эсвэл металл гэрийг авна уу.'],
          ['Уншилт дуусахаасаа өмнө зогсдог.', 'CardBal үр дүнг харуулах хүртэл картаа хөдөлгөлгүй барина уу. Зарим картыг уншихад хэдэн секунд шаардагдах ба Developer Mode асаалттай үед илүү удаан.'],
          ['Миний карт дэмжигдэхгүй байна.', 'Эхлээд дэмжигдэх картуудын жагсаалтыг шалгаарай. Таны карт байхгүй бол картын нэр, карт гаргагч, хотыг имэйлээр илгээгээрэй.', 'Дэмжигдэх картууд'],
          ['Apple Wallet дахь картыг яаж уншуулах вэ?', 'Карт байгаа iPhone эсвэл Apple Watch дээр тухайн картын Service Mode-ыг асаагаад өөр iPhone дээрх CardBal-аар уншуулна.', 'Service Mode-ын заавар'],
          ['Буудал код хэлбэрээр харагдах эсвэл алга байна.', 'CardBal-ын буудлын өгөгдөл бүх кодыг хараахан хамраагүй байна. Зорчилтоо нээгээд буудлыг мэдээлээрэй. Засварууд дараагийн шинэчлэлтээр апп-д орно.'],
          ['Картуудаа шинэ утас руу яаж шилжүүлэх вэ?', 'iPhone дээр Settings › Backup хэсгээс iCloud-д нөөцлөөд шинэ iPhone дээр сэргээнэ. Аль ч платформ дээр Settings-ээс нөөц файл экспортлоод шинэ утсан дээр импортлох боломжтой, iPhone-оос Android руу шилжүүлэхэд ч болно.']
        ]
      }
    },
    privacy: {
      pageTitle: 'Нууцлалын бодлого — CardBal',
      description: 'iPhone, Android-д зориулсан CardBal апп таны мэдээллийг хэрхэн боловсруулдаг тухай: утсан дээр юу үлддэг, утаснаас гадагш юу илгээдэг, юуг унтрааж болох.',
      kicker: 'iPhone, Android-д зориулсан CardBal', title: ['Нууцлалын', 'бодлого'],
      updated: 'Сүүлд шинэчилсэн: {date}', date: '2026 оны 10-р сарын 31',
      intro: 'Энэхүү бодлого нь CardBal апп iPhone болон Android дээр таны мэдээллийг хэрхэн боловсруулдгийг тайлбарлана. CardBal-ыг Kitta Ltd. гаргадаг.',
      sections: [
        { title: 'CardBal-ын ихэнх үйлдэл таны утсан дээр явагдана', body: ['CardBal таны утасны NFC-ээр тээврийн картыг уншина. Үлдэгдэл, зорчилт, буудлын нэр, картын мэдээллийг утсан дээр тайлж, тэнд нь харуулна. Доорх хэсгүүдэд CardBal утаснаас гадагш ямар нэг зүйл илгээдэг тохиолдол бүрийг, мөн юуг унтрааж болохыг жагсаав.'] },
        { title: 'Картын оператортой онлайнаар шалгах', body: [
          'Зарим картыг зөвхөн утсаар бүрэн уншиж чадахгүй. Ийм картын хувьд CardBal уншилтыг дуусгахын тулд таны картыг операторын онлайн үйлчилгээнд холбож, хоёрын хооронд өгөгдөл дамжуулна. Оператор юу хүлээн авч, хадгалах нь энэ бодлогоор бус, операторын өөрийн нууцлалын бодлогоор зохицуулагдана. CardBal зөвхөн үр дүнг таны утсанд хадгална.',
          'Octopus картын хувьд энэ нь “Octopus Online” юм. Анхдагчаар асаалттай байна. Картыг анх удаа уншуулахад ажиллана. Мөн эх газрын Хятадын үлдэгдэлтэй картыг уншуулах бүрт ханшийг шинэчлэн байлгахын тулд ажиллана. Үүнийг “Settings › Privacy” хэсгээс унтрааж болно. Та “Allow Card Updates”-ыг асаахгүй л бол CardBal таны картанд хадгалагдсан өгөгдлийг өөрчлөх аливаа үйлдлийг хаана.',
          'Lignes d’Azur картын хувьд та “Check Online”-ыг товшсон үед л шалгалт хийгдэнэ.'
        ] },
        { title: '“Help Improve Korean Cards” (iPhone)', body: [
          'Энэ нь анхдагчаар асаалттай. Үүнийг “Settings › Privacy › Help Improve Korean Cards” хэсгээс унтрааж болно.',
          'Таныг T-money эсвэл EZL/Cashbee карт уншуулахад CardBal тайлалтыг сайжруулах зорилгоор тухайн картын зорчилтын бичлэгүүдийг korean-trip-crowdsourcing.ieb.app руу илгээнэ. Бичлэг бүрд зорчилтын бичлэгийн түүхий байт (цаг, төлбөр, үлдэгдлийн өгөгдөл агуулсан), буудал болон төлбөрийн талбарууд, картын дугаарын SHA-256 хэш, картын дугаарын сүүлийн дөрвөн тэмдэгт, давхардал шүүх хэш, картын төрөл, аппын хувилбар багтана.'
        ] },
        { title: 'Буудлын тайлан (iPhone)', body: [
          'Тайланг зөвхөн та “Submit Report”-ыг товшсон үед илгээнэ.',
          'CardBal буудлын нэр, тайлангийн төрөл, мөн таны оруулсан буудлын код, шугам, оператор, хот, улс эсвэл тэмдэглэлийг илгээнэ. Хэрэв та сонговол газрын зургийн тэмдэглэгээ эсвэл одоогийн байршлын тань яг координатыг мөн илгээнэ. Тайлан бүрд картын ID-ийн SHA-256 хэш, зөвхөн энэ аппад хамаарах төхөөрөмжийн ID, аппын хувилбар, картын төрөл багтана. Хүсэлтүүдийг хянаж, буудлын өгөгдлийг сайжруулахын тулд тайлангуудыг Cloudflare D1-д хадгална. {reports} дахь нийтийн жагсаалтад буудлын мэдээлэл болон ойролцоо байршил харагдана. Картын ID-ийн хэш, төхөөрөмжийн ID, аппын хувилбар, тэмдэглэл, яг координат харагдахгүй.'
        ] },
        { title: 'Аппын аналитик (iPhone)', body: ['CardBal суулгалт, сесс, үзсэн дэлгэцийн тоог гаргахын тулд Google Firebase Analytics ашигладаг. Firebase аппын суулгацын ID (app-instance ID), төхөөрөмж болон системийн мэдээлэл, хэл, таны IP хаягаас тооцоолсон ойролцоо байршлыг хүлээн авна. CardBal таны карт, зорчилтыг Firebase руу илгээдэггүй бөгөөд зар сурталчилгааны танигчийг ашигладаггүй. Google энэ өгөгдлийг өөрийн нууцлалын бодлогын дагуу боловсруулна. Аппад үүнийг унтраах тохиргоо байхгүй.'] },
        { title: 'Картын зураг', body: ['CardBal картын зургийг faces.cardb.al-аас, түүнд холбогдох боломжгүй үед GitHub-ын толин хуулбаруудаас (cdn.jsdelivr.net, raw.githubusercontent.com) татна. Тохирох зургийг утсан дээр сонгох бөгөөд картын өгөгдөл илгээгдэхгүй. Сервер зөвхөн аль зургийг хүссэн болон таны IP хаягийг харна.'] },
        { title: 'Газрын зураг', body: ['iPhone дээр газрын зураг Apple Maps-аас ирнэ. Android дээр газрын зургийн хавтангууд OpenStreetMap-аас ирнэ. Эдгээр үйлчилгээ үзүүлэгч аль бүсийг харуулж буйг болон таны IP хаягийг харна.'] },
        { title: 'Нөөцлөлт ба синк', body: [[
          'iPhone: iCloud асаалттай үед CardBal таны хадгалсан картуудын (картын дугаар, үлдэгдэл, зорчилт, Octopus дугаар зэрэг) болон картын зургуудын хуулбарыг таны iCloud бүртгэлд хадгална. CardBal хавтас “Files” апп дотор харагдана.',
          'Android: Android-ын өөрийн нөөцлөлт CardBal-ын өгөгдлийг таны Google бүртгэл рүү хуулж болно.',
          'Та мөн нөөцөө өөрөө экспортлох, импортлох, хуваалцах боломжтой.'
        ]] },
        { title: 'Оношилгооны лог', body: ['“Settings › Troubleshooting” хэсэг онлайн шалгалт бүрийн логийг таны утсан дээр, картын дугаарыг товчилсон байдлаар хадгална. Та “Copy Debug Log”-ыг товшоод өөрөө хаа нэгтээ буулгасан үед л энэ лог утаснаас гарна.'] },
        { title: 'Платформ ба түгээлт', body: ['Таныг апп татах, шинэчлэх, нөөцлөх эсвэл ашиглах үед Apple, Google болон таны төхөөрөмжийн үйлдвэрлэгч техникийн, гацалтын (crash), худалдан авалтын эсвэл төлбөрийн мэдээллийг өөрсдийн нөхцлийн дагуу боловсруулж болно. Энэ бодлого үүнийг хамрахгүй.'] },
        { title: 'Өөрчлөлт', body: ['CardBal-ын өгөгдөл боловсруулах арга өөрчлөгдвөл бид энэ хуудсыг шинэчилж, шаардлагатай бол апп эсвэл дэлгүүрийн хуудсаар дамжуулан танд мэдэгдэнэ.'] },
        { title: 'Холбоо барих', body: ['Энэ бодлогын талаарх асуулт эсвэл таны илгээсэн өгөгдөлтэй холбоотой хүсэлтээ дараах хаягаар илгээнэ үү: {email}'] }
      ]
    },
    footer: {
      tagline: 'iPhone, Android-д зориулсан мэргэжлийн тээврийн карт уншигч.', resources: 'Нөөц', languages: 'Хэл',
      support: 'Тусламж', privacy: 'Нууцлалын бодлого', reports: 'Буудлын тайлан', source: 'Эх код', top: 'Дээш буцах',
      legal: 'Картын нэр, загвар нь тус тусын эзэмшигчийн өмч юм. CardBal нь бие даасан карт уншигч бөгөөд тээврийн операторуудтай холбоогүй.'
    },
    notFound: 'Энэ буудал газрын зураг дээр алга.', back: 'CardBal руу буцах'
  }
};
