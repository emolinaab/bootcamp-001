const layout = [
    ['a', 'b', 'c', 'd', 'e', '1', '2', '3'],
    ['f', 'g', 'h', 'i', 'j', '4', '5', '6'],
    ['k', 'l', 'm', 'n', 'o', '7', '8', '9'],
    ['p', 'q', 'r', 's', 't', '.', '@', '0'],
    ['u', 'v', 'w', 'x', 'y', 'z', '_', '/']
  ];
  

  function mapLayout(layout) {
    return layout.map((row, x) => {
      return row.reduce((res, char, y) => {
        res[char] = { x, y };
        return res;
      }, []);
    });
  }
  
  function textMap(text, layoutMap) {
    return text.split('')
      .map(letter => layoutMap.reduce(
        (coord, row) => {
          if(row[letter]) coord = row[letter];
          return coord;
        }, {})
       );
  }
  function tvRemote(text) {
    let init = { x:0, y:0 };
    return textMap(text, mapLayout(layout))
      .reduce((sums, coord) => {
        const diffX = Math.abs(coord.x - init.x);
        const diffY = Math.abs(coord.y - init.y);
      
        sums.push(diffX + diffY + 1);
        init = coord;
        return sums;
      }, [])
      .reduce((tot, sum) => tot + sum, 0);
  }
  
  console.log(mapLayout(layout));