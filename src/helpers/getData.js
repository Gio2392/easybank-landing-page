import data from '../data/data.json';

export const getData = () => {
  const { nav, hero, profits, blog, footer } = data.landing_info;

  return {
    nav,
    hero,
    profits,
    blog,
    footer,
  };
};
