import { useEffect, EffectCallback } from 'react';

export default function useOnMount(effect: EffectCallback) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(effect, []);
};
