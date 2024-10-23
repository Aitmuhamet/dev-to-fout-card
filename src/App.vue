<template>
  <div class="container">
    <div class="app__inner">

      <button
        class="btn show-modal"
        @click="isModalOpen = true"
      >
        ⌂
      </button>

      <teleport to='#modal'>
      <app-modal
        v-if="isModalOpen"
        @close-modal="closeModal"
      ></app-modal>
      </teleport>

      <button
        class="btn app__btn"
        @click="changeLanguage"
      >{{ lang }}</button>


      <!-- Блок с текстом -->
      <div class="text-block">
        <h1 class="text-block__title">
          {{ $tr('app.textTitle') }} <span class="text-block__title--highlight">{{ $tr('app.textTitleHighlight')
            }}</span>
        </h1>
        <p class="text-block__subtitle">{{ $tr('app.textSubtitle') }}</p>
      </div>

      <!-- Блок с карточками -->
      <cards-block :key="cardsBlockKey"></cards-block>
    </div>
  </div>

</template>

<script>
import CardsBlock from './components/AppCardsBlock.vue';
import AppModal from './components/AppModal.vue';


export default {
  name: 'App',
  data() {
    return {
      lang: 'en',
      cardsBlockKey: 0,
      isModalOpen: false
    }
  },
  inject: ['toggleLang'],
  methods: {
    changeLanguage() {
      this.lang = this.lang = this.lang === 'ru' ? 'en' : 'ru'
      this.toggleLang(this.lang);
      this.$forceUpdate();
      this.cardsBlockKey += 1;
    },
    closeModal() {
      this.isModalOpen = false
    }
  },
  components: {
    CardsBlock, AppModal
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: rgb(var(--bg));

  @media (min-width: 1200px) {
    background-image: url('./assets/bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }
}

.app__btn {
  position: absolute;
  top: 10px;
  right: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 576px) {
    top: 20px;
    right: 20px;
  }
}

.show-modal {
  position: absolute;
  top: 20px;
  left: 20px;
}
</style>
