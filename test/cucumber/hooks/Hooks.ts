import { Before, setDefaultTimeout } from '@cucumber/cucumber';

Before(
  async (): Promise<void> => {
    setDefaultTimeout( 30000 );
  },
);
