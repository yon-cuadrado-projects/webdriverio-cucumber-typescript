export default interface CommandLineParameters {
  [x: string]: unknown;
  _: ( string | number )[];
  $0: string;
  browser: string;
  debug: boolean;
  maxInstances: number;
}
