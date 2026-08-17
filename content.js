module.exports = {
  "chapters": [
    {
      "number": 1,
      "title": "Git・GitHub",
      "entries": [
        {
          "id": "repository",
          "page": 1,
          "term": "Repository",
          "subtitle": "「final_v2」からの卒業を告げた保管庫",
          "category": "バージョン管理・Git",
          "icon": "ic-server",
          "oneline": "プロジェクトの全ての変更履歴をまとめて記録・管理する「保管庫」。",
          "q1_text": "誰が・いつ・何を変更したか分からなくなり、「final_v2」「final_v2_修正後」のようなファイルが増殖していた。",
          "q2_intro": "フォルダごとコピーして、日付やバージョン名をファイル名に付けて管理していた。",
          "q2_table": {
            "col_before": "ファイルの手動保存",
            "col_after": "Repository",
            "rows": [
              [
                "変更履歴の管理",
                "ファイル名やコメントで手動管理",
                "コミットとして自動記録"
              ],
              [
                "誰が変更したか",
                "分からない・本人に聞くしかない",
                "常に記録され追跡できる"
              ],
              [
                "過去に戻す",
                "バックアップを探して復元",
                "いつでも過去の状態を復元"
              ],
              [
                "共有方法",
                "メールやチャットで送付",
                "クローンしてそのまま共有"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-file",
              "cap": "変更履歴を丸ごと記録"
            },
            {
              "icon": "ic-clock",
              "cap": "いつでも過去の状態に戻せる"
            },
            {
              "icon": "ic-cloud",
              "cap": "チームで一元管理・共有"
            }
          ],
          "memo": "リポジトリには「ローカル」と「リモート」があり、GitHubはリモートリポジトリを置いておく場所、というだけの位置づけ。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "Clone",
                  "desc": "リポジトリを丸ごと手元にコピーすること。",
                  "icon": "ic-package",
                  "page": 2
                },
                {
                  "name": "Commit",
                  "desc": "変更を記録として保存する単位。",
                  "icon": "ic-file",
                  "page": 5
                }
              ]
            },
            {
              "label": "一緒に覚えたい言葉",
              "items": [
                {
                  "name": "GitHub",
                  "desc": "リモートリポジトリを置いておけるWebサービス。",
                  "icon": "ic-cloud"
                },
                {
                  "name": "Working Tree",
                  "desc": "今実際に作業しているファイル群のこと。",
                  "icon": "ic-monitor"
                }
              ]
            }
          ]
        },
        {
          "id": "clone",
          "page": 2,
          "term": "Clone",
          "subtitle": "まるごと持ち帰れる、プロジェクトのコピー機",
          "category": "バージョン管理・Git",
          "icon": "ic-package",
          "oneline": "リモートリポジトリの中身を、変更履歴つきで手元にまるごとコピーしてくること。",
          "q1_text": "他のPCやメンバーの環境に、同じプロジェクトを履歴ごと持ってくる方法が必要だった。",
          "q2_intro": "リポジトリの中身をZIPでダウンロードして展開していた（履歴は付いてこない）。",
          "q2_table": {
            "col_before": "ZIPダウンロード",
            "col_after": "Clone",
            "rows": [
              [
                "手に入るもの",
                "最新ファイルのみ",
                "全履歴つきのコピー"
              ],
              [
                "更新の追従",
                "そのつどダウンロードし直す",
                "pullで差分だけ取得"
              ],
              [
                "変更の反映",
                "できない・別送するしかない",
                "push・pullで同期できる"
              ],
              [
                "初期セットアップ",
                "展開してまた一からやり直し",
                "git clone のひと言で完了"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-package",
              "cap": "履歴ごと丸ごと持ってこれる"
            },
            {
              "icon": "ic-laptop",
              "cap": "どのPCでも同じ環境を再現"
            },
            {
              "icon": "ic-clock",
              "cap": "続きの作業をすぐ始められる"
            }
          ],
          "memo": "cloneするのは最初の1回だけ。2回目以降は pull で差分だけを取ってくる。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "Repository",
                  "desc": "変更履歴をまとめて記録する保管庫。",
                  "icon": "ic-server",
                  "page": 1
                },
                {
                  "name": "Pull",
                  "desc": "クローン後、最新の変更を取り込む操作。",
                  "icon": "ic-cloud",
                  "page": 7
                }
              ]
            },
            {
              "label": "一緒に覚えたい言葉",
              "items": [
                {
                  "name": "Origin",
                  "desc": "cloneした際に自動で付くリモートの標準名。",
                  "icon": "ic-network"
                },
                {
                  "name": "SSH",
                  "desc": "安全に通信するための鍵認証の仕組み。",
                  "icon": "ic-scale"
                }
              ]
            }
          ]
        },
        {
          "id": "fork",
          "page": 3,
          "term": "Fork",
          "subtitle": "許可なしで、自分だけの改造版を作る技",
          "category": "GitHub・OSS開発",
          "icon": "ic-network",
          "oneline": "他人のリポジトリを、自分のGitHubアカウント配下に複製して自由に改造できるようにする機能。",
          "q1_text": "編集権限のないリポジトリに直接手を加えることはできないが、自分なりに改造したり、OSSに貢献したい場面が増えていた。",
          "q2_intro": "コードをダウンロードして、別プロジェクトとしてゼロから作り直していた。",
          "q2_table": {
            "col_before": "コードの複製",
            "col_after": "Fork",
            "rows": [
              [
                "元との関係",
                "切れる（ただのコピー）",
                "履歴・つながりを保ったまま複製"
              ],
              [
                "貢献のしやすさ",
                "差分を伝える手段がない",
                "Pull Requestで提案できる"
              ],
              [
                "編集権限",
                "不要（そもそも別物になる）",
                "不要（フォーク先は自分のもの）"
              ],
              [
                "元の更新の追従",
                "手動で見比べるしかない",
                "元リポジトリの変更を取り込める"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-network",
              "cap": "OSSへの貢献ができる"
            },
            {
              "icon": "ic-cube",
              "cap": "自分の実験場として自由に改造"
            },
            {
              "icon": "ic-scale",
              "cap": "元に迷惑をかけずに試せる"
            }
          ],
          "memo": "Fork してから Pull Request を送るまでが、OSS開発の基本パターン。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "OSS",
                  "desc": "ソースコードが公開されたソフトウェア。",
                  "icon": "ic-network",
                  "page": 15
                },
                {
                  "name": "コントリビュート",
                  "desc": "プロジェクトへ改善を還元すること。",
                  "icon": "ic-laptop",
                  "page": 16
                }
              ]
            },
            {
              "label": "一緒に覚えたい言葉",
              "items": [
                {
                  "name": "Pull Request",
                  "desc": "変更を元のリポジトリに取り込んでもらう提案。",
                  "icon": "ic-rocket"
                },
                {
                  "name": "Upstream",
                  "desc": "フォーク元の本家リポジトリを指す言葉。",
                  "icon": "ic-server"
                }
              ]
            }
          ]
        },
        {
          "id": "branch",
          "page": 4,
          "term": "Branch",
          "subtitle": "本流を汚さずに未来を試す並行世界",
          "category": "バージョン管理・Git",
          "icon": "ic-layers",
          "oneline": "本流（main）から分かれて、他に影響を与えずに作業できる「並行世界」を作る仕組み。",
          "q1_text": "新機能の開発中は本番のコードを触れなくなり、複数人が同時に違う機能を作ると変更同士がぶつかっていた。",
          "q2_intro": "フォルダをコピーして「app_new」のような名前で別々に作業していた。",
          "q2_table": {
            "col_before": "フォルダコピー",
            "col_after": "Branch",
            "rows": [
              [
                "並行作業",
                "フォルダを増やして管理",
                "ブランチを分けるだけ"
              ],
              [
                "本流への影響",
                "コピー作業中は本流を触れない",
                "mainは常に安全なまま"
              ],
              [
                "統合方法",
                "手作業で見比べてコピー",
                "mergeで自動的に統合"
              ],
              [
                "切り替え",
                "フォルダを開き直す",
                "checkoutで一瞬"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-layers",
              "cap": "複数人が同時並行で開発できる"
            },
            {
              "icon": "ic-scale",
              "cap": "実験して失敗してもmainは無傷"
            },
            {
              "icon": "ic-network",
              "cap": "完成したらmergeで合流できる"
            }
          ],
          "memo": "「ブランチを切る」という言い方をよくする。mainブランチが本流にあたる。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "Commit",
                  "desc": "ブランチ上に積み重ねる変更の記録。",
                  "icon": "ic-file",
                  "page": 5
                },
                {
                  "name": "Merge",
                  "desc": "分かれたブランチをひとつに統合する操作。",
                  "icon": "ic-scale",
                  "page": 8
                }
              ]
            },
            {
              "label": "一緒に覚えたい言葉",
              "items": [
                {
                  "name": "main / master",
                  "desc": "プロジェクトの本流となるブランチの名前。",
                  "icon": "ic-network"
                },
                {
                  "name": "Checkout",
                  "desc": "作業対象のブランチを切り替える操作。",
                  "icon": "ic-monitor"
                }
              ]
            }
          ]
        },
        {
          "id": "commit",
          "page": 5,
          "term": "Commit",
          "subtitle": "「セーブ」に理由を添える1コマ",
          "category": "バージョン管理・Git",
          "icon": "ic-file",
          "oneline": "変更内容を、メッセージ付きで記録の1コマとして保存すること。",
          "q1_text": "どこまで・何のための変更かが後から分からなくなっていた。",
          "q2_intro": "作業のキリのいいところで、ファイルをまるごと別名保存していた。",
          "q2_table": {
            "col_before": "別名保存",
            "col_after": "Commit",
            "rows": [
              [
                "記録の単位",
                "ファイル全体をまるごと",
                "変更した差分だけ"
              ],
              [
                "変更理由",
                "ファイル名や記憶に頼る",
                "コミットメッセージに残す"
              ],
              [
                "巻き戻し",
                "前のファイルを探し出す",
                "特定のコミットにすぐ戻れる"
              ],
              [
                "差分確認",
                "目視で見比べる",
                "diffで一目瞭然"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-file",
              "cap": "変更履歴が全部残る"
            },
            {
              "icon": "ic-clock",
              "cap": "いつでもその時点に戻れる"
            },
            {
              "icon": "ic-pen",
              "cap": "「なぜ直したか」が記録に残る"
            }
          ],
          "memo": "「小さく・こまめに」コミットするのが基本。1コミット1テーマが読みやすい。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "Branch",
                  "desc": "コミットを積み重ねる並行世界。",
                  "icon": "ic-layers",
                  "page": 4
                },
                {
                  "name": "Push",
                  "desc": "コミットをリモートに送る操作。",
                  "icon": "ic-rocket",
                  "page": 6
                }
              ]
            },
            {
              "label": "一緒に覚えたい言葉",
              "items": [
                {
                  "name": "Staging Area",
                  "desc": "コミットする変更を仮に置いておく場所。",
                  "icon": "ic-layers"
                },
                {
                  "name": "Diff",
                  "desc": "変更前後の差分を表示する仕組み。",
                  "icon": "ic-monitor"
                }
              ]
            }
          ]
        },
        {
          "id": "push",
          "page": 6,
          "term": "Push",
          "subtitle": "手元の作業をチームに届けるひと押し",
          "category": "バージョン管理・チーム開発",
          "icon": "ic-rocket",
          "oneline": "ローカルで積み上げたコミットを、リモートリポジトリに送って反映させること。",
          "q1_text": "手元で進めた作業の内容を、チームやサーバーに反映する手段が必要だった。",
          "q2_intro": "修正したファイルをメールやチャットで送ったり、FTPでアップロードしていた。",
          "q2_table": {
            "col_before": "ファイル送付",
            "col_after": "Push",
            "rows": [
              [
                "共有方法",
                "メール・チャットで送付",
                "コマンド一つで送信"
              ],
              [
                "反映されるもの",
                "ファイルの最新版だけ",
                "変更履歴ごと"
              ],
              [
                "衝突",
                "気づかず上書きされがち",
                "衝突があれば警告される"
              ],
              [
                "手間",
                "そのつどファイルを探して送る",
                "git push のひと言"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-rocket",
              "cap": "コマンド一つでチームに共有"
            },
            {
              "icon": "ic-cloud",
              "cap": "変更履歴ごとサーバーに反映"
            },
            {
              "icon": "ic-wheel",
              "cap": "デプロイの起点にもなる"
            }
          ],
          "memo": "pushする前に一度 pull して最新を取り込んでおくと、衝突に慌てずに済む。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "Commit",
                  "desc": "pushする変更の記録の単位。",
                  "icon": "ic-file",
                  "page": 5
                },
                {
                  "name": "Pull",
                  "desc": "逆にリモートの変更を取り込む操作。",
                  "icon": "ic-cloud",
                  "page": 7
                }
              ]
            },
            {
              "label": "一緒に覚えたい言葉",
              "items": [
                {
                  "name": "CI/CD",
                  "desc": "pushをきっかけに自動テスト・デプロイする仕組み。",
                  "icon": "ic-rocket"
                },
                {
                  "name": "Force Push",
                  "desc": "履歴を強制的に上書きするpush。取り扱い注意。",
                  "icon": "ic-scale"
                }
              ]
            }
          ]
        },
        {
          "id": "pull",
          "page": 7,
          "term": "Pull",
          "subtitle": "みんなの最新を、自分の手元に引き寄せる",
          "category": "バージョン管理・チーム開発",
          "icon": "ic-cloud",
          "oneline": "リモートリポジトリの最新の変更を、自分の手元に取り込むこと。",
          "q1_text": "チームメンバーが加えた変更を、自分の環境にも反映させる必要があった。",
          "q2_intro": "最新ファイルを送ってもらい、自分の変更と手作業で見比べながら統合していた。",
          "q2_table": {
            "col_before": "手動マージ",
            "col_after": "Pull",
            "rows": [
              [
                "取得方法",
                "送ってもらう・都度依頼",
                "git pull で自動取得"
              ],
              [
                "統合作業",
                "目視で見比べて手作業",
                "fetch＋mergeで自動統合"
              ],
              [
                "最新性",
                "聞かないと分からない",
                "いつでも最新を取得できる"
              ],
              [
                "衝突対応",
                "気づきにくい",
                "コンフリクトとして明示される"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-cloud",
              "cap": "常にチームの最新に追いつける"
            },
            {
              "icon": "ic-layers",
              "cap": "自分の変更と自動で統合される"
            },
            {
              "icon": "ic-scale",
              "cap": "衝突があればその場で気づける"
            }
          ],
          "memo": "pull は「fetch＋merge」の合わせ技。中身を分けて考えると仕組みが理解しやすい。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "Push",
                  "desc": "自分の変更をリモートに送る操作。",
                  "icon": "ic-rocket",
                  "page": 6
                },
                {
                  "name": "Merge",
                  "desc": "pull の中で行われている統合処理。",
                  "icon": "ic-scale",
                  "page": 8
                }
              ]
            },
            {
              "label": "一緒に覚えたい言葉",
              "items": [
                {
                  "name": "Fetch",
                  "desc": "リモートの変更を取得だけしてmergeしない操作。",
                  "icon": "ic-cloud"
                },
                {
                  "name": "Pull Request",
                  "desc": "コードレビューを経て取り込む提案の仕組み。",
                  "icon": "ic-rocket"
                }
              ]
            }
          ]
        },
        {
          "id": "merge",
          "page": 8,
          "term": "Merge",
          "subtitle": "分かれた道を、また1本につなぐ",
          "category": "バージョン管理・チーム開発",
          "icon": "ic-scale",
          "oneline": "分かれていたブランチの変更を、ひとつに統合すること。",
          "q1_text": "ブランチで分かれて進めた作業を、最終的に1つにまとめる必要があった。",
          "q2_intro": "2つのファイルを並べて見比べ、必要な部分を手でコピペして1つにまとめていた。",
          "q2_table": {
            "col_before": "手動統合",
            "col_after": "Merge",
            "rows": [
              [
                "統合方法",
                "目視＋手作業でコピペ",
                "コマンドで自動統合"
              ],
              [
                "衝突検出",
                "気づかず上書きしがち",
                "コンフリクトとして明示"
              ],
              [
                "履歴",
                "統合の過程は残らない",
                "マージコミットとして記録"
              ],
              [
                "対象範囲",
                "ファイル単位",
                "プロジェクト全体を一括統合"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-layers",
              "cap": "ブランチの変更を安全に統合"
            },
            {
              "icon": "ic-scale",
              "cap": "衝突箇所だけ集中して確認できる"
            },
            {
              "icon": "ic-clock",
              "cap": "統合の記録が履歴に残る"
            }
          ],
          "memo": "衝突（コンフリクト）が起きても慌てなくて大丈夫。該当箇所だけ手で直せばいい。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "Branch",
                  "desc": "mergeで統合される側の並行世界。",
                  "icon": "ic-layers",
                  "page": 4
                },
                {
                  "name": "Rebase",
                  "desc": "mergeとは別の、もう一つの統合方法。",
                  "icon": "ic-wheel",
                  "page": 9
                }
              ]
            },
            {
              "label": "一緒に覚えたい言葉",
              "items": [
                {
                  "name": "Conflict",
                  "desc": "自動で統合できず人の判断が必要になる状態。",
                  "icon": "ic-monitor",
                  "page": 11
                },
                {
                  "name": "Fast-forward",
                  "desc": "分岐がない場合に、そのままつなげる統合方法。",
                  "icon": "ic-network"
                }
              ]
            }
          ]
        },
        {
          "id": "rebase",
          "page": 9,
          "term": "Rebase",
          "subtitle": "枝分かれの歴史を、まっすぐに描き直す",
          "category": "バージョン管理・履歴整理",
          "icon": "ic-wheel",
          "oneline": "ブランチの土台を最新のmainに乗せ替えて、履歴を一直線に整えること。",
          "q1_text": "mergeを繰り返すと履歴が枝分かれだらけになり、変更の流れが後から追いにくくなっていた。",
          "q2_intro": "mergeでブランチを統合していた（統合の跡が履歴に残り、次第に複雑になる）。",
          "q2_table": {
            "col_before": "Merge",
            "col_after": "Rebase",
            "rows": [
              [
                "履歴の見た目",
                "枝分かれして複雑",
                "一直線できれい"
              ],
              [
                "元のコミット",
                "そのまま残る",
                "新しいコミットとして積み直す"
              ],
              [
                "統合方法",
                "最後にまとめて合流",
                "土台から作り直して合流"
              ],
              [
                "向いている場面",
                "チームの統合記録を残したい",
                "自分のブランチをきれいに整えたい"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-wheel",
              "cap": "履歴が一直線で見やすくなる"
            },
            {
              "icon": "ic-file",
              "cap": "レビューしやすいコミットに整理"
            },
            {
              "icon": "ic-cloud",
              "cap": "最新のmainを取り込んで作業できる"
            }
          ],
          "memo": "共有済みのブランチをrebaseすると事故のもと。自分のローカルブランチだけに使うのが基本。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "Merge",
                  "desc": "rebaseと並ぶ、もう一つの統合方法。",
                  "icon": "ic-scale",
                  "page": 8
                },
                {
                  "name": "Branch",
                  "desc": "土台を乗せ替える対象そのもの。",
                  "icon": "ic-layers",
                  "page": 4
                }
              ]
            },
            {
              "label": "一緒に覚えたい言葉",
              "items": [
                {
                  "name": "HEAD",
                  "desc": "今いるコミットの位置を指す目印。",
                  "icon": "ic-monitor"
                },
                {
                  "name": "Squash",
                  "desc": "複数のコミットを1つにまとめる操作。",
                  "icon": "ic-layers"
                }
              ]
            }
          ]
        },
        {
          "id": "cherry-pick",
          "page": 10,
          "term": "Cherry-pick",
          "subtitle": "欲しい1つだけを、狙って摘み取る",
          "category": "バージョン管理・履歴操作",
          "icon": "ic-image",
          "oneline": "他のブランチにある特定の1コミットだけを、狙って自分のブランチに取り込むこと。",
          "q1_text": "別ブランチの修正のうち1つだけを今のブランチにも反映したいのに、mergeだと全部ついてきてしまっていた。",
          "q2_intro": "該当の修正をファイルを開いて目視で探し、コピペして手動で反映していた。",
          "q2_table": {
            "col_before": "手動コピペ",
            "col_after": "Cherry-pick",
            "rows": [
              [
                "取り込む範囲",
                "ブランチ全体をmerge",
                "狙った1コミットだけ"
              ],
              [
                "探す手間",
                "ファイルを見比べて探す",
                "コミット履歴から指定するだけ"
              ],
              [
                "履歴",
                "反映元が分からなくなる",
                "新しいコミットとして記録される"
              ],
              [
                "用途",
                "全機能をまとめて統合したい",
                "緊急のバグ修正だけ先に反映したい"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-image",
              "cap": "必要な修正だけピンポイントで反映"
            },
            {
              "icon": "ic-rocket",
              "cap": "緊急のバグ修正をすぐ展開"
            },
            {
              "icon": "ic-layers",
              "cap": "ブランチ全体を統合せずに済む"
            }
          ],
          "memo": "バグ修正をmain以外の複数ブランチ（リリースブランチなど）に配りたいときによく使う。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "Commit",
                  "desc": "cherry-pickで摘み取る対象の単位。",
                  "icon": "ic-file",
                  "page": 5
                },
                {
                  "name": "Branch",
                  "desc": "摘み取った先の並行世界。",
                  "icon": "ic-layers",
                  "page": 4
                }
              ]
            },
            {
              "label": "一緒に覚えたい言葉",
              "items": [
                {
                  "name": "Hotfix",
                  "desc": "本番の緊急バグを直すための修正のこと。",
                  "icon": "ic-rocket"
                },
                {
                  "name": "SHA",
                  "desc": "コミットを一意に識別するハッシュ値。",
                  "icon": "ic-cube"
                }
              ]
            }
          ]
        },
        {
          "id": "conflict",
          "page": 11,
          "term": "Conflict",
          "subtitle": "同時に手を加えた瞬間に鳴る警報",
          "category": "バージョン管理・チーム開発",
          "icon": "ic-scale",
          "oneline": "同じ箇所を複数人が別々に変更していて、Gitが自動で統合できなくなった状態。",
          "q1_text": "複数人が同じファイルの同じ箇所を同時に編集すると、片方の変更が知らないうちに消えてしまうことがあった。",
          "q2_intro": "後から保存した人のファイルで上書きされ、先の変更は静かに消えていた。",
          "q2_table": {
            "col_before": "無自覚な上書き",
            "col_after": "Conflict",
            "rows": [
              [
                "検出",
                "気づかれない",
                "明示的に警告される"
              ],
              [
                "消える変更",
                "静かに消えてしまう",
                "両方残った上で選べる"
              ],
              [
                "解決方法",
                "誰かに聞いて復元する",
                "該当箇所を見て手で選ぶ"
              ],
              [
                "発生タイミング",
                "上書き保存の瞬間",
                "merge・pull時に判明する"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-scale",
              "cap": "変更が知らずに消えなくなる"
            },
            {
              "icon": "ic-monitor",
              "cap": "衝突箇所だけピンポイントで確認"
            },
            {
              "icon": "ic-pen",
              "cap": "どちらを残すか自分で選べる"
            }
          ],
          "memo": "コンフリクトは「事故」ではなく「事前に気づけてラッキー」くらいの気持ちで直すもの。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "Merge",
                  "desc": "コンフリクトが表面化しやすい統合操作。",
                  "icon": "ic-scale",
                  "page": 8
                },
                {
                  "name": "Pull",
                  "desc": "コンフリクトが判明するもう一つの場面。",
                  "icon": "ic-cloud",
                  "page": 7
                }
              ]
            },
            {
              "label": "一緒に覚えたい言葉",
              "items": [
                {
                  "name": "マージツール",
                  "desc": "衝突箇所を見比べながら解決を助けるツール。",
                  "icon": "ic-monitor"
                },
                {
                  "name": "Diff",
                  "desc": "変更前後の違いを比較する表示形式。",
                  "icon": "ic-file"
                }
              ]
            }
          ]
        },
        {
          "id": "revert",
          "page": 12,
          "term": "Revert",
          "subtitle": "過去の1コマだけを、そっと打ち消す",
          "category": "バージョン管理・履歴操作",
          "icon": "ic-clock",
          "oneline": "過去のコミットの変更を打ち消す、新しいコミットを作って元に戻すこと。",
          "q1_text": "間違った変更を公開ブランチに反映してしまった後、安全に取り消したい場面があった。",
          "q2_intro": "何を変えたか思い出しながら、手で逆の修正を書いて元に戻していた。",
          "q2_table": {
            "col_before": "手動巻き戻し",
            "col_after": "Revert",
            "rows": [
              [
                "元に戻す方法",
                "記憶を頼りに手で書き直す",
                "対象コミットを指定するだけ"
              ],
              [
                "履歴",
                "間違いも修正も跡が残らない",
                "取り消した記録として残る"
              ],
              [
                "安全性",
                "共有後の履歴改変が必要になりがち",
                "履歴を書き換えずに安全に戻せる"
              ],
              [
                "対象範囲",
                "ファイル単位で手動対応",
                "コミット単位で正確に指定"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-clock",
              "cap": "コマンド一つで間違いを打ち消せる"
            },
            {
              "icon": "ic-file",
              "cap": "履歴を書き換えずに安全に戻せる"
            },
            {
              "icon": "ic-scale",
              "cap": "何を取り消したかが記録に残る"
            }
          ],
          "memo": "公開済み（push済み）のコミットを取り消すときは、resetではなくrevertを使うのが安全。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "Reset",
                  "desc": "revertとよく比較される巻き戻し操作。",
                  "icon": "ic-wheel",
                  "page": 13
                },
                {
                  "name": "Commit",
                  "desc": "revertが打ち消す対象の単位。",
                  "icon": "ic-file",
                  "page": 5
                }
              ]
            },
            {
              "label": "一緒に覚えたい言葉",
              "items": [
                {
                  "name": "ロールバック",
                  "desc": "システムを以前の状態に戻す一般的な言葉。",
                  "icon": "ic-clock"
                }
              ]
            }
          ]
        },
        {
          "id": "reset",
          "page": 13,
          "term": "Reset",
          "subtitle": "今いる場所を、指定の地点まで巻き戻す",
          "category": "バージョン管理・履歴操作",
          "icon": "ic-wheel",
          "oneline": "コミットの位置を過去に戻し、それ以降の変更をなかったことにする（または手元に戻す）こと。",
          "q1_text": "直前のコミットを間違えたり、手元の作業をやり直したいのに。",
          "q2_intro": "バックアップフォルダから昔のバージョンのファイルを探し出して上書きしていた。",
          "q2_table": {
            "col_before": "旧ファイル探し",
            "col_after": "Reset",
            "rows": [
              [
                "戻し方",
                "昔のファイルを探して上書き",
                "コミットを指定して戻すだけ"
              ],
              [
                "戻る範囲",
                "フォルダ単位でバラバラ",
                "リポジトリ全体を正確に指定"
              ],
              [
                "変更の扱い",
                "上書きすると消えてしまう",
                "オプションで手元に残せる"
              ],
              [
                "共有後の利用",
                "特に区別なく使ってしまう",
                "共有済みの履歴では避けるべき"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-wheel",
              "cap": "直前のコミットをやり直せる"
            },
            {
              "icon": "ic-layers",
              "cap": "手元の変更を段階的に戻せる"
            },
            {
              "icon": "ic-clock",
              "cap": "昔のファイルを探し回らずに済む"
            }
          ],
          "memo": "pushして共有済みの履歴をresetすると他の人と食い違ってしまう。そこはrevertの出番。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "Revert",
                  "desc": "resetより安全な、共有履歴向けの巻き戻し。",
                  "icon": "ic-clock",
                  "page": 12
                },
                {
                  "name": "Commit",
                  "desc": "resetで戻す先を指定する単位。",
                  "icon": "ic-file",
                  "page": 5
                }
              ]
            },
            {
              "label": "一緒に覚えたい言葉",
              "items": [
                {
                  "name": "HEAD",
                  "desc": "今いるコミットの位置を指す目印。",
                  "icon": "ic-monitor"
                },
                {
                  "name": "Working Tree",
                  "desc": "今実際に作業しているファイル群のこと。",
                  "icon": "ic-file"
                }
              ]
            }
          ]
        },
        {
          "id": "tag",
          "page": 14,
          "term": "Tag",
          "subtitle": "この瞬間に、名前という付箋を貼る",
          "category": "バージョン管理・リリース",
          "icon": "ic-cube",
          "oneline": "特定のコミットに「v1.0.0」のような名前を付けて、目印として残すこと。",
          "q1_text": "どのコミットが実際にリリースしたバージョンなのか、後から分からなくなっていた。",
          "q2_intro": "リリースのたびにプロジェクト全体をコピーして「release_v1.0」フォルダとして保管していた。",
          "q2_table": {
            "col_before": "フォルダ複製保管",
            "col_after": "Tag",
            "rows": [
              [
                "目印の付け方",
                "フォルダを丸ごとコピーして保管",
                "該当コミットに名前を付けるだけ"
              ],
              [
                "容量",
                "バージョンごとに増え続ける",
                "履歴の中の目印だけなので軽い"
              ],
              [
                "探しやすさ",
                "フォルダを漁って探す",
                "タグ名で一発検索"
              ],
              [
                "用途",
                "手元の目印だけ",
                "リリースノートやCIの起点にも使える"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-cube",
              "cap": "リリースしたバージョンが一目瞭然"
            },
            {
              "icon": "ic-monitor",
              "cap": "タグを指定してその時点を取得"
            },
            {
              "icon": "ic-wheel",
              "cap": "リリース作業を自動化する起点に"
            }
          ],
          "memo": "バージョン番号（v1.0.0など）をタグに使うルールをセマンティックバージョニングという。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "Commit",
                  "desc": "タグを貼り付ける対象そのもの。",
                  "icon": "ic-file",
                  "page": 5
                },
                {
                  "name": "Repository",
                  "desc": "タグごと履歴を保管する場所。",
                  "icon": "ic-server",
                  "page": 1
                }
              ]
            },
            {
              "label": "一緒に覚えたい言葉",
              "items": [
                {
                  "name": "セマンティックバージョニング",
                  "desc": "v1.2.3のようにバージョンを意味づけて付けるルール。",
                  "icon": "ic-scale"
                },
                {
                  "name": "リリースノート",
                  "desc": "そのバージョンで何が変わったかをまとめた文書。",
                  "icon": "ic-file"
                }
              ]
            }
          ]
        },
        {
          "id": "oss",
          "page": 15,
          "term": "OSS",
          "subtitle": "世界中の手で育てる、公開されたコード",
          "category": "OSS・オープンソース",
          "icon": "ic-network",
          "oneline": "ソースコードを公開し、誰でも自由に閲覧・改造・再配布してよいソフトウェアのこと。",
          "q1_text": "高価なソフトウェアや、中身がブラックボックスなソフトウェアに。",
          "q2_intro": "企業が作った非公開のソフトウェアを購入し、決められた機能をそのまま使っていた。",
          "q2_table": {
            "col_before": "非公開ソフトウェア",
            "col_after": "OSS",
            "rows": [
              [
                "ソースコード",
                "非公開",
                "公開されていて誰でも読める"
              ],
              [
                "改造",
                "できない",
                "自由に改造・再配布できる"
              ],
              [
                "コスト",
                "購入・ライセンス費用がかかる",
                "多くが無料で使える"
              ],
              [
                "開発体制",
                "1社が管理",
                "世界中の開発者が共同で改善"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-network",
              "cap": "世界中の開発者の知見を活用できる"
            },
            {
              "icon": "ic-file",
              "cap": "中身を読んで学習・改造できる"
            },
            {
              "icon": "ic-rocket",
              "cap": "コントリビュートで恩返しできる"
            }
          ],
          "memo": "OSSにも著作権とライセンスがある。「公開＝何をしてもいい」わけではない点に注意。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "Fork",
                  "desc": "OSSに手を加えるための最初の一歩。",
                  "icon": "ic-network",
                  "page": 3
                },
                {
                  "name": "コントリビュート",
                  "desc": "OSSに改善を還元する行為そのもの。",
                  "icon": "ic-laptop",
                  "page": 16
                }
              ]
            },
            {
              "label": "一緒に覚えたい言葉",
              "items": [
                {
                  "name": "ライセンス",
                  "desc": "そのソフトウェアの利用・改変・再配布のルール。",
                  "icon": "ic-file"
                },
                {
                  "name": "メンテナー",
                  "desc": "OSSプロジェクトの管理・運営を担う人。",
                  "icon": "ic-laptop"
                }
              ]
            }
          ]
        },
        {
          "id": "contribute",
          "page": 16,
          "term": "コントリビュート",
          "subtitle": "使うだけじゃなく、育てる側にまわる一歩",
          "category": "OSS・オープンソース",
          "icon": "ic-laptop",
          "oneline": "OSSなどのプロジェクトに対して、コードやドキュメントの改善を提案・還元すること。",
          "q1_text": "OSSを使うだけで、見つけた改善をプロジェクトに返す流れが弱かった。",
          "q2_intro": "不具合を見つけても、手元だけで直して自分のプロジェクトの中で使っていた。",
          "q2_table": {
            "col_before": "受け取るだけ",
            "col_after": "コントリビュート",
            "rows": [
              [
                "改善の反映先",
                "自分の手元だけ",
                "元のプロジェクト全体"
              ],
              [
                "方法",
                "自己流にファイルを書き換える",
                "ForkしてPull Requestを送る"
              ],
              [
                "恩恵",
                "自分だけが得る",
                "同じ問題で困る全員が得る"
              ],
              [
                "評価",
                "特に残らない",
                "GitHub上に活動履歴として残る"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-laptop",
              "cap": "世界中のユーザーと一緒に育てられる"
            },
            {
              "icon": "ic-cube",
              "cap": "実務経験として実績が形に残る"
            },
            {
              "icon": "ic-scale",
              "cap": "レビューを通じて技術力が伸びる"
            }
          ],
          "memo": "いきなりコードでなくても、誤字修正やドキュメント翻訳から始めるのも立派なコントリビュート。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "Fork",
                  "desc": "コントリビュートの第一歩となる複製。",
                  "icon": "ic-network",
                  "page": 3
                },
                {
                  "name": "OSS",
                  "desc": "コントリビュートの対象になるプロジェクト。",
                  "icon": "ic-network",
                  "page": 15
                }
              ]
            },
            {
              "label": "一緒に覚えたい言葉",
              "items": [
                {
                  "name": "Pull Request",
                  "desc": "変更を提案してレビューしてもらう仕組み。",
                  "icon": "ic-rocket"
                },
                {
                  "name": "Issue",
                  "desc": "バグ報告や要望を管理する場所。",
                  "icon": "ic-monitor"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "number": 2,
      "title": "Webのしくみ",
      "entries": [
        {
          "id": "client",
          "page": 21,
          "term": "Client",
          "subtitle": "「お客さん」だと思っていたら、ブラウザのことだった",
          "category": "ネットワークの基本",
          "icon": "ic-laptop",
          "oneline": "サーバーに要求（リクエスト）を送る側。ブラウザやスマホアプリなど、自分が直接触っている画面のこと。",
          "q1_text": "アプリケーションを「要求する側」と「処理する側」に分けずに設計すると、機能が増えるほど役割の境界があいまいになり、どこで何を処理しているかを追いにくくなっていた。",
          "q2_intro": "システムを役割分担のない一枚岩として扱い、要求する部分と応答する部分を明確に区別していなかった。",
          "q2_table": {
            "col_before": "区別しない頃",
            "col_after": "クライアント/サーバーで理解",
            "rows": [
              [
                "見え方",
                "システム全体がひとかたまり",
                "要求する側＝クライアントと分かる"
              ],
              [
                "実体",
                "漠然としたイメージ",
                "ブラウザ・アプリ・CLI等具体的な形"
              ],
              [
                "役割",
                "切り分けられない",
                "表示・入力・要求の送信を担当"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-laptop",
              "cap": "画面の表示や入力を担当できる"
            },
            {
              "icon": "ic-network",
              "cap": "サーバーに要求を送れる"
            },
            {
              "icon": "ic-scale",
              "cap": "サーバーとの役割分担を説明できる"
            }
          ],
          "memo": "人間ではなくブラウザやアプリを指すと知ってから、先輩との会話がかみ合うようになった。",
          "sidebar_groups": [
            {
              "label": "対になる技術",
              "items": [
                {
                  "name": "Server",
                  "desc": "クライアントからの要求を受け取り、処理して返す側。",
                  "icon": "ic-server",
                  "page": 22
                }
              ]
            },
            {
              "label": "やり取りの中身",
              "items": [
                {
                  "name": "Request",
                  "desc": "クライアントがサーバーに送る依頼のデータ。",
                  "icon": "ic-network",
                  "page": 23
                },
                {
                  "name": "Response",
                  "desc": "サーバーがリクエストに対して返す結果。",
                  "icon": "ic-package",
                  "page": 24
                }
              ]
            }
          ]
        },
        {
          "id": "server",
          "page": 22,
          "term": "Server",
          "subtitle": "「なんかサーバー落ちてるらしい」の\"サーバー\"の正体",
          "category": "ネットワークの基本",
          "icon": "ic-server",
          "oneline": "クライアントからの要求（リクエスト）を受け取り、処理して結果を返す側のプログラムや機械。",
          "q1_text": "1台のマシンの中で要求を受け付ける役割と処理する役割が混在していると、負荷が集中した際にどこがボトルネックかを切り分けにくかった。",
          "q2_intro": "「重い処理をしてくれる場所」という程度の理解にとどまり、担うべき役割が明確に定義されていなかった。",
          "q2_table": {
            "col_before": "ふわっとした理解",
            "col_after": "サーバーの役割で理解",
            "rows": [
              [
                "正体",
                "ブラックボックス",
                "要求を処理して返すプログラム"
              ],
              [
                "形",
                "1台の機械だと思い込む",
                "クラウド上の仮想サーバーのことも多い"
              ],
              [
                "落ちる原因",
                "わからず終い",
                "プロセス停止・リソース枯渇等具体的に絞れる"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-server",
              "cap": "リクエストを受け取って処理できる"
            },
            {
              "icon": "ic-network",
              "cap": "複数のクライアントに同時対応できる"
            },
            {
              "icon": "ic-cloud",
              "cap": "クラウド上でも同じ役割を果たせる"
            }
          ],
          "memo": "サーバーは「場所」ではなく「役割」。",
          "sidebar_groups": [
            {
              "label": "対になる技術",
              "items": [
                {
                  "name": "Client",
                  "desc": "サーバーに要求を送る側。ブラウザやアプリなど。",
                  "icon": "ic-laptop",
                  "page": 21
                }
              ]
            },
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "Request",
                  "desc": "クライアントがサーバーに送る依頼のデータ。",
                  "icon": "ic-network",
                  "page": 23
                }
              ]
            }
          ]
        },
        {
          "id": "request",
          "page": 23,
          "term": "Request",
          "subtitle": "「APIを叩く」の\"叩く\"の中身、それがリクエスト",
          "category": "HTTP通信",
          "icon": "ic-network",
          "oneline": "クライアントがサーバーに送る「これをやってほしい」という依頼のデータ。",
          "q1_text": "通信の内容（宛先・方法・付随データ）を明示的に構造化しないと、送っている情報の全体像を後から追跡できなかった。",
          "q2_intro": "通信は「送れば何となく届くもの」として扱われ、中身の構造が特に定義されていなかった。",
          "q2_table": {
            "col_before": "ブラックボックス操作",
            "col_after": "リクエストとして理解",
            "rows": [
              [
                "意識",
                "画面の変化だけ見る",
                "送っている中身（宛先・内容）を意識する"
              ],
              [
                "中身",
                "わからない",
                "メソッド・URL・ヘッダー・ボディで構成"
              ],
              [
                "デバッグ",
                "勘に頼る",
                "リクエスト内容を確認して原因を特定"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-network",
              "cap": "通信の中身を確認できる"
            },
            {
              "icon": "ic-scribble",
              "cap": "デバッグの手がかりにできる"
            },
            {
              "icon": "ic-file",
              "cap": "API仕様書を読めるようになる"
            }
          ],
          "memo": "リクエストは「お願いの手紙」。",
          "sidebar_groups": [
            {
              "label": "対になる技術",
              "items": [
                {
                  "name": "Response",
                  "desc": "リクエストに対してサーバーが返す結果。",
                  "icon": "ic-package",
                  "page": 24
                }
              ]
            },
            {
              "label": "構成要素",
              "items": [
                {
                  "name": "Header",
                  "desc": "リクエストやレスポンスに添える付加情報。",
                  "icon": "ic-layers",
                  "page": 34
                }
              ]
            }
          ]
        },
        {
          "id": "response",
          "page": 24,
          "term": "Response",
          "subtitle": "エラー画面の裏側で返ってきていた「返事」",
          "category": "HTTP通信",
          "icon": "ic-package",
          "oneline": "サーバーがリクエストに対して返す結果。ステータスコードと中身（ボディ）がセットになっている。",
          "q1_text": "処理結果を単なるデータの塊として返すだけでは、成功したのか失敗したのかをクライアント側が機械的に判断できなかった。",
          "q2_intro": "結果の良し悪しを画面の見た目だけで判断しており、機械が読み取れる形式の情報は用意されていなかった。",
          "q2_table": {
            "col_before": "見た目だけで判断",
            "col_after": "レスポンスの中身で判断",
            "rows": [
              [
                "判断材料",
                "画面の見た目",
                "ステータスコード＋ボディの中身"
              ],
              [
                "原因特定",
                "勘",
                "200番台/400番台/500番台で切り分け"
              ],
              [
                "対応",
                "とりあえず再読み込み",
                "中身を見て原因を絞り込んでから対応"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-package",
              "cap": "結果を正確に受け取れる"
            },
            {
              "icon": "ic-scale",
              "cap": "ステータスコードで切り分けられる"
            },
            {
              "icon": "ic-scribble",
              "cap": "エラーの原因を特定しやすくなる"
            }
          ],
          "memo": "中身（ボディ）だけでなく、頭についている数字（ステータスコード）にも情報が詰まっている。",
          "sidebar_groups": [
            {
              "label": "対になる技術",
              "items": [
                {
                  "name": "Request",
                  "desc": "クライアントがサーバーに送る依頼のデータ。",
                  "icon": "ic-network",
                  "page": 23
                }
              ]
            },
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "HTTP",
                  "desc": "リクエスト・レスポンスをやり取りする共通ルール。",
                  "icon": "ic-layers",
                  "page": 25
                }
              ]
            }
          ]
        },
        {
          "id": "http",
          "page": 25,
          "term": "HTTP",
          "subtitle": "URLの前についてる謎の文字、の正体",
          "category": "通信プロトコル",
          "icon": "ic-layers",
          "oneline": "クライアントとサーバーがリクエスト・レスポンスをやり取りするための共通ルール（プロトコル）。",
          "q1_text": "クライアントとサーバーが異なるメーカー・異なる実装で作られていても通信できるようにするには、共通のやり取りのルールが必要だった。",
          "q2_intro": "通信のたびに実装ごとの独自の手順でやり取りしており、互換性のない方式が乱立していた。",
          "q2_table": {
            "col_before": "ルールを意識しない",
            "col_after": "HTTPというルールで理解",
            "rows": [
              [
                "認識",
                "通信は自動でつながるもの",
                "共通ルールに従ってやり取りしている"
              ],
              [
                "やり取り",
                "なんとなく届く",
                "メソッド・ヘッダーで構造化されている"
              ],
              [
                "トラブル対応",
                "わからず終い",
                "仕様に沿って原因を切り分けられる"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-network",
              "cap": "異なる機器同士でも通信できる"
            },
            {
              "icon": "ic-scale",
              "cap": "構造化されたやり取りができる"
            },
            {
              "icon": "ic-file",
              "cap": "仕様書を読んで理解を深められる"
            }
          ],
          "memo": "ブラウザもサーバーもこのルールに従うから、作ったメーカーが違っても会話が成立する。",
          "sidebar_groups": [
            {
              "label": "発展形",
              "items": [
                {
                  "name": "HTTPS",
                  "desc": "HTTPに暗号化（TLS）を追加した安全な通信。",
                  "icon": "ic-cube",
                  "page": 26
                }
              ]
            },
            {
              "label": "構成要素",
              "items": [
                {
                  "name": "Request",
                  "desc": "クライアントがサーバーに送る依頼のデータ。",
                  "icon": "ic-network",
                  "page": 23
                },
                {
                  "name": "Response",
                  "desc": "サーバーがリクエストに対して返す結果。",
                  "icon": "ic-package",
                  "page": 24
                }
              ]
            }
          ]
        },
        {
          "id": "https",
          "page": 26,
          "term": "HTTPS",
          "subtitle": "「Sがついてるだけ」じゃなかった、鍵マークの意味",
          "category": "通信プロトコル",
          "icon": "ic-cube",
          "oneline": "HTTPの通信をTLSで暗号化したもの。途中で盗み見・改ざんされにくくする仕組み。",
          "q1_text": "通信内容が経路の途中で盗み見・改ざんされる恐れがあり、パスワードやカード番号を安全に送る手段が必要だった。",
          "q2_intro": "HTTPのまま平文でやり取りしており、通信経路上で内容を読み取られたり書き換えられたりする恐れがあった。",
          "q2_table": {
            "col_before": "HTTP（暗号化なし）",
            "col_after": "HTTPS（TLSで暗号化）",
            "rows": [
              [
                "通信内容",
                "素通し・覗き見できる",
                "暗号化されて中身が読めない"
              ],
              [
                "改ざん",
                "途中で書き換えられる恐れ",
                "改ざんされると検知できる"
              ],
              [
                "信頼できるか",
                "見た目では判断できない",
                "証明書で相手が本物か確認できる"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-cube",
              "cap": "通信内容を暗号化できる"
            },
            {
              "icon": "ic-scale",
              "cap": "相手が本物か証明書で確認できる"
            },
            {
              "icon": "ic-network",
              "cap": "改ざんを検知できる"
            }
          ],
          "memo": "中身が見えなくなるだけでなく、宛先が本物かどうかも確認できるようになる。",
          "sidebar_groups": [
            {
              "label": "元になった技術",
              "items": [
                {
                  "name": "HTTP",
                  "desc": "暗号化されていない通信プロトコル。",
                  "icon": "ic-layers",
                  "page": 25
                }
              ]
            },
            {
              "label": "仕組みを支える技術",
              "items": [
                {
                  "name": "TLS",
                  "desc": "HTTPSの暗号化・認証を担う仕組み。",
                  "icon": "ic-cube",
                  "page": 37
                },
                {
                  "name": "SSL証明書",
                  "desc": "通信相手が本物であることを証明する電子証明書。",
                  "icon": "ic-file",
                  "page": 38
                }
              ]
            }
          ]
        },
        {
          "id": "dns",
          "page": 27,
          "term": "DNS",
          "subtitle": "覚えられない数字を、覚えられる名前に変える仕組み",
          "category": "名前解決",
          "icon": "ic-file",
          "oneline": "ドメイン名（www.example.comなど）をIPアドレスに変換する「インターネットの電話帳」。",
          "q1_text": "サーバーの住所であるIPアドレスは数字の羅列で覚えにくく、人間が扱いやすい名前でアクセスできる仕組みが必要だった。",
          "q2_intro": "接続先をIPアドレスの数字で直接指定するしかなく、覚えるにも共有するにも不便だった。",
          "q2_table": {
            "col_before": "名前解決を知らない頃",
            "col_after": "DNSとして理解",
            "rows": [
              [
                "アクセス方法",
                "ドメイン名を打つだけ",
                "裏でIPアドレスに変換されている"
              ],
              [
                "障害時の見え方",
                "なぜか繋がらない、で終わる",
                "名前解決の失敗として切り分けられる"
              ],
              [
                "管理",
                "意識しない",
                "Aレコード・CNAME等設定を理解する"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-file",
              "cap": "名前からIPアドレスを引ける"
            },
            {
              "icon": "ic-network",
              "cap": "覚えやすい名前でアクセスできる"
            },
            {
              "icon": "ic-scribble",
              "cap": "繋がらない原因を切り分けられる"
            }
          ],
          "memo": "人間が覚えやすい名前と、機械が使う住所（IPアドレス）を結びつけてくれる。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "Domain",
                  "desc": "DNSで管理される、覚えやすい名前そのもの。",
                  "icon": "ic-monitor",
                  "page": 28
                },
                {
                  "name": "IP Address",
                  "desc": "DNSが変換した先にある、機械の住所。",
                  "icon": "ic-network",
                  "page": 29
                }
              ]
            }
          ]
        },
        {
          "id": "domain",
          "page": 28,
          "term": "Domain",
          "subtitle": "「ドメイン取った？」の\"ドメイン\"は住所の名前だった",
          "category": "名前解決",
          "icon": "ic-monitor",
          "oneline": "インターネット上の住所（IPアドレス）に付けられた、人間が読める名前。",
          "q1_text": "IPアドレスが変わってもアクセス先を一定に保ちたい、複数のサービスを覚えやすい名前で区別したいという要求があった。",
          "q2_intro": "サービスへのアクセスをIPアドレスの数字に依存しており、サーバーを移設するたびにアクセス方法が変わってしまっていた。",
          "q2_table": {
            "col_before": "名前を意識しない頃",
            "col_after": "ドメインとして理解",
            "rows": [
              [
                "認識",
                "リンクを辿るだけの存在",
                "取得・更新して管理する資産"
              ],
              [
                "構造",
                "ただの文字列",
                "www.example.comのような階層構造"
              ],
              [
                "費用",
                "無料だと思っていた",
                "年単位でレジストラに更新料を払う"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-monitor",
              "cap": "覚えやすい名前で発信できる"
            },
            {
              "icon": "ic-file",
              "cap": "DNSに登録してIPアドレスと紐付けられる"
            },
            {
              "icon": "ic-scale",
              "cap": "自分の名前として管理・更新できる"
            }
          ],
          "memo": "取得しただけでは終わらない。更新を止めると他人に取られる。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "DNS",
                  "desc": "ドメイン名をIPアドレスに変換する仕組み。",
                  "icon": "ic-file",
                  "page": 27
                },
                {
                  "name": "SSL証明書",
                  "desc": "ドメインが本物であることを証明する電子証明書。",
                  "icon": "ic-file",
                  "page": 38
                }
              ]
            }
          ]
        },
        {
          "id": "ip-address",
          "page": 29,
          "term": "IP Address",
          "subtitle": "ドメインの奥にある、本当の\"住所\"",
          "category": "名前解決",
          "icon": "ic-network",
          "oneline": "インターネットに繋がる機器1台1台に割り振られる、数字だけの住所。",
          "q1_text": "インターネットに繋がる無数の機器の中から通信相手を一意に特定する、共通の住所の仕組みが必要だった。",
          "q2_intro": "機器同士の接続先を特定する統一的な方法がなく、ネットワークごとに独自の識別方法に頼っていた。",
          "q2_table": {
            "col_before": "住所を意識しない頃",
            "col_after": "IPアドレスとして理解",
            "rows": [
              [
                "接続の仕組み",
                "なんとなく繋がる",
                "正確な住所を指定して接続している"
              ],
              [
                "種類",
                "区別なし",
                "グローバルIP／プライベートIPの違い"
              ],
              [
                "トラブル対応",
                "原因不明",
                "pingやIPで疎通確認ができる"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-network",
              "cap": "機器を一意に特定できる"
            },
            {
              "icon": "ic-scale",
              "cap": "グローバル/プライベートを区別できる"
            },
            {
              "icon": "ic-scribble",
              "cap": "pingなどで疎通確認ができる"
            }
          ],
          "memo": "ドメイン名はその住所につけた、人間用のあだ名にすぎない。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "DNS",
                  "desc": "ドメイン名をIPアドレスに変換する仕組み。",
                  "icon": "ic-file",
                  "page": 27
                },
                {
                  "name": "Port",
                  "desc": "同じIPアドレスの中で、アプリを区別する番号。",
                  "icon": "ic-cube",
                  "page": 30
                },
                {
                  "name": "NAT",
                  "desc": "プライベートIPとグローバルIPを変換する仕組み。",
                  "icon": "ic-scale",
                  "page": 41
                }
              ]
            }
          ]
        },
        {
          "id": "port",
          "page": 30,
          "term": "Port",
          "subtitle": "`:3000`って何？の答え",
          "category": "名前解決",
          "icon": "ic-cube",
          "oneline": "同じIPアドレス（住所）の中で、どのアプリ・サービス宛かを区別する番号。",
          "q1_text": "1台のサーバーでWebサーバーやメールサーバーなど複数のサービスを同時に動かすには、IPアドレスだけでは宛先を区別できなかった。",
          "q2_intro": "1台のマシンには1つのサービスしか動かせない前提で運用されており、複数サービスを同時提供する方法が確立されていなかった。",
          "q2_table": {
            "col_before": "ポートを意識しない頃",
            "col_after": "ポートとして理解",
            "rows": [
              [
                "宛先の指定",
                "IPアドレスだけで届くと思う",
                "IPアドレス＋ポート番号で届く"
              ],
              [
                "複数サービス",
                "1台1サービスだと思う",
                "同じ機械で複数サービスを同時待受"
              ],
              [
                "トラブル対応",
                "原因不明",
                "ポート番号の衝突・未開放に気づける"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-cube",
              "cap": "同じ機械で複数サービスを区別できる"
            },
            {
              "icon": "ic-network",
              "cap": "アプリ宛にピンポイントで届けられる"
            },
            {
              "icon": "ic-scribble",
              "cap": "衝突や未開放のトラブルに気づける"
            }
          ],
          "memo": "同じ建物でも、部屋番号が違えば全く別のサービスに届く。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "IP Address",
                  "desc": "機器そのものの住所。ポートはその中の区分け。",
                  "icon": "ic-network",
                  "page": 29
                },
                {
                  "name": "TCP",
                  "desc": "ポート番号を使って通信を確立するプロトコル。",
                  "icon": "ic-scale",
                  "page": 35
                }
              ]
            }
          ]
        },
        {
          "id": "cookie",
          "page": 31,
          "term": "Cookie",
          "subtitle": "ログインしっぱなしにできる、あの仕組み",
          "category": "状態管理・認証",
          "icon": "ic-package",
          "oneline": "ブラウザに保存される小さなデータ。サーバーがユーザーを識別するために使う。",
          "q1_text": "HTTPは1回のやり取りごとに関係がリセットされる仕組みのため、ログイン状態などをリクエストをまたいで維持する方法が必要だった。",
          "q2_intro": "リクエストごとに関係がリセットされ、ページを移動するたびにログイン情報などの状態が失われていた。",
          "q2_table": {
            "col_before": "状態を覚える仕組みがない頃",
            "col_after": "Cookieで状態を覚える",
            "rows": [
              [
                "ページ移動",
                "毎回ログアウトされる",
                "ログイン状態を維持できる"
              ],
              [
                "保存場所",
                "なし",
                "ブラウザ側に小さなデータとして保存"
              ],
              [
                "できること",
                "都度ログインが必要",
                "カート内容やログインを継続できる"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-package",
              "cap": "ログイン状態を維持できる"
            },
            {
              "icon": "ic-clock",
              "cap": "一定期間データを保持できる"
            },
            {
              "icon": "ic-scale",
              "cap": "サーバーがユーザーを識別できる"
            }
          ],
          "memo": "CookieはHTTPの「一期一会」を克服する仕組み。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "Session",
                  "desc": "Cookieを使って実現される、ログイン状態などの管理。",
                  "icon": "ic-clock",
                  "page": 32
                },
                {
                  "name": "JWT",
                  "desc": "署名付きトークンでログイン情報を持ち運ぶ方式。",
                  "icon": "ic-scale",
                  "page": 33
                }
              ]
            }
          ]
        },
        {
          "id": "session",
          "page": 32,
          "term": "Session",
          "subtitle": "「セッション切れました」のセッションとは何か",
          "category": "状態管理・認証",
          "icon": "ic-clock",
          "oneline": "ログインから終了までの、ユーザーとサーバーの一連のやり取りをひとまとまりとして管理する仕組み。",
          "q1_text": "Cookieだけでは重要な情報をブラウザ側に平文で持たせることになり、改ざんや漏えいのリスクなくユーザーの状態を管理する方法が必要だった。",
          "q2_intro": "ユーザーの状態を示す情報をすべてブラウザ側のCookieに直接持たせており、内容を書き換えられるリスクがあった。",
          "q2_table": {
            "col_before": "Cookieだけで完結すると思う頃",
            "col_after": "セッションとして理解",
            "rows": [
              [
                "情報の置き場所",
                "ブラウザ（Cookie）だけ",
                "サーバー側にも状態を保持"
              ],
              [
                "Cookieの役割",
                "情報そのものを持つ",
                "セッションIDという鍵だけを持つ"
              ],
              [
                "期限切れ",
                "原因不明で困る",
                "有効期限やログアウトで切れると理解"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-clock",
              "cap": "ログインから終了までを管理できる"
            },
            {
              "icon": "ic-server",
              "cap": "サーバー側で状態を安全に保持できる"
            },
            {
              "icon": "ic-scale",
              "cap": "期限切れの挙動を理解できる"
            }
          ],
          "memo": "鍵（セッションID）だけをブラウザに持たせ、中身はサーバー側で管理する。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "Cookie",
                  "desc": "セッションIDなどを保存する、ブラウザ側の小さなデータ。",
                  "icon": "ic-package",
                  "page": 31
                },
                {
                  "name": "JWT",
                  "desc": "サーバー側に状態を持たない、別の認証情報の持ち方。",
                  "icon": "ic-scale",
                  "page": 33
                }
              ]
            }
          ]
        },
        {
          "id": "jwt",
          "page": 33,
          "term": "JWT",
          "subtitle": "セッションを使わないログイン、の裏側",
          "category": "状態管理・認証",
          "icon": "ic-scale",
          "oneline": "ユーザー情報を署名付きのトークンに詰め込んで持ち運ぶ、サーバー側に状態を持たない認証方式。",
          "q1_text": "サーバーを複数台に増やして負荷分散すると、どのサーバーがリクエストを受けてもログイン状態を判定できる仕組みが必要になった。",
          "q2_intro": "ログイン状態をサーバー側のセッションストアで管理しており、複数サーバー間で情報を共有する仕組みが必要だった。",
          "q2_table": {
            "col_before": "セッション方式",
            "col_after": "JWT",
            "rows": [
              [
                "状態の保持場所",
                "サーバー側（セッションストア）",
                "トークン自体に情報が入っている"
              ],
              [
                "複数サーバー対応",
                "セッション共有の仕組みが必要",
                "トークンさえあればどのサーバーでも検証可能"
              ],
              [
                "改ざん対策",
                "サーバーが正本を持つので安心",
                "署名で改ざんを検知する仕組みが必須"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-scale",
              "cap": "サーバー側に状態を持たず認証できる"
            },
            {
              "icon": "ic-network",
              "cap": "複数サーバー間で認証を共有しやすい"
            },
            {
              "icon": "ic-scribble",
              "cap": "署名で改ざんを検知できる"
            }
          ],
          "memo": "中身は誰でも読めるが、署名があるから偽造や改ざんはすぐバレる。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "Session",
                  "desc": "サーバー側で状態を管理する、もう一つの方式。",
                  "icon": "ic-clock",
                  "page": 32
                },
                {
                  "name": "Cookie",
                  "desc": "JWTをブラウザに保存する際の入れ物としても使われる。",
                  "icon": "ic-package",
                  "page": 31
                },
                {
                  "name": "Header",
                  "desc": "JWTは多くの場合Authorizationヘッダーに載せて送る。",
                  "icon": "ic-layers",
                  "page": 34
                }
              ]
            }
          ]
        },
        {
          "id": "header",
          "page": 34,
          "term": "Header",
          "subtitle": "本文じゃない、荷物の\"送り状\"の部分",
          "category": "HTTP通信",
          "icon": "ic-layers",
          "oneline": "リクエストやレスポンスの本体（ボディ）とは別に付け加える、付加情報の集まり。",
          "q1_text": "本文（データそのもの）とは別に、認証情報やデータ形式などの付加情報を通信のたびにやり取りする仕組みが必要だった。",
          "q2_intro": "やり取りされる情報は本文のみを想定しており、認証情報や形式指定などの付加情報を載せる場所が定義されていなかった。",
          "q2_table": {
            "col_before": "本文だけを意識する頃",
            "col_after": "ヘッダーも意識する",
            "rows": [
              [
                "やり取りする情報",
                "本文（ボディ）だけ",
                "本文＋付加情報（ヘッダー）"
              ],
              [
                "認証情報",
                "どこに入れるか分からない",
                "Authorizationヘッダーに載せる"
              ],
              [
                "トラブル対応",
                "原因が本文しか見えない",
                "Content-Type等ヘッダーからも原因を探れる"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-layers",
              "cap": "本文とは別に情報を付け加えられる"
            },
            {
              "icon": "ic-scale",
              "cap": "認証トークンなどを安全に運べる"
            },
            {
              "icon": "ic-scribble",
              "cap": "通信のトラブルを切り分けやすくなる"
            }
          ],
          "memo": "中身（本文）そのものではなく、宛先や種類・認証情報といった付加情報が書かれている。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "Request",
                  "desc": "ヘッダーが付加される、依頼データそのもの。",
                  "icon": "ic-network",
                  "page": 23
                },
                {
                  "name": "JWT",
                  "desc": "Authorizationヘッダーに載せて送る認証トークン。",
                  "icon": "ic-scale",
                  "page": 33
                }
              ]
            }
          ]
        },
        {
          "id": "tcp",
          "page": 35,
          "term": "TCP",
          "subtitle": "「届いたか確認する」通信、その名前",
          "category": "トランスポート層",
          "icon": "ic-scale",
          "oneline": "データが確実に届いたかを確認しながら通信するプロトコル。信頼性を重視する。",
          "q1_text": "ネットワーク上でデータが途中で失われたり順序が入れ替わったりする中で、送った内容が確実に、正しい順番で届くことを保証する仕組みが必要だった。",
          "q2_intro": "データを送りっぱなしにしており、途中で欠落したり順序が入れ替わったりしても検知・再送する手段がなかった。",
          "q2_table": {
            "col_before": "確認する仕組みを知らない頃",
            "col_after": "TCPとして理解",
            "rows": [
              [
                "届いたかの確認",
                "考えたことがない",
                "受信確認（ACK）をしながら通信する"
              ],
              [
                "順序",
                "気にしていない",
                "送った順番通りに届くよう保証する"
              ],
              [
                "速度と引き換えに",
                "特に意識しない",
                "確認作業がある分、UDPより多少遅い"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-scale",
              "cap": "データの到達を確認しながら送れる"
            },
            {
              "icon": "ic-network",
              "cap": "順序を保証して届けられる"
            },
            {
              "icon": "ic-clock",
              "cap": "信頼性が必要な通信に向いている"
            }
          ],
          "memo": "多少時間がかかっても、確実に・順番通りに届けることを優先する。",
          "sidebar_groups": [
            {
              "label": "対になる技術",
              "items": [
                {
                  "name": "UDP",
                  "desc": "確認を取らず、とにかく速さを優先するプロトコル。",
                  "icon": "ic-rocket",
                  "page": 36
                }
              ]
            },
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "Port",
                  "desc": "TCPが通信相手のアプリを特定するために使う番号。",
                  "icon": "ic-cube",
                  "page": 30
                }
              ]
            }
          ]
        },
        {
          "id": "udp",
          "page": 36,
          "term": "UDP",
          "subtitle": "「確認より速さ」を選んだ通信",
          "category": "トランスポート層",
          "icon": "ic-rocket",
          "oneline": "データが届いたかの確認をせず、とにかく速く送ることを優先するプロトコル。",
          "q1_text": "動画配信やリアルタイム通信では、確認応答による遅延よりも速度が優先され、多少のデータ欠落を許容してでも高速に送る仕組みが求められた。",
          "q2_intro": "TCPのように確認応答を取りながら通信しており、リアルタイム性が求められる用途では確認のオーバーヘッドが遅延として無視できなかった。",
          "q2_table": {
            "col_before": "TCPの発想しか知らない頃",
            "col_after": "UDPとして理解",
            "rows": [
              [
                "届いたかの確認",
                "必ず確認するものだと思う",
                "確認せず送りっぱなしにできる"
              ],
              [
                "速度",
                "確認作業の分、多少遅れると思う",
                "確認がない分、圧倒的に速い"
              ],
              [
                "向いている場面",
                "特に区別しない",
                "動画配信・ゲーム等多少の欠落を許容できる場面"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-rocket",
              "cap": "確認を省いて高速に送れる"
            },
            {
              "icon": "ic-network",
              "cap": "リアルタイム性が求められる通信に向く"
            },
            {
              "icon": "ic-scale",
              "cap": "多少のデータ欠落を許容できる"
            }
          ],
          "memo": "多少荷物が届かなくても、止まらず配り続けることを優先する。",
          "sidebar_groups": [
            {
              "label": "対になる技術",
              "items": [
                {
                  "name": "TCP",
                  "desc": "確認を取りながら確実に届けるプロトコル。",
                  "icon": "ic-scale",
                  "page": 35
                }
              ]
            }
          ]
        },
        {
          "id": "tls",
          "page": 37,
          "term": "TLS",
          "subtitle": "HTTPSの\"S\"の中身を作っている技術",
          "category": "暗号化・証明書",
          "icon": "ic-cube",
          "oneline": "通信を暗号化し、相手が本物であることも確認する仕組み。HTTPSの安全性を支えている。",
          "q1_text": "旧来のSSLに脆弱性が発見され、暗号方式を強化しつつ互換性を保った新しい暗号化の仕組みが必要になった。",
          "q2_intro": "SSLという名称の暗号化方式が使われていたが、既知の脆弱性が積み重なり安全性を維持できなくなっていた。",
          "q2_table": {
            "col_before": "SSL（旧世代）",
            "col_after": "TLS（後継）",
            "rows": [
              [
                "名前",
                "SSL 2.0/3.0",
                "TLS 1.0〜1.3として進化"
              ],
              [
                "安全性",
                "脆弱性が見つかり非推奨に",
                "暗号方式を強化して安全性を維持"
              ],
              [
                "現状の呼び方",
                "慣習で\"SSL証明書\"と呼ばれ続ける",
                "実体はTLSで通信している"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-cube",
              "cap": "通信内容を暗号化できる"
            },
            {
              "icon": "ic-scale",
              "cap": "通信相手が本物か確認できる"
            },
            {
              "icon": "ic-network",
              "cap": "古いバージョンを無効化して安全性を保てる"
            }
          ],
          "memo": "「SSL証明書」という呼び方は残っているが、",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "HTTPS",
                  "desc": "TLSによって暗号化されたHTTP通信。",
                  "icon": "ic-cube",
                  "page": 26
                },
                {
                  "name": "SSL証明書",
                  "desc": "TLS通信で相手の身元を証明する電子証明書。",
                  "icon": "ic-file",
                  "page": 38
                },
                {
                  "name": "Let's Encrypt",
                  "desc": "無料でSSL証明書を発行してくれる認証局。",
                  "icon": "ic-cloud",
                  "page": 39
                }
              ]
            }
          ]
        },
        {
          "id": "ssl-certificate",
          "page": 38,
          "term": "SSL証明書",
          "subtitle": "「証明書の期限切れ」で赤くなる画面の正体",
          "category": "暗号化・証明書",
          "icon": "ic-file",
          "oneline": "サイトの運営者が本物であることを証明する電子証明書。TLS通信で使われる。",
          "q1_text": "通信を暗号化するだけでは、接続先のサーバーが本物かどうかまでは保証できず、なりすましを見抜く手段が必要だった。",
          "q2_intro": "接続先が本物かどうかを、URLの見た目やドメイン名の印象だけで判断するしかなかった。",
          "q2_table": {
            "col_before": "見た目で判断する頃",
            "col_after": "証明書で判断",
            "rows": [
              [
                "本人確認",
                "URLの見た目だけで判断",
                "認証局が発行した証明書で確認"
              ],
              [
                "期限",
                "意識しない",
                "有効期限があり、切れると警告が出る"
              ],
              [
                "取得方法",
                "存在を知らない",
                "認証局に申請、または自動発行サービスを使う"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-file",
              "cap": "サイト運営者の身元を証明できる"
            },
            {
              "icon": "ic-scale",
              "cap": "なりすましサイトと区別できる"
            },
            {
              "icon": "ic-cube",
              "cap": "TLSによる暗号化通信の土台になる"
            }
          ],
          "memo": "期限が切れると「本人確認ができない状態」になるので、ブラウザが警告を出す。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "TLS",
                  "desc": "この証明書を使って暗号化通信を行う仕組み。",
                  "icon": "ic-cube",
                  "page": 37
                },
                {
                  "name": "Let's Encrypt",
                  "desc": "この証明書を無料・自動で発行してくれるサービス。",
                  "icon": "ic-cloud",
                  "page": 39
                }
              ]
            }
          ]
        },
        {
          "id": "lets-encrypt",
          "page": 39,
          "term": "Let's Encrypt",
          "subtitle": "「証明書、無料でいいの？」と最初は疑った",
          "category": "暗号化・証明書",
          "icon": "ic-cloud",
          "oneline": "SSL証明書を無料・自動で発行してくれる認証局。個人開発のサイトも簡単にHTTPS化できる。",
          "q1_text": "SSL証明書の取得に費用と手続きがかかるため、個人サイトや小規模プロジェクトでは常時HTTPS化が後回しにされがちだった。",
          "q2_intro": "SSL証明書は有料の認証局に申請し、書類確認などの手続きを経て取得するものだった。",
          "q2_table": {
            "col_before": "有料・手続き重視の時代",
            "col_after": "Let's Encrypt",
            "rows": [
              [
                "費用",
                "有料が当たり前",
                "無料で発行できる"
              ],
              [
                "発行手続き",
                "書類・審査に時間がかかる",
                "ドメイン所有の自動確認のみで発行"
              ],
              [
                "更新",
                "手動で更新申請",
                "自動更新の仕組みを組める（有効期限は短め）"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-cloud",
              "cap": "無料でSSL証明書を発行できる"
            },
            {
              "icon": "ic-rocket",
              "cap": "発行から設定まで自動化できる"
            },
            {
              "icon": "ic-clock",
              "cap": "個人サイトでも気軽にHTTPS化できる"
            }
          ],
          "memo": "Let's Encryptのおかげで、",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "SSL証明書",
                  "desc": "Let's Encryptが発行してくれる証明書そのもの。",
                  "icon": "ic-file",
                  "page": 38
                },
                {
                  "name": "HTTPS",
                  "desc": "この証明書によって実現される暗号化通信。",
                  "icon": "ic-cube",
                  "page": 26
                }
              ]
            }
          ]
        },
        {
          "id": "vpn",
          "page": 40,
          "term": "VPN",
          "subtitle": "「社内ネットワークに繋いで」と言われて焦った日",
          "category": "ネットワーク構成",
          "icon": "ic-network",
          "oneline": "インターネット上に暗号化された専用の通信路（トンネル）を作り、離れた場所からでも安全に社内ネットワークなどに接続する仕組み。",
          "q1_text": "拠点や自宅など、離れた場所から社内ネットワークへ安全に接続する手段が求められたが、専用線の敷設には多額の費用がかかった。",
          "q2_intro": "社外から社内ネットワークへアクセスするには、専用線を敷設するか、直接出社するしかなかった。",
          "q2_table": {
            "col_before": "専用線・出社前提",
            "col_after": "VPN",
            "rows": [
              [
                "接続方法",
                "専用線の敷設や出社が必要",
                "インターネット経由で仮想的な専用線を作る"
              ],
              [
                "コスト",
                "専用線は高額",
                "ソフトウェアで低コストに実現"
              ],
              [
                "安全性",
                "物理的に隔離されている",
                "暗号化されたトンネルで安全性を確保"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-network",
              "cap": "外部から社内ネットワークに安全に接続できる"
            },
            {
              "icon": "ic-cube",
              "cap": "通信を暗号化してトンネルを作れる"
            },
            {
              "icon": "ic-laptop",
              "cap": "リモートワークでも同じ環境で作業できる"
            }
          ],
          "memo": "公共の道路（インターネット）の中に、覗かれないトンネルを掘るイメージ。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "NAT",
                  "desc": "プライベートIPとグローバルIPを変換する仕組み。",
                  "icon": "ic-scale",
                  "page": 41
                },
                {
                  "name": "Proxy（フォワードプロキシ）",
                  "desc": "クライアントの代わりに通信を中継する仕組み。",
                  "icon": "ic-monitor",
                  "page": 43
                }
              ]
            }
          ]
        },
        {
          "id": "nat",
          "page": 41,
          "term": "NAT",
          "subtitle": "自宅のPCが全部同じ\"グローバルIP\"に見える理由",
          "category": "ネットワーク構成",
          "icon": "ic-scale",
          "oneline": "家庭や社内など、限られた場所だけで使うプライベートIPと、インターネット上のグローバルIPを変換する仕組み。",
          "q1_text": "インターネットに接続する機器の数に対して、割り当て可能なグローバルIPアドレスの数が不足していた。",
          "q2_intro": "接続する機器1台ごとに個別のグローバルIPアドレスを割り当てる前提で運用されていた。",
          "q2_table": {
            "col_before": "1台1グローバルIPだと思う頃",
            "col_after": "NATとして理解",
            "rows": [
              [
                "IPの割り当て",
                "機器ごとに別のグローバルIPが必要",
                "家庭内はプライベートIP、外向きは共通のグローバルIP"
              ],
              [
                "IPアドレス不足",
                "特に意識しない",
                "限られたグローバルIPを節約できる"
              ],
              [
                "見え方",
                "各機器が別々に見えると思う",
                "外からは同じグローバルIPの中の1台に見える"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-scale",
              "cap": "プライベートIPとグローバルIPを変換できる"
            },
            {
              "icon": "ic-network",
              "cap": "限られたグローバルIPを節約できる"
            },
            {
              "icon": "ic-cube",
              "cap": "内部のネットワーク構成を外部から隠せる"
            }
          ],
          "memo": "NATは「マンションの代表電話番号」。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "IP Address",
                  "desc": "NATが変換する対象、プライベート/グローバルの住所。",
                  "icon": "ic-network",
                  "page": 29
                },
                {
                  "name": "サブネット（Subnet）",
                  "desc": "プライベートIPを整理して区切る仕組み。",
                  "icon": "ic-layers",
                  "page": 42
                }
              ]
            }
          ]
        },
        {
          "id": "subnet",
          "page": 42,
          "term": "サブネット（Subnet）",
          "subtitle": "IPアドレスを\"部署ごと\"に区切る発想",
          "category": "ネットワーク構成",
          "icon": "ic-layers",
          "oneline": "1つのネットワークを、用途や部署などの単位で複数の小さなネットワークに分割する仕組み。",
          "q1_text": "ネットワーク全体を1つの区画のまま運用すると、障害の影響範囲が広がりやすく、用途ごとのアクセス制御も難しかった。",
          "q2_intro": "ネットワークを1つの大きな区画としてまとめて管理しており、用途や部署ごとに細かく制御する手段がなかった。",
          "q2_table": {
            "col_before": "1つの大きなネットワーク",
            "col_after": "サブネットで分割",
            "rows": [
              [
                "管理単位",
                "全部まとめて1つ",
                "用途ごと（公開用・非公開用等）に分割"
              ],
              [
                "障害の影響範囲",
                "全体に波及しやすい",
                "範囲を区切って影響を限定できる"
              ],
              [
                "セキュリティ",
                "一律の設定しかできない",
                "区画ごとに細かくアクセス制御できる"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-layers",
              "cap": "ネットワークを用途ごとに分割できる"
            },
            {
              "icon": "ic-scale",
              "cap": "区画ごとにアクセス制御できる"
            },
            {
              "icon": "ic-network",
              "cap": "障害やトラブルの影響範囲を限定できる"
            }
          ],
          "memo": "全員を1フロアに詰め込まず、部署ごとに区切ることで管理しやすくする。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "IP Address",
                  "desc": "サブネットが分割の対象とする住所そのもの。",
                  "icon": "ic-network",
                  "page": 29
                },
                {
                  "name": "NAT",
                  "desc": "プライベートIPとグローバルIPを変換する仕組み。",
                  "icon": "ic-scale",
                  "page": 41
                }
              ]
            }
          ]
        },
        {
          "id": "proxy",
          "page": 43,
          "term": "Proxy（フォワードプロキシ）",
          "compact": true,
          "subtitle": "「社内からは直接アクセスできません」の理由",
          "category": "ネットワーク構成",
          "icon": "ic-monitor",
          "oneline": "クライアントの代わりにインターネットへアクセスし、結果を取り次いでくれる中継役のサーバー。",
          "q1_text": "社内の全端末から個別に外部へ直接アクセスすると、アクセス制御やログ管理を端末ごとに行う必要があり、統制が取れなかった。",
          "q2_intro": "クライアントがそれぞれ直接インターネット上のサーバーに接続しており、アクセス制御やキャッシュを一括で行う仕組みがなかった。",
          "q2_table": {
            "col_before": "直接接続しか知らない頃",
            "col_after": "プロキシを経由すると理解",
            "rows": [
              [
                "接続経路",
                "クライアントから直接サーバーへ",
                "クライアント→プロキシ→サーバーと中継"
              ],
              [
                "メリット",
                "特に意識しない",
                "アクセス制御・キャッシュ・匿名化ができる"
              ],
              [
                "見え方",
                "個々の機器がそのまま外に見える",
                "外からはプロキシだけが見える"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-monitor",
              "cap": "クライアントの代わりに通信を中継できる"
            },
            {
              "icon": "ic-scale",
              "cap": "アクセス制限やログ管理をまとめて行える"
            },
            {
              "icon": "ic-cube",
              "cap": "内部のクライアント構成を外部から隠せる"
            }
          ],
          "memo": "社員（クライアント）は直接取引先に行かず、窓口（プロキシ）を通して外部とやり取りする。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "VPN",
                  "desc": "暗号化されたトンネルで社内ネットワークに接続する仕組み。",
                  "icon": "ic-network",
                  "page": 40
                },
                {
                  "name": "NAT",
                  "desc": "プライベートIPとグローバルIPを変換する仕組み。",
                  "icon": "ic-scale",
                  "page": 41
                }
              ]
            }
          ]
        },
        {
          "id": "intranet",
          "page": 44,
          "term": "イントラネット",
          "subtitle": "インターネットの「社内版」閉じた世界",
          "category": "ネットワーク構成",
          "icon": "ic-network",
          "oneline": "インターネットと同じ技術を使いながら、社内など限られた範囲だけで閉じたネットワークのこと。",
          "q1_text": "社外に出せない情報を、社内だけで安全に共有するネットワークが必要になった。",
          "q2_intro": "紙や社内サーバの共有フォルダだけで情報を回しており、Webの便利さは社外のサイトだけのものだった。",
          "q2_table": {
            "col_before": "閉じた共有だけだった頃",
            "col_after": "イントラネットがある世界",
            "rows": [
              [
                "情報の置き場",
                "紙・共有フォルダ・口頭",
                "社内Web・ポータルで参照"
              ],
              [
                "アクセス範囲",
                "物理的に社内にいる人だけ",
                "認証付きで社内網から閲覧"
              ],
              [
                "更新のしやすさ",
                "配布や貼り替えが必要",
                "ページを直せばすぐ反映"
              ],
              [
                "外との関係",
                "社外ネットとは別物",
                "同じWeb技術で内側だけ閉じる"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-monitor",
              "cap": "社内向けのWebサービスを置ける"
            },
            {
              "icon": "ic-scale",
              "cap": "部外者に見せずに情報共有できる"
            },
            {
              "icon": "ic-network",
              "cap": "インターネットと同じ技術で学べる"
            }
          ],
          "memo": "社内Wikiや勤怠システムはだいたいこの世界の住人。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "VPN",
                  "desc": "外からイントラネットへ安全に入るトンネル。",
                  "icon": "ic-network",
                  "page": 40
                },
                {
                  "name": "Proxy",
                  "desc": "社内から外へ出るときの中継役。",
                  "icon": "ic-monitor",
                  "page": 43
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "number": 3,
      "title": "データフォーマット",
      "entries": [
        {
          "id": "json",
          "page": 51,
          "term": "JSON",
          "subtitle": "「閉じタグの海」から抜け出したデータの書き方",
          "category": "データフォーマット",
          "icon": "ic-file",
          "oneline": "{ }と[ ]だけで表現する、JavaScriptのオブジェクトそのままの見た目のデータ形式。",
          "q1_text": "APIやシステム間でのデータ交換にXMLを使うと、開始・終了タグの記述量が多くなり、パース処理も複雑になりがちだった。より簡潔に書けるデータ形式が求められていた。",
          "q2_intro": "2000年代まではXMLで構造化データをやりとりするのが主流だった。",
          "q2_table": {
            "col_before": "XML",
            "col_after": "JSON",
            "rows": [
              [
                "書き方",
                "開始・終了タグが必須",
                "{ } と [ ] だけ"
              ],
              [
                "読みやすさ",
                "ネストが深いと追いづらい",
                "JSのオブジェクトと同じ感覚"
              ],
              [
                "パース",
                "専用パーサーが必要",
                "JSならそのまま扱える"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-file",
              "cap": "設定やAPIレスポンスを簡潔に表現"
            },
            {
              "icon": "ic-network",
              "cap": "言語をまたいでそのままやりとり"
            },
            {
              "icon": "ic-scale",
              "cap": "配列とオブジェクトだけで大抵表現できる"
            }
          ],
          "memo": "JSONは「JavaScript Object Notation」の略。",
          "sidebar_groups": [
            {
              "label": "比較する技術",
              "items": [
                {
                  "name": "XML",
                  "desc": "タグで構造を表現する古参フォーマット。今も設定や仕様書で現役。",
                  "icon": "ic-layers",
                  "page": 54
                },
                {
                  "name": "YAML",
                  "desc": "インデントで構造を表す、設定ファイル向けの書き方。",
                  "icon": "ic-scribble",
                  "page": 52
                }
              ]
            },
            {
              "label": "よく使う場面",
              "items": [
                {
                  "name": "API",
                  "desc": "JSONはAPIのレスポンス形式として最も広く使われている。",
                  "icon": "ic-network",
                  "page": 61
                }
              ]
            }
          ]
        },
        {
          "id": "yaml",
          "page": 52,
          "term": "YAML",
          "subtitle": "インデントだけで構造を語る、設定ファイルの定番",
          "category": "データフォーマット",
          "icon": "ic-scribble",
          "oneline": "波括弧を使わず、インデント（字下げ）だけで階層構造を表現するデータ形式。",
          "q1_text": "設定ファイルをJSONで書くとコメントを残せず、括弧やカンマの対応関係も見落としやすかった。人が手で書きやすく、意図を書き添えられる設定形式が求められた。",
          "q2_intro": "JSONでも設定は書けるが、コメントが書けず、括弧やカンマの数え間違いも起きやすい。",
          "q2_table": {
            "col_before": "JSON",
            "col_after": "YAML",
            "rows": [
              [
                "見た目",
                "{ } と , が並ぶ",
                "インデントのみ"
              ],
              [
                "コメント",
                "書けない",
                "# で書ける"
              ],
              [
                "向いている場面",
                "APIのレスポンス",
                "手で書く設定ファイル"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-scribble",
              "cap": "手書きしやすい設定ファイルが書ける"
            },
            {
              "icon": "ic-pen",
              "cap": "コメントを残しながら設定できる"
            },
            {
              "icon": "ic-layers",
              "cap": "GitHub ActionsやCIの定義に使われる"
            }
          ],
          "memo": "YAMLは「YAML Ain't Markup Language」の再帰的な略称。",
          "sidebar_groups": [
            {
              "label": "比較する技術",
              "items": [
                {
                  "name": "JSON",
                  "desc": "括弧で構造を表すデータ形式。APIレスポンスで定番。",
                  "icon": "ic-file",
                  "page": 51
                },
                {
                  "name": "TOML",
                  "desc": "YAMLよりシンプルな階層表現を目指した設定形式。",
                  "icon": "ic-pen",
                  "page": 53
                }
              ]
            }
          ]
        },
        {
          "id": "toml",
          "page": 53,
          "term": "TOML",
          "subtitle": "「インデントミスに悩みたくない」から生まれた設定形式",
          "category": "データフォーマット",
          "icon": "ic-pen",
          "oneline": "key = value の並びで設定を書く、あいまいさの少ないシンプルな設定ファイル形式。",
          "q1_text": "パッケージ管理ツールの設定ファイルには、複雑な入れ子構造よりも誰が読んでも一意に解釈できるシンプルな記法が向いていた。あいまいさの少ない設定形式が求められた。",
          "q2_intro": "YAMLは表現力が高い分、インデントの深さやリストの書き方に複数の流儀があり、ツールによって解釈が割れることがあった。",
          "q2_table": {
            "col_before": "YAML",
            "col_after": "TOML",
            "rows": [
              [
                "書き方の自由度",
                "高い（複数の書き方がある）",
                "低い（迷いにくい）"
              ],
              [
                "ネスト表現",
                "インデントで表現",
                "[section] で区切る"
              ],
              [
                "向いている場面",
                "複雑な設定・CI定義",
                "ツールの設定ファイル1枚"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-pen",
              "cap": "key = value で直感的に書ける"
            },
            {
              "icon": "ic-package",
              "cap": "Cargo.tomlなどパッケージ設定の定番"
            },
            {
              "icon": "ic-scale",
              "cap": "書き方のブレが少なく読み間違えにくい"
            }
          ],
          "memo": "名前の通り「誰が読んでも解釈がブレない」ことを目指して設計されている。",
          "sidebar_groups": [
            {
              "label": "比較する技術",
              "items": [
                {
                  "name": "YAML",
                  "desc": "インデントで階層構造を表す設定ファイル形式。",
                  "icon": "ic-scribble",
                  "page": 52
                },
                {
                  "name": "JSON",
                  "desc": "括弧で構造を表すデータ形式。プログラムからの生成向き。",
                  "icon": "ic-file",
                  "page": 51
                }
              ]
            }
          ]
        },
        {
          "id": "xml",
          "page": 54,
          "term": "XML",
          "subtitle": "今も現役の「タグで語る」データ形式",
          "category": "データフォーマット",
          "icon": "ic-layers",
          "oneline": "<tag>で囲んでデータの意味を表現する、開始・終了タグが特徴のマークアップ形式。",
          "q1_text": "システム間でデータをやり取りする際、値だけでなく意味や階層構造まで一緒に表現できる、共通のマークアップ形式が求められていた。",
          "q2_intro": "JSONが普及する前は、Web APIも設定ファイルもXMLで書くのが当たり前だった。",
          "q2_table": {
            "col_before": "XML登場前（プレーンテキスト等）",
            "col_after": "XML",
            "rows": [
              [
                "構造の表現",
                "決まったルールがない",
                "タグで階層と属性を表現"
              ],
              [
                "検証",
                "独自ルールで確認",
                "スキーマ（DTD/XSD）で検証できる"
              ],
              [
                "今の立ち位置",
                "—",
                "設定・帳票・SOAP系APIで現役"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-layers",
              "cap": "タグ名だけで意味が伝わる可読性"
            },
            {
              "icon": "ic-scale",
              "cap": "スキーマで構造を厳密に検証できる"
            },
            {
              "icon": "ic-file",
              "cap": "帳票やドキュメント形式として今も現役"
            }
          ],
          "memo": "JSONの台頭でAPIの主役の座は譲ったが、",
          "sidebar_groups": [
            {
              "label": "比較する技術",
              "items": [
                {
                  "name": "JSON",
                  "desc": "括弧で構造を表す軽量なデータ形式。今のAPIの主流。",
                  "icon": "ic-file",
                  "page": 51
                },
                {
                  "name": "スキーマ（Schema）",
                  "desc": "データの形を定義し、正しいかどうかを検証する仕組み。",
                  "icon": "ic-scale",
                  "page": 56
                }
              ]
            }
          ]
        },
        {
          "id": "csv",
          "page": 55,
          "term": "CSV",
          "subtitle": "Excelとの橋渡し役、カンマ区切りの素朴な形式",
          "category": "データフォーマット",
          "icon": "ic-file",
          "oneline": "値をカンマ（,）で区切って1行1レコードを表す、最もシンプルな表形式のデータ形式。",
          "q1_text": "表形式のデータをExcelやスプレッドシートでそのまま開けるようにするには、JSONやXMLのような入れ子構造を持たない、単純な区切り文字形式が必要だった。",
          "q2_intro": "JSONやXMLのような入れ子構造を表すデータ形式に対して、CSVは表形式のデータをそのまま渡したいときに使われる。",
          "q2_table": {
            "col_before": "JSON",
            "col_after": "CSV",
            "rows": [
              [
                "構造",
                "入れ子（ネスト）を表現できる",
                "1行1レコードの平坦な表のみ"
              ],
              [
                "開きやすさ",
                "エディタやコードで確認",
                "Excelやスプレッドシートでそのまま開ける"
              ],
              [
                "向いている場面",
                "APIのレスポンス",
                "ダウンロードデータ・大量データの受け渡し"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-file",
              "cap": "Excelやスプレッドシートでそのまま開ける"
            },
            {
              "icon": "ic-package",
              "cap": "大量データの入出力・ダウンロードに使う"
            },
            {
              "icon": "ic-scale",
              "cap": "仕組みが単純で他システムとも連携しやすい"
            }
          ],
          "memo": "値の中にカンマや改行があると引用符で囲む必要があり、単純に見えて実は細かいルールがある。",
          "sidebar_groups": [
            {
              "label": "比較する技術",
              "items": [
                {
                  "name": "JSON",
                  "desc": "括弧で構造を表す軽量なデータ形式。ネスト構造も表現できる。",
                  "icon": "ic-file",
                  "page": 51
                }
              ]
            }
          ]
        },
        {
          "id": "schema",
          "page": 56,
          "term": "スキーマ（Schema）",
          "subtitle": "「このデータ、形は合ってる？」に答える設計図",
          "category": "データフォーマット",
          "icon": "ic-scale",
          "oneline": "データがどんな項目を持ち、どんな型・制約であるべきかを定義した\"データの設計図\"。",
          "q1_text": "サーバーに送られてくるデータの形式が保証されていないと、必須項目の欠落や型の不一致に気づけず、エラーが起きてから原因を調べることになっていた。データの形をあらかじめ定義しておく仕組みが必要だった。",
          "q2_intro": "スキーマがない状態では、データの形が正しいかどうかを目視やその場しのぎのif文で確認するしかなかった。",
          "q2_table": {
            "col_before": "スキーマなし",
            "col_after": "スキーマあり",
            "rows": [
              [
                "形式チェック",
                "目視やif文で都度確認",
                "定義に沿って自動で検証"
              ],
              [
                "ドキュメント",
                "コードを読まないと分からない",
                "スキーマ自体が仕様書になる"
              ],
              [
                "変更の影響",
                "気づかず壊れることがある",
                "違反がすぐエラーとして分かる"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-scale",
              "cap": "データの形を自動で検証できる"
            },
            {
              "icon": "ic-file",
              "cap": "必須項目・型・制約を明文化できる"
            },
            {
              "icon": "ic-network",
              "cap": "DBやAPI、設定ファイルなど幅広く使う"
            }
          ],
          "memo": "スキーマはDBのテーブル定義だけでなく、",
          "sidebar_groups": [
            {
              "label": "関連する語",
              "items": [
                {
                  "name": "XML",
                  "desc": "タグで構造を表現するデータ形式。DTD/XSDというスキーマ機構を持つ。",
                  "icon": "ic-layers",
                  "page": 54
                },
                {
                  "name": "OpenAPI",
                  "desc": "APIの入出力の形をスキーマとして定義する仕様。",
                  "icon": "ic-file",
                  "page": 65
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "number": 4,
      "title": "API",
      "entries": [
        {
          "id": "api",
          "page": 61,
          "term": "API",
          "subtitle": "「画面を見せずに機能だけ貸す」ための窓口",
          "category": "API",
          "icon": "ic-network",
          "oneline": "アプリやサービス同士が、決められたルールに沿ってやり取りするための\"窓口\"。",
          "q1_text": "外部サービスの機能やデータを自分のアプリから利用したいとき、画面をスクレイピングする以外に構造化された取得手段がなかった。",
          "q2_intro": "外部のサービスが持つ機能やデータを使いたいとき、以前は画面ごと取り込む（スクレイピング）しかなかった。",
          "q2_table": {
            "col_before": "画面のスクレイピング",
            "col_after": "API",
            "rows": [
              [
                "取得する対象",
                "見た目込みのHTML全体",
                "必要なデータだけ"
              ],
              [
                "安定性",
                "デザイン変更で簡単に壊れる",
                "仕様が変わらない限り安定"
              ],
              [
                "やり取りの形",
                "人が読む前提のページ",
                "プログラムが読む前提のデータ"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-network",
              "cap": "他社のサービスの機能をそのまま使える"
            },
            {
              "icon": "ic-scale",
              "cap": "決まったルールでデータだけをやり取り"
            },
            {
              "icon": "ic-cloud",
              "cap": "フロントとサーバーの間の窓口にもなる"
            }
          ],
          "memo": "「プログラム同士が会話するための窓口」くらいに考えるとイメージしやすい。",
          "sidebar_groups": [
            {
              "label": "関連する語",
              "items": [
                {
                  "name": "Endpoint",
                  "desc": "APIの窓口の中の、個別の入り口となるURL。",
                  "icon": "ic-network",
                  "page": 62
                },
                {
                  "name": "REST",
                  "desc": "APIの設計スタイルの1つ。URLと動詞で操作を表す。",
                  "icon": "ic-server",
                  "page": 63
                },
                {
                  "name": "GraphQL",
                  "desc": "必要なデータだけを1回で取得できるAPIの仕組み。",
                  "icon": "ic-cube",
                  "page": 64
                }
              ]
            }
          ]
        },
        {
          "id": "endpoint",
          "page": 62,
          "term": "Endpoint",
          "subtitle": "APIという建物の、それぞれの「入り口」",
          "category": "API",
          "icon": "ic-network",
          "oneline": "APIの中で、特定の機能やデータにアクセスするための個別のURL。",
          "q1_text": "APIを1つの窓口としてまとめて捉えると、機能ごとにどこへリクエストを送ればよいかが分かりにくく、個々の入り口を明確に区別する必要があった。",
          "q2_intro": "APIを「1つの大きな窓口」とだけ捉えていると、実際にどこにリクエストを送ればいいのか迷う。",
          "q2_table": {
            "col_before": "APIをひとまとめに捉える",
            "col_after": "Endpointという単位で捉える",
            "rows": [
              [
                "粒度",
                "サービス全体",
                "機能ごとのURL（/users, /posts等）"
              ],
              [
                "見つけ方",
                "ドキュメントを一から読む",
                "仕様書で機能とURLが対応している"
              ],
              [
                "変更の影響",
                "APIが変わったと大雑把に捉える",
                "どのエンドポイントが変わったか特定できる"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-network",
              "cap": "機能ごとにURLを分けて設計できる"
            },
            {
              "icon": "ic-file",
              "cap": "/users や /posts のような単位で管理"
            },
            {
              "icon": "ic-scale",
              "cap": "ドキュメントやログでも扱いやすい単位"
            }
          ],
          "memo": "エンドポイントは「APIの中の1つの窓口」というイメージ。",
          "sidebar_groups": [
            {
              "label": "関連する語",
              "items": [
                {
                  "name": "API",
                  "desc": "アプリ同士がやり取りするための窓口全体。",
                  "icon": "ic-network",
                  "page": 61
                },
                {
                  "name": "slug",
                  "desc": "URLの一部に使われる、人にも読める識別子。",
                  "icon": "ic-pen",
                  "page": 67
                },
                {
                  "name": "REST",
                  "desc": "URLと動詞で操作を表現するAPI設計スタイル。",
                  "icon": "ic-server",
                  "page": 63
                }
              ]
            }
          ]
        },
        {
          "id": "rest",
          "page": 63,
          "term": "REST",
          "subtitle": "URLと動詞だけで意味を伝えるAPI設計の作法",
          "category": "API",
          "icon": "ic-server",
          "oneline": "URL（名詞）とHTTPメソッド（動詞）の組み合わせで、操作の意味を表現するAPI設計のスタイル。",
          "q1_text": "APIの設計者ごとにURLの命名や動詞の使い方がバラバラだと、規模が大きくなるほど一貫性が失われ、他の開発者が理解しづらくなっていた。",
          "q2_intro": "RESTを意識しない設計では、操作ごとにURLをその都度考えて命名することになり、統一感がなくなりがちだった。",
          "q2_table": {
            "col_before": "RESTを意識しないAPI",
            "col_after": "REST",
            "rows": [
              [
                "URL設計",
                "/getUser, /deleteUser 等動詞混じり",
                "/users のように名詞のみ"
              ],
              [
                "操作の表現",
                "URLの中に動詞を書く",
                "GET/POST/PUT/DELETE等HTTPメソッドで表現"
              ],
              [
                "一貫性",
                "設計者ごとにルールがブレる",
                "リソース単位で統一しやすい"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-server",
              "cap": "URLをリソース（名詞）だけで設計できる"
            },
            {
              "icon": "ic-network",
              "cap": "HTTPメソッドで操作の意味を表現"
            },
            {
              "icon": "ic-scale",
              "cap": "設計者が変わってもルールがブレにくい"
            }
          ],
          "memo": "RESTは設計思想の名前。実務では「URLは名詞、操作はHTTPメソッドで」で十分。",
          "sidebar_groups": [
            {
              "label": "比較する技術",
              "items": [
                {
                  "name": "GraphQL",
                  "desc": "必要なデータだけを1つのエンドポイントで取得できる設計。",
                  "icon": "ic-cube",
                  "page": 64
                }
              ]
            },
            {
              "label": "関連する語",
              "items": [
                {
                  "name": "Endpoint",
                  "desc": "RESTのURL設計の対象になる、個々の入り口。",
                  "icon": "ic-network",
                  "page": 62
                },
                {
                  "name": "Status Code",
                  "desc": "REST APIのレスポンスで結果を伝える3桁の数字。",
                  "icon": "ic-monitor",
                  "page": 66
                }
              ]
            }
          ]
        },
        {
          "id": "graphql",
          "page": 64,
          "term": "GraphQL",
          "subtitle": "「欲しいデータだけちょうだい」を叶えるAPIの仕組み",
          "category": "API",
          "icon": "ic-cube",
          "oneline": "欲しい項目だけを指定して、1回のリクエストでまとめて取得できるAPIの問い合わせ言語。",
          "q1_text": "画面に必要なデータを揃えるためにREST APIを複数回呼び出す実装では、リクエスト回数が増え、過不足のあるデータが返ってくることも多かった。",
          "q2_intro": "RESTでは、1つのエンドポイントが返すデータの形はあらかじめ固定されている。",
          "q2_table": {
            "col_before": "REST",
            "col_after": "GraphQL",
            "rows": [
              [
                "取得できるデータ",
                "エンドポイントごとに固定",
                "欲しい項目だけ自分で指定"
              ],
              [
                "リクエスト回数",
                "画面に必要な分だけ複数回",
                "1回のリクエストでまとめて取得"
              ],
              [
                "過不足",
                "使わない項目まで返ってくることがある",
                "過不足なく必要な分だけ返る"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-cube",
              "cap": "必要な項目だけを指定して取得できる"
            },
            {
              "icon": "ic-network",
              "cap": "複数のリソースを1回のリクエストで取得"
            },
            {
              "icon": "ic-scale",
              "cap": "型（スキーマ）でデータの形が保証される"
            }
          ],
          "memo": "1つのURLに欲しいデータの形を送る。RESTと優劣より、画面の複雑さで使い分ける。",
          "sidebar_groups": [
            {
              "label": "比較する技術",
              "items": [
                {
                  "name": "REST",
                  "desc": "URLと動詞で操作を表現するAPI設計スタイル。",
                  "icon": "ic-server",
                  "page": 63
                }
              ]
            },
            {
              "label": "関連する語",
              "items": [
                {
                  "name": "スキーマ（Schema）",
                  "desc": "GraphQLでもデータの形を定義するために使われる。",
                  "icon": "ic-scale",
                  "page": 56
                }
              ]
            }
          ]
        },
        {
          "id": "openapi",
          "page": 65,
          "term": "OpenAPI",
          "subtitle": "「口頭で伝えていたAPI仕様」をファイルにした約束事",
          "category": "API",
          "icon": "ic-file",
          "oneline": "APIのエンドポイントや入出力の形を、YAMLやJSONで記述する仕様のフォーマット。",
          "q1_text": "API仕様が文書化されていない現場では、フロントエンドとバックエンドの間でレスポンス形式のすり合わせを、その都度コードを読んで行う必要があった。",
          "q2_intro": "OpenAPIがない現場では、API仕様はドキュメントに手書きするか、コードを読んで確認するしかなかった。",
          "q2_table": {
            "col_before": "手書きの仕様書・口頭確認",
            "col_after": "OpenAPI",
            "rows": [
              [
                "仕様の形",
                "Wordやスプレッドシートに個別記述",
                "決まったフォーマット（YAML/JSON）"
              ],
              [
                "実装との整合",
                "更新を忘れて仕様と実装がズレる",
                "ツールで検証・モックまで生成できる"
              ],
              [
                "共有のしやすさ",
                "ファイルを都度共有",
                "Swagger UI等でそのまま閲覧できる"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-file",
              "cap": "API仕様を1つのファイルにまとめられる"
            },
            {
              "icon": "ic-monitor",
              "cap": "Swagger UIなどでブラウザから確認できる"
            },
            {
              "icon": "ic-package",
              "cap": "モックサーバーやクライアントコードを自動生成"
            }
          ],
          "memo": "元はSwagger。API仕様をコードと同じ形式で管理できるのが強み。",
          "sidebar_groups": [
            {
              "label": "関連する語",
              "items": [
                {
                  "name": "API",
                  "desc": "OpenAPIはこのAPIの仕様を記述するためのフォーマット。",
                  "icon": "ic-network",
                  "page": 61
                },
                {
                  "name": "スキーマ（Schema）",
                  "desc": "OpenAPIの中でリクエスト・レスポンスの形を定義する仕組み。",
                  "icon": "ic-scale",
                  "page": 56
                }
              ]
            }
          ]
        },
        {
          "id": "status_code",
          "page": 66,
          "term": "Status Code",
          "subtitle": "サーバーが返す「結果の一言」を数字にしたもの",
          "category": "API",
          "icon": "ic-monitor",
          "oneline": "リクエストの結果が成功か失敗か、失敗ならどんな理由かを伝える3桁の数字。",
          "q1_text": "エラーの内容をレスポンス本文の文章だけで判断していると、成功・失敗の区別や原因の特定に毎回時間がかかっていた。",
          "q2_intro": "ステータスコードを見ない・意識しない実装では、エラーの原因を毎回レスポンスの中身の文章だけから推測するしかない。",
          "q2_table": {
            "col_before": "本文のメッセージだけで判断",
            "col_after": "Status Codeで判断",
            "rows": [
              [
                "成功／失敗の判定",
                "文章を読んで解釈",
                "200番台か400/500番台かで機械的に判定"
              ],
              [
                "原因の切り分け",
                "都度サーバーログを確認",
                "404=見つからない、401=未認証等型で分かる"
              ],
              [
                "実装のしやすさ",
                "文字列を都度パースして分岐",
                "ステータスコードで分岐処理を書ける"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-monitor",
              "cap": "成功／失敗を数字だけで機械的に判定"
            },
            {
              "icon": "ic-network",
              "cap": "404や500など原因の見当がつく"
            },
            {
              "icon": "ic-scale",
              "cap": "フロント側で分岐処理を書きやすい"
            }
          ],
          "memo": "200番台は成功、300番台はリダイレクト、400番台はリクエスト側のミス、500番台はサーバー側の問題、とざっくり覚えておくだけでも十分役に立つ。",
          "sidebar_groups": [
            {
              "label": "関連する語",
              "items": [
                {
                  "name": "REST",
                  "desc": "Status CodeはREST APIのレスポンスで結果を伝える手段。",
                  "icon": "ic-server",
                  "page": 63
                }
              ]
            }
          ]
        },
        {
          "id": "slug",
          "page": 67,
          "term": "slug",
          "subtitle": "URLの中に生きる、人が読める識別子",
          "category": "API",
          "icon": "ic-pen",
          "oneline": "記事やページを識別するために使う、URLに埋め込める短い文字列（例: /posts/how-to-use-docker）。",
          "q1_text": "記事やページのURLを数字のIDだけで構成すると、人間にもクローラーにも内容が伝わらず、検索結果での見え方にも不利だった。",
          "q2_intro": "IDだけをURLに使っていると、人間にもクローラーにもそのページの中身が伝わらない。",
          "q2_table": {
            "col_before": "IDだけのURL",
            "col_after": "slugを使ったURL",
            "rows": [
              [
                "見た目",
                "/posts/1024",
                "/posts/how-to-use-docker"
              ],
              [
                "人への伝わりやすさ",
                "中身が推測できない",
                "タイトルの内容が一目で分かる"
              ],
              [
                "SEOへの影響",
                "キーワードが含まれない",
                "URLにもキーワードが含まれる"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-pen",
              "cap": "URLに人が読める文字列を埋め込める"
            },
            {
              "icon": "ic-network",
              "cap": "Endpointの一部として識別子に使える"
            },
            {
              "icon": "ic-scale",
              "cap": "SEOやシェア時の見た目が改善する"
            }
          ],
          "memo": "slugは基本的に「小文字・半角英数・ハイフン区切り」で作るのが定番。",
          "sidebar_groups": [
            {
              "label": "関連する語",
              "items": [
                {
                  "name": "Endpoint",
                  "desc": "slugはエンドポイントのURLの一部として使われることが多い。",
                  "icon": "ic-network",
                  "page": 62
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "number": 5,
      "title": "通信プロトコル",
      "entries": [
        {
          "id": "grpc",
          "page": 71,
          "term": "gRPC",
          "subtitle": "サーバー同士の会話をHTTPより速く・厳密にする通信方式",
          "category": "通信プロトコル",
          "icon": "ic-rocket",
          "oneline": "Googleが開発した、サーバー同士の内部通信を高速かつ型安全に行うための通信の仕組み。",
          "q1_text": "マイクロサービス間の通信でJSON形式のREST APIを多用すると、サービス数が増えるほど通信量・処理コストが積み重なり、パフォーマンスが課題になっていた。",
          "q2_intro": "これまでのHTTPリクエスト/レスポンス型の通信（Ch2で扱ったもの）は、人が読めるテキスト（JSON等）でやり取りするため分かりやすい反面、データ量や速度の面で不利になることがあった。",
          "q2_table": {
            "col_before": "HTTP + JSON",
            "col_after": "gRPC",
            "rows": [
              [
                "データ形式",
                "人が読めるテキスト（JSON）",
                "バイナリ形式（Protocol Buffers）"
              ],
              [
                "速度・データ量",
                "比較的大きく遅い",
                "軽量で高速"
              ],
              [
                "向いている場面",
                "ブラウザとのやり取り",
                "サーバー同士の内部通信"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-rocket",
              "cap": "バイナリ形式で高速に通信できる"
            },
            {
              "icon": "ic-server",
              "cap": "マイクロサービス間の通信に向いている"
            },
            {
              "icon": "ic-scale",
              "cap": "スキーマ（型定義）から複数言語のコードを生成"
            }
          ],
          "memo": "主にサーバー同士の通信向き。画面APIはREST/GraphQL、裏側はgRPC、の使い分けも多い。",
          "sidebar_groups": [
            {
              "label": "関連する語",
              "items": [
                {
                  "name": "REST",
                  "desc": "URLと動詞で操作を表現する、人にも読みやすいAPI設計。",
                  "icon": "ic-server",
                  "page": 63
                },
                {
                  "name": "スキーマ（Schema）",
                  "desc": "gRPCも通信するデータの形をスキーマとして定義する。",
                  "icon": "ic-scale",
                  "page": 56
                }
              ]
            }
          ]
        },
        {
          "id": "websocket",
          "page": 72,
          "term": "WebSocket",
          "subtitle": "「聞かれるまで話せない」HTTPの壁を壊した通信方式",
          "category": "通信プロトコル",
          "icon": "ic-network",
          "oneline": "一度接続を確立したら、サーバーとクライアントが双方向にいつでもデータを送り合える通信の仕組み。",
          "q1_text": "チャットや通知のようにリアルタイム性が求められる機能を通常のHTTPリクエストで実現しようとすると、一定間隔でAPIを呼び続ける（ポーリング）必要があり、サーバー負荷が増大していた。",
          "q2_intro": "通常のHTTPリクエスト/レスポンス（Ch2）は、クライアントが聞かない限りサーバーからは何も送られてこない。",
          "q2_table": {
            "col_before": "HTTPのポーリング",
            "col_after": "WebSocket",
            "rows": [
              [
                "通信の方向",
                "クライアントから聞きに行く一方通行",
                "接続後は双方向にいつでも送れる"
              ],
              [
                "リアルタイム性",
                "一定間隔でしか更新されない",
                "変化があった瞬間に届く"
              ],
              [
                "向いている場面",
                "通常のページ表示",
                "チャット・通知・対戦ゲーム等"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-network",
              "cap": "接続したまま双方向にやり取りできる"
            },
            {
              "icon": "ic-clock",
              "cap": "リアルタイムに近い速さで更新が届く"
            },
            {
              "icon": "ic-scale",
              "cap": "ポーリングに比べてサーバー負荷を抑えられる"
            }
          ],
          "memo": "HTTP接続をアップグレードして双方向通信に切り替える。チャット・通知向き。",
          "sidebar_groups": [
            {
              "label": "関連する語",
              "items": [
                {
                  "name": "Pub/Sub",
                  "desc": "変化があった相手に自動で知らせる、より広い仕組み。",
                  "icon": "ic-layers",
                  "page": 74
                },
                {
                  "name": "Webhook",
                  "desc": "こちらもイベント発生時に通知する仕組みだが、通信の形が異なる。",
                  "icon": "ic-cloud",
                  "page": 73
                }
              ]
            }
          ]
        },
        {
          "id": "webhook",
          "page": 73,
          "term": "Webhook",
          "subtitle": "「向こうから電話がかかってくる」通知の仕組み",
          "category": "通信プロトコル",
          "icon": "ic-cloud",
          "oneline": "サービス側で何かが起きたときに、登録しておいたURLへ自動でリクエストを送ってくれる仕組み。",
          "q1_text": "外部サービスの状態変化（決済完了など）を検知するために定期的にAPIを呼び続けると、確認間隔ぶんのタイムラグが生じ、サーバー負荷も無駄にかかっていた。",
          "q2_intro": "Webhookがない場合、外部サービスの状態変化を知るには、こちらから定期的にAPIを叩いて確認（ポーリング）するしかない。",
          "q2_table": {
            "col_before": "定期的なポーリング",
            "col_after": "Webhook",
            "rows": [
              [
                "確認の主体",
                "自分から定期的に聞きに行く",
                "相手が変化した瞬間に知らせてくれる"
              ],
              [
                "タイムラグ",
                "ポーリングの間隔ぶん遅れる",
                "ほぼリアルタイムに届く"
              ],
              [
                "実装の準備",
                "APIを叩くコードだけでよい",
                "通知を受け取るURL（受け口）を用意する"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-cloud",
              "cap": "外部サービスからの通知を受け取れる"
            },
            {
              "icon": "ic-clock",
              "cap": "ポーリングよりリアルタイムに近い"
            },
            {
              "icon": "ic-network",
              "cap": "決済・デプロイ通知など幅広く使われる"
            }
          ],
          "memo": "Webhookは「登録したURLに向かって、相手がPOSTリクエストを送ってくる」だけの単純な仕組み。GitHubのPush通知やStripeの決済結果通知などで馴染み深い。",
          "sidebar_groups": [
            {
              "label": "関連する語",
              "items": [
                {
                  "name": "Pub/Sub",
                  "desc": "Webhookと同じく通知の仕組みだが、間に仲介役を挟む点が異なる。",
                  "icon": "ic-layers",
                  "page": 74
                },
                {
                  "name": "Endpoint",
                  "desc": "Webhookの通知を受け取るための窓口として自分のAPIに用意する。",
                  "icon": "ic-network",
                  "page": 62
                }
              ]
            }
          ]
        },
        {
          "id": "pubsub",
          "page": 74,
          "term": "Pub/Sub",
          "subtitle": "送り手と受け手を「知り合わせない」通知の仕組み",
          "category": "通信プロトコル",
          "icon": "ic-layers",
          "oneline": "発行者（Publisher）がメッセージを送り、購読者（Subscriber）が仲介役を通じて受け取る非同期の通信モデル。",
          "q1_text": "1つのイベント（注文など）を複数の送信先（在庫システム・通知システムなど）に連携する際、送信元のコードに宛先を直接書き込んでいくと、宛先が増えるたびに送信元の修正が必要になっていた。",
          "q2_intro": "Webhookのように送信元が受信先を直接知っている構成では、通知先が増えるたびに送信元の実装を修正する必要がある。",
          "q2_table": {
            "col_before": "Webhookで直接送る",
            "col_after": "Pub/Sub",
            "rows": [
              [
                "送信先の把握",
                "送信元が受信先のURLを知っている",
                "送信元は仲介役（トピック）に送るだけ"
              ],
              [
                "受信先の追加",
                "送信元のコードを修正して追加",
                "購読するだけで新しい受信先を追加できる"
              ],
              [
                "関係性",
                "送信元と受信先が密結合",
                "間にトピックを挟んで疎結合"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-layers",
              "cap": "送信元と受信先を直接つながずに済む"
            },
            {
              "icon": "ic-network",
              "cap": "受信先を後から自由に追加できる"
            },
            {
              "icon": "ic-scale",
              "cap": "複数のサービスへの同時通知に向いている"
            }
          ],
          "memo": "Webhookが1対1の電話なら、Pub/Subは掲示板に貼って見に来るイメージ。",
          "sidebar_groups": [
            {
              "label": "関連する語",
              "items": [
                {
                  "name": "Webhook",
                  "desc": "こちらは送信元が受信先を直接知っている、1対1に近い通知方式。",
                  "icon": "ic-cloud",
                  "page": 73
                },
                {
                  "name": "WebSocket",
                  "desc": "こちらは接続を保ったまま双方向にやり取りする通信方式。",
                  "icon": "ic-network",
                  "page": 72
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "number": 6,
      "title": "データベース",
      "entries": [
        {
          "id": "database",
          "page": 81,
          "term": "Database",
          "subtitle": "データを「ファイルの海」から救い出した仕組み",
          "category": "データベース・基礎",
          "icon": "ic-server",
          "oneline": "データを一箇所にまとめて、複数人で安全に読み書きでき、検索しやすく保存する仕組み。",
          "q1_text": "顧客データやアプリの状態をファイルで直接管理すると、複数人が同時に編集した際にデータが上書きされて消失する危険があった。",
          "q2_intro": "ファイルに直接データを書き込んで、そのまま保存・共有していた。",
          "q2_table": {
            "col_before": "ファイル保存",
            "col_after": "データベース",
            "rows": [
              [
                "同時アクセス",
                "上書きされて壊れやすい",
                "複数人が同時に安全に読み書きできる"
              ],
              [
                "検索",
                "全部読んで目で探す",
                "条件を指定して一瞬で検索できる"
              ],
              [
                "整合性",
                "壊れても気づきにくい",
                "ルールで壊れたデータを弾ける"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-clock",
              "cap": "大量データも高速に検索できる"
            },
            {
              "icon": "ic-laptop",
              "cap": "複数人で同時に読み書きできる"
            },
            {
              "icon": "ic-scale",
              "cap": "ルールでデータの整合性を守れる"
            }
          ],
          "memo": "保存するだけでなく、壊れないように守ってくれる。",
          "sidebar_groups": [
            {
              "label": "データベースの種類",
              "items": [
                {
                  "name": "RDB",
                  "desc": "表同士を関係で結びつけて管理する方式。",
                  "icon": "ic-layers",
                  "page": 82
                },
                {
                  "name": "NoSQL",
                  "desc": "表の形にこだわらない柔軟なデータベース。",
                  "icon": "ic-network",
                  "page": 84
                }
              ]
            },
            {
              "label": "構成する要素",
              "items": [
                {
                  "name": "Table",
                  "desc": "データを行と列で整理する表そのもの。",
                  "icon": "ic-file",
                  "page": 85
                }
              ]
            }
          ]
        },
        {
          "id": "rdb",
          "page": 82,
          "term": "RDB",
          "subtitle": "表と表の「関係」でデータを整理する考え方",
          "category": "データベース・基礎",
          "icon": "ic-layers",
          "oneline": "行と列を持つ「表（テーブル）」同士を関連付けてデータを管理する方式。",
          "q1_text": "1つの巨大な表にあらゆる情報を詰め込んで管理すると、同じ値を繰り返し入力することになり、更新漏れやデータの不整合が起きやすかった。",
          "q2_intro": "1つの巨大な表に、あらゆる情報を詰め込んで管理していた。",
          "q2_table": {
            "col_before": "1つの表",
            "col_after": "RDB",
            "rows": [
              [
                "データの重複",
                "同じ情報を何度も書く",
                "表を分けて重複を減らせる"
              ],
              [
                "更新",
                "複数箇所を直す必要あり",
                "1箇所直せば済む"
              ],
              [
                "整合性",
                "矛盾したデータが混在する",
                "関係のルールで矛盾を防げる"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-layers",
              "cap": "表を分けて重複を減らせる"
            },
            {
              "icon": "ic-scale",
              "cap": "関係のルールでデータを守れる"
            },
            {
              "icon": "ic-server",
              "cap": "複雑な業務データも整理できる"
            }
          ],
          "memo": "分けた分だけ、整合性を保つ仕組みが必要になる。",
          "sidebar_groups": [
            {
              "label": "実装ソフトと対になる考え方",
              "items": [
                {
                  "name": "RDBMS",
                  "desc": "RDBの考え方を実装したソフトウェア。",
                  "icon": "ic-cube",
                  "page": 83
                },
                {
                  "name": "NoSQL",
                  "desc": "表の形にこだわらない別のアプローチ。",
                  "icon": "ic-network",
                  "page": 84
                }
              ]
            },
            {
              "label": "関連する要素",
              "items": [
                {
                  "name": "Table",
                  "desc": "行と列でデータを整理する表。",
                  "icon": "ic-file",
                  "page": 85
                },
                {
                  "name": "Foreign Key",
                  "desc": "表同士の関係を表すキー。",
                  "icon": "ic-scale",
                  "page": 88
                }
              ]
            }
          ]
        },
        {
          "id": "rdbms",
          "page": 83,
          "term": "RDBMS",
          "subtitle": "RDBの考え方を実際に動かすソフトウェア",
          "category": "データベース・基礎",
          "icon": "ic-cube",
          "oneline": "RDB（関係データベース）の考え方を実装し、実際にデータを保存・操作できるようにするソフトウェア。",
          "q1_text": "RDBという設計上の考え方だけでは、実際にデータを保存・検索・更新する具体的な処理を実行できなかった。",
          "q2_intro": "RDBの仕組みを、必要になるたびに自分でゼロから実装しようとしていた。",
          "q2_table": {
            "col_before": "自前で実装",
            "col_after": "RDBMS",
            "rows": [
              [
                "信頼性",
                "自分でバグと戦うことになる",
                "実績あるソフトウェアが保証してくれる"
              ],
              [
                "機能",
                "検索やトランザクションを自作",
                "SQLや排他制御が最初から使える"
              ],
              [
                "選択肢",
                "ゼロから設計するしかない",
                "MySQLやPostgreSQL等から選べる"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-server",
              "cap": "RDBの仕組みをすぐ使い始められる"
            },
            {
              "icon": "ic-scale",
              "cap": "トランザクションや制約を任せられる"
            },
            {
              "icon": "ic-cloud",
              "cap": "クラウドサービスとしても使える"
            }
          ],
          "memo": "RDBは考え方、RDBMSはそれを動かす実物。",
          "sidebar_groups": [
            {
              "label": "関連する考え方",
              "items": [
                {
                  "name": "RDB",
                  "desc": "表同士を関係で結びつけるデータの考え方。",
                  "icon": "ic-layers",
                  "page": 82
                }
              ]
            },
            {
              "label": "操作する言語",
              "items": [
                {
                  "name": "SQL",
                  "desc": "RDBMSに指示を出すための共通言語。",
                  "icon": "ic-pen",
                  "page": 90
                }
              ]
            }
          ]
        },
        {
          "id": "nosql",
          "page": 84,
          "term": "NoSQL",
          "subtitle": "「表」の形にこだわらないデータベースの総称",
          "category": "データベース・基礎",
          "icon": "ic-network",
          "oneline": "テーブルの形に縛られず、柔軟な形でデータを保存できるデータベースの総称。",
          "q1_text": "サービスの急成長で、ユーザーごとに項目が異なるようなデータをRDBの固定された表構造に収めようとすると、カラムが増え続けて設計が破綻しかねなかった。",
          "q2_intro": "RDB（表構造）だけを使って、あらゆる種類のデータを管理しようとしていた。",
          "q2_table": {
            "col_before": "RDBのみ",
            "col_after": "NoSQL",
            "rows": [
              [
                "データの形",
                "事前に列を固定する必要がある",
                "形が違うデータも自由に保存できる"
              ],
              [
                "スケール",
                "1台のサーバーで頑張りがち",
                "複数台に分散しやすい"
              ],
              [
                "向いている場面",
                "整合性重視の業務データ",
                "ログ・キャッシュ等柔軟なデータ"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-layers",
              "cap": "形の違うデータも柔軟に保存できる"
            },
            {
              "icon": "ic-cloud",
              "cap": "大量データを分散して扱える"
            },
            {
              "icon": "ic-rocket",
              "cap": "読み書きを高速化しやすい"
            }
          ],
          "memo": "データの性質に合わせて選べばいい。",
          "sidebar_groups": [
            {
              "label": "対になる考え方",
              "items": [
                {
                  "name": "RDB",
                  "desc": "表同士を関係で結びつけるデータの考え方。",
                  "icon": "ic-layers",
                  "page": 82
                },
                {
                  "name": "RDBMS",
                  "desc": "RDBを実装したソフトウェア。",
                  "icon": "ic-cube",
                  "page": 83
                }
              ]
            },
            {
              "label": "代表的な製品",
              "items": [
                {
                  "name": "Redis",
                  "desc": "高速なキー・バリュー型データベース。",
                  "icon": "ic-cloud"
                },
                {
                  "name": "MongoDB",
                  "desc": "柔軟なドキュメント型データベース。",
                  "icon": "ic-cloud"
                }
              ]
            }
          ]
        },
        {
          "id": "table",
          "page": 85,
          "term": "Table",
          "subtitle": "データを行と列で整理する「表」そのもの",
          "category": "データベース・構造",
          "icon": "ic-file",
          "oneline": "データを行（レコード）と列（カラム）に整理して格納する、データベースの基本単位。",
          "q1_text": "データを決まった形式のないテキストや配列にそのまま書き込むと、後から検索や更新を正確に行うことができなかった。",
          "q2_intro": "テキストや配列に、決まった形もなくデータを書き並べていた。",
          "q2_table": {
            "col_before": "形が不定",
            "col_after": "Table",
            "rows": [
              [
                "構造",
                "毎回バラバラな形式になる",
                "列でルールが決まっている"
              ],
              [
                "検索",
                "どこに何があるか探す",
                "列名で欲しいデータを取り出せる"
              ],
              [
                "追加",
                "書式がブレやすい",
                "同じ形式のレコードとして追加できる"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-layers",
              "cap": "同じ形式でデータを並べられる"
            },
            {
              "icon": "ic-rocket",
              "cap": "列名で欲しいデータをすぐ取り出せる"
            },
            {
              "icon": "ic-scale",
              "cap": "型やルールでデータの形を保てる"
            }
          ],
          "memo": "列（カラム）でルールを決め、行（レコード）でデータを積む。",
          "sidebar_groups": [
            {
              "label": "構成する要素",
              "items": [
                {
                  "name": "Record",
                  "desc": "テーブルの1行分のデータ。",
                  "icon": "ic-package",
                  "page": 86
                },
                {
                  "name": "Primary Key",
                  "desc": "1件を一意に特定する値。",
                  "icon": "ic-wheel",
                  "page": 87
                },
                {
                  "name": "Foreign Key",
                  "desc": "他の表とつながりを持たせるキー。",
                  "icon": "ic-scale",
                  "page": 88
                }
              ]
            }
          ]
        },
        {
          "id": "record",
          "page": 86,
          "term": "Record",
          "subtitle": "テーブルに積まれる「1件分」のデータ",
          "category": "データベース・構造",
          "icon": "ic-package",
          "oneline": "テーブルの中の1行分、つまり「1件分」としてまとまったデータ。",
          "q1_text": "データを項目ごとにバラバラに扱うと、どこからどこまでが「1件分」なのかが曖昧になり、一部の項目だけを更新して不整合を起こしやすかった。",
          "q2_intro": "データの単位を意識せず、項目ごとにバラバラに扱っていた。",
          "q2_table": {
            "col_before": "項目バラバラ",
            "col_after": "Record",
            "rows": [
              [
                "単位",
                "項目だけを見て操作する",
                "1件分をまとめて扱える"
              ],
              [
                "追加・削除",
                "一部の項目だけ更新しがち",
                "1行まるごと追加・削除できる"
              ],
              [
                "識別",
                "「誰のデータか」が曖昧になる",
                "主キーで1件を確実に特定できる"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-package",
              "cap": "1件分のデータをまとめて扱える"
            },
            {
              "icon": "ic-scale",
              "cap": "行単位で追加・更新・削除できる"
            },
            {
              "icon": "ic-wheel",
              "cap": "主キーで1件を確実に特定できる"
            }
          ],
          "memo": "Excelでいう「1行分のデータ」と同じ感覚。",
          "sidebar_groups": [
            {
              "label": "関連する要素",
              "items": [
                {
                  "name": "Table",
                  "desc": "レコードが積まれる表そのもの。",
                  "icon": "ic-file",
                  "page": 85
                },
                {
                  "name": "Primary Key",
                  "desc": "レコードを一意に特定する値。",
                  "icon": "ic-wheel",
                  "page": 87
                }
              ]
            }
          ]
        },
        {
          "id": "primary-key",
          "page": 87,
          "term": "Primary Key",
          "subtitle": "「この行は絶対にこれ」と言い切るための印",
          "category": "データベース・構造",
          "icon": "ic-wheel",
          "oneline": "テーブルの中で1件のレコードを一意に特定するための、重複しない値。",
          "q1_text": "名前やメールアドレスなど意味を持つ項目でレコードを特定すると、同じ値を持つ別のレコードまで誤って操作してしまう恐れがあった。",
          "q2_intro": "名前やメールアドレスなど、意味のある項目を頼りにレコードを特定していた。",
          "q2_table": {
            "col_before": "名前で特定",
            "col_after": "Primary Key",
            "rows": [
              [
                "一意性",
                "同じ値の人が現れうる",
                "絶対に重複しない値を保証する"
              ],
              [
                "変更",
                "名前変更で特定方法が崩れる",
                "値が変わらないIDで安定して参照"
              ],
              [
                "事故",
                "別人のデータを誤更新しうる",
                "常に狙った1件だけを操作できる"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-wheel",
              "cap": "常に1件だけを正確に特定できる"
            },
            {
              "icon": "ic-scale",
              "cap": "重複や誤更新を防げる"
            },
            {
              "icon": "ic-network",
              "cap": "他の表からも安全に参照できる"
            }
          ],
          "memo": "名前やメールではなく、専用のIDで管理するのが安全。",
          "sidebar_groups": [
            {
              "label": "関連する要素",
              "items": [
                {
                  "name": "Record",
                  "desc": "主キーで特定される1件分のデータ。",
                  "icon": "ic-package",
                  "page": 86
                },
                {
                  "name": "Foreign Key",
                  "desc": "主キーを他の表から参照するキー。",
                  "icon": "ic-scale",
                  "page": 88
                }
              ]
            }
          ]
        },
        {
          "id": "foreign-key",
          "page": 88,
          "term": "Foreign Key",
          "subtitle": "親を消したら子供が迷子になる、を防ぐ仕組み",
          "category": "データベース・構造",
          "icon": "ic-scale",
          "oneline": "別のテーブルの主キーを参照して、テーブル同士の関係を表す値。",
          "q1_text": "テーブル同士のつながりをアプリ側のコードだけで管理すると、親データを削除した際に、存在しない親を指す壊れた子データが残ってしまう恐れがあった。",
          "q2_intro": "テーブル同士のつながりを、アプリ側のコードだけで気をつけて管理していた。",
          "q2_table": {
            "col_before": "アプリ側で担保",
            "col_after": "Foreign Key",
            "rows": [
              [
                "親の削除",
                "子データが孤児として残る",
                "DBが削除を止める／連動して消せる"
              ],
              [
                "不正なデータ",
                "存在しない親を指すデータが作れる",
                "存在する親しか指せない"
              ],
              [
                "依存関係",
                "コードを読まないと分からない",
                "テーブル定義を見れば分かる"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-network",
              "cap": "表同士のつながりをDBが保証する"
            },
            {
              "icon": "ic-scale",
              "cap": "親を消すときの挙動を制御できる"
            },
            {
              "icon": "ic-server",
              "cap": "存在しないデータへの参照を防げる"
            }
          ],
          "memo": "親を消すときに子がどうなるかを、DBに約束させられる。",
          "sidebar_groups": [
            {
              "label": "関連する要素",
              "items": [
                {
                  "name": "Table",
                  "desc": "キーで関係づけられる表同士。",
                  "icon": "ic-file",
                  "page": 85
                },
                {
                  "name": "Primary Key",
                  "desc": "外部キーが参照する側のキー。",
                  "icon": "ic-wheel",
                  "page": 87
                }
              ]
            }
          ]
        },
        {
          "id": "db-index",
          "page": 89,
          "term": "Index",
          "subtitle": "本の「索引」と同じ、検索を速くする仕組み",
          "category": "データベース・構造",
          "icon": "ic-rocket",
          "oneline": "特定の列の検索を高速化するために作る、データの「索引」。",
          "q1_text": "索引がない状態でテーブルを検索すると、データ件数が増えるほど全件を読み比べる処理コストが増大し、検索が遅くなっていった。",
          "q2_intro": "索引がない状態で、テーブルを頭から全部読んで探していた。",
          "q2_table": {
            "col_before": "インデックスなし",
            "col_after": "Index",
            "rows": [
              [
                "検索方法",
                "全件を1行ずつ確認する",
                "索引から一気に絞り込む"
              ],
              [
                "速度",
                "データが増えるほど遅くなる",
                "大量データでも高速なまま"
              ],
              [
                "コスト",
                "検索は速いが書き込みは軽い",
                "書き込みや保存容量は少し増える"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-rocket",
              "cap": "大量データでも検索が高速なまま"
            },
            {
              "icon": "ic-clock",
              "cap": "待たされるページが減る"
            },
            {
              "icon": "ic-scale",
              "cap": "速さと更新コストのバランスを取れる"
            }
          ],
          "memo": "全部読まなくても、目的のページに一直線で行ける。",
          "sidebar_groups": [
            {
              "label": "関連する要素",
              "items": [
                {
                  "name": "Table",
                  "desc": "インデックスが張られる表。",
                  "icon": "ic-file",
                  "page": 85
                },
                {
                  "name": "Primary Key",
                  "desc": "通常は自動でインデックスが張られる。",
                  "icon": "ic-wheel",
                  "page": 87
                }
              ]
            }
          ]
        },
        {
          "id": "sql",
          "page": 90,
          "term": "SQL",
          "subtitle": "データベースに話しかけるための共通言語",
          "category": "データベース・操作",
          "icon": "ic-pen",
          "oneline": "データベースに対して、検索・追加・更新・削除を指示するための言語。",
          "q1_text": "データベース製品ごとに操作方法が異なると、製品を変更するたびに操作方法を一から覚え直す必要があった。",
          "q2_intro": "各データベース製品が、それぞれ独自の操作方法を持っていた。",
          "q2_table": {
            "col_before": "製品ごとに独自",
            "col_after": "SQL",
            "rows": [
              [
                "学習コスト",
                "製品ごとに覚え直す",
                "一度覚えれば多くの製品で通用"
              ],
              [
                "書き方",
                "製品依存でバラバラになる",
                "SELECT / INSERTなど共通構文"
              ],
              [
                "移行",
                "製品を変えると書き直しになる",
                "基本構文はそのまま使い回せる"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-pen",
              "cap": "共通の書き方でデータを操作できる"
            },
            {
              "icon": "ic-scale",
              "cap": "条件を指定して正確に絞り込める"
            },
            {
              "icon": "ic-network",
              "cap": "多くのDB製品で同じ知識が使える"
            }
          ],
          "memo": "製品が変わっても、基本の文法はほぼそのまま通用する。",
          "sidebar_groups": [
            {
              "label": "関連する要素",
              "items": [
                {
                  "name": "RDBMS",
                  "desc": "SQLで操作する対象のソフトウェア。",
                  "icon": "ic-cube",
                  "page": 83
                },
                {
                  "name": "ORM",
                  "desc": "SQLを直接書かずに操作する仕組み。",
                  "icon": "ic-layers",
                  "page": 91
                }
              ]
            }
          ]
        },
        {
          "id": "orm",
          "page": 91,
          "term": "ORM",
          "subtitle": "SQLを書かずにデータベースを操作する翻訳者",
          "category": "データベース・操作",
          "icon": "ic-layers",
          "oneline": "プログラムのオブジェクトとテーブルを対応させ、SQLを直接書かずに操作できるようにする仕組み。",
          "q1_text": "SQL文を文字列として自分で組み立てると、値の埋め込み方を誤った際にSQLインジェクションの脆弱性を作り込んでしまう恐れがあった。",
          "q2_intro": "SQL文を自分で組み立てて、文字列としてそのまま実行していた。",
          "q2_table": {
            "col_before": "SQL直書き",
            "col_after": "ORM",
            "rows": [
              [
                "書き方",
                "SQL文を文字列で組み立てる",
                "コードのオブジェクトとして操作"
              ],
              [
                "安全性",
                "書き方次第で脆弱性を作りうる",
                "安全な形に自動で変換してくれる"
              ],
              [
                "可搬性",
                "DB製品ごとにSQLを書き分ける",
                "同じコードで複数のDBに対応しやすい"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-layers",
              "cap": "SQLを意識せずデータ操作できる"
            },
            {
              "icon": "ic-scale",
              "cap": "安全な形にSQLを組み立ててくれる"
            },
            {
              "icon": "ic-rocket",
              "cap": "コードの記述量を減らせる"
            }
          ],
          "memo": "楽になる分、裏で何のSQLが実行されているかは知っておきたい。",
          "sidebar_groups": [
            {
              "label": "関連する要素",
              "items": [
                {
                  "name": "SQL",
                  "desc": "ORMが裏側で組み立てている言語。",
                  "icon": "ic-pen",
                  "page": 90
                },
                {
                  "name": "RDBMS",
                  "desc": "ORMが最終的に操作するソフトウェア。",
                  "icon": "ic-cube",
                  "page": 83
                }
              ]
            }
          ]
        },
        {
          "id": "migration",
          "page": 92,
          "term": "Migration",
          "subtitle": "DBの設計変更を「手作業SQL」から解放した仕組み",
          "category": "データベース・運用",
          "icon": "ic-clock",
          "oneline": "テーブルの追加・変更などのDB設計変更を、コードの形で記録・管理する仕組み。",
          "q1_text": "本番環境に手作業でALTER TABLEなどのSQLを実行すると、環境ごとにカラムの型や状態がずれ、リリース後にエラーが発生しやすかった。",
          "q2_intro": "テーブル変更のSQLを、環境ごとに手作業で実行していた。",
          "q2_table": {
            "col_before": "手作業でSQL",
            "col_after": "Migration",
            "rows": [
              [
                "再現性",
                "環境ごとに結果がズレうる",
                "同じ変更を全環境に確実に反映"
              ],
              [
                "履歴",
                "いつ何を変えたか分からない",
                "変更履歴がコードとして残る"
              ],
              [
                "共有",
                "口頭やメモで伝達しがち",
                "コードをチームで共有・レビューできる"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-clock",
              "cap": "変更履歴を時系列で管理できる"
            },
            {
              "icon": "ic-laptop",
              "cap": "全環境に同じ変更を確実に反映できる"
            },
            {
              "icon": "ic-scale",
              "cap": "変更をコードとしてレビューできる"
            }
          ],
          "memo": "手でSQLを打つ前に、まずマイグレーションを疑う。",
          "sidebar_groups": [
            {
              "label": "一緒に使う仕組み",
              "items": [
                {
                  "name": "Seeder",
                  "desc": "確認用データを自動投入する仕組み。",
                  "icon": "ic-package",
                  "page": 93
                }
              ]
            },
            {
              "label": "関連する要素",
              "items": [
                {
                  "name": "RDBMS",
                  "desc": "マイグレーションで変更する対象。",
                  "icon": "ic-cube",
                  "page": 83
                }
              ]
            }
          ]
        },
        {
          "id": "seeder",
          "page": 93,
          "term": "Seeder",
          "subtitle": "「動作確認用のデータ」を毎回手打ちしなくていい仕組み",
          "category": "データベース・運用",
          "icon": "ic-package",
          "oneline": "開発・テスト用のダミーデータを、コードで自動的に投入する仕組み。",
          "q1_text": "動作確認用のデータを管理画面やSQLで毎回手動で登録すると、環境を作り直すたびに同じ作業を繰り返す必要があった。",
          "q2_intro": "確認用データを、管理画面やSQLで毎回手動で入力していた。",
          "q2_table": {
            "col_before": "手動入力",
            "col_after": "Seeder",
            "rows": [
              [
                "再現性",
                "毎回微妙に違うデータになる",
                "同じデータをいつでも再現できる"
              ],
              [
                "手間",
                "環境ごとに手で入力する",
                "コマンド1つで一括投入できる"
              ],
              [
                "共有",
                "テストデータが人によって違う",
                "チームで同じテストデータを使える"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-package",
              "cap": "確認用データを一括で投入できる"
            },
            {
              "icon": "ic-clock",
              "cap": "環境構築の時間を短縮できる"
            },
            {
              "icon": "ic-laptop",
              "cap": "チームで同じデータを共有できる"
            }
          ],
          "memo": "毎回手で作る代わりに、コードに一度書けば使い回せる。",
          "sidebar_groups": [
            {
              "label": "一緒に使う仕組み",
              "items": [
                {
                  "name": "Migration",
                  "desc": "テーブルの構造そのものを変更する仕組み。",
                  "icon": "ic-clock",
                  "page": 92
                }
              ]
            }
          ]
        },
        {
          "id": "transaction",
          "page": 94,
          "term": "Transaction",
          "subtitle": "「途中でやめる」ができない一連の処理をまとめる仕組み",
          "category": "データベース・運用",
          "icon": "ic-scale",
          "oneline": "複数の処理を「全部成功」か「全部やり直し」のどちらかにまとめる仕組み。",
          "q1_text": "複数の処理を1つずつ順番に実行すると、途中でサーバーが落ちた際に、一部の処理だけが反映された中途半端な状態が残ってしまう恐れがあった。",
          "q2_intro": "複数の処理を、1つずつ順番に実行して結果を信じていた。",
          "q2_table": {
            "col_before": "個別に実行",
            "col_after": "Transaction",
            "rows": [
              [
                "途中失敗",
                "中途半端な状態が残る",
                "全部なかったことにできる"
              ],
              [
                "一貫性",
                "一部だけ成功した状態になりうる",
                "全部成功するまでは反映されない"
              ],
              [
                "対象",
                "1件ずつ処理する",
                "複数の処理をひとまとまりで扱える"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-scale",
              "cap": "全部成功か全部失敗かにできる"
            },
            {
              "icon": "ic-server",
              "cap": "処理の途中で落ちても安全"
            },
            {
              "icon": "ic-rocket",
              "cap": "複数処理を1つの単位で扱える"
            }
          ],
          "memo": "中途半端な状態を、DBが絶対に見せない。",
          "sidebar_groups": [
            {
              "label": "関連する仕組み",
              "items": [
                {
                  "name": "Lock",
                  "desc": "同時アクセスの衝突を防ぐ仕組み。",
                  "icon": "ic-cube",
                  "page": 95
                }
              ]
            },
            {
              "label": "関連する要素",
              "items": [
                {
                  "name": "RDBMS",
                  "desc": "トランザクションを保証するソフトウェア。",
                  "icon": "ic-cube",
                  "page": 83
                }
              ]
            }
          ]
        },
        {
          "id": "lock",
          "page": 95,
          "term": "Lock",
          "subtitle": "「同時に触ると壊れる」を防ぐ、データの鍵",
          "category": "データベース・排他制御",
          "icon": "ic-cube",
          "oneline": "複数の処理が同じデータに同時にアクセスしたときの衝突を防ぐ仕組み。",
          "q1_text": "同時アクセスを考慮せずに処理すると、複数の処理が同じデータへほぼ同時にアクセスした際、在庫チェックのようなチェックをすり抜けて不整合が生じる恐れがあった。",
          "q2_intro": "同時アクセスを考えず、処理は順番に実行されるものだと思い込んでいた。",
          "q2_table": {
            "col_before": "ロックなし",
            "col_after": "Lock",
            "rows": [
              [
                "同時アクセス",
                "同じデータを同時に書き換えられる",
                "一方が終わるまで待たせられる"
              ],
              [
                "整合性",
                "在庫や残高の数が合わなくなる",
                "1件ずつ確実に処理される"
              ],
              [
                "代償",
                "事故が起きるまで気づきにくい",
                "待ち時間や順番待ちが発生する"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-cube",
              "cap": "同時に書き換えられるのを防げる"
            },
            {
              "icon": "ic-scale",
              "cap": "在庫や残高の整合性を守れる"
            },
            {
              "icon": "ic-clock",
              "cap": "処理の順番を保証できる"
            }
          ],
          "memo": "札がある間、他の人は順番待ちになる。",
          "sidebar_groups": [
            {
              "label": "関連する仕組み",
              "items": [
                {
                  "name": "Transaction",
                  "desc": "複数の処理を1つの単位にまとめる仕組み。",
                  "icon": "ic-scale",
                  "page": 94
                }
              ]
            },
            {
              "label": "ロックの種類",
              "items": [
                {
                  "name": "行ロック",
                  "desc": "更新中の1行だけをロックする方式。",
                  "icon": "ic-file",
                  "page": 96
                },
                {
                  "name": "テーブルロック",
                  "desc": "テーブル全体をロックする方式。",
                  "icon": "ic-layers",
                  "page": 97
                },
                {
                  "name": "デッドロック",
                  "desc": "ロック同士が待ち合って止まる状態。",
                  "icon": "ic-network",
                  "page": 98
                }
              ]
            }
          ]
        },
        {
          "id": "row-lock",
          "page": 96,
          "term": "行ロック",
          "subtitle": "「その1行だけ」を貸し切るロック",
          "category": "データベース・排他制御",
          "icon": "ic-file",
          "oneline": "更新中の1行（レコード）だけをロックし、他の行はそのまま操作できるようにする仕組み。",
          "q1_text": "1件の更新のためにテーブル全体をロックすると、無関係な行への処理まで待たされ、システム全体の応答が遅くなっていった。",
          "q2_intro": "テーブル全体をロックして、1件の更新のために全部を止めていた。",
          "q2_table": {
            "col_before": "テーブルロック",
            "col_after": "行ロック",
            "rows": [
              [
                "ロック範囲",
                "テーブル全体",
                "更新中の行だけ"
              ],
              [
                "他の処理",
                "無関係の行も待たされる",
                "別の行は同時に処理できる"
              ],
              [
                "向いている場面",
                "一括で大量更新するとき",
                "個別の注文・更新処理"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-file",
              "cap": "該当の1行だけを貸し切れる"
            },
            {
              "icon": "ic-rocket",
              "cap": "他の行の処理は止めずに進められる"
            },
            {
              "icon": "ic-scale",
              "cap": "必要最小限の範囲だけ制御できる"
            }
          ],
          "memo": "無関係な行まで巻き込まない分、待ち時間が短くて済む。",
          "q3_heading": "行ロックで何ができるようになった？",
          "sidebar_groups": [
            {
              "label": "関連する仕組み",
              "items": [
                {
                  "name": "Lock",
                  "desc": "同時アクセスの衝突を防ぐ仕組み全般。",
                  "icon": "ic-cube",
                  "page": 95
                },
                {
                  "name": "テーブルロック",
                  "desc": "表全体を対象にする粗いロック。",
                  "icon": "ic-layers",
                  "page": 97
                }
              ]
            }
          ]
        },
        {
          "id": "table-lock",
          "page": 97,
          "term": "テーブルロック",
          "subtitle": "表まるごとを貸し切る、強力だが荒っぽいロック",
          "category": "データベース・排他制御",
          "icon": "ic-layers",
          "oneline": "テーブル全体をロックし、他の処理からの読み書きを丸ごと止める仕組み。",
          "q1_text": "大量データを一括更新する際に行ロックだけで対応すると、更新対象の行が多いほどロックの管理コスト自体が処理を遅くしてしまっていた。",
          "q2_intro": "行ロックだけで、大量データの一括更新も乗り切ろうとしていた。",
          "q2_table": {
            "col_before": "行ロックのみ",
            "col_after": "テーブルロック",
            "rows": [
              [
                "対象",
                "更新する行の数だけロック管理",
                "テーブル単位でまとめて制御"
              ],
              [
                "向いている場面",
                "個別の更新処理",
                "一括更新やメンテナンス作業"
              ],
              [
                "他の処理への影響",
                "関係ない行は動ける",
                "テーブル全体が使えなくなる"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-layers",
              "cap": "テーブル全体をまとめて制御できる"
            },
            {
              "icon": "ic-server",
              "cap": "大量データの一括更新に強い"
            },
            {
              "icon": "ic-scale",
              "cap": "用途に応じてロックの粒度を選べる"
            }
          ],
          "memo": "強力な分、使いどころを選ばないと待ち行列を作ってしまう。",
          "q3_heading": "テーブルロックで何ができるようになった？",
          "sidebar_groups": [
            {
              "label": "関連する仕組み",
              "items": [
                {
                  "name": "行ロック",
                  "desc": "該当する行だけを対象にする細かいロック。",
                  "icon": "ic-file",
                  "page": 96
                },
                {
                  "name": "Lock",
                  "desc": "同時アクセスの衝突を防ぐ仕組み全般。",
                  "icon": "ic-cube",
                  "page": 95
                }
              ]
            }
          ]
        },
        {
          "id": "deadlock",
          "page": 98,
          "term": "デッドロック",
          "subtitle": "お互いが相手の鍵を待ち続けて、永遠に進めなくなる状態",
          "category": "データベース・排他制御",
          "icon": "ic-network",
          "oneline": "複数の処理が互いに相手のロック解放を待ち合って、どちらも先に進めなくなる状態。",
          "q1_text": "複数の処理がそれぞれ異なる順序でロックを取得すると、互いに相手のロック解放を待ち合い、両方の処理が先に進めなくなる恐れがあった。",
          "q2_intro": "ロックの取得順序を意識せず、処理ごとに好きな順番でロックを取っていた。",
          "q2_table": {
            "col_before": "順序バラバラ",
            "col_after": "デッドロック対策",
            "rows": [
              [
                "ロック順序",
                "処理ごとにバラバラ",
                "常に同じ順番で取得する"
              ],
              [
                "発生時",
                "お互い待ち続けてフリーズ",
                "DBが検知して片方を強制終了"
              ],
              [
                "対策",
                "気づかず放置しがち",
                "順序統一やタイムアウトで予防"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-network",
              "cap": "循環待ちの状態だと理解できる"
            },
            {
              "icon": "ic-clock",
              "cap": "タイムアウトで強制的に解消できる"
            },
            {
              "icon": "ic-scale",
              "cap": "ロック順序を揃えて予防できる"
            }
          ],
          "memo": "どちらかが折れない限り、待ち続けても解決しない。",
          "q3_heading": "デッドロックにどう対応できる？",
          "sidebar_groups": [
            {
              "label": "関連する仕組み",
              "items": [
                {
                  "name": "Lock",
                  "desc": "同時アクセスの衝突を防ぐ仕組み全般。",
                  "icon": "ic-cube",
                  "page": 95
                },
                {
                  "name": "行ロック",
                  "desc": "デッドロックが起きうる細かいロック単位。",
                  "icon": "ic-file",
                  "page": 96
                },
                {
                  "name": "テーブルロック",
                  "desc": "デッドロックが起きうる粗いロック単位。",
                  "icon": "ic-layers",
                  "page": 97
                }
              ]
            }
          ]
        },
        {
          "id": "n_plus_one",
          "page": 99,
          "term": "N+1",
          "subtitle": "ループの中でクエリを撃ちまくってしまう大罪",
          "category": "データベース・パフォーマンス",
          "icon": "ic-network",
          "oneline": "一覧表示のループの中で関連データを都度取得してしまい、件数分だけSQLが増えてしまう問題。",
          "q1_text": "一覧画面でループの中から関連データを都度呼び出す実装では、表示件数と同じ回数だけSQLが発行され、件数が増えるほど処理が重くなっていた。",
          "q2_intro": "気づかないうちは、ループの中で関連データを呼び出すコードを普通に書いていた。",
          "q2_table": {
            "col_before": "気づかず書いたコード",
            "col_after": "eager loadingで対策",
            "rows": [
              [
                "発行されるクエリ数",
                "1＋N回",
                "1〜2回"
              ],
              [
                "表示速度",
                "件数に比例して遅くなる",
                "件数が増えてもほぼ一定"
              ],
              [
                "気づき方",
                "本番で遅くなって発覚しがち",
                "gemやログで事前に検出できる"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-clock",
              "cap": "一覧の表示が速くなる"
            },
            {
              "icon": "ic-scale",
              "cap": "件数が増えても劣化しにくい"
            },
            {
              "icon": "ic-network",
              "cap": "クエリ数を意識する癖がつく"
            }
          ],
          "memo": "件数が10倍になればクエリも10倍、だから一覧画面ほど痛手が大きい。",
          "sidebar_groups": [
            {
              "label": "関連するキーワード",
              "items": [
                {
                  "name": "Cache",
                  "desc": "同じ問い合わせを何度もしないための一時保管。",
                  "icon": "ic-clock",
                  "page": 100
                },
                {
                  "name": "コネクションプール",
                  "desc": "クエリが増えると接続数の上限にも響いてくる。",
                  "icon": "ic-package",
                  "page": 115
                }
              ]
            }
          ]
        },
        {
          "id": "cache",
          "page": 100,
          "term": "Cache",
          "subtitle": "同じ答えを何度も計算しないための一時保管",
          "category": "データベース・パフォーマンス",
          "icon": "ic-clock",
          "oneline": "一度取得・計算した結果を保存しておき、次回以降はそれを使い回して高速化する仕組み。",
          "q1_text": "同じ集計や問い合わせをアクセスのたびにDBへ直接投げ直すと、内容が変わっていなくても毎回同じ処理コストがかかっていた。",
          "q2_intro": "キャッシュを知る前は、表示のたびに毎回DBへ直接問い合わせていた。",
          "q2_table": {
            "col_before": "毎回DBに問い合わせ",
            "col_after": "キャッシュを使う",
            "rows": [
              [
                "応答時間",
                "毎回の処理時間がかかる",
                "2回目以降はほぼ即返る"
              ],
              [
                "DBへの負荷",
                "常にフルで問い合わせる",
                "負荷を大きく減らせる"
              ],
              [
                "データの鮮度",
                "常に最新",
                "古い値を返す期間が発生しうる"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-clock",
              "cap": "応答が速くなる"
            },
            {
              "icon": "ic-server",
              "cap": "DBへの負荷を減らせる"
            },
            {
              "icon": "ic-scale",
              "cap": "速さと鮮度のトレードオフを学べる"
            }
          ],
          "memo": "便利だけど、いつ・どう消すか（キャッシュ無効化）を決めておかないと、",
          "sidebar_groups": [
            {
              "label": "関連するキーワード",
              "items": [
                {
                  "name": "Redis",
                  "desc": "メモリ上で動く、キャッシュの置き場所として定番。",
                  "icon": "ic-cloud",
                  "page": 108
                },
                {
                  "name": "N+1",
                  "desc": "ループ内クエリの多発も、キャッシュで緩和できることがある。",
                  "icon": "ic-network",
                  "page": 99
                }
              ]
            }
          ]
        },
        {
          "id": "normalization",
          "page": 101,
          "term": "正規化",
          "subtitle": "同じデータをあちこちに置かないための設計ルール",
          "category": "データベース・設計",
          "icon": "ic-layers",
          "oneline": "データの重複を減らすために、テーブルを目的ごとに分割して整理する設計手法。",
          "q1_text": "1つのテーブルに同じ情報を繰り返し書き込むと、一部だけ更新を反映し忘れて、同じ対象なのにデータが食い違ってしまう恐れがあった。",
          "q2_intro": "正規化を知らないうちは、1つの大きなテーブルに情報を全部詰め込んでいた。",
          "q2_table": {
            "col_before": "正規化前（1テーブルに詰め込み）",
            "col_after": "正規化後（テーブルを分割）",
            "rows": [
              [
                "データの重複",
                "同じ情報を何度も書く",
                "重複を減らせる"
              ],
              [
                "更新のしやすさ",
                "直し漏れが起きやすい",
                "1箇所直せば反映される"
              ],
              [
                "JOINの発生",
                "ほぼ不要",
                "テーブルをまたぐ分だけ増える"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-scale",
              "cap": "更新漏れを防げる"
            },
            {
              "icon": "ic-layers",
              "cap": "データの整合性を保ちやすい"
            },
            {
              "icon": "ic-package",
              "cap": "無駄な容量を減らせる"
            }
          ],
          "memo": "ただしやりすぎるとJOINだらけで遅くなるので、非正規化とのバランスが大事になる。",
          "sidebar_groups": [
            {
              "label": "差分ペア",
              "items": [
                {
                  "name": "非正規化",
                  "desc": "あえて重複を持たせて読み取りを速くする、正規化の逆張り。",
                  "icon": "ic-rocket",
                  "page": 102
                }
              ]
            },
            {
              "label": "関連するキーワード",
              "items": [
                {
                  "name": "ER図",
                  "desc": "正規化した結果のテーブル関係を絵にしたもの。",
                  "icon": "ic-file",
                  "page": 103
                }
              ]
            }
          ]
        },
        {
          "id": "denormalization",
          "page": 102,
          "term": "非正規化",
          "subtitle": "「正しさ」より「速さ」を選ぶ設計判断",
          "category": "データベース・設計",
          "icon": "ic-rocket",
          "oneline": "正規化で分けたデータをあえて重複させて持たせ、JOINを減らして読み取りを速くする設計。",
          "q1_text": "正規化を徹底したテーブル構成では、画面表示のたびに多数のテーブルをJOINする必要があり、表示速度が低下しやすかった。",
          "q2_intro": "正規化だけで設計していた頃は、JOINの数がページを増やすたびにどんどん増えていった。",
          "q2_table": {
            "col_before": "正規化のみ",
            "col_after": "非正規化を併用",
            "rows": [
              [
                "読み取り速度",
                "JOINが多く遅くなりがち",
                "JOINを減らして速くできる"
              ],
              [
                "JOINの数",
                "関連の数だけ増える",
                "重複を持たせた分だけ減る"
              ],
              [
                "更新の手間",
                "1箇所直せばよい",
                "重複箇所すべてを同期する必要がある"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-clock",
              "cap": "読み取りが速くなる"
            },
            {
              "icon": "ic-layers",
              "cap": "JOINを減らせる"
            },
            {
              "icon": "ic-scale",
              "cap": "集計値をキャッシュ的に持てる"
            }
          ],
          "memo": "重複データを更新するたびに複数箇所を直す責任とセットで導入する必要がある。",
          "sidebar_groups": [
            {
              "label": "差分ペア",
              "items": [
                {
                  "name": "正規化",
                  "desc": "重複を減らし、更新漏れを防ぐための基本の設計手法。",
                  "icon": "ic-layers",
                  "page": 101
                }
              ]
            },
            {
              "label": "関連するキーワード",
              "items": [
                {
                  "name": "Cache",
                  "desc": "非正規化と同じく、読み取り速度を優先する手段のひとつ。",
                  "icon": "ic-clock",
                  "page": 100
                }
              ]
            }
          ]
        },
        {
          "id": "er_diagram",
          "page": 103,
          "term": "ER図",
          "subtitle": "テーブル同士の関係を絵にした設計図",
          "category": "データベース・設計",
          "icon": "ic-file",
          "oneline": "テーブルの構造と、テーブル同士のつながり（1対多など）を図で表したもの。",
          "q1_text": "テーブル数が多いプロジェクトでは、コードやSQLを読むだけではテーブル同士の関係性を把握しづらかった。",
          "q2_intro": "ER図がない、もしくは古いままの現場では、ドキュメントを読んでも関係が分からなかった。",
          "q2_table": {
            "col_before": "ER図なし・古いまま",
            "col_after": "ER図を整備・更新",
            "rows": [
              [
                "新規参入者の理解速度",
                "コードを読み解く必要がある",
                "図を見れば全体像がつかめる"
              ],
              [
                "設計変更時の影響範囲",
                "見落としやすい",
                "関係を辿って確認しやすい"
              ],
              [
                "共有のしやすさ",
                "口頭・文章で説明が必要",
                "図1枚で共有できる"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-file",
              "cap": "全体構造が一目でわかる"
            },
            {
              "icon": "ic-scale",
              "cap": "設計レビューがしやすい"
            },
            {
              "icon": "ic-layers",
              "cap": "変更の影響範囲を追いやすい"
            }
          ],
          "memo": "ER図は正しく更新され続けて初めて価値を持つ。",
          "sidebar_groups": [
            {
              "label": "関連するキーワード",
              "items": [
                {
                  "name": "正規化",
                  "desc": "ER図に描かれるテーブル分割の考え方そのもの。",
                  "icon": "ic-layers",
                  "page": 101
                },
                {
                  "name": "非正規化",
                  "desc": "正規化した図をあえて崩す判断も、ER図の上で検討する。",
                  "icon": "ic-rocket",
                  "page": 102
                }
              ]
            }
          ]
        },
        {
          "id": "uuid",
          "page": 104,
          "term": "UUID",
          "subtitle": "連番じゃない「ぶつからないID」",
          "category": "データベース・設計",
          "icon": "ic-cube",
          "oneline": "ランダム性の高い長い文字列でIDを作り、複数の場所で同時に発行してもぶつからないようにする仕組み。",
          "q1_text": "auto incrementの連番IDをそのままURLなどで公開すると、IDから件数や作成順序といった情報が推測されてしまう恐れがあった。",
          "q2_intro": "それまではauto increment（連番）のPrimary Keyを、そのまま外部にも見せていた。",
          "q2_table": {
            "col_before": "auto increment（連番）",
            "col_after": "UUID",
            "rows": [
              [
                "採番のタイミング",
                "DBへの登録時に決まる",
                "アプリ側で事前に決められる"
              ],
              [
                "複数サーバーでの衝突",
                "採番がぶつかる可能性がある",
                "ほぼ衝突しない"
              ],
              [
                "外部公開時の推測しやすさ",
                "連番から件数が推測できる",
                "推測されにくい"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-network",
              "cap": "分散環境でも安全に採番できる"
            },
            {
              "icon": "ic-cube",
              "cap": "連番から件数を推測されにくい"
            },
            {
              "icon": "ic-clock",
              "cap": "登録前にIDを決めておける"
            }
          ],
          "memo": "UUIDは便利だが、文字列が長い分インデックスも重くなりがち。",
          "sidebar_groups": [
            {
              "label": "関連するキーワード",
              "items": [
                {
                  "name": "ER図",
                  "desc": "Primary KeyをUUIDにするかは設計段階で決めておきたい。",
                  "icon": "ic-file",
                  "page": 103
                }
              ]
            }
          ]
        },
        {
          "id": "mysql",
          "page": 105,
          "term": "MySQL",
          "subtitle": "「とりあえずこれ」で選ばれ続ける定番RDB",
          "category": "データベース・RDBMS",
          "icon": "ic-server",
          "oneline": "世界中の現場で長く使われてきた、実績重視のオープンソースリレーショナルデータベース。",
          "q1_text": "新規プロジェクトでDBを選定する際、社内外に知見や情報が豊富で、トラブル時にも解決策を見つけやすい製品が求められた。",
          "q2_intro": "DB選定を経験する前は、DBの違いを意識せず「なんとなく有名だから」で決めていた。",
          "q2_table": {
            "col_before": "なんとなく選ぶ",
            "col_after": "理由を言語化して選ぶ",
            "rows": [
              [
                "情報量・実績",
                "意識していなかった",
                "困ったときの情報が見つかりやすい"
              ],
              [
                "ホスティングの選択肢",
                "意識していなかった",
                "クラウド・レンタルサーバーで広くサポート"
              ],
              [
                "機能の豊富さ",
                "意識していなかった",
                "PostgreSQLと都度比較する視点を持てる"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-server",
              "cap": "困ったときの情報が見つかりやすい"
            },
            {
              "icon": "ic-cloud",
              "cap": "幅広い環境でサポートされている"
            },
            {
              "icon": "ic-scale",
              "cap": "中〜大規模まで実績で安心できる"
            }
          ],
          "memo": "MySQLは「みんな使っているから安心」を選定理由にできる数少ない技術。",
          "sidebar_groups": [
            {
              "label": "比較する技術",
              "items": [
                {
                  "name": "PostgreSQL",
                  "desc": "機能の豊富さで選ばれることが多いRDB。",
                  "icon": "ic-server",
                  "page": 106
                },
                {
                  "name": "SQLite",
                  "desc": "サーバー不要で、小規模用途に向くRDB。",
                  "icon": "ic-laptop",
                  "page": 107
                }
              ]
            }
          ]
        },
        {
          "id": "postgresql",
          "page": 106,
          "term": "PostgreSQL",
          "subtitle": "「機能で選ぶ」ならこっち、なRDB",
          "category": "データベース・RDBMS",
          "icon": "ic-server",
          "oneline": "JSON型や高度な検索機能など、機能の豊富さに定評があるオープンソースリレーショナルデータベース。",
          "q1_text": "複雑な検索条件や位置情報検索、柔軟なデータ型など、標準的なRDBの機能だけでは対応しづらい要件が出てきた。",
          "q2_intro": "MySQL一択だと思っていたが、要件によっては機能面で足りないことに気づいた。",
          "q2_table": {
            "col_before": "MySQL",
            "col_after": "PostgreSQL",
            "rows": [
              [
                "型の豊富さ",
                "基本的な型が中心",
                "JSON型・配列型等も扱える"
              ],
              [
                "拡張機能",
                "限定的",
                "全文検索・位置情報検索等が充実"
              ],
              [
                "標準SQLへの準拠度",
                "独自拡張が多い",
                "標準SQLに忠実で挙動が読みやすい"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-layers",
              "cap": "複雑なデータ構造も保存できる"
            },
            {
              "icon": "ic-scale",
              "cap": "拡張機能で高度な検索ができる"
            },
            {
              "icon": "ic-file",
              "cap": "SQL標準準拠で挙動を追いやすい"
            }
          ],
          "memo": "「MySQLかPostgreSQLか」は宗教論争になりがちだが、",
          "sidebar_groups": [
            {
              "label": "比較する技術",
              "items": [
                {
                  "name": "MySQL",
                  "desc": "情報量と実績の多さで選ばれることが多いRDB。",
                  "icon": "ic-server",
                  "page": 105
                }
              ]
            }
          ]
        },
        {
          "id": "sqlite",
          "page": 107,
          "term": "SQLite",
          "subtitle": "サーバーいらずの「ファイル1つで完結するDB」",
          "category": "データベース・RDBMS",
          "icon": "ic-laptop",
          "oneline": "サーバープロセスを立てず、1つのファイルとしてデータベースを扱える軽量なリレーショナルデータベース。",
          "q1_text": "個人開発や簡単な検証のたびに本格的なDBサーバーを構築するのは、規模に見合わないコストがかかっていた。",
          "q2_intro": "SQLiteを知る前は、小さいアプリでも毎回サーバー型のRDBを立てて使っていた。",
          "q2_table": {
            "col_before": "サーバー型RDB",
            "col_after": "SQLite",
            "rows": [
              [
                "セットアップの手軽さ",
                "サーバーの起動・設定が必要",
                "ファイル1つで即使える"
              ],
              [
                "同時書き込みへの強さ",
                "複数接続の同時書き込みに強い",
                "同時書き込みは苦手"
              ],
              [
                "向いている用途",
                "本番の複数人利用",
                "試作・テスト・小規模用途"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-laptop",
              "cap": "インストール不要ですぐ試せる"
            },
            {
              "icon": "ic-clock",
              "cap": "テスト・開発環境で高速に動く"
            },
            {
              "icon": "ic-file",
              "cap": "ファイル1つで持ち運べる"
            }
          ],
          "memo": "SQLiteは「試作・テスト・小規模」の相棒。",
          "sidebar_groups": [
            {
              "label": "比較する技術",
              "items": [
                {
                  "name": "MySQL",
                  "desc": "本番の複数人利用に向く定番RDB。",
                  "icon": "ic-server",
                  "page": 105
                },
                {
                  "name": "PostgreSQL",
                  "desc": "機能重視ならこちらのRDB。",
                  "icon": "ic-server",
                  "page": 106
                }
              ]
            }
          ]
        },
        {
          "id": "redis",
          "page": 108,
          "term": "Redis",
          "subtitle": "メモリ上で爆速に動く「その場しのぎ」の頼れる相棒",
          "category": "データベース・NoSQL",
          "icon": "ic-cloud",
          "oneline": "データをメモリ上に持つことで、キャッシュやセッション管理などを高速に処理できるインメモリ型データストア。",
          "q1_text": "セッション情報やランキングのような一時的で頻繁にアクセスされるデータを毎回RDBに問い合わせると、応答速度がボトルネックになっていた。",
          "q2_intro": "Redis導入前は、セッションやランキングのような一時的なデータもRDBに保存していた。",
          "q2_table": {
            "col_before": "RDBに保存",
            "col_after": "Redisに保存",
            "rows": [
              [
                "読み書きの速度",
                "ディスクI/Oが発生する",
                "メモリ上なので非常に速い"
              ],
              [
                "データの永続性",
                "基本的に永続化されている",
                "設定しないと再起動で消える"
              ],
              [
                "向いている用途",
                "正確さが重要なデータ",
                "セッション・ランキング・キャッシュ"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-clock",
              "cap": "読み書きが非常に速い"
            },
            {
              "icon": "ic-server",
              "cap": "キャッシュ・セッション管理に最適"
            },
            {
              "icon": "ic-scale",
              "cap": "ランキングなど独自の使い方ができる"
            }
          ],
          "memo": "重要なデータの唯一の保存先にはしない。",
          "sidebar_groups": [
            {
              "label": "関連するキーワード",
              "items": [
                {
                  "name": "Cache",
                  "desc": "Redisはキャッシュの保存先として使われることが多い。",
                  "icon": "ic-clock",
                  "page": 100
                },
                {
                  "name": "MongoDB",
                  "desc": "同じNoSQLでも、こちらはドキュメント指向データベース。",
                  "icon": "ic-cloud",
                  "page": 109
                }
              ]
            }
          ]
        },
        {
          "id": "mongodb",
          "page": 109,
          "term": "MongoDB",
          "subtitle": "テーブルの形を決めずに突っ走れるNoSQL",
          "category": "データベース・NoSQL",
          "icon": "ic-cloud",
          "oneline": "スキーマ（テーブル構造）を事前に固定せず、JSONに近い形式でデータを柔軟に保存できるNoSQLデータベース。",
          "q1_text": "仕様が固まっていない段階で頻繁にカラムを変更すると、そのたびにマイグレーションを書く必要があり、開発の負担になっていた。",
          "q2_intro": "RDB一本で作っていた頃は、スキーマ変更のたびにマイグレーションと向き合っていた。",
          "q2_table": {
            "col_before": "RDB（スキーマ固定）",
            "col_after": "MongoDB（スキーマレス）",
            "rows": [
              [
                "データ構造の自由度",
                "カラム追加にマイグレーションが必要",
                "構造を決めずに保存できる"
              ],
              [
                "JOIN（結合）のしやすさ",
                "テーブルをまたいで結合しやすい",
                "結合は基本的に苦手"
              ],
              [
                "データの整合性",
                "DB側である程度保証される",
                "アプリ側で保証する必要がある"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-layers",
              "cap": "構造が変わりやすいデータを扱いやすい"
            },
            {
              "icon": "ic-file",
              "cap": "JSON形式のデータをそのまま保存できる"
            },
            {
              "icon": "ic-network",
              "cap": "水平方向にスケールさせやすい"
            }
          ],
          "memo": "「スキーマレス」は自由な分だけ、整合性を守るのはアプリ側の責任になる。",
          "sidebar_groups": [
            {
              "label": "関連するキーワード",
              "items": [
                {
                  "name": "正規化",
                  "desc": "RDBの正規化とは対照的な、構造を固定しない考え方。",
                  "icon": "ic-layers",
                  "page": 101
                },
                {
                  "name": "Redis",
                  "desc": "同じNoSQLでも、こちらはインメモリのキー・バリュー型。",
                  "icon": "ic-clock",
                  "page": 108
                }
              ]
            }
          ]
        },
        {
          "id": "view",
          "page": 110,
          "term": "View（ビュー）",
          "subtitle": "よく使うSQLに名前をつけて「見た目だけのテーブル」にする",
          "category": "データベース・RDBMS",
          "icon": "ic-image",
          "oneline": "複雑なSELECT文をあらかじめ定義しておき、あたかも1つのテーブルであるかのように参照できるようにする仕組み。",
          "q1_text": "複数テーブルをJOINする同じ集計ロジックのSQLをあちこちのコードに書くと、修正漏れによって画面ごとに結果が食い違う不整合が起きやすかった。",
          "q2_intro": "ビューを知らない頃は、同じJOIN・集計ロジックのSQLをあちこちに書いていた。",
          "q2_table": {
            "col_before": "都度SQLを書く",
            "col_after": "ビューを使う",
            "rows": [
              [
                "SQLの重複",
                "あちこちに同じSQLが散らばる",
                "ビューとして1箇所にまとまる"
              ],
              [
                "修正時に直す箇所",
                "書いた分だけ全部直す必要がある",
                "ビューの定義を直せばよい"
              ],
              [
                "実データの保存",
                "該当しない",
                "ビュー自体は実体を持たない"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-file",
              "cap": "複雑なSQLを使い回せる"
            },
            {
              "icon": "ic-scale",
              "cap": "ロジックを1箇所にまとめられる"
            },
            {
              "icon": "ic-image",
              "cap": "テーブルのように扱える"
            }
          ],
          "memo": "ビューはあくまで「保存されたSELECT文」で、実データは持たない。",
          "sidebar_groups": [
            {
              "label": "関連するキーワード",
              "items": [
                {
                  "name": "Stored Procedure",
                  "desc": "SELECT文だけでなく、処理そのものをDB側に置く仕組み。",
                  "icon": "ic-wheel",
                  "page": 111
                },
                {
                  "name": "Cache",
                  "desc": "重い集計を都度計算させたくない点はビューと共通。",
                  "icon": "ic-clock",
                  "page": 100
                }
              ]
            }
          ]
        },
        {
          "id": "stored_procedure",
          "page": 111,
          "term": "Stored Procedure",
          "subtitle": "DBの中に処理そのものを住まわせる",
          "category": "データベース・RDBMS",
          "icon": "ic-wheel",
          "oneline": "一連のSQL処理をDBサーバー側に手続きとして保存しておき、呼び出すだけで実行できるようにする仕組み。",
          "q1_text": "大量データの集計処理をアプリ側のコードで行うと、DBとアプリの間で何度もデータをやり取りする分だけ時間がかかっていた。",
          "q2_intro": "ストアドプロシージャを使う前は、アプリ側のコードで処理を全部書いていた。",
          "q2_table": {
            "col_before": "アプリ側で処理",
            "col_after": "ストアドプロシージャ",
            "rows": [
              [
                "処理速度（通信回数）",
                "DBとのやり取りが多く発生する",
                "DB内で完結し通信を減らせる"
              ],
              [
                "バージョン管理のしやすさ",
                "Gitで差分・レビューがしやすい",
                "DB側にあり管理が難しくなりがち"
              ],
              [
                "複数アプリからの利用",
                "アプリごとに実装しがち",
                "同じ処理を共通で呼び出せる"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-network",
              "cap": "DBとアプリ間の通信を減らせる"
            },
            {
              "icon": "ic-wheel",
              "cap": "複雑な処理をDB内で完結できる"
            },
            {
              "icon": "ic-layers",
              "cap": "複数アプリから同じ処理を呼び出せる"
            }
          ],
          "memo": "採用するなら管理・レビュー方法もセットで決めておきたい。",
          "sidebar_groups": [
            {
              "label": "関連するキーワード",
              "items": [
                {
                  "name": "View（ビュー）",
                  "desc": "処理ではなく、SELECT文をまとめて名前をつける仕組み。",
                  "icon": "ic-image",
                  "page": 110
                }
              ]
            }
          ]
        },
        {
          "id": "acid",
          "page": 112,
          "term": "ACID",
          "subtitle": "「データが壊れない」ことを約束する4つの性質",
          "category": "データベース・トランザクション",
          "icon": "ic-scale",
          "oneline": "原子性・一貫性・独立性・永続性という、トランザクションが満たすべき4つの性質の頭文字。",
          "q1_text": "複数のSQLを個別に実行すると、一部だけ成功して失敗した際に、データが中途半端な状態のまま残ってしまう恐れがあった。",
          "q2_intro": "トランザクションを意識する前は、1つ1つのSQLをただ個別に実行していた。",
          "q2_table": {
            "col_before": "個別にSQL実行",
            "col_after": "トランザクションでまとめる",
            "rows": [
              [
                "途中で失敗したときの挙動",
                "中途半端な状態が残る",
                "全部なかったことにできる"
              ],
              [
                "同時アクセス時の安全性",
                "データが壊れる可能性がある",
                "独立性が保たれる"
              ],
              [
                "障害後のデータ",
                "消える可能性がある",
                "永続性が保証される"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-scale",
              "cap": "途中失敗しても中途半端にならない"
            },
            {
              "icon": "ic-server",
              "cap": "同時アクセスでもデータが壊れない"
            },
            {
              "icon": "ic-clock",
              "cap": "障害後もデータが消えない"
            }
          ],
          "memo": "逆にNoSQLの多くは、ACIDの一部を緩めることで速度やスケーラビリティを稼いでいる。",
          "sidebar_groups": [
            {
              "label": "関連するキーワード",
              "items": [
                {
                  "name": "MongoDB",
                  "desc": "ACIDの厳格さより、柔軟さ・速度を優先することが多い。",
                  "icon": "ic-cloud",
                  "page": 109
                },
                {
                  "name": "Sharding",
                  "desc": "DBを分割すると、ACIDを保つ難易度も上がる。",
                  "icon": "ic-layers",
                  "page": 113
                }
              ]
            }
          ]
        },
        {
          "id": "sharding",
          "page": 113,
          "term": "Sharding",
          "subtitle": "1つのDBじゃ抱えきれなくなったデータを「横に分ける」",
          "category": "データベース・スケーリング",
          "icon": "ic-layers",
          "oneline": "1つの大きなテーブル・DBを複数のサーバーに分割して、それぞれに一部のデータだけを持たせる仕組み。",
          "q1_text": "サービスの成長でデータ量・アクセス数が増えると、1台のDBサーバーだけでは処理を捌ききれなくなっていった。",
          "q2_intro": "シャーディング前は、1台のDBサーバーにスペックを盛って（スケールアップして）対応していた。",
          "q2_table": {
            "col_before": "スケールアップ（1台を強化）",
            "col_after": "シャーディング（複数台に分割）",
            "rows": [
              [
                "対応できるデータ量",
                "1台のスペックが上限になる",
                "台数を増やして拡張できる"
              ],
              [
                "JOIN・トランザクション",
                "同じDB内なら容易",
                "シャードをまたぐと難しくなる"
              ],
              [
                "構成の複雑さ",
                "シンプル",
                "分割ルールの設計・運用が複雑になる"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-layers",
              "cap": "1台の限界を超えて扱える"
            },
            {
              "icon": "ic-network",
              "cap": "台数を増やして負荷分散できる"
            },
            {
              "icon": "ic-scale",
              "cap": "成長に合わせて拡張できる"
            }
          ],
          "memo": "シャーディングは強力だが後戻りが大変な設計判断。",
          "sidebar_groups": [
            {
              "label": "関連するキーワード",
              "items": [
                {
                  "name": "レプリケーション",
                  "desc": "分割ではなく複製で負荷を分散する、もう1つの手段。",
                  "icon": "ic-network",
                  "page": 114
                },
                {
                  "name": "ACID",
                  "desc": "DBを分割するほど、この4性質を保つのが難しくなる。",
                  "icon": "ic-scale",
                  "page": 112
                }
              ]
            }
          ]
        },
        {
          "id": "replication",
          "page": 114,
          "term": "レプリケーション",
          "subtitle": "同じデータを複数のDBにコピーして「読み取りを分散」",
          "category": "データベース・スケーリング",
          "icon": "ic-network",
          "oneline": "1つのDBのデータを別のDBサーバーに複製し続け、読み取りアクセスなどを分散させる仕組み。",
          "q1_text": "アクセスが増えるとDBへの読み取り（SELECT）が集中し、1台のサーバーだけでは負荷が偏ってCPU使用率が張り付いてしまっていた。",
          "q2_intro": "レプリケーション導入前は、1台のDBに全ての読み書きが集中していた。",
          "q2_table": {
            "col_before": "DB1台に集中",
            "col_after": "レプリケーション（複製して分散）",
            "rows": [
              [
                "読み取りの負荷分散",
                "1台に集中する",
                "複数台に分散できる"
              ],
              [
                "障害時の切り替え",
                "1台が落ちると止まる",
                "他のレプリカで継続できる"
              ],
              [
                "データ反映のタイムラグ",
                "発生しない",
                "わずかな遅延が発生しうる"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-network",
              "cap": "読み取りアクセスを分散できる"
            },
            {
              "icon": "ic-server",
              "cap": "1台が落ちても他で継続できる"
            },
            {
              "icon": "ic-clock",
              "cap": "バックアップとしても使える"
            }
          ],
          "memo": "「更新した直後に自分で見るデータ」は特に注意が必要。",
          "sidebar_groups": [
            {
              "label": "関連するキーワード",
              "items": [
                {
                  "name": "Sharding",
                  "desc": "複製ではなく分割で負荷を分散する、もう1つの手段。",
                  "icon": "ic-layers",
                  "page": 113
                }
              ]
            }
          ]
        },
        {
          "id": "connection_pool",
          "page": 115,
          "term": "コネクションプール",
          "subtitle": "DBとの「つなぎっぱなし」の回線をみんなで使い回す",
          "category": "データベース・パフォーマンス",
          "icon": "ic-package",
          "oneline": "DBへの接続をあらかじめ複数用意してプールしておき、リクエストごとに使い回すことで接続のオーバーヘッドを減らす仕組み。",
          "q1_text": "リクエストのたびにDBへの接続を新規に張ると、接続処理自体のコストが積み重なり、同時接続数の上限に達しやすかった。",
          "q2_intro": "コネクションプールを意識する前は、リクエストのたびにDBへの接続を新しく張っていた。",
          "q2_table": {
            "col_before": "都度接続",
            "col_after": "コネクションプールで使い回し",
            "rows": [
              [
                "接続確立のコスト",
                "毎回発生する",
                "あらかじめ用意した接続を使い回す"
              ],
              [
                "同時接続数の管理",
                "意識しづらい",
                "上限を決めて管理できる"
              ],
              [
                "接続不足時の挙動",
                "エラーが発生しやすい",
                "待機させて捌くこともできる"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-clock",
              "cap": "接続確立の時間を節約できる"
            },
            {
              "icon": "ic-scale",
              "cap": "同時接続数を制御しやすい"
            },
            {
              "icon": "ic-server",
              "cap": "高負荷時も安定して捌ける"
            }
          ],
          "memo": "DBサーバー側の上限やアプリのサーバー台数とのバランスを見て決める必要がある。",
          "sidebar_groups": [
            {
              "label": "関連するキーワード",
              "items": [
                {
                  "name": "N+1",
                  "desc": "クエリ数が増えるほど、接続の使い回し方も重要になる。",
                  "icon": "ic-network",
                  "page": 99
                },
                {
                  "name": "Cache",
                  "desc": "接続や問い合わせそのものを減らす、もう1つの手段。",
                  "icon": "ic-clock",
                  "page": 100
                }
              ]
            }
          ]
        },
        {
          "id": "dump",
          "page": 116,
          "term": "ダンプ（Dump）",
          "subtitle": "データベースの「中身ごと書き出し」",
          "category": "データベース・運用",
          "icon": "ic-file",
          "oneline": "テーブルの定義やデータの中身を、ファイルとして丸ごと書き出すこと（またはそのファイル）。",
          "q1_text": "本番のデータを別環境に移したり、障害時に戻したりするには、DBの中身をファイルとして持ち出せる必要があった。",
          "q2_intro": "ダンプという発想の前は、必要な行を手でSELECTしてCSVにしたり、サーバごとコピーしたりしていた。",
          "q2_table": {
            "col_before": "手作業での持ち出し",
            "col_after": "ダンプで一括書き出し",
            "rows": [
              [
                "取得単位",
                "必要な表を個別に抽出",
                "スキーマごと・DBごと書き出せる"
              ],
              [
                "再現性",
                "手順が人依存になりやすい",
                "同じコマンドで何度でも取れる"
              ],
              [
                "復元",
                "INSERTを手で組み立てる",
                "ダンプファイルを流し込めば復元"
              ],
              [
                "用途",
                "ちょっとした確認向き",
                "バックアップ・移行・検証データに"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-package",
              "cap": "DBのスナップショットをファイルにできる"
            },
            {
              "icon": "ic-clock",
              "cap": "障害時にバックアップから戻せる"
            },
            {
              "icon": "ic-laptop",
              "cap": "本番相当のデータを開発環境に持ち込める"
            }
          ],
          "memo": "本番データをそのまま持ち込むのは危険。マスキングや匿名化をセットに。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "Migration",
                  "desc": "スキーマ変更をコードとして管理する仕組み。",
                  "icon": "ic-file",
                  "page": 92
                },
                {
                  "name": "Seeder",
                  "desc": "初期データやテスト用データを流し込む仕組み。",
                  "icon": "ic-package",
                  "page": 93
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "number": 7,
      "title": "フロントエンド",
      "entries": [
        {
          "id": "html",
          "page": 121,
          "term": "HTML",
          "subtitle": "Webページの骨組みを作るマークアップ言語",
          "category": "フロントエンド・基礎技術",
          "icon": "ic-file",
          "oneline": "見出しや段落、画像などの「要素」を並べて、Webページの構造を作るための言語。",
          "q1_text": "研究者同士で文書を共有するために、装飾がなくても構造がわかる書き方が必要だった。",
          "q2_intro": "それまでは、Word文書のような「見たまま」を編集するファイルでやり取りしていた。",
          "q2_table": {
            "col_before": "普通の文書ファイル",
            "col_after": "HTML",
            "rows": [
              [
                "見た目の編集",
                "見たまま(WYSIWYG)で編集",
                "タグで構造だけを指定"
              ],
              [
                "共有方法",
                "ファイルをやり取り",
                "URLで誰でも閲覧できる"
              ],
              [
                "機械的な読み取り",
                "レイアウト情報が中心",
                "見出し・段落等意味が明確"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-layers",
              "cap": "見出しや段落を意味づけできる"
            },
            {
              "icon": "ic-network",
              "cap": "リンクで文書同士をつなげる"
            },
            {
              "icon": "ic-monitor",
              "cap": "ブラウザさえあれば誰でも見られる"
            }
          ],
          "memo": "HTMLが担うのは「文章の意味・構造」。",
          "sidebar_groups": [
            {
              "label": "セットで使う技術",
              "items": [
                {
                  "name": "CSS",
                  "desc": "HTMLの見た目を整える言語。",
                  "page": 122,
                  "icon": "ic-image"
                },
                {
                  "name": "JavaScript",
                  "desc": "HTMLに動きを与える言語。",
                  "page": 123,
                  "icon": "ic-wheel"
                },
                {
                  "name": "DOM",
                  "desc": "HTMLをJSから操作できる形にしたもの。",
                  "page": 127,
                  "icon": "ic-network"
                }
              ]
            }
          ]
        },
        {
          "id": "css",
          "page": 122,
          "term": "CSS",
          "subtitle": "見た目を文章の中身から切り離した言語",
          "category": "フロントエンド・基礎技術",
          "icon": "ic-image",
          "oneline": "色・余白・レイアウトなど「見た目」だけをHTMLから分離して指定する言語。",
          "q1_text": "昔はHTMLタグそのものに色やフォントを直接埋め込んでいたため、デザインを変えるたびに全ページのタグを書き換える必要があった。",
          "q2_intro": "それまではHTMLタグに直接、見た目の指定を書き込んでいた。",
          "q2_table": {
            "col_before": "HTMLに直接指定",
            "col_after": "CSS",
            "rows": [
              [
                "見た目の変更",
                "全ページのタグを書き換え",
                "1つのファイルを直せば全体に反映"
              ],
              [
                "保守性",
                "HTMLとデザインが密結合",
                "構造(HTML)と見た目(CSS)を分離"
              ],
              [
                "再利用",
                "ページごとに書き直す",
                "クラス指定で使い回せる"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-image",
              "cap": "色・余白・フォントを一括管理できる"
            },
            {
              "icon": "ic-monitor",
              "cap": "画面サイズに応じて見た目を変えられる"
            },
            {
              "icon": "ic-wheel",
              "cap": "アニメーションも表現できる"
            }
          ],
          "memo": "「HTMLは構造、CSSは見た目」と覚えると迷わない。",
          "sidebar_groups": [
            {
              "label": "関連する技術",
              "items": [
                {
                  "name": "HTML",
                  "desc": "CSSが見た目を整える対象の文書構造。",
                  "page": 121,
                  "icon": "ic-file"
                },
                {
                  "name": "CSSフレームワーク",
                  "desc": "よく使うCSSをあらかじめ用意した道具箱。",
                  "page": 141,
                  "icon": "ic-package"
                }
              ]
            }
          ]
        },
        {
          "id": "javascript",
          "page": 123,
          "term": "JavaScript",
          "subtitle": "ブラウザに「動き」を与えたプログラミング言語",
          "category": "フロントエンド・基礎技術",
          "icon": "ic-wheel",
          "oneline": "Webページ内で計算や画面操作を行い、ユーザー操作に応じて動的に変化させる言語。",
          "q1_text": "HTML/CSSだけでは静止した文書しか作れず、入力チェックやアニメーションなど。",
          "q2_intro": "それまではHTML/CSSだけの、動きのない静的なページが中心だった。",
          "q2_table": {
            "col_before": "静的なHTML/CSSのみ",
            "col_after": "JavaScript追加後",
            "rows": [
              [
                "ページの振る舞い",
                "リンクをクリックしたら別ページに遷移するだけ",
                "クリックした場で表示を変えられる"
              ],
              [
                "入力チェック",
                "サーバーに送ってからエラー表示",
                "送信前にブラウザ内でチェックできる"
              ],
              [
                "更新方法",
                "ページ全体を再読み込み",
                "一部だけ書き換え可能"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-wheel",
              "cap": "クリックや入力に反応できる"
            },
            {
              "icon": "ic-layers",
              "cap": "ページの一部だけ書き換えられる"
            },
            {
              "icon": "ic-network",
              "cap": "サーバーと通信もできる"
            }
          ],
          "memo": "TypeScriptはこのJavaScriptに型を足したもの。",
          "sidebar_groups": [
            {
              "label": "関連する技術",
              "items": [
                {
                  "name": "HTML",
                  "desc": "JavaScriptが操作する対象の構造。",
                  "page": 121,
                  "icon": "ic-file"
                },
                {
                  "name": "CSS",
                  "desc": "JavaScriptが書き換える対象の見た目。",
                  "page": 122,
                  "icon": "ic-image"
                },
                {
                  "name": "TypeScript",
                  "desc": "JavaScriptに型を追加した言語。",
                  "page": 124,
                  "icon": "ic-scale"
                }
              ]
            }
          ]
        },
        {
          "id": "typescript",
          "page": 124,
          "term": "TypeScript",
          "subtitle": "JavaScriptに「型」の安全ベルトをつけた言語",
          "category": "フロントエンド・基礎技術",
          "icon": "ic-scale",
          "oneline": "JavaScriptに型情報を追加し、実行前にバグの芽をエディタ上で検出できるようにした言語。",
          "q1_text": "JavaScriptは型が自由な分、実行するまで型ミスに気づきにくかった。",
          "q2_intro": "それまではJavaScriptのまま、型を意識せずに開発していた。",
          "q2_table": {
            "col_before": "JavaScript",
            "col_after": "TypeScript",
            "rows": [
              [
                "型のチェック",
                "実行するまでわからない",
                "書いている時点でエディタが警告"
              ],
              [
                "大規模開発",
                "どこで何の型が渡るか読みづらい",
                "型定義がドキュメント代わりになる"
              ],
              [
                "実行環境",
                "そのままブラウザ/Node.jsで動く",
                "コンパイルしてJSに変換してから動く"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-layers",
              "cap": "変数の型を事前に定義できる"
            },
            {
              "icon": "ic-wheel",
              "cap": "エディタの補完が効きやすくなる"
            },
            {
              "icon": "ic-scale",
              "cap": "コンパイル時にミスに気づける"
            }
          ],
          "memo": "「動くけど正しいか実行するまでわからない」JSに対し、",
          "sidebar_groups": [
            {
              "label": "関連する技術",
              "items": [
                {
                  "name": "JavaScript",
                  "desc": "TypeScriptのベースになった言語。",
                  "page": 123,
                  "icon": "ic-wheel"
                },
                {
                  "name": "バニラ",
                  "desc": "型を付けない素のJavaScriptで書くこと。",
                  "page": 125,
                  "icon": "ic-package"
                }
              ]
            }
          ]
        },
        {
          "id": "vanilla-js",
          "page": 125,
          "term": "バニラ（Vanilla JS）",
          "subtitle": "フレームワークなしの「素のJavaScript」",
          "category": "フロントエンド・基礎技術",
          "icon": "ic-package",
          "oneline": "ReactやVueなどのライブラリを使わず、標準機能だけで書くJavaScriptのこと。",
          "q1_text": "昔はjQueryのようなライブラリを使うのが当たり前で、素のJSで書くことがむしろ珍しくなり、「何も足していない」定番フレーバーになぞらえて呼ばれ始めた。",
          "q2_intro": "それまではブラウザごとの挙動の違いを吸収するために、jQueryなどが重宝されていた。",
          "q2_table": {
            "col_before": "jQuery",
            "col_after": "バニラJS（標準API）",
            "rows": [
              [
                "要素の取得",
                "$('#id') のように書く",
                "document.querySelector() のように書く"
              ],
              [
                "依存",
                "ライブラリの読み込みが必須",
                "追加ライブラリ不要"
              ],
              [
                "ブラウザ対応差",
                "jQueryが吸収してくれた",
                "標準APIが揃った今はほぼ気にしなくてよい"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-package",
              "cap": "追加のライブラリなしで動く"
            },
            {
              "icon": "ic-file",
              "cap": "標準APIだけで完結する"
            },
            {
              "icon": "ic-wheel",
              "cap": "書き方の自由度は自分次第"
            }
          ],
          "memo": "標準APIが整った今はバニラJSだけで十分書けることが増えた。",
          "sidebar_groups": [
            {
              "label": "関連する技術",
              "items": [
                {
                  "name": "JavaScript",
                  "desc": "バニラJSの元になる標準言語。",
                  "page": 123,
                  "icon": "ic-wheel"
                },
                {
                  "name": "DOM",
                  "desc": "バニラJSが標準APIで直接操作する対象。",
                  "page": 127,
                  "icon": "ic-network"
                }
              ]
            }
          ]
        },
        {
          "id": "es-modules",
          "page": 126,
          "term": "ES Modules",
          "subtitle": "JavaScriptファイルを「部品」として輸出入する仕組み",
          "category": "フロントエンド・基礎技術",
          "icon": "ic-layers",
          "oneline": "import/exportを使って、JavaScriptのコードをファイル単位で分割・再利用できるようにする標準の仕組み。",
          "q1_text": "昔は<script>タグを並べる順番でグローバル変数がぶつかったり、ファイル同士の依存関係がコードから追えなかったりした。",
          "q2_intro": "それまでは<script>タグを並べる順番に頼って、グローバル空間を共有していた。",
          "q2_table": {
            "col_before": "グローバルスクリプト",
            "col_after": "ES Modules",
            "rows": [
              [
                "ファイル分割",
                "<script>タグの数だけ読み込み順に注意",
                "import/exportで依存関係を明示"
              ],
              [
                "変数の衝突",
                "グローバル空間を全ファイルで共有",
                "ファイルごとにスコープが分離"
              ],
              [
                "再利用",
                "コピペで使い回すことも多かった",
                "exportした関数やクラスをimportするだけ"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-package",
              "cap": "必要な部分だけimportできる"
            },
            {
              "icon": "ic-network",
              "cap": "依存関係がコードから追える"
            },
            {
              "icon": "ic-layers",
              "cap": "ビルドツールとも相性がよい"
            }
          ],
          "memo": "もう一つの「部品分け」の方式。ブラウザが標準対応したことで主流になった。",
          "sidebar_groups": [
            {
              "label": "関連する技術",
              "items": [
                {
                  "name": "JavaScript",
                  "desc": "ES Modulesが分割対象とする言語。",
                  "page": 123,
                  "icon": "ic-wheel"
                }
              ]
            }
          ]
        },
        {
          "id": "dom",
          "page": 127,
          "term": "DOM",
          "subtitle": "ブラウザがHTMLを「木構造」として持ったメモリ上の姿",
          "category": "フロントエンド・基礎技術",
          "icon": "ic-network",
          "oneline": "ブラウザが読み込んだHTMLを、JavaScriptから操作できるようツリー状のオブジェクトとして表現したもの。",
          "q1_text": "HTMLはただの文字列（テキスト）なので、そのままではJavaScriptから。",
          "q2_intro": "それまではHTMLをただの文字列として扱うしかなく、JSから直接触れなかった。",
          "q2_table": {
            "col_before": "HTML文字列そのまま",
            "col_after": "DOM（オブジェクトの木）",
            "rows": [
              [
                "JSからの操作",
                "文字列を書き換えても反映されない",
                "getElementById等で直接操作できる"
              ],
              [
                "構造の把握",
                "テキストを読んで判断するしかない",
                "親子・兄弟関係をたどれる"
              ],
              [
                "更新",
                "ページ全体を再解釈",
                "該当ノードだけ差し替え可能"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-file",
              "cap": "要素を取得・変更できる"
            },
            {
              "icon": "ic-wheel",
              "cap": "イベントを取り付けられる"
            },
            {
              "icon": "ic-layers",
              "cap": "一部のノードだけ書き換えられる"
            }
          ],
          "memo": "「HTMLを解析してできた操作用の木」がDOM。",
          "sidebar_groups": [
            {
              "label": "関連する技術",
              "items": [
                {
                  "name": "HTML",
                  "desc": "DOMのもとになる文書構造。",
                  "page": 121,
                  "icon": "ic-file"
                },
                {
                  "name": "Event",
                  "desc": "DOMの要素に取り付ける反応の仕組み。",
                  "page": 128,
                  "icon": "ic-clock"
                },
                {
                  "name": "Virtual DOM",
                  "desc": "本物のDOMの代わりに使う仮想の木。",
                  "page": 137,
                  "icon": "ic-layers"
                }
              ]
            }
          ]
        },
        {
          "id": "event",
          "page": 128,
          "term": "Event",
          "subtitle": "「クリックされた」を合図にコードを動かす仕組み",
          "category": "フロントエンド・基礎技術",
          "icon": "ic-clock",
          "oneline": "クリックやキー入力など、ユーザーやブラウザの動作をきっかけにJavaScriptの処理を実行させる仕組み。",
          "q1_text": "JavaScriptは基本的に上から順番に実行されるだけなので、「ボタンが押されたら」のようにタイミングを待って処理を始めたい場面に対応できなかった。",
          "q2_intro": "それまでは、状態が変わっていないか定期的にチェックし続ける発想しかなかった。",
          "q2_table": {
            "col_before": "定期的な状態チェック",
            "col_after": "Event",
            "rows": [
              [
                "処理の開始",
                "定期的に状態をチェックし続ける",
                "発生したその瞬間に呼ばれる"
              ],
              [
                "無駄な処理",
                "何も起きてなくてもチェックし続ける",
                "何も起きなければ何もしない"
              ],
              [
                "コードの書き方",
                "if文で状態を監視",
                "addEventListenerで登録するだけ"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-wheel",
              "cap": "クリックや入力に反応できる"
            },
            {
              "icon": "ic-network",
              "cap": "複数の処理を同時に待ち受けられる"
            },
            {
              "icon": "ic-clock",
              "cap": "非同期処理ともよく組み合わせる"
            }
          ],
          "memo": "Reactなどのライブラリは、これをより宣言的に書けるようにしている。",
          "sidebar_groups": [
            {
              "label": "関連する技術",
              "items": [
                {
                  "name": "DOM",
                  "desc": "Eventを取り付ける対象の要素。",
                  "page": 127,
                  "icon": "ic-network"
                },
                {
                  "name": "非同期（Asynchronous）",
                  "desc": "Eventの発生を待つ考え方の土台。",
                  "page": 138,
                  "icon": "ic-clock"
                },
                {
                  "name": "Component",
                  "desc": "Eventへの反応をまとめて持つ部品。",
                  "page": 129,
                  "icon": "ic-cube"
                }
              ]
            }
          ]
        },
        {
          "id": "component",
          "page": 129,
          "term": "Component",
          "subtitle": "画面を「部品」として組み立てる考え方",
          "category": "フロントエンド・UI設計",
          "icon": "ic-cube",
          "oneline": "ボタンやカードなど、画面の一部をひとまとまりの部品として切り出し、組み合わせて画面を作る考え方。",
          "q1_text": "ページ全体でHTML/CSS/JSを書いていると、同じような見た目の部品をあちこちにコピペし、1箇所直すたびに全部を探して修正する必要があった。",
          "q2_intro": "それまではページ単位でHTML/CSS/JSをその都度書いていた。",
          "q2_table": {
            "col_before": "ページ単位で記述",
            "col_after": "Component単位で部品化",
            "rows": [
              [
                "再利用",
                "似た見た目をコピペで量産",
                "1つのComponentを呼び出すだけ"
              ],
              [
                "修正",
                "使っている箇所を全部探して直す",
                "Component本体を直せば全箇所に反映"
              ],
              [
                "状態と見た目",
                "HTMLとJSが別ファイルで散らばりがち",
                "StateやPropsとセットで1部品にまとまる"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-cube",
              "cap": "見た目と振る舞いをひとまとめにできる"
            },
            {
              "icon": "ic-package",
              "cap": "何度でも使い回せる"
            },
            {
              "icon": "ic-layers",
              "cap": "組み合わせて画面を作れる"
            }
          ],
          "memo": "Componentの中身を決めるのがStateとProps。",
          "sidebar_groups": [
            {
              "label": "関連する技術",
              "items": [
                {
                  "name": "State",
                  "desc": "Componentが内部に持つ今の状態。",
                  "page": 130,
                  "icon": "ic-file"
                },
                {
                  "name": "Props",
                  "desc": "親から子のComponentへ渡す値。",
                  "page": 131,
                  "icon": "ic-network"
                },
                {
                  "name": "Virtual DOM",
                  "desc": "Componentの変化を効率よく反映する仕組み。",
                  "page": 137,
                  "icon": "ic-layers"
                }
              ]
            }
          ]
        },
        {
          "id": "state",
          "page": 130,
          "term": "State",
          "subtitle": "Componentが内部に持つ「今の状態」",
          "category": "フロントエンド・UI設計",
          "icon": "ic-file",
          "oneline": "開閉中かどうか、入力中の文字など、Componentが内部で持ち続ける「今の状態」のデータ。",
          "q1_text": "画面はクリックや入力のたびに見た目が変わる。「今どういう状態か」をどこかに覚えておかないと、変化のたびに画面全体を作り直すことになってしまう。",
          "q2_intro": "それまではDOMを直接書き換えて、その場その場で見た目を管理していた。",
          "q2_table": {
            "col_before": "DOMを直接書き換え",
            "col_after": "Stateで管理",
            "rows": [
              [
                "見た目の変更",
                "都度DOMを探して書き換える",
                "Stateを更新するだけで見た目が追従"
              ],
              [
                "現在の状態の把握",
                "DOMを見て判断するしかない",
                "変数（State）を見ればわかる"
              ],
              [
                "バグの発生源",
                "見た目とデータがずれることがある",
                "データ（State）が唯一の正解"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-file",
              "cap": "「今の値」を保持できる"
            },
            {
              "icon": "ic-wheel",
              "cap": "更新すると画面に反映される"
            },
            {
              "icon": "ic-network",
              "cap": "Propsとして子に渡すこともできる"
            }
          ],
          "memo": "「Stateが変わったら画面も変わる」という考え方が、ReactやVueの核。",
          "sidebar_groups": [
            {
              "label": "関連する技術",
              "items": [
                {
                  "name": "Component",
                  "desc": "Stateを内部に持つ部品。",
                  "page": 129,
                  "icon": "ic-cube"
                },
                {
                  "name": "Props",
                  "desc": "Stateを子に渡すときの形。",
                  "page": 131,
                  "icon": "ic-network"
                },
                {
                  "name": "Virtual DOM",
                  "desc": "Stateの変化を効率よく反映する仕組み。",
                  "page": 137,
                  "icon": "ic-layers"
                }
              ]
            }
          ]
        },
        {
          "id": "props",
          "page": 131,
          "term": "Props",
          "subtitle": "親から子のComponentへ渡す「荷物」",
          "category": "フロントエンド・UI設計",
          "icon": "ic-network",
          "oneline": "親のComponentから子のComponentへ、表示内容や設定値を渡すためのデータ。",
          "q1_text": "同じボタンComponentでも「送信」と表示したい場所と「キャンセル」と表示したい場所がある。",
          "q2_intro": "それまではComponentごとに文言を書き換えたコピーを作っていた。",
          "q2_table": {
            "col_before": "コピーして文言を変更",
            "col_after": "Propsで外から渡す",
            "rows": [
              [
                "表示の出し分け",
                "ボタンごとにComponentをコピーして文言を変更",
                "1つのComponentにPropsで文言を渡す"
              ],
              [
                "修正のしやすさ",
                "コピーした数だけ修正が必要",
                "Component本体を直せば全箇所に反映"
              ],
              [
                "データの向き",
                "決まっていない",
                "親→子への一方向"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-network",
              "cap": "呼び出し側から表示内容を指定できる"
            },
            {
              "icon": "ic-package",
              "cap": "Componentを使い回しやすくなる"
            },
            {
              "icon": "ic-layers",
              "cap": "Stateと組み合わせて使う"
            }
          ],
          "memo": "逆に子から親へ伝えたい時は、関数をPropsとして渡してもらい、それを呼び出す形にする。",
          "sidebar_groups": [
            {
              "label": "関連する技術",
              "items": [
                {
                  "name": "Component",
                  "desc": "Propsを受け取る部品。",
                  "page": 129,
                  "icon": "ic-cube"
                },
                {
                  "name": "State",
                  "desc": "Propsのもとになることが多いデータ。",
                  "page": 130,
                  "icon": "ic-file"
                }
              ]
            }
          ]
        },
        {
          "id": "csr",
          "page": 132,
          "term": "CSR",
          "subtitle": "ブラウザ側でHTMLを組み立てる方式",
          "category": "フロントエンド・レンダリング",
          "icon": "ic-laptop",
          "oneline": "サーバーからは最小限のHTMLとJavaScriptだけを送り、実際の画面はブラウザ側のJavaScriptが組み立てる方式。",
          "q1_text": "ReactやVueのようなComponent志向のライブラリが普及し、画面遷移のたびにサーバーへ問い合わせず、ブラウザ内で高速に画面を差し替えたいというニーズが強まった。",
          "q2_intro": "それまではアクセスのたびにサーバーが完成したHTMLを生成して返していた。",
          "q2_table": {
            "col_before": "旧来のサーバーレンダリング",
            "col_after": "CSR",
            "rows": [
              [
                "初回表示までの流れ",
                "サーバーが完成形のHTMLを返す",
                "空に近いHTMLを返し、JSが画面を組み立てる"
              ],
              [
                "画面遷移",
                "ページごとにサーバーへリクエスト",
                "遷移後の差分だけJSが書き換え"
              ],
              [
                "サーバーの負荷",
                "表示のたびにHTMLを生成",
                "初回以降はデータだけ返せばよい"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-wheel",
              "cap": "ページ遷移がヌルサクになる"
            },
            {
              "icon": "ic-cube",
              "cap": "Component中心に作りやすい"
            },
            {
              "icon": "ic-clock",
              "cap": "初期表示にはJS読み込みの時間がかかる"
            }
          ],
          "memo": "その分、初回表示が遅くなりやすいという弱点をSSRが補う。",
          "sidebar_groups": [
            {
              "label": "関連するレンダリング方式",
              "items": [
                {
                  "name": "Component",
                  "desc": "CSRで画面を組み立てる部品の単位。",
                  "page": 129,
                  "icon": "ic-cube"
                },
                {
                  "name": "SSR",
                  "desc": "サーバー側で先にHTMLを完成させる方式。",
                  "page": 133,
                  "icon": "ic-server"
                },
                {
                  "name": "Hydration",
                  "desc": "届いたHTMLにあとから動きを与える処理。",
                  "page": 136,
                  "icon": "ic-wheel"
                }
              ]
            }
          ]
        },
        {
          "id": "ssr",
          "page": 133,
          "term": "SSR",
          "subtitle": "サーバー側でHTMLを完成させてから届ける方式",
          "category": "フロントエンド・レンダリング",
          "icon": "ic-server",
          "oneline": "ブラウザで組み立てる前に、サーバー側で完成したHTMLを生成してから返す方式。",
          "q1_text": "CSRは初回表示までJSの読み込み・実行を待つ必要があり、表示が遅れたり検索エンジンが内容をうまく認識できないという課題があった。",
          "q2_intro": "それまではCSRで、空のHTMLとJSを送ってからブラウザ側が画面を組み立てていた。",
          "q2_table": {
            "col_before": "CSR",
            "col_after": "SSR",
            "rows": [
              [
                "初回表示までの流れ",
                "空のHTML+JSを送りブラウザが組み立てる",
                "サーバーが完成したHTMLを生成して送る"
              ],
              [
                "表示速度（初回）",
                "JSの読み込み・実行を待つ",
                "HTMLが届いた時点で見た目は表示される"
              ],
              [
                "SEO",
                "検索エンジンが内容を認識しづらい場合がある",
                "最初から完成したHTMLなので認識されやすい"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-clock",
              "cap": "初回表示が速い"
            },
            {
              "icon": "ic-network",
              "cap": "検索エンジンに強い"
            },
            {
              "icon": "ic-wheel",
              "cap": "表示後にHydrationでJSを有効化する必要がある"
            }
          ],
          "memo": "ただしアクセスのたびに生成し直すので負荷は上がる。変化が少ないページはSSGの方が効率的。",
          "sidebar_groups": [
            {
              "label": "関連するレンダリング方式",
              "items": [
                {
                  "name": "CSR",
                  "desc": "ブラウザ側でHTMLを組み立てる方式。",
                  "page": 132,
                  "icon": "ic-laptop"
                },
                {
                  "name": "SSG",
                  "desc": "ビルド時にあらかじめHTMLを作る方式。",
                  "page": 134,
                  "icon": "ic-server"
                },
                {
                  "name": "Hydration",
                  "desc": "SSRで届いたHTMLにあとから動きを与える処理。",
                  "page": 136,
                  "icon": "ic-wheel"
                }
              ]
            }
          ]
        },
        {
          "id": "ssg",
          "page": 134,
          "term": "SSG",
          "subtitle": "ビルド時にあらかじめHTMLを作っておく方式",
          "category": "フロントエンド・レンダリング",
          "icon": "ic-server",
          "oneline": "アクセスのたびに生成するSSRとは違い、ビルドの時点で全ページのHTMLを事前に作っておく方式。",
          "q1_text": "SSRはアクセスされるたびにサーバーでHTMLを生成するため、内容がほとんど変わらないページでも毎回同じ処理を繰り返し、サーバー負荷や速度の面で無駄が多かった。",
          "q2_intro": "それまではSSRで、リクエストが来るたびにサーバーがHTMLを生成していた。",
          "q2_table": {
            "col_before": "SSR",
            "col_after": "SSG",
            "rows": [
              [
                "HTML生成のタイミング",
                "リクエストが来るたびに生成",
                "ビルド時にあらかじめ全部生成"
              ],
              [
                "サーバーの負荷",
                "アクセスごとに処理が発生",
                "生成済みファイルを配るだけ"
              ],
              [
                "内容の更新",
                "リクエスト時点の最新データを反映できる",
                "再ビルドしないと内容が更新されない"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-clock",
              "cap": "配信がとにかく速い"
            },
            {
              "icon": "ic-server",
              "cap": "サーバー負荷がほぼゼロ"
            },
            {
              "icon": "ic-wheel",
              "cap": "更新のたびに再ビルドが必要"
            }
          ],
          "memo": "更新頻度が高いページで鮮度も速さも欲しい場合に生まれたのがISR。",
          "sidebar_groups": [
            {
              "label": "関連するレンダリング方式",
              "items": [
                {
                  "name": "SSR",
                  "desc": "アクセスのたびにHTMLを生成する方式。",
                  "page": 133,
                  "icon": "ic-server"
                },
                {
                  "name": "ISR",
                  "desc": "SSGを裏側で少しずつ更新する方式。",
                  "page": 135,
                  "icon": "ic-rocket"
                }
              ]
            }
          ]
        },
        {
          "id": "isr",
          "page": 135,
          "term": "ISR",
          "subtitle": "静的なのに「裏側でこっそり」更新される方式",
          "category": "フロントエンド・レンダリング",
          "icon": "ic-rocket",
          "oneline": "SSGの速さを保ちながら、一定時間ごとや条件に応じて裏側でページを再生成し、内容の鮮度も両立させる方式。",
          "q1_text": "SSGは速いが、内容を更新するたびにサイト全体を再ビルドする必要があり、更新頻度の高いページには不向きだった。",
          "q2_intro": "それまではSSGで、更新するたびにサイト全体を再ビルドしていた。",
          "q2_table": {
            "col_before": "SSG",
            "col_after": "ISR",
            "rows": [
              [
                "内容の更新",
                "サイト全体を再ビルドしないと反映されない",
                "該当ページだけ裏側で再生成"
              ],
              [
                "表示速度",
                "常に生成済みファイルを返すので速い",
                "同じく生成済みファイルを返すので速い"
              ],
              [
                "鮮度",
                "再ビルドするまで古いまま",
                "一定時間経過や条件で自動的に新しくなる"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-clock",
              "cap": "SSG並みの表示速度を維持"
            },
            {
              "icon": "ic-wheel",
              "cap": "全体の再ビルドが不要"
            },
            {
              "icon": "ic-server",
              "cap": "裏側で必要なページだけ更新"
            }
          ],
          "memo": "Next.jsなどのフレームワークが対応していることが多い。",
          "sidebar_groups": [
            {
              "label": "関連するレンダリング方式",
              "items": [
                {
                  "name": "SSG",
                  "desc": "ビルド時にHTMLを事前生成する方式。",
                  "page": 134,
                  "icon": "ic-server"
                },
                {
                  "name": "SSR",
                  "desc": "アクセスのたびにHTMLを生成する方式。",
                  "page": 133,
                  "icon": "ic-server"
                }
              ]
            }
          ]
        },
        {
          "id": "hydration",
          "page": 136,
          "term": "Hydration",
          "subtitle": "届いたHTMLに「あとから」命を吹き込む処理",
          "category": "フロントエンド・レンダリング",
          "icon": "ic-wheel",
          "oneline": "SSR/SSGで先に届いたHTMLに対して、ブラウザ側でJavaScriptを結びつけ、クリックなどに反応できる状態にする処理。",
          "q1_text": "SSR/SSGは見た目のHTMLを先に届けてくれるが、そのHTMLはただの文字列であり、まだボタンを押しても何も起きない「見た目だけ」の状態になっている。",
          "q2_intro": "それまでは（Hydrationなしで）届いたHTMLがそのまま最終形だった。",
          "q2_table": {
            "col_before": "SSR/SSGのみ（Hydrationなし）",
            "col_after": "SSR/SSG + Hydration",
            "rows": [
              [
                "表示されるHTML",
                "完成した見た目のHTMLが届く",
                "同じく完成した見た目のHTMLが届く"
              ],
              [
                "クリックなどへの反応",
                "ただのHTML文字列なので何も起きない",
                "JSが結びつき、反応できるようになる"
              ],
              [
                "必要な処理",
                "なし",
                "ブラウザ側でJavaScriptを実行し直す"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-clock",
              "cap": "見た目は先に、反応はあとから"
            },
            {
              "icon": "ic-server",
              "cap": "SSRやSSGとセットで使われる"
            },
            {
              "icon": "ic-wheel",
              "cap": "完了までクリックしても反応しないことがある"
            }
          ],
          "memo": "この待ち時間を減らす工夫（部分的なHydrationなど）も近年進んでいる。",
          "sidebar_groups": [
            {
              "label": "関連するレンダリング方式",
              "items": [
                {
                  "name": "SSR",
                  "desc": "Hydrationが必要になる方式のひとつ。",
                  "page": 133,
                  "icon": "ic-server"
                },
                {
                  "name": "SSG",
                  "desc": "Hydrationが必要になる方式のひとつ。",
                  "page": 134,
                  "icon": "ic-server"
                },
                {
                  "name": "CSR",
                  "desc": "HydrationではなくJSが最初から画面を組み立てる方式。",
                  "page": 132,
                  "icon": "ic-laptop"
                }
              ]
            }
          ]
        },
        {
          "id": "virtual-dom",
          "page": 137,
          "term": "Virtual DOM",
          "subtitle": "本物のDOMを直接触らないための「下書き」",
          "category": "フロントエンド・レンダリング",
          "icon": "ic-layers",
          "oneline": "実際のDOMを直接操作する代わりに、メモリ上に仮のツリーを作り、変化した部分だけを計算してから本物のDOMに反映する仕組み。",
          "q1_text": "本物のDOMを直接何度も書き換えると、ブラウザが都度レイアウトの再計算を行うため、Stateが頻繁に変わる画面では動作が重くなりがちだった。",
          "q2_intro": "それまではStateが変わるたびに、本物のDOMを直接書き換えていた。",
          "q2_table": {
            "col_before": "DOMを直接操作",
            "col_after": "Virtual DOM経由",
            "rows": [
              [
                "更新の単位",
                "変更のたびに本物のDOMを書き換え",
                "メモリ上の仮想ツリーで差分を計算してからまとめて反映"
              ],
              [
                "パフォーマンス",
                "更新が多いと重くなりやすい",
                "差分だけ反映するので効率的"
              ],
              [
                "書き方",
                "DOM操作を自分で細かく制御",
                "Stateの変化を宣言するだけで反映は任せられる"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-layers",
              "cap": "差分だけを計算して反映"
            },
            {
              "icon": "ic-cube",
              "cap": "本物のDOM操作を減らせる"
            },
            {
              "icon": "ic-wheel",
              "cap": "Stateの変化に強い"
            }
          ],
          "memo": "「仮想」とはいえ実体はただのJavaScriptのオブジェクト。",
          "sidebar_groups": [
            {
              "label": "関連する技術",
              "items": [
                {
                  "name": "DOM",
                  "desc": "Virtual DOMが最終的に反映する本物の木構造。",
                  "page": 127,
                  "icon": "ic-network"
                },
                {
                  "name": "State",
                  "desc": "Virtual DOMが差分を計算するきっかけになるデータ。",
                  "page": 130,
                  "icon": "ic-file"
                },
                {
                  "name": "Component",
                  "desc": "Virtual DOMを使って更新される部品の単位。",
                  "page": 129,
                  "icon": "ic-cube"
                }
              ]
            }
          ]
        },
        {
          "id": "async",
          "page": 138,
          "term": "非同期（Asynchronous）",
          "subtitle": "「待ち時間」のあいだ他の処理を進める考え方",
          "category": "JavaScript・非同期処理",
          "icon": "ic-clock",
          "oneline": "通信やファイル読み込みなど、時間のかかる処理の完了を待たずに、他の処理を並行して進められるようにする考え方。",
          "q1_text": "JavaScriptは基本的に処理を1つずつ順番にこなすため、通信などの時間がかかる処理をそのまま待つ書き方をすると、その間ブラウザ全体が固まってしまう。",
          "q2_intro": "それまでは同期処理として、1つの処理が終わるまで次を待つのが基本だった。",
          "q2_table": {
            "col_before": "同期処理",
            "col_after": "非同期処理",
            "rows": [
              [
                "通信中の挙動",
                "結果が返るまで他の処理が止まる",
                "結果を待たずに他の処理を続けられる"
              ],
              [
                "画面の反応",
                "通信中は固まったように見えることがある",
                "通信中も操作を受け付けられる"
              ],
              [
                "書き方の歴史",
                "コールバック関数を渡す(コールバック地獄)",
                "Promiseやasync・awaitで整理"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-clock",
              "cap": "通信中も画面が固まらない"
            },
            {
              "icon": "ic-network",
              "cap": "複数の処理を並行して進められる"
            },
            {
              "icon": "ic-wheel",
              "cap": "書き方はPromiseなどで進化してきた"
            }
          ],
          "memo": "「非同期」という考え方自体は昔からあったが、",
          "sidebar_groups": [
            {
              "label": "関連する技術",
              "items": [
                {
                  "name": "Promise",
                  "desc": "非同期処理の結果をまとめて扱うオブジェクト。",
                  "page": 139,
                  "icon": "ic-scale"
                },
                {
                  "name": "async・await",
                  "desc": "Promiseを同期処理のように書ける構文。",
                  "page": 140,
                  "icon": "ic-wheel"
                },
                {
                  "name": "Event",
                  "desc": "非同期の発生をきっかけにする仕組み。",
                  "page": 128,
                  "icon": "ic-clock"
                }
              ]
            }
          ]
        },
        {
          "id": "promise",
          "page": 139,
          "term": "Promise",
          "subtitle": "「いつか終わる処理」の結果を表す約束手形",
          "category": "JavaScript・非同期処理",
          "icon": "ic-scale",
          "oneline": "非同期処理の結果（成功か失敗か）を、あとから受け取れる形でまとめて扱えるようにするオブジェクト。",
          "q1_text": "非同期処理をコールバック関数で書くと、処理が増えるたびにコールバックの中に。",
          "q2_intro": "それまではコールバック関数を渡す方式で、非同期処理をつなげていた。",
          "q2_table": {
            "col_before": "コールバック関数",
            "col_after": "Promise",
            "rows": [
              [
                "複数の非同期処理をつなげる",
                "コールバックの中にコールバックがネストしていく",
                ".then()で横に並べてつなげられる"
              ],
              [
                "エラー処理",
                "各コールバックごとに書く必要がある",
                ".catch()でまとめて扱える"
              ],
              [
                "見た目",
                "ネストが深くなり右にどんどん寄っていく",
                "処理の順番が上から下に読める"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-scale",
              "cap": "成功・失敗をまとめて扱える"
            },
            {
              "icon": "ic-network",
              "cap": ".then()で処理をつなげられる"
            },
            {
              "icon": "ic-wheel",
              "cap": "async・awaitでさらに読みやすく書ける"
            }
          ],
          "memo": "「コールバック地獄」を解消するために生まれたのがPromise。",
          "sidebar_groups": [
            {
              "label": "関連する技術",
              "items": [
                {
                  "name": "非同期（Asynchronous）",
                  "desc": "Promiseが扱う処理そのものの考え方。",
                  "page": 138,
                  "icon": "ic-clock"
                },
                {
                  "name": "async・await",
                  "desc": "Promiseを読みやすく書くための構文。",
                  "page": 140,
                  "icon": "ic-wheel"
                }
              ]
            }
          ]
        },
        {
          "id": "async-await",
          "page": 140,
          "term": "async・await",
          "subtitle": "非同期処理を「同期っぽく」読める書き方",
          "category": "JavaScript・非同期処理",
          "icon": "ic-wheel",
          "oneline": "Promiseを使った非同期処理を、あたかも上から順番に処理しているかのように書けるようにする構文。",
          "q1_text": "Promiseの.then()が増えると、処理の流れが追いにくくなった。",
          "q2_intro": "それまではPromiseの.then()を数珠つなぎにする書き方が中心だった。",
          "q2_table": {
            "col_before": "Promiseの.then()",
            "col_after": "async・await",
            "rows": [
              [
                "見た目",
                ".then()を数珠つなぎにする",
                "awaitを付けるだけで上から順に読める"
              ],
              [
                "エラー処理",
                ".catch()をチェーンにつなげる",
                "try/catchという馴染みのある書き方が使える"
              ],
              [
                "変数の受け渡し",
                ".then()の引数として受け取る",
                "通常の変数のように代入して使える"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-file",
              "cap": "同期処理のような自然な見た目"
            },
            {
              "icon": "ic-scale",
              "cap": "try/catchでエラー処理できる"
            },
            {
              "icon": "ic-wheel",
              "cap": "中身の仕組みはPromiseのまま"
            }
          ],
          "memo": "糖衣構文。中身の非同期処理はPromiseのまま。",
          "sidebar_groups": [
            {
              "label": "関連する技術",
              "items": [
                {
                  "name": "Promise",
                  "desc": "async・awaitの土台になっているオブジェクト。",
                  "page": 139,
                  "icon": "ic-scale"
                },
                {
                  "name": "非同期（Asynchronous）",
                  "desc": "async・awaitが扱う処理の考え方。",
                  "page": 138,
                  "icon": "ic-clock"
                }
              ]
            }
          ]
        },
        {
          "id": "css-framework",
          "page": 141,
          "term": "CSSフレームワーク",
          "subtitle": "よく使うデザインをあらかじめ用意しておく道具箱",
          "category": "フロントエンド・スタイリング",
          "icon": "ic-package",
          "oneline": "ボタンやレイアウトなど、よく使うデザインパーツのCSSをあらかじめ用意しておき、クラス名を付けるだけで使えるようにしたもの。",
          "q1_text": "CSSは自由度が高い分、余白や色、レイアウトなどの細部を一から調整するのに時間がかかり、デザイナーがいないチームでは見た目の統一も難しかった。",
          "q2_intro": "それまではCSSを一から書いて、見た目を1つずつ作り込んでいた。",
          "q2_table": {
            "col_before": "CSSを一から書く",
            "col_after": "CSSフレームワーク",
            "rows": [
              [
                "見た目の作成",
                "余白・色・角丸等を1つずつ指定",
                "用意されたクラスを付けるだけ"
              ],
              [
                "デザインの統一感",
                "チームやページごとにばらつきが出やすい",
                "フレームワークのルールで自然と揃う"
              ],
              [
                "学習コスト",
                "CSSの知識が幅広く必要",
                "クラス名の一覧を覚えれば書き始められる"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-package",
              "cap": "クラス名を付けるだけで見た目が整う"
            },
            {
              "icon": "ic-scale",
              "cap": "チーム内でデザインが揃いやすい"
            },
            {
              "icon": "ic-wheel",
              "cap": "独自色を出すにはカスタマイズが必要"
            }
          ],
          "memo": "BootstrapやTailwind CSSなどが代表格。",
          "sidebar_groups": [
            {
              "label": "関連する技術",
              "items": [
                {
                  "name": "CSS",
                  "desc": "CSSフレームワークの土台になる言語。",
                  "page": 122,
                  "icon": "ic-image"
                },
                {
                  "name": "UIコンポーネントライブラリ",
                  "desc": "見た目に加えて動きまで含む部品を提供するもの。",
                  "page": 142,
                  "icon": "ic-cube"
                }
              ]
            }
          ]
        },
        {
          "id": "ui-component-library",
          "page": 142,
          "term": "UIコンポーネントライブラリ",
          "compact": true,
          "subtitle": "動くパーツごと完成させて配ってくれる道具箱",
          "category": "フロントエンド・スタイリング",
          "icon": "ic-cube",
          "oneline": "ボタンやモーダルなど、見た目だけでなく開閉などの動作（振る舞い）まで含んだComponentを、そのまま使える形で提供するライブラリ。",
          "q1_text": "ボタンやフォームを毎回CSSから作ると、見た目と挙動のブレが起きやすかった。",
          "q2_intro": "それまではCSSフレームワークで見た目だけ整え、動きの部分は自分で実装していた。",
          "q2_table": {
            "col_before": "CSSフレームワーク",
            "col_after": "UIコンポーネントライブラリ",
            "rows": [
              [
                "提供される範囲",
                "見た目（クラス名）のみ",
                "見た目＋開閉等の動作込みのComponent"
              ],
              [
                "実装コスト",
                "モーダル等の開閉ロジックは自分で書く",
                "importして使うだけで動く"
              ],
              [
                "カスタマイズ性",
                "自由度が高い分すべて自作",
                "用意されたPropsの範囲での調整が中心"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-cube",
              "cap": "ボタンやモーダルがそのまま使える"
            },
            {
              "icon": "ic-package",
              "cap": "見た目と動きがセットで届く"
            },
            {
              "icon": "ic-scale",
              "cap": "Props経由で細かく調整できる"
            }
          ],
          "memo": "React向けのMUIやshadcn/ui、Vue向けのVuetifyなどが代表例。",
          "sidebar_groups": [
            {
              "label": "関連する技術",
              "items": [
                {
                  "name": "CSSフレームワーク",
                  "desc": "見た目の材料を提供するもの。",
                  "page": 141,
                  "icon": "ic-package"
                },
                {
                  "name": "Component",
                  "desc": "UIコンポーネントライブラリが提供する部品の単位。",
                  "page": 129,
                  "icon": "ic-cube"
                },
                {
                  "name": "Props",
                  "desc": "UIコンポーネントライブラリの部品を調整する手段。",
                  "page": 131,
                  "icon": "ic-network"
                }
              ]
            }
          ]
        },
        {
          "id": "nodejs",
          "page": 143,
          "term": "Node.js",
          "subtitle": "JavaScript を「ブラウザの外」で動かした技術",
          "category": "ランタイム",
          "icon": "ic-server",
          "oneline": "ブラウザの中でしか実行できなかった JavaScript を、サーバーやPC上で動かせるようにするランタイム。",
          "q1_text": "JavaScript はブラウザの中でしか実行できず、サーバーサイドは別の言語で書くしかなかった。",
          "q2_intro": "サーバーサイドは Ruby・PHP・Java など、フロントとは別の言語で書いていた。",
          "q2_table": {
            "col_before": "サーバー専用言語",
            "col_after": "Node.js",
            "rows": [
              [
                "言語",
                "Ruby / PHP / Java 等",
                "JavaScript（フロントと共通）"
              ],
              [
                "実行エンジン",
                "各言語専用のランタイム",
                "Chrome の V8 エンジン"
              ],
              [
                "得意分野",
                "汎用処理全般",
                "I/O待ちが多い並行処理"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-server",
              "cap": "サーバーサイドをJSで書ける"
            },
            {
              "icon": "ic-network",
              "cap": "フロントとバックの言語を統一"
            },
            {
              "icon": "ic-package",
              "cap": "npmエコシステムを利用可能"
            }
          ],
          "memo": "この後 Bun・Deno という2つの後継が生まれることになる。",
          "sidebar_groups": [
            {
              "label": "仲間のランタイム",
              "items": [
                {
                  "name": "Bun",
                  "desc": "Node.js互換で起動・実行をまるごと高速化。",
                  "icon": "ic-rocket",
                  "page": 144
                },
                {
                  "name": "Deno",
                  "desc": "Node.js作者が作り直した安全志向のランタイム。",
                  "icon": "ic-scale",
                  "page": 145
                }
              ]
            }
          ]
        },
        {
          "id": "bun",
          "page": 144,
          "term": "Bun",
          "subtitle": "Node.js の「遅さ」をまとめて解決しようとしたランタイム",
          "category": "ランタイム",
          "icon": "ic-rocket",
          "oneline": "Node.js互換を保ちながら、実行・パッケージ管理・テストまで1つのバイナリで高速化したランタイム。",
          "q1_text": "Node.jsは便利だが、起動の遅さやツールの分散がボトルネックになった。",
          "q2_intro": "Node.js では、実行は node、パッケージ管理は npm、テストは Jest のように道具を組み合わせていた。",
          "q2_table": {
            "col_before": "Node.js（組み合わせ型）",
            "col_after": "Bun",
            "rows": [
              [
                "実行エンジン",
                "V8",
                "JavaScriptCore（Safari系）"
              ],
              [
                "パッケージ管理",
                "npm / yarn を別途利用",
                "標準搭載で高速"
              ],
              [
                "ツール構成",
                "node + npm + Jest 等別々",
                "1つのバイナリに統合"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-clock",
              "cap": "起動・実行がとにかく速い"
            },
            {
              "icon": "ic-package",
              "cap": "パッケージ管理も内蔵"
            },
            {
              "icon": "ic-cube",
              "cap": "テストランナーも標準装備"
            }
          ],
          "memo": "Node互換を保ちつつ、実行・パッケージ管理・テストを1バイナリに統合。",
          "sidebar_groups": [
            {
              "label": "比較する技術",
              "items": [
                {
                  "name": "Node.js",
                  "desc": "JSをブラウザの外で動かす元祖ランタイム。",
                  "icon": "ic-server",
                  "page": 143
                },
                {
                  "name": "Deno",
                  "desc": "安全性を重視したもう1つの後継ランタイム。",
                  "icon": "ic-scale",
                  "page": 145
                }
              ]
            }
          ]
        },
        {
          "id": "deno",
          "page": 145,
          "term": "Deno",
          "subtitle": "Node.js を作った人が「作り直した」ランタイム",
          "category": "ランタイム",
          "icon": "ic-scale",
          "oneline": "デフォルトでは何もアクセスできず、TypeScriptをそのまま実行できる安全志向のJSランタイム。",
          "q1_text": "Node.js は自由度が高い反面、npmパッケージが暗黙に。",
          "q2_intro": "Node.js では、パッケージは特に制限なくファイル・ネットワーク・環境変数へアクセスできていた。",
          "q2_table": {
            "col_before": "Node.js",
            "col_after": "Deno",
            "rows": [
              [
                "権限",
                "デフォルトで全許可",
                "デフォルトで全拒否（明示許可制）"
              ],
              [
                "TypeScript",
                "別途トランスパイル設定が必要",
                "標準でそのまま実行可能"
              ],
              [
                "パッケージ管理",
                "npm + node_modules",
                "URL importも可能（npm互換も追加済）"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-scale",
              "cap": "ファイル/ネット権限を明示指定"
            },
            {
              "icon": "ic-file",
              "cap": "TypeScriptをそのまま実行"
            },
            {
              "icon": "ic-cloud",
              "cap": "Deno Deployで手軽にデプロイ"
            }
          ],
          "memo": "反省して作り直した、という差分エピソードの持ち主。",
          "sidebar_groups": [
            {
              "label": "比較する技術",
              "items": [
                {
                  "name": "Node.js",
                  "desc": "JSをブラウザの外で動かす元祖ランタイム。",
                  "icon": "ic-server",
                  "page": 143
                },
                {
                  "name": "Bun",
                  "desc": "Node.js互換で速さに振り切ったランタイム。",
                  "icon": "ic-rocket",
                  "page": 144
                }
              ]
            }
          ]
        },
        {
          "id": "react",
          "page": 146,
          "term": "React",
          "subtitle": "画面を「部品」の組み合わせで作る発想を広めたライブラリ",
          "category": "フレームワーク",
          "icon": "ic-layers",
          "oneline": "UIを再利用可能なコンポーネント単位で組み立てるためのJavaScriptライブラリ。",
          "q1_text": "素のJS・DOM操作で画面を作ると、状態が変わるたびに。",
          "q2_intro": "それまでは jQuery などでDOMを直接操作し、画面の状態を自分で追跡・更新していた。",
          "q2_table": {
            "col_before": "素のJS / jQuery",
            "col_after": "React",
            "rows": [
              [
                "更新方法",
                "DOMを直接書き換え",
                "状態（State）からUIを再計算"
              ],
              [
                "再利用",
                "コピペで使い回し",
                "コンポーネントとして部品化"
              ],
              [
                "学習コスト",
                "低い",
                "JSX・Hooks等独自の書き方あり"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-layers",
              "cap": "画面をコンポーネント単位で管理"
            },
            {
              "icon": "ic-wheel",
              "cap": "状態が変わると自動で再描画"
            },
            {
              "icon": "ic-network",
              "cap": "Next.jsなど周辺エコシステムが豊富"
            }
          ],
          "memo": "宣言的UIの発想。それまでは全部手動だった。",
          "sidebar_groups": [
            {
              "label": "比較する技術",
              "items": [
                {
                  "name": "Vue",
                  "desc": "HTMLに近い書き味で始められるフレームワーク。",
                  "icon": "ic-layers",
                  "page": 147
                }
              ]
            },
            {
              "label": "関連する技術",
              "items": [
                {
                  "name": "Next.js",
                  "desc": "Reactにルーティングなどを標準搭載したフレームワーク。",
                  "icon": "ic-network",
                  "page": 148
                },
                {
                  "name": "Redux",
                  "desc": "アプリ全体の状態を1箇所にまとめる状態管理。",
                  "icon": "ic-layers",
                  "page": 163
                }
              ]
            }
          ]
        },
        {
          "id": "vue",
          "page": 147,
          "term": "Vue",
          "subtitle": "HTMLに近い書き味で始められる、もう1つの人気フレームワーク",
          "category": "フレームワーク",
          "icon": "ic-layers",
          "oneline": "テンプレート構文でHTMLに近い書き方をしながら、コンポーネント単位で画面を作れるフレームワーク。",
          "q1_text": "React は強力だったが、JSXという独自記法の学習コストがあり、「もっとHTML/CSSに近い書き方で始めたい」という声があった。",
          "q2_intro": "Reactでは、JSXの中にHTMLに似せたJS構文でUIを書いていた。",
          "q2_table": {
            "col_before": "React（JSX）",
            "col_after": "Vue（テンプレート）",
            "rows": [
              [
                "記法",
                "JS内にHTMLっぽい構文（JSX）",
                "HTMLに<template>タグで分離"
              ],
              [
                "学習の入り口",
                "JSの知識が前提",
                "HTML/CSSからでも始めやすい"
              ],
              [
                "状態管理の書き方",
                "useState等のHooks",
                "ref / reactive等専用API"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-file",
              "cap": "HTML/CSS/JSを分けて書ける"
            },
            {
              "icon": "ic-wheel",
              "cap": "双方向バインディングが手軽"
            },
            {
              "icon": "ic-scribble",
              "cap": "公式ドキュメントが読みやすい"
            }
          ],
          "memo": "別解、という差分の関係。",
          "sidebar_groups": [
            {
              "label": "比較する技術",
              "items": [
                {
                  "name": "React",
                  "desc": "状態からUIを再計算するコンポーネント指向ライブラリ。",
                  "icon": "ic-layers",
                  "page": 146
                }
              ]
            },
            {
              "label": "関連する技術",
              "items": [
                {
                  "name": "Nuxt.js",
                  "desc": "Vueにルーティングなどを標準搭載したフレームワーク。",
                  "icon": "ic-network",
                  "page": 149
                },
                {
                  "name": "Pinia",
                  "desc": "Vue公式が推奨する状態管理ライブラリ。",
                  "icon": "ic-layers",
                  "page": 165
                }
              ]
            }
          ]
        },
        {
          "id": "nextjs",
          "page": 148,
          "term": "Next.js",
          "subtitle": "Reactだけでは決めきれない「ルーティングどうする問題」を解決したフレームワーク",
          "category": "フレームワーク",
          "icon": "ic-network",
          "oneline": "Reactにルーティングやサーバーサイドレンダリングなどを標準搭載した、本番運用向けフレームワーク。",
          "q1_text": "Reactだけではページ遷移やSSRを毎回自分で組み合わせる必要があった。",
          "q2_intro": "Reactだけの構成では、ルーティングライブラリやSSR用サーバーを個別に用意していた。",
          "q2_table": {
            "col_before": "Reactのみ（素の構成）",
            "col_after": "Next.js",
            "rows": [
              [
                "ルーティング",
                "別ライブラリを追加・設定",
                "ファイル配置だけで自動生成"
              ],
              [
                "描画方式",
                "基本CSRのみ",
                "SSR / SSG / ISRを選択可能"
              ],
              [
                "初期設定",
                "自分で構成を決める",
                "フレームワークが規約として提供"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-network",
              "cap": "ファイルベースでルーティング自動化"
            },
            {
              "icon": "ic-server",
              "cap": "SSR/SSGを標準サポート"
            },
            {
              "icon": "ic-rocket",
              "cap": "Vercelへワンコマンドでデプロイ"
            }
          ],
          "memo": "肩代わりしてくれる、という差分。",
          "sidebar_groups": [
            {
              "label": "土台の技術",
              "items": [
                {
                  "name": "React",
                  "desc": "コンポーネント単位でUIを組み立てるライブラリ。",
                  "icon": "ic-layers",
                  "page": 146
                }
              ]
            },
            {
              "label": "比較する技術",
              "items": [
                {
                  "name": "Nuxt.js",
                  "desc": "VueにとってのNext.js的な存在。",
                  "icon": "ic-network",
                  "page": 149
                }
              ]
            }
          ]
        },
        {
          "id": "nuxtjs",
          "page": 149,
          "term": "Nuxt.js",
          "subtitle": "Vueにとっての Next.js 的存在",
          "category": "フレームワーク",
          "icon": "ic-network",
          "oneline": "Vueにルーティングやサーバーサイドレンダリングなどを標準搭載した、本番運用向けフレームワーク。",
          "q1_text": "Vueも同様に、ルーティングやSSRを個別に組み合わせる必要があり、プロジェクトごとに構成がバラつく問題があった。",
          "q2_intro": "Vueのみの構成では、vue-routerなどを個別に追加し、SSRも自前でサーバーを用意していた。",
          "q2_table": {
            "col_before": "Vueのみ（素の構成）",
            "col_after": "Nuxt.js",
            "rows": [
              [
                "ルーティング",
                "vue-routerを個別設定",
                "ファイル配置だけで自動生成"
              ],
              [
                "描画方式",
                "基本CSRのみ",
                "SSR / SSG / ISRを選択可能"
              ],
              [
                "設定ファイル",
                "プロジェクトごとにバラバラ",
                "規約で統一される"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-network",
              "cap": "ファイルベースでルーティング自動化"
            },
            {
              "icon": "ic-server",
              "cap": "SSR/SSGを標準サポート"
            },
            {
              "icon": "ic-layers",
              "cap": "Vueのモジュールを組み込みやすい"
            }
          ],
          "memo": "差分のペア、と覚えておくと整理しやすい。",
          "sidebar_groups": [
            {
              "label": "土台の技術",
              "items": [
                {
                  "name": "Vue",
                  "desc": "HTMLに近い書き味のコンポーネント指向フレームワーク。",
                  "icon": "ic-layers",
                  "page": 147
                }
              ]
            },
            {
              "label": "比較する技術",
              "items": [
                {
                  "name": "Next.js",
                  "desc": "ReactにとってのNuxt.js的な存在。",
                  "icon": "ic-network",
                  "page": 148
                }
              ]
            }
          ]
        },
        {
          "id": "vite",
          "page": 150,
          "term": "Vite",
          "subtitle": "ビルドを「待つ」時代を終わらせた開発サーバー",
          "category": "ツール",
          "icon": "ic-rocket",
          "oneline": "ブラウザのESモジュール機能を使って、開発中の画面表示をほぼ一瞬で反映するビルドツール。",
          "q1_text": "従来のビルドツールは、ファイルを1つ書き換えるたびに。",
          "q2_intro": "従来はWebpackなどでJS全体を事前にバンドルしてからブラウザに渡していた。",
          "q2_table": {
            "col_before": "Webpack等（バンドル型）",
            "col_after": "Vite",
            "rows": [
              [
                "開発時の起動",
                "全体をバンドルしてから起動",
                "ESモジュールでそのまま配信"
              ],
              [
                "変更の反映",
                "変更範囲によって再バンドル",
                "変更ファイルだけ即時反映（高速HMR）"
              ],
              [
                "本番ビルド",
                "同じ仕組みでビルド",
                "Rollupで最適化ビルド"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-clock",
              "cap": "開発サーバーの起動が高速"
            },
            {
              "icon": "ic-wheel",
              "cap": "保存した瞬間に画面へ反映"
            },
            {
              "icon": "ic-package",
              "cap": "本番用ビルドは別途最適化"
            }
          ],
          "memo": "React/Vueどちらの開発でも定番になっている。",
          "sidebar_groups": [
            {
              "label": "関連する技術",
              "items": [
                {
                  "name": "React",
                  "desc": "Viteの定番テンプレートの1つ。",
                  "icon": "ic-layers",
                  "page": 146
                },
                {
                  "name": "ESLint",
                  "desc": "開発時のコードチェックを担うLinter。",
                  "icon": "ic-scale",
                  "page": 151
                }
              ]
            }
          ]
        },
        {
          "id": "eslint",
          "page": 151,
          "term": "ESLint",
          "subtitle": "「動くけど危ないコード」を書いた瞬間に教えてくれる仕組み",
          "category": "ツール",
          "icon": "ic-scale",
          "oneline": "コードのルール違反やバグの芽を、実行する前に静的解析で指摘してくれるLinter。",
          "q1_text": "未使用変数や書き方のばらつき、うっかりバグにレビューまで気づけず、レビューコストや事故が増えていた。",
          "q2_intro": "それまでは、コードレビューで人力で指摘するか、規約を文書として共有するだけだった。",
          "q2_table": {
            "col_before": "人力レビュー・規約文書",
            "col_after": "ESLint",
            "rows": [
              [
                "チェックのタイミング",
                "レビュー時（後追い）",
                "保存・コミット時（即座）"
              ],
              [
                "基準のブレ",
                "レビュアーによって差が出る",
                "ルールとして統一・自動化"
              ],
              [
                "対応範囲",
                "見つけたものだけ",
                "プロジェクト全体を機械的に走査"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-scale",
              "cap": "ルール違反を自動検出"
            },
            {
              "icon": "ic-wheel",
              "cap": "保存時に自動修正も可能"
            },
            {
              "icon": "ic-network",
              "cap": "チーム全体でルールを統一"
            }
          ],
          "memo": "この後、速さを競う後継ツールが次々と生まれる。",
          "sidebar_groups": [
            {
              "label": "高速化を競う後継",
              "items": [
                {
                  "name": "Biome",
                  "desc": "Lintと整形をRustで1本にまとめたツール。",
                  "icon": "ic-rocket",
                  "page": 152
                },
                {
                  "name": "OXC",
                  "desc": "パーサーからRustで作り直すプロジェクト。",
                  "icon": "ic-rocket",
                  "page": 153
                }
              ]
            }
          ]
        },
        {
          "id": "biome",
          "page": 152,
          "term": "Biome",
          "subtitle": "ESLintより速く、Prettierの仕事も1本でこなすツール",
          "category": "ツール",
          "icon": "ic-rocket",
          "oneline": "Lint（コードチェック）とFormat（整形）をRust製の1つのツールでまとめて高速に行うツール。",
          "q1_text": "ESLintとPrettierの二重設定と、大規模プロジェクトでの遅さが課題だった。",
          "q2_intro": "従来はESLint（Lint用）とPrettier（整形用）をそれぞれJavaScriptで実装し、組み合わせて使っていた。",
          "q2_table": {
            "col_before": "ESLint + Prettier（組み合わせ）",
            "col_after": "Biome",
            "rows": [
              [
                "役割",
                "Lintと整形を別ツールで担当",
                "1つのツールでLint+整形"
              ],
              [
                "実装言語",
                "JavaScript",
                "Rust（高速）"
              ],
              [
                "設定ファイル",
                "2つ（.eslintrc / .prettierrc）",
                "1つに統一"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-clock",
              "cap": "Lint・整形が高速"
            },
            {
              "icon": "ic-package",
              "cap": "1ツールで設定が完結"
            },
            {
              "icon": "ic-file",
              "cap": "ESLint設定からの移行支援あり"
            }
          ],
          "memo": "「速さ」で殴る系ツールの1つ。",
          "sidebar_groups": [
            {
              "label": "比較する技術",
              "items": [
                {
                  "name": "ESLint",
                  "desc": "JS実装の老舗Linter。",
                  "icon": "ic-scale",
                  "page": 151
                },
                {
                  "name": "OXC",
                  "desc": "パース処理からRustで高速化する次の一手。",
                  "icon": "ic-rocket",
                  "page": 153
                }
              ]
            }
          ]
        },
        {
          "id": "oxc",
          "page": 153,
          "term": "OXC",
          "subtitle": "JSツールチェイン全部をRustで書き直す、という荒業",
          "category": "ツール",
          "icon": "ic-rocket",
          "oneline": "パーサー・Linter・整形・ビルドまで、JS周辺ツールをまとめてRustで高速に作り直すプロジェクト。",
          "q1_text": "Lintや整形は速くなっても、パースやビルドはまだJS実装が多かった。",
          "q2_intro": "それまでは、Lintと整形はBiomeやESLintのように個別最適化され、パーサーやバンドラーは各ツールがバラバラに実装していた。",
          "q2_table": {
            "col_before": "JS実装のツール群（個別最適化）",
            "col_after": "OXC",
            "rows": [
              [
                "対象範囲",
                "Lint / 整形等個別ツール",
                "パーサー〜ビルドまで一貫してRust化"
              ],
              [
                "速度",
                "ツールごとに差がある",
                "全体を通してネイティブ速度"
              ],
              [
                "採用状況",
                "各社が個別に高速化を試す",
                "Vite等他ツールへの組み込みが進行中"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-rocket",
              "cap": "パース処理からネイティブ高速化"
            },
            {
              "icon": "ic-network",
              "cap": "他ツールへの組み込みが進行中"
            },
            {
              "icon": "ic-wheel",
              "cap": "JSツールチェイン全体を刷新"
            }
          ],
          "memo": "最新章。次はどこまで速くなるか。",
          "sidebar_groups": [
            {
              "label": "高速化競争のはじまり",
              "items": [
                {
                  "name": "ESLint",
                  "desc": "JS実装の老舗Linter。",
                  "icon": "ic-scale",
                  "page": 151
                },
                {
                  "name": "Biome",
                  "desc": "Rustで1本化した中継地点。",
                  "icon": "ic-rocket",
                  "page": 152
                }
              ]
            }
          ]
        },
        {
          "id": "tailwindcss",
          "page": 154,
          "term": "Tailwind CSS",
          "subtitle": "「クラス名を考える時間」を無くしたCSSの書き方",
          "category": "ツール",
          "icon": "ic-scribble",
          "oneline": "あらかじめ用意された小さなユーティリティクラスをHTMLに直接並べてスタイルを作るCSSフレームワーク。",
          "q1_text": "CSSでは、要素ごとに意味のあるクラス名を考えて別ファイルに。",
          "q2_intro": "それまでは、独自クラス名を都度設計するCSS設計（BEMなど）で対応していた。",
          "q2_table": {
            "col_before": "独自CSS設計 / BEMなど",
            "col_after": "Tailwind CSS",
            "rows": [
              [
                "書く場所",
                "別ファイルにCSSを記述",
                "HTMLのclass属性に直接記述"
              ],
              [
                "命名",
                "要素ごとに意味のある名前を考える",
                "用意されたユーティリティ名を組み合わせる"
              ],
              [
                "見た目の変更",
                "CSSファイルを探して修正",
                "HTML上でクラスを足し引き"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-scribble",
              "cap": "クラス名を考えなくてよい"
            },
            {
              "icon": "ic-wheel",
              "cap": "HTML上で見た目が完結"
            },
            {
              "icon": "ic-package",
              "cap": "未使用クラスはビルド時に自動除去"
            }
          ],
          "memo": "思想の差分。賛否ある分だけ広く使われている。",
          "sidebar_groups": [
            {
              "label": "組み合わせる技術",
              "items": [
                {
                  "name": "MUI",
                  "desc": "既製のUI部品ごと使えるコンポーネント集。",
                  "icon": "ic-layers",
                  "page": 155
                },
                {
                  "name": "shadcn/ui",
                  "desc": "コードをコピーして使うUI集。",
                  "icon": "ic-scribble",
                  "page": 156
                }
              ]
            }
          ]
        },
        {
          "id": "mui",
          "page": 155,
          "term": "MUI",
          "subtitle": "ボタンやフォームを1から作らなくていい、部品まるごとの詰め合わせ",
          "category": "ツール",
          "icon": "ic-layers",
          "oneline": "Googleのマテリアルデザインに沿ったボタン・フォームなどのReact用UIコンポーネント集。",
          "q1_text": "Tailwindだけでは、ボタンやモーダルなど定番部品を毎回組み立てる手間があった。",
          "q2_intro": "それまでは、Tailwindなどでスタイルだけを当てつつ、UI部品自体は自分でHTML構造から組み立てていた。",
          "q2_table": {
            "col_before": "自前でUI部品を実装",
            "col_after": "MUI",
            "rows": [
              [
                "部品の中身",
                "都度HTML構造から実装",
                "ボタン・モーダル等を既製品として提供"
              ],
              [
                "見た目の統一感",
                "都度デザイン判断が必要",
                "マテリアルデザインの基準に沿う"
              ],
              [
                "カスタマイズ",
                "自由（だが手間）",
                "テーマ機能で配色等を調整"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-layers",
              "cap": "既製のUI部品を組み込むだけ"
            },
            {
              "icon": "ic-image",
              "cap": "マテリアルデザインで統一感"
            },
            {
              "icon": "ic-wheel",
              "cap": "テーマ設定で配色を一括変更"
            }
          ],
          "memo": "という差分の対比で覚えるとわかりやすい。",
          "sidebar_groups": [
            {
              "label": "比較する技術",
              "items": [
                {
                  "name": "Tailwind CSS",
                  "desc": "ユーティリティクラスでスタイルを組み立てる。",
                  "icon": "ic-scribble",
                  "page": 154
                },
                {
                  "name": "shadcn/ui",
                  "desc": "コードをコピーして使う別解のUI集。",
                  "icon": "ic-scribble",
                  "page": 156
                }
              ]
            }
          ]
        },
        {
          "id": "shadcn-ui",
          "page": 156,
          "term": "shadcn/ui",
          "subtitle": "「ライブラリ」ではなく「コピペするコード」という新発想のUI集",
          "category": "ツール",
          "icon": "ic-scribble",
          "oneline": "MUIのような既製部品ライブラリではなく、必要な分だけコードをプロジェクトにコピーして使うUIコンポーネント集。",
          "q1_text": "MUIのようなライブラリは便利だが、内部の見た目を細かく。",
          "q2_intro": "MUIなどでは、npmでライブラリを追加し、用意されたコンポーネントをそのままimportして使っていた。",
          "q2_table": {
            "col_before": "MUI等（ライブラリ追加型）",
            "col_after": "shadcn/ui",
            "rows": [
              [
                "導入方法",
                "npm installでライブラリ追加",
                "CLIでソースコードごとプロジェクトへコピー"
              ],
              [
                "カスタマイズ",
                "ライブラリの制約内で調整",
                "コードを直接編集して自由に変更"
              ],
              [
                "依存関係",
                "ライブラリ本体に依存し続ける",
                "コピー後は自分のコードとして管理"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-file",
              "cap": "コードを直接プロジェクトへコピー"
            },
            {
              "icon": "ic-scribble",
              "cap": "見た目を細部まで自由に編集"
            },
            {
              "icon": "ic-package",
              "cap": "Tailwind CSSと組み合わせて使う"
            }
          ],
          "memo": "発想転換、という差分。",
          "sidebar_groups": [
            {
              "label": "比較する技術",
              "items": [
                {
                  "name": "MUI",
                  "desc": "既製部品をライブラリとして利用する方式。",
                  "icon": "ic-layers",
                  "page": 155
                },
                {
                  "name": "Tailwind CSS",
                  "desc": "見た目を組み立てるユーティリティCSS。",
                  "icon": "ic-scribble",
                  "page": 154
                }
              ]
            }
          ]
        },
        {
          "id": "electron",
          "page": 157,
          "term": "Electron",
          "subtitle": "Webの技術だけでデスクトップアプリを作る発想",
          "category": "ツール",
          "icon": "ic-monitor",
          "oneline": "HTML・CSS・JavaScriptで書いた画面を、そのままWindows/Mac用のデスクトップアプリとして動かす仕組み。",
          "q1_text": "デスクトップアプリを作るには、OSごとに別の言語・UI部品を。",
          "q2_intro": "それまでは、C++/C#/SwiftなどOSごとのネイティブ言語・フレームワークで別々に実装していた。",
          "q2_table": {
            "col_before": "ネイティブ実装（OSごと）",
            "col_after": "Electron",
            "rows": [
              [
                "言語",
                "C++ / C# / Swift等",
                "HTML / CSS / JavaScript"
              ],
              [
                "対応OS",
                "OSごとに別実装が必要",
                "1つのコードで複数OSに対応"
              ],
              [
                "代表例",
                "—",
                "VS Code / Slack / Discord等"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-monitor",
              "cap": "1つのコードで複数OSに対応"
            },
            {
              "icon": "ic-laptop",
              "cap": "Web技術の知識をそのまま流用"
            },
            {
              "icon": "ic-package",
              "cap": "ブラウザ機能ごとアプリに同梱"
            }
          ],
          "memo": "動作は重めになりがち、というのが差分の裏側。",
          "sidebar_groups": [
            {
              "label": "比較する技術",
              "items": [
                {
                  "name": "PWA",
                  "desc": "ストア審査なしでアプリっぽさを出す別解。",
                  "icon": "ic-laptop",
                  "page": 158
                }
              ]
            }
          ]
        },
        {
          "id": "pwa",
          "page": 158,
          "term": "PWA",
          "subtitle": "アプリストアを経由せず、Webサイトを「アプリっぽく」使わせる仕組み",
          "category": "Web技術",
          "icon": "ic-laptop",
          "oneline": "ホーム画面への追加やオフライン動作など、通常のWebサイトにネイティブアプリに近い体験を持たせる技術。",
          "q1_text": "ネイティブアプリはストア審査やインストールの手間があり、「開くだけで使えて、でもアプリっぽい体験も欲しい」という要望があった。",
          "q2_intro": "それまでは、ネイティブアプリ（iOS/Android別）かElectronのようなデスクトップ包装で「アプリらしさ」を実現していた。",
          "q2_table": {
            "col_before": "ネイティブアプリ / Electron",
            "col_after": "PWA",
            "rows": [
              [
                "配布方法",
                "ストア経由 / インストーラー配布",
                "URLを開くだけ・ホーム画面に追加"
              ],
              [
                "オフライン対応",
                "各プラットフォームの機能で実装",
                "Service Workerで実現"
              ],
              [
                "審査",
                "ストア審査が必要な場合あり",
                "審査不要（Webの延長）"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-laptop",
              "cap": "ホーム画面に追加できる"
            },
            {
              "icon": "ic-cloud",
              "cap": "オフラインでも一部動作"
            },
            {
              "icon": "ic-rocket",
              "cap": "ストア審査なしで配信・更新"
            }
          ],
          "memo": "という差分の落とし所。",
          "sidebar_groups": [
            {
              "label": "比較する技術",
              "items": [
                {
                  "name": "Electron",
                  "desc": "Web技術でデスクトップアプリを作る仕組み。",
                  "icon": "ic-monitor",
                  "page": 157
                }
              ]
            },
            {
              "label": "関連する指標",
              "items": [
                {
                  "name": "Core Web Vitals",
                  "desc": "ページの体感品質を数値化する指標。",
                  "icon": "ic-clock",
                  "page": 162
                }
              ]
            }
          ]
        },
        {
          "id": "webassembly",
          "page": 159,
          "term": "WebAssembly",
          "subtitle": "ブラウザでJavaScript以外の言語を高速に動かす仕組み",
          "category": "Web技術",
          "icon": "ic-cube",
          "oneline": "C/C++/Rustなどで書いたコードをブラウザ上でネイティブに近い速度で実行できるバイナリ形式。",
          "q1_text": "画像・動画処理やゲームなど重い処理をJavaScriptだけで行うと速度が足りず、ブラウザでは実現しづらい用途があった。",
          "q2_intro": "それまでは、重い処理はサーバー側で行うか、JavaScriptを愚直にチューニングして何とか動かしていた。",
          "q2_table": {
            "col_before": "JS実行のみ / サーバーで処理",
            "col_after": "WebAssembly",
            "rows": [
              [
                "実行速度",
                "JSエンジン依存で限界がある",
                "ネイティブに近い速度"
              ],
              [
                "書ける言語",
                "JavaScript（派生含む）のみ",
                "C / C++ / Rust / Go等をコンパイルして実行"
              ],
              [
                "用途例",
                "—",
                "画像編集・ゲーム・動画処理等"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-cube",
              "cap": "重い処理をブラウザ内で高速実行"
            },
            {
              "icon": "ic-network",
              "cap": "JSと連携して部分的に利用可能"
            },
            {
              "icon": "ic-layers",
              "cap": "C/Rust資産をWebに持ち込める"
            }
          ],
          "memo": "発想の差分。",
          "sidebar_groups": [
            {
              "label": "関連する技術",
              "items": [
                {
                  "name": "Core Web Vitals",
                  "desc": "速度も含めたページ品質を測る指標。",
                  "icon": "ic-clock",
                  "page": 162
                }
              ]
            }
          ]
        },
        {
          "id": "a11y",
          "page": 160,
          "term": "a11y（アクセシビリティ）",
          "subtitle": "「使える人」を無意識に絞り込んでいないか、を問い直す視点",
          "category": "Web品質",
          "icon": "ic-scale",
          "oneline": "視覚・聴覚・身体的な違いなどに関わらず、誰もがWebサイトを使えるようにする設計・実装の総称。",
          "q1_text": "見た目の実装に集中し、スクリーンリーダーやキーボード操作が後回しになりがちだった。",
          "q2_intro": "それまでは「動けばOK」「見た目が良ければOK」という基準で実装され、a11yは余力があれば対応する程度だった。",
          "q2_table": {
            "col_before": "見た目・動作優先の実装",
            "col_after": "a11y対応の実装",
            "rows": [
              [
                "対象ユーザー",
                "標準的な操作ができる人が前提",
                "視覚/聴覚/身体的な違いがある人も含む"
              ],
              [
                "チェック項目",
                "デザイン通りに動くか",
                "altテキスト・コントラスト比・操作性も確認"
              ],
              [
                "評価軸",
                "見た目の完成度",
                "WCAG等の基準への準拠度"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-scale",
              "cap": "誰でも使える設計を評価軸に追加"
            },
            {
              "icon": "ic-file",
              "cap": "altテキストやラベルを適切に付与"
            },
            {
              "icon": "ic-network",
              "cap": "キーボードのみでも操作可能に"
            }
          ],
          "memo": "「アクセシビリティ対応」は追加機能ではなく、",
          "sidebar_groups": [
            {
              "label": "関連する語",
              "items": [
                {
                  "name": "i18n（国際化）",
                  "desc": "言語や地域による差分を吸収する対応。",
                  "icon": "ic-network",
                  "page": 161
                },
                {
                  "name": "Core Web Vitals",
                  "desc": "速度など体感品質を測る指標。",
                  "icon": "ic-clock",
                  "page": 162
                }
              ]
            }
          ]
        },
        {
          "id": "i18n",
          "page": 161,
          "term": "i18n（国際化）",
          "subtitle": "「日本語しか出ない」から卒業するための下ごしらえ",
          "category": "Web品質",
          "icon": "ic-network",
          "oneline": "アプリの文言や日付・通貨の表記を、言語や地域ごとに切り替えられるようにする仕組み・対応のこと。",
          "q1_text": "最初は日本語だけを想定して文言をコードに直接書いていたが、海外展開が必要になり、全箇所を洗い出す羽目になった。",
          "q2_intro": "それまでは、表示文言をコンポーネントの中に直接ハードコーディングしていた。",
          "q2_table": {
            "col_before": "文言を直接ハードコーディング",
            "col_after": "i18n対応",
            "rows": [
              [
                "文言の管理",
                "コード内に直接記述",
                "言語ごとの辞書ファイルに分離"
              ],
              [
                "言語切り替え",
                "対応不可（作り直しが必要）",
                "辞書を差し替えるだけで対応"
              ],
              [
                "日付・通貨表記",
                "決め打ちの書式",
                "ロケールに応じて自動整形"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-network",
              "cap": "言語ごとに辞書ファイルを切り替え"
            },
            {
              "icon": "ic-file",
              "cap": "日付・通貨をロケール対応で表示"
            },
            {
              "icon": "ic-wheel",
              "cap": "後から言語追加がしやすい"
            }
          ],
          "memo": "という差分の教訓。",
          "sidebar_groups": [
            {
              "label": "関連する語",
              "items": [
                {
                  "name": "a11y（アクセシビリティ）",
                  "desc": "誰もが使える設計にするための視点。",
                  "icon": "ic-scale",
                  "page": 160
                }
              ]
            }
          ]
        },
        {
          "id": "core-web-vitals",
          "page": 162,
          "term": "Core Web Vitals",
          "subtitle": "「なんとなく重い」を数値で説明できるようにした指標",
          "category": "Web品質",
          "icon": "ic-clock",
          "oneline": "表示速度・操作反応・レイアウトのガタつきなど、Webページの体感品質を3つの指標で数値化したもの。",
          "q1_text": "「サイトが遅い気がする」「レイアウトがガクッと動く」といった。",
          "q2_intro": "それまでは、ページ速度は主観的な感想や、ツールごとにバラバラな独自指標で語られていた。",
          "q2_table": {
            "col_before": "主観的な感想 / 独自指標",
            "col_after": "Core Web Vitals",
            "rows": [
              [
                "評価方法",
                "「なんか遅い」等の感覚",
                "LCP / INP / CLSという共通指標で数値化"
              ],
              [
                "比較のしやすさ",
                "ツール・人によってバラバラ",
                "業界標準の指標で横並び比較可能"
              ],
              [
                "SEOとの関係",
                "明確な関連は薄かった",
                "検索順位の評価要素の1つに"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-clock",
              "cap": "表示速度をLCPで数値化"
            },
            {
              "icon": "ic-wheel",
              "cap": "操作の反応速度をINPで測定"
            },
            {
              "icon": "ic-image",
              "cap": "レイアウトのガタつきをCLSで測定"
            }
          ],
          "memo": "終わらせるための指標。",
          "sidebar_groups": [
            {
              "label": "関連する語",
              "items": [
                {
                  "name": "PWA",
                  "desc": "アプリっぽい体験を実現する技術。",
                  "icon": "ic-laptop",
                  "page": 158
                },
                {
                  "name": "a11y（アクセシビリティ）",
                  "desc": "誰もが使える設計にするための視点。",
                  "icon": "ic-scale",
                  "page": 160
                }
              ]
            }
          ]
        },
        {
          "id": "redux",
          "page": 163,
          "term": "Redux",
          "subtitle": "「どのコンポーネントの状態が正しいんだっけ」を終わらせた仕組み",
          "category": "状態管理",
          "icon": "ic-layers",
          "oneline": "アプリ全体の状態（State）を1箇所にまとめて管理する、React向けの状態管理ライブラリ。",
          "q1_text": "画面が複雑になるにつれ、Props経由で何段もコンポーネントを。",
          "q2_intro": "それまでは、Reactの標準機能（useState/Props）だけで、必要な状態を親から子へ渡していた。",
          "q2_table": {
            "col_before": "useState + Propsのバケツリレー",
            "col_after": "Redux",
            "rows": [
              [
                "状態の置き場所",
                "各コンポーネントに分散",
                "ストアという1箇所に集約"
              ],
              [
                "更新方法",
                "各コンポーネントで直接更新",
                "Action/Reducerという決まった手順で更新"
              ],
              [
                "追跡のしやすさ",
                "どこで変わったか追いにくい",
                "変更履歴を1本の流れとして追跡可能"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-layers",
              "cap": "状態を1箇所のストアに集約"
            },
            {
              "icon": "ic-network",
              "cap": "離れたコンポーネント間でも状態共有"
            },
            {
              "icon": "ic-scale",
              "cap": "決まった手順でしか状態を変更できない"
            }
          ],
          "memo": "という差分のトレードオフ。",
          "sidebar_groups": [
            {
              "label": "土台の技術",
              "items": [
                {
                  "name": "React",
                  "desc": "コンポーネント単位でUIを組み立てるライブラリ。",
                  "icon": "ic-layers",
                  "page": 146
                }
              ]
            },
            {
              "label": "軽量な後継",
              "items": [
                {
                  "name": "Zustand",
                  "desc": "手順の少ない軽量な状態管理。",
                  "icon": "ic-layers",
                  "page": 164
                }
              ]
            }
          ]
        },
        {
          "id": "zustand",
          "page": 164,
          "term": "Zustand",
          "subtitle": "Reduxの「お作法の多さ」に疲れた人たちが選んだ軽量な状態管理",
          "category": "状態管理",
          "icon": "ic-layers",
          "oneline": "Action/Reducerのような決まった手順を省き、少ないコードでReactの状態を共有できる軽量な状態管理ライブラリ。",
          "q1_text": "Reduxは強力だが、小〜中規模の画面には覚えることが多すぎた。",
          "q2_intro": "それまでは、状態管理といえばRedux一択で、小さな機能追加にもRedux一式の手順を書いていた。",
          "q2_table": {
            "col_before": "Redux（手順が多い）",
            "col_after": "Zustand",
            "rows": [
              [
                "書く量",
                "Action/Reducer/Dispatchを定義",
                "1つの関数でストアを定義するだけ"
              ],
              [
                "学習コスト",
                "専用の設計思想を理解する必要",
                "素のJSの感覚に近く読み書きしやすい"
              ],
              [
                "向いている規模",
                "大規模・チーム開発向け",
                "小〜中規模でも導入しやすい"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-wheel",
              "cap": "少ないコードで状態を共有"
            },
            {
              "icon": "ic-scribble",
              "cap": "覚えることが少ない"
            },
            {
              "icon": "ic-package",
              "cap": "必要な機能だけ後から追加可能"
            }
          ],
          "memo": "生まれた選択肢、という差分。",
          "sidebar_groups": [
            {
              "label": "比較する技術",
              "items": [
                {
                  "name": "Redux",
                  "desc": "手順は多いが予測可能性の高い状態管理。",
                  "icon": "ic-layers",
                  "page": 163
                },
                {
                  "name": "Pinia",
                  "desc": "Vue版の似た立ち位置の状態管理。",
                  "icon": "ic-layers",
                  "page": 165
                }
              ]
            }
          ]
        },
        {
          "id": "pinia",
          "page": 165,
          "term": "Pinia",
          "subtitle": "Vue公式が選んだ、Vuexに代わる状態管理",
          "category": "状態管理",
          "icon": "ic-layers",
          "oneline": "Vue公式が推奨する、TypeScriptとの相性やシンプルさを重視した状態管理ライブラリ。",
          "q1_text": "Vueの状態管理はVuexが定番だったが、TypeScriptとの相性の。",
          "q2_intro": "それまでは、Vuexという公式の状態管理ライブラリでMutation・Actionを分けて状態を更新していた。",
          "q2_table": {
            "col_before": "Vuex（Mutation/Action分離）",
            "col_after": "Pinia",
            "rows": [
              [
                "更新の手順",
                "MutationとActionを分けて定義",
                "Actionだけで状態を直接更新可能"
              ],
              [
                "TypeScript対応",
                "型推論が弱く相性が悪い",
                "型推論が効きやすい設計"
              ],
              [
                "公式の立ち位置",
                "長らく公式推奨だった",
                "現在の公式推奨はこちら"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-layers",
              "cap": "ストアをシンプルな構文で定義"
            },
            {
              "icon": "ic-wheel",
              "cap": "型推論が効いて書きやすい"
            },
            {
              "icon": "ic-network",
              "cap": "複数ストアに分割して管理しやすい"
            }
          ],
          "memo": "「シンプル化」の流れは共通、という差分のまとめ。",
          "sidebar_groups": [
            {
              "label": "土台の技術",
              "items": [
                {
                  "name": "Vue",
                  "desc": "HTMLに近い書き味のコンポーネント指向フレームワーク。",
                  "icon": "ic-layers",
                  "page": 147
                }
              ]
            },
            {
              "label": "比較する技術",
              "items": [
                {
                  "name": "Zustand",
                  "desc": "React版の似た立ち位置の状態管理。",
                  "icon": "ic-layers",
                  "page": 164
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "number": 8,
      "title": "バックエンド言語・フレームワーク",
      "entries": [
        {
          "id": "ruby",
          "page": 171,
          "term": "Ruby",
          "subtitle": "「人間が読みやすい」を設計思想の中心に置いた言語",
          "category": "プログラミング言語",
          "icon": "ic-scribble",
          "oneline": "書きやすさ・読みやすさを最優先に設計された、Ruby on Railsの生みの親でもあるプログラミング言語。",
          "q1_text": "Perlなど既存の言語は便利だが、人間の感情に寄り添っていないと感じたまつもとゆきひろ氏が、「プログラマが幸せになる言語」を目指して開発した。",
          "q2_intro": "それまではCやPerlなど、書きやすさより実行効率や記号的な簡潔さを優先する言語が主流だった。",
          "q2_table": {
            "col_before": "C / Perlなど",
            "col_after": "Ruby",
            "rows": [
              [
                "設計の軸",
                "実行速度・記号の簡潔さ",
                "書きやすさ・読みやすさ"
              ],
              [
                "文法",
                "記号中心",
                "英語に近い自然な文法"
              ],
              [
                "オブジェクト指向",
                "言語による",
                "全てがオブジェクト"
              ],
              [
                "向いている場面",
                "システムプログラミング等",
                "Web開発・スクリプト"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-scribble",
              "cap": "書きやすいコードが書ける"
            },
            {
              "icon": "ic-rocket",
              "cap": "Webアプリを素早く開発できる"
            },
            {
              "icon": "ic-package",
              "cap": "豊富なgemで機能を拡張できる"
            }
          ],
          "memo": "同じ処理でも複数の書き方が許されているのは、この思想の表れ。",
          "sidebar_groups": [
            {
              "label": "関連する技術",
              "items": [
                {
                  "name": "Rails",
                  "desc": "RubyのWebフレームワーク。設定より規約の思想で作られている。",
                  "icon": "ic-server",
                  "page": 177
                }
              ]
            },
            {
              "label": "比較する言語",
              "items": [
                {
                  "name": "Python",
                  "desc": "同じく書きやすさを重視するスクリプト言語。",
                  "icon": "ic-file",
                  "page": 172
                }
              ]
            }
          ]
        },
        {
          "id": "python",
          "page": 172,
          "term": "Python",
          "subtitle": "シンプルな文法で、Web開発からAI・データ分析まで橋渡しする言語",
          "category": "プログラミング言語",
          "icon": "ic-file",
          "oneline": "インデントで構造を表す簡潔な文法を持ち、Web開発・データ分析・機械学習まで幅広く使われる言語。",
          "q1_text": "「読みやすいコードこそ書きやすいコード」という思想のもと、Guido van Rossumが誰にでも読める言語を目指して開発した。",
          "q2_intro": "それまでは{}やendでブロックを表す言語が主流で、書き手によってコードの見た目がバラバラになりがちだった。",
          "q2_table": {
            "col_before": "他の主要言語（Java/C++など）",
            "col_after": "Python",
            "rows": [
              [
                "ブロックの表現",
                "{}やend",
                "インデント（強制）"
              ],
              [
                "文法量",
                "多い・冗長になりがち",
                "少ない・簡潔"
              ],
              [
                "用途の広さ",
                "得意分野が限定的",
                "Web・AI・自動化まで横断"
              ],
              [
                "学習コスト",
                "高め",
                "低め（初学者にも人気）"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-file",
              "cap": "シンプルな文法で書ける"
            },
            {
              "icon": "ic-network",
              "cap": "AI・データ分析にも使える"
            },
            {
              "icon": "ic-package",
              "cap": "ライブラリが豊富"
            }
          ],
          "memo": "どのファイルを見てもコードの見た目が揃うのはこのため。",
          "sidebar_groups": [
            {
              "label": "関連する技術",
              "items": [
                {
                  "name": "Django",
                  "desc": "電池付属の思想を持つフルスタックフレームワーク。",
                  "icon": "ic-layers",
                  "page": 180
                },
                {
                  "name": "FastAPI",
                  "desc": "型ヒントを活かした高速なAPIフレームワーク。",
                  "icon": "ic-rocket",
                  "page": 181
                },
                {
                  "name": "Flask",
                  "desc": "必要な機能だけを足していく軽量フレームワーク。",
                  "icon": "ic-file",
                  "page": 182
                }
              ]
            },
            {
              "label": "比較する言語",
              "items": [
                {
                  "name": "Ruby",
                  "desc": "同じく書きやすさを重視するスクリプト言語。",
                  "icon": "ic-scribble",
                  "page": 171
                }
              ]
            }
          ]
        },
        {
          "id": "go",
          "page": 173,
          "term": "Go",
          "subtitle": "Googleが「大規模開発のシンプルさ」のために作った言語",
          "category": "プログラミング言語",
          "icon": "ic-wheel",
          "oneline": "並行処理を言語レベルでサポートし、シンプルな文法と高速な実行を両立するGoogle製の言語。",
          "q1_text": "Googleの大規模なコードベースで、C++の複雑なビルドやJavaの冗長さに悩まされていたエンジニアたちが、「シンプルに書けて、速く動く」言語を目指して開発した。",
          "q2_intro": "それまではC++やJavaで並行処理を書く場合、スレッドやロックを自前で細かく管理する必要があった。",
          "q2_table": {
            "col_before": "C++ / Java",
            "col_after": "Go",
            "rows": [
              [
                "並行処理の書き方",
                "スレッド・ロックを自前管理",
                "goroutineで軽量に書ける"
              ],
              [
                "文法の量",
                "多機能・複雑になりがち",
                "意図的にシンプル"
              ],
              [
                "コンパイル",
                "遅い・セットアップが重い場合も",
                "高速コンパイル・単一バイナリ"
              ],
              [
                "向いている場面",
                "大規模アプリ全般",
                "インフラ・API・CLIツール"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-rocket",
              "cap": "高速に動作する"
            },
            {
              "icon": "ic-network",
              "cap": "並行処理を手軽に書ける"
            },
            {
              "icon": "ic-cube",
              "cap": "単一バイナリで配布できる"
            }
          ],
          "memo": "選択肢を減らすことで、誰が書いても読みやすいコードになる。",
          "sidebar_groups": [
            {
              "label": "関連する技術",
              "items": [
                {
                  "name": "Gin",
                  "desc": "Goの速さを活かしたシンプルなWebフレームワーク。",
                  "icon": "ic-rocket",
                  "page": 183
                }
              ]
            },
            {
              "label": "比較する言語",
              "items": [
                {
                  "name": "Rust",
                  "desc": "速度に加えてメモリ安全性をコンパイル時に保証する言語。",
                  "icon": "ic-wheel",
                  "page": 176
                }
              ]
            }
          ]
        },
        {
          "id": "php",
          "page": 174,
          "term": "PHP",
          "subtitle": "「Webページに動きをつける」ために生まれ、今もWebを支える言語",
          "category": "プログラミング言語",
          "icon": "ic-file",
          "oneline": "HTMLに埋め込んで使える手軽さから広まり、大規模なWebサービスの基盤にもなっているサーバーサイド言語。",
          "q1_text": "個人サイトのアクセス数を数える簡単なツールとして誕生し、「HTMLに直接埋め込んでサーバーサイドの処理を書ける」。",
          "q2_intro": "それまでのWebページはCGIとしてC言語やPerlスクリプトを別途用意し、HTMLと処理を分けて書く必要があった。",
          "q2_table": {
            "col_before": "CGI（C/Perlなど）",
            "col_after": "PHP",
            "rows": [
              [
                "HTMLとの関係",
                "別ファイル・別プロセスで連携",
                "HTMLに直接埋め込める"
              ],
              [
                "導入の手軽さ",
                "サーバー設定が煩雑",
                "レンタルサーバーでもすぐ動く"
              ],
              [
                "学習コスト",
                "高め",
                "低め（Web特化で分かりやすい）"
              ],
              [
                "向いている場面",
                "汎用的な処理全般",
                "動的なWebページ生成"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-file",
              "cap": "HTMLに処理を埋め込める"
            },
            {
              "icon": "ic-server",
              "cap": "手軽にWebサーバーを動かせる"
            },
            {
              "icon": "ic-package",
              "cap": "CMS・ECの基盤として定番"
            }
          ],
          "memo": "WordPressをはじめ、今も世界中のWebサイトを裏で支えている。",
          "sidebar_groups": [
            {
              "label": "関連する技術",
              "items": [
                {
                  "name": "Laravel",
                  "desc": "PHPをモダンにしたフルスタックフレームワーク。",
                  "icon": "ic-server",
                  "page": 184
                }
              ]
            },
            {
              "label": "比較する言語",
              "items": [
                {
                  "name": "Ruby",
                  "desc": "同じく書きやすさを軸にしたスクリプト言語。",
                  "icon": "ic-scribble",
                  "page": 171
                }
              ]
            }
          ]
        },
        {
          "id": "java",
          "page": 175,
          "term": "Java",
          "subtitle": "「どこでも同じように動く」を掲げ、大規模開発の標準になった言語",
          "category": "プログラミング言語",
          "icon": "ic-cube",
          "oneline": "JVM上で動作し、書いたコードをOSを問わず動かせることを武器に、企業システムの定番であり続ける言語。",
          "q1_text": "家電向けの組み込み言語として開発が始まったが、「一度書けば、どこでも動く（Write Once, Run Anywhere）」。",
          "q2_intro": "それまではCやC++でOSごとにコンパイルし直す必要があり、動作環境を変えるたびに移植作業が発生していた。",
          "q2_table": {
            "col_before": "C / C++",
            "col_after": "Java",
            "rows": [
              [
                "動作環境",
                "OSごとに再コンパイルが必要",
                "JVM上でOSを問わず動く"
              ],
              [
                "メモリ管理",
                "手動（自分で解放）",
                "自動（ガベージコレクション）"
              ],
              [
                "型の厳しさ",
                "言語による",
                "静的型付けで厳格"
              ],
              [
                "向いている場面",
                "OS・ハードウェア寄りの処理",
                "大規模・長期運用の業務システム"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-layers",
              "cap": "OSを問わず動かせる"
            },
            {
              "icon": "ic-scale",
              "cap": "大規模開発でも破綻しにくい"
            },
            {
              "icon": "ic-server",
              "cap": "企業システムの定番として実績豊富"
            }
          ],
          "memo": "冗長と言われつつも、この安定感が今も選ばれ続ける理由。",
          "sidebar_groups": [
            {
              "label": "関連する技術",
              "items": [
                {
                  "name": "Spring Boot",
                  "desc": "Javaの設定を自動化し、すぐに動くアプリを作れるフレームワーク。",
                  "icon": "ic-layers",
                  "page": 185
                }
              ]
            },
            {
              "label": "比較する言語",
              "items": [
                {
                  "name": "Go",
                  "desc": "シンプルさと並行処理のしやすさを重視した言語。",
                  "icon": "ic-wheel",
                  "page": 173
                }
              ]
            }
          ]
        },
        {
          "id": "rust",
          "page": 176,
          "term": "Rust",
          "subtitle": "「速さ」と「安全」を、実行時ではなくコンパイル時に両立させる言語",
          "category": "プログラミング言語",
          "icon": "ic-wheel",
          "oneline": "メモリ管理の安全性をコンパイラがチェックすることで、C/C++並みの速度と高い安全性を両立する言語。",
          "q1_text": "C/C++は高速だが、メモリの解放忘れや二重解放といったバグが実行時にクラッシュや脆弱性を引き起こしやすかった。",
          "q2_intro": "それまでのC/C++では、メモリの確保・解放をプログラマが手動で管理し、ミスがあっても実行するまで気づけないことが多かった。",
          "q2_table": {
            "col_before": "C / C++",
            "col_after": "Rust",
            "rows": [
              [
                "メモリ管理",
                "手動（解放忘れのリスクあり）",
                "コンパイラが所有権をチェック"
              ],
              [
                "バグの発見",
                "実行時にクラッシュして判明",
                "コンパイル時にエラーとして検出"
              ],
              [
                "実行速度",
                "速い",
                "同等に速い"
              ],
              [
                "向いている場面",
                "OS・組み込み・ゲーム等",
                "同上＋WebAssembly等"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-scale",
              "cap": "安全性と速度を両立できる"
            },
            {
              "icon": "ic-cube",
              "cap": "メモリ安全性をコンパイル時に保証"
            },
            {
              "icon": "ic-rocket",
              "cap": "C/C++並みの実行速度"
            }
          ],
          "memo": "その分「動いてしまえばまず落ちない」コードになる。",
          "sidebar_groups": [
            {
              "label": "比較する言語",
              "items": [
                {
                  "name": "Go",
                  "desc": "シンプルさと開発速度を重視した言語。",
                  "icon": "ic-wheel",
                  "page": 173
                }
              ]
            }
          ]
        },
        {
          "id": "rails",
          "page": 177,
          "term": "Rails",
          "subtitle": "「設定より規約」で、Webアプリ開発の定番の型を作ったフレームワーク",
          "category": "Webフレームワーク",
          "icon": "ic-server",
          "oneline": "Ruby製のWebフレームワーク。「設定より規約（CoC）」の思想で、少ないコードでWebアプリを組み立てられる。",
          "q1_text": "RubyでWebアプリを作るとき、ルーティングからDBまで毎回設計し直すのがつらかった。",
          "q2_intro": "それまでのWebアプリ開発では、フレームワークごとに細かい設定ファイルを書き、命名やディレクトリ構成も一から決める必要があった。",
          "q2_table": {
            "col_before": "設定ベースのフレームワーク",
            "col_after": "Rails",
            "rows": [
              [
                "開発方針",
                "設定ファイルで細かく指定",
                "規約に従えば設定不要（CoC）"
              ],
              [
                "DB操作",
                "SQLを都度記述",
                "ActiveRecordで直感的に操作"
              ],
              [
                "初期構築",
                "構成をゼロから設計",
                "rails newで即座に土台が完成"
              ],
              [
                "向いている場面",
                "自由な設計が必要な場合",
                "素早くWebサービスを立ち上げたい場合"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-rocket",
              "cap": "短期間でWebアプリを構築できる"
            },
            {
              "icon": "ic-server",
              "cap": "MVCで役割を整理できる"
            },
            {
              "icon": "ic-package",
              "cap": "gemで機能を簡単に追加できる"
            }
          ],
          "memo": "Convention over Configuration。規約に乗れば設定が少なく済む。",
          "sidebar_groups": [
            {
              "label": "関連する技術",
              "items": [
                {
                  "name": "Ruby",
                  "desc": "書きやすさ・読みやすさを重視するプログラミング言語。",
                  "icon": "ic-scribble",
                  "page": 171
                }
              ]
            },
            {
              "label": "比較するフレームワーク",
              "items": [
                {
                  "name": "Laravel",
                  "desc": "PHP版のフルスタックフレームワーク。",
                  "icon": "ic-server",
                  "page": 184
                },
                {
                  "name": "Django",
                  "desc": "Python版のフルスタックフレームワーク。",
                  "icon": "ic-layers",
                  "page": 180
                }
              ]
            }
          ]
        },
        {
          "id": "express",
          "page": 178,
          "term": "Express",
          "subtitle": "Node.jsに最小限の骨組みだけを足した、軽量Webフレームワーク",
          "category": "Webフレームワーク",
          "icon": "ic-server",
          "oneline": "Node.js上で動く、必要なものだけを自分で組み合わせるミニマルなWebフレームワーク。",
          "q1_text": "Node.jsだけでWebサーバーを書こうとすると、ルーティングやリクエスト処理を毎回自前で実装する必要があった。",
          "q2_intro": "それまではNode.jsの標準モジュール（http）だけを使い、ルーティングなどを自分でゴリゴリ実装する必要があった。",
          "q2_table": {
            "col_before": "Node.js標準（httpモジュール）",
            "col_after": "Express",
            "rows": [
              [
                "ルーティング",
                "自前で分岐処理を実装",
                "app.get()等で簡潔に記述"
              ],
              [
                "機能の追加",
                "全て自作",
                "ミドルウェアを差し込むだけ"
              ],
              [
                "構成の自由度",
                "低い（そもそも骨組みがない）",
                "高い（薄いので好きに組める）"
              ],
              [
                "向いている場面",
                "極小のスクリプト",
                "API・軽量なWebサーバー"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-server",
              "cap": "最小限の記述でAPIを作れる"
            },
            {
              "icon": "ic-layers",
              "cap": "ミドルウェアで機能を拡張できる"
            },
            {
              "icon": "ic-scale",
              "cap": "構成を自由に設計できる"
            }
          ],
          "memo": "薄いからこそ、必要なライブラリだけを自分で組み合わせられる。",
          "sidebar_groups": [
            {
              "label": "比較するフレームワーク",
              "items": [
                {
                  "name": "Hono",
                  "desc": "Edge環境向けに生まれた、より軽量なフレームワーク。",
                  "icon": "ic-cloud",
                  "page": 179
                }
              ]
            }
          ]
        },
        {
          "id": "hono",
          "page": 179,
          "term": "Hono",
          "subtitle": "Cloudflare WorkersなどのEdge環境向けに生まれた、超軽量フレームワーク",
          "category": "Webフレームワーク",
          "icon": "ic-cloud",
          "oneline": "TypeScriptで書かれ、Node.js以外のEdgeランタイムでも高速に動く軽量Webフレームワーク。",
          "q1_text": "Edge環境ではNode.js前提のExpressが動かず、軽量フレームワークが必要だった。",
          "q2_intro": "それまでExpressのようなフレームワークはNode.js環境を前提にしており、Edgeランタイムでは動作しないか、動いても重かった。",
          "q2_table": {
            "col_before": "Express（Node.js前提）",
            "col_after": "Hono",
            "rows": [
              [
                "動作環境",
                "Node.js前提",
                "Cloudflare Workers等マルチランタイム対応"
              ],
              [
                "起動の軽さ",
                "比較的重い",
                "超軽量・高速起動"
              ],
              [
                "型の扱い",
                "JavaScriptが中心",
                "TypeScriptファースト"
              ],
              [
                "向いている場面",
                "通常のサーバー",
                "Edge・サーバーレス環境"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-cloud",
              "cap": "Edge環境でも高速に動く"
            },
            {
              "icon": "ic-rocket",
              "cap": "起動が軽くレスポンスが速い"
            },
            {
              "icon": "ic-layers",
              "cap": "複数のランタイムで動かせる"
            }
          ],
          "memo": "Cloudflare Workers等のEdge向き。Expressより薄く、ランタイム制約に強い。",
          "sidebar_groups": [
            {
              "label": "比較するフレームワーク",
              "items": [
                {
                  "name": "Express",
                  "desc": "Node.js向けの定番の軽量フレームワーク。",
                  "icon": "ic-server",
                  "page": 178
                }
              ]
            }
          ]
        },
        {
          "id": "django",
          "page": 180,
          "term": "Django",
          "subtitle": "「電池付属」でWebアプリに必要な機能をひとまとめにしたフレームワーク",
          "category": "Webフレームワーク",
          "icon": "ic-layers",
          "oneline": "認証・管理画面・ORMなど、Webアプリに必要な機能を標準で備えたPython製のフルスタックフレームワーク。",
          "q1_text": "PythonでWebアプリを作るたび、認証・管理画面・DB接続をゼロから書くのが非効率だった。",
          "q2_intro": "それまでのPython製Webフレームワークは、ルーティングなど最小限の機能しか持たず、認証や管理画面は別途ライブラリを探して組み合わせる必要があった。",
          "q2_table": {
            "col_before": "軽量フレームワーク（Flaskなど）",
            "col_after": "Django",
            "rows": [
              [
                "付属機能",
                "最小限（必要なら自分で追加）",
                "認証・管理画面・ORM等標準搭載"
              ],
              [
                "管理画面",
                "自作が必要",
                "自動生成される（Django Admin）"
              ],
              [
                "構成の自由度",
                "高い",
                "やや決まった型に沿う"
              ],
              [
                "向いている場面",
                "小規模・独自構成のAPI",
                "機能が多い業務系Webアプリ"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-layers",
              "cap": "必要な機能が最初から揃っている"
            },
            {
              "icon": "ic-server",
              "cap": "管理画面が自動で手に入る"
            },
            {
              "icon": "ic-rocket",
              "cap": "大規模なWebアプリを素早く構築できる"
            }
          ],
          "memo": "batteries included。全部入りだが、その分フレームワークの流儀に寄せる。",
          "sidebar_groups": [
            {
              "label": "関連する技術",
              "items": [
                {
                  "name": "Python",
                  "desc": "シンプルな文法を持つプログラミング言語。",
                  "icon": "ic-file",
                  "page": 172
                }
              ]
            },
            {
              "label": "比較するフレームワーク",
              "items": [
                {
                  "name": "FastAPI",
                  "desc": "型ヒントを活かした高速なAPIフレームワーク。",
                  "icon": "ic-rocket",
                  "page": 181
                },
                {
                  "name": "Flask",
                  "desc": "必要な機能だけを足していく軽量フレームワーク。",
                  "icon": "ic-file",
                  "page": 182
                },
                {
                  "name": "Rails",
                  "desc": "Ruby版のフルスタックフレームワーク。",
                  "icon": "ic-server",
                  "page": 177
                }
              ]
            }
          ]
        },
        {
          "id": "fastapi",
          "page": 181,
          "term": "FastAPI",
          "subtitle": "型ヒントを書くだけでAPI仕様書まで自動生成される、モダンなAPIフレームワーク",
          "category": "Webフレームワーク",
          "icon": "ic-rocket",
          "oneline": "Pythonの型ヒントを使って、高速なAPIサーバーとドキュメントを同時に生成できるフレームワーク。",
          "q1_text": "既存のPython製フレームワークはAPIドキュメントを手動で書くか、別ツールで管理する必要があり、コードと仕様書がずれがちだった。型ヒントから自動でAPI仕様書（OpenAPI）を生成できるフレームワークとして開発された。",
          "q2_intro": "それまでのPython製フレームワークでは、型チェックやAPI仕様書は別のライブラリを組み合わせて用意する必要があった。",
          "q2_table": {
            "col_before": "Flaskなど（型・仕様書は別途）",
            "col_after": "FastAPI",
            "rows": [
              [
                "型ヒント",
                "任意（チェックは別ツール）",
                "必須に近く、そのまま検証に使う"
              ],
              [
                "APIドキュメント",
                "手動で作成・管理",
                "型ヒントから自動生成"
              ],
              [
                "実行速度",
                "標準的",
                "非同期処理で高速"
              ],
              [
                "向いている場面",
                "幅広いWebアプリ",
                "API・マイクロサービス"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-rocket",
              "cap": "非同期処理で高速に動く"
            },
            {
              "icon": "ic-file",
              "cap": "API仕様書が自動で手に入る"
            },
            {
              "icon": "ic-scale",
              "cap": "型ヒントでバグを早期発見できる"
            }
          ],
          "memo": "バリデーションとドキュメント生成の入力として使い倒しているのが特徴。",
          "sidebar_groups": [
            {
              "label": "関連する技術",
              "items": [
                {
                  "name": "Python",
                  "desc": "シンプルな文法を持つプログラミング言語。",
                  "icon": "ic-file",
                  "page": 172
                }
              ]
            },
            {
              "label": "比較するフレームワーク",
              "items": [
                {
                  "name": "Django",
                  "desc": "電池付属の思想を持つフルスタックフレームワーク。",
                  "icon": "ic-layers",
                  "page": 180
                },
                {
                  "name": "Flask",
                  "desc": "必要な機能だけを足していく軽量フレームワーク。",
                  "icon": "ic-file",
                  "page": 182
                }
              ]
            }
          ]
        },
        {
          "id": "flask",
          "page": 182,
          "term": "Flask",
          "subtitle": "必要な部品だけを自分で足していく、Python製の軽量フレームワーク",
          "category": "Webフレームワーク",
          "icon": "ic-file",
          "oneline": "最小限の機能だけを持ち、必要なライブラリを自分で組み合わせて育てていくPython製の軽量フレームワーク。",
          "q1_text": "Djangoのようなフルスタックのフレームワークは機能が多く、小さなアプリやプロトタイプには。",
          "q2_intro": "それまでのフルスタックフレームワーク（Djangoなど）は、小さなアプリを作る場合でも多機能な構成に付き合う必要があった。",
          "q2_table": {
            "col_before": "Django（フルスタック）",
            "col_after": "Flask",
            "rows": [
              [
                "付属機能",
                "認証・ORM・管理画面が標準搭載",
                "最小限（ルーティング程度）"
              ],
              [
                "構成の自由度",
                "やや決まった型に沿う",
                "高い（必要な分だけ足す）"
              ],
              [
                "学習コスト",
                "やや高い（覚える機能が多い）",
                "低い（小さく始められる）"
              ],
              [
                "向いている場面",
                "機能が多い業務系Webアプリ",
                "小規模API・プロトタイプ"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-file",
              "cap": "最小構成からすぐに書き始められる"
            },
            {
              "icon": "ic-package",
              "cap": "必要な機能だけ拡張できる"
            },
            {
              "icon": "ic-scale",
              "cap": "小規模〜中規模に向いている"
            }
          ],
          "memo": "FlaskはDjangoの「全部入り」に対する、",
          "sidebar_groups": [
            {
              "label": "関連する技術",
              "items": [
                {
                  "name": "Python",
                  "desc": "シンプルな文法を持つプログラミング言語。",
                  "icon": "ic-file",
                  "page": 172
                }
              ]
            },
            {
              "label": "比較するフレームワーク",
              "items": [
                {
                  "name": "Django",
                  "desc": "電池付属の思想を持つフルスタックフレームワーク。",
                  "icon": "ic-layers",
                  "page": 180
                },
                {
                  "name": "FastAPI",
                  "desc": "型ヒントを活かした高速なAPIフレームワーク。",
                  "icon": "ic-rocket",
                  "page": 181
                }
              ]
            }
          ]
        },
        {
          "id": "gin",
          "page": 183,
          "term": "Gin",
          "subtitle": "Goの速さを活かしきる、シンプルなWebフレームワーク",
          "category": "Webフレームワーク",
          "icon": "ic-rocket",
          "oneline": "Go言語の標準ライブラリだけでは冗長になりがちなルーティング処理を、シンプルな記法で扱えるようにしたWebフレームワーク。",
          "q1_text": "Go標準のnet/httpだけでは、ルーティングやミドルウェアの記述が冗長になりがちだった。",
          "q2_intro": "それまではGoの標準ライブラリだけでルーティングを書き、パラメータの取得なども自前で処理する必要があった。",
          "q2_table": {
            "col_before": "net/http（標準ライブラリ）",
            "col_after": "Gin",
            "rows": [
              [
                "ルーティング",
                "自前で条件分岐を実装",
                "router.GET()等で簡潔に記述"
              ],
              [
                "ミドルウェア",
                "仕組みを自作",
                "標準で組み込み・追加が容易"
              ],
              [
                "実行速度",
                "速い",
                "標準ライブラリに迫る速さを維持"
              ],
              [
                "向いている場面",
                "極小のAPI",
                "REST API・マイクロサービス"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-rocket",
              "cap": "Go標準に迫る速度を維持できる"
            },
            {
              "icon": "ic-server",
              "cap": "シンプルな記法でAPIを作れる"
            },
            {
              "icon": "ic-layers",
              "cap": "ミドルウェアを手軽に追加できる"
            }
          ],
          "memo": "書きやすさで補ったフレームワーク。",
          "sidebar_groups": [
            {
              "label": "関連する技術",
              "items": [
                {
                  "name": "Go",
                  "desc": "並行処理を得意とするシンプルな言語。",
                  "icon": "ic-wheel",
                  "page": 173
                }
              ]
            }
          ]
        },
        {
          "id": "laravel",
          "page": 184,
          "term": "Laravel",
          "subtitle": "「PHPは冗長」という評判を覆した、モダンなフルスタックフレームワーク",
          "category": "Webフレームワーク",
          "icon": "ic-server",
          "oneline": "認証・ルーティング・ORMなどを整った形で備え、PHPでのWebアプリ開発を一気にモダンにしたフレームワーク。",
          "q1_text": "PHPには多くのフレームワークが乱立していたが、設計が古かったり機能が断片的だったりして。",
          "q2_intro": "それまでのPHPフレームワークは機能がバラバラで、認証やルーティングを組み合わせるだけでも設定に手間がかかった。",
          "q2_table": {
            "col_before": "従来のPHPフレームワーク",
            "col_after": "Laravel",
            "rows": [
              [
                "機能の揃い方",
                "断片的・組み合わせが必要",
                "認証・ORM・キュー等統合済み"
              ],
              [
                "開発体験",
                "設定や記法が古い",
                "モダンな記法・豊富なドキュメント"
              ],
              [
                "DB操作",
                "SQLを都度記述",
                "Eloquent ORMで直感的に操作"
              ],
              [
                "向いている場面",
                "小規模なWebページ",
                "本格的なWebアプリ・SaaS"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-server",
              "cap": "モダンな作法でWebアプリを構築できる"
            },
            {
              "icon": "ic-layers",
              "cap": "認証・ORMなどが標準で揃っている"
            },
            {
              "icon": "ic-package",
              "cap": "豊富なパッケージで拡張できる"
            }
          ],
          "memo": "引き戻した立役者ともいわれるフレームワーク。",
          "sidebar_groups": [
            {
              "label": "関連する技術",
              "items": [
                {
                  "name": "PHP",
                  "desc": "HTMLに埋め込んで使えるサーバーサイド言語。",
                  "icon": "ic-file",
                  "page": 174
                }
              ]
            },
            {
              "label": "比較するフレームワーク",
              "items": [
                {
                  "name": "Rails",
                  "desc": "Ruby版のフルスタックフレームワーク。",
                  "icon": "ic-server",
                  "page": 177
                }
              ]
            }
          ]
        },
        {
          "id": "spring-boot",
          "page": 185,
          "term": "Spring Boot",
          "compact": true,
          "subtitle": "Javaの「設定地獄」を解消し、すぐに動くアプリを作れるようにしたフレームワーク",
          "category": "Webフレームワーク",
          "icon": "ic-layers",
          "oneline": "煩雑だったSpringフレームワークの設定を自動化し、Javaで素早くアプリケーションを起動できるようにしたフレームワーク。",
          "q1_text": "Springの設定と依存が重く、小さく始めたいJavaプロジェクトには敷居が高かった。",
          "q2_intro": "それまでのSpring Frameworkでは、DBやサーバーの接続設定をXMLなどで細かく記述し、動かすまでに多くの準備が必要だった。",
          "q2_table": {
            "col_before": "従来のSpring Framework",
            "col_after": "Spring Boot",
            "rows": [
              [
                "設定方法",
                "XML等で細かく記述",
                "規約に沿えば自動設定（auto-configuration）"
              ],
              [
                "起動までの準備",
                "多い（サーバー構築も別途）",
                "組み込みサーバーで即座に起動"
              ],
              [
                "依存関係管理",
                "個別に指定・バージョン調整",
                "starterでまとめて管理"
              ],
              [
                "向いている場面",
                "既存の大規模Springアプリ",
                "新規のJavaアプリ・マイクロサービス"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-rocket",
              "cap": "すぐに動くアプリを構築できる"
            },
            {
              "icon": "ic-layers",
              "cap": "設定の大部分を自動化できる"
            },
            {
              "icon": "ic-scale",
              "cap": "エンタープライズ規模でも安定動作"
            }
          ],
          "memo": "「設定より規約」。足りない部分だけ設定ファイルで上書きする思想。",
          "sidebar_groups": [
            {
              "label": "関連する技術",
              "items": [
                {
                  "name": "Java",
                  "desc": "JVM上で動作し、OSを問わず動かせる言語。",
                  "icon": "ic-cube",
                  "page": 175
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "number": 9,
      "title": "モバイル",
      "entries": [
        {
          "id": "ios",
          "page": 450,
          "term": "iOS",
          "subtitle": "Appleのスマホ・タブレット専用OS",
          "category": "モバイル・プラットフォーム",
          "icon": "ic-laptop",
          "oneline": "iPhoneやiPad向けのオペレーティングシステム。App Store経由での配布が基本。",
          "q1_text": "スマホが本格的なコンピュータになるにつれ、タッチ操作向けの専用OSとアプリ配布基盤が必要になった。",
          "q2_intro": "フィーチャーフォン時代はメーカー独自の環境や、限られたJavaアプリで動いていた。",
          "q2_table": {
            "col_before": "ガラケー／独自環境",
            "col_after": "iOS",
            "rows": [
              [
                "UIの前提",
                "物理キー中心",
                "マルチタッチ前提"
              ],
              [
                "アプリ配布",
                "メーカーやキャリア経由が多い",
                "App Storeが中心"
              ],
              [
                "開発言語",
                "機種・メーカー依存",
                "Swift / Objective-C が主"
              ],
              [
                "ハードウェア",
                "機種差が大きい",
                "Apple製デバイスに閉じる"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-laptop",
              "cap": "iPhone向けアプリを配布できる"
            },
            {
              "icon": "ic-package",
              "cap": "審査付きストアで品質下限を揃えやすい"
            },
            {
              "icon": "ic-scale",
              "cap": "端末×OSの組み合わせが少ない"
            }
          ],
          "memo": "iPadOSもセットで意識することが多い。シミュレータ・実機・審査が最初の壁。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "Swift",
                  "desc": "iOSアプリ開発の第一言語。",
                  "icon": "ic-file",
                  "page": 457
                },
                {
                  "name": "ネイティブアプリ",
                  "desc": "OSの正式APIで作るアプリ。",
                  "icon": "ic-cube",
                  "page": 452
                },
                {
                  "name": "Android",
                  "desc": "対になるもう一方の巨大プラットフォーム。",
                  "icon": "ic-monitor",
                  "page": 451
                }
              ]
            }
          ]
        },
        {
          "id": "android",
          "page": 451,
          "term": "Android",
          "subtitle": "世界シェア最大のスマホOS",
          "category": "モバイル・プラットフォーム",
          "icon": "ic-monitor",
          "oneline": "Googleが中心となって育てる、オープン寄りのスマートフォン向けOS。多様なメーカーの端末で動く。",
          "q1_text": "スマホ市場が広がる中、特定メーカーに閉じないオープンなプラットフォームと、豊富な端末ラインナップが求められた。",
          "q2_intro": "メーカーごとの独自OSや、PC向けソフトの縮小版で「なんとなく動く携帯」を作っていた。",
          "q2_table": {
            "col_before": "メーカー独自OS時代",
            "col_after": "Android",
            "rows": [
              [
                "端末の多様性",
                "メーカーごとに世界が違う",
                "多くのメーカーが同じOSを採用"
              ],
              [
                "アプリストア",
                "ばらばら",
                "Google Playが中心（ほかも可）"
              ],
              [
                "カスタマイズ",
                "ユーザーには届きにくい",
                "メーカーやユーザーが手を入れやすい"
              ],
              [
                "開発言語",
                "機種依存",
                "Kotlin / Java が主"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-monitor",
              "cap": "多メーカー端末向けに配布できる"
            },
            {
              "icon": "ic-package",
              "cap": "Google Play中心の配布基盤がある"
            },
            {
              "icon": "ic-scale",
              "cap": "端末差を前提にテスト設計できる"
            }
          ],
          "memo": "端末・OSバージョンの差が大きい。エミュレータと実機の両方が必要になりがち。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "Kotlin",
                  "desc": "Android公式が推す第一言語。",
                  "icon": "ic-file",
                  "page": 458
                },
                {
                  "name": "iOS",
                  "desc": "もう一方の巨大プラットフォーム。",
                  "icon": "ic-laptop",
                  "page": 450
                },
                {
                  "name": "Flutter",
                  "desc": "Android/iOSをまとめて書く選択肢。",
                  "icon": "ic-layers",
                  "page": 455
                }
              ]
            }
          ]
        },
        {
          "id": "native-app",
          "page": 452,
          "term": "ネイティブアプリ",
          "subtitle": "そのOS専用の「本番装備」で作るアプリ",
          "category": "モバイル・アプリ形態",
          "icon": "ic-cube",
          "oneline": "iOSやAndroidが用意した公式の言語・API・UI部品で作る、プラットフォーム直結のアプリ。",
          "q1_text": "スマホのカメラや通知、ジェスチャを最大限使いたかったが、Webページだけでは端末の能力を引き出しきれなかった。",
          "q2_intro": "スマホ向けも、まずはブラウザで動くWebサイトや、簡易ランタイム上のアプリで賄おうとしていた。",
          "q2_table": {
            "col_before": "Webや簡易ランタイム",
            "col_after": "ネイティブアプリ",
            "rows": [
              [
                "性能",
                "ブラウザ経由で一段遠い",
                "OSに近く高速に動かしやすい"
              ],
              [
                "端末機能",
                "制限されがち",
                "公式APIで深く触れる"
              ],
              [
                "UIの馴染め",
                "Webっぽさが残ることも",
                "OS標準の見た目・操作感"
              ],
              [
                "配布",
                "URLを開いてもらう",
                "ストア経由が基本"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-rocket",
              "cap": "端末の性能を引き出しやすい"
            },
            {
              "icon": "ic-monitor",
              "cap": "OS標準のUI/UXに寄せられる"
            },
            {
              "icon": "ic-package",
              "cap": "ストア配布・更新の流れに乗る"
            }
          ],
          "memo": "だからこそ後からハイブリッドやクロスプラットフォームが流行る。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "ハイブリッドアプリ",
                  "desc": "Web技術を包んでアプリにする方式。",
                  "icon": "ic-layers",
                  "page": 453
                },
                {
                  "name": "React Native",
                  "desc": "JSでネイティブUIを描く枠組み。",
                  "icon": "ic-cube",
                  "page": 454
                },
                {
                  "name": "Swift",
                  "desc": "iOSネイティブの主力言語。",
                  "icon": "ic-file",
                  "page": 457
                }
              ]
            }
          ]
        },
        {
          "id": "hybrid-app",
          "page": 453,
          "term": "ハイブリッドアプリ",
          "subtitle": "Webの中身を、アプリの皮で包む",
          "category": "モバイル・アプリ形態",
          "icon": "ic-layers",
          "oneline": "HTML/CSS/JSなどのWeb技術で画面を作り、ネイティブの殻（WebViewなど）で包んでストア配布するアプリ。",
          "q1_text": "iOSとAndroidで二重開発は痛い。一方でストア掲載やプッシュ通知など、「アプリであること」のメリットは捨てたくなかった。",
          "q2_intro": "完全ネイティブで二台分作るか、モバイルWebだけで我慢するかの二択になりがちだった。",
          "q2_table": {
            "col_before": "ネイティブ二刀流 or モバイルWeb",
            "col_after": "ハイブリッドアプリ",
            "rows": [
              [
                "コード共有",
                "プラットフォームごと",
                "Web部分を大きく共有できる"
              ],
              [
                "ストア配布",
                "ネイティブなら可／Webは不可",
                "アプリとして配布できる"
              ],
              [
                "性能・一体感",
                "ネイティブが有利",
                "WebView次第で差が出る"
              ],
              [
                "更新",
                "ストア審査が基本",
                "中身のWebはサーバー更新しやすいことも"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-laptop",
              "cap": "Web技術で素早く作れる"
            },
            {
              "icon": "ic-cloud",
              "cap": "コンテンツ更新をサーバー側に寄せられる"
            },
            {
              "icon": "ic-scale",
              "cap": "ネイティブ機能はブリッジで足せる"
            }
          ],
          "memo": "Cordova / Capacitor 系が代表格。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "ネイティブアプリ",
                  "desc": "OS公式APIで作る本流。",
                  "icon": "ic-cube",
                  "page": 452
                },
                {
                  "name": "React Native",
                  "desc": "WebViewではなくネイティブ部品を使う道。",
                  "icon": "ic-cube",
                  "page": 454
                },
                {
                  "name": "PWA",
                  "desc": "インストール感をWebのまま近づける別路線。",
                  "icon": "ic-monitor",
                  "page": 158
                }
              ]
            }
          ]
        },
        {
          "id": "react-native",
          "page": 454,
          "term": "React Native",
          "subtitle": "Reactの書き方で、ネイティブUIを駆動する",
          "category": "クロスプラットフォーム",
          "icon": "ic-cube",
          "oneline": "Reactのコンポーネント発想で画面を書き、実際の描画はiOS/Androidのネイティブ部品に任せるフレームワーク。",
          "q1_text": "Reactに慣れたチームが、WebViewではなくネイティブUIをJSで書きたかった。",
          "q2_intro": "選択肢は「SwiftとKotlinで二重開発」か「ハイブリッド（WebView）」に偏りがちだった。",
          "q2_table": {
            "col_before": "二重ネイティブ / WebViewハイブリッド",
            "col_after": "React Native",
            "rows": [
              [
                "言語・発想",
                "SwiftとKotlinで別々",
                "JS/TS＋Reactで共通化"
              ],
              [
                "UIの実体",
                "WebView or 完全別実装",
                "ネイティブコンポーネント"
              ],
              [
                "ホットリロード",
                "環境次第",
                "開発中の再読み込みが速い"
              ],
              [
                "エコシステム",
                "各OSの流儀",
                "npmとReactの資産を活かせる"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-cube",
              "cap": "Reactの発想をモバイルへ展開できる"
            },
            {
              "icon": "ic-layers",
              "cap": "JS/TSから両OS向けに寄せられる"
            },
            {
              "icon": "ic-rocket",
              "cap": "足りない部分はネイティブで補える"
            }
          ],
          "memo": "「Learn once, write anywhere」が近い。橋渡しの話は別途深掘り。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "Flutter",
                  "desc": "Dartで自前描画するライバル枠。",
                  "icon": "ic-layers",
                  "page": 455
                },
                {
                  "name": "React",
                  "desc": "発想の原点であるWebのUIライブラリ。",
                  "icon": "ic-cube",
                  "page": 146
                },
                {
                  "name": "ネイティブアプリ",
                  "desc": "最終的に触っている先の世界。",
                  "icon": "ic-cube",
                  "page": 452
                }
              ]
            }
          ]
        },
        {
          "id": "flutter",
          "page": 455,
          "term": "Flutter",
          "subtitle": "UIも描画も、自分たちのエンジンで描く",
          "category": "クロスプラットフォーム",
          "icon": "ic-layers",
          "oneline": "Dart言語と独自の描画エンジンで、iOS/Android（ほか）に同じ見た目のUIを描くUIキット。",
          "q1_text": "プラットフォームごとのUI部品差を吸収しつつ、デザインどおりのピクセルを両OSで再現したかった。",
          "q2_intro": "ネイティブ二刀流か、React NativeのようにOSの部品に橋を架ける方式が主流だった。",
          "q2_table": {
            "col_before": "OS部品に頼る開発",
            "col_after": "Flutter",
            "rows": [
              [
                "描画",
                "各OSのUI部品",
                "自前エンジンでキャンバスに描く"
              ],
              [
                "見た目の一致",
                "OS差が出やすい",
                "指定どおりに揃えやすい"
              ],
              [
                "言語",
                "Swift / Kotlin / JS 等",
                "Dart が中心"
              ],
              [
                "ホットリロード",
                "ツール次第",
                "ステートを保ったまま高速に反映"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-layers",
              "cap": "デザインの再現性を両OSで高められる"
            },
            {
              "icon": "ic-rocket",
              "cap": "滑らかなアニメーションを出しやすい"
            },
            {
              "icon": "ic-package",
              "cap": "一つのコードベースでマルチ向けに展開しやすい"
            }
          ],
          "memo": "Widget の入れ子が世界のすべて。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "Dart",
                  "desc": "Flutter公式の言語。",
                  "icon": "ic-file",
                  "page": 456
                },
                {
                  "name": "React Native",
                  "desc": "JSでネイティブUIを駆動する別路線。",
                  "icon": "ic-cube",
                  "page": 454
                },
                {
                  "name": "Android",
                  "desc": "配布先の一大プラットフォーム。",
                  "icon": "ic-monitor",
                  "page": 451
                }
              ]
            }
          ]
        },
        {
          "id": "dart",
          "page": 456,
          "term": "Dart",
          "subtitle": "Flutterと一緒に覚える言語",
          "category": "モバイル・言語",
          "icon": "ic-file",
          "oneline": "Googleが開発したプログラミング言語。いまはFlutterアプリを書くための主役として知られる。",
          "q1_text": "大規模なクライアントアプリ向けに、習得しやすく、ツールチェーンも一体で使える言語が欲しかった。",
          "q2_intro": "モバイルでは Swift / Kotlin、クロスでは JavaScript が候補の中心で、Dartは「知る人ぞ知る」側だった。",
          "q2_table": {
            "col_before": "Flutter以前の印象",
            "col_after": "Flutterと組んだDart",
            "rows": [
              [
                "主な用途",
                "一部のWeb・実験的用途",
                "Flutterアプリ開発が主流"
              ],
              [
                "型",
                "オプション寄りに見えがち",
                "健全な型づけで大規模向き"
              ],
              [
                "非同期",
                "Future 等独自の流儀",
                "async/await で読みやすい"
              ],
              [
                "学習動機",
                "弱い",
                "Flutterをやるなら必須級"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-file",
              "cap": "FlutterでUIを書く言語になる"
            },
            {
              "icon": "ic-layers",
              "cap": "型付きでUIロジックを整理できる"
            },
            {
              "icon": "ic-rocket",
              "cap": "Hot Reloadで試行錯誤が速い"
            }
          ],
          "memo": "Flutter専用だが、型やasync/awaitは他言語にも通じる。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "Flutter",
                  "desc": "Dartの最大の活躍の場。",
                  "icon": "ic-layers",
                  "page": 455
                },
                {
                  "name": "Swift",
                  "desc": "iOSネイティブ側の言語。",
                  "icon": "ic-file",
                  "page": 457
                },
                {
                  "name": "Kotlin",
                  "desc": "Androidネイティブ側の言語。",
                  "icon": "ic-file",
                  "page": 458
                }
              ]
            }
          ]
        },
        {
          "id": "swift",
          "page": 457,
          "term": "Swift",
          "subtitle": "Apple純正、モダン寄りの主力言語",
          "category": "モバイル・言語",
          "icon": "ic-file",
          "oneline": "Appleが開発したプログラミング言語。iOS/macOSなどのアプリ開発でObjective-Cに代わって第一言語になった。",
          "q1_text": "Objective-Cは冗長で、null事故も起きやすかった。もっと安全に書きたいニーズが強まった。",
          "q2_intro": "Objective-CのみでiOS開発していた。",
          "q2_table": {
            "col_before": "Objective-C",
            "col_after": "Swift",
            "rows": [
              [
                "読みやすさ",
                "独特で学習コスト高",
                "モダンで読みやすい"
              ],
              [
                "安全性",
                "ポインタやnilに注意が必要",
                "オプショナル等で事故を減らせる"
              ],
              [
                "相互運用",
                "——",
                "既存のObjective-C資産とも共存可"
              ],
              [
                "進化",
                "相対的に緩やか",
                "言語もツールも活発に更新"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-laptop",
              "cap": "iOSネイティブアプリを現代的に書ける"
            },
            {
              "icon": "ic-scale",
              "cap": "型とオプショナルで実行時事故を減らせる"
            },
            {
              "icon": "ic-package",
              "cap": "SwiftUIなど新しいUI枠組みに乗れる"
            }
          ],
          "memo": "Ch8から外し、モバイル章に置いているのはそのため。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "iOS",
                  "desc": "Swiftが最も活躍するOS。",
                  "icon": "ic-laptop",
                  "page": 450
                },
                {
                  "name": "Kotlin",
                  "desc": "Android側の対になる言語。",
                  "icon": "ic-file",
                  "page": 458
                },
                {
                  "name": "ネイティブアプリ",
                  "desc": "Swiftで作る典型的な成果物。",
                  "icon": "ic-cube",
                  "page": 452
                }
              ]
            }
          ]
        },
        {
          "id": "kotlin",
          "page": 458,
          "term": "Kotlin",
          "subtitle": "Android公式が「こっち推すね」と言った言語",
          "category": "モバイル・言語",
          "icon": "ic-file",
          "oneline": "JetBrainsが作った言語で、Androidアプリ開発の第一言語としてGoogleも推奨。Javaと仲が良い。",
          "q1_text": "Javaは安定しているが冗長で、null事故も起きやすかった。",
          "q2_intro": "Androidは長らくJavaが標準。ボイラープレートと null に泣きながら書いていた。",
          "q2_table": {
            "col_before": "Java中心のAndroid",
            "col_after": "Kotlin",
            "rows": [
              [
                "記述量",
                "冗長になりやすい",
                "簡潔に書ける"
              ],
              [
                "null安全",
                "実行時に気づきがち",
                "型でかなり防げる"
              ],
              [
                "Javaとの関係",
                "——",
                "相互運用が得意"
              ],
              [
                "公式の立場",
                "伝統的標準",
                "Androidの推奨言語"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-monitor",
              "cap": "Androidアプリを短く安全に書ける"
            },
            {
              "icon": "ic-layers",
              "cap": "既存Javaコードと混在できる"
            },
            {
              "icon": "ic-rocket",
              "cap": "コルーチンで非同期を扱いやすい"
            }
          ],
          "memo": "サーバーサイドやマルチプラットフォーム（KMP）にも広がっている。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "Android",
                  "desc": "Kotlinが本領を発揮するOS。",
                  "icon": "ic-monitor",
                  "page": 451
                },
                {
                  "name": "Swift",
                  "desc": "iOS側の対になる言語。",
                  "icon": "ic-file",
                  "page": 457
                },
                {
                  "name": "Java",
                  "desc": "互換と歴史のパートナー。",
                  "icon": "ic-file",
                  "page": 175
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "number": 10,
      "title": "テスト",
      "entries": [
        {
          "id": "unit-test",
          "page": 500,
          "term": "Unit Test",
          "subtitle": "いちばん小さい単位を、単体で殴る",
          "category": "テストの種類",
          "icon": "ic-cube",
          "oneline": "関数やクラスなど、プログラムの最小単位が期待どおり動くかを検証するテスト。",
          "q1_text": "関数やクラスが大きくなると、変更のたびに手動確認が追いつかなくなった。",
          "q2_intro": "動作確認は、アプリを起動して人の手と目で見るのが基本だった。",
          "q2_table": {
            "col_before": "手動の動作確認",
            "col_after": "Unit Test",
            "rows": [
              [
                "対象",
                "画面や一連の操作",
                "関数・クラスなど小さい単位"
              ],
              [
                "速さ",
                "遅い",
                "秒単位で大量に回せる"
              ],
              [
                "原因の切り分け",
                "どこで壊れたか追いにくい",
                "失敗した単位がすぐ分かる"
              ],
              [
                "外部依存",
                "本物のDBやAPIに寄りがち",
                "モックして切り離しやすい"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-rocket",
              "cap": "小さな変更をすぐ検証できる"
            },
            {
              "icon": "ic-scale",
              "cap": "壊れた場所をピンポイントで見つけられる"
            },
            {
              "icon": "ic-clock",
              "cap": "リグレッションを自動で防ぎやすくなる"
            }
          ],
          "memo": "「ユニットの境界」はチームごとにブレる。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "Integration Test",
                  "desc": "部品をつないだ状態で確かめる。",
                  "icon": "ic-layers",
                  "page": 501
                },
                {
                  "name": "Mock",
                  "desc": "依存を偽物に差し替える道具。",
                  "icon": "ic-cube",
                  "page": 503
                },
                {
                  "name": "Jest",
                  "desc": "JS界隈でよく使うテストランナー。",
                  "icon": "ic-package",
                  "page": 518
                }
              ]
            }
          ]
        },
        {
          "id": "integration-test",
          "page": 501,
          "term": "Integration Test",
          "subtitle": "つなぎ目で、初めて起きる事故を拾う",
          "category": "テストの種類",
          "icon": "ic-layers",
          "oneline": "複数のモジュールや、DB・APIなどの外部をつないだ状態で、連携が正しいかを確かめるテスト。",
          "q1_text": "単体では正しくても、つなぐと型やトランザクション、設定の食い違いで落ちることがある。",
          "q2_intro": "結合確認はステージングで人手、またはユニット＋モックだけだった。",
          "q2_table": {
            "col_before": "単体だけ／手動結合",
            "col_after": "Integration Test",
            "rows": [
              [
                "見る範囲",
                "部品の内側",
                "部品の境界と相互作用"
              ],
              [
                "依存",
                "モックで消しがち",
                "本物かそれに近いものを使う"
              ],
              [
                "速さ",
                "非常に速い",
                "ユニットより遅い"
              ],
              [
                "見つかるバグ",
                "ロジック誤り",
                "配線・設定・契約のずれ"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-layers",
              "cap": "モジュール間の契約ずれを拾える"
            },
            {
              "icon": "ic-server",
              "cap": "DBやAPIとの実連携を検証できる"
            },
            {
              "icon": "ic-scale",
              "cap": "E2Eより狭く原因を追いやすい"
            }
          ],
          "memo": "「どこからが結合か」は宗教戦争になりやすい。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "Unit Test",
                  "desc": "もっと小さい単位のテスト。",
                  "icon": "ic-cube",
                  "page": 500
                },
                {
                  "name": "E2E Test",
                  "desc": "ユーザー操作に近い端到端のテスト。",
                  "icon": "ic-monitor",
                  "page": 502
                },
                {
                  "name": "Fixture",
                  "desc": "結合時に使う固定の試験データ。",
                  "icon": "ic-file",
                  "page": 505
                }
              ]
            }
          ]
        },
        {
          "id": "e2e-test",
          "page": 502,
          "term": "E2E Test",
          "subtitle": "ユーザーの操作を、ロボットが最後までやる",
          "category": "テストの種類",
          "icon": "ic-monitor",
          "oneline": "画面操作やAPI呼び出しなど、システムを端から端まで通して、利用シナリオが成立するかを確かめるテスト。",
          "q1_text": "部品も結合も正しくても、「会員登録してログインして購入する」が通るかは別問題。",
          "q2_intro": "リリース前に人がブラウザを手で操作し、チェックリストを消化するのが普通だった。",
          "q2_table": {
            "col_before": "手動確認中心",
            "col_after": "E2E Test",
            "rows": [
              [
                "見る範囲",
                "画面の一部",
                "ユーザー操作の一連の流れ"
              ],
              [
                "再現性",
                "担当者の記憶に依存",
                "スクリプトで繰り返せる"
              ],
              [
                "コスト",
                "人時がかかる",
                "初期構築後は繰り返しが安い"
              ],
              [
                "弱点",
                "見落とし",
                "UI変更でテストも折れやすい"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-monitor",
              "cap": "重要シナリオの退行を自動検知できる"
            },
            {
              "icon": "ic-clock",
              "cap": "夜中のCIでも同じ確認を回せる"
            },
            {
              "icon": "ic-rocket",
              "cap": "リリース判断の材料を機械的に増やせる"
            }
          ],
          "memo": "全部をE2Eにすると遅くて脆い。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "Playwright",
                  "desc": "モダンなE2E自動化ツール。",
                  "icon": "ic-package",
                  "page": 520
                },
                {
                  "name": "Puppeteer",
                  "desc": "Chromeを操作する自動化ライブラリ。",
                  "icon": "ic-package",
                  "page": 521
                },
                {
                  "name": "スモークテスト",
                  "desc": "「とりあえず起動するか」の薄い確認。",
                  "icon": "ic-rocket",
                  "page": 512
                }
              ]
            }
          ]
        },
        {
          "id": "mock",
          "page": 503,
          "term": "Mock",
          "subtitle": "本物のふりをして、呼び出しを監視する代役",
          "category": "テストダブル",
          "icon": "ic-cube",
          "oneline": "テスト中に本物の依存（APIやDBなど）の代わりに置き、戻り値や「呼ばれたか」を制御・検証する偽物。",
          "q1_text": "外部サービスが落ちていたり、課金APIを本当に叩いたりすると、テストが不安定で高くつく。",
          "q2_intro": "テストでも本番と同じDBや外部APIに繋ぎ、環境ごとしんどい思いをしていた。",
          "q2_table": {
            "col_before": "本物依存のままテスト",
            "col_after": "Mockを使う",
            "rows": [
              [
                "安定性",
                "ネットや相手次第",
                "ローカルで決定的に動かせる"
              ],
              [
                "検証できること",
                "結果中心",
                "「どう呼ばれたか」も見られる"
              ],
              [
                "速さ",
                "I/O待ちが発生",
                "メモリ上で一瞬"
              ],
              [
                "危険",
                "課金やメール誤送信",
                "副作用を止められる"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-cube",
              "cap": "外部依存を止めて単体テストできる"
            },
            {
              "icon": "ic-scale",
              "cap": "呼び出し回数や引数を検証できる"
            },
            {
              "icon": "ic-clock",
              "cap": "テストを速く安定させられる"
            }
          ],
          "memo": "ざっくり「振る舞いを検証したいならMock寄り」と覚える入口でよい。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "Stub",
                  "desc": "決まった値を返すことに寄せた代役。",
                  "icon": "ic-file",
                  "page": 504
                },
                {
                  "name": "Unit Test",
                  "desc": "Mockの出番が多い土俵。",
                  "icon": "ic-cube",
                  "page": 500
                },
                {
                  "name": "Fixture",
                  "desc": "入力データ側の固定化。",
                  "icon": "ic-file",
                  "page": 505
                }
              ]
            }
          ]
        },
        {
          "id": "stub",
          "page": 504,
          "term": "Stub",
          "subtitle": "「この値を返すよ」だけ用意した薄い代役",
          "category": "テストダブル",
          "icon": "ic-file",
          "oneline": "テストのために、依存先の代わりとして決め打ちの戻り値や状態だけを返す簡易実装。",
          "q1_text": "ロジックのテストに必要なのは「今は成功扱いのユーザーが返る」など結果だけで、本物の複雑さや呼び出し検証までは不要なことが多かった。",
          "q2_intro": "毎回フルのモックフレームワークで厳格に振る舞いまで検証するか、本物に繋ぐか、になりがちだった。",
          "q2_table": {
            "col_before": "本物 or 厳格Mock",
            "col_after": "Stub",
            "rows": [
              [
                "目的",
                "結合や相互作用の検証",
                "決め打ちの入力・応答を渡す"
              ],
              [
                "複雑さ",
                "高くなりやすい",
                "薄く保てる"
              ],
              [
                "検証",
                "呼ばれ方まで見ることが多い",
                "戻り値の用意が主"
              ],
              [
                "読みやすさ",
                "セットアップが長い",
                "意図が短く書ける"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-file",
              "cap": "テストに必要な応答だけを用意できる"
            },
            {
              "icon": "ic-cube",
              "cap": "本番実装の重さをテストから外せる"
            },
            {
              "icon": "ic-clock",
              "cap": "セットアップを短くできる"
            }
          ],
          "memo": "現場では両方とも「モック」と呼ぶことも多いので、会話の文脈確認を。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "Mock",
                  "desc": "呼び出しまで検証する寄り。",
                  "icon": "ic-cube",
                  "page": 503
                },
                {
                  "name": "Fixture",
                  "desc": "データ側の固定セット。",
                  "icon": "ic-file",
                  "page": 505
                },
                {
                  "name": "Unit Test",
                  "desc": "Stubがよく出る場所。",
                  "icon": "ic-cube",
                  "page": 500
                }
              ]
            }
          ]
        },
        {
          "id": "fixture",
          "page": 505,
          "term": "Fixture",
          "subtitle": "テストの舞台装置と小道具一式",
          "category": "テストの基盤",
          "icon": "ic-package",
          "oneline": "テストを走らせるためにあらかじめ用意する、固定のデータや状態・環境のこと。",
          "q1_text": "毎回手でユーザーを作ったりDBを初期化したりしていると、テストの本題より準備が長くなる。",
          "q2_intro": "テスト関数の中に、データのINSERTやファイル配置をベタ書きしていた。",
          "q2_table": {
            "col_before": "テスト内に準備を直書き",
            "col_after": "Fixture",
            "rows": [
              [
                "再利用",
                "コピペが増える",
                "共通の前提を使い回せる"
              ],
              [
                "読みやすさ",
                "本題が埋もれる",
                "「何を試すか」が前面に出る"
              ],
              [
                "一貫性",
                "テストごとに微妙に違う",
                "同じ初期状態から始められる"
              ],
              [
                "メンテ",
                "変更が散らばる",
                "一箇所に寄せやすい"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-package",
              "cap": "試験データをまとめて管理できる"
            },
            {
              "icon": "ic-clock",
              "cap": "テストの準備コードを短くできる"
            },
            {
              "icon": "ic-scale",
              "cap": "前提条件のばらつきを減らせる"
            }
          ],
          "memo": "共通して言えるのは「テストの前提を外出しする」という発想。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "Seeder",
                  "desc": "アプリ側の初期データ投入に近い概念。",
                  "icon": "ic-package",
                  "page": 93
                },
                {
                  "name": "Integration Test",
                  "desc": "Fixtureの出番が多い層。",
                  "icon": "ic-layers",
                  "page": 501
                },
                {
                  "name": "Factory",
                  "desc": "動的にテストデータを作る派（一緒に覚えたい）。",
                  "icon": "ic-wheel"
                }
              ]
            }
          ]
        },
        {
          "id": "tdd",
          "page": 506,
          "term": "TDD",
          "subtitle": "テストを先に書いて、実装を後から引っ張る",
          "category": "テストの進め方",
          "icon": "ic-rocket",
          "oneline": "Test-Driven Development。失敗するテストを先に書き、通る最小実装→リファクタ、を回す開発手法。",
          "q1_text": "作り終わってからテストを足すと、「今の実装に合わせたテスト」になりやすい。",
          "q2_intro": "実装→手動確認→余裕があればテスト、の順番がデフォルトだった。",
          "q2_table": {
            "col_before": "実装ファースト",
            "col_after": "TDD",
            "rows": [
              [
                "順番",
                "コード→テスト",
                "テスト→コード→リファクタ"
              ],
              [
                "設計への影響",
                "後付けになりがち",
                "使いやすさが先に決まる"
              ],
              [
                "フィードバック",
                "動かし始めてから",
                "数分単位の短いループ"
              ],
              [
                "過剰実装",
                "つい作り込みがち",
                "赤→緑の範囲に収まりやすい"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-rocket",
              "cap": "小さなフィードバックループで進める"
            },
            {
              "icon": "ic-scale",
              "cap": "過剰な設計を抑えやすい"
            },
            {
              "icon": "ic-file",
              "cap": "仕様の意図がテストとして残る"
            }
          ],
          "memo": "「赤・緑・リファクタ」を一度体験すると、用語の感触が掴める。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "BDD",
                  "desc": "振る舞い・事例の言葉で仕様を書く寄り。",
                  "icon": "ic-file",
                  "page": 507
                },
                {
                  "name": "Unit Test",
                  "desc": "TDDで最もよく回す粒度。",
                  "icon": "ic-cube",
                  "page": 500
                },
                {
                  "name": "リファクタリング",
                  "desc": "緑のあとに必ず来る工程（設計章）。",
                  "icon": "ic-wheel"
                }
              ]
            }
          ]
        },
        {
          "id": "bdd",
          "page": 507,
          "term": "BDD",
          "subtitle": "「Given / When / Then」で仕様を会話する",
          "category": "テストの進め方",
          "icon": "ic-file",
          "oneline": "Behavior-Driven Development。振る舞いを自然言語に近い形で書き、開発・QA・企画の認識を揃えるアプローチ。",
          "q1_text": "テストはエンジニアの内側で閉じてしまい、ビジネス側の「そう動いてほしい」とずれやすかった。",
          "q2_intro": "仕様書は別文書、テストはコード、口頭の認識合わせは会議、と情報が分裂していた。",
          "q2_table": {
            "col_before": "仕様とテストが別物",
            "col_after": "BDD",
            "rows": [
              [
                "書き方",
                "実装寄りのassert",
                "Given/When/Then等振る舞い"
              ],
              [
                "読み手",
                "エンジニア中心",
                "非エンジニアも参加しやすい"
              ],
              [
                "目的",
                "正しさの検証",
                "認識合わせ＋検証"
              ],
              [
                "成果物",
                "テストコード",
                "実行可能な仕様に近づく"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-file",
              "cap": "仕様をテスト可能な文章に落とせる"
            },
            {
              "icon": "ic-network",
              "cap": "職種をまたいで認識を揃えやすい"
            },
            {
              "icon": "ic-scale",
              "cap": "受け入れ条件を自動化しやすくなる"
            }
          ],
          "memo": "形式に固執せず、「振る舞いの言葉で書けているか」が本質。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "TDD",
                  "desc": "テスト先行のサイクル。BDDと併記されやすい。",
                  "icon": "ic-rocket",
                  "page": 506
                },
                {
                  "name": "E2E Test",
                  "desc": "振る舞いシナリオの実行場所になりやすい。",
                  "icon": "ic-monitor",
                  "page": 502
                },
                {
                  "name": "テスト設計",
                  "desc": "何を書くかを決める上流。",
                  "icon": "ic-file",
                  "page": 517
                }
              ]
            }
          ]
        },
        {
          "id": "coverage",
          "page": 508,
          "term": "カバレッジ",
          "subtitle": "テストがコードの何割を撫でたか",
          "category": "テストの指標",
          "icon": "ic-scale",
          "oneline": "テスト実行によって実行されたコードの割合。行・分岐などの単位で測ることが多い。",
          "q1_text": "「テスト書いた」と言っても、通っていない分岐だらけかもしれない。",
          "q2_intro": "テストの十分さは、感覚とコードレビューのコメント頼みだった。",
          "q2_table": {
            "col_before": "感覚での十分さ",
            "col_after": "カバレッジ",
            "rows": [
              [
                "見え方",
                "書いた気になる",
                "通った行・分岐が見える"
              ],
              [
                "目標管理",
                "曖昧",
                "数値目標を置ける（功罪あり）"
              ],
              [
                "弱点発見",
                "属人的",
                "未カバー箇所が地図になる"
              ],
              [
                "誤解",
                "——",
                "100%＝バグゼロではない"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-scale",
              "cap": "未テスト箇所を可視化できる"
            },
            {
              "icon": "ic-monitor",
              "cap": "PRでカバー率の変化を追える"
            },
            {
              "icon": "ic-file",
              "cap": "重要な経路の穴を見つけやすくなる"
            }
          ],
          "memo": "意味のないテストで数値だけ盛る行為は、現場の名物悪習。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "Unit Test",
                  "desc": "カバレッジ計測の主戦場。",
                  "icon": "ic-cube",
                  "page": 500
                },
                {
                  "name": "ホワイトボックステスト",
                  "desc": "内部構造を見て網羅を考える。",
                  "icon": "ic-layers",
                  "page": 515
                },
                {
                  "name": "Jest",
                  "desc": "カバレッジ計測がしやすいランナー例。",
                  "icon": "ic-package",
                  "page": 518
                }
              ]
            }
          ]
        },
        {
          "id": "debug",
          "page": 509,
          "term": "デバッグ",
          "subtitle": "バグを「見つける・理解する・潰す」作業全体",
          "category": "不具合対応",
          "icon": "ic-pen",
          "oneline": "プログラムの不具合原因を特定し、修正して確認するまでの一連の活動。",
          "q1_text": "動くはずのプログラムが期待どおり動かないとき、勘で直すと別の場所が壊れる。",
          "q2_intro": "printデバッグと気合、そして「一度消して書き直す」が頼りだった。",
          "q2_table": {
            "col_before": "勘と再実装",
            "col_after": "意図的なデバッグ",
            "rows": [
              [
                "再現",
                "運任せ",
                "手順を固定して何度も見る"
              ],
              [
                "観測",
                "ログを散らかす",
                "ブレークポイントや段階的検証"
              ],
              [
                "仮説",
                "思いつき修正",
                "仮説を立ててから変える"
              ],
              [
                "回帰防止",
                "その場しのぎ",
                "テストに残せる"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-pen",
              "cap": "原因を切り分けて確実に潰せる"
            },
            {
              "icon": "ic-monitor",
              "cap": "デバッガで実行時の状態を覗ける"
            },
            {
              "icon": "ic-file",
              "cap": "再発防止のテストやログ改善につなげられる"
            }
          ],
          "memo": "再現できないバグは、まだバグではなく都市伝説。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "ログ",
                  "desc": "本番でデバッグするときの手がかり（観測章へ）。",
                  "icon": "ic-file"
                },
                {
                  "name": "回帰テスト",
                  "desc": "直した穴が再び開かないか確認。",
                  "icon": "ic-clock",
                  "page": 511
                },
                {
                  "name": "Unit Test",
                  "desc": "仮説検証を高速にする道具。",
                  "icon": "ic-cube",
                  "page": 500
                }
              ]
            }
          ]
        },
        {
          "id": "snapshot-test",
          "page": 510,
          "term": "スナップショットテスト",
          "subtitle": "「前と同じ見た目／出力か」を写真で比べる",
          "category": "テストの種類",
          "icon": "ic-image",
          "oneline": "コンポーネントの出力やUIの結果を保存し、次回以降の実行結果と差分比較するテスト手法。",
          "q1_text": "UIの細かい文言やクラス名の変化を、全部手でassertするのは現実的でない。",
          "q2_intro": "見た目の確認は目視、または重要な要素だけを個別assertしていた。",
          "q2_table": {
            "col_before": "目視／個別assert",
            "col_after": "スナップショット",
            "rows": [
              [
                "記述量",
                "多い／抜けやすい",
                "一発で出力全体を固定"
              ],
              [
                "変更検知",
                "見落としがある",
                "差分として必ず出る"
              ],
              [
                "意図",
                "何を守るか明示しやすい",
                "更新時にレビューが必要"
              ],
              [
                "脆さ",
                "——",
                "リファクタでも折れやすい"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-image",
              "cap": "UIの意図しない変化を検知できる"
            },
            {
              "icon": "ic-clock",
              "cap": "細かいassertを書く時間を節約できる"
            },
            {
              "icon": "ic-file",
              "cap": "差分レビューで変更意図を確認できる"
            }
          ],
          "memo": "差分を読んでからapproveする習慣が本体。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "Jest",
                  "desc": "toMatchSnapshot が有名。",
                  "icon": "ic-package",
                  "page": 518
                },
                {
                  "name": "Vitest",
                  "desc": "同様の機能を持つ高速ランナー。",
                  "icon": "ic-package",
                  "page": 519
                },
                {
                  "name": "回帰テスト",
                  "desc": "変化検知という目的が近い。",
                  "icon": "ic-clock",
                  "page": 511
                }
              ]
            }
          ]
        },
        {
          "id": "regression-test",
          "page": 511,
          "term": "回帰テスト",
          "subtitle": "直したつもりが、昔のバグを呼び戻していないか",
          "category": "テストの種類",
          "icon": "ic-clock",
          "oneline": "変更後に、以前できていたことが壊れていないかを確認するテスト（またはその活動）。",
          "q1_text": "機能追加のたびに、関係ない画面が壊れることがあった。",
          "q2_intro": "リリース前に、思い出した範囲を人手でざっと触る——が回帰確認の実体だった。",
          "q2_table": {
            "col_before": "思い出し手動確認",
            "col_after": "回帰テスト",
            "rows": [
              [
                "範囲",
                "担当者の記憶頼み",
                "守るシナリオを資産化"
              ],
              [
                "タイミング",
                "リリース直前に集中",
                "変更のたびに自動で実行可"
              ],
              [
                "抜け",
                "起きやすい",
                "完全ではないが再現性がある"
              ],
              [
                "コスト",
                "人の時間が毎回必要",
                "初期投資＋実行コスト"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-clock",
              "cap": "過去の不具合の再発を防ぎやすい"
            },
            {
              "icon": "ic-rocket",
              "cap": "変更のたびに安全網をかけられる"
            },
            {
              "icon": "ic-scale",
              "cap": "リファクタの勇気を増やせる"
            }
          ],
          "memo": "回帰テストは特定のフレームワーク名ではない。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "スモークテスト",
                  "desc": "もっと薄い「死んでないか」確認。",
                  "icon": "ic-rocket",
                  "page": 512
                },
                {
                  "name": "E2E Test",
                  "desc": "回帰の実行形態のひとつ。",
                  "icon": "ic-monitor",
                  "page": 502
                },
                {
                  "name": "デバッグ",
                  "desc": "回帰で落ちたあと必ず来る工程。",
                  "icon": "ic-pen",
                  "page": 509
                }
              ]
            }
          ]
        },
        {
          "id": "smoke-test",
          "page": 512,
          "term": "スモークテスト",
          "subtitle": "電源入れて、煙が出ないかだけ見る",
          "category": "テストの種類",
          "icon": "ic-rocket",
          "oneline": "ビルドやデプロイ直後に、起動・主要導線など最小限が動くかを短時間で確認するテスト。",
          "q1_text": "重いフルテストを回す前に、そもそも起動しない・ログインできない、を早く知りたかった。",
          "q2_intro": "デプロイしたら、とりあえずトップページをブラウザで開いてみる——が儀式だった。",
          "q2_table": {
            "col_before": "人手の「開けてみた」",
            "col_after": "スモークテスト",
            "rows": [
              [
                "深さ",
                "その場の気分",
                "事前に決めた最小セット"
              ],
              [
                "速さ",
                "人待ち",
                "短時間で機械実行"
              ],
              [
                "目的",
                "雰囲気確認",
                "致命傷の早期発見"
              ],
              [
                "位置づけ",
                "非公式",
                "パイプラインの門番にできる"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-rocket",
              "cap": "壊れたデプロイをすぐ止められる"
            },
            {
              "icon": "ic-clock",
              "cap": "重いテストの前に足切りできる"
            },
            {
              "icon": "ic-monitor",
              "cap": "主要導線の生存を確認できる"
            }
          ],
          "memo": "深い保証は別テストに任せ、門番に徹するのが上品。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "E2E Test",
                  "desc": "もっと厚いシナリオ確認。",
                  "icon": "ic-monitor",
                  "page": 502
                },
                {
                  "name": "回帰テスト",
                  "desc": "広さ・深さのある再確認。",
                  "icon": "ic-clock",
                  "page": 511
                },
                {
                  "name": "CI",
                  "desc": "スモークを自動で回す場所（Ch14）。",
                  "icon": "ic-wheel"
                }
              ]
            }
          ]
        },
        {
          "id": "boundary-value",
          "page": 513,
          "term": "境界値分析",
          "subtitle": "バグは端っこに宿る、という経験則",
          "category": "テスト設計技法",
          "icon": "ic-scale",
          "oneline": "仕様の境界（0と1、最大値の前後など）を重点的に試すテスト設計の技法。",
          "q1_text": "条件分岐のバグは、真ん中の普通の値より、境界の前後で顕在化しやすい。",
          "q2_intro": "適当な代表値をいくつか入れて「動いた」ことにしていた。",
          "q2_table": {
            "col_before": "適当な代表値",
            "col_after": "境界値分析",
            "rows": [
              [
                "選ぶ値",
                "感覚",
                "境界とその前後を意図的に"
              ],
              [
                "バグ検出",
                "運が絡む",
                "典型的なオフバイワンを狙い撃ち"
              ],
              [
                "ケース数",
                "ばらつく",
                "必要最小に近づけやすい"
              ],
              [
                "根拠",
                "説明しにくい",
                "設計として説明できる"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-scale",
              "cap": "オフバイワン系の欠陥を狙いやすい"
            },
            {
              "icon": "ic-file",
              "cap": "テストケースに設計根拠を持たせられる"
            },
            {
              "icon": "ic-cube",
              "cap": "少ないケースで危険地帯をカバーできる"
            }
          ],
          "memo": "同値分割とセットが定石。例: 0 / 1 / 100 / 101。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "同値分割",
                  "desc": "同じ扱いのグループから代表を取る技法。",
                  "icon": "ic-layers",
                  "page": 514
                },
                {
                  "name": "ブラックボックステスト",
                  "desc": "仕様ベースで境界を見る立場。",
                  "icon": "ic-monitor",
                  "page": 516
                },
                {
                  "name": "テスト設計",
                  "desc": "技法を組み合わせる上流工程。",
                  "icon": "ic-file",
                  "page": 517
                }
              ]
            }
          ]
        },
        {
          "id": "equivalence-partitioning",
          "page": 514,
          "term": "同値分割",
          "subtitle": "同じ扱いの値は、代表一人で十分",
          "category": "テスト設計技法",
          "icon": "ic-layers",
          "oneline": "入力を「同じ結果になるグループ」に分け、各グループから代表値だけを試すテスト設計技法。",
          "q1_text": "取りうる入力を全部試すのは不可能。",
          "q2_intro": "思いつく値を並べるか、全数に近い組み合わせを試みて疲弊していた。",
          "q2_table": {
            "col_before": "ランダム／総当たり",
            "col_after": "同値分割",
            "rows": [
              [
                "考え方",
                "とにかく試す",
                "同じ結果の塊に分ける"
              ],
              [
                "効率",
                "ケースが膨らむ",
                "代表値で済ませられる"
              ],
              [
                "見落とし",
                "運任せ",
                "境界とセットで設計"
              ],
              [
                "向いている",
                "小さな入力",
                "入力条件の整理"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-layers",
              "cap": "入力空間を整理してテストできる"
            },
            {
              "icon": "ic-clock",
              "cap": "無駄な重複ケースを減らせる"
            },
            {
              "icon": "ic-file",
              "cap": "カバレッジの議論を仕様ベースにできる"
            }
          ],
          "memo": "「有効同値」と「無効同値」を分けるのがコツ。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "境界値分析",
                  "desc": "区画の端を突く姉妹技法。",
                  "icon": "ic-scale",
                  "page": 513
                },
                {
                  "name": "テスト設計",
                  "desc": "これらの技法を使う工程。",
                  "icon": "ic-file",
                  "page": 517
                },
                {
                  "name": "ブラックボックステスト",
                  "desc": "内部を見ずに仕様から区画する。",
                  "icon": "ic-monitor",
                  "page": 516
                }
              ]
            }
          ]
        },
        {
          "id": "white-box-test",
          "page": 515,
          "term": "ホワイトボックステスト",
          "subtitle": "中身の配線を見てから試す",
          "category": "テストの立場",
          "icon": "ic-layers",
          "oneline": "プログラムの内部構造（分岐や経路）を理解したうえで、その経路を通すように設計するテスト。",
          "q1_text": "仕様どおりの入出力だけでは、通っていない分岐やエラーハンドリングが残る。",
          "q2_intro": "仕様書の項目を外側から叩くだけで、実装の裏道は見ないことが多かった。",
          "q2_table": {
            "col_before": "外側からの確認だけ",
            "col_after": "ホワイトボックス",
            "rows": [
              [
                "視点",
                "仕様・画面",
                "分岐・経路・内部状態"
              ],
              [
                "設計者",
                "誰でも可能なことも",
                "コードが読める人向き"
              ],
              [
                "強み",
                "——",
                "死にコードや抜け経路を見つけやすい"
              ],
              [
                "弱み",
                "——",
                "実装に引きずられ仕様漏れに気づきにくい"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-layers",
              "cap": "分岐網羅など構造ベースの確認ができる"
            },
            {
              "icon": "ic-scale",
              "cap": "カバレッジと相性が良い"
            },
            {
              "icon": "ic-file",
              "cap": "リファクタ前後の経路維持を支えられる"
            }
          ],
          "memo": "「白箱」＝中が見える、の意味。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "ブラックボックステスト",
                  "desc": "中を見ない対の立場。",
                  "icon": "ic-monitor",
                  "page": 516
                },
                {
                  "name": "カバレッジ",
                  "desc": "構造網羅の指標。",
                  "icon": "ic-scale",
                  "page": 508
                },
                {
                  "name": "Unit Test",
                  "desc": "白箱になりやすい粒度。",
                  "icon": "ic-cube",
                  "page": 500
                }
              ]
            }
          ]
        },
        {
          "id": "black-box-test",
          "page": 516,
          "term": "ブラックボックステスト",
          "subtitle": "中身は知らぬ、入出力だけ見る",
          "category": "テストの立場",
          "icon": "ic-monitor",
          "oneline": "内部実装を知らなくても（見なくても）、仕様上の入力に対する出力や振る舞いを確認するテスト。",
          "q1_text": "実装者以外も品質を確認したかったし、実装に引っ張られたテストでは仕様漏れに気づけない。",
          "q2_intro": "テストも開発者の頭の中の実装イメージに合わせて書かれ、仕様書とのズレが見逃されがちだった。",
          "q2_table": {
            "col_before": "実装に寄り添う確認",
            "col_after": "ブラックボックス",
            "rows": [
              [
                "必要な知識",
                "コード構造",
                "仕様・要求"
              ],
              [
                "見つかりやすいもの",
                "実装バグ",
                "仕様不一致・抜け"
              ],
              [
                "技法",
                "経路網羅など",
                "同値分割・境界値など"
              ],
              [
                "実行者",
                "開発者中心",
                "QAや利用者視点も取りやすい"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-monitor",
              "cap": "仕様どおりかを外側から検証できる"
            },
            {
              "icon": "ic-file",
              "cap": "実装変更に強いテストにしやすい"
            },
            {
              "icon": "ic-network",
              "cap": "開発以外の視点を取り込みやすい"
            }
          ],
          "memo": "白も黒も、片方だけだと盲点ができる。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "ホワイトボックステスト",
                  "desc": "中身を見る対の立場。",
                  "icon": "ic-layers",
                  "page": 515
                },
                {
                  "name": "同値分割",
                  "desc": "黒箱で使う代表技法。",
                  "icon": "ic-layers",
                  "page": 514
                },
                {
                  "name": "E2E Test",
                  "desc": "黒箱で回すことが多い層。",
                  "icon": "ic-monitor",
                  "page": 502
                }
              ]
            }
          ]
        },
        {
          "id": "test-design",
          "page": 517,
          "term": "テスト設計",
          "subtitle": "何を試すかを、書く前に決める",
          "category": "テストの進め方",
          "icon": "ic-file",
          "oneline": "観点・条件・期待結果を整理し、どのテストケースをどの粒度で持つかを決める活動。",
          "q1_text": "やみくもにテストコードを増やすと、薄いケースだらけで本番の事故は防げない。",
          "q2_intro": "思いついた操作をそのままテストにし、観点の抜けや重複に後から気づいていた。",
          "q2_table": {
            "col_before": "実装から逆算したテスト",
            "col_after": "テスト設計",
            "rows": [
              [
                "着手",
                "コードができてから",
                "要件・リスクから逆算"
              ],
              [
                "網羅",
                "書いたところだけ",
                "技法で漏れを減らす"
              ],
              [
                "保守",
                "変更で大量修正",
                "設計で修正範囲を限定"
              ],
              [
                "共有",
                "属人化しやすい",
                "チームで粒度を揃えやすい"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-file",
              "cap": "何を・どこまで試すか決められる"
            },
            {
              "icon": "ic-scale",
              "cap": "技法を組み合わせて設計できる"
            },
            {
              "icon": "ic-clock",
              "cap": "テスト工数を見積もりやすくなる"
            }
          ],
          "memo": "テストコードを書くのは実装、テスト設計はその前工程。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "境界値分析",
                  "desc": "設計で使う代表技法。",
                  "icon": "ic-scale",
                  "page": 513
                },
                {
                  "name": "同値分割",
                  "desc": "同じく代表技法。",
                  "icon": "ic-layers",
                  "page": 514
                },
                {
                  "name": "BDD",
                  "desc": "振る舞いの言葉で設計する流派。",
                  "icon": "ic-file",
                  "page": 507
                }
              ]
            }
          ]
        },
        {
          "id": "jest",
          "page": 518,
          "term": "Jest",
          "subtitle": "JavaScriptテストの「とりあえずこれ」だった王者",
          "category": "テストツール",
          "icon": "ic-package",
          "oneline": "Meta（旧Facebook）発のJavaScriptテストフレームワーク。ランナー・アサーション・モックが一式そろっている。",
          "q1_text": "JSのテストはランナーと断言ライブラリとモックがバラバラで、組み合わせが面倒だった。",
          "q2_intro": "Mocha + Chai + Sinon などを自分で繋いで、設定ファイルと戦っていた。",
          "q2_table": {
            "col_before": "寄せ集め構成",
            "col_after": "Jest",
            "rows": [
              [
                "セットアップ",
                "複数ライブラリの配線",
                "一式が最初から入っている"
              ],
              [
                "スナップショット",
                "別途用意",
                "標準機能"
              ],
              [
                "モック",
                "ライブラリ依存",
                "jest.fn 等が標準"
              ],
              [
                "エコシステム",
                "選択が多い",
                "React界隈で特に普及"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-package",
              "cap": "JS/TSのユニットテストをすぐ始められる"
            },
            {
              "icon": "ic-image",
              "cap": "スナップショットテストがしやすい"
            },
            {
              "icon": "ic-cube",
              "cap": "モジュールモックが標準で使える"
            }
          ],
          "memo": "「Jestの書き方」は他ランナーでも通じる共通語彙になりやすい。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "Vitest",
                  "desc": "Vite親和の高速オルタナティブ。",
                  "icon": "ic-package",
                  "page": 519
                },
                {
                  "name": "Unit Test",
                  "desc": "Jestの主戦場。",
                  "icon": "ic-cube",
                  "page": 500
                },
                {
                  "name": "スナップショットテスト",
                  "desc": "Jestが広めた手法の一つ。",
                  "icon": "ic-image",
                  "page": 510
                }
              ]
            }
          ]
        },
        {
          "id": "vitest",
          "page": 519,
          "term": "Vitest",
          "subtitle": "Viteと同じ土俵で、テストも速く",
          "category": "テストツール",
          "icon": "ic-package",
          "oneline": "Viteと同じパイプラインを使う、Jest互換寄りの高速テストランナー。",
          "q1_text": "Jestは強力だが、現代のViteプロジェクトでは設定の二重管理や起動の重さが気になった。",
          "q2_intro": "フロントの開発はViteなのに、テストだけJest＋別変換、というねじれが起きがちだった。",
          "q2_table": {
            "col_before": "Jest中心の構成",
            "col_after": "Vitest",
            "rows": [
              [
                "設定",
                "Jest用に別途",
                "vite.config と共有しやすい"
              ],
              [
                "速度",
                "プロジェクト次第で重い",
                "ESM前提で軽快なことが多い"
              ],
              [
                "API",
                "デファクトの書き方",
                "Jest互換を意識したAPI"
              ],
              [
                "ウォッチ",
                "強い",
                "HMR感に近い体験を狙う"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-rocket",
              "cap": "Viteプロジェクトでテストを速く回せる"
            },
            {
              "icon": "ic-layers",
              "cap": "開発とテストの設定を寄せられる"
            },
            {
              "icon": "ic-package",
              "cap": "Jest資産からの移行が比較的しやすい"
            }
          ],
          "memo": "新規Vite案件の初期選択としては、かなり勝ちやすい。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "Jest",
                  "desc": "比較対象であり互換の参照点。",
                  "icon": "ic-package",
                  "page": 518
                },
                {
                  "name": "Vite",
                  "desc": "同じ思想圏のバンドラ／devサーバ。",
                  "icon": "ic-rocket",
                  "page": 150
                },
                {
                  "name": "Unit Test",
                  "desc": "主に回すテストの種類。",
                  "icon": "ic-cube",
                  "page": 500
                }
              ]
            }
          ]
        },
        {
          "id": "playwright",
          "page": 520,
          "term": "Playwright",
          "subtitle": "複数ブラウザを、一つのAPIで操るE2E",
          "category": "テストツール",
          "icon": "ic-monitor",
          "oneline": "Microsoft製のブラウザ自動操作ライブラリ。Chromium / Firefox / WebKit を統一APIで扱える。",
          "q1_text": "E2Eはブラウザ差とフレーク（ちらつき失敗）がつきもの。",
          "q2_intro": "SeleniumやPuppeteerで単一ブラウザを叩き、待機やセレクタに苦労していた。",
          "q2_table": {
            "col_before": "従来のブラウザ自動化",
            "col_after": "Playwright",
            "rows": [
              [
                "ブラウザ",
                "ドライバ管理が面倒",
                "主要ブラウザを統一的に"
              ],
              [
                "待機",
                "sleepに頼りがち",
                "自動待機が強力"
              ],
              [
                "トレース",
                "自前で工夫",
                "トレース・動画等が充実"
              ],
              [
                "言語",
                "さまざま",
                "JS/TSほか複数言語公式"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-monitor",
              "cap": "E2Eを安定して書ける"
            },
            {
              "icon": "ic-layers",
              "cap": "複数ブラウザを同じAPIで試せる"
            },
            {
              "icon": "ic-clock",
              "cap": "自動待機でフレークを減らせる"
            }
          ],
          "memo": "Chromium/Firefox/WebKitを1つのAPIで扱える。Puppeteerよりマルチブラウザ向き。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "E2E Test",
                  "desc": "Playwrightの主用途。",
                  "icon": "ic-monitor",
                  "page": 502
                },
                {
                  "name": "Puppeteer",
                  "desc": "Chrome操作の先輩格。",
                  "icon": "ic-package",
                  "page": 521
                },
                {
                  "name": "スモークテスト",
                  "desc": "薄いE2Eとして回すことも。",
                  "icon": "ic-rocket",
                  "page": 512
                }
              ]
            }
          ]
        },
        {
          "id": "puppeteer",
          "page": 521,
          "term": "Puppeteer",
          "subtitle": "Headless Chromeを、脚本で動かす",
          "category": "テストツール",
          "icon": "ic-package",
          "oneline": "Google製のライブラリで、DevToolsプロトコル経由にChrome/Chromiumを自動操作する。",
          "q1_text": "Seleniumは重く、Chromeだけ試したい場面では設定が面倒だった。",
          "q2_intro": "ブラウザ操作はSeleniumが巨艦で、設定やドライバのバージョン地獄がつきものだった。",
          "q2_table": {
            "col_before": "Selenium中心",
            "col_after": "Puppeteer",
            "rows": [
              [
                "対象",
                "多ブラウザ・多言語",
                "Chrome/Chromiumに特化"
              ],
              [
                "セットアップ",
                "ドライバ管理が必要",
                "ブラウザ同梱で始めやすい"
              ],
              [
                "API",
                "WebDriver抽象",
                "DevToolsに近い操作感"
              ],
              [
                "得意",
                "広域な互換",
                "Chrome前提の自動化・計測"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-monitor",
              "cap": "Chromeをスクリプトで操作できる"
            },
            {
              "icon": "ic-image",
              "cap": "スクリーンショットやPDF生成がしやすい"
            },
            {
              "icon": "ic-rocket",
              "cap": "クローラや煙テストの土台にできる"
            }
          ],
          "memo": "「ブラウザをコードから触る」の入口教材としても強い。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "Playwright",
                  "desc": "多ブラウザE2Eの有力株。",
                  "icon": "ic-monitor",
                  "page": 520
                },
                {
                  "name": "E2E Test",
                  "desc": "用途のひとつ。",
                  "icon": "ic-monitor",
                  "page": 502
                },
                {
                  "name": "ヘッドレス",
                  "desc": "画面なしでブラウザを走らせるモード。",
                  "icon": "ic-monitor"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "number": 11,
      "title": "パッケージ管理・バージョン管理",
      "entries": [
        {
          "id": "package",
          "page": 550,
          "term": "パッケージ",
          "subtitle": "「便利な部品」を配るための梱包単位",
          "category": "パッケージ管理",
          "icon": "ic-package",
          "oneline": "ライブラリやツールを、名前・バージョン・依存関係つきで配布・インストールできる単位にまとめたもの。",
          "q1_text": "便利なコードをコピー＆ペーストで持ち回ると、更新もライセンスも追跡できない。",
          "q2_intro": "他プロジェクトのファイルを丸コピーするか、自前で再実装するのが普通だった。",
          "q2_table": {
            "col_before": "コピペ／自前実装",
            "col_after": "パッケージ",
            "rows": [
              [
                "入手",
                "探す・コピーする",
                "レジストリからインストール"
              ],
              [
                "更新",
                "手で差し替え",
                "バージョン指定で上げられる"
              ],
              [
                "依存",
                "見えにくい",
                "依存関係として明示される"
              ],
              [
                "共有",
                "属人的",
                "チームで同じ名前を指せる"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-package",
              "cap": "再利用可能な部品を名前で扱える"
            },
            {
              "icon": "ic-cloud",
              "cap": "公開レジストリ経由で配布できる"
            },
            {
              "icon": "ic-layers",
              "cap": "依存関係を明示して管理できる"
            }
          ],
          "memo": "会話では「どの世界のパッケージか」を先に確認すると事故が減る。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "依存関係",
                  "desc": "パッケージが必要とする他パッケージ。",
                  "icon": "ic-network",
                  "page": 551
                },
                {
                  "name": "セマンティックバージョニング",
                  "desc": "バージョン番号の約束事。",
                  "icon": "ic-scale",
                  "page": 552
                },
                {
                  "name": "npm",
                  "desc": "JSの代表的なパッケージマネージャ。",
                  "icon": "ic-package",
                  "page": 554
                }
              ]
            }
          ]
        },
        {
          "id": "dependency",
          "page": 551,
          "term": "依存関係",
          "subtitle": "「これ動かすには、あれもいる」の一覧",
          "category": "パッケージ管理",
          "icon": "ic-network",
          "oneline": "あるパッケージやプロジェクトが動作するために必要とする、他のパッケージとの関係。",
          "q1_text": "ライブラリは単独では完結せず、さらに別のライブラリを必要とすることが多い。",
          "q2_intro": "「自分のマシンでは動く」が、入れたものが記録されず再現できなかった。",
          "q2_table": {
            "col_before": "依存が暗黙",
            "col_after": "依存関係を宣言",
            "rows": [
              [
                "再現性",
                "低い",
                "同じ一覧から再現しやすい"
              ],
              [
                "更新影響",
                "見えない",
                "ツリーで影響範囲を追える"
              ],
              [
                "衝突",
                "実行時に発覚",
                "解決方針をツールが示す"
              ],
              [
                "本番",
                "手作業で揃えがち",
                "ロックファイルで固定できる"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-network",
              "cap": "必要な部品を明示できる"
            },
            {
              "icon": "ic-layers",
              "cap": "間接依存まで追跡できる"
            },
            {
              "icon": "ic-scale",
              "cap": "バージョン衝突に向き合える"
            }
          ],
          "memo": "セキュリティアラートの多くは、自分が直接知らない依存から来る。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "パッケージ",
                  "desc": "依存の単位。",
                  "icon": "ic-package",
                  "page": 550
                },
                {
                  "name": "ロックファイル",
                  "desc": "解決結果を固定するファイル。",
                  "icon": "ic-file",
                  "page": 553
                },
                {
                  "name": "セマンティックバージョニング",
                  "desc": "互換の期待値を番号で表す。",
                  "icon": "ic-scale",
                  "page": 552
                }
              ]
            }
          ]
        },
        {
          "id": "semver",
          "page": 552,
          "term": "セマンティックバージョニング",
          "subtitle": "MAJOR.MINOR.PATCH に意味を込める",
          "category": "バージョン管理",
          "icon": "ic-scale",
          "oneline": "バージョン番号を major.minor.patch の形で付け、互換性の破り方にルールを持たせる約束（SemVer）。",
          "q1_text": "「1.2」と「1.10」のどちらが新しいか、更新して安全かも番号からは読み取れなかった。",
          "q2_intro": "日付や気分でバージョンを上げ、利用者はリリースノートを精読するしかなかった。",
          "q2_table": {
            "col_before": "気分バージョン",
            "col_after": "SemVer",
            "rows": [
              [
                "破壊的変更",
                "番号から不明",
                "MAJORを上げる"
              ],
              [
                "後方互換の機能追加",
                "不明",
                "MINORを上げる"
              ],
              [
                "バグ修正",
                "不明",
                "PATCHを上げる"
              ],
              [
                "依存の指定",
                "難しい",
                "^や〜で意図を書ける"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-scale",
              "cap": "更新の危険度を番号から推測できる"
            },
            {
              "icon": "ic-file",
              "cap": "依存指定にルールを持たせられる"
            },
            {
              "icon": "ic-network",
              "cap": "ライブラリ作者と利用者の契約になる"
            }
          ],
          "memo": "逆に major を上げない破壊変更は、信頼を削るショートカット。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "ロックファイル",
                  "desc": "SemVer範囲の解決結果を固定。",
                  "icon": "ic-file",
                  "page": 553
                },
                {
                  "name": "依存関係",
                  "desc": "バージョン範囲が効く場所。",
                  "icon": "ic-network",
                  "page": 551
                },
                {
                  "name": "npm",
                  "desc": "SemVerが日常になる世界。",
                  "icon": "ic-package",
                  "page": 554
                }
              ]
            }
          ]
        },
        {
          "id": "lockfile",
          "page": 553,
          "term": "ロックファイル",
          "subtitle": "「昨日と同じ入り方」を封印するファイル",
          "category": "パッケージ管理",
          "icon": "ic-file",
          "oneline": "依存解決の結果（実際に入ったパッケージと版）を記録し、インストールを再現可能にするファイル。",
          "q1_text": "package.json などの範囲指定だけだと、日が変わると別バージョンが入ることがある。",
          "q2_intro": "「だいたい同じ依存」で開発し、本番だけ微妙に違うバージョンで落ちる事故が起きていた。",
          "q2_table": {
            "col_before": "範囲指定だけ",
            "col_after": "ロックファイルあり",
            "rows": [
              [
                "再現性",
                "インストール時点に依存",
                "同じ結果を再現しやすい"
              ],
              [
                "CI",
                "揺れる",
                "固定できる"
              ],
              [
                "レビュー",
                "何が入るか見えにくい",
                "差分で更新内容が見える"
              ],
              [
                "コミット",
                "し忘れることも",
                "リポジトリに含めるのが基本"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-file",
              "cap": "依存ツリーを固定できる"
            },
            {
              "icon": "ic-scale",
              "cap": "環境差による「自分だけ動く」を減らせる"
            },
            {
              "icon": "ic-clock",
              "cap": "更新内容を差分としてレビューできる"
            }
          ],
          "memo": "package-lock / yarn.lock / pnpm-lock など。消す前に差分を読む。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "依存関係",
                  "desc": "ロックされる対象。",
                  "icon": "ic-network",
                  "page": 551
                },
                {
                  "name": "npm",
                  "desc": "package-lock.json の世界。",
                  "icon": "ic-package",
                  "page": 554
                },
                {
                  "name": "pnpm",
                  "desc": "pnpm-lock.yaml の世界。",
                  "icon": "ic-package",
                  "page": 556
                }
              ]
            }
          ]
        },
        {
          "id": "npm",
          "page": 554,
          "term": "npm",
          "subtitle": "Nodeの荷物を運ぶ、公式の配達便",
          "category": "言語別パッケージマネージャ",
          "icon": "ic-package",
          "oneline": "Node.js付属のパッケージマネージャ。npmレジストリからパッケージを入れ、scriptsも実行する。",
          "q1_text": "JSの再利用部品が増えるにつれ、ダウンロード・依存解決・公開を標準化する道具が必要になった。",
          "q2_intro": "スクリプトをファイルで共有するか、Gitリポジトリを직접参照する運用が多かった。",
          "q2_table": {
            "col_before": "手動入手",
            "col_after": "npm",
            "rows": [
              [
                "インストール",
                "ダウンロードして配置",
                "npm install で解決"
              ],
              [
                "メタデータ",
                "README頼み",
                "package.json に集約"
              ],
              [
                "実行",
                "パスを覚える",
                "npm scripts で統一"
              ],
              [
                "公開",
                "個別配布",
                "レジストリに publish"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-package",
              "cap": "JSパッケージを標準手順で入れられる"
            },
            {
              "icon": "ic-file",
              "cap": "scriptsで開発コマンドを共有できる"
            },
            {
              "icon": "ic-cloud",
              "cap": "自作パッケージを公開できる"
            }
          ],
          "memo": "npmはツール名でありレジストリ名でもある。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "yarn",
                  "desc": "代替クライアントの代表格。",
                  "icon": "ic-package",
                  "page": 555
                },
                {
                  "name": "pnpm",
                  "desc": "ディスク効率に振る代替。",
                  "icon": "ic-package",
                  "page": 556
                },
                {
                  "name": "ロックファイル",
                  "desc": "package-lock.json。",
                  "icon": "ic-file",
                  "page": 553
                }
              ]
            }
          ]
        },
        {
          "id": "yarn",
          "page": 555,
          "term": "yarn",
          "subtitle": "npmに対抗して生まれた、もう一つのクライアント",
          "category": "言語別パッケージマネージャ",
          "icon": "ic-package",
          "oneline": "Facebook発のJavaScriptパッケージマネージャ。高速化やロックファイル体験を武器に普及した。",
          "q1_text": "npmの当時の速さ・決定性・DXに不満があり、代替クライアントが求められた。",
          "q2_intro": "npm install の遅さと、環境差によるずれが日常だった（当時）。",
          "q2_table": {
            "col_before": "当時のnpm体験",
            "col_after": "yarn",
            "rows": [
              [
                "ロック",
                "弱かった時期がある",
                "yarn.lock で強く固定"
              ],
              [
                "速さ",
                "遅く感じることが",
                "キャッシュや並列で改善を狙う"
              ],
              [
                "UI",
                "素朴",
                "進捗やワークスペース体験を強化"
              ],
              [
                "互換",
                "——",
                "npmレジストリを利用可能"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-package",
              "cap": "npm互換のCLIで依存を管理できる"
            },
            {
              "icon": "ic-clock",
              "cap": "キャッシュで再インストールが速い"
            },
            {
              "icon": "ic-layers",
              "cap": "workspacesでモノレポ向き"
            }
          ],
          "memo": "チームのREADMEに「どのYarnか」が書いてあると救われる。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "npm",
                  "desc": "比較対象でありエコシステムの中心。",
                  "icon": "ic-package",
                  "page": 554
                },
                {
                  "name": "pnpm",
                  "desc": "もう一つの有力代替。",
                  "icon": "ic-package",
                  "page": 556
                },
                {
                  "name": "ロックファイル",
                  "desc": "yarn.lock。",
                  "icon": "ic-file",
                  "page": 553
                }
              ]
            }
          ]
        },
        {
          "id": "pnpm",
          "page": 556,
          "term": "pnpm",
          "subtitle": "同じパッケージを、ディスク上で賢く共有",
          "category": "言語別パッケージマネージャ",
          "icon": "ic-package",
          "oneline": "コンテンツアドレス可能なストアとシンボリックリンクで、依存を効率的に入れるJavaScriptパッケージマネージャ。",
          "q1_text": "プロジェクトごとに node_modules が肥大化し、同じ版の複製がディスクを圧迫した。",
          "q2_intro": "npm/yarn の flat な node_modules は便利だが、幽霊依存（書いてもないのにrequireできる）も生んだ。",
          "q2_table": {
            "col_before": "従来の node_modules",
            "col_after": "pnpm",
            "rows": [
              [
                "ディスク",
                "複製が多い",
                "ストア共有で節約"
              ],
              [
                "幽霊依存",
                "起きやすい",
                "厳格で気づきやすい"
              ],
              [
                "ロック",
                "各ツール流儀",
                "pnpm-lock.yaml"
              ],
              [
                "モノレポ",
                "可能",
                "workspace が強い"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-package",
              "cap": "依存インストールのディスク消費を抑えられる"
            },
            {
              "icon": "ic-scale",
              "cap": "宣言していない依存に気づきやすい"
            },
            {
              "icon": "ic-layers",
              "cap": "モノレポ運用と相性が良い"
            }
          ],
          "memo": "直すとプロジェクトは一段きちんとする。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "npm",
                  "desc": "エコシステムの基準点。",
                  "icon": "ic-package",
                  "page": 554
                },
                {
                  "name": "依存関係",
                  "desc": "厳格さの対象。",
                  "icon": "ic-network",
                  "page": 551
                },
                {
                  "name": "ロックファイル",
                  "desc": "pnpm-lock.yaml。",
                  "icon": "ic-file",
                  "page": 553
                }
              ]
            }
          ]
        },
        {
          "id": "pip",
          "page": 557,
          "term": "pip",
          "subtitle": "Pythonの「とりあえず入れる」定番コマンド",
          "category": "言語別パッケージマネージャ",
          "icon": "ic-package",
          "oneline": "Pythonの標準的なパッケージインストーラ。PyPIからパッケージを取得して環境に入れる。",
          "q1_text": "Pythonの第三者ライブラリを、手作業でパスに置く運用は限界だった。",
          "q2_intro": "ソースをダウンロードして setup.py を叩くか、OSのパッケージに頼っていた。",
          "q2_table": {
            "col_before": "手動配置",
            "col_after": "pip",
            "rows": [
              [
                "入手",
                "探して展開",
                "pip install で取得"
              ],
              [
                "版管理",
                "曖昧",
                "requirements やロックで固定"
              ],
              [
                "環境",
                "システム全体を汚しがち",
                "venvと組み合わせるのが定石"
              ],
              [
                "公開",
                "個別",
                "PyPIへアップロードする流れ"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-package",
              "cap": "PyPIからライブラリを入れられる"
            },
            {
              "icon": "ic-file",
              "cap": "requirements.txtで共有可能"
            },
            {
              "icon": "ic-scale",
              "cap": "venvと組み合わせて環境を分けられる"
            }
          ],
          "memo": "pipだけだと「環境の分離」はしてくれない。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "pyenv",
                  "desc": "Python本体のバージョン管理。",
                  "icon": "ic-layers",
                  "page": 566
                },
                {
                  "name": "パッケージ",
                  "desc": "pipが扱う単位。",
                  "icon": "ic-package",
                  "page": 550
                },
                {
                  "name": "ロックファイル",
                  "desc": "詩やuvなど上位ツール側で強化されがち。",
                  "icon": "ic-file",
                  "page": 553
                }
              ]
            }
          ]
        },
        {
          "id": "gem",
          "page": 558,
          "term": "gem",
          "subtitle": "Rubyの宝石箱から部品を取り出す",
          "category": "言語別パッケージマネージャ",
          "icon": "ic-package",
          "oneline": "Rubyのパッケージ（gem）を管理する仕組み。RubyGemsと、Bundlerによるアプリ単位の固定がセットで語られる。",
          "q1_text": "Rubyのライブラリ流通が増え、インストールとバージョン衝突を標準化したかった。",
          "q2_intro": "ライブラリを手で配置し、requireパスと格闘していた。",
          "q2_table": {
            "col_before": "手動ライブラリ管理",
            "col_after": "gem / Bundler",
            "rows": [
              [
                "インストール",
                "配置とパス設定",
                "gem install / bundle install"
              ],
              [
                "アプリの固定",
                "難しい",
                "Gemfile.lock で再現"
              ],
              [
                "公開",
                "個別配布",
                "RubyGems.org へ"
              ],
              [
                "衝突",
                "実行時に発覚",
                "解決をツールが支援"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-package",
              "cap": "Rubyライブラリを標準手順で入れられる"
            },
            {
              "icon": "ic-file",
              "cap": "Gemfileでアプリの依存を宣言できる"
            },
            {
              "icon": "ic-layers",
              "cap": "Railsなど生態系の前提になる"
            }
          ],
          "memo": "アプリ開発では Bundler 前提で考えると現場に近い。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "rbenv",
                  "desc": "Ruby本体のバージョン管理。",
                  "icon": "ic-layers",
                  "page": 565
                },
                {
                  "name": "ロックファイル",
                  "desc": "Gemfile.lock。",
                  "icon": "ic-file",
                  "page": 553
                },
                {
                  "name": "Rails",
                  "desc": "gem生態系の巨大ユーザー。",
                  "icon": "ic-cube",
                  "page": 177
                }
              ]
            }
          ]
        },
        {
          "id": "cargo",
          "page": 559,
          "term": "cargo",
          "subtitle": "Rustの公式・ビルドもテストも届ける万能箱",
          "category": "言語別パッケージマネージャ",
          "icon": "ic-package",
          "oneline": "Rustの公式パッケージマネージャ兼ビルドツール。crates.ioからの依存取得とビルドを一体で担う。",
          "q1_text": "言語が新しくても、依存取得・ビルド・テストがバラバラだと学習コストが跳ねる。",
          "q2_intro": "他言語のように、ビルドシステムとパッケージマネージャを別々に学ぶ必要があった。",
          "q2_table": {
            "col_before": "ツール分裂モデル",
            "col_after": "cargo",
            "rows": [
              [
                "依存",
                "別ツール",
                "Cargo.toml で宣言"
              ],
              [
                "ビルド",
                "別システム",
                "cargo build"
              ],
              [
                "テスト",
                "別ランナーが多い",
                "cargo test が標準"
              ],
              [
                "公開",
                "手順が多様",
                "cargo publish へ一本化"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-package",
              "cap": "crate依存を公式手順で管理できる"
            },
            {
              "icon": "ic-rocket",
              "cap": "ビルドとテストを同じCLIで回せる"
            },
            {
              "icon": "ic-file",
              "cap": "Cargo.lockで再現ビルドしやすい"
            }
          ],
          "memo": "Rustを入れるとだいたいcargoも一緒に来る。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "パッケージ",
                  "desc": "crateと呼ばれる単位。",
                  "icon": "ic-package",
                  "page": 550
                },
                {
                  "name": "ロックファイル",
                  "desc": "Cargo.lock。",
                  "icon": "ic-file",
                  "page": 553
                },
                {
                  "name": "Rust",
                  "desc": "cargoの宿主言語。",
                  "icon": "ic-file",
                  "page": 176
                }
              ]
            }
          ]
        },
        {
          "id": "go-mod",
          "page": 560,
          "term": "go mod",
          "subtitle": "Goモジュールで依存をプロジェクトに根付かせる",
          "category": "言語別パッケージマネージャ",
          "icon": "ic-package",
          "oneline": "Goのモジュールモードで依存を管理する仕組み。go.mod / go.sum が中心になる。",
          "q1_text": "GOPATH時代は配置場所とバージョン管理が独特で、再現や複数版共存がつらかった。",
          "q2_intro": "すべてのGoコードをGOPATH配下に置き、版は「今取れた最新」に近い感覚になりがちだった。",
          "q2_table": {
            "col_before": "GOPATH時代",
            "col_after": "go mod",
            "rows": [
              [
                "配置",
                "GOPATH必須感",
                "どこでもモジュールにできる"
              ],
              [
                "版",
                "曖昧になりやすい",
                "go.modで明示"
              ],
              [
                "改ざん検知",
                "弱い",
                "go.sumで検証"
              ],
              [
                "再現",
                "環境依存",
                "モジュール単位で揃えやすい"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-package",
              "cap": "モジュールとして依存を宣言できる"
            },
            {
              "icon": "ic-file",
              "cap": "go.sumで取得内容を検証できる"
            },
            {
              "icon": "ic-layers",
              "cap": "GOPATHから解放された開発ができる"
            }
          ],
          "memo": "「go modules」全体を指して「go mod」と言うことも多い。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "依存関係",
                  "desc": "go.modに書く対象。",
                  "icon": "ic-network",
                  "page": 551
                },
                {
                  "name": "セマンティックバージョニング",
                  "desc": "モジュール版の基本感覚。",
                  "icon": "ic-scale",
                  "page": 552
                },
                {
                  "name": "Go",
                  "desc": "宿主言語。",
                  "icon": "ic-file",
                  "page": 173
                }
              ]
            }
          ]
        },
        {
          "id": "homebrew",
          "page": 561,
          "term": "Homebrew",
          "subtitle": "macOSに、足りないコマンドを淹れる",
          "category": "OSパッケージマネージャ",
          "icon": "ic-package",
          "oneline": "macOS（とLinux）で人気のパッケージマネージャ。brew install で開発ツールを入れられる。",
          "q1_text": "MacでUNIX系ツールを入れようとすると、公式以外の手段がばらばらだった。",
          "q2_intro": "ソースビルドや、サイトごとのインストーラを集めるのが日常だった。",
          "q2_table": {
            "col_before": "個別インストーラ",
            "col_after": "Homebrew",
            "rows": [
              [
                "入れ方",
                "サイトごとに違う",
                "brew install で統一"
              ],
              [
                "更新",
                "個別",
                "brew upgrade でまとめて"
              ],
              [
                "アンインストール",
                "残骸が残りやすい",
                "手順が比較的明確"
              ],
              [
                "開発体験",
                "環境構築が長い",
                "オンボーディングが短い"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-laptop",
              "cap": "開発ツールをコマンド一発で入れられる"
            },
            {
              "icon": "ic-package",
              "cap": "GUIアプリ（Cask）も扱える"
            },
            {
              "icon": "ic-clock",
              "cap": "チームのMac環境構築を揃えやすい"
            }
          ],
          "memo": "「まずbrew入れて」はMac開発者の儀式。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "apt",
                  "desc": "Debian/Ubuntu側の定番。",
                  "icon": "ic-package",
                  "page": 562
                },
                {
                  "name": "mise",
                  "desc": "言語ランタイム版管理の上位互換寄り。",
                  "icon": "ic-layers",
                  "page": 563
                },
                {
                  "name": "パッケージ",
                  "desc": "brewが配る単位。",
                  "icon": "ic-package",
                  "page": 550
                }
              ]
            }
          ]
        },
        {
          "id": "apt",
          "page": 562,
          "term": "apt",
          "subtitle": "Debian系Linuxの公式なお買い物カゴ",
          "category": "OSパッケージマネージャ",
          "icon": "ic-server",
          "oneline": "Debian/Ubuntuなどで使うパッケージ管理コマンド。OSのソフトウェアを安全に入れたり更新したりする。",
          "q1_text": "Linuxにソフトを入れる方法がソースビルド中心だと、依存地獄と更新追従がつらい。",
          "q2_intro": "tarballを展開して ./configure && make が通過儀礼だった。",
          "q2_table": {
            "col_before": "ソースからの導入",
            "col_after": "apt",
            "rows": [
              [
                "依存解決",
                "自分で集める",
                "パッケージマネージャが解決"
              ],
              [
                "更新",
                "手作業",
                "apt upgrade で追従"
              ],
              [
                "削除",
                "残骸管理が難しい",
                "アンインストール手順がある"
              ],
              [
                "信頼",
                "ダウンロード元まちまち",
                "ディストリのリポジトリ"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-package",
              "cap": "ソフトの入出力を標準化できる"
            },
            {
              "icon": "ic-server",
              "cap": "Debian/Ubuntu系の基本操作になる"
            },
            {
              "icon": "ic-clock",
              "cap": "依存解決を自動でやってくれる"
            }
          ],
          "memo": "apt はフロントエンド、実体には dpkg などが控える。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "Homebrew",
                  "desc": "Mac側の類似体験。",
                  "icon": "ic-package",
                  "page": 561
                },
                {
                  "name": "パッケージ",
                  "desc": "debなどの単位。",
                  "icon": "ic-package",
                  "page": 550
                },
                {
                  "name": "Shell",
                  "desc": "aptを叩く場所（Ch12）。",
                  "icon": "ic-monitor",
                  "page": 601
                }
              ]
            }
          ]
        },
        {
          "id": "mise",
          "page": 563,
          "term": "mise",
          "subtitle": "言語の版管理を、一つの道具にまとめる",
          "category": "ランタイムバージョン管理",
          "icon": "ic-layers",
          "oneline": "asdf互換の開発環境マネージャ。NodeやPythonなど複数言語のバージョンをまとめて切り替える。",
          "q1_text": "nvm、rbenv、pyenv…とツールが増え、シェル設定がパンパンになった。",
          "q2_intro": "言語ごとに別のバージョンマネージャを入れ、それぞれの初期化スクリプトを.zshrcに並べていた。",
          "q2_table": {
            "col_before": "言語別ツール乱立",
            "col_after": "mise",
            "rows": [
              [
                "設定",
                "ツールごとに初期化",
                "まとめて管理しやすい"
              ],
              [
                "プロジェクト",
                "各ツールの記法",
                ".tool-versions 等で共有"
              ],
              [
                "速さ",
                "起動が重くなりがち",
                "体感の軽さを売りにする実装"
              ],
              [
                "範囲",
                "言語ごと",
                "複数ランタイム＋タスクも"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-layers",
              "cap": "複数言語の版を一箇所で切り替えられる"
            },
            {
              "icon": "ic-file",
              "cap": "プロジェクトの必要版をファイルで共有できる"
            },
            {
              "icon": "ic-rocket",
              "cap": "シェル起動を軽く保ちやすい"
            }
          ],
          "memo": "「新しいnvm」ではなく「版管理の統合層」と捉えるとよい。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "nvm",
                  "desc": "Node特化の先輩。",
                  "icon": "ic-layers",
                  "page": 564
                },
                {
                  "name": "rbenv",
                  "desc": "Ruby特化。",
                  "icon": "ic-layers",
                  "page": 565
                },
                {
                  "name": "pyenv",
                  "desc": "Python特化。",
                  "icon": "ic-layers",
                  "page": 566
                }
              ]
            }
          ]
        },
        {
          "id": "nvm",
          "page": 564,
          "term": "nvm",
          "subtitle": "Nodeの版を、ディレクトリ気分で着替る",
          "category": "ランタイムバージョン管理",
          "icon": "ic-layers",
          "oneline": "Node Version Manager。シェル上で複数のNode.jsバージョンをインストールし、切り替えて使う。",
          "q1_text": "プロジェクトごとに要求するNodeの版が違い、システムの単一Nodeでは足りなくなった。",
          "q2_intro": "公式インストーラやOSパッケージで入れたNodeを、全プロジェクトで共有していた。",
          "q2_table": {
            "col_before": "システムに一つのNode",
            "col_after": "nvm",
            "rows": [
              [
                "複数版",
                "難しい",
                "并存して切り替え"
              ],
              [
                "プロジェクト",
                "手動で合わせる",
                ".nvmrc で自動寄りに"
              ],
              [
                "入れ直し",
                "大ごと",
                "版単位で追加・削除"
              ],
              [
                "影響範囲",
                "OS全体",
                "ユーザー環境に閉じやすい"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-layers",
              "cap": "プロジェクトごとにNode版を合わせられる"
            },
            {
              "icon": "ic-package",
              "cap": "新しいLTSを試しやすい"
            },
            {
              "icon": "ic-file",
              "cap": ".nvmrcで版を共有できる"
            }
          ],
          "memo": "概念学習の入口としてnvmはまだ強い。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "mise",
                  "desc": "多言語をまとめる上位互換寄り。",
                  "icon": "ic-layers",
                  "page": 563
                },
                {
                  "name": "npm",
                  "desc": "切り替えたNodeに付いてくるマネージャ。",
                  "icon": "ic-package",
                  "page": 554
                },
                {
                  "name": "Node.js",
                  "desc": "対象ランタイム。",
                  "icon": "ic-server",
                  "page": 143
                }
              ]
            }
          ]
        },
        {
          "id": "rbenv",
          "page": 565,
          "term": "rbenv",
          "subtitle": "Rubyの版を、プロジェクトの床に置く",
          "category": "ランタイムバージョン管理",
          "icon": "ic-layers",
          "oneline": "複数のRubyバージョンをユーザー環境に入れ、ディレクトリごとに切り替えるツール。",
          "q1_text": "Railsアプリごとに必要なRubyが違い、システムRubyを上げ下げすると他が壊れた。",
          "q2_intro": "OSのRubyや、RVMの重い魔法に頼るか、コンテナで逃げるかが選択肢だった。",
          "q2_table": {
            "col_before": "システムRuby一本",
            "col_after": "rbenv",
            "rows": [
              [
                "複数版",
                "衝突しやすい",
                "shimで切り替え"
              ],
              [
                "プロジェクト",
                "手動",
                ".ruby-version で指定"
              ],
              [
                "思想",
                "——",
                "薄いラッパを好む"
              ],
              [
                "gem",
                "混ざりやすい",
                "版ごとに分離しやすい"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-layers",
              "cap": "アプリごとにRuby版を固定できる"
            },
            {
              "icon": "ic-file",
              "cap": ".ruby-versionでチーム共有できる"
            },
            {
              "icon": "ic-package",
              "cap": "gem環境の汚染を抑えやすい"
            }
          ],
          "memo": "ruby-build とセットで入れるのが定番。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "gem",
                  "desc": "Rubyパッケージ側。",
                  "icon": "ic-package",
                  "page": 558
                },
                {
                  "name": "mise",
                  "desc": "rbenv代替になりうる統合ツール。",
                  "icon": "ic-layers",
                  "page": 563
                },
                {
                  "name": "Rails",
                  "desc": "版固定が重要な代表アプリ。",
                  "icon": "ic-cube",
                  "page": 177
                }
              ]
            }
          ]
        },
        {
          "id": "pyenv",
          "page": 566,
          "term": "pyenv",
          "subtitle": "Pythonの版を、要求どおりに切り出す",
          "category": "ランタイムバージョン管理",
          "icon": "ic-layers",
          "oneline": "複数のPythonバージョンをインストールし、グローバルやプロジェクト単位で切り替えるツール。",
          "q1_text": "システムPythonはOSが使うため、プロジェクト都合で上げ下げしづらい。",
          "q2_intro": "aptのpython3や公式インストーラ一本でまかない、venvだけでもがいていた。",
          "q2_table": {
            "col_before": "システムPython頼み",
            "col_after": "pyenv",
            "rows": [
              [
                "複数版",
                "つらい",
                "并存して切り替え"
              ],
              [
                "OSへの影響",
                "怖い",
                "ユーザー環境に分離"
              ],
              [
                "指定",
                "手動",
                ".python-version など"
              ],
              [
                "venvとの関係",
                "——",
                "本体版＋venvの二段が定石"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-layers",
              "cap": "プロジェクト要求のPython版を入れられる"
            },
            {
              "icon": "ic-scale",
              "cap": "OSのPythonを汚さずに済む"
            },
            {
              "icon": "ic-file",
              "cap": "版ファイルでチームの前提を共有できる"
            }
          ],
          "memo": "miseに寄せる流れもあるが、概念は同じ。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "pip",
                  "desc": "入れたPythonの上で動くインストーラ。",
                  "icon": "ic-package",
                  "page": 557
                },
                {
                  "name": "mise",
                  "desc": "統合版管理。",
                  "icon": "ic-layers",
                  "page": 563
                },
                {
                  "name": "Python",
                  "desc": "対象言語。",
                  "icon": "ic-file",
                  "page": 172
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "number": 12,
      "title": "Linux・ターミナル",
      "entries": [
        {
          "id": "terminal",
          "page": 600,
          "term": "Terminal",
          "subtitle": "文字でコンピュータと話す窓口",
          "category": "ターミナル基礎",
          "icon": "ic-monitor",
          "oneline": "キーボード入力と文字出力でOSやプログラムとやり取りするための端末（エミュレータ含む）のこと。",
          "q1_text": "GUIだけでは自動化やリモート作業、細かい制御がしづらい。",
          "q2_intro": "全部をマウスとウィンドウで操作し、繰り返し作業も手でやっていた。",
          "q2_table": {
            "col_before": "GUIだけの操作",
            "col_after": "Terminal",
            "rows": [
              [
                "自動化",
                "マクロや手作業",
                "コマンドとスクリプトで再現"
              ],
              [
                "リモート",
                "画面転送が重いことも",
                "SSHで文字だけ届く"
              ],
              [
                "記録",
                "操作履歴が残らない",
                "履歴やログに残しやすい"
              ],
              [
                "学習曲線",
                "低い入口",
                "最初は記号の海"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-monitor",
              "cap": "文字コマンドでOSを操作できる"
            },
            {
              "icon": "ic-rocket",
              "cap": "同じ操作をスクリプトにできる"
            },
            {
              "icon": "ic-network",
              "cap": "リモートサーバー作業の入口になる"
            }
          ],
          "memo": "黒い画面そのものが怖い対象ではない。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "Shell",
                  "desc": "コマンドを解釈して実行するプログラム。",
                  "icon": "ic-file",
                  "page": 601
                },
                {
                  "name": "Bash",
                  "desc": "定番のシェル。",
                  "icon": "ic-file",
                  "page": 602
                },
                {
                  "name": "Ghostty",
                  "desc": "端末エミュレータの一例。",
                  "icon": "ic-monitor",
                  "page": 617
                }
              ]
            }
          ]
        },
        {
          "id": "shell",
          "page": 601,
          "term": "Shell",
          "subtitle": "コマンドを受け取り、OSに橋渡しする殻",
          "category": "ターミナル基礎",
          "icon": "ic-file",
          "oneline": "ユーザーが打ったコマンド行を解釈し、プログラム起動やパイプなどの制御を行うインターフェースプログラム。",
          "q1_text": "カーネルに直接話すのはつらい。人間向けの対話層として、コマンドを受け付ける殻が必要だった。",
          "q2_intro": "決まったメニュー操作か、個別アプリのGUIだけが入口だった。",
          "q2_table": {
            "col_before": "メニュー操作中心",
            "col_after": "Shell",
            "rows": [
              [
                "表現力",
                "用意された操作",
                "コマンドの組み合わせが自由"
              ],
              [
                "パイプ",
                "アプリ間が閉じる",
                "標準入出力でつなげる"
              ],
              [
                "環境",
                "見えにくい",
                "変数やPATHで制御"
              ],
              [
                "種類",
                "——",
                "Bash / Zsh など選択できる"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-file",
              "cap": "コマンド行を解釈して実行できる"
            },
            {
              "icon": "ic-layers",
              "cap": "パイプやリダイレクトで処理を組める"
            },
            {
              "icon": "ic-package",
              "cap": "シェルスクリプトで手順をファイル化できる"
            }
          ],
          "memo": "「シェルを変える」と「ターミナルを変える」は別の話。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "Bash",
                  "desc": "広く使われるシェル。",
                  "icon": "ic-file",
                  "page": 602
                },
                {
                  "name": "Zsh",
                  "desc": "macOSデフォルトになったシェル。",
                  "icon": "ic-file",
                  "page": 603
                },
                {
                  "name": "PATH",
                  "desc": "コマンド検索パス。",
                  "icon": "ic-network",
                  "page": 604
                }
              ]
            }
          ]
        },
        {
          "id": "bash",
          "page": 602,
          "term": "Bash",
          "subtitle": "Linuxサーバーでいちばん遭遇する方言",
          "category": "シェル",
          "icon": "ic-file",
          "oneline": "Bourne Again SHell。Linuxやスクリプト文化で標準に近い位置にいるシェル。",
          "q1_text": "古いBourne shellの互換を保ちつつ、実用的な機能を足した対話・スクリプト用シェルが必要だった。",
          "q2_intro": "shの最小主義か、ベンダーごとの独自シェルに分かれていた。",
          "q2_table": {
            "col_before": "素のsh／独自シェル",
            "col_after": "Bash",
            "rows": [
              [
                "普及",
                "環境差が大きい",
                "Linuxで事実上の共通語"
              ],
              [
                "スクリプト",
                "機能が限られることも",
                "配列や関数等が実用的"
              ],
              [
                "学習資源",
                "分散",
                "事例と記事が圧倒的"
              ],
              [
                "対話",
                "素朴",
                "補完や履歴も実用レベル"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-file",
              "cap": "シェルスクリプトを書ける"
            },
            {
              "icon": "ic-server",
              "cap": "サーバー作業の共通土台になる"
            },
            {
              "icon": "ic-clock",
              "cap": "短い自動化をすぐ回せる"
            }
          ],
          "memo": "#!/bin/sh との違いで刺さるバグは、あるあるの関門。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "Zsh",
                  "desc": "対話体験で選ばれやすい兄弟。",
                  "icon": "ic-file",
                  "page": 603
                },
                {
                  "name": "Shell",
                  "desc": "上位概念。",
                  "icon": "ic-file",
                  "page": 601
                },
                {
                  "name": "Cron",
                  "desc": "Bashスクリプトの実行タイミング役。",
                  "icon": "ic-clock",
                  "page": 609
                }
              ]
            }
          ]
        },
        {
          "id": "zsh",
          "page": 603,
          "term": "Zsh",
          "subtitle": "補完が賢く、見た目も整えやすいシェル",
          "category": "シェル",
          "icon": "ic-file",
          "oneline": "高機能なUNIXシェル。強力な補完やテーマ文化で、対話利用のデファクト寄りになった。",
          "q1_text": "毎日打つシェルなら、補完・履歴・見た目の快適さが生産性に直結する。",
          "q2_intro": "サーバーではBash、手元もBashのまま、補完の弱さを我慢していた。",
          "q2_table": {
            "col_before": "Bash中心の対話",
            "col_after": "Zsh",
            "rows": [
              [
                "補完",
                "十分だが素朴",
                "強力で拡張しやすい"
              ],
              [
                "カスタム",
                "可能",
                "フレームワーク文化が厚い"
              ],
              [
                "macOS",
                "かつてはBash",
                "近年はZshがデフォルト"
              ],
              [
                "スクリプト移植",
                "——",
                "Bashとの差分に注意"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-monitor",
              "cap": "日々のコマンド入力を快適にできる"
            },
            {
              "icon": "ic-layers",
              "cap": "プラグインで体験を拡張できる"
            },
            {
              "icon": "ic-file",
              "cap": "プロンプトやテーマを整えられる"
            }
          ],
          "memo": "スクリプトの共有はBash寄りに書く、は無難な分割。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "Bash",
                  "desc": "スクリプト共通語。",
                  "icon": "ic-file",
                  "page": 602
                },
                {
                  "name": "Terminal",
                  "desc": "Zshを表示する窓。",
                  "icon": "ic-monitor",
                  "page": 600
                },
                {
                  "name": "PATH",
                  "desc": "設定をいじりがちな場所。",
                  "icon": "ic-network",
                  "page": 604
                }
              ]
            }
          ]
        },
        {
          "id": "path",
          "page": 604,
          "term": "PATH",
          "subtitle": "「どの部屋からコマンドを探す？」の名簿",
          "category": "環境",
          "icon": "ic-network",
          "oneline": "シェルがコマンド名だけで実行ファイルを探すとき、順番に見て回るディレクトリのリスト（環境変数）。",
          "q1_text": "毎回フルパスを打つのはつらい。一方で同名コマンドが複数あると、どれが起動するかも制御したい。",
          "q2_intro": "実行ファイルの場所を全部覚えて、絶対パスで起動していた（あるいは起動できずにいた）。",
          "q2_table": {
            "col_before": "フルパス必須",
            "col_after": "PATH",
            "rows": [
              [
                "起動",
                "場所を指定",
                "名前だけで探せる"
              ],
              [
                "優先順位",
                "——",
                "左（先）に書いた方が勝つ"
              ],
              [
                "トラブル",
                "見つからない",
                "PATH漏れが原因の常連"
              ],
              [
                "版管理",
                "——",
                "shimの仕組みと組み合わさる"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-file",
              "cap": "コマンドの探索順序を制御できる"
            },
            {
              "icon": "ic-scale",
              "cap": "command not foundを切り分けられる"
            },
            {
              "icon": "ic-layers",
              "cap": "ツールのバージョン切替と相性が良い"
            }
          ],
          "memo": "PATHを通す＝名簿に部屋を追加する、イメージ。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "Environment Variable",
                  "desc": "PATHもその一種。",
                  "icon": "ic-file",
                  "page": 606
                },
                {
                  "name": "Shell",
                  "desc": "PATHを見てコマンドを探す主体。",
                  "icon": "ic-file",
                  "page": 601
                },
                {
                  "name": "mise",
                  "desc": "shim経由でPATH体験に介入（Ch11）。",
                  "icon": "ic-layers",
                  "page": 563
                }
              ]
            }
          ]
        },
        {
          "id": "ssh",
          "page": 605,
          "term": "SSH",
          "subtitle": "遠くのサーバーに、暗号化してログインする",
          "category": "リモートアクセス",
          "icon": "ic-network",
          "oneline": "Secure Shell。ネットワーク経由で遠隔マシンに安全にログインしたり、コマンドを実行したりするプロトコル／道具。",
          "q1_text": "遠隔管理でtelnetのような平文通信は盗聴に弱い。",
          "q2_intro": "同じ部屋のコンソールか、平文の遠隔ログイン、あるいはVPN＋別手段に頼っていた。",
          "q2_table": {
            "col_before": "平文リモート／現地作業",
            "col_after": "SSH",
            "rows": [
              [
                "通信",
                "覗かれやすい",
                "暗号化される"
              ],
              [
                "認証",
                "パスワードのみが多い",
                "鍵認証が定石"
              ],
              [
                "用途",
                "ログイン中心",
                "ポート転送やファイル転送も"
              ],
              [
                "自動化",
                "難しい",
                "CIやデプロイの土台になる"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-network",
              "cap": "遠隔サーバーに安全に入れる"
            },
            {
              "icon": "ic-scale",
              "cap": "鍵認証でパスワード配布を減らせる"
            },
            {
              "icon": "ic-package",
              "cap": "scp/sftpやトンネルにも使える"
            }
          ],
          "memo": "「SSHする」は動詞化している。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "Terminal",
                  "desc": "SSHセッションを映す窓。",
                  "icon": "ic-monitor",
                  "page": 600
                },
                {
                  "name": "VPN",
                  "desc": "網全体をトンネルする別手段（Ch2）。",
                  "icon": "ic-network",
                  "page": 40
                },
                {
                  "name": "Daemon",
                  "desc": "sshd として常駐する側。",
                  "icon": "ic-server",
                  "page": 610
                }
              ]
            }
          ]
        },
        {
          "id": "environment-variable",
          "page": 606,
          "term": "Environment Variable",
          "subtitle": "プロセスに渡す「設定の名札」",
          "category": "環境",
          "icon": "ic-file",
          "oneline": "OSやシェルがプロセスに渡す、名前＝値の設定情報。コードを変えずに振る舞いを切り替えるのに使う。",
          "q1_text": "環境ごとに接続先や秘密情報を切り替えたいが、コードに直書きすると危険で配布できない。",
          "q2_intro": "設定をソースコード定数や、マシンごとの手作り設定ファイルに埋め込んでいた。",
          "q2_table": {
            "col_before": "コードに直書き",
            "col_after": "環境変数",
            "rows": [
              [
                "環境差",
                "ビルドや分岐が増える",
                "値だけ差し替え"
              ],
              [
                "秘密情報",
                "リポジトリに混入しやすい",
                "環境側に置ける"
              ],
              [
                "継承",
                "——",
                "子プロセスへ渡せる"
              ],
              [
                "可視性",
                "コードを読めば見える",
                "実行環境を見ないと分からない"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-file",
              "cap": "設定をコードから外に出せる"
            },
            {
              "icon": "ic-layers",
              "cap": "開発／本番で値を切り替えられる"
            },
            {
              "icon": "ic-scale",
              "cap": "秘密情報の取り回し口にできる"
            }
          ],
          "memo": "export した瞬間から子プロセスの世界が変わる。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": ".env",
                  "desc": "環境変数をファイルで扱う慣習。",
                  "icon": "ic-file",
                  "page": 618
                },
                {
                  "name": "PATH",
                  "desc": "代表的な環境変数。",
                  "icon": "ic-network",
                  "page": 604
                },
                {
                  "name": "Process",
                  "desc": "変数を受け取る実行主体。",
                  "icon": "ic-cube",
                  "page": 607
                }
              ]
            }
          ]
        },
        {
          "id": "process",
          "page": 607,
          "term": "Process",
          "subtitle": "いま動いているプログラムの「個体」",
          "category": "OSの実行単位",
          "icon": "ic-cube",
          "oneline": "実行中のプログラムのインスタンス。メモリ空間やPIDなどの資源を持ち、OSに管理される。",
          "q1_text": "同じプログラムでも、同時に複数動かしたり、個別に止めたりしたい。",
          "q2_intro": "コンピュータは一度に一つの作業、あるいはアプリ単位の粗い管理しか意識しなかった。",
          "q2_table": {
            "col_before": "アプリ＝動いているもの",
            "col_after": "Process",
            "rows": [
              [
                "識別",
                "ウィンドウの見た目",
                "PIDなどで一意に管理"
              ],
              [
                "隔離",
                "弱い理解",
                "メモリ空間が分かれる"
              ],
              [
                "終了",
                "閉じる",
                "シグナルで制御できる"
              ],
              [
                "親子",
                "見えにくい",
                "起動関係を追える"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-cube",
              "cap": "動いているプログラムを個体として扱える"
            },
            {
              "icon": "ic-pen",
              "cap": "問題のプロセスだけを調査・終了できる"
            },
            {
              "icon": "ic-server",
              "cap": "サーバー上の多重実行を理解できる"
            }
          ],
          "memo": "「プロセスが死ぬ／殺す」は語彙章への伏線。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "Thread",
                  "desc": "プロセスの中の実行の流れ。",
                  "icon": "ic-layers",
                  "page": 608
                },
                {
                  "name": "Daemon",
                  "desc": "常駐するプロセスの形態。",
                  "icon": "ic-server",
                  "page": 610
                },
                {
                  "name": "SSH",
                  "desc": "遠隔でプロセスを扱う入口。",
                  "icon": "ic-network",
                  "page": 605
                }
              ]
            }
          ]
        },
        {
          "id": "thread",
          "page": 608,
          "term": "Thread",
          "subtitle": "一つのプロセスの中の、並行する手",
          "category": "OSの実行単位",
          "icon": "ic-layers",
          "oneline": "プロセス内で並行に走れる実行の流れ。メモリ空間を共有しつつ、スタックなどを別々に持つ。",
          "q1_text": "待ち時間のあいだも他の作業を進めたいが、プロセスを増やすと重くて共有も面倒。",
          "q2_intro": "重い処理はプロセスを増やすか、順番待ちするか、のどちらかになりがちだった。",
          "q2_table": {
            "col_before": "プロセス増殖／逐次",
            "col_after": "Thread",
            "rows": [
              [
                "生成コスト",
                "高い",
                "相対的に軽い"
              ],
              [
                "メモリ",
                "基本分離",
                "共有が前提"
              ],
              [
                "同期",
                "IPCが必要",
                "ロックなど社内同期が必要"
              ],
              [
                "失敗の影響",
                "プロセス単位",
                "共有破壊が響きやすい"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-layers",
              "cap": "待ちを隠して並行処理できる"
            },
            {
              "icon": "ic-rocket",
              "cap": "マルチコアを活かしやすい"
            },
            {
              "icon": "ic-scale",
              "cap": "共有データの競合に向き合える"
            }
          ],
          "memo": "言語によっては緑スレッドやasyncが別解になる。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "Process",
                  "desc": "スレッドの入れ物。",
                  "icon": "ic-cube",
                  "page": 607
                },
                {
                  "name": "Lock",
                  "desc": "共有資源の交通整理（Ch6）。",
                  "icon": "ic-scale",
                  "page": 95
                },
                {
                  "name": "非同期",
                  "desc": "並行の別モデル（Ch7）。",
                  "icon": "ic-clock",
                  "page": 138
                }
              ]
            }
          ]
        },
        {
          "id": "cron",
          "page": 609,
          "term": "Cron",
          "subtitle": "「毎朝3時にやって」をOSに頼む",
          "category": "ジョブスケジューラ",
          "icon": "ic-clock",
          "oneline": "指定した時刻・周期でコマンドやスクリプトを自動実行する、UNIX系の定番ジョブスケジューラ。",
          "q1_text": "バックアップや集計を人の手と目覚ましに頼ると忘れる。",
          "q2_intro": "担当者が出勤してから手でスクリプトを回すか、常駐プログラムを自作していた。",
          "q2_table": {
            "col_before": "人手／自作常駐",
            "col_after": "Cron",
            "rows": [
              [
                "起動タイミング",
                "人が覚える",
                "crontabで宣言"
              ],
              [
                "記述",
                "口頭・メモ",
                "分時日月曜のフィールド"
              ],
              [
                "失敗通知",
                "気づきにくい",
                "メールやログ設計が必要"
              ],
              [
                "分散",
                "1台前提になりやすい",
                "どのマシンのcronかを意識"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-clock",
              "cap": "定期バッチを自動実行できる"
            },
            {
              "icon": "ic-file",
              "cap": "運用タスクを宣言的に残せる"
            },
            {
              "icon": "ic-server",
              "cap": "サーバーメンテの定番手段になる"
            }
          ],
          "memo": "タイムゾーンと夏時間で一度は泣く。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "Daemon",
                  "desc": "cron自体も常駐サービス。",
                  "icon": "ic-server",
                  "page": 610
                },
                {
                  "name": "Bash",
                  "desc": "よく実行されるスクリプトの中身。",
                  "icon": "ic-file",
                  "page": 602
                },
                {
                  "name": "Process",
                  "desc": "起動される実行主体。",
                  "icon": "ic-cube",
                  "page": 607
                }
              ]
            }
          ]
        },
        {
          "id": "daemon",
          "page": 610,
          "term": "Daemon",
          "subtitle": "裏方として常駐し続けるプロセス",
          "category": "OSの実行形態",
          "icon": "ic-server",
          "oneline": "ユーザー操作に紐づかず、バックグラウンドで待ち受け・定期作業などを行う常駐プロセス。",
          "q1_text": "WebサーバーやSSHのように、「誰かがログインしている間だけ」では足りないサービスがある。",
          "q2_intro": "必要なときだけプログラムを起動し、終わったら終了——が基本モデルだった。",
          "q2_table": {
            "col_before": "都度起動のプログラム",
            "col_after": "Daemon",
            "rows": [
              [
                "寿命",
                "作業と一緒に終わる",
                "長く常駐する"
              ],
              [
                "対話",
                "ユーザーと向き合う",
                "裏で待ち受ける"
              ],
              [
                "管理",
                "手元で起動",
                "サービスマネージャで管理"
              ],
              [
                "例",
                "CLIツール",
                "sshd / cron / nginx 等"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-server",
              "cap": "サービスを常時待ち受けさせられる"
            },
            {
              "icon": "ic-clock",
              "cap": "定期・イベント駆動の裏方を置ける"
            },
            {
              "icon": "ic-layers",
              "cap": "systemdなどで起動管理できる"
            }
          ],
          "memo": "Windowsでいうサービスに近い感覚。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "Process",
                  "desc": "デーモンもプロセスの一種。",
                  "icon": "ic-cube",
                  "page": 607
                },
                {
                  "name": "SSH",
                  "desc": "sshd が代表例。",
                  "icon": "ic-network",
                  "page": 605
                },
                {
                  "name": "Cron",
                  "desc": "定期実行のデーモン利用。",
                  "icon": "ic-clock",
                  "page": 609
                }
              ]
            }
          ]
        },
        {
          "id": "regex",
          "page": 611,
          "term": "正規表現",
          "subtitle": "文字列の模様を、記号で狩る",
          "category": "テキスト処理",
          "icon": "ic-pen",
          "oneline": "文字列のパターンを簡潔に記述し、検索・置換・抽出に使う表記法（と、それを解釈するエンジン）。",
          "q1_text": "ログやテキストから「メールっぽいもの」「数字3桁」を人手で拾うのは限界。",
          "q2_intro": "完全一致検索か、プログラミングのループで一文字ずつ判定していた。",
          "q2_table": {
            "col_before": "完全一致／手書き判定",
            "col_after": "正規表現",
            "rows": [
              [
                "柔軟性",
                "低い",
                "パターンで幅を持たせられる"
              ],
              [
                "記述量",
                "コードが長くなりがち",
                "短い式で表現できることも"
              ],
              [
                "可読性",
                "——",
                "書きすぎると暗号になる"
              ],
              [
                "用途",
                "単純検索",
                "grep / バリデーション / 置換"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-pen",
              "cap": "複雑な文字列条件を短く書ける"
            },
            {
              "icon": "ic-file",
              "cap": "ログ抽出や一括置換ができる"
            },
            {
              "icon": "ic-scale",
              "cap": "入力バリデーションの道具になる"
            }
          ],
          "memo": "「正規表現でパース」はHTML相手だと有名な罠。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "grep系",
                  "desc": "正規表現検索の代表コマンド（近い言葉）。",
                  "icon": "ic-file"
                },
                {
                  "name": "Vim",
                  "desc": "正規表現置換が強い編集器。",
                  "icon": "ic-pen",
                  "page": 615
                },
                {
                  "name": "Shell",
                  "desc": "パイプと組み合わせて使う舞台。",
                  "icon": "ic-file",
                  "page": 601
                }
              ]
            }
          ]
        },
        {
          "id": "permission",
          "page": 612,
          "term": "パーミッション",
          "subtitle": "誰が、読む・書く・実行できるかの鍵",
          "category": "権限",
          "icon": "ic-scale",
          "oneline": "ファイルやディレクトリに対し、ユーザ／グループ／その他が読み書き実行できるかを表す権限設定。",
          "q1_text": "多人で使うUNIXでは、他人の秘密ファイルを読めたり、システムファイルを消せてしまっては困る。",
          "q2_intro": "単一ユーザー前提か、物理的に触れる人だけが操作できる、という世界だった。",
          "q2_table": {
            "col_before": "権限の概念が薄い",
            "col_after": "パーミッション",
            "rows": [
              [
                "制御",
                "ほぼ全部可能",
                "rwxを主体に制限"
              ],
              [
                "表記",
                "——",
                "記号（rwx）や8進数（755）"
              ],
              [
                "所有",
                "曖昧",
                "user/groupが紐づく"
              ],
              [
                "事故",
                "消し放題",
                "権限不足／過剰の両方に注意"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-scale",
              "cap": "ファイルアクセスを主体ごとに制限できる"
            },
            {
              "icon": "ic-file",
              "cap": "chmod/chownで制御できる"
            },
            {
              "icon": "ic-server",
              "cap": "サーバー公開時の最小権限を設計できる"
            }
          ],
          "memo": "ディレクトリの実行ビットは「中に入れるか」の意味になる点が初見殺し。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "SSH",
                  "desc": "秘密鍵ファイルの権限が厳しい。",
                  "icon": "ic-network",
                  "page": 605
                },
                {
                  "name": ".env",
                  "desc": "中身を守る権限設計が重要。",
                  "icon": "ic-file",
                  "page": 618
                },
                {
                  "name": "Process",
                  "desc": "どのユーザー権限で走るかが効く。",
                  "icon": "ic-cube",
                  "page": 607
                }
              ]
            }
          ]
        },
        {
          "id": "ping",
          "page": 613,
          "term": "ping",
          "subtitle": "向こうは生きてる？ の最小確認",
          "category": "ネットワーク診断",
          "icon": "ic-network",
          "oneline": "ICMPなどで相手ホストに応答を求め、到達性と往復時間を見る基本的なネットワーク診断コマンド。",
          "q1_text": "「繋がらない」の原因が相手ダウンなのか、自分側なのか、経路なのか切り分けたい。",
          "q2_intro": "アプリを開いて失敗するか、人に「今どう？」と聞くか、しかなかった。",
          "q2_table": {
            "col_before": "アプリ失敗だけ見る",
            "col_after": "ping",
            "rows": [
              [
                "確認粒度",
                "アプリ全体",
                "ホスト到達の最小単位"
              ],
              [
                "遅延",
                "体感",
                "RTTが数値で見える"
              ],
              [
                "切り分け",
                "曖昧",
                "ネットワーク層の第一手"
              ],
              [
                "限界",
                "——",
                "ICMPが塞がれると無力"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-network",
              "cap": "相手ホストの生存を素早く確認できる"
            },
            {
              "icon": "ic-clock",
              "cap": "遅延の目安を測れる"
            },
            {
              "icon": "ic-pen",
              "cap": "障害切り分けの第一手にできる"
            }
          ],
          "memo": "万能ではないが、それでも最初の一打になりやすい。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "curl",
                  "desc": "アプリ層の到達確認。",
                  "icon": "ic-network",
                  "page": 614
                },
                {
                  "name": "IP Address",
                  "desc": "pingの宛先（Ch2）。",
                  "icon": "ic-network",
                  "page": 29
                },
                {
                  "name": "DNS",
                  "desc": "名前解決の次に疑うポイント（Ch2）。",
                  "icon": "ic-network",
                  "page": 27
                }
              ]
            }
          ]
        },
        {
          "id": "curl",
          "page": 614,
          "term": "curl",
          "subtitle": "URLを、コマンド一行で持ってくる",
          "category": "ネットワーク診断",
          "icon": "ic-network",
          "oneline": "HTTPなど様々なプロトコルでデータを送受信できるコマンドラインツール。API確認の定番。",
          "q1_text": "ブラウザなしで、HTTPのリクエスト／レスポンスを再現・確認したかった。",
          "q2_intro": "ブラウザの開発者ツールか、専用GUIクライアントに頼っていた。",
          "q2_table": {
            "col_before": "ブラウザ／GUIクライアント",
            "col_after": "curl",
            "rows": [
              [
                "再現",
                "手順が重い",
                "一行で同じリクエスト"
              ],
              [
                "自動化",
                "しづらい",
                "シェルからすぐ呼べる"
              ],
              [
                "ヘッダ",
                "GUIで設定",
                "-H などで明示"
              ],
              [
                "学習",
                "画面操作",
                "HTTPの生に近い感触"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-network",
              "cap": "APIをターミナルから叩ける"
            },
            {
              "icon": "ic-file",
              "cap": "ヘッダや本文を細かく制御できる"
            },
            {
              "icon": "ic-rocket",
              "cap": "スクリプトやCIに組み込める"
            }
          ],
          "memo": "「叩く」という語彙の実演会場でもある。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "HTTP",
                  "desc": "curlが最もよく話す相手（Ch2）。",
                  "icon": "ic-network",
                  "page": 25
                },
                {
                  "name": "ping",
                  "desc": "もっと下の層の生存確認。",
                  "icon": "ic-network",
                  "page": 613
                },
                {
                  "name": "API",
                  "desc": "curlで試す対象（Ch4）。",
                  "icon": "ic-cloud",
                  "page": 61
                }
              ]
            }
          ]
        },
        {
          "id": "vim",
          "page": 615,
          "term": "Vim",
          "subtitle": "モードがある、指先のテキスト格闘技",
          "category": "開発ツール",
          "icon": "ic-pen",
          "oneline": "モード型の高機能テキストエディタ。サーバー上での編集や、キー操作での高速編集文化の象徴。",
          "q1_text": "遠いサーバーにはGUIエディタが無いことが多い。",
          "q2_intro": "nanoのような簡易編集か、ファイルを手元に持ち帰って編集して戻していた。",
          "q2_table": {
            "col_before": "簡易編集／往復転送",
            "col_after": "Vim",
            "rows": [
              [
                "操作",
                "メニューや矢印",
                "モード＋キーバインド"
              ],
              [
                "学習",
                "低い",
                "初期コストが高い"
              ],
              [
                "速度",
                "普通",
                "慣れると手が速い"
              ],
              [
                "存在感",
                "——",
                "サーバーにほぼ必ずある文化"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-pen",
              "cap": "SSH先でも本格的にファイルを編集できる"
            },
            {
              "icon": "ic-rocket",
              "cap": "キー操作で編集を高速化できる"
            },
            {
              "icon": "ic-file",
              "cap": "設定やマクロで自分用に育てられる"
            }
          ],
          "memo": "終了方法（:q）がミームになるほど、入口の儀式が有名。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "Terminal",
                  "desc": "Vimが動く場所。",
                  "icon": "ic-monitor",
                  "page": 600
                },
                {
                  "name": "SSH",
                  "desc": "Vimが真価を発揮する遠隔作業。",
                  "icon": "ic-network",
                  "page": 605
                },
                {
                  "name": "正規表現",
                  "desc": "置換でよく使う道具。",
                  "icon": "ic-pen",
                  "page": 611
                }
              ]
            }
          ]
        },
        {
          "id": "markdown",
          "page": 616,
          "term": "Markdown",
          "subtitle": "プレーンテキストのまま、見出しを付ける",
          "category": "開発ツール",
          "icon": "ic-file",
          "oneline": "シンプルな記号で見出しやリストを表し、HTMLなどへ変換できる軽量マークアップ。",
          "q1_text": "文書をリッチにしたいが、Wordや生HTMLは重すぎる／うるさすぎる。",
          "q2_intro": "プレーンテキストの無機質さか、WYSIWYGの重いファイルかの二択になりがちだった。",
          "q2_table": {
            "col_before": "プレーン／Word／HTML",
            "col_after": "Markdown",
            "rows": [
              [
                "読みやすさ",
                "記号が多いか・バイナリ",
                "テキストのまま構造が見える"
              ],
              [
                "差分",
                "つらいことも",
                "Gitと相性が良い"
              ],
              [
                "変換",
                "——",
                "HTMLやPDFへ落とせる"
              ],
              [
                "方言",
                "——",
                "Flavor差には注意"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-file",
              "cap": "READMEや仕様を軽く構造化できる"
            },
            {
              "icon": "ic-layers",
              "cap": "Git上でレビューしやすい文書にできる"
            },
            {
              "icon": "ic-cloud",
              "cap": "ドキュメントサイトの入力形式になる"
            }
          ],
          "memo": "表やタスクリストは方言側の機能。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "HTML",
                  "desc": "よく変換される先（Ch7）。",
                  "icon": "ic-file",
                  "page": 121
                },
                {
                  "name": "Vim",
                  "desc": "Markdownを編集する道具の一例。",
                  "icon": "ic-pen",
                  "page": 615
                },
                {
                  "name": "Repository",
                  "desc": "README.mdの置き場（Ch1）。",
                  "icon": "ic-server",
                  "page": 1
                }
              ]
            }
          ]
        },
        {
          "id": "ghostty",
          "page": 617,
          "term": "Ghostty",
          "subtitle": "速さ志向の、新しい端末エミュレータ",
          "category": "開発ツール",
          "icon": "ic-monitor",
          "oneline": "GPUなどを活用して滑らかさと速さを狙った、比較的新しいクロスプラットフォームな端末エミュレータ。",
          "q1_text": "ターミナルは毎日開く仕事道具なのに、描画の遅れや設定の古臭さがストレスになる。",
          "q2_intro": "OS標準端末や、長年使われてきた定番エミュレータで十分、と我慢する選択が多かった。",
          "q2_table": {
            "col_before": "標準／旧来の端末",
            "col_after": "Ghostty",
            "rows": [
              [
                "描画",
                "十分だが遅延を感じることも",
                "速さ・滑らかさを売りにする"
              ],
              [
                "設定",
                "環境ごとに流儀",
                "現代的な設定体験を狙う"
              ],
              [
                "互換",
                "——",
                "既存のシェルやTUIとそのまま共存"
              ],
              [
                "位置づけ",
                "付属品",
                "選ぶ趣味道具"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-monitor",
              "cap": "日常のターミナル体験を快適にできる"
            },
            {
              "icon": "ic-rocket",
              "cap": "描画や応答の体感を改善できる"
            },
            {
              "icon": "ic-layers",
              "cap": "既存のシェル文化のまま乗り換えられる"
            }
          ],
          "memo": "好みの世界なので、チームの標準にする必要は薄い。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "Terminal",
                  "desc": "Ghosttyが実装する役割。",
                  "icon": "ic-monitor",
                  "page": 600
                },
                {
                  "name": "Shell",
                  "desc": "中で動く通訳。",
                  "icon": "ic-file",
                  "page": 601
                },
                {
                  "name": "Zsh",
                  "desc": "きれいなプロンプトと相性良し。",
                  "icon": "ic-file",
                  "page": 603
                }
              ]
            }
          ]
        },
        {
          "id": "dotenv",
          "page": 618,
          "term": ".env",
          "subtitle": "秘密と設定を、ファイルに置いて読み込む慣習",
          "category": "環境",
          "icon": "ic-file",
          "oneline": "環境変数を KEY=VALUE 形式で並べた設定ファイル。アプリ起動時に読み込んで使う慣習的な仕組み。",
          "q1_text": "環境変数を毎回手でexportするのはつらいし、チームで共有したい「例」も必要。",
          "q2_intro": "シェルのプロファイルに直書きするか、デプロイ先の管理画面にだけ値を置いていた。",
          "q2_table": {
            "col_before": "手export／画面だけの設定",
            "col_after": ".env",
            "rows": [
              [
                "ローカル開発",
                "手順が属人的",
                "ファイルを置けば揃いやすい"
              ],
              [
                "共有",
                "しづらい",
                ".env.example でキーだけ共有"
              ],
              [
                "危険",
                "——",
                "本物の.envをGitに上げる事故"
              ],
              [
                "本番",
                "ファイル置きがち",
                "シークレットマネージャへ寄せるのが本式"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-file",
              "cap": "環境変数をファイルで扱える"
            },
            {
              "icon": "ic-layers",
              "cap": "開発環境の立ち上げを揃えやすい"
            },
            {
              "icon": "ic-scale",
              "cap": "キー一覧をexampleで共有できる"
            }
          ],
          "memo": "「Environment Variableの隣」に置かれるのはこのため。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "Environment Variable",
                  "desc": ".envが注入する先。",
                  "icon": "ic-file",
                  "page": 606
                },
                {
                  "name": "パーミッション",
                  "desc": "ファイルを守る権限。",
                  "icon": "ic-scale",
                  "page": 612
                },
                {
                  "name": "Secret",
                  "desc": "本番での本式管理（セキュリティ章）。",
                  "icon": "ic-scale"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "number": 13,
      "title": "Docker",
      "entries": [
        {
          "id": "docker-existing",
          "existing_file": "index.html",
          "page": 301,
          "term": "Docker"
        },
        {
          "id": "image-existing",
          "existing_file": "019-image.html",
          "page": 305,
          "term": "Image"
        },
        {
          "id": "container-existing",
          "existing_file": "021-container.html",
          "page": 309,
          "term": "Container"
        },
        {
          "id": "volume-existing",
          "existing_file": "065-volume.html",
          "page": 313,
          "term": "Volume"
        },
        {
          "id": "network",
          "page": 317,
          "term": "Network",
          "subtitle": "コンテナ同士が「同じ部屋」で話せる仕組み",
          "category": "コンテナ・ネットワーク",
          "icon": "ic-network",
          "oneline": "Docker上でコンテナ同士や外の世界をつなぐ、仮想的なネットワークの単位。",
          "q1_text": "コンテナを起動しても、名前解決や通信経路がバラバラだとアプリ同士がつながらない。",
          "q2_intro": "ネットワークを意識する前は、ホストのIPやポート番号を直書きしてコンテナ間をつないでいた。",
          "q2_table": {
            "col_before": "ホスト依存のつなぎ方",
            "col_after": "Docker Network",
            "rows": [
              [
                "名前解決",
                "IPやポートを覚える",
                "コンテナ名で呼び合える"
              ],
              [
                "分離",
                "全部が同じ平面に見えがち",
                "網ごとに通信範囲を分けられる"
              ],
              [
                "Composeとの相性",
                "手動で橋渡し",
                "networks: で宣言すればつながる"
              ],
              [
                "外への公開",
                "全部ホスト経由になりやすい",
                "必要なポートだけ公開できる"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-network",
              "cap": "コンテナ同士を名前でつなげる"
            },
            {
              "icon": "ic-layers",
              "cap": "環境ごとに通信範囲を分離できる"
            },
            {
              "icon": "ic-cube",
              "cap": "Composeの networks: で宣言できる"
            }
          ],
          "memo": "bridge / host / none など種類がある。同じ network＝会話できる部屋、と覚える。",
          "sidebar_groups": [
            {
              "label": "関連キーワード",
              "items": [
                {
                  "name": "Container",
                  "desc": "実際に動いているプロセスの箱。",
                  "icon": "ic-cube",
                  "page": 309
                },
                {
                  "name": "Docker Compose",
                  "desc": "複数コンテナとネットワークをまとめて定義。",
                  "icon": "ic-layers",
                  "page": 321
                },
                {
                  "name": "Volume",
                  "desc": "データをコンテナの外に残す仕組み。",
                  "icon": "ic-package",
                  "page": 313
                }
              ]
            }
          ]
        },
        {
          "id": "compose-existing",
          "existing_file": "042-compose.html",
          "page": 321,
          "term": "Docker Compose"
        }
      ]
    },
    {
      "number": 14,
      "title": "DevOps",
      "entries": [
        {
          "id": "devops-existing",
          "existing_file": "014-devops.html",
          "page": 701,
          "term": "DevOps"
        }
      ]
    },
    {
      "number": 16,
      "title": "クラウド・仮想化",
      "entries": [
        {
          "id": "vm-existing",
          "existing_file": "015-vm.html",
          "page": 401,
          "term": "VM"
        },
        {
          "id": "kubernetes-existing",
          "existing_file": "089-kubernetes.html",
          "page": 441,
          "term": "Kubernetes"
        },
        {
          "id": "serverless-architecture",
          "page": 445,
          "term": "サーバレスアーキテクチャ",
          "subtitle": "サーバーを「常時起動」させない設計の考え方",
          "category": "クラウド",
          "icon": "ic-cloud",
          "oneline": "サーバーの用意や運用をクラウド側に任せ、イベントが来たときだけ処理を動かすアーキテクチャの考え方。",
          "q1_text": "常時サーバーを立てておくと、アイドル時間も料金と運用コストがかかる。",
          "q2_intro": "EC2やVMのように、OSごとサーバーを借りて常時稼働させる構成が一般的だった。",
          "q2_table": {
            "col_before": "常時稼働サーバー",
            "col_after": "サーバレスアーキテクチャ",
            "rows": [
              [
                "サーバー管理",
                "OS・パッチ・容量を自分で面倒見",
                "クラウドが面倒見"
              ],
              [
                "課金",
                "起動時間分を払う",
                "実行時間・リクエスト数に応じて"
              ],
              [
                "スケール",
                "手動設定が必要",
                "イベント量に応じて自動"
              ],
              [
                "向いている用途",
                "常時接続が必要",
                "断続的・突発的な処理"
              ]
            ]
          },
          "q3_cells": [
            {
              "icon": "ic-cloud",
              "cap": "APIやバッチをイベント駆動で動かせる"
            },
            {
              "icon": "ic-clock",
              "cap": "アイドル時間の運用コストを抑えられる"
            },
            {
              "icon": "ic-rocket",
              "cap": "小さく始めて需要に合わせて広げやすい"
            }
          ],
          "memo": "サーバーがないのではなく、運用を見えなくした設計。LambdaやCloud Functionsが代表例。",
          "sidebar_groups": [
            {
              "label": "比較する構成",
              "items": [
                {
                  "name": "VM",
                  "desc": "OSごと借りて常時動かす従来型。",
                  "icon": "ic-server",
                  "page": 401
                },
                {
                  "name": "Kubernetes",
                  "desc": "コンテナを常時管理する別アプローチ。",
                  "icon": "ic-wheel",
                  "page": 441
                }
              ]
            },
            {
              "label": "一緒に覚えたい言葉",
              "items": [
                {
                  "name": "FaaS",
                  "desc": "Function as a Service。関数単位で動かすサーバレスの形。",
                  "icon": "ic-file"
                },
                {
                  "name": "Lambda",
                  "desc": "AWSの代表的なサーバレス実行環境（Ch18）。",
                  "icon": "ic-cloud"
                }
              ]
            }
          ],
          "side_memo": "常時接続（WebSocket等）には向かないことも。サーバーレス＝サーバー不要、ではない。"
        }
      ]
    }
  ]
};
