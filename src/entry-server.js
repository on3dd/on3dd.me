import { createApp } from './main';

export default context => {
  return new Promise((resolve, reject) => {
    const { app, router } = createApp();

    router.push(context.url);

    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents();
      if (!matchedComponents.length) {
        return reject(new Error('no components matched'));
      }

      Promise.all(
        matchedComponents.map(component => {
          if (component.asyncData) {
            return component.asyncData({
              route: router.currentRoute,
            });
          }
        }),
      );
      resolve(app);
    }, reject);
  });
};
