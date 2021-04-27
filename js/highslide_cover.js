hs.graphicsDir = '/images/highslide/graphics/';
hs.outlineType = 'rounded-white';
hs.outlineWhileAnimating = true;
hs.creditsText  = '';
hs.creditsHref  = '';
hs.creditsTitle = '';
hs.loadingText  = 'Загрузка';
hs.restoreTitle = 'Кликните или схватите картинку.';

// функция, которая закрывает все expanders
function closeAllExpanders ()
{
  for (i = 0; i < hs.expanders.length; i++) {
    if (hs.expanders[i]) {
      hs.expanders[i].doClose(); 
    }
  }
}