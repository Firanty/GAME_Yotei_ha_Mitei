プレイヤー読み込み();
友達読み込み();
プロローグ = function(){
　画像("imgs/school.png");
	委員長 = キャラ("imgs/i4.png",100,59);
テキストデフォルトY=220;
 台詞(プレイヤーの名前+"「ああ、はらへった…」");
	一時停止();
	クリア();
 台詞("俺"+プレイヤーの名前+"は腹が減っていた…どれくらいかというと…");
	一時停止();
	クリア();
 台詞("路上に倒れこむくらいにである…");
	一時停止();
	クリア();
 台詞("ここ５日くらいまともの食事を口に入れてない気がする、");
	一時停止();
	クリア();
 台詞("なぜそんな状況下というと…");
	一時停止();
	クリア();
 台詞(プレイヤーの名前+"「やっぱり衣食住全部そろってる働き先なんて");
 台詞("そうそうあるわけないかぁ…。」");
	一時停止();
	クリア();
 台詞("まぁこのとおりである、いい働き先を探そうとして");
	一時停止();
	クリア();
 台詞("この有様である");
	一時停止();
	クリア();
 台詞(プレイヤーの名前+"「でも、年頃の男として");
	一時停止();
 台詞("いいところで働きたいよなぁー」");
	一時停止();
	クリア();
 台詞("ここ1週間くらいこの考えから抜け出せないのであった。");
	一時停止();
	クリア();
 台詞("そもそもどうしてこうなってしまったのかというと…");
	一時停止();
	クリア();
 台詞(プレイヤーの名前+"は1週間前まで");
	一時停止();
 台詞("ごく平凡な家庭で暮らしていたのだが");
	一時停止();
	クリア();
 台詞("もろもろの事情により家を出ることを余儀なくされた…");
	一時停止();
	クリア();
 台詞("簡単に言うと勘当されたのである。");
	一時停止();
	クリア();
 台詞("勘当された理由は自分にあるのはわかっているが納得はしてなかった");
	一時停止();
	クリア();
 台詞(プレイヤーの名前+"「何も大学を辞めたくらいで");
	一時停止();
 台詞("そこまでしなくてもいいだろうに」");
	一時停止();
	クリア();
 台詞("とまぁこんな感じである。");
	一時停止();
	クリア();
 台詞("理由としては簡単だ、");
	一時停止();
	クリア();
 台詞("大学に行くのがめんどくさくなったのである。");
	一時停止();
	クリア();
 台詞(友達の名前[0]+"との関係のもつれが始まりであった。");
	一時停止();
	クリア();
 台詞("最初は小さなことが始まりであった");
	一時停止();
	クリア();
 台詞("今となっては何が原因だったかも覚えていない、");
	一時停止();
	クリア();
 台詞("そんな小さなことだったような気がする。");
	一時停止();
	クリア();
 台詞("しかし互いにいがみ合ってしまい意固地になってしまった。");
	一時停止();
	クリア();
 台詞("さすがにここまで来ると友達関係の修復は不可能であった。");
	一時停止();
	クリア();
 台詞("次第に顔を合わすのも億劫になった。");
	一時停止();
	クリア();
 台詞("学校に行く回数も減ってきた当然単位もかなり落とした。");
	一時停止();
	クリア();
 台詞("そしてめんどくさくなって大学を辞めた。");
	一時停止();
	クリア();
 台詞("理由としては、こんな感じである。");
	一時停止();
	クリア();
 台詞("家から勘当されてからすぐ働かないと思い仕事をしようと");
	一時停止();
 台詞("考え始めたのまではよかったのだが・・・。");
	一時停止();
	クリア();
次へ(出会い);
};
出会い = function(){
台詞(プレイヤーの名前+"[まぁおわったことをぐちぐちいっても仕方がない。");
	一時停止();
	クリア();
台詞("衣食住全部そろってなくてもとりあえず飯代だけでも稼がないとなぁ…」");
	一時停止();
	クリア();
台詞("そう覚悟し、起き上がった時である天使のささやきが聞こえた。");
	一時停止();
	クリア();
台詞("女の子「衣食住付のお仕事ご紹介しましょうか？」");
	一時停止();
	クリア();
台詞("元気いっぱいの天使のささやきが俺の耳には聞こえた。");
	一時停止();
	クリア();
台詞("一瞬幻聴かと思って声のする方へ向いてみた、");
	一時停止();
	クリア();
台詞("するとそこには");
	一時停止();
	クリア();
台詞("メイド服を着た女の子がこちらを見下ろしていた");
	一時停止();
台詞("決して見下していたわけではない、見下ろしていたのだ。");
	一時停止();
	クリア();
台詞("女の子「失礼しました、自己紹介が遅れました。");
	一時停止();
台詞("柊 雪穂 さまのメイドをさせていただいております。");
	一時停止();
台詞("東雲 春夏と申します。」")
	一時停止();
	クリア();
台詞(プレイヤーの名前+"「でそのメイドの東雲さんが仕事をくれると？」");
	一時停止();
	クリア();
台詞("春夏「はい、正確には私の仕えている雪穂さまが雇ってくださればですが。」");
	一時停止();
	クリア();
台詞(プレイヤーの名前+"「衣食住付の仕事を？」");
	一時停止();
	クリア();
台詞("春夏「はい、そのとおりです。」");
	一時停止();
	クリア();
台詞(プレイヤーの名前+"「よしのった！」");
	一時停止();
	クリア();
台詞("俺はこの話に乗ることにした、衣食住困らない仕事だぜ");
	一時停止();
	クリア();
台詞("やっと見つけた条件に当てはまる仕事にありつけるかもしれない、");
	一時停止();
	クリア();
台詞("そんなうれしい気持ちで");
	一時停止();
	クリア();
台詞("おなかがすいているのも忘れてよろこびいっぱいだった。");
	一時停止();
	クリア();
};
