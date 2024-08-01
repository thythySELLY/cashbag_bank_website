import { homeRepository } from '@/repository';

const setColor = async () => {
  try {
    const data = await homeRepository.get('/api/colors');
    const color: string = `#${data?.data.colors[8].hex}`;

    if (!color) {
      throw new Error('Color not found');
    }

    const cssClass = `.color { color: ${color}; }\n`;

    let styleElement = document.getElementById(
      'dynamic-styles',
    ) as HTMLStyleElement;

    if (!styleElement) {
      styleElement = document.createElement('style');
      styleElement.id = 'dynamic-styles';
      document.head.appendChild(styleElement);
    }

    if (styleElement.innerHTML.includes('.color {')) {
      styleElement.innerHTML = styleElement.innerHTML.replace(
        /\.color\s*{[^}]*}/,
        cssClass,
      );
    } else {
      styleElement.innerHTML += cssClass;
    }

    console.log(`Updated color to ${color}`);
  } catch (error) {
    console.error('Error updating color:', error);
  }
};

export default setColor;
