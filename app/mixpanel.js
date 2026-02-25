import mixpanel from 'mixpanel-browser';

// Initialize Mixpanel
mixpanel.init('276726671468ea8f065221836c3f4b9a', {
  autocapture: true,
  record_sessions_percent: 0,
});

export default mixpanel;
