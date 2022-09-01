function duplicateSandwich(a) {
    for (let i = 0; i < a.length; i++)
      if (i != a.lastIndexOf(a[i])) return a.slice(i + 1, a.lastIndexOf(a[i]))
  }