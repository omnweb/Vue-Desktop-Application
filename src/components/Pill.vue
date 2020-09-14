<template>
  <div class="pill">
      <span class="name">{{ name }}</span>
      <span class="amount">{{ amount }}</span>
  </div>
</template>

<script>
export default {
    props: ['name', 'amount']
}
</script>

<style scoped> 
/* Scope significa que o estilo será aplicado apenas neste componente */
    .pill {
       background-color: #2e2e2e;
       color: #fff;
       margin:10px;
       height: 50px;
       border-radius: 30px;
       font-size: 1.3rem;
       font-weight: bold;
       display: flex;
       align-items: center;
    }
    .pill .name {
      margin-left:15px ;
    }
    .pill .amount {
      margin: 10px;
      padding: 5px;
      height: 40px;
      width: 40px;
      border-radius: 20px;
      background-color: #fff;
      color: #2e2e2e;
      font-size: 0.9rem;

      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
</style>