function calories(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i += 2) {
        obj[arr[i]] = Number(arr[i + 1]);
    }
    console.log(obj);

}

calories(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
calories(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);