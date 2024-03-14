// src/utils/importImages.js
export const importImages = () => {
    const images = {};
    const importAll = (r) => {
        r.keys().forEach((key) => (images[key.replace('./', '')] = r(key)));
    };
    importAll(require.context('../assets/imagenes', false, /\.(png|jpe?g|svg)$/));
    return {
        images
    };
};
