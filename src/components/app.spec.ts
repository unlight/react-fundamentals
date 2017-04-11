import { App } from './app';

describe('test', () => {

    it('smoke test', () => {
        expect(1).toBeTruthy();
    });

    it('app component test', () => {
        let appc = new App();
        appc.render();
    });
});
