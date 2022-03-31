<template>
  <header>
    <img src="../assets/img/facebook.png" alt="LOGO" />
    <span class="name">Hi</span>
    <span class="acc">Hello Cyso</span>
    <span class="more">More</span>
  </header>
</template>

<style scoped>
header {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  background-color: rgb(171, 230, 179);
  width: 100%;
  height: 135px;
  color: rgb(82, 23, 109);
}
.name,
.acc,
.more {
  align-self: flex-end;
}

img {
  flex: 0.5;
}

.name {
  flex: 6.5;
  align-content: center;
  justify-items: center;
  font-size: 300%;
}

.acc {
  flex: 2;
  font-style: italic;
  text-align: left;
  font-size: 20px;
}
</style>