let youtuber = {
  list: {
    business: {
      youtuber: [
        { name: "リベラル大学", age: 28, teachMoneyManagement() { } },
        { name: "あっちゃん", age: 38, teachHistrory() { } },
      ],
      teach(){}
    },
    entertainment: {
      youtuber: [
        {name:"ヒカキン"},{name:"DAZN"}
      ],
      makeSmile(){}
    }
  },
  plan() { },
  uploadVideo() { }
};

console.log(youtuber.list.business.youtuber[0].name);
