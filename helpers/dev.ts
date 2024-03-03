type DevConsoleFunctions = {
  log: (...message: string[]) => void;
  info: (...message: string[]) => void;
  warn: (...message: string[]) => void;
  error: (...message: string[]) => void;
};

const DevLog: DevConsoleFunctions = {
  log: (...message) => {
    if (process.env.NODE_ENV === 'production') return;
    console.log('[DEV]', ...message);
  },
  info: (...message) => {
    if (process.env.NODE_ENV === 'production') return;
    console.info('[DEV INFO]', ...message);
  },
  warn: (...message) => {
    if (process.env.NODE_ENV === 'production') return;
    console.warn('[DEV WARNING]', ...message);
  },
  error: (...message) => {
    if (process.env.NODE_ENV === 'production') return;
    console.error('[DEV ERROR]', ...message);
  },
};

module.exports = {
  DevLog,
};
