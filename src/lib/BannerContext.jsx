import React, { createContext, useContext, useState } from 'react';

const BannerCtx = createContext({ visible: false, setVisible: () => {} });

export function BannerProvider({ children }) {
  const [visible, setVisible] = useState(false);
  return <BannerCtx.Provider value={{ visible, setVisible }}>{children}</BannerCtx.Provider>;
}

export const useBanner = () => useContext(BannerCtx);