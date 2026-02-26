import mixpanel from 'mixpanel-browser';

let initialized = false;

function ensureInit() {
  if (initialized || typeof window === 'undefined') return;
  mixpanel.init('276726671468ea8f065221836c3f4b9a', {
    autocapture: true,
    record_sessions_percent: 20,
    record_heatmap_data: true,
  });
  mixpanel.identify(mixpanel.get_distinct_id());
  mixpanel.people.set({
    $name: 'Anonymous User',
    platform: navigator.platform,
    screen_width: screen.width,
    screen_height: screen.height,
  });
  initialized = true;
}

const mp = new Proxy(mixpanel, {
  get(target, prop) {
    ensureInit();
    return target[prop];
  },
});

export default mp;
