import dayjs from 'dayjs';

export const createTripEvent = ({basePrice, dateFrom, dateTo, destination, isFavorite, offers, type}) => {
  const startTime = dayjs(dateFrom);
  const endTime = dayjs(dateTo);

  const getTimeDifference = () => {
    const timeDifference = endTime.diff(startTime, 'minutes');
    const minutesDifference = timeDifference % 60 > 0 ? `${timeDifference % 60}M` : '';
    const hoursDifference = Math.floor(timeDifference / 60) % 24 > 0 ? `${Math.floor(timeDifference / 60) % 24}H ` : '';
    const daysDifference = Math.floor((timeDifference / 60) / 24) > 0 ? `${Math.floor((timeDifference / 60) / 24)}D ` : '';
    return daysDifference + hoursDifference + minutesDifference;
  };

  const getOfferNodes = () => {
    if (offers.offers.length > 0) {
      const offersList = [];
      for (const offer of offers.offers) {
        offersList.push(
          `<li class="event__offer">
            <span class="event__offer-title">${offer.title}</span>
            &plus;&euro;&nbsp;
            <span class="event__offer-price">${offer.price}</span>
          </li>`);
      }
      return offersList.join('');
    }
    return '';
  };

  return `<li class="trip-events__item">
    <div class="event">
      <time class="event__date" datetime="${startTime.format('YYYY-MM-DD')}">${startTime.format('MMM DD')}</time>
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${type} ${destination.name}</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="${startTime.format('YYYY-MM-DDTHH:mm')}">${startTime.format('HH:mm')}</time>
          &mdash;
          <time class="event__end-time" datetime="${endTime.format('YYYY-MM-DDTHH:mm')}">${endTime.format('HH:mm')}</time>
        </p>
        <p class="event__duration">${getTimeDifference()}</p>
      </div>
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
      </p>
      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
        ${getOfferNodes()}
      </ul>
      <button class="event__favorite-btn${isFavorite ? ' event__favorite-btn--active' : ''}" type="button">
        <span class="visually-hidden">Add to favorite</span>
        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
        </svg>
      </button>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>`;
};
