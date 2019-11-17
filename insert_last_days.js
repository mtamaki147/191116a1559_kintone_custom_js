// https://developer.cybozu.io/hc/ja/articles/201941954#step2
// イベントハンドラーの登録を実行する
var handler = function(event) {
    console.log(event);
};
kintone.events.on('app.record.index.show', handler);
