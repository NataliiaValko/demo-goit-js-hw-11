import iziToast from 'izitoast';

import { getImagesByQuery } from './js/pixabay-api';
import icon from './img/icon.svg';

import 'izitoast/dist/css/iziToast.min.css';
import {
  clearGallery,
  createGallery,
  hideLoader,
  showLoader,
} from './js/render-functions';

const formEl = document.querySelector('.search-form');

function handleSubmit(event) {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.target));

  if (data.message === '') {
    return;
  }

  showLoader();
  clearGallery();

  getImagesByQuery(data.message)
    .then(({ hits: results }) => {
      if (results.length === 0) {
        iziToast.error({
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          maxWidth: '432px',
          backgroundColor: '#EF4040',
          messageColor: '#FAFAFB',
          iconColor: '#FAFAFB',
          iconUrl: icon,
          titleSize: '16px',
          titleLineHeight: '24px',
          progressBarColor: '#B51B1B',
        });
        return;
      }

      createGallery(results);
    })
    .catch(err => {
      iziToast.error({
        position: 'topRight',
        message: 'Error!!!',
        maxWidth: '432px',
        titleSize: '16px',
        titleLineHeight: '24px',
      });
    })
    .finally(() => {
      hideLoader();
    });
}

formEl.addEventListener('submit', handleSubmit);
