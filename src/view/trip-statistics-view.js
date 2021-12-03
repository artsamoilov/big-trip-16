import AbstractView from './abstract-view.js';

const createTripStatistics = () => (
  `<section class="statistics">
    <h2 class="visually-hidden">Trip statistics</h2>

    <img src="img/big-trip-stats-markup.png" alt="Пример диаграмм">

    <div class="statistics__item">
      <canvas class="statistics__chart" id="money" width="900"></canvas>
    </div>

    <div class="statistics__item">
      <canvas class="statistics__chart" id="type" width="900"></canvas>
    </div>

    <div class="statistics__item">
      <canvas class="statistics__chart" id="time" width="900"></canvas>
    </div>
  </section>`
);

export default class TripStatisticsView extends AbstractView {
  get template() {
    return createTripStatistics();
  }
}
