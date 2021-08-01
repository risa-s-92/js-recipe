new Vue({
  el: "#app",
  data: {
    nyuryokugaku: 0,
    zandaka: 0,
    logs: [],
  },
  methods: {
    nyukin: function() {
      this.zandaka += Number(this.nyuryokugaku)
      this.logs.push({
        date: new Date(),
        type: "入金",
        money: Number(this.nyuryokugaku),
      })
    },
    syukkin: function() {
      this.zandaka -= Number(this.nyuryokugaku)
      this.logs.push({
        date: new Date(),
        type: "出金",
        money: Number(this.nyuryokugaku),
      })
    },
  },
})
