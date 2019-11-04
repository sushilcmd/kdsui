const kotScreen = new function() {
    this.show = function() {
        execute('order', {}).then(function(res) {
            console.log(res);
            render('.kotContainer', 'kot', res["data"])
        })
    }
}