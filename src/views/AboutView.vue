<template>
  <p>{{ accountInUSD }}</p>
</template>

<script>
export default {
  props: {
    accountBalance: "123000"
  },
  computed: {
    accountInUSD() {
      return '$' + this.accountBalance
    }
  }
}
</script>