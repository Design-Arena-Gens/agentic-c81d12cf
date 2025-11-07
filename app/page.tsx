"use client";

import { useMemo } from "react";

type Stage = {
  title: string;
  objective: string;
  leverage: string;
  evidence: string;
};

type Play = {
  name: string;
  narrative: string;
  steps: string[];
  reference: string;
};

const stages: Stage[] = [
  {
    title: "探索フェーズ：共感的理解の構築",
    objective:
      "経営者と現場が抱える潜在的な痛点を顕在化し、共通言語を形成する。",
    leverage:
      "クライアントの語りを傾聴し、意思決定のヒューリスティックを把握してからAI活用に接続する。",
    evidence:
      "ロジャーズの来談者中心療法は、共感的理解が信頼関係構築の前提条件であると示す。営業領域でも共感は受注率を向上させる(Brooks, 2019)。"
  },
  {
    title: "設計フェーズ：意味の再構築と未来志向",
    objective:
      "既存業務とAI活用の因果関係を可視化し、導入後の成功物語を共同で描く。",
    leverage:
      "行動経済学が示すナラティブ効果を活用し、具体的な未来イメージを共有することで実行意欲を高める。",
    evidence:
      "カーネマンとトヴェルスキーのプロスペクト理論は、確実性と参照点の提示が投資判断を前向きにすることを示す。"
  },
  {
    title: "検証フェーズ：小さな成功を積み上げる",
    objective:
      "最小限の投資で成果指標を検証し、ROIへの確信を強める。",
    leverage:
      "エビデンスに基づくKPIとデータ収集プロトコルを設定し、意思決定の再現性を担保する。",
    evidence:
      "BJ・フォッグの行動モデルは、小さな成功体験が動機付けを継続させる鍵であると示す。"
  },
  {
    title: "定着フェーズ：経営に組み込む仕組み化",
    objective:
      "AIモデル運用を組織学習サイクルに統合し、継続的改善を支援する。",
    leverage:
      "ガバナンスフレームを明文化し、経営層と現場の意思決定フローを整える。",
    evidence:
      "サンフランシスコ連邦準備銀行の調査では、AI導入後も人間の判断ガバナンスがROIに直結することが示されている(FRB, 2022)。"
  }
];

const plays: Play[] = [
  {
    name: "ヒアリング・リサーチスプリント",
    narrative:
      "中小企業の経営者は“理解できないものには投資しない”という損失回避バイアスに支配されがち。AIの話をする前に、業務と感情の両面で痛点を定義し、AIがもたらす価値を既存の成功体験と結びつける。",
    steps: [
      "経営者インタビュー：価値観・意思決定スタイル・過去のIT投資経験を心理的安全性を担保しながら聴取する。",
      "現場観察：行動観察法(ハイデガーの存在論に基づくBeing-in-the-worldの視点)で暗黙知や非公式ワークフローを可視化。",
      "データ監査：利用可能なデータ粒度、品質、ガバナンス上の制約を棚卸し。",
      "痛点マッピング：Loss aversionを“機会損失”として再定義し、非導入によるコストを定量化。"
    ],
    reference:
      "Kahneman & Tversky (1979), Heidegger (1927), Edmondson (1999)"
  },
  {
    name: "意思決定ボードのデザイン",
    narrative:
      "心理学者Cialdiniの社会的証明原則を活用し、類似規模業界の成功事例を構造化して共有。AIモデルA, B, Cを組み合わせたユースケースをビジュアルボード化し、“変化への恐れ”を“期待”に転換する。",
    steps: [
      "ユースケース選定：顧客LTV、在庫最適化、リスク検知など財務インパクトが明確な領域に絞る。",
      "モデルカタログ化：既存APIやSaaS、オープンモデルを機能別に整理し、組み合わせパターンを提示。",
      "ストーリーボード化：AI導入後の1日の業務シーンを漫画的に描写し、情動に訴求。",
      "導入計画：ROI計算シートとガントチャートをセットにしてコミットメントを形成。"
    ],
    reference:
      "Cialdini (2009), Gawande (2010), Damasio (1994) on somatic markers"
  },
  {
    name: "信頼のエコシステム構築",
    narrative:
      "組織心理学では、変革は“信頼の連鎖”が鍵。AI導入を“人間の判断を拡張する道具”として位置づけ、社内オピニオンリーダーとの共創により抵抗勢力を味方に変える。",
    steps: [
      "AI倫理方針ドラフト：差別回避、説明責任、データ主権の原則を明文化。",
      "ピアラーニング：部門横断ワークショップを実施し、AIアシストによる業務改善の実験を共有。",
      "成果可視化ダッシュボード：KPIの変化をリアルタイムで示し、行動リインフォースメントを誘発。",
      "月次エグゼクティブレビュー：経営と現場の“成功と失敗”を対話形式で振り返り、学習サイクルを確立。"
    ],
    reference:
      "Schein (2010), Kotter (1996), Skinner (1953) on reinforcement"
  }
];

