<template>
    <ul>
      <li class="rotate-right"></li>
      <li class="rotate-left"></li>
      <li class="rotate-right"></li>
      <li class="rotate-left"></li>
      <li class="rotate-right"></li>
      <li class="rotate-left"></li>
    </ul>
  </template>
  
  <script>
  export default {
    name: 'MyComponent',
  };
  </script>
  
  <style scoped>
  ul {
    list-style: none;
    padding: 0;
    display: flex;
  }
  
  li {
    background-color: var(--box-color, rgba(255, 255, 0, 0.908));
    height: 30px;
    width: 2px;
    margin: 0 5px;
  }
  
  .rotate-right {
    transform: rotate(25deg);
  }
  
  .rotate-left {
    transform: rotate(155deg);
  }
  </style>
  