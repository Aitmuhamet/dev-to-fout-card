<template>
  <div class="modal-backdrop" @click="$emit('close-modal')"></div>
  <div class="modal">
    <div class="task-descript" v-html="$tr('app.taskDescription')"></div>
    <a
      href="https://www.frontendmentor.io/challenges/four-card-feature-section-weK1eFYK"
      class="task-link"
    >{{ $tr('app.taskLink') }}</a>
  </div>
</template>

<script>
export default {
  emits: ['close-modal'],
  inject: ['toggleLang']
}
</script>

<style lang="scss" scoped></style>