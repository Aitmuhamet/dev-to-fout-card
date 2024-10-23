<template>
  <div class="cards">
    <!-- Первый блок с одной карточкой -->
    <div class="cards__block cards__block--single">
      <div class="card card--first">
        <h2 class="card__title">{{ $tr('app.card1.title') }}</h2>
        <p class="card__text">{{ $tr('app.card1.text') }}</p>
        <img
          class="card__icon"
          src="./../assets/icon-supervisor.svg"
          alt="Supervisor Icon"
        >
      </div>
    </div>

    <!-- Второй блок с двумя карточками -->
    <div class="cards__block cards__block--double">
      <div class="card card--second">
        <h2 class="card__title">{{ $tr('app.card2.title') }}</h2>
        <p class="card__text">{{ $tr('app.card2.text') }}</p>
        <img
          class="card__icon"
          src="./../assets/icon-team-builder.svg"
          alt="Team Builder Icon"
        >
      </div>

      <div class="card card--third">
        <h2 class="card__title">{{ $tr('app.card3.title') }}</h2>
        <p class="card__text">{{ $tr('app.card3.text') }}</p>
        <img
          class="card__icon"
          src="./../assets/icon-karma.svg"
          alt="Karma Icon"
        >
      </div>
    </div>

    <!-- Третий блок с одной карточкой -->
    <div class="cards__block cards__block--single">
      <div class="card card--fourth">
        <h2 class="card__title">{{ $tr('app.card4.title') }}</h2>
        <p class="card__text">{{ $tr('app.card4.text') }}</p>
        <img
          class="card__icon"
          src="./../assets/icon-calculator.svg"
          alt="Calculator Icon"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  inject: ['toggleLang']
}
</script>

<style lang="scss" scoped>
.cards {
  flex: 1 0 auto;
  display: flex;
  justify-content: center;
  gap: var(--gap);
  flex-wrap: wrap;

  @media (min-width: 768px) {
    align-content: center;
  }
}

.cards__block {
  display: contents;
  flex-direction: column;
  justify-content: center;
  gap: var(--gap);

  @media (min-width: 992px) {
    display: flex;
  }
}

// ================ AppCard
.card {
  // border-top: 3px solid black;
  cursor: pointer;
  flex: 1 0 50%;
  border-radius: 8px;
  overflow: hidden;

  max-width: 300px;
  width: 100%;
  height: 180px;
  padding: var(--padding);

  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: start;

  -webkit-box-shadow: -2px 4px 29px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: -2px 4px 29px 0px rgba(34, 60, 80, 0.2);
  box-shadow: -2px 4px 29px 0px rgba(34, 60, 80, 0.2);

  position: relative;
  transition: transform 300ms;

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    left: 0;
    bottom: 0;
    position: absolute;
    z-index: 10;
    background-image: linear-gradient(to bottom,
        transparent 0%,
        transparent 98%,
        rgb(var(--text-color), .8) 98%,
        rgb(var(--text-color), .8) 100%,
      );
    background-repeat: no-repeat;
    background-size: 0 100%;
    background-position-x: right;

    transition: background-size 300ms;

  }

  &:hover::after {
    background-size: 100% 100%;
    background-position-x: left;
  }
  &:hover {
    transform: scale(1.1);
  } 

  &--first {
    background-image: linear-gradient(to top,
        transparent 0%,
        transparent 98%,
        rgb(var(--card-bg-first)) 98%,
        rgb(var(--card-bg-first)) 100%,
      );
  }

  &--second {
    background-image: linear-gradient(to top,
        transparent 0%,
        transparent 98%,
        rgb(var(--card-bg-second)) 98%,
        rgb(var(--card-bg-second)) 100%,
      );
  }

  &--third {
    background-image: linear-gradient(to top,
        transparent 0%,
        transparent 98%,
        rgb(var(--card-bg-third)) 98%,
        rgb(var(--card-bg-third)) 100%,
      );
  }

  &--fourth {
    background-image: linear-gradient(to top,
        transparent 0%,
        transparent 98%,
        rgb(var(--card-bg-fourth)) 98%,
        rgb(var(--card-bg-fourth)) 100%,
      );
  }


  @media (min-width: 768px) {
    flex: unset;
    max-width: 250px;
    height: 200px;
  }

  @media (min-width: 1200px) {
    max-width: 300px;
  }
}

.card__title {
  font-size: 18px;

  margin: 0;
}

.card__text {
  font-size: 13px;
  line-height: 150%;
  color: rgba(var(--text-color), .5);
}

.card__icon {
  margin-top: auto;
  margin-left: auto;
  width: 40px;

  @media (min-width: 768px) {
    width: 60px;
  }
}
</style>