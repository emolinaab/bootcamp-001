function smallEnough(a, limit) {
  return !a.some((e) => e > limit);
}
