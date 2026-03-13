export const { error, log, warn } = console,
  peek = (...args: unknown[]) => {
    log(...args);
    return args.pop();
  };