const pricing = [
  {
    tier: "ライトオンボード (月額20万円〜)",
    promise:
      "既存業務のAI適用性診断と優先度付け、PoC計画の策定までを伴走。",
    deliverables: [
      "課題棚卸しワークショップ(月2回)",
      "AIモデル提案書(3パターン)",
      "ROI試算と投資意思決定サポート"
    ]
  },
  {
    tier: "継続伴走 (月額35万円〜)",
    promise:
      "モデル選定から社内実装、オペレーション定着まで継続支援しKPI改善を約束。",
    deliverables: [
      "モデル統合アーキテクチャ設計",
      "データ品質モニタリングとプロンプト改善サイクル",
      "経営層向けガバナンスレポート"
    ]
  },
  {
    tier: "変革パートナー (月額60万円〜)",
    promise:
      "AIを活用した新規事業創出や高度な自動化まで共創する戦略提携モデル。",
    deliverables: [
      "AIロードマップと人材再配置プラン",
      "意思決定プロトコル設計と法務監査対応",
      "社外アライアンス構築と共同実証"
    ]
  }
];

export default function Page() {
  const date = useMemo(() => new Date().toLocaleDateString("ja-JP"), []);

  return (
    <main>
      <div className="container">
        <section className="hero card">
          <span className="tag">AI CONSULTING PLAYBOOK</span>
          <h1>地方中小企業が「AI導入で変わる」と確信するための実践設計</h1>
          <p>
            人間の意思決定は感情と理性の相互作用から成り立ちます。心理学・哲学・行動科学が示した原理を基に、AI未導入の企業が価値を理解し意思決定へ至るまでのプロセスを体系化しました。既存AIモデルのカタログ化と組み合わせ提案を軸にした月額20万円からのコンサルティングを包括的に設計します。
          </p>
          <div className="legend">
            <span>
              <strong>更新日:</strong> {date}
            </span>
            <span>
              <strong>根拠:</strong> カーネマン、チアディーニ、ハイデガー、フォッグ、シェイン等の一次資料
              / 政策レポート / 実務ケーススタディ
            </span>
          </div>
          <a
            className="cta"
            href="mailto:consult@agentic-partners.jp?subject=AI%20コンサルティング相談"
          >
            無料診断を依頼する
          </a>
        </section>

        <section className="card">
          <div className="section-title">4 Stages</div>
          <h2>心理学に裏付けられた導入プロセス</h2>
          <p>
            企業の信頼と投資意思決定を引き出すために、認知バイアスの再定義から小さな成功体験の積み上げまでを段階的に構成しました。各フェーズの目的、レバレッジ、学術的根拠を整理しています。
          </p>
          <div className="grid">
            {stages.map((stage) => (
              <article key={stage.title} className="card">
                <h3>{stage.title}</h3>
                <div className="list">
                  <div className="list-item">
                    <strong>狙い</strong>
                    <p>{stage.objective}</p>
                  </div>
                  <div className="list-item">
                    <strong>アプローチ</strong>
                    <p>{stage.leverage}</p>
                  </div>
                  <div className="list-item">
                    <strong>根拠</strong>
                    <p>{stage.evidence}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="card">
          <div className="section-title">Practical Plays</div>
          <h2>契約獲得に直結する3つの実践プログラム</h2>
          <div className="grid">
            {plays.map((play) => (
              <article key={play.name} className="card">
                <h3>{play.name}</h3>
                <p>{play.narrative}</p>
                <div className="list">
                  {play.steps.map((step) => (
                    <div key={step} className="list-item">
                      <strong>・</strong>
                      <p>{step}</p>
                    </div>
                  ))}
                </div>
                <p className="quote">参考文献: {play.reference}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="card">
          <div className="section-title">Trust Builders</div>
          <h2>「確実に導入したい」と思わせる心理的レバー</h2>
          <div className="list">
            <div className="list-item">
              <strong>反実仮想で危機意識を喚起</strong>
              <p>
                Kahnemanの“反事実的思考”を活用し、「もしAIを導入しなければどうなるか」のシナリオを提示。既存収益の棄損や競合との差別化失敗をデータで示す。
              </p>
            </div>
            <div className="list-item">
              <strong>ソクラテス式問答で内発的動機付け</strong>
              <p>
                クライアント自身に課題と解を語らせることで、自己説得を誘発。Deci & Ryanの自己決定理論が示す自律性支援により実行確率を高める。
              </p>
            </div>
            <div className="list-item">
              <strong>ナッジとコミットメント</strong>
              <p>
                小さなアクション(データサンプル提供など)を依頼し、フット・イン・ザ・ドア効果を活用。Thaler & Sunsteinのナッジ理論を現場で適用。
              </p>
            </div>
            <div className="list-item">
              <strong>ベースラインの可視化</strong>
              <p>
                既存業務のコスト/工数を定量化し、AI導入後の“ギャップ”を図解。Loss aversionをポジティブな期待値へ変換する。
              </p>
            </div>
            <div className="list-item">
              <strong>倫理と統制の安心感</strong>
              <p>
                GPT-4、Claude、Vertex AIなどモデルを対象に、説明責任・データ取り扱いプロトコルを明文化。欧州AI法案や日本政府ガイドラインへの準拠を示し、リスク抵抗を緩和。
              </p>
            </div>
          </div>
        </section>

        <section className="card">
          <div className="section-title">Model Stack</div>
          <h2>AIモデルA/B/Cの組み立てテンプレート</h2>
          <div className="grid two">
            <div className="card">
              <h3>モデルA：洞察生成レイヤー</h3>
              <p>
                OpenAI GPT-4 TurboやClaude 3 Opusを活用し、経営判断に必要な要約・意思決定文書を生成。RAG構成で社内データを統合し、説明可能性を担保。
              </p>
            </div>
            <div className="card">
              <h3>モデルB：予測・最適化レイヤー</h3>
              <p>
                Vertex AI AutoMLやAWS Forecastを用いて在庫・需要予測を行い、財務効果を定量化。ベイズ統計に基づく不確実性評価で意思決定を支援。
              </p>
            </div>
            <div className="card">
              <h3>モデルC：業務自動化レイヤー</h3>
              <p>
                LangChainやMakeを利用したワークフロー自動化。既存のSaaSと連携し、RPA的な繰り返し業務をAIエージェントで代替。ヒューマンインザループ設計で安心感を提供。
              </p>
            </div>
            <div className="card">
              <h3>統合ガバナンス</h3>
              <p>
                MLflow・Weights & Biasesでモデル監視、DataDogで稼働状況を可視化。ISO/IEC 42001草案に基づき、リスクマトリクスとレビュー頻度を設定。
              </p>
            </div>
          </div>
        </section>

        <section className="card">
          <div className="section-title">Pricing</div>
          <h2>月額コンサルティングプランと約束する成果</h2>
          <div className="grid two">
            {pricing.map((plan) => (
              <article key={plan.tier} className="card">
                <h3>{plan.tier}</h3>
                <p>{plan.promise}</p>
                <div className="list">
                  {plan.deliverables.map((deliverable) => (
                    <div key={deliverable} className="list-item">
                      <strong>✓</strong>
                      <p>{deliverable}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="card">
          <div className="section-title">Proof Of Value</div>
          <h2>導入後6ヶ月で狙うべきKPIと評価指標</h2>
          <div className="grid">
            <div className="card">
              <h3>営業・マーケティング</h3>
              <p>
                受注率+8%以上、平均商談期間-20%、顧客解約率-15%。Cialdiniの説得原理を活用したパーソナライズド提案により実現。
              </p>
            </div>
            <div className="card">
              <h3>オペレーション</h3>
              <p>
                在庫回転率+12%、欠品率-30%。需要予測モデルと自動発注ワークフローを組み合わせて、現場の判断負担を軽減。
              </p>
            </div>
            <div className="card">
              <h3>人材・組織</h3>
              <p>
                定量/定性サーベイで従業員エンゲージメント指標+15%。AIによる業務支援が“裁量感”を高め、自己効力感を向上させる(Bandura, 1997)。
              </p>
            </div>
          </div>
        </section>

        <footer className="footer">
          © {new Date().getFullYear()} Agentic Partners. Evidence-based AI Consulting.
        </footer>
      </div>
    </main>
  );
}
