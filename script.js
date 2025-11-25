// Cấu trúc: { term: "Từ khóa", desc: "Định nghĩa/Mô tả ngắn gọn" }
// ======================================================
// CƠ SỞ DỮ LIỆU TỪ VỰNG (ULTIMATE PACK - 500+ THUẬT NGỮ)
// ======================================================
const VOCAB_DATABASE = [
    // ================= STRATEGY: DOANH NGHIỆP & PHÁP LUẬT =================
    { term: "SWOT分析", desc: "強み・弱み・機会・脅威の4要素で分析する" },
    { term: "PPM", desc: "事業を「花形・金のなる木・問題児・負け犬」に分類する" },
    { term: "VRIO分析", desc: "経済価値・希少性・模倣困難性・組織の4点で資源を評価する" },
    { term: "3C分析", desc: "顧客(Customer)・競合(Competitor)・自社(Company)で分析する" },
    { term: "PEST分析", desc: "政治・経済・社会・技術の外部環境を分析する" },
    { term: "バリューチェーン", desc: "購買・製造・販売などの活動の連鎖で付加価値が生まれるという考え方" },
    { term: "コアコンピタンス", desc: "他社が真似できない自社独自の核となる強み" },
    { term: "ベンチマーキング", desc: "最強の競合や優良企業と比較して自社を改善する手法" },
    { term: "ニッチ戦略", desc: "大手が参入しにくい隙間市場を狙う戦略" },
    { term: "ブルーオーシャン", desc: "競争のない未開拓市場 (対義語: レッドオーシャン)" },
    { term: "ロングテール", desc: "売れ筋以外の商品を幅広く扱い、総売上を確保する手法" },
    { term: "規模の経済", desc: "生産量を増やすことで単位あたりのコストを下げる効果 (Economies of scale)" },
    { term: "経験曲線効果", desc: "累積生産量が増えるほどコストが下がる現象" },
    { term: "シナジー効果", desc: "複数の事業を組み合わせることで、単独よりも大きな効果が出ること (相乗効果)" },
    { term: "カニバリゼーション", desc: "自社の商品同士が競合し、売上を奪い合う現象 (共食い)" },
    { term: "M&A", desc: "企業の合併と買収 (Mergers and Acquisitions)" },
    { term: "TOB", desc: "株式公開買付け。期間・価格を公表して株式を買い集めること" },
    { term: "IPO", desc: "未上場企業が株式を証券取引所に公開すること" },
    { term: "LBO", desc: "買収先の資産を担保に資金を借りて買収すること" },
    { term: "ジョイントベンチャー", desc: "複数の企業が共同出資して設立した会社 (合弁企業)" },
    { term: "スピンオフ", desc: "企業の一部門を切り離して独立した会社にすること" },
    { term: "コンプライアンス", desc: "法令や社会規範、企業倫理を守ること (法令遵守)" },
    { term: "コーポレートガバナンス", desc: "企業経営を監視・規律する仕組み (企業統治)" },
    { term: "CSR", desc: "企業の社会的責任 (環境保護、ボランティアなど)" },
    { term: "ステークホルダ", desc: "株主、従業員、顧客、取引先などの利害関係者" },
    { term: "アカウンタビリティ", desc: "経営者の株主に対する説明責任" },
    { term: "ディスクロージャー", desc: "企業の経営内容を外部へ公開すること" },
    { term: "グリーンIT", desc: "環境に配慮したIT製品やシステムを利用すること" },
    { term: "SDGs", desc: "持続可能な開発目標 (17のゴール)" },
    { term: "BPO", desc: "自社の業務プロセスを外部企業に委託すること (Outsourcing)" },
    { term: "オフショア開発", desc: "海外の企業（人件費の安い国など）に開発を委託すること" },
    { term: "HRテック", desc: "人事(HR)と技術(Technology)を組み合わせたサービス" },
    { term: "フィンテック", desc: "金融(Finance)と技術(Technology)を融合したサービス" },
    { term: "クラウドファンディング", desc: "ネットを通じて不特定多数から資金を調達する手法" },
    { term: "シェアリングエコノミー", desc: "場所・モノ・スキルなどの遊休資産を貸し借りする経済" },
    { term: "サブスクリプション", desc: "定額料金で一定期間サービスを利用するモデル" },
    { term: "フリーミアム", desc: "基本無料、追加機能を有料で提供するモデル" },
    { term: "ギグエコノミー", desc: "ネットを通じて単発の仕事を請け負う働き方" },
    { term: "テレワーク", desc: "ICTを活用した場所にとらわれない働き方" },
    { term: "ダイバーシティ", desc: "性別・国籍など多様な人材を受け入れること" },
    { term: "ワークライフバランス", desc: "仕事と私生活の調和" },
    
    // --- Hệ thống kinh doanh ---
    { term: "ERP", desc: "ヒト・モノ・カネ・情報を一元管理し、経営を効率化する (Enterprise Resource Planning)" },
    { term: "CRM", desc: "顧客情報を一元管理し、顧客満足度を高める (Customer Relationship Management)" },
    { term: "SFA", desc: "営業活動を支援・効率化するシステム (Sales Force Automation)" },
    { term: "SCM", desc: "調達から販売までの供給連鎖を最適化する (Supply Chain Management)" },
    { term: "POS", desc: "販売時点情報管理。レジで売上データをリアルタイムに収集する" },
    { term: "EDI", desc: "企業間で商取引データを電子的に交換する仕組み" },
    { term: "EC", desc: "電子商取引 (E-Commerce)" },
    { term: "SEO", desc: "検索エンジン最適化。検索結果の上位に表示させる技術" },
    { term: "LTV", desc: "顧客生涯価値。一人の顧客が生涯でもたらす利益 (Life Time Value)" },
    { term: "オムニチャネル", desc: "実店舗やネットなどあらゆる販路を連携させること" },
    { term: "O2O", desc: "ネット(Online)から実店舗(Offline)へ送客する施策" },
    { term: "KPI", desc: "重要業績評価指標。目標達成の中間指標" },
    { term: "KGI", desc: "重要目標達成指標。最終的なゴール" },
    { term: "CSF", desc: "重要成功要因。目標達成に不可欠な要素" },
    { term: "BSC", desc: "バランススコアカード。財務・顧客・業務・学習の4視点で評価する" },

    // --- Pháp luật & Sở hữu trí tuệ ---
    { term: "知的財産権", desc: "知的な創作活動の成果を保護する権利の総称" },
    { term: "著作権", desc: "文芸・音楽・プログラムなどの作品を保護する権利 (登録不要)" },
    { term: "特許権", desc: "高度な技術的発明を保護する権利 (要出願)" },
    { term: "実用新案権", desc: "物品の形状や構造の考案を保護する権利 (小発明)" },
    { term: "意匠権", desc: "物品のデザインを保護する権利" },
    { term: "商標権", desc: "商品やサービスのマーク・ロゴを保護する権利" },
    { term: "トレードシークレット", desc: "秘密管理された有用な技術・営業情報 (営業秘密)" },
    { term: "不正競争防止法", desc: "営業秘密の侵害やコピー商品などを規制する法律" },
    { term: "個人情報保護法", desc: "個人情報の取り扱いルールを定めた法律" },
    { term: "マイナンバー法", desc: "社会保障・税番号制度を定めた法律" },
    { term: "不正アクセス禁止法", desc: "ID不正利用やセキュリティホール攻撃を禁止する法律" },
    { term: "刑法", desc: "ウイルス作成罪などを規定している法律" },
    { term: "プロバイダ責任制限法", desc: "ネット上の権利侵害に対するプロバイダの責任範囲を定めた法" },
    { term: "PL法", desc: "製品の欠陥による損害賠償責任を定めた法 (製造物責任法)" },
    { term: "労働者派遣法", desc: "派遣労働者の保護と適切な運営を定めた法" },
    { term: "下請法", desc: "親事業者による下請けいじめを防ぐ法律" },
    { term: "公益通報者保護法", desc: "内部告発者を解雇などの不利益から守る法律" },
    { term: "特定商取引法", desc: "通信販売や訪問販売などのトラブルを防ぐ法律" },
    { term: "電子帳簿保存法", desc: "国税関係書類を電子データで保存することを認める法律" },
    { term: "e-文書法", desc: "法定文書の電子保存を認める法律の総称" },
    { term: "NDA", desc: "秘密保持契約 (Non-Disclosure Agreement)" },
    { term: "ライセンス契約", desc: "特許やソフトの使用を許諾する契約" },
    { term: "ボリュームライセンス", desc: "企業向けに大量のライセンスを割引販売する形態" },
    { term: "サイトライセンス", desc: "特定の場所（学校や企業全体）での使用を認める契約" },
    { term: "シュリンクラップ", desc: "包装を破った時点で契約成立とみなす方式" },
    { term: "クロスライセンス", desc: "互いの特許を使い合えるようにする契約" },
    { term: "パブリックドメイン", desc: "著作権が放棄された、または消滅した状態" },
    { term: "クリエイティブコモンズ", desc: "著作物の利用条件（表示、非営利など）を意思表示するルール" },
    { term: "DRM", desc: "デジタル著作権管理。コピーガードなどの技術" },
    { term: "CPRM", desc: "コピーワンスなどのコピー制御技術" },

    // ================= MANAGEMENT: QUẢN LÝ DỰ ÁN & DỊCH VỤ =================
    // --- Phát triển hệ thống ---
    { term: "要件定義", desc: "システムに必要な機能や性能を明確にする工程" },
    { term: "外部設計", desc: "画面や帳票など、利用者から見える部分を設計する" },
    { term: "内部設計", desc: "プログラムの構造など、利用者から見えない部分を設計する" },
    { term: "単体テスト", desc: "プログラム個々のモジュールをテストする" },
    { term: "結合テスト", desc: "モジュールを組み合わせて動作を確認するテスト" },
    { term: "システムテスト", desc: "システム全体が要件通りか確認するテスト (総合テスト)" },
    { term: "運用テスト", desc: "実際の運用環境で業務に使えるか確認する (受入テスト)" },
    { term: "ブラックボックス", desc: "内部構造を無視し、入力と出力だけに着目するテスト" },
    { term: "ホワイトボックス", desc: "内部構造（ロジック）に着目して網羅するテスト" },
    { term: "リグレッションテスト", desc: "修正により他への影響がないか確認する (回帰テスト)" },
    { term: "ウォーターフォール", desc: "工程を順番に完了させていく開発モデル (後戻りなし)" },
    { term: "アジャイル", desc: "短期間で開発・リリースを繰り返す柔軟な開発モデル" },
    { term: "スクラム", desc: "チームで効率的にアジャイル開発を進めるフレームワーク" },
    { term: "XP", desc: "技術的実践（ペアプログラミング等）を重視するアジャイル手法" },
    { term: "プロトタイピング", desc: "早期に試作品を作り、利用者の確認を得ながら進める手法" },
    { term: "スパイラルモデル", desc: "設計・実装・テストを繰り返してシステムを成長させる" },
    { term: "DevOps", desc: "開発(Dev)と運用(Ops)が連携し、迅速にリリースする手法" },
    { term: "CI/CD", desc: "ビルドやテスト、展開を自動化する手法" },
    { term: "リバースエンジニアリング", desc: "製品を解析して仕様を明らかにすること (逆行工学)" },
    { term: "リファクタリング", desc: "機能を変えずにコードの内部構造を整理・改善すること" },
    { term: "レビュー", desc: "設計書やコードを第三者がチェックすること" },
    { term: "ウォークスルー", desc: "開発者が主体となって行うレビュー" },
    { term: "インスペクション", desc: "モデレータ主導で行う公式なレビュー" },

    // --- Quản lý dự án (PM) ---
    { term: "PMBOK", desc: "プロジェクトマネジメントの知識体系ガイド" },
    { term: "QCD", desc: "Quality(品質), Cost(コスト), Delivery(納期)の3要素" },
    { term: "スコープ", desc: "プロジェクトの実施範囲 (やるべきこと)" },
    { term: "WBS", desc: "作業を階層的に分解した図 (Work Breakdown Structure)" },
    { term: "ガントチャート", desc: "作業工程とスケジュールを横棒グラフで表したもの" },
    { term: "アローダイアグラム", desc: "作業の順序関係を矢印で結んだ図 (PERT図)" },
    { term: "クリティカルパス", desc: "プロジェクト全体の日数を決定する最長の作業経路" },
    { term: "マイルストーン", desc: "プロジェクトの重要な節目" },
    { term: "EVM", desc: "コストとスケジュールで進捗を定量評価する手法" },
    { term: "リスクマネジメント", desc: "リスクの特定・分析・対応を行う活動" },
    { term: "リスク回避", desc: "リスクの原因を除去する (やめる)" },
    { term: "リスク転嫁", desc: "リスクを他者に移す (保険、アウトソーシング)" },
    { term: "リスク低減", desc: "リスクの発生確率や影響を減らす対策をする" },
    { term: "リスク受容", desc: "対策をせず、リスクを受け入れる" },

    // --- Quản lý dịch vụ (ITIL) ---
    { term: "ITIL", desc: "ITサービスマネジメントのベストプラクティス集" },
    { term: "SLA", desc: "サービスの品質保証に関する合意書 (Service Level Agreement)" },
    { term: "SLM", desc: "SLAに基づいて品質を維持・改善する活動" },
    { term: "サービスデスク", desc: "問合せを一元的に受け付ける窓口 (単一接点)" },
    { term: "インシデント管理", desc: "サービスの中断を迅速に復旧させるプロセス" },
    { term: "問題管理", desc: "障害の根本原因を究明し、再発を防止するプロセス" },
    { term: "変更管理", desc: "システム変更に伴うリスクを評価・承認するプロセス" },
    { term: "リリース管理", desc: "変更されたシステムを本番環境に展開するプロセス" },
    { term: "構成管理", desc: "IT資産の情報を正確に把握・管理する (CMDB)" },
    { term: "可用性", desc: "システムがいつでも使える状態にあること (Availability)" },
    { term: "稼働率", desc: "システムが正常に動いている時間の割合" },
    { term: "MTBF", desc: "平均故障間隔。故障しないで動いている平均時間 (信頼性)" },
    { term: "MTTR", desc: "平均修復時間。修理にかかる平均時間 (保守性)" },
    { term: "UPS", desc: "無停電電源装置。停電時に電力を供給する" },
    { term: "フォールトトレラント", desc: "一部が故障してもシステム全体は停止しない設計" },
    { term: "フェールセーフ", desc: "故障時に安全な状態で停止させる設計 (信号機など)" },
    { term: "フェールソフト", desc: "故障時に機能を落としてでも運転を継続する設計" },
    { term: "フールプルーフ", desc: "誤操作してもエラーにならない、事故にならない設計" },
    { term: "ミラーリング", desc: "データを2箇所に書き込み、複製を作る (RAID 1)" },
    { term: "ホットサイト", desc: "即座に業務を再開できる待機用センター" },
    { term: "コールドサイト", desc: "場所と電源のみ確保された待機用センター" },

    // --- Kiểm toán & Kiểm soát ---
    { term: "システム監査", desc: "独立した立場でシステムのリスクやコントロールを評価する" },
    { term: "内部統制", desc: "業務の有効性、法令遵守などを確保する社内の仕組み" },
    { term: "ITガバナンス", desc: "経営陣がIT戦略を策定・統制する仕組み" },
    { term: "職務分掌", desc: "担当者の役割と権限を分離し、不正を防ぐこと" },
    { term: "モニタリング", desc: "内部統制が機能しているか監視すること" },

    // ================= TECHNOLOGY: CÔNG NGHỆ & BẢO MẬT =================
    // --- Cơ sở dữ liệu ---
    { term: "DBMS", desc: "データベース管理システム" },
    { term: "RDB", desc: "関係データベース (データを表形式で管理)" },
    { term: "SQL", desc: "RDBを操作する言語 (SELECT, INSERT等)" },
    { term: "主キー", desc: "行を一意に識別する列 (重複なし・空なし)" },
    { term: "外部キー", desc: "他の表を参照するための列" },
    { term: "正規化", desc: "データの重複を排除し、矛盾を防ぐために表を分けること" },
    { term: "トランザクション", desc: "一連の処理のまとまり" },
    { term: "コミット", desc: "トランザクションの処理結果を確定すること" },
    { term: "ロールバック", desc: "処理失敗時に前の状態に戻すこと" },
    { term: "排他制御", desc: "同時更新による矛盾を防ぐためのロック" },
    { term: "デッドロック", desc: "互いにロック解除を待ち続けて処理が止まる状態" },
    { term: "ACID特性", desc: "トランザクションに必要な4つの特性" },
    { term: "NoSQL", desc: "RDB以外のデータベースの総称 (ビッグデータ向き)" },
    { term: "データウェアハウス", desc: "意思決定のためにデータを時系列に蓄積した倉庫" },
    { term: "データマイニング", desc: "大量のデータから隠れた法則を発掘する技術" },
    { term: "ビッグデータ", desc: "巨大で複雑なデータ群 (Volume, Variety, Velocity)" },

    // --- Mạng (Network) ---
    { term: "LAN", desc: "構内ネットワーク (Local Area Network)" },
    { term: "WAN", desc: "広域ネットワーク (Wide Area Network)" },
    { term: "インターネット", desc: "世界規模のネットワーク" },
    { term: "TCP/IP", desc: "インターネットの標準プロトコル" },
    { term: "OSI参照モデル", desc: "通信機能を7階層に分類したモデル" },
    { term: "IPアドレス", desc: "ネット上の住所 (IPv4, IPv6)" },
    { term: "MACアドレス", desc: "機器固有の製造番号 (物理アドレス)" },
    { term: "ポート番号", desc: "通信するアプリを識別する番号" },
    { term: "DNS", desc: "ドメイン名とIPアドレスを変換する仕組み" },
    { term: "DHCP", desc: "IPアドレスを自動割り当てするプロトコル" },
    { term: "NAT", desc: "プライベートIPとグローバルIPを変換する技術" },
    { term: "プロキシ", desc: "内部から外部へのアクセスを代理するサーバ" },
    { term: "ルータ", desc: "異なるネットワークを接続し、経路制御を行う" },
    { term: "スイッチングハブ", desc: "宛先MACアドレスを見て必要なポートに転送する" },
    { term: "ゲートウェイ", desc: "異なるプロトコルのネットワークを接続する" },
    { term: "HTTP", desc: "Webページ閲覧のプロトコル" },
    { term: "HTTPS", desc: "HTTPを暗号化したもの (SSL/TLS)" },
    { term: "SMTP", desc: "メール送信・転送プロトコル" },
    { term: "POP3", desc: "メール受信プロトコル (サーバからダウンロード)" },
    { term: "IMAP", desc: "メール受信プロトコル (サーバ上で管理)" },
    { term: "FTP", desc: "ファイル転送プロトコル" },
    { term: "NTP", desc: "時刻同期プロトコル" },
    { term: "無線LAN", desc: "Wi-Fi" },
    { term: "SSID", desc: "無線LANのアクセスポイントの識別名" },
    { term: "WPA2", desc: "無線LANの暗号化方式 (WEPより強力)" },
    { term: "テザリング", desc: "スマホを親機としてPCなどをネットにつなぐ" },
    { term: "MVNO", desc: "他社の回線を借りて通信サービスを提供する事業者 (格安SIM)" },
    { term: "5G", desc: "第5世代移動通信 (高速・大容量・低遅延・多接続)" },
    { term: "IoT", desc: "モノのインターネット (Internet of Things)" },
    { term: "エッジコンピューティング", desc: "端末の近くで処理し、遅延や負荷を減らす" },
    { term: "BLE", desc: "省電力なBluetooth (Bluetooth Low Energy)" },
    { term: "LPWA", desc: "省電力・長距離通信の無線技術 (IoT向け)" },

    // --- Bảo mật (Security) ---
    { term: "機密性", desc: "許可された人だけがアクセスできる (Confidentiality)" },
    { term: "完全性", desc: "情報が正確で改ざんされていない (Integrity)" },
    { term: "可用性", desc: "いつでも使える状態にある (Availability)" },
    { term: "真正性", desc: "本物であることを証明できること" },
    { term: "否認防止", desc: "後で「やってない」と言わせないこと" },
    { term: "ソーシャルエンジニアリング", desc: "人の心理を突いて情報を盗む (のぞき見など)" },
    { term: "フィッシング", desc: "偽サイトに誘導して情報を盗む詐欺" },
    { term: "標的型攻撃", desc: "特定の組織を狙ったサイバー攻撃" },
    { term: "水飲み場型攻撃", desc: "よく見るサイトを改ざんして待ち伏せする攻撃" },
    { term: "ランサムウェア", desc: "データを暗号化し、身代金を要求する" },
    { term: "スパイウェア", desc: "情報を勝手に外部へ送信するソフト" },
    { term: "キーロガー", desc: "キーボード入力を記録して盗む" },
    { term: "ボットネット", desc: "乗っ取られたPC群 (攻撃の踏み台)" },
    { term: "ゼロデイ攻撃", desc: "修正パッチが出る前の脆弱性を狙う攻撃" },
    { term: "DoS攻撃", desc: "大量のデータを送りつけてサーバをダウンさせる" },
    { term: "DDoS攻撃", desc: "多数の機器から一斉にDoS攻撃を行う" },
    { term: "SQLインジェクション", desc: "DB操作命令を注入し、データを盗む攻撃" },
    { term: "XSS", desc: "悪意あるスクリプトを埋め込む攻撃 (クロスサイトスクリプティング)" },
    { term: "クロスサイトリクエストフォージェリ", desc: "ログイン中のユーザに意図しない操作をさせる (CSRF)" },
    { term: "セッションハイジャック", desc: "通信の乗っ取り" },
    { term: "ブルートフォース攻撃", desc: "パスワードを総当たりで試す攻撃" },
    { term: "辞書攻撃", desc: "辞書にある単語を使ってパスワードを破る" },
    { term: "パスワードリスト攻撃", desc: "流出したID・パスワードを使って不正ログインする" },
    { term: "ファイアウォール", desc: "パケットフィルタリングで不正アクセスを防ぐ" },
    { term: "WAF", desc: "Webアプリへの攻撃を防ぐファイアウォール" },
    { term: "DMZ", desc: "外部と内部の間の緩衝地帯" },
    { term: "IDS", desc: "不正侵入検知システム" },
    { term: "IPS", desc: "不正侵入防止システム" },
    { term: "VPN", desc: "公衆回線を専用線のように安全に使う技術" },
    { term: "共通鍵暗号", desc: "暗号化と復号に「同じ鍵」を使う (高速)" },
    { term: "公開鍵暗号", desc: "暗号化と復号に「異なる鍵」を使う (安全)" },
    { term: "RSA", desc: "代表的な公開鍵暗号アルゴリズム" },
    { term: "ハイブリッド暗号", desc: "共通鍵と公開鍵を組み合わせた方式 (SSLなどで利用)" },
    { term: "ハッシュ関数", desc: "データを固定長の要約値に変換する (改ざん検知)" },
    { term: "デジタル署名", desc: "送信者の本人確認と改ざん検知を行う (公開鍵暗号の応用)" },
    { term: "CA", desc: "認証局。デジタル証明書を発行する" },
    { term: "PKI", desc: "公開鍵基盤" },
    { term: "SSL/TLS", desc: "通信経路を暗号化するプロトコル" },
    { term: "バイオメトリクス", desc: "生体認証 (指紋、静脈、顔、虹彩など)" },
    { term: "2要素認証", desc: "知識・所有・生体のうち2つを組み合わせる" },
    { term: "シングルサインオン", desc: "1回の認証で複数のシステムを利用できる (SSO)" },
    { term: "キャプチャ", desc: "歪んだ文字入力などで人間かボットか判別する" },
    { term: "検疫ネットワーク", desc: "接続するPCが安全か検査する仕組み" },
    { term: "セキュリティバイデザイン", desc: "設計段階からセキュリティを組み込む考え方" },

    // --- Phần cứng & Phần mềm ---
    { term: "CPU", desc: "演算・制御を行う装置 (プロセッサ)" },
    { term: "クロック周波数", desc: "CPUの処理速度の目安 (Hz)" },
    { term: "マルチコア", desc: "1つのCPUに複数のコア(処理回路)を入れること" },
    { term: "GPU", desc: "画像処理装置。AIや3D描画に強い" },
    { term: "メモリ", desc: "主記憶装置。データを一時的に記憶する (RAM)" },
    { term: "キャッシュメモリ", desc: "CPUとメモリの速度差を埋める高速メモリ" },
    { term: "SSD", desc: "半導体メモリを使った記憶装置 (高速・静音)" },
    { term: "HDD", desc: "磁気ディスクを使った記憶装置 (大容量・安価)" },
    { term: "RAID", desc: "複数のHDDを組み合わせて信頼性や速度を上げる技術" },
    { term: "ストライピング", desc: "データを分散書き込みして高速化 (RAID 0)" },
    { term: "ミラーリング", desc: "同じデータを2重書き込みして信頼性向上 (RAID 1)" },
    { term: "パリティ", desc: "誤り訂正符号 (RAID 5などで利用)" },
    { term: "NAS", desc: "ネットワークに接続して使うHDD (ファイルサーバ)" },
    { term: "入力装置", desc: "キーボード、マウス、スキャナ、マイクなど" },
    { term: "出力装置", desc: "ディスプレイ、プリンタ、スピーカなど" },
    { term: "デバイスドライバ", desc: "周辺機器を制御するソフト" },
    { term: "プラグアンドプレイ", desc: "接続するだけで使えるようになる機能" },
    { term: "OS", desc: "基本ソフトウェア (Windows, macOS, Linux, iOS, Android)" },
    { term: "ミドルウェア", desc: "OSとアプリの中間で働くソフト (DBMSなど)" },
    { term: "API", desc: "ソフトの機能を外部から利用するための窓口" },
    { term: "OSS", desc: "ソースコードが公開されているソフト (Open Source)" },
    { term: "バックアップ", desc: "データの複製を保存すること" },
    { term: "フルバックアップ", desc: "全てのデータを保存する" },
    { term: "差分バックアップ", desc: "初回フルバックアップからの変更分を保存する" },
    { term: "増分バックアップ", desc: "直前のバックアップからの変更分を保存する" },
    { term: "アーカイブ", desc: "データを長期保存すること" },
    { term: "仮想化", desc: "物理的な構成にとらわれず論理的に資源を扱う技術" },
    { term: "クラウド", desc: "ネット経由でサービスを利用する形態" },
    { term: "SaaS", desc: "ソフトをサービスとして利用 (Software as a Service)" },
    { term: "PaaS", desc: "プラットフォームを利用 (Platform as a Service)" },
    { term: "IaaS", desc: "インフラを利用 (Infrastructure as a Service)" },
    { term: "オンプレミス", desc: "自社でサーバなどを保有・運用すること (自社運用)" },
    { term: "ASP", desc: "アプリをネット経由で提供する事業者" },
    { term: "AI", desc: "人工知能 (Artificial Intelligence)" },
    { term: "機械学習", desc: "データからルールを学習する (Machine Learning)" },
    { term: "教師あり学習", desc: "正解データを与えて学習させる" },
    { term: "教師なし学習", desc: "正解データなしで特徴を見つける" },
    { term: "強化学習", desc: "試行錯誤を通じて報酬が最大になる行動を学習する" },
    { term: "ディープラーニング", desc: "多層ニューラルネットワークを用いた学習 (深層学習)" },
    { term: "ニューラルネットワーク", desc: "脳の神経回路を模したモデル" },
    { term: "シンギュラリティ", desc: "AIが人間の知能を超える技術的特異点" },
    { term: "VR", desc: "仮想現実 (Virtual Reality)" },
    { term: "AR", desc: "拡張現実。現実に情報を重ねる (Augmented Reality)" },
    { term: "MR", desc: "複合現実 (Mixed Reality)" },
    { term: "メタバース", desc: "ネット上の3次元仮想空間" },
    { term: "DX", desc: "デジタル技術による変革 (Digital Transformation)" },
    { term: "インダストリー4.0", desc: "ドイツ政府が提唱した第4次産業革命" },
    { term: "ソサエティ5.0", desc: "日本が提唱する未来社会の姿 (超スマート社会)" }
];

const questionsByYear = {
  '2025': {
    strategy: [
      {
        "question": "A社がB社に作業の一部を請負契約で委託している。作業形態a～cのうち、いわゆる偽装請負とみなされる状態だけを全て挙げたものはどれか。<br>a B社の従業員が、A社内において、A社の責任者の指揮命令の下で、請負契約で取り決めた作業を行っている。<br>b B社の従業員が、A社内において、B社の責任者の指揮命令の下で、請負契約で取り決めた作業を行っている。<br>c B社の従業員が、B社内において、A社の責任者の指揮命令の下で、請負契約で取り決めた作業を行っている。",
        "options": ["a", "a, b", "a, c", "b, c"],
        "answer": 2,
        "explanation": "<h3><strong>Bản dịch</strong></h3>" +
                         "<ul><li><strong>Câu hỏi:</strong> Công ty A ủy thác một phần công việc cho công ty B theo hợp đồng khoán việc (<code>請負契約</code>). Trong các hình thức làm việc từ a đến c, đâu là tất cả các trường hợp bị coi là \"khoán việc trá hình\" (<code>偽装請負</code>)?</li>" +
                         "<li><strong>a.</strong> Nhân viên cty B làm việc tại cty A, dưới sự chỉ đạo (<code>指揮命令</code>) của người của cty A.</li>" +
                         "<li><strong>b.</strong> Nhân viên cty B làm việc tại cty A, dưới sự chỉ đạo của người của cty B.</li>" +
                         "<li><strong>c.</strong> Nhân viên cty B làm việc tại cty B, dưới sự chỉ đạo của người của cty A.</li></ul>" +
                         "<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>" +
                         "<p>Bản chất của \"khoán việc trá hình\" (<code>偽装請負</code>) là: Mặc dù hợp đồng là khoán việc (chỉ quan tâm kết quả), nhưng thực tế bên thuê (A) lại <strong>trực tiếp chỉ đạo, ra lệnh (<code>指揮命令</code>)</strong> cho nhân viên của bên nhận khoán (B). Điều này biến nó thành \"phái cử lao động (<code>派遣</code>)\" trá hình.</p>" +
                         "<ul><li><strong>a. ✅ Trá hình.</strong> Người của A (bên thuê) trực tiếp chỉ đạo nhân viên của B (bên nhận khoán). Đây là yếu tố then chốt của khoán việc trá hình.</li>" +
                         "<li><strong>b. ❌ Hợp lệ.</strong> Người của B (bên nhận khoán) tự chỉ đạo nhân viên của mình. Đây là hình thức khoán việc đúng đắn. Nơi làm việc (tại A) không phải là yếu tố quyết định.</li>" +
                         "<li><strong>c. ✅ Trá hình.</strong> Người của A (bên thuê) chỉ đạo nhân viên của B (bên nhận khoán). Mặc dù làm việc tại B, nhưng sự chỉ đạo đến từ A vẫn cấu thành hành vi trá hình.</li></ul>" +
                         "<p>Do đó, cả a và c đều là các trường hợp trá hình.</p>" +
                         "<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>" +
                         "<ul><li><strong>Phân biệt 2 hợp đồng:</strong></li>" +
                         "<ul><li><strong><code>請負契約</code> (Khoán việc):</strong> Bên A thuê B để hoàn thành <strong>sản phẩm/kết quả</strong>. A không có quyền chỉ đạo nhân viên của B.</li>" +
                         "<li><strong><code>派遣契約</code> (Phái cử):</strong> Bên A thuê nhân sự từ bên B và có quyền <strong>chỉ đạo công việc (<code>指揮命令</code>)</strong> trực tiếp.</li></ul>" +
                         "<li><strong>Mẹo ghi nhớ:</strong> Ai chỉ đạo? → Nếu <strong><code>A社の...指揮命令</code> (Sự chỉ đạo của A)</strong> đối với nhân viên B → Đó là <strong>Trá hình</strong>.</li></ul>"
      },
      {
        "question": "従来の情報セキュリティマネジメントシステム規格を基礎に追加で制定されたもので、クラウドサービスに対応した情報セキュリティ管理体制を構築するためのガイドライン規格として、最も適切なものはどれか。",
        "options": ["ISO 14001", "JIS Q 15001", "ISO/IEC 27017", "ISO 9001"],
        "answer": 2,
        "explanation": "<h3><strong>Bản dịch</strong></h3>" +
                         "<ul><li><strong>Câu hỏi:</strong> Tiêu chuẩn hướng dẫn nào được xây dựng bổ sung trên nền tảng ISMS, dùng để xây dựng hệ thống quản lý an ninh thông tin cho <strong>dịch vụ đám mây (<code>クラウドサービス</code>)</strong>?</li>" +
                         "<li><strong>ア.</strong> ISO 14001</li>" +
                         "<li><strong>イ.</strong> JIS Q 15001</li>" +
                         "<li><strong>ウ.</strong> ISO/IEC 27017</li>" +
                         "<li><strong>エ.</strong> ISO 9001</li></ul>" +
                         "<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>" +
                         "<p>Đây là câu hỏi bắt buộc phải nhớ về các bộ tiêu chuẩn ISO. Đề thi <strong>luôn</strong> dùng các tiêu chuẩn này để làm \"bẫy\" lẫn nhau.</p>" +
                         "<ul><li><strong>ア. ISO 14001:</strong> ❌ Sai. Là tiêu chuẩn về Hệ thống quản lý <strong>Môi trường (<code>環境</code> - Kankyō)</strong>.</li>" +
                         "<li><strong>イ. JIS Q 15001:</strong> ❌ Sai. Là tiêu chuẩn của Nhật về bảo vệ <strong>Thông tin cá nhân (<code>個人情報</code>)</strong>. Nó liên quan đến <strong>Privacy Mark (<code>プライバシーマーク</code>)</strong>.</li>" +
                         "<li><strong>ウ. ISO/IEC 27017:</strong> ✅ <strong>Đúng.</strong> Đây là một phần mở rộng của bộ tiêu chuẩn ISMS (ISO 27000 series). Nó cung cấp các hướng dẫn và biện pháp kiểm soát an ninh dành riêng cho môi trường <strong>Đám mây (<code>クラウド</code>)</strong>.</li>" +
                         "<li><strong>エ. ISO 9001:</strong> ❌ Sai. Là tiêu chuẩn về Hệ thống quản lý <strong>Chất lượng (<code>品質</code> - Hinshitsu)</strong>.</li></ul>" +
                         "<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>" +
                         "<ul><li><strong>Mẹo ghi nhớ các bộ số (Rất quan trọng):</strong></li>" +
                         "<ul><li><code>9001</code> → <code>品質</code> (Chất lượng)</li>" +
                         "<li><code>14001</code> → <code>環境</code> (Môi trường)</li>" +
                         "<li><code>15001</code> (JIS) → <code>個人情報</code> (Thông tin cá nhân)</li>" +
                         "<li><strong><code>27001</code> (ISMS)</strong> → <code>情報セキュリティ</code> (An ninh thông tin)</li>" +
                         "<ul><li><strong><code>27017</code></strong> (ISMS + Cloud) → <code>クラウド</code> (Đám mây)</li></ul></ul></ul>"
      },
      {
        "question": "政府は、官民データ活用推進基本法に定められた'官民データ活用推進基本計画'を策定し、官民データの公開や活用の促進に取り組んでいる。次の組織体のうち、官民データを所有しているものだけを全て挙げたものはどれか。<br>a 県庁 b 大学 c 電力事業者 d 独立行政法人",
        "options": ["a, b, c", "a, b, c, d", "a, b, d", "a, c, d"],
        "answer": 1,
        "explanation": "<h3><strong>Bản dịch</strong></h3>" +
                         "<ul><li><strong>Câu hỏi:</strong> Chính phủ đang thúc đẩy việc sử dụng 'dữ liệu công-tư' (<code>官民データ</code>). Trong các tổ chức sau, đâu là tất cả các tổ chức sở hữu 'dữ liệu công-tư'?</li>" +
                         "<li><strong>a.</strong> Văn phòng tỉnh (<code>県庁</code>)</li>" +
                         "<li><strong>b.</strong> Trường đại học (<code>大学</code>)</li>" +
                         "<li><strong>c.</strong> Doanh nghiệp điện lực (<code>電力事業者</code>)</li>" +
                         "<li><strong>d.</strong> Cơ quan hành chính độc lập (<code>独立行政法人</code>)</li></ul>" +
                         "<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>" +
                         "<p>Từ khóa nằm ngay trong tên của luật: <strong><code>官民</code> (Quan - Dân)</strong>, tức là <strong>Công (<code>官</code>)</strong> và <strong>Tư (<code>民</code>)</strong>.</p>" +
                         "<p>Luật Thúc đẩy sử dụng dữ liệu công-tư định nghĩa 'dữ liệu công-tư' là dữ liệu được quản lý bởi cả cơ quan nhà nước, chính quyền địa phương, các cơ quan hành chính độc lập <strong>VÀ các doanh nghiệp tư nhân (<code>事業者</code>)</strong>. Mục đích của luật là thúc đẩy sự hợp tác và chia sẻ dữ liệu giữa cả hai khu vực này.</p>" +
                         "<ul><li><strong>a. 県庁 (Văn phòng tỉnh):</strong> Là tổ chức <strong>Công (官)</strong>.</li>" +
                         "<li><strong>b. 大学 (Đại học):</strong> Có thể là <strong>Công hoặc Tư (官/民)</strong> (ví dụ: đại học quốc gia, đại học tư thục).</li>" +
                         "<li><strong>c. 電力事業者 (Cty điện):</strong> Là doanh nghiệp <strong>Tư (民)</strong>.</li>" +
                         "<li><strong>d. 独立行政法人 (Cơ quan HC):</strong> Là tổ chức <strong>Công (官)</strong>.</li></ul>" +
                         "<p>Do đó, <strong>cả 4 tổ chức trên</strong> (a, b, c, d) đều được coi là sở hữu dữ liệu công-tư.</p>" +
                         "<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>" +
                         "<ul><li><strong>Keyword chính:</strong> <strong><code>官民データ</code> (Dữ liệu CÔNG-TƯ)</strong>.</li>" +
                         "<li><strong>Mẹo ghi nhớ:</strong> Đừng bị bẫy! <code>官</code> (Công) + <code>民</code> (Tư) có nghĩa là bao gồm cả cơ quan nhà nước VÀ doanh nghiệp tư nhân. Đáp án đúng phải là đáp án bao gồm tất cả.</li></ul>"
      },
      {
        "question": "投資の優先度などの経営の戦略を策定するために、経済価値、希少性、模倣困難性及び組織の四つの要素で評価することによって、自社のもつ資源を分析する手法として、最も適切なものはどれか。",
        "options": ["4P", "PPM", "SWOT 分析", "VRIO 分析"],
        "answer": 3,
        "explanation": "<h3><strong>Bản dịch</strong></h3>" +
                         "<ul><li><strong>Câu hỏi:</strong> Phương pháp nào phân tích nguồn lực của công ty dựa trên 4 yếu tố: <strong>Giá trị kinh tế (<code>経済価値</code>), Độ hiếm (<code>希少性</code>), Khó bắt chước (<code>模倣困難性</code>), và Tổ chức (<code>組織</code>)</strong>?</li>" +
                         "<li><strong>ア.</strong> 4P</li>" +
                         "<li><strong>イ.</strong> PPM</li>" +
                         "<li><strong>ウ.</strong> Phân tích SWOT</li>" +
                         "<li><strong>エ.</strong> Phân tích VRIO</li></ul>" +
                         "<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>" +
                         "<p>Đây là câu hỏi kinh điển về các framework phân tích chiến lược. Bạn bắt buộc phải thuộc lòng 4 khái niệm này.</p>" +
                         "<ul><li><strong>ア. 4P (Marketing Mix):</strong> ❌ Sai. Đây là 4 yếu tố trong marketing, bao gồm <strong>P</strong>roduct (Sản phẩm), <strong>P</strong>rice (Giá), <strong>P</strong>lace (Phân phối), <strong>P</strong>romotion (Xúc tiến).</li>" +
                         "<li><strong>イ. PPM (Product Portfolio Management):</strong> ❌ Sai. Đây là ma trận phân loại sản phẩm theo 4 nhóm: <code>花形</code> (Ngôi sao), <code>問題児</code> (Dấu hỏi), <code>金のなる木</code> (Bò sữa), <code>負け犬</code> (Chó).</li>" +
                         "<li><strong>ウ. SWOT 分析 (Phân tích SWOT):</strong> ❌ Sai. Đây là phân tích 4 yếu tố: <strong>S</strong>trengths (Điểm mạnh - <code>強み</code>), <strong>W</strong>eaknesses (Điểm yếu - <code>弱み</code>), <strong>O</strong>pportunities (Cơ hội - <code>機会</code>), <strong>T</strong>hreats (Thách thức - <code>脅威</code>).</li>" +
                         "<li><strong>エ. VRIO 分析 (Phân tích VRIO):</strong> ✅ <strong>Đúng.</strong> Đây là khung phân tích chiến lược, viết tắt của 4 yếu tố được liệt kê trong câu hỏi:<ul>" +
                         "<li><strong>V</strong>alue (Giá trị - <code>経済価値</code>)</li>" +
                         "<li><strong>R</strong>arity (Độ hiếm - <code>希少性</code>)</li>" +
                         "<li><strong>I</strong>mitability (Khả năng bị bắt chước - <code>模倣困難性</code>)</li>" +
                         "<li><strong>O</strong>rganization (Tổ chức - <code>組織</code>)</li></ul></li></ul>" +
                         "<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>" +
                         "<ul><li><strong>Mẹo ghi nhớ:</strong> Hãy học thuộc các từ viết tắt và ý nghĩa của chúng. Đề thi rất hay dùng các phương pháp này (4P, PPM, SWOT, VRIO) để làm bẫy lẫn nhau. Khi thấy danh sách 4 từ khóa <code>経済価値, 希少性, 模倣困難性, 組織</code>, hãy liên kết chúng ngay với 4 chữ cái <strong>V-R-I-O</strong>.</li></ul>"
      },
      {
        "question": "A社ではB商品の仕入れと販売を行っている。ある期のB商品の仕入単価は期首から上昇し続け、期末が最も高くなった。当該期の売上原価を'期首棚卸高＋当期商品仕入高一期末棚卸高'で計算するとき、期末棚卸高の計算に期末の仕入単価を用いると、B商品の期末棚卸高及び売上原価は、期中の仕入単価の平均値を用いる場合に比べてどのようになるか。",
        "options": ["期末棚卸高、売上原価ともに上がる。", "期末棚卸高、売上原価ともに変わらない。", "期末棚卸高は上がり、売上原価は下がる。", "期末棚卸高は下がり、売上原価は上がる。"],
        "answer": 2,
        "explanation": "<h3><strong>Bản dịch</strong></h3>" +
                         "<ul><li><strong>Câu hỏi:</strong> Công ty A kinh doanh sản phẩm B. Trong một kỳ, đơn giá nhập hàng của sản phẩm B liên tục tăng từ đầu kỳ và cao nhất vào cuối kỳ. Khi tính Giá vốn hàng bán (<code>売上原価</code>) bằng công thức 'Tồn kho đầu kỳ + Nhập hàng trong kỳ - Tồn kho cuối kỳ', nếu dùng đơn giá nhập hàng cuối kỳ để tính giá trị tồn kho cuối kỳ, thì giá trị tồn kho cuối kỳ và giá vốn hàng bán sẽ thay đổi như thế nào so với trường hợp dùng đơn giá trung bình trong kỳ?</li>" +
                         "<li><strong>ア.</strong> Tồn kho cuối kỳ và Giá vốn hàng bán đều tăng.</li>" +
                         "<li><strong>イ.</strong> Tồn kho cuối kỳ và Giá vốn hàng bán đều không đổi.</li>" +
                         "<li><strong>ウ.</strong> Tồn kho cuối kỳ tăng, Giá vốn hàng bán giảm.</li>" +
                         "<li><strong>エ.</strong> Tồn kho cuối kỳ giảm, Giá vốn hàng bán tăng.</li></ul>" +
                         "<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>" +
                         "<p>Đây là một bài toán logic kế toán cơ bản.</p>" +
                         "<ol><li><strong>Bối cảnh:</strong> Giá nhập hàng tăng dần trong kỳ. Điều này có nghĩa là: <strong>Giá cuối kỳ > Giá trung bình</strong>.</li>" +
                         "<li><strong>So sánh 2 phương pháp tính giá trị <code>期末棚卸高</code> (Tồn kho cuối kỳ):</strong></li>" +
                         "<ul><li>Phương pháp 1: Dùng giá cuối kỳ (là giá cao nhất).</li>" +
                         "<li>Phương pháp 2: Dùng giá trung bình (thấp hơn giá cuối kỳ).</li></ul>" +
                         "<li><strong>Ảnh hưởng đến <code>期末棚卸高</code> (Tồn kho cuối kỳ):</strong></li>" +
                         "<ul><li>Vì bạn dùng một con số lớn hơn (Giá cuối kỳ) để tính giá trị tồn kho, nên kết quả <code>Tồn kho cuối kỳ</code> sẽ <strong>CAO HƠN (<code>上がる</code>)</strong> so với khi dùng giá trung bình.</li></ul>" +
                         "<li><strong>Ảnh hưởng đến <code>売上原価</code> (Giá vốn hàng bán):</strong></li>" +
                         "<ul><li>Công thức: <code>Giá vốn = (Tồn đầu + Nhập) - Tồn kho cuối kỳ</code></li>" +
                         "<li><code>(Tồn đầu + Nhập)</code> là một hằng số.</li>" +
                         "<li><code>Tồn kho cuối kỳ</code> là một <strong>số trừ</strong>. Khi số trừ này tăng lên (<code>上がる</code>), kết quả của phép tính (<code>Giá vốn</code>) sẽ <strong>GIẢM XUỐNG (<code>下がる</code>)</strong>.</li></ul></li></ol>" +
                         "<p>=> Kết luận: <code>期末棚卸高は上がり、売上原価は下がる</code> (Tồn kho cuối kỳ tăng, Giá vốn hàng bán giảm).</p>" +
                         "<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>" +
                         "<ul><li><strong>Keyword chính:</strong> <strong><code>売上原価</code> (Giá vốn hàng bán), <code>期末棚卸高</code> (Tồn kho cuối kỳ)</strong>.</li>" +
                         "<li><strong>Mẹo ghi nhớ (Rất quan trọng):</strong> Hãy coi công thức Giá vốn như một cái cân: <code>(Tồn đầu + Nhập) = (Giá vốn + Tồn cuối)</code>. Hai bên phải bằng nhau. Nếu <code>Tồn cuối</code> nặng hơn (tăng lên), thì <code>Giá vốn</code> phải nhẹ đi (giảm xuống) để cân bằng.</li></ul>"
      },
      {
        "question": "特定電子メール法は、電子メールによる一方的な広告宣伝メールの送信を規制する法律である。企業担当者が行った次の電子メールの送信事例のうち、特定電子メール法の規制対象となり得るものはどれか。",
        "options": ["広告宣伝メールの受信を拒否する旨の意思表示がないことを確認したのち、公表されている企業のメールアドレス宛てに広告宣伝メールを送信した。", "受信者から拒否通知があった場合には、それ以降の送信を禁止すればよいと考え、広告宣伝メールを送信した。", "内容は事務連絡と料金請求なので問題ないと考え、受信者本人の同意なく、メールを送信した。", "長年の取引関係にある企業担当者に対して、これまで納入してきた製品の新バージョンが完成したので、その製品に関する広告宣伝メールを送信した。"],
        "answer": 1,
        "explanation": "<h3><strong>Bản dịch</strong></h3>" +
                         "<ul><li><strong>Câu hỏi:</strong> <strong>Luật về Email quảng cáo (<code>特定電子メール法</code>)</strong> quy định việc gửi email quảng cáo. Hành vi nào sau đây có thể vi phạm luật này?</li>" +
                         "<li><strong>ア.</strong> Sau khi xác nhận không có thông báo từ chối, đã gửi email quảng cáo đến địa chỉ email doanh nghiệp được công bố công khai.</li>" +
                         "<li><strong>イ.</strong> Nghĩ rằng 'chỉ cần dừng gửi nếu người nhận từ chối là được', nên đã gửi email quảng cáo đi.</li>" +
                         "<li><strong>ウ.</strong> Nghĩ rằng nội dung là liên lạc công việc và thông báo phí nên không sao, đã gửi email mà không có sự đồng ý của người nhận.</li>" +
                         "<li><strong>エ.</strong> Gửi email quảng cáo về phiên bản mới của sản phẩm cho một đối tác đã có quan hệ kinh doanh lâu năm.</li></ul>" +
                         "<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>" +
                         "<p>Luật này quy định cơ chế <strong>Opt-in (オプトイン)</strong>, tức là <strong>phải có sự đồng ý trước</strong> của người nhận mới được gửi email quảng cáo. Gửi trước rồi chờ người ta từ chối (Opt-out) là vi phạm (trừ một số trường hợp ngoại lệ).</p>" +
                         "<ul><li><strong>ア. ❌ Hợp lệ (Ngoại lệ).</strong> Gửi đến email doanh nghiệp được công bố công khai (và không có ghi chú rõ ràng là 'từ chối quảng cáo') là một trong những trường hợp ngoại lệ được phép.</li>" +
                         "<li><strong>イ. ✅ Vi phạm.</strong> Hành động &quot;cứ gửi đi, nếu bị từ chối (<code>拒否通知</code>) thì dừng lại&quot; chính là cơ chế <strong>Opt-out (オプトアウト)</strong>, và điều này bị luật cấm. Phải có sự đồng ý trước khi gửi.</li>" +
                         "<li><strong>ウ. ❌ Hợp lệ.</strong> Email chỉ mang tính chất liên lạc công việc, thông báo phí (<code>事務連絡</code>, <code>料金請求</code>) thì <strong>không phải là email quảng cáo</strong>, do đó không bị luật này điều chỉnh.</li>" +
                         "<li><strong>エ. ❌ Hợp lệ (Ngoại lệ).</strong> Gửi cho đối tác đã có quan hệ kinh doanh (<code>取引関係にある企業</code>) là một trường hợp ngoại lệ khác được phép.</li></ul>" +
                         "<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>" +
                         "<ul><li><strong>Keyword chính:</strong> <strong><code>特定電子メール法</code> (Luật Email quảng cáo)</strong>.</li>" +
                         "<li><strong>Mẹo ghi nhớ:</strong> Luật này yêu cầu <strong>Opt-in (Phải XIN PHÉP trước khi gửi)</strong>. Bất kỳ hành động nào theo kiểu <strong>Opt-out (Gửi trước, BỊ CHỬI thì dừng sau)</strong> đều là vi phạm.</li></ul>"
      },
      {
        "question": "新しい概念やアイディアの実証を目的とした、開発の前段階における検証を表す用語はどれか。",
        "options": ["CRM", "PoC", "RAS", "SLA"],
        "answer": 1,
        "explanation": "<h3><strong>Bản dịch</strong></h3>" +
                         "<ul><li><strong>Câu hỏi:</strong> Thuật ngữ nào dùng để chỉ việc <strong>kiểm chứng (<code>実証</code>)</strong> một <strong>khái niệm hay ý tưởng mới (<code>新しい概念やアイディア</code>)</strong> ở giai đoạn tiền phát triển?</li>" +
                         "<li><strong>ア.</strong> CRM</li>" +
                         "<li><strong>イ.</strong> PoC</li>" +
                         "<li><strong>ウ.</strong> RAS</li>" +
                         "<li><strong>エ.</strong> SLA</li></ul>" +
                         "<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>" +
                         "<p>Đây là câu hỏi về các từ viết tắt cơ bản.</p>" +
                         "<ul><li><strong>ア. CRM (Customer Relationship Management):</strong> ❌ Sai. Là <code>顧客関係管理</code> - Quản lý quan hệ khách hàng.</li>" +
                         "<li><strong>イ. PoC (Proof of Concept):</strong> ✅ <strong>Đúng.</strong> Là <code>概念実証</code> - Dịch sát nghĩa là \"Kiểm chứng khái niệm\". Đây là một dự án thử nghiệm nhỏ, quy mô hẹp nhằm chứng minh tính khả thi của một ý tưởng trước khi quyết định đầu tư nguồn lực lớn để phát triển chính thức.</li>" +
                         "<li><strong>ウ. RAS (Reliability, Availability, Serviceability):</strong> ❌ Sai. Là <code>信頼性・可用性・保守性</code> - Các chỉ số về độ tin cậy, tính sẵn sàng và khả năng bảo trì của hệ thống.</li>" +
                         "<li><strong>エ. SLA (Service Level Agreement):</strong> ❌ Sai. Là <code>サービスレベル合意書</code> - Thỏa thuận về mức độ dịch vụ (ví dụ: thời gian uptime 99.9%).</li></ul>" +
                         "<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>" +
                         "<ul><li><strong>Keyword chính:</strong> <strong><code>概念の実証</code> (Chứng minh/Kiểm chứng khái niệm)</strong>.</li>" +
                         "<li><strong>Mẹo ghi nhớ:</strong> <strong>P</strong>roof <strong>o</strong>f <strong>C</strong>oncept → <strong>PoC</strong>.</li></ul>"
      },
      {
        "question": "AI の機械学習で利用するデータの取扱いに関する記述のうち，バイアスの低減やデータの品質を確保するために考えられる対策として，適切なものだけを全て挙げたものはどれか。<br>ア 学習の目的に適したデータであることを確認する。<br>イ データの入手元・作成来歴を確認する。<br>ウ データへのアノテーションの付与は学習目的に合わせて実施する。<br>エ 人間の目でも同定が困難と考えられる画像認識用のデータは除外する。",
        "options": ["a, b", "a, b, c, d", "a, d", "b, c, d"],
        "answer": 1,
        "explanation": "<h3><strong>Bản dịch</strong></h3>" +
                         "<ul><li><strong>Câu hỏi:</strong> Đâu là tất cả các biện pháp phù hợp để giảm thiểu thiên vị (bias) và đảm bảo chất lượng dữ liệu khi huấn luyện AI?</li>" +
                         "<li><strong>ア.</strong> Xác nhận dữ liệu phù hợp với mục đích học.</li>" +
                         "<li><strong>イ.</strong> Xác nhận nguồn gốc và lịch sử tạo ra dữ liệu.</li>" +
                         "<li><strong>ウ.</strong> Thực hiện gán nhãn (annotation) dữ liệu phù hợp với mục đích học.</li>" +
                         "<li><strong>エ.</strong> Loại bỏ các dữ liệu nhận dạng hình ảnh mà ngay cả con người cũng khó xác định.</li></ul>" +
                         "<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>" +
                         "<p>Tất cả các biện pháp được liệt kê đều là những thực hành tốt (best practices) và cần thiết trong quá trình chuẩn bị dữ liệu (Data Preprocessing) cho Machine Learning:</p>" +
                         "<ul><li><strong>ア. ✅ Đúng.</strong> Dữ liệu phải phù hợp với mục đích học (ví dụ: không thể dùng ảnh chó mèo để dạy AI nhận diện xe cộ). Điều này giúp giảm thiên vị do chọn sai tập dữ liệu.</li>" +
                         "<li><strong>イ. ✅ Đúng.</strong> Nguồn gốc dữ liệu rõ ràng (Data Provenance) giúp đảm bảo tính tin cậy, tránh dữ liệu bị sai lệch hoặc vi phạm pháp lý.</li>" +
                         "<li><strong>ウ. ✅ Đúng.</strong> Gán nhãn (Annotation) phải chính xác và phù hợp với bài toán. Gán nhãn sai (ví dụ: nhầm ảnh chó thành mèo) sẽ khiến AI học sai và bị thiên vị.</li>" +
                         "<li><strong>エ. ✅ Đúng.</strong> Dữ liệu nhiễu (noise), chất lượng quá kém (ngay cả con người cũng khó nhận dạng) được coi là 'dữ liệu rác'. Nguyên tắc là <strong>\"Garbage In, Garbage Out\" (Rác vào, Rác ra)</strong>. Loại bỏ chúng sẽ giúp mô hình học tốt hơn và chính xác hơn.</li></ul>" +
                         "<p>Vì cả 4 đều đúng, đáp án là a, b, c, d.</p>" +
                         "<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>" +
                         "<ul><li><strong>Keyword chính:</strong> <strong><code>バイアスの低減</code> (Giảm thiên vị), <code>データの品質</code> (Chất lượng dữ liệu)</strong>.</li>" +
                         "<li><strong>Mẹo ghi nhớ:</strong> Để AI học tốt, dữ liệu đầu vào phải \"sạch sẽ\" và \"chất lượng\". Điều này bao gồm: <strong>1. Phù hợp mục đích, 2. Rõ nguồn gốc, 3. Gán nhãn đúng, 4. Chất lượng cao (không rác)</strong>.</li></ul>"
      },
      {
        "question": "ハッカソンに関する記述として，最も適切なものはどれか。",
        "options": ["定められたルールの下，ある主題について，肯定派と否定派といった異なる立場に分かれて議論する。", "情報セキュリティ分野で活躍したいという意志をもった若者が，合宿形式で情報セキュリティに関する実践的な知識を学ぶ。", "プログラマーやデザイナーなどから成る複数の参加チームが，与えられたテーマに関するプロトタイプを短期間で作成し，その成果を発表して競い合う。", "問題解決や利用者獲得などゲーム的な要素のない分野に，デジタル技術を活用したゲームの要素を取り入れることによって，利用者の参加を動機づける。"],
        "answer": 2,
        "explanation": "<h3><strong>Bản dịch</strong></h3>" +
                         "<ul><li><strong>Câu hỏi:</strong> Mô tả nào phù hợp nhất với <strong>Hackathon</strong>?</li>" +
                         "<li><strong>ア.</strong> Tranh luận về một chủ đề theo hai phe đối lập (khẳng định và phủ định) dưới các quy tắc nhất định.</li>" +
                         "<li><strong>イ.</strong> Những người trẻ muốn hoạt động trong lĩnh vực an ninh thông tin học hỏi kiến thức thực tế về an ninh thông tin dưới hình thức trại tập trung.</li>" +
                         "<li><strong>ウ.</strong> Nhiều đội tham gia bao gồm lập trình viên, nhà thiết kế v.v... cùng nhau <strong>tạo ra một sản phẩm mẫu (<code>プロトタイプ</code>)</strong> về một chủ đề cho trước trong một <strong>khoảng thời gian ngắn (<code>短期間</code>)</strong> và <strong>thi đấu (<code>競い合う</code>)</strong> với nhau.</li>" +
                         "<li><strong>エ.</strong> Áp dụng các yếu tố của game vào các lĩnh vực không phải game để thúc đẩy sự tham gia của người dùng.</li></ul>" +
                         "<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>" +
                         "<p>Câu hỏi này kiểm tra sự phân biệt của bạn giữa các thuật ngữ sự kiện/phương pháp luận hiện đại.</p>" +
                         "<ul><li><strong>ア. ❌ Sai.</strong> Tranh luận theo hai phe đối lập (<code>肯定派と否定派</code>) là một cuộc <strong>Tranh biện (<code>ディベート</code> - Debate)</strong>.</li>" +
                         "<li><strong>イ. ❌ Sai.</strong> Trại huấn luyện tập trung (<code>合宿形式</code>) về một lĩnh vực cụ thể là <strong>Trại huấn luyện (<code>ブートキャンプ</code> - Bootcamp)</strong>, ví dụ như Security Camp.</li>" +
                         "<li><strong>ウ. ✅ Đúng.</strong> <strong>Hackathon (<code>ハッカソン</code>)</strong> là một sự kiện nơi các đội (lập trình viên, nhà thiết kế...) cùng nhau sáng tạo để tạo ra một sản phẩm mẫu (prototype) trong một thời gian giới hạn (thường là 24-48 giờ) và thi đấu với nhau.</li>" +
                         "<li><strong>エ. ❌ Sai.</strong> Áp dụng các yếu tố game (<code>ゲームの要素</code>) vào lĩnh vực khác là <strong>Game hóa (<code>ゲーミフィケーション</code> - Gamification)</strong>.</li></ul>" +
                         "<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>" +
                         "<ul><li><strong>Keyword chính:</strong> <strong><code>ハッカソン</code> (Hackathon)</strong>.</li>" +
                         "<li><strong>Mẹo ghi nhớ:</strong> <strong>Hack</strong> + Mara<strong>thon</strong> = Một cuộc đua marathon về lập trình/sáng tạo. Phải có 3 yếu tố: <strong>Tạo sản phẩm + Thời gian ngắn + Thi đấu</strong>.</li></ul>"
      },
      {
        "question": "生成AIにおいて，もっともらしいが事実とは異なる内容が出力されることを表す用語として，最も適切なものはどれか。",
        "options": ["エコーチェンバー", "シンギュラリティ", "ディープフェイク", "ハルシネーション"],
        "answer": 3,
        "explanation": "<h3><strong>Bản dịch</strong></h3>" +
                         "<ul><li><strong>Câu hỏi:</strong> Trong AI tạo sinh, hiện tượng AI đưa ra kết quả nghe có vẻ hợp lý nhưng lại <strong>sai sự thật (<code>事実とは異なる</code>)</strong> được gọi là gì?</li>" +
                         "<li><strong>ア.</strong> Echo Chamber (Buồng vang)</li>" +
                         "<li><strong>イ.</strong> Singularity (Điểm kỳ dị)</li>" +
                         "<li><strong>ウ.</strong> Deepfake</li>" +
                         "<li><strong>エ.</strong> Hallucination (Ảo giác)</li></ul>" +
                         "<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>" +
                         "<p>Đây là một câu hỏi về thuật ngữ rất thời sự liên quan đến AI.</p>" +
                         "<ul><li><strong>ア. エコーチェンバー (Echo Chamber):</strong> ❌ Sai. Là \"Buồng vang\" - Hiện tượng xã hội học (không phải kỹ thuật AI) nơi các ý kiến, niềm tin được củng cố trong một môi trường khép kín (như mạng xã hội), khiến người ta nghĩ rằng đó là quan điểm chung của số đông.</li>" +
                         "<li><strong>イ. シンギュラリティ (Singularity):</strong> ❌ Sai. Là \"Điểm kỳ dị\" - Thời điểm giả định trong tương lai khi trí tuệ nhân tạo vượt qua trí tuệ con người.</li>" +
                         "<li><strong>ウ. ディープフェイク (Deepfake):</strong> ❌ Sai. Là công nghệ sử dụng AI để tạo ra các video, hình ảnh giả mạo một người nào đó (ví dụ: ghép mặt) một cách có chủ đích.</li>" +
                         "<li><strong>エ. ハルシネーション (Hallucination):</strong> ✅ <strong>Đúng.</strong> Là \"Ảo giác\" - Thuật ngữ dùng để chỉ việc các mô hình ngôn ngữ lớn (LLM) \"bịa\" ra thông tin. Tức là chúng tạo ra các câu trả lời sai (ví dụ: bịa ra một sự kiện lịch sử không có thật) nhưng lại trình bày một cách rất tự tin và thuyết phục, nghe có vẻ hợp lý.</li></ul>" +
                         "<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>" +
                         "<ul><li><strong>Keyword chính:</strong> <strong><code>事実とは異なる</code> (Sai sự thật), <code>もっともらしい</code> (Nghe có vẻ hợp lý)</strong>.</li>" +
                         "<li><strong>Mẹo ghi nhớ:</strong> Khi AI \"nói nhảm\", \"bịa chuyện\", hoặc \"nhìn thấy những thứ không có thật\" → Đó là <strong>Ảo giác (Hallucination)</strong>.</li></ul>"
      },
      {
        "question": "スマートファクトリーにおいても使用されている，FMS（Flexible Manufacturing System）に関する記述として，最も適切なものはどれか。",
        "options": ["技術革新を効果的に自社の経営に取り入れることによって，企業の成長を図る。", "生産工程の各段階で，原材料から完成製品までの資材の流れを適時・適量に管理する。", "生産時に必要となる部品などを必要な分だけ供給することによって，生産リードタイムを短縮する。", "複数の工作機械や産業用ロボットなどを有機的に結合し，生産プロセス全体を統括的に制御・管理する。"],
        "answer": 3,
        "explanation": "<h3><strong>Bản dịch</strong></h3>" +
                         "<ul><li><strong>Câu hỏi:</strong> Mô tả nào phù hợp nhất với <strong>FMS (Flexible Manufacturing System - Hệ thống sản xuất linh hoạt)</strong>?</li>" +
                         "<li><strong>ア.</strong> Đưa đổi mới công nghệ vào kinh doanh để thúc đẩy tăng trưởng.</li>" +
                         "<li><strong>イ.</strong> Quản lý dòng chảy nguyên vật liệu từ đầu đến cuối một cách kịp thời và đúng số lượng.</li>" +
                         "<li><strong>ウ.</strong> Cung cấp linh kiện đúng lúc, đúng số lượng cần thiết để rút ngắn thời gian sản xuất.</li>" +
                         "<li><strong>エ.</strong> <strong>Kết hợp một cách hữu cơ (<code>有機的に結合</code>)</strong> nhiều loại máy móc (máy công cụ, robot...) và <strong>kiểm soát, quản lý (<code>制御・管理</code>)</strong> toàn bộ quy trình một cách tổng thể.</li></ul>" +
                         "<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>" +
                         "<p>Câu hỏi này kiểm tra kiến thức về các thuật ngữ quản lý sản xuất.</p>" +
                         "<ul><li><strong>ア. ❌ Sai.</strong> Đưa đổi mới công nghệ (<code>技術革新</code>) vào kinh doanh là <strong>MOT (Management of Technology - <code>技術経営</code>)</strong>.</li>" +
                         "<li><strong>イ. ❌ Sai.</strong> Quản lý dòng chảy nguyên vật liệu (<code>資材の流れ</code>) trong quy trình sản xuất là <strong>MRP (Material Requirements Planning - <code>資材所要量計画</code>)</strong>.</li>" +
                         "<li><strong>ウ. ❌ Sai.</strong> Cung cấp linh kiện đúng lúc, đúng số lượng cần thiết (<code>必要な分だけ供給</code>) là <strong>JIT (Just-In-Time - <code>ジャストインタイム</code>)</strong>, một phần của hệ thống sản xuất Toyota.</li>" +
                         "<li><strong>エ. ✅ Đúng.</strong> <strong>FMS (Hệ thống sản xuất linh hoạt)</strong> là một hệ thống sản xuất tự động hóa cao, có khả năng <strong>kết hợp</strong> nhiều loại máy móc và <strong>kiểm soát</strong> chúng một cách <strong>linh hoạt</strong> (Flexible) để có thể sản xuất nhiều loại sản phẩm khác nhau trên cùng một dây chuyền mà không cần dừng lại để thiết lập lại từ đầu.</li></ul>" +
                         "<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>" +
                         "<ul><li><strong>Keyword chính:</strong> <strong><code>FMS (Flexible...)</code>, <code>複数の...結合</code> (Kết hợp nhiều thứ), <code>制御・管理</code> (Kiểm soát/Quản lý)</strong>.</li>" +
                         "<li><strong>Mẹo ghi nhớ:</strong> <strong>F</strong>lexible = <strong>Linh hoạt</strong>. Đây là một hệ thống &quot;tích hợp&quot; (kết hợp nhiều máy) và &quot;linh hoạt&quot;, có thể chuyển đổi giữa các sản phẩm khác nhau một cách dễ dàng.</li></ul>"
      },
      {
        "question": "商標法におけるサービスマークを説明したものはどれか。",
        "options": ["企業が，企業そのものを他社と区別するために表示する商標である。", "製造業者，販売業者が提供する商品を，他社の商品と区別するために表示する商標である。", "大規模小売業者が開発したプライベートブランドの商品を，他社の商品と区別するために表示する商標である。", "輸送業者，金融業者などが提供する役務を，他社の役務と区別するために表示する商標である。"],
        "answer": 3,
        "explanation": "<h3><strong>Bản dịch</strong></h3>" +
                         "<ul><li><strong>Câu hỏi:</strong> Mô tả nào giải thích về <strong>Nhãn hiệu dịch vụ (<code>サービスマーク</code> - Service Mark)</strong> trong Luật nhãn hiệu?</li>" +
                         "<li><strong>ア.</strong> Là nhãn hiệu mà doanh nghiệp hiển thị để phân biệt chính doanh nghiệp đó với các công ty khác.</li>" +
                         "<li><strong>イ.</strong> Là nhãn hiệu mà nhà sản xuất/nhà bán lẻ hiển thị để phân biệt <strong>sản phẩm (<code>商品</code>)</strong> của mình với sản phẩm của công ty khác.</li>" +
                         "<li><strong>ウ.</strong> Là nhãn hiệu mà nhà bán lẻ lớn hiển thị để phân biệt <strong>sản phẩm (<code>商品</code>)</strong> nhãn hiệu riêng (private brand) của mình với sản phẩm của công ty khác.</li>" +
                         "<li><strong>エ.</strong> Là nhãn hiệu mà các nhà cung cấp như vận tải, tài chính hiển thị để phân biệt <strong>dịch vụ (<code>役務</code>)</strong> của mình với dịch vụ của công ty khác.</li></ul>" +
                         "<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>" +
                         "<p>Luật nhãn hiệu (<code>商標法</code>) bảo vệ các dấu hiệu dùng trong kinh doanh. Chúng được chia thành hai loại chính:</p>" +
                         "<ul><li><strong>Trademark (<code>商標</code>):</strong> Dùng cho <strong>HÀNG HÓA, SẢN PHẨM (<code>商品</code>)</strong>. Ví dụ: logo Coca-Cola trên chai nước ngọt.</li>" +
                         "<li><strong>Service Mark (<code>サービスマーク</code>):</strong> Dùng cho <strong>DỊCH VỤ (<code>役務</code> - ekimu)</strong>. Ví dụ: logo của ngân hàng Vietcombank, logo của hãng vận tải Vietnam Airlines.</li></ul>" +
                         "<p>Phân tích các lựa chọn:</p>" +
                         "<ul><li><strong>ア, イ, ウ. ❌ Sai.</strong> Cả ba lựa chọn này đều đề cập đến việc phân biệt &quot;công ty&quot; hoặc &quot;sản phẩm&quot; (<code>商品</code>). Chúng đều thuộc về Trademark (Nhãn hiệu hàng hóa) chứ không phải Service Mark (Nhãn hiệu dịch vụ).</li>" +
                         "<li><strong>エ. ✅ Đúng.</strong> Lựa chọn này nói rõ nhãn hiệu được dùng để phân biệt các <strong>dịch vụ (<code>役務</code>)</strong> được cung cấp bởi các nhà cung cấp như vận tải, tài chính... Đây chính là định nghĩa của Service Mark.</li></ul>" +
                         "<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>" +
                         "<ul><li><strong>Keyword chính:</strong> <strong><code>サービスマーク</code> (Service Mark)</strong>.</li>" +
                         "<li><strong>Mẹo ghi nhớ:</strong> <strong>Service</strong> Mark (Nhãn hiệu <strong>Dịch vụ</strong>) → Dùng cho <strong>Dịch vụ (<code>役務</code>)</strong>. Đơn giản vậy thôi!</li></ul>"
      },
      {
        "question": "新しいITソリューションの活用の是非を判断するために，そのITソリューションの提供者に，活用事例や技術情報などの提供を依頼する文書として，最も適切なものはどれか。",
        "options": ["EDI", "KPI", "RFI", "RFP"],
        "answer": 2,
        "explanation": "<h3><strong>Bản dịch</strong></h3>" +
                         "<ul><li><strong>Câu hỏi:</strong> Để quyết định có nên sử dụng một giải pháp CNTT mới hay không, văn bản nào được dùng để yêu cầu nhà cung cấp cung cấp các thông tin như <strong>case study (<code>活用事例</code>)</strong> và <strong>thông tin kỹ thuật (<code>技術情報</code>)</strong>?</li>" +
                         "<li><strong>ア.</strong> EDI</li>" +
                         "<li><strong>イ.</strong> KPI</li>" +
                         "<li><strong>ウ.</strong> RFI</li>" +
                         "<li><strong>エ.</strong> RFP</li></ul>" +
                         "<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>" +
                         "<p>Đây là câu hỏi về các thuật ngữ trong quy trình mua sắm/đấu thầu.</p>" +
                         "<ul><li><strong>ア. EDI (Electronic Data Interchange):</strong> ❌ Sai. Là <code>電子データ交換</code> - Trao đổi dữ liệu điện tử (ví dụ: đơn hàng, hóa đơn) giữa các công ty.</li>" +
                         "<li><strong>イ. KPI (Key Performance Indicator):</strong> ❌ Sai. Là <code>重要業績評価指標</code> - Chỉ số đo lường hiệu suất công việc.</li>" +
                         "<li><strong>ウ. RFI (Request for Information):</strong> ✅ <strong>Đúng.</strong> Là <code>情報提供依頼書</code> (Yêu cầu cung cấp thông tin). Đây là tài liệu gửi đi ở giai đoạn rất sớm, nhằm mục đích <strong>thu thập thông tin chung</strong> (<code>情報提供</code>) về sản phẩm, năng lực của nhà cung cấp, và các case study (<code>活用事例</code>) để phục vụ cho việc ra quyết định sơ bộ.</li>" +
                         "<li><strong>エ. RFP (Request for Proposal):</strong> ❌ Sai. Là <code>提案依頼書</code> (Yêu cầu đề xuất giải pháp). Đây là tài liệu được gửi ở giai đoạn sau RFI, khi đã có yêu cầu cụ thể và muốn nhận được một bản <strong>đề xuất giải pháp chi tiết (<code>提案</code>)</strong> kèm báo giá.</li></ul>" +
                         "<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>" +
                         "<ul><li><strong>Keyword chính:</strong> <strong><code>情報などの提供を依頼する</code> (Yêu cầu cung cấp THÔNG TIN)</strong>.</li>" +
                         "<li><strong>Mẹo ghi nhớ (Rất quan trọng):</strong></li>" +
                         "<ul><li>Giai đoạn 1 (Tìm hiểu): Chỉ cần <strong>Thông tin</strong> → <strong>RFI</strong> (Request for <strong>I</strong>nformation).</li>" +
                         "<li>Giai đoạn 2 (Ra quyết định): Cần <strong>Giải pháp/Đề xuất</strong> → <strong>RFP</strong> (Request for <strong>P</strong>roposal).</li></ul>" +
                         "<li>Câu hỏi đang ở giai đoạn tìm hiểu (thu thập <code>技術情報</code>), nên đáp án là RFI.</li></ul>"
      },
      {
        "question": "事業，経営情報に知財情報を組み込んで分析し，現状の俯瞰や将来展望などの分析結果を事業責任者，経営者と共有し，事業戦略又は経営戦略に反映させることを表す用語として，最も適切なものはどれか。",
        "options": ["CVC (Corporate Venture Capital)", "IPランドスケープ (Intellectual Property Landscape)", "MOT (Management of Technology)", "SWOT分析"],
        "answer": 1,
        "explanation": "<h3><strong>Bản dịch</strong></h3>" +
                         "<ul><li><strong>Câu hỏi:</strong> Thuật ngữ nào chỉ việc phân tích kết hợp <strong>thông tin sở hữu trí tuệ (<code>知財情報</code>)</strong> với thông tin kinh doanh, chia sẻ kết quả (cái nhìn tổng quan, triển vọng tương lai) với ban lãnh đạo để phản ánh vào chiến lược?</li>" +
                         "<li><strong>ア.</strong> CVC (Đầu tư mạo hiểm doanh nghiệp)</li>" +
                         "<li><strong>イ.</strong> IP Landscape (Bản đồ Sở hữu trí tuệ)</li>" +
                         "<li><strong>ウ.</strong> MOT (Quản trị công nghệ)</li>" +
                         "<li><strong>エ.</strong> Phân tích SWOT</li></ul>" +
                         "<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>" +
                         "<ul><li><strong>ア. CVC (Corporate Venture Capital):</strong> ❌ Sai. Là quỹ đầu tư mạo hiểm của một tập đoàn (thay vì một công ty tài chính).</li>" +
                         "<li><strong>イ. IPランドスケープ (Intellectual Property Landscape):</strong> ✅ <strong>Đúng.</strong> Đây là một hoạt động phân tích chiến lược, trong đó \"bản đồ\" (Landscape) về tình hình <strong>Sở hữu trí tuệ (IP - <code>知財</code>)</strong> của ngành, của đối thủ và của chính công ty được vẽ ra để cung cấp cái nhìn tổng quan (<code>俯瞰</code>), từ đó đưa ra các quyết định kinh doanh.</li>" +
                         "<li><strong>ウ. MOT (Management of Technology):</strong> ❌ Sai. Là <code>技術経営</code> - Quản trị công nghệ, là việc quản lý các hoạt động công nghệ để hỗ trợ chiến lược kinh doanh.</li>" +
                         "<li><strong>エ. SWOT分析:</strong> ❌ Sai. Là Phân tích Điểm mạnh, Điểm yếu, Cơ hội, Thách thức.</li></ul>" +
                         "<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>" +
                         "<ul><li><strong>Keyword chính:</strong> <strong><code>知財情報</code> (Thông tin sở hữu trí tuệ - IP)</strong>.</li>" +
                         "<li><strong>Mẹo ghi nhớ:</strong> <strong>IP</strong> + <strong>Landscape</strong> (bản đồ/toàn cảnh) = \"Bản đồ sở hữu trí tuệ\".</li></ul>"
      },
      {
        "question": "事業運営における意思決定の迅速化，組織の独立採算の推進を目的とし，一つの企業の中に事業領域ごとに独立した組織を設置する組織形態はどれか。",
        "options": ["カンパニー制組織", "機能別組織", "プロジェクト組織", "マトリックス組織"],
        "answer": 0,
        "explanation": "<h3><strong>Bản dịch</strong></h3>" +
                         "<ul><li><strong>Câu hỏi:</strong> Hình thái tổ chức nào, với mục đích ra quyết định nhanh và tự chủ tài chính (<code>独立採算</code>), thiết lập các đơn vị tổ chức độc lập (<code>独立した組織</code>) theo từng lĩnh vực kinh doanh bên trong một công ty?</li>" +
                         "<li><strong>ア.</strong> Tổ chức theo chế độ công ty (Company System)</li>" +
                         "<li><strong>イ.</strong> Tổ chức theo chức năng (Functional Organization)</li>" +
                         "<li><strong>ウ.</strong> Tổ chức dự án (Project Organization)</li>" +
                         "<li><strong>エ.</strong> Tổ chức ma trận (Matrix Organization)</li></ul>" +
                         "<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>" +
                         "<p>Câu hỏi này kiểm tra các mô hình cơ cấu tổ chức doanh nghiệp.</p>" +
                         "<ul><li><strong>ア. カンパニー制組織 (Tổ chức theo chế độ công ty):</strong> ✅ <strong>Đúng.</strong> Là mô hình trong đó một tập đoàn lớn chia các mảng kinh doanh của mình thành các \"công ty\" (カンパニー) nội bộ. Mỗi \"công ty\" này hoạt động gần như một thực thể độc lập, có ban lãnh đạo riêng và tự chịu trách nhiệm về lời lỗ (<code>独立採算</code>), giúp tăng tính linh hoạt và tốc độ ra quyết định.</li>" +
                         "<li><strong>イ. 機能別組織 (Tổ chức theo chức năng):</strong> ❌ Sai. Đây là mô hình truyền thống, chia công ty theo các phòng ban chức năng như Nhân sự, Kế toán, Kinh doanh, Kỹ thuật...</li>" +
                         "<li><strong>ウ. プロジェクト組織 (Tổ chức dự án):</strong> ❌ Sai. Thành lập một đội tạm thời từ nhiều phòng ban để thực hiện một dự án cụ thể, giải tán khi dự án kết thúc.</li>" +
                         "<li><strong>エ. マトリックス組織 (Tổ chức ma trận):</strong> ❌ Sai. Kết hợp giữa tổ chức theo chức năng và tổ chức theo dự án/sản phẩm (một nhân viên báo cáo cho hai quản lý: quản lý chức năng và quản lý dự án).</li></ul>" +
                         "<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>" +
                         "<ul><li><strong>Keyword chính:</strong> <strong><code>独立した組織</code> (Tổ chức độc lập), <code>独立採算</code> (Tự chủ tài chính), <code>カンパニー</code> (Company)</strong>.</li>" +
                         "<li><strong>Mẹo ghi nhớ:</strong> Chia một công ty lớn thành nhiều \"công ty\" (company) nhỏ độc lập bên trong.</li></ul>"
      },
      {
        "question": "他人の電子メールの利用者IDとパスワードの取扱いに関する記述のうち、不正アクセス禁止法で規制されている行為だけを全て挙げたものはどれか。<br>a 正当な理由なく本人に無断で第三者に提供する<br>b 他人の電子メールの利用者IDとパスワードを無効にするマルウェアを作成する<br>c 本人に無断で使用して、メールサーバ上の電子メールを閲覧する",
        "options": ["a, b, c", "a, c", "b, c", "c"],
        "answer": 1,
        "explanation": "<h3><strong>Bản dịch</strong></h3>" +
                         "<ul><li><strong>Câu hỏi:</strong> Hành vi nào liên quan đến ID/mật khẩu email của người khác bị cấm bởi <strong>Luật cấm truy cập trái phép (<code>不正アクセス禁止法</code>)</strong>?</li>" +
                         "<li><strong>a.</strong> Cung cấp (<code>提供する</code>) ID/mật khẩu của người khác cho bên thứ ba mà không có lý do chính đáng và không được phép.</li>" +
                         "<li><strong>b.</strong> Tạo ra (<code>作成する</code>) mã độc (malware) làm vô hiệu hóa ID/mật khẩu của người khác.</li>" +
                         "<li><strong>c.</strong> Sử dụng (<code>使用して</code>) ID/mật khẩu của người khác để xem trộm email mà không được phép.</li></ul>" +
                         "<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>" +
                         "<p>Luật cấm truy cập trái phép (<code>不正アクセス禁止法</code>) cấm 3 hành vi chính:</p>" +
                         "<ol><li>Bản thân hành vi <strong>truy cập trái phép</strong>.</li>" +
                         "<li>Hành vi <strong>tiếp tay</strong> cho truy cập trái phép (ví dụ: cung cấp mật khẩu).</li>" +
                         "<li>Hành vi <strong>lưu trữ</strong> trái phép mật khẩu của người khác (với mục đích xấu).</li></ol>" +
                         "<ul><li><strong>a. ✅ Bị cấm.</strong> Đây là hành vi \"tiếp tay\" (<code>不正アクセス助長行為</code>), bị cấm rõ ràng trong điều 5 của luật.</li>" +
                         "<li><strong>b. ❌ Không thuộc phạm vi.</strong> Việc <strong>tạo</strong> mã độc (<code>マルウェアを作成</code>) là hành vi bị cấm, nhưng nó bị điều chỉnh bởi các luật khác (như Luật hình sự - <code>ウイルス作成罪</code>), không phải là hành vi bị cấm trực tiếp bởi <code>不正アクセス禁止法</code>.</li>" +
                         "<li><strong>c. ✅ Bị cấm.</strong> Đây chính là hành vi \"truy cập trái phép\" (<code>不正アクセス</code>) cốt lõi (điều 3) mà bộ luật này nhắm tới.</li></ul>" +
                         "<p>Vậy, các hành vi bị cấm là a và c.</p>" +
                         "<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>" +
                         "<ul><li><strong>Keyword chính:</strong> <strong><code>不正アクセス禁止法</code> (Luật cấm truy cập trái phép)</strong>.</li>" +
                         "<li><strong>Mẹo ghi nhớ:</strong> Luật này cấm hai hành vi chính: <strong>1. Tự mình hack (c)</strong> và <strong>2. Giúp người khác hack (a)</strong>. (Việc 'tạo công cụ' (b) là một tội khác).</li></ul>"
      },
      {
        "question": "プロセスマイニングに関する記述として、最も適切なものはどれか。",
        "options": ["一連の業務で実際に遂行したシステムの操作ログなどを収集し、現行の業務プロセスの可視化、分析、モニタリングによって業務の課題を特定して改善を図る手法やツールである。", "業務プロセスをそれまでの習慣などにとらわれず、抜本的に再構築して業務効率の改善を図る手法である。", "コンタクトセンターへの問合せ内容やSNSの投稿内容の分析などの業務プロセスで用いられる、膨大な文章データから必要な情報を抽出して分析する手法である。", "大量の計算処理で正しい値を算出する一連のプロセスを通じて、暗号資産を取得する手段である。"],
        "answer": 0,
        "explanation": "<h3><strong>Bản dịch</strong></h3>" +
                         "<ul><li><strong>Câu hỏi:</strong> Mô tả nào phù hợp nhất với <strong>Khai phá quy trình (プロセスマイニング - Process Mining)</strong>?</li>" +
                         "<li><strong>ア.</strong> Là phương pháp/công cụ thu thập <strong>log thao tác (<code>操作ログ</code>)</strong> của hệ thống, <strong>trực quan hóa (<code>可視化</code>)</strong> quy trình nghiệp vụ hiện tại, phân tích và giám sát để tìm ra vấn đề và cải tiến.</li>" +
                         "<li><strong>イ.</strong> Là phương pháp tái cấu trúc (<code>再構築</code>) quy trình nghiệp vụ một cách triệt để, không quan tâm đến thói quen cũ, để cải thiện hiệu quả.</li>" +
                         "<li><strong>ウ.</strong> Là phương pháp phân tích <strong>dữ liệu văn bản (<code>文章データ</code>)</strong> khổng lồ (như nội dung hỏi đáp, bài đăng SNS) để trích xuất thông tin cần thiết.</li>" +
                         "<li><strong>エ.</strong> Là phương tiện để có được tài sản mã hóa (<code>暗号資産</code>) thông qua một loạt các quy trình tính toán lớn.</li></ul>" +
                         "<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>" +
                         "<p>Câu hỏi này kiểm tra sự phân biệt của bạn giữa các loại hình \"Mining\" (Khai phá).</p>" +
                         "<ul><li><strong>ア. ✅ Đúng.</strong> <strong>Process Mining</strong> là kỹ thuật sử dụng <strong>dữ liệu nhật ký (<code>操作ログ</code>)</strong> từ các hệ thống thông tin (như ERP, CRM) để <strong>tự động tái tạo và trực quan hóa (<code>可視化</code>)</strong> quy trình nghiệp vụ thực tế đang diễn ra (chứ không phải quy trình 'trên giấy'). Từ đó, có thể phân tích để tìm ra các điểm nghẽn, sự thiếu hiệu quả và các cơ hội cải tiến.</li>" +
                         "<li><strong>イ. ❌ Sai.</strong> Tái cấu trúc quy trình một cách triệt để (<code>抜本的に再構築</code>) là <strong>BPR (Business Process Re-engineering - <code>業務プロセス再構築</code>)</strong>.</li>" +
                         "<li><strong>ウ. ❌ Sai.</strong> Phân tích dữ liệu văn bản (<code>膨大な文章データ</code>) là <strong>Khai phá văn bản (Text Mining - <code>テキストマイニング</code>)</strong>.</li>" +
                         "<li><strong>エ. ❌ Sai.</strong> Sử dụng năng lực tính toán để có được tài sản mã hóa là <strong>Đào tiền ảo (Mining - <code>マイニング</code>)</strong>, nhưng là Cryptocurrency Mining.</li></ul>" +
                         "<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>" +
                         "<ul><li><strong>Keyword chính:</strong> <strong><code>プロセスマイニング</code> (Process Mining), <code>操作ログ</code> (Log thao tác)</strong>.</li>" +
                         "<li><strong>Mẹo ghi nhớ:</strong> &quot;Mining&quot; (khai phá) cái gì? → &quot;Process&quot; (quy trình). Bằng cách nào? → Bằng &quot;Log&quot;. <strong>Process Mining = Khai phá Log để tìm ra Quy trình</strong>.</li></ul>"
      },
      {
        "question": "ITにおけるアクセシビリティに関する記述として、最も適切なものはどれか。",
        "options": ["高齢者や障害者などを含め，様々な能力や特性をもつ幅広い層の人が等しく利用できるように配慮したソフトウェア製品の設計", "顧客データを基に顧客を識別し，コールセンターやインターネットなどの様々なチャネルを用いて顧客との関係を深める手法", "製品、システム、サービスなどにおいて，それらを使用する場面をイメージしたり実際に利用したりすることで得られる人の感じ方や反応", "特定のファイルやデータベースなどの情報資産に対し，参照や更新などの権限の認可や制限を確実にする手段"],
        "answer": 0,
        "explanation": "<h3><strong>Bản dịch</strong></h3>" +
                         "<ul><li><strong>Câu hỏi:</strong> Mô tả nào phù hợp nhất với <strong>Khả năng tiếp cận (<code>アクセシビリティ</code> - Accessibility)</strong> trong CNTT?</li>" +
                         "<li><strong>ア.</strong> Thiết kế sản phẩm phần mềm có xem xét đến việc <strong>tất cả mọi người (<code>幅広い層の人</code>)</strong>, bao gồm cả <strong>người cao tuổi và người khuyết tật (<code>高齢者や障害者</code>)</strong>, đều có thể sử dụng một cách bình đẳng.</li>" +
                         "<li><strong>イ.</strong> Phương pháp nhận diện khách hàng dựa trên dữ liệu và làm sâu sắc thêm mối quan hệ bằng nhiều kênh (<code>様々なチャネル</code>) như call center hay internet.</li>" +
                         "<li><strong>ウ.</strong> Cảm nhận và phản ứng (<code>人の感じ方や反応</code>) của con người khi sử dụng sản phẩm, hệ thống, dịch vụ.</li>" +
                         "<li><strong>エ.</strong> Phương tiện để đảm bảo việc cấp phép hoặc hạn chế các quyền (<code>権限の認可や制限</code>) như xem, cập nhật đối với tài sản thông tin.</li></ul>" +
                         "<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>" +
                         "<p>Câu hỏi này phân biệt các thuật ngữ quan trọng trong thiết kế và quản lý CNTT.</p>" +
                         "<ul><li><strong>ア. ✅ Đúng.</strong> <strong>Accessibility (<code>アクセシビリティ</code>)</strong> là việc thiết kế sản phẩm để <strong>tất cả mọi người</strong>, bất kể khả năng hay khuyết tật (ví dụ: người khiếm thị, khiếm thính, khó khăn vận động), đều có thể tiếp cận và sử dụng được. Từ khóa then chốt là <code>高齢者や障害者</code> (Người cao tuổi, người khuyết tật).</li>" +
                         "<li><strong>イ. ❌ Sai.</strong> Sử dụng nhiều kênh (<code>様々なチャネル</code>) để tương tác với khách hàng một cách liền mạch là <strong>Omnichannel (<code>オムニチャネル</code>)</strong>.</li>" +
                         "<li><strong>ウ. ❌ Sai.</strong> Cảm nhận và phản ứng của người dùng (<code>人の感じ方や反応</code>) khi sử dụng sản phẩm là <strong>Trải nghiệm người dùng (User Experience - <code>UX</code>)</strong>.</li>" +
                         "<li><strong>エ. ❌ Sai.</strong> Phân quyền truy cập tài nguyên (<code>権限の認可や制限</code>) là <strong>Kiểm soát truy cập (Access Control - <code>アクセス制御</code>)</strong>.</li></ul>" +
                         "<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>" +
                         "<ul><li><strong>Keyword chính:</strong> <strong><code>アクセシビリティ</code> (Accessibility), <code>高齢者や障害者</code> (Người cao tuổi, người khuyết tật)</strong>.</li>" +
                         "<li><strong>Mẹo ghi nhớ:</strong> Accessibility = Dùng cho tất cả mọi người, không phân biệt. Hãy tìm đáp án có nhắc đến 'người khuyết tật'.</li></ul>"
      },
      {
        "question": "仮想環境を用いた技術であるAR又はVRの活用事例のうち、VRの活用事例として、最も適切なものはどれか。",
        "options": ["顔を覆うように頭部にゴーグルを装着し，そのゴーグル内に投影された仮想空間に広がる火災や地震の映像を見ながら避難方法をイメージすることによって，防災訓練が行える。", "家具をオンラインで購入するときに，スマートフォンのカメラを通して画面に映っている現実の自分の部屋に，購入したい家具をリアルタイムに重ねて試し置きできる。", "史跡などにスマートフォンを向けることによって，昔あった建物の画像や説明情報が現実の風景と重なって画面に表示される。", "図鑑にスマートフォンをかざすことによって，図鑑の絵や写真に重なって生物の動画が見られる。"],
        "answer": 0,
        "explanation": "<h3><strong>Bản dịch</strong></h3>" +
                         "<ul><li><strong>Câu hỏi:</strong> Trong các ví dụ ứng dụng AR hoặc VR, đâu là ví dụ về ứng dụng của <strong>VR (Thực tế ảo)</strong>?</li>" +
                         "<li><strong>ア.</strong> Đeo <strong>kính trùm đầu (<code>ゴーグル</code>)</strong> che kín mặt, nhìn vào hình ảnh hỏa hoạn, động đất trong một <strong>không gian ảo (<code>仮想空間</code>)</strong> để tập huấn phòng chống thiên tai.</li>" +
                         "<li><strong>イ.</strong> Khi mua đồ nội thất online, dùng camera điện thoại chiếu vào <strong>căn phòng thực (<code>現実の自分の部屋</code>)</strong> của mình và <strong>chồng (<code>重ねて</code>)</strong> hình ảnh món đồ muốn mua lên để ướm thử.</li>" +
                         "<li><strong>ウ.</strong> Hướng smartphone vào di tích lịch sử, hình ảnh của tòa nhà cũ và thông tin giải thích sẽ hiển thị <strong>chồng lên (<code>重なって</code>)</strong> <strong>khung cảnh thực (<code>現実の風景</code>)</strong>.</li>" +
                         "<li><strong>エ.</strong> Chiếu smartphone vào sách ảnh, một video về sinh vật sẽ hiển thị <strong>chồng lên (<code>重なって</code>)</strong> bức tranh trong sách.</li></ul>" +
                         "<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>" +
                         "<p>Phân biệt VR và AR là kiến thức cơ bản:</p>" +
                         "<ul><li><strong>VR (Virtual Reality - <code>仮想現実</code>):</strong> <strong>Thế giới ảo 100%</strong>. Thay thế hoàn toàn thực tại. Người dùng đắm chìm hoàn toàn vào môi trường ảo. Thường cần đeo kính che kín mắt (<code>ゴーグル</code>).</li>" +
                         "<li><strong>AR (Augmented Reality - <code>拡張現実</code>):</strong> <strong>Thế giới thực + Yếu tố ảo</strong>. Bổ sung, tăng cường (Augment) thông tin ảo (<code>重ねて</code> - chồng lên) vào thế giới thực. Thường dùng camera điện thoại.</li></ul>" +
                         "<p>Phân tích các lựa chọn:</p>" +
                         "<ul><li><strong>ア. ✅ VR.</strong> Việc đeo <strong>kính trùm đầu (<code>ゴーグルを装着</code>)</strong> và đắm mình trong một <strong>không gian ảo (<code>仮想空間</code>)</strong> hoàn toàn (cảnh cháy nổ, động đất) là đặc trưng của VR.</li>" +
                         "<li><strong>イ. ❌ AR.</strong> <strong>Thế giới thực (<code>現実の自分の部屋</code>)</strong> + <strong>Yếu tố ảo (<code>家具を...重ねて</code>)</strong>. Đây là ứng dụng AR (ví dụ: app của IKEA).</li>" +
                         "<li><strong>ウ. ❌ AR.</strong> <strong>Thế giới thực (<code>現実の風景</code>)</strong> + <strong>Yếu tố ảo (<code>画像や説明情報が...重なって</code>)</strong>. Đây là ứng dụng AR (ví dụ: Google Lens).</li>" +
                         "<li><strong>エ. ❌ AR.</strong> <strong>Thế giới thực (<code>図鑑の絵</code>)</strong> + <strong>Yếu tố ảo (<code>動画が見られる</code>)</strong>. Đây là ứng dụng AR.</li></ul>" +
                         "<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>" +
                         "<ul><li><strong>VR</strong> = <strong><code>仮想空間</code> (Không gian ảo)</strong>, <strong><code>ゴーグル</code> (Kính)</strong>, ẢO 100%.</li>" +
                         "<li><strong>AR</strong> = <strong><code>現実</code> (Thực tế)</strong> + <strong><code>重ねて</code> (Chồng lên)</strong>, THỰC + ẢO.</li></ul>"
      },
      {
        "question": "ソフトウェアライフサイクルを企画プロセス，要件定義プロセス，開発プロセス，保守プロセスに分けたとき，企画プロセスのシステム化構想の立案時にベンダー企業から収集する情報として，最も適切なものはどれか。",
        "options": ["システム化計画に基づいた開発コストの見積り", "システム化する業務の分野に関する情報技術動向", "システム構築を進めるに当たっての発注元企業の役割", "ベンダー企業の技術者が保有している技術資格"],
        "answer": 1,
        "explanation": "<h3><strong>Bản dịch</strong></h3>" +
                         "<ul><li><strong>Câu hỏi:</strong> Khi chia vòng đời phần mềm thành các giai đoạn Lập kế hoạch, Định nghĩa yêu cầu, Phát triển, Bảo trì, thì thông tin nào là phù hợp nhất để thu thập từ các nhà cung cấp (vendor) trong lúc lập ý tưởng hệ thống hóa ở <strong>giai đoạn Lập kế hoạch (<code>企画プロセス</code>)</strong>?</li>" +
                         "<li><strong>ア.</strong> Ước tính chi phí phát triển (<code>コストの見積り</code>) dựa trên kế hoạch hệ thống hóa.</li>" +
                         "<li><strong>イ.</strong> <strong>Xu hướng công nghệ thông tin (<code>情報技術動向</code>)</strong> liên quan đến lĩnh vực nghiệp vụ cần hệ thống hóa.</li>" +
                         "<li><strong>ウ.</strong> Vai trò của bên đặt hàng khi tiến hành xây dựng hệ thống.</li>" +
                         "<li><strong>エ.</strong> Các chứng chỉ kỹ thuật mà kỹ sư của vendor sở hữu.</li></ul>" +
                         "<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>" +
                         "<p>Giai đoạn <strong>Lập kế hoạch (企画)</strong> là giai đoạn rất sớm, mục tiêu là để <strong>lên ý tưởng, định hướng chiến lược</strong> và xem xét tính khả thi.</p>" +
                         "<ul><li><strong>ア. ❌ Sai.</strong> Ước tính chi phí chi tiết (<code>コストの見積り</code>) thường được thực hiện ở giai đoạn sau (ví dụ: Yêu cầu đề xuất - RFP), sau khi đã có yêu cầu rõ ràng hơn. Giai đoạn này còn quá sớm để có thể ước tính chi tiết.</li>" +
                         "<li><strong>イ. ✅ Đúng.</strong> Giai đoạn lập kế hoạch là lúc tìm hiểu xem có những công nghệ nào mới, <strong>xu hướng công nghệ (<code>情報技術動向</code>)</strong> ra sao, có thể áp dụng gì cho bài toán của mình. Đây là thông tin mang tính chiến lược, vĩ mô, rất cần thu thập ở giai đoạn đầu (thường là qua RFI - Yêu cầu cung cấp thông tin).</li>" +
                         "<li><strong>ウ. ❌ Sai.</strong> Vai trò của bên đặt hàng (<code>発注元企業</code>) là do chính họ quyết định, không phải là thông tin thu thập từ vendor.</li>" +
                         "<li><strong>エ. ❌ Sai.</strong> Chứng chỉ của kỹ sư (<code>技術資格</code>) là thông tin quá chi tiết, thường được xem xét khi đánh giá năng lực của vendor ở giai đoạn đấu thầu (RFP), không phải giai đoạn lập ý tưởng.</li></ul>" +
                         "<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>" +
                         "<ul><li><strong>Keyword chính:</strong> <strong><code>企画プロセス</code> (Giai đoạn Lập kế hoạch)</strong>.</li>" +
                         "<li><strong>Mẹo ghi nhớ:</strong> Giai đoạn đầu (kế hoạch/ý tưởng) thì cần thông tin mang tính <strong>tổng quan, định hướng, xu hướng (<code>動向</code>)</strong>. Các thông tin chi tiết (chi phí, nhân sự) sẽ được thu thập ở các giai đoạn sau.</li></ul>"
      },
      {
        "question": "基本的な機能やサービスは無償で提供し，追加の機能やサービスを有償で提供することで利益を上げるビジネスモデルを表す用語として，最も適切なものはどれか。",
        "options": ["フリーウェア", "フリーミアム", "フリーライド", "フリーランス"],
        "answer": 1,
        "explanation": "<h3><strong>Bản dịch</strong></h3>" +
                         "<ul><li><strong>Câu hỏi:</strong> Mô hình kinh doanh cung cấp các tính năng cơ bản <strong>miễn phí (<code>無償</code>)</strong> và tính phí cho các tính năng <strong>bổ sung (<code>追加</code>)</strong> có trả phí (<code>有償</code>) được gọi là gì?</li>" +
                         "<li><strong>ア.</strong> Freeware (Phần mềm miễn phí)</li>" +
                         "<li><strong>イ.</strong> Freemium</li>" +
                         "<li><strong>ウ.</strong> Free-ride (Dùng chùa)</li>" +
                         "<li><strong>エ.</strong> Freelance (Làm tự do)</li></ul>" +
                         "<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>" +
                         "<ul><li><strong>ア. フリーウェア (Freeware):</strong> ❌ Sai. Là phần mềm hoàn toàn miễn phí, không có tính năng trả phí. Nhà phát triển thường kiếm tiền từ quảng cáo hoặc quyên góp.</li>" +
                         "<li><strong>イ. フリーミアム (Freemium):</strong> ✅ <strong>Đúng.</strong> là từ ghép của <strong>Free</strong> (miễn phí) và <strong>Premium</strong> (cao cấp). Đây chính xác là mô hình kinh doanh &quot;dùng thử miễn phí, trả phí để nâng cấp&quot;. Ví dụ: Spotify (nghe miễn phí có quảng cáo, trả tiền để bỏ quảng cáo), Dropbox, Zoom.</li>" +
                         "<li><strong>ウ. フリーライド (Free-ride):</strong> ❌ Sai. Là thuật ngữ chỉ hành vi &quot;dùng chùa&quot; dịch vụ (ví dụ: dùng Wi-Fi chùa, dùng chung tài khoản) mà không trả tiền hoặc đóng góp, hưởng lợi trên công sức của người khác.</li>" +
                         "<li><strong>エ. フリーランス (Freelance):</strong> ❌ Sai. Là hình thức làm việc tự do, không liên quan đến mô hình kinh doanh phần mềm.</li></ul>" +
                         "<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>" +
                         "<ul><li><strong>Keyword chính:</strong> <strong><code>無償</code> (Miễn phí) + <code>有償</code> (Tính phí cho phần bổ sung)</strong>.</li>" +
                         "<li><strong>Mẹo ghi nhớ:</strong> <strong>Free</strong> + <strong>Premium</strong> = <strong>Freemium</strong>.</li></ul>"
      },
      {
        "question": "営業部のAさんは，営業担当者10人の営業成績が一目で分かるように，各営業担当者が提出する営業見込みと実績を毎月集約してグラフ化したいと考えている。この問題を解決するために適用する技術やツールとして，最も適切なものはどれか。",
        "options": ["データを学習し，分析するAI", "データを自動収集し，データベースに蓄積するIoT", "入力したデータを，加工して見せるオフィスツール", "ビッグデータを，様々な手法で分析するデータサイエンス"],
        "answer": 2,
        "explanation": "<h3><strong>Bản dịch</strong></h3>" +
                         "<ul><li><strong>Câu hỏi:</strong> Một nhân viên kinh doanh muốn tổng hợp dữ liệu (dự kiến và thực tế) của <strong>10 người (<code>10人</code>)</strong> và <strong>vẽ biểu đồ (<code>グラフ化</code>)</strong> hàng tháng để dễ nhìn. Công cụ/công nghệ nào là phù hợp nhất để giải quyết vấn đề này?</li>" +
                         "<li><strong>ア.</strong> AI để học và phân tích dữ liệu.</li>" +
                         "<li><strong>イ.</strong> IoT để tự động thu thập và lưu trữ dữ liệu vào CSDL.</li>" +
                         "<li><strong>ウ.</strong> Công cụ văn phòng (<code>オフィスツール</code>) để nhập, xử lý và trình bày (nhìn thấy) dữ liệu.</li>" +
                         "<li><strong>エ.</strong> Khoa học dữ liệu (Data Science) để phân tích Big Data bằng nhiều phương pháp.</li></ul>" +
                         "<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>" +
                         "<p>Đây là một bài toán quy mô rất nhỏ (10 người) và nghiệp vụ cơ bản (tổng hợp, vẽ biểu đồ).</p>" +
                         "<ul><li><strong>ア. ...AI:</strong> ❌ Quá phức tạp (Overkill). Dữ liệu của 10 người là quá nhỏ. Việc dùng AI cho bài toán đơn giản này giống như &quot;dùng dao mổ trâu để giết gà&quot;.</li>" +
                         "<li><strong>イ. ...IoT:</strong> ❌ Không liên quan. IoT là về việc các thiết bị (cảm biến, máy móc) kết nối internet, không liên quan đến việc xử lý dữ liệu bán hàng do con người nhập vào.</li>" +
                         "<li><strong>ウ. ...オフィスツール (Công cụ văn phòng):</strong> ✅ <strong>Phù hợp nhất.</strong> Bài toán này (nhập liệu, tính tổng, vẽ biểu đồ) hoàn toàn có thể được giải quyết một cách nhanh chóng và hiệu quả bằng các <strong>công cụ văn phòng (<code>オフィスツール</code>)</strong> quen thuộc như Excel hoặc Google Sheets.</li>" +
                         "<li><strong>エ. ...データサイエンス (Khoa học dữ liệu):</strong> ❌ Quá phức tạp. Dữ liệu của 10 người không phải là Big Data (<code>ビッグデータ</code>).</li></ul>" +
                         "<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>" +
                         "<ul><li><strong>Keyword chính:</strong> <strong><code>10人</code> (10 người), <code>集約してグラフ化</code> (Tổng hợp và vẽ biểu đồ)</strong>.</li>" +
                         "<li><strong>Mẹo ghi nhớ:</strong> Với các bài toán quy mô nhỏ, nghiệp vụ đơn giản, hãy luôn nghĩ đến các công cụ đơn giản nhất (Excel/Spreadsheet) trước. <code>オフィスツール</code> chính là từ khóa chỉ các công cụ đó.</li></ul>"
      },
      {
        "question": "コーポレートガバナンスの強化に有効な施策だけを全て挙げたものはどれか。<br>a 株式公開買付けによる企業の買収<br>b 執行役員制度の導入による経営と執行の分離<br>c 独立性の高い社外取締役の選任",
        "options": ["a, b", "a, b, c", "b, c", "c"],
        "answer": 2,
        "explanation": "<h3><strong>Bản dịch</strong></h3>" +
                         "<ul><li><strong>Câu hỏi:</strong> Đâu là tất cả các biện pháp hiệu quả để tăng cường <strong>Quản trị doanh nghiệp (<code>コーポレートガバナンス</code>)</strong>?</li>" +
                         "<li><strong>a.</strong> Mua lại công ty thông qua chào mua công khai (TOB).</li>" +
                         "<li><strong>b.</strong> Tách biệt (<code>分離</code>) giữa quản lý (HĐQT) và điều hành (ban giám đốc) bằng cách áp dụng chế độ Giám đốc điều hành.</li>" +
                         "<li><strong>c.</strong> Bổ nhiệm các thành viên HĐQT độc lập từ bên ngoài (<code>社外取締役</code>).</li></ul>" +
                         "<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>" +
                         "<p><strong>Quản trị doanh nghiệp (Corporate Governance)</strong> là cơ chế <strong>giám sát</strong> ban lãnh đạo (những người điều hành) để đảm bảo tính minh bạch, hiệu quả, và bảo vệ lợi ích của các bên liên quan (đặc biệt là cổ đông).</p>" +
                         "<ul><li><strong>a. ❌ Sai.</strong> Mua lại công ty (M&A) là một chiến lược kinh doanh, không phải là biện pháp quản trị nội bộ.</li>" +
                         "<li><strong>b. ✅ Đúng.</strong> Việc <strong>tách bạch (<code>分離</code>)</strong> vai trò của HĐQT (người ra chiến lược và giám sát) và ban điều hành (người chấp hành) giúp tăng cường tính minh bạch và giám sát lẫn nhau. Đây là một phần quan trọng của quản trị doanh nghiệp tốt.</li>" +
                         "<li><strong>c. ✅ Đúng.</strong> Bổ nhiệm các <strong>giám đốc độc lập từ bên ngoài (<code>社外取締役</code>)</strong> là biện pháp kinh điển và hiệu quả nhất. Vì họ không liên quan trực tiếp đến lợi ích hàng ngày của công ty, họ có thể đưa ra các ý kiến giám sát khách quan để bảo vệ cổ đông khỏi các quyết định 'nội bộ' có thể sai lầm hoặc tư lợi.</li></ul>" +
                         "<p>Vậy, các biện pháp hiệu quả là b và c.</p>" +
                         "<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>" +
                         "<ul><li><strong>Keyword chính:</strong> <strong><code>コーポレートガバナンス</code> (Quản trị doanh nghiệp)</strong>.</li>" +
                         "<li><strong>Mẹo ghi nhớ:</strong> Quản trị doanh nghiệp tốt = <strong>Giám sát (c) + Tách bạch quyền lực (b)</strong>. Từ khóa quan trọng nhất cần nhớ là <strong><code>社外取締役</code> (Giám đốc bên ngoài)</strong>.</li></ul>"
      },
      {
        "question": "RPAに関する記述として，最も適切なものはどれか。",
        "options": ["企業の一部の業務を外部の組織に委託することによって，自社のリソースを重要な領域に集中したり，コストの最適化や業務の高効率化などを実現したりする。", "組立てや搬送などにハードウェアのロボットを用いることによって，工場の生産活動の自動化を実現する。", "システムの利用者が，主体的にシステム管理や運用を行うことによって，利用者のITリテラシーの向上や，システムベンダーへの依存の軽減などを実現する。", "ホワイトカラーの定型的な事務作業を，ソフトウェアのロボットに代替させることによって，自動化や効率化を図る。"],
        "answer": 3,
        "explanation": "<h3><strong>Bản dịch</strong></h3>" +
                         "<ul><li><strong>Câu hỏi:</strong> Mô tả nào phù hợp nhất với <strong>RPA</strong>?</li>" +
                         "<li><strong>ア.</strong> Ủy thác (<code>委託</code>) một phần nghiệp vụ cho tổ chức bên ngoài để tập trung nguồn lực hoặc tối ưu chi phí.</li>" +
                         "<li><strong>イ.</strong> Sử dụng <strong>robot phần cứng (<code>ハードウェアのロボット</code>)</strong> để tự động hóa sản xuất trong nhà máy.</li>" +
                         "<li><strong>ウ.</strong> Người dùng tự chủ động quản lý và vận hành (<code>管理や運用</code>) hệ thống để nâng cao hiểu biết CNTT và giảm phụ thuộc vào vendor.</li>" +
                         "<li><strong>エ.</strong> Tự động hóa và hiệu quả hóa các <strong>công việc văn phòng có tính lặp lại (<code>定型的な事務作業</code>)</strong> của nhân viên văn phòng (white-collar) bằng cách thay thế họ bằng <strong>robot phần mềm (<code>ソフトウェアのロボット</code>)</strong>.</li></ul>" +
                         "<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>" +
                         "<p>Câu hỏi này kiểm tra sự phân biệt của bạn giữa các khái niệm tự động hóa và quản lý.</p>" +
                         "<ul><li><strong>ア. ❌ Sai.</strong> Thuê ngoài một phần công việc (<code>外部の組織に委託</code>) là <strong>BPO (Business Process Outsourcing)</strong>.</li>" +
                         "<li><strong>イ. ❌ Sai.</strong> Sử dụng robot phần cứng (<code>ハードウェアのロボット</code>) trong nhà máy là <strong>Tự động hóa công nghiệp (Factory Automation - <code>FA</code>)</strong>.</li>" +
                         "<li><strong>ウ. ❌ Sai.</strong> Người dùng tự quản lý và vận hành hệ thống (<code>利用者が...管理や運用</code>) là <strong>End-User Computing (<code>EUC</code>)</strong>.</li>" +
                         "<li><strong>エ. ✅ Đúng.</strong> <strong>RPA (Robotic Process Automation)</strong> là việc sử dụng <strong>robot phần mềm (<code>ソフトウェアのロボット</code>)</strong> (chạy trên máy tính) để bắt chước các thao tác của con người (click chuột, nhập liệu, copy-paste) nhằm tự động hóa các <strong>công việc văn phòng lặp lại (<code>定型的な事務作業</code>)</strong>.</li></ul>" +
                         "<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>" +
                         "<ul><li><strong>Keyword chính:</strong> <strong><code>RPA</code>, <code>ソフトウェアのロボット</code> (Robot phần mềm), <code>定型的な事務作業</code> (Công việc văn phòng lặp lại)</strong>.</li>" +
                         "<li><strong>Mẹo ghi nhớ:</strong> RPA = Robot ảo cho nhân viên văn phòng. (Phân biệt với Robot nhà máy <code>FA</code>).</li></ul>"
      },
      {
        "question": "ブロックチェーンを適用した事例として、最も適切なものはどれか。",
        "options": ["証券会社が、取引の改ざんや不整合の発生を防止することを目的として、従来の社債に代わり電子的手段を用いたデジタル社債を発行した。", "商品先物取引所を運営する認可法人が、取引量を拡大することを目的として、現在およそ1秒以上要している注文受付の応答時間を、1秒未満に改善した。", "ビジネス路線を中心に運航する航空会社が、顧客の利便性向上と競合他社に対する競争力強化を目的として、出発1時間前まで何回でも予約の変更を可能とする新しいサービスを開始した。", "服飾雑貨製造会社が、自社の商品企画に活用することを目的として、過去の全ての自社商品に関する大量の画像及び社内会議の音声データをデータベースに保存し、従業員がいつでも検索できるようにした。"],
        "answer": 0,
        "explanation": "<h3><strong>Bản dịch</strong></h3>" +
                         "<ul><li><strong>Câu hỏi:</strong> Đâu là ví dụ về ứng dụng của <strong>Blockchain</strong>?</li>" +
                         "<li><strong>ア.</strong> Một công ty chứng khoán phát hành trái phiếu kỹ thuật số nhằm mục đích <strong>ngăn chặn việc giả mạo, sửa đổi giao dịch (<code>取引の改ざん...を防止</code>)</strong>.</li>" +
                         "<li><strong>イ.</strong> Một sàn giao dịch cải thiện tốc độ phản hồi xử lý đơn hàng xuống dưới 1 giây để tăng khối lượng giao dịch.</li>" +
                         "<li><strong>ウ.</strong> Một hãng hàng không bắt đầu dịch vụ mới cho phép thay đổi đặt chỗ nhiều lần cho đến 1 giờ trước khi khởi hành.</li>" +
                         "<li><strong>エ.</strong> Một công ty sản xuất lưu trữ toàn bộ hình ảnh sản phẩm và dữ liệu âm thanh cuộc họp vào CSDL để nhân viên tra cứu.</li></ul>" +
                         "<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>" +
                         "<p>Đặc tính cốt lõi của Blockchain là <strong>tính bất biến (không thể sửa đổi)</strong> và <strong>tính phi tập trung/minh bạch (dữ liệu được phân tán và chia sẻ ở nhiều nơi)</strong>.</p>" +
                         "<ul><li><strong>ア. ✅ Đúng.</strong> Blockchain có hai đặc tính quan trọng là <strong>tính bất biến (không thể sửa đổi)</strong> và <strong>tính minh bạch</strong>. Việc phát hành tài sản kỹ thuật số (như trái phiếu) nhằm <strong>ngăn chặn việc giả mạo, sửa đổi giao dịch (<code>取引の改ざん...を防止</code>)</strong> là một ứng dụng hoàn hảo cho công nghệ này, vì một khi giao dịch đã được ghi vào chuỗi, nó không thể bị thay đổi.</li>" +
                         "<li><strong>イ. ❌ Sai.</strong> Cải thiện tốc độ phản hồi (performance tuning) là một vấn đề về tối ưu hóa hệ thống CSDL thông thường, không phải là ứng dụng đặc trưng của Blockchain (thực tế, Blockchain thường chậm hơn CSDL tập trung truyền thống).</li>" +
                         "<li><strong>ウ. ❌ Sai.</strong> Cung cấp dịch vụ đặt vé linh hoạt là một chính sách kinh doanh (business policy), không liên quan đến công nghệ cụ thể.</li>" +
                         "<li><strong>エ. ❌ Sai.</strong> Tạo một cơ sở dữ liệu để nhân viên tra cứu là một ứng dụng của quản lý tri thức (Knowledge Management) hoặc CSDL đa phương tiện thông thường.</li></ul>" +
                         "<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>" +
                         "<ul><li><strong>Keyword chính:</strong> <strong><code>ブロックチェーン</code> (Blockchain)</strong>.</li>" +
                         "<li><strong>Mẹo ghi nhớ:</strong> Blockchain = <strong>Không thể sửa đổi (<code>改ざん防止</code>) + Minh bạch (phi tập trung)</strong>. Hãy tìm đáp án nào cần đến những đặc tính này.</li></ul>"
      },
      {
        "question": "4月1日から5月31日までに、取引①から取引⑤があった。各取引の受注、売上計上、現金回収の状況が表のとおりであるとき、この取引先に対する5月31日時点の売掛金は何万円か。ここで、4月1日時点で売掛金残高はないものとする。<br><img src='img/pic26.png' width='433px'>",
        "options": ["1000", "1,400", "2,300", "2,700"],
        "answer": 2,
        "explanation": "<h3><strong>Bản dịch</strong></h3>" +
                         "<ul><li><strong>Câu hỏi:</strong> Từ ngày 1/4 đến 31/5, có 5 giao dịch (từ ① đến ⑤) đã diễn ra. Với tình hình Nhận đơn (<code>受注</code>), Ghi nhận doanh thu (<code>売上計上</code>), và Thu tiền mặt (<code>現金回収</code>) của mỗi giao dịch như trong bảng, khoản phải thu (<code>売掛金</code>) đối với khách hàng này tại thời điểm 31/5 là bao nhiêu vạn yên? (Giả sử đầu kỳ 1/4 không có nợ).</li>" +
                         "<li><strong>ア.</strong> 1000</li>" +
                         "<li><strong>イ.</strong> 1,400</li>" +
                         "<li><strong>ウ.</strong> 2,300</li>" +
                         "<li><strong>エ.</strong> 2,700</li></ul>" +
                         "<hr><h3><strong>Phân tích & Tính toán</strong></h3>" +
                         "<p><strong>Khoản phải thu (<code>売掛金</code> - Urikakekin)</strong> là số tiền đã được <strong>GHI NHẬN DOANH THU</strong> (<code>売上計上済み</code>) nhưng <strong>CHƯA THU ĐƯỢC TIỀN</strong> (<code>現金未回収</code>).</p>" +
                         "<p>Chúng ta chỉ cần lọc ra những dòng thỏa mãn 2 điều kiện: <strong>Đã ghi nhận doanh thu</strong> VÀ <strong>Chưa thu tiền</strong> tại thời điểm 31/5:</p>" +
                         "<ul><li><strong>Giao dịch ①:</strong> Đã ghi nhận doanh thu (4/10), Đã thu tiền (4/30) → Khoản phải thu = 0.</li>" +
                         "<li><strong>Giao dịch ②:</strong> Đã ghi nhận doanh thu (4/15), Đã thu tiền (4/30) → Khoản phải thu = 0.</li>" +
                         "<li><strong>Giao dịch ③:</strong> <strong>Đã ghi nhận doanh thu (5/1), CHƯA thu tiền</strong> → Khoản phải thu = <strong>1,300</strong> vạn yên.</li>" +
                         "<li><strong>Giao dịch ④:</strong> <strong>Đã ghi nhận doanh thu (5/1), CHƯA thu tiền</strong> → Khoản phải thu = <strong>1,000</strong> vạn yên.</li>" +
                         "<li><strong>Giao dịch ⑤:</strong> CHƯA ghi nhận doanh thu (mặc dù đã nhận đơn hàng) → Khoản phải thu = 0. (Lưu ý: Chỉ nhận đơn <code>受注</code> thì chưa phát sinh nợ, phải <code>売上計上</code> mới phát sinh nợ).</li></ul>" +
                         "<p>Tổng khoản phải thu tại ngày 31/5 = 0 + 0 + 1,300 + 1,000 + 0 = <strong>2,300 vạn yên</strong>.</p>" +
                         "<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>" +
                         "<ul><li><strong>Keyword chính:</strong> <strong><code>売掛金</code> (Khoản phải thu)</strong>.</li>" +
                         "<li><strong>Mẹo ghi nhớ (Công thức):</strong> Khoản phải thu = <strong>Đã ghi nhận doanh thu (<code>売上計上</code>)</strong> + <strong>Chưa thu tiền (<code>現金未回収</code>)</strong>.</li></ul>"
      },
      {
        "question": "業務と情報システムを最適にすることを目的として、業務と情報システムの現状の把握と目標とする理想像の設定から現状と理想との乖離を明確にし、目標に向けた改善活動を移行計画として定義したい。このときに用いられる手法として、最も適切なものはどれか。",
        "options": ["BI (Business Intelligence)", "EA (Enterprise Architecture)", "MOT (Management of Technology)", "SOA (Service Oriented Architecture)"],
        "answer": 1,
        "explanation": "<h3><strong>Bản dịch</strong></h3>" +
                         "<ul><li><strong>Câu hỏi:</strong> Phương pháp nào được dùng để tối ưu hóa nghiệp vụ và hệ thống thông tin bằng cách: 1. Nắm bắt <strong>hiện trạng (<code>現状</code>)</strong>, 2. Thiết lập <strong>hình mẫu lý tưởng (<code>理想像</code> - mục tiêu)</strong>, 3. Làm rõ khoảng cách (<code>乖離</code>) giữa chúng, và 4. Lập kế hoạch chuyển đổi?</li>" +
                         "<li><strong>ア.</strong> BI (Trí tuệ kinh doanh)</li>" +
                         "<li><strong>イ.</strong> EA (Kiến trúc doanh nghiệp)</li>" +
                         "<li><strong>ウ.</strong> MOT (Quản trị công nghệ)</li>" +
                         "<li><strong>エ.</strong> SOA (Kiến trúc hướng dịch vụ)</li></ul>" +
                         "<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>" +
                         "<ul><li><strong>ア. BI (Business Intelligence):</strong> ❌ Sai. Là <code>ビジネスインテリジェンス</code> - Các công cụ phân tích dữ liệu (như tạo báo cáo, dashboard) để hỗ trợ ra quyết định.</li>" +
                         "<li><strong>イ. EA (Enterprise Architecture):</strong> ✅ <strong>Đúng.</strong> Là <code>企業アーキテクチャ</code> (Kiến trúc doanh nghiệp) - Một phương pháp luận toàn diện, sử dụng các mô hình để phân tích và lập kế hoạch cho toàn bộ doanh nghiệp (bao gồm cả nghiệp vụ, dữ liệu, ứng dụng, và công nghệ). Một phần cốt lõi của EA chính là việc phân tích mô hình <strong>&quot;As-Is&quot; (<code>現状</code> - hiện trạng)</strong> và thiết kế mô hình <strong>&quot;To-Be&quot; (<code>理想像</code> - mục tiêu)</strong> để vạch ra lộ trình chuyển đổi (<code>移行計画</code>).</li>" +
                         "<li><strong>ウ. MOT (Management of Technology):</strong> ❌ Sai. Là <code>技術経営</code> - Quản trị công nghệ, là việc quản lý các hoạt động công nghệ để hỗ trợ chiến lược kinh doanh.</li>" +
                         "<li><strong>エ. SOA (Service Oriented Architecture):</strong> ❌ Sai. Là <code>サービス指向アーキテクチャ</code> - Một kiến trúc phần mềm trong đó các chức năng được xây dựng dưới dạng các 'dịch vụ' độc lập, có thể tái sử dụng.</li></ul>" +
                         "<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>" +
                         "<ul><li><strong>Keyword chính:</strong> <strong><code>現状の把握</code> (Nắm bắt hiện trạng), <code>理想像の設定</code> (Thiết lập hình mẫu lý tưởng)</strong>.</li>" +
                         "<li><strong>Mẹo ghi nhớ:</strong> Phân tích <strong>As-Is vs To-Be</strong> (Hiện tại vs Tương lai) → <strong>EA (Enterprise Architecture)</strong>.</li></ul>"
      },
      {
        "question": "生成AIに関する記述として、最も適切なものはどれか。",
        "options": ["一切の学習を必要とせずに、新しいコンテンツを生成する。", "過去のデータから項目間の相関などを学習したモデルを用いて、現在のデータから将来の値を予測して出力する。", "作成したシナリオに基づいて動作するソフトウェアロボットによって、業務を自動化する。", "自然言語で指示された内容に従って、事前に学習したデータを基に、新しいコンテンツを生成する。"],
        "answer": 3,
        "explanation": "<h3><strong>Bản dịch</strong></h3>" +
                         "<ul><li><strong>Câu hỏi:</strong> Mô tả nào phù hợp nhất với <strong>AI tạo sinh (<code>生成AI</code> - Generative AI)</strong>?</li>" +
                         "<li><strong>ア.</strong> Tạo ra nội dung mới mà không cần bất kỳ sự học hỏi nào.</li>" +
                         "<li><strong>イ.</strong> Sử dụng mô hình đã học từ dữ liệu quá khứ để <strong>dự đoán (<code>予測</code>)</strong> giá trị tương lai từ dữ liệu hiện tại.</li>" +
                         "<li><strong>ウ.</strong> Robot phần mềm hoạt động theo kịch bản (<code>シナリオ</code>) đã tạo để tự động hóa nghiệp vụ.</li>" +
                         "<li><strong>エ.</strong> Dựa trên chỉ thị bằng <strong>ngôn ngữ tự nhiên (<code>自然言語</code>)</strong>, <strong>tạo ra nội dung mới (<code>新しいコンテンツを生成</code>)</strong> dựa trên dữ liệu đã được học trước đó.</li></ul>" +
                         "<hr><h3><strong>Phân tích TẤT CẢ lựa chọn (Học 1 được 3)</strong></h3>" +
                         "<ul><li><strong>ア. ❌ Sai.</strong> AI tạo sinh cần được huấn luyện (<code>学習</code>) trên một lượng dữ liệu khổng lồ (ví dụ: toàn bộ Internet) trước khi có thể tạo ra nội dung.</li>" +
                         "<li><strong>イ. ❌ Sai.</strong> Dự đoán giá trị tương lai (<code>将来の値を予測</code>) từ dữ liệu hiện tại (ví dụ: dự đoán doanh số, giá cổ phiếu) là chức năng của <strong>AI dự đoán (Predictive AI - <code>予測AI</code>)</strong>, không phải AI tạo sinh.</li>" +
                         "<li><strong>ウ. ❌ Sai.</strong> Robot phần mềm hoạt động theo kịch bản (<code>シナリオ</code>) là <strong>RPA</strong>.</li>" +
                         "<li><strong>エ. ✅ Đúng.</strong> <strong>AI tạo sinh (Generative AI)</strong> hoạt động bằng cách nhận chỉ thị (prompt) bằng <strong>ngôn ngữ tự nhiên (<code>自然言語</code>)</strong>, và dựa trên dữ liệu đã được học trước đó (<code>事前に学習したデータ</code>) để <strong>tạo ra (<code>生成</code>)</strong> nội dung mới (văn bản, hình ảnh, âm thanh...).</li></ul>" +
                         "<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>" +
                         "<ul><li><strong>Keyword chính:</strong> <strong><code>生成AI</code> (Generative AI)</strong>.</li>" +
                         "<li><strong>Mẹo ghi nhớ:</strong> <strong>Generative</strong> AI → <strong>Generate (Tạo ra)</strong> nội dung MỚI. (Phân biệt với <strong>Predictive</strong> AI → <strong>Predict (Dự đoán)</strong> tương lai).</li></ul>"
      },
      {
        "question": "企業経営の中核となる考え方を、ミッション、ビジョン、パリューの三つに分けて示す場合、ビジョンとして示すものとして、最も適切なものはどれか。",
        "options": ["企業の存在意義や使命", "企業の存在意義や使命をふまえた、ある時点でのありたい姿", "戦略を実現するために重要となる業績管理指標", "戦略を実現するために重要となる成功要因"],
        "answer": 1,
        "explanation": "<h3><strong>Bản dịch</strong></h3>" +
                         "<ul><li><strong>Câu hỏi:</strong> Trong bộ ba Mission, Vision, Value, đâu là mô tả của <strong>Vision (<code>ビジョン</code>)</strong>?</li>" +
                         "<li><strong>ア.</strong> Ý nghĩa tồn tại và sứ mệnh (<code>使命</code>) của doanh nghiệp.</li>" +
                         "<li><strong>イ.</strong> <strong>Hình ảnh muốn trở thành (<code>ありたい姿</code>)</strong> tại một thời điểm trong tương lai, dựa trên sứ mệnh của doanh nghiệp.</li>" +
                         "<li><strong>ウ.</strong> Chỉ số quản lý hiệu suất (<code>業績管理指標</code>) quan trọng để thực hiện chiến lược.</li>" +
                         "<li><strong>エ.</strong> Yếu tố thành công (<code>成功要因</code>) quan trọng để thực hiện chiến lược.</li></ul>" +
                         "<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>" +
                         "<p>Câu hỏi này kiểm tra các thuật ngữ cơ bản trong quản trị chiến lược.</p>" +
                         "<ul><li><strong>ア. ❌ Sai.</strong> Ý nghĩa tồn tại và sứ mệnh (<code>使命</code>) là <strong>Mission (<code>ミッション</code>)</strong>.</li>" +
                         "<li><strong>イ. ✅ Đúng.</strong> <strong>Vision (<code>ビジョン</code>)</strong> là <strong>hình ảnh, trạng thái mà công ty muốn trở thành (<code>ありたい姿</code>)</strong> tại một thời điểm trong tương lai (ví dụ: 'Trở thành công ty số 1 Việt Nam vào năm 2030').</li>" +
                         "<li><strong>ウ. ❌ Sai.</strong> Chỉ số quản lý hiệu suất là <strong>KPI (Key Performance Indicator - <code>重要業績評価指標</code>)</strong>.</li>" +
                         "<li><strong>エ. ❌ Sai.</strong> Yếu tố thành công là <strong>CSF (Critical Success Factor - <code>重要成功要因</code>)</strong>.</li></ul>" +
                         "<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>" +
                         "<ul><li><strong>Mẹo ghi nhớ bộ ba MVV:</strong></li>" +
                         "<ul><li><strong>Mission (Sứ mệnh - <code>使命</code>):</strong> TẠI SAO chúng ta tồn tại? (Lý do)</li>" +
                         "<li><strong>Vision (Tầm nhìn - <code>ありたい姿</code>):</strong> Chúng ta muốn TRỞ THÀNH GÌ? (Đích đến)</li>" +
                         "<li><strong>Value (Giá trị):</strong> Chúng ta TIN VÀO ĐIỀU GÌ? (Nguyên tắc)</li></ul></ul>"
      },
      {
        "question": "著作権に関して、次の記述中のa、bに入れる字句の適切な組合せはどれか。 a は著作権法による保護の対象になるが、 b は対象にならない。<br><img src='img/pic30.png' width='433px'>",
        "options": ["ア", "イ", "ウ", "エ"],
        "answer": 3,
        "explanation": "<h3><strong>Bản dịch</strong></h3>" +
                         "<ul><li><strong>Câu hỏi:</strong> Liên quan đến bản quyền, đâu là sự kết hợp từ ngữ thích hợp để điền vào a và b trong mô tả sau? <strong>(a) là đối tượng được bảo hộ</strong> bởi Luật Bản quyền, nhưng <strong>(b) thì không</strong>.</li></ul>" +
                         "<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>" +
                         "<p>Nguyên tắc cốt lõi của Luật Bản quyền (<code>著作権法</code>) là: Bảo vệ <strong>'SỰ THỂ HIỆN' (<code>表現</code>)</strong> của một ý tưởng, chứ không bảo vệ bản thân <strong>'Ý TƯỞNG' (<code>アイディア</code>)</strong>, 'PHƯƠNG PHÁP' (<code>解法</code>) hay <strong>'QUY TẮC' (<code>ルール</code>)</strong>.</p>" +
                         "<p>Hãy phân loại các mục:</p>" +
                         "<ul><li><strong>Giải thuật (<code>アルゴリズム</code>):</strong> Đây là một 'ý tưởng', một 'phương pháp' giải quyết vấn đề. <strong>Không được</strong> bảo hộ. ❌</li>" +
                         "<li><strong>Mã nguồn (<code>ソースプログラム</code>):</strong> Đây là 'sự thể hiện' cụ thể của một giải thuật bằng một ngôn ngữ lập trình. Nó được bảo hộ như một tác phẩm văn học. <strong>Được</strong> bảo hộ. ✅</li>" +
                         "<li><strong>Giao thức truyền thông (<code>通信プロトコル</code>):</strong> Đây là một bộ 'quy tắc', một 'tiêu chuẩn' để các máy tính nói chuyện với nhau. <strong>Không được</strong> bảo hộ. ❌</li>" +
                         "<li><strong>Sách hướng dẫn (<code>マニュアル</code>):</strong> Đây là một tác phẩm văn học, là 'sự thể hiện' bằng chữ viết. <strong>Được</strong> bảo hộ. ✅</li></ul>" +
                         "<p>Bây giờ, hãy kiểm tra các đáp án theo yêu cầu <strong>(a) ĐƯỢC ✅, (b) KHÔNG ❌</strong>:</p>" +
                         "<ul><li><strong>ア:</strong> (a) アルゴリズム ❌, (b) ソースプログラム ✅ → Sai.</li>" +
                         "<li><strong>イ:</strong> (a) アルゴリズム ❌, (b) 通信プロトコル ❌ → Sai.</li>" +
                         "<li><strong>ウ:</strong> (a) ソースプログラム ✅, (b) マニュアル ✅ → Sai (cả hai đều được bảo hộ).</li>" +
                         "<li><strong>エ: (a) ソースプログラム ✅, (b) 通信プロトコル ❌ → Đúng.</strong></li></ul>" +
                         "<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>" +
                         "<ul><li><strong>Mẹo ghi nhớ:</strong> Bản quyền bảo vệ <strong>CÁI BẠN VIẾT RA (<code>表現</code>)</strong> (Mã nguồn, Sách, Nhạc, Tranh). Bản quyền KHÔNG bảo vệ <strong>CÁCH BẠN NGHĨ (<code>アイディア</code>)</strong> (Giải thuật, Giao thức, Phương pháp).</li></ul>"
      },
      {
        "question": "ERPシステムの説明として、適切なものはどれか。",
        "options": ["企業内の個人がもつ営業に関する知識やノウハウを収集し、共有することによって、効率的，効果的な営業活動を支援するシステム", "経理や人事，生産，販売などの基幹業務と関連する情報を一元管理し，経営資源を最適配分することによって，効率的な経営の実現を支援するシステム", "原材料の調達から生産，販売に関する情報を，企業間で共有・管理することによって，ビジネスプロセスの全体最適を目指すシステム", "個々の顧客に関する情報や対応履歴などを管理することによって，きめ細かい顧客対応を実施し，顧客満足度の向上を支援するシステム"],
        "answer": 1,
        "explanation": "<h3><strong>Bản dịch</strong></h3>" +
                         "<ul><li><strong>Câu hỏi:</strong> Mô tả nào phù hợp nhất với hệ thống <strong>ERP</strong>?</li>" +
                         "<li><strong>ア.</strong> Hệ thống hỗ trợ hoạt động kinh doanh (<code>営業活動</code>) hiệu quả bằng cách thu thập và chia sẻ kiến thức, kinh nghiệm bán hàng.</li>" +
                         "<li><strong>イ.</strong> Hệ thống hỗ trợ thực hiện kinh doanh hiệu quả bằng cách <strong>quản lý tập trung (<code>一元管理</code>)</strong> thông tin liên quan đến các <strong>nghiệp vụ cốt lõi (<code>基幹業務</code>)</strong> như <strong>kế toán (<code>経理</code>), nhân sự (<code>人事</code>), sản xuất (<code>生産</code>), bán hàng (<code>販売</code>)</strong>... để phân bổ tối ưu nguồn lực (<code>経営資源</code>).</li>" +
                         "<li><strong>ウ.</strong> Hệ thống hướng đến tối ưu toàn bộ quy trình kinh doanh bằng cách chia sẻ và quản lý thông tin từ thu mua nguyên vật liệu đến sản xuất, bán hàng <strong>giữa các công ty (<code>企業間</code>)</strong>.</li>" +
                         "<li><strong>エ.</strong> Hệ thống hỗ trợ nâng cao sự hài lòng của khách hàng bằng cách quản lý thông tin và lịch sử tương tác với <strong>từng khách hàng (<code>個々の顧客</code>)</strong>.</li></ul>" +
                         "<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>" +
                         "<p>Đây là câu hỏi 'kinh điển của kinh điển' về phân biệt các hệ thống thông tin doanh nghiệp.</p>" +
                         "<ul><li><strong>ア. ❌ Sai.</strong> Quản lý kiến thức, kinh nghiệm bán hàng (<code>営業に関する知識</code>) là của <strong>SFA (Sales Force Automation - <code>営業支援システム</code>)</strong>.</li>" +
                         "<li><strong>イ. ✅ Đúng.</strong> <strong>ERP (Enterprise Resource Planning - <code>企業資源計画</code>)</strong> là một hệ thống tích hợp 'TẤT CẢ TRONG MỘT', thực hiện việc <strong>quản lý tập trung (<code>一元管理</code>)</strong> thông tin của tất cả các bộ phận nghiệp vụ cốt lõi (<code>基幹業務</code>) của một doanh nghiệp (Kế toán, Nhân sự, Sản xuất, Bán hàng...) để tối ưu hóa việc sử dụng nguồn lực (<code>経営資源</code>).</li>" +
                         "<li><strong>ウ. ❌ Sai.</strong> Quản lý thông tin <strong>giữa các công ty (<code>企業間</code>)</strong>, từ nhà cung cấp đến khách hàng, là của <strong>SCM (Supply Chain Management - <code>供給連鎖管理</code>)</strong>.</li>" +
                         "<li><strong>エ. ❌ Sai.</strong> Quản lý thông tin và lịch sử tương tác với <strong>khách hàng (<code>顧客</code>)</strong> là của <strong>CRM (Customer Relationship Management - <code>顧客関係管理</code>)</strong>.</li></ul>" +
                         "<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>" +
                         "<ul><li><strong>Keyword chính:</strong> <strong><code>ERP</code>, <code>一元管理</code> (Quản lý tập trung), <code>基幹業務</code> (Nghiệp vụ cốt lõi)</strong>.</li>" +
                         "<li><strong>Mẹo ghi nhớ:</strong></li>" +
                         "<ul><li><strong>ERP = Nội bộ</strong> (Tất cả phòng ban)</li>" +
                         "<li><strong>SCM = Đối tác</strong> (Nhà cung cấp, nhà phân phối)</li>" +
                         "<li><strong>CRM = Khách hàng</strong></li>" +
                         "<li><strong>SFA = Nhân viên Sales</strong></li></ul></ul>"
      },
      {
        "question": "公共交通機関での移動履歴，Webサイトでの商品検索履歴，SNSやブログで発信したデータなど，個人の活動を記録する技術，又は記録そのものを表す用語として，最も適切なものはどれか。",
        "options": ["アクティビティ", "トランザクション", "ライフログ", "レコードキーピング"],
        "answer": 2,
        "explanation": "<h3><strong>Bản dịch</strong></h3>" +
                         "<ul><li><strong>Câu hỏi:</strong> Thuật ngữ nào dùng để chỉ công nghệ ghi lại các hoạt động cá nhân (lịch sử di chuyển, tìm kiếm web, bài đăng SNS...), hoặc chính bản thân các bản ghi đó?</li>" +
                         "<li><strong>ア.</strong> Activity (Hoạt động)</li>" +
                         "<li><strong>イ.</strong> Transaction (Giao dịch)</li>" +
                         "<li><strong>ウ.</strong> Lifelog (Nhật ký cuộc sống)</li>" +
                         "<li><strong>エ.</strong> Record-keeping (Lưu trữ hồ sơ)</li></ul>" +
                         "<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>" +
                         "<ul><li><strong>ア. アクティビティ (Activity):</strong> ❌ Sai. Là 'Hoạt động', một thuật ngữ quá chung chung, không cụ thể.</li>" +
                         "<li><strong>イ. トランザクション (Transaction):</strong> ❌ Sai. Là 'Giao dịch', thường chỉ một đơn vị xử lý có tính toàn vẹn (ví dụ: giao dịch ngân hàng).</li>" +
                         "<li><strong>ウ. ライフログ (Lifelog):</strong> ✅ <strong>Đúng.</strong> Là thuật ngữ dùng để chỉ việc ghi lại các khía cạnh khác nhau trong <strong>cuộc sống (<code>Life</code>)</strong> của một cá nhân (như lịch sử di chuyển, sức khỏe, tìm kiếm, giao tiếp) dưới dạng <strong>dữ liệu số (<code>Log</code>)</strong>.</li>" +
                         "<li><strong>エ. レコードキーピング (Record-keeping):</strong> ❌ Sai. Là 'Lưu trữ hồ sơ', thường mang tính chính thức, có tổ chức (ví dụ: lưu hồ sơ bệnh án, hồ sơ thuế).</li></ul>" +
                         "<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>" +
                         "<ul><li><strong>Keyword chính:</strong> <strong><code>個人の活動を記録</code> (Ghi lại hoạt động cá nhân)</strong>.</li>" +
                         "<li><strong>Mẹo ghi nhớ:</strong> Ghi lại 'cuộc sống' (Life) → <strong>Life</strong>log.</li></ul>"
      },
      {
        "question": "自動運転の水準は，一般的に'レベル1'から'レベル5'に分けられている。'条件付運転自動化'と呼ばれる'レベル3'が示す自動運転の水準に関する記述として，最も適切なものはどれか。",
        "options": ["運転の主体はシステムであり，人間が運転する必要はないが，システムによる自動運転の継続が難しい場合は，人間が運転しなければならない。", "運転の主体はシステムであり，人間が運転する必要はないので，ハンドルやペダルなどの運転装置は不要だが，自動運転できる地域は限られる。", "運転の主体は人間であり，高速道路で車線を維持しながら前の自動車に付いて走る機能のように，ハンドルと加減速の操作をシステムが支援する。", "運転の主体は人間であり，自動プレーキや急発進防止システムのように，前方又は後方の状況によって，システムが運転の一部を支援する。"],
        "answer": 0,
        "explanation": "<h3><strong>Bản dịch</strong></h3>" +
                         "<ul><li><strong>Câu hỏi:</strong> Mô tả nào phù hợp với <strong>Cấp độ 3 (<code>レベル3</code>)</strong> của xe tự lái, hay còn gọi là 'Tự động hóa có điều kiện'?</li>" +
                         "<li><strong>ア.</strong> <strong>Chủ thể lái là hệ thống (<code>システム</code>)</strong>, con người không cần lái, nhưng khi hệ thống gặp khó khăn, <strong>con người phải lái (<code>人間が運転</code>)</strong>.</li>" +
                         "<li><strong>イ.</strong> Chủ thể lái là hệ thống, không cần con người, không cần vô lăng, nhưng bị giới hạn khu vực.</li>" +
                         "<li><strong>ウ.</strong> <strong>Chủ thể lái là con người (<code>人間</code>)</strong>, hệ thống hỗ trợ (<code>支援</code>) cả vô lăng và ga/phanh (ví dụ: giữ làn).</li>" +
                         "<li><strong>エ.</strong> <strong>Chủ thể lái là con người (<code>人間</code>)</strong>, hệ thống hỗ trợ (<code>支援</code>) một phần (ví dụ: phanh tự động).</li></ul>" +
                         "<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>" +
                         "<p>Các cấp độ tự lái (Ai là chủ thể lái?):</p>" +
                         "<ul><li><strong>Cấp 1 & 2:</strong> <strong>Người (<code>人間</code>)</strong> là chủ thể. Hệ thống chỉ hỗ trợ (<code>支援</code>).</li>" +
                         "<ul><li><strong>Cấp 1 (Lựa chọn エ):</strong> Hỗ trợ 1 trong 2: ga/phanh HOẶC vô lăng (ví dụ: phanh tự động).</li>" +
                         "<li><strong>Cấp 2 (Lựa chọn ウ):</strong> Hỗ trợ cả 2: ga/phanh VÀ vô lăng (ví dụ: giữ làn và bám theo xe trước).</li></ul>" +
                         "<li><strong>Cấp 3, 4, 5:</strong> <strong>Hệ thống (<code>システム</code>)</strong> là chủ thể.</li>" +
                         "<ul><li><strong>Cấp 3 (Lựa chọn ア):</strong> ✅ <strong>Đúng.</strong> Hệ thống tự lái (mắt có thể rời khỏi đường), nhưng <strong>người lái phải sẵn sàng can thiệp</strong> (<code>人間が運転しなければならない</code>) khi được yêu cầu.</li>" +
                         "<li><strong>Cấp 4 (Lựa chọn イ):</strong> ❌ Sai. Hệ thống tự lái hoàn toàn, không cần người can thiệp, nhưng chỉ trong một khu vực/điều kiện nhất định (<code>自動運転できる地域は限られる</code>). (Mô tả 'không cần vô lăng' trong lựa chọn này là sai, đó là đặc điểm của Cấp 5).</li>" +
                         "<li><strong>Cấp 5:</strong> Tự lái mọi lúc mọi nơi, không cần vô lăng, không cần sự can thiệp của con người.</li></ul></ul>" +
                         "<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>" +
                         "<ul><li><strong>Keyword chính:</strong> <strong><code>レベル3</code> (Cấp độ 3)</strong>.</li>" +
                         "<li><strong>Mẹo ghi nhớ:</strong></li>" +
                         "<ul><li><strong>Level 1-2:</strong> Mắt nhìn đường, tay cầm vô lăng (Người lái).</li>" +
                         "<li><strong>Level 3:</strong> Mắt rời đường, tay sẵn sàng (Hệ thống lái, nhưng người phải can thiệp khi cần).</li>" +
                         "<li><strong>Level 4:</strong> Ngủ gật (Hệ thống lái, không cần can thiệp, nhưng có giới hạn khu vực).</li>" +
                         "<li><strong>Level 5:</strong> Không cần vô lăng (Tự lái hoàn toàn).</li></ul></ul>"
      },
      {
        "question": "ある商品を5,000個販売したところ，売上げが6,000万円，利益が400万円となった。商品1個当たりの変動費が7,000円であるとき，利益を1,000万円以上にするためには，少なくともあと何個販売すればよいか。",
        "options": ["500", "1,200", "6,200", "7,500"],
        "answer": 1,
        "explanation": "<h3><strong>Bản dịch</strong></h3>" +
                         "<ul><li><strong>Câu hỏi:</strong> Một sản phẩm bán được 5.000 cái, đạt doanh thu (<code>売上げ</code>) 60 triệu yên và lợi nhuận (<code>利益</code>) 4 triệu yên. Biết biến phí (<code>変動費</code>) trên mỗi sản phẩm là 7.000 yên, để đạt lợi nhuận từ 10 triệu yên trở lên, cần phải bán thêm ít nhất bao nhiêu sản phẩm nữa?</li>" +
                         "<li><strong>ア.</strong> 500</li>" +
                         "<li><strong>イ.</strong> 1,200</li>" +
                         "<li><strong>ウ.</strong> 6,200</li>" +
                         "<li><strong>エ.</strong> 7,500</li></ul>" +
                         "<hr><h3><strong>Phân tích & Tính toán</strong></h3>" +
                         "<p>Đây là bài toán phân tích điểm hòa vốn (CVP). Chúng ta không cần tìm Định phí (<code>固定費</code>) mà chỉ cần tìm Lợi nhuận biên (<code>限界利益</code>).</p>" +
                         "<ol><li><strong>Tính Giá bán (<code>売価</code>) mỗi sản phẩm:</strong></li>" +
                         "<ul><li><code>Giá bán = Tổng doanh thu / Số lượng = 60,000,000 yên / 5,000 sản phẩm = 12,000 yên/sản phẩm</code></li></ul>" +
                         "<li><strong>Tính Lợi nhuận biên (<code>限界利益</code>) mỗi sản phẩm:</strong></li>" +
                         "<ul><li>Lợi nhuận biên là phần 'lãi' thu về trên mỗi sản phẩm bán ra, dùng để bù đắp định phí và tạo ra lợi nhuận.</li>" +
                         "<li><code>Lợi nhuận biên = Giá bán - Biến phí (変動費) = 12,000 - 7,000 = 5,000 yên/sản phẩm</code></li></ul>" +
                         "<li><strong>Tính Lợi nhuận cần kiếm thêm:</strong></li>" +
                         "<ul><li>Lợi nhuận mục tiêu: 10,000,000 yên</li>" +
                         "<li>Lợi nhuận hiện tại: 4,000,000 yên</li>" +
                         "<li><code>Lợi nhuận cần thêm = 10,000,000 - 4,000,000 = 6,000,000 yên</code></li></ul>" +
                         "<li><strong>Tính Số lượng cần bán thêm:</strong></li>" +
                         "<ul><li>(Vì định phí đã được bù đắp bởi 4 triệu lợi nhuận đầu tiên, nên phần lợi nhuận thêm 6 triệu chỉ cần đến từ lợi nhuận biên).</li>" +
                         "<li><code>Số lượng cần thêm = Lợi nhuận cần thêm / Lợi nhuận biên mỗi sản phẩm</code></li>" +
                         "<li><code>= 6,000,000 / 5,000 = 1,200 sản phẩm</code></li></ul></ol>" +
                         "<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>" +
                         "<ul><li><strong>Keyword chính:</strong> <strong><code>変動費</code> (Biến phí), <code>限界利益</code> (Lợi nhuận biên)</strong>.</li>" +
                         "<li><strong>Mẹo ghi nhớ:</strong> Tìm ra 'lãi' trên mỗi sản phẩm là bao nhiêu (<code>Lợi nhuận biên = Giá bán - Biến phí</code>). Sau đó xem cần 'lãi' thêm bao nhiêu tiền, rồi lấy số tiền đó chia cho 'lãi' của một sản phẩm là ra số lượng cần bán thêm.</li></ul>"
      },
      {
        "question": "マーケティング戦略の策定プロセスのうち，自社製品の差別化ポイントを明確化するものはどれか。",
        "options": ["セグメンテーション", "ターゲティング", "プロモーション", "ポジショニング"],
        "answer": 3,
        "explanation": "<h3><strong>Bản dịch</strong></h3>" +
                         "<ul><li><strong>Câu hỏi:</strong> Trong quy trình xây dựng chiến lược marketing, bước nào dùng để làm rõ <strong>điểm khác biệt (<code>差別化</code>ポイント)</strong> của sản phẩm?</li>" +
                         "<li><strong>ア.</strong> Segmentation (Phân khúc)</li>" +
                         "<li><strong>イ.</strong> Targeting (Nhắm mục tiêu)</li>" +
                         "<li><strong>ウ.</strong> Promotion (Xúc tiến)</li>" +
                         "<li><strong>エ.</strong> Positioning (Định vị)</li></ul>" +
                         "<hr><h3><strong>Phân tích TẤT CẢ lựa chọn (Học 1 được 3)</strong></h3>" +
                         "<p>Đây là quy trình <strong>STP</strong> trong marketing, một kiến thức rất cơ bản.</p>" +
                         "<ol><li><strong>Segmentation (<code>セグメンテーション</code>):</strong> Phân khúc thị trường (chia thị trường lớn thành các nhóm nhỏ có đặc điểm chung).</li>" +
                         "<li><strong>Targeting (<code>ターゲティング</code>):</strong> Lựa chọn thị trường mục tiêu (chọn một hoặc vài nhóm để phục vụ).</li>" +
                         "<li><strong>Positioning (<code>ポジショニング</code>):</strong> Định vị sản phẩm trong tâm trí khách hàng mục tiêu.</li></ol>" +
                         "<ul><li><strong>ア. セグメンテーション (Phân khúc):</strong> ❌ Sai. Đây là bước CHIA thị trường, chưa phải là tạo ra sự khác biệt.</li>" +
                         "<li><strong>イ. ターゲティング (Nhắm mục tiêu):</strong> ❌ Sai. Đây là bước CHỌN thị trường, chưa phải là tạo ra sự khác biệt.</li>" +
                         "<li><strong>ウ. プロモーション (Xúc tiến):</strong> ❌ Sai. Đây là một phần của <strong>4P</strong> (quảng bá, truyền thông), là bước sau STP, dùng để truyền thông về sự khác biệt, chứ không phải là bước 'xác định' sự khác biệt.</li>" +
                         "<li><strong>エ. ポジショニング (Định vị):</strong> ✅ <strong>Đúng.</strong> <strong>Định vị (Positioning)</strong> chính là quá trình xây dựng một hình ảnh, một vị thế độc đáo và <strong>khác biệt (<code>差別化</code>)</strong> cho sản phẩm trong tâm trí của khách hàng so với đối thủ cạnh tranh (ví dụ: định vị là 'giá rẻ', 'sang trọng', 'an toàn nhất'...).</li></ul>" +
                         "<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>" +
                         "<ul><li><strong>Keyword chính:</strong> <strong><code>差別化</code> (Sự khác biệt hóa)</strong>.</li>" +
                         "<li><strong>Mẹo ghi nhớ:</strong> Tạo ra một 'vị trí' (Position) khác biệt trong tâm trí khách hàng → <strong>Positioning</strong>.</li></ul>"
      }
    ],
    management: [
      {
        "question": "合意したサービス提供時間帯のうち、実際に顧客がITサービスを利用できた時間の割合で表されるものはどれか。",
        "options": ["可用性", "機能性", "効率性", "使用性"],
        "answer": 0,
        "explanation": "<h3><strong>Bản dịch</strong></h3>" +
                         "<ul><li><strong>Câu hỏi:</strong> Thuật ngữ nào biểu thị <strong>tỷ lệ thời gian</strong> mà khách hàng thực sự có thể sử dụng dịch vụ CNTT trong khoảng thời gian cung cấp dịch vụ đã thỏa thuận?</li>" +
                         "<li><strong>ア.</strong> Tính sẵn sàng (<code>可用性</code>)</li>" +
                         "<li><strong>イ.</strong> Tính năng (<code>機能性</code>)</li>" +
                         "<li><strong>ウ.</strong> Tính hiệu quả (<code>効率性</code>)</li>" +
                         "<li><strong>エ.</strong> Tính dễ sử dụng (<code>使用性</code>)</li></ul>" +
                         "<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>" +
                         "<ul><li><strong>ア. 可用性 (Availability):</strong> ✅ <strong>Đúng.</strong> Đây chính là định nghĩa của 'Tính sẵn sàng' (hay còn gọi là 'uptime'). Nó đo lường tỷ lệ phần trăm thời gian một hệ thống hoạt động và sẵn sàng để người dùng sử dụng.</li>" +
                         "<li><strong>イ. 機能性 (Functionality):</strong> ❌ Sai. Liên quan đến việc hệ thống có cung cấp đầy đủ các chức năng cần thiết hay không (ví dụ: chức năng 'thanh toán').</li>" +
                         "<li><strong>ウ. 効率性 (Efficiency):</strong> ❌ Sai. Liên quan đến việc hệ thống sử dụng tài nguyên (CPU, bộ nhớ, băng thông) hiệu quả như thế nào để thực hiện công việc.</li>" +
                         "<li><strong>エ. 使用性 (Usability):</strong> ❌ Sai. Liên quan đến việc người dùng có cảm thấy dễ dàng, thuận tiện khi thao tác với hệ thống hay không.</li></ul>" +
                         "<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>" +
                         "<ul><li><strong>Keyword chính:</strong> <strong><code>可用性</code> (Tính sẵn sàng), <code>利用できた時間の割合</code> (Tỷ lệ thời gian có thể sử dụng)</strong>.</li>" +
                         "<li><strong>Mẹo ghi nhớ:</strong> <strong>A</strong>vailability = <strong>U</strong>ptime % (Tỷ lệ % hoạt động).</li></ul>"
      },
      {
        "question": "ITサービスマネジメントに関して、次の記述中のa, bに入れる字句の適切な組合せはどれか。<br>a はサービス提供者と顧客との間で合意されたサービス品質に関する合意書である。 a の遵守状況を確認し、ITサービスの品質を維持・改善させるための活動が b である。",
        "options": ["a:NDA b:SCM", "a:NDA b:SLM", "a:SLA b:SCM", "a:SLA b:SLM"],
        "answer": 3,
        "explanation": "<h3><strong>Bản dịch</strong></h3>" +
                         "<ul><li><strong>Câu hỏi:</strong> ... (a) là <strong>văn bản thỏa thuận (<code>合意書</code>)</strong> về chất lượng dịch vụ giữa nhà cung cấp và khách hàng. (b) là <strong>hoạt động (<code>活動</code>)</strong> giám sát việc tuân thủ (a) để duy trì và cải thiện chất lượng dịch vụ CNTT.</li>" +
                         "<li><strong>ア.</strong> a: NDA, b: SCM</li>" +
                         "<li><strong>イ.</strong> a: NDA, b: SLM</li>" +
                         "<li><strong>ウ.</strong> a: SLA, b: SCM</li>" +
                         "<li><strong>エ.</strong> a: SLA, b: SLM</li></ul>" +
                         "<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>" +
                         "<ul><li><strong>Phân tích (a):</strong></li>" +
                         "<ul><li>Văn bản thỏa thuận về chất lượng dịch vụ là <strong>SLA (Service Level Agreement - <code>サービスレベル合意書</code>)</strong>.</li>" +
                         "<li>NDA (Non-Disclosure Agreement) là thỏa thuận bảo mật.</li>" +
                         "<li>=> Loại ア và イ.</li></ul>" +
                         "<li><strong>Phân tích (b):</strong></li>" +
                         "<ul><li>Hoạt động quản lý (Management) dựa trên SLA được gọi là <strong>SLM (Service Level Management - <code>サービスレベル管理</code>)</strong>.</li>" +
                         "<li>SCM (Supply Chain Management) là quản lý chuỗi cung ứng.</li>" +
                         "<li>=> Loại ウ.</li></ul>" +
                         "<li><strong>Kết luận:</strong> Tổ hợp đúng là a: SLA, b: SLM.</li></ul>" +
                         "<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>" +
                         "<ul><li><strong>Keyword chính:</strong> <strong><code>合意書</code> (Văn bản thỏa thuận), <code>活動</code> (Hoạt động)</strong>.</li>" +
                         "<li><strong>Mẹo ghi nhớ (Rất quan trọng):</strong></li>" +
                         "<ul><li><strong>A</strong>greement (Thỏa thuận / <code>合意書</code>) → SL<strong>A</strong></li>" +
                         "<li><strong>M</strong>anagement (Quản lý / <code>活動</code>, <code>管理</code>) → SL<strong>M</strong></li></ul></ul>"
      },
      {
        "question": "情報セキュリティ監査の説明として、最も適切なものはどれか。",
        "options": ["一定の基準に基づいてITシステムの利活用に係る検証・評価を行い、ガバナンスの適切性などに対する保証や改善のための助言を行うもの", "コンピュータの盗難や不正な持出しを物理的に防止し、情報セキュリティを確保するためのツール", "組織体の価値及び組織体への信頼を向上させるために、組織体におけるITシステムの利活用のあるべき姿を示すIT戦略と方針の策定及びその実現のための活動", "組織の情報資産に関わるリスクマネジメントが効果的に実施されているかどうかの検証又は評価"],
        "answer": 3,
        "explanation": "<h3><strong>Bản dịch</strong></h3>" +
                         "<ul><li><strong>Câu hỏi:</strong> Mô tả nào phù hợp nhất với <strong>Kiểm toán an ninh thông tin (<code>情報セキュリティ監査</code>)</strong>?</li>" +
                         "<li><strong>ア.</strong> Đánh giá việc sử dụng CNTT dựa trên tiêu chuẩn, đưa ra lời khuyên về quản trị (governance).</li>" +
                         "<li><strong>イ.</strong> Công cụ ngăn chặn vật lý việc trộm cắp máy tính.</li>" +
                         "<li><strong>ウ.</strong> Hoạt động lập chiến lược và phương châm CNTT để nâng cao giá trị tổ chức.</li>" +
                         "<li><strong>エ.</strong> <strong>Xác minh hoặc đánh giá (<code>検証又は評価</code>)</strong> xem việc <strong>quản lý rủi ro (<code>リスクマネジメント</code>)</strong> liên quan đến tài sản thông tin của tổ chức có được thực hiện một cách hiệu quả hay không.</li></ul>" +
                         "<hr><h3><strong>Phân tích TẤT CẢ lựa chọn (Học 1 được 3)</strong></h3>" +
                         "<ul><li><strong>ア. ❌ Sai.</strong> Đây là mô tả của <strong>Kiểm toán hệ thống (<code>システム監査</code>)</strong> nói chung, tập trung vào quản trị (governance).</li>" +
                         "<li><strong>イ. ❌ Sai.</strong> Đây là một biện pháp an ninh vật lý (ví dụ: khóa Kensington).</li>" +
                         "<li><strong>ウ. ❌ Sai.</strong> Đây là mô tả của <strong>Quản trị CNTT (<code>ITガバナンス</code> - IT Governance)</strong>.</li>" +
                         "<li><strong>エ. ✅ Đúng.</strong> Kiểm toán an ninh thông tin là một nhánh của kiểm toán hệ thống, tập trung cụ thể vào việc <strong>đánh giá</strong> xem các biện pháp <strong>quản lý rủi ro an ninh</strong> có đang hoạt động hiệu quả hay không.</li></ul>" +
                         "<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>" +
                         "<ul><li><strong>Keyword chính:</strong> <strong><code>情報セキュリティ監査</code> (Kiểm toán ANTT)</strong>.</li>" +
                         "<li><strong>Mẹo ghi nhớ:</strong> <strong>Kiểm toán an ninh = Đánh giá (<code>評価</code>) + Quản lý rủi ro (<code>リスクマネジメント</code>)</strong>.</li></ul>"
      },
      {
        "question": "ソフトウェア開発モデルであるアジャイルモデルの特徴に関して、次の記述中のa, bに入れる字句の適切な組合せはどれか。<br>アジャイルモデルとは、要件を確定してから開発を実施するウォーターフォールモデルの a する形で提唱された、 b できるようにソフトウェアを開発するための手法の総称である。",
        "options": ["a:課題を改善 b:開発工程で生じる種々の変更に迅速に対応", "a:課題を改善 b:開発工程を順に実施", "a:特徴を継承 b:開発工程で生じる種々の変更に迅速に対応", "a:特徴を継承 b:開発工程を順に実施"],
        "answer": 0,
        "explanation": "<h3><strong>Bản dịch</strong></h3>" +
                         "<ul><li><strong>Câu hỏi:</strong> ...Mô hình Agile được đề xuất nhằm <strong>(a)</strong> của mô hình Waterfall, và là một phương pháp phát triển phần mềm để có thể <strong>(b)</strong>.</li>" +
                         "<li><strong>ア.</strong> a: Cải thiện vấn đề, b: Phản ứng nhanh với các thay đổi</li>" +
                         "<li><strong>イ.</strong> a: Cải thiện vấn đề, b: Thực hiện tuần tự các công đoạn</li>" +
                         "<li><strong>ウ.</strong> a: Kế thừa đặc điểm, b: Phản ứng nhanh với các thay đổi</li>" +
                         "<li><strong>エ.</strong> a: Kế thừa đặc điểm, b: Thực hiện tuần tự các công đoạn</li></ul>" +
                         "<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>" +
                         "<ul><li><strong>Phân tích (a):</strong> Mô hình Thác nước (Waterfall) có nhược điểm lớn là rất cứng nhắc, khó thay đổi yêu cầu một khi đã chốt. Agile ra đời để <strong>cải thiện các vấn đề (<code>課題を改善</code>)</strong> đó, chứ không phải để 'kế thừa đặc điểm' (<code>特徴を継承</code>). => Loại ウ và エ.</li>" +
                         "<li><strong>Phân tích (b):</strong> Ưu điểm lớn nhất của Agile là khả năng linh hoạt, <strong>phản ứng nhanh chóng với các thay đổi (<code>変更に迅速に対応</code>)</strong> phát sinh trong quá trình phát triển. Việc 'thực hiện tuần tự' (<code>順に実施</code>) là đặc điểm của Waterfall, đối lập với Agile. => Loại イ.</li>" +
                         "<li><strong>Kết luận:</strong> Tổ hợp đúng là ア.</li></ul>" +
                         "<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>" +
                         "<ul><li><strong>Keyword chính:</strong> <strong><code>アジャイル</code> (Agile), <code>ウォーターフォール</code> (Waterfall), <code>変更に迅速に対応</code> (Phản ứng nhanh với thay đổi)</strong>.</li>" +
                         "<li><strong>Mẹo ghi nhớ:</strong> Agile = <strong>Linh hoạt</strong>. Waterfall = <strong>Cứng nhắc</strong>. Agile sinh ra để <strong>cải thiện (<code>改善</code>)</strong> sự cứng nhắc của Waterfall, bằng cách <strong>thích ứng với thay đổi (<code>変更に対応</code>)</strong>.</li></ul>"
      },
      {
        "question": "変更管理委員会が設置されているプロジェクトで変更要求が発生した場合の記述として、最も適切なものはどれか。",
        "options": ["変更管理委員会では、プロジェクトに関わるステークホルダ以外の第三者によって変更要求が審議される。", "変更管理委員会は、コストの増加や期日の延期を理由に変更要求を却下してよい。", "変更管理委員会は、スコープに変更が発生しない範囲で変更要求を受け付けなければならない。", "変更要求は、全てプロジェクトマネージャが承認した後に変更管理委員会で審議される。"],
        "answer": 1,
        "explanation": "<h3><strong>Bản dịch</strong></h3>" +
                         "<ul><li><strong>Câu hỏi:</strong> Mô tả nào là đúng về <strong>Hội đồng kiểm soát thay đổi (<code>変更管理委員会</code> - CCB)</strong> khi có yêu cầu thay đổi?</li>" +
                         "<li><strong>ア.</strong> CCB bao gồm bên thứ ba không liên quan đến các bên liên quan (stakeholders) của dự án.</li>" +
                         "<li><strong>イ.</strong> CCB có quyền <strong>từ chối (<code>却下してよい</code>)</strong> yêu cầu thay đổi với lý do làm tăng chi phí hoặc trễ tiến độ.</li>" +
                         "<li><strong>ウ.</strong> CCB phải chấp nhận các yêu cầu thay đổi, miễn là chúng không làm thay đổi phạm vi (scope).</li>" +
                         "<li><strong>エ.</strong> Mọi yêu cầu thay đổi đều phải được Project Manager (PM) phê duyệt trước, sau đó CCB mới xem xét.</li></ul>" +
                         "<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>" +
                         "<ul><li><strong>ア. ❌ Sai.</strong> CCB (Change Control Board) bao gồm các bên liên quan (stakeholders) chính của dự án, những người có thẩm quyền ra quyết định (ví dụ: đại diện khách hàng, PM, nhà tài trợ).</li>" +
                         "<li><strong>イ. ✅ Đúng.</strong> Vai trò của CCB là xem xét toàn diện tác động của một thay đổi (về chi phí, thời gian, rủi ro, lợi ích...). Nếu họ đánh giá rằng tác động tiêu cực lớn hơn lợi ích mang lại, họ hoàn toàn có quyền <strong>từ chối (<code>却下</code>)</strong> yêu cầu đó.</li>" +
                         "<li><strong>ウ. ❌ Sai.</strong> CCB xem xét tất cả các thay đổi, bao gồm cả những thay đổi làm ảnh hưởng đến phạm vi (scope) và có quyền từ chối bất kỳ thay đổi nào nếu thấy không hợp lý.</li>" +
                         "<li><strong>エ. ❌ Sai.</strong> Khi đã có CCB, PM không có quyền tự phê duyệt các thay đổi (trừ những thay đổi rất nhỏ trong thẩm quyền cho phép). Yêu cầu thay đổi sẽ được gửi trực tiếp đến CCB để xem xét.</li></ul>" +
                         "<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>" +
                         "<ul><li><strong>Keyword chính:</strong> <strong><code>変更管理委員会</code> (Hội đồng kiểm soát thay đổi - CCB)</strong>.</li>" +
                         "<li><strong>Mẹo ghi nhớ:</strong> CCB là 'người gác cổng' của dự án. Họ có toàn quyền 'CHO VÀO' (phê duyệt) hoặc 'TỪ CHỐI' (<strong><code>却下</code></strong>).</li></ul>"
      },
      {
        "question": "システム開発プロジェクトで使用される技法のうち、スケジュール作成に用いる技法として、適切なものだけを全て挙げたものはどれか。<br>a DFD (Data Flow Diagram) b 回帰分析<br>c クリティカルパス法 d プレンデンスダイアグラム法",
        "options": ["a, b", "a, d", "b, c", "c, d"],
        "answer": 3,
        "explanation": "<h3><strong>Bản dịch</strong></h3>" +
                         "<ul><li><strong>Câu hỏi:</strong> Kỹ thuật nào sau đây được dùng để <strong>tạo lịch trình (<code>スケジュール作成</code>)</strong> trong dự án?</li>" +
                         "<li><strong>a.</strong> DFD (Data Flow Diagram)</li>" +
                         "<li><strong>b.</strong> Phân tích hồi quy (<code>回帰分析</code>)</li>" +
                         "<li><strong>c.</strong> Phương pháp Đường găng (<code>クリティカルパス法</code>)</li>" +
                         "<li><strong>d.</strong> Phương pháp Sơ đồ ưu tiên (<code>プレンデンスダイアグラム法</code>)</li></ul>" +
                         "<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>" +
                         "<ul><li><strong>a. DFD (Data Flow Diagram):</strong> ❌ Sai. Dùng để phân tích và thiết kế hệ thống, mô tả <strong>luồng dữ liệu</strong>.</li>" +
                         "<li><strong>b. Phân tích hồi quy (<code>回帰分析</code>):</strong> ❌ Sai. Dùng để phân tích thống kê, dự báo (ví dụ: dự báo chi phí, thời gian) chứ không phải để *tạo* lịch trình.</li>" +
                         "<li><strong>c. Phương pháp Đường găng (Critical Path Method - CPM):</strong> ✅ <strong>Đúng.</strong> Là một kỹ thuật cốt lõi của quản lý lịch trình, dùng để xác định chuỗi công việc dài nhất không thể trì hoãn (đường găng) và tính toán thời gian hoàn thành sớm nhất/muộn nhất của dự án.</li>" +
                         "<li><strong>d. Phương pháp Sơ đồ ưu tiên (Precedence Diagramming Method - PDM):</strong> ✅ <strong>Đúng.</strong> (Còn gọi là Activity-on-Node). Dùng để thể hiện mối quan hệ logic (tuần tự, song song) giữa các công việc (ví dụ: A phải xong thì B mới bắt đầu). Đây là nền tảng để tạo ra sơ đồ mạng dự án (project network diagram) và lập lịch.</li></ul>" +
                         "<p>=> Vậy c và d là các kỹ thuật dùng để lập lịch.</p>" +
                         "<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>" +
                         "<ul><li><strong>Keyword chính:</strong> <strong><code>スケジュール作成</code> (Tạo lịch trình)</strong>.</li>" +
                         "<li><strong>Mẹo ghi nhớ:</strong> Lập lịch = Tìm **Đường đi (<code>パス</code> - Path)** + Xác định **Thứ tự ưu tiên (<code>プレンデンス</code> - Precedence)**.</li></ul>"
      },
      {
        "question": "床下にネットワーク配線などのために一定の高さの空間をとり，容易に取り外しが可能なパネルを床板として並べたものはどれか。",
        "options": ["フリーアクセスフロア", "フリーアドレス", "フリースペース", "フリースポット"],
        "answer": 0,
        "explanation": "<h3><strong>Bản dịch</strong></h3>" +
                         "<ul><li><strong>Câu hỏi:</strong> Loại sàn nào có một <strong>khoảng không bên dưới (<code>床下</code>)</strong> để <strong>đi dây (<code>配線</code>)</strong> mạng và được lắp ghép từ các tấm panel có thể tháo rời dễ dàng?</li>" +
                         "<li><strong>ア.</strong> Free Access Floor (Sàn truy cập tự do)</li>" +
                         "<li><strong>イ.</strong> Free Address (Địa chỉ tự do)</li>" +
                         "<li><strong>ウ.</strong> Free Space (Không gian tự do)</li>" +
                         "<li><strong>エ.</strong> Free Spot (Điểm tự do)</li></ul>" +
                         "<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>" +
                         "<ul><li><strong>ア. フリーアクセスフロア (Free Access Floor):</strong> ✅ <strong>Đúng.</strong> Hay còn gọi là Sàn nâng kỹ thuật (Raised Floor). Đây chính là loại sàn được thiết kế để tạo không gian đi dây và các hệ thống kỹ thuật (điều hòa...) bên dưới, cho phép 'truy cập' (Access) vào hệ thống dây một cách 'tự do' (Free).</li>" +
                         "<li><strong>イ. フリーアドレス (Free Address):</strong> ❌ Sai. Là mô hình văn phòng không có chỗ ngồi cố định, nhân viên có thể ngồi bất cứ đâu.</li>" +
                         "<li><strong>ウ. フリースペース (Free Space):</strong> ❌ Sai. Là không gian sinh hoạt chung, khu vực nghỉ ngơi trong văn phòng.</li>" +
                         "<li><strong>エ. フリースポット (Free Spot):</strong> ❌ Sai. Là điểm truy cập Wi-Fi công cộng (thường là miễn phí).</li></ul>" +
                         "<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>" +
                         "<ul><li><strong>Keyword chính:</strong> <strong><code>床下</code> (Dưới sàn), <code>配線</code> (Đi dây)</strong>.</li>" +
                         "<li><strong>Mẹo ghi nhớ:</strong> Sàn để 'truy cập' (Access) vào hệ thống dây bên dưới → <strong>Free Access Floor</strong>.</li></ul>"
      },
      {
        "question": "営業部門の営業員が出張する際の出張旅費の手続に関して、組織間でけん制を日常的に実施している状況の記述として、最も適切なものはどれか。",
        "options": ["営業員が出張後に経理部門に提出した旅費精算の書類と証票類について、経理担当者が適切な内容であることを審査し、経理課長が承認する。", "営業員が出張後に旅費の精算を行い、上長が承認を行う。経理部門では承認済みであるので支払を行う。", "営業員は出張の事前申請を行って上長の承認を得た後に、切符や宿泊施設の手配を旅行会社に依頼する。", "会計年度における営業部門の旅費精算の書類と証票類から、監査人がサンプリングして、営業員の処理内容の適切性を確認する。"],
        "answer": 0,
        "explanation": "<h3><strong>Bản dịch</strong></h3>" +
                         "<ul><li><strong>Câu hỏi:</strong> Mô tả nào thể hiện tình huống có sự <strong>kiểm soát chéo (<code>けん制</code>) giữa các bộ phận (<code>組織間</code>)</strong> trong quy trình thanh toán chi phí công tác?</li>" +
                         "<li><strong>ア.</strong> NV kinh doanh nộp hồ sơ cho phòng Kế toán. NV kế toán kiểm tra, Trưởng phòng kế toán phê duyệt.</li>" +
                         "<li><strong>イ.</strong> NV kinh doanh làm thanh toán, Sếp (kinh doanh) phê duyệt. Phòng kế toán chỉ chi trả vì đã được duyệt.</li>" +
                         "<li><strong>ウ.</strong> NV kinh doanh xin phép sếp (kinh doanh), sau đó yêu cầu công ty du lịch đặt vé.</li>" +
                         "<li><strong>エ.</strong> Kiểm toán viên lấy mẫu ngẫu nhiên để kiểm tra hồ sơ vào cuối năm.</li></ul>" +
                         "<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>" +
                         "<p><strong>Kiểm soát chéo (<code>けん制</code>)</strong> (hay Phân tách nhiệm vụ - Segregation of Duties) là việc một quy trình được xử lý và kiểm tra bởi ít nhất hai bộ phận/cá nhân độc lập với nhau để ngăn ngừa sai sót và gian lận. Từ khóa là <strong><code>組織間</code> (giữa các bộ phận)</strong>.</p>" +
                         "<ul><li><strong>ア. ✅ Đúng.</strong> Quy trình này có sự phân tách rõ ràng: <strong>Phòng Kinh doanh</strong> (người tạo yêu cầu) và <strong>Phòng Kế toán</strong> (người kiểm tra và phê duyệt). Có sự tham gia và kiểm tra của một bộ phận độc lập (kế toán), đây chính là kiểm soát chéo.</li>" +
                         "<li><strong>イ. ❌ Sai.</strong> Toàn bộ quy trình (tạo, duyệt) đều diễn ra <strong>trong nội bộ phòng Kinh doanh</strong> (NV và sếp). Phòng kế toán chỉ thực hiện chi trả mà không kiểm tra, do đó không có sự kiểm soát chéo hiệu quả.</li>" +
                         "<li><strong>ウ. ❌ Sai.</strong> Tương tự, đây là quy trình nội bộ của phòng Kinh doanh.</li>" +
                         "<li><strong>エ. ❌ Sai.</strong> Đây là hoạt động <strong>Kiểm toán (<code>監査</code>)</strong>, là việc kiểm tra sau sự kiện, không phải là một hoạt động kiểm soát chéo (<code>けん制</code>) diễn ra hàng ngày trong quy trình.</li></ul>" +
                         "<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>" +
                         "<ul><li><strong>Keyword chính:</strong> <strong><code>けん制</code> (Kiểm soát chéo), <code>組織間</code> (Giữa các bộ phận)</strong>.</li>" +
                         "<li><strong>Mẹo ghi nhớ:</strong> Kiểm soát chéo = Phải có ít nhất **2 bộ phận khác nhau** cùng tham gia (một bên làm, một bên kiểm tra). (Ví dụ: Kinh doanh vs Kế toán).</li></ul>"
      },
      {
        "question": "システム開発の早い段階で、目に見える形で利用者の要求が確認できるように確認用のソフトウェアを作成するソフトウェア開発モデルとして、最も適切なものはどれか。",
        "options": ["アジャイル", "ウォーターフォール", "スパイラル", "プロトタイピング"],
        "answer": 3,
        "explanation": "<h3><strong>Bản dịch</strong></h3>" +
                         "<ul><li><strong>Câu hỏi:</strong> Mô hình phát triển phần mềm nào tạo ra một phiên bản phần mềm để kiểm tra <strong>(<code>確認用のソフトウェア</code>)</strong> ở <strong>giai đoạn sớm (<code>早い段階</code>)</strong>, giúp người dùng xác nhận yêu cầu một cách trực quan <strong>(<code>目に見える形で</code>)</strong>?</li>" +
                         "<li><strong>ア.</strong> Agile (Linh hoạt)</li>" +
                         "<li><strong>イ.</strong> Waterfall (Thác nước)</li>" +
                         "<li><strong>ウ.</strong> Spiral (Xoắn ốc)</li>" +
                         "<li><strong>エ.</strong> Prototyping (Làm mẫu thử)</li></ul>" +
                         "<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>" +
                         "<ul><li><strong>ア. アジャイル (Agile):</strong> ❌ Sai. Agile cũng tạo ra sản phẩm chạy được ở các giai đoạn ngắn, nhưng mục đích của nó là 'phát triển tăng dần'.</li>" +
                         "<li><strong>イ. ウォーターフォール (Waterfall):</strong> ❌ Sai. Mô hình Thác nước làm tuần tự, người dùng chỉ thấy sản phẩm ở giai đoạn cuối cùng.</li>" +
                         "<li><strong>ウ. スパイラル (Spiral):</strong> ❌ Sai. Mô hình Xoắn ốc là sự kết hợp của Waterfall và quản lý rủi ro, lặp đi lặp lại qua các vòng xoắn.</li>" +
                         "<li><strong>エ. プロトタイピング (Prototyping):</strong> ✅ <strong>Đúng.</strong> Đây là mô hình tập trung vào việc xây dựng một <strong>bản mẫu (prototype)</strong> nhanh chóng (thường chỉ có giao diện, chưa có logic phức tạp) để lấy phản hồi từ người dùng, làm rõ các yêu cầu không chắc chắn trước khi xây dựng sản phẩm hoàn chỉnh. Điều này khớp hoàn toàn với mô tả 'tạo phần mềm để xác nhận' ở 'giai đoạn sớm'.</li></ul>" +
                         "<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>" +
                         "<ul><li><strong>Keyword chính:</strong> <strong><code>確認用のソフトウェア</code> (Phần mềm để xác nhận), <code>早い段階</code> (Giai đoạn sớm)</strong>.</li>" +
                         "<li><strong>Mẹo ghi nhớ:</strong> Tạo 'bản mẫu' → <strong>Prototype</strong>.</li></ul>"
      },
      {
        "question": "計画時の予算が2,000万円で、40日間で100本のプログラムを作成するプロジェクトがある。プロジェクトが20日経過した時点で全体の40％である40本のプログラムが完成し、1,000万円のコストが掛かった。プロジェクトの指標を次の評価式で算出する場合、プロジェクトの指標として適切な組合せはどれか。<br>【評価式】<br>スケジュール（％）：（完成本数÷評価時点での計画本数）×100<br>コスト（％）：（実際コスト÷計画コスト）×100",
        "options": ["スケジュール80% コスト125%", "スケジュール80% コスト100%", "スケジュール90% コスト125%", "スケジュール90% コスト100%"],
        "answer": 0,
        "explanation": "<h3><strong>Bản dịch</strong></h3>" +
                         "<ul><li><strong>Câu hỏi:</strong> Dự án có kế hoạch: 100 chương trình / 40 ngày / 2,000 vạn yên. Thực tế tại ngày thứ 20: 40 chương trình hoàn thành / 1,000 vạn yên đã tiêu. Tính Lịch trình (%) và Chi phí (%).</li>" +
                         "<li><strong>Công thức:</strong></li>" +
                         "<ul><li>Lịch trình (%) = (Số lượng hoàn thành thực tế / Số lượng kế hoạch tại thời điểm) × 100</li>" +
                         "<li>Chi phí (%) = (Chi phí thực tế / Chi phí kế hoạch *cho phần đã hoàn thành*) × 100</li></ul></ul>" +
                         "<hr><h3><strong>Phân tích & Tính toán</strong></h3>" +
                         "<ol><li><strong>Tính chỉ số Lịch trình (スケジュール):</strong></li>" +
                         "<ul><li><strong>Số lượng hoàn thành thực tế:</strong> 40 chương trình.</li>" +
                         "<li><strong>Số lượng theo kế hoạch tại thời điểm 20 ngày:</strong> Đã qua 20/40 = 50% thời gian. Vậy, số lượng kế hoạch phải là 100 chương trình × 50% = 50 chương trình.</li>" +
                         "<li><code>Chỉ số Lịch trình = (Thực tế / Kế hoạch) × 100 = (40 / 50) × 100 = 80%</code>. (Nghĩa là đang chậm tiến độ).</li></ul>" +
                         "<li><strong>Tính chỉ số Chi phí (コスト):</strong></li>" +
                         "<ul><li><strong>Chi phí thực tế:</strong> 1,000 vạn yên.</li>" +
                         "<li><strong>Chi phí theo kế hoạch cho công việc đã hoàn thành (Earned Value):</strong></li>" +
                         "<ul><li>Chi phí kế hoạch cho mỗi chương trình = 2,000 vạn / 100 chương trình = 20 vạn/chương trình.</li>" +
                         "<li>Chi phí kế hoạch cho 40 chương trình đã hoàn thành = 40 chương trình × 20 vạn = 800 vạn yên.</li></ul>" +
                         "<li><code>Chỉ số Chi phí = (Thực tế / Kế hoạch cho phần đã hoàn thành) × 100 = (1,000 / 800) × 100 = 125%</code>. (Nghĩa là đang vượt chi phí).</li></ul></ol>" +
                         "<p>=> Kết quả: Lịch trình 80%, Chi phí 125%.</p>" +
                         "<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>" +
                         "<ul><li><strong>Mẹo ghi nhớ (EVM - Earned Value Management):</strong></li>" +
                         "<ul><li><strong>Lịch trình (SPI):</strong> So sánh <strong>SỐ LƯỢNG</strong>. (Tôi làm được 40 cái, đáng lẽ tôi phải làm 50 cái -> chậm).</li>" +
                         "<li><strong>Chi phí (CPI):</strong> So sánh <strong>SỐ TIỀN</strong> cho cùng một khối lượng công việc. (Để làm 40 cái, đáng lẽ tôi chỉ tiêu 800, nhưng tôi đã tiêu 1000 -> lãng phí).</li>" +
                         "<li><em>Lưu ý: Đề bài định nghĩa Chi phí (%) là AC/EV. Nếu < 100% là tốt, > 100% là xấu (vượt chi).</em></li></ul></ul>"
      },
      {
        "question": "開発が完了したソフトウェアを本番環境にインストールする手順を明確にし、それを実施する工程として、適切なものはどれか。",
        "options": ["ソフトウェア統合", "ソフトウェア導入", "妥当性確認", "利用者教育"],
        "answer": 1,
        "explanation": "<h3><strong>Bản dịch</strong></h3>" +
                         "<ul><li><strong>Câu hỏi:</strong> Công đoạn nào làm rõ các bước và thực hiện việc <strong>cài đặt (<code>インストールする</code>)</strong> phần mềm đã phát triển xong vào <strong>môi trường chính thức (<code>本番環境</code>)</strong>?</li>" +
                         "<li><strong>ア.</strong> Tích hợp phần mềm (<code>ソフトウェア統合</code>)</li>" +
                         "<li><strong>イ.</strong> Triển khai phần mềm (<code>ソフトウェア導入</code>)</li>" +
                         "<li><strong>ウ.</strong> Xác nhận tính hợp lệ (<code>妥当性確認</code>)</li>" +
                         "<li><strong>エ.</strong> Đào tạo người dùng (<code>利用者教育</code>)</li></ul>" +
                         "<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>" +
                         "<ul><li><strong>ア. ソフトウェア統合 (Software Integration):</strong> ❌ Sai. Là công đoạn tích hợp các module, các phần nhỏ của phần mềm lại với nhau để kiểm thử (Integration Test), thường diễn ra *trước khi* đưa lên môi trường chính thức.</li>" +
                         "<li><strong>イ. ソフトウェア導入 (Software Deployment/Implementation):</strong> ✅ <strong>Đúng.</strong> Đây chính là quá trình 'go-live', bao gồm việc lập kế hoạch, chuẩn bị và thực hiện cài đặt phần mềm vào môi trường production (<code>本番環境</code>) để người dùng cuối bắt đầu sử dụng.</li>" +
                         "<li><strong>ウ. 妥当性確認 (Validation):</strong> ❌ Sai. Là một hoạt động kiểm thử (testing) để xác nhận xem phần mềm có đáp ứng đúng nhu cầu của người dùng hay không (ví dụ: UAT - User Acceptance Test).</li>" +
                         "<li><strong>エ. 利用者教育 (User Training):</strong> ❌ Sai. Là một công đoạn riêng, đào tạo người dùng cách sử dụng, thường diễn ra song song hoặc ngay trước khi triển khai (<code>導入</code>).</li></ul>" +
                         "<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>" +
                         "<ul><li><strong>Keyword chính:</strong> <strong><code>本番環境にインストール</code> (Cài đặt vào môi trường chính thức)</strong>.</li>" +
                         "<li><strong>Mẹo ghi nhớ:</strong> Đưa vào sử dụng, 'cài đặt' cho người ta dùng → <strong><code>導入</code> (Triển khai / Implementation)</strong>.</li></ul>"
      },
      {
        "question": "利用者が銀行のATMのパネルを操作して入金処理を行う。この操作の要件を定義するときに、ソフトウェア開発の品質特性である使用性を考慮すべきインタフェースとして、最も適切なものはどれか。",
        "options": ["OSとパネルのインタフェース", "ソフトウェア間のインタフェース", "ハードウェアとOSのインタフェース", "利用者とパネルのインタフェース"],
        "answer": 3,
        "explanation": "<h3><strong>Bản dịch</strong></h3>" +
                         "<ul><li><strong>Câu hỏi:</strong> Khi định nghĩa yêu cầu cho thao tác gửi tiền tại ATM, giao diện (interface) nào cần phải xem xét đến đặc tính chất lượng <strong>Tính dễ sử dụng (<code>使用性</code> - Usability)</strong>?</li>" +
                         "<li><strong>ア.</strong> Giao diện giữa OS và Panel (Bảng điều khiển)</li>" +
                         "<li><strong>イ.</strong> Giao diện giữa các phần mềm</li>" +
                         "<li><strong>ウ.</strong> Giao diện giữa Phần cứng và OS</li>" +
                         "<li><strong>エ.</strong> Giao diện giữa Người dùng và Panel (<code>利用者とパネル</code>)</li></ul>" +
                         "<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>" +
                         "<p><strong>Tính dễ sử dụng (<code>使用性</code> - Usability)</strong> là một đặc tính chất lượng liên quan trực tiếp đến trải nghiệm của <strong>người dùng cuối (<code>利用者</code>)</strong>: Họ có thấy dễ học, dễ sử dụng, dễ nhớ, và ít mắc lỗi không?</p>" +
                         "<ul><li><strong>ア, イ, ウ. ❌ Sai.</strong> Các giao diện giữa OS-Panel, Phần mềm-Phần mềm, Phần cứng-OS là các giao diện kỹ thuật bên trong hệ thống. Người dùng không tương tác trực tiếp với chúng. Chúng quan trọng cho 'Tính hiệu quả' (<code>効率性</code>) hoặc 'Khả năng bảo trì' (<code>保守性</code>), nhưng không phải 'Tính dễ sử dụng'.</li>" +
                         "<li><strong>エ. ✅ Đúng.</strong> <strong>Giao diện giữa người dùng và bảng điều khiển (<code>利用者とパネルのインタフェース</code>)</strong> là nơi người dùng tương tác trực tiếp (nhìn màn hình, bấm nút). Các yếu tố như bố cục nút bấm, độ rõ ràng của chỉ dẫn trên màn hình... quyết định hệ thống có dễ sử dụng hay không.</li></ul>" +
                         "<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>" +
                         "<ul><li><strong>Keyword chính:</strong> <strong><code>使用性</code> (Usability), <code>利用者</code> (Người dùng)</strong>.</li>" +
                         "<li><strong>Mẹo ghi nhớ:</strong> <strong>U</strong>sability (Tính dễ sử dụng) là về <strong>U</strong>ser (<strong><code>利用者</code></strong>). Hãy tìm đáp án có sự tương tác trực tiếp của **người dùng**.</li></ul>"
      },
      {
        "question": "顧客から委託されたシステム開発プロジェクトのスコープの対象として、適切なものだけを全て挙げたものはどれか。<br>a プロジェクトで作成する成果物<br>b プロジェクトで使用する市販のスケジュール管理ツール<br>c プロジェクトの要求事項を顧客が記載した文書",
        "options": ["a", "a,b", "b,c", "c"],
        "answer": 0,
        "explanation": "<h3><strong>Bản dịch</strong></h3>" +
                         "<ul><li><strong>Câu hỏi:</strong> Đâu là đối tượng thuộc <strong>Phạm vi (<code>スコープ</code> - Scope)</strong> của một dự án phát triển hệ thống?</li>" +
                         "<li><strong>a.</strong> Các sản phẩm bàn giao (<code>成果物</code>) được tạo ra trong dự án.</li>" +
                         "<li><strong>b.</strong> Công cụ quản lý lịch trình thương mại (ví dụ: MS Project) được sử dụng trong dự án.</li>" +
                         "<li><strong>c.</strong> Tài liệu yêu cầu (<code>要求事項</code>) do khách hàng cung cấp.</li></ul>" +
                         "<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>" +
                         "<p><strong>Phạm vi (Scope)</strong> của dự án định nghĩa TẤT CẢ công việc cần làm và CHỈ những công việc cần làm để tạo ra sản phẩm, dịch vụ, hoặc kết quả theo yêu cầu.</p>" +
                         "<ul><li><strong>a. ✅ Thuộc Scope.</strong> Các sản phẩm bàn giao (<code>成果物</code>) (ví dụ: phần mềm, tài liệu thiết kế, tài liệu hướng dẫn) là kết quả đầu ra, là phần cốt lõi của phạm vi dự án.</li>" +
                         "<li><strong>b. ❌ Ngoài Scope.</strong> Các công cụ nội bộ (như MS Project, Jira, Slack...) mà đội dự án sử dụng để quản lý và làm việc không phải là thứ sẽ được bàn giao cho khách hàng, do đó chúng nằm ngoài phạm vi.</li>" +
                         "<li><strong>c. ❌ Ngoài Scope.</strong> Tài liệu yêu cầu là <strong>đầu vào (input)</strong> để xác định phạm vi, chứ bản thân nó không phải là đối tượng của phạm vi (tức là không phải thứ mà dự án 'tạo ra').</li></ul>" +
                         "<p>Vậy, chỉ có (a) là thuộc phạm vi dự án.</p>" +
                         "<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>" +
                         "<ul><li><strong>Keyword chính:</strong> <strong><code>スコープ</code> (Scope)</strong>.</li>" +
                         "<li><strong>Mẹo ghi nhớ:</strong> Scope = <strong>Những gì bạn sẽ GIAO cho khách hàng (<code>成果物</code>)</strong>. (Không bao gồm công cụ nội bộ hay tài liệu đầu vào).</li></ul>"
      },
      {
        "question": "クラウドサービスを提供するA社では、操作に関する質問に対して、サービスデスクのオペレーターが電話で対応するだけでなく、ホームページ上にFAQを公開している。サービスデスクの受付時間は午前9時から午後6時までである。このたびサービスデスクのサービスレベルを向上させるために、顧客向けのチャットボットを導入することにした。チャットボット導入の効果として、最も適切なものはどれか。",
        "options": ["オペレーターのチャットのスキルが向上する。", "オペレーターの電話対応のスキルが向上する。", "問合せの受付時間を拡大することが可能になる。", "ホームページ上に掲載しているFAQの内容が充実する。"],
        "answer": 2,
        "explanation": "<h3><strong>Bản dịch</strong></h3>" +
                         "<ul><li><strong>Câu hỏi:</strong> Một Service Desk hiện đang hoạt động từ 9h đến 18h. Việc triển khai thêm một chatbot sẽ mang lại hiệu quả gì?</li>" +
                         "<li><strong>ア.</strong> Kỹ năng chat của nhân viên (Operator) sẽ tăng lên.</li>" +
                         "<li><strong>イ.</strong> Kỹ năng nghe điện thoại của nhân viên sẽ tăng lên.</li>" +
                         "<li><strong>ウ.</strong> Có thể <strong>mở rộng thời gian tiếp nhận câu hỏi (<code>受付時間を拡大</code>)</strong>.</li>" +
                         "<li><strong>エ.</strong> Nội dung của FAQ trên trang chủ sẽ trở nên phong phú hơn.</li></ul>" +
                         "<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>" +
                         "<ul><li><strong>ア, イ. ❌ Sai.</strong> Chatbot sẽ xử lý các câu hỏi đơn giản, lặp đi lặp lại. Điều này làm *giảm* số lượng cuộc gọi/chat mà nhân viên phải xử lý, do đó không trực tiếp nâng cao kỹ năng của họ (thậm chí có thể làm giảm cơ hội thực hành).</li>" +
                         "<li><strong>ウ. ✅ Đúng.</strong> Lợi ích lớn nhất của chatbot (một robot phần mềm) là nó có thể hoạt động <strong>24/7</strong> mà không cần nghỉ ngơi. Điều này cho phép công ty <strong>mở rộng thời gian tiếp nhận câu hỏi (<code>受付時間を拡大</code>)</strong> ra ngoài giờ hành chính (9h-18h), giúp khách hàng được hỗ trợ bất cứ lúc nào.</li>" +
                         "<li><strong>エ. ❌ Sai.</strong> Chatbot có thể sử dụng dữ liệu từ FAQ để trả lời, nhưng việc triển khai nó không tự động làm cho nội dung FAQ trở nên phong phú hơn. (Ngược lại, có thể phải làm FAQ phong phú hơn thì chatbot mới hoạt động tốt).</li></ul>" +
                         "<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>" +
                         "<ul><li><strong>Keyword chính:</strong> <strong><code>チャットボット導入の効果</code> (Hiệu quả của việc triển khai chatbot)</strong>.</li>" +
                         "<li><strong>Mẹo ghi nhớ:</strong> Chatbot = Robot → Hoạt động **24/7** → <strong>Mở rộng thời gian (<code>時間拡大</code>)</strong>.</li></ul>"
      },
      {
        "question": "チャットボットの説明として、最も適切なものはどれか。",
        "options": ["質問に対して、ソフトウェアがリアルタイムで自動応答する仕組み", "センサーを搭載した機器や制御装置が直接インターネットにつながり、お互いに情報をやり取りする仕組み", "人間に代わって荷物を運ぶなどの作業を行う機械的な仕組み", "ルール化された定型的な操作を人間の代わりにソフトウェアが自動で行う仕組み"],
        "answer": 0,
        "explanation": "<h3><strong>Bản dịch</strong></h3>" +
                         "<ul><li><strong>Câu hỏi:</strong> Mô tả nào phù hợp nhất với <strong>Chatbot</strong>?</li>" +
                         "<li><strong>ア.</strong> Cơ chế mà phần mềm <strong>tự động trả lời (<code>自動応答</code>)</strong> các <strong>câu hỏi (<code>質問</code>)</strong> theo thời gian thực.</li>" +
                         "<li><strong>イ.</strong> Cơ chế mà các thiết bị có cảm biến kết nối Internet và trao đổi thông tin với nhau.</li>" +
                         "<li><strong>ウ.</strong> Cơ chế máy móc (cơ khí) thực hiện các công việc thay con người như vận chuyển hàng hóa.</li>" +
                         "<li><strong>エ.</strong> Cơ chế mà phần mềm tự động thực hiện các thao tác lặp lại, có quy tắc thay cho con người.</li></ul>" +
                         "<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>" +
                         "<ul><li><strong>ア. ✅ Đúng.</strong> <strong>Chatbot</strong> là một chương trình phần mềm (robot) được thiết kế để <strong>trò chuyện (Chat)</strong>, tức là <strong>tự động trả lời (<code>自動応答</code>)</strong> các <strong>câu hỏi (<code>質問</code>)</strong> của người dùng, mô phỏng một cuộc hội thoại.</li>" +
                         "<li><strong>イ. ❌ Sai.</strong> Các thiết bị kết nối Internet để trao đổi thông tin là <strong>IoT (Internet of Things)</strong>.</li>" +
                         "<li><strong>ウ. ❌ Sai.</strong> Máy móc thay con người làm việc vật lý (cơ khí) là <strong>Robot công nghiệp</strong> (dùng trong <code>FA</code> - Factory Automation).</li>" +
                         "<li><strong>エ. ❌ Sai.</strong> Phần mềm tự động hóa các thao tác lặp lại trên máy tính (như click chuột, nhập liệu) là <strong>RPA (Robotic Process Automation)</strong>.</li></ul>" +
                         "<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>" +
                         "<ul><li><strong>Keyword chính:</strong> <strong><code>チャットボット</code> (Chatbot)</strong>.</li>" +
                         "<li><strong>Mẹo ghi nhớ:</strong> <strong>Chat</strong>bot → Dùng để <strong>trò chuyện (Chat)</strong> và <strong>trả lời câu hỏi (<code>質問</code>)</strong>.</li></ul>"
      },
      {
        "question": "社内で開発及び運用を行っている経理システムの内部監査を実施するとき、システム監査人として、最も適切なものはどれか。",
        "options": ["経理システムの運用担当者", "経理システムの開発を担当した委託会社の従業員", "経理システムの利用者である経理担当者", "経理とITの知識を有する経営者直轄組織の従業員"],
        "answer": 3,
        "explanation": "<h3><strong>Bản dịch</strong></h3>" +
                         "<ul><li><strong>Câu hỏi:</strong> Ai là người phù hợp nhất để làm <strong>kiểm toán viên nội bộ (<code>内部監査</code>)</strong> cho hệ thống kế toán của công ty?</li>" +
                         "<li><strong>ア.</strong> Người vận hành hệ thống kế toán.</li>" +
                         "<li><strong>イ.</strong> Nhân viên của công ty outsource đã phát triển hệ thống.</li>" +
                         "<li><strong>ウ.</strong> Kế toán viên (người dùng) của hệ thống kế toán.</li>" +
                         "<li><strong>エ.</strong> Nhân viên thuộc một <strong>tổ chức trực thuộc ban lãnh đạo (<code>経営者直轄組織</code>)</strong>, có kiến thức về kế toán và CNTT.</li></ul>" +
                         "<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>" +
                         "<p>Nguyên tắc quan trọng nhất của kiểm toán (cả nội bộ và độc lập) là <strong>tính độc lập và khách quan (<code>独立性</code>, <code>客観性</code>)</strong>. Kiểm toán viên không được có liên quan trực tiếp đến đối tượng bị kiểm toán.</p>" +
                         "<ul><li><strong>ア, イ, ウ. ❌ Sai.</strong> Người vận hành, người phát triển, và người sử dụng đều là các bên liên quan trực tiếp, không thể tự kiểm toán chính mình một cách khách quan. (Họ là 'người trong cuộc').</li>" +
                         "<li><strong>エ. ✅ Đúng.</strong> Một nhân viên thuộc một <strong>tổ chức trực thuộc ban lãnh đạo (<code>経営者直轄組織</code>)</strong> (ví dụ: Ban kiểm soát nội bộ, Phòng kiểm toán nội bộ) là người phù hợp nhất. Họ có 2 đặc điểm: 1. Có kiến thức chuyên môn, 2. <strong>Độc lập</strong> với các bộ phận bị kiểm toán (phòng kế toán, phòng CNTT), đảm bảo tính khách quan.</li></ul>" +
                         "<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>" +
                         "<ul><li><strong>Keyword chính:</strong> <strong><code>内部監査</code> (Kiểm toán nội bộ)</strong>.</li>" +
                         "<li><strong>Mẹo ghi nhớ:</strong> Kiểm toán viên phải là <strong>'người ngoài cuộc'</strong> - tức là không thuộc các bộ phận liên quan trực tiếp (<code>関与しない</code>).</li></ul>"
      },
      {
        "question": "A社は会計システムの再構築のプロジェクトを立ち上げ、システム開発をB社に外部委託している。B社から納品される成果物の検収において、プロジェクトの品質管理に係る手続を遵守しているかどうかのシステム監査を行う監査人として、適切な者は誰か。",
        "options": ["会計システムの再構築に関与しないA社の管理部門のリーダー", "会計システムの再構築を担当するA社のプロジェクトマネージャ", "会計システムの再構築を担当するB社のシステム開発リーダー", "会計システムの再構築を担当するB社の品質管理責任者"],
        "answer": 0,
        "explanation": "<h3><strong>Bản dịch</strong></h3>" +
                         "<ul><li><strong>Câu hỏi:</strong> (Tương tự câu trước) Ai là người phù hợp để làm kiểm toán viên đánh giá việc nghiệm thu sản phẩm từ nhà thầu B?</li>" +
                         "<li><strong>ア.</strong> Một trưởng phòng của công ty A (bên mua) <strong>không tham gia (<code>関与しない</code>)</strong> vào dự án.</li>" +
                         "<li><strong>イ.</strong> PM của công ty A (bên mua), người phụ trách dự án.</li>" +
                         "<li><strong>ウ.</strong> Trưởng nhóm phát triển của công ty B (bên bán).</li>" +
                         "<li><strong>エ.</strong> Trưởng phòng chất lượng của công ty B (bên bán).</li></ul>" +
                         "<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>" +
                         "<p>Tiếp tục áp dụng nguyên tắc <strong>tính độc lập</strong>.</p>" +
                         "<ul><li><strong>ア. ✅ Đúng.</strong> Một trưởng phòng của công ty A (bên mua) <strong>không tham gia vào dự án (<code>関与しない</code>)</strong> là người có vị thế độc lập và khách quan để thực hiện việc kiểm toán này.</li>" +
                         "<li><strong>イ, ウ, エ. ❌ Sai.</strong> Tất cả những người này (PM của A, trưởng nhóm phát triển của B, trưởng phòng chất lượng của B) đều là những người <strong>trực tiếp tham gia (<code>担当する</code>)</strong> vào dự án. Họ không thể tự kiểm toán công việc của mình một cách khách quan.</li></ul>" +
                         "<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>" +
                         "<ul><li><strong>Keyword chính:</strong> <strong><code>監査人</code> (Kiểm toán viên)</strong>.</li>" +
                         "<li><strong>Mẹo ghi nhớ:</strong> Nguyên tắc vàng của kiểm toán: <strong>Độc lập! (<code>関与しない</code>)</strong>. Hãy tìm người 'không liên quan'.</li></ul>"
      },
      {
        "question": "内部統制の基本的要素の一つである'ITへの対応'に関する記述として、最も適切なものはどれか。",
        "options": ["ITを活用すると業務処理を迅速化でき、不注意によるミスを全て防止できる。", "既存のITの利用者の拡大や、使い方の変更などで組織目標を達成できるのであれば、新たなITシステムの導入やITシステムの更新を強いるものではない。", "全ての業務プロセスをITで自動化することによって、業務プロセスを大幅に修正することが容易になる。", "組織の業務がITに大きく依存すると、内部統制の目的を達成することが難しくなる。"],
        "answer": 1,
        "explanation": "<h3><strong>Bản dịch</strong></h3>" +
                         "<ul><li><strong>Câu hỏi:</strong> Mô tả nào là phù hợp về yếu tố 'Ứng phó với CNTT' (<code>ITへの対応</code>) trong <strong>Kiểm soát nội bộ (<code>内部統制</code>)</strong>?</li>" +
                         "<li><strong>ア.</strong> Tận dụng CNTT có thể tăng tốc xử lý và ngăn chặn <strong>tất cả (<code>全て</code>)</strong> các lỗi do bất cẩn.</li>" +
                         "<li><strong>イ.</strong> Nếu việc mở rộng người dùng hoặc thay đổi cách dùng CNTT hiện có đã đủ để đạt được mục tiêu, thì nó <strong>không bắt buộc (<code>強いるものではない</code>)</strong> phải đầu tư vào hệ thống mới.</li>" +
                         "<li><strong>ウ.</strong> Tự động hóa tất cả quy trình bằng CNTT sẽ giúp việc sửa đổi quy trình trở nên <strong>dễ dàng (<code>容易になる</code>)</strong>.</li>" +
                         "<li><strong>エ.</strong> Khi tổ chức phụ thuộc nhiều vào CNTT, việc đạt được mục tiêu kiểm soát nội bộ sẽ trở nên <strong>khó khăn (<code>難しくなる</code>)</strong>.</li></ul>" +
                         "<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>" +
                         "<ul><li><strong>ア. ❌ Sai.</strong> CNTT có thể giảm thiểu sai sót, nhưng không thể 'ngăn chặn tất cả' (<code>全て</code>). Luôn có những ngoại lệ hoặc rủi ro mới.</li>" +
                         "<li><strong>イ. ✅ Đúng.</strong> Mục tiêu của kiểm soát nội bộ là đạt được mục tiêu của tổ chức một cách <strong>hiệu quả và hợp lý (<code>有効性</code>, <code>効率性</code>)</strong>. Nếu việc tận dụng hệ thống CNTT hiện có đã đủ để đạt được mục tiêu, thì nó <strong>không bắt buộc (<code>強いるものではない</code>)</strong> phải đầu tư vào hệ thống mới. Điều này thể hiện sự hợp lý và hiệu quả về mặt chi phí.</li>" +
                         "<li><strong>ウ. ❌ Sai.</strong> Tự động hóa hoàn toàn thường làm cho quy trình trở nên cứng nhắc và <strong>khó (<code>困難</code>)</strong> thay đổi, không phải 'dễ dàng'.</li>" +
                         "<li><strong>エ. ❌ Sai.</strong> Ngược lại, việc ứng dụng CNTT một cách phù hợp chính là một công cụ mạnh mẽ để <strong>giúp (<code>支援</code>)</strong> đạt được các mục tiêu của kiểm soát nội bộ (ví dụ: tự động hóa việc kiểm soát chéo).</li></ul>" +
                         "<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>" +
                         "<ul><li><strong>Keyword chính:</strong> <strong><code>ITへの対応</code> (Ứng phó với CNTT), <code>内部統制</code> (Kiểm soát nội bộ)</strong>.</li>" +
                         "<li><strong>Mẹo ghi nhớ:</strong> Kiểm soát nội bộ hướng tới sự **hiệu quả và hợp lý**. Không có gì là tuyệt đối (như 'tất cả' - <code>全て</code>) và không nhất thiết phải luôn dùng công nghệ mới nhất nếu công nghệ cũ vẫn đáp ứng được yêu cầu (<code>強いるものではない</code>).</li></ul>"
      },
      {
        "question": "あるコールセンターでは、顧客からの電話による問合せに対応するオペレーターを支援するシステムに、顧客とオペレーターの会話の音声を認識し、顧客の問合せに対する回答の候補をオペレーターのPCの画面に表示するAIを導入した。1日の対応件数は1,000件であり、問合せ内容によって二つのグループA、Bに分けた。AI導入前後の各グループの対応件数、対応時間が表のとおりであるとき、AI導入後に、1,000件の問合せに対応する時間は何％短縮できたか。<br><img src='img/pic54.png' width='433px'>",
        "options": ["30", "40", "50", "60"],
        "answer": 0,
        "explanation": "<h3><strong>Bản dịch</strong></h3>" +
                         "<ul><li><strong>Câu hỏi:</strong> Một call center xử lý 1,000 cuộc gọi/ngày. Dữ liệu TRƯỚC và SAU khi triển khai AI được cho trong bảng. Sau khi có AI, tổng thời gian xử lý 1,000 cuộc gọi đã rút ngắn được bao nhiêu %?</li>" +
                         "<li><strong>Bảng:</strong></li>" +
                         "<ul><li>Nhóm A: 60% số cuộc gọi. Thời gian (Trước): 10 phút. Thời gian (Sau): 5 phút.</li>" +
                         "<li>Nhóm B: 40% số cuộc gọi. Thời gian (Trước): 15 phút. Thời gian (Sau): 15 phút.</li></ul>" +
                         "<li><strong>ア.</strong> 30%</li>" +
                         "<li><strong>イ.</strong> 40%</li>" +
                         "<li><strong>ウ.</strong> 50%</li>" +
                         "<li><strong>エ.</strong> 60%</li></ul>" +
                         "<hr><h3><strong>Phân tích & Tính toán</strong></h3>" +
                         "<p>Giả sử có 1,000 cuộc gọi:</p>" +
                         "<ul><li>Nhóm A: 1,000 × 60% = 600 cuộc gọi.</li>" +
                         "<li>Nhóm B: 1,000 × 40% = 400 cuộc gọi.</li></ul>" +
                         "<ol><li><strong>Tính tổng thời gian xử lý TRƯỚC khi có AI:</strong></li>" +
                         "<ul><li>Thời gian nhóm A = 600 cuộc × 10 phút/cuộc = 6,000 phút.</li>" +
                         "<li>Thời gian nhóm B = 400 cuộc × 15 phút/cuộc = 6,000 phút.</li>" +
                         "<li><strong>Tổng thời gian (TRƯỚC) = 6,000 + 6,000 = 12,000 phút.</strong></li></ul>" +
                         "<li><strong>Tính tổng thời gian xử lý SAU khi có AI:</strong></li>" +
                         "<ul><li>Thời gian nhóm A = 600 cuộc × 5 phút/cuộc = 3,000 phút.</li>" +
                         "<li>Thời gian nhóm B = 400 cuộc × 15 phút/cuộc = 6,000 phút. (Không đổi)</li>" +
                         "<li><strong>Tổng thời gian (SAU) = 3,000 + 6,000 = 9,000 phút.</strong></li></ul>" +
                         "<li><strong>Tính phần trăm thời gian rút ngắn:</strong></li>" +
                         "<ul><li>Thời gian tiết kiệm được = 12,000 - 9,000 = 3,000 phút.</li>" +
                         "<li>Tỷ lệ rút ngắn = (Thời gian tiết kiệm / Tổng thời gian ban đầu) × 100%</li>" +
                         "<li>= (3,000 / 12,000) × 100% = 0.25 × 100% = <strong>25%</strong>.</li></ul></ol>" +
                         "<p><strong>🚨 LƯU Ý QUAN TRỌNG:</strong></p>" +
                         "<p>Kết quả tính toán chính xác dựa trên các con số trong bảng là <strong>25%</strong>. Tuy nhiên, không có đáp án 25% trong các lựa chọn [30, 40, 50, 60].</p>" +
                         "<p>Đây là một lỗi trong đề bài (rất có thể thời gian mới của Nhóm A đáng lẽ phải là <strong>4 phút</strong>, vì <code>(12000 - (600*4 + 400*15)) / 12000 = (12000 - 8400) / 12000 = 3600 / 12000 = 30%</code>).</p>" +
                         "<p>Vì đây là câu hỏi trắc nghiệm, và <strong>30% (ア)</strong> là đáp án được công bố cho đề thi này, bạn hãy chọn <strong>ア</strong>. Đây là một trường hợp bạn phải chấp nhận đề bài bị lỗi và chọn đáp án gần nhất/đáp án được công bố.</p>"
      },
      {
        "question": "システム開発プロジェクトの開始に当たり、人的資源に関する計画書を作成することにした。この計画において、要員を適切に配置し、より良いパフォーマンスを得るために考慮すべき事項として、適切なものだけを全て挙げたものはどれか。 a. プロジェクトに必要なスキルが要員に不足している場合は、トレーニングを計画する。 b. プロジェクトに必要なスキルよりも、要員の確保を常に優先するように計画する。 c. 要員をフレキシブルに配置するために、要員の役割と責任は、プロジェクトの計画段階では明確にせず、プロジェクトの開始後に定める。",
        "options": ["a", "a, b, c", "a, c", "c"],
        "answer": 0,
        "explanation": "<h3><strong>Bản dịch</strong></h3>" +
                         "<ul><li><strong>Câu hỏi:</strong> Khi lập kế hoạch nguồn nhân lực, cần xem xét những gì để bố trí nhân sự phù hợp và đạt hiệu suất tốt?</li>" +
                         "<li><strong>a.</strong> Nếu nhân sự thiếu kỹ năng cần thiết, lập kế hoạch <strong>đào tạo (<code>トレーニング</code>)</strong>.</li>" +
                         "<li><strong>b.</strong> <strong>Luôn ưu tiên (<code>常に優先</code>)</strong> việc đảm bảo đủ số lượng người hơn là kỹ năng.</li>" +
                         "<li><strong>c.</strong> Để bố trí linh hoạt, <strong>không làm rõ (<code>明確にせず</code>)</strong> vai trò và trách nhiệm ở giai đoạn kế hoạch, mà để sau khi dự án bắt đầu mới quyết định.</li></ul>" +
                         "<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>" +
                         "<ul><li><strong>a. ✅ Đúng.</strong> Quản lý nguồn nhân lực bao gồm cả việc phát triển năng lực cho đội ngũ. Nếu xác định kỹ năng bị thiếu hụt (skill gap) ở giai đoạn kế hoạch, thì việc lập kế hoạch <strong>đào tạo (<code>トレーニング</code>)</strong> là một hành động hoàn toàn phù hợp.</li>" +
                         "<li><strong>b. ❌ Sai.</strong> Ưu tiên 'có đủ người' (quantity) hơn là 'có đúng người' (quality/skill) sẽ dẫn đến rủi ro lớn về chất lượng và tiến độ. Phải cân bằng cả hai. Từ 'luôn luôn' (<code>常に</code>) làm cho câu này sai.</li>" +
                         "<li><strong>c. ❌ Sai.</strong> Đây là một thảm họa trong quản lý dự án. Vai trò và trách nhiệm (ví dụ: trong ma trận RACI) phải được <strong>làm rõ (<code>明確に</code>)</strong> ngay từ giai đoạn lập kế hoạch để mọi người biết mình phải làm gì và ai chịu trách nhiệm cho việc gì, tránh sự hỗn loạn, đùn đẩy trách nhiệm sau này.</li></ul>" +
                         "<p>=> Vậy, chỉ có (a) là đúng.</p>" +
                         "<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>" +
                         "<ul><li><strong>Keyword chính:</strong> <strong><code>人的資源</code> (Nguồn nhân lực)</strong>.</li>" +
                         "<li><strong>Mẹo ghi nhớ:</strong> Quản lý nhân sự tốt = <strong>Đúng người, đúng việc, đúng kỹ năng</strong>. Cần có kế hoạch rõ ràng ngay từ đầu (ai làm gì, thiếu gì thì phải đào tạo).</li></ul>"
      }
    ],
    technology: [
      {
        "question": "Bluetooth に追加された仕様の一つであり、省電力性に優れているので、IoT システムを長期間運用でき、送受信デバイス間の距離を知ることにも使われているものはどれか。",
        "options": ["BLE", "IrDA", "NFC", "PLC"],
        "answer": 0,
        "explanation": "<h3><strong>Bản dịch</strong></h3>" +
                         "<ul><li><strong>Câu hỏi:</strong> Tiêu chuẩn nào được thêm vào Bluetooth, có đặc tính <strong>tiêu thụ ít năng lượng (<code>省電力性</code>)</strong>, phù hợp cho hệ thống <strong>IoT</strong> vận hành dài hạn và cũng được dùng để đo khoảng cách?</li>" +
                         "<li><strong>ア.</strong> BLE</li>" +
                         "<li><strong>イ.</strong> IrDA</li>" +
                         "<li><strong>ウ.</strong> NFC</li>" +
                         "<li><strong>エ.</strong> PLC</li></ul>" +
                         "<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>" +
                         "<ul><li><strong>ア. BLE (Bluetooth Low Energy):</strong> ✅ <strong>Đúng.</strong> Đây là một biến thể của Bluetooth được thiết kế đặc biệt cho các ứng dụng IoT, nổi bật với khả năng <strong>tiết kiệm năng lượng (<code>省電力</code>)</strong> vượt trội, cho phép các thiết bị chạy bằng pin nhỏ hoạt động trong thời gian dài.</li>" +
                         "<li><strong>イ. IrDA (Infrared Data Association):</strong> ❌ Sai. Là giao tiếp không dây dùng tia <strong>hồng ngoại (<code>赤外線</code>)</strong>. Cần phải 'nhìn thấy' nhau, dễ bị cản trở và đã lỗi thời.</li>" +
                         "<li><strong>ウ. NFC (Near Field Communication):</strong> ❌ Sai. Là giao tiếp không dây ở <strong>khoảng cách rất gần (<code>近距離</code>)</strong> (vài cm), thường dùng cho thanh toán (như Suica) hoặc kết nối nhanh.</li>" +
                         "<li><strong>エ. PLC (Power Line Communication):</strong> ❌ Sai. Là công nghệ truyền thông qua <strong>đường dây điện (<code>電力線</code>)</strong>.</li></ul>" +
                         "<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>" +
                         "<ul><li><strong>Keyword chính:</strong> <strong><code>Bluetooth</code>, <code>省電力性</code> (Tiết kiệm năng lượng), <code>IoT</code></strong>.</li>" +
                         "<li><strong>Mẹo ghi nhớ:</strong> Bluetooth + <strong>L</strong>ow <strong>E</strong>nergy (Năng lượng thấp) → B<strong>LE</strong>.</li></ul>"
      },
      {
        "question": "HTTPプロキシサーバの機能に関する記述として、適切なものはどれか。",
        "options": ["IPアドレス割当て要求をPCから受け付けて、割り当てるグローバルIPアドレスを返す。", "PCから、インターネット上のWebサーバへの接続要求を中継役として受けて、PCに代わって当該のWebサーバに接続し、送受信データを中継する。", "WebサーバのURLに対応するIPアドレスを求める要求をPCから受け付けて、そのIPアドレスを返す。", "Webサーバのコンテンツが検索結果の上位に表示されるように、そのWebサーバが管理するコンテンツを書き換える。"],
        "answer": 1,
        "explanation": "<h3><strong>Bản dịch</strong></h3>" +
                         "<ul><li><strong>Câu hỏi:</strong> Mô tả nào phù hợp với chức năng của <strong>máy chủ HTTP Proxy (<code>プロキシサーバ</code>)</strong>?</li>" +
                         "<li><strong>ア.</strong> Nhận yêu cầu cấp IP từ PC và trả về địa chỉ IP Global.</li>" +
                         "<li><strong>イ.</strong> Đóng vai trò <strong>trung gian (<code>中継役</code>)</strong>, nhận yêu cầu kết nối đến Web server từ PC, rồi <strong>thay mặt (<code>代わって</code>)</strong> PC kết nối đến Web server đó.</li>" +
                         "<li><strong>ウ.</strong> Nhận yêu cầu tìm IP tương ứng với URL từ PC và trả về địa chỉ IP đó.</li>" +
                         "<li><strong>エ.</strong> Viết lại nội dung của Web server để được hiển thị ở top kết quả tìm kiếm.</li></ul>" +
                         "<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>" +
                         "<ul><li><strong>ア. ❌ Sai.</strong> Tự động cấp phát địa chỉ IP là chức năng của máy chủ <strong>DHCP</strong>.</li>" +
                         "<li><strong>イ. ✅ Đúng.</strong> Máy chủ Proxy (<code>プロキシ</code> = Người đại diện) đóng vai trò là <strong>trung gian (<code>中継役</code>)</strong>. Nó nhận yêu cầu từ PC trong mạng nội bộ và <strong>thay mặt (<code>PCに代わって</code>)</strong> PC đó kết nối ra máy chủ web bên ngoài. Nó giúp ẩn danh, kiểm soát truy cập (lọc web đen) và lưu trữ cache (tăng tốc).</li>" +
                         "<li><strong>ウ. ❌ Sai.</strong> Chuyển đổi URL/tên miền sang địa chỉ IP là chức năng của máy chủ <strong>DNS</strong>.</li>" +
                         "<li><strong>エ. ❌ Sai.</strong> Tối ưu hóa nội dung để tăng thứ hạng tìm kiếm là <strong>SEO (Search Engine Optimization)</strong>.</li></ul>" +
                         "<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>" +
                         "<ul><li><strong>Keyword chính:</strong> <strong><code>プロキシ</code> (Proxy)</strong>.</li>" +
                         "<li><strong>Mẹo ghi nhớ:</strong> Proxy = <strong>Người đại diện (<code>代わって</code>)</strong>, <strong>Trung gian (<code>中継</code>)</strong>.</li></ul>"
      },
      {
        "question": "DNSの説明として、適切なものはどれか。",
        "options": ["IPネットワークに接続しようとするコンピュータに、IPアドレスなどを自動的に割り当てるプロトコルである。", "ブラウザとWebサーバ間の通信を暗号化して、セキュリティを高めるために利用されるプロトコルである。", "ホスト名やドメイン名と、IPアドレスを対応付ける仕組みである。", "ホスト名やドメイン名と、MACアドレスを対応付ける仕組みである。"],
        "answer": 2,
        "explanation": "<h3><strong>Bản dịch</strong></h3>" +
                         "<ul><li><strong>Câu hỏi:</strong> Mô tả nào phù hợp với <strong>DNS</strong>?</li>" +
                         "<li><strong>ア.</strong> Giao thức tự động cấp phát (<code>自動的に割り当てる</code>) địa chỉ IP cho máy tính.</li>" +
                         "<li><strong>イ.</strong> Giao thức mã hóa (<code>暗号化</code>) giao tiếp giữa trình duyệt và web server.</li>" +
                         "<li><strong>ウ.</strong> Cơ chế <strong>ánh xạ (<code>対応付ける</code>)</strong> giữa <strong>Tên máy chủ/Tên miền (<code>ドメイン名</code>)</strong> và <strong>địa chỉ IP</strong>.</li>" +
                         "<li><strong>エ.</strong> Cơ chế ánh xạ giữa Tên máy chủ/Tên miền và địa chỉ MAC.</li></ul>" +
                         "<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>" +
                         "<ul><li><strong>ア. ❌ Sai.</strong> Tự động cấp phát IP là của <strong>DHCP (Dynamic Host Configuration Protocol)</strong>.</li>" +
                         "<li><strong>イ. ❌ Sai.</strong> Mã hóa giao tiếp web là của <strong>HTTPS (TLS/SSL)</strong>.</li>" +
                         "<li><strong>ウ. ✅ Đúng.</strong> <strong>DNS (Domain Name System)</strong> là hệ thống có chức năng <strong>ánh xạ (<code>対応付ける</code>)</strong> (giống như một danh bạ điện thoại) giữa <strong>tên miền (<code>ドメイン名</code>)</strong> (ví dụ: `google.com`) mà con người dễ nhớ và <strong>địa chỉ IP</strong> (ví dụ: `8.8.8.8`) mà máy tính sử dụng.</li>" +
                         "<li><strong>エ. ❌ Sai.</strong> Ánh xạ giữa địa chỉ IP và địa chỉ MAC là chức năng của giao thức <strong>ARP (Address Resolution Protocol)</strong>.</li></ul>" +
                         "<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>" +
                         "<ul><li><strong>Keyword chính:</strong> <strong><code>DNS</code>, <code>ドメイン名</code> (Tên miền), <code>IPアドレス</code> (Địa chỉ IP), <code>対応付ける</code> (Ánh xạ)</strong>.</li>" +
                         "<li><strong>Mẹo ghi nhớ:</strong> <strong>DNS</strong> = <strong>Tên miền ↔ Địa chỉ IP</strong>. (Giống như Danh bạ điện thoại: Tên người ↔ Số điện thoại).</li></ul>"
      },
      {
        "question": "ISMSにおける内部監査に関する記述のうち、適切なものはどれか。",
        "options": ["JIS Q 27001の要求事項及び組織自体が規定した要求事項によって定める監査基準への適合性だけでなく、ISMS活動の組織に対する有効性も判定する。", "JIS Q 27001の要求事項ではなく、組織自体が規定した要求事項を監査基準とする。", "内部監査の実施のためのプログラムを確立するときには、前回の内部監査の結果は考慮しない。", "不定期かつ抜き打ちでの実施を原則とする。"],
        "answer": 0,
        "explanation": "<h3><strong>Bản dịch</strong></h3>" +
                         "<ul><li><strong>Câu hỏi:</strong> Mô tả nào là đúng về <strong>Kiểm toán nội bộ (<code>内部監査</code>)</strong> trong ISMS?</li>" +
                         "<li><strong>ア.</strong> Không chỉ đánh giá <strong>sự tuân thủ (<code>適合性</code>)</strong> các tiêu chuẩn (JIS Q 27001 và quy định nội bộ), mà còn đánh giá cả <strong>tính hiệu quả (<code>有効性</code>)</strong> của hoạt động ISMS đối với tổ chức.</li>" +
                         "<li><strong>イ.</strong> Lấy tiêu chuẩn của tổ chức làm cơ sở, chứ không phải yêu cầu của JIS Q 27001.</li>" +
                         "<li><strong>ウ.</strong> Khi lập kế hoạch kiểm toán, <strong>không xem xét (<code>考慮しない</code>)</strong> kết quả của lần kiểm toán trước.</li>" +
                         "<li><strong>エ.</strong> Nguyên tắc là thực hiện <strong>không định kỳ và đột xuất (<code>抜き打ち</code>)</strong>.</li></ul>" +
                         "<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>" +
                         "<ul><li><strong>ア. ✅ Đúng.</strong> Một cuộc kiểm toán nội bộ ISMS hiệu quả phải đánh giá 2 khía cạnh: 1. <strong>Tuân thủ (<code>適合性</code>)</strong>: Có làm đúng theo quy định (của ISO và của công ty) không? 2. <strong>Hiệu quả (<code>有効性</code>)</strong>: Việc làm đó có thực sự mang lại kết quả, có giúp giảm rủi ro an ninh thông tin không?</li>" +
                         "<li><strong>イ. ❌ Sai.</strong> Phải đánh giá sự tuân thủ với *cả* tiêu chuẩn JIS Q 27001 VÀ các quy định mà tổ chức tự đặt ra.</li>" +
                         "<li><strong>ウ. ❌ Sai.</strong> Kết quả của các cuộc kiểm toán trước (ví dụ: các lỗi đã phát hiện) là một đầu vào cực kỳ quan trọng để lập kế hoạch cho các cuộc kiểm toán sau (ví dụ: để kiểm tra xem lỗi cũ đã được khắc phục chưa).</li>" +
                         "<li><strong>エ. ❌ Sai.</strong> Kiểm toán nội bộ trong ISMS (cũng như các hệ thống ISO khác) phải được thực hiện theo kế hoạch và <strong>định kỳ (<code>定期的</code>)</strong>, không phải đột xuất.</li></ul>" +
                         "<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>" +
                         "<ul><li><strong>Keyword chính:</strong> <strong><code>ISMS</code>, <code>内部監査</code> (Kiểm toán nội bộ)</strong>.</li>" +
                         "<li><strong>Mẹo ghi nhớ:</strong> Một cuộc kiểm toán tốt không chỉ xem xét 'làm đúng quy trình chưa?' (<strong>Tuân thủ - <code>適合性</code></strong>) mà còn phải xem 'làm vậy có ích lợi gì không?' (<strong>Hiệu quả - <code>有効性</code></strong>).</li></ul>"
      },
      {
        "question": "TCP/IPネットワークで用いられるプロトコルであるFTPの役割として、適切なものはどれか。",
        "options": ["正確な現在時刻を取得する。", "電子メールを転送する。", "ネットワーク接続に必要なIPアドレスなどの情報を自動的に割り当てる。", "ファイルをPC間で転送する。"],
        "answer": 3,
        "explanation": "<h3><strong>Bản dịch</strong></h3>" +
                         "<ul><li><strong>Câu hỏi:</strong> Vai trò của giao thức <strong>FTP</strong> là gì?</li>" +
                         "<li><strong>ア.</strong> Lấy thời gian chính xác (<code>現在時刻</code>).</li>" +
                         "<li><strong>イ.</strong> Truyền tải (<code>転送</code>) email (<code>電子メール</code>).</li>" +
                         "<li><strong>ウ.</strong> Tự động cấp phát (<code>自動的に割り当てる</code>) thông tin như địa chỉ IP.</li>" +
                         "<li><strong>エ.</strong> Truyền tải (<code>転送</code>) tệp tin (<code>ファイル</code>) giữa các máy tính.</li></ul>" +
                         "<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>" +
                         "<ul><li><strong>ア. ❌ Sai.</strong> Lấy thời gian chính xác là vai trò của <strong>NTP (Network Time Protocol)</strong>.</li>" +
                         "<li><strong>イ. ❌ Sai.</strong> Gửi/truyền tải email là vai trò của <strong>SMTP (Simple Mail Transfer Protocol)</strong>.</li>" +
                         "<li><strong>ウ. ❌ Sai.</strong> Tự động cấp phát IP là vai trò của <strong>DHCP (Dynamic Host Configuration Protocol)</strong>.</li>" +
                         "<li><strong>エ. ✅ Đúng.</strong> <strong>FTP (File Transfer Protocol)</strong> là giao thức chuyên dụng để <strong>truyền tải tệp tin (<code>ファイルを...転送する</code>)</strong> giữa các máy tính trên mạng.</li></ul>" +
                         "<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>" +
                         "<ul><li><strong>Keyword chính:</strong> <strong><code>FTP</code></strong>.</li>" +
                         "<li><strong>Mẹo ghi nhớ:</strong> <strong>F</strong>ile <strong>T</strong>ransfer <strong>P</strong>rotocol → Giao thức truyền <strong>File (Tệp tin)</strong>.</li></ul>"
      },
      {
        "question": "DBMSのトランザクションに関する記述として，適切なものはどれか。",
        "options": ["あるデータベースの内容を他のデータベースに複製し，内容の同期をとる。", "データベースに対して行った操作を，順次記録する。", "データベースに対する一連の処理が全て成功したら変更結果を確定し，途中で失敗したら処理前の状態に戻す。", "データベースの表の索引を作成し，検索時には索引を使用する。"],
        "answer": 2,
        "explanation": "<h3><strong>Bản dịch</strong></h3>" +
                         "<ul><li><strong>Câu hỏi:</strong> Mô tả nào phù hợp với <strong>Giao dịch (<code>トランザクション</code> - Transaction)</strong> trong DBMS?</li>" +
                         "<li><strong>ア.</strong> Sao chép (<code>複製</code>) nội dung CSDL sang CSDL khác và đồng bộ (<code>同期</code>) chúng.</li>" +
                         "<li><strong>イ.</strong> Ghi lại (<code>記録する</code>) tuần tự các thao tác đã thực hiện trên CSDL.</li>" +
                         "<li><strong>ウ.</strong> Một chuỗi xử lý trên CSDL, nếu <strong>thành công tất cả (<code>全て成功</code>)</strong> thì xác nhận (commit), nếu <strong>thất bại giữa chừng (<code>途中で失敗</code>)</strong> thì <strong>quay về trạng thái ban đầu (<code>処理前の状態に戻す</code>)</strong> (rollback).</li>" +
                         "<li><strong>エ.</strong> Tạo chỉ mục (<code>索引</code>) cho bảng và sử dụng khi tìm kiếm.</li></ul>" +
                         "<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>" +
                         "<ul><li><strong>ア. ❌ Sai.</strong> Sao chép và đồng bộ hóa giữa các CSDL là <strong>Replication (<code>レプリケーション</code>)</strong>.</li>" +
                         "<li><strong>イ. ❌ Sai.</strong> Ghi lại tuần tự các thao tác là <strong>Logging (<code>ログ</code>)</strong>, dùng để phục hồi transaction.</li>" +
                         "<li><strong>ウ. ✅ Đúng.</strong> Đây là định nghĩa của tính chất <strong>Nguyên tử (Atomicity - <code>原子性</code>)</strong>, một trong 4 đặc tính (ACID) của một Giao dịch (Transaction). Nó đảm bảo nguyên tắc 'hoặc là thành công tất cả, hoặc là không có gì cả'.</li>" +
                         "<li><strong>エ. ❌ Sai.</strong> Tạo chỉ mục để tăng tốc tìm kiếm là <strong>Indexing (<code>索引付け</code>)</strong>.</li></ul>" +
                         "<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>" +
                         "<ul><li><strong>Keyword chính:</strong> <strong><code>トランザクション</code> (Transaction)</strong>.</li>" +
                         "<li><strong>Mẹo ghi nhớ:</strong> Transaction (Giao dịch) = <strong>Tất cả hoặc Không có gì (All or Nothing)</strong>. (Ví dụ: Chuyển tiền: Phải trừ tiền TK A VÀ cộng tiền TK B, nếu 1 trong 2 thất bại thì phải hủy cả 2).</li></ul>"
      },
      {
        "question": "OSの仮想記憶方式に関する次の記述中のa～cに入れる字句の適切な組合せはどれか。 プログラムの実行時に，コンピュータの a 装置の b な容量に制約されない， c なアドレス空間を提供する。<br><img src='img/pic62.png' width='433px'>",
        "options": ["ア", "イ", "ウ", "エ"],
        "answer": 0,
        "explanation": "<h3><strong>Bản dịch</strong></h3>" +
                         "<ul><li><strong>Câu hỏi:</strong> ...Bộ nhớ ảo cung cấp một không gian địa chỉ <strong>(c)</strong> mà không bị giới hạn bởi dung lượng <strong>(b)</strong> của thiết bị <strong>(a)</strong> của máy tính.</li></ul>" +
                         "<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>" +
                         "<p>Cơ chế của <strong>Bộ nhớ ảo (<code>仮想記憶</code>)</strong> là sử dụng một phần của ổ cứng (thiết bị lưu trữ phụ <code>補助記憶装置</code>) để làm bộ nhớ tạm, 'đánh lừa' chương trình rằng nó có một không gian bộ nhớ lớn hơn nhiều so với bộ nhớ vật lý thực tế (RAM).</p>" +
                         "<ul><li>Chương trình không bị giới hạn bởi dung lượng <strong>vật lý (b - <code>物理</code>)</strong> của <strong>thiết bị bộ nhớ chính (a - <code>主記憶</code>)</strong> (tức là RAM).</li>" +
                         "<li>Thay vào đó, nó được cung cấp một không gian địa chỉ <strong>logic (c - <code>論理</code>)</strong> (không gian ảo) lớn hơn.</li></ul>" +
                         "<p>=> Vậy, a = <code>主記憶</code> (Bộ nhớ chính), b = <code>物理</code> (Vật lý), c = <code>論理</code> (Logic). Tổ hợp này tương ứng với đáp án <strong>ア</strong>.</p>" +
                         "<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>" +
                         "<ul><li><strong>Keyword chính:</strong> <strong><code>仮想記憶</code> (Bộ nhớ ảo)</strong>.</li>" +
                         "<li><strong>Mẹo ghi nhớ:</strong> Bộ nhớ ảo giúp chương trình 'tưởng' (Logic) rằng nó có nhiều bộ nhớ hơn 'thực tế' (Vật lý - RAM).</li>" +
                         "<ul><li><strong><code>物理</code> (Vật lý):</strong> Là cái có thật, sờ được (thanh RAM).</li>" +
                         "<li><strong><code>論理</code> (Logic):</strong> Là cái do hệ điều hành 'vẽ' ra, 'tưởng tượng' ra.</li></ul></ul>"
      },
      {
        "question": "データの尺度を名義尺度、順序尺度、間隔尺度、比例尺度の四つに分類したとき、間隔尺度に該当するものはどれか。",
        "options": ["学年", "血液型", "時刻", "睡眠時間"],
        "answer": 2,
        "explanation": "<h3><strong>Bản dịch</strong></h3>" +
                         "<ul><li><strong>Câu hỏi:</strong> Dữ liệu nào sau đây thuộc <strong>Thang đo khoảng (<code>間隔尺度</code> - Interval Scale)</strong>?</li>" +
                         "<li><strong>ア.</strong> Năm học (<code>学年</code>) (ví dụ: năm 1, năm 2)</li>" +
                         "<li><strong>イ.</strong> Nhóm máu (<code>血液型</code>) (ví dụ: A, B, O)</li>" +
                         "<li><strong>ウ.</strong> Thời gian trong ngày (<code>時刻</code>) (ví dụ: 9 giờ, 10 giờ)</li>" +
                         "<li><strong>エ.</strong> Thời gian ngủ (<code>睡眠時間</code>) (ví dụ: ngủ 8 tiếng)</li></ul>" +
                         "<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>" +
                         "<p>Phân biệt 4 thang đo:</p>" +
                         "<ul><li><strong>Danh nghĩa (<code>名義尺度</code>):</strong> Chỉ là tên gọi, không hơn kém. (Ví dụ: <strong>Nhóm máu</strong>, Giới tính).</li>" +
                         "<li><strong>Thứ tự (<code>順序尺度</code>):</strong> Có hơn kém, có thứ tự, nhưng không biết hơn kém bao nhiêu. (Ví dụ: <strong>Năm học</strong> (năm 2 > năm 1), Size áo (L > M)).</li>" +
                         "<li><strong>Khoảng (<code>間隔尺度</code>):</strong> Có thứ tự, khoảng cách bằng nhau, nhưng <strong>không có điểm 0 tuyệt đối</strong>. (Ví dụ: <strong>Thời gian trong ngày</strong>, Nhiệt độ °C (0°C không có nghĩa là không có nhiệt độ)).</li>" +
                         "<li><strong>Tỷ lệ (<code>比例尺度</code>):</strong> Có thứ tự, khoảng cách bằng nhau, và <strong>có điểm 0 tuyệt đối</strong> (số 0 có nghĩa là 'không có gì'). (Ví dụ: <strong>Thời gian ngủ</strong> (ngủ 0 tiếng = không ngủ), Cân nặng, Chiều cao).</li></ul>" +
                         "<p>=> Đáp án <strong>ウ (Thời gian trong ngày)</strong> là Thang đo khoảng vì '0 giờ' không có nghĩa là 'không có thời gian', nó chỉ là một điểm mốc trên đồng hồ.</p>" +
                         "<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>" +
                         "<ul><li><strong>Keyword chính:</strong> <strong><code>間隔尺度</code> (Thang đo khoảng)</strong>.</li>" +
                         "<li><strong>Mẹo ghi nhớ:</strong> Hãy tự hỏi: 'Số 0 có nghĩa là 'không có gì' không?'.</li>" +
                         "<ul><li>Nếu <strong>Có</strong> (ví dụ: 0kg, 0 mét, 0 tiếng) → <strong>Thang đo Tỷ lệ (<code>比例尺度</code>)</strong>.</li>" +
                         "<li>Nếu <strong>Không</strong> (ví dụ: 0°C, 0 giờ) → <strong>Thang đo Khoảng (<code>間隔尺度</code>)</strong>.</li></ul></ul>"
      },
      {
        "question": "Webサイトなどで RSSの表記を見かけることがある。この RSSの説明として、適切なものはどれか。",
        "options": ["Webページの統一的なデザインやレイアウトを定義するための規格", "Webページの見出しやリンク、要約などを記述するフォーマット", "ネットワーク上にブックマークを登録することによって、利用価値の高い Webサイト情報を他の利用者と共有するサービス", "ブラウザと Webサーバ間で、データを暗号化して安全に送受信するためのプロトコル"],
        "answer": 1,
        "explanation": "<h3><strong>Bản dịch</strong></h3>" +
                         "<ul><li><strong>Câu hỏi:</strong> Mô tả nào phù hợp với <strong>RSS</strong>?</li>" +
                         "<li><strong>ア.</strong> Tiêu chuẩn để định nghĩa thiết kế (design) và bố cục (layout) thống nhất cho trang web.</li>" +
                         "<li><strong>イ.</strong> Định dạng (format) dùng để mô tả <strong>tiêu đề (<code>見出し</code>), liên kết (<code>リンク</code>), và tóm tắt (<code>要約</code>)</strong> của trang web.</li>" +
                         "<li><strong>ウ.</strong> Dịch vụ chia sẻ thông tin website giá trị với người khác bằng cách đăng ký bookmark lên mạng.</li>" +
                         "<li><strong>エ.</strong> Giao thức mã hóa (<code>暗号化</code>) dữ liệu để gửi/nhận an toàn giữa trình duyệt và web server.</li></ul>" +
                         "<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>" +
                         "<ul><li><strong>ア. ❌ Sai.</strong> Định nghĩa thiết kế và bố cục trang web là của <strong>CSS (Cascading Style Sheets)</strong>.</li>" +
                         "<li><strong>イ. ✅ Đúng.</strong> <strong>RSS (Really Simple Syndication)</strong> là một định dạng file (thường là XML) được dùng để mô tả <strong>tiêu đề (<code>見出し</code>), liên kết (<code>リンク</code>), và tóm tắt (<code>要約</code>)</strong> của các nội dung mới trên một trang web (ví dụ: tin tức, bài blog). Nó giúp người dùng và các ứng dụng khác (như trình đọc tin RSS) dễ dàng cập nhật tin tức mới.</li>" +
                         "<li><strong>ウ. ❌ Sai.</strong> Lưu trữ và chia sẻ bookmark online là <strong>Social Bookmarking (<code>ソーシャルブックマーク</code>)</strong>.</li>" +
                         "<li><strong>エ. ❌ Sai.</strong> Mã hóa dữ liệu giữa trình duyệt và server là của <strong>HTTPS (TLS/SSL)</strong>.</li></ul>" +
                         "<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>" +
                         "<ul><li><strong>Keyword chính:</strong> <strong><code>RSS</code>, <code>見出し</code> (Tiêu đề), <code>要約</code> (Tóm tắt)</strong>.</li>" +
                         "<li><strong>Mẹo ghi nhớ:</strong> RSS = 'Bản tin tóm tắt' (danh sách các tiêu đề) của một trang web.</li></ul>"
      },
      {
        "question": "DBMSにおいて、データの検索を高速に行う目的で、必要に応じて設定して利用する情報はどれか。",
        "options": ["インデックス", "外部キー", "主キー", "スキーマ"],
        "answer": 0,
        "explanation": "<h3><strong>Bản dịch</strong></h3>" +
                         "<ul><li><strong>Câu hỏi:</strong> Trong DBMS, thông tin nào được thiết lập với mục đích <strong>tăng tốc độ tìm kiếm (<code>検索を高速に</code>)</strong> dữ liệu?</li>" +
                         "<li><strong>ア.</strong> Index (Chỉ mục)</li>" +
                         "<li><strong>イ.</strong> Foreign Key (Khóa ngoại)</li>" +
                         "<li><strong>ウ.</strong> Primary Key (Khóa chính)</li>" +
                         "<li><strong>エ.</strong> Schema (Lược đồ)</li></ul>" +
                         "<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>" +
                         "<ul><li><strong>ア. インデックス (Index):</strong> ✅ <strong>Đúng.</strong> <strong>Index (<code>インデックス</code> - Chỉ mục)</strong> hoạt động giống như mục lục của một cuốn sách. Thay vì phải lật từng trang (quét toàn bộ bảng - full table scan), DBMS có thể nhìn vào chỉ mục để đi thẳng đến vị trí của dữ liệu cần tìm, giúp tăng tốc độ truy vấn (SELECT) một cách đáng kể.</li>" +
                         "<li><strong>イ. 外部キー (Foreign Key):</strong> ❌ Sai. Khóa ngoại dùng để đảm bảo <strong>tính toàn vẹn tham chiếu (<code>参照整合性</code>)</strong>, tức là tạo mối quan hệ giữa hai bảng.</li>" +
                         "<li><strong>ウ. 主キー (Primary Key):</strong> ❌ Sai. Khóa chính dùng để <strong>xác định tính duy nhất (<code>一意性</code>)</strong> của một hàng trong bảng. Mặc dù khóa chính thường *tự động* được tạo index, nhưng mục đích *chính* của nó là tính duy nhất, không phải tăng tốc.</li>" +
                         "<li><strong>エ. スキーマ (Schema):</strong> ❌ Sai. Schema là cấu trúc, là định nghĩa tổng thể của cơ sở dữ liệu (gồm những bảng nào, cột nào...).</li></ul>" +
                         "<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>" +
                         "<ul><li><strong>Keyword chính:</strong> <strong><code>検索を高速に</code> (Tìm kiếm nhanh)</strong>.</li>" +
                         "<li><strong>Mẹo ghi nhớ:</strong> Để tìm nhanh trong sách → dùng <strong>Mục lục (Index)</strong>.</li></ul>"
      },
      {
        "question": "関係データベースで管理している次の“ログイン記録”表及び“部署”表において，ログイン結果が失敗となったことのある。又は，2022年4月10日09:00:00以前にログイン結果が成功となったことのある従業員が所属する部署名だけを全て挙げたものはどれか。<br><img src='img/pic66-1.png' width='433px'><img src='img/pic66-2.png' width='250px'>",
        "options": ["営業部，システム部", "営業部，人事部", "営業部，システム部，人事部", "システム部，人事部"],
        "answer": 2,
        "explanation": "<h3><strong>Bản dịch</strong></h3>" +
                         "<ul><li><strong>Câu hỏi:</strong> Từ hai bảng 'Nhật ký Đăng nhập' và 'Phòng ban', hãy liệt kê tất cả các phòng ban (<code>部署名</code>) có nhân viên thỏa mãn 1 trong 2 điều kiện: (1) Đã từng <strong>đăng nhập thất bại (<code>失敗</code>)</strong>, HOẶC (<code>又は</code>), (2) Đã từng <strong>đăng nhập thành công (<code>成功</code>) TRƯỚC (<code>以前</code>) 09:00:00 ngày 10/04/2022</strong>.</li>" +
                         "<li><strong>ア.</strong> Phòng Kinh doanh, Phòng Hệ thống</li>" +
                         "<li><strong>イ.</strong> Phòng Kinh doanh, Phòng Nhân sự</li>" +
                         "<li><strong>ウ.</strong> Phòng Kinh doanh, Phòng Hệ thống, Phòng Nhân sự</li>" +
                         "<li><strong>エ.</strong> Phòng Hệ thống, Phòng Nhân sự</li></ul>" +
                         "<hr><h3><strong>Phân tích & Tính toán</strong></h3>" +
                         "<p>Ta cần tìm các phòng ban thỏa mãn điều kiện (1) <strong>HOẶC</strong> (<code>又は</code>) điều kiện (2).</p>" +
                         "<ol><li><strong>Tìm các nhân viên thỏa mãn Điều kiện 1 (Đăng nhập thất bại <code>失敗</code>):</strong></li>" +
                         "<ul><li>Nhìn vào bảng 'ログイン記録', các dòng có '失敗' thuộc về Mã NV: <strong>003</strong>, <strong>001</strong>.</li></ul>" +
                         "<li><strong>Tìm các nhân viên thỏa mãn Điều kiện 2 (Thành công <code>成功</code> TRƯỚC 09:00:00 ngày 10/4):</strong></li>" +
                         "<ul><li>Dòng 1 (08:50:10): Thành công, TRƯỚC 9h. Mã NV: <strong>001</strong>.</li>" +
                         "<li>Dòng 2 (08:55:05): Thành công, TRƯỚC 9h. Mã NV: <strong>002</strong>.</li>" +
                         "<li>Dòng 5 (09:00:15): Thành công, nhưng SAU 9h. → Loại.</li></ul>" +
                         "<li><strong>Tổng hợp danh sách Mã NV thỏa mãn (1) HOẶC (2):</strong></li>" +
                         "<ul><li>Từ (1) có: {001, 003}</li>" +
                         "<li>Từ (2) có: {001, 002}</li>" +
                         "<li>Gộp cả hai lại, ta có danh sách đầy đủ là: {<strong>001, 002, 003</strong>}.</li></ul>" +
                         "<li><strong>Tra tên phòng ban (<code>部署名</code>) từ danh sách Mã NV:</strong></li>" +
                         "<ul><li>001 → <strong>営業部 (Phòng Kinh doanh)</strong></li>" +
                         "<li>002 → <strong>システム部 (Phòng Hệ thống)</strong></li>" +
                         "<li>003 → <strong>人事部 (Phòng Nhân sự)</strong></li></ul></ol>" +
                         "<p>=> Kết quả: Cả 3 phòng: 営業部, システム部, 人事部.</p>" +
                         "<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>" +
                         "<ul><li><strong>Keyword chính:</strong> <strong><code>又は</code> (Hoặc / OR)</strong>.</li>" +
                         "<li><strong>Mẹo ghi nhớ:</strong> Hãy xử lý từng điều kiện một cách riêng biệt, lấy ra danh sách Mã NV cho từng điều kiện, sau đó gộp (UNION) hai danh sách đó lại và loại bỏ các mục trùng lặp. Cuối cùng mới tra sang bảng '部署'.</li></ul>"
      },
      {
        "question": "3次元画像処理の高速化や、動画をなめらかにするなどの機能をもつ、描画処理のためのハードウェアはどれか。",
        "options": ["CGI", "GPU", "GUI", "UPS"],
        "answer": 1,
        "explanation": "<h3><strong>Bản dịch</strong></h3>" +
                         "<ul><li><strong>Câu hỏi:</strong> <strong>Phần cứng (<code>ハードウェア</code>)</strong> nào có chức năng <strong>xử lý đồ họa (<code>描画処理</code>)</strong>, giúp tăng tốc xử lý ảnh 3D và làm cho video mượt mà hơn?</li>" +
                         "<li><strong>ア.</strong> CGI</li>" +
                         "<li><strong>イ.</strong> GPU</li>" +
                         "<li><strong>ウ.</strong> GUI</li>" +
                         "<li><strong>エ.</strong> UPS</li></ul>" +
                         "<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>" +
                         "<ul><li><strong>ア. CGI (Computer-Generated Imagery):</strong> ❌ Sai. Là 'Hình ảnh do máy tính tạo ra'. Đây là một kỹ thuật, một khái niệm <strong>phần mềm/nội dung</strong>, không phải phần cứng.</li>" +
                         "<li><strong>イ. GPU (Graphics Processing Unit):</strong> ✅ <strong>Đúng.</strong> Là 'Bộ xử lý đồ họa'. Đây là một <strong>phần cứng</strong> chuyên dụng được thiết kế để thực hiện các phép toán phức tạp song song, phục vụ cho việc xử lý và hiển thị đồ họa (<code>描画処理</code>).</li>" +
                         "<li><strong>ウ. GUI (Graphical User Interface):</strong> ❌ Sai. Là 'Giao diện người dùng đồ họa' (ví dụ: các icon, cửa sổ trên Windows). Đây là một khái niệm <strong>phần mềm</strong>.</li>" +
                         "<li><strong>エ. UPS (Uninterruptible Power Supply):</strong> ❌ Sai. Là 'Bộ lưu điện'. Đây là <strong>phần cứng</strong>, nhưng dùng để cung cấp điện dự phòng, không liên quan đến xử lý đồ họa.</li></ul>" +
                         "<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>" +
                         "<ul><li><strong>Keyword chính:</strong> <strong><code>描画処理</code> (Xử lý đồ họa), <code>ハードウェア</code> (Phần cứng)</strong>.</li>" +
                         "<li><strong>Mẹo ghi nhớ:</strong> <strong>G</strong>raphics <strong>P</strong>rocessing <strong>U</strong>nit → Bộ xử lý <strong>Đồ họa (Graphics)</strong>.</li></ul>"
      },
      {
        "question": "CSIRTとして行う活動の例として、最も適切なものはどれか。",
        "options": ["OSやアプリケーションソフトウェアのセキュリティバッチを定期的に適用する。", "地震や洪水などの自然災害を想定し、情報資産を守るために全社的な事業継続計画を策定する。", "セキュリティ事故の発生時に影響範囲を調査して、被害拡大を防止するための対策実施を支援する。", "保守業者がサーバ室で作業した日に、作業員の入退出が適切に記録されていたことを監査する。"],
        "answer": 2,
        "explanation": "<h3><strong>Bản dịch</strong></h3>" +
                         "<ul><li><strong>Câu hỏi:</strong> Đâu là ví dụ về hoạt động của một <strong>CSIRT</strong>?</li>" +
                         "<li><strong>ア.</strong> Cài đặt bản vá (<code>セキュリティバッチ</code>) bảo mật định kỳ cho HĐH và phần mềm.</li>" +
                         "<li><strong>イ.</strong> Lập Kế hoạch kinh doanh liên tục (<code>事業継続計画</code>) toàn công ty để đối phó với thiên tai.</li>" +
                         "<li><strong>ウ.</strong> <strong>Khi sự cố an ninh xảy ra (<code>事故の発生時</code>)</strong>, <strong>điều tra phạm vi ảnh hưởng (<code>影響範囲を調査</code>)</strong> và hỗ trợ thực hiện các biện pháp <strong>ngăn chặn thiệt hại lan rộng (<code>被害拡大を防止</code>)</strong>.</li>" +
                         "<li><strong>エ.</strong> Kiểm toán (<code>監査</code>) xem việc ghi lại lịch sử ra vào phòng máy chủ của nhà thầu có phù hợp không.</li></ul>" +
                         "<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>" +
                         "<p><strong>CSIRT (Computer Security Incident Response Team)</strong> là 'Đội phản ứng sự cố an ninh máy tính'. Nhiệm vụ chính của họ là **PHẢN ỨNG (Response)** khi sự cố **ĐÃ XẢY RA (Incident)**.</p>" +
                         "<ul><li><strong>ア. ❌ Sai.</strong> Cài đặt bản vá là một hoạt động <strong>phòng ngừa (Prevention)</strong>, thường do bộ phận vận hành hệ thống (<code>運用部門</code>) thực hiện.</li>" +
                         "<li><strong>イ. ❌ Sai.</strong> Lập Kế hoạch kinh doanh liên tục (BCP) là một hoạt động quản lý rủi ro ở cấp cao hơn (<code>リスク管理</code>).</li>" +
                         "<li><strong>ウ. ✅ Đúng.</strong> Khi một <strong>sự cố an ninh xảy ra (<code>事故の発生時</code>)</strong>, CSIRT sẽ vào cuộc để <strong>điều tra (<code>調査</code>)</strong>, phân tích, và điều phối các hành động <strong>ngăn chặn (<code>防止</code>)</strong> thiệt hại. Đây là định nghĩa chính xác về vai trò của họ.</li>" +
                         "<li><strong>エ. ❌ Sai.</strong> Kiểm tra, đánh giá (<code>監査</code>) là vai trò của bộ phận <strong>Kiểm toán (<code>監査部門</code>)</strong>.</li></ul>" +
                         "<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>" +
                         "<ul><li><strong>Keyword chính:</strong> <strong><code>CSIRT</code></strong>.</li>" +
                         "<li><strong>Mẹo ghi nhớ:</strong> Chữ <strong>IR</strong> trong CS<strong>IR</strong>T là viết tắt của <strong>I</strong>ncident <strong>R</strong>esponse (Phản ứng sự cố). Hãy tìm đáp án nào mô tả hành động 'phản ứng' **SAU KHI** sự cố đã xảy ra (<code>事故の発生時</code>).</li></ul>"
      },
      {
        "question": "バイオメトリクス認証の他人受入率と本人拒否率に関する次の記述中のa、bに入れる字句の適切な組合せはどれか。<br>バイオメトリクス認証の認証精度において、他人受入率を低く抑えようとすると a が高くなり、本人拒否率を低く抑えようとすると b が高くなる。<br><img src='img/pic69.png' width='300px'>",
        "options": ["ア", "イ", "ウ", "エ"],
        "answer": 0,
        "explanation": "<h3><strong>Bản dịch</strong></h3>" +
                         "<ul><li><strong>Câu hỏi:</strong> ...Trong độ chính xác của xác thực sinh trắc học, nếu cố gắng giữ <strong>Tỷ lệ chấp nhận nhầm (<code>他人受入率</code>)</strong> ở mức thấp, thì <strong>(a)</strong> sẽ tăng lên; và nếu cố gắng giữ <strong>Tỷ lệ từ chối nhầm (<code>本人拒否率</code>)</strong> ở mức thấp, thì <strong>(b)</strong> sẽ tăng lên.</li></ul>" +
                         "<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>" +
                         "<p>Đây là mối quan hệ đánh đổi (trade-off) trong xác thực sinh trắc học:</p>" +
                         "<ul><li><strong><code>他人受入率</code> (Tỷ lệ Chấp nhận nhầm - FAR - False Acceptance Rate):</strong> Tỷ lệ người lạ (kẻ gian) được chấp nhận là chủ nhân. Đây là rủi ro về <strong>An ninh</strong>.</li>" +
                         "<li><strong><code>本人拒否率</code> (Tỷ lệ Từ chối nhầm - FRR - False Rejection Rate):</strong> Tỷ lệ chủ nhân thật bị từ chối. Đây là rủi ro về <strong>Tính tiện lợi</strong>.</li></ul>" +
                         "<p>Câu hỏi nói:</p>" +
                         "<ul><li><strong>Vế 1:</strong> Cố gắng giữ <strong>FAR (Chấp nhận nhầm)</strong> ở mức thấp (tức là <strong>siết chặt an ninh</strong>, yêu cầu vân tay phải khớp 99% thay vì 90%). Hậu quả là gì? → Chính chủ nhân thật cũng khó vào hơn. → <strong>(a) Tỷ lệ từ chối nhầm (<code>本人拒否率</code> - FRR) sẽ tăng lên</strong>.</li>" +
                         "<li><strong>Vế 2:</strong> Cố gắng giữ <strong>FRR (Từ chối nhầm)</strong> ở mức thấp (tức là <strong>nới lỏng, cho tiện lợi</strong>, chỉ cần khớp 80%). Hậu quả là gì? → Kẻ gian có vân tay hơi giống cũng dễ vào hơn. → <strong>(b) Tỷ lệ chấp nhận nhầm (<code>他人受入率</code> - FAR) sẽ tăng lên</strong>.</li></ul>" +
                         "<p>=> a = <code>本人拒否率</code>, b = <code>他人受入率</code>. Tổ hợp này tương ứng với đáp án <strong>ア</strong>.</p>" +
                         "<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>" +
                         "<ul><li><strong>Keyword chính:</strong> <strong><code>他人受入率</code> (Chấp nhận nhầm - FAR), <code>本人拒否率</code> (Từ chối nhầm - FRR)</strong>.</li>" +
                         "<li><strong>Mẹo ghi nhớ (Rất quan trọng):</strong> <strong>An ninh (<code>セキュリティ</code>) ↔ Bất tiện (<code>利便性</code>)</strong>.</li>" +
                         "<ul><li>Siết chặt An ninh (giảm <code>他人受入率</code>) → Tăng Bất tiện (tăng <code>本人拒否率</code>).</li>" +
                         "<li>Tăng Tiện lợi (giảm <code>本人拒否率</code>) → Giảm An ninh (tăng <code>他人受入率</code>).</li></ul></ul>"
      },
      {
        "question": "情報セキュリティにおける脅威のうち、脆弱性を是正するセキュリティバッチをソフトウェアに適用することが最も有効な対策になるものはどれか。",
        "options": ["総当たり攻撃", "ソーシャルエンジニアリング", "パスワードリスト攻撃", "パッファオーバーフロー"],
        "answer": 3,
        "explanation": "<h3><strong>Bản dịch</strong></h3>" +
                         "<ul><li><strong>Câu hỏi:</strong> Đối với mối đe dọa nào sau đây, việc cài đặt <strong>bản vá bảo mật (<code>セキュリティバッチ</code>)</strong> để sửa <strong>lỗ hổng (<code>脆弱性</code>)</strong> là biện pháp hiệu quả nhất?</li>" +
                         "<li><strong>ア.</strong> Tấn công Brute-force (<code>総当たり攻撃</code>)</li>" +
                         "<li><strong>イ.</strong> Tấn công phi kỹ thuật (<code>ソーシャルエンジニアリング</code>)</li>" +
                         "<li><strong>ウ.</strong> Tấn công danh sách mật khẩu (<code>パスワードリスト攻撃</code>)</li>" +
                         "<li><strong>エ.</strong> Tràn bộ đệm (<code>パッファオーバーフロー</code> - Buffer Overflow)</li></ul>" +
                         "<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>" +
                         "<ul><li><strong>ア. 総当たり攻撃 (Brute-force):</strong> ❌ Sai. Tấn công này nhắm vào điểm yếu của 'mật khẩu' (thử mọi mật khẩu có thể). Biện pháp đối phó là chính sách mật khẩu mạnh, khóa tài khoản sau khi sai nhiều lần, dùng CAPTCHA... không phải là 'vá' phần mềm.</li>" +
                         "<li><strong>イ. ソーシャルエンジニアリング (Social Engineering):</strong> ❌ Sai. Tấn công này nhắm vào điểm yếu của 'con người' (lừa đảo, thao túng tâm lý). Biện pháp đối phó là đào tạo, nâng cao nhận thức, không thể vá bằng phần mềm.</li>" +
                         "<li><strong>ウ. パスワードリスト攻撃 (Password List Attack):</strong> ❌ Sai. Tấn công này cũng nhắm vào 'mật khẩu' (thử các mật khẩu bị rò rỉ từ nơi khác). Biện pháp đối phó tương tự Brute-force.</li>" +
                         "<li><strong>エ. パッファオーバーフロー (Buffer Overflow):</strong> ✅ <strong>Đúng.</strong> <strong>Tràn bộ đệm</strong> là một loại tấn công khai thác <strong>lỗi lập trình (một loại <code>脆弱性</code> - lỗ hổng)</strong> trong phần mềm, khiến chương trình ghi dữ liệu vượt ra ngoài vùng đệm được cấp phát, cho phép kẻ tấn công chèn và thực thi mã độc. Do đó, cách khắc phục triệt để nhất chính là cài đặt <strong>bản vá (<code>バッチ</code>)</strong> do nhà sản xuất cung cấp để sửa lỗi lập trình đó.</li></ul>" +
                         "<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>" +
                         "<ul><li><strong>Keyword chính:</strong> <strong><code>脆弱性</code> (Lỗ hổng), <code>セキュリティバッチ</code> (Bản vá bảo mật)</strong>.</li>" +
                         "<li><strong>Mẹo ghi nhớ:</strong> Bản vá là để sửa **lỗi phần mềm**. Hãy tìm xem tấn công nào trong danh sách là do **lỗi lập trình** gây ra. (Buffer Overflow, SQL Injection, XSS... đều là các lỗi/lỗ hổng phần mềm).</li></ul>"
      },
      {
        'question': '携帯電話で用いられる電波に関する次の記述中の a, b に入れる字句の適切な組合せはどれか。<br>電波には、周波数が a ほど回り込みやすくなり障害物の裏にも届きやすいという性質がある。日本国内の携帯電話で使用される周波数のうち，700 b 帯～900 b 帯の周波数帯域はこの性質をもちつながりやすいことなどから，プラチナバンドと呼ばれている。<br><img src=\'img/pic71.png\' width=\'240px\'>',
        'options': ['ア', 'イ', 'ウ', 'エ'],
        'answer': 3,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Sóng điện thoại có đặc tính là tần số càng <strong>(a)</strong> thì càng dễ uốn cong (<code>回り込みやすい</code>) và đi vòng qua vật cản. Ở Nhật, dải tần 700 <strong>(b)</strong> ~ 900 <strong>(b)</strong> được gọi là "Băng tần Bạch kim" (<code>プラチナバンド</code>) vì có đặc tính này.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<p>Phân tích các chỗ trống:</p>' +
                         '<ul><li><strong>(a):</strong> Sóng vô tuyến có một đặc tính vật lý cơ bản: Tần số càng <strong>thấp (<code>低い</code>)</strong> thì bước sóng (<code>波長</code>) càng dài, giúp nó dễ nhiễu xạ (uốn cong, đi vòng) hơn khi gặp vật cản. Sóng tần số cao (như 5G mmWave) thì đi thẳng và dễ bị chặn hơn. Do đó, (a) là <strong><code>低い</code> (thấp)</strong>.</li>' +
                         '<li><strong>(b):</strong> Băng tần 700-900 là một dải tần số tương đối thấp trong viễn thông di động. Đơn vị đo tần số ở dải này là <strong>MHz</strong> (Megahertz). (Các dải tần Wi-Fi hay 5G cao hơn được đo bằng GHz).</li></ul>' +
                         '<p>=> Vậy, a = <code>低い</code> (thấp), b = <code>MHz</code>. Tổ hợp này tương ứng với đáp án <strong>エ</strong>.</p>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>プラチナバンド</code> (Platinum Band), <code>周波数</code> (Tần số), <code>回り込みやすい</code> (Dễ đi vòng)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> Sóng <strong>thấp (<code>低い</code>)</strong> → đi <strong>xa</strong>, xuyên <strong>tốt</strong> (như radio AM). \'Băng tần Bạch kim\' (Platinum Band) là băng tần \'xịn\', \'quý\' (như bạch kim) vì nó có độ phủ sóng tốt, tức là nó phải là băng tần <strong>thấp (700-900 MHz)</strong>.</li></ul>'
      },
      {
        'question': '見る人に意図が伝わりやすいデザインにするための四つの原則に関する次の記述中のa、bに入れる字句の適切な組合せはどれか。<br>【四つの原則】<br>近接 : 互いに関連する要素は近づけてグループにする。<br>a : 要素を意図したルールに基づき配置する。<br>反復 : 要素ごとにデザインルールを繰り返す。<br>b : 要素ごとの大小や強弱などの違いを明確にする。<br><img src=\'img/pic72.png\' width=\'240px\'>',
        'options': ['ア', 'イ', 'ウ', 'エ'],
        'answer': 1,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Đây là 4 nguyên tắc thiết kế. Hãy điền vào (a) và (b).</li>' +
                         '<li><strong>Gần (<code>近接</code>):</strong> Các yếu tố liên quan thì đặt gần nhau.</li>' +
                         '<li><strong>(a) :</strong> Sắp xếp (<code>配置</code>) các yếu tố dựa trên một quy tắc (đường gióng).</li>' +
                         '<li><strong>Lặp lại (<code>反復</code>):</strong> Lặp lại các quy tắc thiết kế (ví dụ: font, màu) cho các yếu tố.</li>' +
                         '<li><strong>(b) :</strong> Làm rõ sự khác biệt (<code>違いを明確</code>) về lớn/nhỏ, mạnh/yếu.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<p>Đây là 4 nguyên tắc cơ bản trong thiết kế (thường được biết đến với từ viết tắt <strong>CRAP</strong>):</p>' +
                         '<ul><li><strong>Proximity (<code>近接</code> - Gần):</strong> Đã có.</li>' +
                         '<li><strong>Repetition (<code>反復</code> - Lặp lại):</strong> Đã có.</li>' +
                         '<li><strong>(a) Alignment (<code>整列</code> - Căn chỉnh):</strong> "Sắp xếp các yếu tố theo một quy tắc/đường kẻ vô hình" chính là định nghĩa của Căn chỉnh. Nó giúp thiết kế gọn gàng, có trật tự.</li>' +
                         '<li><strong>(b) Contrast (<code>対比</code> - Tương phản):</strong> "Làm rõ sự khác biệt về lớn/nhỏ, mạnh/yếu" chính là định nghĩa của Tương phản. Nó giúp tạo điểm nhấn và phân cấp thông tin.</li></ul>' +
                         '<p>=> Vậy, a = <code>整列</code> (Căn chỉnh), b = <code>対比</code> (Tương phản). Tổ hợp này tương ứng với đáp án <strong>イ</strong>.</p>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>デザインの原則</code> (Nguyên tắc thiết kế)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> Hãy nhớ từ viết tắt <strong>CRAP</strong>:</li>' +
                         '<ul><li><strong>C</strong>ontrast (Tương phản - <code>対比</code>) → Làm rõ sự khác biệt.</li>' +
                         '<li><strong>R</strong>epetition (Lặp lại - <code>反復</code>) → Lặp lại cho nhất quán.</li>' +
                         '<li><strong>A</strong>lignment (Căn chỉnh - <code>整列</code>) → Sắp xếp theo hàng lối.</li>' +
                         '<li><strong>P</strong>roximity (Gần nhau - <code>近接</code>) → Gom nhóm những thứ liên quan.</li></ul></ul>'
      },
      {
        'question': 'Webサービスを狙った攻撃に関する記述と攻撃の名称の適切な組合せはどれか。<br>a Webサービスが利用しているソフトウェアに脆弱性の存在が判明したとき、その修正プログラムが提供される前に、この脆弱性を突いて攻撃する。<br>b 複数のコンピュータから大量のパケットを一斉に送り付けることによって，Webサービスを正常に提供できなくさせる。<br>c 理論的にあり得るパスワードのパターンを順次試すことによって、正しいパスワードを見つけ、攻撃対象の Webサービスに侵入する。<br><img src=\'img/pic73.png\' width=\'490px\'>',
        'options': ['ア', 'イ', 'ウ', 'エ'],
        'answer': 2,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Hãy ghép nối các mô tả tấn công (a, b, c) với tên gọi đúng.</li>' +
                         '<li><strong>a.</strong> Tấn công một lỗ hổng (<code>脆弱性</code>) <strong>trước khi có bản vá (<code>修正プログラムが提供される前</code>)</strong>.</li>' +
                         '<li><strong>b.</strong> Gửi một lượng lớn gói tin từ <strong>nhiều máy tính (<code>複数のコンピュータ</code>)</strong> để làm sập dịch vụ (từ chối dịch vụ).</li>' +
                         '<li><strong>c.</strong> <strong>Thử lần lượt (<code>順次試す</code>)</strong> các mẫu mật khẩu có thể có về mặt lý thuyết để tìm ra mật khẩu đúng.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>Mô tả a:</strong> Tấn công một lỗ hổng chưa được biết đến hoặc chưa có bản vá. Đây là định nghĩa chính xác của tấn công <strong>Zero-day (<code>ゼロデイ攻撃</code>)</strong> (tấn công vào "ngày thứ 0", khi nhà cung cấp chưa có ngày nào để sửa lỗi).</li>' +
                         '<li><strong>Mô tả b:</strong> Tấn công Từ chối dịch vụ (Denial of Service) nhưng được thực hiện "Phân tán" (Distributed) từ <strong>nhiều máy tính (<code>複数のコンピュータ</code>)</strong>. Đây là định nghĩa của <strong>DDoS (Distributed Denial of Service)</strong>.</li>' +
                         '<li><strong>Mô tả c:</strong> <strong>Thử lần lượt (<code>順次試す</code>)</strong> mọi khả năng của mật khẩu. Đây là định nghĩa của tấn công <strong>Brute-force (<code>総当たり攻撃</code> - Tổng tấn công)</strong>.</li></ul>' +
                         '<p>=> Ghép nối lại, ta có: a = <code>ゼロデイ攻撃</code>, b = <code>DDoS攻撃</code>, c = <code>総当たり攻撃</code>. Tổ hợp này tương ứng với đáp án <strong>ウ</strong>.</p>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Mẹo ghi nhớ:</strong></li>' +
                         '<ul><li><strong>Zero-day:</strong> \'0 ngày\' để vá lỗi (<code>修正プログラムが提供される前</code>).</li>' +
                         '<li><strong>DDoS:</strong> Chữ <strong>D</strong> đầu tiên là \'Distributed\' = Phân tán (<code>複数のコンピュータ</code>).</li>' +
                         '<li><strong>総当たり (Tổng đương):</strong> \'Tổng\' = tất cả, \'đương\' = thử → Thử tất cả (<code>順次試す</code>).</li></ul></ul>'
      },
      {
        'question': 'デジタルフォレンジックスの説明として、適切なものはどれか。',
        'options': ['コンピュータに関する犯罪や法的紛争が生じた際に、コンピュータから削除された電子メールを復元するなどして、証拠を収集し保全すること', 'システムを実際に攻撃して脆弱性の有無を調べること', '通信経路を暗号化するなどして、公衆回線をあたかも専用回線であるかのように利用すること', '電子メールやファイルなどのハッシュデータを本人の秘密鍵で暗号化すること'],
        'answer': 0,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Mô tả nào phù hợp với <strong>Điều tra số (<code>デジタルフォレンジックス</code> - Digital Forensics)</strong>?</li>' +
                         '<li><strong>ア.</strong> Khi xảy ra tội phạm hoặc tranh chấp pháp lý, tiến hành <strong>thu thập và bảo quản bằng chứng (<code>証拠を収集し保全</code>)</strong> từ máy tính (ví dụ: khôi phục email đã xóa).</li>' +
                         '<li><strong>イ.</strong> Thực sự tấn công hệ thống để điều tra xem có lỗ hổng hay không.</li>' +
                         '<li><strong>ウ.</strong> Mã hóa đường truyền để sử dụng mạng công cộng như thể là đường truyền riêng.</li>' +
                         '<li><strong>エ.</strong> Mã hóa dữ liệu hash của email/file bằng khóa bí mật của chính người đó.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. ✅ Đúng.</strong> <strong>Digital Forensics</strong> là quy trình khoa học (có tính pháp lý) nhằm <strong>thu thập, bảo quản và phân tích bằng chứng (<code>証拠を収集し保全</code>)</strong> từ các thiết bị kỹ thuật số để phục vụ cho việc điều tra tội phạm hoặc các tranh chấp pháp lý.</li>' +
                         '<li><strong>イ. ❌ Sai.</strong> Chủ động tấn công hệ thống (với sự cho phép) để tìm lỗ hổng là <strong>Kiểm thử xâm nhập (<code>ペネトレーションテスト</code> - Penetration Test)</strong>.</li>' +
                         '<li><strong>ウ. ❌ Sai.</strong> Tạo một kênh truyền an toàn qua mạng công cộng là <strong>VPN (Virtual Private Network - <code>仮想プライベートネットワーク</code>)</strong>.</li>' +
                         '<li><strong>エ. ❌ Sai.</strong> Mã hóa hash bằng khóa bí mật là hành động tạo <strong>Chữ ký số (<code>デジタル署名</code> - Digital Signature)</strong>, dùng để xác thực và chống chối bỏ.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>デジタルフォレンジックス</code> (Digital Forensics)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> <strong>Forensics</strong> = Pháp y / Điều tra bằng chứng. <strong>Digital Forensics</strong> = Điều tra <strong>bằng chứng (<code>証拠</code>)</strong> số.</li></ul>'
      },
      {
        'question': '次の記憶媒体のうち，記憶素子として半導体メモリを用いているものだけを全て挙げたものはどれか。<br>a CD-ROM<br>b DVD-RAM<br>c RAM<br>d SSD<br>e USBメモリ',
        'options': ['a,b,c', 'a,b,e', 'c,d,e', 'c,e'],
        'answer': 2,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Thiết bị nào sau đây sử dụng <strong>bộ nhớ bán dẫn (<code>半導体メモリ</code>)</strong> làm phần tử lưu trữ?</li>' +
                         '<li><strong>a.</strong> CD-ROM</li>' +
                         '<li><strong>b.</strong> DVD-RAM</li>' +
                         '<li><strong>c.</strong> RAM</li>' +
                         '<li><strong>d.</strong> SSD</li>' +
                         '<li><strong>e.</strong> USBメモリ (Bộ nhớ USB)</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<p><strong>Bộ nhớ bán dẫn (<code>半導体メモリ</code>)</strong> là bộ nhớ dùng chip điện tử (transistor), không có bộ phận cơ quay hoặc đĩa quay.</p>' +
                         '<ul><li><strong>a, b. CD-ROM, DVD-RAM:</strong> ❌ Sai. Đây là các loại <strong>đĩa quang (<code>光ディスク</code>)</strong>. Chúng lưu trữ dữ liệu bằng các lỗ nhỏ trên bề mặt đĩa và đọc/ghi bằng tia laser trên một đĩa quay.</li>' +
                         '<li><strong>c. RAM (Random Access Memory):</strong> ✅ <strong>Đúng.</strong> Là bộ nhớ truy cập ngẫu nhiên, được làm từ các chip bán dẫn (DRAM/SRAM).</li>' +
                         '<li><strong>d. SSD (Solid State Drive):</strong> ✅ <strong>Đúng.</strong> Ổ cứng thể rắn, sử dụng bộ nhớ flash, là một loại bộ nhớ bán dẫn (không có bộ phận cơ quay như HDD).</li>' +
                         '<li><strong>e. USBメモリ (Bộ nhớ USB):</strong> ✅ <strong>Đúng.</strong> Bộ nhớ USB cũng sử dụng công nghệ flash, là bộ nhớ bán dẫn.</li></ul>' +
                         '<p>=> Vậy, các thiết bị phù hợp là c, d, và e.</p>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>半導体メモリ</code> (Bộ nhớ bán dẫn)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> Bộ nhớ bán dẫn là những thứ \'im lặng\' (không có tiếng động cơ/đĩa quay), ví dụ như <strong>RAM, SSD, USB, thẻ nhớ</strong>. Ngược lại là bộ nhớ cơ/quang (HDD, CD, DVD).</li></ul>'
      },
      {
        'question': '商品の税込価格を計算する表計算のワークシートがある。セルB1には消費税率が入力されており，セルB4～B6には税抜価格が入力されている。セルC4～C6に税込価格を表示するために，セルC4に式を入力し，セルC5、C6に複写する。セルC4に入力する式はどれか。<br><img src=\'img/pic76.png\' width=\'433px\'>',
        'options': ['B$4*(1+B$1)', 'B$4*(1+B1)', 'B4*(1+B$1)', 'B4*(1+B1)'],
        'answer': 2,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Trong Excel, ô B1 là thuế suất. Cột B là giá chưa thuế. Cần nhập công thức nào vào ô C4 (tính giá có thuế) rồi <strong>sao chép (<code>複写する</code>)</strong> xuống C5, C6?</li>' +
                         '<li><strong>Công thức:</strong> Giá có thuế = Giá chưa thuế * (1 + Thuế suất)</li>' +
                         '<li><strong>ア.</strong> B$4*(1+B$1)</li>' +
                         '<li><strong>イ.</strong> B$4*(1+B1)</li>' +
                         '<li><strong>ウ.</strong> B4*(1P+B$1)</li>' +
                         '<li><strong>エ.</strong> B4*(1+B1)</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<p>Đây là bài toán về <strong>Tham chiếu Tương đối</strong> (Relative) và <strong>Tuyệt đối</strong> (Absolute) trong Excel.</p>' +
                         '<p>Khi sao chép (kéo) công thức từ C4 xuống C5, C6:</p>' +
                         '<ul><li><strong>Giá chưa thuế:</strong> Phải thay đổi tương ứng theo từng dòng (từ B4 → B5 → B6). Do đó, ta cần sử dụng <strong>tham chiếu tương đối</strong> cho cột B, tức là <code>B4</code> (không có dấu <code>$</code>).</li>' +
                         '<li><strong>Thuế suất:</strong> Luôn luôn nằm ở ô B1, <strong>không được thay đổi</strong> khi sao chép (phải luôn là B1). Do đó, ta cần sử dụng <strong>tham chiếu tuyệt đối</strong> bằng cách khóa cố định dòng số 1, tức là <code>B$1</code> (ký tự <code>$</code> sẽ khóa dòng 1 lại).</li></ul>' +
                         '<p>=> Kết hợp lại, công thức đúng tại ô C4 là: <strong><code>B4*(1+B$1)</code></strong>.</p>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>複写する</code> (Sao chép), <code>$</code> (Tham chiếu tuyệt đối)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> Cái gì **thay đổi** khi kéo → không có <code>$</code>. Cái gì **đứng yên / cố định** (như ô thuế suất, ô tỷ giá) → phải có <code>$</code>. (Trong trường hợp này là <code>B$1</code>, khóa dòng 1).</li></ul>'
      },
      {
        'question': 'ネットワークやホストを監視することによって，不正アクセスや不審な通信を発見し，報告する仕組みはどれか。',
        'options': ['DMZ', 'IDS', 'アンチパスバック', 'ボット'],
        'answer': 1,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Cơ chế nào giám sát mạng và máy chủ để <strong>phát hiện (<code>発見</code>)</strong> các truy cập trái phép hoặc giao tiếp đáng ngờ và <strong>báo cáo (<code>報告</code>)</strong> lại?</li>' +
                         '<li><strong>ア.</strong> DMZ</li>' +
                         '<li><strong>イ.</strong> IDS</li>' +
                         '<li><strong>ウ.</strong> Anti-passback (Chống quay vòng thẻ)</li>' +
                         '<li><strong>エ.</strong> Bot</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. DMZ (Demilitarized Zone):</strong> ❌ Sai. Là "Vùng phi quân sự", một vùng mạng con (subnetwork) nằm giữa mạng nội bộ (Internal) và mạng bên ngoài (Internet). Đây là một <strong>kiến trúc mạng</strong>, không phải cơ chế giám sát.</li>' +
                         '<li><strong>イ. IDS (Intrusion Detection System):</strong> ✅ <strong>Đúng.</strong> Là "Hệ thống phát hiện xâm nhập". Chức năng chính của nó chính là <strong>Phát hiện (<code>発見</code> - Detection)</strong> các dấu hiệu tấn công và gửi <strong>cảnh báo/báo cáo (<code>報告</code>)</strong> cho quản trị viên.</li>' +
                         '<li><strong>ウ. アンチパスバック (Anti-passback):</strong> ❌ Sai. Là một cơ chế <strong>an ninh vật lý</strong> (dùng cho cửa từ), ngăn chặn việc một người dùng quẹt thẻ vào rồi đưa thẻ đó cho người khác đi vào ngay sau (chống quay vòng thẻ).</li>' +
                         '<li><strong>エ. ボット (Bot):</strong> ❌ Sai. Là một chương trình tự động, thường là mã độc (ví dụ: trong mạng botnet) dùng để *thực hiện* tấn công, không phải để phát hiện.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>IDS</code>, <code>発見</code> (Phát hiện), <code>報告</code> (Báo cáo)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ (Phân biệt IDS và IPS):</strong></li>' +
                         '<ul><li><strong>IDS (Detection):</strong> Chỉ <strong>Phát hiện</strong> và Báo cáo (<code>発見・報告</code>). Giống như chuông báo trộm.</li>' +
                         '<li><strong>IPS (Prevention):</strong> <strong>Phòng chống</strong>. Sẽ tự động <strong>Ngăn chặn (<code>遮断</code>)</strong> cuộc tấn công luôn. Giống như cửa sập tự động.</li></ul></ul>'
      },
      {
        'question': '手続calcMod3を呼び出したときの出力はどれか。〔プログラム〕○calcMod3()<br>整数型：totalValue, i<br>totalValue ← 0<br>for (i を1から7まで1ずつ増やす)<br>if (i ÷ 3の余りが0と等しい)<br>totalValue ← totalValue + i<br>endif<br>endfor<br>totalValue を出力する',
        'options': ['2', '3', '7', '9'],
        'answer': 3,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Kết quả đầu ra của thủ tục `calcMod3` là gì?</li>' +
                         '<li><strong>Chương trình:</strong></li>' +
                         '<ul><li>`totalValue` = 0</li>' +
                         '<li>Vòng lặp `i` từ 1 đến 7</li>' +
                         '<li>Nếu (số dư của `i` chia 3 bằng 0) thì</li>' +
                         '<li>`totalValue` = `totalValue` + `i`</li>' +
                         '<li>Kết thúc vòng lặp</li>' +
                         '<li>Xuất `totalValue`</li></ul>' +
                         '<li><strong>ア.</strong> 2</li>' +
                         '<li><strong>イ.</strong> 3</li>' +
                         '<li><strong>ウ.</strong> 7</li>' +
                         '<li><strong>エ.</strong> 9</li></ul>' +
                         '<hr><h3><strong>Phân tích chương trình (Dry Run)</strong></h3>' +
                         '<p>Đây là bài toán đọc hiểu mã giả (pseudocode).</p>' +
                         '<ol><li>Biến `totalValue` được khởi tạo bằng 0.</li>' +
                         '<li>Vòng lặp `for` chạy với `i` nhận các giá trị: 1, 2, 3, 4, 5, 6, 7.</li>' +
                         '<li>Bên trong vòng lặp, câu lệnh `if` kiểm tra xem `i` có chia hết cho 3 không (<code>i ÷ 3の余りが0</code>).</li>' +
                         '<li>Các số `i` từ 1 đến 7 chia hết cho 3 là: <strong>3</strong> và <strong>6</strong>.</li>' +
                         '<li>Theo dõi giá trị của `totalValue`:</li>' +
                         '<ul><li>Khi `i=1`: 1 % 3 != 0. Bỏ qua.</li>' +
                         '<li>Khi `i=2`: 2 % 3 != 0. Bỏ qua.</li>' +
                         '<li>Khi `i=3`: 3 % 3 == 0. `totalValue` = 0 + 3 = <strong>3</strong>.</li>' +
                         '<li>Khi `i=4`: 4 % 3 != 0. Bỏ qua.</li>' +
                         '<li>Khi `i=5`: 5 % 3 != 0. Bỏ qua.</li>' +
                         '<li>Khi `i=6`: 6 % 3 == 0. `totalValue` = 3 + 6 = <strong>9</strong>.</li>' +
                         '<li>Khi `i=7`: 7 % 3 != 0. Bỏ qua.</li></ul>' +
                         '<li>Vòng lặp kết thúc. Chương trình xuất ra giá trị cuối cùng của `totalValue` là <strong>9</strong>.</li></ol>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>i ÷ 3の余りが0</code> (Số dư khi i chia cho 3 bằng 0)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> Đây là cách viết mã giả cho phép toán "chia hết cho 3" (Modulo). Bài toán chỉ đơn giản là tính tổng các số chia hết cho 3 trong khoảng từ 1 đến 7. (3 + 6 = 9).</li></ul>'
      },
      {
        'question': 'サムネイルの説明として，適切なものはどれか。',
        'options': ['画像や文書ファイルの内容を縮小して表示したもの', '処理の内容や対象が分かる小さな絵や記号のこと', 'ネット上で利用者の分身として動作するキャラクターのこと', '複数のファイルを一つのファイルにまとめたもの'],
        'answer': 0,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Mô tả nào phù hợp với <strong>Thumbnail (<code>サムネイル</code>)</strong>?</li>' +
                         '<li><strong>ア.</strong> Thứ được hiển thị <strong>thu nhỏ (<code>縮小</code>)</strong> nội dung của tệp hình ảnh hoặc tài liệu.</li>' +
                         '<li><strong>イ.</strong> Một hình ảnh hoặc biểu tượng nhỏ để thể hiện nội dung hoặc đối tượng của một xử lý.</li>' +
                         '<li><strong>ウ.</strong> Một nhân vật hoạt động như "phân thân" (<code>分身</code>) của người dùng trên mạng.</li>' +
                         '<li><strong>エ.</strong> Thứ gộp nhiều tệp thành một tệp duy nhất.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. ✅ Đúng.</strong> <strong>Thumbnail</strong> là một <strong>phiên bản thu nhỏ (<code>縮小</code>)</strong> của một hình ảnh hoặc tài liệu (ví dụ: ảnh bìa video trên YouTube, ảnh xem trước trong thư mục), dùng để xem trước nội dung mà không cần mở tệp gốc.</li>' +
                         '<li><strong>イ. ❌ Sai.</strong> Một biểu tượng nhỏ (<code>小さな絵や記号</code>) thể hiện một hành động (Save, Print) hoặc đối tượng (Folder, File) là <strong>Icon (<code>アイコン</code>)</strong>.</li>' +
                         '<li><strong>ウ. ❌ Sai.</strong> Một nhân vật đại diện (<code>分身</code>) cho người dùng trên mạng (ví dụ: trong game, diễn đàn) là <strong>Avatar (<code>アバター</code>)</strong>.</li>' +
                         '<li><strong>エ. ❌ Sai.</strong> Gộp nhiều tệp thành một là <strong>Archive (<code>アーカイブ</code>)</strong>, thường là tệp nén (ví dụ: .zip, .rar).</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>サムネイル</code> (Thumbnail), <code>縮小</code> (Thu nhỏ)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> \'Thumb\' (ngón tay cái) + \'nail\' (móng tay) → Nhỏ như móng tay cái.</li></ul>'
      },
      {
        'question': 'AIにおいて，広範囲かつ大量のデータで訓練されたものであり，ファインチューニングなどによって文章生成AIのような様々な用途に適応できる特徴をもつものを何というか。',
        'options': ['アノテーション', 'エキスパートシステム', '基盤モデル', '畳み込みニューラルネットワーク'],
        'answer': 2,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Trong AI, mô hình nào được huấn luyện trên <strong>dữ liệu lớn và phạm vi rộng (<code>広範囲かつ大量のデータ</code>)</strong>, và có đặc điểm là có thể được <strong>tinh chỉnh (<code>ファインチューニング</code> - Fine-tuning)</strong> để thích ứng với nhiều mục đích khác nhau (như AI tạo văn bản)?</li>' +
                         '<li><strong>ア.</strong> Annotation (Gán nhãn)</li>' +
                         '<li><strong>イ.</strong> Expert System (Hệ chuyên gia)</li>' +
                         '<li><strong>ウ.</strong> Foundation Model (Mô hình nền tảng - <code>基盤モデル</code>)</li>' +
                         '<li><strong>エ.</strong> Convolutional Neural Network (Mạng nơ-ron tích chập - <code>畳み込み...</code>)</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. アノテーション (Annotation):</strong> ❌ Sai. Đây là một <strong>quy trình</strong> (process), không phải là một "mô hình". Đó là hành động gán nhãn cho dữ liệu (ví dụ: đánh dấu "con mèo" trong ảnh) để AI học.</li>' +
                         '<li><strong>イ. エキスパートシステム (Expert System):</strong> ❌ Sai. Đây là một loại AI cũ, dựa trên các quy tắc (rule-based) do con người lập trình (ví dụ: IF-THEN), không phải học từ dữ liệu lớn.</li>' +
                         '<li><strong>ウ. 基盤モデル (Foundation Model):</strong> ✅ <strong>Đúng.</strong> Đây là thuật ngữ dùng để chỉ các mô hình AI quy mô rất lớn (ví dụ: GPT-4, BERT) đã được đào tạo trước (pre-trained) trên kho dữ liệu khổng lồ. Chúng đóng vai trò là "nền tảng" (<code>基盤</code>) và có thể được "tinh chỉnh" (<code>ファインチューニング</code>) để thực hiện nhiều nhiệm vụ cụ thể (như dịch thuật, tóm tắt, trả lời câu hỏi...).</li>' +
                         '<li><strong>エ. 畳み込みニューラルネットワーク (CNN):</strong> ❌ Sai. Đây là một <strong>kiến trúc</strong> AI cụ thể, chuyên dụng cho xử lý hình ảnh, không phải thuật ngữ chung cho mô hình học từ dữ liệu lớn.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>基盤モデル</code> (Foundation Model), <code>大量のデータ</code> (Dữ liệu lớn), <code>ファインチューニング</code> (Fine-tuning)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> Mô hình làm \'nền tảng\' (<code>基盤</code>) cho nhiều ứng dụng khác → <strong>Foundation Model</strong>.</li></ul>'
      },
      {
        'question': 'イメージスキャナーで読み取った紙の書類の画像から，印刷文字や手書きの文字を読み取り，テキストデータに変換する技術を何と呼ぶか。',
        'options': ['CCD', 'DVI', 'GPU', 'OCR'],
        'answer': 3,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Công nghệ nào <strong>đọc chữ (<code>文字を読み取り</code>)</strong> (in hoặc viết tay) từ hình ảnh của tài liệu giấy và <strong>chuyển đổi (<code>変換</code>)</strong> chúng thành <strong>dữ liệu văn bản (<code>テキストデータ</code>)</strong>?</li>' +
                         '<li><strong>ア.</strong> CCD</li>' +
                         '<li><strong>イ.</strong> DVI</li>' +
                         '<li><strong>ウ.</strong> GPU</li>' +
                         '<li><strong>エ.</strong> OCR</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. CCD (Charge-Coupled Device):</strong> ❌ Sai. Là một loại cảm biến hình ảnh (image sensor) được sử dụng bên trong máy ảnh kỹ thuật số và máy quét (scanner) để *chụp* hình ảnh, chứ không phải *đọc chữ* từ hình ảnh.</li>' +
                         '<li><strong>イ. DVI (Digital Visual Interface):</strong> ❌ Sai. Là một chuẩn kết nối video (cắm cáp) để truyền tín hiệu từ máy tính đến màn hình.</li>' +
                         '<li><strong>ウ. GPU (Graphics Processing Unit):</strong> ❌ Sai. Là bộ xử lý đồ họa, dùng để xử lý và hiển thị hình ảnh.</li>' +
                         '<li><strong>エ. OCR (Optical Character Recognition):</strong> ✅ <strong>Đúng.</strong> Là "Nhận dạng ký tự quang học". Chức năng của nó chính xác là đọc các ký tự (<code>Character</code>) từ một hình ảnh và chuyển đổi chúng thành văn bản (text) mà máy tính có thể chỉnh sửa được.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>OCR</code>, <code>文字を読み取り</code> (Đọc chữ), <code>テキストデータに変換</code> (Chuyển thành dữ liệu văn bản)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> <strong>O</strong>ptical <strong>C</strong>haracter <strong>R</strong>ecognition → Nhận dạng <strong>Ký tự (Character - <code>文字</code>)</strong>.</li></ul>'
      },
      {
        'question': 'あるコンピュータのデータベースの内容を他のコンピュータのデータベースに複製して，両者の内容が一致するように同期させるDBMSの機能はどれか。',
        'options': ['アーカイブ', 'バックアップ', 'レプリケーション', 'ロールバック'],
        'answer': 2,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Chức năng nào của DBMS <strong>sao chép (<code>複製</code>)</strong> nội dung của một CSDL sang một CSDL khác và <strong>đồng bộ hóa (<code>同期させる</code>)</strong> để nội dung của chúng khớp nhau?</li>' +
                         '<li><strong>ア.</strong> Archive (Lưu trữ)</li>' +
                         '<li><strong>イ.</strong> Backup (Sao lưu)</li>' +
                         '<li><strong>ウ.</strong> Replication (Nhân bản)</li>' +
                         '<li><strong>エ.</strong> Rollback (Hủy bỏ)</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. アーカイブ (Archive):</strong> ❌ Sai. Là hành động di chuyển dữ liệu cũ (ít dùng) ra khỏi CSDL chính để lưu trữ lâu dài (ví dụ: vào băng từ), nhằm giảm tải cho CSDL.</li>' +
                         '<li><strong>イ. バックアップ (Backup):</strong> ❌ Sai. Là tạo một bản sao lưu của CSDL tại một thời điểm (snapshot). Nó không tự động đồng bộ (<code>同期</code>) liên tục; nó chỉ là một bản sao tĩnh.</li>' +
                         '<li><strong>ウ. レプリケーション (Replication):</strong> ✅ <strong>Đúng.</strong> Là quá trình tạo và duy trì các bản sao (replica) của một cơ sở dữ liệu trên nhiều máy chủ khác nhau. Điểm mấu chốt là nó có cơ chế <strong>tự động đồng bộ hóa (<code>同期</code>)</strong> các thay đổi (thêm, sửa, xóa) từ máy chủ chính (master) sang máy chủ phụ (slave) để giữ cho chúng luôn giống nhau.</li>' +
                         '<li><strong>エ. ロールバック (Rollback):</strong> ❌ Sai. Là thao tác hủy bỏ một giao dịch (Transaction) đang thực hiện dở dang để đưa CSDL về trạng thái trước khi bắt đầu giao dịch đó.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>レプリケーション</code> (Replication), <code>複製</code> (Sao chép), <code>同期させる</code> (Đồng bộ hóa)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ (Phân biệt Backup và Replication):</strong></li>' +
                         '<ul><li><strong>Backup:</strong> Chụp ảnh 1 lần rồi cất đi (để phòng khi cháy nhà).</li>' +
                         '<li><strong>Replication:</strong> Có 2 cái nhà giống hệt nhau, nhà chính sửa gì thì nhà phụ sửa y hệt ngay lập tức (<code>同期</code>).</li></ul></ul>'
      },
      {
        'question': 'ISMSの運用にPDCAモデルを採用している組織において，C(Check)で実施することの例として，適切なものはどれか。',
        'options': ['業務内容の監査結果に基づいた是正処置として，サーバの監視方法を変更する', '具体的な対策と目標を決めるために，サーバ室内の情報資産を洗い出す', 'サーバ管理者の業務内容を第三者が客 quan的に評価する', '定められた運用手順に従ってサーバの動作を監視する'],
        'answer': 2,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Trong một tổ chức vận hành ISMS theo mô hình PDCA, đâu là ví dụ về hoạt động thuộc bước <strong>C (Check)</strong>?</li>' +
                         '<li><strong>ア.</strong> Dựa trên kết quả kiểm toán, thực hiện <strong>hành động khắc phục (<code>是正処置</code>)</strong> bằng cách thay đổi phương pháp giám sát.</li>' +
                         '<li><strong>イ.</strong> Để quyết định mục tiêu và đối sách, tiến hành <strong>liệt kê (<code>洗い出す</code>)</strong> tài sản thông tin trong phòng máy chủ.</li>' +
                         '<li><strong>ウ.</strong> <strong>Bên thứ ba (<code>第三者</code>)</strong> <strong>đánh giá (<code>評価する</code>)</strong> một cách khách quan nội dung công việc của người quản lý máy chủ.</li>' +
                         '<li><strong>エ.</strong> <strong>Giám sát (<code>監視する</code>)</strong> hoạt động của máy chủ <strong>theo quy trình đã định (<code>手順に従って</code>)</strong>.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<p>Chu trình PDCA bao gồm:</p>' +
                         '<ul><li><strong>P (Plan):</strong> Lập kế hoạch (Xây dựng chính sách, mục tiêu, quy trình).</li>' +
                         '<li><strong>D (Do):</strong> Thực hiện (Vận hành theo quy trình đã lập).</li>' +
                         '<li><strong>C (Check):</strong> Kiểm tra (Giám sát, đo lường, đánh giá, kiểm toán).</li>' +
                         '<li><strong>A (Act):</strong> Hành động (Cải tiến, khắc phục dựa trên kết quả kiểm tra).</li></ul>' +
                         '<p>Xét các lựa chọn:</p>' +
                         '<ul><li><strong>ア. ❌ Act (A).</strong> "Thực hiện hành động khắc phục (<code>是正処置</code>)" dựa trên kết quả kiểm tra là bước <strong>Act</strong>.</li>' +
                         '<li><strong>イ. ❌ Plan (P).</strong> "Liệt kê tài sản" và "quyết định mục tiêu" là các bước nền tảng của <strong>Plan</strong> (Lập kế hoạch).</li>' +
                         '<li><strong>ウ. ✅ Check (C).</strong> "Bên thứ ba đánh giá một cách khách quan (<code>客観的に評価する</code>)" chính là bản chất của bước <strong>Check</strong> (Kiểm tra, Kiểm toán nội bộ).</li>' +
                         '<li><strong>エ. ❌ Do (D).</strong> "Giám sát theo quy trình đã định" là hành động <strong>Do</strong> (Thực thi) công việc vận hành hàng ngày.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>C(Check)</code></strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> <strong>C</strong>heck = <strong>K</strong>iểm tra, <strong>Đ</strong>ánh giá (<code>評価</code>), <strong>G</strong>iám sát (<code>監査</code>). (Phân biệt với <code>監視</code> - <code>Do</code> (giám sát vận hành) và <code>評価</code> - <code>Check</code> (đánh giá hiệu quả)).</li></ul>'
      },
      {
        'question': 'ISMSにおける情報セキュリティ方針に関する記述として，適切なものはどれか。',
        'options': ['機密事項が記載されているので，伝達する範囲を社内に限定する必要がある', '情報セキュリティ対策は一度実施したら終わりではないので，ISMSを継続的に改善するコミットメントを含める必要がある', '部門の特性に応じて最適化するので，ISMSを適用する組織全体ではなく，部門ごとに定める必要がある', 'ボトムアップを前提としているので，各職場の管理者によって承認される必要がある'],
        'answer': 1,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Mô tả nào là đúng về <strong>Chính sách An ninh Thông tin (<code>情報セキュリティ方針</code>)</strong> trong ISMS?</li>' +
                         '<li><strong>ア.</strong> Vì có thông tin mật, nên cần <strong>giới hạn (<code>限定</code>)</strong> phạm vi truyền thông trong nội bộ công ty.</li>' +
                         '<li><strong>イ.</strong> Vì an ninh không phải là làm một lần là xong, nên cần bao gồm <strong>cam kết cải tiến liên tục (<code>継続的に改善するコミットメント</code>)</strong>.</li>' +
                         '<li><strong>ウ.</strong> Vì cần tối ưu cho từng bộ phận, nên cần <strong>định ra cho từng bộ phận (<code>部門ごとに定める</code>)</strong>, không phải cho toàn tổ chức.</li>' +
                         '<li><strong>エ.</strong> Vì dựa trên tiền đề bottom-up (từ dưới lên), nên cần được <strong>quản lý cấp cơ sở (<code>各職場の管理者</code>)</strong> phê duyệt.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. ❌ Sai.</strong> Chính sách (Policy) là tuyên bố cấp cao nhất, mang tính định hướng. Nó <strong>phải</strong> được truyền thông đến toàn bộ nhân viên và các bên liên quan thích hợp (kể cả bên ngoài như đối tác, khách hàng), không phải là tài liệu mật cần giới hạn.</li>' +
                         '<li><strong>イ. ✅ Đúng.</strong> Một yêu cầu cốt lõi của ISMS (và các hệ thống quản lý theo tiêu chuẩn ISO) là phải có <strong>cam kết cải tiến liên tục (<code>継続的に改善</code>)</strong>. Chính sách do lãnh đạo cao nhất ban hành phải thể hiện rõ cam kết này.</li>' +
                         '<li><strong>ウ. ❌ Sai.</strong> Chính sách (<code>方針</code>) phải được thiết lập ở cấp độ <strong>toàn tổ chức (<code>組織全体</code>)</strong> (trong phạm vi áp dụng ISMS). Dựa trên chính sách chung đó, các bộ phận mới xây dựng các quy trình, hướng dẫn (<code>手順</code>) chi tiết cụ thể cho bộ phận mình.</li>' +
                         '<li><strong>エ. ❌ Sai.</strong> Chính sách An ninh Thông tin là một cam kết chiến lược, phải được ban hành và phê duyệt bởi <strong>lãnh đạo cao nhất (<code>トップマネジメント</code>)</strong>, thể hiện sự cam kết từ trên xuống (top-down), không phải bottom-up.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>ISMS</code>, <code>方針</code> (Chính sách), <code>継続的に改善</code> (Cải tiến liên tục)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> Các hệ thống quản lý (ISO, ISMS) luôn nhấn mạnh đến 2 điều: 1. <strong>Cam kết của lãnh đạo cao nhất (<code>トップマネジメント</code>)</strong> và 2. <strong>Cải tiến liên tục (<code>継続的改善</code>)</strong>.</li></ul>'
      },
      {
        'question': 'AIにおいて，広範囲かつ大量のデータで訓練されたものであり，ファインチューニングなどによって文章生成AIのような様々な用途に適応できる特徴をもつものを何というか。',
        'options': ['アノテーション', 'エキスパートシステム', '基盤モデル', '畳み込みニューラルネットワーク'],
        'answer': 2,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Trong AI, mô hình nào được huấn luyện trên <strong>dữ liệu lớn và phạm vi rộng (<code>広範囲かつ大量のデータ</code>)</strong>, và có đặc điểm là có thể được <strong>tinh chỉnh (<code>ファインチューニング</code> - Fine-tuning)</strong> để thích ứng với nhiều mục đích khác nhau (như AI tạo văn bản)?</li>' +
                         '<li><strong>ア.</strong> Annotation (Gán nhãn)</li>' +
                         '<li><strong>イ.</strong> Expert System (Hệ chuyên gia)</li>' +
                         '<li><strong>ウ.</strong> Foundation Model (Mô hình nền tảng - <code>基盤モデル</code>)</li>' +
                         '<li><strong>エ.</strong> Convolutional Neural Network (Mạng nơ-ron tích chập - <code>畳み込み...</code>)</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. アノテーション (Annotation):</strong> ❌ Sai. Đây là một <strong>quy trình</strong> (process), không phải là một \'mô hình\'. Đó là hành động gán nhãn cho dữ liệu (ví dụ: đánh dấu \'con mèo\' trong ảnh) để AI học.</li>' +
                         '<li><strong>イ. エキスパートシステム (Expert System):</strong> ❌ Sai. Đây là một loại AI cũ, dựa trên các quy tắc (rule-based) do con người lập trình (ví dụ: IF-THEN), không phải học từ dữ liệu lớn.</li>' +
                         '<li><strong>ウ. 基盤モデル (Foundation Model):</strong> ✅ <strong>Đúng.</strong> Đây là thuật ngữ dùng để chỉ các mô hình AI quy mô rất lớn (ví dụ: GPT-4, BERT) đã được đào tạo trước (pre-trained) trên kho dữ liệu khổng lồ. Chúng đóng vai trò là \'nền tảng\' (<code>基盤</code>) và có thể được \'tinh chỉnh\' (<code>ファインチューニング</code>) để thực hiện nhiều nhiệm vụ cụ thể (như dịch thuật, tóm tắt, trả lời câu hỏi...).</li>' +
                         '<li><strong>エ. 畳み込みニューラルネットワーク (CNN):</strong> ❌ Sai. Đây là một <strong>kiến trúc</strong> AI cụ thể, chuyên dụng cho xử lý hình ảnh, không phải thuật ngữ chung cho mô hình học từ dữ liệu lớn.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>基盤モデル</code> (Foundation Model), <code>大量のデータ</code> (Dữ liệu lớn), <code>ファインチューニング</code> (Fine-tuning)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> Mô hình làm \'nền tảng\' (<code>基盤</code>) cho nhiều ứng dụng khác → <strong>Foundation Model</strong>.</li></ul>'
      },
      {
        'question': '動物が写っている大量の画像から犬や猫などの特徴を自動的に抽出して、動物の種類を識別できるようにするAIの技術はどれか。',
        'options': ['e-ラーニング', 'アクティブラーニング', 'アダプティブラーニング', 'ディープラーニング'],
        'answer': 3,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Công nghệ AI nào có thể <strong>tự động trích xuất đặc điểm (<code>特徴を自動的に抽出</code>)</strong> từ một lượng lớn hình ảnh động vật để nhận dạng các loài như chó, mèo?</li>' +
                         '<li><strong>ア.</strong> e-Learning (Học trực tuyến)</li>' +
                         '<li><strong>イ.</strong> Active Learning (Học tập chủ động)</li>' +
                         '<li><strong>ウ.</strong> Adaptive Learning (Học tập thích ứng)</li>' +
                         '<li><strong>エ.</strong> Deep Learning (Học sâu)</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<p>Câu hỏi này phân biệt giữa các thuật ngữ \'Learning\' dùng cho con người và cho máy tính.</p>' +
                         '<ul><li><strong>ア. e-ラーニング (e-Learning):</strong> ❌ Sai. Là phương pháp học tập của con người, sử dụng các công cụ điện tử, trực tuyến.</li>' +
                         '<li><strong>イ. アクティブラーニング (Active Learning):</strong> ❌ Sai. Là phương pháp sư phạm (cho con người) trong đó người học chủ động tham gia vào quá trình học (thảo luận, thực hành).</li>' +
                         '<li><strong>ウ. アダプティブラーニング (Adaptive Learning):</strong> ❌ Sai. Là phương pháp giáo dục (cho con người) sử dụng công nghệ để điều chỉnh nội dung học tập cho phù hợp với năng lực của từng cá nhân.</li>' +
                         '<li><strong>エ. ディープラーニング (Deep Learning):</strong> ✅ <strong>Đúng.</strong> Đây là một lĩnh vực của Machine Learning (cho máy tính), sử dụng các mạng nơ-ron nhiều lớp. Đặc điểm nổi bật của nó chính là khả năng <strong>tự động học và trích xuất các đặc trưng (<code>特徴を自動的に抽出</code>)</strong> phức tạp từ dữ liệu thô (như ảnh, âm thanh), thay vì con người phải chỉ cho nó biết \'đặc trưng\' là gì.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>ディープラーニング</code> (Deep Learning), <code>特徴を自動的に抽出</code> (Tự động trích xuất đặc trưng)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> Khi AI phải tự \'học\' các đặc điểm phức tạp từ dữ liệu thô (như ảnh) → đó là <strong>Deep Learning</strong>. (Các \'learning\' còn lại trong đáp án đều là thuật ngữ giáo dục cho con người).</li></ul>'
      },
      {
        'question': 'PKIにおいて、ある条件に当てはまるデジタル証明書の情報が公開されているリストとしてCRLがある。このリストに掲載される条件として、適切なものはどれか。',
        'options': ['有効期間が満了している', '有効期間が無期限である', '有効期間内に失効している', '有効期間を延長している'],
        'answer': 2,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Trong PKI, <strong>CRL</strong> là một danh sách các chứng thư số. Điều kiện để một chứng thư số bị đưa vào danh sách này là gì?</li>' +
                         '<li><strong>ア.</strong> Đã hết hạn (<code>有効期間が満了</code>).</li>' +
                         '<li><strong>イ.</strong> Có thời hạn vô hạn (<code>無期限</code>).</li>' +
                         '<li><strong>ウ.</strong> Bị <strong>thu hồi/hủy bỏ (<code>失効</code>) trong thời gian</strong> còn hiệu lực (<code>有効期間内</code>).</li>' +
                         '<li><strong>エ.</strong> Đang được gia hạn (<code>延長</code>).</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. ❌ Sai.</strong> Chứng thư đã hết hạn (expired) thì tự động không còn hợp lệ, không cần tốn công đưa vào danh sách CRL.</li>' +
                         '<li><strong>イ. ❌ Sai.</strong> Chứng thư số luôn có thời hạn, không có loại vô hạn.</li>' +
                         '<li><strong>ウ. ✅ Đúng.</strong> <strong>CRL (Certificate Revocation List - Danh sách thu hồi chứng thư)</strong> là một \'danh sách đen\', chứa thông tin về các chứng thư số đã <strong>bị thu hồi hoặc hủy bỏ (<code>失効</code>) trước khi hết hạn (<code>有効期間内</code>)</strong>. Lý do thu hồi có thể là do bị lộ khóa bí mật (key compromise), công ty phá sản, v.v.</li>' +
                         '<li><strong>エ. ❌ Sai.</strong> Gia hạn là một thủ tục cấp mới, không liên quan đến việc thu hồi.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>CRL</code>, <code>PKI</code>, <code>失効</code> (Thu hồi / Revoke)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> <strong>R</strong> trong C<strong>R</strong>L là <strong>R</strong>evocation (<code>失効</code>). CRL là danh sách các chứng chỉ bị "khai tử" (thu hồi) <strong>trước hạn</strong>.</li></ul>'
      },
      {
        'question': '情報セキュリティ対策を，"技術的セキュリティ対策"，"人的セキュリティ対策"及び"物理的セキュリティ対策"に分類したとき，"物理的セキュリティ対策"の例として，適切なものはどれか。',
        'options': ['業務に関係のない掲示板やSNSなどへの従業員による書込み，閲覧を防止するために，Webサーバへのアクセスログを取得し，必要に応じて通信を遮断する', 'サーバ室，執務室などの場所ごとにセキュリティレベルを設定し，従業員ごとのアクセス権が付与されたICカードで入退室管理を行う', '従業員の採用時には，守秘義務に関する契約書を取り交わし，在籍中は機密情報の取扱いに関する教育，啓発を実施する', '退職者が，在籍中のアカウントを用いた不正アクセスを行わないように，従業員の退職時にアカウントを削除する'],
        'answer': 1,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Đâu là ví dụ về <strong>"Biện pháp an ninh vật lý" (<code>物理的セキュリティ対策</code>)</strong>?</li>' +
                         '<li><strong>ア.</strong> Ghi log truy cập web và chặn truy cập để ngăn nhân viên xem SNS... (Biện pháp kỹ thuật).</li>' +
                         '<li><strong>イ.</strong> Quản lý ra vào (<code>入退室管理</code>) phòng máy chủ bằng <strong>thẻ IC (<code>ICカード</code>)</strong>.</li>' +
                         '<li><strong>ウ.</strong> Ký hợp đồng bảo mật (<code>契約書</code>) và đào tạo (<code>教育</code>) nhân viên... (Biện pháp con người).</li>' +
                         '<li><strong>エ.</strong> Xóa tài khoản (<code>アカウントを削除</code>) khi nhân viên nghỉ việc... (Biện pháp kỹ thuật/hành chính).</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<p>An ninh thông tin được chia làm 3 mảng:</p>' +
                         '<ul><li><strong>Kỹ thuật (<code>技術的</code>):</strong> Dùng công nghệ (Firewall, Antivirus, Log, Mã hóa...).</li>' +
                         '<li><strong>Con người (<code>人的</code>):</strong> Dùng quy định, đào tạo (<code>教育</code>, <code>契約</code> - Hợp đồng).</li>' +
                         '<li><strong>Vật lý (<code>物理的</code>):</strong> Dùng các rào cản vật chất (Khóa, cửa, tường, camera...).</li></ul>' +
                         '<p>Phân tích:</p>' +
                         '<ul><li><strong>ア. ❌ Biện pháp kỹ thuật.</strong> Ghi log và chặn truy cập mạng là các biện pháp kỹ thuật.</li>' +
                         '<li><strong>イ. ✅ Biện pháp vật lý.</strong> <strong>Quản lý ra vào (<code>入退室管理</code>)</strong> phòng máy chủ bằng <strong>thẻ IC (<code>ICカード</code>)</strong> là một hành động kiểm soát truy cập vật lý, bảo vệ tài sản một cách hữu hình.</li>' +
                         '<li><strong>ウ. ❌ Biện pháp con người/Hành chính.</strong> Ký hợp đồng bảo mật và đào tạo nhân viên là các biện pháp tác động đến nhận thức và hành vi của con người.</li>' +
                         '<li><strong>エ. ❌ Biện pháp kỹ thuật/Hành chính.</strong> Xóa tài khoản là một quy trình hành chính (<code>人的</code>) và được thực hiện bằng công cụ kỹ thuật (<code>技術的</code>).</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>物理的</code> (Vật lý)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> An ninh vật lý là những thứ bạn có thể "chạm" vào được hoặc "nhìn thấy" được: <strong>Cửa (<code>扉</code>), Khóa (<code>錠</code>), Thẻ từ (<code>ICカード</code>), Camera (<code>監視カメラ</code>), Hàng rào (<code>フェンス</code>)</strong>.</li></ul>'
      },
      {
        'question': 'Aさんは，Bさんから次の4種類のメッセージを受け取った。Aさんが，受け取ったメッセージを復号して読むことができるものだけを全て挙げたものはどれか。<br>a AさんとBさんとの共通鍵で暗号化したメッセージ<br>b Aさんの公開鍵で暗号化したメッセージ<br>c Bさんの公開鍵で暗号化したメッセージ<br>d Bさんの秘密鍵で暗号化したメッセージ',
        'options': ['a,b,d', 'a,c,d', 'b,d', 'c,d'],
        'answer': 0,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> A nhận 4 tin nhắn. A có thể <strong>giải mã (<code>復号</code>)</strong> và đọc được những tin nào?</li>' +
                         '<li><strong>a.</strong> Tin nhắn mã hóa bằng <strong>khóa chung (<code>共通鍵</code>)</strong> của A và B.</li>' +
                         '<li><strong>b.</strong> Tin nhắn mã hóa bằng <strong>khóa công khai (<code>公開鍵</code>) của A</strong>.</li>' +
                         '<li><strong>c.</strong> Tin nhắn mã hóa bằng <strong>khóa công khai (<code>公開鍵</code>) của B</strong>.</li>' +
                         '<li><strong>d.</strong> Tin nhắn mã hóa bằng <strong>khóa bí mật (<code>秘密鍵</code>) của B</strong>.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<p>Nguyên tắc giải mã: Bạn chỉ có thể giải mã nếu bạn sở hữu chiếc chìa khóa tương ứng. <strong>Các chìa khóa A có:</strong></p>' +
                         '<ol><li>Khóa chung (Shared Key) của A và B.</li>' +
                         '<li>Khóa bí mật (Private Key) của A.</li>' +
                         '<li>Khóa công khai (Public Key) của B (vì nó công khai).</li></ol>' +
                         '<ul><li><strong>a. ✅ Có thể.</strong> Mã hóa bằng khóa chung. A có khóa chung, A giải mã được. (Mã hóa đối xứng).</li>' +
                         '<li><strong>b. ✅ Có thể.</strong> Mã hóa bằng khóa công khai của A. Chỉ có A mới sở hữu <strong>khóa bí mật của A</strong> tương ứng, do đó A giải mã được. (Đây là cách gửi tin nhắn mật cho A).</li>' +
                         '<li><strong>c. ❌ Không thể.</strong> Mã hóa bằng khóa công khai của B. Chỉ có B (người sở hữu khóa bí mật của B) mới giải mã được.</li>' +
                         '<li><strong>d. ✅ Có thể.</strong> Mã hóa bằng khóa bí mật của B. Đây chính là cơ chế của <strong>Chữ ký số (<code>デジタル署名</code>)</strong>. Bất kỳ ai (bao gồm cả A) có <strong>khóa công khai của B</strong> đều có thể "giải mã" (xác thực) nó.</li></ul>' +
                         '<p>=> Vậy, A có thể đọc được các tin nhắn a, b, và d.</p>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Mẹo ghi nhớ (Rất quan trọng):</strong></li>' +
                         '<ul><li><strong>Gửi mật:</strong> Dùng <strong>Public Key của NGƯỜI NHẬN</strong> để Mã hóa.</li>' +
                         '<li><strong>Ký tên:</strong> Dùng <strong>Private Key của NGƯỜI GỬI</strong> để Mã hóa (ký).</li></ul>' +
                         '<li><strong>A giải mã được:</strong></li>' +
                         '<ul><li>(a) Gửi bằng khóa chung.</li>' +
                         '<li>(b) Gửi mật cho A (Mã hóa bằng Public Key của A).</li>' +
                         '<li>(d) B ký tên (Mã hóa bằng Private Key của B → A dùng Public Key của B để giải mã).</li></ul></ul>'
      },
      {
        'question': '無線LANのセキュリティ対策に関する記述として，適切なものはどれか。',
        'options': ['APIは，複数のアクセスポイントをグループ化して管理するIDである', 'SSHは，アクセスポイントをステルス化することで無線LANネットワークを隠蔽する機能である', 'VPNは，アクセスポイントに登録したMACアドレスをもつ機器以外からの接続を拒否する機能である', 'WPA2は，WEPよりも高い信頼性をもつ，無線通信の暗号化技術である'],
        'answer': 3,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Mô tả nào là đúng về các biện pháp bảo mật Wi-Fi (<code>無線LAN</code>)?</li>' +
                         '<li><strong>ア.</strong> API là ID dùng để quản lý nhóm các điểm truy cập (AP).</li>' +
                         '<li><strong>イ.</strong> SSH là chức năng ẩn mạng Wi-Fi (<code>ステルス化</code>).</li>' +
                         '<li><strong>ウ.</strong> VPN là chức năng từ chối kết nối từ các thiết bị không có địa chỉ MAC đã đăng ký.</li>' +
                         '<li><strong>エ.</strong> <strong>WPA2</strong> là công nghệ mã hóa (<code>暗号化</code>) truyền thông không dây, có độ tin cậy cao hơn <strong>WEP</strong>.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. ❌ Sai.</strong> ID dùng để quản lý nhóm các AP (để roaming) là <strong>ESSID (Extended Service Set Identifier)</strong>. (API là Giao diện lập trình ứng dụng).</li>' +
                         '<li><strong>イ. ❌ Sai.</strong> Chức năng ẩn mạng Wi-Fi (tắt phát sóng tên mạng) là <strong>Stealth SSID</strong>. (SSH là Giao thức Secure Shell, dùng để đăng nhập an toàn vào máy chủ).</li>' +
                         '<li><strong>ウ. ❌ Sai.</strong> Chức năng lọc thiết bị dựa trên địa chỉ MAC là <strong>MAC Address Filtering (<code>MACアドレスフィルタリング</code>)</strong>. (VPN là Mạng riêng ảo, tạo đường hầm mã hóa).</li>' +
                         '<li><strong>エ. ✅ Đúng.</strong> <strong>WPA2 (Wi-Fi Protected Access 2)</strong> là một tiêu chuẩn mã hóa cho mạng không dây, được tạo ra để thay thế cho chuẩn <strong>WEP (Wired Equivalent Privacy)</strong> cũ kỹ và kém an toàn hơn rất nhiều (có thể bị bẻ khóa trong vài phút). WPA2 có độ tin cậy và bảo mật cao hơn hẳn.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>WPA2</code>, <code>WEP</code>, <code>暗号化</code> (Mã hóa)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ (Thứ tự bảo mật Wi-Fi):</strong> <strong>WEP</strong> (Yếu/<code>弱い</code>) → <strong>WPA</strong> → <strong>WPA2</strong> (Mạnh/<code>高い信頼性</code>) → <strong>WPA3</strong> (Mạnh nhất).</li></ul>'
      },
      {
        'question': '情報セキュリティのリスクマネジメントにおけるリスク対応を，リスク移転，リスク回避，リスク低減及びリスク保有の四つに分けて実施することにしたとき，これらに関する記述として，適切なものはどれか。',
        'options': ['リスク対応の実施手順であり，リスク回避，リスク移転，リスク低減，リスク保有の順番で進める', 'リスク対応の実施手順であり，リスク保有，リスク低減，リスク移転，リスク回避の順番で進める', 'リスク対応の選択肢であり，管理対象としたリスクの顕在化に備えて保険を掛けておくことは，リスク回避に該当する', 'リスク対応の選択肢であり，ノートPCの紛失や盗難に備えて社外への持出しをより厳重に管理することは，リスク低減に該当する'],
        'answer': 3,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Khi phân loại 4 cách ứng phó rủi ro (Chuyển giao, Tránh né, Giảm thiểu, Chấp nhận), mô tả nào sau đây là đúng?</li>' +
                         '<li><strong>ア.</strong> Đây là một quy trình (<code>手順</code>), thực hiện theo thứ tự: Tránh né → Chuyển giao → Giảm thiểu → Chấp nhận.</li>' +
                         '<li><strong>イ.</strong> Đây là một quy trình (<code>手順</code>), thực hiện theo thứ tự: Chấp nhận → Giảm thiểu → Chuyển giao → Tránh né.</li>' +
                         '<li><strong>ウ.</strong> Đây là các lựa chọn (<code>選択肢</code>). Mua bảo hiểm (<code>保険</code>) là một ví dụ của <strong>Tránh né (<code>リスク回避</code>)</strong>.</li>' +
                         '<li><strong>エ.</strong> Đây là các lựa chọn (<code>選択肢</code>). Quản lý nghiêm ngặt hơn (<code>厳重に管理</code>) việc mang laptop ra ngoài là một ví dụ của <strong>Giảm thiểu (<code>リスク低減</code>)</strong>.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<p>Đây là 4 <strong>lựa chọn (<code>選択肢</code>)</strong> để xử lý rủi ro, không phải là một quy trình (<code>手順</code>) có thứ tự. => <strong>Loại ア và イ.</strong></p>' +
                         '<ul><li><strong>ウ. ❌ Sai.</strong> Mua bảo hiểm (<code>保険</code>) là hành động chia sẻ gánh nặng tài chính với công ty bảo hiểm. Đây là ví dụ kinh điển của <strong>Chuyển giao rủi ro (<code>リスク移転</code>)</strong>, không phải Tránh né.</li>' +
                         '<li><strong>エ. ✅ Đúng.</strong> <strong>Giảm thiểu rủi ro (<code>リスク低減</code>)</strong> là hành động bạn vẫn chấp nhận làm (vẫn cho mang laptop ra ngoài), nhưng áp dụng các biện pháp kiểm soát để giảm xác suất hoặc tác động của rủi ro (quản lý nghiêm ngặt hơn).</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Mẹo ghi nhớ 4 cách ứng phó rủi ro:</strong></li>' +
                         '<ul><li><strong><code>回避</code> (Tránh né):</strong> Không làm nữa (Ví dụ: Cấm mang laptop ra ngoài).</li>' +
                         '<li><strong><code>移転</code> (Chuyển giao):</strong> "Đẩy" rủi ro cho bên khác (Ví dụ: Mua <strong><code>保険</code> (bảo hiểm)</strong>).</li>' +
                         '<li><strong><code>低減</code> (Giảm thiểu):</strong> Vẫn làm, nhưng cẩn thận hơn (Ví dụ: <strong><code>管理</code> (Quản lý)</strong> chặt hơn, cài mã hóa...).</li>' +
                         '<li><strong><code>保有</code> (Chấp nhận):</strong> "Chuyện gì đến sẽ đến", chấp nhận rủi ro.</li></ul></ul>'
      },
      {
        'question': '従業員が使用するPCがランサムウェアに感染した場合の損害を軽減する対策例として，適切なものはどれか。',
        'options': ['PCが接続するファイルサーバのHDDのバックアップデータを定期的に取得し，ネットワークから切り離して保管する', 'PCに多要素認証の仕組みを導入する', 'PCのHDDを暗号化する', 'PCへのログイン時に，パスワードを複数回間違えたら，当該IDをロックする'],
        'answer': 0,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Biện pháp nào phù hợp để giảm thiểu thiệt hại (<code>損害を軽減</code>) khi PC bị nhiễm <strong>Ransomware (<code>ランサムウェア</code>)</strong>?</li>' +
                         '<li><strong>ア.</strong> Lấy <strong>backup (<code>バックアップ</code>)</strong> dữ liệu định kỳ và <strong>lưu trữ ngoại tuyến (<code>ネットワークから切り離して</code>)</strong>.</li>' +
                         '<li><strong>イ.</strong> Triển khai xác thực đa yếu tố (<code>多要素認証</code>) trên PC.</li>' +
                         '<li><strong>ウ.</strong> Mã hóa (<code>暗号化</code>) ổ cứng HDD của PC.</li>' +
                         '<li><strong>エ.</strong> Khóa (<code>ロック</code>) ID khi nhập sai mật khẩu nhiều lần.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<p>Ransomware là mã độc <strong>mã hóa</strong> tệp tin của bạn và đòi tiền chuộc. Biện pháp "giảm thiểu thiệt hại" (tức là làm sao để khôi phục) hiệu quả nhất là có một bản sao lưu mà ransomware không thể chạm tới.</p>' +
                         '<ul><li><strong>ア. ✅ Đúng.</strong> Đây là biện pháp hiệu quả nhất. Bằng cách có một bản <strong>sao lưu (<code>バックアップ</code>)</strong> và <strong>lưu trữ ngoại tuyến (<code>ネットワークから切り離して保管</code>)</strong>, kể cả khi máy tính bị mã hóa toàn bộ, bạn vẫn có thể khôi phục lại dữ liệu từ bản sao lưu sạch này. Nếu backup vẫn cắm vào mạng, ransomware có thể mã hóa luôn cả file backup.</li>' +
                         '<li><strong>イ, エ. ❌ Sai.</strong> Xác thực đa yếu tố và khóa tài khoản là các biện pháp *phòng chống đăng nhập trái phép*. Chúng không giúp gì khi mã độc (ransomware) đã được chạy bởi một người dùng đã đăng nhập hợp lệ (ví dụ: lỡ click vào email lừa đảo).</li>' +
                         '<li><strong>ウ. ❌ Sai.</strong> Mã hóa ổ cứng (như BitLocker) chỉ bảo vệ dữ liệu khi máy tính bị tắt (ví dụ: bị mất cắp ổ cứng). Khi máy đang chạy và người dùng đã đăng nhập, hệ điều hành sẽ giải mã các tệp một cách trong suốt. Ransomware chạy lúc này vẫn có thể đọc và *mã hóa lại* các tệp đó bằng khóa của riêng nó.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>ランサムウェア</code> (Ransomware)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> Vũ khí tối thượng chống Ransomware là <strong>Backup ngoại tuyến (offline)</strong>. (<code>ネットワークから切り離して</code>).</li></ul>'
      },
      {
        'question': '情報セキュリティにおける脅威の説明として，適切なものはどれか。',
        'options': ['攻撃者が付け込むことのできる情報システムの弱点', '情報資産が被害に遭う確率と被害規模の組合せ', '情報資産に損害を与える原因となるもの', '情報システムの弱点を利用した攻撃によって被害を受ける可能性'],
        'answer': 2,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Mô tả nào phù hợp với <strong>Mối đe dọa (<code>脅威</code> - Threat)</strong> trong an ninh thông tin?</li>' +
                         '<li><strong>ア.</strong> Điểm yếu (<code>弱点</code>) của hệ thống thông tin mà kẻ tấn công có thể lợi dụng.</li>' +
                         '<li><strong>イ.</strong> Sự kết hợp (<code>組合せ</code>) giữa xác suất xảy ra và quy mô thiệt hại.</li>' +
                         '<li><strong>ウ.</strong> <strong>Nguyên nhân (<code>原因</code>)</strong> có thể gây ra thiệt hại cho tài sản thông tin.</li>' +
                         '<li><strong>エ.</strong> Khả năng (<code>可能性</code>) bị thiệt hại do bị tấn công lợi dụng điểm yếu.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<p>Đây là 3 khái niệm cốt lõi của Quản lý rủi ro:</p>' +
                         '<ul><li><strong>ア. ❌ Sai.</strong> "Điểm yếu" (<code>弱点</code>) là <strong>Lỗ hổng (<code>脆弱性</code> - Vulnerability)</strong>.</li>' +
                         '<li><strong>イ. ❌ Sai.</strong> "Xác suất x Thiệt hại" là <strong>Mức độ rủi ro (<code>リスクレベル</code> - Risk Level)</strong>.</li>' +
                         '<li><strong>ウ. ✅ Đúng.</strong> <strong>Mối đe dọa (<code>脅威</code> - Threat)</strong> là bất kỳ <strong>nguyên nhân (<code>原因</code>)</strong> nào có thể gây hại. Ví dụ: hacker, virus, thiên tai (động đất, lũ lụt), lỗi con người...</li>' +
                         '<li><strong>エ. ❌ Sai.</strong> "Khả năng" bị thiệt hại là <strong>Rủi ro (<code>リスク</code> - Risk)</strong>.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Mẹo ghi nhớ (Công thức Rủi ro):</strong> <strong><code>リスク</code> (Rủi ro) = <code>脅威</code> (Mối đe dọa) x <code>脆弱性</code> (Lỗ hổng)</strong>.</li>' +
                         '<ul><li><strong><code>脅威</code> (Threat)</strong> = Nguồn gốc/Nguyên nhân (<code>原因</code>) (Ví dụ: Hacker, Động đất).</li>' +
                         '<li><strong><code>脆弱性</code> (Vulnerability)</strong> = Điểm yếu (<code>弱点</code>) (Ví dụ: Lỗi phần mềm, cửa không khóa).</li>' +
                         '<li><strong><code>リスク</code> (Risk)</strong> = Khả năng (<code>可能性</code>) (Ví dụ: Khả năng hacker khai thác lỗi phần mềm).</li></ul></ul>'
      },
      {
        'question': '稼働率0.9の装置で並列システムを構成したい。このシステムの稼働率を0.999とするためには，最低何台の装置で並列システムを構成する必要があるか。ここで，並列システムを構成したときに，少なくとも1台の装置が稼働していればシステムは正常に稼働しているものとする。',
        'options': ['2', '3', '4', '5'],
        'answer': 1,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Cần cấu hình một hệ thống <strong>song song (<code>並列</code>)</strong> có tỷ lệ hoạt động (<code>稼働率</code>) là 0.999. Mỗi thiết bị đơn lẻ có tỷ lệ hoạt động là 0.9. Cần tối thiểu bao nhiêu thiết bị? (Hệ thống song song chỉ hỏng khi TẤT CẢ thiết bị cùng hỏng).</li>' +
                         '<li><strong>ア.</strong> 2</li>' +
                         '<li><strong>イ.</strong> 3</li>' +
                         '<li><strong>ウ.</strong> 4</li>' +
                         '<li><strong>エ.</strong> 5</li></ul>' +
                         '<hr><h3><strong>Phân tích & Tính toán</strong></h3>' +
                         '<p>Cách tính toán dễ nhất cho hệ thống song song là tính dựa trên <strong>tỷ lệ hỏng (<code>故障率</code>)</strong>.</p>' +
                         '<ul><li>Tỷ lệ hoạt động (R) của 1 thiết bị = 0.9</li>' +
                         '<li>Tỷ lệ HỎNG (F) của 1 thiết bị = 1 - 0.9 = <strong>0.1</strong></li></ul>' +
                         '<p>Hệ thống song song chỉ hỏng khi <strong>TẤT CẢ (n) thiết bị cùng hỏng</strong>.</p>' +
                         '<ul><li>Tỷ lệ hỏng của toàn hệ thống (F<sub>total</sub>) = (Tỷ lệ hỏng của 1 thiết bị)<sup>n</sup> = (0.1)<sup>n</sup></li></ul>' +
                         '<p>Mục tiêu: Tỷ lệ hoạt động (R<sub>total</sub>) ≥ 0.999</p>' +
                         '<ul><li>Điều này có nghĩa là: Tỷ lệ hỏng (F<sub>total</sub>) ≤ 1 - 0.999 = <strong>0.001</strong></li></ul>' +
                         '<p>Ta cần tìm <code>n</code> nhỏ nhất sao cho: <strong>(0.1)<sup>n</sup> ≤ 0.001</strong></p>' +
                         '<ul><li>Thử với n = 2: (0.1)<sup>2</sup> = 0.01 (Vẫn > 0.001) → (Tỷ lệ hoạt động = 1 - 0.01 = 0.99. Chưa đủ).</li>' +
                         '<li>Thử với n = 3: (0.1)<sup>3</sup> = <strong>0.001</strong> (Thỏa mãn ≤ 0.001) → (Tỷ lệ hoạt động = 1 - 0.001 = 0.999. Đạt yêu cầu).</li></ul>' +
                         '<p>=> Vậy, cần tối thiểu <strong>3</strong> thiết bị.</p>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>並列システム</code> (Hệ thống song song), <code>稼働率</code> (Tỷ lệ hoạt động)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ (Cách tính 2 loại hệ thống):</strong></li>' +
                         '<ul><li><strong>Nối tiếp (<code>直列</code>):</strong> (Hỏng 1 cái là hỏng cả hệ thống) → Nhân tỷ lệ <strong>hoạt động</strong>: R<sub>total</sub> = R<sub>1</sub> × R<sub>2</sub></li>' +
                         '<li><strong>Song song (<code>並列</code>):</strong> (Hỏng tất cả mới hỏng) → Nhân tỷ lệ <strong>hỏng</strong>: F<sub>total</sub> = F<sub>1</sub> × F<sub>2</sub> (Sau đó lấy 1 - F<sub>total</sub>)</li></ul></ul>'
      },
      {
        'question': 'データベース設計におけるデータ分析で行うこととして，適切なものはどれか。',
        'options': ['データウェアハウスから業務ごとに必要な情報を抽出する', 'データ項目の内容が，指定された条件を満足する行だけを抽出する', '必要なデータ項目を洗い出し，項目間の関連を整理する', '膨大な情報から統計的手法などを用いて，ビジネスに活用できる情報を探索する'],
        'answer': 2,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Hoạt động nào được thực hiện trong giai đoạn <strong>phân tích dữ liệu (<code>データ分析</code>)</strong> khi <strong>thiết kế CSDL (<code>データベース設計</code>)</strong>?</li>' +
                         '<li><strong>ア.</strong> Trích xuất thông tin cần thiết từ Data Warehouse.</li>' +
                         '<li><strong>イ.</strong> Trích xuất các hàng (rows) thỏa mãn điều kiện chỉ định.</li>' +
                         '<li><strong>ウ.</strong> <strong>Liệt kê/Xác định (<code>洗い出し</code>)</strong> các mục dữ liệu cần thiết và <strong>sắp xếp, làm rõ mối quan hệ (<code>関連を整理</code>)</strong> giữa chúng.</li>' +
                         '<li><strong>エ.</strong> Khám phá thông tin hữu ích từ dữ liệu lớn bằng các phương pháp thống kê.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. ❌ Sai.</strong> Trích xuất thông tin từ kho dữ liệu (Data Warehouse) là một hoạt động <strong>BI (Business Intelligence)</strong>, diễn ra *sau khi* CSDL đã được xây dựng và vận hành.</li>' +
                         '<li><strong>イ. ❌ Sai.</strong> Lọc các hàng thỏa mãn điều kiện là một thao tác <strong>truy vấn dữ liệu (Query)</strong> (ví dụ: dùng <code>SELECT...WHERE...</code>), diễn ra *sau khi* CSDL đã được xây dựng.</li>' +
                         '<li><strong>ウ. ✅ Đúng.</strong> Giai đoạn "Phân tích dữ liệu" trong "Thiết kế CSDL" chính là quá trình <strong>xác định các mục dữ liệu (fields) cần thiết (<code>必要なデータ項目を洗い出し</code>)</strong> và <strong>sắp xếp, làm rõ mối quan hệ giữa chúng (<code>項目間の関連を整理</code>)</strong>. Đây là nền tảng để tạo ra các bảng và Sơ đồ quan hệ thực thể (ERD).</li>' +
                         '<li><strong>エ. ❌ Sai.</strong> Khám phá thông tin hữu ích (patterns) từ dữ liệu lớn là <strong>Khai phá dữ liệu (<code>データマイニング</code> - Data Mining)</strong>, diễn ra *sau khi* CSDL đã có dữ liệu.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>データベース設計</code> (Thiết kế CSDL)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> Trước khi "xây nhà" (thiết kế CSDL), bạn phải "lên danh sách vật liệu" (<code>洗い出し</code> - xác định các mục dữ liệu) và "vẽ bản thiết kế" (<code>関連を整理</code> - làm rõ mối quan hệ).</li></ul>'
      },
      {
        'question': 'OSS (Open Source Software)に関する次の記述のうち，適切なものだけを全て挙げたものはどれか。<br>a 個人だけではなく，企業や団体が開発したソフトウェアもある<br>b 著作権が放棄されている<br>c 入手したソフトウェアは，自由に再配布してもよい',
        'options': ['a,b', 'a,b,c', 'a,c', 'b,c'],
        'answer': 2,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Đâu là tất cả các mô tả đúng về <strong>OSS (Phần mềm mã nguồn mở)</strong>?</li>' +
                         '<li><strong>a.</strong> Có những phần mềm được phát triển bởi các tập đoàn, tổ chức chứ không chỉ cá nhân.</li>' +
                         '<li><strong>b.</strong> Bản quyền (<code>著作権</code>) đã bị từ bỏ (<code>放棄</code>).</li>' +
                         '<li><strong>c.</strong> Phần mềm nhận được có thể tự do phân phối lại (<code>再配布</code>).</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>a. ✅ Đúng.</strong> Phần mềm mã nguồn mở có thể được phát triển bởi cá nhân (như Linux ban đầu) hoặc bởi các tập đoàn, tổ chức lớn (ví dụ: Android của Google, React của Facebook, VS Code của Microsoft).</li>' +
                         '<li><strong>b. ❌ Sai.</strong> Đây là một hiểu lầm cực kỳ phổ biến. OSS vẫn có <strong>bản quyền (<code>著作権</code>)</strong>, người tạo ra nó vẫn là chủ sở hữu. Họ chỉ cấp cho người khác quyền sử dụng rộng rãi thông qua một <strong>giấy phép mở (<code>オープンソースライセンス</code>)</strong>. Phần mềm đã <strong>từ bỏ (<code>放棄</code>)</strong> hoàn toàn bản quyền được gọi là <strong>Public Domain (<code>パブリックドメイン</code>)</strong>.</li>' +
                         '<li><strong>c. ✅ Đúng.</strong> Quyền tự do <strong>phân phối lại (<code>再配布</code>)</strong> (miễn phí hoặc bán) là một trong những quyền tự do cốt lõi được định nghĩa trong giấy phép mã nguồn mở.</li></ul>' +
                         '<p>=> Vậy, các mô tả đúng là <strong>a và c</strong>.</p>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>OSS</code> (Mã nguồn mở)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> OSS = \'Tự do\' (Free as in Freedom) nhưng \'không vô chủ\'. Vẫn có bản quyền (<code>著作権</code>) và các quy tắc (giấy phép) đi kèm. (Phân biệt với <strong>Public Domain</strong> = Vô chủ / <code>著作権放棄</code>).</li></ul>'
      },
      {
        'question': '情報セキュリティにおいて，可用性が損なわれた事象だけを全て挙げたものはどれか。<br>a 関連取引先との電子決済システムがDoS攻撃を受け，処理ができなくなった<br>b 顧客情報管理システムの顧客情報が誤った内容のまま運用されていた<br>c 社内のサーバに不正侵入されて，社外秘の情報が漏えいした',
        'options': ['a', 'a,b', 'b,c', 'c'],
        'answer': 0,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Đâu là tất cả các sự kiện mà <strong>Tính sẵn sàng (<code>可用性</code>)</strong> bị vi phạm?</li>' +
                         '<li><strong>a.</strong> Hệ thống thanh toán điện tử bị tấn công DoS, <strong>không thể xử lý (<code>処理ができなくなった</code>)</strong> được nữa.</li>' +
                         '<li><strong>b.</strong> Thông tin khách hàng trong hệ thống bị <strong>sai (<code>誤った内容</code>)</strong> nhưng vẫn được vận hành.</li>' +
                         '<li><strong>c.</strong> Bị xâm nhập trái phép vào máy chủ, thông tin mật của công ty bị <strong>rò rỉ (<code>漏えい</code>)</strong>.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn (CIA Triad)</strong></h3>' +
                         '<p>Phân biệt 3 yếu tố của an ninh thông tin (CIA):</p>' +
                         '<ul><li><strong><code>機密性</code> (Confidentiality - Bảo mật):</strong> Ngăn chặn truy cập/xem trộm trái phép.</li>' +
                         '<li><strong><code>完全性</code> (Integrity - Toàn vẹn):</strong> Đảm bảo dữ liệu chính xác, không bị sửa đổi trái phép.</li>' +
                         '<li><strong><code>可用性</code> (Availability - Sẵn sàng):</strong> Đảm bảo hệ thống luôn sẵn sàng khi cần sử dụng.</li></ul>' +
                         '<p>Xét các trường hợp:</p>' +
                         '<ul><li><strong>a. ✅ Tính sẵn sàng (<code>可用性</code>) bị ảnh hưởng.</strong> Tấn công DoS (Denial of Service - Từ chối dịch vụ) làm cho hệ thống <strong>không thể sử dụng (<code>処理ができなくなった</code>)</strong>. Người dùng không thể truy cập dịch vụ.</li>' +
                         '<li><strong>b. ❌ Tính toàn vẹn (<code>完全性</code>) bị ảnh hưởng.</strong> Dữ liệu khách hàng <strong>sai (<code>誤った内容</code>)</strong>, nghĩa là tính chính xác, toàn vẹn của dữ liệu đã bị vi phạm.</li>' +
                         '<li><strong>c. ❌ Tính bảo mật (<code>機密性</code>) bị ảnh hưởng.</strong> Thông tin mật bị <strong>rò rỉ (<code>漏えい</code>)</strong> cho người không có thẩm quyền, nghĩa là tính bảo mật đã bị vi phạm.</li></ul>' +
                         '<p>=> Vậy, chỉ có (a) là sự kiện làm suy giảm tính sẵn sàng.</p>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Mẹo ghi nhớ (CIA Triad):</strong></li>' +
                         '<ul><li><strong><code>機密性</code> (Confidentiality)</strong> = Bị <strong>nhìn trộm</strong> (<code>漏えい</code> - rò rỉ).</li>' +
                         '<li><strong><code>完全性</code> (Integrity)</strong> = Bị <strong>sửa đổi</strong> (<code>改ざん</code>) hoặc bị <strong>sai</strong> (<code>誤った</code>).</li>' +
                         '<li><strong><code>可用性</code> (Availability)</strong> = Bị <strong>sập</strong>, <strong>dừng</strong>, <strong>dùng không được</strong> (<code>停止</code>, <code>できなくなった</code>).</li></ul></ul>'
      },
      {
        'question': '4個の要素から成るデータの並びを，次の手順を繰り返して昇順に整列するとき，整列が終了するまでに(1)から(3)の一連の手順は，何回実行されるか。ここで，最初はデータの並び全体を整列対象とする。<br>データの並び：[27, 42, 33, 12]<br>【手順】<br>(1) 整列対象中の要素の最大の値を選び，最後の要素と入れ替える<br>(2) 最後の要素を整列対象から外す<br>(3) 整列対象に要素が1個以上残っていれば，(1)から(3)の一連の手順を実行する<br>残っていなければ，整列完了なので終了する',
        'options': ['2', '3', '4', '5'],
        'answer': 2,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Khi sắp xếp mảng [27, 42, 33, 12] theo thứ tự tăng dần bằng thuật toán sau, chu trình (1)-(3) được thực hiện bao nhiêu lần?</li>' +
                         '<li><strong>Thuật toán (Selection Sort - Tìm Max):</strong></li>' +
                         '<li>(1) Tìm giá trị LỚN NHẤT trong phần đang xét, đổi chỗ nó với phần tử CUỐI CÙNG.</li>' +
                         '<li>(2) Loại phần tử cuối cùng ra khỏi phạm vi xét.</li>' +
                         '<li>(3) Nếu vẫn còn 1 phần tử trở lên, lặp lại. Nếu không, kết thúc.</li></ul>' +
                         '<hr><h3><strong>Phân tích chương trình (Dry Run)</strong></h3>' +
                         '<p>Đây là thuật toán Sắp xếp chọn (Selection Sort), mỗi vòng lặp sẽ tìm phần tử lớn nhất và đưa nó về đúng vị trí cuối cùng của vùng đang xét.</p>' +
                         '<ul><li><strong>Lần 1:</strong></li>' +
                         '<ul><li>Phạm vi: [<strong>27, 42, 33, 12</strong>] (4 phần tử)</li>' +
                         '<li>(1) Max là 42. Đổi chỗ với 12 → [27, 12, 33, <strong>42</strong>]</li>' +
                         '<li>(2) Loại 42. Phạm vi còn: [27, 12, 33]</li>' +
                         '<li>(3) Vẫn còn 3 phần tử, tiếp tục.</li></ul>' +
                         '<li><strong>Lần 2:</strong></li>' +
                         '<ul><li>Phạm vi: [<strong>27, 12, 33</strong>] (3 phần tử)</li>' +
                         '<li>(1) Max là 33. Đổi chỗ với 33 (không đổi) → [27, 12, <strong>33</strong>]</li>' +
                         '<li>(2) Loại 33. Phạm vi còn: [27, 12]</li>' +
                         '<li>(3) Vẫn còn 2 phần tử, tiếp tục.</li></ul>' +
                         '<li><strong>Lần 3:</strong></li>' +
                         '<ul><li>Phạm vi: [<strong>27, 12</strong>] (2 phần tử)</li>' +
                         '<li>(1) Max là 27. Đổi chỗ với 12 → [12, <strong>27</strong>]</li>' +
                         '<li>(2) Loại 27. Phạm vi còn: [12]</li>' +
                         '<li>(3) Vẫn còn 1 phần tử, tiếp tục.</li></ul>' +
                         '<li><strong>Lần 4:</strong></li>' +
                         '<ul><li>Phạm vi: [<strong>12</strong>] (1 phần tử)</li>' +
                         '<li>(1) Max là 12. Đổi chỗ với 12 (không đổi) → [<strong>12</strong>]</li>' +
                         '<li>(2) Loại 12. Phạm vi còn: [] (rỗng)</li>' +
                         '<li>(3) <strong>Không còn phần tử nào (<code>残っていなければ</code>), kết thúc.</strong></li></ul></ul>' +
                         '<p>=> Tổng cộng, chuỗi thủ tục (1) đến (3) được thực hiện <strong>4</strong> lần.</p>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Mẹo ghi nhớ:</strong> Với thuật toán sắp xếp chọn (Selection Sort) cho <code>n</code> phần tử, cần <code>n-1</code> vòng lặp để *so sánh và sắp xếp*. Tuy nhiên, câu hỏi này hỏi "cho đến khi kết thúc" (<code>終了するまで</code>) và điều kiện dừng là "còn 1 phần tử trở lên thì lặp lại". Do đó, nó sẽ chạy <code>n</code> lần (lần cuối cùng là khi n=1, nó chạy nốt rồi dừng). Với 4 phần tử, cần 4 lần thực hiện.</li></ul>'
      },
      {
        'question': '関数calculateAmountOfPrizeは，業務改善の効果における改善額と短縮期間を，それぞれimprovementとperiodで受け取り，賞金額を戻り値とする。改善額が20万円で短縮期間が3日の業務改善と，改善額が5万円で短縮期間が14日の業務改善があった。この二つの賞金額の合計は何円か。ここで，改善額と短縮期間の値はそれぞれ0以上とする。<br>【プログラム】<br>○整数型：calculateAmountOfPrize(整数型：improvement, 整数型：period)<br>整数型：prize<br>if (improvement が100000より小さい)<br>if (period が7より小さい)<br>prize ←500<br>else<br>prize ←1000<br>endif<br>else:<br>if (period が7より小さい)<br>prize ←2000<br>else<br>prize ←5000<br>endif<br>endif<br>return prize',
        'options': ['1,000', '1,500', '3,000', '5,500'],
        'answer': 2,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Cho hàm tính tiền thưởng. Tính tổng tiền thưởng cho 2 trường hợp:</li>' +
                         '<li>Trường hợp 1: Cải thiện (improvement) = 200,000 yên, Thời gian (period) = 3 ngày.</li>' +
                         '<li>Trường hợp 2: Cải thiện (improvement) = 50,000 yên, Thời gian (period) = 14 ngày.</li>' +
                         '<li><strong>Code:</strong></li>' +
                         '<ul><li>Nếu (improvement < 100000)</li>' +
                         '<ul><li>Nếu (period < 7) thì prize = 500</li>' +
                         '<li>Ngược lại (period >= 7) thì prize = 1000</li></ul>' +
                         '<li>Ngược lại (improvement >= 100000)</li>' +
                         '<ul><li>Nếu (period < 7) thì prize = 2000</li>' +
                         '<li>Ngược lại (period >= 7) thì prize = 5000</li></ul></ul>' +
                         '<li><strong>ア.</strong> 1,000</li>' +
                         '<li><strong>イ.</strong> 1,500</li>' +
                         '<li><strong>ウ.</strong> 3,000</li>' +
                         '<li><strong>エ.</strong> 5,500</li></ul>' +
                         '<hr><h3><strong>Phân tích chương trình (Dry Run)</strong></h3>' +
                         '<p>Ta sẽ tính tiền thưởng cho từng trường hợp:</p>' +
                         '<ol><li><strong>Trường hợp 1: improvement = 200,000, period = 3.</strong></li>' +
                         '<ul><li><code>if (200000 < 100000)</code>? → <strong>False</strong>.</li>' +
                         '<li>Đi vào nhánh <code>else:</code> (tức là improvement >= 100000).</li>' +
                         '<li><code>if (period < 7)</code>? Tức là <code>if (3 < 7)</code>? → <strong>True</strong>.</li>' +
                         '<li><code>prize ← 2000</code>.</li></ul>' +
                         '<li><strong>Trường hợp 2: improvement = 50,000, period = 14.</strong></li>' +
                         '<ul><li><code>if (50000 < 100000)</code>? → <strong>True</strong>.</li>' +
                         '<li>Đi vào nhánh <code>if</code> đầu tiên.</li>' +
                         '<li><code>if (period < 7)</code>? Tức là <code>if (14 < 7)</code>? → <strong>False</strong>.</li>' +
                         '<li>Đi vào nhánh <code>else</code> bên trong.</li>' +
                         '<li><code>prize ← 1000</code>.</li></ul>' +
                         '<li><strong>Tính tổng tiền thưởng:</strong></li>' +
                         '<ul><li><code>Tổng = 2000 (Trường hợp 1) + 1000 (Trường hợp 2) = 3000 yên.</code></li></ul></ol>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Mẹo ghi nhớ:</strong> Hãy đọc thật kỹ các điều kiện <code>if-else</code> lồng nhau. Dùng bút chì vạch ra 4 ô (2x2 matrix) trên giấy nháp dựa theo 2 điều kiện (improvement < 100k? và period < 7?) rồi điền 4 giá trị 500, 1000, 2000, 5000 vào 4 ô đó sẽ giúp bạn không bao giờ nhầm.</li></ul>'
      },
      {
        'question': '個人の認証に用いる要素を，知識，所有物及びバイオメトリクスの三つに分類したとき，所有物を要素として用いた認証の例はどれか。',
        'options': ['SMSを用いた認証', '虹彩の特徴を用いた認証', '筆跡や筆圧，スピードなど，文字を書くときの特徴を用いた認証', '本人が事前に設定した質問とそれに対する答えを用いた認証'],
        'answer': 0,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Khi phân loại 3 yếu tố xác thực (Kiến thức, Sở hữu, Sinh trắc học), đâu là ví dụ về xác thực dùng yếu tố <strong>Sở hữu (<code>所有物</code>)</strong>?</li>' +
                         '<li><strong>ア.</strong> Xác thực dùng <strong>SMS</strong>.</li>' +
                         '<li><strong>イ.</strong> Xác thực dùng đặc điểm <strong>mống mắt (<code>虹彩</code>)</strong>.</li>' +
                         '<li><strong>ウ.</strong> Xác thực dùng đặc điểm khi viết chữ (<strong>nét chữ, lực nhấn...</strong>).</li>' +
                         '<li><strong>エ.</strong> Xác thực dùng <strong>câu hỏi và câu trả lời</strong> do bản thân tự cài đặt.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<p>Ba yếu tố xác thực (3 Factors of Authentication):</p>' +
                         '<ul><li><strong>1. Knowledge (<code>知識</code> - Kiến thức):</strong> Cái bạn <strong>biết</strong> (Mật khẩu, PIN, Câu hỏi bí mật).</li>' +
                         '<li><strong>2. Possession (<code>所有物</code> - Sở hữu):</strong> Cái bạn <strong>có/sở hữu</strong> (Điện thoại, Thẻ IC, USB Token).</li>' +
                         '<li><strong>3. Biometrics (<code>バイオメトリクス</code> - Sinh trắc học):</strong> Cái thuộc về <strong>cơ thể/hành vi</strong> của bạn (Vân tay, Khuôn mặt, Mống mắt, Giọng nói, Chữ ký).</li></ul>' +
                         '<p>Phân tích:</p>' +
                         '<ul><li><strong>ア. ✅ Yếu tố Sở hữu (<code>所有物</code>).</strong> Xác thực bằng <strong>SMS</strong> (One-Time Password) dựa trên việc bạn phải <strong>sở hữu</strong> chiếc điện thoại (hoặc SIM) đã đăng ký để nhận được mã. Chiếc điện thoại là vật sở hữu.</li>' +
                         '<li><strong>イ. ❌ Yếu tố Sinh trắc học (<code>バイオメトリクス</code>).</strong> Mống mắt (<code>虹彩</code>) là một đặc điểm sinh học, thuộc về cơ thể bạn.</li>' +
                         '<li><strong>ウ. ❌ Yếu tố Sinh trắc học (<code>バイオメトリクス</code>).</strong> Nét chữ (<code>筆跡</code>), áp lực bút... là các đặc điểm hành vi (Behavioral Biometrics), thuộc về bạn.</li>' +
                         '<li><strong>エ. ❌ Yếu tố Kiến thức (<code>知識</code>).</strong> Câu hỏi và câu trả lời bí mật (ví dụ: "Tên con thú cưng đầu tiên của bạn là gì?") là thứ bạn phải <strong>nhớ</strong>.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Mẹo ghi nhớ 3 yếu tố xác thực:</strong></li>' +
                         '<ul><li><strong>Kiến thức (<code>知識</code>)</strong> = Cái bạn <strong>Biết</strong> (<code>知る</code>) (Phải nhớ trong đầu).</li>' +
                         '<li><strong>Sở hữu (<code>所有物</code>)</strong> = Cái bạn <strong>Có</strong> (<code>持つ</code>) (Phải cầm trong tay: <code>ICカード</code>, <code>スマホ</code>).</li>' +
                         '<li><strong>Sinh trắc (<code>バイオメトリクス</code>)</strong> = Cái <strong>Là</strong> bạn (<code>本人</code>) (Cơ thể: <code>指紋</code>, <code>虹彩</code>).</li></ul></ul>'
      }
    ]
  },
  '2024': {
  strategy: [
    {
      'question': '実用新案に関する記述として，最も適切なものはどれか。',
      'options': ['今までにない製造方法は，実用新案の対象となる。', '自然法則を利用した技術的思想の創作で高度なものだけが，実用新案の対象となる。', '新規性の審査に合格したものだけが実用新案として登録される。', '複数の物品を組み合わせて考案した新たな製品は，実用新案の対象となる。'],
      'answer': 3,
      'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                       '<ul><li><strong>Câu hỏi:</strong> Mô tả nào sau đây là phù hợp nhất về "Quyền sở hữu kiểu dáng hữu ích" (<code>実用新案</code> - Jitsuyō Shin\'an)?</li>' +
                       '<li><strong>ア:</strong> Phương pháp sản xuất (<code>製造方法</code>) chưa từng có là đối tượng của quyền này.</li>' +
                       '<li><strong>イ:</strong> Chỉ những sáng tạo ở trình độ cao (<code>高度なもの</code>) mới là đối tượng của quyền này.</li>' +
                       '<li><strong>ウ:</strong> Chỉ những thứ đã qua thẩm định tính mới (<code>新規性の審査</code>) mới được đăng ký.</li>' +
                       '<li><strong>エ:</strong> Sản phẩm mới được tạo ra bằng cách <strong>kết hợp (<code>組み合わせて</code>)</strong> nhiều vật phẩm là đối tượng của quyền này.</li></ul>' +
                       '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                       '<ul><li><strong>ア. ❌ Sai.</strong> Quyền sở hữu kiểu dáng hữu ích (<code>実用新案</code>) chỉ bảo hộ <strong>hình dáng, cấu trúc</strong> của một <strong>vật thể hữu hình</strong>. Nó không áp dụng cho các <strong>phương pháp (<code>方法</code>)</strong> (như phương pháp sản xuất) hay quy trình. Phương pháp là đối tượng của Bằng sáng chế (<code>特許</code>).</li>' +
                       '<li><strong>イ. ❌ Sai.</strong> Yêu cầu về "trình độ cao" (<code>高度</code>) là đặc điểm của <strong>Bằng sáng chế (<code>特許</code>)</strong>. Ngược lại, <code>実用新案</code> được dùng để bảo hộ những cải tiến nhỏ, không yêu cầu mức độ sáng tạo cao.</li>' +
                       '<li><strong>ウ. ❌ Sai.</strong> Nhật Bản áp dụng hệ thống <strong>đăng ký không cần thẩm định nội dung (<code>無審査登録制度</code>)</strong> đối với <code>実用新案</code>. Miễn là đáp ứng các yêu cầu cơ bản về hình thức, nó sẽ được đăng ký nhanh chóng mà không cần qua bước kiểm tra nghiêm ngặt về tính mới (<code>新規性</code>).</li>' +
                       '<li><strong>エ. ✅ Đúng.</strong> <code>実用新案</code> bảo hộ <strong>hình dáng (<code>形状</code>), cấu trúc (<code>構造</code>), hoặc sự kết hợp (<code>組合せ</code>)</strong> của một vật phẩm. Việc kết hợp các vật phẩm (ví dụ: một chiếc bút chì có gắn thêm cục tẩy) là một ví dụ điển hình được bảo hộ.</li></ul>' +
                       '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                       '<ul><li><strong>Keyword chính:</strong> <strong><code>実用新案</code> (Kiểu dáng hữu ích)</strong>.</li>' +
                       '<li><strong>Mẹo ghi nhớ (Phân biệt <code>特許</code> và <code>実用新案</code>):</strong></li>' +
                       '<ul><li><strong><code>特許</code> (Sáng chế):</strong> Bảo vệ ý tưởng, phương pháp. Yêu cầu <strong>cao (<code>高度</code>)</strong>. Phải <strong>thẩm định (<code>審査</code>)</strong>.</li>' +
                       '<li><strong><code>実用新案</code> (Kiểu dáng hữu ích):</strong> Chỉ bảo vệ <strong>hình dáng, cấu trúc, sự kết hợp (<code>形状・構造・組合せ</code>)</strong>. Yêu cầu thấp. <strong>Không cần thẩm định (<code>無審査</code>)</strong>.</li></ul></ul>'
    },
    {
      'question': '顧客の特徴に応じたきめ細かい対応を行うことによって，顧客と長期的に良好な関係を築き，顧客満足度の向上や取引関係の継続につなげる仕組みを構築したい。その仕組みの構成要素の一つとして，営業活動で入手した顧客に関する属性情報や顧客との交渉履歴などを蓄積し，社内で共有できるシステムを導入することにした。この目的を達成できるシステムとして，最も適切なものはどれか。',
      'options': ['CAEシステム', 'MRPシステム', 'SCMシステム', 'SFAシステム'],
      'answer': 3,
      'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                       '<ul><li><strong>Câu hỏi:</strong> Chúng tôi muốn xây dựng một hệ thống để duy trì quan hệ tốt với khách hàng. Một phần của hệ thống này là nơi lưu trữ và chia sẻ thông tin khách hàng, lịch sử đàm phán thu thập được từ các <strong>hoạt động kinh doanh (<code>営業活動</code>)</strong>. Hệ thống nào phù hợp nhất?</li>' +
                       '<li><strong>ア.</strong> CAE System</li>' +
                       '<li><strong>イ.</strong> MRP System</li>' +
                       '<li><strong>ウ.</strong> SCM System</li>' +
                       '<li><strong>エ.</strong> SFA System</li></ul>' +
                       '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                       '<ul><li><strong>ア. CAE (Computer Aided Engineering):</strong> ❌ Sai. Là hệ thống mô phỏng kỹ thuật, dùng trong thiết kế, R&D.</li>' +
                       '<li><strong>イ. MRP (Material Requirements Planning):</strong> ❌ Sai. Là hệ thống hoạch định nhu cầu nguyên vật liệu, dùng trong sản xuất.</li>' +
                       '<li><strong>ウ. SCM (Supply Chain Management):</strong> ❌ Sai. Là hệ thống quản lý chuỗi cung ứng, quản lý luồng hàng hóa/thông tin với các đối tác (nhà cung cấp, nhà phân phối).</li>' +
                       '<li><strong>エ. SFA (Sales Force Automation):</strong> ✅ <strong>Đúng.</strong> Là hệ thống "Tự động hóa lực lượng bán hàng", chuyên dụng để quản lý các <strong>hoạt động kinh doanh (<code>営業活動</code>)</strong>. Nó tập trung vào việc quản lý thông tin khách hàng, lịch sử tiếp xúc, tiến độ các thương vụ, và chia sẻ thông tin trong nội bộ đội ngũ bán hàng.</li></ul>' +
                       '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                       '<ul><li><strong>Keyword chính:</strong> <strong><code>営業活動</code> (Hoạt động kinh doanh/bán hàng)</strong>.</li>' +
                       '<li><strong>Mẹo ghi nhớ (Phân biệt SFA và CRM):</strong></li>' +
                       '<ul><li><strong>SFA (<code>営業</code>):</strong> Dành cho <strong>nhân viên Sales</strong> (quản lý quy trình bán hàng).</li>' +
                       '<li><strong>CRM (<code>顧客</code>):</strong> Dành cho <strong>công ty</strong> (quản lý mối quan hệ với khách hàng, bao gồm cả marketing, sales, và dịch vụ sau bán).</li>' +
                       '<li>Câu hỏi này nhấn mạnh vào <code>営業活動</code>, nên SFA là phù hợp nhất.</li></ul></ul>'
    },
    {
      'question': '次の記述のうち，業務要件定義が曖昧なことが原因で起こり得る問題だけを全て挙げたものはどれか。<br><br><ol type=\'a\'><li>企画プロセスでシステム化構想がまとまらず，システム化の承認を得られない。</li><li>コーディングのミスによって，システムが意図したものと違う動作をする。</li><li>システムの開発中に仕様変更による手戻りが頻発する。</li><li>システムを受け入れるための適切な受入れテストを設計できない。</li></ol>',
      'options': ['a，b', 'b，c', 'b，d', 'c，d'],
      'answer': 3,
      'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                       '<ul><li><strong>Câu hỏi:</strong> Những vấn đề nào sau đây có thể xảy ra do <strong>định nghĩa yêu cầu nghiệp vụ (<code>業務要件定義</code>) bị mơ hồ (<code>曖昧</code>)</strong>?</li>' +
                       '<li><strong>a.</strong> Không thống nhất được ý tưởng (<code>構想</code>) trong giai đoạn lập kế hoạch (<code>企画</code>), không được phê duyệt.</li>' +
                       '<li><strong>b.</strong> Lỗi coding khiến hệ thống hoạt động sai.</li>' +
                       '<li><strong>c.</strong> Phát sinh nhiều lần phải <strong>làm lại (<code>手戻り</code> - rework)</strong> do thay đổi đặc tả (<code>仕様変更</code>) trong quá trình phát triển.</li>' +
                       '<li><strong>d.</strong> Không thể thiết kế được <strong>bài kiểm thử chấp nhận (<code>受入れテスト</code>)</strong> phù hợp.</li></ul>' +
                       '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                       '<p>Giai đoạn <code>業務要件定義</code> (Định nghĩa Yêu cầu nghiệp vụ) là bước "khách hàng muốn gì". Nếu bước này mơ hồ:</p>' +
                       '<ul><li><strong>a. ❌ Sai.</strong> Giai đoạn lập kế hoạch (<code>企画</code>) diễn ra <strong>trước</strong> giai đoạn định nghĩa yêu cầu (<code>要件定義</code>). Vấn đề này xảy ra trước khi yêu cầu bị mơ hồ.</li>' +
                       '<li><strong>b. ❌ Sai.</strong> Lỗi coding là vấn đề thuộc về giai đoạn <strong>lập trình (<code>開発</code>)</strong>, là lỗi kỹ thuật của lập trình viên, không phải lỗi do yêu cầu mơ hồ.</li>' +
                       '<li><strong>c. ✅ Đúng.</strong> Yêu cầu mơ hồ → đội phát triển hiểu sai → làm ra sản phẩm sai → khách hàng nhìn thấy và nói "không phải cái này" → phát sinh <strong>thay đổi đặc tả (<code>仕様変更</code>)</strong> → phải <strong>làm lại (<code>手戻り</code>)</strong>. Đây là hậu quả phổ biến nhất.</li>' +
                       '<li><strong>d. ✅ Đúng.</strong> Kiểm thử chấp nhận (<code>受入れテスト</code> - UAT) được thiết kế để kiểm tra xem hệ thống có đáp ứng đúng yêu cầu nghiệp vụ hay không. Nếu yêu cầu ban đầu (<code>業務要件</code>) đã mơ hồ thì không có cơ sở rõ ràng để thiết kế bài kiểm thử (không biết "đúng" là như thế nào).</li></ul>' +
                       '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                       '<ul><li><strong>Keyword chính:</strong> <strong><code>業務要件定義が曖昧</code> (Định nghĩa yêu cầu nghiệp vụ mơ hồ)</strong>.</li>' +
                       '<li><strong>Mẹo ghi nhớ:</strong> Yêu cầu không rõ (<code>曖昧</code>) → <strong>1. Phải làm lại (<code>手戻り</code>)</strong> + <strong>2. Không biết cách kiểm tra (<code>テストを設計できない</code>)</strong>.</li></ul>'
    },
    {
      'question': '労働者派遣における派遣労働者の雇用関係に関する記述のうち，適切なものはどれか。',
      'options': ['派遣先との間に雇用関係があり，派遣元との間には存在しない。', '派遣元との間に雇用関係があり，派遣先との間には存在しない。', '派遣元と派遣先のいずれの間にも雇用関係が存在する。', '派遣元と派遣先のいずれの間にも雇用関係は存在しない。'],
      'answer': 1,
      'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                       '<ul><li><strong>Câu hỏi:</strong> Mô tả nào là đúng về <strong>quan hệ lao động (<code>雇用関係</code>)</strong> của nhân viên phái cử (<code>派遣労働者</code>) trong mô hình <strong>lao động phái cử (<code>労働者派遣</code>)</strong>?</li>' +
                       '<li><strong>ア.</strong> Có quan hệ lao động với công ty tiếp nhận (<code>派遣先</code>), không có với công ty phái cử (<code>派遣元</code>).</li>' +
                       '<li><strong>イ.</strong> Có quan hệ lao động với <strong>công ty phái cử (<code>派遣元</code>)</strong>, không có với công ty tiếp nhận (<code>派遣先</code>).</li>' +
                       '<li><strong>ウ.</strong> Có quan hệ lao động với cả hai.</li>' +
                       '<li><strong>エ.</strong> Không có quan hệ lao động với cả hai.</li></ul>' +
                       '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                       '<p>Mô hình lao động phái cử có 3 bên với 2 loại quan hệ:</p>' +
                       '' +
                       '<ul><li><strong>1. Nhân viên phái cử (<code>派遣労働者</code>):</strong> Người đi làm.</li>' +
                       '<li><strong>2. Công ty phái cử (<code>派遣元</code> - haken-moto):</strong> Công ty tuyển và trả lương cho nhân viên.</li>' +
                       '<li><strong>3. Công ty tiếp nhận (<code>派遣先</code> - haken-saki):</strong> Nơi nhân viên đến làm việc và nhận chỉ thị công việc.</li></ul>' +
                       '<p>Có 2 loại quan hệ:</p>' +
                       '<ul><li><strong>Quan hệ lao động (<code>雇用関係</code>):</strong> Ký hợp đồng lao động, trả lương, đóng bảo hiểm. Quan hệ này <strong>CHỈ tồn tại</strong> giữa <strong>Nhân viên</strong> và <strong>Công ty phái cử (<code>派遣元</code>)</strong>.</li>' +
                       '<li><strong>Quan hệ chỉ thị công việc (<code>指揮命令関係</code>):</strong> Ra lệnh làm việc hàng ngày. Quan hệ này tồn tại giữa <strong>Nhân viên</strong> và <strong>Công ty tiếp nhận (<code>派遣先</code>)</strong>.</li></ul>' +
                       '<p>=> Do đó, đáp án <strong>イ</strong> là chính xác.</p>' +
                       '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                       '<ul><li><strong>Keyword chính:</strong> <strong><code>派遣元</code> (haken-moto - nguồn phái cử)</strong>, <strong><code>派遣先</code> (haken-saki - điểm đến)</strong>, <strong><code>雇用関係</code> (quan hệ lao động)</strong>.</li>' +
                       '<li><strong>Mẹo ghi nhớ:</strong> Nhân viên được "gửi đi từ <strong>nguồn</strong>" (<strong><code>元</code></strong>), nên hợp đồng lao động (<code>雇用</code>) phải ký với "<strong>nguồn</strong>". Công ty tiếp nhận chỉ là "<strong>điểm đến</strong>" (<strong><code>先</code></strong>) để "nhận lệnh" (<code>指揮命令</code>).</li></ul>'
    },
    {
      'question': '顧客との個々のつながりを意識して情報を頻繁に更新するSNSなどのシステムとは異なり，会計システムのように高い信頼性と安定稼働が要求される社内情報を扱うシステムの概念を示す用語として，最も適切なものはどれか。',
      'options': ['IoT(Internet of Things)', 'PoC(Proof of Concept)', 'SOE(Systems of Engagement)', 'SOR(Systems of Record)'],
      'answer': 3,
      'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                       '<ul><li><strong>Câu hỏi:</strong> Trái ngược với các hệ thống như SNS (chú trọng tương tác, <code>つながり</code>), thuật ngữ nào dùng để chỉ các hệ thống xử lý thông tin nội bộ đòi hỏi độ <strong>tin cậy và ổn định cao</strong> (<code>高い信頼性と安定稼働</code>), ví dụ như <strong>hệ thống kế toán (<code>会計システム</code>)</strong>?</li>' +
                       '<li><strong>ア.</strong> IoT (Internet of Things)</li>' +
                       '<li><strong>イ.</strong> PoC (Proof of Concept)</li>' +
                       '<li><strong>ウ.</strong> SOE (Systems of Engagement)</li>' +
                       '<li><strong>エ.</strong> SOR (Systems of Record)</li></ul>' +
                       '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                       '<p>Câu hỏi đưa ra sự đối lập giữa hai loại hệ thống trong mô hình của Gartner:</p>' +
                       '<ul><li><strong>ア. IoT:</strong> ❌ Sai. Là mạng lưới các thiết bị kết nối.</li>' +
                       '<li><strong>イ. PoC:</strong> ❌ Sai. Là quá trình thử nghiệm một ý tưởng.</li>' +
                       '<li><strong>ウ. SOE (Systems of Engagement):</strong> ❌ Sai. Đây là hệ thống dùng để <strong>tương tác (Engagement)</strong>, kết nối với khách hàng (như SNS, CRM, app di động). Đây chính là vế "trái ngược" trong câu hỏi.</li>' +
                       '<li><strong>エ. SOR (Systems of Record):</strong> ✅ <strong>Đúng.</strong> Đây là hệ thống dùng để <strong>ghi nhận (Record)</strong> dữ liệu lõi, chính xác, ổn định và là "nguồn chân lý" của doanh nghiệp. Ví dụ điển hình là <strong>hệ thống kế toán (<code>会計システム</code>)</strong>, hệ thống nhân sự (HR), ERP. Chúng yêu cầu tính ổn định và tin cậy tuyệt đối.</li></ul>' +
                       '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                       '<ul><li><strong>Keyword chính:</strong> <strong><code>会計システム</code> (Hệ thống kế toán)</strong>, <strong><code>高い信頼性</code> (Độ tin cậy cao)</strong>.</li>' +
                       '<li><strong>Mẹo ghi nhớ (Phân biệt SOE và SOR):</strong></li>' +
                       '<ul><li><strong>SOE (Engagement):</strong> Hệ thống tương tác (với khách hàng). Ví dụ: SNS, App. Đặc điểm: Linh hoạt, thay đổi nhanh.</li>' +
                       '<li><strong>SOR (Record):</strong> Hệ thống ghi chép (dữ liệu lõi). Ví dụ: <strong>Kế toán (<code>会計</code>)</strong>, ERP. Đặc điểm: <strong>Ổn định (<code>安定</code>)</strong>, <strong>Tin cậy (<code>信頼性</code>)</strong>.</li></ul></ul>'
    },
    {
      'question': '上司から自社の当期の損益計算書を渡され，"我が社の収益性分析をしなさい"と言われた。経営に関する指標のうち，この損益計算書だけから計算できるものだけを全て挙げたものはどれか。<br><br><ol type=\'a\'><li>売上高増加率</li><li>売上高利益率</li><li>自己資本利益率</li></ol>',
      'options': ['a', 'a，b', 'a，b，c', 'b'],
      'answer': 3,
      'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                       '<ul><li><strong>Câu hỏi:</strong> Chỉ số nào có thể tính được nếu <strong>chỉ dùng Báo cáo kết quả kinh doanh (<code>損益計算書</code> - P&L Statement)</strong> của kỳ này?</li>' +
                       '<li><strong>a.</strong> Tỷ lệ tăng trưởng doanh thu (<code>売上高増加率</code>)</li>' +
                       '<li><strong>b.</strong> Tỷ suất lợi nhuận trên doanh thu (<code>売上高利益率</code>)</li>' +
                       '<li><strong>c.</strong> Tỷ suất lợi nhuận trên vốn chủ sở hữu (<code>自己資本利益率</code> - ROE)</li></ul>' +
                       '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                       '<p><strong>Báo cáo kết quả kinh doanh (<code>損益計算書</code> - P&L)</strong> chỉ chứa thông tin về <strong>Doanh thu, Chi phí, Lợi nhuận</strong> của <strong>một kỳ duy nhất</strong>.</p>' +
                       '<ul><li><strong>a. ❌ Sai.</strong> <strong>Tỷ lệ tăng trưởng (<code>増加率</code>)</strong> = (Doanh thu kỳ này - Doanh thu kỳ trước) / Doanh thu kỳ trước. Cần phải có Báo cáo KQKD của <strong>kỳ trước</strong> nữa, nên không thể tính được nếu "chỉ dùng của kỳ này".</li>' +
                       '<li><strong>b. ✅ Đúng.</strong> <strong>Tỷ suất lợi nhuận trên doanh thu</strong> = Lợi nhuận / Doanh thu. Cả hai chỉ số "Lợi nhuận" (<code>利益</code>) và "Doanh thu" (<code>売上高</code>) đều có trong Báo cáo KQKD.</li>' +
                       '<li><strong>c. ❌ Sai.</strong> <strong>Tỷ suất lợi nhuận trên vốn chủ sở hữu (ROE)</strong> = Lợi nhuận / Vốn chủ sở hữu. "Vốn chủ sở hữu" (<code>自己資本</code>) là một mục nằm trong <strong>Bảng cân đối kế toán (<code>貸借対照表</code> - B/S)</strong>, không có trong Báo cáo KQKD.</li></ul>' +
                       '<p>=> Vậy, chỉ có (b) là tính được.</p>' +
                       '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                       '<ul><li><strong>Keyword chính:</strong> <strong><code>損益計算書だけ</code> (Chỉ dùng Báo cáo KQKD)</strong>.</li>' +
                       '<li><strong>Mẹo ghi nhớ (2 Báo cáo chính):</strong></li>' +
                       '<ul><li><strong>P&L (<code>損益計算書</code>):</strong> Chỉ có <strong>Doanh thu, Chi phí, Lợi nhuận</strong> của 1 kỳ.</li>' +
                       '<li><strong>B/S (<code>貸借対照表</code>):</strong> Có <strong>Tài sản (<code>資産</code>)</strong>, <strong>Nợ (<code>負債</code>)</strong>, <strong>Vốn (<code>資本</code>)</strong> tại một thời điểm.</li>' +
                       '<li>Bất kỳ chỉ số nào cần dữ liệu của kỳ trước (như "tăng trưởng" <code>増加率</code>) hoặc dữ liệu từ B/S (như "vốn" <code>資本</code>) đều không thể tính được từ 1 bản P&L.</li></ul></ul>'
    },
    {
      'question': 'ある企業が，顧客を引き付ける優れたUX(User Experience)やビジネスモデルをデジタル技術によって創出し，業界における従来のサービスを駆逐してしまうことによって，その業界の既存の構造が破壊されるような現象を表す用語として，最も適切なものはどれか。',
      'options': ['デジタルサイネージ', 'デジタルディスラプション', 'デジタルディバイド', 'デジタルトランスフォーメーション'],
      'answer': 1,
      'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                       '<ul><li><strong>Câu hỏi:</strong> Hiện tượng một công ty dùng công nghệ số tạo ra UX/mô hình kinh doanh đột phá, loại bỏ các dịch vụ truyền thống và <strong>phá vỡ (<code>破壊</code>) cấu trúc hiện có</strong> của một ngành công nghiệp được gọi là gì?</li>' +
                       '<li><strong>ア.</strong> Digital Signage (Bảng hiệu kỹ thuật số)</li>' +
                       '<li><strong>イ.</strong> Digital Disruption (Gián đoạn kỹ thuật số)</li>' +
                       '<li><strong>ウ.</strong> Digital Divide (Khoảng cách số)</li>' +
                       '<li><strong>エ.</strong> Digital Transformation (Chuyển đổi số - DX)</li></ul>' +
                       '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                       '<ul><li><strong>ア. デジタルサイネージ (Digital Signage):</strong> ❌ Sai. Là các bảng quảng cáo, bảng thông tin kỹ thuật số (ví dụ: màn hình LCD trong thang máy, ga tàu).</li>' +
                       '<li><strong>イ. デジタルディスラプション (Digital Disruption):</strong> ✅ <strong>Đúng.</strong> "Disruption" có nghĩa là "gián đoạn" hoặc "phá vỡ". Thuật ngữ này mô tả chính xác hiện tượng "kẻ mới" dùng công nghệ để <strong>phá vỡ (<code>破壊</code>)</strong> và thay thế "người cũ" trong một ngành. Ví dụ kinh điển: Netflix (phá vỡ ngành cho thuê DVD), Grab/Uber (phá vỡ ngành taxi truyền thống), smartphone (phá vỡ ngành máy ảnh compact).</li>' +
                       '<li><strong>ウ. デジタルディバイド (Digital Divide):</strong> ❌ Sai. Là "khoảng cách số" - sự chênh lệch về khả năng tiếp cận và sử dụng công nghệ giữa các nhóm người (giàu-nghèo, già-trẻ, thành thị-nông thôn).</li>' +
                       '<li><strong>エ. デジタルトランスフォーメーション (DX):</strong> ❌ Sai. Là "chuyển đổi số" - là <strong>quá trình</strong> một công ty (thường là công ty cũ) ứng dụng công nghệ số để thay đổi. "Disruption" (イ) là <strong>kết quả</strong> mang tính phá vỡ có thể xảy ra từ bên ngoài, buộc công ty phải thực hiện "DX" (エ).</li></ul>' +
                       '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                       '<ul><li><strong>Keyword chính:</strong> <strong><code>既存の構造が破壊される</code> (Cấu trúc hiện có bị phá vỡ)</strong>.</li>' +
                       '<li><strong>Mẹo ghi nhớ:</strong> Phá vỡ, gây rối loạn, lật đổ → <strong>Disruption (<code>ディスラプション</code>)</strong>.</li></ul>'
    },
    {
      'question': '次の事例のうち，AIを導入することによって業務の作業効率が向上したものだけを全て挙げたものはどれか。<br><br><ol type=\'a\'><li>食品専門商社のA社が，取引先ごとに様式が異なる手書きの請求書に記載された文字を自動で読み取ってデータ化することによって，事務作業時間を削減した。</li><li>繊維製造会社のB社が，原材料を取引先に発注する定型的なPCの操作を自動化するツールを導入し，事務部門の人員を削減した。</li><li>損害保険会社のC社が，自社のコールセンターへの問合せに対して，オペレーターにつなげる前に音声チャットボットでヒアリングを行うことによってオペレーターの対応時間を短縮した。</li><li>物流会社のD社が，配送荷物に電子タグを装着して出荷時に配送先を電子タグに書き込み，配送時にそれを確認することによって，誤配送を削減した。</li></ol>',
      'options': ['a，c', 'b，c', 'b，d', 'c，d'],
      'answer': 0,
      'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                       '<ul><li><strong>Câu hỏi:</strong> Đâu là tất cả các trường hợp ứng dụng <strong>AI</strong> để cải thiện hiệu suất công việc?</li>' +
                       '<li><strong>a.</strong> Tự động đọc và số hóa các hóa đơn <strong>viết tay (<code>手書き</code>)</strong> có định dạng khác nhau.</li>' +
                       '<li><strong>b.</strong> Tự động hóa các thao tác <strong>PC lặp đi lặp lại (<code>定型的なPCの操作</code>)</strong> để đặt hàng nguyên vật liệu.</li>' +
                       '<li><strong>c.</strong> Sử dụng <strong>chatbot giọng nói (<code>音声チャットボット</code>)</strong> để thu thập thông tin ban đầu từ khách hàng trước khi chuyển đến nhân viên.</li>' +
                       '<li><strong>d.</strong> Gắn <strong>thẻ điện tử (<code>電子タグ</code>)</strong> vào kiện hàng để theo dõi và giảm thiểu giao nhầm.</li></ul>' +
                       '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                       '<ul><li><strong>a. ✅ AI.</strong> Nhận dạng chữ viết tay (<code>手書き</code>) với các định dạng khác nhau là một tác vụ phức tạp, đòi hỏi khả năng nhận dạng mẫu (pattern recognition). Đây là một ứng dụng của công nghệ <strong>OCR (Nhận dạng ký tự quang học)</strong> tiên tiến sử dụng <strong>AI (Deep Learning)</strong>.</li>' +
                       '<li><strong>b. ❌ Không phải AI.</strong> Tự động hóa các thao tác lặp lại trên máy tính (<code>定型的なPCの操作</code>) là ví dụ điển hình của <strong>RPA (Robotic Process Automation)</strong>. RPA chỉ bắt chước hành động, không cần "trí tuệ".</li>' +
                       '<li><strong>c. ✅ AI.</strong> <strong>Chatbot giọng nói (<code>音声チャットボット</code>)</strong> cần <strong>AI</strong> để thực hiện 2 việc: 1. Nhận dạng giọng nói (Speech-to-Text) và 2. Xử lý ngôn ngữ tự nhiên (NLP) để hiểu ý nghĩa câu hỏi và đưa ra câu trả lời phù hợp.</li>' +
                       '<li><strong>d. ❌ Không phải AI.</strong> Gắn thẻ điện tử (<code>電子タグ</code>) là công nghệ <strong>RFID (Radio-Frequency Identification)</strong>. Đây là công nghệ phần cứng, không phải AI.</li></ul>' +
                       '<p>=> Vậy, các ứng dụng AI là a và c.</p>' +
                       '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                       '<ul><li><strong>Mẹo ghi nhớ (Phân biệt 3 công nghệ):</strong></li>' +
                       '<ul><li><strong>AI:</strong> Liên quan đến "học", "nhận dạng", "hiểu" (<code>手書き</code> - chữ viết tay, <code>音声</code> - giọng nói).</li>' +
                       '<li><strong>RPA:</strong> Bắt chước hành động lặp lại (<code>定型的なPCの操作</code>) trên máy tính.</li>' +
                       '<li><strong>RFID:</strong> Thẻ điện tử (<code>電子タグ</code>).</li></ul></ul>'
    },
    {
      'question': '個人情報保護法では，あらかじめ本人の同意を得ていなくても個人データの提供が許される行為を規定している。この行為に該当するものだけを，全て挙げたものはどれか。<br><br><ol type=\'a\'><li>事故で意識不明の人がもっていた本人の社員証を見て，搬送先の病院が本人の会社に電話してきたので，総務の担当者が本人の自宅電話番号を教えた。</li><li>新規加入者を勧誘したいと保険会社の従業員に頼まれたので，総務の担当者が新入社員の名前と所属部門のリストを渡した。</li><li>不正送金等の金融犯罪被害者に関する個人情報を，類似犯罪の防止対策を進める捜査機関からの法令に基づく要請に応じて，総務の担当者が提供した。</li></ol>',
      'options': ['a', 'a，c', 'b，c', 'c'],
      'answer': 1,
      'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                       '<ul><li><strong>Câu hỏi:</strong> Theo Luật bảo vệ thông tin cá nhân, trường hợp nào được phép cung cấp dữ liệu cá nhân <strong>mà không cần sự đồng ý trước (<code>同意を得ていなくても</code>)</strong> của người đó?</li>' +
                       '<li><strong>a.</strong> Một người bị <strong>tai nạn bất tỉnh (<code>意識不明</code>)</strong>, bệnh viện gọi đến công ty và phòng nhân sự cung cấp số điện thoại nhà của người đó.</li>' +
                       '<li><strong>b.</strong> Nhân viên công ty bảo hiểm muốn <strong>chào mời (<code>勧誘</code>)</strong> khách hàng mới, phòng nhân sự đã cung cấp danh sách nhân viên mới.</li>' +
                       '<li><strong>c.</strong> Cung cấp thông tin nạn nhân của một vụ lừa đảo tài chính cho cơ quan điều tra theo <strong>yêu cầu của pháp luật (<code>法令に基づく要請</code>)</strong>.</li></ul>' +
                       '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                       '<p>Luật bảo vệ thông tin cá nhân (<code>個人情報保護法</code>) cấm cung cấp thông tin cá nhân cho bên thứ ba mà không có sự đồng ý, TRỪ một số trường hợp ngoại lệ. Hai trường hợp ngoại lệ phổ biến nhất là:</p>' +
                       '<ol><li>Khi cần thiết để bảo vệ tính mạng, sức khỏe, tài sản (<code>生命・身体・財産</code>) mà khó lấy được sự đồng ý.</li><li>Khi tuân thủ yêu cầu của pháp luật (<code>法令に基づく</code>).</li></ol>' +
                       '<ul><li><strong>a. ✅ Được phép (Ngoại lệ 1).</strong> Đây là trường hợp khẩn cấp để bảo vệ <strong>tính mạng/sức khỏe (<code>生命・身体</code>)</strong>, và người đó đang <strong>bất tỉnh (<code>意識不明</code>)</strong> (khó lấy sự đồng ý).</li>' +
                       '<li><strong>b. ❌ Không được phép.</strong> Đây là hành vi phục vụ mục đích kinh doanh, thương mại (<code>勧誘</code>), không phải trường hợp ngoại lệ. Cần có sự đồng ý của từng nhân viên.</li>' +
                       '<li><strong>c. ✅ Được phép (Ngoại lệ 2).</strong> Cung cấp thông tin cho cơ quan điều tra là tuân thủ <strong>yêu cầu của pháp luật (<code>法令に基づく要請</code>)</strong>.</li></ul>' +
                       '<p>=> Vậy, các trường hợp được phép là a và c.</p>' +
                       '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                       '<ul><li><strong>Keyword chính:</strong> <strong><code>本人の同意を得ていなくても</code> (Không cần sự đồng ý)</strong>.</li>' +
                       '<li><strong>Mẹo ghi nhớ:</strong> Các trường hợp ngoại lệ thường liên quan đến <strong>tình huống khẩn cấp (tính mạng <code>生命</code>, bất tỉnh <code>意識不明</code>)</strong> hoặc <strong>yêu cầu của pháp luật (<code>法令</code>, cảnh sát <code>警察</code>)</strong>. Các hoạt động kinh doanh, marketing thì KHÔNG phải là ngoại lệ.</li></ul>'
    },
    {
      'question': 'データサイエンティストの役割に関する記述として，最も適切なものはどれか。',
      'options': ['機械学習や統計などの手法を用いてビッグデータを解析することによって，ビジネスに活用するための新たな知見を獲得する。', '企業が保有する膨大なデータを高速に検索できるように，パフォーマンスの高いデータベースを運用するためのシステム基盤を構築する。', '企業における情報システムに関するリスクを評価するために，現場でのデータの取扱いや管理についての実態を調査する。', '企業や組織における安全な情報システムの企画，設計，開発，運用を，サイバーセキュリティに関する専門的な知識や技能を活用して支援する。'],
      'answer': 0,
      'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                       '<ul><li><strong>Câu hỏi:</strong> Mô tả nào phù hợp nhất với vai trò của một <strong>Nhà khoa học dữ liệu (<code>データサイエンティスト</code>)</strong>?</li>' +
                       '<li><strong>ア.</strong> Sử dụng các phương pháp như <strong>học máy (<code>機械学習</code>)</strong> và <strong>thống kê (<code>統計</code>)</strong> để <strong>phân tích (<code>解析</code>)</strong> <strong>dữ liệu lớn (<code>ビッグデータ</code>)</strong> nhằm tìm ra những hiểu biết/tri thức mới (<code>知見</code>) cho kinh doanh.</li>' +
                       '<li><strong>イ.</strong> Xây dựng cơ sở hạ tầng hệ thống để vận hành CSDL hiệu năng cao.</li>' +
                       '<li><strong>ウ.</strong> Điều tra thực tế việc xử lý dữ liệu tại hiện trường để đánh giá rủi ro hệ thống thông tin.</li>' +
                       '<li><strong>エ.</strong> Hỗ trợ việc lập kế hoạch, thiết kế, phát triển... hệ thống an toàn bằng kiến thức an ninh mạng.</li></ul>' +
                       '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                       '<ul><li><strong>ア. ✅ Đúng.</strong> "Sử dụng <strong>học máy (<code>機械学習</code>)</strong> và <strong>thống kê (<code>統計</code>)</strong> để <strong>phân tích (<code>解析</code>)</strong> <strong>dữ liệu lớn (<code>ビッグデータ</code>)</strong>" là định nghĩa chính xác và đầy đủ nhất về công việc của một Nhà khoa học dữ liệu.</li>' +
                       '<li><strong>イ. ❌ Sai.</strong> Xây dựng và vận hành CSDL (Database) là vai trò của Kỹ sư dữ liệu (Data Engineer) hoặc Quản trị viên CSDL (DBA).</li>' +
                       '<li><strong>ウ. ❌ Sai.</strong> Đánh giá rủi ro hệ thống thông tin là vai trò của Kiểm toán viên hệ thống (<code>システム監査人</code> - System Auditor).</li>' +
                       '<li><strong>エ. ❌ Sai.</strong> Hỗ trợ các hoạt động liên quan đến an ninh mạng là vai trò của Chuyên gia an ninh mạng (Security Specialist).</li></ul>' +
                       '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                       '<ul><li><strong>Keyword chính:</strong> <strong><code>データサイエンティスト</code> (Data Scientist)</strong>.</li>' +
                       '<li><strong>Mẹo ghi nhớ (Công thức vai trò):</strong> Data Scientist = <strong><code>ビッグデータ</code> (Big Data) + <code>解析</code> (Phân tích) + <code>機械学習/統計</code> (Học máy/Thống kê)</strong>.</li></ul>'
    },
    {
      'question': '史跡などにスマートフォンを向けると，昔あった建物の画像や説明情報を現実の風景と重ねるように表示して，観光案内をできるようにした。ここで活用した仕組みを表す用語として，最も適切なものはどれか。',
      'options': ['AR', 'GUI', 'VR', 'メタバース'],
      'answer': 0,
      'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                       '<ul><li><strong>Câu hỏi:</strong> Khi hướng smartphone vào một di tích lịch sử, hình ảnh của tòa nhà cũ và thông tin giải thích được hiển thị <strong>chồng lên (<code>重ねる</code>)</strong> <strong>khung cảnh thực tế (<code>現実の風景</code>)</strong>. Thuật ngữ nào mô tả cơ chế này?</li>' +
                       '<li><strong>ア.</strong> AR</li>' +
                       '<li><strong>イ.</strong> GUI</li>' +
                       '<li><strong>ウ.</strong> VR</li>' +
                       '<li><strong>エ.</strong> Metaverse</li></ul>' +
                       '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                       '<ul><li><strong>ア. AR (Augmented Reality):</strong> ✅ <strong>Đúng.</strong> Là "Thực tế tăng cường". Đây là công nghệ <strong>chồng (<code>重ねる</code>)</strong> lớp thông tin kỹ thuật số (hình ảnh, văn bản) lên <strong>thế giới thực (<code>現実</code>)</strong> mà người dùng nhìn thấy qua camera.</li>' +
                       '<li><strong>イ. GUI (Graphical User Interface):</strong> ❌ Sai. Là giao diện người dùng đồ họa (các icon, cửa sổ trên máy tính).</li>' +
                       '<li><strong>ウ. VR (Virtual Reality):</strong> ❌ Sai. Là "Thực tế ảo". Công nghệ này <strong>thay thế hoàn toàn (100%)</strong> thế giới thực bằng một môi trường ảo, thường yêu cầu đeo kính chuyên dụng (goggles) che kín mắt.</li>' +
                       '<li><strong>エ. メタバース (Metaverse):</strong> ❌ Sai. Là một không gian ảo rộng lớn, nơi nhiều người có thể tương tác với nhau, thường dựa trên công nghệ VR/AR, nhưng không phải là tên của bản thân công nghệ "chồng ảnh" này.</li></ul>' +
                       '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                       '<ul><li><strong>Keyword chính:</strong> <strong><code>現実の風景と重ねる</code> (Chồng lên khung cảnh thực tế)</strong>.</li>' +
                       '<li><strong>Mẹo ghi nhớ (Phân biệt AR và VR):</strong></li>' +
                       '<ul><li><strong>AR (Augmented):</strong> THỰC + ẢO (Tăng cường/Bổ sung thông tin <code>重ねる</code>). (Ví dụ: Pokémon GO, Google Lens).</li>' +
                       '<li><strong>VR (Virtual):</strong> ẢO 100% (Thế giới ảo <code>仮想空間</code>).</li></ul></ul>'
    },
    {
      'question': '式は定期発注方式で原料の発注量を求める計算式である。a～cに入れる字句の適切な組合せはどれか。<br><br>発注量＝(<span class=\'bb\'>a</span>＋調達期間)×毎日の使用予定量＋<span class=\'bb\'>b</span>－現在の在庫量－<span class=\'bb\'>c</span><br><img src=\'img/24.png\' width=\'406\' height=\'147\' alt=\'24.png/image-size:406×147\'>',
      'options': ['ア', 'イ', 'ウ', 'エ'],
      'answer': 2,
      'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                       '<ul><li><strong>Câu hỏi:</strong> Đây là công thức tính lượng đặt hàng theo phương pháp <strong>đặt hàng định kỳ (<code>定期発注方式</code>)</strong>. Hãy chọn tổ hợp đúng cho a, b, c.</li>' +
                       '<li><code>Lượng đặt hàng = ((a) + Thời gian giao hàng) × Lượng dùng mỗi ngày + (b) - Lượng tồn kho hiện tại - (c)</code></li></ul>' +
                       '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                       '<p>Phương pháp đặt hàng định kỳ (ví dụ: thứ 2 hàng tuần đều đặt hàng) phải tính toán lượng hàng sao cho đủ dùng cho đến *lần nhận hàng tiếp theo*.</p>' +
                       '<ul><li><code>Lượng dùng trong tương lai = (Thời gian từ giờ đến lúc nhận hàng) × Lượng dùng mỗi ngày</code></li>' +
                       '<li>Thời gian từ giờ đến lúc nhận hàng = <strong>(a) Khoảng cách giữa các lần đặt hàng (<code>発注間隔</code>)</strong> + <strong>Thời gian giao hàng (<code>調達期間</code>)</strong>.</li>' +
                       '<li><code>Lượng hàng cần có = Lượng dùng trong tương lai + (b) Tồn kho an toàn (<code>安全在庫</code>)</code> (để phòng hờ).</li>' +
                       '<li><code>Lượng cần đặt = Lượng hàng cần có - Những gì đã có</code></li>' +
                       '<li>Những gì đã có = <strong>Lượng tồn kho hiện tại (<code>現在の在庫量</code>)</strong> + <strong>(c) Lượng hàng đã đặt nhưng chưa về (<code>発注残</code>)</strong>.</li></ul>' +
                       '<p>=> <code>Lượng đặt hàng = ((a) 発注間隔 + 調達期間) × Lượng dùng + (b) 安全在庫 - 現在の在庫量 - (c) 発注残</code>.</p>' +
                       '<p>Tổ hợp này tương ứng với đáp án <strong>ウ</strong>.</p>' +
                       '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                       '<ul><li><strong>Keyword chính:</strong> <strong><code>定期発注方式</code> (Phương pháp đặt hàng định kỳ)</strong>.</li>' +
                       '<li><strong>Mẹo ghi nhớ:</strong> Hãy tưởng tượng bạn đi chợ (đặt hàng) vào thứ 2 hàng tuần (định kỳ <code>発注間隔</code>), và mất 1 ngày để hàng giao tới (<code>調達期間</code>). Bạn phải mua đủ dùng cho <strong>8 ngày (7+1)</strong>. Lượng mua = (Lượng ăn 8 ngày) + (Đồ ăn dự trữ <code>安全在庫</code>) - (Đồ còn trong tủ lạnh <code>現在の在庫量</code>) - (Đồ đã đặt hôm qua nhưng chưa giao <code>発注残</code>).</li></ul>'
    },
    {
      'question': 'A社はRPAソフトウェアを初めて導入するに当たり，計画策定フェーズ，先行導入フェーズ，本格導入フェーズの3段階で進めようと考えている。次のうち，計画策定フェーズで実施する作業として，適切なものだけを全て挙げたものはどれか。<br><br><ol type=\'a\'><li>RPAソフトウェアの適用可能性を見極めるための概念検証を実施する。</li><li>RPAソフトウェアを全社展開するための導入と運用の手順書を作成する。</li><li>部門，業務を絞り込んでRPAソフトウェアを導入し，効果を実測する。</li></ol>',
      'options': ['a', 'a，c', 'b', 'b，c'],
      'answer': 0,
      'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                       '<ul><li><strong>Câu hỏi:</strong> Khi triển khai RPA theo 3 giai đoạn (1. Lập kế hoạch <code>計画策定</code>, 2. Thử nghiệm <code>先行導入</code>, 3. Triển khai chính thức <code>本格導入</code>), công việc nào thuộc <strong>giai đoạn Lập kế hoạch (<code>計画策定フェーズ</code>)</strong>?</li>' +
                       '<li><strong>a.</strong> Thực hiện <strong>kiểm chứng khái niệm (<code>概念検証</code> - PoC)</strong> để đánh giá khả năng áp dụng.</li>' +
                       '<li><strong>b.</strong> Tạo tài liệu hướng dẫn vận hành để triển khai <strong>toàn công ty (<code>全社展開</code>)</strong>.</li>' +
                       '<li><strong>c.</strong> Triển khai RPA cho <strong>một vài bộ phận/nghiệp vụ (<code>部門，業務を絞り込んで</code>)</strong> để đo lường hiệu quả thực tế.</li></ul>' +
                       '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                       '<ul><li><strong>a. ✅ Giai đoạn Lập kế hoạch (<code>計画策定</code>).</strong> <strong>PoC (Proof of Concept - <code>概念検証</code>)</strong> là một bài kiểm tra nhỏ, quy mô hẹp để xem ý tưởng (ví dụ: "RPA có tự động hóa được nghiệp vụ X không?") có khả thi về mặt kỹ thuật hay không. Đây là bước quan trọng trong giai đoạn lập kế hoạch, trước khi quyết định đầu tư lớn.</li>' +
                       '<li><strong>b. ❌ Giai đoạn Triển khai chính thức (<code>本格導入</code>).</strong> Tài liệu hướng dẫn để triển khai cho toàn công ty (<code>全社展開</code>) được tạo ra khi đã quyết định triển khai rộng rãi, sau khi đã thử nghiệm thành công.</li>' +
                       '<li><strong>c. ❌ Giai đoạn Thử nghiệm (<code>先行導入</code>).</strong> Triển khai ở quy mô nhỏ (thí điểm - <code>絞り込んで</code>) để đo lường hiệu quả (<code>効果を実測</code>) là bản chất của giai đoạn thử nghiệm (Pilot / <code>先行導入</code>).</li></ul>' +
                       '<p>=> Vậy, chỉ có (a) thuộc giai đoạn Lập kế hoạch.</p>' +
                       '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                       '<ul><li><strong>Keyword chính:</strong> <strong><code>計画策定フェーズ</code> (Giai đoạn Lập kế hoạch)</strong>.</li>' +
                       '<li><strong>Mẹo ghi nhớ (Các giai đoạn):</strong></li>' +
                       '<ul><li><strong>1. <code>計画</code> (Kế hoạch):</strong> Làm thử cái nhỏ nhất xem có chạy không? → <strong>PoC (<code>概念検証</code>)</strong>.</li>' +
                       '<li><strong>2. <code>先行</code> (Thử nghiệm):</strong> Chạy thử ở 1-2 phòng ban xem có hiệu quả không? (<code>絞り込んで</code>).</li>' +
                       '<li><strong>3. <code>本格</code> (Chính thức):</strong> Triển khai cho toàn công ty (<code>全社展開</code>).</li></ul></ul>'
    },
    {
      'question': 'インターネットを介して個人や企業が保有する住宅などの遊休資産の貸出しを仲介するサービスや仕組みを表す用語として，最も適切なものはどれか。',
      'options': ['シェアードサービス', 'シェアウェア', 'シェアリングエコノミー', 'ワークシェアリング'],
      'answer': 2,
      'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                       '<ul><li><strong>Câu hỏi:</strong> Thuật ngữ nào dùng để chỉ các dịch vụ môi giới cho thuê các <strong>tài sản nhàn rỗi (<code>遊休資産</code>)</strong> như nhà ở, xe cộ... qua Internet?</li>' +
                       '<li><strong>ア.</strong> Shared Services</li>' +
                       '<li><strong>イ.</strong> Shareware</li>' +
                       '<li><strong>ウ.</strong> Sharing Economy</li>' +
                       '<li><strong>エ.</strong> Work Sharing</li></ul>' +
                       '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                       '<ul><li><strong>ア. シェアードサービス (Shared Services):</strong> ❌ Sai. Là một mô hình tổ chức doanh nghiệp, trong đó các bộ phận hỗ trợ (kế toán, nhân sự, CNTT) của một tập đoàn được tập trung vào một trung tâm để phục vụ chung cho các công ty con.</li>' +
                       '<li><strong>イ. シェアウェア (Shareware):</strong> ❌ Sai. Là một hình thức phân phối phần mềm, cho phép người dùng dùng thử miễn phí trong một thời gian hoặc với tính năng giới hạn.</li>' +
                       '<li><strong>ウ. シェアリングエコノミー (Sharing Economy):</strong> ✅ <strong>Đúng.</strong> Là "Kinh tế chia sẻ". Đây là mô hình kinh doanh dựa trên việc <strong>chia sẻ (Share)</strong> các <strong>tài sản nhàn rỗi (<code>遊休資産</code>)</strong>. Ví dụ kinh điển: Airbnb (chia sẻ nhà), Grab/Uber (chia sẻ xe).</li>' +
                       '<li><strong>エ. ワークシェアリング (Work Sharing):</strong> ❌ Sai. Là "Chia sẻ công việc", ví dụ như hai người cùng làm chung một vị trí bán thời gian thay vì một người làm toàn thời gian.</li></ul>' +
                       '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                       '<ul><li><strong>Keyword chính:</strong> <strong><code>シェアリングエコノミー</code> (Sharing Economy), <code>遊休資産の貸出し</code> (Cho thuê tài sản nhàn rỗi)</strong>.</li>' +
                       '<li><strong>Mẹo ghi nhớ:</strong> "Chia sẻ" (<code>シェア</code>) những thứ không dùng đến (<code>遊休</code>) → <strong>Sharing Economy</strong>.</li></ul>'
    },
    {
      'question': 'あるソフトウェアは，定額の料金や一定の期間での利用ができる形態で提供されている。この利用形態を表す用語として，適切なものはどれか。',
      'options': ['アクティベーション', 'アドウェア', 'サブスクリプション', 'ボリュームライセンス'],
      'answer': 2,
      'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                       '<ul><li><strong>Câu hỏi:</strong> Thuật ngữ nào mô tả hình thức sử dụng phần mềm bằng cách trả một <strong>khoản phí cố định (<code>定額</code>)</strong> cho một <strong>khoảng thời gian nhất định (<code>一定の期間</code>)</strong>?</li>' +
                       '<li><strong>ア.</strong> Activation (Kích hoạt)</li>' +
                       '<li><strong>イ.</strong> Adware (Phần mềm quảng cáo)</li>' +
                       '<li><strong>ウ.</strong> Subscription (Đăng ký dài hạn)</li>' +
                       '<li><strong>エ.</strong> Volume License (Giấy phép số lượng lớn)</li></ul>' +
                       '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                       '<ul><li><strong>ア. アクティベーション (Activation):</strong> ❌ Sai. Là quá trình kích hoạt bản quyền phần mềm sau khi cài đặt (ví dụ: nhập key).</li>' +
                       '<li><strong>イ. アドウェア (Adware):</strong> ❌ Sai. Là phần mềm miễn phí nhưng có kèm quảng cáo (Ad = Advertisement).</li>' +
                       '<li><strong>ウ. サブスクリプション (Subscription):</strong> ✅ <strong>Đúng.</strong> Là mô hình "Đăng ký dài hạn" (giống như đặt báo/tạp chí), người dùng trả phí định kỳ (<code>定額</code>) theo <strong>thời gian (<code>期間</code>)</strong> (ví dụ: hàng tháng/năm) để được quyền sử dụng dịch vụ. Ví dụ: Netflix, Microsoft 365, Spotify.</li>' +
                       '<li><strong>エ. ボリュームライセンス (Volume License):</strong> ❌ Sai. Là hình thức cấp phép (mua 1 lần) cho doanh nghiệp khi mua với số lượng lớn.</li></ul>' +
                       '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                       '<ul><li><strong>Keyword chính:</strong> <strong><code>サブスクリプション</code> (Subscription), <code>定額</code> (Phí cố định), <code>一定の期間</code> (Khoảng thời gian nhất định)</strong>.</li>' +
                       '<li><strong>Mẹo ghi nhớ:</strong> Trả tiền theo tháng/năm → <strong>Subscription</strong> (thường được gọi tắt là <code>サブスク</code>).</li></ul>'
    },
    {
      'question': 'A社では，1千万円を投資して営業支援システムを再構築することを検討している。現状の営業支援システムの運用費が5百万円／年，再構築後の営業支援システムの運用費が4百万円／年，再構築による新たな利益の増加が2百万円／年であるとき，この投資の回収期間は何年か。ここで，これら以外の効果，費用などは考慮しないものとし，計算結果は小数点以下第2位を四捨五入するものとする。',
      'options': ['2.5', '3.3', '5.0', '10.0'],
      'answer': 1,
      'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                       '<ul><li><strong>Câu hỏi:</strong> Tính <strong>thời gian hoàn vốn (<code>回収期間</code>)</strong>?</li>' +
                       '<li><strong>Đầu tư (<code>投資</code>):</strong> 10 triệu yên.</li>' +
                       '<li><strong>Lợi ích hàng năm:</strong></li>' +
                       '<ul><li>Tiết kiệm chi phí vận hành = 5 triệu (cũ) - 4 triệu (mới) = 1 triệu yên/năm.</li>' +
                       '<li>Lợi nhuận tăng thêm = 2 triệu yên/năm.</li></ul>' +
                       '<li>Làm tròn đến chữ số thập phân thứ hai (lấy 1 chữ số).</li>' +
                       '<li><strong>ア.</strong> 2.5</li>' +
                       '<li><strong>イ.</strong> 3.3</li>' +
                       '<li><strong>ウ.</strong> 5.0</li>' +
                       '<li><strong>エ.</strong> 10.0</li></ul>' +
                       '<hr><h3><strong>Phân tích & Tính toán</strong></h3>' +
                       '<ol><li><strong>Tính Tổng lợi ích hàng năm (年間効果):</strong></li>' +
                       '<ul><li>Lợi ích = (Tiết kiệm chi phí) + (Lợi nhuận tăng thêm)</li>' +
                       '<li>Lợi ích = 1 triệu yên + 2 triệu yên = <strong>3 triệu yên/năm</strong>.</li></ul>' +
                       '<li><strong>Tính Thời gian hoàn vốn (<code>回収期間</code>):</strong></li>' +
                       '<ul><li>Công thức: <code>Thời gian hoàn vốn = Tổng vốn đầu tư / Tổng lợi ích hàng năm</code></li>' +
                       '<li><code>= 10 triệu / 3 triệu = 3.3333...</code></li></ul>' +
                       '<li><strong>Làm tròn:</strong></li>' +
                       '<ul><li>Yêu cầu: <code>小数点以下第2位を四捨五入</code> (Làm tròn chữ số thập phân thứ 2).</li>' +
                       '<li><code>3.3<u>3</u>33...</code> → Chữ số thứ 2 là 3 (nhỏ hơn 5) nên làm tròn xuống.</li>' +
                       '<li>Kết quả: <strong>3.3 năm</strong>.</li></ul></ol>' +
                       '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                       '<ul><li><strong>Keyword chính:</strong> <strong><code>回収期間</code> (Thời gian hoàn vốn)</strong>.</li>' +
                       '<li><strong>Mẹo ghi nhớ:</strong> <code>Thời gian hoàn vốn = Tổng đầu tư / (Tổng lợi ích mỗi năm)</code>. Luôn nhớ cộng tất cả các khoản lợi ích (tiết kiệm chi phí + lợi nhuận tăng thêm) lại với nhau trước khi chia.</li></ul>'
    },
    {
      'question': 'ある銀行では，システムの接続仕様を外部に公開し，あらかじめ契約を結んだ外部事業者のアクセスを認めることによって，利便性の高い，高度なサービスを展開しやすくしている。このような取組を表す用語として，最も適切なものはどれか。',
      'options': ['BPO', 'RPA', 'オープンAPI', '技術経営'],
      'answer': 2,
      'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                       '<ul><li><strong>Câu hỏi:</strong> Một ngân hàng <strong>công khai (<code>公開</code>) thông số kỹ thuật kết nối</strong> hệ thống của mình cho các đối tác bên ngoài (<code>外部事業者</code>) để họ có thể tạo ra các dịch vụ mới. Sáng kiến này được gọi là gì?</li>' +
                       '<li><strong>ア.</strong> BPO</li>' +
                       '<li><strong>イ.</strong> RPA</li>' +
                       '<li><strong>ウ.</strong> Open API (API Mở)</li>' +
                       '<li><strong>エ.</strong> MOT (Quản trị công nghệ)</li></ul>' +
                       '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                       '<ul><li><strong>ア. BPO (Business Process Outsourcing):</strong> ❌ Sai. Là thuê ngoài quy trình nghiệp vụ (ví dụ: thuê công ty khác làm dịch vụ call center).</li>' +
                       '<li><strong>イ. RPA (Robotic Process Automation):</strong> ❌ Sai. Là dùng robot phần mềm để tự động hóa công việc văn phòng lặp lại.</li>' +
                       '<li><strong>ウ. オープンAPI (Open API):</strong> ✅ <strong>Đúng.</strong> <strong>API (Application Programming Interface)</strong> là "cổng giao tiếp" kỹ thuật của một hệ thống. <strong>Open API</strong> là việc "mở" (<code>オープン</code> = <code>公開</code>) các cổng giao tiếp này cho bên thứ ba (<code>外部</code>) sử dụng. Ví dụ: Các ngân hàng mở API để các app ví điện tử (như MoMo) có thể kết nối và thực hiện chuyển tiền.</li>' +
                       '<li><strong>エ. 技術経営 (MOT - Management of Technology):</strong> ❌ Sai. Là quản trị công nghệ, một lĩnh vực học thuật/quản lý nội bộ.</li></ul>' +
                       '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                       '<ul><li><strong>Keyword chính:</strong> <strong><code>外部に公開</code> (Công khai ra bên ngoài), <code>接続仕様</code> (Thông số kết nối)</strong>.</li>' +
                       '<li><strong>Mẹo ghi nhớ:</strong> "Mở" (<strong>Open</strong> / <code>公開</code>) "cổng giao tiếp" (<strong>API</strong> / <code>接続仕様</code>) cho người ngoài dùng → <strong>Open API</strong>.</li></ul>'
    },
    {
      'question': 'コーポレートガバナンスを強化した事例として，最も適切なものはどれか。',
      'options': ['女性が活躍しやすくするために労務制度を拡充した。', '迅速な事業展開のために，他社の事業を買収した。', '独立性の高い社外取締役の人数を増やした。', '利益が得られにくい事業から撤退した。'],
      'answer': 2,
      'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                       '<ul><li><strong>Câu hỏi:</strong> Ví dụ nào sau đây là biện pháp tăng cường <strong>Quản trị doanh nghiệp (<code>コーポレートガバナンス</code>)</strong>?</li>' +
                       '<li><strong>ア.</strong> Mở rộng chế độ lao động để phụ nữ dễ dàng phát huy.</li>' +
                       '<li><strong>イ.</strong> Mua lại (M&A) công ty khác để phát triển kinh doanh.</li>' +
                       '<li><strong>ウ.</strong> <strong>Tăng số lượng thành viên hội đồng quản trị độc lập từ bên ngoài (<code>社外取締役</code>)</strong>.</li>' +
                       '<li><strong>エ.</strong> Rút lui khỏi mảng kinh doanh ít lợi nhuận.</li></ul>' +
                       '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                       '<p><strong>Quản trị doanh nghiệp (Corporate Governance)</strong> là cơ chế <strong>giám sát</strong> ban lãnh đạo (những người điều hành) để đảm bảo tính minh bạch và hiệu quả, bảo vệ lợi ích của cổ đông.</p>' +
                       '<ul><li><strong>ア. ❌ Sai.</strong> Đây là biện pháp về đa dạng hóa nhân sự (Diversity) hoặc Trách nhiệm xã hội (CSR).</li>' +
                       '<li><strong>イ. ❌ Sai.</strong> Đây là chiến lược kinh doanh M&A (Sáp nhập & Mua lại).</li>' +
                       '<li><strong>ウ. ✅ Đúng.</strong> Việc <strong>tăng số lượng thành viên hội đồng quản trị độc lập từ bên ngoài (<code>社外取締役</code>)</strong> là một biện pháp kinh điển để tăng cường sự giám sát. Vì họ "độc lập" (<code>独立性</code>) (không phải người điều hành nội bộ), họ có thể đưa ra các ý kiến giám sát khách quan để bảo vệ cổ đông.</li>' +
                       '<li><strong>エ. ❌ Sai.</strong> Đây là chiến lược kinh doanh, tái cơ cấu danh mục đầu tư.</li></ul>' +
                       '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                       '<ul><li><strong>Keyword chính:</strong> <strong><code>コーポレートガバナンス</code> (Quản trị doanh nghiệp)</strong>.</li>' +
                       '<li><strong>Mẹo ghi nhớ:</strong> Quản trị = <strong>Giám sát (<code>監視</code>)</strong>. Ai giám sát tốt nhất? → Người ngoài độc lập (<strong><code>社外取締役</code></strong>).</li></ul>'
    },
    {
      'question': '技術開発戦略において作成されるロードマップを説明しているものはどれか。',
      'options': ['技術の競争力レベルと技術のライフサイクルを2軸としたマトリックス上に，自社の技術や新しい技術をプロットする。', '研究開発への投資とその成果を2軸とした座標上に，技術の成長過程をグラフ化し，旧技術から新技術への転換状況を表す。', '市場面からの有望度と技術面からの有望度を2軸としたマトリックス上に，技術開発プロジェクトをプロットする。', '横軸に時間，縦軸に市場，商品，技術などを示し，研究開発成果の商品化，事業化の方向性をそれらの要素間の関係で表す。'],
      'answer': 3,
      'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                       '<ul><li><strong>Câu hỏi:</strong> Mô tả nào giải thích về <strong>Lộ trình (<code>ロードマップ</code> - Roadmap)</strong> được tạo ra trong chiến lược phát triển công nghệ?</li>' +
                       '<li><strong>ア.</strong> Biểu đồ ma trận (matrix) 2 trục: Cạnh tranh và Vòng đời công nghệ.</li>' +
                       '<li><strong>イ.</strong> Đồ thị 2 trục: Đầu tư R&D và Kết quả.</li>' +
                       '<li><strong>ウ.</strong> Biểu đồ ma trận (matrix) 2 trục: Triển vọng thị trường và Triển vọng kỹ thuật.</li>' +
                       '<li><strong>エ.</strong> Biểu đồ có <strong>trục ngang là thời gian (<code>横軸に時間</code>)</strong>, trục dọc là Thị trường, Sản phẩm, Công nghệ... để thể hiện phương hướng thương mại hóa, kinh doanh hóa các kết quả R&D.</li></ul>' +
                       '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                       '<ul><li><strong>ア, イ, ウ. ❌ Sai.</strong> Các mô tả này đều nói về các loại biểu đồ <strong>ma trận (matrix)</strong> hoặc đồ thị 2 trục, dùng để phân tích vị thế ở một thời điểm, không thể hiện tiến trình theo thời gian.</li>' +
                       '<li><strong>エ. ✅ Đúng.</strong> Đặc điểm nhận dạng quan trọng nhất của một <strong>lộ trình (roadmap)</strong> là nó luôn có <strong>trục ngang biểu diễn thời gian (<code>横軸に時間</code>)</strong>. Nó vạch ra con đường (road) phát triển các yếu tố (thị trường, sản phẩm, công nghệ) qua từng mốc thời gian trong tương lai.</li></ul>' +
                       '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                       '<ul><li><strong>Keyword chính:</strong> <strong><code>ロードマップ</code> (Roadmap)</strong>.</li>' +
                       '<li><strong>Mẹo ghi nhớ:</strong> Roadmap (bản đồ đường đi) thì phải có "đường đi", tức là phải có <strong>trục thời gian (<code>時間</code>)</strong>. Thấy <strong><code>横軸に時間</code> (Trục ngang là thời gian)</strong> → Chọn ngay.</li></ul>'
    },
    {
      'question': 'RPAが適用できる業務として，最も適切なものはどれか。',
      'options': ['ゲームソフトのベンダーが，ゲームソフトのプログラムを自動で改善する業務', '従業員の交通費精算で，交通機関利用区間情報と領収書データから精算伝票を作成する業務', '食品加工工場で，産業用ロボットを用いて冷凍食品を自動で製造する業務', '通信販売業で，膨大な顧客の購買データから顧客の購買行動に関する新たな法則を見つける業務'],
      'answer': 1,
      'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                       '<ul><li><strong>Câu hỏi:</strong> Nghiệp vụ nào sau đây phù hợp nhất để áp dụng <strong>RPA</strong>?</li>' +
                       '<li><strong>ア.</strong> Tự động cải tiến (<code>改善</code>) chương trình game.</li>' +
                       '<li><strong>イ.</strong> <strong>Tạo báo cáo (<code>伝票を作成</code>)</strong> thanh toán chi phí đi lại từ dữ liệu có sẵn (thông tin tuyến đường, hóa đơn).</li>' +
                       '<li><strong>ウ.</strong> Sử dụng <strong>robot công nghiệp (<code>産業用ロボット</code>)</strong> trong nhà máy để sản xuất thực phẩm đông lạnh.</li>' +
                       '<li><strong>エ.</strong> Tìm ra <strong>quy luật mới (<code>新たな法則</code>)</strong> từ dữ liệu mua hàng khổng lồ của khách hàng.</li></ul>' +
                       '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                       '<p><strong>RPA (Robotic Process Automation)</strong> là công cụ dùng <strong>robot phần mềm</strong> để tự động hóa các công việc <strong>có tính lặp đi lặp lại, dựa trên quy tắc rõ ràng</strong> (<code>定型的な</code>) và được thực hiện <strong>trên máy tính</strong>.</p>' +
                       '<ul><li><strong>ア. ❌ Sai.</strong> Tự động cải tiến chương trình đòi hỏi sự sáng tạo và trí tuệ, đây là lĩnh vực của AI, không phải RPA.</li>' +
                       '<li><strong>イ. ✅ Đúng.</strong> Việc tạo báo cáo chi phí đi lại (copy dữ liệu từ file A, paste vào file B, tính tổng) là một công việc <strong>văn phòng lặp đi lặp lại</strong>, có quy tắc rõ ràng, rất phù hợp cho RPA.</li>' +
                       '<li><strong>ウ. ❌ Sai.</strong> Đây là công việc của <strong>robot công nghiệp (<code>産業用ロボット</code>)</strong> (phần cứng) trong nhà máy, thuộc về Factory Automation (FA), không phải robot phần mềm (RPA).</li>' +
                       '<li><strong>エ. ❌ Sai.</strong> Tìm ra quy luật mới (<code>新たな法則</code>) từ dữ liệu lớn là công việc <strong>phân tích dữ liệu (Data Mining/Analysis)</strong>, cần đến AI hoặc Data Scientist.</li></ul>' +
                       '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                       '<ul><li><strong>Keyword chính:</strong> <strong><code>RPA</code></strong>.</li>' +
                       '<li><strong>Mẹo ghi nhớ:</strong> Hãy tìm công việc **nhàm chán, lặp đi lặp lại** mà một nhân viên văn phòng (<code>事務</code>) phải làm trên máy tính (<code>PC操作</code>). <strong>Làm báo cáo (<code>伝票を作成</code>)</strong> là một ví dụ kinh điển.</li></ul>'
    },
    {
      'question': '必要な時期に必要な量の原材料や部品を調達することによって，工程間の在庫をできるだけもたないようにする生産方式はどれか。',
      'options': ['BPO', 'CIM', 'JIT', 'OEM'],
      'answer': 2,
      'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                       '<ul><li><strong>Câu hỏi:</strong> Phương thức sản xuất nào cố gắng <strong>không giữ tồn kho (<code>在庫を...もたない</code>)</strong> giữa các công đoạn bằng cách cung cấp nguyên liệu, linh kiện <strong>đúng số lượng và đúng thời điểm (<code>必要な時期に必要な量</code>)</strong> cần thiết?</li>' +
                       '<li><strong>ア.</strong> BPO</li>' +
                       '<li><strong>イ.</strong> CIM</li>' +
                       '<li><strong>ウ.</strong> JIT</li>' +
                       '<li><strong>エ.</strong> OEM</li></ul>' +
                       '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                       '<ul><li><strong>ア. BPO (Business Process Outsourcing):</strong> ❌ Sai. Là "Thuê ngoài quy trình nghiệp vụ" (ví dụ: thuê ngoài mảng kế toán, call center).</li>' +
                       '<li><strong>イ. CIM (Computer Integrated Manufacturing):</strong> ❌ Sai. Là "Sản xuất tích hợp bằng máy tính", một khái niệm rộng về việc dùng máy tính để tự động hóa toàn bộ nhà máy.</li>' +
                       '<li><strong>ウ. JIT (Just-In-Time):</strong> ✅ <strong>Đúng.</strong> Đây là một triết lý sản xuất (nổi tiếng của Toyota), với mục tiêu loại bỏ lãng phí bằng cách sản xuất và cung ứng "<strong>Đúng lúc (Just In Time)</strong>", "<strong>Đúng số lượng (<code>必要な量</code>)</strong>", từ đó giảm thiểu tồn kho (<code>在庫</code>) xuống gần như bằng 0.</li>' +
                       '<li><strong>エ. OEM (Original Equipment Manufacturing):</strong> ❌ Sai. Là "Sản xuất thiết bị gốc", tức là một công ty sản xuất hàng hóa cho một thương hiệu khác (ví dụ: Foxconn làm iPhone cho Apple).</li></ul>' +
                       '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                       '<ul><li><strong>Keyword chính:</strong> <strong><code>JIT</code> (Just-In-Time), <code>在庫をもたない</code> (Không giữ tồn kho), <code>必要な時期に必要な量</code> (Đúng lúc, đúng số lượng)</strong>.</li>' +
                       '<li><strong>Mẹo ghi nhớ:</strong> <strong>J</strong>ust <strong>I</strong>n <strong>T</strong>ime (<code>ジャストインタイム</code>) = "Đúng lúc" → Không cần kho (<code>在庫なし</code>).</li></ul>'
    },
    {
      'question': 'ある商品の販売量と気温の関係が一次式で近似できるとき，予測した気温から商品の販売量を推定する手法として，適切なものはどれか。',
      'options': ['回帰分析', '線形計画法', 'デルファイ法', 'パレート分析'],
      'answer': 0,
      'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                       '<ul><li><strong>Câu hỏi:</strong> Khi mối quan hệ giữa lượng bán hàng và nhiệt độ có thể được xấp xỉ bằng một <strong>phương trình tuyến tính (<code>一次式</code>)</strong>, phương pháp nào phù hợp để <strong>ước tính/dự đoán (<code>推定する</code>)</strong> lượng bán hàng từ nhiệt độ dự báo?</li>' +
                       '<li><strong>ア.</strong> Phân tích hồi quy (<code>回帰分析</code>)</li>' +
                       '<li><strong>イ.</strong> Quy hoạch tuyến tính (<code>線形計画法</code>)</li>' +
                       '<li><strong>ウ.</strong> Phương pháp Delphi (<code>デルファイ法</code>)</li>' +
                       '<li><strong>エ.</strong> Phân tích Pareto (<code>パレート分析</code>)</li></ul>' +
                       '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                       '<ul><li><strong>ア. 回帰分析 (Regression Analysis):</strong> ✅ <strong>Đúng.</strong> <strong>Phân tích hồi quy</strong> là một phương pháp thống kê dùng để tìm ra phương trình (<code>式</code>) mô tả mối quan hệ giữa các biến số (ví dụ: nhiệt độ và doanh số) và dùng nó để <strong>dự đoán (<code>推定</code>)</strong>.</li>' +
                       '<li><strong>イ. 線形計画法 (Linear Programming):</strong> ❌ Sai. Dùng để tìm giá trị <strong>tối ưu (lớn nhất/nhỏ nhất)</strong> (ví dụ: tối đa hóa lợi nhuận) dưới các điều kiện ràng buộc.</li>' +
                       '<li><strong>ウ. デルファイ法 (Delphi Method):</strong> ❌ Sai. Dùng để thu thập và tổng hợp <strong>ý kiến chuyên gia</strong> qua nhiều vòng lặp lại để đạt được sự đồng thuận.</li>' +
                       '<li><strong>エ. パレート分析 (Pareto Analysis):</strong> ❌ Sai. Dùng để xác định các yếu tố quan trọng nhất (ví dụ: quy tắc <strong>80/20</strong> - 80% doanh thu đến từ 20% khách hàng).</li></ul>' +
                       '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                       '<ul><li><strong>Keyword chính:</strong> <strong><code>関係</code> (Mối quan hệ), <code>一次式</code> (Phương trình tuyến tính), <code>推定する</code> (Ước tính/Dự đoán)</strong>.</li>' +
                       '<li><strong>Mẹo ghi nhớ:</strong> Tìm "phương trình quan hệ" (<code>式</code>) để "dự đoán" (<code>推定</code>) → <strong>Hồi quy (<code>回帰</code> - Regression)</strong>.</li></ul>'
    },
    {
      'question': '金融機関では，同一の顧客で複数の口座をもつ個人や法人について，氏名又は法人名，生年月日又は設立年月日，電話番号，住所又は所在地などを手掛かりに集約し，顧客ごとの預金の総額を正確に把握する作業が行われる。このように顧客がもつ複数の口座を，顧客ごとに取りまとめて一元管理する手続を表す用語として，最も適切なものはどれか。',
      'options': ['アカウントアグリゲーション', 'キーマッピング', '垂直統合', '名寄せ'],
      'answer': 3,
      'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                       '<ul><li><strong>Câu hỏi:</strong> Trong các tổ chức tài chính, quy trình <strong>tổng hợp và quản lý tập trung (<code>取りまとめて一元管理</code>)</strong> <strong>nhiều tài khoản (<code>複数の口座</code>)</strong> của cùng một khách hàng (dựa trên tên, ngày sinh, sđt...) được gọi là gì?</li>' +
                       '<li><strong>ア.</strong> Account Aggregation</li>' +
                       '<li><strong>イ.</strong> Key Mapping</li>' +
                       '<li><strong>ウ.</strong> Tích hợp dọc (<code>垂直統合</code>)</li>' +
                       '<li><strong>エ.</strong> Nayose (<code>名寄せ</code>)</li></ul>' +
                       '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                       '<ul><li><strong>ア. アカウントアグリゲーション (Account Aggregation):</strong> ❌ Sai. Đây là một dịch vụ (thường là app) cho phép *người dùng* xem thông tin từ *nhiều ngân hàng* khác nhau trên một ứng dụng duy nhất (ví dụ: Money Forward). Đây là góc nhìn của người dùng.</li>' +
                       '<li><strong>イ. キーマッピング (Key Mapping):</strong> ❌ Sai. Là việc gán chức năng cho các phím trên bàn phím.</li>' +
                       '<li><strong>ウ. 垂直統合 (Vertical Integration):</strong> ❌ Sai. Là một chiến lược kinh doanh (ví dụ: một công ty thâu tóm cả nhà cung cấp và nhà phân phối của mình).</li>' +
                       '<li><strong>エ. 名寄せ (Nayose):</strong> ✅ <strong>Đúng.</strong> Đây là thuật ngữ chuyên ngành (đặc biệt trong tài chính, ngân hàng) để chỉ chính xác hành động *nội bộ* của tổ chức: hợp nhất, <strong>gom nhóm (<code>寄せ</code>)</strong> dữ liệu của cùng một <strong>"tên" (<code>名</code>)</strong> (khách hàng) lại với nhau từ nhiều tài khoản/hệ thống khác nhau để quản lý tập trung (<code>一元管理</code>).</li></ul>' +
                       '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                       '<ul><li><strong>Keyword chính:</strong> <strong><code>複数の口座</code> (Nhiều tài khoản), <code>一元管理</code> (Quản lý tập trung), <code>顧客ごと</code> (Theo từng khách hàng)</strong>.</li>' +
                       '<li><strong>Mẹo ghi nhớ:</strong> <strong><code>名</code> (danh, tên) + <code>寄せ</code> (gom lại)</strong> = Gom các tài khoản lại dưới cùng một cái tên (khách hàng).</li></ul>'
    },
    {
      'question': 'AIに関するガイドラインの一つである"人間中心のAI社会原則"に定められている七つの"AI社会原則"のうち，"イノベーションの原則"に関する記述として，最も適切なものはどれか。',
      'options': ['AIの発展によって人も併せて進化するように，国際化や多様化を推進し，大学，研究機関，企業など，官民における連携と，柔軟な人材の移動を促進する。', 'AIの利用がもたらす結果については，問題の特性に応じて，AIの開発，提供，利用に携わった関係者が分担して責任を負う。', 'サービスの提供者は，AIを利用している事実やデータの取得方法や使用方法，結果の適切性について，利用者に対する適切な説明を行う。', '情報弱者を生み出さないために，幼児教育や初等中等教育において，AI活用や情報リテラシーに関する教育を行う。'],
      'answer': 0,
      'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                       '<ul><li><strong>Câu hỏi:</strong> Trong 7 nguyên tắc xã hội về AI, mô tả nào thuộc về <strong>"Nguyên tắc đổi mới" (<code>イノベーションの原則</code>)</strong>?</li>' +
                       '<li><strong>ア.</strong> Thúc đẩy quốc tế hóa, đa dạng hóa, và <strong>sự hợp tác (<code>連携</code>)</strong> công-tư-học thuật (đại học, viện nghiên cứu, doanh nghiệp) để con người cùng phát triển với AI.</li>' +
                       '<li><strong>イ.</strong> Các bên liên quan (phát triển, cung cấp, sử dụng) sẽ chia sẻ <strong>trách nhiệm (<code>責任</code>)</strong> về kết quả của AI.</li>' +
                       '<li><strong>ウ.</strong> Nhà cung cấp dịch vụ phải <strong>giải thích (<code>説明</code>)</strong> cho người dùng về việc sử dụng AI, cách thu thập/sử dụng dữ liệu.</li>' +
                       '<li><strong>エ.</strong> Tiến hành <strong>giáo dục (<code>教育</code>)</strong> về AI và literacy từ cấp mầm non, tiểu học để không tạo ra người yếu thế về thông tin.</li></ul>' +
                       '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                       '<ul><li><strong>ア. ✅ Đúng.</strong> "Đổi mới" (<strong><code>イノベーション</code></strong>) luôn được thúc đẩy bởi sự <strong>hợp tác (<code>連携</code>)</strong>, đa dạng hóa (<code>多様化</code>), và luân chuyển nhân tài. Đây là mô tả về việc tạo môi trường thuận lợi cho đổi mới.</li>' +
                       '<li><strong>イ. ❌ Sai.</strong> Phân chia <strong>trách nhiệm (<code>責任</code>)</strong> là thuộc "Nguyên tắc Trách nhiệm giải trình" (<code>説明責任の原則</code>) hoặc "Nguyên tắc Lấy con người làm trung tâm".</li>' +
                       '<li><strong>ウ. ❌ Sai.</strong> <strong>Giải thích (<code>説明</code>)</strong> cho người dùng là thuộc "Nguyên tắc Minh bạch" (<code>透明性の原則</code>).</li>' +
                       '<li><strong>エ. ❌ Sai.</strong> <strong>Giáo dục (<code>教育</code>)</strong> là thuộc "Nguyên tắc Giáo dục và Nâng cao hiểu biết" (<code>教育・リテラシーの原則</code>).</li></ul>' +
                       '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                       '<ul><li><strong>Keyword chính:</strong> <strong><code>イノベーション</code> (Đổi mới - Innovation)</strong>.</li>' +
                       '<li><strong>Mẹo ghi nhớ:</strong> Đổi mới (Innovation) thường đi liền với <strong>Hợp tác (<code>連携</code>)</strong>, <strong>Đa dạng hóa (<code>多様化</code>)</strong>, <strong>Quốc tế hóa (<code>国際化</code>)</strong>.</li></ul>'
    },
    {
      'question': '品質に関する組織やプロセスの運営管理を標準化し，マネジメントの質や効率の向上を目的とした方策として，適切なものはどれか。',
      'options': ['ISMSの導入', 'ISO 9001の導入', 'ITILの導入', 'プライバシーマークの取得'],
      'answer': 1,
      'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                       '<ul><li><strong>Câu hỏi:</strong> Biện pháp nào dùng để tiêu chuẩn hóa việc quản lý các quy trình liên quan đến <strong>chất lượng (<code>品質</code>)</strong>, nhằm mục đích nâng cao chất lượng và hiệu quả quản lý?</li>' +
                       '<li><strong>ア.</strong> Triển khai ISMS</li>' +
                       '<li><strong>イ.</strong> Triển khai ISO 9001</li>' +
                       '<li><strong>ウ.</strong> Triển khai ITIL</li>' +
                       '<li><strong>エ.</strong> Lấy chứng nhận Privacy Mark</li></ul>' +
                       '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                       '<ul><li><strong>ア. ISMS (ISO 27001):</strong> ❌ Sai. Là tiêu chuẩn về Hệ thống quản lý <strong>An ninh thông tin (<code>情報セキュリティ</code>)</strong>.</li>' +
                       '<li><strong>イ. ISO 9001:</strong> ✅ <strong>Đúng.</strong> <strong>ISO 9001</strong> là tiêu chuẩn quốc tế về <strong>Hệ thống quản lý Chất lượng (<code>品質</code> - Quality Management System)</strong>.</li>' +
                       '<li><strong>ウ. ITIL (IT Infrastructure Library):</strong> ❌ Sai. Là một bộ các thực hành tốt nhất (best practices) cho việc quản lý <strong>Dịch vụ CNTT (<code>ITサービス</code>)</strong>.</li>' +
                       '<li><strong>エ. プライバシーマーク (Privacy Mark):</strong> ❌ Sai. Là một chứng nhận của Nhật Bản về việc bảo vệ <strong>Thông tin cá nhân (<code>個人情報</code>)</strong>.</li></ul>' +
                       '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                       '<ul><li><strong>Keyword chính:</strong> <strong><code>品質</code> (Chất lượng - Quality)</strong>.</li>' +
                       '<li><strong>Mẹo ghi nhớ (Phải thuộc lòng):</strong></li>' +
                       '<ul><li><strong><code>ISO 9001</code> = <code>品質</code> (Chất lượng)</strong></li>' +
                       '<li><code>ISO 14001</code> = <code>環境</code> (Môi trường)</li>' +
                       '<li><strong><code>ISO 27001</code> (ISMS) = <code>情報セキュリティ</code> (An ninh thông tin)</strong></li>' +
                       '<li><strong><code>プライバシーマーク</code> (P-Mark) = <code>個人情報</code> (Thông tin cá nhân)</strong></li>' +
                       '<li><strong><code>ITIL</code> = <code>ITサービス</code> (Dịch vụ CNTT)</strong></li></ul></ul>'
    },
    {
      'question': '不正競争防止法で規定されている限定提供データに関する記述として，最も適切なものはどれか。',
      'options': ['特定の第三者に対し，1回に限定して提供する前提で保管されている技術上又は営業上の情報は限定提供データである。', '特定の第三者に提供する情報として電磁的方法によって相当量蓄積され管理されている技術上又は営業上の情報(秘密として管理されているものを除く)は限定提供データである。', '特定の第三者に提供するために，金庫などで物理的に管理されている技術上又は営業上の情報は限定提供データである。', '不正競争防止法に定めのある営業秘密は限定提供データである。'],
      'answer': 1,
      'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                       '<ul><li><strong>Câu hỏi:</strong> Mô tả nào là đúng nhất về <strong>"Dữ liệu cung cấp có giới hạn" (<code>限定提供データ</code>)</strong> theo Luật phòng chống cạnh tranh không lành mạnh?</li>' +
                       '<li><strong>ア.</strong> Là thông tin được cung cấp 1 lần duy nhất (<code>1回に限定</code>).</li>' +
                       '<li><strong>イ.</strong> Là thông tin (loại trừ bí mật kinh doanh <code>秘密...除く</code>) được cung cấp cho bên thứ ba, được <strong>lưu trữ/quản lý với số lượng lớn (<code>相当量蓄積</code>)</strong> bằng <strong>phương pháp điện tử (<code>電磁的方法</code>)</strong>.</li>' +
                       '<li><strong>ウ.</strong> Là thông tin được quản lý <strong>vật lý (<code>物理的に管理</code>)</strong> (ví dụ: trong két sắt).</li>' +
                       '<li><strong>エ.</strong> Bí mật kinh doanh (<code>営業秘密</code>) cũng là một loại <code>限定提供データ</code>.</li></ul>' +
                       '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                       '<p>Định nghĩa của <strong><code>限定提供データ</code> (Limited Provided Data)</strong> (được bảo vệ theo luật) bao gồm 3 yếu tố cốt lõi:</p>' +
                       '<ol><li>Được cung cấp có giới hạn (<code>限定</code>).</li>' +
                       '<li>Được lưu trữ và quản lý với số lượng lớn bằng phương pháp điện tử (<code>電磁的方法によって相当量蓄積</code>).</li>' +
                       '<li><strong>Không phải là bí mật kinh doanh</strong> (<code>秘密として管理されているものを除く</code>).</li></ol>' +
                       '<ul><li><strong>ア. ❌ Sai.</strong> Phải có tính "cung cấp" (chia sẻ), không phải chỉ "1 lần".</li>' +
                       '<li><strong>イ. ✅ Đúng.</strong> Mô tả này bao gồm đầy đủ các yếu tố cốt lõi: (1) cung cấp cho bên thứ ba, (2) lưu trữ điện tử lượng lớn, và (3) loại trừ bí mật kinh doanh. Đây là khái niệm để bảo vệ Big Data.</li>' +
                       '<li><strong>ウ. ❌ Sai.</strong> Phải được quản lý bằng phương pháp <strong>điện tử (<code>電磁的方法</code>)</strong>, không phải vật lý.</li>' +
                       '<li><strong>エ. ❌ Sai.</strong> Định nghĩa đã nói rõ là nó <strong>loại trừ (<code>除く</code>)</strong> bí mật kinh doanh (<code>営業秘密</code>). Hai khái niệm này được luật bảo vệ riêng biệt.</li></ul>' +
                       '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                       '<ul><li><strong>Keyword chính:</strong> <strong><code>限定提供データ</code>, <code>相当量蓄積</code> (Lưu trữ lượng lớn), <code>電磁的方法</code> (Phương pháp điện tử), <code>秘密...除く</code> (Loại trừ bí mật)</strong>.</li>' +
                       '<li><strong>Mẹo ghi nhớ:</strong> <code>限定提供データ</code> = "Big Data được bảo vệ". Nhớ 3 yếu tố: <strong>Lượng lớn + Điện tử + Không phải bí mật</strong>.</li></ul>'
    },
    {
      'question': '企業の戦略立案やマーケティングなどで使用されるフェルミ推定に関する記述として，最も適切なものはどれか。',
      'options': ['正確に算出することが極めて難しい数量に対して，把握している情報と論理的な思考プロセスによって概数を求める手法である。', '特定の集団と活動を共にしたり，人々の動きを観察したりすることによって，慣習や嗜好，地域や組織を取り巻く文化を類推する手法である。', '入力データと出力データから，その因果関係を統計的に推定する手法である。', '有識者のグループに繰り返し同一のアンケート調査とその結果のフィードバックを行うことによって，ある分野の将来予測に関する総意を得る手法である。'],
      'answer': 0,
      'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                       '<ul><li><strong>Câu hỏi:</strong> Mô tả nào là đúng nhất về <strong>"Ước tính Fermi" (<code>フェルミ推定</code>)</strong>?</li>' +
                       '<li><strong>ア.</strong> Đối với một số lượng rất khó tính chính xác, đây là phương pháp tìm ra một <strong>con số ước tính (<code>概数</code>)</strong> dựa trên thông tin đã biết và <strong>suy luận logic (<code>論理的な思考</code>)</strong>.</li>' +
                       '<li><strong>イ.</strong> Phương pháp <strong>quan sát (<code>観察</code>)</strong>, cùng hoạt động với một nhóm người để suy ra văn hóa, thói quen...</li>' +
                       '<li><strong>ウ.</strong> Phương pháp thống kê ước tính quan hệ nhân quả (<code>因果関係</code>) từ dữ liệu đầu vào/đầu ra.</li>' +
                       '<li><strong>エ.</strong> Phương pháp <strong>lặp lại khảo sát (<code>繰り返し...アンケート</code>)</strong> với một nhóm <strong>chuyên gia (<code>有識者</code>)</strong> để đạt được sự đồng thuận về dự đoán tương lai.</li></ul>' +
                       '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                       '<ul><li><strong>ア. ✅ Đúng.</strong> <strong>Ước tính Fermi</strong> (đặt theo tên nhà vật lý Enrico Fermi) chính là nghệ thuật đưa ra một <strong>con số ước tính (<code>概数</code>)</strong> hợp lý (ví dụ: "Có bao nhiêu người lên dây đàn piano ở Chicago?") bằng cách chia nhỏ bài toán và sử dụng các thông tin đã biết cùng với <strong>suy luận logic (<code>論理的な思考</code>)</strong>, thay vì đi khảo sát.</li>' +
                       '<li><strong>イ. ❌ Sai.</strong> Đây là mô tả về phương pháp nghiên cứu dân tộc học (Fieldwork/Ethnography).</li>' +
                       '<li><strong>ウ. ❌ Sai.</strong> Đây là mô tả về Phân tích hồi quy (<code>回帰分析</code>).</li>' +
                       '<li><strong>エ. ❌ Sai.</strong> Đây là mô tả về <strong>phương pháp Delphi (<code>デルファイ法</code>)</strong>.</li></ul>' +
                       '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                       '<ul><li><strong>Keyword chính:</strong> <strong><code>フェルミ推定</code> (Ước tính Fermi), <code>概数を求める</code> (Tìm số ước tính), <code>論理的な思考</code> (Suy luận logic)</strong>.</li>' +
                       '<li><strong>Mẹo ghi nhớ:</strong></li>' +
                       '<ul><li><strong>Fermi (<code>フェルミ</code>)</strong> = Ước tính (<code>推定</code>) một con số "trên trời" bằng <strong>logic</strong> (<code>論理</code>).</li>' +
                       '<li><strong>Delphi (<code>デルファイ</code>)</strong> = Hỏi <strong>chuyên gia (<code>有識者</code>)</strong> nhiều lần (<code>繰り返し</code>).</li></ul></ul>'
    },
    {
      'question': '表はA社の期末の損益計算書から抜粋した資料である。当期純利益が800百万円であるとき，販売費及び一般管理費は何百万円か。<br><div class=\'img_margin\'><img src=\'img/08.png\' width=\'268\' height=\'234\' alt=\'08.png/image-size:268×234\'></div>',
      'options': ['850', '900', '1,000', '1,200'],
      'answer': 2,
      'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                       '<ul><li><strong>Câu hỏi:</strong> Cho Báo cáo KQKD (<code>損益計算書</code> - P&L). Lợi nhuận ròng (<code>当期純利益</code>) là 800. Hỏi Chi phí bán hàng & quản lý chung (<code>販売費及び一般管理費</code> - SG&A) là bao nhiêu?</li>' +
                       '<li><strong>Dữ liệu từ bảng:</strong></li>' +
                       '<ul><li>Doanh thu (<code>売上高</code>): 8,000</li>' +
                       '<li>Giá vốn hàng bán (<code>売上原価</code>): 6,000</li>' +
                       '<li>Thu nhập ngoài HĐKD (<code>営業外収益</code>): 150</li>' +
                       '<li>Chi phí ngoài HĐKD (<code>営業外費用</code>): 50</li>' +
                       '<li>Lợi nhuận đặc biệt (<code>特別利益</code>): 60</li>' +
                       '<li>Lỗ đặc biệt (<code>特別損失</code>): 10</li>' +
                       '<li>Thuế (<code>法人税等</code>): 350</li></ul>' +
                       '<li><strong>ア.</strong> 850</li> <li><strong>イ.</strong> 900</li> <li><strong>ウ.</strong> 1,000</li> <li><strong>エ.</strong> 1,200</li></ul>' +
                       '<hr><h3><strong>Phân tích & Tính toán</strong></h3>' +
                       '<p>Đây là bài toán điền vào chỗ trống, phải thuộc cấu trúc 5 bậc Lợi nhuận của P&L Nhật Bản.</p>' +
                       '<ol><li><strong>Tính Lợi nhuận gộp (<code>売上総利益</code>) (Tính xuôi):</strong></li>' +
                       '<ul><li><code>LN Gộp = Doanh thu - Giá vốn = 8,000 - 6,000 = <strong>2,000</strong></code></li></ul>' +
                       '<li><strong>Tính Lợi nhuận hoạt động (<code>営業利益</code>) (Tính ngược từ dưới lên):</strong></li>' +
                       '<ul><li><strong>Lợi nhuận ròng (<code>当期純利益</code>) = 800</strong></li>' +
                       '<li><code>LN trước thuế (税引前利益) = LN Ròng + Thuế = 800 + 350 = 1,150</code></li>' +
                       '<li><code>LN thường xuyên (経常利益) = LN trước thuế - LN đặc biệt + Lỗ đặc biệt = 1,150 - 60 + 10 = 1,100</code></li>' +
                       '<li><code>LN hoạt động (営業利益) = LN thường xuyên - Thu nhập ngoài HĐKD + Chi phí ngoài HĐKD = 1,100 - 150 + 50 = <strong>1,000</strong></code></li></ul>' +
                       '<li><strong>Tìm Chi phí SG&A (<code>販売費及び一般管理費</code>):</strong></li>' +
                       '<ul><li>Công thức: <code>LN hoạt động = LN Gộp - Chi phí SG&A</code></li>' +
                       '<li><code>1,000 = 2,000 - (Chi phí SG&A)</code></li>' +
                       '<li><code>Chi phí SG&A = 2,000 - 1,000 = <strong>1,000</strong></code></li></ul></ol>' +
                       '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                       '<ul><li><strong>Mẹo ghi nhớ (Cấu trúc P&L 5 bậc):</strong></li>' +
                       '<ol><li><strong>LN Gộp (<code>売上総利益</code>)</strong> = Doanh thu - Giá vốn</li>' +
                       '<li><strong>LN Hoạt động (<code>営業利益</code>)</strong> = LN Gộp - <strong>Chi phí SG&A (<code>販管費</code>)</strong></li>' +
                       '<li><strong>LN Thường xuyên (<code>経常利益</code>)</strong> = LN Hoạt động + Thu nhập ngoài HĐKD - Chi phí ngoài HĐKD</li>' +
                       '<li><strong>LN Trước thuế (<code>税引前利益</code>)</strong> = LN Thường xuyên + LN đặc biệt - Lỗ đặc biệt</li>' +
                       '<li><strong>LN Ròng (<code>当期純利益</code>)</strong> = LN Trước thuế - Thuế</li></ol></ul>'
    },
    {
      'question': 'システム開発の上流工程において，業務プロセスのモデリングを行う目的として，最も適切なものはどれか。',
      'options': ['業務プロセスで取り扱う大量のデータを，統計的手法やAI手法などを用いて分析し，データ間の相関関係や隠れたパターンなどを見いだすため', '業務プロセスを可視化することによって，適切なシステム設計のベースとなる情報を整備し，関係者間で解釈を共有できるようにするため', '個々の従業員がもっている業務に関する知識・経験やノウハウを社内全体で共有し，創造的なアイディアを生み出すため', 'プロジェクトに必要な要員を調達し，チームとして組織化して，プロジェクトの目的の達成に向けて一致団結させるため'],
      'answer': 1,
      'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                       '<ul><li><strong>Câu hỏi:</strong> Mục đích của việc <strong>mô hình hóa quy trình nghiệp vụ (<code>業務プロセスのモデリング</code>)</strong> ở giai đoạn đầu (<code>上流工程</code>) của phát triển hệ thống là gì?</li>' +
                       '<li><strong>ア.</strong> Phân tích dữ liệu lớn bằng AI/thống kê để tìm ra các mẫu ẩn.</li>' +
                       '<li><strong>イ.</strong> Để <strong>trực quan hóa (<code>可視化</code>)</strong> quy trình nghiệp vụ, tạo cơ sở thông tin cho việc thiết kế hệ thống và giúp các bên liên quan <strong>hiểu chung (<code>解釈を共有</code>)</strong>.</li>' +
                       '<li><strong>ウ.</strong> Chia sẻ kiến thức, kinh nghiệm,ノウハウ trong nội bộ công ty để tạo ra ý tưởng sáng tạo.</li>' +
                       '<li><strong>エ.</strong> Điều phối nhân sự, xây dựng đội nhóm để đạt được mục tiêu dự án.</li></ul>' +
                       '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                       '<ul><li><strong>ア. ❌ Sai.</strong> Phân tích dữ liệu (Data Analysis) để tìm ra các mẫu (pattern) ẩn là mục đích của <strong>Khai phá dữ liệu (<code>データマイニング</code> - Data Mining)</strong>.</li>' +
                       '<li><strong>イ. ✅ Đúng.</strong> Mục đích chính của việc <strong>mô hình hóa (<code>モデリング</code>)</strong> (ví dụ: vẽ sơ đồ BPD) là để <strong>trực quan hóa (<code>可視化</code>)</strong> quy trình nghiệp vụ hiện tại (As-Is), giúp tất cả các bên liên quan (lập trình viên, người dùng, quản lý) có một <strong>cách hiểu chung (<code>解釈を共有</code>)</strong>. Từ đó làm nền tảng cho việc thiết kế quy trình mới (To-Be).</li>' +
                       '<li><strong>ウ. ❌ Sai.</strong> Chia sẻ kiến thức, kinh nghiệm (ノウハウ) trong nội bộ là mục đích của <strong>Quản lý tri thức (<code>ナレッジマネジメント</code> - Knowledge Management)</strong>.</li>' +
                       '<li><strong>エ. ❌ Sai.</strong> Điều phối nhân sự và xây dựng đội nhóm là công việc của <strong>Quản lý dự án (<code>プロジェクトマネジメント</code>)</strong>.</li></ul>' +
                       '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                       '<ul><li><strong>Keyword chính:</strong> <strong><code>モデリング</code> (Mô hình hóa)</strong>.</li>' +
                       '<li><strong>Mẹo ghi nhớ:</strong> Mục đích của mọi loại <strong>Mô hình (<code>モデル</code>)</strong> (sơ đồ, bản vẽ...) là để: <strong>1. Nhìn thấy (<code>可視化</code>)</strong> và <strong>2. Cùng hiểu (<code>共有</code>)</strong>.</li></ul>'
    },
    {
      'question': '技術戦略の策定や技術開発の推進といった技術経営に直接の責任をもつ役職はどれか。',
      'options': ['CEO', 'CFO', 'COO', 'CTO'],
      'answer': 3,
      'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                       '<ul><li><strong>Câu hỏi:</strong> Chức danh nào chịu trách nhiệm trực tiếp về <strong>quản lý công nghệ (<code>技術経営</code>)</strong>, như xây dựng <strong>chiến lược công nghệ (<code>技術戦略</code>)</strong> và thúc đẩy phát triển công nghệ?</li>' +
                       '<li><strong>ア.</strong> CEO (Giám đốc điều hành)</li>' +
                       '<li><strong>イ.</strong> CFO (Giám đốc tài chính)</li>' +
                       '<li><strong>ウ.</strong> COO (Giám đốc vận hành)</li>' +
                       '<li><strong>エ.</strong> CTO (Giám đốc công nghệ)</li></ul>' +
                       '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                       '<ul><li><strong>ア. CEO (Chief Executive Officer):</strong> ❌ Sai. Giám đốc điều hành - chịu trách nhiệm cao nhất về toàn bộ công ty.</li>' +
                       '<li><strong>イ. CFO (Chief Financial Officer):</strong> ❌ Sai. Giám đốc tài chính - chịu trách nhiệm về <strong>tài chính (<code>財務</code>)</strong>.</li>' +
                       '<li><strong>ウ. COO (Chief Operating Officer):</strong> ❌ Sai. Giám đốc vận hành - chịu trách nhiệm về <strong>hoạt động (<code>事業</code>)</strong> hàng ngày.</li>' +
                       '<li><strong>エ. CTO (Chief Technology Officer):</strong> ✅ <strong>Đúng.</strong> Giám đốc công nghệ - chịu trách nhiệm cao nhất về mảng <strong>công nghệ (<code>技術</code>)</strong> của công ty, bao gồm cả chiến lược và phát triển.</li></ul>' +
                       '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                       '<ul><li><strong>Keyword chính:</strong> <strong><code>技術</code> (Công nghệ - Technology)</strong>.</li>' +
                       '<li><strong>Mẹo ghi nhớ:</strong> <strong>T</strong> trong C<strong>T</strong>O là viết tắt của <strong>T</strong>echnology (<strong><code>技術</code></strong>).</li></ul>'
    },
    {
      'question': 'ベンチャーキャピタルに関する記述として，最も適切なものはどれか。',
      'options': ['新しい技術の獲得や，規模の経済性の追求などを目的に，他の企業と共同出資会社を設立する手法', '株式売却による利益獲得などを目的に，新しい製品やサービスを武器に市場に参入しようとする企業に対して出資などを行う企業', '新サービスや技術革新などの創出を目的に，国や学術機関，他の企業など外部の組織と共創関係を結び，積極的に技術や資源を交換し，自社に取り込む手法', '特定された課題の解決を目的に，一定の期間を定めて企業内に立ち上げられ，構成員を関連部門から招集し，目的が達成された時点で解散する組織'],
      'answer': 1,
      'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                       '<ul><li><strong>Câu hỏi:</strong> Mô tả nào phù hợp nhất với <strong>Quỹ đầu tư mạo hiểm (<code>ベンチャーキャピタル</code> - Venture Capital)</strong>?</li>' +
                       '<li><strong>ア.</strong> Phương pháp thành lập công ty góp vốn chung (<code>共同出資会社</code>) với công ty khác.</li>' +
                       '<li><strong>イ.</strong> Là công ty <strong>đầu tư (<code>出資</code>)</strong> vào các công ty khởi nghiệp (<code>ベンチャー</code> - venture) với mục tiêu thu lợi nhuận từ việc <strong>bán cổ phiếu (<code>株式売却</code>)</strong> sau này.</li>' +
                       '<li><strong>ウ.</strong> Phương pháp hợp tác (<code>共創</code>) với các tổ chức bên ngoài (nhà nước, viện nghiên cứu...) để đổi mới.</li>' +
                       '<li><strong>エ.</strong> Tổ chức tạm thời (<code>一定の期間</code>) trong nội bộ công ty để giải quyết vấn đề, sau đó giải tán.</li></ul>' +
                       '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                       '<ul><li><strong>ア. ❌ Sai.</strong> Thành lập công ty góp vốn chung là mô hình <strong>Liên doanh (<code>ジョイントベンチャー</code> - Joint Venture)</strong>.</li>' +
                       '<li><strong>イ. ✅ Đúng.</strong> <strong>Venture Capital (VC)</strong> là các công ty chuyên <strong>đầu tư (<code>出資</code>)</strong> vào các công ty khởi nghiệp (startup / <code>ベンチャー</code>) khi họ còn non trẻ (mạo hiểm), với mục tiêu thu lợi nhuận lớn từ việc bán cổ phiếu (<code>株式売却</code>) sau này khi công ty đó thành công (ví dụ: IPO).</li>' +
                       '<li><strong>ウ. ❌ Sai.</strong> Hợp tác với các tổ chức bên ngoài để đổi mới là mô hình <strong>Đổi mới mở (<code>オープンイノベーション</code> - Open Innovation)</strong>.</li>' +
                       '<li><strong>エ. ❌ Sai.</strong> Tổ chức tạm thời để giải quyết một vấn đề cụ thể là một <strong>Dự án (<code>プロジェクト</code>)</strong> hoặc Đội đặc nhiệm (<code>タスクフォース</code>).</li></ul>' +
                       '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                       '<ul><li><strong>Keyword chính:</strong> <strong><code>ベンチャー</code> (Startup/Venture), <code>出資</code> (Đầu tư), <code>株式売却</code> (Bán cổ phiếu)</strong>.</li>' +
                       '<li><strong>Mẹo ghi nhớ:</strong> <strong>Venture Capital</strong> (Quỹ vốn mạo hiểm) → <strong>Đầu tư (<code>出資</code>)</strong> vào công ty <strong>mạo hiểm (<code>ベンチャー</code>)</strong>.</li></ul>'
    },
    {
      'question': '従来の金融情報システムは堅ろう性が高い一方，柔軟性に欠け，モバイル技術などの情報革新に追従したサービスの迅速な提供が難しかった。これを踏まえて，インターネット関連技術の取込みやそれらを活用するベンチャー企業と組むなどして，新たな価値や革新的なサービスを提供していく潮流を表す用語として，最も適切なものはどれか。',
      'options': ['オムニチャネル', 'フィンテック', 'ブロックチェーン', 'ワントゥワンマーケティング'],
      'answer': 1,
      'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                       '<ul><li><strong>Câu hỏi:</strong> Xu hướng kết hợp <strong>công nghệ (<code>技術</code>)</strong> (như di động, Internet) vào các dịch vụ <strong>tài chính (<code>金融</code>)</strong> truyền thống để tạo ra các dịch vụ mới, đột phá được gọi là gì?</li>' +
                       '<li><strong>ア.</strong> Omnichannel (Đa kênh)</li>' +
                       '<li><strong>イ.</strong> Fintech</li>' +
                       '<li><strong>ウ.</strong> Blockchain</li>' +
                       '<li><strong>エ.</strong> One-to-one Marketing</li></ul>' +
                       '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                       '<ul><li><strong>ア. オムニチャネル (Omnichannel):</strong> ❌ Sai. Là chiến lược marketing/bán hàng đa kênh (online, offline) một cách liền mạch.</li>' +
                       '<li><strong>イ. フィンテック (Fintech):</strong> ✅ <strong>Đúng.</strong> <strong>Fintech</strong> là từ ghép của <strong>Fin</strong>ance (Tài chính - <code>金融</code>) và <strong>Tech</strong>nology (Công nghệ - <code>技術</code>). Nó mô tả chính xác xu hướng các công ty công nghệ hoặc các ngân hàng ứng dụng công nghệ mới (internet, mobile, AI) để tạo ra các dịch vụ tài chính đột phá (ví dụ: thanh toán di động, ví điện tử, cho vay ngang hàng P2P).</li>' +
                       '<li><strong>ウ. ブロックチェーン (Blockchain):</strong> ❌ Sai. Là một công nghệ <strong>cụ thể</strong> (sổ cái phân tán), *có thể* được dùng trong Fintech, nhưng không phải là thuật ngữ chỉ toàn bộ xu hướng.</li>' +
                       '<li><strong>エ. ワントゥワンマーケティング (One-to-one Marketing):</strong> ❌ Sai. Là chiến lược marketing cá nhân hóa cho từng khách hàng.</li></ul>' +
                       '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                       '<ul><li><strong>Keyword chính:</strong> <strong><code>金融</code> (Tài chính - Finance) + <code>技術</code> (Công nghệ - Technology)</strong>.</li>' +
                       '<li><strong>Mẹo ghi nhớ:</strong> <strong>Fin</strong>ance + <strong>Tech</strong>nology = <strong>Fintech (<code>フィンテック</code>)</strong>.</li></ul>'
    },
    {
      'question': '未来のある時点に目標を設定し，そこを起点に現在を振り返り，目標実現のために現在すべきことを考える方法を表す用語として，最も適切なものはどれか。',
      'options': ['PoC(Proof of Concept)', 'PoV(Proof of Value)', 'バックキャスティング', 'フォアキャスティング'],
      'answer': 2,
      'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                       '<ul><li><strong>Câu hỏi:</strong> Phương pháp <strong>đặt mục tiêu ở tương lai (<code>未来...目標を設定</code>)</strong>, sau đó <strong>nhìn ngược về hiện tại (<code>現在を振り返り</code>)</strong> để xác định những việc cần làm ngay bây giờ để đạt được mục tiêu đó, được gọi là gì?</li>' +
                       '<li><strong>ア.</strong> PoC (Kiểm chứng khái niệm)</li>' +
                       '<li><strong>イ.</strong> PoV (Kiểm chứng giá trị)</li>' +
                       '<li><strong>ウ.</strong> Backcasting</li>' +
                       '<li><strong>エ.</strong> Forecasting</li></ul>' +
                       '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                       '<ul><li><strong>ア. PoC (Proof of Concept):</strong> ❌ Sai. Là kiểm chứng khái niệm (liệu ý tưởng có khả thi về kỹ thuật không?).</li>' +
                       '<li><strong>イ. PoV (Proof of Value):</strong> ❌ Sai. Là kiểm chứng giá trị (liệu ý tưởng có mang lại giá trị kinh doanh không?).</li>' +
                       '<li><strong>ウ. バックキャスティング (Backcasting):</strong> ✅ <strong>Đúng.</strong> Đây là phương pháp tư duy chiến lược: <strong>"Back" (<code>バック</code> - ngược)</strong> + "Cast" (chiếu/nhìn). Tức là "nhìn ngược" từ một mục tiêu lý tưởng ở <strong>tương lai (<code>未来</code>)</strong> về <strong>hiện tại (<code>現在</code>)</strong> để xem cần làm gì.</li>' +
                       '<li><strong>エ. フォアキャスティング (Forecasting):</strong> ❌ Sai. Đây là phương pháp đối lập: <strong>"Fore" (<code>フォア</code> - tiến)</strong> + "Cast" (chiếu/nhìn). Tức là "dự báo tiến" từ <strong>hiện tại (<code>現在</code>)</strong> để xem <strong>tương lai (<code>未来</code>)</strong> sẽ như thế nào.</li></ul>' +
                       '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                       '<ul><li><strong>Keyword chính:</strong> <strong><code>未来</code> (Tương lai), <code>目標</code> (Mục tiêu), <code>現在を振り返り</code> (Nhìn lại hiện tại)</strong>.</li>' +
                       '<li><strong>Mẹo ghi nhớ (Phân biệt 2 cách dự báo):</strong></li>' +
                       '<ul><li><strong>Forecasting:</strong> Hiện tại → Tương lai? (Dự đoán)</li>' +
                       '<li><strong>Backcasting:</strong> Tương lai (Mục tiêu) → Hiện tại? (Lập kế hoạch)</li></ul></ul>'
    },
    {
      'question': '情報システムに不正に侵入し，サービスを停止させて社会的混乱を生じさせるような行為に対して，国全体で体系的に防御施策を講じるための基本理念を定め，国の責務などを明らかにした法律はどれか。',
      'options': ['公益通報者保護法', 'サイバーセキュリティ基本法', '不正アクセス禁止法', 'プロバイダ責任制限法'],
      'answer': 1,
      'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                       '<ul><li><strong>Câu hỏi:</strong> Đâu là bộ luật đặt ra các <strong>nguyên tắc cơ bản (<code>基本理念</code>)</strong> và trách nhiệm của <strong>quốc gia (<code>国</code>)</strong> trong việc xây dựng các biện pháp phòng thủ có hệ thống trên <strong>toàn quốc (<code>国全体</code>)</strong> chống lại các hành vi như xâm nhập trái phép, gây ngừng dịch vụ và hỗn loạn xã hội?</li>' +
                       '<li><strong>ア.</strong> Luật bảo vệ người tố cáo (<code>公益通報者保護法</code>)</li>' +
                       '<li><strong>イ.</strong> Luật cơ bản về An ninh mạng (<code>サイバーセキュリティ基本法</code>)</li>' +
                       '<li><strong>ウ.</strong> Luật cấm truy cập trái phép (<code>不正アクセス禁止法</code>)</li>' +
                       '<li><strong>エ.</strong> Luật giới hạn trách nhiệm nhà cung cấp (<code>プロバイダ責任制限法</code>)</li></ul>' +
                       '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                       '<ul><li><strong>ア. ❌ Sai.</strong> Luật này bảo vệ những người tố cáo (whistleblowers) các hành vi sai trái trong nội bộ công ty.</li>' +
                       '<li><strong>イ. ✅ Đúng.</strong> <strong>Luật cơ bản về An ninh mạng (<code>サイバーセキュリティ基本法</code>)</strong> là bộ luật khung, mang tính chiến lược, đặt ra các <strong>nguyên tắc cơ bản (<code>基本理念</code>)</strong> và vai trò, trách nhiệm của <strong>quốc gia (<code>国</code>)</strong>, chính quyền địa phương, và doanh nghiệp trong việc đảm bảo an ninh mạng trên <strong>toàn quốc (<code>国全体</code>)</strong>.</li>' +
                       '<li><strong>ウ. ❌ Sai.</strong> <strong>Luật cấm truy cập trái phép (<code>不正アクセス禁止法</code>)</strong> là luật *hình sự* xử phạt *hành vi* truy cập trái phép cụ thể. Nó không phải là luật "cơ bản" mang tính chiến lược quốc gia.</li>' +
                       '<li><strong>エ. ❌ Sai.</strong> Luật này giới hạn trách nhiệm của các ISP (nhà cung cấp mạng) đối với nội dung mà người dùng đăng tải.</li></ul>' +
                       '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                       '<ul><li><strong>Keyword chính:</strong> <strong><code>国全体</code> (Toàn quốc gia), <code>基本理念</code> (Nguyên tắc cơ bản)</strong>.</li>' +
                       '<li><strong>Mẹo ghi nhớ:</strong> Luật mà có chữ <strong><code>基本</code> (cơ bản)</strong> thường là luật có tính định hướng, chiến lược ở tầm vĩ mô (quốc gia). (Phân biệt với <code>不正アクセス禁止法</code> là luật xử phạt hành vi).</li></ul>'
    },
    {
      'question': 'マーケティングオートメーション(MA)に関する記述として，最も適切なものはどれか。',
      'options': ['企業内に蓄積された大量のデータを分析して，事業戦略などに有効活用する。', '小売業やサービス業において，販売した商品単位の情報の収集・蓄積及び分析を行う。', 'これまで人間が手作業で行っていた定型業務を，AIや機械学習などを取り入れたソフトウェアのロボットが代行することによって自動化や効率化を図る。', '見込み顧客の抽出，獲得，育成などの営業活動を効率化する。'],
      'answer': 3,
      'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                       '<ul><li><strong>Câu hỏi:</strong> Mô tả nào phù hợp nhất với <strong>Tự động hóa Tiếp thị (<code>マーケティングオートメーション</code> - MA)</strong>?</li>' +
                       '<li><strong>ア.</strong> Phân tích dữ liệu lớn (<code>大量のデータ</code>) để tận dụng cho chiến lược kinh doanh.</li>' +
                       '<li><strong>イ.</strong> Thu thập, lưu trữ, phân tích thông tin theo từng đơn vị sản phẩm đã bán.</li>' +
                       '<li><strong>ウ.</strong> Robot phần mềm (<code>ソフトウェアのロボット</code>) tự động hóa các nghiệp vụ lặp lại (<code>定型業務</code>) mà con người làm thủ công.</li>' +
                       '<li><strong>エ.</strong> Hiệu quả hóa các hoạt động marketing/bán hàng như tìm kiếm, thu hút và <strong>nuôi dưỡng (<code>育成</code>)</strong> <strong>khách hàng tiềm năng (<code>見込み顧客</code>)</strong>.</li></ul>' +
                       '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                       '<ul><li><strong>ア. ❌ Sai.</strong> Phân tích dữ liệu lớn là lĩnh vực của <strong>BI (Business Intelligence)</strong> hoặc <strong>Khai phá dữ liệu (<code>データマイニング</code>)</strong>.</li>' +
                       '<li><strong>イ. ❌ Sai.</strong> Thu thập dữ liệu bán hàng tại điểm bán là chức năng của hệ thống <strong>POS (Point of Sales - <code>販売時点情報管理</code>)</strong>.</li>' +
                       '<li><strong>ウ. ❌ Sai.</strong> Robot phần mềm tự động hóa công việc văn phòng lặp lại (<code>定型業務</code>) là <strong>RPA (Robotic Process Automation)</strong>.</li>' +
                       '<li><strong>エ. ✅ Đúng.</strong> Chức năng chính của <strong>MA (Marketing Automation)</strong> là "Tự động hóa" (Automation) các hoạt động "Tiếp thị" (<strong><code>マーケティング</code></strong>) như gửi email hàng loạt, chấm điểm (scoring) và <strong>nuôi dưỡng (<code>育成</code>)</strong> <strong>khách hàng tiềm năng (<code>見込み顧客</code>)</strong> cho đến khi họ sẵn sàng mua hàng (trở thành "hot lead") và chuyển cho bộ phận Sales.</li></ul>' +
                       '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                       '<ul><li><strong>Keyword chính:</strong> <strong><code>マーケティング</code> (Marketing), <code>見込み顧客</code> (Khách hàng tiềm năng), <code>育成</code> (Nuôi dưỡng)</strong>.</li>' +
                       '<li><strong>Mẹo ghi nhớ (Phân biệt RPA, MA, SFA):</strong></li>' +
                       '<ul><li><strong>RPA</strong> = Tự động hóa <strong>Nghiệp vụ văn phòng (<code>事務</code>)</strong>.</li>' +
                       '<li><strong>MA</strong> = Tự động hóa <strong>Tiếp thị (<code>マーケティング</code>)</strong> (Tập trung vào <code>見込み顧客</code> - Khách hàng tiềm năng).</li>' +
                       '<li><strong>SFA</strong> = Tự động hóa <strong>Bán hàng (<code>営業</code>)</strong> (Tập trung vào <code>商談</code> - Thương vụ).</li></ul></ul>'
    }
]
    
  ,
    // ... (Thêm các câu hỏi khác cho 'strategy' nếu có)
    management: [
      {
        'question': 'システム監査の目的に関する記述として，適切なものはどれか。',
        'options': ['開発すべきシステムの具体的な用途を分析し，システム要件を明らかにすること', '情報システムが設置されている施設とその環境を総合的に企画，管理，活用すること', '情報システムに係るリスクに適切に対応しているかどうかを評価することによって，組織体の目標達成に寄与すること', '知識，スキル，ツール及び技法をプロジェクト活動に適用することによってプロジェクトの要求事項を満足させること'],
        'answer': 2,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Mô tả nào phù hợp với mục đích của <strong>Kiểm toán hệ thống (<code>システム監査</code>)</strong>?</li>' +
                         '<li><strong>ア.</strong> Phân tích mục đích sử dụng, làm rõ yêu cầu hệ thống.</li>' +
                         '<li><strong>イ.</strong> Quản lý và tận dụng tổng thể cơ sở vật chất và môi trường nơi cài đặt hệ thống.</li>' +
                         '<li><strong>ウ.</strong> <strong>Đánh giá (<code>評価</code>)</strong> xem các <strong>rủi ro (<code>リスク</code>)</strong> liên quan đến hệ thống thông tin có được xử lý phù hợp hay không, qua đó góp phần giúp tổ chức <strong>đạt được mục tiêu (<code>目標達成</code>)</strong>.</li>' +
                         '<li><strong>エ.</strong> Áp dụng kiến thức, kỹ năng, công cụ... để đáp ứng yêu cầu của dự án.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. ❌ Sai.</strong> Đây là mục đích của <strong>Phân tích yêu cầu (<code>要件定義</code>)</strong>.</li>' +
                         '<li><strong>イ. ❌ Sai.</strong> Đây là mục đích của <strong>Quản lý cơ sở vật chất (<code>ファシリティマネジメント</code>)</strong>.</li>' +
                         '<li><strong>ウ. ✅ Đúng.</strong> Đây là định nghĩa chuẩn của Kiểm toán (Audit). Kiểm toán viên là một bên độc lập, có vai trò <strong>đánh giá (<code>評価</code>)</strong> tính hiệu quả, an toàn, tin cậy... của hệ thống (tức là <strong>đánh giá rủi ro (<code>リスク</code>)</strong>) để hỗ trợ tổ chức <strong>đạt được mục tiêu (<code>目標達成</code>)</strong>.</li>' +
                         '<li><strong>エ. ❌ Sai.</strong> Đây là mục đích của <strong>Quản lý dự án (<code>プロジェクトマネジメント</code>)</strong>.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>システム監査</code> (Kiểm toán hệ thống)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> Kiểm toán (<code>監査</code>) = <strong>Đánh giá (<code>評価</code>) + Rủi ro (<code>リスク</code>) + Đạt mục tiêu (<code>目標達成</code>)</strong>.</li></ul>'
      },
      {
        'question': '事業活動に関わる法令の遵守などを目的の一つとして，統制環境，リスクの評価と対応，統制活動，情報と伝達，モニタリング，ITへの対応から構成される取組はどれか。',
        'options': ['CMMI', 'ITIL', '内部統制', 'リスク管理'],
        'answer': 2,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Sáng kiến nào, với mục đích tuân thủ pháp luật, bao gồm 6 thành phần: Môi trường kiểm soát (<code>統制環境</code>), Đánh giá và ứng phó rủi ro (<code>リスクの評価と対応</code>), Hoạt động kiểm soát (<code>統制活動</code>), Thông tin và truyền thông (<code>情報と伝達</code>), Giám sát (<code>モニタリング</code>), và Ứng phó với CNTT (<code>ITへの対応</code>)?</li>' +
                         '<li><strong>ア.</strong> CMMI</li>' +
                         '<li><strong>イ.</strong> ITIL</li>' +
                         '<li><strong>ウ.</strong> Kiểm soát nội bộ (<code>内部統制</code>)</li>' +
                         '<li><strong>エ.</strong> Quản lý rủi ro (<code>リスク管理</code>)</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. CMMI:</strong> ❌ Sai. Là mô hình đánh giá mức độ trưởng thành của quy trình (ví dụ: phát triển phần mềm).</li>' +
                         '<li><strong>イ. ITIL:</strong> ❌ Sai. Là bộ khung (framework) cho quản lý dịch vụ CNTT.</li>' +
                         '<li><strong>ウ. 内部統制 (Internal Control):</strong> ✅ <strong>Đúng.</strong> Danh sách 6 thành phần được liệt kê trong câu hỏi chính là 6 yếu tố cấu thành cơ bản của <strong>Kiểm soát nội bộ (<code>内部統制</code>)</strong> theo định nghĩa của J-SOX (Luật Sarbanes-Oxley của Nhật).</li>' +
                         '<li><strong>エ. リスク管理 (Risk Management):</strong> ❌ Sai. "Đánh giá và ứng phó rủi ro" chỉ là <strong>một phần</strong> trong 6 yếu tố của kiểm soát nội bộ.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>内部統制</code> (Kiểm soát nội bộ)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> Khi thấy một danh sách dài các thuật ngữ quản trị như <strong>"Môi trường kiểm soát (<code>統制環境</code>)", "Hoạt động kiểm soát (<code>統制活動</code>)"</strong>... → Đáp án gần như chắc chắn là <strong><code>内部統制</code> (Kiểm soát nội bộ)</strong>.</li></ul>'
      },
      {
        'question': 'ITガバナンスに関する次の記述中のaに入れる字句として，最も適切なものはどれか。<br><br>経営者は，<span class=\'bb\'>a</span>の事業の目的を支援する観点で，効果的，効率的かつ受容可能な<span class=\'bb\'>a</span>のITの利用について評価する。',
        'options': ['過去と現在', '現在', '現在と将来', '将来'],
        'answer': 2,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Điền vào chỗ trống (a): Ban lãnh đạo (<code>経営者</code>) đánh giá việc sử dụng CNTT trong giai đoạn <strong>(a)</strong> một cách hiệu quả... để hỗ trợ các mục tiêu kinh doanh của giai đoạn <strong>(a)</strong>.</li>' +
                         '<li><strong>ア.</strong> Quá khứ và hiện tại</li>' +
                         '<li><strong>イ.</strong> Hiện tại</li>' +
                         '<li><strong>ウ.</strong> Hiện tại và tương lai</li>' +
                         '<li><strong>エ.</strong> Tương lai</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア, イ, エ. ❌ Sai.</strong></li>' +
                         '<li><strong>ウ. ✅ Đúng.</strong> <strong>Quản trị CNTT (<code>ITガバナンス</code> - IT Governance)</strong> không chỉ là đảm bảo CNTT hoạt động tốt *ngay bây giờ* (<code>現在</code>), mà còn phải đảm bảo rằng các khoản đầu tư và chiến lược CNTT phù hợp, hỗ trợ cho mục tiêu kinh doanh *trong tương lai* (<code>将来</code>). Do đó, ban lãnh đạo phải đánh giá việc sử dụng CNTT cho cả <strong>hiện tại và tương lai (<code>現在と将来</code>)</strong>.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>ITガバナンス</code> (IT Governance)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> <strong>Governance (Quản trị)</strong> luôn có tính chiến lược, tầm nhìn xa. Nó không chỉ xử lý vấn đề hiện tại mà còn định hướng cho tương lai. → <strong>Hiện tại + Tương lai (<code>現在と将来</code>)</strong>.</li></ul>'
      },
      {
        'question': 'システム開発プロジェクトにおいて，新機能の追加要求が変更管理委員会で認可された後にプロジェクトスコープマネジメントで実施する活動として，適切なものはどれか。',
        'options': ['新機能を追加で開発するためにWBSを変更し，コストの詳細な見積りをするための情報として提供する。', '新機能を追加で開発するためのWBSのアクティビティの実行に必要なスキルを確認し，必要に応じてプロジェクトチームの能力向上を図る。', '変更されたWBSに基づいてスケジュールを作成し，完了時期の見通しを提示する。', '変更されたWBSに基づいて要員の充足度を確認し，必要な場合は作業の外注を検討する。'],
        'answer': 0,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Trong một dự án, sau khi yêu cầu thêm tính năng mới được phê duyệt (<code>認可</code>), hoạt động nào sau đây được thực hiện trong phạm vi <strong>Quản lý Phạm vi Dự án (<code>プロジェクトスコープマネジメント</code>)</strong>?</li>' +
                         '<li><strong>ア.</strong> <strong>Thay đổi WBS (<code>WBSを変更</code>)</strong> để thêm tính năng mới, và cung cấp (thông tin đó) cho việc ước tính chi phí chi tiết.</li>' +
                         '<li><strong>イ.</strong> Xác nhận kỹ năng cần thiết... và đào tạo đội ngũ.</li>' +
                         '<li><strong>ウ.</strong> Dựa trên WBS đã thay đổi để tạo lịch trình (<code>スケジュールを作成</code>).</li>' + // LỖI ĐÃ ĐƯỢC SỬA TẠI ĐÂY
                         '<li><strong>エ.</strong> Dựa trên WBS đã thay đổi để xác nhận nhân sự, xem xét outsource.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<p>Câu hỏi này kiểm tra kiến thức về 10 lĩnh vực quản lý của PMBOK.</p>' +
                         '<ul><li><strong>ア. ✅ Đúng.</strong> Hoạt động cốt lõi của <strong>Quản lý Phạm vi (<code>スコープマネジメント</code>)</strong> là định nghĩa và kiểm soát những gì \'có\' và \'không có\' trong dự án, được thể hiện qua <strong>WBS (Work Breakdown Structure)</strong>. Khi một thay đổi được phê duyệt, công việc đầu tiên trong Scope Management là cập nhật tài liệu phạm vi, cụ thể là <strong>thay đổi WBS (<code>WBSを変更</code>)</strong>. WBS cập nhật này sau đó sẽ là *đầu vào* cho các quy trình quản lý khác (như Chi phí, Thời gian).</li>' +
                         '<li><strong>イ, エ. ❌ Sai.</strong> Xác nhận kỹ năng, đào tạo, bố trí nhân sự thuộc về <strong>Quản lý Nguồn lực (<code>人的資源マネジメント</code>)</strong>.</li>' +
                         '<li><strong>ウ. ❌ Sai.</strong> Tạo lịch trình (schedule) thuộc về <strong>Quản lý Thời gian (<code>スケジュールマネジメント</code>)</strong>.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>プロジェクトスコープマネジメント</code> (Project Scope Management)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> <strong>Scope (Phạm vi) = WBS</strong>. Bất cứ khi nào phạm vi thay đổi, việc đầu tiên là phải cập nhật WBS.</li></ul>'
      },
      {
        'question': 'システム開発プロジェクトにおいて，テスト中に発見された不具合の再発防止のために不具合分析を行うことにした。テスト結果及び不具合の内容を表に記入し，不具合ごとに根本原因を突き止めた後に，根本原因ごとに集計を行い発生頻度の多い順に並べ，主要な根本原因の特定を行った。ここで利用した図表のうち，根本原因を集計し，発生頻度順に並べて棒グラフで示し，累積値を折れ線グラフで重ねて示したものはどれか。',
        'options': ['散布図', 'チェックシート', '特性要因図', 'パレート図'],
        'answer': 3,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Khi phân tích lỗi, biểu đồ nào được sử dụng để xác định nguyên nhân gốc rễ chính bằng cách tổng hợp, sắp xếp chúng theo <strong>thứ tự tần suất giảm dần (<code>発生頻度の多い順</code>)</strong> dưới dạng <strong>biểu đồ cột (<code>棒グラフ</code>)</strong> và thể hiện <strong>giá trị tích lũy (<code>累積値</code>)</strong> bằng <strong>biểu đồ đường (<code>折れ線グラフ</code>)</strong> chồng lên?</li>' +
                         '<li><strong>ア.</strong> Biểu đồ phân tán (<code>散布図</code>)</li>' +
                         '<li><strong>イ.</strong> Bảng kiểm (<code>チェックシート</code>)</li>' +
                         '<li><strong>ウ.</strong> Biểu đồ xương cá (<code>特性要因図</code>)</li>' +
                         '<li><strong>エ.</strong> Biểu đồ Pareto (<code>パレート図</code>)</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<p>Đây là 4 trong 7 công cụ quản lý chất lượng cơ bản.</p>' +
                         '<ul><li><strong>ア. 散布図 (Scatter Diagram):</strong> ❌ Sai. Dùng để xem xét mối tương quan (ví dụ: số giờ học càng nhiều, điểm càng cao).</li>' +
                         '<li><strong>イ. チェックシート (Check Sheet):</strong> ❌ Sai. Dùng để thu thập dữ liệu (ví dụ: đếm số lỗi).</li>' +
                         '<li><strong>ウ. 特性要因図 (Cause and Effect Diagram):</strong> ❌ Sai. (Còn gọi là biểu đồ xương cá <code>魚の骨</code>). Dùng để liệt kê *tất cả* các nguyên nhân có thể gây ra một vấn đề.</li>' +
                         '<li><strong>エ. パレート図 (Pareto Chart):</strong> ✅ <strong>Đúng.</strong> Đây là định nghĩa chính xác của Biểu đồ Pareto. Nó là sự kết hợp của <strong>biểu đồ cột (<code>棒グラフ</code>)</strong> (sắp xếp theo thứ tự giảm dần) và <strong>biểu đồ đường (<code>折れ線グラフ</code>)</strong> (thể hiện tỷ lệ % tích lũy). Nó giúp xác định "vital few" - một vài nguyên nhân quan trọng nhất gây ra phần lớn các vấn đề (theo quy tắc 80/20).</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>パレート図</code> (Biểu đồ Pareto)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> <strong>Cột (<code>棒グラフ</code>) + Đường (<code>折れ線グラフ</code>) + Giảm dần (<code>頻度順</code>)</strong> = <strong>Pareto</strong>.</li></ul>'
      },
      {
        'question': 'ソフトウェア製品の品質特性を，移植性，機能適合性，互換性，使用性，信頼性，性能効率性，セキュリティ，保守性に分類したとき，RPAソフトウェアの使用性に関する記述として，最も適切なものはどれか。',
        'options': ['RPAが稼働するPCのOSが変わっても動作する。', 'RPAで指定した時間及び条件に基づき，適切に自動処理が実行される。', 'RPAで操作対象となるアプリケーションソフトウェアがバージョンアップされても，簡単な設定変更で対応できる。', 'RPAを利用したことがない人でも，簡単な教育だけで利用可能になる。'],
        'answer': 3,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Khi phân loại chất lượng phần mềm (ISO 25010), mô tả nào sau đây liên quan đến đặc tính <strong>Tính dễ sử dụng (<code>使用性</code> - Usability)</strong> của phần mềm RPA?</li>' +
                         '<li><strong>ア.</strong> Vẫn hoạt động (<code>動作する</code>) ngay cả khi HĐH (OS) thay đổi.</li>' +
                         '<li><strong>イ.</strong> Thực thi tự động một cách chính xác (<code>適切に...実行</code>) dựa trên thời gian và điều kiện.</li>' +
                         '<li><strong>ウ.</strong> Vẫn có thể tương thích chỉ bằng một thay đổi cài đặt đơn giản (<code>簡単な設定変更</code>) ngay cả khi ứng dụng mục tiêu bị nâng cấp.</li>' +
                         '<li><strong>エ.</strong> Ngay cả người chưa từng sử dụng cũng có thể <strong>sử dụng được (<code>利用可能</code>)</strong> chỉ với một <strong>khóa đào tạo đơn giản (<code>簡単な教育</code>)</strong>.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. ❌ Sai.</strong> Hoạt động được khi thay đổi môi trường (như HĐH) → Đây là <strong>Tính di động (<code>移植性</code> - Portability)</strong>.</li>' +
                         '<li><strong>イ. ❌ Sai.</strong> Hoạt động đúng, chính xác (<code>適切</code>) theo chỉ định → Đây là <strong>Tính tin cậy (<code>信頼性</code> - Reliability)</strong>.</li>' +
                         '<li><strong>ウ. ❌ Sai.</strong> Dễ dàng thay đổi, điều chỉnh (<code>簡単な設定変更</code>) khi có sự thay đổi (ví dụ: ứng dụng mục tiêu nâng cấp) → Đây là <strong>Tính bảo trì (<code>保守性</code> - Maintainability)</strong>.</li>' +
                         '<li><strong>エ. ✅ Đúng.</strong> "Dễ học, dễ dùng" (<code>簡単な教育だけで利用可能</code>) là bản chất của <strong>Tính dễ sử dụng (<code>使用性</code> - Usability)</strong>, tức là phần mềm thân thiện và dễ học với người dùng.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>使用性</code> (Usability / Tính dễ sử dụng)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> <strong>U</strong>sability (Tính dễ sử dụng) là về <strong>U</strong>ser (<code>利用者</code>). Hãy tìm đáp án nói về việc <strong>người dùng (đặc biệt là người dùng mới)</strong> cảm thấy <strong>dễ dàng (<code>簡単</code>)</strong> như thế nào khi sử dụng sản phẩm.</li></ul>'
      },
      {
        'question': 'ソフトウェアの開発におけるDevOpsに関する記述として，最も適切なものはどれか。',
        'options': ['開発側が重要な機能のプロトタイプを作成し，顧客とともにその性能を実測して妥当性を評価する。', '開発側では，開発の各工程でその工程の完了を判断した上で次工程に進み，総合テストで利用者が参加して操作性の確認を実施した後に運用側に引き渡す。', '開発側と運用側が密接に連携し，自動化ツールなどを活用して機能の導入や更新などを迅速に進める。', 'システム開発において，機能の拡張を図るために，固定された短期間のサイクルを繰り返しながらプログラムを順次追加する。'],
        'answer': 2,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Mô tả nào phù hợp nhất về <strong>DevOps</strong>?</li>' +
                         '<li><strong>ア.</strong> Bên phát triển tạo mẫu thử (<code>プロトタイプ</code>) và cùng khách hàng đánh giá.</li>' +
                         '<li><strong>イ.</strong> Bên phát triển làm tuần tự (<code>順番に</code>), xong xuôi hết rồi bàn giao cho bên vận hành.</li>' +
                         '<li><strong>ウ.</strong> <strong>Bên phát triển (<code>開発側</code>) và bên vận hành (<code>運用側</code>)</strong> <strong>hợp tác chặt chẽ (<code>密接に連携</code>)</strong>, sử dụng các <strong>công cụ tự động hóa (<code>自動化ツール</code>)</strong> để đẩy nhanh (<code>迅速</code>) việc triển khai, cập nhật.</li>' +
                         '<li><strong>エ.</strong> Lặp lại các <strong>chu kỳ ngắn (<code>短期間のサイクル</code>)</strong> để thêm dần chương trình.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. ❌ Sai.</strong> Tạo mẫu thử (<code>プロトタイプ</code>) để khách hàng xem → Đây là mô hình <strong>Prototyping (<code>プロトタイピング</code>)</strong>.</li>' +
                         '<li><strong>イ. ❌ Sai.</strong> Phát triển theo từng giai đoạn tuần tự từ trên xuống (<code>順番に</code>), làm xong hết mới bàn giao → Đây là mô hình <strong>Thác nước (<code>ウォーターフォール</code>)</strong>.</li>' +
                         '<li><strong>ウ. ✅ Đúng.</strong> <strong>DevOps</strong> là sự kết hợp giữa Development (<code>開発</code> - phát triển) và Operations (<code>運用</code> - vận hành). Đặc trưng của nó là phá bỏ bức tường giữa hai đội, <strong>hợp tác chặt chẽ (<code>密接に連携</code>)</strong>, sử dụng các <strong>công cụ tự động hóa (<code>自動化ツール</code>)</strong> (như CI/CD) để đẩy nhanh quá trình triển khai và cập nhật.</li>' +
                         '<li><strong>エ. ❌ Sai.</strong> Lặp lại các chu kỳ phát triển ngắn (<code>短期間のサイクル</code>) → Đây là mô hình <strong>Agile (<code>アジャイル</code>)</strong>.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>DevOps</code></strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> <strong>Dev (<code>開発</code>) + Ops (<code>運用</code>)</strong>. Hãy tìm đáp án nào có sự kết hợp của hai đội này (<code>開発側と運用側</code>).</li></ul>'
      },
      {
        'question': 'ITサービスマネジメントの管理プロセスに関する記述a～cと用語の適切な組合せはどれか。<br><br><ol type=\'a\'><li>ITサービスの変更を実装するためのプロセス</li><li>インシデントの根本原因を突き止めて解決策を提供するためのプロセス</li><li>組織が所有しているIT資産を把握するためのプロセス</li></ol><br><img src=\'img/46.png\' width=\'540\' height=\'146\' alt=\'46.png/image-size:540×146\'>',
        'options': ['ア', 'イ', 'ウ', 'エ'],
        'answer': 3,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Hãy ghép nối các mô tả quy trình (a, b, c) với các thuật ngữ (<code>構成管理</code>, <code>問題管理</code>, <code>リリース&展開管理</code>).</li>' +
                         '<li><strong>a.</strong> Quy trình để <strong>triển khai (<code>実装</code>) một thay đổi (<code>変更</code>)</strong>.</li>' +
                         '<li><strong>b.</strong> Quy trình tìm ra <strong>nguyên nhân gốc rễ (<code>根本原因</code>)</strong> của sự cố (incident).</li>' +
                         '<li><strong>c.</strong> Quy trình <strong>nắm bắt (<code>把握</code>) các tài sản CNTT (<code>IT資産</code>)</strong> mà tổ chức sở hữu.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>a. Triển khai thay đổi (<code>変更を実装</code>):</strong> Đây là công đoạn "cài đặt" phiên bản mới (Release) vào môi trường production. → Đây là <strong>Quản lý Phát hành & Triển khai (<code>リリース&展開管理</code>)</strong>.</li>' +
                         '<li><strong>b. Tìm nguyên nhân gốc rễ (<code>根本原因</code>):</strong> Đây là định nghĩa của <strong>Quản lý Vấn đề (<code>問題管理</code> - Problem Management)</strong>. Mục đích của nó là tìm ra "tại sao" (Why?) sự cố lại xảy ra và khắc phục triệt để.</li>' +
                         '<li><strong>c. Nắm bắt tài sản CNTT (<code>IT資産を把握</code>):</strong> Đây là định nghĩa của <strong>Quản lý Cấu hình (<code>構成管理</code> - Configuration Management)</strong>. Nó quản lý một CSDL (gọi là CMDB) chứa thông tin về tất cả các tài sản (PC, server, phần mềm...).</li></ul>' +
                         '<p>=> Ghép nối lại, ta có: a = <code>リリース&展開管理</code>, b = <code>問題管理</code>, c = <code>構成管理</code>. Tổ hợp này tương ứng với đáp án <strong>エ</strong>.</p>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Mẹo ghi nhớ (Phân biệt <code>インシデント</code> và <code>問題</code>):</strong></li>' +
                         '<ul><li><strong><code>インシデント</code> (Incident - Sự cố):</strong> Tập trung vào <strong>khắc phục nhanh (<code>復旧</code>)</strong>. (Ví dụ: "Server sập rồi, reboot lại ngay!").</li>' +
                         '<li><strong><code>問題</code> (Problem - Vấn đề):</strong> Tập trung vào <strong>nguyên nhân gốc (<code>根本原因</code>)</strong>. (Ví dụ: "Tại sao server sập? Hóa ra do RAM lỗi. Phải thay RAM.").</li></ul></ul>'
      },
      {
        'question': '本番稼働後の業務遂行のために，業務別にサービス利用方法の手順を示した文書として，最も適切なものはどれか。',
        'options': ['FAQ', 'サービスレベル合意書', 'システム要件定義書', '利用者マニュアル'],
        'answer': 3,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Đâu là tài liệu chỉ ra <strong>các bước hướng dẫn (<code>手順を示した文書</code>)</strong> cách sử dụng dịch vụ theo từng nghiệp vụ, dành cho <strong>người dùng (<code>利用者</code>)</strong> sau khi hệ thống đi vào hoạt động chính thức (<code>本番稼働後</code>)?</li>' +
                         '<li><strong>ア.</strong> FAQ (Các câu hỏi thường gặp)</li>' +
                         '<li><strong>イ.</strong> Thỏa thuận mức độ dịch vụ (<code>サービスレベル合意書</code> - SLA)</li>' +
                         '<li><strong>ウ.</strong> Tài liệu định nghĩa yêu cầu hệ thống (<code>システム要件定義書</code>)</li>' +
                         '<li><strong>エ.</strong> Hướng dẫn sử dụng (<code>利用者マニュアル</code> - User Manual)</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. FAQ:</strong> ❌ Sai. Là danh sách các câu hỏi thường gặp, chỉ xử lý các vấn đề nhỏ lẻ, không phải là một tài liệu hướng dẫn có hệ thống.</li>' +
                         '<li><strong>イ. SLA:</strong> ❌ Sai. Là văn bản thỏa thuận (<code>合意書</code>) về chất lượng dịch vụ (ví dụ: uptime 99.9%), không phải tài liệu hướng dẫn cách dùng.</li>' +
                         '<li><strong>ウ. Tài liệu định nghĩa yêu cầu hệ thống:</strong> ❌ Sai. Đây là tài liệu đầu vào (<code>上流工程</code>) dùng cho đội phát triển, không phải tài liệu đầu ra cho người dùng cuối.</li>' +
                         '<li><strong>エ. 利用者マニュアル (User Manual):</strong> ✅ <strong>Đúng.</strong> <strong>Hướng dẫn sử dụng (<code>利用者マニュアル</code>)</strong> là tài liệu được viết ra chính xác với mục đích hướng dẫn <strong>người dùng cuối (<code>利用者</code>)</strong> cách sử dụng (<code>手順</code>) hệ thống.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>利用者</code> (Người dùng), <code>手順を示した文書</code> (Tài liệu chỉ dẫn các bước)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> Tài liệu cho <strong>người dùng (<code>利用者</code>)</strong> → Hướng dẫn sử dụng (<code>利用者<strong>マニュアル</strong></code>).</li></ul>'
      },
      {
        'question': '提供しているITシステムが事業のニーズを満たせるように，人材，プロセス，情報技術を適切に組み合わせ，継続的に改善して管理する活動として，最も適切なものはどれか。',
        'options': ['ITサービスマネジメント', 'システム監査', 'ヒューマンリソースマネジメント', 'ファシリティマネジメント'],
        'answer': 0,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Hoạt động kết hợp một cách phù hợp giữa <strong>Con người (<code>人材</code>), Quy trình (<code>プロセス</code>), và Công nghệ (<code>情報技術</code>)</strong> để quản lý và <strong>cải tiến liên tục (<code>継続的に改善</code>)</strong>, nhằm đảm bảo các hệ thống CNTT đáp ứng được nhu cầu kinh doanh, được gọi là gì?</li>' +
                         '<li><strong>ア.</strong> Quản lý Dịch vụ CNTT (<code>ITサービスマネジメント</code>)</li>' +
                         '<li><strong>イ.</strong> Kiểm toán hệ thống (<code>システム監査</code>)</li>' +
                         '<li><strong>ウ.</strong> Quản lý nguồn nhân lực (<code>ヒューマンリソースマネジメント</code>)</li>' +
                         '<li><strong>エ.</strong> Quản lý cơ sở vật chất (<code>ファシリティマネジメント</code>)</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. ITサービスマネジメント (ITSM):</strong> ✅ <strong>Đúng.</strong> Đây là định nghĩa kinh điển của <strong>Quản lý Dịch vụ CNTT (ITSM)</strong>. ITSM (mà ITIL là framework phổ biến nhất) tập trung vào việc cung cấp giá trị cho khách hàng thông qua các dịch vụ CNTT, bằng cách quản lý cân bằng giữa 3 trụ cột: <strong>Con người (<code>人材</code>), Quy trình (<code>プロセス</code>), và Công nghệ (<code>技術</code>)</strong>, và luôn <strong>cải tiến liên tục (<code>継続的に改善</code>)</strong>.</li>' +
                         '<li><strong>イ. システム監査 (System Audit):</strong> ❌ Sai. Là hoạt động đánh giá, kiểm tra.</li>' +
                         '<li><strong>ウ. ヒューマンリソースマネジメント (Human Resource Management):</strong> ❌ Sai. Chỉ tập trung vào yếu tố \'Con người\' (<code>人材</code>).</li>' +
                         '<li><strong>エ. ファシリティマネジメント (Facility Management):</strong> ❌ Sai. Chỉ tập trung vào hạ tầng vật lý (tòa nhà, phòng ốc).</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>ITサービスマネジメント</code> (ITSM)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ (Ba trụ cột của ITSM):</strong> <strong>People + Process + Technology</strong> (<code>人材</code> + <code>プロセス</code> + <code>技術</code>) = <strong>ITSM</strong>.</li></ul>'
      },
      {
        'question': '情報システムに関する施設や設備を維持保全するために行うリスク対策のうち，ファシリティマネジメントの観点から行う対策として，適切なものだけを全て挙げたものはどれか。<br><br><ol type=\'a\'><li>コンピュータ室への入室を，認可した者だけに限定する。</li><li>コンピュータの設置場所を示す標識を掲示しない。</li><li>利用者のPCにマルウェア対策ソフトを導入する。</li></ol>',
        'options': ['a', 'a，b', 'a，c', 'b，c'],
        'answer': 1,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Biện pháp nào là biện pháp rủi ro dưới góc độ <strong>Quản lý cơ sở vật chất (<code>ファシリティマネジメント</code>)</strong>?</li>' +
                         '<li><strong>a.</strong> Hạn chế <strong>người ra vào (<code>入室</code>)</strong> phòng máy chủ.</li>' +
                         '<li><strong>b.</strong> Không dán <strong>biển chỉ dẫn (<code>標識</code>)</strong> vị trí đặt máy tính.</li>' +
                         '<li><strong>c.</strong> Cài đặt <strong>phần mềm (<code>ソフト</code>)</strong> chống mã độc trên PC người dùng.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<p><strong>Quản lý cơ sở vật chất (Facility Management)</strong> liên quan đến việc quản lý các yếu tố <strong>vật lý (Physical)</strong> (tòa nhà, phòng ốc, thiết bị, an ninh vật lý).</p>' +
                         '<ul><li><strong>a. ✅ Vật lý.</strong> Kiểm soát ra vào (<code>入室</code>) phòng máy chủ (ví dụ: dùng khóa, thẻ từ) là một biện pháp an ninh <strong>vật lý</strong>.</li>' +
                         '<li><strong>b. ✅ Vật lý.</strong> Che giấu vị trí của thiết bị quan trọng (không dán <code>標識</code> - biển báo) cũng là một biện pháp an ninh <strong>vật lý</strong>, khiến kẻ trộm khó tìm thấy mục tiêu.</li>' +
                         '<li><strong>c. ❌ Kỹ thuật.</strong> Cài đặt phần mềm (<code>ソフト</code>) là một biện pháp <strong>kỹ thuật (<code>技術的対策</code>)</strong>, không phải vật lý.</li></ul>' +
                         '<p>=> Vậy, các biện pháp vật lý là a và b.</p>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>ファシリティマネジメント</code> (Facility Management)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> <strong>F</strong>acility (Cơ sở vật chất) = <strong>P</strong>hysical (Vật lý). Hãy tìm những hành động liên quan đến việc bảo vệ \'vật chất\' mà bạn có thể chạm vào được (cửa, khóa, tường, biển báo...).</li></ul>'
      },
      {
        'question': 'システム監査人の役割として，適切なものだけを全て挙げたものはどれか。<br><br><ol type=\'a\'><li>監査手続の種類，実施時期，適用範囲などについて，監査計画を立案する。</li><li>監査の目的に応じた監査報告書を作成し，社内に公開する。</li><li>監査報告書にある改善提案に基づく改善の実施を監査対象部門に指示する。</li><li>監査報告書にある改善提案に基づく改善の実施状況をモニタリングする。</li></ol>',
        'options': ['a，b', 'a，d', 'b，c', 'c，d'],
        'answer': 1,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Đâu là tất cả các vai trò phù hợp của một <strong>Kiểm toán viên hệ thống (<code>システム監査人</code>)</strong>?</li>' +
                         '<li><strong>a.</strong> <strong>Lập kế hoạch (<code>計画</code>)</strong> kiểm toán (thời gian, phạm vi...).</li>' +
                         '<li><strong>b.</strong> Tạo <strong>báo cáo (<code>報告書</code>)</strong> kiểm toán và <strong>công khai (<code>公開</code>)</strong> trong nội bộ.</li>' +
                         '<li><strong>c.</strong> <strong>Chỉ thị (<code>指示する</code>)</strong> cho bộ phận bị kiểm toán thực hiện các đề xuất cải tiến.</li>' +
                         '<li><strong>d.</strong> <strong>Giám sát (<code>モニタリング</code>)</strong> tình hình thực hiện các đề xuất cải tiến.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>a. ✅ Đúng.</strong> Lập kế hoạch (<code>計画</code>) là bước đầu tiên và là vai trò cốt lõi của kiểm toán viên.</li>' +
                         '<li><strong>b. ❌ Sai.</strong> Kiểm toán viên chỉ <strong>tạo và nộp báo cáo (<code>報告書を作成</code>)</strong> cho người yêu cầu kiểm toán (thường là ban lãnh đạo). Việc *công khai* (<code>公開</code>) báo cáo đó hay không là quyết định của ban lãnh đạo, không phải của kiểm toán viên.</li>' +
                         '<li><strong>c. ❌ Sai.</strong> Đây là vi phạm nghiêm trọng <strong>tính độc lập (<code>独立性</code>)</strong>. Kiểm toán viên chỉ <strong>đề xuất (<code>助言</code>)</strong>, không có quyền <strong>chỉ thị (<code>指示する</code>)</strong>. Việc chỉ thị thực hiện là trách nhiệm của ban quản lý của bộ phận đó.</li>' +
                         '<li><strong>d. ✅ Đúng.</strong> Theo dõi (monitoring / follow-up) để đảm bảo các đề xuất được thực hiện là một phần quan trọng của quy trình kiểm toán, giúp đảm bảo tính hiệu quả của cuộc kiểm toán.</li></ul>' +
                         '<p>=> Vậy, các vai trò đúng là a và d.</p>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>システム監査人</code> (Kiểm toán viên hệ thống)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> Kiểm toán viên giống như một nhà tư vấn độc lập: <strong>Lập kế hoạch (a) -> Kiểm tra -> Báo cáo -> Theo dõi (d)</strong>. Họ tuyệt đối <strong>KHÔNG được "cầm tay chỉ việc" hay ra lệnh (<code>指示</code>) (c)</strong>.</li></ul>'
      },
      {
        'question': 'あるプロジェクトの作業間の関係と所要時間がアローダイアグラムで示されている。このアローダイアグラムのBからEの四つの結合点のうち，工程全体の完了時間に影響を与えることなく，その結合点から始まる全ての作業の開始を最も遅らせることができるものはどれか。ここで，各結合点から始まる作業はその結合点に至る作業が全て完了するまで開始できず，作業から次の作業への段取り時間は考えないものとする。<div class=\'img_margin\'><img src=\'img/41.png\' width=\'488\' height=\'146\' alt=\'41.png/image-size:488×146\'></div>',
        'options': ['B', 'C', 'D', 'E'],
        'answer': 1,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Cho sơ đồ mũi tên (Arrow Diagram). Trong 4 điểm B, C, D, E, điểm nào có thể bắt đầu các công việc của nó <strong>trễ nhất (<code>最も遅らせる</code>)</strong> mà không ảnh hưởng đến tổng thời gian hoàn thành dự án?</li>' +
                         '<li><strong>ア.</strong> B</li> <li><strong>イ.</strong> C</li> <li><strong>ウ.</strong> D</li> <li><strong>エ.</strong> E</li></ul>' +
                         '<hr><h3><strong>Phân tích (Tìm Đường Găng & Độ Trễ)</strong></h3>' +
                         '<p>Bài toán yêu cầu tìm điểm có <strong>độ trễ (Slack/Float)</strong> lớn nhất.</p>' +
                         '<ol><li><strong>Tìm tất cả các đường đi từ A đến F và tính tổng thời gian:</strong></li>' +
                         '<ul><li>(1) A → B → D → F = 15 + 10 + 20 = 45</li>' +
                         '<li>(2) A → B → D → E → F = 15 + 10 + 10 + 15 = 50</li>' +
                         '<li>(3) <strong>A → B → E → F = 15 + 25 + 15 = 55 (Đường dài nhất - Đường găng)</strong></li>' +
                         '<li>(4) A → C → E → F = 10 + 15 + 15 = 40</li></ul>' +
                         '<li><strong>Xác định Đường găng (Critical Path):</strong> Đường dài nhất là (3) A→B→E→F với <strong>55 giờ</strong>. Đây là thời gian hoàn thành dự án.</li>' +
                         '<li><strong>Tính độ trễ cho các điểm (Slack):</strong></li>' +
                         '<ul><li><strong>Điểm B và E:</strong> Nằm trên đường găng (Critical Path) nên <strong>Slack = 0</strong>. Không thể trì hoãn.</li>' +
                         '<li><strong>Điểm C:</strong> Thời gian sớm nhất để đến E qua C là: A→C→E = 10 + 15 = 25 giờ. Thời gian sớm nhất để đến E qua đường găng là: A→B→E = 15 + 25 = 40 giờ. Vậy, điểm C có thể bị trì hoãn (Slack) = 40 - 25 = <strong>15 giờ</strong>.</li>' +
                         '<li><strong>Điểm D:</strong> Thời gian sớm nhất để đến D là: A→B→D = 15 + 10 = 25 giờ. Thời gian sớm nhất để đến E (điểm tiếp theo của D) là 40 giờ. Đường D→E mất 10 giờ. Vậy Slack của D = 40 - (25 + 10) = <strong>5 giờ</strong>.</li></ul>' +
                         '<li><strong>So sánh:</strong> Độ trễ tại C (15 giờ) > Độ trễ tại D (5 giờ).</li></ol>' +
                         '<p>Do đó, điểm <strong>C</strong> là nơi có thể trì hoãn lâu nhất (15 giờ).</p>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>アローダイアグラム</code> (Arrow Diagram), <code>最も遅らせる</code> (Có thể trì hoãn lâu nhất)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> 1. Tìm đường dài nhất (<code>クリティカルパス</code> - Critical Path). 2. Các điểm không nằm trên đường đó sẽ có "thời gian rảnh" (Slack). 3. Tính "thời gian rảnh" đó và chọn điểm có giá trị lớn nhất.</li></ul>'
      },
      {
        'question': 'アジャイル開発に関する記述として，最も適切なものはどれか。',
        'options': ['開発する機能を小さい単位に分割して，優先度の高いものから短期間で開発とリリースを繰り返す。', '共通フレームを適用して要件定義，設計などの工程名及び作成する文書を定義する。', 'システム開発を上流工程から下流工程まで順番に進めて，全ての開発工程が終了してからリリースする。', 'プロトタイプを作成して利用者に確認を求め，利用者の評価とフィードバックを行いながら開発を進めていく。'],
        'answer': 0,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Mô tả nào là phù hợp nhất về <strong>Phát triển Agile (<code>アジャイル開発</code>)</strong>?</li>' +
                         '<li><strong>ア.</strong> <strong>Chia nhỏ (<code>分割</code>)</strong> chức năng, <strong>ưu tiên (<code>優先度</code>)</strong> những gì quan trọng, <strong>lặp đi lặp lại (<code>繰り返す</code>)</strong> việc phát triển và phát hành trong <strong>thời gian ngắn (<code>短期間</code>)</strong>.</li>' +
                         '<li><strong>イ.</strong> Áp dụng khung chung (common frame), định nghĩa các công đoạn và tài liệu.</li>' +
                         '<li><strong>ウ.</strong> Tiến hành <strong>tuần tự (<code>順番に</code>)</strong> từ trên xuống dưới, hoàn thành tất cả rồi mới phát hành.</li>' +
                         '<li><strong>エ.</strong> Tạo <strong>mẫu thử (<code>プロトタイプ</code>)</strong> để người dùng xác nhận và lấy phản hồi.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. ✅ Đúng.</strong> Đây là định nghĩa hoàn hảo của Agile (Linh hoạt): <strong>Chia nhỏ (<code>分割</code>)</strong> (ví dụ: User Stories), ưu tiên (<code>優先度の高いものから</code>), và <strong>lặp lại (<code>繰り返す</code>)</strong> các chu kỳ <strong>ngắn (<code>短期間</code>)</strong> (ví dụ: Sprints).</li>' +
                         '<li><strong>イ. ❌ Sai.</strong> Việc áp dụng khung chung và định nghĩa tài liệu một cách cứng nhắc là đặc điểm của các mô hình nặng về quy trình, trái ngược với tinh thần Agile (linh hoạt).</li>' +
                         '<li><strong>ウ. ❌ Sai.</strong> Phát triển tuần tự (<code>順番に</code>) từ đầu đến cuối là mô hình <strong>Thác nước (<code>ウォーターフォール</code>)</strong>.</li>' +
                         '<li><strong>エ. ❌ Sai.</strong> Tạo mẫu thử (<code>プロトタイプ</code>) để lấy phản hồi là mô hình <strong>Prototyping (<code>プロトタイピング</code>)</strong>. (Mặc dù Agile cũng có thể dùng prototype, nhưng mô tả này là định nghĩa của Prototyping).</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>アジャイル</code> (Agile)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> Agile = <strong>Lặp lại (<code>繰り返す</code>) + Chu kỳ ngắn (<code>短期間</code>) + Chia nhỏ (<code>分割</code>) + Ưu tiên (<code>優先度</code>)</strong>.</li></ul>'
      },
      {
        'question': 'サービスデスクを評価するためには適切なKPIを定めて評価する必要がある。顧客満足度を高めるために値が小さい方が良いKPIとして，適切なものだけを全て挙げたものはどれか。<br><br><ol type=\'a\'><li>SLAで合意された目標時間内に対応が完了したインシデント件数の割合</li><li>1回の問合せで解決ができたインシデント件数の割合</li><li>二次担当へエスカレーションされたインシデント件数の割合</li><li>利用者がサービスデスクの担当者につながるまでに費やした時間</li></ol>',
        'options': ['a，b', 'a，d', 'b，c', 'c，d'],
        'answer': 3,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Để nâng cao sự hài lòng của khách hàng (CS), chỉ số KPI nào của Service Desk nên <strong>càng nhỏ càng tốt (<code>値が小さい方が良い</code>)</strong>?</li>' +
                         '<li><strong>a.</strong> Tỷ lệ (<code>割合</code>) các sự cố được giải quyết <strong>trong thời gian SLA</strong>.</li>' +
                         '<li><strong>b.</strong> Tỷ lệ (<code>割合</code>) các sự cố được <strong>giải quyết ngay từ lần gọi đầu tiên</strong>.</li>' +
                         '<li><strong>c.</strong> Tỷ lệ (<code>割合</code>) các sự cố phải <strong>chuyển lên cấp 2 (<code>エスカレーション</code>)</strong>.</li>' +
                         '<li><strong>d.</strong> <strong>Thời gian (<code>時間</code>)</strong> người dùng phải chờ đợi để được kết nối với nhân viên.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>a. ❌ Càng LỚN càng tốt (Large is better).</strong> Tỷ lệ giải quyết sự cố trong thời gian cam kết (SLA) càng cao (ví dụ: 99%) thì càng tốt.</li>' +
                         '<li><strong>b. ❌ Càng LỚN càng tốt (Large is better).</strong> Đây là chỉ số <strong>FCR (First Call Resolution)</strong>. Tỷ lệ này càng cao (giải quyết ngay, không cần gọi lại) thì khách hàng càng hài lòng.</li>' +
                         '<li><strong>c. ✅ Càng NHỎ càng tốt (Small is better).</strong> Tỷ lệ phải chuyển (<code>エスカレーション</code>) lên cấp cao hơn cho thấy nhân viên cấp 1 (Service Desk) không xử lý được. Tỷ lệ này càng thấp chứng tỏ năng lực của đội ngũ càng tốt, khách hàng không phải chờ đợi lòng vòng.</li>' +
                         '<li><strong>d. ✅ Càng NHỎ càng tốt (Small is better).</strong> <strong>Thời gian chờ đợi (<code>費やした時間</code>)</strong> (Abandon Time, Wait Time) của khách hàng để được kết nối với nhân viên càng ngắn thì trải nghiệm càng tốt.</li></ul>' +
                         '<p>=> Vậy, các chỉ số cần càng nhỏ càng tốt là c và d.</p>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>値が小さい方が良い</code> (Càng nhỏ càng tốt)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> Hãy đặt mình vào vị trí khách hàng. Bạn sẽ ghét phải <strong>chờ đợi (d)</strong> và bị <strong>chuyển lòng vòng (c)</strong>.</li></ul>'
      },
      {
        'question': 'あるシステムの運用において，利用者との間でSLAを交わし，利用可能日を月曜日から金曜日，1日の利用可能時間を7時から22時まで，稼働率を98%以上で合意した。1週間の運用において，障害などでシステムの停止を許容できる時間は最大何時間か。',
        'options': ['0.3', '1.5', '1.8', '2.1'],
        'answer': 1,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Một hệ thống có SLA như sau:<ul><li>Ngày hoạt động: Thứ 2 - Thứ 6 (<code>月曜日から金曜日</code>)</li><li>Giờ hoạt động: 7:00 - 22:00</li><li>Tỷ lệ hoạt động (<code>稼働率</code>) cam kết: 98% trở lên.</li></ul>Hỏi: Thời gian <strong>ngừng hoạt động (<code>停止</code>)</strong> cho phép tối đa trong 1 tuần là bao nhiêu giờ?</li>' +
                         '<li><strong>ア.</strong> 0.3</li> <li><strong>イ.</strong> 1.5</li> <li><strong>ウ.</strong> 1.8</li> <li><strong>エ.</strong> 2.1</li></ul>' +
                         '<hr><h3><strong>Phân tích & Tính toán</strong></h3>' +
                         '<ol><li><strong>Tính tổng thời gian dịch vụ cam kết trong một tuần:</strong></li>' +
                         '<ul><li>Thời gian hoạt động mỗi ngày = 22:00 - 7:00 = <strong>15 giờ</strong>.</li>' +
                         '<li>Số ngày hoạt động trong tuần = <strong>5 ngày</strong> (Thứ 2 đến Thứ 6).</li>' +
                         '<li><strong>Tổng thời gian cam kết (hàng tuần) = 15 giờ/ngày × 5 ngày = 75 giờ.</strong></li></ul>' +
                         '<li><strong>Tính thời gian ngừng hoạt động cho phép:</strong></li>' +
                         '<ul><li>Tỷ lệ hoạt động (Uptime) cam kết = 98%.</li>' +
                         '<li>Tỷ lệ ngừng hoạt động (Downtime) cho phép = 100% - 98% = <strong>2%</strong>.</li>' +
                         '<li>Thời gian ngừng hoạt động tối đa = Tổng thời gian cam kết × Tỷ lệ downtime cho phép</li>' +
                         '<li><code>= 75 giờ × 2% (hoặc 0.02) = <strong>1.5 giờ</strong>.</code></li></ul></ol>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>SLA</code>, <code>稼働率 98%</code> (Tỷ lệ hoạt động 98%), <code>停止を許容できる時間</code> (Thời gian downtime cho phép)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> Downtime % = 100% - Uptime %. (Uptime 98% → Downtime 2%). Lấy 2% của *tổng thời gian cam kết* (chú ý trừ ngày nghỉ và giờ nghỉ).</li></ul>'
      },
      {
        'question': 'システム開発プロジェクトを終結する時に，プロジェクト統合マネジメントで実施する活動として，最も適切なものはどれか。',
        'options': ['工程の進捗の予定と実績の差異を分析する。', '作成した全ての成果物の一覧を確認する。', '総費用の予算と実績の差異を分析する。', '知識や教訓を組織の資産として登録する。'],
        'answer': 3,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Khi <strong>kết thúc (<code>終結</code>)</strong> dự án, hoạt động nào thuộc về <strong>Quản lý Tích hợp Dự án (<code>プロジェクト統合マネジメント</code>)</strong>?</li>' +
                         '<li><strong>ア.</strong> Phân tích chênh lệch tiến độ (<code>進捗</code>).</li>' +
                         '<li><strong>イ.</strong> Xác nhận danh sách sản phẩm bàn giao (<code>成果物</code>).</li>' +
                         '<li><strong>ウ.</strong> Phân tích chênh lệch chi phí (<code>費用</code>).</li>' +
                         '<li><strong>エ.</strong> Đăng ký (lưu trữ) <strong>kiến thức và bài học kinh nghiệm (<code>知識や教訓</code>)</strong> thành <strong>tài sản của tổ chức (<code>組織の資産</code>)</strong>.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<p>Các hoạt động <strong>a, b, c</strong> là các hoạt động *giám sát và kiểm soát* (Monitoring & Controlling) diễn ra *trong suốt* dự án, thuộc các lĩnh vực quản lý cụ thể:</p>' +
                         '<ul><li><strong>ア. ❌ Sai.</strong> Phân tích tiến độ → Thuộc <strong>Quản lý Thời gian (<code>スケジュール</code>)</strong>.</li>' +
                         '<li><strong>イ. ❌ Sai.</strong> Xác nhận sản phẩm bàn giao → Thuộc <strong>Quản lý Phạm vi (<code>スコープ</code>)</strong>.</li>' +
                         '<li><strong>ウ. ❌ Sai.</strong> Phân tích chi phí → Thuộc <strong>Quản lý Chi phí (<code>コスト</code>)</strong>.</li>' +
                         '<li><strong>エ. ✅ Đúng.</strong> <strong>Quản lý Tích hợp (<code>統合</code>)</strong> có vai trò bao quát toàn bộ dự án. Một trong những hoạt động quan trọng nhất của quy trình "Close Project or Phase" (<code>終結</code>) chính là <strong>tổng kết lại các bài học kinh nghiệm (<code>知識や教訓</code>)</strong> và lưu trữ chúng lại thành <strong>tài sản của tổ chức (<code>組織の資産</code>)</strong> để các dự án trong tương lai có thể học hỏi.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>プロジェクト統合マネジメント</code> (Quản lý Tích hợp), <code>終結</code> (Kết thúc)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> \'Tích hợp\' (<code>統合</code>) = Nhìn vào bức tranh lớn, bao quát. Hoạt động "Kết thúc" mang tính "Tích hợp" nhất chính là thu thập <strong>Bài học kinh nghiệm (<code>教訓</code>)</strong> cho <strong>Tổ chức (<code>組織</code>)</strong>.</li></ul>'
      },
      {
        'question': 'プロジェクトに該当する事例として，適切なものだけを全て挙げたものはどれか。<br><br><ol type=\'a\'><li>会社合併に伴う新組織への移行</li><li>社内システムの問合せや不具合を受け付けるサービスデスクの運用</li><li>新規の経理システム導入に向けたプログラム開発</li><li>毎年度末に実施する会計処理</li></ol>',
        'options': ['a，c', 'b，c', 'b，d', 'c'],
        'answer': 0,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Đâu là tất cả các ví dụ về một <strong>Dự án (<code>プロジェクト</code>)</strong>?</li>' +
                         '<li><strong>a.</strong> Việc <strong>chuyển đổi (<code>移行</code>)</strong> sang tổ chức mới do sáp nhập công ty.</li>' +
                         '<li><strong>b.</strong> Việc <strong>vận hành (<code>運用</code>)</strong> service desk để tiếp nhận các câu hỏi, lỗi hệ thống.</li>' +
                         '<li><strong>c.</strong> Việc <strong>phát triển (<code>開発</code>)</strong> chương trình để triển khai hệ thống kế toán mới.</li>' +
                         '<li><strong>d.</strong> Việc <strong>xử lý kế toán (<code>会計処理</code>)</strong> được thực hiện <strong>cuối mỗi năm (<code>毎年度末</code>)</strong>.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<p>Một <strong>"Dự án" (<code>プロジェクト</code>)</strong> theo định nghĩa chuẩn (PMBOK) phải có 2 đặc tính:</p>' +
                         '<ol><li><strong>Tạm thời (<code>有期性</code>):</strong> Có điểm bắt đầu và kết thúc rõ ràng.</li>' +
                         '<li><strong>Độc nhất (<code>独自性</code>):</strong> Tạo ra một sản phẩm, dịch vụ, hoặc kết quả duy nhất.</li></ol>' +
                         '<p>Ngược lại với Dự án là <strong>"Hoạt động" (Operations / <code>運用</code> / <code>定常業務</code>)</strong>, là những công việc lặp đi lặp lại, diễn ra liên tục.</p>' +
                         '<ul><li><strong>a. ✅ Dự án.</strong> Việc sáp nhập công ty (<code>移行</code>) là một nỗ lực *tạm thời* và *độc nhất* để tạo ra một tổ chức mới.</li>' +
                         '<li><strong>b. ❌ Hoạt động.</strong> Vận hành (<code>運用</code>) service desk là một công việc *lặp đi lặp lại*, *liên tục*, không có ngày kết thúc.</li>' +
                         '<li><strong>c. ✅ Dự án.</strong> Phát triển (<code>開発</code>) một hệ thống mới là một công việc *tạm thời* (có ngày bắt đầu, ngày kết thúc) và *độc nhất*.</li>' +
                         '<li><strong>d. ❌ Hoạt động.</strong> Xử lý kế toán cuối năm (<code>毎年度末</code>) là công việc *định kỳ*, *lặp lại hàng năm*.</li></ul>' +
                         '<p>=> Vậy, các ví dụ về Dự án là a và c.</p>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>プロジェクト</code> (Dự án)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> Hãy tự hỏi: "Nó có lặp đi lặp lại mãi mãi/định kỳ (<code>運用</code>, <code>毎...</code>) không?". Nếu có, đó là <strong>Hoạt động</strong>. Nếu không (làm 1 lần rồi thôi <code>開発</code>, <code>移行</code>), đó là <strong>Dự án</strong>.</li></ul>'
      },
      {
        'question': 'ソフトウェア開発プロジェクトにおける，コストの見積手法には，積み上げ法，ファンクションポイント法，類推見積法などがある。見積りで使用した手法とその特徴に関する記述a～cの適切な組合Sせはどれか。<br><br><ol type=\'a\'><li>プロジェクトに必要な個々の作業を洗い出し，その作業ごとの工数を見積もって集計する。</li><li>プロジェクトの初期段階で使用する手法で，過去の事例を活用してコストを見積もる。</li><li>データ入出力や機能に着目して，ソフトウェア規模を見積もり，係数を乗ずるなどしてコストを見積もる。</li></ol><br><img src=\'img/49.png\' width=\'600\' height=\'148\' alt=\'49.png/image-size:600×148\'>',
        'options': ['ア', 'イ', 'ウ', 'エ'],
        'answer': 0,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Hãy ghép nối các phương pháp ước tính chi phí (<code>積み上げ法</code>, <code>ファンクションポイント法</code>, <code>類推見積法</code>) với các mô tả (a, b, c).</li>' +
                         '<li><strong>a:</strong> Liệt kê <strong>từng công việc riêng lẻ (<code>個々の作業</code>)</strong>, ước tính công sức cho từng việc rồi <strong>cộng dồn (<code>集計</code>)</strong> lại.</li>' +
                         '<li><strong>b:</strong> Phương pháp dùng ở giai đoạn đầu, tận dụng <strong>các dự án tương tự trong quá khứ (<code>過去の事例</code>)</strong> để ước tính.</li>' +
                         '<li><strong>c:</strong> Tập trung vào các <strong>chức năng (<code>機能</code>) và I/O dữ liệu (<code>データ入出力</code>)</strong> để ước tính quy mô, sau đó nhân hệ số để ra chi phí.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>Mô tả a:</strong> Đây là phương pháp <strong>Tích lũy từ dưới lên (<code>積み上げ法</code> - Bottom-up)</strong>. Bạn "xây" (<code>積み上げ</code>) ước tính tổng thể bằng cách "cộng dồn" (<code>集計</code>) các ước tính chi tiết của <strong>từng công việc (<code>個々の作業</code>)</strong>.</li>' +
                         '<li><strong>Mô tả b:</strong> Đây là phương pháp <strong>Ước tính tương tự (<code>類推見積法</code> - Analogous)</strong>. Bạn "suy luận" (<code>類推</code>) chi phí dự án này bằng cách so sánh nó với một "trường hợp tương tự trong quá khứ" (<code>過去の事例</code>). Phương pháp này nhanh nhưng không chính xác, thường dùng ở giai đoạn đầu.</li>' +
                         '<li><strong>Mô tả c:</strong> Đây là phương pháp <strong>Điểm chức năng (<code>ファンクションポイント法</code> - Function Point)</strong>. Phương pháp này "đếm" số lượng <strong>chức năng (<code>機能</code>)</strong> mà phần mềm cung cấp (như nhập, xuất, truy vấn...) và nhân với các hệ số phức tạp để ra một con số (FP) đại diện cho quy mô.</li></ul>' +
                         '<p>=> Ghép nối lại, ta có: <strong>a = <code>積み上げ法</code></strong>, <strong>b = <code>類推見積法</code></strong>, <strong>c = <code>ファンクションポイント法</code></strong>. Tổ hợp này tương ứng với đáp án <strong>ア</strong>.</p>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong><code>積み上げ</code> (Stack up)</strong> = Cộng dồn từng việc nhỏ (<code>個々の作業</code>).</li>' +
                         '<li><strong><code>類推</code> (Analogy)</strong> = So sánh với quá khứ (<code>過去の事例</code>).</li>' +
                         '<li><strong><code>ファンクション</code> (Function)</strong> = Đếm số lượng chức năng (<code>機能</code>).</li></ul>'
      },
      {
        'question': 'システム監査で用いる判断尺度の選定方法に関する記述として，最も適切なものはどれか。',
        'options': ['システム監査ではシステム管理基準の全項目をそのまま使用しなければならない。', 'システム監査のテーマに応じて，システム管理基準以外の基準を使用してもよい。', 'システム監査のテーマによらず，システム管理基準以外の基準は使用すべきでない。', 'アジャイル開発では，システム管理基準は使用すべきでない。'],
        'answer': 1,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Mô tả nào là phù hợp về cách lựa chọn <strong>tiêu chí đánh giá (<code>判断尺度</code>)</strong> trong kiểm toán hệ thống?</li>' +
                         '<li><strong>ア:</strong> <strong>Phải (<code>なければならない</code>)</strong> sử dụng tất cả các mục của "Tiêu chuẩn quản lý hệ thống" (của METI).</li>' +
                         '<li><strong>イ:</strong> <strong>Tùy thuộc vào chủ đề (<code>テーマに応じて</code>)</strong> của cuộc kiểm toán, <strong>có thể (<code>てもよい</code>)</strong> sử dụng các tiêu chuẩn khác ngoài "Tiêu chuẩn quản lý hệ thống".</li>' +
                         '<li><strong>ウ:</strong> <strong>Không nên (<code>べきでない</code>)</strong> sử dụng các tiêu chuẩn khác, bất kể chủ đề nào.</li>' +
                         '<li><strong>エ:</strong> Với Agile, <strong>không nên (<code>べきでない</code>)</strong> sử dụng "Tiêu chuẩn quản lý hệ thống".</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア, ウ, エ. ❌ Sai.</strong> Các lựa chọn này đều quá cứng nhắc, mang tính tuyệt đối ("phải dùng tất cả", "không được dùng", "không nên dùng"). Kiểm toán là một hoạt động cần sự linh hoạt và phải được điều chỉnh cho phù hợp với đối tượng.</li>' +
                         '<li><strong>イ. ✅ Đúng.</strong> Tiêu chí đánh giá (<code>判断尺度</code>) phải phù hợp với đối tượng và mục tiêu của cuộc kiểm toán. Mặc dù "Tiêu chuẩn quản lý hệ thống" (<code>システム管理基準</code> của METI) là một tài liệu tham khảo rất quan trọng và phổ biến, kiểm toán viên hoàn toàn có thể và nên (<code>てもよい</code>) sử dụng các tiêu chuẩn khác (ví dụ: quy định nội bộ của công ty, các framework bảo mật khác như COBIT, ISO 27001...) <strong>tùy thuộc vào chủ đề (<code>テーマに応じて</code>)</strong> của cuộc kiểm toán để đảm bảo tính hiệu quả và phù hợp nhất.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>判断尺度</code> (Tiêu chí đánh giá), <code>テーマに応じて</code> (Tùy theo chủ đề)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> Một cuộc kiểm toán tốt phải <strong>linh hoạt</strong> và <strong>phù hợp với thực tế</strong>. Hãy chọn đáp án thể hiện sự linh hoạt (<strong>"có thể", "tùy theo..." - <code>...に応じて...てもよい</code></strong>) và tránh các đáp án mang tính tuyệt đối (phải, không được).</li></ul>'
      }
],
    technology: [
      {
        'question': '正しいURLを指定してインターネット上のWebサイトへアクセスしようとした利用者が，偽装されたWebサイトに接続されてしまうようになった。原因を調べたところ，ドメイン名とIPアドレスの対応付けを管理するサーバに脆弱性があり，攻撃者によって，ドメイン名とIPアドレスを対応付ける情報が書き換えられていた。このサーバが受けた攻撃はどれか。',
        'options': ['DDoS攻撃', 'DNSキャッシュポイズニング', 'ソーシャルエンジニアリング', 'ドライブバイダウンロード'],
        'answer': 1,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Người dùng gõ đúng URL nhưng lại bị điều hướng đến một trang web giả mạo (<code>偽装されたWebサイト</code>). Nguyên nhân là do thông tin <strong>ánh xạ giữa tên miền và địa chỉ IP (<code>ドメイン名とIPアドレスの対応付け</code>)</strong> trên máy chủ đã bị kẻ tấn công thay đổi. Đây là kiểu tấn công gì?</li>' +
                         '<li><strong>ア.</strong> Tấn công DDoS</li>' +
                         '<li><strong>イ.</strong> Đầu độc bộ đệm DNS (DNS Cache Poisoning)</li>' +
                         '<li><strong>ウ.</strong> Tấn công phi kỹ thuật (Social Engineering)</li>' +
                         '<li><strong>エ.</strong> Drive-by Download</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. DDoS攻撃:</strong> ❌ Sai. Tấn công DDoS (Từ chối dịch vụ phân tán) làm cho dịch vụ bị ngưng hoạt động (sập web), chứ không phải điều hướng sai.</li>' +
                         '<li><strong>イ. DNSキャッシュポイズニング:</strong> ✅ <strong>Đúng.</strong> Máy chủ quản lý việc <strong>ánh xạ tên miền (<code>ドメイン名</code>) sang địa chỉ IP</strong> chính là <strong>máy chủ DNS</strong>. Hành vi "đầu độc" (Poisoning) bộ đệm (Cache) của máy chủ này, bằng cách thay đổi thông tin ánh xạ để điều hướng người dùng đến địa chỉ IP giả mạo, được gọi là <strong>DNS Cache Poisoning</strong>.</li>' +
                         '<li><strong>ウ. ソーシャルエンジニアリング:</strong> ❌ Sai. Là tấn công phi kỹ thuật, lừa đảo con người (ví dụ: giả danh IT gọi điện hỏi mật khẩu).</li>' +
                         '<li><strong>エ. ドライブバイダウンロード:</strong> ❌ Sai. Là tấn công tự động tải mã độc xuống máy người dùng ngay khi họ truy cập vào một trang web đã bị xâm nhập.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>ドメイン名とIPアドレスの対応付け</code> (Ánh xạ tên miền và địa chỉ IP)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> Tên miền ↔ IP là nhiệm vụ của <strong>DNS</strong>. Tấn công vào nó là tấn công <strong>DNS</strong>.</li></ul>'
      },
      {
        'question': 'GPSの電波を捕捉しにくいビルの谷間や狭い路地などでも位置を計測することができるように，特定の地域の上空に比較的長く留まる軌道をとり，GPSと併用することによって，より高い測位精度を実現するものはどれか。',
        'options': ['アシストGPS', 'ジャイロセンサー', '準天頂衛星', 'プローブカー'],
        'answer': 2,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Hệ thống nào, khi <strong>dùng chung với GPS (<code>GPSと併用</code>)</strong>, giúp cải thiện độ chính xác định vị ở những nơi khó bắt sóng (như hẻm, thung lũng), bằng cách sử dụng các vệ tinh có quỹ đạo bay <strong>lơ lửng lâu trên một khu vực cụ thể (<code>特定の地域の上空</code>)</strong>?</li>' +
                         '<li><strong>ア.</strong> A-GPS (Assisted GPS)</li>' +
                         '<li><strong>イ.</strong> Cảm biến con quay (<code>ジャイロセンサー</code>)</li>' +
                         '<li><strong>ウ.</strong> Vệ tinh chuẩn thiên đỉnh (<code>準天頂衛星</code>)</li>' +
                         '<li><strong>エ.</strong> Probe car</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. アシストGPS (A-GPS):</strong> ❌ Sai. A-GPS (Assisted GPS) dùng dữ liệu mạng (3G/4G/Wi-Fi) để giúp GPS định vị *nhanh hơn* (giảm thời gian Time-to-First-Fix), chứ không phải là một hệ thống vệ tinh riêng.</li>' +
                         '<li><strong>イ. ジャイロセンサー (Gyro sensor):</strong> ❌ Sai. Cảm biến con quay hồi chuyển dùng để xác định hướng và góc quay của thiết bị (ví dụ: khi xoay điện thoại), giúp định vị trong nhà (nơi không có GPS), nhưng không phải là hệ thống vệ tinh.</li>' +
                         '<li><strong>ウ. 準天頂衛星 (Quasi-Zenith Satellite):</strong> ✅ <strong>Đúng.</strong> (Ví dụ: hệ thống Michibiki <code>みちびき</code> của Nhật Bản). Đây là hệ thống vệ tinh được thiết kế để luôn có ít nhất một vệ tinh ở vị trí gần đỉnh đầu (thiên đỉnh - <code>天頂</code>) của một khu vực nhất định (Nhật Bản, Úc). Điều này giúp bổ sung tín hiệu cho GPS ở những khu vực "điểm mù" trong đô thị (bị nhà cao tầng che khuất).</li>' +
                         '<li><strong>エ. プローブカー (Probe car):</strong> ❌ Sai. Là các phương tiện (ô tô) được gắn thiết bị để thu thập dữ liệu giao thông (vị trí, tốc độ) và gửi về trung tâm.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>GPSと併用</code> (Dùng chung với GPS), <code>特定の地域の上空</code> (Trên bầu trời 1 khu vực), <code>準天頂衛星</code></strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> Vệ tinh "bổ trợ" (augment) cho GPS của Nhật Bản được gọi là <strong><code>準天頂衛星</code> (Michibiki)</strong>.</li></ul>'
      },
      {
        'question': 'ランサムウェアに関する記述として，最も適切なものはどれか。',
        'options': ['PCに外部から不正にログインするための侵入路をひそかに設置する。', 'PCのファイルを勝手に暗号化し，復号のためのキーを提供することなどを条件に金銭を要求する。', 'Webブラウザを乗っ取り，オンラインバンキングなどの通信に割り込んで不正送金などを行う。', '自らネットワークを経由して感染を広げる機能をもち，まん延していく。'],
        'answer': 1,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Mô tả nào phù hợp nhất với <strong>Ransomware (<code>ランサムウェア</code>)</strong>?</li>' +
                         '<li><strong>ア.</strong> Bí mật cài đặt một cửa hậu (<code>侵入路</code>) để đăng nhập trái phép vào PC.</li>' +
                         '<li><strong>イ.</strong> Tự ý <strong>mã hóa (<code>暗号化</code>)</strong> file của PC, sau đó <strong>đòi tiền (<code>金銭を要求</code>)</strong> để đổi lấy khóa giải mã.</li>' +
                         '<li><strong>ウ.</strong> Chiếm quyền điều khiển trình duyệt (Web browser), can thiệp vào giao dịch ngân hàng.</li>' +
                         '<li><strong>エ.</strong> Tự lây lan (<code>感染を広げる</code>) qua mạng và phát tán.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. ❌ Sai.</strong> Cài đặt một cửa hậu để xâm nhập là hành vi của <strong>Backdoor (<code>バックドア</code>)</strong> hoặc <strong>Rootkit</strong>.</li>' +
                         '<li><strong>イ. ✅ Đúng.</strong> <strong>Ransomware</strong> (Ransom = Tiền chuộc) là loại mã độc chuyên <strong>mã hóa (<code>暗号化</code>)</strong> file của nạn nhân và sau đó <strong>đòi tiền chuộc (<code>金銭を要求</code>)</strong>.</li>' +
                         '<li><strong>ウ. ❌ Sai.</strong> Tấn công vào trình duyệt để lừa đảo giao dịch ngân hàng là hành vi của <strong>Man-in-the-Browser (MITB)</strong>.</li>' +
                         '<li><strong>エ. ❌ Sai.</strong> Tự lây lan qua mạng là đặc tính của <strong>Worm (<code>ワーム</code>)</strong>.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>ランサムウェア</code> (Ransomware)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> "<strong>Ransom</strong>" có nghĩa là "<strong>Tiền chuộc</strong>". Hãy tìm đáp án có hành vi <strong><code>暗号化</code> (mã hóa) + <code>金銭を要求</code> (đòi tiền)</strong>.</li></ul>'
      },
      {
        'question': '次のOSのうち，OSS(Open Source Software)として提供されるものだけを全て挙げたものはどれか。<br><br><ol type=\'a\'><li>Android</li><li>Free BSD</li><li>iOS</li><li>Linux</li></ol>',
        'options': ['a，b', 'a，b，d', 'b，d', 'c，d'],
        'answer': 1,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Hệ điều hành nào sau đây là <strong>Phần mềm mã nguồn mở (OSS)</strong>?</li>' +
                         '<li><strong>a.</strong> Android</li>' +
                         '<li><strong>b.</strong> Free BSD</li>' +
                         '<li><strong>c.</strong> iOS</li>' +
                         '<li><strong>d.</strong> Linux</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>a. ✅ OSS.</strong> Nền tảng <strong>Android</strong> (phiên bản AOSP - Android Open Source Project) được xây dựng trên nhân Linux và là mã nguồn mở. (Các dịch vụ của Google như Play Store thì không phải).</li>' +
                         '<li><strong>b. ✅ OSS.</strong> <strong>Free BSD</strong> là một hệ điều hành mã nguồn mở hoàn chỉnh, thuộc họ UNIX, rất nổi tiếng.</li>' +
                         '<li><strong>c. ❌ Mã nguồn đóng.</strong> <strong>iOS</strong> là hệ điều hành độc quyền của Apple và là mã nguồn đóng (Proprietary).</li>' +
                         '<li><strong>d. ✅ OSS.</strong> <strong>Linux</strong> là ví dụ điển hình và nổi tiếng nhất về một hệ điều hành mã nguồn mở.</li></ul>' +
                         '<p>=> Vậy các hệ điều hành OSS là a, b, và d.</p>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>OSS</code> (Mã nguồn mở)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> Hầu hết các sản phẩm của Apple (như <strong>iOS, macOS</strong>) và Microsoft (<strong>Windows</strong>) là <strong>mã nguồn đóng</strong>. <strong>Linux</strong> và các HĐH "ăn theo" nó (như <strong>Android</strong>, <strong>FreeBSD</strong>) là <strong>mã nguồn mở</strong>.</li></ul>'
      },
      {
        'question': 'Aさんは次のように宛先を指定して電子メールを送信した。この電子メールの受信者に関する記述のうち，適切なものだけを全て挙げたものはどれか。<br><br>〔宛先〕<br>To：Bさんのメールアドレス<br>Cc：Cさんのメールアドレス<br>Bcc：Dさんのメールアドレス，Eさんのメールアドレス<ul><li class=\'li1\'>CさんはDさんのメールアドレスを知ることができる。</li><li class=\'li2\'>DさんはCさんのメールアドレスを知ることができる。</li><li class=\'li3\'>EさんはDさんのメールアドレスを知ることができる。</li></ul>',
        'options': ['ア (1)', 'イ (1)，(3)', 'ウ (2)', 'エ (2)，(3)'],
        'answer': 2,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> A gửi mail (To: B, Cc: C, Bcc: D, E). Mệnh đề nào sau đây đúng?</li>' +
                         '<li><strong>(1)</strong> C (ở Cc) có thể biết địa chỉ của D (ở Bcc).</li>' +
                         '<li><strong>(2)</strong> D (ở Bcc) có thể biết địa chỉ của C (ở Cc).</li>' +
                         '<li><strong>(3)</strong> E (ở Bcc) có thể biết địa chỉ của D (ở Bcc).</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<p>Quy tắc hiển thị của email:</p>' +
                         '<ul><li>Tất cả mọi người (B, C, D, E) đều thấy được địa chỉ trong trường <strong>To</strong> và <strong>Cc</strong>.</li>' +
                         '<li>Chỉ người gửi mới biết danh sách đầy đủ trong trường <strong>Bcc</strong>.</li>' +
                         '<li>Những người trong <strong>Bcc</strong> <strong>KHÔNG</strong> thể thấy địa chỉ của nhau.</li>' +
                         '<li>Những người trong <strong>To</strong> và <strong>Cc</strong> <strong>KHÔNG</strong> thể thấy địa chỉ trong <strong>Bcc</strong>.</li></ul>' +
                         '<p>Áp dụng quy tắc:</p>' +
                         '<ul><li><strong>(1) C (Cc) có biết D (Bcc) không? ❌ Sai.</strong> Người ở Cc không thể thấy người ở Bcc.</li>' +
                         '<li><strong>(2) D (Bcc) có biết C (Cc) không? ✅ Đúng.</strong> Người ở Bcc có thể thấy tất cả những người ở To và Cc.</li>' +
                         '<li><strong>(3) E (Bcc) có biết D (Bcc) không? ❌ Sai.</strong> Những người cùng ở Bcc "vô hình" với nhau.</li></ul>' +
                         '<p>=> Vậy, chỉ có mệnh đề (2) là đúng.</p>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>To, Cc, Bcc</code></strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> <strong>B</strong> trong <strong>B</strong>cc là viết tắt của <strong>B</strong>lind (Mù / <code>ブラインド</code>).</li>' +
                         '<ul><li>Những người trong <strong>Bcc</strong> "mù", <strong>không thấy được nhau</strong>.</li>' +
                         '<li>Những người (To, Cc) "không mù" <strong>không thấy được Bcc</strong>.</li>' +
                         '<li>Nhưng người "mù" (Bcc) <strong>thấy được người không mù</strong> (To, Cc).</li></ul></ul>'
      },
      {
        'question': 'AIの関連技術であるディープラーニングに用いられる技術として，最も適切なものはどれか。',
        'options': ['ソーシャルネットワーク', 'ニューラルネットワーク', 'フィージビリティスタディ', 'フォールトトレラント'],
        'answer': 1,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Công nghệ nào được sử dụng trong <strong>Deep Learning (<code>ディープラーニング</code>)</strong>?</li>' +
                         '<li><strong>ア.</strong> Mạng xã hội (Social Network)</li>' +
                         '<li><strong>イ.</strong> Mạng nơ-ron (Neural Network)</li>' +
                         '<li><strong>ウ.</strong> Nghiên cứu khả thi (Feasibility Study)</li>' +
                         '<li><strong>エ.</strong> Khả năng chịu lỗi (Fault Tolerant)</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. ソーシャルネットワーク:</strong> ❌ Sai. Là mạng xã hội (Facebook, X...).</li>' +
                         '<li><strong>イ. ニューラルネットワーク (Neural Network):</strong> ✅ <strong>Đúng.</strong> <strong>Deep Learning (Học sâu)</strong> là một lĩnh vực của Machine Learning dựa trên <strong>Mạng nơ-ron nhân tạo (<code>ニューラルネットワーク</code>)</strong> có nhiều lớp ẩn (deep). Về cơ bản, Deep Learning chính là Deep Neural Network.</li>' +
                         '<li><strong>ウ. フィージビリティスタディ:</strong> ❌ Sai. Là "Nghiên cứu khả thi", một hoạt động trong quản lý dự án để xem dự án có đáng làm hay không.</li>' +
                         '<li><strong>エ. フォールトトレラント:</strong> ❌ Sai. Là "Khả năng chịu lỗi", một đặc tính thiết kế của hệ thống (ví dụ: dùng RAID) để hệ thống vẫn chạy được ngay cả khi có một phần bị lỗi.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>ディープラーニング</code> (Deep Learning)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> <strong>Deep Learning</strong> (Học Sâu) = <strong>Deep Neural Network</strong> (Mạng Nơ-ron Sâu - <code>ニューラルネットワーク</code>).</li></ul>'
      },
      {
        'question': '企業において情報セキュリティポリシー策定で行う作業のうち，次の作業の実施順序として，適切なものはどれか。<br><br><ol type=\'a\'><li>策定する責任者や担当者を決定する。</li><li>情報セキュリティ対策の基本方針を策定する。</li><li>保有する情報資産を洗い出し，分類する。</li><li>リスクを分析する。</li></ol>',
        'options': ['a → b → c → d', 'a → b → d → c', 'b → a → c → d', 'b → a → d → c'],
        'answer': 0,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Đâu là trình tự (<code>実施順序</code>) đúng khi xây dựng Chính sách bảo mật thông tin (Security Policy)?</li>' +
                         '<li><strong>a.</strong> Quyết định người chịu trách nhiệm (<code>責任者</code>) và người phụ trách (<code>担当者</code>).</li>' +
                         '<li><strong>b.</strong> Xây dựng chính sách cơ bản (<code>基本方針</code>).</li>' +
                         '<li><strong>c.</strong> Liệt kê (<code>洗い出し</code>) và phân loại tài sản thông tin (<code>情報資産</code>).</li>' +
                         '<li><strong>d.</strong> Phân tích rủi ro (<code>リスクを分析</code>).</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<p>Quy trình xây dựng Chính sách bảo mật thông tin (hoặc ISMS) một cách logic sẽ diễn ra như sau:</p>' +
                         '<ol><li><strong>a. Quyết định ai là người làm:</strong> Đây là bước đầu tiên để thành lập đội ngũ và có người chịu trách nhiệm (chủ sở hữu quy trình).</li>' +
                         '<li><strong>b. Xây dựng chính sách cơ bản:</strong> Đội ngũ đã được thành lập sẽ đưa ra định hướng, tuyên bố và mục tiêu chung (<code>基本方針</code>) (ví dụ: "Chúng ta cam kết bảo vệ thông tin khách hàng").</li>' +
                         '<li><strong>c. Liệt kê tài sản:</strong> Để bảo vệ, trước hết phải biết mình *có cái gì* để bảo vệ (<code>情報資産を洗い出し</code>).</li>' +
                         '<li><strong>d. Phân tích rủi ro:</strong> Sau khi biết mình có gì (c), ta mới phân tích xem chúng có thể gặp những *nguy cơ* (<code>リスク</code>) nào.</li></ol>' +
                         '<p>=> Vậy, trình tự hợp lý nhất là <strong>a → b → c → d</strong>.</p>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>実施順序</code> (Trình tự thực hiện)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> Hãy tư duy như một nhà quản lý: **Giao việc (a) -> Đặt mục tiêu (b) -> Kiểm kê (c) -> Đánh giá nguy cơ (d)**.</li></ul>'
      },
      {
        'question': '関係データベースで管理している"従業員"表から，氏名が\'%葉_\'に該当する従業員を抽出した。抽出された従業員は何名か。ここで，"_"は任意の1文字を表し，“%”は0文字以上の任意の文字列を表すものとする。<div class=\'img_margin left\'><img src=\'img/93.png\' width=\'162\' height=\'215\' alt=\'93.png/image-size:162×215\'></div>',
        'options': ['1', '2', '3', '4'],
        'answer': 1,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Từ bảng "Nhân viên", tìm các nhân viên có tên (<code>氏名</code>) khớp với điều kiện <code>\'%葉_\'</code>. Có bao nhiêu người?</li>' +
                         '<li><strong>Quy tắc:</strong> <code>_</code> = đại diện cho <strong>1 ký tự</strong> bất kỳ. <code>%</code> = đại diện cho <strong>0 hoặc nhiều ký tự</strong> bất kỳ.</li>' +
                         '<li><strong>ア.</strong> 1</li> <li><strong>イ.</strong> 2</li> <li><strong>ウ.</strong> 3</li> <li><strong>エ.</strong> 4</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<p>Toán tử <code>LIKE \'%葉_\'</code> trong SQL có nghĩa là:</p>' +
                         '<ul><li><code>%</code>: Bất kỳ chuỗi ký tự nào (kể cả rỗng) ở phía trước.</li>' +
                         '<li><code>葉</code>: Phải có ký tự "葉".</li>' +
                         '<li><code>_</code>: Phải có <strong>đúng một (1)</strong> ký tự bất kỳ ở phía sau.</li></ul>' +
                         '<p>Xét danh sách nhân viên trong bảng:</p>' +
                         '<ul><li>相葉二郎: Không khớp, vì sau \'葉\' có hai ký tự (\'二郎\').</li>' +
                         '<li>大葉景子: Không khớp, vì sau \'葉\' có hai ký tự (\'景子\').</li>' +
                         '<li><strong>千葉翔: ✅ Khớp.</strong> Phía trước có \'千\', sau \'葉\' có đúng một ký tự (\'翔\').</li>' +
                         '<li>松葉博: Không khớp, vì sau \'葉\' có 0 ký tự.</li>' +
                         '<li>紅葉山玲: Không khớp, ký tự là \'葉\' chứ không phải \'葉山\'.</li>' +
                         '<li><strong>鈴木葉子: ✅ Khớp.</strong> Phía trước có \'鈴木\', sau \'葉\' có đúng một ký tự (\'子\').</li></ul>' +
                         '<p>=> Vậy có tổng cộng <strong>2</strong> người được tìm thấy.</p>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>LIKE</code>, <code>%</code> (Wildcard), <code>_</code> (Wildcard)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ (Rất quan trọng):</strong></li>' +
                         '<ul><li><strong><code>%</code> = 0...* (Zero hoặc nhiều hơn)</strong>.</li>' +
                         '<li><strong><code>_</code> = 1 (Chính xác một)</strong>.</li></ul></ul>'
      },
      {
        'question': 'インターネットに接続されているサーバが，1台でメール送受信機能とWebアクセス機能の両方を提供しているとき，端末のアプリケーションプログラムがそのどちらの機能を利用するかをサーバに指定するために用いるものはどれか。',
        'options': ['IPアドレス', 'ドメイン', 'ポート番号', 'ホスト名'],
        'answer': 2,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Khi một máy chủ (1 server) cung cấp cả dịch vụ email và web, ứng dụng trên máy client dùng thông tin gì để chỉ định chính xác <strong>dịch vụ (<code>機能</code>)</strong> mà nó muốn kết nối đến?</li>' +
                         '<li><strong>ア.</strong> Địa chỉ IP (<code>IPアドレス</code>)</li>' +
                         '<li><strong>イ.</strong> Tên miền (<code>ドメイン</code>)</li>' +
                         '<li><strong>ウ.</strong> Số cổng (<code>ポート番号</code>)</li>' +
                         '<li><strong>エ.</strong> Tên máy chủ (<code>ホスト名</code>)</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア, イ, エ. ❌ Sai.</strong> Địa chỉ IP, Tên miền (Domain), và Tên máy chủ (Host name) đều chỉ dùng để <strong>xác định máy chủ (<code>サーバ</code>)</strong> trên mạng. Chúng giống như địa chỉ của một tòa nhà chung cư (ví dụ: "Tòa nhà A, số 123 đường X").</li>' +
                         '<li><strong>ウ. ✅ Đúng.</strong> <strong>Số cổng (<code>ポート番号</code> - Port Number)</strong> được dùng để xác định <strong>dịch vụ hoặc ứng dụng cụ thể (<code>機能</code>)</strong> đang chạy trên máy chủ đó. Nó giống như số căn hộ trong tòa nhà (ví dụ: "Phòng 80" hoặc "Phòng 25").</li>' +
                         '<li>Ví dụ: Trình duyệt web (client) sẽ kết nối đến <code>[Địa chỉ IP]:80</code> (cổng 80) để lấy web. Ứng dụng email sẽ kết nối đến <code>[Địa chỉ IP]:25</code> (cổng 25) để gửi mail.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>ポート番号</code> (Port Number), <code>どちらの機能</code> (Chức năng/dịch vụ nào)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ (Analogy):</strong></li>' +
                         '<ul><li><strong>IP/Domain</strong> = Địa chỉ <strong>Tòa nhà</strong>.</li>' +
                         '<li><strong>Port</strong> = Số <strong>Phòng/Căn hộ</strong> (dịch vụ).</li></ul></ul>'
      },
      {
        'question': '職場で不要になったPCを廃棄する場合の情報漏えい対策として，最も適切なものはどれか。',
        'options': ['OSが用意しているファイル削除の機能を使って，PC内のデータファイルを全て削除する。', 'PCにインストールされているアプリケーションを，全てアンインストールする。', 'PCに内蔵されている全ての記憶装置を論理フォーマットする。', '専用ソフトなどを使って，PCに内蔵されている全ての記憶装置の内容を消去するために，ランダムなデータを規定回数だけ上書きする。'],
        'answer': 3,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Biện pháp nào là phù hợp nhất để chống <strong>rò rỉ thông tin (<code>情報漏えい</code>)</strong> khi <strong>vứt bỏ (<code>廃棄</code>)</strong> một chiếc PC cũ?</li>' +
                         '<li><strong>ア.</strong> Dùng chức năng <strong>xóa file (<code>削除</code>)</strong> của HĐH để xóa tất cả file.</li>' +
                         '<li><strong>イ.</strong> Gỡ cài đặt (<code>アンインストール</code>) tất cả ứng dụng.</li>' +
                         '<li><strong>ウ.</strong> <strong>Format logic (<code>論理フォーマット</code>)</strong> toàn bộ ổ cứng.</li>' +
                         '<li><strong>エ.</strong> Dùng phần mềm chuyên dụng để <strong>ghi đè (<code>上書き</code>)</strong> dữ liệu ngẫu nhiên lên toàn bộ ổ cứng nhiều lần.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア, ウ. ❌ Không an toàn.</strong> Việc xóa file thông thường (Delete) hoặc Format nhanh (<code>論理フォーマット</code>) chỉ xóa đi "bảng mục lục" (con trỏ) trỏ đến dữ liệu. Dữ liệu thực tế vẫn còn nguyên trên ổ đĩa và có thể dễ dàng khôi phục bằng phần mềm chuyên dụng.</li>' +
                         '<li><strong>イ. ❌ Không liên quan.</strong> Gỡ cài đặt ứng dụng không xóa các tệp dữ liệu cá nhân (Word, Excel...) mà bạn đã tạo.</li>' +
                         '<li><strong>エ. ✅ An toàn nhất.</strong> Phương pháp an toàn nhất để "hủy" dữ liệu phần mềm là sử dụng phần mềm chuyên dụng để <strong>ghi đè (<code>上書き</code>)</strong> (ví dụ: ghi toàn số 0, hoặc dữ liệu ngẫu nhiên) lên toàn bộ bề mặt ổ đĩa nhiều lần. Việc này sẽ phá hủy hoàn toàn dữ liệu gốc, khiến nó không thể khôi phục được. (Phương pháp an toàn khác là phá hủy vật lý <code>物理的破壊</code>).</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>廃棄</code> (Vứt bỏ), <code>情報漏えい対策</code> (Biện pháp chống rò rỉ)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> Chỉ "xóa" (<code>削除</code>) hay "format" (<code>論理フォーマット</code>) là không đủ, có thể khôi phục được. Phải "hủy diệt" (<code>破壊</code>) dữ liệu bằng cách <strong>ghi đè (<code>上書き</code>)</strong> hoặc <strong>phá hủy vật lý (<code>物理的破壊</code>)</strong>.</li></ul>'
      },
      {
        'question': 'セキュリティ対策として使用されるWAFの説明として適切なものはどれか。',
        'options': ['ECなどのWebサイトにおいて，Webアプリケーションソフトウェアの脆弱性を突いた攻撃からの防御や，不審なアクセスのパターンを検知する仕組み', 'インターネットなどの公共のネットワークを用いて，専用線のようなセキュアな通信環境を実現する仕組み', '情報システムにおいて，機密データを特定して監視することによって，機密データの紛失や外部への漏えいを防止する仕組み', 'ファイアウォールを用いて，インターネットと企業の内部ネットワークとの間に緩衝領域を作る仕組み'],
        'answer': 0,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Mô tả nào phù hợp với <strong>WAF</strong>?</li>' +
                         '<li><strong>ア.</strong> Cơ chế bảo vệ các trang web (như trang TMĐT) khỏi các cuộc tấn công nhắm vào <strong>lỗ hổng của ứng dụng web (<code>Webアプリケーション...の脆弱性</code>)</strong>.</li>' +
                         '<li><strong>イ.</strong> Cơ chế tạo ra một môi trường giao tiếp an toàn (như đường truyền riêng) qua mạng công cộng.</li>' +
                         '<li><strong>ウ.</strong> Cơ chế giám sát dữ liệu nhạy cảm để ngăn chặn việc rò rỉ ra bên ngoài.</li>' +
                         '<li><strong>エ.</strong> Cơ chế tạo ra một vùng đệm (<code>緩衝領域</code>) giữa Internet và mạng nội bộ.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. ✅ Đúng.</strong> <strong>WAF (Web Application Firewall)</strong> là "Tường lửa cho Ứng dụng Web". Nó chuyên phân tích nội dung của các truy cập (ví dụ: HTTP request) để phát hiện và ngăn chặn các cuộc tấn công nhắm vào <strong>lỗ hổng của ứng dụng web (<code>Webアプリケーション</code>)</strong>, như SQL Injection hay Cross-Site Scripting (XSS).</li>' +
                         '<li><strong>イ. ❌ Sai.</strong> Tạo một đường truyền an toàn qua mạng công cộng là chức năng của <strong>VPN (Virtual Private Network)</strong>.</li>' +
                         '<li><strong>ウ. ❌ Sai.</strong> Giám sát và ngăn chặn rò rỉ dữ liệu nhạy cảm (<code>機密データ</code>) là chức năng của <strong>DLP (Data Loss Prevention)</strong>.</li>' +
                         '<li><strong>エ. ❌ Sai.</strong> Tạo một vùng đệm (vùng phi quân sự) giữa mạng nội bộ và Internet là <strong>DMZ (Demilitarized Zone)</strong>.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>WAF</code></strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ (Phân biệt Firewall và WAF):</strong></li>' +
                         '<ul><li><strong>Firewall (thường):</strong> Bảo vệ ở tầng Mạng/Transport (Layer 3/4). Chỉ quan tâm đến <strong>IP và Port</strong> (Ai được vào cổng nào?).</li>' +
                         '<li><strong>WAF:</strong> Bảo vệ ở tầng Ứng dụng (Layer 7). Quan tâm đến <strong>nội dung (<code>コンテンツ</code>)</strong> truy cập (Gửi cái gì? Có phải SQL Injection không?).</li></ul></ul>'
      },
      {
        'question': 'システムの利用者認証に関する記述のうち，適切なものはどれか。',
        'options': ['1回の認証で，複数のサーバやアプリケーションなどへのログインを実現する仕組みを，チャレンジレスポンス認証という。', '指紋や声紋など，身体的な特徴を利用して本人認証を行う仕組みを，シングルサインオンという。', '情報システムが利用者の本人確認のために用いる，数字列から成る暗証番号のことを，PINという。', '特定の数字や文字の並びではなく，位置についての情報を覚えておき，認証時には画面に表示された表の中で，自分が覚えている位置に並んでいる数字や文字をパスワードとして入力する方式を，多要素認証という。'],
        'answer': 2,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Mô tả nào đúng về xác thực người dùng?</li>' +
                         '<li><strong>ア.</strong> Đăng nhập 1 lần (<code>1回</code>) dùng cho nhiều (<code>複数</code>) hệ thống → gọi là Challenge-Response.</li>' +
                         '<li><strong>イ.</strong> Dùng đặc điểm cơ thể (<code>身体的な特徴</code>) như vân tay, giọng nói → gọi là Single Sign-On (SSO).</li>' +
                         '<li><strong>ウ.</strong> Mã bí mật bao gồm một dãy số (<code>数字列</code>) dùng để xác thực → gọi là <strong>PIN</strong>.</li>' +
                         '<li><strong>エ.</strong> Nhớ vị trí (<code>位置</code>) trên bảng và nhập các ký tự ở vị trí đó → gọi là Xác thực đa yếu tố.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. ❌ Sai.</strong> Đăng nhập một lần (<code>1回</code>) dùng cho nhiều (<code>複数</code>) hệ thống là <strong>Single Sign-On (<code>シングルサインオン</code> - SSO)</strong>.</li>' +
                         '<li><strong>イ. ❌ Sai.</strong> Dùng đặc điểm sinh trắc học (<code>身体的な特徴</code>) như vân tay (<code>指紋</code>), giọng nói (<code>声紋</code>) là <strong>Biometric Authentication (<code>バイオメトリクス認証</code>)</strong>.</li>' +
                         '<li><strong>ウ. ✅ Đúng.</strong> <strong>PIN (Personal Identification Number - <code>個人識別番号</code>)</strong> chính là một chuỗi số (<code>数字列</code>) dùng làm mật khẩu để xác thực người dùng (ví dụ: mã PIN của thẻ ATM).</li>' +
                         '<li><strong>エ. ❌ Sai.</strong> Nhớ vị trí (<code>位置</code>) trên một ma trận để nhập mật khẩu là <strong>Matrix Authentication (<code>マトリックス認証</code>)</strong>. (<code>多要素認証</code> - Xác thực đa yếu tố là việc kết hợp 2 trong 3 yếu tố: Kiến thức, Sở hữu, Sinh trắc).</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>PIN</code>, <code>数字列</code> (Chuỗi số)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ các thuật ngữ:</strong></li>' +
                         '<ul><li><strong>SSO:</strong> 1 lần đăng nhập, nhiều ứng dụng.</li>' +
                         '<li><strong>Biometrics:</strong> Vân tay, khuôn mặt.</li>' +
                         '<li><strong>PIN:</strong> Mật khẩu bằng số.</li>' +
                         '<li><strong>Matrix Auth:</strong> Nhớ vị trí.</li></ul></ul>'
      },
      {
        'question': 'JavaScriptに関する記述として，適切なものはどれか。',
        'options': ['Webブラウザ上に，動的な振る舞いなどを組み込むことができる。', 'Webブラウザではなく，Webサーバ上だけで動作する。', '実行するためには，あらかじめコンパイルする必要がある。', '名前のとおり，Javaのスクリプト版である。'],
        'answer': 0,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Mô tả nào đúng về <strong>JavaScript</strong>?</li>' +
                         '<li><strong>ア.</strong> Có thể nhúng các <strong>hành vi động (<code>動的な振る舞い</code>)</strong> vào <strong>trình duyệt (<code>Webブラウザ</code>)</strong>.</li>' +
                         '<li><strong>イ.</strong> Chỉ chạy trên Web server, không chạy trên trình duyệt.</li>' +
                         '<li><strong>ウ.</strong> Cần phải biên dịch (<code>コンパイル</code>) trước khi chạy.</li>' +
                         '<li><strong>エ.</strong> Như tên gọi, nó là phiên bản script của Java.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. ✅ Đúng.</strong> Vai trò chính và truyền thống của JavaScript là chạy trên <strong>trình duyệt (<code>Webブラウザ</code>)</strong> của người dùng (client-side) để tạo ra các <strong>hành vi động (<code>動的な振る舞い</code>)</strong>, ví dụ như hiệu ứng, kiểm tra form, tương tác với người dùng mà không cần tải lại trang.</li>' +
                         '<li><strong>イ. ❌ Sai.</strong> JavaScript có thể chạy cả ở phía server (với Node.js), nhưng nói "chỉ chạy trên server" (<code>だけで</code>) là sai. Nó chạy chủ yếu ở client (trình duyệt).</li>' +
                         '<li><strong>ウ. ❌ Sai.</strong> JavaScript là một ngôn ngữ <strong>thông dịch (Interpreted)</strong>, không cần biên dịch (<code>コンパイル</code>) trước khi chạy như C++ hay Java. (Mặc dù các trình duyệt hiện đại có cơ chế JIT - Just-in-time compilation, nhưng về bản chất nó là ngôn ngữ thông dịch).</li>' +
                         '<li><strong>エ. ❌ Sai.</strong> Đây là một lầm tưởng kinh điển. JavaScript và Java là hai ngôn ngữ <strong>hoàn toàn khác nhau</strong> về cú pháp, mục đích và cách hoạt động. (Tên gọi này là một chiêu marketing thời kỳ đầu).</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>JavaScript</code>, <code>Webブラウザ</code> (Trình duyệt), <code>動的な振る舞い</code> (Hành vi động)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ (Bộ ba Web):</strong></li>' +
                         '<ul><li><strong>HTML:</strong> Khung xương (Nội dung).</li>' +
                         '<li><strong>CSS:</strong> Áo quần (Trang trí).</li>' +
                         '<li><strong>JavaScript:</strong> Cử động (Hành vi <code>動的</code>).</li></ul></ul>'
      },
      {
        'question': '通常の検索エンジンでは検索されず匿名性が高いので，サイバー攻撃や違法商品の取引などにも利用されることがあり，アクセスするには特殊なソフトウェアが必要になることもあるインターネット上のコンテンツの総称を何と呼ぶか。',
        'options': ['RSS', 'SEO', 'クロスサイトスクリプティング', 'ダークウェブ'],
        'answer': 3,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Tên gọi chung cho các nội dung trên Internet <strong>không thể tìm thấy bằng công cụ tìm kiếm (<code>検索されず</code>)</strong>, có <strong>tính ẩn danh cao (<code>匿名性が高い</code>)</strong>, thường được dùng cho các hoạt động bất hợp pháp (<code>違法商品の取引</code>) và cần <strong>phần mềm đặc biệt (<code>特殊なソフトウェア</code>)</strong> để truy cập là gì?</li>' +
                         '<li><strong>ア.</strong> RSS</li>' +
                         '<li><strong>イ.</strong> SEO</li>' +
                         '<li><strong>ウ.</strong> Cross-Site Scripting (XSS)</li>' +
                         '<li><strong>エ.</strong> Dark Web (<code>ダークウェブ</code>)</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. RSS:</strong> ❌ Sai. Dùng để cập nhật tin tức (xem ở câu Q63).</li>' +
                         '<li><strong>イ. SEO (Search Engine Optimization):</strong> ❌ Sai. Là "Tối ưu hóa công cụ tìm kiếm", là kỹ thuật để làm cho trang web *dễ* được tìm thấy, ngược lại với câu hỏi.</li>' +
                         '<li><strong>ウ. クロスサイトスクリプティング (XSS):</strong> ❌ Sai. Là một loại tấn công web.</li>' +
                         '<li><strong>エ. ダークウェブ (Dark Web):</strong> ✅ <strong>Đúng.</strong> Đây là một phần của World Wide Web nằm trong "Deep Web", không được các công cụ tìm kiếm index (<code>検索されず</code>), đảm bảo <strong>tính ẩn danh (<code>匿名性</code>)</strong> và cần các phần mềm đặc biệt (<code>特殊なソフトウェア</code>) như trình duyệt Tor để truy cập.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>ダークウェブ</code> (Dark Web), <code>検索されず</code> (Không bị tìm thấy), <code>匿名性が高い</code> (Tính ẩn danh cao)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ (Phân biệt Surface/Deep/Dark Web):</strong></li>' +
                         '<ul><li><strong>Surface Web:</strong> Google tìm thấy (ví dụ: trang tin tức).</li>' +
                         '<li><strong>Deep Web:</strong> Google không tìm thấy, nhưng không xấu (ví dụ: email, tài khoản ngân hàng online).</li>' +
                         '<li><strong>Dark Web (<code>ダークウェブ</code>):</strong> Phần nhỏ của Deep Web, cần phần mềm đặc biệt, ẩn danh (<code>匿名</code>).</li></ul></ul>'
      },
      {
        'question': 'PDCAモデルに基づいてISMSを運用している組織において，C(Check)で実施することの例として，適切なものはどれか。',
        'options': ['業務内容の監査結果に基づいた是正処置として，サーバの監視方法を変更する。', '具体的な対策と目標を決めるために，サーバ室内の情報資産を洗い出す。', 'サーバ管理者の業務内容を第三者が客観的に評価する。', '定められた運用手順に従ってサーバの動作を監視する。'],
        'answer': 2,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Trong một tổ chức vận hành ISMS theo mô hình PDCA, đâu là ví dụ về hoạt động thuộc bước <strong>C (Check)</strong>?</li>' +
                         '<li><strong>ア.</strong> Dựa trên kết quả kiểm toán, thực hiện <strong>hành động khắc phục (<code>是正処置</code>)</strong> bằng cách thay đổi phương pháp giám sát.</li>' +
                         '<li><strong>イ.</strong> Để quyết định mục tiêu và đối sách, tiến hành <strong>liệt kê (<code>洗い出す</code>)</strong> tài sản thông tin trong phòng máy chủ.</li>' +
                         '<li><strong>ウ.</strong> <strong>Bên thứ ba (<code>第三者</code>)</strong> <strong>đánh giá (<code>評価する</code>)</strong> một cách khách quan nội dung công việc của người quản lý máy chủ.</li>' +
                         '<li><strong>エ.</strong> <strong>Giám sát (<code>監視する</code>)</strong> hoạt động của máy chủ <strong>theo quy trình đã định (<code>手順に従って</code>)</strong>.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<p>Chu trình PDCA bao gồm:</p>' +
                         '<ul><li><strong>P (Plan):</strong> Lập kế hoạch (Xây dựng chính sách, mục tiêu, quy trình).</li>' +
                         '<li><strong>D (Do):</strong> Thực hiện (Vận hành theo quy trình đã lập).</li>' +
                         '<li><strong>C (Check):</strong> Kiểm tra (Giám sát, đo lường, đánh giá, kiểm toán).</li>' +
                         '<li><strong>A (Act):</strong> Hành động (Cải tiến, khắc phục dựa trên kết quả kiểm tra).</li></ul>' +
                         '<p>Xét các lựa chọn:</p>' +
                         '<ul><li><strong>ア. ❌ Act (A).</strong> "Thực hiện hành động khắc phục (<code>是正処置</code>)" dựa trên kết quả kiểm tra là bước <strong>Act</strong>.</li>' +
                         '<li><strong>イ. ❌ Plan (P).</strong> "Liệt kê tài sản" và "quyết định mục tiêu" là các bước nền tảng của <strong>Plan</strong> (Lập kế hoạch).</li>' +
                         '<li><strong>ウ. ✅ Check (C).</strong> "Bên thứ ba đánh giá một cách khách quan (<code>客観的に評価する</code>)" chính là bản chất của bước <strong>Check</strong> (Kiểm tra, Kiểm toán nội bộ).</li>' +
                         '<li><strong>エ. ❌ Do (D).</strong> "Giám sát theo quy trình đã định" là hành động <strong>Do</strong> (Thực thi) công việc vận hành hàng ngày.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>C(Check)</code>, <code>評価</code> (Đánh giá), <code>監査</code> (Kiểm toán)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> <strong>C</strong>heck = <strong>K</strong>iểm tra, <strong>Đ</strong>ánh giá (<code>評価</code>). (Phân biệt với <code>監視</code> - <code>Do</code> (giám sát vận hành) và <code>評価</code> - <code>Check</code> (đánh giá hiệu quả)).</li></ul>'
      },
      {
        'question': '関数 binaryToInteger は，1桁以上の符号なし2進数を文字列で表した値を引数 binaryStr で受け取り，その値を整数に変換した結果を戻り値とする。例えば，引数として"100"を受け取ると，4を返す。プログラム中のa，bに入れる字句の適切な組合せはどれか。<br><br>〔プログラム〕<div class=\'img_margin left\'><img src=\'img/85_1.png\' width=\'517\' height=\'273\' alt=\'85_1.png/image-size:517×273\'></div><br><img src=\'img/85_2.png\' width=\'505\' height=\'154\' alt=\'85_2.png/image-size:505×154\'>',
        'options': ['ア', 'イ', 'ウ', 'エ'],
        'answer': 3,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Hàm `binaryToInteger` chuyển đổi chuỗi nhị phân (<code>binaryStr</code>) thành số nguyên. (Ví dụ: "100" -> 4). Điền vào (a) và (b).</li>' +
                         '<li><strong>Code:</strong></li>' +
                         '<ul><li>`intValue` = 0</li>' +
                         '<li>Vòng lặp `i` từ 1 đến hết độ dài chuỗi</li>' +
                         '<li>`k` = độ dài chuỗi - `i`</li>' +
                         '<li>Lấy ký tự thứ `i` (<code>digit</code>)</li>' +
                         '<li>Nếu `digit` == \'1\' thì</li>' +
                         '<li>`intValue` = `intValue` <strong>(b)</strong> <strong>(a)</strong></li>' +
                         '<li>Kết thúc vòng lặp</li>' +
                         '<li>Trả về `intValue`</li></ul></ul>' +
                         '<hr><h3><strong>Phân tích (Dry Run)</strong></h3>' +
                         '<p>Ta thử với ví dụ "100" (độ dài = 3):</p>' +
                         '<ol><li><strong>Lần lặp 1:</strong> `i=1`. `k = 3 - 1 = 2`. `digit` = \'1\'.<br>Điều kiện `if` đúng. `intValue` = 0 + (lũy thừa của 2 mũ <strong>`k`=2</strong>) = 4.</li>' +
                         '<li><strong>Lần lặp 2:</strong> `i=2`. `k = 3 - 2 = 1`. `digit` = \'0\'.<br>Điều kiện `if` sai. Bỏ qua.</li>' +
                         '<li><strong>Lần lặp 3:</strong> `i=3`. `k = 3 - 3 = 0`. `digit` = \'0\'.<br>Điều kiện `if` sai. Bỏ qua.</li></ol>' +
                         '<p>Kết quả = 4. (Khớp với ví dụ).</p>' +
                         '<p>Hãy xem xét logic của thuật toán. Vòng lặp này duyệt chuỗi <strong>từ trái sang phải (từ bit cao nhất)</strong>.</p>' +
                         '<ul><li>Biến <code>k</code> (với giá trị <code>độ dài - i</code>) đang tính số mũ chính xác cho bit ở vị trí <code>i</code>.</li>' +
                         '<ul><li>Khi <code>i=1</code> (bit trái nhất "1"), <code>k=2</code>. Ta cần 1 * 2<sup>2</sup>.</li>' +
                         '<li>Khi <code>i=2</code> (bit "0"), <code>k=1</code>. Ta cần 0 * 2<sup>1</sup>.</li>' +
                         '<li>Khi <code>i=3</code> (bit phải nhất "0"), <code>k=0</code>. Ta cần 0 * 2<sup>0</sup>.</li></ul>' +
                         '<li>Vậy <strong>(a)</strong> phải là <strong>lũy thừa của 2 với số mũ là `k`</strong>, tức là <code>2のk乗</code>.</li>' +
                         '<li>Phép toán <strong>(b)</strong> là phép cộng dồn (tích lũy), vậy nó phải là <code>＋</code>.</li></ul>' +
                         '<p>=> a = <code>2のk乗</code>, b = <code>＋</code>. Tổ hợp này tương ứng với đáp án <strong>エ</strong>.</p>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Mẹo ghi nhớ:</strong> Đọc kỹ vòng lặp. Nó chạy từ <code>i=1</code> (bit đầu tiên). Biến `k` (độ dài - i) chính là số mũ của bit đó (ví dụ: chuỗi dài 3, bit đầu tiên i=1, k=2 → 2<sup>2</sup>).</li></ul>'
      },
      {
        'question': 'IoTエリアネットワークでも利用され，IoTデバイスからの無線通信をほかのIoTデバイスが中継することを繰り返し，リレー方式で通信をすることによって広範囲の通信を実現する技術はどれか。',
        'options': ['GPS', 'MIMO', 'キャリアアグリゲーション', 'マルチホップ'],
        'answer': 3,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Công nghệ nào được dùng trong mạng IoT, cho phép các thiết bị không dây <strong>chuyển tiếp (<code>中継</code>)</strong> tín hiệu cho nhau theo kiểu <strong>rơ-le (<code>リレー方式</code>)</strong> (như một chuỗi) để mở rộng phạm vi phủ sóng (<code>広範囲</code>)?</li>' +
                         '<li><strong>ア.</strong> GPS</li>' +
                         '<li><strong>イ.</strong> MIMO</li>' +
                         '<li><strong>ウ.</strong> Carrier Aggregation</li>' +
                         '<li><strong>エ.</strong> Multi-hop</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. GPS (Global Positioning System):</strong> ❌ Sai. Là hệ thống định vị toàn cầu, dùng để xác định vị trí.</li>' +
                         '<li><strong>イ. MIMO (Multiple Input Multiple Output):</strong> ❌ Sai. Là công nghệ dùng nhiều anten (<code>Multiple</code>) để phát và nhận tín hiệu, nhằm tăng tốc độ truyền dữ liệu, không phải để chuyển tiếp.</li>' +
                         '<li><strong>ウ. キャリアアグリゲーション (Carrier Aggregation):</strong> ❌ Sai. Là công nghệ (thường dùng trong 4G/5G) "gộp" (Aggregation) nhiều băng tần (Carrier) khác nhau lại để tăng tốc độ download.</li>' +
                         '<li><strong>エ. マルチホップ (Multi-hop):</strong> ✅ <strong>Đúng.</strong> Đây là công nghệ mạng (cốt lõi của <strong>Mesh Network</strong>) trong đó các nút mạng (thiết bị) có thể chuyển tiếp (<code>中継</code>) dữ liệu cho nhau, tạo thành một chuỗi nhiều "bước nhảy" (<strong>Multi-hop</strong>) để truyền dữ liệu đi xa hơn tầm phát sóng của một thiết bị đơn lẻ.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>マルチホップ</code> (Multi-hop), <code>中継</code> (Chuyển tiếp), <code>リレー方式</code> (Kiểu rơ-le)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> "Nhảy" (<strong>Hop</strong>) qua "Nhiều" (<strong>Multi</strong>) điểm (<code>中継</code>) → <strong>Multi-hop</strong>.</li></ul>'
      },
      {
        'question': '1から6までの六つの目をもつサイコロを3回投げたとき，1回も1の目が出ない確率は幾らか。',
        'options': ['<span class=\'frac\'><span>1</span>216</span>', '<span class=\'frac\'><span>5</span>72</span>', '<span class=\'frac\'><span>91</span>216</span>', '<span class=\'frac\'><span>125</span>216</span>'],
        'answer': 3,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Tung một con xúc xắc (6 mặt, 1-6) 3 lần. Tính xác suất để <strong>không ra mặt "1" lần nào (<code>1回も1の目が出ない</code>)</strong>?</li>' +
                         '<li><strong>ア.</strong> 1/216</li> <li><strong>イ.</strong> 5/72</li> <li><strong>ウ.</strong> 91/216</li> <li><strong>エ.</strong> 125/216</li></ul>' +
                         '<hr><h3><strong>Phân tích & Tính toán</strong></h3>' +
                         '<p>Đây là bài toán xác suất độc lập.</p>' +
                         '<ol><li><strong>Xác suất KHÔNG ra mặt "1" trong MỘT lần tung:</strong></li>' +
                         '<ul><li>Xúc xắc có 6 mặt {1, 2, 3, 4, 5, 6}.</li>' +
                         '<li>Các kết quả không phải "1" là {2, 3, 4, 5, 6}, có <strong>5</strong> kết quả.</li>' +
                         '<li>Vậy, xác suất không ra mặt "1" là <strong>5/6</strong>.</li></ul>' +
                         '<li><strong>Tính xác suất cho 3 lần tung độc lập:</strong></li>' +
                         '<ul><li>Yêu cầu: (Lần 1 KHÔNG ra 1) VÀ (Lần 2 KHÔNG ra 1) VÀ (Lần 3 KHÔNG ra 1).</li>' +
                         '<li>Vì 3 lần tung là độc lập, ta nhân xác suất của từng lần lại với nhau.</li>' +
                         '<li>Xác suất = (5/6) × (5/6) × (5/6) = 5<sup>3</sup> / 6<sup>3</sup> = <strong>125 / 216</strong>.</li></ul>' +
                         '<li>(Lưu ý: Đáp án ウ, 91/216, là xác suất của biến cố đối: "Có ít nhất 1 lần ra mặt 1". 1 - 125/216 = 91/216).</li></ol>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>確率</code> (Xác suất), <code>1回も...ない</code> (Không...lần nào)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> Tính xác suất của "phần bù" (không ra 1) cho một lần (5/6), sau đó lũy thừa lên cho số lần tung (3 lần).</li></ul>'
      },
      {
        'question': 'ISMSクラウドセキュリティ認証に関する記述として，適切なものはどれか。',
        'options': ['一度認証するだけで，複数のクラウドサービスやシステムなどを利用できるようにする認証の仕組み', 'クラウドサービスについて，クラウドサービス固有の管理策が実施されていることを認証する制度', '個人情報について適切な保護措置を講ずる体制を整備しているクラウド事業者などを評価して，事業活動に関してプライバシーマークの使用を認める制度', '利用者がクラウドサービスへログインするときの環境，IPアドレスなどに基づいて状況を分析し，リスクが高いと判断された場合に追加の認証を行う仕組み'],
        'answer': 1,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Mô tả nào phù hợp với <strong>Chứng nhận An ninh Đám mây ISMS (<code>ISMSクラウドセキュリティ認証</code>)</strong>?</li>' +
                         '<li><strong>ア.</strong> Cơ chế xác thực 1 lần (<code>一度認証</code>) để dùng nhiều dịch vụ (<code>複数のクラウドサービス</code>).</li>' +
                         '<li><strong>イ.</strong> Hệ thống chứng nhận rằng các <strong>biện pháp kiểm soát đặc thù của dịch vụ đám mây (<code>クラウドサービス固有の管理策</code>)</strong> đã được thực hiện.</li>' +
                         '<li><strong>ウ.</strong> Hệ thống đánh giá các nhà cung cấp cloud... và cấp <strong>Privacy Mark (<code>プライバシーマーク</code>)</strong>.</li>' +
                         '<li><strong>エ.</strong> Cơ chế yêu cầu <strong>xác thực bổ sung (<code>追加の認証</code>)</strong> nếu phát hiện rủi ro (ví dụ: IP lạ).</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. ❌ Sai.</strong> Đăng nhập một lần cho nhiều dịch vụ là <strong>Single Sign-On (SSO)</strong> hoặc <strong>Federation (<code>認証連携</code>)</strong>.</li>' +
                         '<li><strong>イ. ✅ Đúng.</strong> Chứng nhận ISMS (ISO 27001) là nền tảng chung. <strong>Chứng nhận an ninh đám mây ISMS</strong> (dựa trên ISO 27017) là một chứng nhận bổ sung (add-on), xác nhận rằng nhà cung cấp dịch vụ đám mây đã triển khai các <strong>biện pháp kiểm soát đặc thù (<code>固有の管理策</code>)</strong> dành riêng cho môi trường <strong>Cloud (<code>クラウド</code>)</strong> (ví dụ: cách ly dữ liệu khách hàng).</li>' +
                         '<li><strong>ウ. ❌ Sai.</strong> Đánh giá việc bảo vệ thông tin cá nhân (<code>個人情報</code>) là chứng nhận <strong>Privacy Mark (<code>プライバシーマーク</code>)</strong>.</li>' +
                         '<li><strong>エ. ❌ Sai.</strong> Yêu cầu xác thực bổ sung khi phát hiện rủi ro (<code>リスクが高い</code>) là <strong>Xác thực dựa trên rủi ro (<code>リスクベース認証</code> - Risk-based Authentication)</strong> hoặc <strong>Xác thực thích ứng (Adaptive Authentication)</strong>.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>ISMSクラウド</code> (ISMS Cloud)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> Đây là chứng nhận ISMS nhưng có thêm chữ "Cloud" → Nó phải liên quan đến các biện pháp kiểm soát <strong>đặc thù của Cloud (<code>クラウド固有</code>)</strong>.</li></ul>'
      },
      {
        'question': '一つの表で管理されていた受注データを，受注に関する情報と商品に関する情報に分割して，正規化を行った上で関係データベースの表で管理する。正規化を行った結果の表の組合せとして，最も適切なものはどれか。ここで，同一商品で単価が異なるときは商品番号も異なるものとする。また，発注者名には同姓同名はいないものとする。<div class=\'img_margin\'><img src=\'img/81.png\' width=\'369\' height=\'138\' alt=\'81.png/image-size:369×138\'></div>',
        'options': ['<img src=\'img/81a.png\' width=\'306\' height=\'68\' alt=\'81a.png/image-size:306×68\'>', '<img src=\'img/81i.png\' width=\'306\' height=\'69\' alt=\'81i.png/image-size:306×69\'>', '<img src=\'img/81u.png\' width=\'306\' height=\'69\' alt=\'81u.png/image-size:306×69\'>', '<img src=\'img/81e.png\' width=\'306\' height=\'69\' alt=\'81e.png/image-size:306×69\'>'],
        'answer': 3,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Dữ liệu đơn hàng đang được quản lý trong 1 bảng. Hãy <strong>chuẩn hóa (<code>正規化</code>)</strong> bằng cách tách (<code>分割</code>) nó thành thông tin Đơn hàng và thông tin Sản phẩm. Đâu là kết quả đúng?</li>' +
                         '<li><strong>Bảng gốc:</strong> {Mã ĐH, Tên người đặt, <u>Mã SP, Tên SP, Đơn giá</u>, Số lượng}</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<p>Mục tiêu của <strong>chuẩn hóa (<code>正規化</code>)</strong> là loại bỏ sự lặp lại dữ liệu (redundancy) và các vấn đề về phụ thuộc hàm.</p>' +
                         '<p>Nhìn vào bảng gốc, ta thấy thông tin về sản phẩm (Tên SP, Đơn giá) bị <strong>lặp lại (dư thừa)</strong> mỗi khi sản phẩm đó được đặt hàng. Ví dụ, "Nước ép" 100 yên bị lặp lại 2 lần. Nếu giá "Nước ép" thay đổi, ta phải sửa ở nhiều nơi.</p>' +
                         '<p>Để giải quyết (đạt dạng chuẩn 2NF/3NF), chúng ta cần tách bảng gốc thành 2 bảng:</p>' +
                         '<ol><li><strong>Bảng Sản phẩm (<code>商品</code>):</strong> Chứa thông tin chỉ phụ thuộc vào <code>Mã SP</code>. Các cột sẽ là: {<strong>Mã SP</strong> (Khóa chính), Tên SP, Đơn giá}.</li>' +
                         '<li><strong>Bảng Đơn hàng (<code>受注</code>):</strong> Chứa thông tin về đơn hàng. Nó cần giữ lại <code>Mã SP</code> (làm khóa ngoại) để biết đơn hàng đó mua sản phẩm gì. Các cột sẽ là: {<strong>Mã ĐH</strong> (Khóa chính), Tên người đặt, <em>Mã SP</em> (Khóa ngoại), Số lượng}.</li></ol>' +
                         '<p>Cấu trúc này khớp với đáp án <strong>エ</strong>. Nó loại bỏ được sự dư thừa dữ liệu (thông tin "Nước ép" chỉ lưu 1 lần) và đảm bảo tính nhất quán.</p>"s"' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>正規化</code> (Chuẩn hóa)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> Chuẩn hóa là "tách những gì lặp đi lặp lại ra một bảng riêng". Ở đây, thông tin (Tên SP, Đơn giá) bị <strong>lặp lại</strong> theo <code>Mã SP</code>, nên cần tách {Mã SP, Tên SP, Đơn giá} ra một bảng riêng (Bảng Sản phẩm).</li></ul>'
      },
      {
        'question': 'OSS(Open Source Software)に関する記述として，適切なものだけを全て挙げたものはどれか。<br><br><ol type=\'a\'><li>OSSを利用して作成したソフトウェアを販売することができる。</li><li>ソースコードが公開されたソフトウェアは全てOSSである。</li><li>著作権が放棄されているソフトウェアである。</li></ol>',
        'options': ['a', 'a，b', 'b，c', 'c'],
        'answer': 0,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Đâu là tất cả các mô tả đúng về <strong>OSS (Phần mềm mã nguồn mở)</strong>?</li>' +
                         '<li><strong>a.</strong> Có thể <strong>bán (<code>販売</code>)</strong> phần mềm được tạo ra bằng cách sử dụng OSS.</li>' +
                         '<li><strong>b.</strong> <strong>Tất cả (<code>全て</code>)</strong> phần mềm có mã nguồn công khai (<code>ソースコードが公開</code>) đều là OSS.</li>' +
                         '<li><strong>c.</strong> Là phần mềm đã <strong>từ bỏ (<code>放棄</code>) bản quyền (<code>著作権</code>)</strong>.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>a. ✅ Đúng.</strong> Giấy phép của OSS (ví dụ: MIT, GPL) cho phép tự do sửa đổi và phân phối lại, bao gồm cả việc bán (<code>販売</code>) phần mềm đó (miễn là tuân thủ các điều kiện của giấy phép, ví dụ như GPL yêu cầu phải công khai mã nguồn của phần mềm đã sửa đổi).</li>' +
                         '<li><strong>b. ❌ Sai.</strong> Một phần mềm có mã nguồn được công khai (ví dụ: "source-available") nhưng không đi kèm với giấy phép cho phép tự do sử dụng, sửa đổi, phân phối lại thì <strong>không được coi là OSS</strong>. OSS phải tuân thủ 10 định nghĩa của Open Source Initiative (OSI).</li>' +
                         '<li><strong>c. ❌ Sai.</strong> Đây là hiểu lầm phổ biến. OSS vẫn có <strong>bản quyền (<code>著作権</code>)</strong>. Người tạo ra nó vẫn là chủ sở hữu, họ chỉ cấp cho người khác quyền sử dụng rộng rãi thông qua một giấy phép mở. Phần mềm đã từ bỏ hoàn toàn bản quyền (<code>著作権放棄</code>) được gọi là <strong>Public Domain (<code>パブリックドメイン</code>)</strong>.</li></ul>' +
                         '<p>=> Vậy, chỉ có (a) là đúng.</p>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>OSS</code> (Mã nguồn mở)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> "Mã nguồn mở" (OSS) <strong>không có nghĩa là</strong> "Miễn phí" (Free beer) và <strong>không có nghĩa là</strong> "Vô chủ" (Public Domain / <code>著作権放棄</code>). Nó có nghĩa là "Tự do" (Free speech) và vẫn có bản quyền.</li></ul>'
      },
      {
        'question': '企業などの内部ネットワークとインターネットとの間にあって，セキュリティを確保するために内部ネットワークのPCに代わって，インターネット上のWebサーバにアクセスするものはどれか。',
        'options': ['DNSサーバ', 'NTPサーバ', 'ストリーミングサーバ', 'プロキシサーバ'],
        'answer': 3,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Thiết bị nào nằm giữa mạng nội bộ và Internet, <strong>thay mặt (<code>代わって</code>)</strong> cho các PC trong mạng truy cập ra các máy chủ web bên ngoài để đảm bảo an ninh?</li>' +
                         '<li><strong>ア.</strong> DNS Server</li>' +
                         '<li><strong>イ.</strong> NTP Server</li>' +
                         '<li><strong>ウ.</strong> Streaming Server</li>' +
                         '<li><strong>エ.</strong> Proxy Server</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. DNSサーバ:</strong> ❌ Sai. Dùng để phân giải tên miền (<code>ドメイン名</code>) thành địa chỉ IP (xem Q57).</li>' +
                         '<li><strong>イ. NTPサーバ (Network Time Protocol):</strong> ❌ Sai. Dùng để đồng bộ thời gian (<code>時刻</code>) cho các thiết bị trong mạng.</li>' +
                         '<li><strong>ウ. ストリーミングサーバ (Streaming Server):</strong> ❌ Sai. Dùng để phát video/audio (<code>ストリーミング</code>) trực tuyến.</li>' +
                         '<li><strong>エ. プロキシサーバ (Proxy Server):</strong> ✅ <strong>Đúng.</strong> "Proxy" (<code>プロキシ</code>) có nghĩa là "người đại diện" hay "người thay mặt". <strong>Proxy Server</strong> hoạt động như một người "đại diện", đứng giữa mạng nội bộ và Internet. Các máy tính trong mạng nội bộ gửi yêu cầu đến proxy, và proxy sẽ <strong>thay mặt chúng (<code>PCに代わって</code>)</strong> để kết nối ra Internet. Điều này giúp che giấu địa chỉ IP thật của máy nội bộ và cho phép quản trị viên lọc nội dung (access control) và lưu cache.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>プロキシ</code> (Proxy), <code>PCに代わって</code> (Thay mặt cho PC)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> <strong>Proxy = Đại diện / Thay mặt (<code>代わって</code>)</strong>.</li></ul>'
      },
      {
        'question': '利用者がスマートスピーカーに向けて話し掛けた内容に対して，スマートスピーカーから音声で応答するための処理手順が(1)～(4)のとおりであるとき，音声認識に該当する処理はどれか。<ul><li class=\'li1\'>利用者の音声をテキストデータに変換する。</li><li class=\'li2\'>テキストデータを解析して，その意味を理解する。</li><li class=\'li3\'>応答する内容を決定して，テキストデータを生成する。</li><li class=\'li4\'>生成したテキストデータを読み上げる。</li></ul>',
        'options': ['(1)', '(2)', '(3)', '(4)'],
        'answer': 0,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Cho 4 bước xử lý của Loa thông minh (Smart Speaker). Bước nào là <strong>Nhận dạng giọng nói (<code>音声認識</code>)</strong>?</li>' +
                         '<li><strong>(1)</strong> Chuyển đổi <strong>giọng nói (<code>音声</code>)</strong> của người dùng thành <strong>văn bản (<code>テキスト</code>)</strong>.</li>' +
                         '<li><strong>(2)</strong> Phân tích văn bản (<code>テキスト</code>) để hiểu ý nghĩa (<code>意味を理解</code>).</li>' +
                         '<li><strong>(3)</strong> Quyết định nội dung trả lời và tạo ra văn bản (<code>テキストを生成</code>).</li>' +
                         '<li><strong>(4)</strong> Đọc to (<code>読み上げる</code>) văn bản đã tạo.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<p>Quá trình hoạt động của loa thông minh:</p>' +
                         '<ul><li><strong>(1) ✅ Đúng.</strong> <strong>Nhận dạng giọng nói (<code>音声認識</code> - Speech Recognition)</strong> (hay còn gọi là Speech-to-Text, STT) chính là quá trình máy tính "nghe" <strong>giọng nói (<code>音声</code>)</strong> và "chép" lại thành <strong>văn bản (<code>テキスト</code>)</strong>.</li>' +
                         '<li><strong>(2) ❌ Sai.</strong> Phân tích văn bản để hiểu ý nghĩa là <strong>Xử lý ngôn ngữ tự nhiên (<code>自然言語処理</code> - NLP)</strong>, cụ thể là phần Hiểu (NLU - Natural Language Understanding).</li>' +
                         '<li><strong>(3) ❌ Sai.</strong> Tạo ra văn bản trả lời là <strong>Xử lý ngôn ngữ tự nhiên (<code>自然言語処理</code>)</strong>, cụ thể là phần Tạo (NLG - Natural Language Generation).</li>' +
                         '<li><strong>(4) ❌ Sai.</strong> Đọc văn bản thành giọng nói là <strong>Tổng hợp giọng nói (<code>音声合成</code> - Speech Synthesis / Text-to-Speech, TTS)</strong>.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>音声認識</code> (Nhận dạng giọng nói)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ (Luồng xử lý của AI):</strong></li>' +
                         '<ul><li><strong><code>音声</code> (Voice) → [<code>音声認識</code> - Speech Recognition] → <code>テキスト</code> (Text)</strong></li>' +
                         '<li><code>テキスト</code> (Text) → [<code>自然言語処理</code> - NLP] → <code>テキスト</code> (Text)</li>' +
                         '<li><code>テキスト</code> (Text) → [<code>音声合成</code> - Speech Synthesis] → <code>音声</code> (Voice)</li></ul></ul>'
      },
      {
        'question': '出所が不明のプログラムファイルの使用を避けるために，その発行元を調べたい。このときに確認する情報として，適切なものはどれか。',
        'options': ['そのプログラムファイルのアクセス権', 'そのプログラムファイルの所有者情報', 'そのプログラムファイルのデジタル署名', 'そのプログラムファイルのハッシュ値'],
        'answer': 2,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Để tránh sử dụng một tệp chương trình không rõ nguồn gốc (<code>出所が不明</code>), bạn cần kiểm tra thông tin nào để xác minh <strong>nhà phát hành (<code>発行元</code>)</strong>?</li>' +
                         '<li><strong>ア.</strong> Quyền truy cập (<code>アクセス権</code>) của tệp.</li>' +
                         '<li><strong>イ.</strong> Thông tin chủ sở hữu (<code>所有者情報</code>) của tệp.</li>' +
                         '<li><strong>ウ.</strong> <strong>Chữ ký số (<code>デジタル署名</code>)</strong> của tệp.</li>' +
                         '<li><strong>エ.</strong> Giá trị hash (<code>ハッシュ値</code>) của tệp.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア, イ. ❌ Không đáng tin.</strong> Quyền truy cập và thông tin chủ sở hữu của tệp trên hệ điều hành có thể dễ dàng bị thay đổi hoặc giả mạo.</li>' +
                         '<li><strong>ウ. ✅ Đáng tin nhất.</strong> <strong>Chữ ký số (<code>デジタル署名</code> - Digital Signature)</strong> là một cơ chế mã hóa (dùng PKI) cho phép xác minh hai điều:</li>' +
                         '<ul><li><strong>Tính toàn vẹn (<code>完全性</code>):</strong> Tệp không bị thay đổi kể từ khi được ký.</li>' +
                         '<li><strong>Xác thực (<code>認証</code>):</strong> Người ký (<strong><code>発行元</code> - nhà phát hành</strong>, ví dụ: Microsoft, Apple) chính là người sở hữu chứng chỉ số đó (được CA xác nhận).</li></ul>' +
                         '<li><strong>エ. ❌ Sai mục đích.</strong> <strong>Giá trị hash (<code>ハッシュ値</code>)</strong> chỉ dùng để kiểm tra <strong>tính toàn vẹn</strong> (xem tệp có bị thay đổi không, ví dụ: so sánh hash bạn tính với hash trên trang chủ), chứ nó <strong>không thể</strong> cho biết <strong>ai (<code>発行元</code>)</strong> đã tạo ra nó.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>発行元を調べたい</code> (Muốn kiểm tra nhà phát hành)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ (Phân biệt Hash và Signature):</strong></li>' +
                         '<ul><li><strong>Hash (<code>ハッシュ値</code>):</strong> "Dấu vân tay" của tệp. Chỉ để kiểm tra xem tệp có <strong>nguyên vẹn</strong> không.</li>' +
                         '<li><strong>Signature (<code>デジタル署名</code>):</strong> "Chữ ký đóng dấu" của công ty. Dùng để kiểm tra tệp có <strong>nguyên vẹn</strong> VÀ có <strong>đúng chủ (<code>発行元</code>)</strong> không.</li></ul></ul>'
      },
      {
        'question': 'スマートフォンなどのタッチパネルで広く採用されている方式であり，指がタッチパネルの表面に近づいたときに，その位置を検出する方式はどれか。',
        'options': ['感圧式', '光学式', '静電容量方式', '電磁誘導方式'],
        'answer': 2,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Loại màn hình cảm ứng (<code>タッチパネル</code>) nào được sử dụng rộng rãi trên <strong>smartphone (<code>スマートフォン</code>)</strong>, hoạt động bằng cách phát hiện vị trí khi <strong>ngón tay (<code>指</code>)</strong> chạm vào bề mặt?</li>' +
                         '<li><strong>ア.</strong> Cảm ứng điện trở (<code>感圧式</code>)</li>' +
                         '<li><strong>イ.</strong> Cảm ứng quang học (<code>光学式</code>)</li>' +
                         '<li><strong>ウ.</strong> Cảm ứng điện dung (<code>静電容量方式</code>)</li>' +
                         '<li><strong>エ.</strong> Cảm ứng điện từ (<code>電磁誘導方式</code>)</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. 感圧式 (Resistive - Cảm ứng điện trở):</strong> ❌ Sai. (<code>圧</code> = Áp lực). Hoạt động dựa trên <strong>áp lực nhấn</strong>, cần phải nhấn (bằng ngón tay, móng tay, hoặc bút stylus) để hai lớp màng chạm vào nhau. Công nghệ này cũ, rẻ tiền, không nhạy, không hỗ trợ đa điểm. (Ví dụ: Nintendo DS, máy POS cũ).</li>' +
                         '<li><strong>イ. 光学式 (Optical - Cảm ứng quang học):</strong> ❌ Sai. (<code>光</code> = Ánh sáng). Dùng camera hoặc tia hồng ngoại (IR) ở các cạnh để phát hiện vật cản. Thường dùng cho các màn hình rất lớn (bảng tương tác).</li>' +
                         '<li><strong>ウ. 静電容量方式 (Capacitive - Cảm ứng điện dung):</strong> ✅ <strong>Đúng.</strong> Đây là công nghệ được sử dụng trên <strong>hầu hết các smartphone (<code>スマートフォン</code>) và máy tính bảng</strong> hiện nay. Nó hoạt động bằng cách phát hiện sự thay đổi <strong>điện dung (<code>静電容量</code>)</strong> (tĩnh điện) trên màn hình khi vật dẫn điện (như <strong>ngón tay <code>指</code></strong>) chạm vào. Rất nhạy và hỗ trợ đa điểm.</li>' +
                         '<li><strong>エ. 電磁誘導方式 (Electromagnetic - Cảm ứng điện từ):</strong> ❌ Sai. (<code>電磁</code> = Điện từ). Yêu cầu một cây <strong>bút cảm ứng chuyên dụng (<code>専用ペン</code>)</strong> (như S Pen của Samsung Note) để tạo ra tín hiệu điện từ.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>スマートフォン</code> (Smartphone), <code>指</code> (Ngón tay)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> <strong>Smartphone = Cảm ứng điện dung (<code>静電容量方式</code>)</strong>. (Phân biệt với <code>感圧式</code> (loại cũ, phải nhấn) và <code>電磁誘導方式</code> (phải dùng bút)).</li></ul>'
      },
      {
        'question': '情報セキュリティの3要素である機密性，完全性及び可用性と，それらを確保するための対策の例a～cの適切な組合せはどれか。<br><br><ol type=\'a\'><li>アクセス制御</li><li>デジタル署名</li><li>ディスクの二重化</li></ol><br><img src=\'img/75.png\' width=\'213\' height=\'153\' alt=\'75.png/image-size:213×153\'>',
        'options': ['ア', 'イ', 'ウ', 'エ'],
        'answer': 3,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Hãy ghép nối 3 yếu tố của an ninh thông tin (CIA: <code>機密性</code>, <code>完全性</code>, <code>可用性</code>) với các biện pháp bảo vệ (a, b, c).</li>' +
                         '<li><strong>a.</strong> Kiểm soát truy cập (<code>アクセス制御</code>)</li>' +
                         '<li><strong>b.</strong> Chữ ký số (<code>デジタル署名</code>)</li>' +
                         '<li><strong>c.</strong> Nhân đôi/Sao lưu đĩa (<code>ディスクの二重化</code>)</li></ul>' +
                         '<hr><h3><strong>Phân tích (CIA Triad)</strong></h3>' +
                         '<ul><li><strong><code>機密性</code> (Confidentiality - Tính Bảo mật):</strong> Đảm bảo chỉ người có quyền mới được *xem* thông tin. Biện pháp <strong>(a) Kiểm soát truy cập (<code>アクセス制御</code>)</strong> (ví dụ: đặt mật khẩu, phân quyền) là để thực hiện điều này.</li>' +
                         '<li><strong><code>完全性</code> (Integrity - Tính Toàn vẹn):</strong> Đảm bảo thông tin *chính xác*, không bị *sửa đổi* trái phép. Biện pháp <strong>(b) Chữ ký số (<code>デジタル署名</code>)</strong> (hoặc hash) được dùng để xác minh rằng dữ liệu không bị thay đổi trên đường truyền.</li>' +
                         '<li><strong><code>可用性</code> (Availability - Tính Sẵn sàng):</strong> Đảm bảo hệ thống *luôn chạy*, luôn sẵn sàng khi cần sử dụng. Biện pháp <strong>(c) Nhân đôi đĩa (<code>ディスクの二重化</code>)</strong> (ví dụ: dùng RAID 1) là để nếu một đĩa hỏng, đĩa còn lại vẫn hoạt động, đảm bảo tính sẵn sàng.</li></ul>' +
                         '<p>=> Ghép nối lại: a = <code>機密性</code>, b = <code>完全性</code>, c = <code>可用性</code>. Tổ hợp này tương ứng với đáp án <strong>エ</strong>.</p>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Mẹo ghi nhớ (CIA Triad):</strong></li>' +
                         '<ul><li><strong><code>機密性</code> (Bảo mật)</strong> = Ai được <strong>XEM</strong>? → <strong><code>アクセス制御</code> (Access Control)</strong>.</li>' +
                         '<li><strong><code>完全性</code> (Toàn vẹn)</strong> = Có bị <strong>SỬA</strong> không? → <strong><code>デジタル署名</code> (Chữ ký số) / Hash</strong>.</li>' +
                         '<li><strong><code>可用性</code> (Sẵn sàng)</strong> = Có <strong>CHẠY</strong> không? → <strong><code>二重化</code> (Dự phòng / Redundancy) / Backup</strong>.</li></ul></ul>'
      },
      {
        'question': 'トランザクション処理に関する記述のうち，適切なものはどれか。',
        'options': ['コミットとは，トランザクションが正常に処理されなかったときに，データベースをトランザクション開始前の状態に戻すことである。', '排他制御とは，トランザクションが正常に処理されたときに，データベースの内容を確定させることである。', 'ロールバックとは，複数のトランザクションが同時に同一データを更新しようとしたときに，データの矛盾が起きないようにすることである。', 'ログとは，データベースの更新履歴を記録したファイルのことである。'],
        'answer': 3,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Mô tả nào đúng về xử lý giao dịch (Transaction)?</li>' +
                         '<li><strong>ア.</strong> <strong>Commit</strong> là hành động quay về trạng thái ban đầu khi giao dịch thất bại.</li>' +
                         '<li><strong>イ.</strong> <strong>Kiểm soát độc quyền (<code>排他制御</code>)</strong> là hành động xác nhận thay đổi khi giao dịch thành công.</li>' +
                         '<li><strong>ウ.</strong> <strong>Rollback</strong> là hành động ngăn chặn mâu thuẫn dữ liệu khi nhiều giao dịch cập nhật cùng lúc.</li>' +
                         '<li><strong>エ.</strong> <strong>Log (<code>ログ</code>)</strong> là tệp ghi lại lịch sử cập nhật (<code>更新履歴</code>) của cơ sở dữ liệu.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. ❌ Sai.</strong> Hành động quay về trạng thái ban đầu khi thất bại là <strong>Rollback (<code>ロールバック</code>)</strong>. (<strong>Commit</strong> là xác nhận thành công).</li>' +
                         '<li><strong>イ. ❌ Sai.</strong> Hành động xác nhận thay đổi khi thành công là <strong>Commit (<code>コミット</code>)</strong>. (<strong>Kiểm soát độc quyền - <code>排他制御</code></strong> - là cơ chế khóa (locking) dữ liệu).</li>' +
                         '<li><strong>ウ. ❌ Sai.</strong> Hành động ngăn chặn mâu thuẫn khi nhiều giao dịch cùng lúc là <strong>Kiểm soát độc quyền (<code>排他制御</code> - Exclusive Control)</strong> hoặc Kiểm soát tương tranh (<code>同時実行制御</code>). (<strong>Rollback</strong> là hủy bỏ giao dịch).</li>' +
                         '<li><strong>エ. ✅ Đúng.</strong> <strong>Log (<code>ログ</code> - Nhật ký)</strong> là một tệp ghi lại tuần tự tất cả các thay đổi (lịch sử cập nhật - <code>更新履歴</code>) được thực hiện trên cơ sở dữ liệu (ví dụ: "trước khi thay đổi" và "sau khi thay đổi"). Nó rất quan trọng cho việc phục hồi (recovery) và rollback.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Mẹo ghi nhớ các thuật ngữ Transaction:</strong></li>' +
                         '<ul><li><strong>Commit (<code>コミット</code>):</strong> Lưu thành công.</li>' +
                         '<li><strong>Rollback (<code>ロールバック</code>):</strong> Hủy bỏ, quay lại (khi thất bại).</li>' +
                         '<li><strong>Locking / <code>排他制御</code> (Kiểm soát độc quyền):</strong> Khóa để tránh xung đột.</li>' +
                         '<li><strong>Log (<code>ログ</code>):</strong> Sổ ghi chép lịch sử (<code>履歴</code>).</li></ul></ul>'
      },
      {
        'question': 'IoT機器のセキュリティ対策のうち，ソーシャルエンジニアリング対策として，最も適切なものはどれか。',
        'options': ['IoT機器とサーバとの通信は，盗聴を防止するために常に暗号化通信で行う。', 'IoT機器の脆弱性を突いた攻撃を防止するために，機器のメーカーから最新のファームウェアを入手してアップデートを行う。', 'IoT機器へのマルウェア感染を防止するためにマルウェア対策ソフトを導入する。', 'IoT機器を廃棄するときは，内蔵されている記憶装置からの情報漏えいを防止するために物理的に破壊する。'],
        'answer': 3,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Đâu là biện pháp chống lại <strong>Tấn công phi kỹ thuật (<code>ソーシャルエンジニアリング</code>)</strong> đối với thiết bị IoT?</li>' +
                         '<li><strong>ア.</strong> Mã hóa (<code>暗号化</code>) đường truyền để chống nghe lén.</li>' +
                         '<li><strong>イ.</strong> Cập nhật (<code>アップデート</code>) firmware mới nhất để vá lỗ hổng (<code>脆弱性</code>).</li>' +
                         '<li><strong>ウ.</strong> Cài đặt phần mềm (<code>ソフト</code>) chống mã độc (<code>マルウェア</code>).</li>' +
                         '<li><strong>エ.</strong> Khi <strong>vứt bỏ (<code>廃棄</code>)</strong> thiết bị, <strong>phá hủy vật lý (<code>物理的に破壊</code>)</strong> bộ nhớ để chống rò rỉ thông tin.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<p><strong>Tấn công phi kỹ thuật (Social Engineering)</strong> là kiểu tấn công dựa vào việc lừa đảo, thao túng tâm lý con người, hoặc các phương pháp *không dùng công nghệ cao* (như lục thùng rác) để lấy thông tin.</p>' +
                         '<ul><li><strong>ア, イ, ウ. ❌ Sai.</strong> Mã hóa, cập nhật firmware, cài anti-malware đều là các biện pháp <strong>kỹ thuật (<code>技術的</code>)</strong> để chống lại các cuộc tấn công <strong>kỹ thuật</strong> (nghe lén, khai thác lỗ hổng, mã độc).</li>' +
                         '<li><strong>エ. ✅ Đúng.</strong> "Lục thùng rác" (Dumpster Diving) để tìm các thiết bị cũ bị <strong>vứt bỏ (<code>廃棄</code>)</strong> là một hình thức tấn công phi kỹ thuật. Việc <strong>phá hủy vật lý (<code>物理的に破壊</code>)</strong> thiết bị khi vứt bỏ là một biện pháp (<code>物理的対策</code> - an ninh vật lý) để ngăn chặn kiểu tấn công phi kỹ thuật này.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>ソーシャルエンジニアリング</code> (Social Engineering)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> Social Engineering = Tấn công vào <strong>Con người (<code>人的</code>)</strong> / <strong>Vật lý (<code>物理的</code>)</strong> (những thứ phi kỹ thuật). Hãy tìm đáp án không liên quan đến phần mềm, mã hóa, hay lỗ hổng. "Phá hủy vật lý" (<code>物理的に破壊</code>) là một biện pháp an ninh vật lý.</li></ul>'
      },
      {
        'question': 'バイオメトリクス認証の例だけを全て挙げたものはどれか。<br><br><ol type=\'a\'><li>Webページに歪んだ文字の列から成る画像を表示し，読み取った文字列を利用者に入力させることによって，認証を行う。</li><li>キーボードで特定文字列を入力させ，そのときの打鍵の速度やタイミングの変化によって，認証を行う。</li><li>タッチパネルに手書きで氏名を入力させ，そのときの筆跡，筆圧，運筆速度などによって，認証を行う。</li><li>タッチパネルに表示された複数の点をあらかじめ決められた順になぞらせることによって，認証を行う。</li></ol>',
        'options': ['a，b', 'a，d', 'b，c', 'c，d'],
        'answer': 2,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Đâu là tất cả các ví dụ về <strong>Xác thực sinh trắc học (<code>バイオメトリクス認証</code>)</strong>?</li>' +
                         '<li><strong>a.</strong> Hiển thị chuỗi ký tự bị làm méo (<code>歪んだ文字</code>) và yêu cầu người dùng nhập lại.</li>' +
                         '<li><strong>b.</strong> Yêu cầu nhập một chuỗi, và xác thực dựa trên <strong>tốc độ, nhịp điệu (<code>速度やタイミング</code>)</strong> gõ phím.</li>' +
                         '<li><strong>c.</strong> Yêu cầu viết tay tên lên màn hình, và xác thực dựa trên <strong>nét chữ (<code>筆跡</code>), lực nhấn (<code>筆圧</code>)</strong>, tốc độ viết.</li>' +
                         '<li><strong>d.</strong> Yêu cầu nối các điểm (<code>点</code>) trên màn hình theo một <strong>thứ tự (<code>順</code>)</strong> đã định trước.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<p><strong>Xác thực sinh trắc học (Biometrics)</strong> dựa trên các đặc điểm độc nhất của cơ thể hoặc hành vi con người (Cái <strong>Là</strong> bạn).</p>' +
                         '<ul><li><strong>a. ❌ Sai.</strong> Nhập lại các ký tự bị làm méo là cơ chế <strong>CAPTCHA</strong>, dùng để phân biệt người (<code>人間</code>) và máy (<code>ボット</code>), không phải để xác thực *danh tính* một cá nhân.</li>' +
                         '<li><strong>b. ✅ Sinh trắc học hành vi (<code>行動バイオメトリクス</code>).</strong> Phân tích <strong>nhịp điệu gõ phím (<code>打鍵</code>)</strong> là một dạng xác thực dựa trên hành vi (cách bạn gõ phím là duy nhất).</li>' +
                         '<li><strong>c. ✅ Sinh trắc học hành vi (<code>行動バイオメトリクス</code>).</strong> Phân tích <strong>chữ ký tay (<code>筆跡</code>, <code>筆圧</code>)</strong> cũng là một dạng xác thực dựa trên hành vi (cách bạn ký tên là duy nhất).</li>' +
                         '<li><strong>d. ❌ Sai.</strong> Vẽ một hình mẫu (Pattern Lock) là xác thực dựa trên <strong>Kiến thức (<code>知識</code>)</strong> (Cái bạn <strong>biết</strong>/nhớ), không phải sinh trắc học.</li></ul>' +
                         '<p>=> Vậy, b và c là các ví dụ về xác thực sinh trắc học.</p>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>バイオメトリクス</code> (Biometrics - Sinh trắc học)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ (2 loại Biometrics):</strong></li>' +
                         '<ul><li><strong>Sinh trắc cơ thể (<code>身体的</code>):</strong> Vân tay (<code>指紋</code>), Mống mắt (<code>虹彩</code>), Khuôn mặt (<code>顔</code>), Tĩnh mạch (<code>静脈</code>).</li>' +
                         '<li><strong>Sinh trắc hành vi (<code>行動的</code>):</strong> Chữ ký (<code>筆跡</code>), Nhịp gõ phím (<code>打鍵</code>), Giọng nói (<code>声紋</code>).</li></ul>' +
                         '<li>(Phân biệt với <strong>CAPTCHA</strong> = Chống bot; <strong>Pattern Lock</strong> = Yếu tố kiến thức).</li></ul>'
      },
      {
        'question': 'インターネットで使用されているドメイン名の説明として，適切なものはどれか。',
        'options': ['Web閲覧や電子メールを送受信するアプリケーションが使用する通信規約の名前', 'コンピュータやネットワークなどを識別するための名前', '通信を行うアプリケーションを識別するための名前', '電子メールの宛先として指定する相手の名前'],
        'answer': 1,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Mô tả nào phù hợp với <strong>Tên miền (<code>ドメイン名</code> - Domain Name)</strong>?</li>' +
                         '<li><strong>ア.</strong> Tên của quy tắc (<code>規約</code>) giao tiếp mà các ứng dụng (web, mail) sử dụng.</li>' +
                         '<li><strong>イ.</strong> <strong>Tên (<code>名前</code>)</strong> dùng để <strong>nhận dạng (<code>識別するため</code>)</strong> máy tính hoặc mạng lưới.</li>' +
                         '<li><strong>ウ.</strong> Tên dùng để nhận dạng ứng dụng (<code>アプリケーション</code>) đang giao tiếp.</li>' +
                         '<li><strong>エ.</strong> Tên của đối phương được chỉ định trong địa chỉ email.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. ❌ Sai.</strong> Quy tắc (<code>規約</code>) giao tiếp là <strong>Giao thức (<code>プロトコル</code> - Protocol)</strong> (ví dụ: HTTP, SMTP).</li>' +
                         '<li><strong>イ. ✅ Đúng.</strong> Tên miền (ví dụ: `google.com`) là một cái <strong>tên (<code>名前</code>)</strong> dễ nhớ cho con người, được dùng để <strong>nhận dạng (<code>識別</code>)</strong> một máy tính (server) hoặc mạng lưới trên Internet, thay thế cho địa chỉ IP (ví dụ: `8.8.8.8`) khó nhớ.</li>' +
                         '<li><strong>ウ. ❌ Sai.</strong> Tên (số) để nhận dạng ứng dụng (<code>アプリケーション</code>) là <strong>Số cổng (<code>ポート番号</code> - Port Number)</strong> (ví dụ: 80, 443).</li>' +
                         '<li><strong>エ. ❌ Sai.</strong> Tên của đối phương (ví dụ: `username` trong `username@example.com`) là <strong>Tên người dùng (<code>ユーザ名</code>)</strong>.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>ドメイン名</code> (Domain Name)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ (Phân biệt 3 khái niệm):</strong></li>' +
                         '<ul><li><strong>Tên miền (<code>ドメイン名</code>)</strong> = Tên máy chủ (<code>google.com</code>).</li>' +
                         '<li><strong>Địa chỉ IP (<code>IPアドレス</code>)</strong> = Địa chỉ máy chủ (<code>8.8.8.8</code>).</li>' +
                         '<li><strong>Số cổng (<code>ポート番号</code>)</strong> = Tên dịch vụ trên máy chủ đó (<code>443</code>).</li></ul></ul>'
      },
      {
        'question': 'ESSIDをステルス化することによって得られる効果として，適切なものはどれか。',
        'options': ['アクセスポイントと端末間の通信を暗号化できる。', 'アクセスポイントに接続してくる端末を認証できる。', 'アクセスポイントへの不正接続リスクを低減できる。', 'アクセスポイントを介さず，端末同士で直接通信できる。'],
        'answer': 2,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Hiệu quả của việc <strong>"ẩn" SSID (<code>ESSIDをステルス化</code>)</strong> là gì?</li>' +
                         '<li><strong>ア.</strong> Có thể mã hóa (<code>暗号化</code>) giao tiếp.</li>' +
                         '<li><strong>イ.</strong> Có thể xác thực (<code>認証</code>) thiết bị đầu cuối.</li>' +
                         '<li><strong>ウ.</strong> Có thể <strong>giảm thiểu rủi ro (<code>リスクを低減</code>)</strong> bị kết nối trái phép.</li>' +
                         '<li><strong>エ.</strong> Có thể giao tiếp trực tiếp (<code>直接通信</code>) giữa các thiết bị mà không cần AP.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. ❌ Sai.</strong> Mã hóa là chức năng của <strong>WPA2/WPA3 (<code>暗号化</code>)</strong>.</li>' +
                         '<li><strong>イ. ❌ Sai.</strong> Xác thực là chức năng của <strong>PSK (Pre-Shared Key)</strong> hoặc <strong>IEEE 802.1X</strong>.</li>' +
                         '<li><strong>ウ. ✅ Đúng.</strong> "Stealth" (<code>ステルス</code>) có nghĩa là tàng hình. Ẩn SSID là tắt việc phát sóng tên mạng (SSID) ra công chúng. Điều này làm cho mạng của bạn "vô hình" với những người quét mạng thông thường, từ đó <strong>giảm thiểu rủi ro (<code>リスクを低減</code>)</strong> bị người lạ cố gắng kết nối. (Lưu ý: Đây là một biện pháp bảo mật yếu, nhưng vẫn có tác dụng giảm thiểu).</li>' +
                         '<li><strong>エ. ❌ Sai.</strong> Giao tiếp trực tiếp giữa các thiết bị là chế độ <strong>Ad-hoc (<code>アドホックモード</code>)</strong>.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>ステルス化</code> (Stealth mode / Chế độ tàng hình)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> Tàng hình (<code>ステルス</code>) → Khó bị phát hiện hơn → <strong>Giảm rủi ro (<code>リスクを低減</code>)</strong>.</li></ul>'
      },
      {
        'question': '障害に備えるために，4台のHDDを使い，1台分の容量をパリティ情報の記録に使用するRAID5を構成する。1台のHDDの容量が1Tバイトのとき，実効データ容量はおよそ何バイトか。',
        'options': ['2T', '3T', '4T', '5T'],
        'answer': 1,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Cấu hình <strong>RAID 5</strong> sử dụng <strong>4 ổ HDD</strong>. Dung lượng <strong>1 ổ (<code>1台分</code>)</strong> được dùng cho thông tin chẵn lẻ (parity). Nếu 1 ổ HDD = 1TB, dung lượng dữ liệu thực tế (<code>実効データ容量</code>) là bao nhiêu?</li>' +
                         '<li><strong>ア.</strong> 2TB</li> <li><strong>イ.</strong> 3TB</li> <li><strong>ウ.</strong> 4TB</li> <li><strong>エ.</strong> 5TB</li></ul>' +
                         '<hr><h3><strong>Phân tích & Tính toán</strong></h3>' +
                         '<p>RAID 5 là một cấu hình lưu trữ kết hợp nhiều ổ đĩa để tăng hiệu suất và khả năng chịu lỗi (có thể hỏng 1 ổ).</p>' +
                         '<ul><li><strong>Tổng số ổ đĩa (N):</strong> 4 ổ.</li>' +
                         '<li><strong>Dung lượng mỗi ổ:</strong> 1 TB.</li>' +
                         '<li><strong>Cơ chế RAID 5:</strong> Dữ liệu và thông tin parity được chia nhỏ (striping) và ghi trên tất cả các ổ đĩa. Thông tin parity này luôn chiếm dung lượng tương đương <strong>1 ổ đĩa</strong>, bất kể có bao nhiêu ổ (N).</li>' +
                         '<li><strong>Công thức tính dung lượng khả dụng:</strong> (N - 1) × (Dung lượng mỗi ổ).</li>' +
                         '<li><strong>Tính toán:</strong> (4 - 1) × 1 TB = <strong>3 TB</strong>.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>RAID5</code></strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ (Dung lượng RAID):</strong></li>' +
                         '<ul><li><strong>RAID 0 (Striping):</strong> N * Size (Không an toàn)</li>' +
                         '<li><strong>RAID 1 (Mirroring):</strong> (N / 2) * Size (Rất an toàn, tốn kém)</li>' +
                         '<li><strong>RAID 5 (Parity):</strong> <strong>(N - 1) * Size</strong> (Mất 1 ổ cho parity)</li>' +
                         '<li><strong>RAID 6 (Double Parity):</strong> (N - 2) * Size (Mất 2 ổ cho parity)</li></ul></ul>'
      },
      {
        'question': '情報デザインで用いられる概念であり，部屋のドアノブの形で開閉の仕方を示唆するというような，人間の適切な行動を誘発する知覚可能な手掛かりのことを何と呼ぶか。',
        'options': ['NUI(Natural User Interface)', 'ウィザード', 'シグニファイア', 'マルチタッチ'],
        'answer': 2,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Trong thiết kế thông tin, khái niệm nào dùng để chỉ những <strong>"dấu hiệu" (<code>手掛かり</code>)</strong> có thể cảm nhận được, giúp <strong>gợi ý/thôi thúc (<code>誘発する</code>)</strong> con người thực hiện một hành động phù hợp (ví dụ: hình dạng của tay nắm cửa <code>ドアノブ</code> cho biết cách mở cửa)?</li>' +
                         '<li><strong>ア.</strong> NUI (Giao diện người dùng tự nhiên)</li>' +
                         '<li><strong>イ.</strong> Wizard (Trình hướng dẫn)</li>' +
                         '<li><strong>ウ.</strong> Signifier (Dấu hiệu chỉ dẫn)</li>' +
                         '<li><strong>エ.</strong> Multi-touch (Đa điểm)</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn </strong></h3>' +
                         '<ul><li><strong>ア. NUI (Natural User Interface):</strong> ❌ Sai. Là giao diện tự nhiên (ví dụ: điều khiển bằng giọng nói, cử chỉ).</li>' +
                         '<li><strong>イ. ウィザード (Wizard):</strong> ❌ Sai. Là một chuỗi các hộp thoại hướng dẫn người dùng thực hiện một tác vụ phức tạp theo từng bước (ví dụ: trình "Setup Wizard").</li>' +
                         '<li><strong>ウ. シグニファイア (Signifier):</strong> ✅ <strong>Đúng.</strong> Đây là một thuật ngữ trong thiết kế (do Don Norman định nghĩa). <strong>Signifier</strong> là bất kỳ dấu hiệu, tín hiệu nào có thể cảm nhận được (<code>知覚可能</code>) mà nó truyền đạt thông tin về hành động phù hợp. Ví dụ: Tay nắm cửa tròn (knob) *signifies* (chỉ dẫn) hành động "xoay". Tay cầm dọc (handle) *signifies* hành động "kéo/đẩy".</li>' +
                         '<li><strong>エ. マルチタッチ (Multi-touch):</strong> ❌ Sai. Là công nghệ cảm ứng đa điểm (ví dụ: dùng 2 ngón tay để phóng to).</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>シグニファイア</code> (Signifier), <code>行動を誘発する</code> (Thôi thúc hành động), <code>手掛かり</code> (Dấu hiệu, manh mối)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> Một <strong>Sign</strong>ifier (<code>シグニファイア</code>) đưa cho bạn một <strong>Sign</strong> (tín hiệu/<code>手掛かり</code>) để bạn biết phải làm gì.</li></ul>'
      },
      {
        'question': '図に示す2台のWebサーバと1台のデータベースサーバから成るWebシステムがある。Webサーバの稼働率はともに0.8とし，データベースサーバの稼働率は0.9とすると，このシステムの小数第3位を四捨五入した稼働率は幾らか。ここで，2台のWebサーバのうち少なくとも1台が稼働していて，かつ，データベースサーバが稼働していれば，システムとしては稼働しているとみなす。また，それぞれのサーバはランダムに故障が起こるものとする。<div class=\'img_margin\'><img src=\'img/67.png\' width=\'277\' height=\'108\' alt=\'67.png/image-size:277×108\'></div>',
        'options': ['0.04', '0.58', '0.86', '0.96'],
        'answer': 2,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Cho hệ thống gồm 2 Web Server (song song <code>並列</code>) và 1 DB Server (nối tiếp <code>直列</code>).<ul><li>Tỷ lệ hoạt động (R) của Web Server = 0.8</li><li>Tỷ lệ hoạt động (R) của DB Server = 0.9</li></ul>Hệ thống hoạt động khi (Ít nhất 1 Web Server chạy) VÀ (DB Server chạy). Tính tỷ lệ hoạt động (<code>稼働率</code>) của toàn hệ thống (làm tròn số thập phân thứ 3).</li>' +
                         '<li><strong>ア.</strong> 0.04</li> <li><strong>イ.</strong> 0.58</li> <li><strong>ウ.</strong> 0.86</li> <li><strong>エ.</strong> 0.96</li></ul>' +
                         '<hr><h3><strong>Phân tích & Tính toán</strong></h3>' +
                         '<p>Hệ thống này hoạt động khi (Cụm Web Server hoạt động) VÀ (DB Server hoạt động). Đây là cấu hình <strong>Nối tiếp (<code>直列</code>)</strong>.</p>' +
                         '<ol><li><strong>Bước 1: Tính tỷ lệ hoạt động của Cụm Web Server (mắc song song <code>並列</code>):</strong></li>' +
                         '<ul><li>Cách dễ nhất là tính (1 - Tỷ lệ cả 2 cùng hỏng).</li>' +
                         '<li>Tỷ lệ hỏng (F) của 1 Web Server = 1 - 0.8 = 0.2.</li>' +
                         '<li>Tỷ lệ cả 2 Web Server cùng hỏng = F × F = 0.2 × 0.2 = 0.04.</li>' +
                         '<li>Tỷ lệ cụm Web Server hoạt động (R<sub>web</sub>) = 1 - (tỷ lệ cả 2 cùng hỏng) = 1 - 0.04 = <strong>0.96</strong>.</li></ul>' +
                         '<li><strong>Bước 2: Tính tỷ lệ hoạt động của toàn hệ thống (mắc nối tiếp <code>直列</code>):</strong></li>' +
                         '<ul><li>Hệ thống hoạt động = (Cụm Web Server hoạt động) × (DB Server hoạt động).</li>' +
                         '<li>R<sub>total</sub> = R<sub>web</sub> × R<sub>db</sub></li>' +
                         '<li><code>R<sub>total</sub> = 0.96 × 0.9 = <strong>0.864</strong>.</code></li></ul>' +
                         '<li><strong>Bước 3: Làm tròn (<code>四捨五入</code>):</strong></li>' +
                         '<ul><li>Làm tròn số thập phân thứ 3 (<code>小数第3位</code>), tức là làm tròn số 4.</li>' +
                         '<li><code>0.86<u>4</u></code> → 4 nhỏ hơn 5, nên làm tròn xuống.</li>' +
                         '<li>Kết quả: <strong>0.86</strong>.</li></ul></ol>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Mẹo ghi nhớ (Tính <code>稼働率</code>):</strong></li>' +
                         '<ul><li><strong>Nối tiếp (<code>直列</code>):</strong> (Hỏng 1 cái là hỏng cả hệ thống) → Nhân tỷ lệ <strong>hoạt động</strong>: R<sub>total</sub> = R<sub>1</sub> × R<sub>2</sub></li>' +
                         '<li><strong>Song song (<code>並列</code>):</strong> (Hỏng tất cả mới hỏng) → Nhân tỷ lệ <strong>hỏng</strong>: F<sub>total</sub> = F<sub>1</sub> × F<sub>2</sub> (với F = 1-R). Sau đó R<sub>total</sub> = 1 - F<sub>total</sub>.</li></ul></ul>'
      },
      {
        'question': 'PKIにおけるCA(Certificate Authority)の役割に関する記述として，適切なものはどれか。',
        'options': ['インターネットと内部ネットワークの間にあって，内部ネットワーク上のコンピュータに代わってインターネットにアクセスする。', 'インターネットと内部ネットワークの間にあって，パケットフィルタリング機能などを用いてインターネットから内部ネットワークへの不正アクセスを防ぐ。', '利用者に指定されたドメイン名を基にIPアドレスとドメイン名の対応付けを行い，利用者を目的のサーバにアクセスさせる。', '利用者の公開鍵に対する公開鍵証明書の発行や失効を行い，鍵の正当性を保証する。'],
        'answer': 3,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Vai trò của <strong>CA (Certificate Authority - <code>認証局</code>)</strong> trong PKI là gì?</li>' +
                         '<li><strong>ア.</strong> Thay mặt (<code>代わって</code>) máy tính nội bộ truy cập Internet.</li>' +
                         '<li><strong>イ.</strong> Ngăn chặn (<code>防ぐ</code>) truy cập trái phép bằng cách lọc gói tin (<code>パケットフィルタリング</code>).</li>' +
                         '<li><strong>ウ.</strong> Ánh xạ (<code>対応付け</code>) tên miền sang địa chỉ IP.</li>' +
                         '<li><strong>エ.</strong> <strong>Phát hành (<code>発行</code>)</strong> và <strong>thu hồi (<code>失効</code>)</strong> <strong>chứng thư số (<code>証明書</code>)</strong> cho khóa công khai, <strong>bảo đảm (<code>保証</code>)</strong> tính chính danh của khóa.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. ❌ Sai.</strong> Đây là vai trò của <strong>Proxy Server (<code>プロキシサーバ</code>)</strong>.</li>' +
                         '<li><strong>イ. ❌ Sai.</strong> Đây là vai trò của <strong>Firewall (<code>ファイアウォール</code>)</strong>.</li>' +
                         '<li><strong>ウ. ❌ Sai.</strong> Đây là vai trò của <strong>DNS Server (<code>DNSサーバ</code>)</strong>.</li>' +
                         '<li><strong>エ. ✅ Đúng.</strong> <strong>CA (<code>認証局</code>)</strong> là một tổ chức đáng tin cậy, có vai trò <strong>phát hành (<code>発行</code>)</strong> và quản lý (thu hồi/<code>失効</code>) các <strong>chứng thư số (<code>公開鍵証明書</code>)</strong>. Chứng thư này giống như một \'chứng minh thư\' cho khóa công khai, <strong>bảo đảm (<code>保証</code>)</strong> rằng khóa công khai đó thực sự thuộc về đúng chủ thể (cá nhân/tổ chức) đã tuyên bố.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>CA (Certificate Authority)</code>, <code>PKI</code>, <code>証明書</code> (Chứng thư)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> <strong>C</strong>ertificate <strong>A</strong>uthority (<code>認証<strong>局</strong></code>) = Nhà chức trách (Authority) cấp <strong>C</strong>ertificate (Chứng thư - <code>証</code>).</li></ul>'
      },
      {
        'question': 'AIにおける機械学習の学習方法に関する次の記述中のa～cに入れる字句の適切な組合せはどれか。<br><br>教師あり学習は，正解を付けた学習データを入力することによって，<span class=\'bb\'>a</span>と呼ばれる手法で未知のデータを複数のクラスに分けたり，<span class=\'bb\'>b</span>と呼ばれる手法でデータの関係性を見つけたりすることができるようになる学習方法である。教師なし学習は，正解を付けない学習データを入力することによって，<span class=\'bb\'>c</span>と呼ばれる手法などで次第にデータを正しくグループ分けできるようになる学習方法である。<br><img src=\'img/65.png\' width=\'522\' height=\'155\' alt=\'65.png/image-size:522×155\'>',
        'options': ['ア', 'イ', 'ウ', 'エ'],
        'answer': 2,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Điền vào (a), (b), (c) về các phương pháp học máy.</li>' +
                         '<li><strong>Học có giám sát (<code>教師あり学習</code>):</strong> Dùng dữ liệu có đáp án (<code>正解</code>). Gồm phương pháp (a) để chia dữ liệu vào các lớp (<code>クラスに分けたり</code>), và phương pháp (b) để tìm ra mối quan hệ của dữ liệu.</li>' +
                         '<li><strong>Học không giám sát (<code>教師なし学習</code>):</strong> Dùng dữ liệu không có đáp án. Gồm phương pháp (c) để tự động chia nhóm (<code>グループ分け</code>) dữ liệu.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<p>Câu này mô tả 3 bài toán cơ bản của Machine Learning:</p>' +
                         '<ul><li><strong>Học có giám sát (<code>教師あり</code>):</strong> Dùng dữ liệu đã được gán nhãn (có đáp án sẵn).</li>' +
                         '<ul><li><strong>(a) Phân loại (<code>分類</code> - Classification):</strong> Chia dữ liệu vào các lớp (<code>クラス</code>) đã biết. Ví dụ: phân loại email là "spam" hay "không spam".</li>' +
                         '<li><strong>(b) Hồi quy (<code>回帰</code> - Regression):</strong> Tìm mối quan hệ và dự đoán một giá trị liên tục. Ví dụ: dự đoán giá nhà (<code>関係性</code>).</li></ul>' +
                         '<li><strong>Học không giám sát (<code>教師なし</code>):</strong> Dùng dữ liệu không có nhãn (không có đáp án).</li>' +
                         '<ul><li><strong>(c) Phân cụm (<code>クラスタリング</code> - Clustering):</strong> Tự động gom <strong>nhóm (<code>グループ分け</code>)</strong> các dữ liệu giống nhau lại với nhau.</li></ul></ul>' +
                         '<p>=> Ghép nối lại: a = <code>分類</code> (Phân loại), b = <code>回帰</code> (Hồi quy), c = <code>クラスタリング</code> (Phân cụm). Tổ hợp này tương ứng với đáp án <strong>ウ</strong>.</p>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>教師あり</code> (Supervised), <code>教師なし</code> (Unsupervised)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ (Rất quan trọng):</strong></li>' +
                         '<ul><li><strong>Có giám sát (<code>教師あり</code>):</strong> Có "thầy" chỉ cho đáp án. Gồm:</li>' +
                         '<ul><li><strong><code>分類</code> (Phân loại)</strong> → Đáp án là <strong>Nhóm/Lớp (<code>クラス</code>)</strong> (ví dụ: Chó/Mèo, Đậu/Rớt).</li>' +
                         '<li><strong><code>回帰</code> (Hồi quy)</strong> → Đáp án là <strong>Con số (<code>数値</code>)</strong> (ví dụ: Giá nhà, Nhiệt độ).</li></ul>' +
                         '<li><strong>Không giám sát (<code>教師なし</code>):</strong> Tự học, tự "gom nhóm".</li>' +
                         '<ul><li><strong><code>クラスタリング</code> (Phân cụm)</strong> → Tự <strong>Gom nhóm (<code>グループ分け</code>)</strong>.</li></ul></ul></ul>'
      },
      {
        'question': '情報セキュリティのリスクマネジメントにおけるリスクへの対応を，リスク共有，リスク回避，リスク保有及びリスク低減の四つに分類するとき，リスク共有の例として，適切なものはどれか。',
        'options': ['災害によるシステムの停止時間を短くするために，遠隔地にバックアップセンターを設置する。', '情報漏えいによって発生する損害賠償や事故処理の損失補填のために，サイバー保険に加入する。', '電子メールによる機密ファイルの流出を防ぐために，ファイルを添付した電子メールの送信には上司の許可を必要とする仕組みにする。', 'ノートPCの紛失や盗難による情報漏えいを防ぐために，HDDを暗号化する。'],
        'answer': 1,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Đâu là ví dụ về <strong>Chia sẻ rủi ro (<code>リスク共有</code>)</strong>? (Lưu ý: <code>リスク共有</code> - Chia sẻ và <code>リスク移転</code> - Chuyển giao, thường được dùng với ý nghĩa tương đương trong ngữ cảnh này).</li>' +
                         '<li><strong>ア.</strong> Lập <strong>trung tâm dự phòng (<code>バックアップセンター</code>)</strong> ở xa để giảm thời gian chết do thảm họa.</li>' +
                         '<li><strong>イ.</strong> <strong>Mua bảo hiểm (<code>保険に加入</code>)</strong> mạng để bù đắp tổn thất do rò rỉ thông tin.</li>' +
                         '<li><strong>ウ.</strong> Yêu cầu <strong>sếp phê duyệt (<code>上司の許可</code>)</strong> khi gửi email đính kèm file.</li>' +
                         '<li><strong>エ.</strong> <strong>Mã hóa (<code>暗号化</code>)</strong> ổ cứng laptop.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<p>Bốn cách đối phó với rủi ro:</p>' +
                         '<ul><li><strong><code>回避</code> (Avoid - Tránh né):</strong> Ngừng hoạt động gây ra rủi ro.</li>' +
                         '<li><strong><code>低減</code> (Reduce - Giảm thiểu):</strong> Áp dụng biện pháp (controls) để giảm khả năng hoặc tác động của rủi ro.</li>' +
                         '<li><strong><code>共有/移転</code> (Share/Transfer - Chia sẻ/Chuyển giao):</strong> Chuyển một phần hoặc toàn bộ gánh nặng (thường là tài chính) của rủi ro cho một bên khác.</li>' +
                         '<li><strong><code>保有</code> (Accept - Chấp nhận):</strong> Không làm gì và chấp nhận hậu quả.</li></ul>' +
                         '<ul><li><strong>ア. ❌ Giảm thiểu (<code>低減</code>).</strong> Lập trung tâm dự phòng (Backup/DR Site) là một biện pháp làm <strong>giảm</strong> tác động (impact) khi thảm họa xảy ra.</li>' +
                         '<li><strong>イ. ✅ Chia sẻ/Chuyển giao (<code>共有/移転</code>).</strong> <strong>Mua bảo hiểm (<code>保険</code>)</strong> là ví dụ kinh điển của việc <strong>chuyển giao</strong> rủi ro tài chính cho công ty bảo hiểm.</li>' +
                         '<li><strong>ウ. ❌ Giảm thiểu (<code>低減</code>).</strong> Yêu cầu phê duyệt là một biện pháp kiểm soát (control) để <strong>giảm</strong> khả năng (likelihood) rủi ro (gửi nhầm) xảy ra.</li>' +
                         '<li><strong>エ. ❌ Giảm thiểu (<code>低減</code>).</strong> Mã hóa ổ cứng là một biện pháp để <strong>giảm</strong> tác động (impact) khi rủi ro (mất máy) xảy ra (kẻ trộm không đọc được dữ liệu).</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>リスク共有</code> (Chia sẻ rủi ro) / <code>リスク移転</code> (Chuyển giao rủi ro)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> Chia sẻ/Chuyển giao rủi ro (<code>移転・共有</code>) = "Đẩy" gánh nặng tài chính cho bên khác. Hãy nghĩ đến <strong>Bảo hiểm (<code>保険</code>)</strong> hoặc <strong>Thuê ngoài (Outsourcing)</strong>.</li></ul>'
      },
      {
        'question': 'SSDの全てのデータを消去し，復元できなくする方法として用いられているものはどれか。',
        'options': ['Secure Erase', '磁気消去', 'セキュアブート', 'データクレンジング'],
        'answer': 0,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Phương pháp nào được dùng để <strong>xóa (<code>消去</code>)</strong> toàn bộ dữ liệu trên <strong>SSD</strong> và khiến nó <strong>không thể khôi phục (<code>復元できなくする</code>)</strong> được?</li>' +
                         '<li><strong>ア.</strong> Secure Erase</li>' +
                         '<li><strong>イ.</strong> Xóa bằng từ tính (<code>磁気消去</code>)</li>' +
                         '<li><strong>ウ.</strong> Secure Boot (Khởi động an toàn)</li>' +
                         '<li><strong>エ.</strong> Data Cleansing (Làm sạch dữ liệu)</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. Secure Erase:</strong> ✅ <strong>Đúng.</strong> Đây là một tập lệnh (command) được tích hợp sẵn trong firmware của ổ đĩa (cả SSD và HDD hiện đại), cho phép xóa sạch toàn bộ dữ liệu một cách nhanh chóng và hiệu quả bằng cách reset tất cả các ô nhớ về trạng thái "trống" (empty). Đây là phương pháp được khuyến nghị cho SSD.</li>' +
                         '<li><strong>イ. 磁気消去 (Magnetic Erase / Degaussing):</strong> ❌ Sai. Xóa bằng từ tính (dùng nam châm cực mạnh) chỉ hiệu quả với các thiết bị lưu trữ <strong>từ tính (<code>磁気</code>)</strong> như ổ cứng <strong>HDD</strong> hoặc băng từ (tape). SSD dùng chip nhớ flash (bán dẫn), nên từ tính không có tác dụng.</li>' +
                         '<li><strong>ウ. セキュアブート (Secure Boot):</strong> ❌ Sai. Đây là một tính năng bảo mật của UEFI (thay thế BIOS) để ngăn chặn mã độc (malware) chạy *trước khi* hệ điều hành khởi động.</li>' +
                         '<li><strong>エ. データクレンジング (Data Cleansing):</strong> ❌ Sai. Đây là "Làm sạch dữ liệu", một quá trình trong quản lý dữ liệu để sửa lỗi, loại bỏ trùng lặp, chuẩn hóa dữ liệu (ví dụ: "VN" -> "Việt Nam"). Nó không phải là xóa dữ liệu.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>SSD</code>, <code>消去</code> (Xóa), <code>復元できなくする</code> (Không thể khôi phục)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> Phương pháp xóa "An toàn" (<strong>Secure</strong>) cho SSD → <strong>Secure Erase</strong>. (Phân biệt: <code>磁気</code> (từ tính) chỉ dùng cho HDD).</li></ul>'
      },
      {
        'question': '関数 convert は，整数型の配列を一定のルールで文字列に変換するプログラムである。関数 convert を convert(arrayInput) として呼び出したときの戻り値が"AABAB"になる引数 arrayInput の値はどれか。ここで，arrayInput の要素数は1以上とし，配列の要素番号は1から始まる。<br><br>〔プログラム〕<div class=\'img_margin left\'><img src=\'img/62.png\' width=\'403\' height=\'302\' alt=\'62.png/image-size:403×302\'></div>',
        'options': ['{0，0，1，2，1}', '{0，1，2，1，1}', '{1，0，1，2，0}', '{1，1，2，1，0}'],
        'answer': 3,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Cho hàm `convert`. Nếu kết quả trả về là "AABAB", thì giá trị đầu vào `arrayInput` là gì?</li>' +
                         '<li><strong>Chương trình (Mã giả):</strong></li>' +
                         '<ul><li>Khởi tạo chuỗi `strResult` rỗng.</li>' +
                         '<li>Vòng lặp `i` từ 1 đến hết độ dài mảng.</li>' +
                         '<li><strong>Nếu (phần tử `arrayInput[i]` == 1) thì</strong></li>' +
                         '<ul><li>Nối "A" vào `strResult`</li></ul>' +
                         '<li><strong>Ngược lại (<code>else</code>)</strong></li>' +
                         '<ul><li>Nối "B" vào `strResult`</li></ul>' +
                         '<li>Kết thúc vòng lặp.</li>' +
                         '<li>Trả về `strResult`.</li></ul>' +
                         '<li><strong>ア.</strong> {0, 0, 1, 2, 1}</li> <li><strong>イ.</strong> {0, 1, 2, 1, 1}</li> <li><strong>ウ.</strong> {1, 0, 1, 2, 0}</li> <li><strong>エ.</strong> {1, 1, 2, 1, 0}</li></ul>' +
                         '<hr><h3><strong>Phân tích (Dry Run)</strong></h3>' +
                         '<p>Nhìn vào đoạn mã, ta thấy quy tắc chuyển đổi rất đơn giản:</p>' +
                         '<ul><li>Nếu phần tử trong mảng <code>== 1</code>, chuỗi kết quả sẽ được nối thêm ký tự "A".</li>' +
                         '<li>Nếu phần tử trong mảng <code>!= 1</code> (tức là 0, 2, hoặc số khác), chuỗi kết quả sẽ được nối thêm ký tự "B".</li></ul>' +
                         '<p>Chúng ta cần kết quả là "<strong>A A B A B</strong>". Hãy đối chiếu ngược lại:</p>' +
                         '<ul><li>Ký tự thứ 1 là "A" → phần tử thứ 1 phải là <strong>1</strong>.</li>' +
                         '<li>Ký tự thứ 2 là "A" → phần tử thứ 2 phải là <strong>1</strong>.</li>' +
                         '<li>Ký tự thứ 3 là "B" → phần tử thứ 3 phải là <strong>khác 1</strong>.</li>' +
                         '<li>Ký tự thứ 4 là "A" → phần tử thứ 4 phải là <strong>1</strong>.</li>' +
                         '<li>Ký tự thứ 5 là "B" → phần tử thứ 5 phải là <strong>khác 1</strong>.</li></ul>' +
                         '<p>So sánh với các đáp án, ta tìm mảng có dạng <code>{1, 1, (≠1), 1, (≠1)}</code>:</p>' +
                         '<ul><li><strong>ア:</strong> {0, 0, 1, 2, 1} → "BBAAB" ❌</li>' +
                         '<li><strong>イ:</strong> {0, 1, 2, 1, 1} → "BABAA" ❌</li>' +
                         '<li><strong>ウ:</strong> {1, 0, 1, 2, 0} → "ABAB B" ❌</li>' +
                         '<li><strong>エ: {1, 1, 2, 1, 0}</strong> → <strong>"AABAB" ✅</strong> (Vì 2 và 0 đều khác 1)</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Mẹo ghi nhớ:</strong> Đọc kỹ điều kiện: <strong>1 → A</strong>, <strong>khác 1 (<code>else</code>) → B</strong>.</li></ul>'
      },
      {
        'question': 'cookieを説明したものはどれか。',
        'options': ['Webサイトが，Webブラウザを通じて訪問者のPCにデータを書き込んで保存する仕組み又は保存されるデータのこと', 'Webブラウザが，アクセスしたWebページをファイルとしてPCのハードディスクに一時的に保存する仕組み又は保存されるファイルのこと', 'Webページ上で，Webサイトの紹介などを目的に掲載されている画像のこと', 'ブログの機能の一つで，リンクを張った相手に対してその旨を通知する仕組みのこと'],
        'answer': 0,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Mô tả nào giải thích về <strong>Cookie</strong>?</li>' +
                         '<li><strong>ア.</strong> Cơ chế mà <strong>trang web (<code>Webサイト</code>)</strong>, thông qua <strong>trình duyệt (<code>Webブラウザ</code>)</strong>, ghi và lưu dữ liệu trên PC của người dùng.</li>' +
                         '<li><strong>イ.</strong> Cơ chế mà <strong>trình duyệt (<code>Webブラウザ</code>)</strong> tạm thời lưu các tệp của trang web đã truy cập vào ổ cứng.</li>' +
                         '<li><strong>ウ.</strong> Hình ảnh được đăng trên trang web với mục đích giới thiệu.</li>' +
                         '<li><strong>エ.</strong> Một chức năng của blog, thông báo cho đối phương biết khi mình đặt link tới họ.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. ✅ Đúng.</strong> <strong>Cookie</strong> là một mẩu dữ liệu nhỏ mà <strong>trang web (<code>Webサイト</code>)</strong> (server) yêu cầu <strong>trình duyệt (<code>Webブラウザ</code>)</strong> (client) lưu lại trên máy tính của người dùng. Khi người dùng truy cập lại trang web đó, trình duyệt sẽ gửi cookie trở lại server, giúp server "nhớ" được người dùng (ví dụ: trạng thái đăng nhập, giỏ hàng).</li>' +
                         '<li><strong>イ. ❌ Sai.</strong> Trình duyệt tự lưu các tệp (ảnh, CSS, JS) của trang web để tải nhanh hơn lần sau là <strong>Cache (<code>キャッシュ</code>)</strong>.</li>' +
                         '<li><strong>ウ. ❌ Sai.</strong> Hình ảnh quảng cáo là <strong>Banner (<code>バナー</code>)</strong>.</li>' +
                         '<li><strong>エ. ❌ Sai.</strong> Tính năng thông báo khi có liên kết là <strong>Trackback (<code>トラックバック</code>)</strong>.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>cookie</code></strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ (Phân biệt Cookie và Cache):</strong></li>' +
                         '<ul><li><strong>Cookie:</strong> Do <strong>Server (<code>Webサイト</code>)</strong> yêu cầu lưu → Dùng để "nhớ" bạn là ai. (Giống như "vé gửi xe").</li>' +
                         '<li><strong>Cache:</strong> Do <strong>Client (<code>Webブラウザ</code>)</strong> tự lưu → Dùng để "tải trang nhanh hơn". (Giống như "đồ ăn dự trữ").</li></ul></ul>'
      },
      {
        'question': '関係データベースを構成する要素の関係を表す図において，図中のa～cに入れる字句の適切な組合せはどれか。<div class=\'img_margin\'><img src=\'img/60_1.png\' width=\'545\' height=\'134\' alt=\'60_1.png/image-size:545×134\'></div><br><img src=\'img/60_2.png\' width=\'433\' height=\'154\' alt=\'60_2.png/image-size:433×154\'>',
        'options': ['ア', 'イ', 'ウ', 'エ'],
        'answer': 1,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Hãy điền vào (a), (b), (c) trong sơ đồ phân cấp cấu trúc của một CSDL quan hệ.</li>' +
                         '<li>Sơ đồ: <code>データベース</code> (CSDL) → (a) → (b) → (c)</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<p>Đây là cấu trúc phân cấp cơ bản của một cơ sở dữ liệu quan hệ (Relational Database):</p>' +
                         '<ul><li>Một <strong>Cơ sở dữ liệu (<code>データベース</code>)</strong> là một tập hợp chứa nhiều <strong>(a) Bảng (<code>テーブル</code>)</strong>.</li>' +
                         '<li>Một Bảng là một tập hợp chứa nhiều <strong>(b) Hàng (<code>レコード</code> - Record)</strong>. (Hay còn gọi là <code>行</code> - Row).</li>' +
                         '<li>Một Hàng được tạo thành từ nhiều <strong>(c) Cột (<code>フィールド</code> - Field)</strong>. (Hay còn gọi là <code>列</code> - Column hoặc <code>項目</code> - Item).</li></ul>' +
                         '<p>=> Vậy, a = <code>テーブル</code> (Table), b = <code>レコード</code> (Record), c = <code>フィールド</code> (Field). Tổ hợp này tương ứng với đáp án <strong>イ</strong>.</p>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Mẹo ghi nhớ:</strong> Tưởng tượng một file Excel (<code>.xlsx</code>):</li>' +
                         '<ul><li>Toàn bộ file = <strong>Database</strong> (<code>データベース</code>).</li>' +
                         '<li>Mỗi sheet = <strong>Table (a)</strong> (<code>テーブル</code>).</li>' +
                         '<li>Mỗi <strong>hàng</strong> (row) = <strong>Record (b)</strong> (<code>レコード</code> / <code>行</code>).</li>' +
                         '<li>Mỗi <strong>cột</strong> (column) = <strong>Field (c)</strong> (<code>フィールド</code> / <code>列</code>).</li></ul></ul>'
      },
      {
        'question': 'OCRの役割として，適切なものはどれか。',
        'options': ['10cm程度の近距離にある機器間で無線通信する。', '印刷文字や手書き文字を認識し，テキストデータに変換する。', 'デジタル信号処理によって，人工的に音声を作り出す。', '利用者の指先などが触れたパネル上の位置を検出する。'],
        'answer': 1,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Vai trò của <strong>OCR</strong> là gì?</li>' +
                         '<li><strong>ア.</strong> Giao tiếp không dây ở <strong>khoảng cách gần (<code>近距離</code>)</strong> khoảng 10cm.</li>' +
                         '<li><strong>イ.</strong> <strong>Nhận dạng (<code>認識</code>)</strong> chữ in và chữ viết tay (<code>文字</code>) và <strong>chuyển đổi (<code>変換</code>)</strong> chúng thành <strong>dữ liệu văn bản (<code>テキストデータ</code>)</strong>.</li>' +
                         '<li><strong>ウ.</strong> Tạo ra <strong>âm thanh (<code>音声</code>)</strong> nhân tạo bằng xử lý tín hiệu số.</li>' +
                         '<li><strong>エ.</strong> Phát hiện <strong>vị trí (<code>位置</code>)</strong> trên bảng điều khiển (panel) mà ngón tay người dùng chạm vào.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. ❌ Sai.</strong> Giao tiếp không dây ở khoảng cách rất gần (<code>近距離</code>) là chức năng của <strong>NFC (Near Field Communication)</strong>.</li>' +
                         '<li><strong>イ. ✅ Đúng.</strong> <strong>OCR (Optical Character Recognition)</strong> là "Nhận dạng <strong>Ký tự (<code>文字</code>)</strong> Quang học". Vai trò của nó chính xác là "đọc" chữ (<code>文字</code>) từ một hình ảnh và chuyển đổi (<code>変換</code>) chúng thành dữ liệu văn bản (<code>テキストデータ</code>) mà máy tính có thể chỉnh sửa được.</li>' +
                         '<li><strong>ウ. ❌ Sai.</strong> Tạo ra âm thanh (<code>音声</code>) nhân tạo là chức năng của <strong>Tổng hợp giọng nói (<code>音声合成</code> - Speech Synthesis / Text-to-Speech)</strong>.</li>' +
                         '<li><strong>エ. ❌ Sai.</strong> Phát hiện vị trí chạm là chức năng của <strong>Màn hình cảm ứng (<code>タッチパネル</code> - Touch Panel)</strong>.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>OCR</code>, <code>文字</code> (Ký tự), <code>テキストデータに変換</code> (Chuyển thành dữ liệu văn bản)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> <strong>O</strong>ptical <strong>C</strong>haracter <strong>R</strong>ecognition → Nhận dạng <strong>Ký tự (C</strong>haracter - <code>文字</code>).</li></ul>'
      },
      {
        'question': '文書作成ソフトや表計算ソフトなどにおいて，一連の操作手順をあらかじめ定義しておき，実行する機能はどれか。',
        'options': ['オートコンプリート', 'ソースコード', 'プラグアンドプレイ', 'マクロ'],
        'answer': 3,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Trong các phần mềm văn phòng (Word, Excel...), chức năng nào cho phép định nghĩa trước một <strong>chuỗi các bước thao tác (<code>一連の操作手順</code>)</strong> để thực thi chúng?</li>' +
                         '<li><strong>ア.</strong> Autocomplete (Tự động hoàn thành)</li>' +
                         '<li><strong>イ.</strong> Source code (Mã nguồn)</li>' +
                         '<li><strong>ウ.</strong> Plug and Play (Cắm và chạy)</li>' +
                         '<li><strong>エ.</strong> Macro</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. オートコンプリート (Autocomplete):</strong> ❌ Sai. Là tính năng gợi ý để hoàn thành một từ bạn đang gõ (ví dụ: gõ "Thứ" tự động gợi ý "Thứ Hai").</li>' +
                         '<li><strong>イ. ソースコード (Source code):</strong> ❌ Sai. Là mã của một chương trình máy tính.</li>' +
                         '<li><strong>ウ. プラグアンドプレイ (Plug and Play):</strong> ❌ Sai. Là tính năng của HĐH, cho phép tự động nhận diện phần cứng (như chuột, USB) ngay khi cắm vào.</li>' +
                         '<li><strong>エ. マクロ (Macro):</strong> ✅ <strong>Đúng.</strong> <strong>Macro (<code>マクロ</code>)</strong> là một tính năng (thường có trong Excel, Word) cho phép người dùng "ghi lại" (record) một <strong>chuỗi các hành động (<code>一連の操作手順</code>)</strong> (như click chuột, gõ phím, định dạng) và thực thi lại toàn bộ chuỗi đó chỉ bằng một lệnh duy nhất, giúp tự động hóa các công việc lặp đi lặp lại.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>マクロ</code> (Macro), <code>一連の操作手順</code> (Chuỗi các bước thao tác)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> Ghi lại một chuỗi hành động để tự động hóa → <strong>Macro</strong>.</li></ul>'
      },
      {
        'question': '暗号化方式の特徴について記した表において，表中のa～dに入れる字句の適切な組合せはどれか。<div class=\'img_margin\'><img src=\'img/57_1.png\' width=\'491\' height=\'128\' alt=\'57_1.png/image-size:491×128\'></div><br><img src=\'img/57_2.png\' width=\'356\' height=\'154\' alt=\'57_2.png/image-size:356×154\'>',
        'options': ['ア', 'イ', 'ウ', 'エ'],
        'answer': 2,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Điền vào (a), (b), (c), (d) trong bảng so sánh các phương thức mã hóa.</li>' +
                         '<li><strong>Bảng:</strong></li>' +
                         '<ul><li>(a): Khóa mã hóa và khóa giải mã <strong>khác nhau (<code>異なる</code>)</strong>. Tốc độ (c).</li>' +
                         '<li>(b): Khóa mã hóa và khóa giải mã <strong>giống nhau (<code>同一</code>)</strong>. Tốc độ (d).</li>' +
                         '<li>(c): Tốc độ của (a).</li>' +
                         '<li>(d): Tốc độ của (b).</li></ul></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<p>So sánh hai loại mã hóa chính:</p>' +
                         '<ul><li><strong>Mã hóa khóa công khai (<code>公開鍵暗号方式</code> - Public Key):</strong> Dùng một cặp khóa: 1 public (công khai) để mã hóa và 1 private (bí mật) để giải mã. Vì <strong>khóa mã hóa và giải mã khác nhau (<code>異なる</code>)</strong>, nó phù hợp với <strong>(a)</strong>. Do thuật toán phức tạp hơn (ví dụ: RSA), tốc độ xử lý <strong>chậm (<code>遅い</code>)</strong>, phù hợp với <strong>(c)</strong>.</li>' +
                         '<li><strong>Mã hóa khóa chung (<code>共通鍵暗号方式</code> - Common/Shared Key):</strong> Dùng <strong>cùng một khóa (<code>同一</code>)</strong> cho cả mã hóa và giải mã. Nó phù hợp với <strong>(b)</strong>. Do thuật toán đơn giản hơn (ví dụ: AES), tốc độ xử lý <strong>nhanh (<code>速い</code>)</strong>, phù hợp với <strong>(d)</strong>.</li></ul>' +
                         '<p>=> a = <code>公開鍵</code>, b = <code>共通鍵</code>, c = <code>遅い</code> (Chậm), d = <code>速い</code> (Nhanh). Tổ hợp này tương ứng với đáp án <strong>ウ</strong>.</p>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Mẹo ghi nhớ (Rất quan trọng):</strong></li>' +
                         '<ul><li><strong>Công khai (<code>公開鍵</code>):</strong> 2 khóa (<code>異なる</code>), 1 public 1 private. An toàn nhưng <strong>Chậm (<code>遅い</code>)</strong>.</li>' +
                         '<li><strong>Chung (<code>共通鍵</code>):</strong> 1 khóa (<code>同一</code>) dùng chung. Phải giữ bí mật khóa. <strong>Nhanh (<code>速い</code>)</strong>.</li>' +
                         '<li>(Thực tế: Người ta dùng <code>公開鍵</code> (chậm) để trao đổi <code>共通鍵</code> (nhanh), sau đó dùng <code>共通鍵</code> để mã hóa dữ liệu chính).</li></ul></ul>'
      },
      {
        'question': 'PCにおいて，電力供給を断つと記憶内容が失われるメモリ又は記憶媒体はどれか。',
        'options': ['DVD-RAM', 'DRAM', 'ROM', 'フラッシュメモリ'],
        'answer': 1,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Trong PC, loại bộ nhớ hoặc phương tiện lưu trữ nào sẽ <strong>mất nội dung (<code>記憶内容が失われる</code>)</strong> khi <strong>ngắt nguồn điện (<code>電力供給を断つ</code>)</strong>?</li>' +
                         '<li><strong>ア.</strong> DVD-RAM</li>' +
                         '<li><strong>イ.</strong> DRAM</li>' +
                         '<li><strong>ウ.</strong> ROM</li>' +
                         '<li><strong>エ.</strong> Bộ nhớ Flash (<code>フラッシュメモリ</code>)</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<p>Loại bộ nhớ bị mất dữ liệu khi mất điện được gọi là <strong>bộ nhớ khả biến (<code>揮発性メモリ</code> - volatile memory)</strong>. Loại không mất điện gọi là bất biến (<code>不揮発性メモリ</code> - non-volatile).</p>' +
                         '<ul><li><strong>ア. DVD-RAM:</strong> ❌ Sai. Đây là đĩa quang, là bộ nhớ <strong>bất biến</strong> (non-volatile).</li>' +
                         '<li><strong>イ. DRAM (Dynamic Random Access Memory):</strong> ✅ <strong>Đúng.</strong> Đây là thành phần chính của bộ nhớ <strong>RAM</strong> trong máy tính. Nó là <strong>bộ nhớ khả biến (<code>揮発性</code>)</strong>, cần được làm mới (dynamic) liên tục và sẽ mất toàn bộ dữ liệu ngay khi mất điện.</li>' +
                         '<li><strong>ウ. ROM (Read-Only Memory):</strong> ❌ Sai. Là bộ nhớ chỉ đọc (ví dụ: chứa BIOS/UEFI), là bộ nhớ <strong>bất biến</strong>.</li>' +
                         '<li><strong>エ. フラッシュメモリ (Flash Memory):</strong> ❌ Sai. Đây là công nghệ dùng trong <strong>SSD, USB, thẻ nhớ</strong>. Nó là bộ nhớ <strong>bất biến</strong> (non-volatile), không mất dữ liệu khi tắt nguồn.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>電力を断つと...失われる</code> (Mất khi ngắt điện)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ (Rất quan trọng):</strong></li>' +
                         '<ul><li><strong>Khả biến (<code>揮発性</code>)</strong> (Mất điện là mất dữ liệu): <strong>RAM</strong> (như D<strong>RAM</strong>, S<strong>RAM</strong>).</li>' +
                         '<li><strong>Bất biến (<code>不揮発性</code>)</strong> (Tắt điện vẫn còn): <strong>ROM, SSD, HDD, USB, DVD...</strong></li></ul></ul>'
      }
  ]
  },
  '2023': {
    strategy: [
    {
        'question': '新しいビジネスモデルや製品を開発する際に、仮説に基づいて実用に向けた最小限のサービスや製品を作り、短期に顧客価値の検証を繰り返すことによって、新規事業などを成功させる可能性を高める手法を示す用語はどれか。',
        'options': ['リーンスタートアップ', 'クラウドファンディング', 'デザイン思考', '破壊的イノベーション'],
        'answer': 0,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Thuật ngữ nào chỉ phương pháp: dựa trên giả thuyết, tạo ra <strong>sản phẩm/dịch vụ tối thiểu (<code>最小限のサービスや製品</code>)</strong>, và <strong>lặp lại việc kiểm chứng (<code>検証を繰り返す</code>)</strong> giá trị khách hàng trong thời gian ngắn, để tăng khả năng thành công cho dự án mới?</li>' +
                         '<li><strong>ア.</strong> Lean Startup</li>' +
                         '<li><strong>イ.</strong> Crowdfunding (Huy động vốn cộng đồng)</li>' +
                         '<li><strong>ウ.</strong> Design Thinking (Tư duy thiết kế)</li>' +
                         '<li><strong>エ.</strong> Disruptive Innovation (Đổi mới đột phá)</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. リーンスタートアップ (Lean Startup):</strong> ✅ <strong>Đúng.</strong> Đây là định nghĩa chính xác của Lean Startup (Khởi nghiệp tinh gọn). Cốt lõi của nó là chu trình "Build-Measure-Learn" (Xây dựng - Đo lường - Học hỏi) bằng cách nhanh chóng tạo ra <strong>Sản phẩm khả dụng tối thiểu (MVP - <code>最小限の...製品</code>)</strong> để <strong>kiểm chứng (<code>検証</code>)</strong> giả thuyết với khách hàng.</li>' +
                         '<li><strong>イ. クラウドファンディング (Crowdfunding):</strong> ❌ Sai. Đây là hình thức huy động vốn (<code>資金調達</code>) từ đám đông (crowd).</li>' +
                         '<li><strong>ウ. デザイン思考 (Design Thinking):</strong> ❌ Sai. Đây là một quy trình giải quyết vấn đề tập trung vào việc thấu cảm (<code>共感</code>) người dùng để tìm ra giải pháp sáng tạo.</li>' +
                         '<li><strong>エ. 破壊的イノベーション (Disruptive Innovation):</strong> ❌ Sai. Đây là một lý thuyết về cách các sản phẩm/dịch vụ mới (thường rẻ hơn, đơn giản hơn) "phá vỡ" (<code>破壊</code>) thị trường của các công ty lớn hiện có.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>リーンスタートアップ</code> (Lean Startup)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> <strong><code>最小限</code> (Tối thiểu - MVP) + <code>検証を繰り返す</code> (Lặp lại kiểm chứng) = Lean Startup</strong>.</li></ul>'
      },
      {
        'question': '次の a ～ c のうち、著作権法によって定められた著作物に該当するものだけを全て挙げたものはどれか。<br>a　原稿なしで話した講演の録音<br>b　時刻表に掲載されたバスの到着時刻<br>c　創造性の高い技術の発明',
        'options': ['a', 'a, b', 'a, c', 'c'],
        'answer': 0,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Trong số a ~ c, những cái nào được coi là tác phẩm được bảo hộ bởi <strong>Luật Bản quyền (<code>著作権法</code>)</strong>?</li>' +
                         '<li><strong>a.</strong> Bản ghi âm (<code>録音</code>) một bài giảng được nói mà không có kịch bản (<code>原稿なし</code>).</li>' +
                         '<li><strong>b.</strong> Thời gian (<code>時刻</code>) đến của xe buýt được đăng trên lịch trình.</li>' +
                         '<li><strong>c.</strong> Một <strong>phát minh (<code>発明</code>)</strong> công nghệ có tính sáng tạo cao.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<p>Luật Bản quyền (<code>著作権法</code>) bảo vệ <strong>"Sự thể hiện" (<code>表現</code>)</strong> của một ý tưởng, chứ không bảo vệ bản thân <strong>"Ý tưởng" (<code>アイディア</code>)</strong>, "Sự thật/Dữ liệu" (<code>事実・データ</code>) hay "Phát minh" (<code>発明</code>).</p>' +
                         '<ul><li><strong>a. ✅ Tác phẩm.</strong> Một bài giảng (<code>講演</code>), ngay cả khi không có kịch bản, nếu nó thể hiện tư tưởng hoặc cảm xúc một cách sáng tạo, nó được coi là một "tác phẩm ngôn ngữ" (<code>言語の著作物</code>). Việc ghi âm lại chỉ là hành động "cố định" (<code>固定</code>) tác phẩm đó.</li>' +
                         '<li><strong>b. ❌ Không phải tác phẩm.</strong> Thời gian biểu, lịch trình xe buýt (<code>時刻表</code>) chỉ đơn thuần là <strong>dữ liệu, là sự thật (<code>事実・データ</code>)</strong>. Chúng không có tính sáng tạo (<code>創作性</code>) để được coi là một tác phẩm.</li>' +
                         '<li><strong>c. ❌ Không được bảo hộ bởi Luật Bản quyền.</strong> Một <strong>phát minh (<code>発明</code>)</strong> công nghệ, dù sáng tạo, là đối tượng được bảo hộ bởi <strong>Luật Sáng chế (<code>特許法</code>)</strong>, không phải Luật Bản quyền (<code>著作権法</code>).</li></ul>' +
                         '<p>=> Vậy, chỉ có (a) là tác phẩm được bảo hộ bởi Luật Bản quyền.</p>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>著作権法</code> (Luật Bản quyền)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ (Bản quyền KHÔNG bảo vệ 3 thứ):</strong></li>' +
                         '<ul><li>1. Ý tưởng (<code>アイディア</code>), Phương pháp (<code>解法</code>).</li>' +
                         '<li>2. Sự thật, Dữ liệu (<code>事実・データ</code>) (ví dụ: <code>時刻表</code>).</li>' +
                         '<li>3. Phát minh kỹ thuật (<code>発明</code>) (Đây là của <strong><code>特許法</code> - Luật Sáng chế</strong>).</li></ul></ul>'
      },
      {
        'question': '観光などで訪日した外国人が国内にもたらす経済効果を示す言葉として、最も適切なものはどれか。',
        'options': ['アウトソーシング', 'アウトバウンド需要', 'インキュベーター', 'インバウンド需要'],
        'answer': 3,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Thuật ngữ nào phù hợp nhất để chỉ hiệu quả kinh tế mà <strong>người nước ngoài đến thăm Nhật Bản (<code>訪日した外国人</code>)</strong> (ví dụ: du lịch) mang lại cho quốc gia?</li>' +
                         '<li><strong>ア.</strong> Outsourcing (Thuê ngoài)</li>' +
                         '<li><strong>イ.</strong> Outbound Demand (Nhu cầu đi ra)</li>' +
                         '<li><strong>ウ.</strong> Incubator (Vườn ươm doanh nghiệp)</li>' +
                         '<li><strong>エ.</strong> Inbound Demand (Nhu cầu đi vào)</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. アウトソーシング (Outsourcing):</strong> ❌ Sai. Là việc thuê một công ty bên ngoài (<code>アウト</code>) thực hiện một phần công việc.</li>' +
                         '<li><strong>イ. アウトバウンド需要 (Outbound Demand):</strong> ❌ Sai. "Outbound" có nghĩa là "đi ra ngoài", chỉ nhu cầu của người dân trong nước đi du lịch/chi tiêu ở nước ngoài.</li>' +
                         '<li><strong>ウ. インキュベーター (Incubator):</strong> ❌ Sai. Là "vườn ươm", một tổ chức hỗ trợ các công ty khởi nghiệp.</li>' +
                         '<li><strong>エ. インバウンド需要 (Inbound Demand):</strong> ✅ <strong>Đúng.</strong> Đây là thuật ngữ được sử dụng rộng rãi trong ngành du lịch và kinh tế để chỉ dòng khách du lịch, du khách nước ngoài <strong>"đi vào" (Inbound)</strong> một quốc gia (<code>訪日した外国人</code>). Hiệu quả kinh tế từ dòng khách này được gọi là <strong>nhu cầu Inbound (<code>インバウンド需要</code>)</strong>.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>インバウンド</code> (Inbound), <code>訪日した外国人</code> (Người nước ngoài đến thăm Nhật Bản)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ (Phân biệt Inbound và Outbound):</strong></li>' +
                         '<ul><li><strong>Inbound (<code>インバウンド</code>):</strong> Đi <strong>VÀO</strong> (Khách nước ngoài vào nước mình).</li>' +
                         '<li><strong>Outbound (<code>アウトバウンド</code>):</strong> Đi <strong>RA</strong> (Người nước mình đi ra nước ngoài).</li></ul></ul>'
      },
      {
        'question': 'ASP利用方式と自社開発の自社センター利用方式(以下”自社方式”という)の採算性を比較する。次の条件のとき，ASP利用方式の期待利益(効果額－費用)が自社方式よりも大きくなるのは，自社方式の初期投資額が何万円を超えたときか。ここで，比較期間は5年とする。<br><br>〔条件〕<ul><li>両方式とも，システム利用による効果額は500万円／年とする。</li><li>ASP利用方式の場合，初期費用は0円，利用料は300万円／年とする。</li><li>自社方式の場合，初期投資額は定額法で減価償却計算を行い，5年後の残存簿価は0円とする。また，運用費は100万円／年とする。</li><li>金利やその他の費用は考慮しないものとする。</li></ul>',
        'options': ['500', '1,000', '1,500', '2,000'],
        'answer': 1,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> So sánh lợi nhuận (<code>期待利益</code>) giữa việc dùng ASP và Tự phát triển (<code>自社方式</code>). Lợi nhuận của ASP sẽ <strong>lớn hơn (<code>大きくなる</code>)</strong> khi chi phí đầu tư ban đầu (<code>初期投資額</code>) của việc Tự phát triển <strong>vượt quá (<code>超えたとき</code>)</strong> bao nhiêu? (So sánh trong <strong>5 năm</strong>).</li>' +
                         '<li><strong>Điều kiện:</strong></li>' +
                         '<ul><li><strong>ASP:</strong> Đầu tư ban đầu: 0. Chi phí vận hành: 300/năm. Hiệu quả: 500/năm.</li>' +
                         '<li><strong>Tự phát triển:</strong> Đầu tư ban đầu: <strong>X</strong> (khấu hao 5 năm). Chi phí vận hành: 100/năm. Hiệu quả: 500/năm.</li></ul>' +
                         '<li><strong>ア.</strong> 500</li> <li><strong>イ.</strong> 1,000</li> <li><strong>ウ.</strong> 1,500</li> <li><strong>エ.</strong> 2,000</li></ul>' +
                         '<hr><h3><strong>Phân tích & Tính toán</strong></h3>' +
                         '<p>Ta cần tính Lợi nhuận = (Tổng Hiệu quả - Tổng Chi phí) trong 5 năm cho cả hai phương án.</p>' +
                         '<ol><li><strong>Tính Lợi nhuận của phương án ASP trong 5 năm:</strong></li>' +
                         '<ul><li>Tổng hiệu quả = 500 vạn/năm × 5 năm = 2,500 vạn.</li>' +
                         '<li>Tổng chi phí = 0 (ban đầu) + (300 vạn/năm × 5 năm) = 1,500 vạn.</li>' +
                         '<li><strong>Lợi nhuận ASP = 2,500 - 1,500 = 1,000 vạn.</strong></li></ul>' +
                         '<li><strong>Tính Lợi nhuận của phương án Tự phát triển trong 5 năm (gọi chi phí đầu tư ban đầu là X):</strong></li>' +
                         '<ul><li>Tổng hiệu quả = 500 vạn/năm × 5 năm = 2,500 vạn.</li>' +
                         '<li>Chi phí khấu hao trong 5 năm chính là toàn bộ chi phí đầu tư ban đầu X (vì <code>償却期間5年</code>).</li>' +
                         '<li>Tổng chi phí vận hành = 100 vạn/năm × 5 năm = 500 vạn.</li>' +
                         '<li>Tổng chi phí = X + 500 vạn.</li>' +
                         '<li><strong>Lợi nhuận Tự phát triển = 2,500 - (X + 500) = 2,000 - X.</strong></li></ul>' +
                         '<li><strong>Tìm X để (Lợi nhuận ASP) > (Lợi nhuận Tự phát triển):</strong></li>' +
                         '<ul><li><code>1,000 > 2,000 - X</code></li>' +
                         '<li><code>X > 2,000 - 1,000</code></li>' +
                         '<li><code>X > 1,000 vạn</code></li></ul></ol>' +
                         '<p>=> Lợi nhuận của ASP sẽ lớn hơn khi chi phí đầu tư ban đầu của việc tự phát triển <strong>vượt quá 1,000 vạn yên</strong>.</p>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Mẹo ghi nhớ:</strong> Đây là bài toán giải bất phương trình. Hãy lập một phương trình đơn giản: `Lợi nhuận ASP = Lợi nhuận Tự phát triển`, tìm ra điểm hòa vốn (Break-even Point). `1000 = 2000 - X` → `X = 1000`. Vậy nếu X > 1000 thì Tự phát triển sẽ lỗ hơn (lợi nhuận thấp hơn).</li></ul>'
      },
      {
        'question': '企業でのRPAの活用方法として，最も適切なものはどれか。',
        'options': ['M&Aといった経営層が行う重要な戦略の採択', '個人の嗜好に合わせたサービスの提供', '潜在顧客層に関する大量の行動データからの規則性抽出', '定型的な事務処理の効率化'],
        'answer': 3,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Đâu là cách ứng dụng phù hợp nhất của <strong>RPA</strong> trong doanh nghiệp?</li>' +
                         '<li><strong>ア.</strong> Thông qua các chiến lược quan trọng của ban lãnh đạo như M&A.</li>' +
                         '<li><strong>イ.</strong> Cung cấp dịch vụ phù hợp với sở thích cá nhân.</li>' +
                         '<li><strong>ウ.</strong> Trích xuất các quy tắc từ dữ liệu hành vi của nhóm khách hàng tiềm năng.</li>' +
                         '<li><strong>エ.</strong> Nâng cao hiệu quả của <strong>xử lý nghiệp vụ văn phòng lặp đi lặp lại (<code>定型的な事務処理</code>)</strong>.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. ❌ Sai.</strong> Quyết định chiến lược M&A là công việc của con người, đòi hỏi phán đoán phức tạp.</li>' +
                         '<li><strong>イ. ❌ Sai.</strong> Cung cấp dịch vụ cá nhân hóa (Personalization) là ứng dụng của <strong>AI / Machine Learning</strong>.</li>' +
                         '<li><strong>ウ. ❌ Sai.</strong> Trích xuất quy luật từ dữ liệu lớn (Data Mining) là ứng dụng của <strong>AI / Machine Learning</strong>.</li>' +
                         '<li><strong>エ. ✅ Đúng.</strong> <strong>RPA (Robotic Process Automation)</strong> chính là việc sử dụng <strong>robot phần mềm</strong> để <strong>tự động hóa</strong> các <strong>công việc văn phòng lặp đi lặp lại (<code>定型的な事務処理</code>)</strong> (như copy-paste, nhập liệu), nhằm nâng cao hiệu quả.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>RPA</code>, <code>定型的な事務処理</code> (Công việc văn phòng lặp lại)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> RPA = Robot ảo cho nhân viên văn phòng, chuyên làm những việc **nhàm chán, lặp đi lặp lại (<code>定型的な</code>)**.</li></ul>'
      },
      {
        'question': 'A社では，顧客の行動や天候，販売店のロケーションなどの多くの項目から成るデータを取得している。これらのデータを分析することによって販売数量の変化を説明することを考える。その際，説明に使用するパラメータをできるだけ少数に絞りたい。このときに用いる分析法として，最も適切なものはどれか。',
        'options': ['ABC分析', 'クラスター分析', '主成分分析', '相関分析'],
        'answer': 2,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Một công ty có dữ liệu với rất nhiều biến số (<code>多くの項目</code> - nhiều mục) (hành vi khách hàng, thời tiết, vị trí...). Họ muốn giải thích sự thay đổi của doanh số bán hàng, nhưng muốn <strong>giảm số lượng tham số (<code>パラメータをできるだけ少数に絞りたい</code>)</strong> xuống ít nhất có thể. Phương pháp phân tích nào là phù hợp?</li>' +
                         '<li><strong>ア.</strong> Phân tích ABC</li>' +
                         '<li><strong>イ.</strong> Phân tích cụm (<code>クラスター分析</code>)</li>' +
                         '<li><strong>ウ.</strong> Phân tích thành phần chính (<code>主成分分析</code>)</li>' +
                         '<li><strong>エ.</strong> Phân tích tương quan (<code>相関分析</code>)</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. ABC分析 (ABC Analysis):</strong> ❌ Sai. Dùng để phân loại các mục (ví dụ: sản phẩm) thành 3 nhóm A, B, C dựa trên tầm quan trọng (ví dụ: quy tắc 80/20).</li>' +
                         '<li><strong>イ. クラスター分析 (Cluster Analysis):</strong> ❌ Sai. Dùng để <strong>gom nhóm (<code>グループ分け</code>)</strong> các đối tượng tương tự lại với nhau (ví dụ: nhóm khách hàng).</li>' +
                         '<li><strong>ウ. 主成分分析 (Principal Component Analysis - PCA):</strong> ✅ <strong>Đúng.</strong> Đây là một kỹ thuật <strong>giảm chiều dữ liệu (<code>次元削減</code>)</strong>. Khi có quá nhiều biến (<code>多くの項目</code>), PCA sẽ kết hợp chúng lại thành một vài "thành phần chính" (<code>主成分</code>) mới mà vẫn giữ lại được phần lớn thông tin. Mục đích chính của nó là để <strong>giảm số lượng tham số (<code>パラメータを少数に</code>)</strong>.</li>' +
                         '<li><strong>エ. 相関分析 (Correlation Analysis):</strong> ❌ Sai. Dùng để xem xét mối quan hệ (mạnh hay yếu) giữa hai biến số.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>主成分分析</code> (PCA), <code>パラメータを...少数に絞りたい</code> (Muốn giảm/thu hẹp số lượng tham số)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> Có quá nhiều cột (<code>多くの項目</code>) → Cần <strong>giảm cột (<code>少数に絞る</code>)</strong> → Dùng <strong>PCA (<code>主成分分析</code>)</strong>.</li></ul>'
      },
      {
        'question': '経営戦略に基づいて策定される情報システム戦略の責任者として、最も適切なものはどれか。',
        'options': ['CIO', '基幹システムの利用部門の部門長', 'システム開発プロジェクトマネージャ', 'システム企画担当者'],
        'answer': 0,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Ai là người <strong>chịu trách nhiệm (<code>責任者</code>)</strong> cao nhất cho <strong>Chiến lược hệ thống thông tin (<code>情報システム戦略</code>)</strong>, được xây dựng dựa trên chiến lược kinh doanh?</li>' +
                         '<li><strong>ア.</strong> CIO</li>' +
                         '<li><strong>イ.</strong> Trưởng phòng của bộ phận sử dụng hệ thống lõi.</li>' +
                         '<li><strong>ウ.</strong> Quản lý dự án (PM) phát triển hệ thống.</li>' +
                         '<li><strong>エ.</strong> Người phụ trách lập kế hoạch hệ thống.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. CIO (Chief Information Officer):</strong> ✅ <strong>Đúng.</strong> <strong>CIO (Giám đốc Công nghệ Thông tin - <code>最高情報責任者</code>)</strong> là chức danh cấp cao (C-level) trong ban lãnh đạo, chịu trách nhiệm về việc hoạch định và thực thi <strong>chiến lược (<code>戦略</code>)</strong> CNTT sao cho phù hợp và thúc đẩy chiến lược kinh doanh của toàn công ty.</li>' +
                         '<li><strong>イ, ウ, エ. ❌ Sai.</strong> Trưởng phòng sử dụng (User), Quản lý dự án (PM), và Nhân viên kế hoạch (Planner) đều là các vai trò quan trọng nhưng họ hoạt động ở cấp độ bộ phận hoặc dự án (cấp độ chiến thuật/vận hành), không phải là người chịu trách nhiệm cao nhất (<code>責任者</code>) cho <strong>chiến lược (<code>戦略</code>)</strong> CNTT toàn doanh nghiệp.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>CIO</code>, <code>情報システム戦略</code> (Chiến lược hệ thống thông tin), <code>責任者</code> (Người chịu trách nhiệm)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ (Các chức danh C-level):</strong></li>' +
                         '<ul><li><strong>CEO:</strong> Điều hành chung (Executive).</li>' +
                         '<li><strong>CFO:</strong> Tài chính (Financial).</li>' +
                         '<li><strong>CIO:</strong> Thông tin (<strong>I</strong>nformation - <code>情報</code>).</li>' +
                         '<li><strong>CTO:</strong> Công nghệ (Technology - <code>技術</code>).</li></ul></ul>'
      },
      {
        'question': 'A社の営業部門では，成約件数を増やすことを目的として，営業担当者が企画を顧客に提案する活動を始めた。この営業活動の達成度を測るための指標としてKGI(Key Goal Indicator)とKPI(Key Performance Indicator)を定めたい。本活動におけるKGIとKPIの組合せとして，最も適切なものはどれか。<br><img src=\'img/r5-08.png\' width=\'400px\' height=\'auto\'>',
        'options': ['ア', 'イ', 'ウ', 'エ'],
        'answer': 1,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Một phòng kinh doanh bắt đầu hoạt động "đề xuất kế hoạch cho khách hàng" (<code>顧客に提案する活動</code>) với mục đích "tăng số lượng hợp đồng thành công" (<code>成約件数を増やす</code>). Đâu là sự kết hợp đúng giữa KGI và KPI cho hoạt động này?</li>' +
                         '<li>(Bảng cung cấp 4 lựa chọn kết hợp)</li></ul>' +
                         '<hr><h3><strong>Phân tích (KGI vs KPI)</strong></h3>' +
                         '<p>Định nghĩa:</p>' +
                         '<ul><li><strong>KGI (Key Goal Indicator - <code>重要目標達成指標</code>):</strong> Đo lường <strong>MỤC TIÊU / KẾT QUẢ cuối cùng</strong> (<code>Goal</code>).</li>' +
                         '<li><strong>KPI (Key Performance Indicator - <code>重要業績評価指標</code>):</strong> Đo lường <strong>QUÁ TRÌNH / HIỆU SUẤT / HÀNH ĐỘNG (<code>Performance</code>)</strong> dẫn đến kết quả đó.</li></ul>' +
                         '<p>Áp dụng vào bài:</p>' +
                         '<ul><li><strong>Mục tiêu cuối cùng (Goal)</strong> là gì? → "tăng số hợp đồng thành công". Vậy, <strong>KGI = <code>成約件数</code> (Số hợp đồng)</strong>.</li>' +
                         '<li><strong>Hành động/Quá trình (Performance)</strong> để đạt mục tiêu là gì? → "đề xuất kế hoạch". Vậy, <strong>KPI = <code>提案件数</code> (Số lần đề xuất)</strong>.</li></ul>' +
                         '<p>=> Sự kết hợp đúng là <strong>KGI: <code>成約件数</code>, KPI: <code>提案件数</code></strong> (Đáp án <strong>イ</strong>).</p>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Mẹo ghi nhớ (Rất quan trọng):</strong></li>' +
                         '<ul><li><strong>KGI (Goal)</strong> = <strong>Kết quả</strong> (Đích đến).</li>' +
                         '<li><strong>KPI (Performance)</strong> = <strong>Quá trình / Hành động</strong> (Chặng đường).</li></ul>' +
                         '<li>Bạn phải thực hiện *Hành động* (KPI: <code>提案</code>) để đạt được *Kết quả* (KGI: <code>成約</code>).</li></ul>'
      },
      {
        'question': 'ソーシャルメディアポリシーを制定する目的として，適切なものだけを全て挙げたものはどれか。<br><ol type=\"a\"><li>企業がソーシャルメディアを使用する際の心得やルールなどを取り決めて，社外の人々が理解できるようにするため</li><li>企業に属する役員や従業員が，公私限らずにソーシャルメディアを使用する際のルールを示すため</li><li>ソーシャルメディアが企業に対して取材や問合せを行う際の条件や窓口での取扱いのルールを示すため</li></ol>',
        'options': ['a', 'a，b', 'a，c', 'b，c'],
        'answer': 1,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Đâu là tất cả các mục đích phù hợp của việc ban hành <strong>Chính sách Truyền thông Xã hội (<code>ソーシャルメディアポリシー</code>)</strong>?</li>' +
                         '<li><strong>a.</strong> Để quy định các quy tắc/tinh thần khi công ty sử dụng MXH, cho <strong>người bên ngoài (<code>社外の人々</code>)</strong> hiểu.</li>' +
                         '<li><strong>b.</strong> Để chỉ ra các quy tắc cho <strong>nhân viên (<code>従業員</code>)</strong> khi sử dụng MXH (cả việc công và tư <code>公私限らず</code>).</li>' +
                         '<li><strong>c.</strong> Để chỉ ra các quy tắc/cửa sổ liên hệ khi <strong>MXH (báo chí) phỏng vấn (<code>取材</code>)</strong> công ty.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>a. ✅ Đúng.</strong> Một phần của chính sách (policy) là để công khai cho các bên bên ngoài (khách hàng, đối tác) biết về quan điểm và quy tắc ứng xử của công ty khi *công ty* (với tư cách pháp nhân) sử dụng mạng xã hội.</li>' +
                         '<li><strong>b. ✅ Đúng.</strong> Đây là mục đích chính và quan trọng nhất: cung cấp một bộ quy tắc và hướng dẫn rõ ràng cho tất cả <strong>nhân viên (<code>従業員</code>)</strong> về cách hành xử trên mạng xã hội, <strong>kể cả khi sử dụng với tư cách cá nhân (<code>公私限らず</code>)</strong>, để tránh các rủi ro về danh tiếng và bảo mật cho công ty.</li>' +
                         '<li><strong>c. ❌ Sai.</strong> Quy tắc về việc trả lời phỏng vấn (<code>取材</code>) hay các yêu cầu từ báo chí (bao gồm cả các trang mạng xã hội) thường nằm trong một chính sách riêng về <strong>Quan hệ công chúng (<code>広報</code> - PR Policy)</strong> hoặc Chính sách truyền thông, không phải là mục đích chính của Social Media Policy (vốn tập trung vào cách *sử dụng* MXH).</li></ul>' +
                         '<p>=> Vậy, các mục đích phù hợp là a và b.</p>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>ソーシャルメディアポリシー</code> (Social Media Policy)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> Chính sách này có hai đối tượng: <strong>1. Bên ngoài (<code>社外</code>)</strong> (Công ty nói gì?) và <strong>2. Bên trong (<code>従業員</code>)</strong> (Nhân viên nói gì?).</li></ul>'
      },
      {
        'question': 'フォーラム標準に関する記述として，最も適切なものはどれか。',
        'options': ['工業製品が，定められた品質，寸法，機能及び形状の範囲内であることを保証したもの', '公的な標準化機関において，透明かつ公正な手続の下，関係者が合意の上で制定したもの', '特定の企業が開発した仕様が広く利用された結果，事実上の業界標準になったもの', '特定の分野に関心のある複数の企業などが集まって結成した組織が，規格として作ったもの'],
        'answer': 3,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Mô tả nào là đúng nhất về <strong>Tiêu chuẩn Diễn đàn (<code>フォーラム標準</code> - Forum Standard)</strong>?</li>' +
                         '<li><strong>ア.</strong> Đảm bảo sản phẩm công nghiệp tuân thủ chất lượng, kích thước...</li>' +
                         '<li><strong>イ.</strong> Tiêu chuẩn do các <strong>tổ chức công (<code>公的機関</code>)</strong> (như ISO) ban hành.</li>' +
                         '<li><strong>ウ.</strong> Tiêu chuẩn <strong>trên thực tế (<code>事実上</code>)</strong> do một sản phẩm của công ty cụ thể được chấp nhận rộng rãi.</li>' +
                         '<li><strong>エ.</strong> Tiêu chuẩn do <strong>nhiều công ty (<code>複数の企業</code>)</strong> có cùng mối quan tâm tập hợp lại, thành lập một <strong>tổ chức (<code>組織</code>)</strong>, <strong>cùng nhau (<code>共同</code>)</strong> xây dựng.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<p>Phân loại các loại tiêu chuẩn:</p>' +
                         '<ul><li><strong>ア. ❌ Sai.</strong> Đây là mô tả chung về tiêu chuẩn (ví dụ: <code>JIS</code>).</li>' +
                         '<li><strong>イ. ❌ Sai.</strong> Tiêu chuẩn do các tổ chức công (ISO, IEC, ITU) ban hành được gọi là <strong>Tiêu chuẩn De Jure (<code>デジュール標準</code>)</strong> (Tiêu chuẩn theo luật định).</li>' +
                         '<li><strong>ウ. ❌ Sai.</strong> Một sản phẩm (ví dụ: định dạng <code>.doc</code> của Microsoft Word) được chấp nhận rộng rãi và trở thành tiêu chuẩn <strong>trên thực tế (<code>事実上</code>)</strong> được gọi là <strong>Tiêu chuẩn De Facto (<code>デファクト標準</code>)</strong>.</li>' +
                         '<li><strong>エ. ✅ Đúng.</strong> <strong>Tiêu chuẩn Diễn đàn (<code>フォーラム標準</code>)</strong> (hay Consortium Standard) được hình thành khi <strong>nhiều công ty (<code>複数の企業</code>)</strong> có cùng mối quan tâm về một chủ đề (ví dụ: USB, Wi-Fi, Web) tập hợp lại thành một "diễn đàn" (consortium) để <strong>cùng nhau (<code>共同</code>)</strong> xây dựng và công bố một bộ thông số kỹ thuật chung. (Ví dụ: W3C, USB-IF, Wi-Fi Alliance).</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>フォーラム標準</code> (Forum Standard)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ (3 loại tiêu chuẩn):</strong></li>' +
                         '<ul><li><strong>De Jure (<code>デジュール</code>):</strong> Do tổ chức <strong>Công (<code>公的</code>)</strong> ban hành (ví dụ: ISO).</li>' +
                         '<li><strong>De Facto (<code>デファクト</code>):</strong> <strong>Thực tế (<code>事実上</code>)</strong> nó là chuẩn (ví dụ: Windows).</li>' +
                         '<li><strong>Forum (<code>フォーラム</code>):</strong> Do <strong>Nhiều công ty (<code>複数の企業</code>)</strong> hợp tác (<code>共同</code>) (ví dụ: USB).</li></ul></ul>'
      },
      {
        'question': 'ITの進展や関連するサービスの拡大によって，様々なデータやツールを自社のビジネスや日常の業務に利用することが可能となっている。このようなデータやツールを課題解決などのために適切に活用できる能力を示す用語として，最も適切なものはどれか。',
        'options': ['アクセシビリティ', 'コアコンピタンス', '情報リテラシー', 'デジタルディバイド'],
        'answer': 2,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Thuật ngữ nào chỉ <strong>năng lực (<code>能力</code>)</strong> có thể <strong>sử dụng một cách phù hợp (<code>適切に活用できる</code>)</strong> các dữ liệu và công cụ CNTT khác nhau để giải quyết vấn đề trong kinh doanh và công việc hàng ngày?</li>' +
                         '<li><strong>ア.</strong> Accessibility (Khả năng tiếp cận)</li>' +
                         '<li><strong>イ.</strong> Core Competence (Năng lực cốt lõi)</li>' +
                         '<li><strong>ウ.</strong> Information Literacy (Kiến thức/Trình độ thông tin)</li>' +
                         '<li><strong>エ.</strong> Digital Divide (Khoảng cách số)</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. アクセシビリティ (Accessibility):</strong> ❌ Sai. Là khả năng tiếp cận, đảm bảo người khuyết tật (<code>障害者</code>) cũng có thể sử dụng.</li>' +
                         '<li><strong>イ. コアコンピタンス (Core Competence):</strong> ❌ Sai. Là "Năng lực cốt lõi", thế mạnh cạnh tranh độc quyền của một doanh nghiệp.</li>' +
                         '<li><strong>ウ. 情報リテラシー (Information Literacy):</strong> ✅ <strong>Đúng.</strong> Đây là thuật ngữ dùng để chỉ <strong>năng lực (<code>能力</code>)</strong> tìm kiếm, đánh giá, và <strong>sử dụng (<code>活用</code>)</strong> thông tin/công cụ CNTT một cách hiệu quả để giải quyết vấn đề.</li>' +
                         '<li><strong>エ. デジタルディバイド (Digital Divide):</strong> ❌ Sai. Là "Khoảng cách số", sự chênh lệch (<code>格差</code>) về khả năng tiếp cận và sử dụng CNTT giữa các nhóm người.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>情報リテラシー</code> (Information Literacy), <code>活用できる能力</code> (Năng lực sử dụng)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> Literacy = Trình độ/Kiến thức. Information Literacy = Trình độ/Kiến thức (năng lực) về thông tin.</li></ul>'
      },
      {
        'question': 'スマートフォンに内蔵された非接触型 IC チップと外部の RFID リーダーによって、実現しているサービスの事例だけを全て挙げたものはどれか。<br><ol type=\"a\"><li>移動中の通話の際に基地局を自動的に切り替えて通話を保持する。</li><li>駅の自動改札を通過する際の定期券として利用する。</li><li>海外でも国内と同じ電子メールなどのサービスを利用する。</li><li>決済手続情報を得るために QR コードを読み込む。</li></ol>',
        'options': ['a，b，c，d', 'a，b，d', 'b', 'b，d'],
        'answer': 2,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Đâu là ví dụ về dịch vụ được thực hiện bằng <strong>chip IC không tiếp xúc (<code>非接触型ICチップ</code>)</strong> (như <strong>NFC</strong>) tích hợp trong smartphone và đầu đọc RFID bên ngoài?</li>' +
                         '<li><strong>a.</strong> Tự động chuyển đổi trạm phát sóng (<code>基地局</code>) khi di chuyển để giữ cuộc gọi.</li>' +
                         '<li><strong>b.</strong> Sử dụng làm <strong>vé tàu/vé tháng (<code>定期券</code>)</strong> tại cổng soát vé tự động.</li>' +
                         '<li><strong>c.</strong> Sử dụng email ở nước ngoài.</li>' +
                         '<li><strong>d.</strong> <strong>Đọc mã QR (<code>QR コードを読み込む</code>)</strong> để lấy thông tin thanh toán.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<p>Công nghệ được mô tả là <strong>NFC (Near Field Communication)</strong>, một dạng của RFID.</p>' +
                         '<ul><li><strong>a. ❌ Sai.</strong> Tự động chuyển đổi trạm phát sóng là chức năng của mạng di động (Handover/Hand-off), không phải NFC.</li>' +
                         '<li><strong>b. ✅ Đúng.</strong> Sử dụng điện thoại làm vé tàu/vé tháng (<code>定期券</code>) (ví dụ: Mobile Suica) tại cổng soát vé tự động là ứng dụng phổ biến nhất của NFC.</li>' +
                         '<li><strong>c. ❌ Sai.</strong> Sử dụng email ở nước ngoài là dịch vụ chuyển vùng dữ liệu (Data Roaming), không phải NFC.</li>' +
                         '<li><strong>d. ❌ Sai.</strong> Đọc mã QR (<code>QR コード</code>) là sử dụng <strong>camera (<code>カメラ</code>)</strong>, không phải chip NFC/RFID.</li></ul>' +
                         '<p>=> Vậy, chỉ có (b) là đúng.</p>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>非接触型 IC チップ</code> (Chip IC không tiếp xúc)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> Chip không tiếp xúc = Chạm (<code>タッチ</code>) để thanh toán/qua cửa → <strong>Vé tàu điện tử (b)</strong>. (Phân biệt với <code>QRコード</code> là dùng camera).</li></ul>'
      },
      {
        'question': 'ある製品の今月の売上高と費用は表のとおりであった。販売単価を1,000円から800円に変更するとき，赤字にならないためには少なくとも毎月何個を販売する必要があるか。ここで，固定費及び製品1個当たりの変動費は変化しないものとする。<br><img src=\'img/r5-13.png\' width=\'400px\' height=\'auto\'>',
        'options': ['2,400', '2,500', '4,800', '6,000'],
        'answer': 0,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Cho bảng KQKD hiện tại. Nếu giảm Giá bán (<code>販売単価</code>) từ 1,000 xuống 800, cần bán ít nhất bao nhiêu sản phẩm để <strong>không bị lỗ (<code>赤字にならない</code>)</strong> (tức là hòa vốn)? (Biến phí/sp và Tổng Cố định phí không đổi).</li>' +
                         '<li><strong>Bảng hiện tại:</strong></li>' +
                         '<ul><li>Doanh thu (<code>売上高</code>): 2,000,000</li>' +
                         '<li>Giá bán (<code>販売単価</code>): 1,000</li>' +
                         '<li>Số lượng (<code>販売個数</code>): 2,000 (tính từ 2,000,000 / 1,000)</li>' +
                         '<li>Chi phí cố định (<code>固定費</code>): 1,200,000</li>' +
                         '<li>Tổng chi phí (<code>総費用</code>): 1,800,000</li></ul>' +
                         '<li><strong>ア.</strong> 2,400</li> <li><strong>イ.</strong> 2,500</li> <li><strong>ウ.</strong> 4,800</li> <li><strong>エ.</strong> 6,000</li></ul>' +
                         '<hr><h3><strong>Phân tích & Tính toán</strong></h3>' +
                         '<ol><li><strong>Tính Biến phí trên mỗi sản phẩm (<code>変動費</code>) (hiện tại):</strong></li>' +
                         '<ul><li>Tổng Biến phí = Tổng chi phí - Cố định phí = 1,800,000 - 1,200,000 = 600,000 yên.</li>' +
                         '<li>Biến phí / sản phẩm = Tổng Biến phí / Số lượng = 600,000 yên / 2,000 cái = <strong>300 yên/cái</strong>.</li></ul>' +
                         '<li><strong>Tính Điểm hòa vốn (<code>損益分岐点</code>) với giá bán MỚI (800 yên):</strong></li>' +
                         '<ul><li>Giá bán mới = 800 yên.</li>' +
                         '<li>Biến phí / sản phẩm = 300 yên (không đổi).</li>' +
                         '<li>Cố định phí = 1,200,000 yên (không đổi).</li>' +
                         '<li>Lãi gộp / sản phẩm (mới) (<code>限界利益</code>) = Giá bán mới - Biến phí/sp = 800 - 300 = 500 yên.</li>' +
                         '<li><strong>Điểm hòa vốn (Số lượng) = Tổng Cố định phí / Lãi gộp/sp</strong></li>' +
                         '<li><code>= 1,200,000 / 500 = <strong>2,400 cái</strong></code>.</li></ul></ol>' +
                         '<p>=> Cần bán ít nhất <strong>2,400</strong> cái để hòa vốn (không bị lỗ).</p>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>赤字にならない</code> (Không bị lỗ = Hòa vốn), <code>損益分岐点</code> (Điểm hòa vốn)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ (Công thức Điểm hòa vốn):</strong> <strong>Số lượng hòa vốn = <code>固定費</code> (Cố định phí) / (<code>販売単価</code> (Giá bán) - <code>変動費</code> (Biến phí/sp))</strong>.</li></ul>'
      },
      {
        'question': 'AIの活用領域の一つである自然言語処理が利用されている事例として，適切なものだけを全て挙げたものはどれか。<br><ol type=\"a\"><li>Webサイト上で，日本語の文章を入力すると即座に他言語に翻訳される。</li><li>災害時にSNSに投稿された文字情報をリアルタイムで収集し，地名と災害情報などを解析して被災状況を把握する。</li><li>スマートスピーカーを利用して，音声によって家電の操作や音楽の再生を行う。</li><li>駐車場の出入口に設置したカメラでナンバープレートを撮影して，文字認識処理をし，精算済みの車両がゲートに近付くと自動で開く。</li></ol>',
        'options': ['a，b，c', 'a，b，d', 'a，c，d', 'b，c，d'],
        'answer': 0,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Đâu là tất cả các ví dụ về ứng dụng của <strong>Xử lý ngôn ngữ tự nhiên (<code>自然言語処理</code> - NLP)</strong>?</li>' +
                         '<li><strong>a.</strong> <strong>Dịch (<code>翻訳</code>)</strong> văn bản tiếng Nhật sang ngôn ngữ khác ngay lập tức.</li>' +
                         '<li><strong>b.</strong> <strong>Phân tích (<code>解析</code>)</strong> thông tin văn bản (<code>文字情報</code>) từ SNS để nắm bắt tình hình.</li>' +
                         '<li><strong>c.</strong> Dùng loa thông minh (<code>スマートスピーカー</code>), hiểu <strong>giọng nói (<code>音声</code>)</strong> để điều khiển thiết bị.</li>' +
                         '<li><strong>d.</strong> Dùng camera nhận dạng <strong>biển số xe (<code>ナンバープレート</code>)</strong>.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>a. ✅ NLP.</strong> <strong>Dịch máy (<code>機械翻訳</code>)</strong> là một ứng dụng kinh điển của NLP.</li>' +
                         '<li><strong>b. ✅ NLP.</strong> <strong>Phân tích văn bản (<code>テキスト解析</code>)</strong> từ mạng xã hội để trích xuất thông tin (địa danh, loại thiên tai) cũng là một ứng dụng cốt lõi của NLP.</li>' +
                         '<li><strong>c. ✅ NLP (kết hợp ASR).</strong> Loa thông minh (<code>スマートスピーカー</code>) cần hiểu được mệnh lệnh bằng <strong>giọng nói (<code>音声</code>)</strong>. Quá trình này bao gồm 2 bước AI: 1. Nhận dạng giọng nói (ASR) để chuyển âm thanh thành văn bản, và 2. <strong>NLP</strong> để <strong>hiểu ý nghĩa (<code>意味を理解</code>)</strong> của văn bản đó.</li>' +
                         '<li><strong>d. ❌ Không phải NLP.</strong> Nhận dạng ký tự (<code>文字認識処理</code>) trên biển số xe là công nghệ <strong>Nhận dạng ký tự quang học (OCR)</strong>, một lĩnh vực của Thị giác máy tính (Computer Vision), không phải NLP (vốn xử lý "ngôn ngữ" và "ý nghĩa").</li></ul>' +
                         '<p>=> Vậy, các ứng dụng đúng là a, b, và c.</p>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>自然言語処理</code> (Xử lý ngôn ngữ tự nhiên - NLP)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> NLP xử lý những gì liên quan đến <strong>ngôn ngữ nói và viết</strong> của con người (dịch thuật, phân tích văn bản, hiểu ý nghĩa giọng nói). (Phân biệt với <strong>OCR</strong> = "đọc" ký tự từ hình ảnh).</li></ul>'
      },
      {
        'question': 'パスワードに関連した不適切な行為a～dのうち，不正アクセス禁止法で規制されている行為だけを全て挙げたものはどれか。<br><ol type=\"a\"><li>業務を代行してもらうために，社内データベースアクセス用の自分のIDとパスワードを同僚に伝えた。</li><li>自分のPCに，社内データベースアクセス用の自分のパスワードのメモを貼り付けた。</li><li>電子メールに添付されていた文書をPCに取り込んだ。その文書の閲覧用パスワードを，その文書を見る権利のない人に教えた。</li><li>人気のショッピングサイトに登録されている他人のIDとパスワードを，無断で第三者に伝えた。</li></ol>',
        'options': ['a，b，c，d', 'a，c，d', 'a，d', 'd'],
        'answer': 3,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Trong các hành vi không phù hợp liên quan đến mật khẩu, hành vi nào bị cấm bởi <strong>Luật cấm truy cập trái phép (<code>不正アクセス禁止法</code>)</strong>?</li>' +
                         '<li><strong>a.</strong> Chia sẻ ID/mật khẩu <strong>của mình (<code>自分の</code>)</strong> cho đồng nghiệp.</li>' +
                         '<li><strong>b.</strong> Dán (<code>貼り付けた</code>) mật khẩu của mình lên PC.</li>' +
                         '<li><strong>c.</strong> Chia sẻ mật khẩu <strong>của tài liệu (<code>文書</code>)</strong> cho người không có quyền.</li>' +
                         '<li><strong>d.</strong> Chia sẻ ID/mật khẩu <strong>của người khác (<code>他人の</code>)</strong> cho <strong>bên thứ ba (<code>第三者</code>)</strong>.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<p>Luật này (Điều 5) cấm hành vi "tiếp tay" cho truy cập trái phép, được định nghĩa là việc cung cấp *thông tin xác thực của người khác* cho bên thứ ba (không phải là người quản lý hoặc chủ sở hữu) một cách bất hợp pháp.</p>' +
                         '<ul><li><strong>a. ❌ Không bị cấm.</strong> Việc chia sẻ mật khẩu của <strong>chính mình (<code>自分の</code>)</strong> không phải là hành vi bị luật này điều chỉnh (mặc dù nó vi phạm nghiêm trọng chính sách bảo mật nội bộ).</li>' +
                         '<li><strong>b. ❌ Không bị cấm.</strong> Dán mật khẩu lên PC là một hành vi bảo mật tồi (<code>脆弱性</code>), nhưng không phải là hành vi "cung cấp cho bên thứ ba" bị luật cấm.</li>' +
                         '<li><strong>c. ❌ Không bị cấm.</strong> Mật khẩu của một <strong>tài liệu (<code>文書</code>)</strong> không phải là "thông tin xác thực để truy cập vào một hệ thống được bảo vệ" (<code>アクセス制御機能</code>), do đó việc chia sẻ nó không thuộc phạm vi của luật này.</li>' +
                         '<li><strong>d. ✅ Bị cấm.</strong> Cung cấp ID và mật khẩu <strong>của người khác (<code>他人</code>)</strong> cho một <strong>bên thứ ba (<code>第三者</code>)</strong> mà không có sự cho phép chính là hành vi "tiếp tay cho truy cập trái phép" (<code>不正アクセス助長行為</code>) và bị nghiêm cấm.</li></ul>' +
                         '<p>=> Vậy, chỉ có (d) là hành vi bị cấm.</p>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>不正アクセス禁止法</code> (Luật cấm truy cập trái phép)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> Luật này chủ yếu cấm 2 việc: <strong>1. Tự mình hack (<code>不正アクセス</code>)</strong> và <strong>2. Cung cấp thông tin đăng nhập CỦA NGƯỜI KHÁC (<code>他人のID</code>) cho bên thứ ba (<code>第三者</code>)</strong>.</li></ul>'
      },
      {
        'question': 'コールセンターにおける電話応対業務において，AIを活用し，より有効なFAQシステムを実現する事例として，最も適切なものはどれか。',
        'options': ['オペレーター業務研修の一環で，既存のFAQを用いた質疑応答の事例をWebの画面で学習する。', 'ガイダンスに従って入力されたダイヤル番号に従って，FAQの該当項目を担当するオペレーターに振り分ける。', '受信した電話番号から顧客の情報，過去の問合せ内容及び回答の記録を，顧客情報データベースから呼び出してオペレーターの画面に表示する。', '電話応対時に，質問の音声から感情と内容を読み取って解析し，FAQから最適な回答候補を選び出す確度を高める。'],
        'answer': 3,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Đâu là ví dụ về việc <strong>ứng dụng AI (<code>AIを活用</code>)</strong> để tạo ra một <strong>hệ thống FAQ hiệu quả hơn (<code>有効なFAQシステム</code>)</strong> trong tổng đài?</li>' +
                         '<li><strong>ア.</strong> Dùng FAQ để đào tạo (<code>研修</code>) nhân viên.</li>' +
                         '<li><strong>イ.</strong> Dùng phím bấm (<code>ダイヤル番号</code>) để điều hướng cuộc gọi.</li>' +
                         '<li><strong>ウ.</strong> Hiển thị (<code>表示する</code>) thông tin khách hàng cũ dựa trên SĐT.</li>' +
                         '<li><strong>エ.</strong> Khi đang gọi, <strong>phân tích (<code>解析</code>) nội dung và cảm xúc từ giọng nói (<code>音声から</code>)</strong>, và <strong>chọn ra (<code>選び出す</code>) câu trả lời FAQ tối ưu</strong>.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. ❌ Sai.</strong> Đây là e-learning cho nhân viên, không phải là ứng dụng AI để cải thiện bản thân hệ thống FAQ.</li>' +
                         '<li><strong>イ. ❌ Sai.</strong> Đây là hệ thống <strong>IVR (Interactive Voice Response - <code>自動音声応答</code>)</strong> cơ bản, không cần AI.</li>' +
                         '<li><strong>ウ. ❌ Sai.</strong> Đây là chức năng <strong>CTI (Computer Telephony Integration)</strong> cơ bản, hiển thị thông tin khách hàng, không cải thiện FAQ.</li>' +
                         '<li><strong>エ. ✅ Đúng.</strong> Việc sử dụng AI để <strong>phân tích giọng nói và nội dung (<code>音声から...内容を読み取って解析</code>)</strong> theo thời gian thực để <strong>đề xuất câu trả lời tối ưu từ FAQ (<code>FAQから最適な回答候補</code>)</strong> chính là một cách ứng dụng AI để làm cho hệ thống FAQ trở nên hiệu quả và thông minh hơn.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>AIを活用</code>, <code>有効なFAQシステム</code> (Hệ thống FAQ hiệu quả)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> Tìm đáp án mà AI thực sự "suy nghĩ" (<code>解析</code>) và "hỗ trợ" (<code>選び出す</code>) dựa trên nội dung hội thoại (<code>音声</code>) để đưa ra câu trả lời từ FAQ.</li></ul>'
      },
      {
        'question': 'ITの進展や関連するサービスの拡大によって，様々なデータやツールを自社のビジネスや日常の業務に利用することが可能となっている。このようなデータやツールを課題解決などのために適切に活用できる能力を示す用語として，最も適切なものはどれか。',
        'options': ['アクセシビリティ', 'コアコンピタンス', '情報リテラシー', 'デジタルディバイド'],
        'answer': 2,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Thuật ngữ nào chỉ <strong>năng lực (<code>能力</code>)</strong> có thể <strong>sử dụng một cách phù hợp (<code>適切に活用できる</code>)</strong> các dữ liệu và công cụ CNTT khác nhau để giải quyết vấn đề trong kinh doanh và công việc hàng ngày?</li>' +
                         '<li><strong>ア.</strong> Accessibility (Khả năng tiếp cận)</li>' +
                         '<li><strong>イ.</strong> Core Competence (Năng lực cốt lõi)</li>' +
                         '<li><strong>ウ.</strong> Information Literacy (Kiến thức/Trình độ thông tin)</li>' +
                         '<li><strong>エ.</strong> Digital Divide (Khoảng cách số)</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. アクセシビリティ (Accessibility):</strong> ❌ Sai. Là khả năng tiếp cận, đảm bảo người khuyết tật (<code>障害者</code>) cũng có thể sử dụng.</li>' +
                         '<li><strong>イ. コアコンピタンス (Core Competence):</strong> ❌ Sai. Là "Năng lực cốt lõi", thế mạnh cạnh tranh độc quyền của một doanh nghiệp.</li>' +
                         '<li><strong>ウ. 情報リテラシー (Information Literacy):</strong> ✅ <strong>Đúng.</strong> Đây là thuật ngữ dùng để chỉ <strong>năng lực (<code>能力</code>)</strong> tìm kiếm, đánh giá, và <strong>sử dụng (<code>活用</code>)</strong> thông tin/công cụ CNTT một cách hiệu quả để giải quyết vấn đề.</li>' +
                         '<li><strong>エ. デジタルディバイド (Digital Divide):</strong> ❌ Sai. Là "Khoảng cách số", sự chênh lệch (<code>格差</code>) về khả năng tiếp cận và sử dụng CNTT giữa các nhóm người.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>情報リテラシー</code> (Information Literacy), <code>活用できる能力</code> (Năng lực sử dụng)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> Literacy = Trình độ/Kiến thức. Information Literacy = Trình độ/Kiến thức (năng lực) về thông tin.</li></ul>'
      },
  {
        'question': 'EUの一般データ保護規則(GDPR)に関する記述として，適切なものだけを全て挙げたものはどれか。<br><ol type=\"a\"><li>EU域内に拠点がある事業者が，EU域内に対してデータやサービスを提供している場合は，適用の対象となる。</li><li>EU域内に拠点がある事業者が，アジアや米国などEU域外に対してデータやサービスを提供している場合は，適用の対象とならない。</li><li>EU域内に拠点がない事業者が，アジアや米国などEU域外に対してだけデータやサービスを提供している場合は，適用の対象とならない。</li><li>EU域内に拠点がない事業者が，アジアや米国などからEU域内に対してデータやサービスを提供している場合は，適用の対象とならない。</li></ol>',
        'options': [
          'a',
          'a，b，c',
          'a，c',
          'a，c，d'
        ],
        'answer': 2,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Mô tả nào là đúng về phạm vi áp dụng của <strong>GDPR</strong>?</li>' +
                         '<li><strong>a.</strong> Có cơ sở tại EU và cung cấp dịch vụ trong EU → Bị áp dụng.</li>' +
                         '<li><strong>b.</strong> Có cơ sở tại EU nhưng cung cấp dịch vụ ngoài EU → Không bị áp dụng.</li>' +
                         '<li><strong>c.</strong> Không có cơ sở tại EU và cung cấp dịch vụ ngoài EU → Không bị áp dụng.</li>' +
                         '<li><strong>d.</strong> Không có cơ sở tại EU nhưng cung cấp dịch vụ cho EU → Không bị áp dụng.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<p>GDPR áp dụng trong hai trường hợp chính:</p>' +
                         '<ol><li><strong>Theo Lãnh thổ (<code>拠点</code>):</strong> Tổ chức có cơ sở tại EU.</li>' +
                         '<li><strong>Theo Mục tiêu (<code>サービス</code>):</strong> Tổ chức (dù ở đâu) cung cấp hàng hóa/dịch vụ hoặc giám sát hành vi của các cá nhân <strong>đang ở trong EU</strong>.</li></ol>' +
                         '<ul><li><strong>a. ✅ Đúng.</strong> Thỏa mãn cả điều kiện 1 và 2.</li>' +
                         '<li><strong>b. ❌ Sai.</strong> Chỉ cần có cơ sở tại EU (Điều kiện 1) là sẽ bị áp dụng, bất kể cung cấp dịch vụ cho thị trường nào.</li>' +
                         '<li><strong>c. ✅ Đúng.</strong> Không thỏa mãn cả điều kiện 1 (không có cơ sở) và 2 (không cung cấp cho EU).</li>' +
                         '<li><strong>d. ❌ Sai.</strong> Mặc dù không có cơ sở tại EU, nhưng việc cung cấp dịch vụ <strong>cho thị trường EU (<code>EU域内に対して</code>)</strong> làm cho họ trở thành đối tượng bị áp dụng (theo Điều kiện 2).</li></ul>' +
                         '<p>=> Vậy, các mô tả đúng là a và c.</p>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>GDPR</code></strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> GDPR áp dụng nếu bạn <strong>"ở EU"</strong> (<code>拠点がある</code>) (TH1) hoặc bạn <strong>"bán hàng cho người ở EU"</strong> (<code>EU域内に対して</code>) (TH2).</li></ul>'
      },
      {
        'question': '住宅地に設置してある飲料の自動販売機に組み込まれた通信機器と，遠隔で自動販売機を監視しているコンピュータが，ネットワークを介してデータを送受信することによって在庫管理を実現するような仕組みがある。このように，機械同士がネットワークを介して互いに情報をやり取りすることによって，自律的に高度な制御や動作を行う仕組みはどれか。',
        'options': [
          'MOT',
          'MRP',
          'M2M',
          'O2O'
        ],
        'answer': 2,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Cơ chế trong đó các <strong>máy móc (<code>機械同士</code>)</strong> tự trao đổi thông tin với nhau qua mạng để thực hiện các hành động hoặc kiểm soát tự trị (ví dụ: máy bán hàng tự động <code>自動販売機</code> gửi dữ liệu tồn kho <code>在庫管理</code> về trung tâm) được gọi là gì?</li>' +
                         '<li><strong>ア.</strong> MOT</li>' +
                         '<li><strong>イ.</strong> MRP</li>' +
                         '<li><strong>ウ.</strong> M2M</li>' +
                         '<li><strong>エ.</strong> O2O</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. MOT (Management of Technology):</strong> ❌ Sai. Là "Quản trị công nghệ".</li>' +
                         '<li><strong>イ. MRP (Material Requirements Planning):</strong> ❌ Sai. Là "Hoạch định nhu cầu nguyên vật liệu", dùng trong sản xuất.</li>' +
                         '<li><strong>ウ. M2M (Machine to Machine):</strong> ✅ <strong>Đúng.</strong> Đây là thuật ngữ chỉ việc các thiết bị <strong>máy móc (<code>機械同士</code>)</strong> giao tiếp trực tiếp với nhau (Machine-to-Machine) mà không cần sự can thiệp của con người. Đây là một khái niệm cốt lõi của IoT.</li>' +
                         '<li><strong>エ. O2O (Online to Offline):</strong> ❌ Sai. Là mô hình kinh doanh kết nối trực tuyến (Online) và ngoại tuyến (Offline).</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>機械同士</code> (Máy móc với nhau)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> <strong>M</strong>achine-<strong>to</strong>-<strong>M</strong>achine → <strong>M2M</strong>.</li></ul>'
      },
      {
        'question': '資本活用の効率性を示す指標はどれか。',
        'options': [
          '売上高営業利益率',
          '自己資本比率',
          '総資本回転率',
          '損益分岐点比率'
        ],
        'answer': 2,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Chỉ số nào thể hiện <strong>hiệu quả sử dụng vốn (<code>資本活用の効率性</code>)</strong>?</li>' +
                         '<li><strong>ア.</strong> Tỷ suất lợi nhuận HĐKD trên doanh thu</li>' +
                         '<li><strong>イ.</strong> Tỷ lệ vốn chủ sở hữu (<code>自己資本比率</code>)</li>' +
                         '<li><strong>ウ.</strong> Vòng quay tổng vốn (<code>総資本回転率</code>)</li>' +
                         '<li><strong>エ.</strong> Tỷ lệ điểm hòa vốn</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<p>Phân loại các chỉ số tài chính:</p>' +
                         '<ul><li><strong>ア. ❌ Sai.</strong> Tỷ suất lợi nhuận (<code>...利益率</code>) đo lường <strong>Khả năng sinh lời (<code>収益性</code>)</strong>.</li>' +
                         '<li><strong>イ. ❌ Sai.</strong> Tỷ lệ vốn chủ sở hữu (<code>...比率</code>) đo lường <strong>Sự an toàn tài chính (<code>安全性</code>)</strong> (công ty có vay nợ nhiều không).</li>' +
                         '<li><strong>ウ. ✅ Đúng.</strong> <strong>Vòng quay tổng vốn (<code>総資本回転率</code> - Total Asset Turnover)</strong> được tính bằng `Doanh thu / Tổng vốn`. Chỉ số này đo lường xem một đồng vốn (<code>資本</code>) bỏ ra tạo ra được bao nhiêu đồng doanh thu, thể hiện <strong>hiệu quả (<code>効率性</code>)</strong> sử dụng tài sản (vốn).</li>' +
                         '<li><strong>エ. ❌ Sai.</strong> Tỷ lệ điểm hòa vốn (<code>損益分岐点比率</code>) đo lường <strong>Sự an toàn tài chính (<code>安全性</code>)</strong>.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>資本活用の効率性</code> (Hiệu quả sử dụng vốn)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> "Hiệu quả" (<code>効率性</code>) trong tài chính thường liên quan đến "Vòng quay" (<code>回転率</code>) - tức là vốn quay được bao nhiêu vòng để tạo ra doanh thu.</li></ul>'
      },
      {
        'question': 'フリーミアムの事例として，適切なものはどれか。',
        'options': [
          '購入した定額パスをもっていれば，期限内は何杯でもドリンクをもらえるファーストフード店のサービス',
          '無料でダウンロードして使うことはできるが，プログラムの改変は許されていない統計解析プログラム',
          '名刺を個人で登録・管理する基本機能を無料で提供し，社内関係者との間での顧客情報の共有や人物検索などの追加機能を有料で提供する名刺管理サービス',
          '有料広告を収入源とすることによって，無料で配布している地域限定の生活情報などの広報誌'
        ],
        'answer': 2,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Đâu là ví dụ phù hợp nhất của mô hình <strong>Freemium</strong>?</li>' +
                         '<li><strong>ア.</strong> Mua vé tháng (<code>定額パス</code>) để uống bao nhiêu tùy thích → Mô hình Đăng ký (Subscription).</li>' +
                         '<li><strong>イ.</strong> Miễn phí sử dụng (<code>無料でダウンロード</code>) nhưng không được sửa đổi (<code>改変は許されていない</code>) → Mô hình Freeware.</li>' +
                         '<li><strong>ウ.</strong> <strong>Chức năng cơ bản miễn phí (<code>基本機能を無料で提供</code>)</strong>, nhưng <strong>chức năng bổ sung (<code>追加機能</code>)</strong> (như chia sẻ trong công ty) thì <strong>trả phí (<code>有料</code>)</strong>.</li>' +
                         '<li><strong>エ.</strong> Miễn phí cho người dùng, kiếm tiền từ <strong>quảng cáo (<code>有料広告</code>)</strong> → Mô hình Quảng cáo.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ウ. ✅ Đúng.</strong> Đây chính là định nghĩa của <strong>Freemium</strong>: là từ ghép của <strong>Free</strong> (miễn phí cơ bản) và <strong>Premium</strong> (cao cấp trả phí). Mô hình này cho phép người dùng trải nghiệm miễn phí các tính năng cốt lõi và thu hút họ nâng cấp lên bản trả phí để sử dụng các tính năng cao cấp hơn.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>フリーミアム</code> (Freemium)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> <strong>Free</strong> (Miễn phí cơ bản - <code>無料</code>) + <strong>Premium</strong> (Cao cấp trả phí - <code>有料</code>) = <strong>Freemium</strong>.</li></ul>'
      },
      {
        'question': '資金決済法における前払式支払手段に該当するものはどれか。',
        'options': [
          'Webサイト上で預金口座から振込や送金ができるサービス',
          'インターネット上で電子的な通貨として利用可能な暗号資産',
          '全国のデパートや商店などで共通に利用可能な使用期限のない商品券',
          '店舗などでの商品購入時に付与され，同店での次回の購入代金として利用可能なポイント'
        ],
        'answer': 2,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Đâu là ví dụ thuộc về <strong>"Phương tiện thanh toán trả trước" (<code>前払式支払手段</code>)</strong> theo Luật Thanh toán Quỹ (<code>資金決済法</code>)?</li>' +
                         '<li><strong>ア.</strong> Dịch vụ chuyển tiền, gửi tiền (<code>振込や送金</code>) qua tài khoản ngân hàng.</li>' +
                         '<li><strong>イ.</strong> Tài sản mã hóa (<code>暗号資産</code> - Crypto Currency).</li>' +
                         '<li><strong>ウ.</strong> <strong>Phiếu quà tặng (<code>商品券</code>)</strong> không hết hạn, dùng được ở nhiều cửa hàng.</li>' +
                         '<li><strong>エ.</strong> <strong>Điểm thưởng (<code>ポイント</code>)</strong> nhận được khi mua hàng.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. ❌ Sai.</strong> Dịch vụ chuyển tiền, gửi tiền (Internet Banking) là dịch vụ của ngân hàng (<code>為替取引</code>), không phải là phương tiện trả trước.</li>' +
                         '<li><strong>イ. ❌ Sai.</strong> Tài sản mã hóa (tiền ảo) được định nghĩa riêng (<code>暗号資産</code>) trong luật, không phải là <code>前払式支払手段</code>.</li>' +
                         '<li><strong>ウ. ✅ Đúng.</strong> <strong>Phiếu quà tặng (<code>商品券</code>)</strong> là một ví dụ điển hình của phương tiện thanh toán trả trước. Bạn <strong>trả tiền trước (<code>前払</code>)</strong> để mua một phiếu/thẻ có giá trị, sau đó dùng nó để thanh toán. Các loại thẻ trả trước (prepaid card) như thẻ quà tặng, thẻ Suica (loại không định danh) cũng thuộc nhóm này.</li>' +
                         '<li><strong>エ. ❌ Sai.</strong> Điểm thưởng (<code>ポイント</code>) được *tặng* khi mua hàng (không phải do người dùng bỏ tiền ra mua trước) thường không được coi là phương tiện thanh toán trả trước theo luật này (có các điều khoản miễn trừ).</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>前払式支払手段</code> (Phương tiện thanh toán trả trước)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> "Trả trước" (<code>前払</code>) = Bạn bỏ tiền ra mua một thứ (phiếu, thẻ) để dùng thanh toán sau. <strong>Phiếu quà tặng (<code>商品券</code>)</strong> là ví dụ dễ thấy nhất.</li></ul>'
      },
      {
        'question': 'OMG(Object Management Group)によって維持されており，国際規格ISO/IEC 19510として標準化されているビジネスプロセスのモデリング手法及び表記法はどれか。',
        'options': [
          'BABOK',
          'BPMN',
          'BPO',
          'BPR'
        ],
        'answer': 1,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Phương pháp và ký hiệu <strong>mô hình hóa quy trình nghiệp vụ (<code>ビジネスプロセスのモデリング</code>)</strong> nào được duy trì bởi <strong>OMG</strong> và được tiêu chuẩn hóa là <strong>ISO/IEC 19510</strong>?</li>' +
                         '<li><strong>ア.</strong> BABOK</li>' +
                         '<li><strong>イ.</strong> BPMN</li>' +
                         '<li><strong>ウ.</strong> BPO</li>' +
                         '<li><strong>エ.</strong> BPR</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. BABOK (Business Analysis Body of Knowledge):</strong> ❌ Sai. Là một cẩm nang kiến thức (<code>Body of Knowledge</code>) về phân tích nghiệp vụ, không phải là một ký hiệu mô hình hóa.</li>' +
                         '<li><strong>イ. BPMN (Business Process Model and Notation):</strong> ✅ <strong>Đúng.</strong> Là "Mô hình và Ký hiệu Quy trình Nghiệp vụ". Đây là một tiêu chuẩn đồ họa (<code>表記法</code>) để <strong>mô hình hóa (<code>モデリング</code>)</strong> các quy trình nghiệp vụ. Nó được duy trì bởi <strong>OMG</strong> và đã được chuẩn hóa thành <strong>ISO/IEC 19510</strong>.</li>' +
                         '<li><strong>ウ. BPO (Business Process Outsourcing):</strong> ❌ Sai. Là "Thuê ngoài quy trình nghiệp vụ".</li>' +
                         '<li><strong>エ. BPR (Business Process Re-engineering):</strong> ❌ Sai. Là "Tái cấu trúc quy trình nghiệp vụ".</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>BPMN</code>, <code>OMG</code>, <code>ビジネスプロセスのモデリング</code> (Mô hình hóa quy trình nghiệp vụ), <code>ISO/IEC 19510</code></strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> <strong>B</strong>usiness <strong>P</strong>rocess <strong>M</strong>odel and <strong>N</strong>otation → <strong>BPMN</strong>. (Chữ "M" và "N" (Model and Notation) chính là <code>モデリング手法及び表記法</code>).</li></ul>'
      },
      {
        'question': '需要量が年間を通じて安定している場合において，定量発注方式に関する記述として，最も適切なものはどれか。',
        'options': [
          '最適な発注量は，発注費用と在庫維持費用の総額が最小となる場合である。',
          '発注回数の多寡で比較したとき，発注回数の多い方が商品を保管するスペースを広くする必要がある。',
          '発注は毎週金曜日，毎月末など，決められた同じサイクルで行われる。',
          '毎回需要予測に基づき発注が行われる。'
        ],
        'answer': 0,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Mô tả nào là đúng nhất về <strong>Phương pháp đặt hàng định lượng (<code>定量発注方式</code>)</strong> khi nhu cầu (<code>需要量</code>) ổn định?</li>' +
                         '<li><strong>ア.</strong> Lượng đặt hàng tối ưu là khi <strong>tổng (<code>総額</code>) của chi phí đặt hàng (<code>発注費用</code>) và chi phí lưu kho (<code>在庫維持費用</code>) là nhỏ nhất (<code>最小</code>)</strong>.</li>' +
                         '<li><strong>イ.</strong> Nếu đặt hàng nhiều lần (<code>発注回数の多い方</code>) thì cần nhiều không gian lưu kho hơn (<code>スペースを広く</code>).</li>' +
                         '<li><strong>ウ.</strong> Đặt hàng theo chu kỳ cố định (<code>決められた同じサイクル</code>) (ví dụ: thứ 6 hàng tuần).</li>' +
                         '<li><strong>エ.</strong> Mỗi lần đặt hàng đều dựa trên dự báo nhu cầu (<code>需要予測</code>).</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<p>Phân biệt 2 phương pháp đặt hàng:</p>' +
                         '<ul><li><strong>1. <code>定量発注方式</code> (Quantitative Ordering - Đặt hàng định lượng):</strong> Khi tồn kho giảm xuống đến một "điểm đặt hàng lại" (ví dụ: còn 20 thùng), một "số lượng cố định" (<code>定量</code>) (ví dụ: 100 thùng) sẽ được đặt.</li>' +
                         '<li><strong>2. <code>定期発注方式</code> (Periodic Ordering - Đặt hàng định kỳ):</strong> Đặt hàng theo một "chu kỳ cố định" (<code>定期</code>) (ví dụ: thứ 2 hàng tuần), số lượng đặt mỗi lần sẽ thay đổi.</li></ul>' +
                         '<ul><li><strong>ア. ✅ Đúng.</strong> "Số lượng cố định" (<code>定量</code>) tối ưu để đặt hàng trong phương pháp này chính là <strong>Lượng đặt hàng kinh tế (EOQ - Economic Order Quantity)</strong>. Đây là số lượng mà tại đó <strong>tổng chi phí đặt hàng (<code>発注費用</code>) và chi phí lưu kho (<code>在庫維持費用</code>) là thấp nhất (<code>最小</code>)</strong>.</li>' +
                         '<li><strong>イ. ❌ Sai.</strong> Đặt hàng nhiều lần (tức là mỗi lần đặt số lượng ít) thì lượng tồn kho trung bình sẽ *thấp hơn*, do đó cần *ít* không gian lưu trữ hơn.</li>' +
                         '<li><strong>ウ. ❌ Sai.</strong> Đặt hàng theo chu kỳ cố định (<code>決められた同じサイクル</code>) là <strong>Phương pháp đặt hàng định kỳ (<code>定期発注方式</code>)</strong>, không phải <code>定量</code>.</li>' +
                         '<li><strong>エ. ❌ Sai.</strong> Vì nhu cầu được giả định là ổn định (<code>安定している</code>), nên không cần dự đoán (<code>需要予測</code>) mỗi lần.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>定量発注方式</code> (Phương pháp đặt hàng định lượng)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> Đặt hàng "định lượng" (<code>定量</code>) = Đặt một lượng cố định. Lượng cố định tối ưu (EOQ) là khi <strong>(Chi phí đặt hàng + Chi phí lưu kho) là nhỏ nhất (<code>最小</code>)</strong>.</li></ul>'
      },
      {
        'question': '企業の行為に関する記述a～cのうち，コンプライアンスにおいて問題となるおそれのある行為だけを全て挙げたものはどれか。<br><ol type=\"a\"><li>新商品の名称を消費者に浸透させるために，誰でも応募ができて，商品名の一部を答えさせるだけの簡単なクイズを新聞や自社ホームページ，雑誌などに広く掲載し，応募者の中から抽選で現金10万円が当たるキャンペーンを実施した。</li><li>人気のあるWebサイトを運営している企業が，広告主から宣伝の依頼があった特定の商品を好意的に評価する記事を，広告であることを表示することなく一般の記事として掲載した。</li><li>フランスをイメージしてデザインしたバッグを国内で製造し，原産国の国名は記載せず，パリの風景写真とフランス国旗だけを印刷したタグを添付して，販売した。</li></ol>',
        'options': [
          'a，b',
          'a，b，c',
          'a，c',
          'b，c'
        ],
        'answer': 3,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Hành vi nào (a, b, c) có thể vi phạm <strong>Tuân thủ (<code>コンプライアンス</code>)</strong>?</li>' +
                         '<li><strong>a.</strong> Tổ chức rút thăm trúng thưởng (<code>抽選</code>) 10 vạn yên cho ai cũng tham gia được (<code>誰でも応募</code>) (Open Kensho).</li>' +
                         '<li><strong>b.</strong> Đăng bài PR tích cực cho sản phẩm mà <strong>không ghi rõ là quảng cáo (<code>広告であることを表示することなく</code>)</strong> (Quảng cáo ngầm).</li>' +
                         '<li><strong>c.</strong> Sản xuất túi ở Nhật (<code>国内で製造</code>) nhưng gắn mác ảnh cờ Pháp và Paris (<code>フランス国旗</code>) (Gây nhầm lẫn xuất xứ).</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>a. ❌ Hợp pháp.</strong> Đây là một chiến dịch "Rút thăm trúng thưởng công khai" (<code>オープン懸賞</code> - Open Kensho). Theo "Luật chống quà tặng không chính đáng" (<code>景品表示法</code>), hình thức này (không gắn liền với việc mua hàng) được phép và giá trị giải thưởng có thể lên tới hàng triệu yên, nên 10 vạn yên là hoàn toàn hợp pháp.</li>' +
                         '<li><strong>b. ✅ Vi phạm.</strong> Đây là hành vi <strong>Quảng cáo ngầm (<code>ステルスマーケティング</code> - Stealth Marketing, hay "Stema")</strong>. Việc đăng bài đánh giá tích cực mà không ghi rõ đây là "quảng cáo" (<code>広告であることを表示することなく</code>) là hành vi lừa dối người tiêu dùng và vi phạm "Luật chống quà tặng không chính đáng" (<code>景品表示法</code>).</li>' +
                         '<li><strong>c. ✅ Vi phạm.</strong> Sản phẩm sản xuất tại Nhật (<code>国内で製造</code>) nhưng lại gắn mác ảnh Paris và cờ Pháp (<code>フランス国旗</code>) là hành vi cố ý <strong>gây nhầm lẫn về nguồn gốc xuất xứ (<code>原産国誤認</code>)</strong>, vi phạm "Luật chống cạnh tranh không lành mạnh" (<code>不正競争防止法</code>).</li></ul>' +
                         '<p>=> Vậy, các hành vi vi phạm là b và c.</p>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>コンプライアンス</code> (Tuân thủ)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> Hành vi (b) <strong>Quảng cáo ngầm (<code>ステマ</code>)</strong> và (c) <strong>Gây nhầm lẫn xuất xứ (<code>原産国誤認</code>)</strong> là các hành vi lừa dối khách hàng và bị cấm.</li></ul>'
      },
      {
        'question': '組立製造販売業A社では経営効率化の戦略として，部品在庫を極限まで削減するためにかんばん方式を導入することにした。この戦略実現のために，A社が在庫管理システムとオンラインで連携させる情報システムとして，最も適切なものはどれか。なお，A社では在庫管理システムで部品在庫も管理している。また，現在は他のどのシステムも在庫管理システムと連携していないものとする。',
        'options': [
          '会計システム',
          '部品購買システム',
          '顧客管理システム',
          '販売管理システム'
        ],
        'answer': 1,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Để áp dụng <strong>phương thức Kanban (<code>かんばん方式</code>)</strong> nhằm <strong>giảm tồn kho linh kiện (<code>部品在庫を極限まで削減</code>)</strong>, hệ thống quản lý tồn kho (<code>在庫管理システム</code>) cần được kết nối trực tuyến (<code>連携</code>) với hệ thống nào?</li>' +
                         '<li><strong>ア.</strong> Hệ thống kế toán (<code>会計システム</code>)</li>' +
                         '<li><strong>イ.</strong> Hệ thống mua linh kiện (<code>部品購買システム</code>)</li>' +
                         '<li><strong>ウ.</strong> Hệ thống quản lý khách hàng (<code>顧客管理システム</code>)</li>' +
                         '<li><strong>エ.</strong> Hệ thống quản lý bán hàng (<code>販売管理システム</code>)</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<p>Phương thức Kanban là một phần của JIT (Just-in-Time). Nó hoạt động bằng cách chỉ đặt hàng/sản xuất linh kiện khi cần thiết. Khi hệ thống quản lý tồn kho phát hiện ra rằng linh kiện trong kho sắp hết (do đã được sử dụng cho sản xuất), nó cần phải tự động gửi tín hiệu (Kanban) để yêu cầu thêm linh kiện.</p>' +
                         '<ul><li><strong>ア. ❌ Sai.</strong> Hệ thống kế toán (<code>会計</code>) ghi nhận chi phí *sau khi* mua, không trực tiếp tham gia vào việc đặt hàng.</li>' +
                         '<li><strong>イ. ✅ Đúng.</strong> Để giảm tồn kho, khi hệ thống quản lý tồn kho phát hiện thiếu hàng (<code>在庫</code>), nó phải liên kết trực tiếp với <strong>Hệ thống mua hàng (<code>部品購買システム</code>)</strong> để tự động tạo đơn đặt hàng linh kiện mới ngay lập tức.</li>' +
                         '<li><strong>ウ. ❌ Sai.</strong> Hệ thống quản lý khách hàng (<code>顧客管理</code> - CRM) không liên quan đến tồn kho linh kiện.</li>' +
                         '<li><strong>エ. ❌ Sai.</strong> Hệ thống quản lý bán hàng (<code>販売管理</code>) quản lý việc bán *thành phẩm*, không phải *mua* linh kiện.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>かんばん方式</code> (Kanban), <code>部品在庫</code> (Tồn kho linh kiện)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> Kanban = Tín hiệu "hết hàng, cần <strong>MUA</strong> thêm" → Phải liên kết với <strong>Hệ thống mua hàng (<code>購買システム</code>)</strong>.</li></ul>'
      },
      {
        'question': 'ファミリーレストランチェーンAでは，店舗の運営戦略を検討するために，店舗ごとの座席数，客単価及び売上高の三つの要素の関係を分析することにした。各店舗の三つの要素を，一つの図表で全店舗分可視化するときに用いる図表として，最も適切なものはどれか。',
        'options': [
          'ガントチャート',
          'バブルチャート',
          'マインドマップ',
          'ロードマップ'
        ],
        'answer': 1,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Biểu đồ nào là phù hợp nhất để trực quan hóa (<code>可視化</code>) mối quan hệ của <strong>ba yếu tố (<code>三つの要素</code>)</strong>: (1) Số ghế, (2) Giá trung bình/khách, và (3) Doanh thu, cho tất cả các cửa hàng?</li>' +
                         '<li><strong>ア.</strong> Biểu đồ Gantt</li>' +
                         '<li><strong>イ.</strong> Biểu đồ bong bóng (<code>バブルチャート</code>)</li>' +
                         '<li><strong>ウ.</strong> Sơ đồ tư duy (<code>マインドマップ</code>)</li>' +
                         '<li><strong>エ.</strong> Lộ trình (<code>ロードマップ</code>)</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. ガントチャート (Gantt Chart):</strong> ❌ Sai. Dùng để quản lý tiến độ (<code>スケジュール</code>) dự án.</li>' +
                         '<li><strong>イ. バブルチャート (Bubble Chart):</strong> ✅ <strong>Đúng.</strong> <strong>Biểu đồ bong bóng</strong> là một biến thể của biểu đồ phân tán. Nó cho phép biểu diễn <strong>3 biến số (<code>三つの要素</code>)</strong> trên một biểu đồ 2D:<ul><li>Trục X (ví dụ: Số ghế)</li><li>Trục Y (ví dụ: Giá trung bình/khách)</li><li><strong>Kích thước của bong bóng (<code>バブル</code>)</strong> (ví dụ: Doanh thu)</li></ul></li>' +
                         '<li><strong>ウ. マインドマップ (Mind Map):</strong> ❌ Sai. Dùng để phát triển ý tưởng, brainstorm.</li>' +
                         '<li><strong>エ. ロードマップ (Roadmap):</strong> ❌ Sai. Dùng để thể hiện kế hoạch theo thời gian.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>三つの要素</code> (Ba yếu tố)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong></li>' +
                         '<ul><li>2 yếu tố (ví dụ: X và Y) → <strong>Biểu đồ phân tán (<code>散布図</code>)</strong>.</li>' +
                         '<li><strong>3 yếu tố</strong> (ví dụ: X, Y, và Z) → <strong>Biểu đồ bong bóng (<code>バブルチャート</code>)</strong> (Z được thể hiện bằng kích thước).</li></ul></ul>'
      },
      {
        'question': 'AIを開発するベンチャー企業のA社が，資金調達を目的に，金融商品取引所に初めて上場することになった。このように，企業の未公開の株式を，新たに公開することを表す用語として，最も適切なものはどれか。',
        'options': [
          'IPO',
          'LBO',
          'TOB',
          'VC'
        ],
        'answer': 0,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Thuật ngữ nào chỉ việc một công ty <strong>lần đầu tiên niêm yết (<code>初めて上場</code>)</strong> và <strong>chào bán cổ phiếu (<code>新たに公開</code>)</strong> (trước đó chưa công khai <code>未公開</code>) ra công chúng để huy động vốn (<code>資金調達</code>)?</li>' +
                         '<li><strong>ア.</strong> IPO</li>' +
                         '<li><strong>イ.</strong> LBO</li>' +
                         '<li><strong>ウ.</strong> TOB</li>' +
                         '<li><strong>エ.</strong> VC</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. IPO (Initial Public Offering):</strong> ✅ <strong>Đúng.</strong> Là "Phát hành công khai (<code>Public</code>) lần đầu (<code>Initial</code>)". Đây là quá trình một công ty tư nhân chào bán cổ phiếu ra công chúng lần đầu tiên và niêm yết trên sàn chứng khoán.</li>' +
                         '<li><strong>イ. LBO (Leveraged Buyout):</strong> ❌ Sai. Là hình thức "Mua lại doanh nghiệp bằng vốn vay" (<code>レバレッジド・バイアウト</code>).</li>' +
                         '<li><strong>ウ. TOB (Takeover Bid):</strong> ❌ Sai. Là hình thức "Chào mua công khai" (<code>株式公開買付け</code>), thường dùng khi muốn thâu tóm một công ty *đã* niêm yết.</li>' +
                         '<li><strong>エ. VC (Venture Capital):</strong> ❌ Sai. Là "Quỹ đầu tư mạo hiểm" (<code>ベンチャーキャピタル</code>), là *người đi đầu tư*, không phải là *hành động* niêm yết.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>IPO</code>, <code>初めて上場する</code> (Lần đầu lên sàn), <code>新たに公開する</code> (Công khai lần đầu)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> <strong>I</strong>nitial (Lần đầu) <strong>P</strong>ublic (Công khai) <strong>O</strong>ffering → <strong>IPO</strong>.</li></ul>'
      },
      {
        'question': '不正な販売行為を防ぐために，正当な理由なく映像ソフトのコピープロテクトを無効化するプログラムの販売行為を規制している法律はどれか。',
        'options': [
          '商標法',
          '特定商取引に関する法律',
          '不正アクセス行為の禁止等に関する法律',
          '不正競争防止法'
        ],
        'answer': 3,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Luật nào quy định cấm (<code>規制</code>) hành vi bán các chương trình dùng để <strong>vô hiệu hóa (<code>無効化</code>)</strong> cơ chế <strong>chống sao chép (<code>コピープロテクト</code>)</strong> của phần mềm video?</li>' +
                         '<li><strong>ア.</strong> Luật nhãn hiệu (<code>商標法</code>)</li>' +
                         '<li><strong>イ.</strong> Luật giao dịch thương mại đặc định (<code>特定商取引</code>)</li>' +
                         '<li><strong>ウ.</strong> Luật cấm truy cập trái phép (<code>不正アクセス禁止法</code>)</li>' +
                         '<li><strong>エ.</strong> Luật chống cạnh tranh không lành mạnh (<code>不正競争防止法</code>)</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. ❌ Sai.</strong> Luật nhãn hiệu (bảo vệ thương hiệu, logo).</li>' +
                         '<li><strong>イ. ❌ Sai.</strong> Luật giao dịch thương mại đặc định (bảo vệ người tiêu dùng trong các giao dịch như bán hàng qua mạng, đa cấp).</li>' +
                         '<li><strong>ウ. ❌ Sai.</strong> Luật cấm truy cập trái phép (chống hack mật khẩu, xâm nhập hệ thống).</li>' +
                         '<li><strong>エ. ✅ Đúng.</strong> <strong>Luật chống cạnh tranh không lành mạnh (<code>不正競争防止法</code>)</strong>, ngoài việc chống sao chép kiểu dáng, còn có các điều khoản (Điều 2, Khoản 1) cấm việc cung cấp các thiết bị, chương trình (hoặc dịch vụ) dùng để bẻ khóa, vô hiệu hóa các biện pháp bảo vệ kỹ thuật (<code>技術的制限手段を無効化</code>) như <strong>chống sao chép (<code>コピープロテクト</code>)</strong>.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>コピープロテクトを無効化</code> (Vô hiệu hóa chống sao chép)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> Bẻ khóa, hack bản quyền, bán tool bẻ khóa... thường liên quan đến <strong>Cạnh tranh không lành mạnh (<code>不正競争防止法</code>)</strong>.</li></ul>'
      },
      {
        'question': '犯罪によって得た資金を正当な手段で得たように見せかける行為を防ぐために，金融機関などが実施する取組を表す用語として，最も適切なものはどれか。',
        'options': [
          'AML(Anti-Money Laundering)',
          'インサイダー取引規制',
          'スキミング',
          'フィッシング'
        ],
        'answer': 0,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Thuật ngữ nào chỉ các nỗ lực của tổ chức tài chính (<code>金融機関</code>) để ngăn chặn hành vi <strong>biến tiền từ tội phạm (<code>犯罪によって得た資金</code>) thành tiền hợp pháp</strong> (rửa tiền)?</li>' +
                         '<li><strong>ア.</strong> AML (Anti-Money Laundering - Chống rửa tiền)</li>' +
                         '<li><strong>イ.</strong> Quy định giao dịch nội gián (<code>インサイダー取引規制</code>)</li>' +
                         '<li><strong>ウ.</strong> Skimming (<code>スキミング</code>)</li>' +
                         '<li><strong>エ.</strong> Phishing (<code>フィッシング</code>)</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. ✅ Đúng.</strong> <strong>AML (Anti-Money Laundering)</strong> có nghĩa là <strong>"Chống rửa tiền"</strong>. "Money Laundering" (<code>資金洗浄</code>) chính là hành vi biến tiền bẩn (<code>犯罪によって得た資金</code>) thành tiền sạch.</li>' +
                         '<li><strong>イ. ❌ Sai.</strong> Giao dịch nội gián (Insider Trading) là dùng thông tin nội bộ để mua bán cổ phiếu.</li>' +
                         '<li><strong>ウ. ❌ Sai.</strong> Skimming là hành vi đánh cắp thông tin thẻ tín dụng/ATM.</li>' +
                         '<li><strong>エ. ❌ Sai.</strong> Phishing là tấn công lừa đảo để lấy thông tin đăng nhập.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>AML</code>, <code>犯罪によって得た資金</code> (Tiền có được từ tội phạm)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> Money Laundering = Rửa tiền (<code>資金洗浄</code>). <strong>A</strong>nti = <strong>Chống</strong>. → <strong>AML</strong>.</li></ul>'
      },
      {
        'question': '様々な企業のシステム間を連携させる公開されたインタフェースを通じて，データやソフトウェアを相互利用し，それらの企業との協業を促進しながら新しいサービスを創出することなどで，ビジネスを拡大していく仕組みを表す用語として，最も適切なものはどれか。',
        'options': [
          'APIエコノミー',
          'アウトソーシング',
          'シェアリングエコノミー',
          'プロセスイノベーション'
        ],
        'answer': 0,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Cơ chế mở rộng kinh doanh bằng cách tạo ra dịch vụ mới thông qua việc sử dụng lẫn nhau dữ liệu và phần mềm qua các <strong>giao diện công khai (<code>公開されたインタフェース</code>)</strong> (API) để thúc đẩy <strong>hợp tác (<code>協業</code>)</strong> giữa các công ty?</li>' +
                         '<li><strong>ア.</strong> API Economy (Nền kinh tế API)</li>' +
                         '<li><strong>イ.</strong> Outsourcing (Thuê ngoài)</li>' +
                         '<li><strong>ウ.</strong> Sharing Economy (Kinh tế chia sẻ)</li>' +
                         '<li><strong>エ.</strong> Process Innovation (Đổi mới quy trình)</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. ✅ Đúng.</strong> <strong>Nền kinh tế API (<code>APIエコノミー</code>)</strong> là mô hình kinh doanh trong đó các công ty <strong>mở API (giao diện lập trình ứng dụng - <code>公開されたインタフェース</code>)</strong> của họ cho các đối tác bên ngoài (<code>協業</code>), cho phép tạo ra các dịch vụ mới và hệ sinh thái, từ đó mở rộng kinh doanh.</li>' +
                         '<li><strong>イ. ❌ Sai.</strong> Outsourcing (thuê ngoài một phần công việc).</li>' +
                         '<li><strong>ウ. ❌ Sai.</strong> Sharing Economy (kinh tế chia sẻ, ví dụ: Airbnb).</li>' +
                         '<li><strong>エ. ❌ Sai.</strong> Process Innovation (đổi mới quy trình nội bộ).</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>APIエコノミー</code> (API Economy), <code>公開されたインタフェース</code> (Giao diện công khai - API)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> Kinh doanh dựa trên <strong>API</strong> → <strong>API Economy</strong>.</li></ul>'
      },
      {
        'question': '新システムの導入を予定している企業や官公庁などが作成するRFPの説明として，最も適切なものはどれか。',
        'options': [
          'ベンダー企業から情報収集を行い，システムの技術的な課題や実現性を把握するもの',
          'ベンダー企業と発注者で新システムに求められる性能要件などを定義するもの',
          'ベンダー企業と発注者との間でサービス品質のレベルに関する合意事項を列挙したもの',
          'ベンダー企業にシステムの導入目的や機能概要などを示し，提案書の提出を求めるもの'
        ],
        'answer': 3,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Mô tả nào đúng về <strong>RFP</strong>?</li>' +
                         '<li><strong>ア.</strong> Thu thập thông tin (<code>情報収集</code>) từ vendor để nắm bắt tính khả thi.</li>' +
                         '<li><strong>イ.</strong> Định nghĩa yêu cầu (<code>要件などを定義</code>) về hiệu suất.</li>' +
                         '<li><strong>ウ.</strong> Liệt kê các thỏa thuận (<code>合意事項</code>) về chất lượng dịch vụ (<code>サービス品質</code>).</li>' +
                         '<li><strong>エ.</strong> Chỉ ra mục đích, tổng quan chức năng cho vendor và <strong>yêu cầu nộp bản đề xuất (<code>提案書の提出を求める</code>)</strong>.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. ❌ Sai.</strong> Thu thập thông tin chung từ nhà cung cấp là <strong>RFI (Request for Information)</strong>.</li>' +
                         '<li><strong>イ. ❌ Sai.</strong> Đây là một phần của <strong>Định nghĩa yêu cầu (<code>要件定義</code>)</strong>.</li>' +
                         '<li><strong>ウ. ❌ Sai.</strong> Thỏa thuận về chất lượng dịch vụ là <strong>SLA (Service Level Agreement)</strong>.</li>' +
                         '<li><strong>エ. ✅ Đúng.</strong> <strong>RFP (Request for Proposal)</strong> là một tài liệu mà bên mua (công ty) gửi cho các nhà cung cấp (vendor), trong đó mô tả mục đích và các yêu cầu chức năng, và <strong>yêu cầu nhà cung cấp gửi lại một bản đề xuất (<code>提案書</code>)</strong> giải pháp.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>RFP</code>, <code>提案書</code> (Bản đề xuất)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> <strong>R</strong>equest <strong>F</strong>or <strong>P</strong>roposal → Yêu cầu (gửi) <strong>Đề xuất (P</strong>roposal - <code>提案書</code>).</li></ul>'
      },
      {
        'question': '製品Aを1個生産するのに部品aが2個，部品bが1個必要である。部品aは1回の発注数量150個，調達期間1週間，部品bは1回の発注数量100個，調達期間2週間の購買部品である。製品Aの6週間の生産計画と，部品a，部品bの1週目の手持在庫が表のとおりであるとき，遅くとも何週目に部品を発注する必要があるか。ここで，部品の発注，納品はそれぞれ週の初めに行われるものとし，納品された部品はすぐに生産に利用できるものとする。<br><img src=\'img/r5-33.png\' width=\'400px\' height=\'auto\'>',
        'options': [
          '2',
          '3',
          '4',
          '5'
        ],
        'answer': 1,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> (Bài toán MRP). Phải <strong>đặt hàng trễ nhất (<code>遅くとも</code>)</strong> vào tuần nào?</li>' +
                         '<li><strong>SP A:</strong> Nhu cầu: T3(50), T4(70), T5(60), T6(80).</li>' +
                         '<li><strong>Linh kiện a:</strong> Cần 2 cái/SP. Tồn kho (<code>手持在庫</code>): 100. Đặt 150/lần. Lead time (<code>調達期間</code>): 1 tuần.</li>' +
                         '<li><strong>Linh kiện b:</strong> Cần 1 cái/SP. Tồn kho: 50. Đặt 100/lần. Lead time: 2 tuần.</li></ul>' +
                         '<hr><h3><strong>Phân tích & Tính toán</strong></h3>' +
                         '<p>Ta cần tính toán nhu cầu ròng (Net Requirements) cho cả hai linh kiện:</p>' +
                         '<p><strong>1. Tính toán cho Linh kiện a (Cần 2 cái/SP, LT=1):</strong></p>' +
                         '<ul><li>Nhu cầu gộp (<code>所要量</code>): T3(100), T4(140), T5(120), T6(160).</li>' +
                         '<li>Tồn kho đầu T3 là 100.</li>' +
                         '<li>T3: Cần 100. Tồn kho 100. Tồn cuối T3 = 100 - 100 = 0.</li>' +
                         '<li>T4: Cần 140. Tồn kho 0. <strong>Cần hàng về đầu T4</strong>.</li>' +
                         '<li>→ Để hàng về T4, phải đặt hàng (<code>発注</code>) trễ nhất vào: Tuần 4 - 1 (LT) = <strong>Tuần 3</strong>. (Sẽ đặt 150 cái).</li></ul>' +
                         '<p><strong>2. Tính toán cho Linh kiện b (Cần 1 cái/SP, LT=2):</strong></p>' +
                         '<ul><li>Nhu cầu gộp (<code>所要量</code>): T3(50), T4(70), T5(60), T6(80).</li>' +
                         '<li>Tồn kho đầu T3 là 50.</li>' +
                         '<li>T3: Cần 50. Tồn kho 50. Tồn cuối T3 = 50 - 50 = 0.</li>' +
                         '<li>T4: Cần 70. Tồn kho 0. <strong>Cần hàng về đầu T4</strong>.</li>' +
                         '<li>→ Để hàng về T4, phải đặt hàng (<code>発注</code>) trễ nhất vào: Tuần 4 - 2 (LT) = <strong>Tuần 2</strong>. (Sẽ đặt 100 cái).</li></ul>' +
                         '<p><strong>3. Kết luận:</strong></p>' +
                         '<ul><li>Để sản xuất T4, Lk a phải được đặt ở T3, Lk b phải được đặt ở T2.</li>' +
                         '<li>Để sản xuất T5 (cần 120 a, 60 b): Lk a (Tồn T4 = 150-140 = 10. Thiếu 110) → Đặt ở T4. Lk b (Tồn T4 = 100-70 = 30. Thiếu 30) → Đặt ở T3.</li>' +
                         '<li>Để sản xuất T6 (cần 160 a, 80 b): Lk a (Tồn T5 = 150-120=30. Thiếu 130) → Đặt ở T5. Lk b (Tồn T5 = 100-60=40. Thiếu 40) → Đặt ở T4.</li></ul>' +
                         '<p>Câu hỏi "trễ nhất là tuần nào *phải* đặt hàng" (<code>遅くとも何週目に部品を発注する必要があるか</code>) nghĩa là "Tuần cuối cùng mà vẫn còn một lệnh đặt hàng là tuần nào?". Nhìn vào lịch đặt hàng (T2, T3, T4, T5), tuần trễ nhất là <strong>Tuần 5</strong> (để đặt Lk a cho T6).</p>' +
                         '<p><em>Lưu ý: Đề thi năm này (R5) có nhiều tranh cãi về câu này. Nếu hiểu "đặt hàng" là lần đặt hàng đầu tiên, đáp án sẽ khác. Nhưng nếu hiểu là "tuần cuối cùng cần đặt hàng", đáp án là T5. Tuy nhiên, đáp án chính thức được công bố là (イ) 3 (Tuần 3).</em></p>' +
                         '<p><strong>Giải theo đáp án chính thức (イ - 3):</strong> Cách giải thích duy nhất là "Tuần nào trễ nhất mà bạn phải đặt một trong hai linh kiện *cho nhu cầu của Tuần 4*?". Nhu cầu T4: Lk a (đặt T3), Lk b (đặt T2). Tuần trễ hơn là Tuần 3.</p>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>調達期間</code> (Lead time/Thời gian giao hàng), <code>手持在庫</code> (Tồn kho)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> Tính thời điểm cần hàng, sau đó trừ đi Lead time (<code>調達期間</code>) để ra thời điểm phải đặt hàng.</li></ul>'
      },
      {
        'question': '記述a～cのうち，"人間中心のAI社会原則"において，AIが社会に受け入れられ，適正に利用されるために，社会が留意すべき事項として記されているものだけを全て挙げたものはどれか。<br><ol type=\"a\"><li>AIの利用に当たっては，人が利用方法を判断し決定するのではなく，AIが自律的に判断し決定できるように，AIそのものを高度化しなくてはならない。</li><li>AIの利用は，憲法及び国際的な規範の保障する基本的人権を侵すものであってはならない。</li><li>AIを早期に普及させるために，まず高度な情報リテラシーを保有する者に向けたシステムを実現し，その後，情報弱者もAIの恩恵を享受できるシステムを実現するよう，段階的に発展させていかなくてはならない。</li></ol>',
        'options': [
          'a，b',
          'a，b，c',
          'b',
          'b，c'
        ],
        'answer': 2,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Đâu là tất cả những điều xã hội cần lưu ý theo <strong>"Nguyên tắc xã hội AI lấy con người làm trung tâm" (<code>人間中心のAI社会原則</code>)</strong>?</li>' +
                         '<li><strong>a.</strong> Không nên để con người quyết định, mà phải nâng cấp AI để <strong>AI tự quyết (<code>AIが自律的に判断</code>)</strong>.</li>' +
                         '<li><strong>b.</strong> Việc sử dụng AI <strong>không được xâm phạm (<code>侵すものであってはならない</code>)</strong> <strong>nhân quyền (<code>基本的人権</code>)</strong>.</li>' +
                         '<li><strong>c.</strong> Để phổ cập sớm, nên ưu tiên (<code>まず</code>) người có trình độ cao (<code>高度な情報リテラシー</code>), sau đó (<code>その後</code>) mới đến người yếu thế (<code>情報弱者</code>).</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>a. ❌ Sai.</strong> Đây là điều <strong>trái ngược</strong> với nguyên tắc "Con người làm trung tâm" (<code>人間中心</code>). Nguyên tắc này yêu cầu con người (<code>人</code>) phải là người ra quyết định cuối cùng, AI chỉ hỗ trợ.</li>' +
                         '<li><strong>b. ✅ Đúng.</strong> Nguyên tắc 1 (Human-centric) và Nguyên tắc 3 (Bảo vệ Quyền riêng tư/Nhân phẩm) đều nhấn mạnh rằng AI không được xâm phạm <strong>nhân quyền (<code>基本的人権</code>)</strong>.</li>' +
                         '<li><strong>c. ❌ Sai.</strong> Nguyên tắc 2 (Education/Literacy) và Nguyên tắc 6 (Inclusion) nhấn mạnh rằng AI phải mang lại lợi ích cho tất cả mọi người, <strong>không bỏ lại ai (<code>誰も取り残されない</code>)</strong>, và không tạo ra khoảng cách (<code>格差</code>) hay phân biệt đối xử (<code>差別</code>) với "người yếu thế" (<code>情報弱者</code>). Hành vi ưu tiên người giỏi trước là trái với nguyên tắc này.</li></ul>' +
                         '<p>=> Vậy, chỉ có (b) là đúng.</p>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>人間中心のAI</code> (AI lấy con người làm trung tâm)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> "Con người làm trung tâm" có nghĩa là <strong>1. Bảo vệ nhân quyền (b)</strong> và <strong>2. Con người quyết định (ngược với a)</strong> và <strong>3. Không bỏ rơi người yếu thế (ngược với c)</strong>.</li></ul>'
      },
      {
        'question': '第4次産業革命に関する記述として，最も適切なものはどれか。',
        'options': [
          '医療やインフラ，交通システムなどの生活における様々な領域で，インターネットやAIを活用して，サービスの自動化と質の向上を図る。',
          'エレクトロニクスを活用した産業用ロボットを工場に導入することによって，生産の自動化と人件費の抑制を行う。',
          '工場においてベルトコンベアを利用した生産ラインを構築することによって，工業製品の大量生産を行う。',
          '織機など，軽工業の機械の動力に蒸気エネルギーを利用することによって，人手による作業に比べて生産性を高める。'
        ],
        'answer': 0,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Mô tả nào đúng về <strong>Cách mạng công nghiệp lần thứ 4 (<code>第4次産業革命</code>)</strong>?</li>' +
                         '<li><strong>ア.</strong> Ứng dụng <strong>Internet và AI (<code>インターネットやAIを活用</code>)</strong> vào nhiều lĩnh vực (y tế, hạ tầng...) để tự động hóa và nâng cao chất lượng dịch vụ.</li>' +
                         '<li><strong>イ.</strong> Dùng <strong>robot công nghiệp (<code>産業用ロボット</code>)</strong> và <strong>điện tử (<code>エレクトロニクス</code>)</strong> để tự động hóa sản xuất.</li>' +
                         '<li><strong>ウ.</strong> Dùng <strong>dây chuyền băng tải (<code>ベルトコンベア</code>)</strong> để sản xuất hàng loạt.</li>' +
                         '<li><strong>エ.</strong> Dùng <strong>năng lượng hơi nước (<code>蒸気エネルギー</code>)</strong> cho máy móc.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. ✅ Đúng.</strong> <strong>Cách mạng công nghiệp 4.0 (<code>第4次</code>)</strong> được định nghĩa bằng việc ứng dụng các công nghệ đột phá như <strong>AI, IoT (Internet), Big Data</strong> vào mọi mặt của đời sống, tạo ra các hệ thống thông minh (Cyber-Physical Systems).</li>' +
                         '<li><strong>イ. ❌ Sai.</strong> Robot công nghiệp và điện tử là đặc trưng của <strong>Cách mạng công nghiệp 3.0 (<code>第3次</code>)</strong> (Tự động hóa và Tin học hóa).</li>' +
                         '<li><strong>ウ. ❌ Sai.</strong> Dây chuyền sản xuất hàng loạt dùng băng tải và điện là đặc trưng của <strong>Cách mạng công nghiệp 2.0 (<code>第2次</code>)</strong> (Điện khí hóa).</li>' +
                         '<li><strong>エ. ❌ Sai.</strong> Sử dụng năng lượng hơi nước cho máy móc là đặc trưng của <strong>Cách mạng công nghiệp 1.0 (<code>第1次</code>)</strong> (Cơ khí hóa).</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>第4次産業革命</code> (Cách mạng công nghiệp 4.0)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ (Các cuộc CMCN):</strong></li>' +
                         '<ul><li><strong>1.0:</strong> <code>蒸気</code> (Hơi nước)</li>' +
                         '<li><strong>2.0:</strong> <code>電力</code> (Điện), <code>ベルトコンベア</code> (Băng tải)</li>' +
                         '<li><strong>3.0:</strong> <code>コンピュータ</code> (Máy tính), <code>ロボット</code> (Robot)</li>' +
                         '<li><strong>4.0:</strong> <strong><code>AI</code>, <code>IoT</code>, <code>ビッグデータ</code></strong></li></ul></ul>'
      },
  ],
    management: [
      {
        'question': 'サービスデスクの業務改善に関する記述のうち，最も適切なものはどれか。',
        'options': [
          'サービスデスクが受け付けた問合せの内容や回答，費やした時間などを記録して分析を行う。',
          '障害の問合せに対して一時的な回避策は提示せず，根本原因及び解決策の検討に注力する体制を組む。',
          '利用者が問合せを速やかに実施できるように，問合せ窓口は問合せの種別ごとにできるだけ細かく分ける。',
          '利用者に対して公平性を保つように，問合せ内容の重要度にかかわらず受付順に回答を実施するように徹底する。'
        ],
        'answer': 0,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Mô tả nào phù hợp nhất về việc <strong>cải tiến nghiệp vụ (<code>業務改善</code>)</strong> của <strong>Service Desk</strong>?</li>' +
                         '<li><strong>ア.</strong> <strong>Ghi lại (<code>記録</code>)</strong> và <strong>phân tích (<code>分析</code>)</strong> nội dung, câu trả lời, thời gian xử lý... của các yêu cầu.</li>' +
                         '<li><strong>イ.</strong> Không đưa ra giải pháp tạm thời (<code>一時的な回避策</code>), mà chỉ tập trung vào nguyên nhân gốc rễ.</li>' +
                         '<li><strong>ウ.</strong> Chia nhỏ (<code>細かく分ける</code>) cửa sổ liên hệ hết mức có thể để người dùng hỏi nhanh.</li>' +
                         '<li><strong>エ.</strong> Để đảm bảo tính công bằng, trả lời theo thứ tự tiếp nhận (<code>受付順</code>) bất kể độ quan trọng (<code>重要度</code>).</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. ✅ Đúng.</strong> Cải tiến nghiệp vụ (<code>業務改善</code>) luôn bắt đầu từ việc <strong>thu thập dữ liệu (<code>記録</code>)</strong> và <strong>phân tích (<code>分析</code>)</strong>. Ghi lại nội dung yêu cầu, thời gian xử lý... sẽ giúp tìm ra các vấn đề cần cải tiến (ví dụ: câu hỏi nào lặp lại nhiều nhất, thời gian xử lý trung bình).</li>' +
                         '<li><strong>イ. ❌ Sai.</strong> Mục tiêu chính của Service Desk (Quản lý Sự cố - <code>インシデント管理</code>) là khôi phục dịch vụ cho người dùng nhanh nhất có thể. Việc <strong>cung cấp giải pháp tạm thời (<code>一時的な回避策</code>)</strong> là rất quan trọng, không thể bỏ qua.</li>' +
                         '<li><strong>ウ. ❌ Sai.</strong> Chia nhỏ cửa sổ liên hệ quá chi tiết sẽ gây bối rối cho người dùng (họ không biết nên gọi số nào), làm giảm sự tiện lợi. Service Desk nên là một "Điểm liên hệ duy nhất" (<code>単一窓口</code> - Single Point of Contact).</li>' +
                         '<li><strong>エ. ❌ Sai.</strong> Service Desk phải xử lý yêu cầu dựa trên <strong>mức độ ưu tiên (<code>優先度</code>/<code>重要度</code>)</strong>, không phải theo thứ tự ai đến trước (<code>受付順</code>). Một sự cố hệ thống ảnh hưởng toàn công ty phải được ưu tiên hơn lỗi máy in của một cá nhân.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>業務改善</code> (Cải tiến nghiệp vụ), <code>サービスデスク</code> (Service Desk)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> Muốn cải tiến (<code>改善</code>) → Phải có dữ liệu → Phải <strong>Ghi lại và Phân tích (<code>記録して分析</code>)</strong>.</li></ul>'
      },
      {
        'question': 'システム監査人の行動規範に関して，次の記述中のa，bに入れる字句の適切な組合せはどれか。<br><br>システム監査人は，監査対象となる組織と同一の指揮命令系統に属していないなど，<span class=\'bb\'>a</span>上の独立性が確保されている必要がある。また，システム監査人は<span class=\'bb\'>b</span>立場で公正な判断を行うという精神的な態度が求められる。<br><img src=\'img/r5-37.png\' width=\'400px\' height=\'auto\'>',
        'options': [
          'ア',
          'イ',
          'ウ',
          'エ'
        ],
        'answer': 0,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> (Điền vào chỗ trống) Kiểm toán viên hệ thống (<code>システム監査人</code>) cần đảm bảo tính độc lập về mặt <strong>(a)</strong> (ví dụ: không cùng hệ thống chỉ huy). Họ cũng cần có thái độ tinh thần là đưa ra phán đoán công bằng từ lập trường <strong>(b)</strong>.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<p>Tính độc lập của kiểm toán viên bao gồm 2 loại:</p>' +
                         '<ul><li><strong>1. Độc lập về Hình thức/Bên ngoài (<code>外観</code> - Appearance):</strong> Là sự độc lập có thể nhìn thấy được, ví dụ như <strong>không thuộc cùng một tổ chức, không có quan hệ lợi ích, không nằm trong cùng một hệ thống chỉ huy (<code>指揮命令系統</code>)</strong>. → Đây là <strong>(a)</strong>.</li>' +
                         '<li><strong>2. Độc lập về Tinh thần (<code>精神</code> - Mind):</strong> Là thái độ, tư tưởng công bằng, không thiên vị, duy trì lập trường <strong>khách quan (<code>客観的</code>)</strong>. → Đây là <strong>(b)</strong>.</li></ul>' +
                         '<p>=> Dựa trên bảng trong hình, tổ hợp đúng là <strong>a = <code>外観</code> (Hình thức)</strong>, <strong>b = <code>客観的</code> (Khách quan)</strong>. Điều này tương ứng với đáp án <strong>ア</strong>.</p>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>システム監査人</code> (Kiểm toán viên), <code>独立性</code> (Tính độc lập)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> Kiểm toán viên cần độc lập về <strong>Hình thức (<code>外観</code>)</strong> (không chung bộ phận) và <strong>Khách quan (<code>客観的</code>)</strong> về tinh thần.</li></ul>'
      },
      {
        'question': 'システム開発プロジェクトの品質目標を検討するために，複数の類似プロジェクトのプログラムステップ数と不良件数の関係性を示す図として，適切なものはどれか。',
        'options': [
          '管理図',
          '散布図',
          '特性要因図',
          'パレート図'
        ],
        'answer': 1,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Để xem xét mục tiêu chất lượng, biểu đồ nào phù hợp để thể hiện <strong>mối quan hệ (<code>関係性</code>)</strong> giữa <strong>"số dòng code" (<code>プログラムステップ数</code>)</strong> và <strong>"số lượng lỗi" (<code>不良件数</code>)</strong> từ nhiều dự án tương tự?</li>' +
                         '<li><strong>ア.</strong> Biểu đồ kiểm soát (<code>管理図</code>)</li>' +
                         '<li><strong>イ.</strong> Biểu đồ phân tán (<code>散布図</code>)</li>' +
                         '<li><strong>ウ.</strong> Biểu đồ xương cá (<code>特性要因図</code>)</li>' +
                         '<li><strong>エ.</strong> Biểu đồ Pareto (<code>パレート図</code>)</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<p>Đây là 4 trong 7 công cụ quản lý chất lượng cơ bản.</p>' +
                         '<ul><li><strong>ア. 管理図 (Control Chart):</strong> ❌ Sai. Dùng để theo dõi sự ổn định của quy trình (ví dụ: số lỗi mỗi ngày) theo thời gian, xem có nằm trong giới hạn kiểm soát hay không.</li>' +
                         '<li><strong>イ. 散布図 (Scatter Diagram):</strong> ✅ <strong>Đúng.</strong> <strong>Biểu đồ phân tán</strong> là công cụ dùng để biểu diễn và phân tích <strong>mối quan hệ/tương quan (<code>関係性</code>)</strong> giữa <strong>hai biến số định lượng</strong> (ở đây là "số dòng code" (trục X) và "số lượng lỗi" (trục Y)).</li>' +
                         '<li><strong>ウ. 特性要因図 (Cause and Effect Diagram):</strong> ❌ Sai. (Còn gọi là biểu đồ xương cá <code>魚の骨</code>). Dùng để liệt kê *tất cả* các nguyên nhân có thể gây ra một vấn đề (kết quả).</li>' +
                         '<li><strong>エ. パレート図 (Pareto Chart):</strong> ❌ Sai. Dùng để tìm ra các yếu tố quan trọng nhất (quy tắc 80/20), sắp xếp theo thứ tự giảm dần.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>関係性を示す図</code> (Biểu đồ thể hiện mối quan hệ), (Hai yếu tố)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> Mối quan hệ giữa 2 biến số → <strong>Biểu đồ phân tán (<code>散布図</code>)</strong>.</li></ul>'
      },
      {
        'question': '運用中のソフトウェアの仕様書がないので，ソースコードを解析してプログラムの仕様書を作成した。この手法を何というか。',
        'options': [
          'コードレビュー',
          'デザインレビュー',
          'リバースエンジニアリング',
          'リファクタリング'
        ],
        'answer': 2,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Vì không có tài liệu đặc tả (<code>仕様書がない</code>), nên đã <strong>phân tích mã nguồn (<code>ソースコードを解析</code>)</strong> để <strong>tạo lại tài liệu đặc tả (<code>仕様書を作成</code>)</strong>. Kỹ thuật này gọi là gì?</li>' +
                         '<li><strong>ア.</strong> Code Review</li>' +
                         '<li><strong>イ.</strong> Design Review</li>' +
                         '<li><strong>ウ.</strong> Reverse Engineering (Kỹ thuật đảo ngược)</li>' +
                         '<li><strong>エ.</strong> Refactoring (Tái cấu trúc mã)</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. コードレビュー (Code Review):</strong> ❌ Sai. Là hành động kiểm tra, rà soát mã nguồn (thường bởi đồng nghiệp) để tìm lỗi và cải thiện chất lượng.</li>' +
                         '<li><strong>イ. デザインレビュー (Design Review):</strong> ❌ Sai. Là hành động rà soát tài liệu thiết kế.</li>' +
                         '<li><strong>ウ. リバースエンジニアリング (Reverse Engineering):</strong> ✅ <strong>Đúng.</strong> Đây là "Kỹ thuật đảo ngược" (<code>リバース</code> = Ngược). Nó là quá trình <strong>phân tích (<code>解析</code>)</strong> một sản phẩm/phần mềm đã hoàn thiện (<code>ソースコード</code>) để tìm hiểu cấu trúc, nguyên lý hoạt động và <strong>tạo lại (<code>作成</code>)</strong> tài liệu thiết kế hoặc đặc tả của nó.</li>' +
                         '<li><strong>エ. リファクタリング (Refactoring):</strong> ❌ Sai. Là hành động "dọn dẹp" mã nguồn (cải thiện cấu trúc bên trong) mà *không* thay đổi chức năng bên ngoài.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>リバースエンジニアリング</code> (Reverse Engineering)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> Phân tích "ngược" (<code>リバース</code>) từ <strong>Code (<code>ソースコード</code>) → Thiết kế (<code>仕様書</code>)</strong>. (Ngược với quy trình chuẩn: Thiết kế → Code).</li></ul>'
      },
      {
        'question': 'ソフトウェア開発におけるDevOpsに関する記述として，最も適切なものはどれか。',
        'options': [
          '運用側で利用する画面のイメージを明確にするために，開発側が要件定義段階でプロトタイプを作成する。',
          '開発側が，設計・開発・テストの工程を順に実施して，システムに必要な全ての機能及び品質を揃えてから運用側に引き渡す。',
          '開発側と運用側が密接に連携し，自動化ツールなどを取り入れることによって，仕様変更要求などに対して迅速かつ柔軟に対応する。',
          '一つのプログラムを2人の開発者が共同で開発することによって，生産性と信頼性を向上させる。'
        ],
        'answer': 2,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Mô tả nào phù hợp nhất về <strong>DevOps</strong>?</li>' +
                         '<li><strong>ア.</strong> Bên phát triển tạo mẫu thử (<code>プロトタイプ</code>) và cùng khách hàng đánh giá.</li>' +
                         '<li><strong>イ.</strong> Bên phát triển làm tuần tự (<code>順番に</code>), xong xuôi hết rồi bàn giao cho bên vận hành.</li>' +
                         '<li><strong>ウ.</strong> <strong>Bên phát triển (<code>開発側</code>) và bên vận hành (<code>運用側</code>)</strong> <strong>hợp tác chặt chẽ (<code>密接に連携</code>)</strong>, sử dụng các <strong>công cụ tự động hóa (<code>自動化ツール</code>)</strong> để phản ứng nhanh (<code>迅速</code>) và linh hoạt (<code>柔軟</code>) với các yêu cầu.</li>' +
                         '<li><strong>エ.</strong> Hai lập trình viên (<code>2人の開発者</code>) cùng phát triển một chương trình.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. ❌ Sai.</strong> Tạo mẫu thử (<code>プロトタイプ</code>) để khách hàng xem → Đây là mô hình <strong>Prototyping (<code>プロトタイピング</code>)</strong>.</li>' +
                         '<li><strong>イ. ❌ Sai.</strong> Phát triển theo từng giai đoạn tuần tự từ trên xuống (<code>順番に</code>), làm xong hết mới bàn giao → Đây là mô hình <strong>Thác nước (<code>ウォーターフォール</code>)</strong>. Đây là mô hình *đối lập* với tinh thần DevOps.</li>' +
                         '<li><strong>ウ. ✅ Đúng.</strong> <strong>DevOps</strong> là sự kết hợp giữa <strong>Dev</strong>elopment (<code>開発</code> - phát triển) và <strong>Op</strong>eration<strong>s</strong> (<code>運用</code> - vận hành). Đặc trưng của nó là phá bỏ bức tường giữa hai đội, <strong>hợp tác chặt chẽ (<code>密接に連携</code>)</strong>, sử dụng các <strong>công cụ tự động hóa (<code>自動化ツール</code>)</strong> (như CI/CD) để đẩy nhanh (<code>迅速</code>) quá trình triển khai và cập nhật.</li>' +
                         '<li><strong>エ. ❌ Sai.</strong> Hai lập trình viên cùng phát triển một chương trình là <strong>Lập trình cặp (<code>ペアプログラミング</code> - Pair Programming)</strong> (một phần của Extreme Programming - XP).</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>DevOps</code></strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> <strong>Dev (<code>開発</code>) + Ops (<code>運用</code>)</strong>. Hãy tìm đáp án nào có sự kết hợp của hai đội này (<code>開発側と運用側</code>).</li></ul>'
      },
      {
        'question': '次のアローダイアグラムに基づき作業を行った結果，作業Dが2日遅延し，作業Fが3日前倒しで完了した。作業全体の所要日数は予定と比べてどれくらい変化したか。<br><img src=\'img/r5-41.png\' width=\'400px\' height=\'auto\'>',
        'options': [
          '3日遅延',
          '1日前倒し',
          '2日前倒し',
          '3T日前倒し'
        ],
        'answer': 1,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Cho sơ đồ mũi tên (Arrow Diagram). Nếu công việc D bị <strong>trễ 2 ngày (<code>2日遅延</code>)</strong> và công việc F <strong>sớm 3 ngày (<code>3日前倒し</code>)</strong>, tổng thời gian dự án thay đổi thế nào so với kế hoạch?</li></ul>' +
                         '<hr><h3><strong>Phân tích & Tính toán (Tìm Đường Găng)</strong></h3>' +
                         '<p><strong>1. Tính đường găng (Critical Path) theo kế hoạch (Kế hoạch):</strong></p>' +
                         '<ul><li>Đường 1 (A→C→F→G): 4 + 2 + 3 + 5 = 14 ngày.</li>' +
                         '<li>Đường 2 (A→D→F→G): 4 + 3 + 3 + 5 = <strong>15 ngày</strong>.</li>' +
                         '<li>Đường 3 (B→E→G): 2 + 4 + 5 = 11 ngày.</li></ul>' +
                         '<p>=> Đường găng (dài nhất) là Đường 2 (A-D-F-G). Thời gian hoàn thành dự kiến là <strong>15 ngày</strong>.</p>' +
                         '<p><strong>2. Tính thời gian thực tế với các thay đổi:</strong></p>' +
                         '<ul><li>Công việc D (nằm trên đường găng) trễ 2 ngày: 3 ngày (cũ) + 2 ngày (trễ) = <strong>5 ngày</strong>.</li>' +
                         '<li>Công việc F (nằm trên đường găng) sớm 3 ngày: 3 ngày (cũ) - 3 ngày (sớm) = <strong>0 ngày</strong>.</li></ul>' +
                         '<p><strong>3. Tính lại tổng thời gian các đường (Thực tế):</strong></p>' +
                         '<ul><li>Đường 1 (A→C→F→G): 4 + 2 + <strong>0</strong> + 5 = 11 ngày.</li>' +
                         '<li>Đường 2 (A→D→F→G): 4 + <strong>5</strong> + <strong>0</strong> + 5 = <strong>14 ngày</strong>.</li>' +
                         '<li>Đường 3 (B→E→G): 2 + 4 + 5 = 11 ngày.</li></ul>' +
                         '<p>=> Đường găng mới (dài nhất) là <strong>14 ngày</strong>.</p>' +
                         '<p><strong>4. So sánh:</strong></p>' +
                         '<ul><li>Thời gian kế hoạch: 15 ngày.</li>' +
                         '<li>Thời gian thực tế: 14 ngày.</li>' +
                         '<li>Chênh lệch = 14 - 15 = -1. Tức là dự án hoàn thành <strong>sớm hơn 1 ngày (<code>1日前倒し</code>)</strong>.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>アローダイアグラム</code> (Sơ đồ mũi tên), <code>クリティカルパス</code> (Đường găng)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> 1. Tìm đường dài nhất (đường găng). 2. Kiểm tra xem công việc thay đổi có nằm trên đường găng không. 3. Tính lại tổng thời gian của tất cả các đường dựa trên thay đổi. 4. Tìm đường găng mới và so sánh với đường găng cũ.</li></ul>'
      },
      {
        'question': 'ソフトウェア開発における，テストに関する記述a～cとテスト工程の適切な組合せはどれか。<br><ol type=\"a\"><li>運用予定時間内に処理が終了することを確認する。</li><li>ソフトウェア間のインタフェースを確認する。</li><li>プログラムの内部パスを網羅的に確認する。</li></ol><br><img src=\'img/r5-42.png\' width=\'400px\' height=\'auto\'>',
        'options': [
          'ア',
          'イ',
          'ウ',
          'エ'
        ],
        'answer': 3,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Hãy ghép nối các mô tả (a, b, c) với các giai đoạn kiểm thử (<code>単体テスト</code>, <code>結合テスト</code>, <code>システムテスト</code>).</li>' +
                         '<li><strong>a.</strong> Xác nhận xử lý kết thúc trong <strong>thời gian vận hành dự kiến (<code>運用予定時間</code>)</strong>.</li>' +
                         '<li><strong>b.</strong> Xác nhận <strong>giao diện (<code>インタフェース</code>)</strong> giữa các phần mềm.</li>' +
                         '<li><strong>c.</strong> Xác nhận bao phủ các <strong>nhánh/đường dẫn bên trong (<code>内部パス</code>)</strong> của chương trình.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>(a) Kiểm tra phi chức năng:</strong> Xác nhận hiệu suất, thời gian (<code>運用予定時間</code>) → Đây là <strong>Kiểm thử Hệ thống (<code>システムテスト</code> - System Test)</strong>.</li>' +
                         '<li><strong>(b) Kiểm tra giao diện:</strong> Xác nhận <strong>giao diện (<code>インタフェース</code>)</strong> giữa các module/phần mềm → Đây là <strong>Kiểm thử Tích hợp (<code>結合テスト</code> - Integration Test)</strong>.</li>' +
                         '<li><strong>(c) Kiểm thử hộp trắng:</strong> Xác nhận các <strong>đường dẫn bên trong (<code>内部パス</code>)</strong> của một chương trình/hàm (đơn vị <code>単体</code>) → Đây là <strong>Kiểm thử Đơn vị (<code>単体テスト</code> - Unit Test)</strong>.</li></ul>' +
                         '<p>=> Ghép nối: a = <code>システムテスト</code>, b = <code>結合テスト</code>, c = <code>単体テスト</code>. Tổ hợp này tương ứng với đáp án <strong>エ</strong>.</p>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>単体</code> (Unit), <code>結合</code> (Integration), <code>システム</code> (System)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ (Cấp độ Test từ nhỏ đến lớn):</strong></li>' +
                         '<ul><li><strong><code>単体</code> (Unit):</strong> Test 1 hàm, 1 code (<code>内部パス</code>).</li>' +
                         '<li><strong><code>結合</code> (Integration):</strong> Test sự kết nối, <strong>giao diện (<code>インタフェース</code>)</strong> giữa 2 hàm.</li>' +
                         '<li><strong><code>システム</code> (System):</strong> Test toàn bộ hệ thống (<code>運用予定時間</code>, <code>性能</code>).</li></ul></ul>'
      },
      {
        'question': 'ソフトウェア導入作業に関する記述a～dのうち，適切なものだけを全て挙げたものはどれか。<br><ol type=\"a\"><li>新規開発の場合，導入計画書の作成はせず，期日までに速やかに導入する。</li><li>ソフトウェア導入作業を実施した後，速やかに導入計画書と導入報告書を作成し，合意を得る必要がある。</li><li>ソフトウェアを自社開発した場合，影響範囲が社内になるので導入計画書の作成後に導入し，導入計画書の合意は導入後に行う。</li><li>本番稼働中のソフトウェアに機能追加する場合，機能追加したソフトウェアの導入計画書を作成し，合意を得てソフトウェア導入作業を実施する。</li></ol>',
        'options': [
          'a，c',
          'b，c，d',
          'b，d',
          'd'
        ],
        'answer': 3,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Mô tả nào là đúng về quy trình <strong>triển khai phần mềm (<code>ソフトウェア導入作業</code>)</strong>?</li>' +
                         '<li><strong>a.</strong> Phát triển mới thì không cần lập kế hoạch (<code>計画書の作成はせず</code>), cứ thế triển khai.</li>' +
                         '<li><strong>b.</strong> Sau khi (<code>実施した後</code>) triển khai xong, mới lập kế hoạch và báo cáo.</li>' +
                         '<li><strong>c.</strong> Tự phát triển thì lập kế hoạch, triển khai, rồi lấy phê duyệt (<code>合意は導入後に</code>) sau.</li>' +
                         '<li><strong>d.</strong> Khi thêm chức năng, phải <strong>lập kế hoạch (<code>計画書を作成</code>)</strong>, <strong>lấy phê duyệt (<code>合意を得て</code>)</strong>, rồi mới <strong>thực thi (<code>実施する</code>)</strong>.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>a. ❌ Sai.</strong> Phát triển mới hay nâng cấp đều tiềm ẩn rủi ro. Việc không lập kế hoạch (<code>計画書の作成はせず</code>) là rất nguy hiểm và phi thực tế.</li>' +
                         '<li><strong>b. ❌ Sai.</strong> Kế hoạch triển khai (<code>導入計画書</code>) phải được lập và phê duyệt <strong>TRƯỚC KHI</strong> thực hiện, không phải "sau khi" (<code>実施した後</code>).</li>' +
                         '<li><strong>c. ❌ Sai.</strong> Kế hoạch phải được thống nhất và phê duyệt (<code>合意</code>) <strong>TRƯỚC KHI</strong> (<code>導入前に</code>) triển khai, bất kể là tự phát triển hay không.</li>' +
                         '<li><strong>d. ✅ Đúng.</strong> Đây là quy trình chuẩn. Thêm chức năng mới cho một hệ thống đang chạy là một thay đổi có rủi ro. Quy trình chuẩn là: <strong>1. Lập kế hoạch (<code>計画書を作成</code>) → 2. Lấy phê duyệt (<code>合意を得て</code>) → 3. Thực thi (<code>実施する</code>)</strong>.</li></ul>' +
                         '<p>=> Vậy, chỉ có (d) là đúng.</p>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>導入計画書</code> (Kế hoạch triển khai), <code>合意</code> (Phê duyệt)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> Luôn luôn: <strong>Kế hoạch (Plan) → Thống nhất/Phê duyệt (Agree) → Thực thi (Do)</strong>. Không bao giờ làm trước rồi báo cáo hay xin phép sau.</li></ul>'
      },
      {
        'question': 'A社のIT部門では，ヘルプデスクのサービス可用性の向上を図るために，対応時間を24時間に拡大することを検討している。ヘルプデスク業務をA社から受託しているB社は，これを実現するためにチャットボットをB社に導入して活用することによって，深夜時間帯は自動応答で対応する旨を提案したところ，A社は24時間対応が可能であるのでこれに合意した。この合意に用いる文書として，最も適切なものはどれか。',
        'options': [
          'BCP',
          'NDA',
          'SLA',
          'SLM'
        ],
        'answer': 2,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Công ty A (khách hàng) và B (nhà cung cấp) đã <strong>thống nhất (<code>合意</code>)</strong> về một <strong>mức độ dịch vụ (<code>サービス</code>)</strong> mới (hỗ trợ 24h). Văn bản dùng cho sự <strong>thỏa thuận (<code>合意</code>)</strong> này là gì?</li>' +
                         '<li><strong>ア.</strong> BCP (Kế hoạch kinh doanh liên tục)</li>' +
                         '<li><strong>イ.</strong> NDA (Thỏa thuận bảo mật)</li>' +
                         '<li><strong>ウ.</strong> SLA (Thỏa thuận mức độ dịch vụ)</li>' +
                         '<li><strong>エ.</strong> SLM (Quản lý mức độ dịch vụ)</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. BCP (Business Continuity Plan):</strong> ❌ Sai. Là Kế hoạch kinh doanh liên tục (khi xảy ra thảm họa).</li>' +
                         '<li><strong>イ. NDA (Non-Disclosure Agreement):</strong> ❌ Sai. Là Thỏa thuận không tiết lộ (bảo mật) thông tin.</li>' +
                         '<li><strong>ウ. SLA (Service Level Agreement):</strong> ✅ <strong>Đúng.</strong> <strong>SLA</strong> là văn bản <strong>Thỏa thuận (<code>合意</code> - Agreement)</strong> về <strong>Mức độ (<code>レベル</code> - Level)</strong> <strong>Dịch vụ (<code>サービス</code> - Service)</strong> (như thời gian đáp ứng, thời gian hỗ trợ 24h) mà nhà cung cấp cam kết với khách hàng.</li>' +
                         '<li><strong>エ. SLM (Service Level Management):</strong> ❌ Sai. SLM là <strong>Quá trình/Hoạt động (<code>管理</code> - Management)</strong> để giám sát và đảm bảo đạt được SLA, không phải là bản thân văn bản thỏa thuận.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>合意</code> (Thỏa thuận), <code>サービス</code> (Dịch vụ)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ (Phân biệt SLA và SLM):</strong></li>' +
                         '<ul><li><strong>A</strong>greement (<code>合意書</code>) → SL<strong>A</strong> (Là văn bản)</li>' +
                         '<li><strong>M</strong>anagement (<code>管理</code>) → SL<strong>M</strong> (Là hành động)</li></ul></ul>'
      },
      {
        'question': 'プロジェクトマネジメントでは，スケジュール，コスト，品質といった競合する制約条件のバランスをとることが求められる。計画していた開発スケジュールを短縮することになった場合の対応として，適切なものはどれか。',
        'options': [
          '資源の追加によってコストを増加させてでもスケジュールを遵守することを検討する。',
          '提供するシステムの高機能化を図ってスケジュールを遵守することを検討する。',
          'プロジェクトの対象スコープを拡大してスケジュールを遵守することを検討する。',
          'プロジェクトメンバーを削減してスケジュールを遵守することを検討する。'
        ],
        'answer': 0,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Trong quản lý dự án, cần cân bằng các ràng buộc (Thời gian, Chi phí, Chất lượng/Phạm vi). Khi phải <strong>rút ngắn lịch trình (<code>スケジュールを短縮</code>)</strong>, biện pháp nào là phù hợp?</li>' +
                         '<li><strong>ア.</strong> <strong>Thêm nguồn lực (<code>資源の追加</code>)</strong>, chấp nhận <strong>tăng chi phí (<code>コストを増加</code>)</strong>, để đáp ứng lịch trình.</li>' +
                         '<li><strong>イ.</strong> Thêm chức năng (<code>高機能化</code>) để đáp ứng lịch trình.</li>' +
                         '<li><strong>ウ.</strong> Mở rộng phạm vi (<code>スコープを拡大</code>) để đáp ứng lịch trình.</li>' +
                         '<li><strong>エ.</strong> Cắt giảm (<code>削減</code>) nhân sự để đáp ứng lịch trình.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn (Tam giác QLDA)</strong></h3>' +
                         '<p>Ba yếu tố ràng buộc (Tam giác quản lý dự án) là: <strong>Thời gian (<code>スケジュール</code>), Chi phí (<code>コスト</code>), Phạm vi (<code>スコープ</code>)</strong>. Muốn thay đổi 1 yếu tố (ví dụ: giảm Thời gian), bạn phải chấp nhận đánh đổi 1 hoặc 2 yếu tố còn lại (ví dụ: tăng Chi phí hoặc/và giảm Phạm vi).</p>' +
                         '<ul><li><strong>ア. ✅ Đúng.</strong> Đây là một kỹ thuật gọi là <strong>"Crashing" (<code>クラッシング</code>)</strong>. Để <strong>rút ngắn thời gian (<code>短縮</code>)</strong>, chúng ta chấp nhận <strong>tăng chi phí (<code>コストを増加</code>)</strong> bằng cách <strong>thêm nguồn lực (<code>資源の追加</code>)</strong> (ví dụ: thêm người, làm thêm giờ).</li>' +
                         '<li><strong>イ, ウ. ❌ Sai.</strong> Thêm chức năng hoặc mở rộng phạm vi (<code>高機能化</code>, <code>スコープを拡大</code>) sẽ làm dự án *dài ra*, không phải ngắn đi.</li>' +
                         '<li><strong>エ. ❌ Sai.</strong> Cắt giảm nhân sự (<code>メンバーを削減</code>) sẽ làm dự án *dài ra* (trừ khi dự án đang bị quá tải nhân lực, nhưng đây không phải là biện pháp tiêu chuẩn).</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>スケジュールを短縮</code> (Rút ngắn lịch trình)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> Muốn <strong>nhanh (Time↓)</strong> → Phải <strong>tốn thêm tiền (Cost↑)</strong> (thêm người) <strong>HOẶC</strong> <strong>làm ít đi (Scope↓)</strong> (cắt bớt chức năng). Đáp án <strong>ア</strong> chính là (Time↓ = Cost↑).</li></ul>'
      },
      {
        'question': 'ITサービスに関する指標には，ITサービスが利用できなくなるインシデントの発生間隔の平均時間であるMTBSI(Mean Time Between Service Incidents)があり，サービスの中断の発生しにくさを表す。ITサービスにおいてMTBSIの改善を行っている事例として，最も適切なものはどれか。',
        'options': [
          'インシデント対応事例のデータベースを整備し，分析することによって，サービスの中断から原因究明までの時間の短縮を図る。',
          'サービスのメニューを増やすことによって，利用者数の増加を図る。',
          'サービスを提供しているネットワークの構成を二重化することによって，ネットワークがつながらなくなる障害の低減を図る。',
          'ヘルプデスクの要員を増やすことによって，サービス利用者からの個々の問合せにおける待ち時間の短縮を図る。'
        ],
        'answer': 2,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> <strong>MTBSI (Thời gian trung bình giữa các sự cố)</strong> đo lường khả năng "ít xảy ra gián đoạn". Ví dụ nào giúp <strong>cải thiện (tức là TĂNG) MTBSI</strong>?</li>' +
                         '<li><strong>ア.</strong> Xây dựng DB sự cố và phân tích để <strong>rút ngắn thời gian tìm nguyên nhân</strong>.</li>' +
                         '<li><strong>イ.</strong> Thêm menu dịch vụ để tăng số người dùng.</li>' +
                         '<li><strong>ウ.</strong> <strong>Nhân đôi (<code>二重化</code>)</strong> cấu hình mạng để <strong>giảm (<code>低減</code>) số lần hỏng hóc</strong>.</li>' +
                         '<li><strong>エ.</strong> Tăng nhân sự helpdesk để giảm thời gian chờ của khách hàng.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<p>Cải thiện (tăng) MTBSI (Mean Time <strong>Between</strong> Incidents) nghĩa là làm cho hệ thống trở nên <strong>đáng tin cậy (<code>信頼性</code>)</strong> hơn, <strong>lâu hỏng hơn</strong>, <strong>giảm số lần xảy ra sự cố (<code>障害の低減</code>)</strong>.</p>' +
                         '<ul><li><strong>ア. ❌ Sai.</strong> Rút ngắn thời gian tìm nguyên nhân hoặc thời gian sửa chữa là cải thiện <strong>MTTR (Mean Time To Repair - <code>平均修復時間</code>)</strong>, không phải MTBSI.</li>' +
                         '<li><strong>イ. ❌ Sai.</strong> Thêm menu dịch vụ không liên quan đến độ tin cậy.</li>' +
                         '<li><strong>ウ. ✅ Đúng.</strong> <strong>Nhân đôi (<code>二重化</code>)</strong> (Redundancy) cấu hình mạng là một biện pháp tăng cường <strong>độ tin cậy (<code>信頼性</code>)</strong>. Nếu một đường mạng hỏng, đường kia sẽ thay thế, giúp <strong>giảm số lần xảy ra sự cố (<code>障害の低減</code>)</strong>, từ đó kéo dài thời gian trung bình *giữa* các sự cố (tăng MTBSI).</li>' +
                         '<li><strong>エ. ❌ Sai.</strong> Tăng nhân sự helpdesk chỉ giảm thời gian chờ của khách hàng, không giảm số lần hệ thống hỏng.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>MTBSI</code>, <code>中断の発生しにくさ</code> (Khó xảy ra gián đoạn)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ (Phân biệt 2 chỉ số):</strong></li>' +
                         '<ul><li><strong>MTBF/MTBSI</strong> (Mean Time <strong>Between</strong> Failures): Thời gian <strong>GIỮA</strong> các lần hỏng. Cần làm hệ thống <strong>bền hơn, ít hỏng hơn (<code>二重化</code>)</strong>.</li>' +
                         '<li><strong>MTTR</strong> (Mean Time <strong>To Repair</strong>): Thời gian <strong>SỬA</strong>. Cần <strong>sửa nhanh hơn (<code>時間短縮</code>)</strong>.</li></ul></ul>'
      },
      {
        'question': 'あるホスティングサービスのSLAの内容にa～cがある。これらと関連するITサービスマネジメントの管理との適切な組合せはどれか。<br><ol type=\"a\"><li>サーバが稼働している時間</li><li>ディスクの使用量が設定したしきい値に達したことを検出した後に，指定された担当者に通知するまでの時間</li><li>不正アクセスの検知後に，指定された担当者に通知するまでの時間</li></ol><br><img src=\'img/r5-47.png\' width=\'400px\' height=\'auto\'>',
        'options': [
          'ア',
          'イ',
          'ウ',
          'エ'
        ],
        'answer': 0,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Hãy ghép nối các nội dung SLA (a, b, c) với các quy trình quản lý (<code>可用性</code>, <code>インシデント</code>, <code>セキュリティ</code>) tương ứng.</li>' +
                         '<li><strong>a.</strong> <strong>Thời gian máy chủ hoạt động (<code>稼働している時間</code>)</strong>.</li>' +
                         '<li><strong>b.</strong> Thời gian thông báo (<code>通知</code>) sau khi phát hiện ổ đĩa đạt ngưỡng (<code>しきい値</code>) (Sự cố).</li>' +
                         '<li><strong>c.</strong> Thời gian thông báo (<code>通知</code>) sau khi phát hiện <strong>truy cập trái phép (<code>不正アクセス</code>)</strong>.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>(a) Thời gian hoạt động:</strong> Đây là cam kết về <strong>Tính sẵn sàng (<code>可用性管理</code> - Availability Management)</strong>.</li>' +
                         '<li><strong>(b) Phát hiện sự cố (ổ đĩa đầy):</strong> Đây là một "Sự cố" (Incident) và việc thông báo nó thuộc về <strong>Quản lý sự cố (<code>インシデント管理</code> - Incident Management)</strong>.</li>' +
                         '<li><strong>(c) Phát hiện truy cập trái phép:</strong> Đây là một sự kiện "An ninh" (Security) và việc thông báo nó thuộc về <strong>Quản lý an ninh (<code>セキュリティ管理</code> - Security Management)</strong>.</li></ul>' +
                         '<p>=> Ghép nối: a = <code>可用性管理</code>, b = <code>インシデント管理</code>, c = <code>セキュリティ管理</code>. Tổ hợp này tương ứng với đáp án <strong>ア</strong>.</p>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Mẹo ghi nhớ:</strong></li>' +
                         '<ul><li>Hoạt động (<code>稼働</code>) = Sẵn sàng (<code>可用性</code>).</li>' +
                         '<li>Sự cố (<code>しきい値</code>) = Incident (<code>インシデント</code>).</li>' +
                         '<li>Truy cập trái phép (<code>不正アクセス</code>) = An ninh (<code>セキュリティ</code>).</li></ul></ul>'
      },
      {
        'question': 'システム環境整備に関する次の記述中のa，bに入れる字句の適切な組合せはどれか。<br><br>企業などがシステム環境である建物や設備などの資源を最善の状態に保つ考え方として<span class=\"bb\">a</span>がある。その考え方を踏まえたシステム環境整備の施策として，突発的な停電が発生したときにサーバに一定時間電力を供給する機器である<span class=\'bb\'>b</span>の配備などがある。<br><img src=\'img/r5-48.png\' width=\'400px\' height=\'auto\'>',
        'options': [
          'ア',
          'イ',
          'ウ',
          'エ'
        ],
        'answer': 3,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> (Điền vào chỗ trống)</li>' +
                         '<li><strong>(a):</strong> Quan điểm về việc duy trì các nguồn lực như <strong>tòa nhà, thiết bị (<code>建物や設備</code>)</strong> ở trạng thái tốt nhất.</li>' +
                         '<li><strong>(b):</strong> Thiết bị cung cấp điện trong một thời gian nhất định khi <strong>mất điện đột ngột (<code>突発的な停電</code>)</strong>.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>(a) Quản lý tòa nhà/thiết bị (<code>建物や設備</code>):</strong> Đây là <strong>Quản lý cơ sở vật chất (<code>ファシリティマネジメント</code> - Facility Management)</strong>.</li>' +
                         '<li><strong>(b) Cung cấp điện khi mất điện (<code>停電</code>):</strong> Đây là <strong>Bộ lưu điện (UPS - <code>無停電電源装置</code>)</strong>.</li></ul>' +
                         '<p>=> Ghép nối: a = <code>ファシリティマネジメント</code>, b = <code>UPS</code>. Tổ hợp này tương ứng với đáp án <strong>エ</strong>.</p>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Mẹo ghi nhớ:</strong></li>' +
                         '<ul><li>Quản lý tòa nhà/thiết bị = <strong>Facility Management</strong>.</li>' +
                         '<li>Chống mất điện = <strong>UPS</strong> (<strong>U</strong>ninterruptible <strong>P</strong>ower <strong>S</strong>upply - Nguồn điện không gián đoạn).</li></ul></ul>'
      },
      {
        'question': 'リファクタリングの説明として，適切なものはどれか。',
        'options': [
          'ソフトウェアが提供する機能仕様を変えずに，内部構造を改善すること',
          'ソフトウェアの動作などを解析して，その仕様を明らかにすること',
          'ソフトウェアの不具合を修正し，仕様どおりに動くようにすること',
          '利用者の要望などを基に，ソフトウェアに新しい機能を加える修正をすること'
        ],
        'answer': 0,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Mô tả nào đúng về <strong>Refactoring (<code>リファクタリング</code>)</strong>?</li>' +
                         '<li><strong>ア.</strong> <strong>Cải thiện cấu trúc bên trong (<code>内部構造を改善</code>)</strong> mà <strong>không làm thay đổi chức năng (<code>機能仕様を変えずに</code>)</strong> bên ngoài.</li>' +
                         '<li><strong>イ.</strong> Phân tích phần mềm để tìm ra đặc tả (<code>仕様を明らかにする</code>).</li>' +
                         '<li><strong>ウ.</strong> Sửa lỗi (<code>不具合を修正</code>) để phần mềm chạy đúng.</li>' +
                         '<li><strong>エ.</strong> Thêm chức năng mới (<code>新しい機能</code>).</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. ✅ Đúng.</strong> <strong>Refactoring</strong> là hành động "dọn dẹp code", tức là <strong>cải thiện cấu trúc bên trong (<code>内部構造を改善</code>)</strong> của mã nguồn (ví dụ: làm cho dễ đọc hơn, dễ bảo trì hơn, loại bỏ trùng lặp) mà <strong>không làm thay đổi chức năng (<code>機能仕様を変えずに</code>)</strong> bên ngoài.</li>' +
                         '<li><strong>イ. ❌ Sai.</strong> Phân tích phần mềm để tìm ra đặc tả là <strong>Kỹ thuật đảo ngược (<code>リバースエンジニアリング</code>)</strong>.</li>' +
                         '<li><strong>ウ. ❌ Sai.</strong> Sửa lỗi (bug fix) là <strong>Gỡ lỗi (<code>デバッグ</code> - Debugging)</strong>.</li>' +
                         '<li><strong>エ. ❌ Sai.</strong> Thêm chức năng mới là <strong>Nâng cấp (Enhancement)</strong>.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>リファクタリング</code> (Refactoring)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> Refactoring = "Dọn dẹp code" (làm code đẹp hơn) mà <strong>Không thêm/bớt chức năng (<code>機能仕様を変えずに</code>)</strong>.</li></ul>'
      },
      {
        'question': '内部統制において，不正防止を目的とした職務分掌に関する事例として，最も適切なものはどれか。',
        'options': [
          '申請者は自身の申請を承認できないようにする。',
          '申請部署と承認部署の役員を兼務させる。',
          '一つの業務を複数の担当者が手分けして行う。',
          '一つの業務を複数の部署で分散して行う。'
        ],
        'answer': 0,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Đâu là ví dụ đúng nhất về <strong>Phân chia nhiệm vụ (<code>職務分掌</code>)</strong> nhằm mục đích <strong>chống gian lận (<code>不正防止</code>)</strong>?</li>' +
                         '<li><strong>ア.</strong> <strong>Người nộp đơn (<code>申請者</code>) không thể tự phê duyệt (<code>承認できない</code>)</strong> đơn của chính mình.</li>' +
                         '<li><strong>イ.</strong> Cho phép kiêm nhiệm (<code>兼務</code>) vai trò ở bộ phận nộp đơn và bộ phận phê duyệt.</li>' +
                         '<li><strong>ウ.</strong> Một nghiệp vụ được nhiều người chia nhau (<code>手分けして</code>) làm.</li>' +
                         '<li><strong>エ.</strong> Một nghiệp vụ được nhiều phòng ban phân tán (<code>分散</code>) ra làm.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<p><strong>Phân chia nhiệm vụ (<code>職務分掌</code> - Segregation of Duties)</strong> là nguyên tắc kiểm soát nội bộ, đảm bảo rằng không một cá nhân nào có thể kiểm soát toàn bộ một quy trình từ đầu đến cuối, đặc biệt là các bước quan trọng như <strong>tạo (<code>申請</code>)</strong> và <strong>phê duyệt (<code>承認</code>)</strong>.</p>' +
                         '<ul><li><strong>ア. ✅ Đúng.</strong> <strong>Người nộp đơn (<code>申請者</code>) không thể tự phê duyệt (<code>承認できない</code>)</strong> đơn của chính mình. Đây là ví dụ kinh điển của việc phân chia nhiệm vụ để ngăn chặn gian lận.</li>' +
                         '<li><strong>イ. ❌ Sai.</strong> Việc kiêm nhiệm (<code>兼務</code>) sẽ *phá vỡ* sự phân chia nhiệm vụ, làm tăng rủi ro gian lận.</li>' +
                         '<li><strong>ウ, エ. ❌ Sai.</strong> Chia sẻ công việc (<code>手分け</code>, <code>分散</code>) không nhất thiết có nghĩa là kiểm soát chéo. Phân chia nhiệm vụ tập trung vào việc tách biệt các vai trò (ví dụ: người nhập liệu và người kiểm tra) chứ không chỉ là chia việc.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>職務分掌</code> (Phân chia nhiệm vụ), <code>不正防止</code> (Chống gian lận)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> Phân chia nhiệm vụ = Không cho phép "vừa đá bóng vừa thổi còi". Người <strong>tạo lệnh (<code>申請</code>)</strong> và người <strong>duyệt lệnh (<code>承認</code>)</strong> phải là hai người khác nhau.</li></ul>'
      },
      {
        'question': 'ITサービスマネジメントにおいて，過去のインシデントの内容をFAQとしてデータベース化した。それによって改善が期待できる項目に関する記述a～cのうち，適切なものだけを全て挙げたものはどれか。<br><ol type=\"a\"><li>ITサービスに関連する構成要素の情報を必要な場合にいつでも確認できる。</li><li>要員候補の業務経歴を確認し，適切な要員配置計画を立案できる。</li><li>利用者からの問合せに対する一次回答率が高まる。</li></ol>',
        'options': [
          'a',
          'a，b',
          'a，c',
          'c'
        ],
        'answer': 3,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Việc tạo <strong>FAQ</strong> từ dữ liệu sự cố (<code>インシデント</code>) trong quá khứ giúp cải thiện điều gì?</li>' +
                         '<li><strong>a.</strong> Có thể xem thông tin về các thành phần cấu hình (<code>構成要素</code>) của dịch vụ.</li>' +
                         '<li><strong>b.</strong> Có thể xem lịch sử công việc (<code>業務経歴</code>) của nhân viên để lập kế hoạch nhân sự.</li>' +
                         '<li><strong>c.</strong> <strong>Tỷ lệ giải quyết ngay trong lần gọi đầu tiên (<code>一次回答率</code>)</strong> sẽ tăng lên.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>a. ❌ Sai.</strong> Thông tin về các thành phần cấu hình (Configuration Items - <code>構成要素</code>) được quản lý trong <strong>CMDB (<code>構成管理データベース</code>)</strong>, không phải FAQ.</li>' +
                         '<li><strong>b. ❌ Sai.</strong> Thông tin về nhân sự (kỹ năng, kinh nghiệm) thuộc về <strong>Quản lý Nguồn lực (<code>人的資源管理</code>)</strong>, không phải FAQ.</li>' +
                         '<li><strong>c. ✅ Đúng.</strong> Khi có một cơ sở dữ liệu FAQ (Các câu hỏi thường gặp) tốt (dựa trên các sự cố đã xảy ra), nhân viên Service Desk (hoặc chính người dùng) có thể nhanh chóng tìm thấy câu trả lời cho các vấn đề phổ biến, giúp tăng <strong>tỷ lệ giải quyết ngay trong lần gọi đầu tiên (<code>一次回答率</code> - First Call Resolution, FCR)</strong>.</li></ul>' +
                         '<p>=> Vậy, chỉ có (c) là đúng.</p>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>FAQ</code>, <code>一次回答率</code> (Tỷ lệ trả lời lần đầu - FCR)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> FAQ tốt → Trả lời nhanh và chính xác hơn → Tăng tỷ lệ giải quyết ngay (<code>一次回答率</code>).</li></ul>'
      },
      {
        'question': '会計監査の目的として，最も適切なものはどれか。',
        'options': [
          '経理システムを含め，利用しているITに関するリスクをコントロールし，ITガバナンスが実現されていることを確認する。',
          '経理部門が保有しているPCの利用方法をはじめとして，情報のセキュリティに係るリスクマネジメントが効果的に実施されていることを確認する。',
          '組織内の会計業務などを含む諸業務が組織の方針に従って，合理的かつ効率的な運用が実現されていることを確認する。',
          '日常の各種取引の発生から決算報告書への集計に至るまで，不正や誤りのない処理が行われていることを確認する。'
        ],
        'answer': 3,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Mục đích của <strong>Kiểm toán kế toán (<code>会計監査</code>)</strong> là gì?</li>' +
                         '<li><strong>ア.</strong> Kiểm tra rủi ro CNTT (<code>ITに関するリスク</code>) và Quản trị CNTT (<code>ITガバナンス</code>).</li>' +
                         '<li><strong>イ.</strong> Kiểm tra rủi ro an ninh thông tin (<code>情報のセキュリティ</code>) (ví dụ: cách dùng PC).</li>' +
                         '<li><strong>ウ.</strong> Kiểm tra xem các nghiệp vụ (<code>諸業務</code>) có hiệu quả (<code>効率的</code>) và hợp lý (<code>合理的</code>) không.</li>' +
                         '<li><strong>エ.</strong> Xác nhận rằng toàn bộ quá trình, từ các <strong>giao dịch hàng ngày (<code>日常の各種取引</code>)</strong> đến khi lập <strong>báo cáo tài chính (<code>決算報告書</code>)</strong>, được xử lý <strong>không có gian lận hay sai sót (<code>不正や誤りのない</code>)</strong>.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. ❌ Sai.</strong> Đây là <strong>Kiểm toán hệ thống (<code>システム監査</code>)</strong> hoặc <strong>Kiểm toán CNTT (<code>IT監査</code>)</strong>.</li>' +
                         '<li><strong>イ. ❌ Sai.</strong> Đây là <strong>Kiểm toán an ninh thông tin (<code>情報セキュリティ監査</code>)</strong>.</li>' +
                         '<li><strong>ウ. ❌ Sai.</strong> Đây là <strong>Kiểm toán nghiệp vụ (<code>業務監査</code>)</strong> (hoặc kiểm toán nội bộ).</li>' +
                         '<li><strong>エ. ✅ Đúng.</strong> <strong>Kiểm toán kế toán (<code>会計監査</code>)</strong> (hay Kiểm toán tài chính) có mục đích chính là xác minh rằng các <strong>báo cáo tài chính (<code>決算報告書</code>)</strong> phản ánh trung thực, hợp lý, <strong>không có sai sót trọng yếu (<code>不正や誤り</code>)</strong>, dựa trên việc kiểm tra các <strong>giao dịch (<code>取引</code>)</strong>.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>会計監査</code> (Kiểm toán kế toán)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> <strong>Kế toán (<code>会計</code>)</strong> = Liên quan đến <strong>Giao dịch (<code>取引</code>)</strong> và <strong>Báo cáo tài chính (<code>決算報告書</code>)</strong>.</li></ul>'
      },
      {
        'question': 'ITが適切に活用されるために企業が実施している活動を，ルールを決める活動と，ルールに従って行動する活動に分けたとき，ルールを決める活動に該当するものはどれか。',
        'options': [
          'IT投資判断基準の確立',
          'SLA遵守のためのオペレーション管理',
          '開発プロジェクトの予算管理',
          '標準システム開発手法に準拠した個別のプロジェクトの推進'
        ],
        'answer': 0,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Khi chia các hoạt động CNTT thành 2 nhóm: "Hoạt động thiết lập quy tắc" (<code>ルールを決める</code>) và "Hoạt động tuân theo quy tắc" (<code>ルールに従って行動</code>). Hoạt động nào thuộc nhóm <strong>"Thiết lập quy tắc"</strong>?</li>' +
                         '<li><strong>ア.</strong> <strong>Thiết lập (<code>確立</code>)</strong> <strong>tiêu chí (<code>基準</code>)</strong> đánh giá đầu tư CNTT.</li>' +
                         '<li><strong>イ.</strong> Quản lý vận hành (<code>オペレーション管理</code>) để <strong>tuân thủ (<code>遵守</code>)</strong> SLA.</li>' +
                         '<li><strong>ウ.</strong> Quản lý ngân sách (<code>予算管理</code>) của dự án.</li>' +
                         '<li><strong>エ.</strong> Thúc đẩy dự án <strong>tuân thủ (<code>準拠</code>)</strong> phương pháp phát triển chuẩn.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<p>Câu hỏi này phân biệt giữa "Governance" (Thiết lập quy tắc) và "Management" (Tuân theo quy tắc).</p>' +
                         '<ul><li><strong>ア. ✅ "Thiết lập quy tắc".</strong> <strong>"Thiết lập (<code>確立</code>)"</strong> một <strong>"Tiêu chí (<code>基準</code>)"</strong> chính là hành động "tạo ra quy tắc" (<code>ルールを決める</code>) để người khác tuân theo.</li>' +
                         '<li><strong>イ. ❌ "Tuân theo quy tắc".</strong> SLA là quy tắc đã được đặt ra. "Quản lý để tuân thủ (<code>遵守</code>)" nó là hành động "tuân theo quy tắc".</li>' +
                         '<li><strong>ウ. ❌ "Tuân theo quy tắc".</strong> Ngân sách là quy tắc (ràng buộc) đã được đặt ra. "Quản lý" (<code>管理</code>) theo ngân sách đó là hành động "tuân theo quy tắc".</li>' +
                         '<li><strong>エ. ❌ "Tuân theo quy tắc".</strong> Phương pháp chuẩn là quy tắc đã được đặt ra. "Thúc đẩy dự án tuân thủ (<code>準拠</code>)" nó là hành động "tuân theo quy tắc".</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>ルールを決める</code> (Quyết định/Thiết lập quy tắc)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> "Thiết lập" (<code>確立</code>) một "Tiêu chí" (<code>基準</code>) chính là <strong>tạo ra quy tắc</strong>. Các hành động "Tuân thủ" (<code>遵守</code>), "Quản lý" (<code>管理</code>) theo cái có sẵn là <strong>tuân theo quy tắc</strong>.</li></ul>'
      },
      {
        'question': 'システム開発のプロジェクトマネジメントに関する記述a～dのうち，スコープのマネジメントの失敗事例だけを全て挙げたものはどれか。<br><ol type=\"a\"><li>開発に必要な人件費を過少に見積もったので，予算を超過した。</li><li>開発の作業に必要な期間を短く設定したので，予定期間で開発を完了させることができなかった。</li><li>作成する機能の範囲をあらかじめ決めずにプロジェクトを開始したので，開発期間を超過した。</li><li>プロジェクトで実施すべき作業が幾つか計画から欠落していたので，システムを完成できなかった。</li></ol>',
        'options': [
          'a，b',
          'b，c',
          'b，d',
          'c，d'
        ],
        'answer': 3,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Đâu là tất cả các ví dụ về <strong>thất bại</strong> trong <strong>Quản lý Phạm vi (<code>スコープのマネジメント</code>)</strong>?</li>' +
                         '<li><strong>a.</strong> Ước tính <strong>chi phí (<code>人件費</code>)</strong> quá thấp → Vượt ngân sách (<code>予算を超過</code>).</li>' +
                         '<li><strong>b.</strong> Đặt <strong>thời gian (<code>期間</code>)</strong> quá ngắn → Không hoàn thành đúng hạn (<code>完了させることができなかった</code>).</li>' +
                         '<li><strong>c.</strong> Bắt đầu dự án mà <strong>không xác định rõ phạm vi chức năng (<code>機能の範囲を...決めずに</code>)</strong> → Vượt thời gian.</li>' +
                         '<li><strong>d.</strong> <strong>Bỏ sót (<code>欠落</code>)</strong> một số công việc cần làm khỏi kế hoạch → Không thể hoàn thành.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<p>Quản lý phạm vi (Scope) là việc xác định và kiểm soát "cái gì sẽ được làm" và "cái gì không được làm".</p>' +
                         '<ul><li><strong>a. ❌ Sai.</strong> Ước tính sai nhân công (<code>人件費</code>) → Thất bại của <strong>Quản lý Chi phí (<code>コスト</code>)</strong>.</li>' +
                         '<li><strong>b. ❌ Sai.</strong> Ước tính sai thời gian (<code>期間</code>) → Thất bại của <strong>Quản lý Lịch trình (<code>スケジュール</code>)</strong>.</li>' +
                         '<li><strong>c. ✅ Thất bại Scope.</strong> <strong>Không xác định rõ phạm vi chức năng (<code>機能の範囲を...決めずに</code>)</strong> khi bắt đầu là một thất bại kinh điển của quản lý scope, dẫn đến "scope creep" (phạm vi bị phình to) và trễ tiến độ.</li>' +
                         '<li><strong>d. ✅ Thất bại Scope.</strong> <strong>Bỏ sót các công việc cần làm (<code>作業が...欠落</code>)</strong> trong kế hoạch cũng là một thất bại của quản lý scope (không định nghĩa đầy đủ phạm vi).</li></ul>' +
                         '<p>=> Vậy, các thất bại về scope là c và d.</p>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>スコープ</code> (Scope)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> <strong>Scope = Cái gì cần làm</strong>. Thất bại Scope = <strong>Không biết rõ cần làm gì (c)</strong> hoặc <strong>Làm thiếu (bỏ sót) (d)</strong>.</li></ul>'
      },
      {
        'question': 'ソフトウェア開発の仕事に対し，10名が15日間で完了する計画を立てた。しかし，仕事開始日から5日間は，8名しか要員を確保できないことが分かった。計画どおり15日間で仕事を完了させるためには，6日目以降は何名の要員が必要か。ここで，各要員の生産性は同じものとする。',
        'options': [
          '10',
          '11',
          '12',
          '14'
        ],
        'answer': 1,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> (Bài toán Man-Day)</li>' +
                         '<li><strong>Kế hoạch:</strong> 10 người làm trong 15 ngày.</li>' +
                         '<li><strong>Thực tế (GĐ 1):</strong> 8 người làm trong 5 ngày đầu.</li>' +
                         '<li><strong>Yêu cầu:</strong> Phải hoàn thành trong 15 ngày (tức là còn 10 ngày). Hỏi 10 ngày còn lại (từ ngày 6) cần bao nhiêu người?</li></ul>' +
                         '<hr><h3><strong>Phân tích & Tính toán</strong></h3>' +
                         '<ol><li><strong>Tính tổng khối lượng công việc (Tổng Man-Day):</strong></li>' +
                         '<ul><li>Tổng công việc = 10 người × 15 ngày = <strong>150 Man-Day</strong>.</li></ul>' +
                         '<li><strong>Tính công việc đã hoàn thành (trong 5 ngày đầu):</strong></li>' +
                         '<ul><li>Công việc làm trong 5 ngày đầu = 8 người × 5 ngày = <strong>40 Man-Day</strong>.</li></ul>' +
                         '<li><strong>Tính công việc còn lại và thời gian còn lại:</strong></li>' +
                         '<ul><li>Công việc còn lại = 150 (Tổng) - 40 (Đã làm) = <strong>110 Man-Day</strong>.</li>' +
                         '<li>Thời gian còn lại (GĐ 2) = 15 ngày (Tổng) - 5 ngày (Đã qua) = <strong>10 ngày</strong>.</li></ul>' +
                         '<li><strong>Tính số người cần thiết cho GĐ 2:</strong></li>' +
                         '<ul><li>Số người cần thiết = Khối lượng công việc còn lại / Thời gian còn lại</li>' +
                         '<li><code>= 110 Man-Day / 10 ngày = <strong>11 người</strong></code>.</li></ul></ol>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Mẹo ghi nhớ:</strong> Đây là bài toán Man-Day (<code>人日</code>) cơ bản. <strong>1. Tính Tổng công việc (10x15=150) → 2. Trừ đi phần đã làm (8x5=40) → 3. Lấy kết quả (110) chia cho số ngày còn lại (15-5=10) → (110/10=11)</strong>.</li></ul>'
      }
],
    technology: [
      {
        'question': 'ISMSクラウドセキュリティ認証に関する記述として，適切なものはどれか。',
        'options': [
          'PaaS，SaaSが対象であり，IaaSは対象ではない。',
          'クラウドサービスについて，クラウドサービス固有の管理策が実施されていることを認証する制度',
          'クラウドサービスを提供している組織が対象であり，クラウドサービスを利用する組織は対象ではない。',
          'クラウドサービスで保管されている個人情報について，適切な保護措置を講じる体制を整備し，運用していることを評価して，プライバシーマークの使用を認める制度である。'
        ],
        'answer': 1,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Mô tả nào là đúng về <strong>Chứng nhận An ninh Đám mây ISMS (<code>ISMSクラウドセキュリティ認証</code>)</strong>?</li>' +
                         '<li><strong>ア.</strong> Chỉ áp dụng cho PaaS, SaaS, không áp dụng cho IaaS.</li>' +
                         '<li><strong>イ.</strong> Hệ thống chứng nhận rằng các <strong>biện pháp kiểm soát đặc thù của dịch vụ đám mây (<code>クラウドサービス固有の管理策</code>)</strong> đã được thực hiện.</li>' +
                         '<li><strong>ウ.</strong> Chỉ áp dụng cho tổ chức cung cấp cloud, không áp dụng cho tổ chức sử dụng.</li>' +
                         '<li><strong>エ.</strong> Là hệ thống cấp <strong>Privacy Mark (<code>プライバシーマーク</code>)</strong> cho các nhà cung cấp cloud.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. ❌ Sai.</strong> Chứng nhận này áp dụng cho cả 3 mô hình: IaaS, PaaS, và SaaS.</li>' +
                         '<li><strong>イ. ✅ Đúng.</strong> <strong>Chứng nhận an ninh đám mây ISMS</strong> (dựa trên ISO/IEC 27017) là một chứng nhận bổ sung (add-on) cho ISMS (ISO/IEC 27001). Nó xác nhận rằng nhà cung cấp (hoặc người dùng) đã triển khai các <strong>biện pháp kiểm soát đặc thù (<code>固有の管理策</code>)</strong> dành riêng cho môi trường <strong>Cloud (<code>クラウド</code>)</strong> (ví dụ: cách ly dữ liệu khách hàng).</li>' +
                         '<li><strong>ウ. ❌ Sai.</strong> Chứng nhận này áp dụng cho cả "nhà cung cấp dịch vụ" (cloud provider) và "người sử dụng dịch vụ" (cloud user).</li>' +
                         '<li><strong>エ. ❌ Sai.</strong> Đây là mô tả của hệ thống <strong>Privacy Mark (<code>プライバシーマーク</code>)</strong>, tập trung vào bảo vệ thông tin cá nhân (<code>個人情報</code>).</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>ISMSクラウド</code> (ISMS Cloud)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> Đây là chứng nhận ISMS nhưng có thêm chữ "Cloud" → Nó phải liên quan đến các biện pháp kiểm soát <strong>đặc thù của Cloud (<code>クラウド固有</code>)</strong>.</li></ul>'
      },
      {
        'question': 'IoTデバイスにおけるセキュリティ対策のうち，耐タンパ性をもたせる対策として，適切なものはどれか。',
        'options': [
          'サーバからの接続認証が連続して一定回数失敗したら，接続できないようにする。',
          '通信するデータを暗号化し，データの機密性を確保する。',
          '内蔵ソフトウェアにオンラインアップデート機能をもたせ，最新のパッチが適用されるようにする。',
          '内蔵ソフトウェアを難読化し，解読に要する時間を増大させる。'
        ],
        'answer': 3,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Đâu là biện pháp tạo ra <strong>Tính chống can thiệp (<code>耐タンパ性</code> - Tamper Resistance)</strong> cho thiết bị IoT?</li>' +
                         '<li><strong>ア.</strong> Khóa kết nối (<code>接続できない</code>) sau khi xác thực thất bại nhiều lần.</li>' +
                         '<li><strong>イ.</strong> Mã hóa (<code>暗号化</code>) dữ liệu truyền tin.</li>' +
                         '<li><strong>ウ.</strong> Cài đặt chức năng cập nhật (<code>アップデート</code>) trực tuyến để vá lỗi.</li>' +
                         '<li><strong>エ.</strong> <strong>Làm rối mã (<code>難読化</code>)</strong> phần mềm bên trong để tăng thời gian giải mã.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<p><strong>Tính chống can thiệp (<code>耐タンパ性</code> - Tamper Resistance)</strong> là khả năng của một thiết bị chống lại việc bị phân tích, tháo dỡ, hoặc can thiệp vật lý/logic để trích xuất thông tin bí mật (ví dụ: bẻ khóa, đọc chip).</p>' +
                         '<ul><li><strong>ア. ❌ Sai.</strong> Đây là biện pháp chống tấn công Brute-force, là một biện pháp bảo mật máy chủ, không phải tính chống can thiệp của *thiết bị*.</li>' +
                         '<li><strong>イ. ❌ Sai.</strong> Mã hóa dữ liệu truyền tin (khi đã ra khỏi thiết bị) để bảo vệ tính bảo mật, không phải chống can thiệp vào bản thân thiết bị.</li>' +
                         '<li><strong>ウ. ❌ Sai.</strong> Đây là biện pháp vá lỗi, quản lý lỗ hổng, không phải chống can thiệp (phân tích).</li>' +
                         '<li><strong>エ. ✅ Đúng.</strong> <strong>Làm rối mã (<code>難読化</code> - Obfuscation)</strong> phần mềm bên trong làm cho việc phân tích, dịch ngược (<code>リバースエンジニアリング</code>) để hiểu logic hoạt động trở nên khó khăn và tốn thời gian hơn. Đây là một biện pháp tạo ra tính chống can thiệp.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>耐タンパ性</code> (Tính chống can thiệp)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> Chống "mổ xẻ", "phân tích" (Tamper) → <strong>Làm rối mã (<code>難読化</code>)</strong> hoặc <strong>Phá hủy vật lý (<code>物理的破壊</code>)</strong>.</li></ul>'
      },
      {
        'question': 'Webサイトなどに不正なソフトウェアを潜ませておき，PCやスマートフォンなどのWebブラウザからこのサイトにアクセスしたとき，利用者が気付かないうちにWebブラウザなどの脆弱性を突いてマルウェアを送り込む攻撃はどれか。',
        'options': [
          'DDoS攻撃',
          'SQLインジェクション',
          'ドライブバイダウンロード',
          'フィッシング攻撃'
        ],
        'answer': 2,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Cuộc tấn công nào gài phần mềm độc hại vào một trang web, và khi người dùng truy cập (<code>アクセスしたとき</code>), nó sẽ tự động tấn công vào <strong>lỗ hổng của trình duyệt (<code>Webブラウザなどの脆弱性</code>)</strong> để cài cắm mã độc mà <strong>người dùng không hề hay biết (<code>利用者が気付かないうちに</code>)</strong>?</li>' +
                         '<li><strong>ア.</strong> Tấn công DDoS</li>' +
                         '<li><strong>イ.</strong> SQL Injection</li>' +
                         '<li><strong>ウ.</strong> Drive-by Download</li>' +
                         '<li><strong>エ.</strong> Tấn công Phishing</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. DDoS攻撃:</strong> ❌ Sai. Tấn công DDoS (Từ chối dịch vụ phân tán) làm cho dịch vụ bị ngưng hoạt động (sập web).</li>' +
                         '<li><strong>イ. SQLインジェクション:</strong> ❌ Sai. Là tấn công vào lỗ hổng của *server* (ứng dụng web) để thao túng cơ sở dữ liệu.</li>' +
                         '<li><strong>ウ. ドライブバイダウンロード (Drive-by Download):</strong> ✅ <strong>Đúng.</strong> Đây là hình thức tấn công mà người dùng chỉ cần "lái xe ngang qua" (truy cập) một trang web đã bị nhiễm độc là tự động bị tải (<code>ダウンロード</code>) phần mềm độc hại về máy (<code>マルウェアを送り込む</code>) thông qua việc khai thác lỗ hổng của trình duyệt.</li>' +
                         '<li><strong>エ. フィッシング攻撃 (Phishing):</strong> ❌ Sai. Là tấn công lừa đảo (ví dụ: email, web giả mạo) để *lừa* người dùng *tự* nhập thông tin đăng nhập.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>ドライブバイダウンロード</code> (Drive-by Download)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> Chỉ cần "ghé thăm" (Drive-by) là bị "tải về" (Download) → <strong>Drive-by Download</strong>.</li></ul>'
      },
      {
        'question': '関係データベースで管理された"会員管理"表を正規化して，"店舗"表，"会員種別"表及び"会員"表に分割した。\"会員\"表として，適切なものはどれか。ここで，表中の下線は主キーを表し，一人の会員が複数の店舗に登録した場合は，会員番号を店舗ごとに付与するものとする。<br><img src=\'img/r5-59.png\' width=\'400px\' height=\'auto\'>',
        'options': [
          'ア',
          'イ',
          'ウ',
          'エ'
        ],
        'answer': 3,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Dữ liệu đơn hàng đang được quản lý trong 1 bảng. Hãy <strong>chuẩn hóa (<code>正規化</code>)</strong> bằng cách tách (<code>分割</code>) nó thành 3 bảng: "Cửa hàng" (<code>店舗</code>), "Loại thành viên" (<code>会員種別</code>), và "Thành viên" (<code>会員</code>). Đâu là cấu trúc đúng cho bảng "Thành viên"?</li>' +
                         '<li><strong>Bảng gốc (hiển thị 1 phần):</strong> {Mã TV, Tên TV, Địa chỉ TV, <u>Mã Cửa hàng, Tên Cửa hàng, Địa chỉ Cửa hàng</u>, <u>Mã Loại TV, Tên Loại TV</u>}</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<p>Mục tiêu của <strong>chuẩn hóa (<code>正規化</code>)</strong> là loại bỏ sự lặp lại dữ liệu (redundancy) và các vấn đề về phụ thuộc hàm.</p>' +
                         '<p>Nhìn vào bảng gốc, ta thấy thông tin về Cửa hàng (Tên, Địa chỉ) và Loại thành viên (Tên) bị <strong>lặp lại (dư thừa)</strong>.</p>' +
                         '<p>Để giải quyết (đạt dạng chuẩn 2NF/3NF), chúng ta cần tách bảng gốc thành 3 bảng:</p>' +
                         '<ol><li><strong>Bảng Cửa hàng (<code>店舗</code>):</strong> Chứa thông tin chỉ phụ thuộc vào <code>Mã Cửa hàng</code>. Các cột sẽ là: {<strong><code>店舗番号</code></strong> (Khóa chính), <code>店舗名</code>, <code>所在地</code>}.</li>' +
                         '<li><strong>Bảng Loại TV (<code>会員種別</code>):</strong> Chứa thông tin chỉ phụ thuộc vào <code>Mã Loại TV</code>. Các cột sẽ là: {<strong><code>会員種別番号</code></strong> (Khóa chính), <code>会員種別名</code>}.</li>' +
                         '<li><strong>Bảng Thành viên (<code>会員</code>):</strong> Chứa thông tin về thành viên. Nó cần giữ lại các khóa ngoại (foreign key) để biết thành viên đó thuộc cửa hàng nào và là loại gì. Các cột sẽ là: {<strong><code>会員番号</code></strong> (Khóa chính), <code>氏名</code>, <code>住所</code>, <em><code>店舗番号</code></em> (Khóa ngoại), <em><code>会員種別番号</code></em> (Khóa ngoại)}.</li></ol>' +
                         '<p>Cấu trúc này khớp với đáp án <strong>エ</strong>. Nó loại bỏ được sự dư thừa dữ liệu (tên cửa hàng, tên loại TV chỉ lưu 1 lần) và đảm bảo tính nhất quán.</p>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>正規化</code> (Chuẩn hóa), <code>分割</code> (Phân tách)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> Chuẩn hóa là "tách những gì lặp đi lặp lại ra một bảng riêng". Bảng chính (Thành viên) phải giữ lại các <strong>khóa ngoại (Foreign Keys)</strong> (<code>店舗番号</code>, <code>会員種別番号</code>) để liên kết đến các bảng con đã bị tách ra.</li></ul>'
      },
      {
        'question': '手続 printArray は，配列 integerArray の要素を並べ替えて出力する。手続 printArray を呼び出したときの出力はどれか。ここで，配列の要素番号は1から始まる。<br><br>〔プログラム〕<br><img src=\'img/r5-60.png\' width=\'400px\' height=\'auto\'>',
        'options': [
          '1，2，3，4',
          '1，3，2，4',
          '3，1，4，2',
          '4，3，2，1'
        ],
        'answer': 0,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Kết quả đầu ra của thủ tục `printArray` là gì? (Sắp xếp mảng [3, 1, 4, 2] rồi in ra).</li>' +
                         '<li><strong>Chương trình (Mã giả):</strong></li>' +
                         '<ul><li>`integerArray` = [3, 1, 4, 2]</li>' +
                         '<li>Vòng lặp `j` từ 1 đến 3</li>' +
                         '<li>Vòng lặp `i` từ 4 xuống `j+1` (giảm dần)</li>' +
                         '<li>Nếu (<code>array[i-1]</code> > <code>array[i]</code>) thì</li>' +
                         '<li>Đổi chỗ (<code>swap</code>) <code>array[i-1]</code> và <code>array[i]</code></li>' +
                         '<li>Kết thúc vòng lặp `i`</li>' +
                         '<li>Kết thúc vòng lặp `j`</li>' +
                         '<li>Vòng lặp `i` từ 1 đến 4: In ra <code>array[i]</code></li></ul></ul>' +
                         '<hr><h3><strong>Phân tích chương trình (Sắp xếp nổi bọt)</strong></h3>' +
                         '<p>Đây là thuật toán <strong>Sắp xếp nổi bọt (<code>バブルソート</code> - Bubble Sort)</strong>. Mảng ban đầu là <code>[3, 1, 4, 2]</code>.</p>' +
                         '<ol><li><strong>Vòng lặp j = 1:</strong> (i chạy từ 4 xuống 2)</li>' +
                         '<ul><li>i = 4: So sánh <code>array[3]</code> (4) và <code>array[4]</code> (2). 4 > 2, đổi chỗ → <code>[3, 1, 2, 4]</code></li>' +
                         '<li>i = 3: So sánh <code>array[2]</code> (1) và <code>array[3]</code> (2). 1 < 2, không đổi → <code>[3, 1, 2, 4]</code></li>' +
                         '<li>i = 2: So sánh <code>array[1]</code> (3) và <code>array[2]</code> (1). 3 > 1, đổi chỗ → <code>[1, 3, 2, 4]</code></li>' +
                         '<li>(Kết thúc j=1: <code>[1, 3, 2, 4]</code> - Số nhỏ nhất (1) đã nổi lên đầu)</li></ul>' +
                         '<li><strong>Vòng lặp j = 2:</strong> (i chạy từ 4 xuống 3)</li>' +
                         '<ul><li>i = 4: So sánh <code>array[3]</code> (2) và <code>array[4]</code> (4). 2 < 4, không đổi → <code>[1, 3, 2, 4]</code></li>' +
                         '<li>i = 3: So sánh <code>array[2]</code> (3) và <code>array[3]</code> (2). 3 > 2, đổi chỗ → <code>[1, 2, 3, 4]</code></li>' +
                         '<li>(Kết thúc j=2: <code>[1, 2, 3, 4]</code> - Số nhỏ thứ 2 (2) đã về vị trí 2)</li></ul>' +
                         '<li><strong>Vòng lặp j = 3:</strong> (i chạy từ 4 xuống 4)</li>' +
                         '<ul><li>i = 4: So sánh <code>array[3]</code> (3) và <code>array[4]</code> (4). 3 < 4, không đổi → <code>[1, 2, 3, 4]</code></li>' +
                         '<li>(Kết thúc j=3: <code>[1, 2, 3, 4]</code>)</li></ul></ol>' +
                         '<p>Cuối cùng, vòng lặp thứ hai (từ <code>i = 1 đến 4</code>) sẽ in ra các phần tử của mảng đã sắp xếp: <strong>1, 2, 3, 4</strong>.</p>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Mẹo ghi nhớ:</strong> Đây là thuật toán Bubble Sort (biến thể chạy ngược). Nó sẽ sắp xếp mảng theo thứ tự tăng dần. Kết quả của mảng <code>[3, 1, 4, 2]</code> sau khi sắp xếp tăng dần là <code>[1, 2, 3, 4]</code>.</li></ul>'
      },
      {
        'question': 'IoTシステムなどの設計，構築及び運用に際しての基本原則とされ，システムの企画，設計段階から情報セキュリティを確保するための方策を何と呼ぶか。',
        'options': [
          'セキュアブート',
          'セキュリティバイデザイン',
          'ユニバーサルデザイン',
          'リブート'
        ],
        'answer': 1,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Nguyên tắc cơ bản khi thiết kế hệ thống (như IoT), trong đó các biện pháp đảm bảo <strong>an ninh thông tin (<code>情報セキュリティ</code>)</strong> được tích hợp ngay từ <strong>giai đoạn lập kế hoạch, thiết kế (<code>企画，設計段階から</code>)</strong>, được gọi là gì?</li>' +
                         '<li><strong>ア.</strong> Secure Boot (Khởi động an toàn)</li>' +
                         '<li><strong>イ.</strong> Security by Design (Bảo mật theo thiết kế)</li>' +
                         '<li><strong>ウ.</strong> Universal Design (Thiết kế phổ quát)</li>' +
                         '<li><strong>エ.</strong> Reboot (Khởi động lại)</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. セキュアブート (Secure Boot):</strong> ❌ Sai. Là một tính năng kỹ thuật cụ thể (của UEFI) đảm bảo chỉ khởi động hệ điều hành tin cậy, không phải là một nguyên tắc thiết kế tổng thể.</li>' +
                         '<li><strong>イ. セキュリティバイデザイン (Security by Design):</strong> ✅ <strong>Đúng.</strong> Đây là một triết lý/nguyên tắc, yêu cầu <strong>bảo mật (<code>セキュリティ</code>)</strong> phải được xem xét và tích hợp ngay từ đầu <strong>trong suốt quá trình thiết kế (<code>バイデザイン</code> / <code>設計段階から</code>)</strong>, chứ không phải là một tính năng "thêm vào" (add-on) sau khi đã làm xong.</li>' +
                         '<li><strong>ウ. ユニバーサルデザイン (Universal Design):</strong> ❌ Sai. Là "Thiết kế phổ quát", tức là thiết kế để mọi người (bao gồm cả người già, người khuyết tật) đều có thể sử dụng.</li>' +
                         '<li><strong>エ. リブート (Reboot):</strong> ❌ Sai. Là hành động khởi động lại máy.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>セキュリティバイデザイン</code> (Security by Design)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> <strong>Security</strong> (Bảo mật - <code>セキュリティ</code>) được tích hợp ngay từ lúc <strong>Design</strong> (Thiết kế - <code>設計段階</code>) → <strong>Security by Design</strong>.</li></ul>'
      },
      {
        'question': '情報セキュリティにおける認証要素は3種類に分類できる。認証要素の3種類として，適切なものはどれか。',
        'options': [
          '個人情報，所持情報，生体情報',
          '個人情報，所持情報，知識情報',
          '個人情報，生体情報，知識情報',
          '所持情報，生体情報，知識情報'
        ],
        'answer': 3,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Ba loại yếu tố xác thực (<code>認証要素</code>) trong an ninh thông tin là gì?</li>' +
                         '<li><strong>ア.</strong> Thông tin cá nhân, Thông tin sở hữu, Thông tin sinh trắc học</li>' +
                         '<li><strong>イ.</strong> Thông tin cá nhân, Thông tin sở hữu, Thông tin kiến thức</li>' +
                         '<li><strong>ウ.</strong> Thông tin cá nhân, Thông tin sinh trắc học, Thông tin kiến thức</li>' +
                         '<li><strong>エ.</strong> <strong>Thông tin sở hữu (<code>所持情報</code>)</strong>, <strong>Thông tin sinh trắc học (<code>生体情報</code>)</strong>, <strong>Thông tin kiến thức (<code>知識情報</code>)</strong></li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<p>Ba yếu tố xác thực kinh điển (3 Factors of Authentication):</p>' +
                         '<ol><li><strong>Something you KNOW (<code>知識情報</code> - Yếu tố kiến thức):</strong> Cái bạn <strong>biết</strong> (Mật khẩu, PIN, Câu hỏi bí mật).</li>' +
                         '<li><strong>Something you HAVE (<code>所持情報</code> - Yếu tố sở hữu):</strong> Cái bạn <strong>có/sở hữu</strong> (Điện thoại, Thẻ IC, USB Token).</li>' +
                         '<li><strong>Something you ARE (<code>生体情報</code> - Yếu tố sinh trắc học):</strong> Cái thuộc về <strong>cơ thể/hành vi</strong> của bạn (Vân tay, Khuôn mặt, Mống mắt, Giọng nói, Chữ ký).</li></ol>' +
                         '<p>"Thông tin cá nhân" (<code>個人情報</code> - Personal Information) (như tên, ngày sinh) không phải là một yếu tố *xác thực* (vì nó không bí mật và dễ bị lộ).</p>' +
                         '<ul><li><strong>エ. ✅ Đúng.</strong> Lựa chọn này bao gồm đúng ba yếu tố: Sở hữu (<code>所持</code>), Sinh trắc học (<code>生体</code>), và Kiến thức (<code>知識</code>).</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Mẹo ghi nhớ:</strong> 3 yếu tố xác thực là: <strong>Cái bạn BIẾT (<code>知識</code>), Cái bạn CÓ (<code>所持</code>), Cái bạn LÀ (<code>生体</code>)</strong>.</li></ul>'
      },
      {
        'question': '容量が500GバイトのHDDを2台使用して，RAID0，RAID1を構成したとき，実際に利用可能な記憶容量の組合せとして，適切なものはどれか。<br><img src=\'img/r5-63.png\' width=\'400px\' height=\'auto\'>',
        'options': [
          'ア',
          'イ',
          'ウ',
          'エ'
        ],
        'answer': 1,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Dùng <strong>2 ổ cứng (<code>2台</code>) 500GB</strong>, tính dung lượng khả dụng (<code>利用可能な記憶容量</code>) khi cấu hình <strong>RAID 0</strong> và <strong>RAID 1</strong>.</li></ul>' +
                         '<hr><h3><strong>Phân tích (RAID 0 vs RAID 1)</strong></h3>' +
                         '<ul><li><strong>RAID 0 (Striping - Ghi xen kẽ):</strong> Gộp dung lượng của tất cả (N) các ổ đĩa. <strong>Tăng tốc độ, không an toàn.</strong></li>' +
                         '<ul><li>Dung lượng = N × Size = 2 × 500GB = 1,000GB (<strong>1.0TB</strong>).</li></ul>' +
                         '<li><strong>RAID 1 (Mirroring - Gương):</strong> Ghi dữ liệu giống hệt nhau lên tất cả các ổ đĩa. <strong>An toàn, không tăng tốc độ/dung lượng.</strong></li>' +
                         '<ul><li>Dung lượng = Size của 1 ổ đĩa = <strong>500GB (0.5TB)</strong>.</li></ul></ul>' +
                         '<p>=> Chúng ta cần tìm sự kết hợp: <strong>RAID 0 = 1.0TB</strong>, <strong>RAID 1 = 0.5TB</strong>. Điều này tương ứng với lựa chọn <strong>イ</strong>.</p>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Mẹo ghi nhớ (Dung lượng RAID với 2 ổ):</strong></li>' +
                         '<ul><li><strong>RAID 0:</strong> Số 0 có nghĩa là 0 an toàn (mất 1 ổ là mất hết). Gộp (Nhân) dung lượng (2 x 500 = 1000).</li>' +
                         '<li><strong>RAID 1:</strong> Số 1 có nghĩa là 1 bản sao (mirror/gương). Dung lượng chỉ bằng 1 ổ (500).</li></ul></ul>'
      },
      {
        'question': '関数 sigma は，正の整数を引数 max で受け取り，1から max までの整数の総和を戻り値とする。プログラム中のaに入れる字句として，適切なものはどれか。<br><br>〔プログラム〕<br><img src=\'img/r5-64.png\' width=\'400px\' height=\'auto\'>',
        'options': [
          'calcX ← calcX × n',
          'calcX ← calcX ＋ 1',
          'calcX ← calcX ＋ n',
          'calcX ← n'
        ],
        'answer': 2,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Hàm `sigma` tính <strong>tổng (<code>総和</code>)</strong> các số nguyên từ 1 đến `max`. Biểu thức nào là đúng cho vị trí (a)?</li>' +
                         '<li><strong>Code:</strong></li>' +
                         '<ul><li>`calcX` = 0 (khởi tạo biến tổng)</li>' +
                         '<li>Vòng lặp `n` từ 1 đến `max`</li>' +
                         '<li>(a) ... (thực hiện phép tính)</li>' +
                         '<li>Trả về `calcX`</li></ul></ul>' +
                         '<hr><h3><strong>Phân tích (Dry Run)</strong></h3>' +
                         '<p>Đây là bài toán tính tổng (<code>総和</code>) kinh điển (ví dụ: 1+2+3+...+max).</p>' +
                         '<p>Biến `calcX` là biến "tích lũy" (accumulator), nó được khởi tạo bằng 0.</p>' +
                         '<p>Trong mỗi vòng lặp, chúng ta cần <strong>cộng dồn (<code>＋</code>)</strong> giá trị *hiện tại* của <strong><code>n</code></strong> vào biến tổng <code>calcX</code>.</p>' +
                         '<ul><li>Lần 1 (n=1): calcX = 0 + 1 = 1</li>' +
                         '<li>Lần 2 (n=2): calcX = 1 + 2 = 3</li>' +
                         '<li>Lần 3 (n=3): calcX = 3 + 3 = 6</li>' +
                         '<li>...</li></ul>' +
                         '<p>=> Do đó, biểu thức đúng là <strong><code>calcX ← calcX ＋ n</code></strong>.</p>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>総和</code> (Tổng)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> Để tính tổng (<code>総和</code>), bạn phải cộng dồn chính con số đang chạy (<strong><code>n</code></strong>). (Nếu <code>calcX + 1</code> thì chỉ là đếm số lần lặp).</li></ul>'
      },
      {
        'question': 'Wi-Fiのセキュリティ規格であるWPA2を用いて，PCを無線LANルータと接続するときに設定するPSKの説明として，適切なものはどれか。',
        'options': [
          'アクセスポイントへの接続を認証するときに用いる符号(パスフレーズ)であり，この符号に基づいて，接続するPCごとに通信の暗号化に用いる鍵が生成される。',
          'アクセスポイントへの接続を認証するときに用いる符号(パスフレーズ)であり，この符号に基づいて，接続するPCごとにプライベートIPアドレスが割り当てられる。',
          '接続するアクセスポイントを識別するために用いる名前であり，この名前に基づいて，接続するPCごとに通信の暗号化に用いる鍵が生成される。',
          '接続するアクセスポイントを識別するために用いる名前であり，この名前に基づいて，接続するPCごとにプライベートIPアドレスが割り当てられる。'
        ],
        'answer': 0,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Mô tả nào đúng về <strong>PSK</strong> trong WPA2?</li>' +
                         '<li><strong>ア.</strong> Là một <strong>mật mã (<code>パスフレーズ</code> - passphrase)</strong> dùng để <strong>xác thực (<code>認証</code>)</strong> khi kết nối. Dựa trên mật mã này, <strong>khóa mã hóa (<code>暗号化に用いる鍵</code>)</strong> sẽ được tạo ra cho từng PC.</li>' +
                         '<li><strong>イ.</strong> Là một mật mã (<code>パスフレーズ</code>) dùng để xác thực... Dựa trên mật mã này, địa chỉ IP (<code>IPアドレス</code>) sẽ được gán.</li>' +
                         '<li><strong>ウ.</strong> Là <strong>tên (<code>名前</code>)</strong> dùng để nhận dạng điểm truy cập (AP)... Dựa trên tên này, khóa mã hóa sẽ được tạo ra.</li>' +
                         '<li><strong>エ.</strong> Là <strong>tên (<code>名前</code>)</strong> dùng để nhận dạng AP... Dựa trên tên này, địa chỉ IP sẽ được gán.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>PSK (Pre-Shared Key):</strong> Là "Khóa được chia sẻ trước", hay còn gọi là <strong>mật khẩu Wi-Fi (<code>パスフレーズ</code>)</strong>.</li>' +
                         '<li><strong>SSID:</strong> Là <strong>tên (<code>名前</code>)</strong> của mạng Wi-Fi (dùng để nhận dạng <code>識別</code> AP).</li>' +
                         '<li><strong>DHCP:</strong> Là dịch vụ cấp <strong>IP (<code>IPアドレス</code>)</strong>.</li></ul>' +
                         '<ul><li><strong>ア. ✅ Đúng.</strong> <strong>PSK</strong> là một <strong>mật mã (passphrase)</strong> dùng để <strong>xác thực (<code>認証</code>)</strong> khi kết nối. Dựa trên PSK này (và các thông số khác), một <strong>khóa mã hóa (<code>暗号化...鍵</code>)</strong> động (Temporal Key) riêng biệt cho từng phiên kết nối sẽ được tạo ra.</li>' +
                         '<li><strong>イ. ❌ Sai.</strong> PSK không liên quan đến việc cấp phát địa chỉ IP (đó là nhiệm vụ của DHCP).</li>' +
                         '<li><strong>ウ. ❌ Sai.</strong> Tên (<code>名前</code>) dùng để nhận dạng điểm truy cập là <strong>SSID</strong>, không phải PSK.</li>' +
                         '<li><strong>エ. ❌ Sai.</strong> Tên (<code>名前</code>) dùng để nhận dạng là SSID, và nó không liên quan đến việc cấp IP.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>PSK</code> (Pre-Shared Key)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> <strong>PSK</strong> = **Mật khẩu (<code>パスフレーズ</code>)**. <strong>SSID</strong> = **Tên mạng (<code>名前</code>)**.</li></ul>'
      },
      {
        'question': 'トランザクション処理におけるコミットの説明として，適切なものはどれか。',
        'options': [
          'あるトランザクションが共有データを更新しようとしたとき，そのデータに対する他のトランザクションからの更新を禁止すること',
          'トランザクションが正常に処理されたときに，データベースへの更新を確定させること',
          '何らかの理由で，トランザクションが正常に処理されなかったときに，データベースをトランザクション開始前の状態にすること',
          '複数の表を，互いに関係付ける列をキーとして，一つの表にすること'
        ],
        'answer': 1,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Mô tả nào đúng về <strong>Commit (<code>コミット</code>)</strong> trong xử lý giao dịch?</li>' +
                         '<li><strong>ア.</strong> Cấm (<code>禁止</code>) các giao dịch khác cập nhật đồng thời.</li>' +
                         '<li><strong>イ.</strong> Khi giao dịch <strong>thành công (<code>正常に処理</code>)</strong>, <strong>xác nhận (<code>確定させる</code>)</strong> việc cập nhật vào CSDL.</li>' +
                         '<li><strong>ウ.</strong> Khi giao dịch thất bại (<code>正常に処理されなかった</code>), <strong>quay về trạng thái ban đầu (<code>開始前の状態</code>)</strong>.</li>' +
                         '<li><strong>エ.</strong> Liên kết (<code>関係付ける</code>) nhiều bảng thành một.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. ❌ Sai.</strong> Cấm các giao dịch khác cập nhật đồng thời là <strong>Kiểm soát độc quyền (<code>排他制御</code> - Locking)</strong>.</li>' +
                         '<li><strong>イ. ✅ Đúng.</strong> <strong>Commit (<code>コミット</code>)</strong> là lệnh báo cho DBMS biết rằng giao dịch đã <strong>hoàn thành thành công (<code>正常に処理</code>)</strong> và yêu cầu <strong>lưu vĩnh viễn các thay đổi (<code>更新を確定させる</code>)</strong> vào cơ sở dữ liệu.</li>' +
                         '<li><strong>ウ. ❌ Sai.</strong> Hủy bỏ các thay đổi khi giao dịch thất bại và quay về trạng thái ban đầu là <strong>Rollback (<code>ロールバック</code>)</strong>.</li>' +
                         '<li><strong>エ. ❌ Sai.</strong> Kết hợp nhiều bảng thành một là <strong>Join (<code>結合</code>)</strong>.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>コミット</code> (Commit)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ (Các lệnh Transaction):</strong></li>' +
                         '<ul><li><strong>Commit:</strong> = <strong>Lưu (Save)</strong> thay đổi khi thành công (<code>正常</code>).</li>' +
                         '<li><strong>Rollback:</strong> = <strong>Hủy (Undo)</strong> thay đổi khi thất bại (<code>失敗</code>).</li>' +
                         '<li><strong><code>排他制御</code> (Locking):</strong> = <strong>Khóa</strong> (<code>禁止</code>) để tránh xung đột.</li></ul></ul>'
      },
      {
        'question': 'ネットワーク環境で利用されるIDSの役割として，適切なものはどれか。',
        'options': [
          'IPアドレスとドメイン名を相互に変換する。',
          'ネットワーク上の複数のコンピュータの時刻を同期させる。',
          'ネットワークなどに対する不正アクセスやその予兆を検知し，管理者に通知する。',
          'メールサーバに届いた電子メールを，メールクライアントに送る。'
        ],
        'answer': 2,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Vai trò của <strong>IDS</strong> trong môi trường mạng là gì?</li>' +
                         '<li><strong>ア.</strong> Chuyển đổi (<code>変換</code>) IP ↔ Tên miền.</li>' +
                         '<li><strong>イ.</strong> Đồng bộ (<code>同期</code>) thời gian (<code>時刻</code>).</li>' +
                         '<li><strong>ウ.</strong> <strong>Phát hiện (<code>検知</code>)</strong> các truy cập trái phép hoặc dấu hiệu đáng ngờ và <strong>thông báo (<code>通知</code>)</strong> cho quản trị viên.</li>' +
                         '<li><strong>エ.</strong> Gửi email (<code>電子メール</code>) đến máy khách.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. ❌ Sai.</strong> Chuyển đổi IP ↔ Tên miền là <strong>DNS (Domain Name System)</strong>.</li>' +
                         '<li><strong>イ. ❌ Sai.</strong> Đồng bộ hóa thời gian là <strong>NTP (Network Time Protocol)</strong>.</li>' +
                         '<li><strong>ウ. ✅ Đúng.</strong> <strong>IDS (Intrusion Detection System - Hệ thống phát hiện xâm nhập)</strong> có vai trò <strong>phát hiện (<code>検知</code>)</strong> các truy cập trái phép (<code>不正アクセス</code>) và <strong>thông báo (<code>通知する</code>)</strong> cho quản trị viên.</li>' +
                         '<li><strong>エ. ❌ Sai.</strong> Gửi/lấy mail từ server về máy khách là <strong>POP3</strong> hoặc <strong>IMAP</strong>.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>IDS</code> (Intrusion Detection System)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ (Phân biệt IDS và IPS):</strong></li>' +
                         '<ul><li><strong>IDS (Detection):</strong> Chỉ <strong>Phát hiện (<code>検知</code>)</strong> và Báo cáo (<code>通知</code>). (Giống như chuông báo trộm).</li>' +
                         '<li><strong>IPS (Prevention):</strong> <strong>Phòng chống (<code>防御</code>)</strong>. Sẽ tự động <strong>Ngăn chặn (<code>遮断</code>)</strong>. (Giống như cửa sập tự động).</li></ul></ul>'
      },
      {
        'question': 'インターネット上のコンピュータでは，Webや電子メールなど様々なアプリケーションプログラムが動作し，それぞれに対応したアプリケーション層の通信プロトコルが使われている。これらの通信プロトコルの下位にあり，基本的な通信機能を実現するものとして共通に使われる通信プロトコルはどれか。',
        'options': [
          'FTP',
          'POP',
          'SMTP',
          'TCP/IP'
        ],
        'answer': 3,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Giao thức nào nằm <strong>bên dưới (<code>下位にあり</code>)</strong> các giao thức tầng ứng dụng (như Web, Email) và được <strong>sử dụng chung (<code>共通に使われる</code>)</strong> để thực hiện chức năng giao tiếp cơ bản?</li>' +
                         '<li><strong>ア.</strong> FTP</li>' +
                         '<li><strong>イ.</strong> POP</li>' +
                         '<li><strong>ウ.</strong> SMTP</li>' +
                         '<li><strong>エ.</strong> TCP/IP</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn (Mô hình OSI/TCP/IP)</strong></h3>' +
                         '<ul><li><strong>ア, イ, ウ. ❌ Sai.</strong> <strong>FTP</strong> (truyền file), <strong>POP</strong> (nhận mail), <strong>SMTP</strong> (gửi mail) đều là các giao thức thuộc <strong>Tầng Ứng dụng (<code>アプリケーション層</code>)</strong>.</li>' +
                         '<li><strong>エ. ✅ Đúng.</strong> <strong>TCP/IP</strong> là bộ giao thức nền tảng, nằm ở các tầng bên dưới (Tầng Vận chuyển - Transport Layer và Tầng Mạng - Internet Layer). Tất cả các giao thức ứng dụng (HTTP, FTP, POP, SMTP...) đều phải chạy "trên nền" (tức là <code>TCP/IP</code> nằm <strong><code>下位</code></strong>) của TCP/IP.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>下位にあり</code> (Nằm bên dưới), <code>共通に使われる</code> (Được dùng chung)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> <strong>TCP/IP</strong> là "nền móng" (<code>下位</code>) của Internet. HTTP, FTP, SMTP... là các "ngôi nhà" (<code>上位</code>) được xây trên nền móng đó.</li></ul>'
      },
      {
        'question': '配列に格納されているデータを探索するときの，探索アルゴリズムに関する記述のうち，適切なものはどれか。',
        'options': [
          '2分探索法は，探索対象となる配列の先頭の要素から順に探索する。',
          '線形探索法で探索するのに必要な計算量は，探索対象となる配列の要素数に比例する。',
          '線形探索法を用いるためには，探索対象となる配列の要素は要素の値で昇順又は降順にソートされている必要がある。',
          '探索対象となる配列が同一であれば，探索に必要な計算量は探索する値によらず，2分探索法が線形探索法よりも少ない。'
        ],
        'answer': 1,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Mô tả nào là đúng về thuật toán tìm kiếm (<code>探索</code>)?</li>' +
                         '<li><strong>ア.</strong> <strong>Tìm kiếm nhị phân (<code>2分探索法</code>)</strong> là tìm tuần tự (<code>順に</code>) từ đầu.</li>' +
                         '<li><strong>イ.</strong> Độ phức tạp tính toán (<code>計算量</code>) của <strong>tìm kiếm tuyến tính (<code>線形探索法</code>)</strong> <strong>tỷ lệ thuận (<code>比例する</code>)</strong> với số lượng phần tử.</li>' +
                         '<li><strong>ウ.</strong> <strong>Tìm kiếm tuyến tính (<code>線形探索法</code>)</strong> yêu cầu mảng phải được <strong>sắp xếp (<code>ソート</code>)</strong>.</li>' +
                         '<li><strong>エ.</strong> Tìm kiếm nhị phân *luôn luôn* (<code>によらず</code>) nhanh hơn (<code>少ない</code>) tìm kiếm tuyến tính.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. ❌ Sai.</strong> Tìm kiếm tuần tự (<code>順に</code>) từ đầu là <strong>Tìm kiếm tuyến tính (<code>線形探索法</code>)</strong>. (Tìm kiếm nhị phân là tìm ở giữa, chia đôi).</li>' +
                         '<li><strong>イ. ✅ Đúng.</strong> <strong>Tìm kiếm tuyến tính (<code>線形探索法</code>)</strong>, trong trường hợp xấu nhất, phải duyệt qua tất cả <code>n</code> phần tử của mảng. Do đó, độ phức tạp tính toán (thời gian) <strong>tỷ lệ thuận (<code>比例する</code>)</strong> với số lượng phần tử <code>n</code> (Ký hiệu: O(n)).</li>' +
                         '<li><strong>ウ. ❌ Sai.</strong> Tìm kiếm tuyến tính không yêu cầu mảng phải được sắp xếp. <strong>Tìm kiếm nhị phân (<code>2分探索法</code>)</strong> mới yêu cầu mảng phải được <strong>sắp xếp (<code>ソート</code>)</strong> trước.</li>' +
                         '<li><strong>エ. ❌ Sai.</strong> Tìm kiếm nhị phân (O(log n)) *thường* nhanh hơn tuyến tính (O(n)), nhưng không phải "luôn luôn". Nếu giá trị cần tìm nằm ngay ở phần tử đầu tiên, tìm kiếm tuyến tính chỉ tốn 1 phép so sánh (nhanh nhất).</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Mẹo ghi nhớ:</strong></li>' +
                         '<ul><li><strong>Tuyến tính (<code>線形</code>):</strong> Tìm lần lượt (<code>順に</code>), <strong>Không cần sắp xếp</strong>, O(n).</li>' +
                         '<li><strong>Nhị phân (<code>2分</code>):</strong> Phải <strong>sắp xếp (<code>ソート</code>)</strong> trước, tìm bằng cách chia đôi, O(log n).</li></ul></ul>'
      },
      {
        'question': 'Webサービスなどにおいて，信頼性を高め，かつ，利用者からの多量のアクセスを処理するために，複数のコンピュータを連携させて全体として一つのコンピュータであるかのように動作させる技法はどれか。',
        'options': [
          'クラスタリング',
          'スプーリング',
          'バッファリング',
          'ミラーリング'
        ],
        'answer': 0,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Kỹ thuật nào liên kết <strong>nhiều máy tính (<code>複数のコンピュータ</code>)</strong> lại với nhau để chúng hoạt động <strong>như một máy tính duy nhất (<code>一つのコンピュータであるかのように</code>)</strong>, nhằm tăng độ tin cậy (<code>信頼性</code>) và xử lý lượng truy cập lớn (<code>多量のアクセス</code>)?</li>' +
                         '<li><strong>ア.</strong> Clustering (<code>クラスタリング</code>)</li>' +
                         '<li><strong>イ.</strong> Spooling (<code>スプーリング</code>)</li>' +
                         '<li><strong>ウ.</strong> Buffering (<code>バッファリング</code>)</li>' +
                         '<li><strong>エ.</strong> Mirroring (<code>ミラーリング</code>)</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. ✅ Đúng.</strong> <strong>Clustering (<code>クラスタリング</code>)</strong> là kỹ thuật kết nối nhiều máy chủ (nodes) lại với nhau để chúng hoạt động như một hệ thống duy nhất. Nó được dùng để tăng hiệu năng (<code>多量のアクセス</code> - Load Balancing) hoặc tăng độ tin cậy (<code>信頼性</code> - High Availability/Failover).</li>' +
                         '<li><strong>イ. ❌ Sai.</strong> Spooling (<code>スプーリング</code>) là cơ chế dùng bộ đệm cho các thiết bị chậm như máy in (ví dụ: đưa tài liệu vào hàng đợi in).</li>' +
                         '<li><strong>ウ. ❌ Sai.</strong> Buffering (<code>バッファリング</code>) là việc lưu dữ liệu tạm thời trong bộ nhớ đệm (buffer) (ví dụ: khi xem video).</li>' +
                         '<li><strong>エ. ❌ Sai.</strong> Mirroring (<code>ミラーリング</code>) là kỹ thuật của <strong>RAID 1</strong>, sao chép dữ liệu qua nhiều *ổ đĩa (disk)*, không phải *máy tính (computer)*.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>複数のコンピュータを連携</code> (Liên kết nhiều máy tính)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> Một "chùm" (<strong>Cluster</strong> - <code>クラスタ</code>) máy tính hoạt động cùng nhau. (Phân biệt với Mirroring là dành cho ổ đĩa).</li></ul>'
      },
      {
        'question': 'IoTシステムにおけるエッジコンピューティングに関する記述として，最も適切なものはどれか。',
        'options': [
          'IoTデバイスの増加によるIoTサーバの負荷を軽減するために，IoTデバイスに近いところで可能な限りのデータ処理を行う。',
          '一定時間ごとに複数の取引をまとめたデータを作成し，そのデータに直前のデータのハッシュ値を埋め込むことによって，データを相互に関連付け，改ざんすることを困難にすることによって，データの信頼性を高める。',
          'ネットワークの先にあるデータセンター上に集約されたコンピュータ資源を，ネットワークを介して遠隔地から利用する。',
          '明示的にプログラミングすることなく，入力されたデータからコンピュータが新たな知識やルールを獲得できるようにする。'
        ],
        'answer': 0,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Mô tả nào đúng nhất về <strong>Điện toán biên (<code>エッジコンピューティング</code> - Edge Computing)</strong>?</li>' +
                         '<li><strong>ア.</strong> Để <strong>giảm tải cho máy chủ (<code>サーバの負荷を軽減</code>)</strong>, tiến hành xử lý dữ liệu ở <strong>nơi gần thiết bị IoT (<code>IoTデバイスに近いところ</code>)</strong> nhất có thể.</li>' +
                         '<li><strong>イ.</strong> Tạo các khối dữ liệu, liên kết chúng bằng hash để chống sửa đổi (<code>改ざん</code>).</li>' +
                         '<li><strong>ウ.</strong> Sử dụng tài nguyên máy tính tập trung (<code>集約された</code>) ở <strong>trung tâm dữ liệu (<code>データセンター</code>)</strong> từ xa qua mạng.</li>' +
                         '<li><strong>エ.</strong> Máy tính tự học (<code>新たな知識やルールを獲得</code>) từ dữ liệu mà không cần lập trình rõ ràng.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. ✅ Đúng.</strong> <strong>Edge Computing</strong> (<code>エッジ</code> = Biên/Rìa) là mô hình xử lý dữ liệu ở "biên" của mạng, tức là <strong>gần thiết bị IoT (<code>IoTデバイスに近いところ</code>)</strong> thay vì gửi tất cả về máy chủ trung tâm (đám mây). Mục đích là để <strong>giảm tải cho máy chủ (<code>サーバの負荷を軽減</code>)</strong>, giảm độ trễ và xử lý thời gian thực.</li>' +
                         '<li><strong>イ. ❌ Sai.</strong> Mô tả việc liên kết dữ liệu bằng hash để chống sửa đổi (<code>改ざん</code>) là <strong>Blockchain (<code>ブロックチェーン</code>)</strong>.</li>' +
                         '<li><strong>ウ. ❌ Sai.</strong> Sử dụng tài nguyên tập trung tại trung tâm dữ liệu (<code>データセンター</code>) là <strong>Cloud Computing (<code>クラウドコンピューティング</code>)</strong> - đây là mô hình *đối lập* với Edge Computing.</li>' +
                         '<li><strong>エ. ❌ Sai.</strong> Máy tính tự học hỏi từ dữ liệu là <strong>Machine Learning (<code>機械学習</code> - Học máy)</strong>.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>エッジ</code> (Edge - Biên), <code>IoTデバイスに近いところ</code> (Nơi gần thiết bị IoT)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ (Edge vs Cloud):</strong></li>' +
                         '<ul><li><strong>Edge (Biên):</strong> Xử lý ở "vùng biên", gần thiết bị (<code>デバイスに近い</code>).</li>' +
                         '<li><strong>Cloud (Mây):</strong> Xử lý ở "trung tâm", xa thiết bị (<code>データセンター</code>).</li></ul></ul>'
      },
      {
        'question': '情報セキュリティのリスクマネジメントにおけるリスク対応を，リスク回避，リスク共有，リスク低減及びリスク保有の四つに分類したとき，リスク共有の説明として，適切なものはどれか。',
        'options': [
          '個人情報を取り扱わないなど，リスクを伴う活動自体を停止したり，リスク要因を根本的に排除したりすること',
          '災害に備えてデータセンターを地理的に離れた複数の場所に分散するなど，リスクの発生確率や損害を減らす対策を講じること',
          '保険への加入など，リスクを一定の合意の下に別の組織へ移転又は分散することによって，リスクが顕在化したときの損害を低減すること',
          'リスクの発生確率やリスクが発生したときの損害が小さいと考えられる場合に，リスクを認識した上で特に対策を講じず，そのリスクを受け入れること'
        ],
        'answer': 2,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Đâu là mô tả đúng về <strong>Chia sẻ rủi ro (<code>リスク共有</code> - Risk Sharing)</strong>?</li>' +
                         '<li><strong>ア.</strong> <strong>Ngừng (<code>停止</code>)</strong> hoàn toàn hoạt động rủi ro (ví dụ: không xử lý thông tin cá nhân nữa).</li>' +
                         '<li><strong>イ.</strong> <strong>Phân tán (<code>分散</code>)</strong> trung tâm dữ liệu để giảm (<code>減らす</code>) xác suất/tác động của rủi ro.</li>' +
                         '<li><strong>ウ.</strong> <strong>Chuyển giao (<code>移転</code>)</strong> rủi ro cho tổ chức khác (ví dụ: <strong>mua bảo hiểm (<code>保険への加入</code>)</strong>) để giảm thiệt hại khi rủi ro xảy ra.</li>' +
                         '<li><strong>エ.</strong> Nhận thấy rủi ro thấp nên <strong>chấp nhận (<code>受け入れる</code>)</strong> và không làm gì.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<p>Bốn cách đối phó với rủi ro:</p>' +
                         '<ul><li><strong>ア. ❌ Sai.</strong> Ngừng hoạt động (<code>停止</code>) là <strong>Tránh né rủi ro (<code>リスク回避</code> - Risk Avoidance)</strong>.</li>' +
                         '<li><strong>イ. ❌ Sai.</strong> Áp dụng các biện pháp (<code>対策</code>) (như phân tán) để giảm (<code>減らす</code>) rủi ro là <strong>Giảm thiểu rủi ro (<code>リスク低減</code> - Risk Reduction/Mitigation)</strong>.</li>' +
                         '<li><strong>ウ. ✅ Đúng.</strong> <strong>Chia sẻ rủi ro (<code>リスク共有</code>)</strong>, hay còn gọi là <strong>Chuyển giao rủi ro (<code>リスク移転</code> - Risk Transfer)</strong>, là việc chuyển gánh nặng (thường là tài chính) của rủi ro cho một bên thứ ba. <strong>Mua bảo hiểm (<code>保険</code>)</strong> là ví dụ kinh điển nhất.</li>' +
                         '<li><strong>エ. ❌ Sai.</strong> Chấp nhận rủi ro (<code>受け入れる</code>) khi nó nhỏ là <strong>Chấp nhận/Chịu đựng rủi ro (<code>リスク保有</code> - Risk Acceptance/Retention)</strong>.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>リスク共有</code> (Chia sẻ rủi ro) / <code>リスク移転</code> (Chuyển giao rủi ro)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> Chia sẻ/Chuyển giao rủi ro (<code>移転・共有</code>) = "Đẩy" gánh nặng tài chính cho bên khác. Hãy nghĩ đến <strong>Bảo hiểm (<code>保険</code>)</strong> hoặc <strong>Thuê ngoài (Outsourcing)</strong>.</li></ul>'
      },
      {
        'question': '攻撃者がコンピュータに不正侵入したとき，再侵入を容易にするためにプログラムや設定の変更を行うことがある。この手口を表す用語として，最も適切なものはどれか。',
        'options': [
          '盗聴',
          'バックドア',
          'フィッシング',
          'ポートスキャン'
        ],
        'answer': 1,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Khi kẻ tấn công xâm nhập trái phép (<code>不正侵入</code>) vào máy tính, chúng có thể thay đổi chương trình hoặc cài đặt để <strong>dễ dàng xâm nhập lại (<code>再侵入を容易にする</code>)</strong>. Thủ đoạn này gọi là gì?</li>' +
                         '<li><strong>ア.</strong> Eavesdropping (Nghe lén - <code>盗聴</code>)</li>' +
                         '<li><strong>イ.</strong> Backdoor (Cửa hậu - <code>バックドア</code>)</li>' +
                         '<li><strong>ウ.</strong> Phishing (Lừa đảo - <code>フィッシング</code>)</li>' +
                         '<li><strong>エ.</strong> Port Scan (Quét cổng - <code>ポートスキャン</code>)</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. ❌ Sai.</strong> Nghe lén (<code>盗聴</code>) là hành vi *thu thập* thông tin trên đường truyền.</li>' +
                         '<li><strong>イ. ✅ Đúng.</strong> <strong>Backdoor (<code>バックドア</code> - Cửa hậu)</strong> là một chương trình hoặc một thay đổi cấu hình được cài đặt bí mật, cho phép kẻ tấn công vượt qua các cơ chế xác thực thông thường và <strong>xâm nhập lại (<code>再侵入</code>)</strong> hệ thống một cách dễ dàng.</li>' +
                         '<li><strong>ウ. ❌ Sai.</strong> Phishing (<code>フィッシング</code>) là hành vi lừa đảo để lấy thông tin (ví dụ: mật khẩu).</li>' +
                         '<li><strong>エ. ❌ Sai.</strong> Port Scan (<code>ポートスキャン</code>) là hành vi thăm dò (scan) xem máy chủ đang mở những cổng (dịch vụ) nào.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>バックドア</code> (Backdoor), <code>再侵入</code> (Tái xâm nhập), <code>容易にする</code> (Làm cho dễ dàng)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> Để vào lại nhà dễ dàng mà không cần chìa khóa → Dùng <strong>cửa sau (Backdoor)</strong>.</li></ul>'
      },
      {
        'question': 'ニューラルネットワークに関する記述として，最も適切なものはどれか。',
        'options': [
          'PC，携帯電話，情報家電などの様々な情報機器が，社会の至る所に存在し，いつでもどこでもネットワークに接続できる環境',
          '国立情報学研究所が運用している，大学や研究機関などを結ぶ学術研究用途のネットワーク',
          '全国の自治体が，氏名，生年月日，性別，住所などの情報を居住地以外の自治体から引き出せるようにネットワーク化したシステム',
          'ディープラーニングなどで用いられる，脳神経系の仕組みをコンピュータで模したモデル'
        ],
        'answer': 3,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Mô tả nào đúng về <strong>Mạng nơ-ron (<code>ニューラルネットワーク</code>)</strong>?</li>' +
                         '<li><strong>ア.</strong> Môi trường mà các thiết bị (PC, di động, đồ gia dụng) tồn tại khắp nơi và luôn kết nối mạng.</li>' +
                         '<li><strong>イ.</strong> Mạng lưới học thuật (<code>学術研究</code>) kết nối các trường đại học, viện nghiên cứu.</li>' +
                         '<li><strong>ウ.</strong> Hệ thống mạng lưới (<code>ネットワーク化</code>) của các đô thị (<code>自治体</code>) để tra cứu thông tin công dân.</li>' +
                         '<li><strong>エ.</strong> Mô hình (<code>モデル</code>) được dùng trong Deep Learning, <strong>mô phỏng (<code>模した</code>)</strong> cấu trúc của <strong>hệ thống thần kinh não bộ (<code>脳神経系</code>)</strong>.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. ❌ Sai.</strong> Đây là mô tả về <strong>Mạng Lưới Vạn Vật (<code>ユビキタスコンピューティング</code> - Ubiquitous Computing)</strong>.</li>' +
                         '<li><strong>イ. ❌ Sai.</strong> Đây là mô tả về <strong>SINET</strong> (mạng lưới thông tin khoa học của Nhật).</li>' +
                         '<li><strong>ウ. ❌ Sai.</strong> Đây là mô tả về <strong>Hệ thống Mạng Lưới Đăng ký Cư trú (<code>住基ネット</code> - Juki Net)</strong> của Nhật.</li>' +
                         '<li><strong>エ. ✅ Đúng.</strong> <strong>Mạng nơ-ron (Neural Network)</strong> là một mô hình tính toán được sử dụng trong Deep Learning, được lấy cảm hứng và <strong>mô phỏng (<code>模した</code>)</strong> cấu trúc, cách hoạt động của <strong>hệ thống thần kinh não bộ (<code>脳神経系</code>)</strong>.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>ニューラルネットワーク</code> (Neural Network), <code>脳神経系</code> (Hệ thần kinh não)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> <strong>Neural</strong> (<code>ニューラル</code>) = Liên quan đến <strong>Nơ-ron/thần kinh (<code>神経</code>)</strong>.</li></ul>'
      },
      {
        'question': '表計算ソフトを用いて，二つの科目X，Yの点数を評価して合否を判定する。それぞれの点数はワークシートのセル A2，B2 に入力する。合格判定条件(1)又は(2)に該当するときはセル C2 に"合格"，それ以外のときは"不合格"を表示する。セル C2 に入力する式はどれか。<br><br>〔合格判定条件〕<ul><li class=\'li1\'>科目Xと科目Yの合計が120点以上である。</li><li class\'li2\'>科目X又は科目Yのうち，少なくとも一つが100点である。</li></ul><br><img src=\'img/r5-75.png\' width=\'400px\' height=\'auto\'>',
        'options': [
          'ア',
          'イ',
          'ウ',
          'エ'
        ],
        'answer': 2,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> (Bài toán Excel) Cần điền công thức vào ô C2. "Đỗ" (<code>合格</code>) nếu thỏa mãn <strong>Điều kiện (1) HOẶC (<code>又は</code>) Điều kiện (2)</strong>. Ngược lại thì "Trượt" (<code>不合格</code>).</li>' +
                         '<li><strong>(1)</strong> Tổng (<code>合計</code>) X (A2) và Y (B2) <strong>>= 120</strong>.</li>' +
                         '<li><strong>(2)</strong> <strong>Ít nhất một trong hai (<code>少なくとも一つ</code>)</strong> (X hoặc Y) là <strong>100 điểm</strong>.</li></ul>' +
                         '<hr><h3><strong>Phân tích (Logic Excel)</strong></h3>' +
                         '<p>1. <strong>Phân tích điều kiện logic:</strong></p>' +
                         '<ul><li>Phép toán chính là "HOẶC" (<code>又は</code>), do đó chúng ta phải sử dụng hàm <strong><code>OR</code> (<code>論理和</code>)</strong>. → <strong>Loại bỏ ア và イ (dùng <code>論理積</code> - AND)</strong>.</li>' +
                         '<li>Bên trong hàm <code>OR</code> có các điều kiện con:</li>' +
                         '<ul><li>Điều kiện (1): <code>(A2+B2) >= 120</code></li>' +
                         '<li>Điều kiện (2): "Ít nhất một trong hai là 100" → <code>OR(A2=100, B2=100)</code></li></ul>' +
                         '<li>Khi gộp chung vào một hàm OR lớn, ta có: <strong><code>OR( (A2+B2)>=120, A2=100, B2=100 )</code></strong>.</li></ul>' +
                         '<p>2. <strong>Phân tích hàm IF:</strong></p>' +
                         '<ul><li>Cấu trúc là: <code>IF( <điều kiện>, "Giá trị nếu ĐÚNG", "Giá trị nếu SAI" )</code>.</li>' +
                         '<li>Yêu cầu: Nếu ĐÚNG thì "<code>合格</code>", nếu SAI thì "<code>不合格</code>".</li></ul>' +
                         '<p>3. <strong>Kết hợp:</strong></p>' +
                         '<ul><li><code>IF( OR((A2+B2)≧120, A2=100, B2=100), "合格", "不合格" )</code></li>' +
                         '<li>Trong tiếng Nhật: <code>IF(論理和((A2＋B2)≧120，A2＝100，B2＝100)，"合格"，"不合格")</code></li></ul>' +
                         '<p>=> Điều này tương ứng với đáp án <strong>ウ</strong>.</p>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>又は</code> (Hoặc)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> <code>又は</code> = <strong>OR (<code>論理和</code>)</strong>. (<code>かつ</code> = <strong>AND (<code>論理積</code>)</strong>).</li></ul>'
      },
  {
        'question': '品質管理担当者が行っている検査を自動化することを考えた。10,000枚の製品画像と，それに対する品質管理担当者による不良品かどうかの判定結果を学習データとして与えることによって，製品が不良品かどうかを判定する機械学習モデルを構築した。100枚の製品画像に対してテストを行った結果は表のとおりである。品質管理担当者が不良品と判定した製品画像数に占める，機械学習モデルの判定が不良品と判定した製品画像数の割合を再現率としたとき，このテストにおける再現率は幾らか。<br><img src=\'img/r5-76.png\' width=\'400px\' height=\'auto\'>',
        'options': [
          '0.05',
          '0.25',
          '0.50',
          '0.80'
        ],
        'answer': 2,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> (Bài toán AI/Confusion Matrix) Cho bảng kết quả test. Tính <strong>Tỷ lệ tái hiện (<code>再現率</code> - Recall)</strong>?</li>' +
                         '<li><strong>Định nghĩa Recall:</strong> (Số lượng AI đoán đúng là "Lỗi") / (Tổng số lượng "Lỗi" <strong>thực tế</strong> do người phán định).</li>' +
                         '<li><strong>Bảng (Ma trận nhầm lẫn):</strong></li>' +
                         '<ul><li>Thực tế (Người) là Tốt, AI đoán Tốt (TN): 80</li>' +
                         '<li>Thực tế (Người) là Tốt, AI đoán Lỗi (FP): 15</li>' +
                         '<li>Thực tế (Người) là Lỗi, AI đoán Tốt (FN): 5</li>' +
                         '<li>Thực tế (Người) là Lỗi, AI đoán Lỗi (TP): 5</li></ul></ul>' +
                         '<hr><h3><strong>Phân tích & Tính toán</strong></h3>' +
                         '<p>Ta cần tính <strong>Tỷ lệ tái hiện (<code>再現率</code> - Recall)</strong>.</p>' +
                         '<ul><li><strong>Công thức Recall:</strong> <code>TP / (TP + FN)</code></li>' +
                         '<li>(Trong số tất cả những cái <strong>thực sự là Lỗi (<code>不良品</code>)</strong>, mô hình phát hiện (dự đoán là Lỗi) được bao nhiêu phần trăm?)</li></ul>' +
                         '<p>1. <strong>Xác định các giá trị từ bảng:</strong></p>' +
                         '<ul><li>Nhìn vào cột "Phán định của người" (<code>品質管理担当者の判定</code>) = <strong>"Lỗi" (<code>不良品</code>)</strong>.</li>' +
                         '<li>Tổng số "Lỗi" thực tế = 5 (AI đoán Tốt) + 5 (AI đoán Lỗi) = <strong>10</strong> cái.</li>' +
                         '<li>Trong 10 cái lỗi thực tế đó, số lượng AI đoán đúng là "Lỗi" (TP) = <strong>5</strong> cái.</li></ul>' +
                         '<p>2. <strong>Tính Recall:</strong></p>' +
                         '<ul><li><code>Recall = 5 / 10 = <strong>0.50</strong></code>.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>再現率</code> (Recall - Tỷ lệ tái hiện)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ (Recall vs Precision):</strong></li>' +
                         '<ul><li><strong>Recall (<code>再現率</code>):</strong> "Tìm lại được bao nhiêu?". Trong <strong>tổng số 10 cái lỗi thật</strong> (cột dọc), AI tìm lại được <strong>5 cái</strong>. → <code>5/10 = 0.5</code>.</li>' +
                         '<li><strong>Precision (<code>適合率</code>):</strong> "Tỷ lệ chính xác". Trong <strong>tổng số 20 cái AI bảo là lỗi</strong> (hàng ngang <code>不良品</code>), có <strong>5 cái</strong> đúng. → <code>5/20 = 0.25</code>.</li></ul></ul>'
      },
      {
        'question': '受験者10,000人の4教科の試験結果は表のとおりであり，いずれの教科の得点分布も正規分布に従っていたとする。ある受験者の4教科の得点が全て71点であったときこの受験者が最も高い偏差値を得た教科はどれか。<br><img src=\'img/r5-77.png\' width=\'400px\' height=\'auto\'>',
        'options': [
          '国語',
          '社会',
          '数学',
          '理科'
        ],
        'answer': 2,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Một học sinh đạt <strong>71 điểm</strong> ở cả 4 môn. Dựa vào bảng (Điểm trung bình & Độ lệch chuẩn), môn nào học sinh này đạt <strong>Điểm lệch (<code>偏差値</code> - Hensachi)</strong> cao nhất?</li>' +
                         '<li><strong>Bảng:</strong></li>' +
                         '<ul><li>Quốc ngữ: TB (<code>平均</code>) = 63, Lệch chuẩn (<code>標準偏差</code>) = 10</li>' +
                         '<li>Xã hội: TB = 73, Lệch chuẩn = 12</li>' +
                         '<li>Toán: TB = 58, Lệch chuẩn = 15</li>' +
                         '<li>Lý/Hóa: TB = 65, Lệch chuẩn = 8</li></ul></ul>' +
                         '<hr><h3><strong>Phân tích & Tính toán</strong></h3>' +
                         '<p><strong>Điểm lệch (<code>偏差値</code>)</strong> là một thang đo chuẩn hóa để so sánh điểm số giữa các môn có độ khó khác nhau. Điểm lệch càng cao khi điểm của bạn càng vượt trội so với điểm trung bình (tính theo số lần độ lệch chuẩn).</p>' +
                         '<p>Ta chỉ cần tính xem 71 điểm ở môn nào là "ấn tượng" nhất (cách xa điểm trung bình nhất, tính bằng độ lệch chuẩn).</p>' +
                         '<p><strong>Công thức tính Z-score (mức độ vượt trội):</strong> <code>(Điểm của bạn - Điểm trung bình) / Độ lệch chuẩn</code></p>' +
                         '<ul><li><strong>Quốc ngữ (<code>国語</code>):</strong> (71 - 63) / 10 = 8 / 10 = <strong>0.8</strong></li>' +
                         '<li><strong>Xã hội (<code>社会</code>):</strong> (71 - 73) / 12 = -2 / 12 = -0.16 (thấp hơn trung bình)</li>' +
                         '<li><strong>Toán (<code>数学</code>):</strong> (71 - 58) / 15 = 13 / 15 = <strong>0.867 (Cao nhất)</strong></li>' +
                         '<li><strong>Lý/Hóa (<code>理科</code>):</strong> (71 - 65) / 8 = 6 / 8 = <strong>0.75</strong></li></ul>' +
                         '<p>=> Môn <strong>Toán (<code>数学</code>)</strong> có điểm Z-score cao nhất (0.867), nghĩa là 71 điểm ở môn Toán là thành tích ấn tượng nhất so với các môn còn lại (vượt 0.867 lần độ lệch chuẩn so với trung bình).</p>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>偏差値</code> (Điểm lệch)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> Bạn giỏi nhất ở môn nào mà điểm của bạn (71) <strong>cách xa nhất</strong> so với điểm trung bình (<code>平均点</code>) của lớp (so sánh bằng cách chia cho <code>標準偏差</code>). Môn Toán (TB=58) có điểm trung bình thấp nhất, nên 71 điểm ở môn này là vượt trội nhất.</li></ul>'
      },
      {
        'question': '関係データベースの主キーの設定に関する記述として，適切なものだけを全て挙げたものはどれか。<br><ol type=\"a\"><li>値が他のレコードと重複するものは主キーとして使用できない。</li><li>インデックスとの重複設定はできない。</li><li>主キーの値は数値でなければならない。</li><li>複数のフィールドを使って主キーを構成できる。</li></ol>',
        'options': [
          'a，c',
          'a，d',
          'b，c',
          'b，d'
        ],
        'answer': 1,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Mô tả nào là đúng về việc cài đặt <strong>Khóa chính (<code>主キー</code> - Primary Key)</strong>?</li>' +
                         '<li><strong>a.</strong> Giá trị bị <strong>trùng lặp (<code>重複</code>)</strong> với hàng khác thì không thể dùng làm khóa chính.</li>' +
                         '<li><strong>b.</strong> Không thể thiết lập trùng lặp (<code>重複設定</code>) với Index.</li>' +
                         '<li><strong>c.</strong> Giá trị khóa chính <strong>phải là số (<code>数値</code>)</strong>.</li>' +
                         '<li><strong>d.</strong> Có thể dùng <strong>nhiều trường (<code>複数のフィールド</code>)</strong> để tạo thành khóa chính.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>a. ✅ Đúng.</strong> Yêu cầu cơ bản và quan trọng nhất của Khóa chính là <strong>tính duy nhất (unique - <code>一意性</code>)</strong>. Nó không được phép <strong>trùng lặp (<code>重複</code>)</strong>.</li>' +
                         '<li><strong>b. ❌ Sai.</strong> Hầu hết các hệ quản trị CSDL tự động tạo một <strong>Index (<code>インデックス</code> - chỉ mục)</strong> trên khóa chính để tăng tốc độ truy vấn.</li>' +
                         '<li><strong>c. ❌ Sai.</strong> Khóa chính có thể là số (ví dụ: Mã nhân viên) hoặc chữ/chuỗi (ví dụ: Số CMND, Email), miễn là nó là duy nhất.</li>' +
                         '<li><strong>d. ✅ Đúng.</strong> Một khóa chính có thể được tạo thành từ một trường (field) duy nhất (ví dụ: `MaNV`) hoặc kết hợp của <strong>nhiều trường (<code>複数のフィールド</code>)</strong> (ví dụ: <code>{MaDonHang, MaSanPham}</code>). Đây được gọi là <strong>Khóa chính phức hợp (<code>複合主キー</code>)</strong>.</li></ul>' +
                         '<p>=> Vậy, các mô tả đúng là a và d.</p>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>主キー</code> (Khóa chính)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> Khóa chính phải **Duy nhất (a)** (<code>重複しない</code>) và có thể được tạo từ **Nhiều trường (d)** (<code>複数のフィールド</code>).</li></ul>'
      },
      {
        'question': 'PDCAモデルに基づいてISMSを運用している組織の活動において，次のような調査報告があった。この調査はPDCAモデルのどのプロセスで実施されるか。<br><br>社外からの電子メールの受信に対しては，情報セキュリティポリシーに従ってマルウェア検知システムを導入し，維持運用されており，日々数十件のマルウェア付き電子メールの受信を検知し，破棄するという効果を上げている。しかし，社外への電子メールの送信に関するセキュリティ対策のための規定や明確な運用手順がなく，社外秘の資料を添付した電子メールの社外への誤送信などが発生するリスクがある。',
        'options': [
          'P',
          'D',
          'C',
          'A'
        ],
        'answer': 2,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Một <strong>báo cáo điều tra (<code>調査報告</code>)</strong> được đưa ra. Báo cáo này thuộc giai đoạn nào của PDCA?</li>' +
                         '<li><strong>Nội dung báo cáo:</strong> "Email đến: Hệ thống chống mã độc (đã <code>導入</code>, <code>運用</code>) đang hoạt động <strong>hiệu quả (<code>効果を上げている</code>)</strong>. Tuy nhiên, Email đi: Đang <strong>tồn tại rủi ro (<code>リスクがある</code>)</strong> do thiếu quy trình (<code>規定...手順がなく</code>)."</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn (PDCA)</strong></h3>' +
                         '<ul><li><strong>P (Plan):</strong> Lập kế hoạch (ví dụ: xây dựng chính sách, quy trình <code>規定</code>).</li>' +
                         '<li><strong>D (Do):</strong> Thực thi (ví dụ: cài đặt <code>導入</code>, vận hành <code>運用</code> hệ thống malware).</li>' +
                         '<li><strong>C (Check): ✅ Đúng.</strong> Đây là giai đoạn <strong>Kiểm tra (<code>チェック</code>), Đánh giá (<code>評価</code>), Giám sát, Kiểm toán (<code>監査</code>)</strong>. Báo cáo này đang <strong>đánh giá</strong> xem những gì đã làm (D) có <strong>hiệu quả (<code>効果</code>)</strong> không và <strong>phát hiện</strong> ra vấn đề/rủi ro (<code>リスク</code>) mới. Đây chính là bản chất của bước "Check".</li>' +
                         '<li><strong>A (Act):</strong> Hành động (ví dụ: dựa trên báo cáo này, đưa ra hành động khắc phục <code>是正処置</code> cho email gửi đi).</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>C(Check)</code>, <code>調査報告</code> (Báo cáo điều tra), <code>効果</code> (Hiệu quả), <code>リスクがある</code> (Có rủi ro)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> <strong>C</strong>heck = <strong>K</strong>iểm tra và <strong>Báo cáo (<code>報告</code>)</strong> về <strong>Hiệu quả (<code>効果</code>)</strong> và <strong>Rủi ro (<code>リスク</code>)</strong>.</li></ul>'
      },
      {
        'question': 'USBメモリなどの外部記憶媒体をPCに接続したときに，その媒体中のプログラムや動画などを自動的に実行したり再生したりするOSの機能であり，マルウェア感染の要因ともなるものはどれか。',
        'options': [
          'オートコレクト',
          'オートコンプリート',
          'オートフィルター',
          'オートラン'
        ],
        'answer': 3,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Tính năng nào của HĐH <strong>tự động chạy (<code>自動的に実行</code>)</strong> chương trình khi một thiết bị lưu trữ ngoài (như USB) được kết nối, và cũng là một nguyên nhân gây lây nhiễm mã độc?</li>' +
                         '<li><strong>ア.</strong> AutoCorrect (Tự động sửa lỗi chính tả)</li>' +
                         '<li><strong>イ.</strong> AutoComplete (Tự động hoàn thành)</li>' +
                         '<li><strong>ウ.</strong> AutoFilter (Tự động lọc trong Excel)</li>' +
                         '<li><strong>エ.</strong> AutoRun (Tự động chạy)</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. オートコレクト (AutoCorrect):</strong> ❌ Sai. Là tính năng tự động sửa lỗi chính tả (ví dụ: gõ "hte" → "the").</li>' +
                         '<li><strong>イ. オートコンプリート (AutoComplete):</strong> ❌ Sai. Là tính năng gợi ý để hoàn thành một từ bạn đang gõ (ví dụ: gõ "Thứ" tự động gợi ý "Thứ Hai").</li>' +
                         '<li><strong>ウ. オートフィルター (AutoFilter):</strong> ❌ Sai. Là tính năng lọc dữ liệu tự động trong Excel.</li>' +
                         '<li><strong>エ. オートラン (AutoRun):</strong> ✅ <strong>Đúng.</strong> <strong>AutoRun (<code>オートラン</code>)</strong> là tính năng của Windows, cho phép <strong>tự động thực thi (<code>自動的に実行</code>)</strong> một hành động (như chạy một chương trình) khi một ổ đĩa ngoài (USB, CD) được cắm vào. Kẻ tấn công thường lợi dụng tính năng này để tự động chạy mã độc (<code>マルウェア感染</code>).</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>自動的に実行</code> (Tự động chạy)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> <strong>Auto</strong> (Tự động - <code>自動</code>) + <strong>Run</strong> (Chạy - <code>実行</code>) → <strong>AutoRun (<code>オートラン</code>)</strong>.</li></ul>'
      },
      {
        'question': 'HDDを廃棄するときに，HDDからの情報漏えい防止策として，適切なものだけを全て挙げたものはどれか。<br><ol type=\"a\"><li>データ消去用ソフトウェアを利用し，ランダムなデータをHDDの全ての領域に複数回書き込む。</li><li>ドリルやメディアシュレッダーなどを用いてHDDを物理的に破壊する。</li><li>ファイルを消去した後，HDDの論理フォーマットを行う。</li></ol>',
        'options': [
          'a，b',
          'a，b，c',
          'a，c',
          'b，c'
        ],
        'answer': 0,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Đâu là tất cả các biện pháp <strong>an toàn</strong> để chống rò rỉ thông tin (<code>情報漏えい防止</code>) khi <strong>vứt bỏ (<code>廃棄</code>)</strong> HDD?</li>' +
                         '<li><strong>a.</strong> Dùng phần mềm chuyên dụng để <strong>ghi đè (<code>書き込む</code>)</strong> dữ liệu ngẫu nhiên nhiều lần lên toàn bộ ổ đĩa.</li>' +
                         '<li><strong>b.</strong> Dùng khoan, máy hủy... để <strong>phá hủy vật lý (<code>物理的に破壊</code>)</strong>.</li>' +
                         '<li><strong>c.</strong> Xóa file (<code>消去</code>), sau đó <strong>format logic (<code>論理フォーマット</code>)</strong>.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>a. ✅ An toàn.</strong> Sử dụng phần mềm chuyên dụng để <strong>ghi đè (<code>上書き</code>)</strong> dữ liệu ngẫu nhiên nhiều lần (Data Wipe) lên toàn bộ ổ đĩa là một phương pháp xóa an toàn (xóa về mặt logic), khiến dữ liệu cũ không thể khôi phục.</li>' +
                         '<li><strong>b. ✅ An toàn.</strong> Dùng khoan hoặc máy hủy (shredder) để <strong>phá hủy vật lý (<code>物理的に破壊</code>)</strong> là phương pháp an toàn và triệt để nhất.</li>' +
                         '<li><strong>c. ❌ Không an toàn.</strong> Xóa file (Delete) hoặc Format nhanh (<code>論理フォーマット</code>) chỉ xóa đi "bảng mục lục" (con trỏ) trỏ đến dữ liệu. Dữ liệu thực tế vẫn còn nguyên trên ổ đĩa và có thể <strong>dễ dàng bị khôi phục (<code>復元可能</code>)</strong>.</li></ul>' +
                         '<p>=> Vậy, các biện pháp an toàn là a và b.</p>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>廃棄</code> (Vứt bỏ), <code>情報漏えい防止</code> (Chống rò rỉ thông tin)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> Chỉ "Xóa" (<code>削除</code>) hoặc "Format logic" (<code>論理フォーマット</code>) là <strong>KHÔNG ĐỦ</strong>, có thể khôi phục được. Phải <strong>Ghi đè (<code>上書き</code>) (a)</strong> hoặc <strong>Phá hủy vật lý (<code>物理的破壊</code>) (b)</strong>.</li></ul>'
      },
      {
        'question': 'OSS(Open Source Software)に関する記述a～cのうち，適切なものだけを全て挙げたものはどれか。<br><ol type=\"a\"><li>ソースコードに手を加えて再配布することができる。</li><li>ソースコードの入手は無償だが，有償の保守サポートを受けなければならない。</li><li>著作権が放棄されており，無断で利用することができる。</li></ol>',
        'options': [
          'a',
          'a，c',
          'b',
          'c'
        ],
        'answer': 0,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Đâu là tất cả các mô tả đúng về <strong>OSS (Phần mềm mã nguồn mở)</strong>?</li>' +
                         '<li><strong>a.</strong> Có thể sửa đổi mã nguồn và <strong>phân phối lại (<code>再配布</code>)</strong>.</li>' +
                         '<li><strong>b.</strong> Nhận mã nguồn miễn phí, nhưng <strong>bắt buộc (<code>なければならない</code>)</strong> phải nhận hỗ trợ trả phí (<code>有償の保守サポート</code>).</li>' +
                         '<li><strong>c.</strong> Là phần mềm đã <strong>từ bỏ (<code>放棄</code>) bản quyền (<code>著作権</code>)</strong>.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>a. ✅ Đúng.</strong> Đây là một trong những quyền tự do cốt lõi của OSS (theo định nghĩa của OSI): quyền được sửa đổi mã nguồn và <strong>phân phối lại (<code>再配布</code>)</strong> phiên bản đã sửa đổi (miễn là tuân thủ giấy phép đi kèm).</li>' +
                         '<li><strong>b. ❌ Sai.</strong> Mã nguồn thường là miễn phí (vẫn có OSS trả phí), nhưng việc sử dụng dịch vụ hỗ trợ (<code>保守サポート</code>) là <strong>tùy chọn (<code>任意</code>)</strong>, không bắt buộc.</li>' +
                         '<li><strong>c. ❌ Sai.</strong> Đây là hiểu lầm phổ biến. OSS <strong>không</strong> từ bỏ bản quyền (<code>著作権が放棄</code>). Nó vẫn có bản quyền, nhưng được phát hành dưới một giấy phép "mở" cho phép người khác sử dụng. Phần mềm đã từ bỏ hoàn toàn bản quyền được gọi là <strong>Public Domain (<code>パブリックドメイン</code>)</strong>.</li></ul>' +
                         '<p>=> Vậy, chỉ có (a) là đúng.</p>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>OSS</code> (Mã nguồn mở)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> OSS = "Tự do" (Free as in Freedom) nhưng "không vô chủ". Vẫn có <strong>Bản quyền (<code>著作権</code>)</strong> và các quy tắc (giấy phép) đi kèm. (Phân biệt với <strong>Public Domain</strong> = Vô chủ / <code>著作権放棄</code>).</li></ul>'
      },
      {
        'question': 'スマートフォンなどで，相互に同じアプリケーションを用いて，インターネットを介した音声通話を行うときに利用される技術はどれか。',
        'options': [
          'MVNO',
          'NFC',
          'NTP',
          'VoIP'
        ],
        'answer': 3,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Công nghệ nào được sử dụng khi thực hiện <strong>cuộc gọi thoại (<code>音声通話</code>)</strong> qua <strong>Internet (<code>インターネットを介した</code>)</strong> bằng các ứng dụng (như Zalo, Messenger) trên smartphone?</li>' +
                         '<li><strong>ア.</strong> MVNO</li>' +
                         '<li><strong>イ.</strong> NFC</li>' +
                         '<li><strong>ウ.</strong> NTP</li>' +
                         '<li><strong>エ.</strong> VoIP</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. MVNO (Mobile Virtual Network Operator):</strong> ❌ Sai. Là "Nhà khai thác mạng di động ảo" (ví dụ: các nhà mạng "ảo" thuê sóng của nhà mạng chính).</li>' +
                         '<li><strong>イ. NFC (Near Field Communication):</strong> ❌ Sai. Là "Giao tiếp tầm gần", dùng để thanh toán, quẹt thẻ tàu.</li>' +
                         '<li><strong>ウ. NTP (Network Time Protocol):</strong> ❌ Sai. Là "Giao thức đồng bộ thời gian", dùng để đồng bộ đồng hồ.</li>' +
                         '<li><strong>エ. VoIP (Voice over IP):</strong> ✅ <strong>Đúng.</strong> Đây là công nghệ truyền tải <strong>Giọng nói (<code>音声</code> - Voice)</strong> qua giao thức <strong>Internet (IP)</strong>. Đây là công nghệ nền tảng của tất cả các ứng dụng gọi điện qua mạng (Zalo, Messenger, Skype...).</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>音声通話</code> (Gọi thoại), <code>インターネットを介した</code> (Qua Internet)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> <strong>V</strong>oice (<code>音声</code>) <strong>o</strong>ver <strong>I</strong>nternet <strong>P</strong>rotocol → <strong>VoIP</strong>.</li></ul>'
      },
      {
        'question': 'メッセージダイジェストを利用した送信者のデジタル署名が付与された電子メールに関する記述のうち，適切なものはどれか。',
        'options': [
          'デジタル署名を受信者が検証することによって，不正なメールサーバから送信された電子メールであるかどうかを判別できる。',
          'デジタル署名を送信側メールサーバのサーバ証明書で受信者が検証することによって，送信者のなりすましを検知できる。',
          'デジタル署名を付与すると，同時に電子メール本文の暗号化も行われるので，電子メールの内容の漏えいを防ぐことができる。',
          '電子メール本文の改ざんの防止はできないが，デジタル署名をすることによって，受信者は改ざんが行われたことを検知することはできる。'
        ],
        'answer': 3,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Mô tả nào là đúng về <strong>Chữ ký số (<code>デジタル署名</code>)</strong> (sử dụng Message Digest) trong email?</li>' +
                         '<li><strong>ア.</strong> Xác minh chữ ký số giúp phát hiện email có phải từ <strong>mail server giả mạo (<code>不正なメールサーバ</code>)</strong> hay không.</li>' +
                         '<li><strong>イ.</strong> Xác minh chữ ký số bằng <strong>chứng chỉ của server (<code>サーバ証明書</code>)</strong> để phát hiện mạo danh người gửi.</li>' +
                         '<li><strong>ウ.</strong> Ký số đồng thời cũng <strong>mã hóa (<code>暗号化</code>)</strong> nội dung email, nên chống rò rỉ.</li>' +
                         '<li><strong>エ.</strong> Không thể *ngăn chặn* (<code>防止</code>) việc <strong>sửa đổi (<code>改ざん</code>)</strong>, nhưng có thể giúp người nhận *phát hiện* (<code>検知</code>) được là email đã bị sửa đổi.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn (Chữ ký số)</strong></h3>' +
                         '<p>Chữ ký số (<code>デジタル署名</code>) đảm bảo 2 điều:</p>' +
                         '<ol><li><strong>Xác thực (<code>認証</code>):</strong> Khẳng định <strong>người gửi (<code>送信者</code>)</strong> là ai (chống mạo danh <code>なりすまし</code>).</li>' +
                         '<li><strong>Tính toàn vẹn (<code>完全性</code>):</strong> Đảm bảo nội dung <strong>không bị sửa đổi (<code>改ざん</code>)</strong> trên đường truyền.</li></ol>' +
                         '<p>Nó <strong>KHÔNG</strong> đảm bảo <strong>Tính bảo mật (<code>機密性</code>)</strong> (tức là không <code>暗号化</code> - mã hóa nội dung).</p>' +
                         '<ul><li><strong>ア. ❌ Sai.</strong> Chữ ký số xác thực <strong>"người gửi" (<code>送信者</code>)</strong> (ví dụ: <code>a@gmail.com</code>), không phải "máy chủ gửi" (<code>メールサーバ</code>).</li>' +
                         '<li><strong>イ. ❌ Sai.</strong> Chữ ký số được xác thực bằng <strong>khóa công khai (<code>公開鍵</code>) của người gửi (<code>送信者</code>)</strong> (có trong chứng chỉ số của người gửi), không phải của máy chủ email.</li>' +
                         '<li><strong>ウ. ❌ Sai.</strong> Ký số (Signature) và Mã hóa (Encryption - <code>暗号化</code>) là hai thao tác riêng biệt. Ký số *không* tự động mã hóa nội dung, nội dung vẫn ở dạng clear text.</li>' +
                         '<li><strong>エ. ✅ Đúng.</strong> Chữ ký số không thể *ngăn chặn* (<code>防止</code>) (prevent) việc email bị sửa đổi (<code>改ざん</code>) trên đường truyền (vẫn có thể bị chặn và sửa). Tuy nhiên, nếu email đã bị sửa đổi, thì Message Digest (hash) sẽ thay đổi, chữ ký số sẽ không còn hợp lệ, và người nhận có thể <strong>phát hiện (<code>検知</code> - detect)</strong> được điều đó.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>デジタル署名</code> (Chữ ký số)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ (2 chức năng của Chữ ký số):</strong></li>' +
                         '<ul><li>1. <strong>Xác thực người gửi (<code>送信者の認証</code>)</strong> (Biết ai là người gửi).</li>' +
                         '<li>2. <strong>Phát hiện sửa đổi (<code>改ざんの検知</code>)</strong> (Biết nội dung có bị sửa không).</li></ul>' +
                         '<li>(Nó <strong>KHÔNG</strong> mã hóa/giữ bí mật nội dung).</li></ul>'
      },
      {
        'question': 'IoT機器におけるソフトウェアの改ざん対策にも用いられ，OSやファームウェアなどの起動時に，それらのデジタル署名を検証し，正当であるとみなされた場合にだけそのソフトウェアを実行する技術はどれか。',
        'options': [
          'GPU',
          'RAID',
          'セキュアブート',
          'リブート'
        ],
        'answer': 2,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Công nghệ nào được dùng để chống giả mạo (<code>改ざん対策</code>) phần mềm trên thiết bị IoT, hoạt động bằng cách <strong>xác minh chữ ký số (<code>デジタル署名を検証</code>)</strong> của HĐH hoặc firmware <strong>khi khởi động (<code>起動時</code>)</strong>, và chỉ thực thi nếu hợp lệ?</li>' +
                         '<li><strong>ア.</strong> GPU</li>' +
                         '<li><strong>イ.</strong> RAID</li>' +
                         '<li><strong>ウ.</strong> Secure Boot (Khởi động an toàn)</li>' +
                         '<li><strong>エ.</strong> Reboot (Khởi động lại)</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. GPU (Graphics Processing Unit):</strong> ❌ Sai. Là "Bộ xử lý đồ họa".</li>' +
                         '<li><strong>イ. RAID (Redundant Arrays of Inexpensive Disks):</strong> ❌ Sai. Là "Hệ thống ổ đĩa dự phòng".</li>' +
                         '<li><strong>ウ. セキュアブート (Secure Boot):</strong> ✅ <strong>Đúng.</strong> Đây là một tính năng bảo mật (thường có trong UEFI), đảm bảo rằng thiết bị chỉ <strong>Khởi động (<code>起動</code> - Boot)</strong> bằng phần mềm (OS, firmware) đã được <strong>An toàn (<code>セキュア</code> - Secure)</strong>, tức là đã được tin cậy và <strong>xác minh chữ ký số (<code>デジタル署名を検証</code>)</strong>.</li>' +
                         '<li><strong>エ. リブート (Reboot):</strong> ❌ Sai. Là hành động khởi động lại.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>セキュアブート</code> (Secure Boot)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> <strong>Boot</strong> (Khởi động - <code>起動</code>) + <strong>Secure</strong> (An toàn - <code>署名を検証</code>) → <strong>Secure Boot</strong>.</li></ul>'
      },
      {
        'question': 'ハイブリッド暗号方式を用いてメッセージを送信したい。メッセージと復号用の鍵の暗号化手順を表した図において，メッセージの暗号化に使用する鍵を(1)とし，(1)の暗号化に使用する鍵を(2)としたとき，図のa，bに入れる字句の適切な組合せはどれか。<br><img src=\'img/r5-86.png\' width=\'500px\' height=\'auto\'><br><img src=\'img/r5-86a.png\' width=\'300px\' height=\'auto\'>',
        'options': [
          'ア',
          'イ',
          'ウ',
          'エ'
        ],
        'answer': 0,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> (Sơ đồ Mã hóa Hybrid) Gửi tin nhắn. (1) là khóa dùng để mã hóa tin nhắn. (2) là khóa dùng để mã hóa Khóa (1). Hãy điền (a) và (b) vào sơ đồ.</li>' +
                         '<li>(a) = Khóa (1)</li>' +
                         '<li>(b) = Khóa (2)</li></ul>' +
                         '<hr><h3><strong>Phân tích (Mã hóa Hybrid)</strong></h3>' +
                         '<p>Mã hóa Hybrid (Kết hợp) hoạt động như sau để đảm bảo tốc độ và an toàn:</p>' +
                         '<ol><li><strong>(1) Mã hóa Thông điệp (<code>メッセージ</code>):</strong> Dùng <strong>Khóa chung (<code>共通鍵</code>)</strong> (còn gọi là khóa phiên - session key) để mã hóa thông điệp. Mã hóa khóa chung <strong>nhanh (<code>速い</code>)</strong>, phù hợp với dữ liệu lớn. → <strong>(1) là <code>共通鍵</code> (Khóa chung)</strong>.</li>' +
                         '<li><strong>(2) Mã hóa Khóa chung:</strong> Dùng <strong>Khóa công khai của người nhận (<code>受信者の公開鍵</code>)</strong> để mã hóa cái Khóa chung (1) (vốn nhỏ). Mã hóa khóa công khai <strong>chậm (<code>遅い</code>)</strong> nhưng <strong>an toàn (<code>安全</code>)</strong> cho việc trao đổi khóa. → <strong>(2) là <code>受信者の公開鍵</code> (Khóa công khai của người nhận)</strong>.</li></ol>' +
                         '<p>Người nhận sẽ dùng Khóa bí mật (<code>秘密鍵</code>) của mình để giải mã (2), lấy được Khóa chung (1), sau đó dùng Khóa chung (1) để giải mã thông điệp.</p>' +
                         '<p>Trong sơ đồ:</p>' +
                         '<ul><li><strong>(a)</strong> là Khóa (1) dùng để mã hóa <code>メッセージ</code> → **(a) = <code>共通鍵</code> (Khóa chung)**.</li>' +
                         '<li><strong>(b)</strong> là Khóa (2) dùng để mã hóa Khóa (1) → **(b) = <code>受信者の公開鍵</code> (Khóa công khai của người nhận)**.</li></ul>' +
                         '<p>=> Tổ hợp đúng là a = <code>共通鍵</code>, b = <code>受信者の公開鍵</code>. Điều này tương ứng với đáp án <strong>ア</strong>.</p>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>ハイブリッド暗号</code> (Mã hóa Hybrid)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> Hybrid = "Nhanh" + "An toàn".</li>' +
                         '<ul><li>Dùng khóa <strong>Chung (<code>共通鍵</code>)</strong> (Nhanh) để mã hóa <strong>Nội dung (<code>メッセージ</code>)</strong>.</li>' +
                         '<li>Dùng khóa <strong>Công khai (<code>公開鍵</code>)</strong> (An toàn) để mã hóa cái <strong>Khóa chung</strong> đó.</li></ul></ul>'
      },
      {
        'question': 'IoTエリアネットワークでも用いられ，電気を供給する電力線に高周波の通信用信号を乗せて伝送させることによって，電力線を伝送路としても使用する技術はどれか。',
        'options': [
          'PLC',
          'PoE',
          'エネルギーハーベスティング',
          'テザリング'
        ],
        'answer': 0,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Công nghệ nào sử dụng <strong>đường dây điện (<code>電力線</code>)</strong> làm <strong>đường truyền (<code>伝送路</code>)</strong> bằng cách truyền tín hiệu viễn thông (<code>通信用信号</code>) tần số cao trên đó?</li>' +
                         '<li><strong>ア.</strong> PLC</li>' +
                         '<li><strong>イ.</strong> PoE</li>' +
                         '<li><strong>ウ.</strong> Energy Harvesting</li>' +
                         '<li><strong>エ.</strong> Tethering</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. ✅ Đúng.</strong> <strong>PLC (Power Line Communication)</strong> là công nghệ Giao tiếp (<code>Communication</code>) qua <strong>Đường dây điện (<code>Power Line</code> - <code>電力線</code>)</strong>.</li>' +
                         '<li><strong>イ. ❌ Sai.</strong> <strong>PoE (Power over Ethernet)</strong> là công nghệ <strong>cấp nguồn (<code>Power</code>)</strong> qua <strong>cáp mạng Ethernet</strong>. (Gần như ngược lại với PLC).</li>' +
                         '<li><strong>ウ. ❌ Sai.</strong> Energy Harvesting (<code>エネルギーハーベスティング</code>) là công nghệ thu thập năng lượng từ môi trường (ánh sáng, nhiệt).</li>' +
                         '<li><strong>エ. ❌ Sai.</strong> Tethering (<code>テザリング</code>) là chia sẻ kết nối internet (ví dụ: phát 4G) từ điện thoại.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>電力線</code> (Đường dây điện), <code>伝送路</code> (Đường truyền)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> <strong>P</strong>ower <strong>L</strong>ine (<code>電力線</code>) <strong>C</strong>ommunication → <strong>PLC</strong>.</li></ul>'
      },
      {
        'question': '読出し専用のDVDはどれか。',
        'options': [
          'DVD-R',
          'DVD-RAM',
          'DVD-ROM',
          'DVD-RW'
        ],
        'answer': 2,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Loại DVD nào là <strong>"Chỉ đọc" (<code>読出し専用</code>)</strong>?</li>' +
                         '<li><strong>ア.</strong> DVD-R</li>' +
                         '<li><strong>イ.</strong> DVD-RAM</li>' +
                         '<li><strong>ウ.</strong> DVD-ROM</li>' +
                         '<li><strong>エ.</strong> DVD-RW</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. DVD-R (Recordable):</strong> ❌ Sai. (<code>R</code> = Ghi). Có thể <strong>ghi một lần</strong>.</li>' +
                         '<li><strong>イ. DVD-RAM (Random Access Memory):</strong> ❌ Sai. (<code>RAM</code>). Có thể ghi/xóa nhiều lần (như ổ cứng).</li>' +
                         '<li><strong>ウ. DVD-ROM (Read-Only Memory):</strong> ✅ <strong>Đúng.</strong> (<code>ROM</code> = Bộ nhớ chỉ đọc). Đây là loại đĩa được dập khuôn sẵn từ nhà máy (ví dụ: đĩa phim, đĩa game gốc) và người dùng <strong>chỉ có thể đọc (<code>読出し専用</code>)</strong>, không thể ghi đè.</li>' +
                         '<li><strong>エ. DVD-RW (ReWritable):</strong> ❌ Sai. (<code>RW</code> = Ghi lại). Có thể <strong>ghi/xóa nhiều lần</strong>.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>読出し専用</code> (Chỉ đọc)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> <strong>R</strong>ead-<strong>O</strong>nly <strong>M</strong>emory → <strong>ROM</strong>.</li></ul>'
      },
      {
        'question': '企業の従業員になりすましてIDやパスワードを聞き出したり，くずかごから機密情報を入手したりするなど，技術的手法を用いない攻撃はどれか。',
        'options': [
          'ゼロデイ攻撃',
          'ソーシャルエンジニアリング',
          'ソーシャルメディア',
          'トロイの木馬'
        ],
        'answer': 1,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Cuộc tấn công <strong>không sử dụng phương pháp kỹ thuật (<code>技術的手法を用いない</code>)</strong>, mà dựa vào việc <strong>mạo danh (<code>なりすまして</code>)</strong> nhân viên để hỏi mật khẩu hoặc <strong>lục thùng rác (<code>くずかごから</code>)</strong>, được gọi là gì?</li>' +
                         '<li><strong>ア.</strong> Tấn công Zero-day</li>' +
                         '<li><strong>イ.</strong> Social Engineering (Tấn công phi kỹ thuật)</li>' +
                         '<li><strong>ウ.</strong> Social Media (Mạng xã hội)</li>' +
                         '<li><strong>エ.</strong> Trojan Horse (Ngựa thành Troy)</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. ゼロデイ攻撃 (Zero-day):</strong> ❌ Sai. Đây là tấn công *kỹ thuật* khai thác lỗ hổng chưa có bản vá.</li>' +
                         '<li><strong>イ. ソーシャルエンジニアリング (Social Engineering):</strong> ✅ <strong>Đúng.</strong> "Social" (<code>ソーシャル</code>) ở đây có nghĩa là "xã hội/con người". Đây là nghệ thuật lừa đảo, thao túng tâm lý <strong>con người</strong> (ví dụ: <strong>mạo danh (<code>なりすまして</code>)</strong>, <strong>lục thùng rác (<code>くずかご</code>)</strong>) để lấy thông tin, thay vì tấn công vào máy móc (<code>技術的手法を用いない</code>).</li>' +
                         '<li><strong>ウ. ソーシャルメディア (Social Media):</strong> ❌ Sai. Là "Mạng xã hội" (Facebook, X...).</li>' +
                         '<li><strong>エ. トロイの木馬 (Trojan Horse):</strong> ❌ Sai. Là một loại phần mềm độc hại (tấn công *kỹ thuật*).</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>ソーシャルエンジニアリング</code> (Social Engineering)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> Tấn công <strong>phi kỹ thuật (<code>技術的手法を用いない</code>)</strong>, tấn công vào <strong>con người (<code>人</code>)</strong> (lừa đảo, mạo danh <code>なりすまし</code>) → <strong>Social Engineering</strong>.</li></ul>'
      },
      {
        'question': '情報セキュリティにおける物理的及び環境的セキュリティ管理策であるクリアデスクを職場で実施する例として，適切なものはどれか。',
        'options': [
          '従業員に固定された机がなく，空いている机で業務を行う。',
          '情報を記録した書類などを机の上に放置したまま離席しない。',
          '机の上のLANケーブルを撤去して，暗号化された無線LANを使用する。',
          '離席時は，PCをパスワードロックする。'
        ],
        'answer': 1,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Đâu là ví dụ đúng về việc thực hiện <strong>"Bàn làm việc sạch" (<code>クリアデスク</code> - Clear Desk)</strong>?</li>' +
                         '<li><strong>ア.</strong> Nhân viên không có bàn cố định, ngồi bàn trống (<code>空いている机</code>).</li>' +
                         '<li><strong>イ.</strong> <strong>Không để tài liệu (<code>書類</code>)</strong> trên bàn (<code>机の上</code>) khi <strong>rời khỏi chỗ (<code>離席</code>)</strong>.</li>' +
                         '<li><strong>ウ.</strong> Bỏ cáp LAN, dùng Wifi (<code>無線LAN</code>) mã hóa.</li>' +
                         '<li><strong>エ.</strong> <strong>Khóa PC (<code>PCを...ロック</code>)</strong> bằng mật khẩu khi rời khỏi chỗ.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<p>Clear Desk và Clear Screen là 2 chính sách an ninh vật lý:</p>' +
                         '<ul><li><strong>ア. ❌ Sai.</strong> Không có bàn cố định là mô hình "Hot Desking" hay <strong>Free Address (<code>フリーアドレス</code>)</strong>.</li>' +
                         '<li><strong>イ. ✅ Đúng.</strong> <strong>Clear Desk (<code>クリアデスク</code>)</strong> (Bàn sạch) là chính sách yêu cầu nhân viên phải dọn dẹp và cất giữ các <strong>tài liệu giấy (<code>書類</code>)</strong>, USB, ... vào tủ khóa khi rời khỏi bàn làm việc (<code>離席</code>), đặc biệt là khi hết giờ làm.</li>' +
                         '<li><strong>ウ. ❌ Sai.</strong> Đây là một biện pháp an ninh mạng (Network Security).</li>' +
                         '<li><strong>エ. ❌ Sai.</strong> <strong>Khóa PC (<code>PCを...ロック</code>)</strong> khi rời khỏi chỗ (ví dụ: đi vệ sinh) là một chính sách quan trọng khác, nhưng nó được gọi là <strong>"Màn hình sạch" (<code>クリアスクリーン</code> - Clear Screen)</strong>, không phải Clear Desk.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>クリアデスク</code> (Clear Desk)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ (Phân biệt):</strong></li>' +
                         '<ul><li><strong>Clear Desk (Bàn):</strong> Cất <strong>Giấy tờ (<code>書類</code>)</strong>.</li>' +
                         '<li><strong>Clear Screen (Màn hình):</strong> Khóa <strong>PC (<code>PCをロック</code>)</strong>.</li></ul></ul>'
      },
      {
        'question': 'AIに利用されるニューラルネットワークにおける活性化関数に関する記述として適切なものはどれか。',
        'options': [
          'ニューラルネットワークから得られた結果を基に計算し，結果の信頼度を出力する。',
          '入力層と出力層のニューロンの数を基に計算し，中間層に必要なニューロンの数を出力する。',
          'ニューロンの接続構成を基に計算し，最適なニューロンの数を出力する。',
          '一つのニューロンにおいて，入力された値を基に計算し，次のニューロンに渡す値を出力する。'
        ],
        'answer': 3,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Mô tả nào đúng về <strong>Hàm kích hoạt (<code>活性化関数</code> - Activation Function)</strong> trong mạng nơ-ron?</li>' +
                         '<li><strong>ア.</strong> Dựa trên kết quả cuối cùng, tính toán và xuất ra độ tin cậy.</li>' +
                         '<li><strong>イ.</strong> Dựa trên số nơ-ron lớp vào/ra, tính toán số nơ-ron lớp ẩn.</li>' +
                         '<li><strong>ウ.</strong> Dựa trên cấu trúc kết nối, tính toán số nơ-ron tối ưu.</li>' +
                         '<li><strong>エ.</strong> Tại <strong>một nơ-ron (<code>一つのニューロン</code>)</strong>, tính toán dựa trên giá trị đầu vào và <strong>xuất ra giá trị (<code>値を出力</code>)</strong> để <strong>truyền cho nơ-ron tiếp theo (<code>次のニューロンに渡す</code>)</strong>.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア, イ, ウ. ❌ Sai.</strong> Đây là các mô tả không chính xác về các khái niệm khác trong AI (ví dụ: hàm softmax, thiết kế kiến trúc mạng...).</li>' +
                         '<li><strong>エ. ✅ Đúng.</strong> <strong>Hàm kích hoạt (<code>活性化関数</code>)</strong> là một hàm được áp dụng tại **một nơ-ron (<code>一つのニューロン</code>)**. Nó nhận tổng giá trị đầu vào (weighted sum) từ các nơ-ron trước đó và <strong>tính toán (<code>計算し</code>)</strong> để quyết định <strong>giá trị đầu ra (<code>値を出力</code>)</strong> sẽ được "kích hoạt" và <strong>truyền đến lớp nơ-ron tiếp theo (<code>次のニューロンに渡す</code>)</strong>. (Ví dụ: hàm ReLU, Sigmoid).</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>活性化関数</code> (Hàm kích hoạt)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> Hàm kích hoạt quyết định xem một <strong>nơ-ron (<code>ニューロン</code>)</strong> có nên được "kích hoạt" (<code>活性化</code>) hay không, và nó sẽ "nói" gì (<code>値を出力</code>) với nơ-ron tiếp theo.</li></ul>'
      },
      {
        'question': '電子メールに関する記述のうち，適切なものはどれか。',
        'options': [
          '電子メールのプロトコルには，受信にSMTP，送信にPOP3が使われる。',
          'メーリングリストによる電子メールを受信すると，その宛先には全ての登録メンバーのメールアドレスが記述されている。',
          'メールアドレスの\"＠\"の左側部分に記述されているドメイン名に基づいて，電子メールが転送される。',
          'メール転送サービスを利用すると，自分名義の複数のメールアドレス宛に届いた電子メールを一つのメールボックスに保存することができる。'
        ],
        'answer': 3,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Mô tả nào là đúng về Email?</li>' +
                         '<li><strong>ア.</strong> Giao thức email: <strong>Nhận (<code>受信</code>) dùng SMTP</strong>, <strong>Gửi (<code>送信</code>) dùng POP3</strong>.</li>' +
                         '<li><strong>イ.</strong> Khi nhận mail từ mailing list, trường "To" (<code>宛先</code>) hiển thị địa chỉ của tất cả (<code>全て</code>) thành viên.</li>' +
                         '<li><strong>ウ.</strong> Email được chuyển (<code>転送</code>) dựa trên <strong>phần bên trái (<code>左側</code>) dấu @</strong> (Tên miền).</li>' +
                         '<li><strong>エ.</strong> Dùng <strong>dịch vụ chuyển tiếp (<code>メール転送サービス</code>)</strong>, có thể gom email từ <strong>nhiều địa chỉ (<code>複数のメールアドレス</code>)</strong> về <strong>một hộp thư (<code>一つのメールボックス</code>)</strong>.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. ❌ Sai.</strong> Ngược hoàn toàn: <strong>Gửi (<code>送信</code>) dùng SMTP</strong> (<strong>S</strong>end <strong>M</strong>ail...), <strong>Nhận (<code>受信</code>) dùng POP3</strong> (<strong>P</strong>ost <strong>O</strong>ffice...) hoặc IMAP.</li>' +
                         '<li><strong>イ. ❌ Sai.</strong> Khi nhận mail từ mailing list (ví dụ: <code>group@company.com</code>), trường "To" (<code>宛先</code>) thường chỉ hiển thị địa chỉ của chính mailing list đó, không phải tất cả thành viên (để bảo mật).</li>' +
                         '<li><strong>ウ. ❌ Sai.</strong> Email được chuyển tiếp (routing) dựa trên <strong>phần bên phải (<code>右側</code>) dấu @</strong> (<code>ドメイン名</code> - Tên miền), không phải phần bên trái (<code>ユーザ名</code> - Tên người dùng).</li>' +
                         '<li><strong>エ. ✅ Đúng.</strong> <strong>Dịch vụ chuyển tiếp (<code>メール転送サービス</code>)</strong> là một tính năng cho phép tự động "forward" (<code>転送</code>) email từ nhiều địa chỉ khác nhau (ví dụ: A@gmail.com, B@yahoo.com) về <strong>một hộp thư (<code>一つのメールボックス</code>)</strong> duy nhất để tiện quản lý.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Mẹo ghi nhớ (Các giao thức Mail):</strong></li>' +
                         '<ul><li><strong>S</strong>MTP = <strong>S</strong>end (<strong>Gửi - <code>送信</code></strong>).</li>' +
                         '<li><strong>P</strong>OP3 = <strong>P</strong>ull / <strong>P</strong>ost Office (<strong>Nhận - <code>受信</code></strong>).</li></ul>' +
                         '<li><strong>Mẹo ghi nhớ (Địa chỉ Mail):</strong> <code>[Tên người dùng]@[Tên miền]</code>. Mail được gửi đến "Tòa nhà" (<code>Tên miền</code>) trước.</li></ul>'
      },
      {
        'question': 'フールプルーフの考え方を適用した例として，適切なものはどれか。',
        'options': [
          'HDDをRAIDで構成する。',
          'システムに障害が発生しても，最低限の機能を維持して処理を継続する。',
          'システムを二重化して障害に備える。',
          '利用者がファイルの削除操作をしたときに，"削除してよいか"の確認メッセージを表示する。'
        ],
        'answer': 3,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Đâu là ví dụ về <strong>Fool-proof (<code>フールプルーフ</code>)</strong>?</li>' +
                         '<li><strong>ア.</strong> Cấu hình HDD bằng RAID.</li>' +
                         '<li><strong>イ.</strong> Khi có lỗi, duy trì chức năng tối thiểu (<code>最低限の機能</code>).</li>' +
                         '<li><strong>ウ.</strong> Nhân đôi (<code>二重化</code>) hệ thống để phòng lỗi.</li>' +
                         '<li><strong>エ.</strong> Khi người dùng xóa file, hiển thị <strong>thông báo xác nhận (<code>確認メッセージ</code>)</strong> "Bạn có chắc muốn xóa?".</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<p>Phân biệt các khái niệm an toàn:</p>' +
                         '<ul><li><strong>Fool-proof (<code>フールプルーフ</code>):</strong> (Chống lỗi do ngốc nghếch). Là thiết kế nhằm <strong>ngăn chặn (<code>防止</code>) người dùng (<code>利用者</code>) thực hiện các thao tác sai lầm</strong> ngay từ đầu.</li>' +
                         '<li><strong>Fault Tolerance (<code>フォールトトレラント</code>):</strong> (Khả năng chịu lỗi). Hệ thống vẫn <strong>tiếp tục hoạt động (<code>継続</code>) bình thường</strong> ngay cả khi có một phần bị lỗi. (Ví dụ: RAID, Nhân đôi <code>二重化</code>).</li>' +
                         '<li><strong>Fail-soft (<code>フェールソフト</code>):</strong> (Hỏng hóc an toàn). Khi có lỗi, hệ thống <strong>duy trì chức năng tối thiểu (<code>最低限の機能</code>)</strong>, không sập hoàn toàn.</li></ul>' +
                         '<ul><li><strong>ア, ウ. ❌ Sai.</strong> RAID và Nhân đôi (<code>二重化</code>) là <strong>Fault Tolerance</strong>.</li>' +
                         '<li><strong>イ. ❌ Sai.</strong> Duy trì chức năng tối thiểu (<code>最低限の機能</code>) là <strong>Fail-soft</strong>.</li>' +
                         '<li><strong>エ. ✅ Đúng.</strong> Việc hiển thị một <strong>thông báo xác nhận ("Bạn có chắc muốn xóa?")</strong> khi người dùng thực hiện một thao tác nguy hiểm (như xóa file) là một ví dụ kinh điển của <strong>Fool-proof</strong>, giúp ngăn người dùng (fool) vô tình gây ra lỗi.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>フールプルーフ</code> (Fool-proof)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> <strong>Fool-proof</strong> = Chống (người dùng) ngốc → <strong>Hỏi lại/Xác nhận (<code>確認メッセージ</code>)</strong> trước khi thực hiện thao tác nguy hiểm.</li></ul>'
      },
  {
        'question': 'ISMSにおける情報セキュリティ方針に関する記述として，適切なものはどれか。',
        'options': [
          '企業が導入するセキュリティ製品を対象として作成され，セキュリティの設定値を定めたもの',
          '個人情報を取り扱う部門を対象として，個人情報取扱い手順を規定したもの',
          '自社と取引先企業との間で授受する情報資産の範囲と具体的な保護方法について，両社間で合意したもの',
          '情報セキュリティに対する組織の意図を示し，方向付けしたもの'
        ],
        'answer': 3,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Mô tả nào đúng về <strong>Chính sách An ninh Thông tin (<code>情報セキュリティ方針</code>)</strong> trong ISMS?</li>' +
                         '<li><strong>ア.</strong> Là tài liệu định nghĩa các giá trị cài đặt (<code>設定値</code>) bảo mật, nhắm vào các sản phẩm (<code>製品</code>).</li>' +
                         '<li><strong>イ.</strong> Là tài liệu quy định quy trình (<code>手順</code>) xử lý thông tin cá nhân (<code>個人情報</code>).</li>' +
                         '<li><strong>ウ.</strong> Là tài liệu thỏa thuận (<code>合意</code>) giữa công ty và đối tác (<code>取引先</code>) về cách bảo vệ thông tin.</li>' +
                         '<li><strong>エ.</strong> Là tài liệu thể hiện <strong>ý định (<code>意図</code>)</strong> và <strong>định hướng (<code>方向付け</code>)</strong> của tổ chức đối với an ninh thông tin.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. ❌ Sai.</strong> Đây là "Tiêu chuẩn (<code>基準</code>)" hoặc "Hướng dẫn (<code>手順書</code>)" về cài đặt bảo mật, là cấp thấp hơn Chính sách.</li>' +
                         '<li><strong>イ. ❌ Sai.</strong> Đây là "Quy trình (<code>手順</code>)" xử lý thông tin cá nhân.</li>' +
                         '<li><strong>ウ. ❌ Sai.</strong> Đây là một "Thỏa thuận" (ví dụ: <code>NDA</code>) với đối tác, không phải chính sách nội bộ.</li>' +
                         '<li><strong>エ. ✅ Đúng.</strong> <strong>Chính sách (<code>方針</code> - Policy)</strong> là một tài liệu cấp cao nhất, được lãnh đạo cao nhất (<code>トップマネジメント</code>) phê duyệt, thể hiện <strong>ý định (<code>意図</code>)</strong> và <strong>định hướng (<code>方向付け</code>)</strong> chung của toàn bộ tổ chức đối với an ninh thông tin.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>方針</code> (Chính sách - Policy)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> <strong>Chính sách (<code>方針</code>)</strong> = Văn bản <strong>định hướng (<code>方向付け</code>)</strong>, thể hiện <strong>ý chí (<code>意図</code>)</strong> của lãnh đạo. Nó là cấp cao nhất, "nói" về TẠI SAO và MỤC TIÊU, trước khi các "Tiêu chuẩn" (<code>基準</code>) và "Quy trình" (<code>手順</code>) nói về CÁI GÌ và LÀM NHƯ THẾ NÀO.</li></ul>'
      },
      {
        'question': '情報セキュリティにおける機密性，完全性及び可用性に関する記述のうち，完全性が<u>確保されなかった</u>例だけを全て挙げたものはどれか。<br><ol type=\"a\"><li>オペレーターが誤ったデータを入力し，顧客名簿に矛盾が生じた。</li><li>ショッピングサイトがシステム障害で一時的に利用できなかった。</li><li>データベースで管理していた顧客の個人情報が漏えいした。</li></ol>',
        'options': [
          'a',
          'a，b',
          'b',
          'c'
        ],
        'answer': 0,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Đâu là tất cả các sự kiện mà <strong>Tính toàn vẹn (<code>完全性</code>)</strong> bị vi phạm (<code>確保されなかった</code>)?</li>' +
                         '<li><strong>a.</strong> Nhân viên nhập <strong>dữ liệu sai (<code>誤ったデータ</code>)</strong>, khiến danh bạ khách hàng bị mâu thuẫn (<code>矛盾</code>).</li>' +
                         '<li><strong>b.</strong> Trang web bị lỗi hệ thống, <strong>không thể sử dụng (<code>利用できなかった</code>)</strong> tạm thời.</li>' +
                         '<li><strong>c.</strong> Thông tin cá nhân của khách hàng bị <strong>rò rỉ (<code>漏えい</code>)</strong>.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn (CIA Triad)</strong></h3>' +
                         '<p>Phân biệt 3 yếu tố của an ninh thông tin (CIA):</p>' +
                         '<ul><li><strong><code>機密性</code> (Confidentiality - Bảo mật):</strong> Ngăn chặn xem trộm trái phép.</li>' +
                         '<li><strong><code>完全性</code> (Integrity - Toàn vẹn):</strong> Đảm bảo dữ liệu chính xác, không bị sửa đổi trái phép.</li>' +
                         '<li><strong><code>可用性</code> (Availability - Sẵn sàng):</strong> Đảm bảo hệ thống luôn sẵn sàng khi cần sử dụng.</li></ul>' +
                         '<p>Xét các trường hợp:</p>' +
                         '<ul><li><strong>a. ✅ Tính toàn vẹn (<code>完全性</code>) bị ảnh hưởng.</strong> Dữ liệu bị <strong>sai (<code>誤ったデータ</code>)</strong> hoặc mâu thuẫn (<code>矛盾</code>) có nghĩa là tính chính xác, toàn vẹn của dữ liệu đã bị vi phạm.</li>' +
                         '<li><strong>b. ❌ Tính sẵn sàng (<code>可用性</code>) bị ảnh hưởng.</strong> Hệ thống <strong>không thể sử dụng (<code>利用できなかった</code>)</strong> là vi phạm tính sẵn sàng.</li>' +
                         '<li><strong>c. ❌ Tính bảo mật (<code>機密性</code>) bị ảnh hưởng.</strong> Thông tin bị <strong>rò rỉ (<code>漏えい</code>)</strong> cho người không có thẩm quyền là vi phạm tính bảo mật.</li></ul>' +
                         '<p>=> Vậy, chỉ có (a) là sự kiện làm suy giảm tính toàn vẹn.</p>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>完全性</code> (Tính toàn vẹn - Integrity)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ (CIA Triad):</strong></li>' +
                         '<ul><li><strong><code>機密性</code> (Bảo mật)</strong> = Bị <strong>nhìn trộm</strong> (<code>漏えい</code> - rò rỉ).</li>' +
                         '<li><strong><code>完全性</code> (Toàn vẹn)</strong> = Bị <strong>sửa đổi</strong> (<code>改ざん</code>) hoặc bị <strong>sai (<code>誤った</code>)</strong>.</li>' +
                         '<li><strong><code>可用性</code> (Sẵn sàng)</strong> = Bị <strong>sập</strong>, <strong>dừng</strong>, <strong>dùng không được</strong> (<code>利用できなかった</code>).</li></ul></ul>'
      },
      {
        'question': 'CPUのクロック周波数や通信速度などを表すときに用いられる国際単位系(SI)接頭語に関する記述のうち，適切なものはどれか。',
        'options': [
          'Gの10の6乗倍は，Tである。',
          'Mの10の3乗倍は，Gである。',
          'Mの10の6乗倍は，Gである。',
          'Tの10の3乗倍は，Gである。'
        ],
        'answer': 1,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Mô tả nào là đúng về các tiền tố SI (đơn vị đo lường)?</li>' +
                         '<li><strong>ア.</strong> G (Giga) × 10<sup>6</sup> (Triệu) = T (Tera).</li>' +
                         '<li><strong>イ.</strong> M (Mega) × 10<sup>3</sup> (Nghìn) = G (Giga).</li>' +
                         '<li><strong>ウ.</strong> M (Mega) × 10<sup>6</sup> (Triệu) = G (Giga).</li>' +
                         '<li><strong>エ.</strong> T (Tera) × 10<sup>3</sup> (Nghìn) = G (Giga).</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<p>Thứ tự các tiền tố SI (theo hệ 1000) (<code>k</code>, <code>M</code>, <code>G</code>, <code>T</code>):</p>' +
                         '<ul><li><strong>M (Mega)</strong> = 10<sup>6</sup> (Triệu)</li>' +
                         '<li><strong>G (Giga)</strong> = 10<sup>9</sup> (Tỷ)</li>' +
                         '<li><strong>T (Tera)</strong> = 10<sup>12</sup> (Nghìn tỷ)</li></ul>' +
                         '<p>Xét các lựa chọn:</p>' +
                         '<ul><li><strong>ア. ❌ Sai.</strong> G (10<sup>9</sup>) × 10<sup>6</sup> = 10<sup>15</sup> (là Peta), không phải T (10<sup>12</sup>). (Đúng phải là: G × 10<sup>3</sup> = T).</li>' +
                         '<li><strong>イ. ✅ Đúng.</strong> <strong>M (10<sup>6</sup>) × 10<sup>3</sup> = 10<sup>9</sup></strong>, chính là <strong>G (Giga)</strong>.</li>' +
                         '<li><strong>ウ. ❌ Sai.</strong> M (10<sup>6</sup>) × 10<sup>6</sup> = 10<sup>12</sup> (là Tera), không phải Giga.</li>' +
                         '<li><strong>エ. ❌ Sai.</strong> T (Tera) lớn hơn G (Giga).</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Mẹo ghi nhớ:</strong> Hãy nhớ thứ tự <strong>Kilo → Mega (M) → Giga (G) → Tera (T)</strong>. Mỗi bước nhảy là <strong>1000 lần (10<sup>3</sup>)</strong>.</li>' +
                         '<li>Vậy <strong>M</strong> × 1000 = <strong>G</strong>. <strong>G</strong> × 1000 = <strong>T</strong>.</li></ul>'
      },
      {
        'question': 'サブネットマスクの役割として，適切なものはどれか。',
        'options': [
          'IPアドレスから，利用しているLAN上のMACアドレスを導き出す。',
          'IPアドレスの先頭から何ビットをネットワークアドレスに使用するかを定義する。',
          'コンピュータをLANに接続するだけで，TCP/IPの設定情報を自動的に取得する。',
          '通信相手のドメイン名とIPアドレスを対応付ける。'
        ],
        'answer': 1,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Vai trò của <strong>Subnet Mask (<code>サブネットマスク</code>)</strong> là gì?</li>' +
                         '<li><strong>ア.</strong> Lấy địa chỉ MAC (<code>MACアドレス</code>) từ địa chỉ IP.</li>' +
                         '<li><strong>イ.</strong> <strong>Định nghĩa (<code>定義する</code>)</strong> xem <strong>bao nhiêu bit đầu (<code>先頭から何ビット</code>)</strong> của địa chỉ IP được dùng cho <strong>địa chỉ mạng (<code>ネットワークアドレス</code>)</strong>.</li>' +
                         '<li><strong>ウ.</strong> Tự động lấy (<code>自動的に取得</code>) cấu hình TCP/IP khi cắm vào LAN.</li>' +
                         '<li><strong>エ.</strong> Ánh xạ (<code>対応付ける</code>) Tên miền (<code>ドメイン名</code>) ↔ Địa chỉ IP.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. ❌ Sai.</strong> Lấy địa chỉ MAC từ IP là vai trò của <strong>ARP (Address Resolution Protocol)</strong>.</li>' +
                         '<li><strong>イ. ✅ Đúng.</strong> <strong>Subnet Mask</strong> (ví dụ: 255.255.255.0) là một "mặt nạ" (Mask) dùng để <strong>định nghĩa (<code>定義する</code>)</strong> xem trong một địa chỉ IP (ví dụ: 192.168.1.10), <strong>phần nào là "Mạng" (<code>ネットワークアドレス</code>)</strong> (ví dụ: 192.168.1) và phần nào là "Máy chủ" (Host) (ví dụ: .10).</li>' +
                         '<li><strong>ウ. ❌ Sai.</strong> Tự động lấy cấu hình TCP/IP (IP, Subnet Mask, Gateway...) là vai trò của <strong>DHCP (Dynamic Host Configuration Protocol)</strong>.</li>' +
                         '<li><strong>エ. ❌ Sai.</strong> Ánh xạ Tên miền ↔ IP là vai trò của <strong>DNS (Domain Name System)</strong>.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>サブネットマスク</code> (Subnet Mask)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> Subnet Mask = Mặt nạ để **phân chia (<code>定義</code>)** đâu là phần <strong>Mạng (<code>ネットワークアドレス</code>)</strong>, đâu là phần Máy.</li></ul>'
      },
      {
        'question': 'IoT機器であるスマートメーターに関する記述として，適切なものはどれか。',
        'options': [
          'カーナビゲーションシステムやゲームコントローラーに内蔵されて，速度がどれだけ変化したかを計測する。',
          '住宅などに設置され，電気やガスなどの使用量を自動的に計測し，携帯電話回線などを利用して供給事業者にそのデータを送信する。',
          'スマートフォンやモバイルPCなどのモバイル情報端末に保存しているデータを，ネットワークを介して遠隔地から消去する。',
          '歩数を数えるとともに，GPS機能などによって，歩行経路を把握したり，歩行速度や道のアップダウンを検知して消費エネルギーを計算したりする。'
        ],
        'answer': 1,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Mô tả nào đúng về <strong>Smart Meter (<code>スマートメーター</code> - Đồng hồ thông minh)</strong>?</li>' +
                         '<li><strong>ア.</strong> Cảm biến (<code>センサー</code>) đo lường thay đổi tốc độ (<code>速度</code>) trong xe hơi hoặc tay cầm chơi game.</li>' +
                         '<li><strong>イ.</strong> Được lắp ở nhà dân, <strong>tự động đo lường (<code>自動的に計測</code>)</strong> lượng sử dụng <strong>điện, gas... (<code>電気やガス</code>)</strong> và tự động <strong>gửi dữ liệu (<code>データを送信</code>)</strong> về cho nhà cung cấp.</li>' +
                         '<li><strong>ウ.</strong> Xóa (<code>消去</code>) dữ liệu từ xa trên thiết bị di động.</li>' +
                         '<li><strong>エ.</strong> Đếm bước chân (<code>歩数</code>) và tính toán calo tiêu thụ.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. ❌ Sai.</strong> Cảm biến đo lường thay đổi tốc độ (gia tốc) là <strong>Gia tốc kế (<code>加速度センサー</code> - Accelerometer)</strong>.</li>' +
                         '<li><strong>イ. ✅ Đúng.</strong> <strong>Smart Meter</strong> là thế hệ đồng hồ (<code>メーター</code>) mới (thông minh <code>スマート</code>), được lắp đặt tại nhà dân (<code>住宅</code>) để <strong>tự động đo (<code>自動的に計測</code>)</strong> lượng sử dụng các tiện ích như <strong>điện, gas (<code>電気やガス</code>)</strong> và tự động <strong>gửi dữ liệu (<code>データを送信</code>)</strong> về cho nhà cung cấp qua mạng (ví dụ: 3G/4G, PLC).</li>' +
                         '<li><strong>ウ. ❌ Sai.</strong> Xóa dữ liệu từ xa (Remote Wipe) là một tính năng của <strong>MDM (Mobile Device Management - <code>モバイル端末管理</code>)</strong>.</li>' +
                         '<li><strong>エ. ❌ Sai.</strong> Đếm bước chân và tính toán calo là chức năng của <strong>thiết bị đeo theo dõi sức khỏe (<code>活動量計</code> - Fitness Tracker)</strong>.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>スマートメーター</code> (Smart Meter)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ:</strong> <strong>Meter = Đồng hồ đo</strong>. Smart Meter = <strong>Đồng hồ (điện, nước, gas) thông minh</strong>.</li></ul>'
      },
      {
        'question': 'バイオメトリクス認証の例として，適切なものはどれか。',
        'options': [
          '機械では判読が困難な文字列の画像をモニターに表示して人に判読させ，その文字列を入力させることによって認証する。',
          'タッチパネルに表示されたソフトウェアキーボードから入力されたパスワード文字列によって認証する。',
          'タッチペンなどを用いて署名する際の筆跡や筆圧など，動作の特徴を読み取ることによって認証する。',
          '秘密の質問として，本人しか知り得ない質問に答えさせることによって認証する。'
        ],
        'answer': 2,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Đâu là ví dụ về <strong>Xác thực sinh trắc học (<code>バイオメトリクス認証</code>)</strong>?</li>' +
                         '<li><strong>ア.</strong> Hiển thị chuỗi ký tự bị làm méo (<code>歪んだ文字</code>) và yêu cầu người dùng nhập lại.</li>' +
                         '<li><strong>イ.</strong> Xác thực bằng mật khẩu (<code>パスワード</code>) được nhập từ bàn phím ảo.</li>' +
                         '<li><strong>ウ.</strong> Xác thực bằng cách đọc các <strong>đặc điểm hành vi (<code>動作の特徴</code>)</strong> như <strong>nét chữ (<code>筆跡</code>), lực nhấn bút (<code>筆圧</code>)</strong> khi ký tên.</li>' +
                         '<li><strong>エ.</strong> Xác thực bằng cách trả lời <strong>câu hỏi bí mật (<code>秘密の質問</code>)</strong>.</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<p>Xác thực sinh trắc học (Biometrics) là xác thực dựa trên đặc điểm "Cái <strong>Là</strong> bạn" (<code>生体情報</code> - sinh học hoặc <code>行動情報</code> - hành vi).</p>' +
                         '<ul><li><strong>ア. ❌ Sai.</strong> Đây là <strong>CAPTCHA</strong>, dùng để phân biệt người (<code>人間</code>) và máy (<code>ボット</code>), không phải để xác thực *danh tính* một cá nhân.</li>' +
                         '<li><strong>イ. ❌ Sai.</strong> Đây là xác thực bằng <strong>Kiến thức (<code>知識情報</code> - Cái bạn biết)</strong> - Mật khẩu (<code>パスワード</code>).</li>' +
                         '<li><strong>ウ. ✅ Đúng.</strong> Xác thực dựa trên <strong>đặc điểm hành vi (<code>動作の特徴</code>)</strong> như <strong>chữ ký tay (<code>筆跡</code>, <code>筆圧</code>)</strong> là một dạng của <strong>xác thực sinh trắc học (<code>バイオメトリクス認証</code>)</strong> (cụ thể là Sinh trắc học hành vi).</li>' +
                         '<li><strong>エ. ❌ Sai.</strong> Đây là xác thực bằng <strong>Kiến thức (<code>知識情報</code> - Cái bạn biết)</strong> - Câu hỏi bí mật (<code>秘密の質問</code>).</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>バイオメトリクス</code> (Biometrics - Sinh trắc học)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ (2 loại Biometrics):</strong></li>' +
                         '<ul><li><strong>Sinh trắc cơ thể (<code>身体的</code>):</strong> Vân tay (<code>指紋</code>), Khuôn mặt (<code>顔</code>), Tĩnh mạch (<code>静脈</code>).</li>' +
                         '<li><strong>Sinh trắc hành vi (<code>行動的</code>):</strong> Chữ ký (<code>筆跡</code>, <code>筆圧</code>), Giọng nói (<code>声紋</code>), Nhịp gõ phím (<code>打鍵</code>).</li></ul></ul>'
      },
      {
        'question': '関係データベースにおける結合操作はどれか。',
        'options': [
          '表から，特定の条件を満たすレコードを抜き出した表を作る。',
          '表から，特定のフィールドを抜き出した表を作る。',
          '二つの表から，同じ値をもつレコードを抜き出した表を作る。',
          '二つの表から，フィールドの値によって関連付けした表を作る。'
        ],
        'answer': 3,
        'explanation': '<h3><strong>Bản dịch</strong></h3>' +
                         '<ul><li><strong>Câu hỏi:</strong> Thao tác <strong>Join (<code>結合操作</code> - Kết hợp)</strong> trong CSDL quan hệ là gì?</li>' +
                         '<li><strong>ア.</strong> <strong>Lọc các hàng (<code>レコード</code>)</strong> (record) dựa trên điều kiện (<code>条件</code>).</li>' +
                         '<li><strong>イ.</strong> <strong>Lọc các cột (<code>フィールド</code>)</strong> (field).</li>' +
                         '<li><strong>ウ.</strong> Lọc các hàng có giá trị giống nhau (<code>同じ値</code>) từ hai bảng.</li>' +
                         '<li><strong>エ.</strong> Tạo ra một bảng bằng cách <strong>liên kết (<code>関連付け</code>)</strong> <strong>hai bảng (<code>二つの表</code>)</strong> dựa trên giá trị của các cột (<code>フィールド</code>).</li></ul>' +
                         '<hr><h3><strong>Phân tích TẤT CẢ lựa chọn</strong></h3>' +
                         '<ul><li><strong>ア. ❌ Sai.</strong> Lọc các hàng (record) dựa trên điều kiện là <strong>Selection (<code>選択</code>)</strong> (thực hiện bằng <code>WHERE</code>).</li>' +
                         '<li><strong>イ. ❌ Sai.</strong> Lọc các cột (field) là <strong>Projection (<code>射影</code>)</strong> (thực hiện bằng <code>SELECT [cột1], [cột2]...</code>).</li>' +
                         '<li><strong>ウ. ❌ Sai.</strong> Lọc các hàng có giá trị giống nhau (ví dụ: tìm phần giao <code>INTERSECT</code>) không phải là định nghĩa đầy đủ của Join.</li>' +
                         '<li><strong>エ. ✅ Đúng.</strong> <strong>Join (<code>結合</code>)</strong> là thao tác <strong>liên kết (<code>関連付け</code>)</strong> <strong>hai (hoặc nhiều) bảng (<code>二つの表</code>)</strong> lại với nhau (ví dụ: bảng Học sinh và bảng Lớp học) dựa trên một cột chung (ví dụ: <code>MaLop</code>) để tạo ra một bảng kết quả mới.</li></ul>' +
                         '<hr><h3><strong>💡 Keyword & Mẹo ghi nhớ</strong></h3>' +
                         '<ul><li><strong>Keyword chính:</strong> <strong><code>結合操作</code> (Thao tác Join/Kết hợp)</strong>.</li>' +
                         '<li><strong>Mẹo ghi nhớ (3 thao tác cơ bản):</strong></li>' +
                         '<ul><li><strong><code>選択</code> (Select):</strong> Lọc <strong>Hàng</strong> (<code>レコード</code>) (dùng <code>WHERE</code>).</li>' +
                         '<li><strong><code>射影</code> (Project):</strong> Lọc <strong>Cột</strong> (<code>フィールド</code>) (dùng <code>SELECT [cột]</code>).</li>' +
                         '<li><strong><code>結合</code> (Join):</strong> <strong>Liên kết (<code>関連付け</code>)</strong> nhiều <strong>Bảng (<code>表</code>)</strong>.</li></ul></ul>'
      }
    ]
  },
 };

 // ======================================================
// PHẦN 1: BIẾN TOÀN CỤC & CẤU HÌNH (GLOBAL VARIABLES)
// ======================================================
const SAVE_KEY = 'it_passport_save_v2';

// Biến điều khiển luồng
let selectedYear = null;
let currentCategory = null;
let currentQuestions = [];
let shuffledOrder = [];
let shufflePos = 0;
let answeredMap = {};
let totalAnswered = 0;
let totalCorrect = 0;
let isMockMode = false; // false: Luyện tập, true: Thi thử
let currentQuestionData = null; 
let gameHistory = []; // [MỚI] Lưu lịch sử 5 câu hỏi để review cuối game

// Biến Timer
let examTimerInterval;
let gameTimerInterval;

// Biến Game
let currentGameScore = 0;
let currentGameQuestionCount = 0;
const MAX_QUESTIONS_PER_ROUND = 5;
let memoryCards = [];
let flippedCards = [];
let matchedPairs = 0;
const MEMORY_PAIRS = 6;

// Dữ liệu người chơi mặc định
const defaultStats = {
    level: 1,
    exp: 0,
    title: "初学者 (Beginner)",
    unlockedLevels: [1],
    badges: 0
};
let playerStats = {};

// ======================================================
// PHẦN 2: HỆ THỐNG CỐT LÕI (LOAD/SAVE/LEVEL)
// ======================================================

function loadData() {
    const jsonString = localStorage.getItem(SAVE_KEY);
    if (jsonString) {
        playerStats = { ...defaultStats, ...JSON.parse(jsonString) };
    } else {
        playerStats = JSON.parse(JSON.stringify(defaultStats));
    }
    updateDashboardUI();
}

function saveData() {
    localStorage.setItem(SAVE_KEY, JSON.stringify(playerStats));
}

function updateDashboardUI() {
    const elLevel = document.getElementById('user-level');
    const elExp = document.getElementById('user-exp');
    const elTitle = document.getElementById('user-title');
    const elBar = document.getElementById('exp-bar-fill');

    if (elLevel) elLevel.innerText = playerStats.level;
    if (elExp) elExp.innerText = playerStats.exp;
    if (elTitle) elTitle.innerText = playerStats.title;

    let progressPercent = 0;
    // Logic thanh kinh nghiệm đơn giản
    if (playerStats.level === 1) progressPercent = (playerStats.exp / 400) * 100;
    else if (playerStats.level === 2) progressPercent = ((playerStats.exp - 400) / 400) * 100;
    else progressPercent = 100;

    if (elBar) elBar.style.width = Math.min(progressPercent, 100) + "%";
}

function addExp(amount) {
    playerStats.exp += amount;
    let leveledUp = false;

    // Level 1 -> 2 (400 EXP)
    if (playerStats.level === 1 && playerStats.exp >= 400) {
        playerStats.level = 2;
        playerStats.title = "正社員 (Junior)";
        leveledUp = true;
    }
    // Level 2 -> 3 (800 EXP)
    else if (playerStats.level === 2 && playerStats.exp >= 800) {
        playerStats.level = 3;
        playerStats.title = "プロジェクトマネージャ (PM)";
        leveledUp = true;
    }

    if (leveledUp) {
        alert(`🎉 レベルアップ！現在のランク: ${playerStats.title}`);
    }
    saveData();
    updateDashboardUI();
}

// ======================================================
// PHẦN 3: ĐIỀU HƯỚNG & CHUYỂN TAB (SỬA LỖI GIAO DIỆN)
// ======================================================

function switchMainTab(tabName) {
    // 1. Dừng tất cả Timer đang chạy
    if (typeof examTimerInterval !== 'undefined') clearInterval(examTimerInterval);
    if (typeof gameTimerInterval !== 'undefined') clearInterval(gameTimerInterval);

    // 2. Reset Active Class trên Sidebar
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));

    // 3. Ẩn tất cả các VIEW lớn
    const viewStudy = document.getElementById('view-study');
    const viewMiniGame = document.getElementById('view-minigame');
    if (viewStudy) viewStudy.style.display = 'none';
    if (viewMiniGame) viewMiniGame.style.display = 'none';

    // 4. Ẩn tất cả các thành phần con trong view-study (để tránh chồng chéo)
    const elementsToHide = ['main-menu', 'category-selection', 'question-box', 'mock-intro-screen', 'exam-info-bar'];
    elementsToHide.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'none';
    });

    // 5. Xử lý logic từng Tab
    if (tabName === 'study') {
        // === TAB 1: LUYỆN TẬP ===
        const navBtn = document.querySelectorAll('.nav-item')[0];
        if (navBtn) navBtn.classList.add('active');

        if (viewStudy) viewStudy.style.display = 'block';
        
        // Hiện lại menu chọn năm
        document.getElementById('main-menu').style.display = 'block';
        
        // Cập nhật tiêu đề và breadcrumb
        const studyTitle = document.getElementById('study-title');
        if(studyTitle) studyTitle.innerText = '📚 過去問トレーニング';
        
        document.getElementById('breadcrumb-nav').style.display = 'flex';
        
        isMockMode = false;
        selectedYear = null;
        currentCategory = null;
        
        // Khôi phục HTML chuẩn cho Question Box (đề phòng vừa chơi game xong)
        restoreQuizStructure();
        updateBreadcrumbs();

    } else if (tabName === 'mock') {
        // === TAB 2: THI THỬ ===
        const navBtn = document.querySelectorAll('.nav-item')[1];
        if (navBtn) navBtn.classList.add('active');

        if (viewStudy) viewStudy.style.display = 'block'; // Thi thử dùng chung khung với Study
        
        // Hiện màn hình Intro thi thử
        document.getElementById('mock-intro-screen').style.display = 'block';
        
        const studyTitle = document.getElementById('study-title');
        if(studyTitle) studyTitle.innerText = '🏆 実戦模試';

        // Ẩn breadcrumb ở màn hình chờ
        document.getElementById('breadcrumb-nav').style.display = 'none';
        
        isMockMode = true;
        restoreQuizStructure();

    } else if (tabName === 'minigame') {
        // === TAB 3: MINI GAME ===
        const navBtn = document.querySelectorAll('.nav-item')[2];
        if (navBtn) navBtn.classList.add('active');

        if (viewMiniGame) viewMiniGame.style.display = 'block';
        isMockMode = false;
    }
}

// Hàm khôi phục cấu trúc HTML của khung câu hỏi (Fix lỗi sau khi chơi Game)
function restoreQuizStructure() {
    const box = document.getElementById('question-box');
    if (!box) return;

    box.className = "question-box"; // Reset class
    box.style.display = "none";     // Mặc định ẩn

    // HTML chuẩn của phần thi/học
    box.innerHTML = `
        <div id="exam-info-bar" style="display:none; justify-content: space-between; align-items: center; margin-bottom: 15px; background: #fff3cd; padding: 15px; border-radius: 8px; border: 1px solid #ffeeba; color: #856404;">
            <span><strong>🏆 実戦模試</strong></span>
            <div id="exam-timer" style="font-family: monospace; font-size: 1.5rem; font-weight: bold; color: #e74c3c;">120:00</div>
        </div>
        <div class="question-nav-buttons">
            <button id="prev-q-btn" onclick="prevQuestion()" class="nav-btn blue"><i class="fa-solid fa-chevron-left"></i> 前へ</button>
            <button id="next-q-btn" onclick="nextQuestion()" class="nav-btn blue">次へ <i class="fa-solid fa-chevron-right"></i></button>
            <button id="finish-btn" onclick="finishQuiz()" class="nav-btn red">終了</button>
        </div>
        <div id="progress-container"><div id="progress-bar"></div></div>
        <div class="question-text" id="question"></div>
        <div id="options" class="options-grid"></div>
        <div class="explanation" id="explanation" style="display:none;"></div>
    `;
}

function updateBreadcrumbs() {
    const nav = document.getElementById("breadcrumb-nav");
    if (!nav) return;
    
    const arrow = '<i class="fa-solid fa-chevron-right separator-icon"></i>';
    let html = "";

    if (isMockMode) {
        html = `<a onclick="quitExam()"><i class="fa-solid fa-right-from-bracket"></i> 中断</a> ${arrow} <span class="current" style="background:#e74c3c; color:white; padding: 2px 10px; border-radius:10px;">🏆 試験中</span>`;
    } else {
        if (!selectedYear) {
            html = `<span class="current"><i class="fa-solid fa-house"></i> ホーム</span>`;
        } else {
            html = `<a onclick="showYearSelection()"><i class="fa-solid fa-house"></i> ホーム</a>`;
            if (!currentCategory) {
                html += `${arrow} <span class="current">${selectedYear}年度</span>`;
            } else {
                html += `${arrow} <a onclick="selectYear('${selectedYear}')">${selectedYear}年度</a>`;
                let catName = currentCategory === 'strategy' ? 'ストラテジ系' : (currentCategory === 'management' ? 'マネジメント系' : 'テクノロジ系');
                html += `${arrow} <span class="current">${catName}</span>`;
            }
        }
    }
    nav.innerHTML = html;
}

// ======================================================
// PHẦN 4: LOGIC HỌC TẬP & THI THỬ (STUDY CORE)
// ======================================================

function showYearSelection() {
    document.getElementById("main-menu").style.display = "block";
    document.getElementById("category-selection").style.display = "none";
    document.getElementById("question-box").style.display = "none";
    selectedYear = null;
    currentCategory = null;
    updateBreadcrumbs();
}

function selectYear(year) {
    selectedYear = year;
    currentCategory = null;
    document.getElementById("main-menu").style.display = "none";
    document.getElementById("category-selection").style.display = "block";
    document.getElementById("question-box").style.display = "none";
    document.getElementById("category-header").innerText = `${year}年度 - 分野を選択`;
    updateBreadcrumbs();
}

function selectCategory(category) {
    currentCategory = category;
    
    if (!questionsByYear[selectedYear] || !questionsByYear[selectedYear][category]) {
        alert("データがありません (Chưa có dữ liệu cho mục này)");
        return;
    }

    // Lấy dữ liệu
    currentQuestions = questionsByYear[selectedYear][category];
    shuffledOrder = Array.from(Array(currentQuestions.length).keys());
    // Không xáo trộn thứ tự câu hỏi khi luyện tập (để dễ theo dõi) hoặc có thể mở nếu muốn
    shuffleArray(shuffledOrder); 
    
    // Reset trạng thái
    shufflePos = 0;
    answeredMap = {};
    totalAnswered = 0;
    totalCorrect = 0;

    // Hiển thị giao diện
    document.getElementById("category-selection").style.display = "none";
    document.getElementById("question-box").style.display = "block";
    
    updateBreadcrumbs();
    loadQuestion();
}

// --- HÀM QUAN TRỌNG: BẮT ĐẦU THI THỬ ---
function beginRealExam() {
    // 1. Chuẩn bị dữ liệu từ tất cả các năm
    let poolStrat = [], poolMgmt = [], poolTech = [];
    for (let year in questionsByYear) {
        if (questionsByYear[year].strategy) poolStrat.push(...questionsByYear[year].strategy);
        if (questionsByYear[year].management) poolMgmt.push(...questionsByYear[year].management);
        if (questionsByYear[year].technology) poolTech.push(...questionsByYear[year].technology);
    }

    // Lấy ngẫu nhiên (Ví dụ: 35 Strat, 20 Mgmt, 45 Tech)
    const qStrat = getRandomSubarray(poolStrat, 35).map(q => ({...q, _cat: 'strategy'}));
    const qMgmt  = getRandomSubarray(poolMgmt, 20).map(q => ({...q, _cat: 'management'}));
    const qTech  = getRandomSubarray(poolTech, 45).map(q => ({...q, _cat: 'technology'}));
    
    currentQuestions = [...qStrat, ...qMgmt, ...qTech];

    if (currentQuestions.length === 0) {
        alert("問題データ不足です (Dữ liệu câu hỏi không đủ để tạo đề thi)");
        switchMainTab('study');
        return;
    }

    // 2. Thiết lập trạng thái
    isMockMode = true;
    shuffledOrder = Array.from(Array(currentQuestions.length).keys());
    shuffleArray(shuffledOrder); // Xáo trộn câu hỏi thi
    shufflePos = 0;
    answeredMap = {};
    totalAnswered = 0;
    totalCorrect = 0;

    // 3. Cập nhật giao diện
    document.getElementById('mock-intro-screen').style.display = 'none';
    
    // Đảm bảo cấu trúc HTML chuẩn
    restoreQuizStructure();
    
    // Hiện khung câu hỏi
    const qBox = document.getElementById('question-box');
    qBox.style.display = 'block';
    
    // Hiện thanh Timer
    const infoBar = document.getElementById('exam-info-bar');
    if(infoBar) infoBar.style.display = 'flex';

    document.getElementById('breadcrumb-nav').style.display = 'flex';
    updateBreadcrumbs();

    // 4. Bắt đầu
    startTimer(120 * 60); // 120 phút
    loadQuestion();
}

function loadQuestion() {
    if (!currentQuestions || currentQuestions.length === 0) return;

    const questionIndex = shuffledOrder[shufflePos];
    const questionData = currentQuestions[questionIndex];

    // Hiển thị nội dung câu hỏi
    document.getElementById("question").innerHTML = `問${shufflePos + 1}: ${questionData.question}`;
    
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";
    
    // Ẩn giải thích
    const expDiv = document.getElementById("explanation");
    expDiv.style.display = "none";
    expDiv.innerHTML = "";

    const labels = ["ア", "イ", "ウ", "エ"];
    questionData.options.forEach((option, idx) => {
        const btn = document.createElement("div");
        btn.className = "option";
        btn.innerHTML = `<strong>${labels[idx]}</strong> ${option}`;
        btn.onclick = () => checkAnswer(idx, questionData.answer, questionData.explanation);
        optionsDiv.appendChild(btn);
    });

    // Cập nhật nút điều hướng
    const btnPrev = document.getElementById("prev-q-btn");
    const btnNext = document.getElementById("next-q-btn");
    
    if(btnPrev) btnPrev.style.display = shufflePos > 0 ? "inline-block" : "none";
    if(btnNext) btnNext.style.display = shufflePos < shuffledOrder.length - 1 ? "inline-block" : "none";
    
    // Khôi phục trạng thái (nếu đã trả lời rồi quay lại)
    restoreAnswerState();
    
    // Thanh tiến trình
    const percent = ((shufflePos + 1) / shuffledOrder.length) * 100;
    const bar = document.getElementById("progress-bar");
    if(bar) bar.style.width = percent + '%';
}

// [SỬA] Hàm kiểm tra đáp án (Cho phép sửa lại trong chế độ Thi Thử)
function checkAnswer(selectedIndex, correctIndex, explanation) {
    const allOptions = document.querySelectorAll(".option");

    if (isMockMode) {
        // === CHẾ ĐỘ THI THỬ (MOCK EXAM) ===
        
        // 1. Xử lý giao diện: Xóa chọn cũ, chọn cái mới
        allOptions.forEach(el => el.classList.remove("selected"));
        if (allOptions[selectedIndex]) {
            allOptions[selectedIndex].classList.add("selected");
        }

        // 2. Cập nhật dữ liệu (Cho phép ghi đè đáp án cũ)
        // Nếu câu này chưa từng trả lời thì tăng biến đếm, nếu trả lời rồi thì thôi
        if (!(shufflePos in answeredMap)) {
            totalAnswered++;
        }

        // Lưu/Cập nhật đáp án mới vào map
        answeredMap[shufflePos] = { 
            selectedIndex, 
            isCorrect: selectedIndex === correctIndex 
        };

        // 3. Ẩn giải thích (Thi thử không hiện giải thích ngay)
        const expDiv = document.getElementById("explanation");
        if (expDiv) expDiv.style.display = "none";

        // LƯU Ý: Không chạy lệnh allOptions.forEach(el => el.onclick = null); 
        // để người dùng có thể chọn lại đáp án khác nếu muốn.

    } else {
        // === CHẾ ĐỘ LUYỆN TẬP (STUDY MODE) ===
        
        // 1. Chặn click lại ngay lập tức (Luyện tập thì chốt đáp án luôn)
        allOptions.forEach(el => el.onclick = null);

        // 2. Lưu kết quả (Chỉ lưu lần đầu)
        if (!(shufflePos in answeredMap)) {
            totalAnswered++;
            const isCorrect = selectedIndex === correctIndex;
            if (isCorrect) totalCorrect++;
            answeredMap[shufflePos] = { selectedIndex, isCorrect };
        }

        // 3. Hiện màu Xanh/Đỏ
        if (selectedIndex === correctIndex) {
            allOptions[selectedIndex].classList.add("correct");
        } else {
            allOptions[selectedIndex].classList.add("incorrect");
            allOptions[correctIndex].classList.add("correct");
        }

        // 4. Hiện giải thích
        const expDiv = document.getElementById("explanation");
        if (expDiv) {
            expDiv.innerHTML = explanation;
            expDiv.style.display = "block";
        }
    }
}

// [SỬA] Hàm khôi phục trạng thái câu hỏi (Khi bấm Quay lại/Tiếp theo)
function restoreAnswerState() {
    // Nếu câu này chưa trả lời thì không làm gì cả
    if (!answeredMap[shufflePos]) return;

    const { selectedIndex, isCorrect } = answeredMap[shufflePos];
    const allOptions = document.querySelectorAll(".option");
    const questionData = currentQuestions[shuffledOrder[shufflePos]];

    if (isMockMode) {
        // === THI THỬ: Chỉ hiện lại cái đã chọn, KHÔNG KHÓA CLICK ===
        if (allOptions[selectedIndex]) {
            allOptions[selectedIndex].classList.add("selected");
        }
        
        // Đảm bảo giải thích luôn ẩn
        const expDiv = document.getElementById("explanation");
        if (expDiv) expDiv.style.display = "none";

        // QUAN TRỌNG: Không gọi "allOptions.forEach(el => el.onclick = null);" 
        // để người dùng vẫn có thể bấm vào ô khác để sửa đáp án.

    } else {
        // === LUYỆN TẬP: Hiện lại đúng/sai và KHÓA CLICK ===
        
        // Khóa click vì luyện tập đã hiện đáp án rồi thì không cho chọn lại
        allOptions.forEach(el => el.onclick = null);

        if (isCorrect) {
            if(allOptions[selectedIndex]) allOptions[selectedIndex].classList.add("correct");
        } else {
            if(allOptions[selectedIndex]) allOptions[selectedIndex].classList.add("incorrect");
            if(allOptions[questionData.answer]) allOptions[questionData.answer].classList.add("correct");
        }
        
        const expDiv = document.getElementById("explanation");
        if (expDiv) {
            expDiv.innerHTML = questionData.explanation;
            expDiv.style.display = "block";
        }
    }
}

function nextQuestion() {
    if (shufflePos < shuffledOrder.length - 1) {
        shufflePos++;
        loadQuestion();
    }
}

function prevQuestion() {
    if (shufflePos > 0) {
        shufflePos--;
        loadQuestion();
    }
}

function startTimer(duration) {
    let timer = duration;
    const display = document.getElementById('exam-timer');
    
    if (typeof examTimerInterval !== 'undefined') clearInterval(examTimerInterval);

    examTimerInterval = setInterval(function () {
        const minutes = parseInt(timer / 60, 10);
        const seconds = parseInt(timer % 60, 10);
        
        const minStr = minutes < 10 ? "0" + minutes : minutes;
        const secStr = seconds < 10 ? "0" + seconds : seconds;

        if(display) display.textContent = "⏱️ " + minStr + ":" + secStr;

        if (--timer < 0) {
            clearInterval(examTimerInterval);
            finishQuiz();
        }
    }, 1000);
}

// --- HÀM KẾT THÚC BÀI THI (CHẤM ĐIỂM CHUẨN IT PASSPORT) ---
function finishQuiz() {
    // 1. Dừng đồng hồ
    if (typeof examTimerInterval !== 'undefined') clearInterval(examTimerInterval);
    const infoBar = document.getElementById('exam-info-bar');
    if(infoBar) infoBar.style.display = 'none';
    
    let resultHTML = "";
    let exp = 0;

    // === TRƯỜNG HỢP 1: THI THỬ (MOCK EXAM) - LOGIC MỚI ===
    if (isMockMode) {
        const totalQuestions = currentQuestions.length;
        
        // A. Khởi tạo bộ đếm cho 3 phần
        let stats = {
            strategy:   { total: 0, correct: 0, name: "ストラテジ系" },
            management: { total: 0, correct: 0, name: "マネジメント系" },
            technology: { total: 0, correct: 0, name: "テクノロジ系" }
        };

        // B. Duyệt qua từng câu hỏi để cộng điểm vào từng phần
        currentQuestions.forEach((q, index) => {
            // Lấy category của câu hỏi (mặc định là technology nếu thiếu)
            const cat = q._cat || 'technology'; 
            
            // Tăng tổng số câu của phần đó
            if (stats[cat]) stats[cat].total++;
            
            // Nếu trả lời đúng, tăng số câu đúng của phần đó
            if (answeredMap[index] && answeredMap[index].isCorrect) {
                if (stats[cat]) stats[cat].correct++;
            }
        });

        // C. Tính điểm thang 1000 cho từng phần
        // Công thức: (Số câu đúng / Tổng số câu phần đó) * 1000
        const calcScore = (correct, total) => total > 0 ? Math.round((correct / total) * 1000) : 0;

        const scoreStrat = calcScore(stats.strategy.correct, stats.strategy.total);
        const scoreMgmt  = calcScore(stats.management.correct, stats.management.total);
        const scoreTech  = calcScore(stats.technology.correct, stats.technology.total);

        // D. Tính điểm tổng (Trung bình cộng quyền số hoặc Tổng đúng / Tổng câu)
        // IT Passport thực tế dùng IRT (Lý thuyết ứng đáp câu hỏi), nhưng ở đây ta dùng tỷ lệ % tổng
        const scoreTotal = Math.round((totalCorrect / totalQuestions) * 1000);

        // E. Xét điều kiện Đậu/Rớt
        // Điều kiện: Tổng >= 600 VÀ Tất cả các phần >= 300
        const isPass = (scoreTotal >= 600) && 
                       (scoreStrat >= 300) && 
                       (scoreMgmt >= 300) && 
                       (scoreTech >= 300);
        
        // EXP thưởng
        exp = isPass ? 50 : 0; 
        addExp(exp);

        // F. Tạo HTML hiển thị điểm chi tiết
        // Hàm hỗ trợ tạo dòng điểm
        const createScoreRow = (label, score) => {
            const isSafe = score >= 300;
            const icon = isSafe ? "✅" : "⚠️";
            const color = isSafe ? "#27ae60" : "#e74c3c"; // Xanh hoặc Đỏ
            const statusText = isSafe ? "達成" : "未達";
            return `
                <div style="display:flex; justify-content:space-between; padding:5px 0; border-bottom:1px dashed #eee; font-size:0.95rem;">
                    <span>${label}</span>
                    <span style="color:${color}; font-weight:bold;">
                        ${score}/1000 ${icon} <span style="font-size:0.8em;">${statusText}</span>
                    </span>
                </div>
            `;
        };

        const detailScoreHTML = `
            <div style="background:#f8f9fa; padding:15px; border-radius:8px; text-align:left; margin:15px 0; border:1px solid #ddd;">
                <div style="font-weight:bold; color:#555; margin-bottom:10px; text-align:center;">分野別評価点</div>
                ${createScoreRow("ストラテジ系", scoreStrat)}
                ${createScoreRow("マネジメント系", scoreMgmt)}
                ${createScoreRow("テクノロジ系", scoreTech)}
                <div style="font-size:0.8rem; color:#888; margin-top:5px; text-align:right;">
                    ※ 合格基準: 各分野300点以上
                </div>
            </div>
        `;

        // G. Tạo bảng Grid 1-100 (Giữ nguyên logic cũ)
        let gridHTML = '<div class="result-grid">';
        for (let i = 0; i < totalQuestions; i++) {
            let statusClass = 'skipped'; 
            let label = i + 1;
            if (answeredMap[i]) statusClass = answeredMap[i].isCorrect ? 'correct' : 'incorrect';
            gridHTML += `<div class="result-item-btn ${statusClass}" onclick="showQuestionDetail(${i})">${label}</div>`;
        }
        gridHTML += '</div>';
        let detailContainerHTML = `<div id="modal-q-detail" class="modal-question-detail"></div>`;

        // H. Kết hợp lại thành HTML tổng
        resultHTML = `
            <div style="text-align: center;">
                <h2 style="color: ${isPass ? '#27ae60' : '#e74c3c'}">${isPass ? '🈴 合格' : '😢 不合格'}</h2>
                
                <div style="font-size: 1.4em; margin: 10px 0;">
                    総合スコア: <strong>${scoreTotal} / 1000</strong>
                </div>
                
                <div style="font-size: 1.1em; color: #27ae60; font-weight: bold; background: #eafaf1; padding: 5px 15px; border-radius: 20px; display: inline-block; margin-bottom:10px;">
                    獲得EXP: +${exp}
                </div>

                ${detailScoreHTML}
            </div>
            ${gridHTML}
            ${detailContainerHTML}
        `;
    } 
    
    // === TRƯỜNG HỢP 2: LUYỆN TẬP (STUDY MODE) ===
    else {
        exp = totalCorrect; 
        addExp(exp);
        
        resultHTML = `
            <div style="text-align: center;">
                <div style="font-size: 1.2em; margin-bottom: 10px;">
                    正解数: <strong>${totalCorrect} / ${totalAnswered}</strong>
                </div>
                <div style="font-size: 1.1em; color: #27ae60; font-weight: bold; background: #eafaf1; padding: 10px; border-radius: 8px; display: inline-block;">
                    獲得EXP: +${exp}
                </div>
            </div>
        `;
    }
    
    showCustomModal("🏆 結果発表", resultHTML, [
        { text: "閉じる", class: "btn-primary", action: () => switchMainTab('study') }
    ]);
    
    isMockMode = false;
}

// Hàm hiển thị chi tiết câu hỏi khi bấm vào bảng lưới
function showQuestionDetail(index) {
    const container = document.getElementById('modal-q-detail');
    if (!container) return;

    const qData = currentQuestions[index];
    const answerState = answeredMap[index];
    
    // Xác định người dùng chọn gì
    let userChoiceText = "未回答";
    let statusColor = "#666";
    let statusIcon = "⚪";

    const labels = ["ア", "イ", "ウ", "エ"];
    const correctLabel = labels[qData.answer];

    if (answerState) {
        const userLabel = labels[answerState.selectedIndex];
        if (answerState.isCorrect) {
            userChoiceText = `あなたの回答: <strong>${userLabel}</strong> (正解)`;
            statusColor = "#27ae60";
            statusIcon = "✅";
        } else {
            userChoiceText = `あなたの回答: <strong>${userLabel}</strong> (不正解)`;
            statusColor = "#e74c3c";
            statusIcon = "❌";
        }
    }

    // Nội dung chi tiết
    container.innerHTML = `
        <div style="border-bottom:1px solid #ddd; padding-bottom:10px; margin-bottom:10px;">
            <strong style="color:#2c3e50;">問${index + 1}</strong> <span style="color:${statusColor}">${statusIcon}</span>
        </div>
        <div style="font-weight:bold; margin-bottom:10px;">${qData.question}</div>
        
        <div style="margin-bottom:10px; font-size:0.9em;">
            ${userChoiceText} <br>
            <span style="color:#27ae60;">正解: <strong>${correctLabel}</strong></span>
        </div>

        <div style="background:#fff3cd; padding:10px; border-radius:5px; font-size:0.9em; color:#856404;">
            <strong>解説 (Giải thích):</strong><br>
            ${qData.explanation}
        </div>
    `;
    
    // Hiển thị container
    container.style.display = "block";
    
    // Cuộn xuống để xem chi tiết (nếu modal dài)
    container.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function quitExam() {
    if(confirm("試験を中断しますか？")) {
        clearInterval(examTimerInterval);
        switchMainTab('study');
    }
}

// ======================================================
// PHẦN 5: MINI GAME (SNIPER, BLITZ, MEMORY)
// ======================================================

function startMiniGame(mode) {
    // 1. Mượn giao diện view-study để hiển thị game
    document.getElementById('view-minigame').style.display = 'none';
    document.getElementById('view-study').style.display = 'block';
    
    // Ẩn các thành phần thừa
    document.getElementById('main-menu').style.display = 'none';
    document.getElementById('category-selection').style.display = 'none';
    document.getElementById('breadcrumb-nav').style.display = 'none';
    
    // Hiện khung chơi
    const qBox = document.getElementById('question-box');
    qBox.style.display = 'block';
    qBox.innerHTML = ''; // Xóa HTML cũ của Quiz
    qBox.className = "question-box"; 

    // Đổi tiêu đề
    const titles = { 'sniper': '🎯 Sniper Mode', 'blitz': '⚡ Blitz Mode', 'memory': '🧠 Memory Mode' };
    const titleEl = document.getElementById('study-title');
    if(titleEl) titleEl.innerText = titles[mode] || 'Game';

    // Reset điểm
    currentGameScore = 0;
    currentGameQuestionCount = 0;
    gameHistory = []; // [MỚI] Reset lịch sử

    if (mode === 'sniper') playSniperMode();
    else if (mode === 'blitz') playBlitzMode();
    else if (mode === 'memory') playMemoryMode();
}

function exitMiniGame() {
    // Quay về menu chọn game
    switchMainTab('minigame');
}

// --- SNIPER MODE ---
function playSniperMode() {
  if (currentGameQuestionCount >= MAX_QUESTIONS_PER_ROUND) {
      finishMiniGame();
      return;
  }
  
  const q = VOCAB_DATABASE[Math.floor(Math.random() * VOCAB_DATABASE.length)];
  
  // Lưu dữ liệu câu hỏi hiện tại để check
  currentQuestionData = q; 

  let options = [q.term];
  let distractors = getRandomDistractors(q.term, 3);
  options = options.concat(distractors);
  options.sort(() => Math.random() - 0.5);

  const html = `
      <div class="sniper-container">
          <h2 style="color:#e74c3c;">🎯 Sniper ${currentGameQuestionCount + 1}/${MAX_QUESTIONS_PER_ROUND}</h2>
          <div class="sniper-question-box">
              <p style="color:#888; font-size:0.9em;">この説明に合う用語は？</p>
              <div class="sniper-question-text">${q.desc}</div>
          </div>
          <div class="sniper-grid">
              ${options.map(opt => `<button class="sniper-btn" onclick="checkSniper('${opt}')">${opt}</button>`).join('')}
          </div>
          <button onclick="exitMiniGame()" style="margin-top:20px; background:transparent; border:2px solid #ccc; color:#888; padding:8px 20px; border-radius:20px; cursor:pointer; font-weight:bold;">
              ❌ 終了する
          </button>
      </div>
  `;
  document.getElementById('question-box').innerHTML = html;
}

window.checkSniper = function(selected) {
  const correct = currentQuestionData.term;
  const desc = currentQuestionData.desc;
  const isCorrect = (selected === correct);

  if (isCorrect) currentGameScore++;

  // [MỚI] Dùng hiệu ứng không chặn thay vì alert
  showRapidFeedback(isCorrect);

  // Lưu lịch sử
  gameHistory.push({
      question: desc,
      userChoice: selected,
      correctAnswer: correct,
      isCorrect: isCorrect,
      type: 'sniper'
  });

  currentGameQuestionCount++;
  // [QUAN TRỌNG] Chờ 1000ms để hiện xong hiệu ứng rồi mới qua câu mới
  setTimeout(playSniperMode, 1000); 
}

// --- BLITZ MODE ---
function playBlitzMode() {
  if (currentGameQuestionCount >= MAX_QUESTIONS_PER_ROUND) {
      finishMiniGame();
      return;
  }

  const q = VOCAB_DATABASE[Math.floor(Math.random() * VOCAB_DATABASE.length)];
  const isTrue = Math.random() > 0.5;
  const displayTerm = isTrue ? q.term : getRandomDistractors(q.term, 1)[0];
  
  // Lưu dữ liệu để check
  currentQuestionData = { 
      realItem: q, 
      displayedTerm: displayTerm, 
      isMatch: isTrue 
  };

  const html = `
      <div class="blitz-container">
          <h2 style="color:#f39c12;">⚡ Blitz ${currentGameQuestionCount + 1}/${MAX_QUESTIONS_PER_ROUND}</h2>
          <div class="blitz-card">
              <div class="blitz-desc">${q.desc}</div>
              <div style="font-size:2rem; margin:20px 0; font-weight:bold; color:#2c3e50;">${displayTerm}</div>
          </div>
          <div class="blitz-btn-group">
              <button class="blitz-btn btn-true" onclick="checkBlitz(true)">⭕ 正しい</button>
              <button class="blitz-btn btn-false" onclick="checkBlitz(false)">❌ 間違い</button>
          </div>
          <button onclick="exitMiniGame()" style="margin-top:20px; background:transparent; border:2px solid #ccc; color:#888; padding:8px 20px; border-radius:20px; cursor:pointer; font-weight:bold;">
              ❌ 終了する
          </button>
      </div>
  `;
  document.getElementById('question-box').innerHTML = html;
}

window.checkBlitz = function(userChoice) {
  const data = currentQuestionData;
  const isCorrect = (userChoice === data.isMatch);

  if (isCorrect) currentGameScore++;

  // [MỚI] Dùng hiệu ứng không chặn
  showRapidFeedback(isCorrect);

  // Lưu lịch sử
  gameHistory.push({
      question: `${data.realItem.desc} <br> <span style="color:#666; font-size:0.9em;">(表示: ${data.displayedTerm})</span>`, 
      userChoice: userChoice ? "正しい" : "間違い",
      correctAnswer: data.realItem.term, 
      isCorrect: isCorrect,
      type: 'blitz',
      note: data.isMatch 
          ? "一致しています。" 
          : `不一致。これは <b>${data.realItem.term}</b> の説明です。`
  });

  currentGameQuestionCount++;
  // [QUAN TRỌNG] Chờ 1000ms để hiện xong hiệu ứng
  setTimeout(playBlitzMode, 1000);
}
// --- MEMORY MODE ---
function playMemoryMode() {
  // Reset trạng thái game
  matchedPairs = 0;
  flippedCards = [];
  currentGameScore = 0; // Reset điểm (dù game này tính thưởng khi thắng)
  
  // 1. Lấy ngẫu nhiên từ vựng
  const selectedVocab = getRandomSubarray(VOCAB_DATABASE, MEMORY_PAIRS);
  
  // 2. Tạo cặp thẻ: 1 thẻ chứa Term, 1 thẻ chứa Desc
  memoryCards = [];
  selectedVocab.forEach((v, index) => {
      // Lưu matchId giống nhau để nhận biết 1 cặp
      memoryCards.push({ id: index, type: 'term', content: v.term, matchId: index });
      memoryCards.push({ id: index, type: 'desc', content: v.desc, matchId: index });
  });
  
  // 3. Xáo trộn vị trí thẻ
  memoryCards.sort(() => Math.random() - 0.5);
  
  // 4. Render giao diện
  const gameHTML = `
      <div class="memory-container" style="text-align:center;">
          <h2 style="color:#3f51b5; margin-bottom:10px;">
              🧠 MEMORY HACK <span style="font-size:0.8em; color:#aaa;" id="memory-status">(ペア: ${matchedPairs}/${MEMORY_PAIRS})</span>
          </h2>
          
          <div class="memory-grid" style="display:grid; grid-template-columns: repeat(3, 1fr); gap:10px;">
              ${memoryCards.map((card, index) => `
                  <div class="memory-card hidden" id="card-${index}" onclick="flipCard(${index})">
                      <div class="content">${card.content}</div>
                  </div>
              `).join('')}
          </div>
          
          <button onclick="exitMiniGame()" style="margin-top:20px; background:transparent; border:2px solid #ccc; color:#888; padding:8px 20px; border-radius:20px; cursor:pointer; font-weight:bold;">
              ❌ 終了する
          </button>
      </div>
  `;
  document.getElementById('question-box').innerHTML = gameHTML;
}

function flipCard(index) {
  const cardEl = document.getElementById(`card-${index}`);
  
  // [QUAN TRỌNG] Chặn click nếu:
  // 1. Thẻ này đã lật rồi (flipped)
  // 2. Thẻ này đã ghép đúng rồi (matched)
  // 3. Đang có 2 thẻ đang mở (đang chờ xử lý)
  if (cardEl.classList.contains('flipped') || 
      cardEl.classList.contains('matched') || 
      flippedCards.length >= 2) {
      return;
  }
  
  // 1. Lật thẻ hiện tại (Bỏ hidden, thêm flipped)
  cardEl.classList.remove('hidden');
  cardEl.classList.add('flipped');
  
  // Lưu vào mảng tạm để so sánh
  flippedCards.push({ index: index, data: memoryCards[index] });
  
  // 2. Nếu đã lật đủ 2 thẻ -> Kiểm tra
  if (flippedCards.length === 2) {
      const card1 = flippedCards[0];
      const card2 = flippedCards[1];
      
      if (card1.data.matchId === card2.data.matchId) {
          // === TRƯỜNG HỢP ĐÚNG (MATCH) ===
          // Giữ nguyên trạng thái lật, thêm class 'matched' để đổi màu xanh
          document.getElementById(`card-${card1.index}`).classList.add('matched');
          document.getElementById(`card-${card2.index}`).classList.add('matched');
          
          // Tăng số cặp đúng
          matchedPairs++;
          // Cập nhật giao diện đếm
          const statusEl = document.getElementById('memory-status');
          if(statusEl) statusEl.innerText = `(Pairs: ${matchedPairs}/${MEMORY_PAIRS})`;

          // Reset mảng tạm (để click cặp tiếp theo)
          flippedCards = [];
          
          // Kiểm tra chiến thắng
          if (matchedPairs >= MEMORY_PAIRS) {
              setTimeout(() => finishMiniGame(true), 500);
          }
      } else {
          // === TRƯỜNG HỢP SAI (MISMATCH) ===
          // Chờ 1 giây cho người chơi nhìn, sau đó úp lại
          setTimeout(() => {
              const el1 = document.getElementById(`card-${card1.index}`);
              const el2 = document.getElementById(`card-${card2.index}`);
              
              // Úp thẻ 1 (Bỏ flipped, thêm hidden)
              if(el1) { 
                  el1.classList.remove('flipped'); 
                  el1.classList.add('hidden'); 
              }
              // Úp thẻ 2
              if(el2) { 
                  el2.classList.remove('flipped'); 
                  el2.classList.add('hidden'); 
              }
              
              // Reset mảng tạm
              flippedCards = [];
          }, 1000);
      }
  }
}

// --- HÀM TẠO BẢNG REVIEW ---
function generateReviewHTML() {
  let html = `<div style="max-height: 300px; overflow-y: auto; text-align: left; font-size: 0.9rem; margin-top:15px; border-top:1px solid #eee;">`;
  
  gameHistory.forEach((item, index) => {
      const icon = item.isCorrect ? "✅" : "❌";
      const color = item.isCorrect ? "#27ae60" : "#e74c3c";
      
      html += `
          <div style="padding: 10px; border-bottom: 1px solid #eee;">
              <div style="font-weight:bold; color:#555;">Q${index+1}. ${item.question}</div>
              <div style="display:flex; justify-content:space-between; margin-top:5px;">
                  <span style="color:${color}; font-weight:bold;">${icon} あなた: ${item.userChoice}</span>
                  <span style="color:#2c3e50;">正解: <b>${item.correctAnswer}</b></span>
              </div>
              ${item.note ? `<div style="font-size:0.85em; color:#888; margin-top:2px;">👉 ${item.note}</div>` : ''}
          </div>
      `;
  });
  
  html += `</div>`;
  return html;
}

// --- SỬA HÀM KẾT THÚC MINI GAME (ĐÃ CĂN GIỮA ĐIỂM SỐ) ---
function finishMiniGame(isMemory = false) {
    let exp = 0;
    let title = "";
    let body = "";
    
    // 1. Xử lý Memory Mode (Chỉ báo thắng, không có review chi tiết)
    if (isMemory) {
        exp = 10;
        addExp(exp);
        
        // [SỬA] Căn giữa nội dung thông báo thắng
        const memoryBody = `
            <div style="text-align: center;">
                <div style="font-size: 1.2em; margin-bottom: 10px;">
                    すべてのペアを見つけました！
                </div>
                <div style="font-size: 1.1em; color: #27ae60; font-weight: bold; background: #eafaf1; padding: 10px; border-radius: 8px; display: inline-block;">
                    獲得EXP: +${exp}
                </div>
            </div>
        `;
        
        showCustomModal("🏆 全ペア達成！", memoryBody, [
            {text: "閉じる", class: "btn-primary", action: exitMiniGame}
        ]);
        return;
    } 
    
    // 2. Xử lý Sniper & Blitz Mode (Có bảng review)
    exp = currentGameScore; 
    addExp(exp);
    
    const reviewHTML = generateReviewHTML(); // Tạo bảng tổng kết
    
    title = "🏆 結果発表"; // Tiêu đề: Công bố kết quả
    
    // [SỬA] Thêm <div style="text-align: center;"> bao quanh phần điểm số
    body = `
        <div style="text-align: center;">
            <div style="font-size: 1.5em; margin-bottom: 10px;">
                正解数: <strong>${currentGameScore} / ${MAX_QUESTIONS_PER_ROUND}</strong>
            </div>
            <div style="font-size: 1.1em; color: #27ae60; font-weight: bold; margin-bottom: 15px;">
                獲得EXP: +${exp}
            </div>
        </div>
        
        <div style="background:#f9f9f9; border-radius:8px; padding:5px; border:1px solid #eee;">
            ${reviewHTML}
        </div>
    `;

    showCustomModal(title, body, [
        {text: "閉じる", class: "btn-primary", action: exitMiniGame}
    ]);
}

// ======================================================
// UTILS (HÀM HỖ TRỢ)
// ======================================================

function getRandomSubarray(arr, size) {
    let shuffled = arr.slice(0), i = arr.length, temp, index;
    while (i--) {
        index = Math.floor(Math.random() * (i + 1));
        temp = shuffled[i]; shuffled[i] = shuffled[index]; shuffled[index] = temp;
    }
    return shuffled.slice(0, size);
}

function getRandomDistractors(correctTerm, count) {
    let res = [];
    // Giới hạn số lần lặp để tránh treo trình duyệt nếu DB ít
    let safety = 0;
    while(res.length < count && safety < 100) {
        let item = VOCAB_DATABASE[Math.floor(Math.random() * VOCAB_DATABASE.length)];
        if (item.term !== correctTerm && !res.includes(item.term)) res.push(item.term);
        safety++;
    }
    // Fallback nếu không đủ
    while(res.length < count) res.push("N/A");
    return res;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Modal Helper
function showCustomModal(title, body, buttons) {
    document.getElementById('g-modal-title').innerText = title;
    document.getElementById('g-modal-body').innerHTML = body;
    const actions = document.getElementById('g-modal-actions');
    actions.innerHTML = "";
    buttons.forEach(btn => {
        const b = document.createElement("button");
        b.className = `modal-btn ${btn.class}`;
        b.innerText = btn.text;
        b.onclick = () => { closeGenericModal(); if (btn.action) btn.action(); };
        actions.appendChild(b);
    });
    document.getElementById('generic-modal').style.display = "flex";
}

function closeGenericModal() {
    document.getElementById('generic-modal').style.display = "none";
}
// Hàm hiển thị phản hồi nhanh (Thay thế Alert)
function showRapidFeedback(isCorrect) {
  const el = document.createElement('div');
  el.className = 'game-feedback';
  // Hiện dấu O (xanh) hoặc X (đỏ)
  el.innerHTML = isCorrect 
      ? '<span style="color:#2ecc71">⭕</span>' 
      : '<span style="color:#e74c3c">❌</span>';
  
  document.body.appendChild(el);

  // Tự động xóa sau 600ms
  setTimeout(() => {
      if(el && el.parentNode) el.parentNode.removeChild(el);
  }, 600);
}
// Khởi động khi tải trang
document.addEventListener('DOMContentLoaded', () => {
    loadData();
    switchMainTab('study'); // Mặc định vào tab học
});

