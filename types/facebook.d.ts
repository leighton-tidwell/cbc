interface Window {
  FB: {
    init: (params: { xfbml?: boolean; version: string }) => void;
    XFBML: {
      parse: (element?: HTMLElement) => void;
    };
  };
  fbAsyncInit: () => void;
}
