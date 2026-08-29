let resolveIntro: (() => void) | null = null;

export const introReady = new Promise<void>((resolve) => {
  resolveIntro = resolve;
});

export const finishIntro = () => {
  if (resolveIntro) {
    resolveIntro();
    resolveIntro = null;
  }
};
