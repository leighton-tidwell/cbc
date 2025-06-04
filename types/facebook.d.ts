interface Window {
  FB: {
    init: (params: {
      appId?: string;
      xfbml?: boolean;
      version: string;
    }) => void;
    XFBML: {
      parse: (element?: HTMLElement) => void;
    };
  };
  fbAsyncInit: () => void;
}
